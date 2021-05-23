import React, {useState} from 'react'
import Keyboard from './components/Keyboard';
import Score from './components/Score';
import {getFullYear} from './utils';

function App() {

    const [score, setScore] = useState(0)

  return (
    <div className="App">
        <Score value={score} />
        <Keyboard changeScore={setScore} />
        <div className="description">
            Смотрите на экран и нажимайте выделенные кнопки <br/>
            Старайтесь не опускать глаза на клавиатуру
        </div>

        <a href="https://github.com/Aventusa" className='author'>Aventusa {getFullYear()}</a>
    </div>
  );
}

export default App;
