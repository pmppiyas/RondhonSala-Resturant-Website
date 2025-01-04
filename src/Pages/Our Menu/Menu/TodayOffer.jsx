import React, { useEffect, useState } from "react";
import MenuItem from "./../../Home/MenuCard/MenuItem";
import SectionTitle from "../../../Components/Section Title/SectionTitle";

export default function TodayOffer() {
  const [offer, setOffer] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>
        setOffer(data.filter((item) => item.category === "offered"))
      );
  }, []);

  return (
    <div className="bg-base-100 py-8">
      <SectionTitle heading={"Today Offer"} subheading={"Don't Miss"}></SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
        {offer.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
}
