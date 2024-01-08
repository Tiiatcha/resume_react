import React from "react";
import style from "./style";

function Input({ icon, type, title, name, placeholder, value, helper }) {
  return (
    <div className="py-2">
      <div className="pb-1">{title}</div>
      <div className="flex">
        {icon ? (
          <span className="inline-flex items-center px-3 text-sm text-slate-400 bg-slate-800 border border-e-0 border-slate-700 rounded-s-md">
            {icon}
          </span>
        ) : null}
        <input
          className={style}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value ? value : null}
        />
      </div>
      <span></span>
    </div>
  );
}

export default Input;
