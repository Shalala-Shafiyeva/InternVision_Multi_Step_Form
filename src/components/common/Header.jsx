import React from "react";
import Btn from "./Btn";

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center p-6">
      <div className="logo">
        <img src="../../assets/imgs/logo.png" alt="Logo" />
      </div>
      <Btn text={"Login"}/>
    </header>
  );
}
