import {
	GET_PACKS
} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case GET_PACKS:
			return [ ...state, ...action.payload ]
	}

	return state;
}