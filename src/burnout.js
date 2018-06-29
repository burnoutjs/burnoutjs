import createMap from './elements/createMap';
import createCamera from './elements/createCamera';
import createBlock from './elements/createBlock';
import createAvatar from './elements/createAvatar';
import movements from './controls/movements';
import stringifyPosition from './helpers/stringifyPosition';

/**
 * Wrapper function for 2D game engine for manage collisions.
 *
 * @returns {object} List of methods for create and controls a 2d game.
 *
 */

const burnout = () => {

  /**
   * @constant states - Store all states
   * @type {object}
  */

  const states = {
    mapRef: null,
    viewRef: null,
    blocksRefs: [],
    collisionBlocksPositions: [],
    overBlocksPositions: [],
    blockSize: null,
    avatar: {
      ref: null,
      startPosition: null,
      side: null,
      static: true,
    },
  };

  return {

    /**
     * Create all basic DOM elements (map and view)
     * for position and view the game layout.
     *
     * @param {object} configs - All configs for Grid layout design.
     * @param {boolean} developer - Developer mode
     * @param {number} configs.blockSize - Size of all grid blocks.
     * @param {object} configs.map - Map columns and rows positions.
     * @param {number} configs.map.cols - Map columns positions.
     * @param {number} configs.map.rows - Map rows positions.
     * @param {object} configs.view - View columns and rows positions.
     * @param {number} configs.view.cols - View columns positions.
     * @param {number} configs.view.rows - View rows positions.
     *
     * param example:
     *
     * {
     *  blockSize: 10,
     *  map: {
     *   cols: 30,
     *   rows: 30,
     *  },
     *  view: {
     *   cols: 15,
     *   rows: 15,
     *  },
     * }
     */

    defineMap: configs => {
      const map = createMap(configs.map, configs.blockSize);
      const view = createCamera(configs.view, configs.blockSize);

      if (configs.developer) {
        map.style.border = `1px solid`;
        view.style.border = `1px solid red`;
        view.style.overflow = `visible`;
      }

      view.appendChild(map);

      states.viewRef = view;
      states.mapRef = map;
      states.blockSize = configs.blockSize;
    },

    /**
     * Create a block and register for collision.
     *
     * @param {object} configs - All block configs.
     * @param {string} configs.className - The block CSS class.
     * @param {boolean} configs.collision - Register for collisions.
     * @param {boolean} configs.over - Register to over.
     * @param {object} configs.position - Block position in map.
     * @param {number} configs.position.rowStart - Start row position.
     * @param {number} configs.position.columnStart - Start column position.
     * @param {number} configs.position.rowEnd - End row position.
     * @param {number} configs.position.columnEnd - End column position.
     * @param {function} configs.position.action - Action for over or collision callbacks.
     *
     * param example:
     *
     * {
     *  className: 'block-a',
     *  collision: true,
     *  position: {
     *   rowStart: 20,
     *   columnStart: 20,
     *   rowEnd: 21,
     *   columnEnd: 21,
     *   action: () => console.log('Collided'),
     *  }
     * }
     */

    defineBlock: configs => {
      const block = createBlock(configs);

      if (configs.collision) {
        states.collisionBlocksPositions.push(configs.position);
      }

      if (configs.over) {
        states.overBlocksPositions.push(configs.position);
      }

      states.blocksRefs.push(block);
    },

    /**
     * Create the avatar.
     *
     * @param {object} configs - All avatar configs.
     * @param {string} configs.className - The avatar CSS class.
     * @param {boolean} configs.static - Avatar static position in the map.
     * @param {object} configs.position - Avatar position in map.
     * @param {number} configs.position.rowStart - Start row position.
     * @param {number} configs.position.columnStart - Start column position.
     * @param {number} configs.position.rowEnd - End row position.
     * @param {number} configs.position.columnEnd - End column position.
     *
     * param example:
     *
     * {
     *  className: 'ash',
     *  side: {
     *    up: 'ash--up',
     *    down: 'ash--down',
     *    left: 'ash--left',
     *    right: 'ash--right',
     *  },
     *  position: {
     *   rowStart: 20,
     *   columnStart: 20,
     *   rowEnd: 21,
     *   columnEnd: 21,
     *  }
     * }
     */

    defineAvatar: configs => {
      const avatar = createAvatar(configs);

      states.avatar.ref = avatar;
      states.avatar.startPosition = configs.position;
      states.avatar.side = configs.side;
      states.avatar.static = configs.static;
    },

    /**
     * Mount all map, append in the DOM and set game controls.
     *
     * @param {object} container - DOM element for append all dynamic elements.
     *
     */

    renderMap: container => {
      states.blocksRefs.forEach(block => {
        states.mapRef.appendChild(block);
      });

      states.mapRef.appendChild(states.avatar.ref);
      container.appendChild(states.viewRef);
    },

    /**
     * Define all game controls.
     *
     * @param controlPlugin - The external plugin for mange all game controls.
     *
     */

    defineControlsPlugin: controlPlugin => {
      if(!controlPlugin) {
        return console.error('Burnout: No plugin added in defineControls() method');
      }

      const coreControls = movements(
        states.avatar,
        states.mapRef,
        states.collisionBlocksPositions,
        states.overBlocksPositions,
        states.blockSize
      );

      controlPlugin(coreControls);
    },

    /**
     * Get the avatar DOM reference.
     *
     * @returns {object} Avatar DOM element.
     *
     */

    getAvatar: () => states.avatar.ref,

    /**
     * Get the map DOM reference.
     *
     * @returns {object} Map DOM element.
     *
     */

    getMap: () => states.mapRef,

    /**
     * Get the view DOM reference.
     *
     * @returns {object} View DOM element.
     *
     */

    getView: () => states.viewRef,

    /**
     * Get the specific block DOM reference.
     *
     * @param {object} configs.position - Block position in map.
     * @param {number} configs.position.rowStart - Start row position.
     * @param {number} configs.position.columnStart - Start column position.
     * @param {number} configs.position.rowEnd - End row position.
     * @param {number} configs.position.columnEnd - End column position.
     *
     * param example:
     *
     * {
     *  rowStart: 20,
     *  columnStart: 20,
     *  rowEnd: 21,
     *  columnEnd: 21,
     * }
     *
     * @returns {object} Block DOM element.
     *
     */

    getBlock: positions => {
      const newBlock = states.blocksRefs.filter((block) => {

        const stringPositions = stringifyPosition(positions)
                                 .replace(/\s/g,''); // Remove whitespace

        const blockStringPositions = block
                                      .style
                                      .cssText
                                      .replace(/\s/g,'') // Remove whitespace
                                      .replace(/\;/g,''); // Remove semicolons

        return stringPositions == blockStringPositions;

      });

      return newBlock[0];
    },

  };

};

export default burnout();
