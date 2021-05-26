import React, { useState } from 'react';
import Board from './components/Board/Board';
import './App.css';

function calculateWinner(squares, movesCount) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }

  if (movesCount === 9)
    return "Draw";

  return null;
}

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [next, setNext] = useState('X');
  const winner = calculateWinner(history[stepNumber], stepNumber);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) 
      return;

    squares[i] = next;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setNext(next === 'X' ? 'O' : 'X');
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setNext(step % 2 === 0 ? 'X' : 'O');
  };

  const historyList = history.map((step, move) =>
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{move ? `Go to move ${move}` : "Go to Start"}</button>
    </li>);

  return (
    <div id="app">
      <header id="header"><h1>Tic Tac Toe</h1></header>
      <div id="game">
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </div>
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          <ul>{historyList}</ul>
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + next}</h3>
      </div>
      <footer id="footer">Jakub Korzeniewski &copy; 2021</footer>
    </div>
  );
}

export default App;