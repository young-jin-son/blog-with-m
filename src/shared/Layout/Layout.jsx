import React from "react";
import Header from "../../components/Form/common/Header/Header";
import Footer from "../../components/Form/common/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
