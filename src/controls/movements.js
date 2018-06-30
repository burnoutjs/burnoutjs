import moveUp from './helpers/moveUp';
import moveDown from './helpers/moveDown';
import moveLeft from './helpers/moveLeft';
import moveRight from './helpers/moveRight';
import wasBumped from '../collisions/wasBumped';
import stringifyTranslate from '../helpers/stringifyTranslate';
import stringifyPosition from '../helpers/stringifyPosition';

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
 */

// TODO: Refactor for improve performance in `map.style = map.style.cssText`.
// TODO: Use meta programing.

const movements = (
  avatar,
  map,
  collisionBlocksPositions,
  overBlocksPositions,
  blockSize) => {

  const states = {
    currentAvatarPosition: avatar.startPosition,
    currentAvatarSide: null,
    currentCameraPosition: {
      x: 0,
      y: 0,
    },
  };

  return {

    /**
     * Up movement core engine.
     *
     * @returns {boolean} The movement result.
     *
     */

    up: () => {

      /**
      * Set the avatar side.
      */

      const noUpSide = avatar.side && !(states.currentAvatarSide === 'up');

      if(noUpSide) {
        avatar.ref.className = avatar.side.up;
        states.currentAvatarSide = 'up';
      }

      /**
      * Get the future position.
      */

      const newPosition = moveUp(states.currentAvatarPosition);

      /**
      * Check collision.
      */

      const collision = wasBumped(newPosition, collisionBlocksPositions);

      if (collision.result) {
        if(collision.block.action) {

          const onlyBlockPositions = {
            rowStart: collision.block.rowStart, 
            columnStart: collision.block.columnStart, 
            rowEnd: collision.block.rowEnd, 
            columnEnd: collision.block.columnEnd,
          }

          return collision.block.action(onlyBlockPositions); // Collision callback
        }
        return false; // Stop movement
      };

      /**
      * Move map.
      */

      if (avatar.static) {
        states.currentCameraPosition.y += blockSize;
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

        const onlyBlockPositions = {
          rowStart: over.block.rowStart, 
          columnStart: over.block.columnStart, 
          rowEnd: over.block.rowEnd, 
          columnEnd: over.block.columnEnd,
        }

        return over.block.action(onlyBlockPositions); // Over callback
      };

      return true;

    },

    /**
     * Down movement core engine.
     *
     * @returns {boolean} The movement result.
     *
     */

    down: () => {

      /**
      * Set the avatar side.
      */

      const noDownSide = avatar.side && !(states.currentAvatarSide === 'down');

      if(noDownSide) {
        avatar.ref.className = avatar.side.down;
        states.currentAvatarSide = 'down';
      }

      /**
       * Get the future position.
       */

      const newPosition = moveDown(states.currentAvatarPosition);

      /**
       * Check collision.
       */

      const collision = wasBumped(newPosition, collisionBlocksPositions);

      if (collision.result) {
        if(collision.block.action) {

          const onlyBlockPositions = {
            rowStart: collision.block.rowStart, 
            columnStart: collision.block.columnStart, 
            rowEnd: collision.block.rowEnd, 
            columnEnd: collision.block.columnEnd,
          }

          return collision.block.action(onlyBlockPositions); // Collision callback
        }
        return false; // Stop movement
      };

      /**
       * Move map.
       */

      if (avatar.static) {
        states.currentCameraPosition.y -= blockSize;
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

        const onlyBlockPositions = {
          rowStart: over.block.rowStart, 
          columnStart: over.block.columnStart, 
          rowEnd: over.block.rowEnd, 
          columnEnd: over.block.columnEnd,
        }

        return over.block.action(onlyBlockPositions); // Over callback
      };

      return true;

    },

    /**
     * Left movement core engine.
     *
     * @returns {boolean} The movement result.
     *
     */

    left: () => {

      /**
      * Set the avatar side.
      */

      const noLeftSide = avatar.side && !(states.currentAvatarSide === 'left');

      if(noLeftSide) {
        avatar.ref.className = avatar.side.left;
        states.currentAvatarSide = 'left';
      }

      /**
       * Get the future position.
       */

      const newPosition = moveLeft(states.currentAvatarPosition);

      /**
       * Check collision.
       */

      const collision = wasBumped(newPosition, collisionBlocksPositions);

      if (collision.result) {
        if(collision.block.action) {

          const onlyBlockPositions = {
            rowStart: collision.block.rowStart, 
            columnStart: collision.block.columnStart, 
            rowEnd: collision.block.rowEnd, 
            columnEnd: collision.block.columnEnd,
          }

          return collision.block.action(onlyBlockPositions); // Collision callback
        }
        return false; // Stop movement
      };

      /**
       * Move map.
       */

      if (avatar.static) {
        states.currentCameraPosition.x += blockSize;
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

        const onlyBlockPositions = {
          rowStart: over.block.rowStart, 
          columnStart: over.block.columnStart, 
          rowEnd: over.block.rowEnd, 
          columnEnd: over.block.columnEnd,
        }

        return over.block.action(onlyBlockPositions); // Over callback
      };

      return true;

    },

    /**
     * Right movement core engine.
     *
     * @returns {boolean} The movement result.
     *
     */

    right: () => {

      /**
      * Set the avatar side.
      */

        const noRightSide = avatar.side && !(states.currentAvatarSide === 'right');

      if(noRightSide) {
        avatar.ref.className = avatar.side.right;
        states.currentAvatarSide = 'right';
      }

      /**
       * Get the future position.
       */

      const newPosition = moveRight(states.currentAvatarPosition);

      /**
       * Check collision.
       */

      const collision = wasBumped(newPosition, collisionBlocksPositions);

      if (collision.result) {
        if(collision.block.action) {

          const onlyBlockPositions = {
            rowStart: collision.block.rowStart, 
            columnStart: collision.block.columnStart, 
            rowEnd: collision.block.rowEnd, 
            columnEnd: collision.block.columnEnd,
          }

          return collision.block.action(onlyBlockPositions); // Collision callback
        }
        return false; // Stop movement
      };

      /**
       * Move map.
       */

      if (avatar.static) {
        states.currentCameraPosition.x -= blockSize;
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

        const onlyBlockPositions = {
          rowStart: over.block.rowStart, 
          columnStart: over.block.columnStart, 
          rowEnd: over.block.rowEnd, 
          columnEnd: over.block.columnEnd,
        }

        return over.block.action(onlyBlockPositions); // Over callback
      };

      return true;

    },

  }

};

export default movements;
