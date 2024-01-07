import React from "react";

function Tag({ tag }) {
  return (
    <div className="flex items-center rounded-lg -skew-x-12 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300 mt-1 mr-1">
      {tag}
    </div>
  );
}

export default Tag;
