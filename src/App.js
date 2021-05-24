import React, {useEffect, useState} from 'react'
import Keyboard from './components/Keyboard';
import Score from './components/Score';
import {getFullYear} from './utils';
import Life from './components/Life';

function App() {
    const defaultsLife = [1, 2, 3]
    const [life, setLife] = useState(defaultsLife)
    const [score, setScore] = useState(0)

    function changeLife() {
        setLife(prev => prev.slice(0, prev.length - 1))
    }

    useEffect(() => {
        if (!life.length) {
            setScore(0)
            setLife(defaultsLife)
        }
    }, [life])

  return (
    <div className="App">
        <Score value={score} />
        <Keyboard changeScore={setScore} changeLife={changeLife} />

        <div className="life-bar">
            {life.map(i => <Life key={i}/>)}
        </div>

        <div className="description">
            Смотрите на экран и нажимайте выделенные кнопки <br/>
            Старайтесь не опускать глаза на клавиатуру
        </div>
        <a href="https://github.com/Aventusa" className='author'>Aventusa {getFullYear()}</a>
    </div>
  );
}

export default App;
