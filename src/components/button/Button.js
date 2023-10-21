// Taken from https://github.com/briancodex/react-website-v1/blob/master/src/components/Button.js

import React from "react";
import './Button.css';
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--orange'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize 
        : SIZES[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button
