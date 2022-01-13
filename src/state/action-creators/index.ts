import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const getContacts = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_CONTACTS,
        });

        try {
            const { data } = await axios.get('https://contactify-api.herokuapp.com/api/contacts');

            dispatch({
                type: ActionType.GET_CONTACTS_SUCCESS,
                payload: data,
            });
        } catch (err:any) {
            const message = err.message
            dispatch({
                type: ActionType.GET_CONTACTS_ERROR,
                payload: message,
            });
        }
    };
};

export const sortContactsByName = (filter: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FILTER_CONTACTS_BY_NAME,
            payload: filter,
        });
    }
}

export const showActiveUsers = (checkStatus: Boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SHOW_ACTIVE_USERS,
            payload: checkStatus,
        });
    }
}

export const getSelectedContact = (contactId: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_SELECTED_CONTACT,
        });

        try {
            const { data } = await axios.get('https://contactify-api.herokuapp.com/api/contacts/' + contactId);

            dispatch({
                type: ActionType.GET_SELECTED_CONTACT_SUCCESS,
                payload: data,
            });
        } catch (err: any) {
            console.log({err})
        }
    };
}