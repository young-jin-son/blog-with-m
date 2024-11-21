import axios from "axios";
import React from "react";

export default function MainPage() {
  const API = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");
  const onClickHandler = () => {
    axios
      .get(`${API}/boards`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h1>MAIN PAGE</h1>
      <button onClick={onClickHandler}>GET BOARD</button>
    </div>
  );
}
