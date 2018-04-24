/**
 * Create a DOM element with overflow hidden for crop the map (View or camera).
 * @module elements/createCamera
 *
 * @param {object} configs - Grid layout columns and rows for define the size.
 * @param {number} configs.cols - View columns positions.
 * @param {number} configs.rows - View rows positions.
 * @param {number} [blockSize = 20] - Size of all grid blocks.
 * @param {object} [context = window] - Context for execute the DOM API.
 *
 * @returns {object} A DOM element with overflow hidden (View or camera).
 *
 */

const createCamera = (configs, blockSize = 20, context = window) => {

  const camera = context.document.createElement('div');

  camera.style = `
    width: ${configs.cols * blockSize}px;
    height: ${configs.rows * blockSize}px;
  `;

  return camera;

};

export default createCamera;
