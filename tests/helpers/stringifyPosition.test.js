import { suite, test, assert, normalizeString } from 'nomsjs';
import stringifyPosition from '../../src/helpers/stringifyPosition';

suite('stringifyPosition()', () => {

  test('Should return a CSS grid-area (string) with grid-line positions', () => {

    const expect =`grid-area: 1 / 1 / 2 / 2`;

    const param = {
      rowStart: 1,
      columnStart: 1,
      rowEnd: 2,
      columnEnd: 2,
    }

    const result = stringifyPosition(param);

    return assert(
      normalizeString(expect), 
      normalizeString(result)
    );

  });

});