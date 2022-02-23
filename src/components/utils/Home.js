import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/payment");
  };
  return (
    <Carousel autoPlay showArrows={true} infiniteLoop={true} swipeable={false}>
      <section
        id="home"
        class="home"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ')",
        }}
      >
        <div className="home_text">
          <div>
            <h1 class="banner">
              Animated Explainer Videos that tastes different
            </h1>
            <h3 class="slogan">
              Wisdom is supreme; therefore get wisdom. Though it cost all you
              have, get understanding.
            </h3>
          </div>

          <a href="#">
            <button onClick={handleClick}>Let's Chat</button>
          </a>
        </div>

        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>

        <div class="fas fa-cog nut1"></div>
        <div class="fas fa-cog nut2"></div>
      </section>

      <section
        id="home"
        class="home"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg)",
        }}
      >
        <div className="home_text">
          <div>
            <h1 class="banner">Digital Experience & Engineered To Perform</h1>
            <h3 class="slogan">
              Our purpose is that you may be encouraged in heart and united in
              love, so that you may have the full riches of complete
              understanding, in order that you may know the mystery of God,
            </h3>
          </div>

          <a href="#">
            <button onClick={handleClick}>Let's Chat</button>
          </a>
        </div>

        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>

        <div class="fas fa-cog nut1"></div>
        <div class="fas fa-cog nut2"></div>
      </section>

      <section
        id="home"
        class="home"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/flat-line-design-website-banner-market-research-modern-vector-illustration-web-marketing-print-material-69761306.jpg')",
        }}
      >
        <div className="home_text">
          <div>
            <h1 class="banner">Innovative Logo & Branding Solution</h1>
            <h3 class="slogan">
              Do not be conformed to this world, but be transformed by the
              renewal of your mind, that by testing you may discern what is the
              will of God, what is good and acceptable and perfect.
            </h3>
          </div>

          <a href="#">
            <button onClick={handleClick}>Let's Chat</button>
          </a>
        </div>

        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>

        <div class="fas fa-cog nut1"></div>
        <div class="fas fa-cog nut2"></div>
      </section>
    </Carousel>
  );
};

export default Home;
