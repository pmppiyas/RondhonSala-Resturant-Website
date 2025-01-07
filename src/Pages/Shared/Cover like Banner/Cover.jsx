import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

export default function Cover({
  image,
  title,
  subtitle,
  textsize,
  buttonName,
}) {
  return (
    <Parallax
      bgImage={image}
      strength={500}
      className="hero min-h-screen md:min-h-[550px] "
      blur={{ min: -15, max: 15 }}
    >
      <div className="hero-content text-neutral-content text-center bg-black bg-opacity-50">
        <div className="max-w-screen-md py-12 ">
          <h1
            className={`mb-5 text-${
              textsize || 7
            }xl font-bold text-white uppercase`}
          >
            {title}
          </h1>
          <p className="mb-5 text-white">{subtitle}</p>
          {buttonName ? (
            <Link to={`/order/${title}`}>
              <button className="btn btn-outline border-0   bg-white">
                {buttonName}
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </Parallax>
  );
}
