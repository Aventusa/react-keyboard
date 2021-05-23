import React from 'react';
import PropTypes from 'prop-types'

function Button({value, isActive}) {
    return (
        <div className={`button ${isActive ? 'active' : ''}`}>
            {value}
        </div>
    );
}

Button.propTypes = {
    value: PropTypes.string,
    isActive: PropTypes.bool
}

export default Button;