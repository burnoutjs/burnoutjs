/**
 * Create a DOM element with Grid Layout container styles (map).
 * @module elements/createMap
 *
 * @param {object} configs - Grid layout columns and rows.
 * @param {number} configs.cols - Map columns positions.
 * @param {number} configs.rows - Map rows positions.
 * @param {number} [blockSize = 20] - Size of all grid blocks.
 * @param {object} [context = window] - Context for execute the DOM API.
 *
 * @returns {object} A DOM element with grid layout container styles (map).
 *
 */

const createMap = (configs, blockSize = 20, context = window) => {

  const map = context.document.createElement('div');

  map.style = `
    display: grid;
    grid-template-columns: repeat(${configs.cols}, ${blockSize}px);
    grid-template-rows: repeat(${configs.rows}, ${blockSize}px);
    width: ${configs.cols * blockSize}px;
    height: ${configs.rows * blockSize}px;
    border: 1px solid;
  `;

  return map;

};

export default createMap;
