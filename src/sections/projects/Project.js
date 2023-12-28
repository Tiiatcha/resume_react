import React from "react";
import Tag from "../Tag";
import link from "../../assets/icons8-link-24.png";

function Project({
  image,
  title,
  url,
  type,
  date,
  problem,
  solution,
  management,
  impact,
  contribution,
  tags,
}) {
  return (
    <div className="flex mt-4 p-4 hover:backdrop-opacity-5 hover:backdrop-invert hover:bg-sky/5 text-white  rounded-[3px] duration-300">
      <div>
        <div className=" pb-2 mb-2 flex justify-gap gap-4 text-sky-400">
          <div className="font-normal">{date}</div>
          <div className="flex-1">
            <p className="font-normal flex justify-gap gap-2">
              {title}
              {url && (
                <a href={url} target="blank">
                  <img
                    className="max-h-4 hover:max-h-5 duration-200"
                    src={link}
                  />
                </a>
              )}
            </p>
            <p className="text-sky-200">{type}</p>
          </div>
        </div>
        <h4 className="font-normal">Problem Identification</h4>
        <section>{problem}</section>
        <h4 className="font-normal">Solution Development</h4>
        <section>{solution}</section>
        <h4 className="font-normal">Team Management & Methodology</h4>
        <section>{management}</section>
        <h4 className="font-normal">Outcome and Impact</h4>
        <section>{impact}</section>
        <h4 className="font-normal">
          Personal Contribution and Skills Highlight
        </h4>
        <section>{contribution}</section>
        <div className="flex justify-gap">
          {tags.map((tag, i) => (
            <Tag tag={tag} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
