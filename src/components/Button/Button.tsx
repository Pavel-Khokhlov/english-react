import React, { ReactNode } from "react";

import "./Button.sass";

interface IButton {
  type?: "button" | "submit" | "reset" | undefined;
  className: string;
  onClick: () => void;
  children: ReactNode;
}

function Button({ type, className, onClick, children }: IButton) {
  
  return <button type={type} className={className} onClick={onClick}>{children}</button>;
}

export default Button;
