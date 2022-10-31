/**
 * Verify possible collisions between an element and all collision blocks.
 * @module collisions/wasBumped
 *
 * @param {object} currentPosition - Block position in map.
 * @param {number} currentPosition.rowStart - Start row position.
 * @param {number} currentPosition.columnStart - Start column position.
 * @param {number} currentPosition.rowEnd - End row position.
 * @param {number} currentPosition.columnEnd - End column position.
 * @param {array} blocksList - List of blocks for manage collisions.
 *
 * @returns {object} Collision result and collided block.
 *
 */

const wasBumped = (currentPosition, blocksList) => {

  let block;

  const result = blocksList.some(currentBlock => {

    const columnStartCollision = currentPosition.columnStart === currentBlock.columnStart;
    const columnEndCollision = currentPosition.columnEnd === currentBlock.columnEnd;
    const rowStartCollision =  currentPosition.rowStart === currentBlock.rowStart;
    const rowEndCollision = currentPosition.rowEnd === currentBlock.rowEnd;

    const columnCollision = columnStartCollision && columnEndCollision;
    const rowCollision = rowStartCollision && rowEndCollision;

    block = currentBlock;
    return (columnCollision && rowCollision);

  });

  return {
    result,
    block,
  };

};

export default wasBumped;