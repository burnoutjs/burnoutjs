/**
 * Create a grid-area style with all grid cell positions. 
 * @module stringifyPosition
 * 
 * @param {object} position - Block position in map.
 * @param {number} position.rowStart - Start row position.
 * @param {number} position.columnStart - Start column position.
 * @param {number} position.rowEnd - End row position.
 * @param {number} position.columnEnd - End column position.
 * 
 * @returns {string} A grid-area style with individual positions.
 *
 */

const stringifyPosition = position => {

  return `grid-area: 
            ${position.rowStart} / 
            ${position.columnStart} /
            ${position.rowEnd} /
            ${position.columnEnd}`;

}

export default stringifyPosition;
