import React, { useState } from "react";
import Icons from "../../assets/icons/socials/index";

import "./FieldInput.sass";

interface Item {
  [key: string]: string;
}

const inputIcons: Item = {
  user: Icons.user_b,
  telegram: Icons.telegram_b,
  whatsapp: Icons.whatsapp_b,
  phone: Icons.phone_b,
  email: Icons.email_b,
};

interface IFieldInput {
  type: "text" | "textarea" | "email" | "number" | "password" | "search";
  label?: string;
  name?: string;
  option?: string | "telegram" | "whatsapp" | "phone" | "email" | "user";
  value: string | undefined;
  error?: string;
  onChange: (e: any) => void;
  disabled?: boolean;
}

function FieldInput({
  type,
  label,
  name,
  option = "user",
  value,
  error,
  onChange,
  disabled,
}: IFieldInput) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const toggleFocus = (e: any) => {
    if (e.target.autocomplete) {
      e.target.autocomplete = "whatever";
    }
    setIsFocused(!isFocused);
  };

  const labelClassName: string = `input__label ${isFocused ? "active" : ""}`;

  const defineInputClass = (): string => {
    let inputClassName = "input__field";
    if (type === "textarea") {
      inputClassName += ` input__field_textarea`;
    } else {
      inputClassName += ` input__field_other`;
    }
    return inputClassName;
  };

  const defineBorderClass = (): string => {
    let borderClassName = `input__border ${isFocused ? "active" : ""}`;
    if (type === "textarea") {
      borderClassName += ` input__border_textarea`;
    } else {
      borderClassName += ` input__border_other`;
    }
    return borderClassName;
  };

  const Icon = inputIcons[option];

  return (
    <div>
      <label className="input" htmlFor={name}>
        <p className={labelClassName}>{label}</p>
        <div className={defineBorderClass()}>
          {type === "textarea" ? (
            <textarea
              name={name}
              disabled={disabled}
              className={defineInputClass()}
              onChange={onChange}
              onFocus={toggleFocus}
              onBlur={toggleFocus}
              value={value}
            />
          ) : (
            <>
              <input
                type={type}
                name={name}
                value={value}
                disabled={disabled}
                className={defineInputClass()}
                onChange={onChange}
                onFocus={toggleFocus}
                onBlur={toggleFocus}
                autoComplete="off"
              />
              <img
                src={Icon}
                alt={`иконка ${option}`}
                className="input__icon"
              />
            </>
          )}
        </div>
      </label>
      <p className="input__error">{error}</p>
    </div>
  );
}

export default FieldInput;
