import { useState, useEffect } from "react";
import { MdWorkspacesOutline } from "react-icons/md";
import "./pricing.css";
import works from "../../works";

const category = {
  file: [
    {
      id: 1,
      text: "Logo",
      to: "logo",
    },
    {
      id: 2,
      text: "Instagram Filter",
      to: "filter",
    },
    {
      id: 3,
      text: "Custom Video",
      to: "video",
    },
    {
      id: 4,
      text: "Explainer Videos",
      to: "explainer",
    },
  ],
};

const Ourworks = () => {
  const { file } = category;
  const [activeLink, setActiveLink] = useState();
  const { products } = works;
  const present = products.filter((product) => product.categories === "logo");
  const [item, setItem] = useState(present);

  const filterItems = (category) => {
    if (category === "logo") {
      setItem(present);
      return;
    }
    const newItems = products.filter(
      (product) => product.categories === category
    );
    setItem(newItems);
  };

  return (
    <div className="body">
      <div className="top-banner">
        <p className="current-plan"> Your current Plan</p>
        <p className="plan-type"> Starter Trial . 500MAUs</p>
      </div>

      <div className="container">
        <div className="title">
          <p>
            <MdWorkspacesOutline />
            Our Works
          </p>
          <h1>Our Work Portfolio</h1>
        </div>

        <div className="toggle-switch">
          <span>Billed anually </span>
          <input type="checkbox" className="toggler" />
          <span> Billed monthly</span>
        </div>

        <div className="choose_plan">
          {file.map((data) => {
            const { id, text, to } = data;
            return (
              <p
                key={id}
                onClick={() => {
                  setActiveLink(id);
                  filterItems(to);
                }}
                className={id === activeLink ? "active_Item" : ""}
              >
                {text}
              </p>
            );
          })}
        </div>

        <div className="cards">
          {/* <!-- Starter Plan --> */}
          {item.map((product) => {
            if (product.categories === "video") {
              return (
                <div key={product.id} className="cardy" data-aos="flip-left">
                  <div className="info">
                    <video autoPlay muted loop>
                      <source src={product.url} />
                    </video>{" "}
                  </div>
                </div>
              );
            } else if (product.categories === "explainer") {
              return (
                <div key={product.id} className="cardy" data-aos="flip-left">
                  <div className="info">
                    <video autoPlay muted loop>
                      <source src={product.url} />
                    </video>{" "}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={product.id} className="cardy" data-aos="flip-left">
                  <div className="info">
                    <img src={product.url} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Ourworks;
