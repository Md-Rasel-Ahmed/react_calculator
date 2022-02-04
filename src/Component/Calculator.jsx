import { useState, useEffect } from "react";
import "./calculator.css";
function Calculator() {
  let [cal, setCal] = useState("");

  let evals = (e) => {
    setCal(eval(cal));
    console.log(eval(cal));
  };
  useEffect(() => {
    document.title = "React Calculator";
  });
  return (
    <>
      <h3>REACT CALCULATOR</h3>

      <div className="main">
        <input
          className="display"
          type="text"
          name="display"
          value={cal}
          disabled={true}
        />
        <div>
          <div className="first">
            <input
              type="button"
              value="%"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <span>
              <input
                type="button"
                value="CE"
                onClick={(e) => {
                  setCal("");
                }}
              />
            </span>
            <input
              type="button"
              value="C"
              onClick={(e) => {
                setCal("");
              }}
            />
            <input
              type="button"
              value="&times;"
              onClick={(e) => {
                setCal(cal.slice(0, -1));
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="&#43;"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="/"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="."
              onClick={(e) => {
                setCal((cal += e.target.value));
              }}
            />
            <input
              type="button"
              value="&#61;"
              onClick={(e) => {
                evals(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Calculator;
