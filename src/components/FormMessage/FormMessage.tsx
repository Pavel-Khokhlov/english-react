import React, { ChangeEvent, FormEvent, MouseEvent, MouseEventHandler, useState } from "react";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";

import "./FormMessage.sass";

import Icons from "../../assets/icons/socials/index";

interface IRadioContacts {
  name: string;
  src: string;
}

const radioContacts: IRadioContacts []= [
  {name: "telegram", src: Icons.telegram},
  {name: "whatsapp", src: Icons.whatsapp},
  {name: "phone", src: Icons.phone},
  {name: "email", src: Icons.email},
]

interface IRenderItem {
  item: IRadioContacts;
  onClick: MouseEventHandler<HTMLButtonElement>;
  active: string;
}

interface IMessage {
  name: string;
  contact: string;
  message: string;
}

function FormMessage() {
  const [value, setValue] = useState<IMessage>({
    name: "",
    contact: "",
    message: "",
  });
  const [radio, setRadio] = useState<string>("telegram");

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  const handleRadioClick = (e: MouseEvent<HTMLButtonElement>) => {
    const radioValue = e.currentTarget.name;
    setRadio(radioValue);
  };

  const contactLabel = radio === 'telegram' ? "Имя пользователя телеграм" : radio === "whatsapp" ? "Номер WhatsApp" : radio === "phone" ? "Номер телефона" : "E-mail";

  return (
    <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
      <p className="form__subtitle">Укажите предпочитаемый вид связи</p>
      <section className="form__radio">
      
        {Object.values(radioContacts).map((item: IRadioContacts, index: number) => {
          return (
            <RenderItem key={index} item={item} active={radio} onClick={handleRadioClick} />
          )
        })}
      </section>

      <FieldInput
        type="text"
        name="name"
        label="Имя"
        value={value.name}
        onChange={handleChange}
        error=""
      />
      <FieldInput
        type="text"
        name="contact"
        label={contactLabel}
        value={value.contact}
        onChange={handleChange}
        error=""
      />
      <FieldInput
        type="textarea"
        name="message"
        label="Напишите мне или оставьте отзыв."
        value={value.message}
        onChange={handleChange}
      />
      <Button type="submit" title="Отправить" main />
    </form>
  );
}

export default FormMessage;

const RenderItem = ({ item, onClick, active }: IRenderItem) => {
  const radioClassName = `form__label ${item.name === active ? "active" : ""}`;
  return (
    <button
      type="button"
      className={radioClassName}
      name={item.name}
      onClick={onClick}
    >
      <img src={item.src} alt={`иконка ${item.name}`} className="form__icon" />
    </button>
  );
};
