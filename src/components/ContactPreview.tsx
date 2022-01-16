import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import contactImage from './../assets/images/userpic.jpg';
import logo from "./../assets/images/React-icon.svg";

const ContactPreview = () => {
    const {selectedContact, loadingSelectedContact} = useTypedSelector(
        (state) => state.contacts
    );

    return (
        <div className='contact-preview__wrapper'>
            <div className='contact-preview__header' />
            {loadingSelectedContact ? (
                <div className="contact-preview__loader-wrapper">
                    <img className="contact-preview__loader" src={logo} alt=""/>
                </div>
            ) : (
                <>
                    <div className="contact-preview__image-wrapper">
                        <img src={contactImage} alt=""/>
                    </div>
                    <div className="contact-preview__info-section">
                        <div className="info-section-left-side">
                            <div>Name:</div>
                            <div>City:</div>
                            <div>Email:</div>
                            <div>Phone:</div>
                        </div>
                        <div className="info-section-right-side">
                            <div>{selectedContact && selectedContact.name}</div>
                            <div>{selectedContact && selectedContact.city}</div>
                            <div><a href={"mailto:" + selectedContact?.email }>{selectedContact && selectedContact.email}</a></div>
                            <div>{selectedContact && selectedContact.phone}</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ContactPreview