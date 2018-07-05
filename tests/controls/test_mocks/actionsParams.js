const actionsParams = () => {

	const fakeAvatarCurrentPositions = { 
		rowStart: 2,
		columnStart: 2,
		rowEnd: 3,
		columnEnd: 3,
	}

	const fakeInteractionBlocks = [
		{ rowStart: 1, columnStart: 2, rowEnd: 2, columnEnd: 3, action: blockPosition => blockPosition },
		{ rowStart: 3, columnStart: 2, rowEnd: 4, columnEnd: 3, action: blockPosition => blockPosition },
		{ rowStart: 2, columnStart: 3, rowEnd: 3, columnEnd: 4, action: blockPosition => blockPosition },
		{ rowStart: 2, columnStart: 1, rowEnd: 3, columnEnd: 2, action: blockPosition => blockPosition }
	];

	return {
		avatarCurrentPositions: fakeAvatarCurrentPositions,
		interactionBlocksPositions: fakeInteractionBlocks,
	}

};

export default actionsParams();
