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
              <Url url={url} />
            </p>
            <p className="text-sky-200">{type}</p>
          </div>
        </div>
        <h4 className="font-normal">Problem Identification</h4>
        <section>{problem}</section>
        <h4 className="font-normal">Solution Development</h4>
        <section>{solution}</section>
        <Management management={management} />
        <Impact impact={impact} />
        <Contribution contribution={contribution} />
        <div className="flex justify-gap">
          {tags.map((tag, i) => (
            <Tag tag={tag} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Url({ url }) {
  if (!url) return null;
  return (
    <>
      <a href={url} target="blank">
        <img className="max-h-4 hover:max-h-5 duration-200" src={link} />
      </a>
    </>
  );
}
function Management({ management }) {
  if (!management) return null;
  return (
    <>
      <h4 className="font-normal">Team Management & Methodology</h4>
      <section>{management}</section>
    </>
  );
}
function Impact({ impact }) {
  if (!impact) return null;
  return (
    <>
      <h4 className="font-normal">Outcome and Impact</h4>
      <section>{impact}</section>
    </>
  );
}
function Contribution({ contribution }) {
  if (!contribution) return null;
  return (
    <>
      <h4 className="font-normal">
        Personal Contribution and Skills Highlight
      </h4>
      <section>{contribution}</section>
    </>
  );
}

export default Project;
