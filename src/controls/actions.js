import wasBumped from '../collisions/wasBumped';
import moveUp from './helpers/moveUp';
import moveDown from './helpers/moveDown';
import moveLeft from './helpers/moveLeft';
import moveRight from './helpers/moveRight';
import getBlockPositions from './helpers/getBlockPositions';

/**
 * Create all core actions methods and expose for plugins.
 * @module controls/actions
 *
 * @param {object} avatar - The avatar current states.
 * @param {string} avatar.currentSide - The avatar current side.
 * @param {object} avatar.currentPositions - Avatar position in map.
 * @param {number} avatar.currentPositions.rowStart - Start row position.
 * @param {number} avatar.currentPositions.columnStart - Start column position.
 * @param {number} avatar.currentPositions.rowEnd - End row position.
 * @param {number} avatar.currentPositions.columnEnd - End column position.
 * @param {array} interactionBlocksPositions - List of blocks to interaction.
 *
 * @returns {object} All actions methods.
 * 
 */

const actions = (
  avatar, 
  interactionBlocksPositions) => {

  return {

    /**
     * a action callback.
     * @callback aCallback
     */

    /**
     * a buttons action (Interaction with registered block and a callback).
     * @param {aCallback} cb - a callback function.
     *
     * @returns {object} Interaction block callback() result and a callback() result.
     * 
     */

    a: cb => {
  
      // ------------------
      // For help, see the flowchart algorithm in docs/flowcharts/02-actions.png
      // ------------------

      // -----------------------------------------
      // Get avatar states
      // -----------------------------------------

      const avatarCurrentSide = avatar.currentSide;
      const avatarCurrentPositions = avatar.currentPositions;

      // -----------------------------------------
      // Resolve the forward block position
      // -----------------------------------------

      let forwardPosition;

      switch(avatarCurrentSide) {
        case 'up':
          forwardPosition = moveUp(avatarCurrentPositions);
          break;
        case 'down':
          forwardPosition = moveDown(avatarCurrentPositions);
          break;
        case 'left':
          forwardPosition = moveLeft(avatarCurrentPositions);
          break;
        case 'right':
          forwardPosition = moveRight(avatarCurrentPositions);
           break;
      }

      // -----------------------------------------
      // Resolve interaction
      // -----------------------------------------

      const isInteraction = wasBumped(forwardPosition, interactionBlocksPositions);

      if(isInteraction.result && isInteraction.block.action) {

        const onlyBlockPositions = getBlockPositions(isInteraction.block);
        const interactionCallback =  isInteraction.block.action(onlyBlockPositions); // Interaction block callback()
        
        let aCallback = null;

        if (cb) {
          aCallback = cb(); // a callback()
        }

        /**
         * Return interaction block callback and a callback.
         */

        return {
          interactionCallback,
          aCallback,
        }

      } else if (cb) {

        /**
         * Return only a callback.
         */

        return {
          interactionCallback: null,
          aCallback: cb(), // a callback()
        }

      }

      /**
       * Do not do anything.
       */

      return {
        interactionCallback: null,
        aCallback: null,
      };

    },

    /**
     * b action callback.
     * @callback bCallback
     */

    /**
     * b buttons action (only b callback).
     * @param {bCallback} cb - a callback function.
     *
     * @returns {object} b callback() result.
     * 
     */

    b: cb => {

      let bCallback = null;

      if(cb) {
        bCallback = cb(); // b callback()
      }

      /**
       * Return only b callback.
       */

      return {
        bCallback
      };

    }
 
  }

};

export default actions;