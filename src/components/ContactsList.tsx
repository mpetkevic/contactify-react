import React, {useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Contact} from "../interfaces/contactInterfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListUl, faArrowDown, faArrowUp, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const ContactsList = () => {
    const [isColumnSectionOpen, setColumnSelectionStatus] = useState(false)
    const [sortOrder, setSortOrder] = useState('asc')

    const {getSelectedContact} = useActions()

    const {data, filter, showActiveUsers, selectedContact} = useTypedSelector(
        (state) => state.contacts
    );

    const onColumnsSelectionToggleClick = () => {
      setColumnSelectionStatus(!isColumnSectionOpen)
    }

    const onChangeSortOrder = (order: string) => {
        setSortOrder(order)
    }

    const onUserSelect = (user: Contact) => {
        getSelectedContact(user.id)
    }

    const contacts = data?.sort((contactA: Contact, contactB: Contact) => {
        if(sortOrder === 'asc' && contactA.name > contactB.name) {
            return 1
        } else {
            return -1
        }
    }).filter(contact => {
        if(showActiveUsers) {
            if(contact.isActive) {
                return contact
            }
        } else {
            return contact
        }
    })
        .map(contact => {
        const surnameFirstSymbol = contact.surname[0] + '.'
        if(contact.name.toLowerCase().includes(filter.toLowerCase())) {
            return (
                <div
                    key={contact.id}
                    onClick={() => onUserSelect(contact)}
                    className={selectedContact && selectedContact.id === contact.id ? 'contact-item active' : 'contact-item'}>
                    <div className='contact-item__name'>{contact.name} {surnameFirstSymbol}</div>
                    <div className='contact-item__city'>
                        {contact.city}
                        {contact.isActive ? <FontAwesomeIcon icon={faEye} /> :  <FontAwesomeIcon icon={faEyeSlash} />}
                    </div>
                    <div className='contact-item__email'>
                        {contact.email}
                    </div>
                    <div className='contact-item__phone'>{contact.phone}</div>
                </div>
            )
        }
    })

    console.log({sortOrder})
    return (
        <div className="contactify-contacts-table">
            <div className="contactify-contacts-table__header">
                <div className="contactify-contacts-table__header-name">
                    Name
                    {sortOrder === 'asc' ?
                        <FontAwesomeIcon className='sort-icon' onClick={() => onChangeSortOrder('desc')} icon={faArrowUp}/>
                        :
                        <FontAwesomeIcon className='sort-icon' onClick={() => onChangeSortOrder('asc')} icon={faArrowDown}/>
                    }

                </div>
                <div className="contactify-contacts-table__header-city">City</div>
                <div className="contactify-contacts-table__header-email">Email</div>
                <div className="contactify-contacts-table__header-phone">Phone</div>
                <div
                    className={isColumnSectionOpen ?
                        'contactify-contacts-table__header-columns-selection-wrapper open'
                        :
                        'contactify-contacts-table__header-columns-selection-wrapper close'}
                    onClick={onColumnsSelectionToggleClick}
                >
                    <FontAwesomeIcon className="column-selection-toggle" icon={faListUl}/>
                    {isColumnSectionOpen && (
                        <div className="columns-selection-list">
                            <ul>
                                <li>Name</li>
                                <li>Email</li>
                                <li>City</li>
                                <li>Phone</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {contacts}
        </div>
    )
}

export default ContactsList;