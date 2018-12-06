import React from 'react';
import './Checkbox.scss';

function Checkbox(props) {
    return (
        <label className={"checkbox " + props.className}>
            <input
                className="checkbox__input"
                type="checkbox"
                name={props.name}
                checked={props.checked}
                onChange={props.onChange} />
            <span className="checkbox__check"></span>
            <span className="checkbox__label">{props.value}</span>
        </label>
    );
}

export default Checkbox;