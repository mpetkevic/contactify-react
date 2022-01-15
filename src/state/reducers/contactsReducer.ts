import {ActionType} from "../action-types";
import {Action} from "../actions";
import {Contact, ContactsFilter} from "../../interfaces/contactInterfaces";

interface ContactsState {
    loading: boolean;
    error: string | null;
    loadingSelectedContact: boolean,
    showSelectedContactPreview: boolean,
    selectedContact: Contact | null,
    data: Contact[];
    filteredContacts: Contact[];
    cities: string[];
    filter: ContactsFilter;
    sortOrder: string
}

const initialState = {
    loading: false,
    loadingSelectedContact: false,
    selectedContact: null,
    showSelectedContactPreview: false,
    error: null,
    data: [],
    filteredContacts: [],
    cities: [],
    filter: {
        name: '',
        city: null,
        isActive: false
    },
    sortOrder: 'desc'
};

const reducer = (
    state: ContactsState  = initialState,
    action: Action
): ContactsState => {
    switch (action.type) {
        case ActionType.GET_CONTACTS:
            return { ...state, loading: true };
        case ActionType.GET_CONTACTS_SUCCESS:
            return { ...state, loading: false, data: action.payload.data, filteredContacts: action.payload.data, cities: action.payload.cities}
        case ActionType.FILTER_CONTACTS:
            return { ...state, filteredContacts: action.payload.data, filter: action.payload.filter}
        case ActionType.SORT_CONTACTS:
            return { ...state, filteredContacts: action.payload.data, sortOrder: action.payload.sortOrder}
        case ActionType.GET_SELECTED_CONTACT:
            return { ...state, loadingSelectedContact: true, showSelectedContactPreview: true}
        case ActionType.GET_SELECTED_CONTACT_SUCCESS:
            return { ...state, loadingSelectedContact: false, selectedContact: action.payload}
        default:
            return state;
    }
};

export default reducer;