import moveUp from './helpers/moveUp';
import moveDown from './helpers/moveDown';
import moveLeft from './helpers/moveLeft';
import moveRight from './helpers/moveRight';
import wasBumped from '../collisions/wasBumped';
import stringifyTranslate from '../helpers/stringifyTranslate';
import stringifyPosition from '../helpers/stringifyPosition';
import keyPress from './helpers/keyPress';

/**
 * Set all keyboard controls and manage collisions.
 * @module controls/setKeyboardControls
 *
 * @param {object} avatar - All Avatar configs.
 * @param {object} avatar.ref - Avatar DOM reference.
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
 * @param {number} blockSize - Size of all grid blocks.
 * @param {object} configs - All keyboard game controls configs.
 * @param {number} configs.up - Keycode up movement.
 * @param {number} configs.down - Keycode down movement.
 * @param {number} configs.left - Keycode left movement.
 * @param {number} configs.right - Keycode right movement.
 * @param {object} [context = window] - Context for execute the DOM API.
 *
 */

// TODO: Refactor for improve performance in `map.style = map.style.cssText`.

const setKeyboardControls = (
  avatar,
  map,
  collisionBlocksPositions,
  blockSize,
  configs,
  context = window) => {

  const states = {
    currentAvatarPosition: avatar.startPosition,
    currentAvatarSide: null,
    currentCameraPosition: {
      x: 0,
      y: 0,
    },
  };

  context.addEventListener('keydown', (e) => {

    if (keyPress(e, configs.up)) {
      const newPosition = moveUp(states.currentAvatarPosition);

      if (!(states.currentAvatarSide === 'up')) {
        avatar.ref.className = avatar.side.up;
        states.currentAvatarSide = 'up'
      };

      if (wasBumped(newPosition, collisionBlocksPositions)) return;

      states.currentCameraPosition.y += blockSize;
      map.style = map.style.cssText + stringifyTranslate(states.currentCameraPosition);
      avatar.ref.style = stringifyPosition(newPosition);
      states.currentAvatarPosition = newPosition;
    }

    if (keyPress(e, configs.down)) {
      const newPosition = moveDown(states.currentAvatarPosition);

      if (!(states.currentAvatarSide === 'down')) {
        avatar.ref.className = avatar.side.down;
        states.currentAvatarSide = 'down'
      };

      if (wasBumped(newPosition, collisionBlocksPositions)) return;

      states.currentCameraPosition.y -= blockSize;
      map.style = map.style.cssText + stringifyTranslate(states.currentCameraPosition);
      avatar.ref.style = stringifyPosition(newPosition);
      states.currentAvatarPosition = newPosition;
    }

    if (keyPress(e, configs.left)) {
      const newPosition = moveLeft(states.currentAvatarPosition);

      if (!(states.currentAvatarSide === 'left')) {
        avatar.ref.className = avatar.side.left;
        states.currentAvatarSide = 'left'
      };

      if (wasBumped(newPosition, collisionBlocksPositions)) return;

      states.currentCameraPosition.x += blockSize;
      map.style = map.style.cssText + stringifyTranslate(states.currentCameraPosition);
      avatar.ref.style = stringifyPosition(newPosition);
      states.currentAvatarPosition = newPosition;
    }

    if (keyPress(e, configs.right)) {
      const newPosition = moveRight(states.currentAvatarPosition);

      if (!(states.currentAvatarSide === 'right')) {
        avatar.ref.className = avatar.side.right;
        states.currentAvatarSide = 'right'
      };

      if (wasBumped(newPosition, collisionBlocksPositions)) return;

      states.currentCameraPosition.x -= blockSize;
      map.style = map.style.cssText + stringifyTranslate(states.currentCameraPosition);
      avatar.ref.style = stringifyPosition(newPosition);
      states.currentAvatarPosition = newPosition;
    }

  });
};

export default setKeyboardControls;