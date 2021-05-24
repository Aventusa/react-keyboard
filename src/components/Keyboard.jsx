import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Button from './Button';
import {buttons} from '../buttons'
import getRandomIndex from '../utils';

function Keyboard({changeScore, changeLife}) {

    const [index, setIndex] = useState(getRandomIndex(buttons))

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [index])

    function handleKeyDown(e) {
        const key = e.key.toLowerCase()

        if (key === buttons[index]) {

            if (key === 'tab') {
                e.preventDefault()
            }

            changeScore(prev => prev + 5)
            setIndex(getRandomIndex(buttons))
        } else {
            changeLife()
        }
    }

    return (
        <div className='keyboard'>
            {buttons.map((btn, i) => <Button key={btn} value={btn} isActive={i === index}/>)}
        </div>
    );
}

Keyboard.propTypes = {
    changeScore: PropTypes.func,
    changeLife: PropTypes.func
}

export default Keyboard;