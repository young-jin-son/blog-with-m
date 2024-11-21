import React from "react";
import { ButtonStyle } from "./Button.styled";

export default function Button({ buttonType, onClickHandler, buttonContent }) {
  return (
    <ButtonStyle type={buttonType} onClick={onClickHandler}>
      {buttonContent}
    </ButtonStyle>
  );
}
