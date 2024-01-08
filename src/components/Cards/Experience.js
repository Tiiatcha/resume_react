import React from "react";

function ExperienceCard({ from, to, id, company, title, children }) {
  return (
    <div className="flex p-4 hover:backdrop-opacity-5 hover:backdrop-invert hover:bg-sky/5 text-white  rounded-[3px] duration-300">
      <div>
        <div className=" pb-2 mb-2 flex justify-gap gap-4 text-sky-400">
          <div className="font-normal">
            {from}-{to}
          </div>
          <div className="flex-1">
            <p className="font-normal">{company}</p>
            <p className="text-sky-200">{title}</p>
          </div>
        </div>
        <article>{children}</article>
      </div>
    </div>
  );
}

export default ExperienceCard;
