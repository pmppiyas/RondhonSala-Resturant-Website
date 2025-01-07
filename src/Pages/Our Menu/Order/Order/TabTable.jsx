import React from "react";
import useMenu from "../../Menu/useMenu";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link, useParams } from "react-router-dom";

export default function TabTable({ category }) {
  const [menu, loading] = useMenu();
  const { categorys } = useParams();
  console.log(categorys);
  if (loading) return <p>Loading...</p>;

  const filteredMenu = menu.filter((item) => item.category === category);

  return (
    <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMenu.map((item) => (
        <CSSTransition key={item._id} timeout={300} classNames="fade">
          <div className="card glass">
            <figure>
              <img
                src={item.image}
                alt={item.name || "Menu item"}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="card-actions justify-end">
                <Link to={`/order/:${item._id}`} className="btn btn-primary">
                  Order now!
                </Link>
              </div>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
