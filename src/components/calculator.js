import * as React from "react";
import "./calculator.css";
import { useState } from "react";
export default function Calculator() {
  const [result, setResult] = useState(" ");

  const handleclick = (event) => {
     setResult(result.concat(event.target.name)); 
  }

  const Clear = () => {
     setResult(" ")

  }

  const Backspace = () => {
     setResult(result.slice(0, -1));
  }

  const calculate = () => {
     try {
      setResult(eval(result).toString());
     } catch(err) {
        setResult("Error!")
     } 
  }

  return (
    <div className="CalcultorDiv">
      <form>
        <input type="text" value={result} placeholder="0"></input>
      </form>

      <div className="keypad">
        <button className = "highlight" onClick = {Clear} id ="Clear">Clear</button>
        <button className ="highlight" onClick = {Backspace} id = "Backspace">C</button>
        <button className = "highlight" name = "/" onClick = {handleclick}>&divide;</button>
        <button name = "7" onClick = {handleclick}>7</button>
        <button name = "8" onClick = {handleclick}>8</button>
        <button name = "9" onClick = {handleclick}>9</button>
        <button className = "highlight" name = "x" onClick = {handleclick}>&times;</button>
        <button name = "4" onClick = {handleclick}>4</button>
        <button name = "5" onClick = {handleclick}>5</button>
        <button name = "6" onClick = {handleclick}>6</button>
        <button className = "highlight" name = "-" onClick = {handleclick}>&ndash;</button>
        <button name = "1" onClick = {handleclick}>1</button>
        <button name = "2" onClick = {handleclick}>2</button>
        <button name = "3" onClick = {handleclick}>3</button>
        <button className = "highlight" name = "+" onClick = {handleclick}>+</button>
        <button name = "0" onClick = {handleclick}>0</button>
        <button name = "." onClick = {handleclick}>.</button>
        <button className = "highlight" onClick = {calculate} id = "Result" >=</button>
      </div>
    </div>
  );
}
