import React, { useEffect, useState, useRef } from "react";
import MenuItem from "../../Home/MenuCard/MenuItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function saladItem() {
  const [salad, setSalad] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredsalad = data.filter((item) => item.category === "salad");
        setSalad(filteredsalad);
      });
  }, []);

  const displayedsalad = showAll ? salad : salad.slice(0, 6);

  const refs = useRef(displayedsalad.map(() => React.createRef()));

  return (
    <div className="flex flex-col items-center bg-base-100 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
        <TransitionGroup component={null}>
          {displayedsalad.map((item, index) => (
            <CSSTransition
              key={item._id}
              timeout={300}
              classNames="fade"
              nodeRef={refs.current[index]}
            >
              <div ref={refs.current[index]}>
                <MenuItem item={item}></MenuItem>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      <button
        className="btn btn-outline border-0 border-b-4 mt-4"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "See All Salad"}
      </button>
    </div>
  );
}
