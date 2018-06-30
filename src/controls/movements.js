import allAxis from './helpers/allAxis';
import wasBumped from '../collisions/wasBumped';
import stringifyTranslate from '../helpers/stringifyTranslate';
import stringifyPosition from '../helpers/stringifyPosition';
import getBlockPositions from './helpers/getBlockPositions';

/**
 * Create all core controls and expose for plugins.
 * @module controls/movements
 *
 * @param {object} avatar - All Avatar configs.
 * @param {object} avatar.ref - Avatar DOM reference.
 * @param {boolean} avatar.static - Avatar static position in the map.
 * @param {object} avatar.startPosition - Avatar position in map.
 * @param {number} avatar.startPosition.rowStart - Start row position.
 * @param {number} avatar.startPosition.columnStart - Start column position.
 * @param {number} avatar.startPosition.rowEnd - End row position.
 * @param {number} avatar.startPosition.columnEnd - End column position.
 * @param {object} avatar.side - All classNames for avatar sprites.
 * @param {string} avatar.side.up - ClassName for up sprite.
 * @param {string} avatar.side.down - ClassName for down sprite.
 * @param {string} avatar.side.left - ClassName for left sprite.
 * @param {string} avatar.side.right - ClassName for right sprite.
 * @param {object} map - Map DOM reference.
 * @param {array} collisionBlocksPositions - List of blocks for collisions.
 * @param {array} overBlocksPositions - List of blocks to over.
 * @param {number} blockSize - Size of all grid blocks.
 *
 * @returns {object} All movements methods.
 * 
 */

const movements = (
  avatar,
  map,
  collisionBlocksPositions,
  overBlocksPositions,
  blockSize) => {

  // -----------------------------------------
  // Movements local states
  // -----------------------------------------

  const states = {
    currentAvatarPosition: avatar.startPosition,
    currentAvatarSide: null,
    currentCameraPosition: {
      x: 0,
      y: 0,
    },
  };

  // -----------------------------------------
  // Single movement function
  // -----------------------------------------

  /**
   * Create a single movement method.
   *
   * @param {object} axis - A single axis config.
   * @param {string} axis.side - The axis direction.
   * @param {function} axis.movement - The (grid position) movement method.
   * @param {function} axis.updatedCameraPositionState - Update camera position state method.
   *
   * @returns {function} A single game movement.
   * 
   */

  const movement = axis => {

    return () => {

      /**
      * Set the avatar side.
      */
  
      const noUpSide = avatar.side && !(states.currentAvatarSide === axis.side);
  
      if(noUpSide) {
        avatar.ref.className = avatar.side[axis.side];
        states.currentAvatarSide = axis.side;
      }
  
      /**
      * Get the future position.
      */
  
      const newPosition = axis.movement(states.currentAvatarPosition);
  
      /**
      * Check collision.
      */
  
      const collision = wasBumped(newPosition, collisionBlocksPositions);
  
      if (collision.result) {
        if(collision.block.action) {
          const onlyBlockPositions = getBlockPositions(collision.block);  
          return collision.block.action(onlyBlockPositions); // Collision callback
        }
        return false; // Stop movement
      };
  
      /**
      * Move map.
      */
  
      if (avatar.static) {
        axis.updatedCameraPositionState(states.currentCameraPosition, blockSize);
        map.style.transform = stringifyTranslate(states.currentCameraPosition); // Map movement
      }
  
      /**
      * Move avatar.
      */
  
      avatar.ref.style = stringifyPosition(newPosition); // Avatar up movement
      states.currentAvatarPosition = newPosition;
  
      /**
      * Check over.
      */
  
      const over = wasBumped(newPosition, overBlocksPositions);
  
      if (over.result && over.block.action) {
        const onlyBlockPositions =  getBlockPositions(over.block)
        return over.block.action(onlyBlockPositions); // Over callback
      };
  
      return true;
  
    }
  }

  // -----------------------------------------
  // All movements methods
  // -----------------------------------------

  return {
    up: movement(allAxis[0]),
    down: movement(allAxis[1]),
    left: movement(allAxis[2]),
    right: movement(allAxis[3]),
  }

};

export default movements;