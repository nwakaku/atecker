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
          <h1 class="banner">
            Animated Explainer Videos that tastes different
          </h1>
          <h3 class="slogan">
            if pictures speak louder than words,videos speak even louder.we
            produce inspirational animated videos for business globally
          </h3>
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
            "url('https://i.ytimg.com/vi/_ct57yEA14A/maxresdefault.jpg')",
        }}
      >
        <div className="home_text">
          <h1 class="banner">Digital Experience & Engineered To Perform</h1>
          <h3 class="slogan">
            we take integrated approach to creating highly engaging Digital
            properties and & focused creative solutions
          </h3>
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
            "url('https://justcreative.com/wp-content/uploads/2021/05/alexander-shatov-ENOcRpYwT68-unsplash-scaled.jpg')",
        }}
      >
        <div className="home_text">
          <h1 class="banner">Innovative Logo & Branding Solution</h1>
          <h3 class="slogan">
            We are committed toward professional logo designs tailored to your
            brand's culture,core values and distinction
          </h3>
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
