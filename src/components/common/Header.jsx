import React from "react";
import Btn from "./Btn";
import logo from "../../assets/imgs/logo.png";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-2">
      <div className="logo">
        <img src={logo} className="w-[25%]" alt="Logo" />
      </div>
      <Btn text={"Login"} link="/login" />
    </header>
  );
}
