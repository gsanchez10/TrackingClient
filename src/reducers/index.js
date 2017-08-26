import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import packsReducer from './packs_reducer';

const rootReducer = combineReducers({
	form,
	auth: authReducer,
	packs: packsReducer
});

export default rootReducer;
