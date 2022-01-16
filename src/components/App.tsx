import React, {useEffect} from 'react';
import Header from "./Header";
import ContactsList from "./ContactsList";
import ContactPreview from "./ContactPreview";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import logo from "./../assets/images/React-icon.svg";


const App = () => {

    const { getContacts } = useActions();
    useEffect(() => {
        getContacts()
    }, [])

    const { loading, showSelectedContactPreview } = useTypedSelector(
        (state) => state.contacts
    );

    return (
        <div className="contactify-main">
            <div className="container">
                {loading ? <div className='contactify-loader-wrapper'>
                    <h1>Contactify</h1>
                    <img className="contactify-loader" src={logo} alt=""/>
                </div> : <>
                    <Header />
                    <div className="contactify-contacts-section">
                        <ContactsList />
                        {showSelectedContactPreview && <ContactPreview />}
                    </div>
                </>}

            </div>
        </div>
    );
};

export default App;