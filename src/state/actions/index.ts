import {ActionType} from "../action-types";
import {Contact} from "../../interfaces/contactInterfaces";

interface GetContactsAction {
    type: ActionType.GET_CONTACTS;
}

interface GetContactsSuccessAction {
    type: ActionType.GET_CONTACTS_SUCCESS;
    payload: Contact[];
}

interface GetContactsErrorAction {
    type: ActionType.GET_CONTACTS_ERROR;
    payload: string;
}

interface FilterContactsByName {
    type: ActionType.FILTER_CONTACTS_BY_NAME;
    payload: string;
}

interface ShowActiveUsers {
    type: ActionType.SHOW_ACTIVE_USERS;
    payload: Boolean
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
    | ShowActiveUsers
    | GetSelectedContact
    | GetSelectedContactSuccess