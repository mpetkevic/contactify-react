import React, {useState} from 'react';
import CustomCheckBox from "./CustomCheckBox";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Contact} from "../interfaces/contactInterfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListUl, faArrowDown, faArrowUp, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const ContactsList = () => {
    const [isColumnSectionOpen, setColumnSelectionStatus] = useState(false)
    const [columnsSelection, setColumnsSelection] = useState<string[]>(['Name', 'City', 'Email', 'Phone'])

    const {getSelectedContact, sortContacts} = useActions()

    const {filteredContacts, selectedContact, sortOrder} = useTypedSelector(
        (state) => state.contacts
    );

    const onColumnsSelectionToggleClick = () => {
      setColumnSelectionStatus(!isColumnSectionOpen)
    }

    const onUserSelect = (user: Contact) => {
        getSelectedContact(user.id)
    }

    const contacts = filteredContacts?.map(contact => {
        const surnameFirstSymbol = contact.surname[0] + '.'
            return (
                <div
                    key={contact.id}
                    onClick={() => onUserSelect(contact)}
                    className={selectedContact && selectedContact.id === contact.id ? 'contact-item active' : 'contact-item'}>
                    {columnsSelection.includes('Name') && (
                        <div className='contact-item__name'>{contact.name} {surnameFirstSymbol}</div>
                    )}
                    {columnsSelection.includes('City') && (
                        <div className='contact-item__city'>
                            {contact.city}
                            {contact.isActive ? <FontAwesomeIcon icon={faEye} /> :  <FontAwesomeIcon icon={faEyeSlash} />}
                        </div>
                    )}
                    {columnsSelection.includes('Email') && (
                        <div className='contact-item__email'>
                            {contact.email}
                        </div>
                    )}
                    {columnsSelection.includes('Phone') && (
                        <div className='contact-item__phone'>{contact.phone}</div>
                    )}
                </div>
            )
    })

    const onColumnsCheckboxClick = (name: string, isChecked: boolean) => {
        if(isChecked) {
            const filteredColumns = columnsSelection.filter(item => item !== name)
            setColumnsSelection(filteredColumns)
        } else {
            setColumnsSelection([...columnsSelection, name])
        }
    }

    const columnsSelectionCheckboxes = () => {
        const columnTitles = ['Name', 'City', 'Email', 'Phone']

        return columnTitles.map((columnTitle: string) => {
            const isColumnShown: boolean = columnsSelection.includes(columnTitle)

            return (<li>
                <CustomCheckBox onItemCheck={onColumnsCheckboxClick} label={columnTitle} checked={isColumnShown} color="#4f4d43"/>
            </li>)
        })
    }

    return (
        <div className="contactify-contacts-table">
            <div className="contactify-contacts-table__header">
                {columnsSelection.includes('Name') && (
                    <div className="contactify-contacts-table__header-name">
                        Name
                        {sortOrder === 'asc' ?
                            <FontAwesomeIcon className='sort-icon' onClick={() => sortContacts('desc')} icon={faArrowUp}/>
                            :
                            <FontAwesomeIcon className='sort-icon' onClick={() => sortContacts('asc')} icon={faArrowDown}/>
                        }

                    </div>
                )}
                {columnsSelection.includes('City') && (
                    <div className="contactify-contacts-table__header-city">City</div>
                )}
                {columnsSelection.includes('Email') && (
                    <div className="contactify-contacts-table__header-email">Email</div>
                )}
                {columnsSelection.includes('Phone') && (
                    <div className="contactify-contacts-table__header-phone">Phone</div>
                )}
                <div
                    className={isColumnSectionOpen ?
                        'contactify-contacts-table__header-columns-selection-wrapper open'
                        :
                        'contactify-contacts-table__header-columns-selection-wrapper close'}
                >
                    <FontAwesomeIcon className="column-selection-toggle" onClick={onColumnsSelectionToggleClick} icon={faListUl}/>
                    {isColumnSectionOpen && (
                        <div className="columns-selection-list">
                            <ul>
                                {columnsSelectionCheckboxes()}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="contactify-contacts-table__content">
                {isColumnSectionOpen && <div className="contactify-contacts-table__content-hover" />}
                {contacts}
            </div>
        </div>
    )
}

export default ContactsList;