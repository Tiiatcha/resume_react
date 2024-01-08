import React from "react";

function OrbitalColors() {
  return (
    <>
      <div
        className="fixed 
        pointer-events-none
                    z-0 
                    top-10 
                    -left-8 
                    w-72 
                    h-72 
                    bg-pink-400 
                    rounded-full 
                    filter blur-2xl translate(0px 0px) opacity-5 animate-blob"
      ></div>
      <div className="fixed pointer-events-none z-0 top-12 right-8 w-72 h-72 bg-sky-400 rounded-full filter blur-2xl translate(0px 0px)  opacity-5 animate-blob1"></div>
      <div className="fixed pointer-events-none z-0 bottom-8 left-36 w-96 h-96 bg-green-400 rounded-full filter blur-2xl translate(0px 0px)  opacity-5 animate-blob2"></div>
    </>
  );
}

export default OrbitalColors;
