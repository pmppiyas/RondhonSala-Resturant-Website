import React, { useEffect, useState, useRef } from "react";
import MenuItem from "../../Home/MenuCard/MenuItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function SoupItem() {
  const [soup, setSoup] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch the menu data only once
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredSoup = data.filter((item) => item.category === "soup");
        setSoup(filteredSoup);
      });
  }, []);

  const displayedSoup = showAll ? soup : soup.slice(0, 6);

  const refs = useRef(displayedSoup.map(() => React.createRef()));

  return (
    <div className="flex flex-col items-center bg-base-100 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
        <TransitionGroup component={null}>
          {displayedSoup.map((item, index) => (
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
        {showAll ? "Show Less" : "See All Soup"}
      </button>
    </div>
  );
}
