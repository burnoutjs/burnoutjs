/**
 * Test a specific event keycode.
 * @module controls/helpers/keyPress
 *
 * @param {object} target - The target event(element).
 * @param {number} keyCode - Keyboard keycode for test.
 *
 * @returns {boolean} Cross browser event keycode result.
 *
 */

const keyPress = (target, keyCode) => {
  return (target.which === keyCode || target.keyCode === keyCode);
};

export default keyPress;