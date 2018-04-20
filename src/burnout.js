import createMap from './createMap';
import createCamera from './createCamera';
import createBlock from './createBlock';

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
    collisionBlocks: [],
  };

  return {

    /**
     * Create all basic DOM elements (map and view) for position and view the game layout. 
     *
     * @param {object} configs - All configs for Grid layout design.
     * @param {string} configs.containerId - ID for append all dynamic elements.
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
     *  containerId: 'myElement',
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
      const container = document.getElementById(configs.containerId);
  
      const map = createMap(configs.map, configs.blockSize);
      const view = createCamera(configs.view, configs.blockSize);
  
      view.appendChild(map);
      container.appendChild(view);
  
      states.mapRef = map;
    },

    /**
     * Create a block, register for collision and append in map. 
     *
     * @param {object} configs - All block configs.
     * @param {string} configs.className - The block css class.
     * @param {boolean} configs.collision - Register for collisons.
     * @param {object} configs.position - Block position in map.
     * @param {number} configs.position.rowStart - Start row position.
     * @param {number} configs.position.columnStart - Start column position.
     * @param {number} configs.position.rowEnd - End row position.
     * @param {number} configs.position.columnEnd - End column position.
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
     *  }
     * }
     */

    defineBlock: configs => {
      const block = createBlock(configs);
      
      if (configs.collision) {
        states.collisionBlocks.push(configs.position);
      }
      
      states.mapRef.appendChild(block);
    },

  };

};

export default burnout();
