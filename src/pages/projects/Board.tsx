import { useState } from 'react';

// MyButton Component
function MyButton() {
  function handleClick(): void {
    alert('You clicked me!');
  }

  return (
    <button className="btn btn-primary w-64 rounded-full mt-4" onClick={handleClick}>
      I'm a button
    </button>
  );
}

// Types for Board Props
interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
}

// Click Count Component
export function ClickCount(){
    const [count, setCount] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);
    
    return (
        <div className="card bg-base-100 shadow-lg p-6 mb-6">
          <button className="btn btn-outline mr-4" onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <button className="btn btn-outline" onClick={() => setCount2((count2) => count2 - 1)}>
            Count is {count2}
          </button>
          <MyButton />
        </div>
      );
}
// Board Component
export function Board({ xIsNext, squares, onPlay }: BoardProps) {


  // Handle click on square
  function handleClick(i: number): void {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center mt-6">

      {/* Game status */}
      <div className="text-2xl font-bold mb-4">{status}</div>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>

  );
}

// Types for Square Props
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

// Square Component
export function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="w-24 h-24 border-2 border-gray-500 text-3xl font-bold flex justify-center items-center hover:bg-gray-200 transition"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

// Game Component
export function Game() {
    const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares: (string | null)[]): void {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove: number): void {
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button className="btn btn-link text-blue-500 hover:text-blue-700" onClick={() => jumpTo(move)}>
            {description}
          </button>
        </li>
      );
    });
  
    return (
      <div className="mt-16 p-6">
        <div className="flex flex-row justify-around items-start space-x-6">
          {/* Place the ClickCount component */}
          <ClickCount />
  
          {/* Game board */}
          <div className="game-board mb-4">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
  
          {/* Game info (move history) */}
          <div className="game-info mt-4">
            <ol className="list-disc">{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
  

// Utility function to calculate the winner
function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
