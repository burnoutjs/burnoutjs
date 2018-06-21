import { suite, test, assert } from 'nomsjs';
import wasBumped from '../../src/collisions/wasBumped';

suite('wasBumped()', () => {

  // ------------------------------------

  test('Should return the collision result (Search in array): found', () => {

		const currentPosition = {
			rowStart: 10,
			columnStart: 10,
			rowEnd: 11,
			columnEnd: 11,
		};

		const blocksList = [
			{ rowStart: 1, columnStart: 1, rowEnd: 2, columnEnd: 2, },
			{ rowStart: 3, columnStart: 3, rowEnd: 4, columnEnd: 4, },
			{ rowStart: 10, columnStart: 10, rowEnd: 11, columnEnd: 11, },
			{ rowStart: 24, columnStart: 24, rowEnd: 25, columnEnd: 25, },
			{ rowStart: 25, columnStart: 25, rowEnd: 26, columnEnd: 26, }
		];

    const collision = wasBumped(currentPosition, blocksList);

    return assert.isTrue(collision.result);

  });

  // ------------------------------------

  test('Should return the collision result (Search in array): not found', () => {

		const currentPosition = {
			rowStart: 11,
			columnStart: 11,
			rowEnd: 12,
			columnEnd: 12,
		};

		const blocksList = [
			{ rowStart: 1, columnStart: 1, rowEnd: 2, columnEnd: 2, },
			{ rowStart: 3, columnStart: 3, rowEnd: 4, columnEnd: 4, },
			{ rowStart: 10, columnStart: 10, rowEnd: 11, columnEnd: 11, },
			{ rowStart: 24, columnStart: 24, rowEnd: 25, columnEnd: 25, },
			{ rowStart: 25, columnStart: 25, rowEnd: 26, columnEnd: 26, }
		];

    const collision = wasBumped(currentPosition, blocksList);

    return assert.isFalse(collision.result);

  });

	// ------------------------------------

	test('If found, block should return the collided block position', () => {

		const expect = {
			rowStart: 24,
			columnStart: 24,
			rowEnd: 25,
			columnEnd: 25,
		}

		const currentPosition = {
			rowStart: 24,
			columnStart: 24,
			rowEnd: 25,
			columnEnd: 25,
		};

		const blocksList = [
			{ rowStart: 1, columnStart: 1, rowEnd: 2, columnEnd: 2, },
			{ rowStart: 3, columnStart: 3, rowEnd: 4, columnEnd: 4, },
			{ rowStart: 10, columnStart: 10, rowEnd: 11, columnEnd: 11, },
			{ rowStart: 24, columnStart: 24, rowEnd: 25, columnEnd: 25, },
			{ rowStart: 25, columnStart: 25, rowEnd: 26, columnEnd: 26, }
		];

		const collision = wasBumped(currentPosition, blocksList);

		return assert.objectEqual(expect, collision.block);

	});

	// ------------------------------------

	test('If not found, block should return null', () => {


		const currentPosition = {
			rowStart: 33,
			columnStart: 33,
			rowEnd: 34,
			columnEnd: 34,
		};

		const blocksList = [
			{ rowStart: 1, columnStart: 1, rowEnd: 2, columnEnd: 2, },
			{ rowStart: 3, columnStart: 3, rowEnd: 4, columnEnd: 4, },
			{ rowStart: 10, columnStart: 10, rowEnd: 11, columnEnd: 11, },
			{ rowStart: 24, columnStart: 24, rowEnd: 25, columnEnd: 25, },
			{ rowStart: 25, columnStart: 25, rowEnd: 26, columnEnd: 26, }
		];

		const collision = wasBumped(currentPosition, blocksList);

		return assert.isFalse(collision.result);

	});

});