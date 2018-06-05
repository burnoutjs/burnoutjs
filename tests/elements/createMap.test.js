import { suite, test, assert, normalizeString, mockWindow } from 'nomsjs';
import createMap from '../../src/elements/createMap';

suite('createMap()', () => {

  // ------------------------------------

  test('Should return the correct element', () => {

		const configs = {};
		const blockSize = 20;

    const map = createMap(configs, blockSize, mockWindow);

    return assert('DIV', map.nodeName);

  });

  // ------------------------------------

  test('Should return the correct CSS inline style (width, height and grid-template)', () => {

    const expect = `
			display: grid;
			grid-template-columns: repeat(12, 10px);
			grid-template-rows: repeat(12, 10px);
			width: 120px;
			height: 120px;
			overflow: hidden;
  	`;

		const configs = {
			cols: 12,
			rows: 12,
		};

		const blockSize = 10;

		const map = createMap(configs, blockSize, mockWindow);

    return assert(
      normalizeString(expect),
      normalizeString(map.style)
    );

  });

});