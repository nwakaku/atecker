import React from "react";
import { MdAccessibilityNew } from "react-icons/md";
import about from "../../pic/aa.png";
import { useHistory } from "react-router-dom";

const About = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/microroute");
  };

  return (
    <section id="about" className="about" data-aos="fade-down-right">
      <h1 className="heading">about us</h1>

      <div className="row containered">
        <div className="content">
          <h3>We build technological products that build your business</h3>
          <p>
            We are an international team of creative and motivated people from
            all walks of life. We collectively believe that we can achieve our
            goals and provide high quality services to our clients at the same
            time. Our aim is to create win-win situations and let our work speak
            for itself!
          </p>
          <a href="#">
            <button onClick={() => handleClick()} className="btn">
              Learn More
            </button>
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
