import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerMenu from "../Populer Menu/PopulerMenu";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
    </div>
  );
}
