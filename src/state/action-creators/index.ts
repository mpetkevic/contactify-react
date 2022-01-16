import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import {store} from "../store";
import { Contact ,ContactsFilter} from "../../interfaces/contactInterfaces";

export const getContacts = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_CONTACTS,
        });

        try {
            const { data } = await axios.get('https://contactify-api.herokuapp.com/api/contacts');

            const cities: string[] = data.map((item: Contact) => item.city)

            dispatch({
                type: ActionType.GET_CONTACTS_SUCCESS,
                payload: {
                    data,
                    cities: Array.from(new Set(cities))
                },
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

export const filterContacts = (filter: ContactsFilter) => {
    const contacts = store.getState().contacts.data;

    const filtered = contacts.filter(contact => {

        const filterCity = () => {
            if (filter.city === null) return true
            return filter.city === contact.city;
        }

        if (filter.isActive) {
            return contact.name.toLowerCase().includes(filter.name.toLowerCase()) && contact.isActive === filter.isActive && filterCity()
        } else {
            return contact.name.toLowerCase().includes(filter.name.toLowerCase()) && filterCity()
        }
    });

    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FILTER_CONTACTS,
            payload: {
                data: filtered,
                filter
            },
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

export const sortContacts = (order:string) => {
    const contacts = store.getState().contacts.filteredContacts;

    const sortedContacts = contacts.sort((contactA: Contact, contactB: Contact) => {
        if (order === 'asc' && contactA.name > contactB.name) {
            return 1;
        } else {
            return -1;
        }
    });

    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SORT_CONTACTS,
            payload: {
                data: sortedContacts,
                sortOrder: order,
            },
        });
    }
}