import { suite, test, assert, normalizeString, fakeWindow } from 'nomsjs';
import createCamera from '../../src/elements/createCamera';

suite('createCamera()', () => {

  // ------------------------------------

  test('Should return the correct element', () => {

		const configs = {};
		const blockSize = 20;

    const camera = createCamera(configs, blockSize, fakeWindow);

    return assert.equal('DIV', camera.nodeName);

  });

  // ------------------------------------

  test('Should return the correct CSS inline style (width and height)', () => {

    const expect = `
			width: 240px;
			height: 240px;
		`;

		const configs = {
			cols: 24,
			rows: 24,
		};

		const blockSize = 10;

		const camera = createCamera(configs, blockSize, fakeWindow);

    return assert.equal(
      normalizeString(expect),
      normalizeString(camera.style)
    );

  });

});