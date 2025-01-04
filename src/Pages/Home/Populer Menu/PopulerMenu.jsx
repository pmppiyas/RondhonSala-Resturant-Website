import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuItem from "../MenuCard/MenuItem";

export default function PopulerMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerItems = data.filter((item) => item.category === "popular");
        setMenu(populerItems);
      });
  }, []);
  return (
    <div className="bg-gray-100 py-12 px-2 flex flex-col items-center">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"Populer Items"}
      ></SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-8 mx-auto">
        View Full Menu
      </button>
    </div>
  );
}
