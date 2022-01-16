import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type CheckBoxProps = {
    label: string,
    icon?: any,
    checked: boolean,
    onToggle?: () => void,
    onItemCheck?: (value: string, isChecked: boolean) => any ,
    color: string
}

const CustomCheckBox = (props: CheckBoxProps) => {

    const onClick = () => {
        if (props.onItemCheck) props.onItemCheck(props.label, props.checked)
        if (props.onToggle) props.onToggle()
    }
    return (<div>
        <input
            className="custom-checkbox"
            type="checkbox"
            name="show-active"
            onChange={() =>{}}
            checked={props.checked}/>
        <label
            htmlFor="show-active"
            onClick={onClick}
            style={{
                color: props.color
            }}
        >{props.label} {props.icon && <FontAwesomeIcon icon={props.icon} />}</label>
    </div>)
}

export default CustomCheckBox