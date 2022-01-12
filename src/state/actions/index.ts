import {ActionType} from "../action-types";

interface GetContactsAction {
    type: ActionType.GET_CONTACTS;
}

interface GetContactSuccessAction {
    type: ActionType.GET_CONTACTS_SUCCESS;
    payload: string[];
}
//
// interface SearchRepositoriesErrorAction {
//     type: ActionType.SEARCH_REPOSITORIES_ERROR;
//     payload: string;
// }

export type Action =
    | GetContactsAction
    | GetContactSuccessAction