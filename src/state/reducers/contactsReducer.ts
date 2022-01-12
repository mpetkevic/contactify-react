import {ActionType} from "../action-types";
import {Action} from "../actions";

interface ContactsState {
    loading: boolean;
    error: string | null;
    data: any[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const reducer = (
    state: ContactsState  = initialState,
    action: Action
): ContactsState => {
    switch (action.type) {
        case ActionType.GET_CONTACTS:
            return { loading: true, error: null, data: [] };
        case ActionType.GET_CONTACTS_SUCCESS:
            return { loading: false, error: null, data: action.payload}
        default:
            return state;
    }
};

export default reducer;