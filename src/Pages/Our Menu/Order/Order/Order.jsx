import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../../Shared/Cover like Banner/Cover";
import orderImage from "../../../../assets/shop/banner2.jpg";
import TabTable from "./TabTable";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function Order() {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { categorys } = useParams();
  const initialIndex = categories.indexOf(categorys);
  const [tabIndex, setTabIndex] = useState(initialIndex || 0);

  return (
    <div>
      <Helmet>
        <title>Order Now || Rondhonsala</title>
      </Helmet>
      <Cover
        image={orderImage}
        title={"Our shop"}
        subtitle={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        }
      ></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"flex justify-center py-4"}>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINK</Tab>
        </TabList>
        <TabPanel>
          <TabTable category={"salad"}></TabTable>
        </TabPanel>
        <TabPanel>
          <TabTable category={"pizza"}></TabTable>
        </TabPanel>
        <TabPanel>
          <TabTable category={"soup"}></TabTable>
        </TabPanel>
        <TabPanel>
          <TabTable category={"dessert"}></TabTable>
        </TabPanel>
        <TabPanel>
          <TabTable category={"drinks"}></TabTable>
        </TabPanel>
      </Tabs>
    </div>
  );
}
