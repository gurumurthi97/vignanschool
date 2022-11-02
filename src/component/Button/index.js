import React from "react";
import "./style.css";
function Button({ text, onClick }) {
  return (
    <div className="btn" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default Button;
