import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuItem from "../../MenuCard/MenuItem";

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
  console.log(menu);
  return (
    <div className="bg-gray-100 py-12">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"Populer Items"}
      ></SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
}
