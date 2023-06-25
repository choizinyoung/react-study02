import styled from "styled-components";
import React from "react";

import "./Button.css";

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };
const Button = (props) => {
  return (
    <>
      <button type={props.type} className="button" onClick={props.onClick}>
        button
      </button>
    </>
  );
};

export default Button;
