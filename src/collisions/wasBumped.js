/**
 * Verify possible collisions between an element and all collision blocks.
 * @module collisions/wasBumped
 *
 * @param {object} position - Block position in map.
 * @param {number} position.rowStart - Start row position.
 * @param {number} position.columnStart - Start column position.
 * @param {number} position.rowEnd - End row position.
 * @param {number} position.columnEnd - End column position.
 * @param {array} allCollisionBlocks - List of blocks for manage collisions.
 *
 * @returns {boolean} Collision result.
 *
 */

const wasBumped = (position, allCollisionBlocks) => {
  return allCollisionBlocks.some((block) => {

    const columnStartCollision = position.columnStart === block.columnStart;
    const columnEndCollision = position.columnEnd === block.columnEnd;
    const rowStartCollision =  position.rowStart === block.rowStart;
    const rowEndCollision = position.rowEnd === block.rowEnd;

    const columnCollision = columnStartCollision && columnEndCollision;
    const rowCollision = rowStartCollision && rowEndCollision;

    return (columnCollision && rowCollision);
  });
};

export default wasBumped;