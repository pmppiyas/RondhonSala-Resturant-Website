import React from "react";

export default function MenuItem({ item }) {
  const { name, price, image, recipe } = item;
  return (
    <div className="grid grid-cols-7 gap-4">
      <div className="col-span-2">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className=""
          src={image}
          alt={name}
        />
      </div>
      <div className="col-span-5">
        <h2 className="uppercase text-lg ">{name}</h2>
        <p>{recipe}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
}
