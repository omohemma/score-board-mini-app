import * as React from 'react';
import { useContext } from 'react';

// import ManchesterUnited from './assets/images/manchester-united.png';
// import LiverpoolFC from './assets/images/liverpool-fc.png';
import { ScoreContext } from './context/scores.context';

import './App.css';

function App() {
  const { scores, incrementScore, decrementScore } = useContext(ScoreContext);

  return (
    <div className="App">
      <h1>Score Board</h1>
      <div className="score-board">
        <img
          className=""
          width="180"
          height="240"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png"
          alt="Liverpool FC"
        />
        <h1>{scores.home}</h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1>{scores.away}</h1>
        <img
          className=""
          width="240"
          height="240"
          src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c4e7.png"
          alt="Manchester United"
        />
      </div>
      <div>
        <button onClick={() => incrementScore('home')}>Goal!!!</button>
        <button onClick={() => decrementScore('home')}>Reverse Goal!!!</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => incrementScore('away')}>Goal!!!</button>
        <button onClick={() => decrementScore('away')}> Reverse Goal!!!</button>
      </div>
    </div>
  );
}

export default App;
