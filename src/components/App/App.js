import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  // Setup the random number generator
  const [num, setNum] = useState(0)
  let randomNum = Math.floor(Math.random() * 10);
  const result = () => {
    return randomNum;
  };
  const resultHandle = (e) => {
    setNum(result())
  }

  // Set state for inputs
  const [p1, setP1] = useState()
  const [p2, setP2] = useState()
  // const [p3, setP3] = useState()
  const p1Handle = (e) => {
    setP1(e.target.value)
  }
  const p2Handle = (e) => {
    setP2(e.target.value)
  }
  // const p3Handle = (e) => {
  //   setP3(e.target.value)
  // }

  // Compare the players numbers with random one
  const [message, setMessage] = useState("")
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  
  useEffect(()=> {
    if (p1==num) {
      setMessage("Player 1 win!");
    }
    else if (p2==num) {
      setMessage("Player 2 win!")

    // else if (p3==num) {
    //   setMessage("Player 3 win!")
    } else {
      setMessage("Click START to run");
    }
  },[num])
  useEffect(()=> {
    if (message==="Player 1 win!") {
      setValue1(value1+1);
    }
    else if (message==="Player 2 win!") {
      setValue2(value2+1);
    }
  },[message])
  return (
    <div className="main">
      <h1>This is a random number game</h1>
      <p>Enter your number and press the START button. If the random number is equile
        with yours, then you are the winner!
      </p>
      <div>
        <p className="number">{num}</p>
        <button className="btn" onClick={resultHandle}>Start</button>
        <button className="btn reset" onClick={()=> (window.location.reload(false))}>Reset</button>
      </div>
      <div>
        <input className="inputs" type="number" pattern="[0-9]*" placeholder='Player 1' value={p1} onChange={p1Handle} />
        <input className="inputs" type="number" pattern="[0-9]*" placeholder='Player 2' value={p2} onChange={p2Handle} />
        {/* <input type="number" pattern="[0-9]*" placeholder='Player 3' value={p3} onChange={p3Handle} /> */}
      </div>
      <div>
        <p className="message" >{message}</p>
      </div>
      <div className="scores">
        <h2>Scores</h2>
        <li>Player 1:{value1}</li>
        <li>Player 2:{value2}</li>
      </div>
    </div>
  );
}

export default App;
