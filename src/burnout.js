import createMap from './createMap';
import createCamera from './createCamera';

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
    mapRef: null
  };

  return {

    /**
     * Create all basic DOM elements (map and view) for position and view the game layout. 
     *
     * @param {object} configs - All configs for Grid layout design.
     * @param {object} configs.containerId - ID for append all dynamic elements.
     * @param {object} configs.blockSize - Size of all grid blocks.
     * @param {object} configs.map - Map columns and rows positions.
     * @param {object} configs.map.cols - Map columns positions.
     * @param {object} configs.map.rows - Map rows positions.
     * @param {object} configs.view - View columns and rows positions.
     * @param {object} configs.view.cols - View columns positions.
     * @param {object} configs.view.rows - View rows positions.
     *
     * param example:
     * 
     * {
     *  containerId: 'myElement',
     *  blockSize: 10,
     *  map: {
     *    cols: 30,
     *    rows: 30,
     *  },
     *  view: {
     *    cols: 15,
     *    rows: 15,
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
    }

  };
  
};

export default burnout();
