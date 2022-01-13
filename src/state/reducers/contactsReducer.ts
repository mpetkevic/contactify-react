import {ActionType} from "../action-types";
import {Action} from "../actions";
import {Contact} from "../../interfaces/contactInterfaces";

interface ContactsState {
    loading: boolean;
    error: string | null;
    loadingSelectedContact: boolean,
    showSelectedContactPreview: boolean,
    selectedContact: Contact | null,
    data: Contact[];
    filter: string;
    showActiveUsers: Boolean
}

const initialState = {
    loading: false,
    loadingSelectedContact: false,
    selectedContact: null,
    showSelectedContactPreview: false,
    error: null,
    data: [],
    filter:'',
    showActiveUsers: false
};

const reducer = (
    state: ContactsState  = initialState,
    action: Action
): ContactsState => {
    switch (action.type) {
        case ActionType.GET_CONTACTS:
            return { ...state, loading: true };
        case ActionType.GET_CONTACTS_SUCCESS:
            return { ...state, loading: false, data: action.payload}
        case ActionType.FILTER_CONTACTS_BY_NAME:
            return { ...state, filter: action.payload}
        case ActionType.SHOW_ACTIVE_USERS:
            return { ...state, showActiveUsers: action.payload}
        case ActionType.GET_SELECTED_CONTACT:
            return { ...state, loadingSelectedContact: true, showSelectedContactPreview: true}
        case ActionType.GET_SELECTED_CONTACT_SUCCESS:
            return { ...state, loadingSelectedContact: false, selectedContact: action.payload}
        default:
            return state;
    }
};

export default reducer;