import { fakeWindow } from 'nomsjs';

const movementParams = () => {

	const fakeAvatarRef = () => {
		const div = fakeWindow.document.createElement('div');
		div.style = 'grid-area: 2 / 2 / 3 / 3';
		return div;
	}

	const fakeAvatar = {
		ref: fakeAvatarRef(),
		static: true,
		startPosition: { rowStart: 2, columnStart: 2, rowEnd: 3, columnEnd: 3, },
		side: { 
			up: 'side-up', 
			down: 'side-down', 
			left: 'side-left', 
			right: 'side-right', 
		}
	}

	const fakeMapRef = fakeWindow.document.createElement('div');

	const fakeCollisionBlocks = [
		{ rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3, action: blockPosition => blockPosition },
		{ rowStart: 3, columnStart: 2, rowEnd: 4, columnEnd: 3, action: blockPosition => blockPosition },
		{ rowStart: 2, columnStart: 3, rowEnd: 3, columnEnd: 4, action: blockPosition => blockPosition },
		{ rowStart: 2, columnStart: 1, rowEnd: 3, columnEnd: 2, action: blockPosition => blockPosition }
	];

	const fakeOverBlocks = [
		{ rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3, action: overPosition => overPosition },
		{ rowStart: 3, columnStart: 2, rowEnd: 4, columnEnd: 3, action: overPosition => overPosition },
		{ rowStart: 2, columnStart: 3, rowEnd: 3, columnEnd: 4, action: overPosition => overPosition },
		{ rowStart: 2, columnStart: 1, rowEnd: 3, columnEnd: 2, action: overPosition => overPosition }
	];

	return {
		avatar: fakeAvatar,
		mapRef: fakeMapRef,
		collisionBlocksPositions: fakeCollisionBlocks,
		overBlocksPositions: fakeOverBlocks,
		blockSize: 10,
	}

};

export default movementParams;
