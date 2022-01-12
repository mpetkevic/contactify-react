import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faEye } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <div className="header">
            <div className="header-panel">
                <input className="header-panel__input-name" type="text" name="name" placeholder="Name"/>
                <div className="header-panel__city-select">
                    Select city
                    <FontAwesomeIcon icon={faSortDown} className="icon-down" />
                </div>
                <input className="header-panel__select-active-users" type="checkbox" name="show-active"/>
                <label htmlFor="show-active">Show Active <FontAwesomeIcon icon={faEye} color="#ffffff"  /></label>
                <button>Filter</button>
            </div>
            <h1>Contactify</h1>
        </div>
    )
}

export default Header;