import React from 'react';
import PropTypes from 'prop-types'

function Score({value}) {
    return (
        <div className='score'>
           Счет: {value}
        </div>
    );
}

Score.propTypes = {
    value: PropTypes.number
}

export default Score;