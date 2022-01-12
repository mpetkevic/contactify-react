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

            console.log("MS_NAMES", data)

            dispatch({
                type: ActionType.GET_CONTACTS_SUCCESS,
                payload: data,
            });
        } catch (err) {
            // dispatch({
            //     type: ActionType.SEARCH_REPOSITORIES_ERROR,
            //     payload: err.message,
            // });
        }
    };
};