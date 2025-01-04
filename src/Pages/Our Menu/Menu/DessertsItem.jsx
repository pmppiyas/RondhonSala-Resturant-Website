import React, { useEffect, useState } from "react";
import MenuItem from "../../Home/MenuCard/MenuItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useMenu from "./useMenu";

export default function DessertsItem() {
  const [desserts, setDesserts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [menu, loading] = useMenu();

  useEffect(() => {
    if (menu.length > 0) {
      const filteredDesserts = menu.filter(
        (item) => item.category === "dessert"
      );
      setDesserts(filteredDesserts);
    }
  }, [menu]);

  const displayedDesserts = showAll ? desserts : desserts.slice(0, 6);

  if (loading) {
    return (
      <div className="min-h-full flex justify-center items-center bg-white text-blue-500 ">
        Loading...
      </div>
    );
  }

  // Render desserts after data is loaded
  return (
    <div className="flex flex-col items-center bg-base-100 py-8">
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 w-full">
        {displayedDesserts.map((item) => (
          <CSSTransition key={item._id} timeout={300} classNames="fade">
            <div>
              <MenuItem item={item}></MenuItem>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <button
        className="btn btn-outline border-0 border-b-4"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Show All Desserts"}
      </button>
    </div>
  );
}
