/**
 * Create a transform:translate style with X and Y positions. 
 * @module helpers/stringifyTranslate
 *
 * @param {object} translate - X and Y translate positions.
 * @param {number} translate.x - X translate position.
 * @param {number} translate.y - Y translate position.
 *
 * @returns {string} A transform:translate style with X and Y positions.
 *
 */

const stringifyTranslate = translate => {
  return `transform: translate(${translate.x}px, ${translate.y}px);`;
};

export default stringifyTranslate;