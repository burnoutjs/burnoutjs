/**
 * Get only block positions (remove all others properties or methods).
 * @module controls/helpers/getBlockPositions
 *
 * @param {object} block - All block configs.
 * @param {number} block.rowStart - Start row position.
 * @param {number} block.columnStart - Start column position.
 * @param {number} block.rowEnd - End row position.
 * @param {number} block.columnEnd - End column position.
 *
 * @returns {object} Only block positions.
 * 
 */

const getBlockPositions = block => {
  return {
    rowStart: block.rowStart, 
    columnStart: block.columnStart, 
    rowEnd: block.rowEnd, 
    columnEnd: block.columnEnd,
  };
};

export default getBlockPositions;