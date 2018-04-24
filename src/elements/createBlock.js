import stringifyPosition from '../helpers/stringifyPosition';

/**
 * Create a single DOM elements (block)
 * with grid cell style and position in map. 
 * @module elements/createBlock
 * 
 * @param {object} configs - All block configs.
 * @param {string} configs.className - The block CSS class.
 * @param {boolean} configs.collision - Register for collisons.
 * @param {object} configs.position - Block position in map.
 * @param {number} configs.position.rowStart - Start row position.
 * @param {number} configs.position.columnStart - Start column position.
 * @param {number} configs.position.rowEnd - End row position.
 * @param {number} configs.position.columnEnd - End column position.
 * @param {object} [context = window] - Context for execute the DOM API.
 * 
 * @returns {object} A DOM element with grid layout cell style.
 *
 */

const createBlock = (configs, context = window) => {

  const block = context.document.createElement('div');

  block.classList.add(configs.className);
  block.style = stringifyPosition(configs.position);

  return block;

};

export default createBlock;
