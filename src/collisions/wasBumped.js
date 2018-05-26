/**
 * Verify possible collisions between an element and all collision blocks.
 * @module collisions/wasBumped
 *
 * @param {object} position - Block position in map.
 * @param {number} position.rowStart - Start row position.
 * @param {number} position.columnStart - Start column position.
 * @param {number} position.rowEnd - End row position.
 * @param {number} position.columnEnd - End column position.
 * @param {array} blocksList - List of blocks for manage collisions.
 *
 * @returns {object} Collision result and collided block.
 *
 */

const wasBumped = (position, blocksList) => {

  let block;

  const result = blocksList.some(currentBlock => {

    const columnStartCollision = position.columnStart === currentBlock.columnStart;
    const columnEndCollision = position.columnEnd === currentBlock.columnEnd;
    const rowStartCollision =  position.rowStart === currentBlock.rowStart;
    const rowEndCollision = position.rowEnd === currentBlock.rowEnd;

    const columnCollision = columnStartCollision && columnEndCollision;
    const rowCollision = rowStartCollision && rowEndCollision;

    block = currentBlock;
    return (columnCollision && rowCollision);

  });

  return {
    result,
    block,
  }

};

export default wasBumped;