import { suite, test, assert, normalizeString } from 'nomsjs';
import params from './test_mocks/actionsParams';
import actions from '../../src/controls/actions';

suite('actions()', () => {

		// -----------------------------------------
		// a() button
		// -----------------------------------------

		suite('actions.a()', () => {

			// ------------------
			// Up interaction callback 
			// ------------------

			test('Should return the callback of the interaction block (up)', () => {
				const actionButtons = actions('up', params.avatarCurrentPositions, params.interactionBlocksPositions);
	
				const callbackResult = actionButtons.a();

				const expectedResult = {
					interactionCallback: { rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3 },
					aCallback: null,
				}

				const interactionAssert = assert.objectEqual(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Down interaction callback 
			// ------------------

			test('Should return the callback of the interaction block (down)', () => {
				const actionButtons = actions('down', params.avatarCurrentPositions, params.interactionBlocksPositions);
	
				const callbackResult = actionButtons.a();

				const expectedResult = {
					interactionCallback: { rowStart: 3, columnStart: 2, rowEnd: 4, columnEnd: 3 },
					aCallback: null,
				}

				const interactionAssert = assert.objectEqual(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Left interaction callback 
			// ------------------

			test('Should return the callback of the interaction block (left)', () => {
				const actionButtons = actions('left', params.avatarCurrentPositions, params.interactionBlocksPositions);
	
				const callbackResult = actionButtons.a();

				const expectedResult = {
					interactionCallback: { rowStart: 2, columnStart: 1, rowEnd: 3, columnEnd: 2 },
					aCallback: null,
				}

				const interactionAssert = assert.objectEqual(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Right interaction callback 
			// ------------------

			test('Should return the callback of the interaction block (right)', () => {
				const actionButtons = actions('right', params.avatarCurrentPositions, params.interactionBlocksPositions);
	
				const callbackResult = actionButtons.a();

				const expectedResult = {
					interactionCallback: { rowStart: 2, columnStart: 3, rowEnd: 3, columnEnd: 4 },
					aCallback: null,
				}

				const interactionAssert = assert.objectEqual(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Only a() callback
			// ------------------

			test('Should return the callback of the a() method', () => {
				const actionButtons = actions('up', params.avatarCurrentPositions, []);
	
				const callbackResult = actionButtons.a(() => 'Callback result');

				const expectedResult = {
					interactionCallback: null,
					aCallback: 'Callback result',
				}

				const interactionAssert = assert.equal(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Up interaction callback and a() callback
			// ------------------

			test('Should return the callback of the interaction block (up) and a() method', () => {
				const actionButtons = actions('up', params.avatarCurrentPositions, params.interactionBlocksPositions);
	
				const callbackResult = actionButtons.a(() => 'Callback result');

				const expectedResult = {
					interactionCallback: { rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3 },
					aCallback: 'Callback result',
				}

				const interactionAssert = assert.objectEqual(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Down interaction callback and a() callback
			// ------------------

			test('Should return the callback of the interaction block (down) and a() method', () => {
				const actionButtons = actions('down', params.avatarCurrentPositions, params.interactionBlocksPositions);
	
				const callbackResult = actionButtons.a(() => 'Callback result');

				const expectedResult = {
					interactionCallback: { rowStart: 3, columnStart: 2, rowEnd: 4, columnEnd: 3 },
					aCallback: 'Callback result',
				}

				const interactionAssert = assert.objectEqual(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Left interaction callback and a() callback
			// ------------------

			test('Should return the callback of the interaction block (left) and a() method', () => {
				const actionButtons = actions('left', params.avatarCurrentPositions, params.interactionBlocksPositions);
	
				const callbackResult = actionButtons.a(() => 'Callback result');

				const expectedResult = {
					interactionCallback: { rowStart: 2, columnStart: 1, rowEnd: 3, columnEnd: 2 },
					aCallback: 'Callback result',
				}

				const interactionAssert = assert.objectEqual(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Right interaction callback and a() callback
			// ------------------

			test('Should return the callback of the interaction block (right) and a() method', () => {
				const actionButtons = actions('right', params.avatarCurrentPositions, params.interactionBlocksPositions);
	
				const callbackResult = actionButtons.a(() => 'Callback result');

				const expectedResult = {
					interactionCallback: { rowStart: 2, columnStart: 3, rowEnd: 3, columnEnd: 4 },
					aCallback: 'Callback result',
				}

				const interactionAssert = assert.objectEqual(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

			// ------------------
			// Does nothing
			// ------------------

			test('Should not return any callback', () => {
				const actionButtons = actions('up', params.avatarCurrentPositions, []);
	
				const callbackResult = actionButtons.a();

				const expectedResult = {
					interactionCallback: null,
					aCallback: null,
				}

				const interactionAssert = assert.equal(expectedResult.interactionCallback, callbackResult.interactionCallback);
				const aCallbackAssert = assert.equal(expectedResult.aCallback, callbackResult.aCallback);

				return (interactionAssert && aCallbackAssert);
			});

	});

	// -----------------------------------------
	// b() button
	// -----------------------------------------

	suite('actions.b()', () => {

		// ------------------
		// Only b() callback
		// ------------------

		test('Should return the callback of the b() method', () => {
			const actionButtons = actions('up', params.avatarCurrentPositions, []);
	
			const callbackResult = actionButtons.b(() => 'Callback result');

			const expectedResult = {
				bCallback: 'Callback result',
			}

			return assert.objectEqual(expectedResult, callbackResult);

		});

	});

});