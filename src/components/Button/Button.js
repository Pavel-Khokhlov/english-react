import React from "react";

import "./Button.sass";

function Button({ type, className, onClick, children }) {
  
  return <button type={type} className={className} onClick={onClick}>{children}</button>;
}

export default Button;
