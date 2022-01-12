import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';

const reducers = combineReducers({
    contacts: contactsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;