import { suite, test, assert, normalizeString, fakeWindow } from 'nomsjs';
import createBlock from '../../src/elements/createBlock';

suite('createBlock()', () => {

  // ------------------------------------

  test('Should return the correct element', () => {

    const param = {};
    const block = createBlock(param, fakeWindow);

    return assert.equal('DIV', block.nodeName);

  });

  // ------------------------------------

  test('Should return the correct CSS class', () => {

    const param = {
      className: 'demo',
    }

    const block = createBlock(param, fakeWindow);

    return assert.arrayEqual(['demo'], block.className);

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

    const block = createBlock(param, fakeWindow);

    return assert.equal(
      normalizeString(expect),
      normalizeString(block.style)
    );

  });

});