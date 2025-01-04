import React from "react";
import { Parallax } from "react-parallax";

export default function Cover({ image, title, subtitle, textsize }) {
  return (
    <Parallax
      bgImage={image}
      strength={500}
      className="hero min-h-screen md:min-h-[550px] "
      blur={{ min: -15, max: 15 }}
    >
      <div className="hero-content text-neutral-content text-center bg-black bg-opacity-50">
        <div className="max-w-screen-md py-12">
          <h1 className={`mb-5 text-${textsize || 7}xl font-bold text-white`}>
            {title}
          </h1>
          <p className="mb-5 text-white">{subtitle}</p>
        </div>
      </div>
    </Parallax>
  );
}
