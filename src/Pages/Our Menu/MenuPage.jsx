import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover like Banner/Cover";
import menuImage from "../../assets/menu/banner3.jpg";
import dessertImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";

import TodayOffer from "./Menu/TodayOffer";
import DessertsItem from "./Menu/DessertsItem";
import PizzaItem from "./Menu/PizzaItem";
import SaladsItem from "./Menu/SaladsItem";
import SoupsItem from "./Menu/SoupsItem";

export default function MenuPage() {
  return (
    <div>
      <Helmet>
        <title>Our Menu || Rondhonsala</title>
      </Helmet>
      <Cover
        image={menuImage}
        title={"Our Menu"}
        subtitle={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        }
      ></Cover>
      <TodayOffer></TodayOffer>
      <Cover
        image={dessertImage}
        title={"DESSERTS"}
        textsize={4}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <DessertsItem></DessertsItem>
      <Cover
        image={pizzaImage}
        title={"PIZZA"}
        textsize={4}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <PizzaItem></PizzaItem>
      <Cover
        image={saladImage}
        title={"Salads"}
        textsize={4}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <SaladsItem></SaladsItem>
      <Cover
        image={soupImage}
        title={"SOUPS"}
        textsize={4}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <SoupsItem></SoupsItem>
    </div>
  );
}
