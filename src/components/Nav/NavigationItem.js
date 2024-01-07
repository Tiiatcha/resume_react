import React from "react";

function NavigationItem({ title, url, onClick }) {
  return (
    <li
      className="cursor-pointer 
                text-sky-400
                after::bg-sky-400 
                after:h-['3px'] 
                after:w-['50%'] 
    hover:text-sky-50 duration-300
    lg:border-none
    lg:p-0 p-4
     border-b border-slate-800
     flex justify-start"
    >
      <a href={url} onClick={onClick} className="h-full w-full">
        {title}
      </a>
    </li>
  );
}

export default NavigationItem;
