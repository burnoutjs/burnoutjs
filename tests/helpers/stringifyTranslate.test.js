import { suite, test, assert, normalizeString } from 'nomsjs';
import stringifyTranslate from '../../src/helpers/stringifyTranslate';

suite('stringifyTranslate()', () => {

  test('Should return a CSS transform (string) with X and Y positions', () => {

    const expect =`translate(10px, 20px)`;

    const param = {
      x: 10,
      y: 20,
    }

    const result = stringifyTranslate(param);

    return assert.equal(
      normalizeString(expect), 
      normalizeString(result)
    );

  });

});