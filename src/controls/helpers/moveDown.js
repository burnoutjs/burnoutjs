/**
 * Change the Grid Layout positions for move the avatar in map (to down).
 * @module controls/helpers/moveDown
 *
 * @param {object} currentPosition - Avatar position in map.
 * @param {number} position.rowStart - Start row position.
 * @param {number} position.columnStart - Start column position.
 * @param {number} position.rowEnd - End row position.
 * @param {number} position.columnEnd - End column position.
 *
 * @returns {object} New positions in Grid Layout.
 *
 */

const moveDown = currentPosition => {
  return {
    rowStart: currentPosition.rowStart + 1,
    columnStart: currentPosition.columnStart,
    rowEnd: currentPosition.rowEnd + 1,
    columnEnd: currentPosition.columnEnd,
  };
};

export default moveDown;