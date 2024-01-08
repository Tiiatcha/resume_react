import React from "react";
import style from "./style";

export default function TextArea({
  icon,
  title,
  name,
  placeholder,
  value,
  rows,
}) {
  return (
    <div className="py-2">
      <div className="pb-1">{title}</div>
      <textarea
        className={style}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value ? value : null}
        rows={rows ? rows : "4"}
      ></textarea>
      <span></span>
    </div>
  );
}
