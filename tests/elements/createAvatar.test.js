import { suite, test, assert, normalizeString, fakeWindow } from 'nomsjs';
import createAvatar from '../../src/elements/createAvatar';

suite('createAvatar()', () => {

  // ------------------------------------

  test('Should return the correct element', () => {

    const param = {};
    const avatar = createAvatar(param, fakeWindow);

    return assert.equal('DIV', avatar.nodeName);

  });

  // ------------------------------------

  test('Should return the correct CSS class', () => {

    const param = {
      className: 'demo',
    }

    const avatar = createAvatar(param, fakeWindow);

    return assert.arrayEqual(['demo'], avatar.className);

  });

  // ------------------------------------

  test('Should return the correct CSS inline style (Grid positions)', () => {

    const expect = `grid-area: 1 / 1 / 2 / 2`;

    const param = {
      position: {
        rowStart: 1,
        columnStart: 1,
        rowEnd: 2,
        columnEnd: 2,
      }
    }

    const avatar = createAvatar(param, fakeWindow);

    return assert.equal(
      normalizeString(expect),
      normalizeString(avatar.style)
    );

  });

});