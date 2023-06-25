import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
// import "./GoalInput.css";

const FormControlStyle = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color : ${(props) => {return props.invalid ? "red" : "black"}}
  }
  & input {
    display: block;
    width: 100%;
    border: ${(props) => {return props.invalid ? "2px dashed red;" : "1px solid #ccc;"}}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  & input:focus {
    outline: none;
    background: #b9c8de;
    border-color: #4171b9;
  }
`;

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeFn = (event) => {
    setEnteredValue(event.target.value);
  };

  useEffect(() => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
  }, [enteredValue]);
  const formSubmitFn = (event) => {
    event.preventDefault();
    //.trim()은 공백문자 없애주는 것
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitFn}>
      {/* <FormControlStyle className={!isValid ? "invalid" : ""}> */}
      <FormControlStyle invalid={!isValid}>
        {/* <label style={{color : isValid ? 'black' : 'red'}}> 목표달성앱</label>
        <input style={{borderColor : isValid ? 'black' : 'red', backgroundColor: isValid? '#00000011' : "ff000033"}} type="text" onChange={goalInputChangeFn} value={enteredValue} /> */}
        <label>목표달성앱</label>
        <input type="text" onChange={goalInputChangeFn} value={enteredValue} />
      </FormControlStyle>
      <Button type="submit">목표등록</Button>
    </form>
  );
};

export default Input;
