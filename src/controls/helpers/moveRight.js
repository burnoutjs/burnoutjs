/**
 * Change the Grid Layout positions for move the avatar in map (to right).
 * @module controls/helpers/moveRight
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

const moveRight = currentPosition => {
  return {
    rowStart: currentPosition.rowStart,
    columnStart: currentPosition.columnStart + 1,
    rowEnd: currentPosition.rowEnd,
    columnEnd: currentPosition.columnEnd + 1,
  };
};

export default moveRight;