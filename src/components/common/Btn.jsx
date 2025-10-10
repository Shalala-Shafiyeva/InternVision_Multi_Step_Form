import React from "react";

export default function Btn({ text, icon }) {
  return (
    <button className="py-2 px-8 rounded-[32px]  text-rose-100 bg-rose-700">
      {text && <span>{text}</span>}
      {icon && <span>{icon}</span>}
    </button>
  );
}
