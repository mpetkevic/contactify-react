import React from 'react';
import {useActions} from "../hooks/useActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faEye } from "@fortawesome/free-solid-svg-icons";
import {showActiveUsers, sortContactsByName} from "../state/action-creators";


const Header = () => {

    const { sortContactsByName, showActiveUsers } = useActions();

    const onNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        sortContactsByName(e.target.value)
    }

    const onShowActiveToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        showActiveUsers(e.target.checked)
    }
    return (
        <div className="header">
            <div className="header-panel">
                <input className="header-panel__input-name" onChange={onNameInputChange} type="text" name="name" placeholder="Name"/>
                <div className="header-panel__city-select">
                    Select city
                    <FontAwesomeIcon icon={faSortDown} className="icon-down" />
                </div>
                <input className="header-panel__select-active-users" onChange={onShowActiveToggle} type="checkbox" name="show-active"/>
                <label htmlFor="show-active">Show Active <FontAwesomeIcon icon={faEye} color="#ffffff"  /></label>
                <button>Filter</button>
            </div>
            <h1>Contactify</h1>
        </div>
    )
}

export default Header;