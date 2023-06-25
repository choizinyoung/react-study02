import styled from "styled-components";
import React from "react";

// import "./Button.css";

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #0b49a6;
  color: white;
  background: #0b49a6;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  @media (min-width : 768px) {
    width: 50%;
    margin: auto;
    background : #84ce71;
  }
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #0d4fb3;
    border-color: #0d4fb3;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
export default Button;
