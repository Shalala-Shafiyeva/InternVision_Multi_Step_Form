import React from "react";
import { Link } from "react-router-dom";

export default function Btn({ text, icon, link }) {
  return (
    <Link to={link} className="w-[max-content] py-2 px-8 rounded-[32px] flex items-center gap-2 text-rose-100 bg-blue-700 border border-blue-700 hover:bg-blue-600 transition-all duration-200 ease-in-out">
      {text && <span>{text}</span>}
      {icon && <span>{icon}</span>}
    </Link>
  );
}
