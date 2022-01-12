import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const ContactsList = () => {
    const { data, error, loading } = useTypedSelector(
        (state) => state.contacts
    );

    const contacts = data?.map(contact => {
        console.log({contact})
        return (
            <div>
                <div>{contact.name}</div>
                <div>{contact.surname}</div>
                <div>{contact.email}</div>
                <div>{contact.phone}</div>
            </div>
        )
    })
    return (
        <div>
            {contacts}
        </div>
    )
}

export default ContactsList;