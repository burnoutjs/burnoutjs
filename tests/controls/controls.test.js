import { suite, test, assert, normalizeString } from 'nomsjs';
import movementParams from './test_mocks/movementParams';
import movements from '../../src/controls/movements';

suite('movements()', () => {

	// -----------------------------------------
	// Setup
	// -----------------------------------------

	// ------------------
	// Basic setup
	// ------------------

	const setupControls = params => movements(
		params.avatar,
		params.mapRef,
		[],
		[],
		params.blockSize
	)

	// ------------------
	// Setup with collisions blocks
	// ------------------

	const setupControlsWithCollisionBlocks = params => movements(
		params.avatar,
		params.mapRef,
		params.collisionBlocksPositions,
		[],
		params.blockSize
	)

	// ------------------
	// Setup with collisions blocks
	// ------------------

	const setupControlsWithOverBlocks = params => movements(
		params.avatar,
		params.mapRef,
		[],
		params.overBlocksPositions,
		params.blockSize
	)

	// -----------------------------------------
	// Avatar side
	// -----------------------------------------

	suite('Avatar side', () => { 

		// ------------------
		// Avatar side up()
		// ------------------

		test('Should change the avatar side (CSS class) to up during first movement', () => {
	
			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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
	// Move avatar (static: true)
	// -----------------------------------------

	suite('Move avatar (static: true)', () => {

		// ------------------
		// Move avatar up()
		// ------------------

		test('Should move the avatar for a new position (up)', () => {

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
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

			let scopedParams = movementParams();
			const move = setupControls(scopedParams);

			// Map start position: 'translate(0px, 0px);'

			move.up();

			const expectedPosition = normalizeString('translate(0px, 10px)');
			const currentMapPosition = normalizeString(scopedParams.mapRef.style.transform);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentMapPosition);

		});

		// ------------------
		// Move map down()
		// ------------------

		test('Should move the map for a new position (down)', () => {

			let scopedParams = movementParams();
			const move = setupControls(scopedParams);

			// Map start position: 'translate(0px, 0px);'

			move.down();

			const expectedPosition = normalizeString('translate(0px, -10px)');
			const currentMapPosition = normalizeString(scopedParams.mapRef.style.transform);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentMapPosition);

		});

		// ------------------
		// Move map left()
		// ------------------

		test('Should move the map for a new position (left)', () => {

			let scopedParams = movementParams();
			const move = setupControls(scopedParams);

			// Map start position: 'translate(0px, 0px);'

			move.left();

			const expectedPosition = normalizeString('translate(10px, 0px)');
			const currentMapPosition = normalizeString(scopedParams.mapRef.style.transform);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentMapPosition);

		});

		// ------------------
		// Move map right()
		// ------------------

		test('Should move the map for a new position (right)', () => {

			let scopedParams = movementParams();
			const move = setupControls(scopedParams);

			// Map start position: 'translate(0px, 0px);'

			move.right();

			const expectedPosition = normalizeString('translate(-10px, 0px)');
			const currentMapPosition = normalizeString(scopedParams.mapRef.style.transform);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentMapPosition);

		});

	});

	// -----------------------------------------
	// Collision
	// -----------------------------------------

	suite('Not movement (collision)', () => {

		// ------------------
		// Collision up()
		// ------------------

		test('Do not move to direction (up) where there are registered collision blocks', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithCollisionBlocks(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.up();

			const expectedPosition = normalizeString('grid-area: 2 / 2 / 3 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		// ------------------
		// Collision down()
		// ------------------

		test('Do not move to direction (down) where there are registered collision blocks', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithCollisionBlocks(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.down();

			const expectedPosition = normalizeString('grid-area: 2 / 2 / 3 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		// ------------------
		// Collision left()
		// ------------------

		test('Do not move to direction (left) where there are registered collision blocks', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithCollisionBlocks(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.left();

			const expectedPosition = normalizeString('grid-area: 2 / 2 / 3 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

		// ------------------
		// Collision right()
		// ------------------

		test('Do not move to direction (right) where there are registered collision blocks', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithCollisionBlocks(scopedParams);

			// Avatar start position: 2 / 2 / 3 / 3

			move.right();

			const expectedPosition = normalizeString('grid-area: 2 / 2 / 3 / 3');
			const currentAvatarPosition = normalizeString(scopedParams.avatar.ref.style);

			scopedParams = null; // Garbage collector ;)

			return assert.equal(expectedPosition, currentAvatarPosition);

		});

	});

	// -----------------------------------------
	// Collision callbacks
	// -----------------------------------------

	suite('Collision callbacks', () => {

		// ------------------
		// Collision callback up()
		// ------------------

		test('When it collides (up) should return a collision callback function (if exist)', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithCollisionBlocks(scopedParams);

			const collidedBlockPosition = move.up();
			const expectedBlockPosition = { rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3 };

			scopedParams = null; // Garbage collector ;)

			return assert.objectEqual(expectedBlockPosition, collidedBlockPosition);

		});

		// ------------------
		// Collision callback down()
		// ------------------

		test('When it collides (down) should return a collision callback function (if exist)', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithCollisionBlocks(scopedParams);

			const collidedBlockPosition = move.down();
			const expectedBlockPosition = { rowStart: 3, columnStart: 2, rowEnd: 4, columnEnd: 3 };

			scopedParams = null; // Garbage collector ;)

			return assert.objectEqual(expectedBlockPosition, collidedBlockPosition);

		});

		// ------------------
		// Collision callback left()
		// ------------------

		test('When it collides (left) should return a collision callback function (if exist)', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithCollisionBlocks(scopedParams);

			const collidedBlockPosition = move.left();
			const expectedBlockPosition = { rowStart: 2, columnStart: 1, rowEnd: 3, columnEnd: 2 };

			scopedParams = null; // Garbage collector ;)

			return assert.objectEqual(expectedBlockPosition, collidedBlockPosition);

		});

		// ------------------
		// Collision callback right()
		// ------------------

		test('When it collides (right) should return a collision callback function (if exist)', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithCollisionBlocks(scopedParams);

			const collidedBlockPosition = move.right();
			const expectedBlockPosition = { rowStart: 2, columnStart: 3, rowEnd: 3, columnEnd: 4 };

			scopedParams = null; // Garbage collector ;)

			return assert.objectEqual(expectedBlockPosition, collidedBlockPosition);

		});

	});

	// -----------------------------------------
	// Over callbacks
	// -----------------------------------------

	suite('Over callbacks', () => {

		// ------------------
		// Over callback up()
		// ------------------

		test('If the new position (up) is registered like a over block, should return the over callback', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithOverBlocks(scopedParams);

			const collidedOverPosition = move.up();
			const expectedOverPosition = { rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3 };

			scopedParams = null; // Garbage collector ;)

			return assert.objectEqual(expectedOverPosition, collidedOverPosition);

		});

		// ------------------
		// Over callback down()
		// ------------------

		test('If the new position (down) is registered like a over block, should return the over callback', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithOverBlocks(scopedParams);

			const collidedOverPosition = move.down();
			const expectedOverPosition = { rowStart: 3, columnStart: 2, rowEnd: 4, columnEnd: 3 };

			scopedParams = null; // Garbage collector ;)

			return assert.objectEqual(expectedOverPosition, collidedOverPosition);

		});

		// ------------------
		// Over callback left()
		// ------------------

		test('If the new position (left) is registered like a over block, should return the over callback', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithOverBlocks(scopedParams);

			const collidedOverPosition = move.left();
			const expectedOverPosition = { rowStart: 2, columnStart: 1, rowEnd: 3, columnEnd: 2 };

			scopedParams = null; // Garbage collector ;)

			return assert.objectEqual(expectedOverPosition, collidedOverPosition);

		});

		// ------------------
		// Over callback right()
		// ------------------

		test('If the new position (right) is registered like a over block, should return the over callback', () => {

			let scopedParams = movementParams();
			const move = setupControlsWithOverBlocks(scopedParams);

			const collidedOverPosition = move.right();
			const expectedOverPosition = { rowStart: 2, columnStart: 3, rowEnd: 3, columnEnd: 4 };

			scopedParams = null; // Garbage collector ;)

			return assert.objectEqual(expectedOverPosition, collidedOverPosition);

		});

	});

});