import { suite, test, assert, normalizeString, fakeWindow } from 'nomsjs';
import movementParams from './test_mocks/movementParams';
import clone from './test_helpers/clone';
import controls from '../../src/controls/controls';

suite('controls()', () => {

	// -----------------------------------------
	// Setup
	// -----------------------------------------

	// ------------------
	// Basic setup
	// ------------------

	const setupControls = params => controls(
		params.avatar,
		params.mapRef,
		[],
		[],
		params.blockSize
	)

	// ------------------
	// Setup with collisions blocks
	// ------------------

	const setupControlsWithCollisionBlocks = params => controls(
		params.avatar,
		params.mapRef,
		params.collisionBlocksPositions,
		[],
		params.blockSize
	)

	// ------------------
	// Setup with collisions blocks
	// ------------------

	const setupControlsWithOverBlocks = params => controls(
		params.avatar,
		params.mapRef,
		[],
		params.overBlocksPositions,
		params.blockSize
	)

	// Global Mocks data
  // ------------------------------------

	// const fakeAvatarRef = () => {
	// 	const avatar = fakeWindow.document.createElement('div');
	// 	avatar.classList.add('aaa')
	// 	return avatar;
	// }

	// const fakeAvatar = {
	// 	ref: fakeAvatarRef(),
	// 	static: true,
	// 	startPosition: { rowStart: 1, columnStart: 1, rowEnd: 2, columnEnd: 2, },
	// 	side: { up: 'side-up', down: 'side-down', left: 'side-left', right: 'side-right', }
	// }

	// const fakeCollisionBlocks = [
	// 	{ rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3, },
	// 	{ rowStart: 3, columnStart: 3, rowEnd: 4, columnEnd: 4, }
	// ];

	// const fakeOverBlocks = [
	// 	{ rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3, },
	// 	{ rowStart: 3, columnStart: 3, rowEnd: 4, columnEnd: 4, }
	// ];

	// const fakeStates = {
	// 	avatar: fakeAvatar,
	// 	mapRef: fakeWindow.document.createElement('div'),
	// 	collisionBlocksPositions: fakeCollisionBlocks,
	// 	overBlocksPositions: fakeOverBlocks,
	// 	blockSize: '10px',
	// }

	// const move = controls(
	// 	fakeStates.avatar,
	// 	fakeStates.mapRef,
	// 	fakeStates.collisionBlocksPositions,
	// 	fakeStates.overBlocksPositions,
	// 	fakeStates.blockSize
	// )

  test('Should create all core controls', () => {

		// --------- Controls

		// console.log(move.right());
		// console.log(move.up());
		// console.log(move.up());

		// --------- Actions

		//coreControls.up();
		// coreControls.down();
		// coreControls.left();
		// coreControls.right();
		
		// --------- Results

		//false // movement false
		//true // movement true

		//avatar.ref.className // avatar side class
		//map.style.cssText // map position
		//avatar.ref.style.cssText // avatar position

    // return assert('DIV', avatar.nodeName);

  });

	// -----------------------------------------
	// Avatar side
	// -----------------------------------------

	suite('Avatar side', () => { 

		// ------------------
		// Avatar side up()
		// ------------------

		test('Should change the avatar side (CSS class) to up during first movement', () => {
	
			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			move.up();

			const currentClassName = scopedParams.avatar.ref.className;
			scopedParams = null; // Garbage collector ;)

			return assert.equal('side-up', currentClassName);

		});

		// ------------------
		// Avatar side down()
		// ------------------

		test('Should change the avatar side (CSS class) to down during first movement', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			move.down();

			const currentClassName = scopedParams.avatar.ref.className;
			scopedParams = null; // Garbage collector ;)

			return assert.equal('side-down', currentClassName);

		});

		// ------------------
		// Avatar side left()
		// ------------------

		test('Should change the avatar side (CSS class) to left during first movement', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			move.left();

			const currentClassName = scopedParams.avatar.ref.className;
			scopedParams = null; // Garbage collector ;)

			return assert.equal('side-left', currentClassName);

		});

		// ------------------
		// Avatar side right()
		// ------------------

		test('Should change the avatar side (CSS class) to right during first movement', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			move.right();

			const currentClassName = scopedParams.avatar.ref.className;
			scopedParams = null; // Garbage collector ;)

			return assert.equal('side-right', currentClassName);

		});

	});

	// -----------------------------------------
	// Continuos avatar side
	// -----------------------------------------

	suite('Continuos avatar side', () => {

		// ------------------
		// Continuos avatar side up()
		// ------------------

		test('Should keep the avatar side (CSS class) during movements (up) for the same direction', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			move.left();
			move.up();
			move.up();

			const currentClassName = scopedParams.avatar.ref.className;
			scopedParams = null; // Garbage collector ;)

			return assert.equal('side-up', currentClassName);

		});

		// ------------------
		// Continuos avatar side down()
		// ------------------

		test('Should keep the avatar side (CSS class) during movements (down) for the same direction', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			move.left();
			move.down();
			move.down();

			const currentClassName = scopedParams.avatar.ref.className;
			scopedParams = null; // Garbage collector ;)

			return assert.equal('side-down', currentClassName);

		});

		// ------------------
		// Continuos avatar side left()
		// ------------------

		test('Should keep the avatar side (CSS class) during movements (left) for the same direction', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			move.up();
			move.left();
			move.left();

			const currentClassName = scopedParams.avatar.ref.className;
			scopedParams = null; // Garbage collector ;)

			return assert.equal('side-left', currentClassName);

		});

		// ------------------
		// Continuos avatar side down()
		// ------------------

		test('Should keep the avatar side (CSS class) during movements (down) for the same direction', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			move.left();
			move.down();
			move.down();

			const currentClassName = scopedParams.avatar.ref.className;
			scopedParams = null; // Garbage collector ;)

			return assert.equal('side-down', currentClassName);

		});

	});

	// -----------------------------------------
	// Move avatar (static: false)
	// -----------------------------------------

	suite('Move avatar (static: false)', () => {

		// ------------------
		// Move avatar up()
		// ------------------

		test('Should move the avatar for a new position (up)', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.up();

			const expectedPosition = normalizeString('grid-area: 1 / 2 / 2 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		// ------------------
		// Move avatar down()
		// ------------------

		test('Should move the avatar for a new position (down)', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.down();

			const expectedPosition = normalizeString('grid-area: 3 / 2 / 4 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		// ------------------
		// Move avatar left()
		// ------------------

		test('Should move the avatar for a new position (left)', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.left();

			const expectedPosition = normalizeString('grid-area: 2 / 1 / 3 / 2');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		// ------------------
		// Move avatar right()
		// ------------------

		test('Should move the avatar for a new position (right)', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.right();

			const expectedPosition = normalizeString('grid-area: 2 / 3 / 3 / 4');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

	})

	// -----------------------------------------
	// Move map (static: true)
	// -----------------------------------------

	suite('Move map (static: true)', () => {

		// ------------------
		// Move map up()
		// ------------------

		test('Should move the map for a new position (up)', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			// Map start position: 'translate(0px, 0px);'

			move.up();

			const expectedPosition = normalizeString('translate(0px, 10px);');
			const currentMapPosition = normalizeString(scopedParams.mapRef.style.transform);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentMapPosition);

		});

		// ------------------
		// Move map down()
		// ------------------

		test('Should move the map for a new position (down)', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			// Map start position: 'translate(0px, 0px);'

			move.down();

			const expectedPosition = normalizeString('translate(0px, -10px);');
			const currentMapPosition = normalizeString(scopedParams.mapRef.style.transform);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentMapPosition);

		});

		// ------------------
		// Move map left()
		// ------------------

		test('Should move the map for a new position (left)', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			// Map start position: 'translate(0px, 0px);'

			move.left();

			const expectedPosition = normalizeString('translate(-10px, 0px);');
			const currentMapPosition = normalizeString(scopedParams.mapRef.style.transform);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentMapPosition);

		});

		// ------------------
		// Move map right()
		// ------------------

		test('Should move the map for a new position (right)', () => {

			let scopedParams = clone(movementParams);
			const move = setupControls(scopedParams);

			// Map start position: 'translate(0px, 0px);'

			move.right();

			const expectedPosition = normalizeString('translate(10px, 0px);');
			const currentMapPosition = normalizeString(scopedParams.mapRef.style.transform);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentMapPosition);

		});

	});

	suite('Not movement', () => {

		test('Do not move to direction (up) where there are registered collision blocks', () => {

			let scopedParams = clone(movementParams);
			const move = setupControlsWithCollisionBlocks(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.up();

			const expectedPosition = normalizeString('grid-area: 2 / 2 / 3 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		test('Do not move to direction (down) where there are registered collision blocks', () => {

			let scopedParams = clone(movementParams);
			const move = setupControlsWithCollisionBlocks(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.down();

			const expectedPosition = normalizeString('grid-area: 2 / 2 / 3 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		test('Do not move to direction (left) where there are registered collision blocks', () => {

			let scopedParams = clone(movementParams);
			const move = setupControlsWithCollisionBlocks(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.left();

			const expectedPosition = normalizeString('grid-area: 2 / 2 / 3 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		test('Do not move to direction (right) where there are registered collision blocks', () => {

			let scopedParams = clone(movementParams);
			const move = setupControlsWithCollisionBlocks(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.right();

			const expectedPosition = normalizeString('grid-area: 2 / 2 / 3 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

	});


	test('If exist, should return a collision callback function', () => {});

	test('If the new position is registered like a over block, should return the over callback', () => {});

});