import React from "react";
import about from "../../pic/about.png";
import { MdAccessibilityNew } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="heading">about us</h1>

      <div className="row containered">
        <div className="content">
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <MdAccessibilityNew
              style={{ color: "#ff2e53", fontSize: "25px" }}
            />
            <p>About Us</p>
            <br />
          </div>

          <h3>We build technological products that build your business</h3>
          <p>
            We are an international team of creative and motivated people from
            all walks of life. We collectively believe that we can achieve our
            goals and provide high quality services to our clients at the same
            time. Our aim is to create win-win situations and let our work speak
            for itself!
          </p>
          <a href="#">
            <button className="btn">Let's Chat</button>
          </a>
        </div>

        <div className="image">
          <img src={about} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
