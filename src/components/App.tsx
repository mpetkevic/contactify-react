import React, {useEffect} from 'react';
import Header from "./Header";
import ContactsList from "./ContactsList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import logo from "./../assets/images/React-icon.svg";


const App = () => {

    const { getContacts } = useActions();
    useEffect(() => {
        getContacts()
    }, [])

    const { data, error, loading } = useTypedSelector(
        (state) => state.contacts
    );

    return (
        <div className="contactify-main">
            <div className="container">
                {loading ? <div className='contactify-loader-wrapper'>
                    <img className="contactify-loader" src={logo} alt=""/>
                </div> : <>
                    <Header />
                    <ContactsList />
                </>}

            </div>
        </div>
    );
};

export default App;