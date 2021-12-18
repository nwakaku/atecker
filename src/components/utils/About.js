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
            With sheer customer satisfaction and retention in mind, we boast a
            zealous yet professional team of mobile app developers, designers,
            and creative engineers, who are profoundly dedicated to developing
            highly intriguing, intuitive mobile apps that cater to Fortune 500
            companies and leading global enterprises.
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
