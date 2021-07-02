import {combineReducers} from 'redux';
import { reducer as form  } from 'redux-form';
import loginReducer from './loginReducer';
import transportReducer from './transportReducer';

const rootReducer = combineReducers({
    form,
    loginReducer,
    transportReducer
});

export default rootReducer;