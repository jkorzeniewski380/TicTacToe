import React from "react";
import Square from "../Square/Square";
import './board.css';

function Board({ squares, onClick }) {
    const boardContent = squares.map((square, idx) => 
        <Square key={idx} value={square} onClick={() => onClick(idx)} />);

    return (
        <div className="board">
            {boardContent}
        </div>
    );
}

export default Board;