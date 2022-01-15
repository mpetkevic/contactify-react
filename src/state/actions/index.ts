import {ActionType} from "../action-types";
import {Contact, ContactsFilter} from "../../interfaces/contactInterfaces";

interface GetContactsAction {
    type: ActionType.GET_CONTACTS;
}

interface GetContactsSuccessAction {
    type: ActionType.GET_CONTACTS_SUCCESS;
    payload: {
        data: Contact[],
        cities: string[]
    };
}

interface GetContactsErrorAction {
    type: ActionType.GET_CONTACTS_ERROR;
    payload: string;
}

interface FilterContactsByName {
    type: ActionType.FILTER_CONTACTS_BY_NAME;
    payload: string;
}
interface FilterContacts {
    type: ActionType.FILTER_CONTACTS;
    payload: {
        filter: ContactsFilter,
        data: Contact[]
    };
}

interface SortContacts {
    type: ActionType.SORT_CONTACTS
    payload: {
        sortOrder: string,
        data: Contact[],
    }
}

interface GetSelectedContact {
    type: ActionType.GET_SELECTED_CONTACT
}

interface GetSelectedContactSuccess {
    type: ActionType.GET_SELECTED_CONTACT_SUCCESS
    payload: Contact
}


export type Action =
    | GetContactsAction
    | GetContactsSuccessAction
    | GetContactsErrorAction
    | FilterContactsByName
    | FilterContacts
    | SortContacts
    | GetSelectedContact
    | GetSelectedContactSuccess