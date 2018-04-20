/**
 * Create a DOM element with overflow hidden for crop the map (View or camera).
 * @module createCamera
 *
 * @param {object} configs - Grid layout columns and rows for define the size (relative the map).
 * @param {object} configs.cols - View columns positions.
 * @param {object} configs.rows - View rows positions.
 * @param {number} [blockSize = 20] - Size of all grid blocks.
 * @param {object} [context = window.document] - Context for execute the DOM API.
 *
 * @returns {object} A DOM element with overflow hidden (View or camera).
 *
 */

const createCamera = (configs, blockSize = 20, context = window.document) => {

  const camera = context.createElement('div');

  camera.style = `
    width: ${configs.cols * blockSize}px;
    height: ${configs.rows * blockSize}px;
    border: solid 1px red;
  `;

  return camera;

}

export default createCamera;
