import React, { useState } from "react";
import axios from "axios";
import { SignUpPageLayout, SignUpForm } from "./SignUpPage.styled";
import Button from "../../components/Form/common/Button/Button";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (value) => {
    setName(value);
  };

  const emailChangeHandler = (value) => {
    setEmail(value);
  };

  const passwordChangeHandler = (value) => {
    setPassword(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    axios
      .post(`${API}/auth/signup`, { userName: name, email, password })
      .then((res) => {
        console.log(res);
        if (res.success) {
          alert("회원가입이 완료되었습니다.");
          navigate("/sign-in");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <SignUpPageLayout>
      <h1>SIGN UP</h1>

      <SignUpForm onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          value={name}
          placeholder="이름을 입력하세요."
          onChange={(e) => nameChangeHandler(e.target.value)}
          autoFocus
        />

        <input
          type="text"
          value={email}
          placeholder="이메일을 입력하세요."
          onChange={(e) => emailChangeHandler(e.target.value)}
        />

        <input
          value={password}
          type="password"
          placeholder="비밀번호를 입력하세요."
          onChange={(e) => passwordChangeHandler(e.target.value)}
        />

        <Button type="submit" buttonContent="회원가입" />
      </SignUpForm>
    </SignUpPageLayout>
  );
}
