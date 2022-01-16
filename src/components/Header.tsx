import React, {useState} from 'react';
import CustomCheckBox from "./CustomCheckBox";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const { filterContacts } = useActions();
    const [searchName, setSearchName ] = useState('')
    const [isActiveContactsShow, setActiveContactsShow] = useState(false)
    const [isCitiesListOpen, setCitiesListStatus] = useState(false)
    const [selectedCity, setSelectedCity] = useState<string | null>(null)

    const {cities} = useTypedSelector(
        (state) => state.contacts
    );

    const onNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.target.value)
    }

    const onCitiesToggle = () => {
        setCitiesListStatus(true)
    }

    const onShowActiveToggle = () => {
        setActiveContactsShow(!isActiveContactsShow)
    }

    const selectCity = (city: string| null) => {
        setSelectedCity(city)
    }

    const setFilter = () => {
        const filter = {
            name: searchName,
            city: selectedCity,
            isActive: isActiveContactsShow,
        }
        filterContacts(filter)
    }

    const citiesList = cities.map((city:string) => {
        return <div className="city-selection-item" onClick={() => onCityClick(city)}>{city}</div>
    })

    const onCityClick = (city: string | null) => {
        setCitiesListStatus(false)
        selectCity(city)
    }


    return (
        <div className="header">
            <div className="header-panel">
                <input className="header-panel__input-name" onChange={onNameInputChange} type="text" name="name" placeholder="Name"/>
                <div className="header-panel__city-selection-wrapper">
                    <div className="header-panel__city-select" onClick={onCitiesToggle}>
                        {selectedCity ? selectedCity : 'Select city'}
                        <FontAwesomeIcon icon={faSortDown} className="icon-down"  />
                    </div>
                    {isCitiesListOpen && (<div className="cities-selection-wrapper">
                        <div className="city-selection-item" onClick={() => onCityClick(null)}>All</div>
                        {citiesList}
                    </div>)}
                </div>
                <CustomCheckBox
                    label="Show Active"
                    icon={faEye}
                    color="#ffffff"
                    checked={isActiveContactsShow}
                    onToggle={onShowActiveToggle}
                />
                <button className="header-panel__filter-button" onClick={setFilter}>Filter</button>
            </div>
            <h1>Contactify</h1>
        </div>
    )
}

export default Header;