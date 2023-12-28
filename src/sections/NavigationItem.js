import React from "react";
//after:content-['*'] after:bg-sky-400 h-[3px] after:w-[50%] after:left-0 after:-bottom-[5px] after:absolute duration-300
function NavigationItem({ title, url }) {
  return (
    <li
      className="cursor-pointer 
                text-sky-400
                after::bg-sky-400 
                after:h-['3px'] 
                after:w-['50%'] 
    hover:text-sky-50 duration-300"
    >
      <a href={url}>{title}</a>
    </li>
  );
}

export default NavigationItem;
