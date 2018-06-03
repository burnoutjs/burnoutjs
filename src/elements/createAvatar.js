import stringifyPosition from '../helpers/stringifyPosition';

/**
 * Create a single DOM elements with grid cell style and position in map.
 * @module elements/createAvatar
 * 
 * @param {object} configs - All avatar configs.
 * @param {string} configs.className - The avatar CSS class.
 * @param {object} configs.position - Avatar position in map.
 * @param {number} configs.position.rowStart - Start row position.
 * @param {number} configs.position.columnStart - Start column position.
 * @param {number} configs.position.rowEnd - End row position.
 * @param {number} configs.position.columnEnd - End column position.
 * @param {object} [context = window] - Context for execute the DOM API.
 * 
 * @returns {object} A DOM element with grid layout cell style.
 *
 */

const createAvatar = (configs, context = window) => {

  const avatar = context.document.createElement('div');

  if(configs.className) {
    avatar.classList.add(configs.className);
  }

  if(configs.position) {
    avatar.style = stringifyPosition(configs.position);
  }

  return avatar;

};

export default createAvatar;
