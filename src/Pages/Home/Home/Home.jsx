import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerMenu from "../Populer Menu/PopulerMenu";
import FeaturedItem from "../Highlight/FeaturedItem";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home || Rondhonsala</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
      <FeaturedItem></FeaturedItem>
      <Testimonial></Testimonial>
    </div>
  );
}
