import moveUp from './moveUp';
import moveDown from './moveDown';
import moveLeft from './moveLeft';
import moveRight from './moveRight';

/**
 * All game axis configs.
 * @module controls/helpers/allAxis
 * @type {array}
 * 
 */

const allAxis = [
	{
		side: 'up',
		movement: moveUp,
		updatedCameraPositionState: (state, blockSize) => state.y += blockSize,
	},
	{
		side: 'down',
		movement: moveDown,
		updatedCameraPositionState: (state, blockSize) => state.y -= blockSize,
	},
	{
		side: 'left',
		movement: moveLeft,
		updatedCameraPositionState: (state, blockSize) => state.x += blockSize,
	},
	{
		side: 'right',
		movement: moveRight,
		updatedCameraPositionState: (state, blockSize) => state.x -= blockSize,
	}
]

export default allAxis;