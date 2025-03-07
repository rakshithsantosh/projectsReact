import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const display = (val) => {
    setInputValue(inputValue + val);
  };
  const calculate = () => {
    setInputValue(eval(inputValue));
  };
  return (
    <div>
      <input type="text" value={inputValue} />

      <span onClick={() => setInputValue("")}>C</span>

      <div className="operations">
        <span onClick={() => display("+")}>+</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("/")}>/</span>
      </div>

      <div className="numbers">
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("0")}>0</span>
      </div>

      <span onClick={calculate}>=</span>
    </div>
  );
};

export default Calculator;
