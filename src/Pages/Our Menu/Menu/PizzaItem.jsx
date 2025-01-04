import React, { useEffect, useState } from "react";
import MenuItem from "../../Home/MenuCard/MenuItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PizzaItem() {
  const [pizza, setPizza] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>
        setPizza(data.filter((item) => item.category === "pizza"))
      );
  }, []);

  const displayedpizza = showAll ? pizza : pizza.slice(0, 6);

  return (
    <div className="flex flex-col items-center bg-base-100 py-8">
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 w-full">
        {displayedpizza.map((item) => (
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
        {showAll ? " See All Pizza" : "Show Less "}
      </button>
    </div>
  );
}
