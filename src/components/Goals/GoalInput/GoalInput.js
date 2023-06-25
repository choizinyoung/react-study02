import React, { useEffect, useState } from "react";

import Button from "../../UI/Button/Button";
import "./GoalInput.css";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true)
  const goalInputChangeFn = (event) => {
    setEnteredValue(event.target.value);
  };

  useEffect(()=>{
    if(enteredValue.trim().length > 0) {
      setIsValid(true)
    }
  },[enteredValue])
  const formSubmitFn = (event) => {
    event.preventDefault();
    //.trim()은 공백문자 없애주는 것
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("")
  };

  return (
    <form onSubmit={formSubmitFn}>
      <div className={`form_control ${!isValid ? "invalid" : ""}`}>
        {/* <label style={{color : isValid ? 'black' : 'red'}}> 목표달성앱</label>
        <input style={{borderColor : isValid ? 'black' : 'red', backgroundColor: isValid? '#00000011' : "ff000033"}} type="text" onChange={goalInputChangeFn} value={enteredValue} /> */}
        <label>목표달성앱</label>
				<input type="text" onChange={goalInputChangeFn} value={enteredValue} />
      </div>
      <Button type="submit">목표등록</Button>
    </form>
  );
};

export default Input;
