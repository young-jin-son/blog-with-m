import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { HeaderLayout } from "./Header.styled";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <Button
        onClickHandler={() => navigate("/sign-in")}
        buttonContent="SIGN IN"
      />
      <Button
        onClickHandler={() => navigate("/sign-up")}
        buttonContent="SIGN UP"
      ></Button>
    </HeaderLayout>
  );
}
