import axios from "axios";
import React, { useState } from "react";
import { SignInForm, SignInPageLayout } from "./SignInPage.styled";
import Button from "../../components/Form/common/Button/Button";

export default function SignInPage() {
  const API = process.env.REACT_APP_API_URL;

  console.log(API);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (value) => {
    setEmail(value);
  };

  const passwordChangeHandler = (value) => {
    setPassword(value);
  };

  const onSubmitHandler = (e) => {
    e.preventEvent();
    axios
      .post(`${API}/auth/signin`, { email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.accessToken);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <SignInPageLayout>
      <h1>SIGNIN PAGE</h1>
      <SignInForm onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="email"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={(e) => emailChangeHandler(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => passwordChangeHandler(e.target.value)}
        />
        <Button type="submit" buttonContent="로그인"></Button>
      </SignInForm>
    </SignInPageLayout>
  );
}
