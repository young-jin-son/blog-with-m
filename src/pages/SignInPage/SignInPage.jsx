import axios from "axios";
import React, { useState } from "react";

export default function SignInPage() {
  const API = process.env.REACT_APP_API_URL;

  console.log("API", API);
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
    <div>
      <h1>SIGNIN PAGE</h1>
      <form onSubmit={(e) => onSubmitHandler(e)}>
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
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
