import React from "react";

const SurfCampCard = ({ pic, topic, body1, body2, link }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex items-end justify-center shadow-lg"
      style={{
        backgroundImage: `url(/${pic})`,
      }}
    >
      <div className=" bg-opacity-50 text-white p-6 rounded-md text-center w-full max-h-full">
        <h1 className="text-2xl font-bold mb-4">{topic}</h1>
        <p className="text-sm mb-4">{body1}</p>
        <p className="text-sm mb-6">{body2}</p>
        <a href={link} className="text-white border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
          BOOK NOW
        </a>
      </div>
    </div>
  );
};

export default SurfCampCard;