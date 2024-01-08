import React from "react";

function Section({ id, title, children }) {
  return (
    <div id={id} className="mb-20">
      <h4 className="text-4xl font-extrabold text-slate-800">{title}</h4>
      {children}
    </div>
  );
}

export default Section;
