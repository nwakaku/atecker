import React from "react";
import webpic from "../../pic/Website designer-bro.png";
import graphic from "../../pic/Designer girl-cuate.png";
import video from "../../pic/Content creator-pana.png";
import mobile from "../../pic/Mobile development-bro.png";
import { SiWebmoney } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

const Service = () => {
  return (
    <section id="service" className="service">
      <h1 className="heading">our services</h1>

      <div className="row containered">
        <div className="image">
          <img
            src={
              "https://image.freepik.com/free-vector/software-development-programming-coding-learning-information-technology-courses-it-courses-all-levels-computing-hi-tech-course-concept_335657-191.jpg"
            }
            alt=""
          />
        </div>
        <div className="content">
          <h3>
            <SiWebmoney /> website development
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            voluptatem, tempore hic deserunt vel temporibus aperiam recusandae
            ratione, obcaecati at qui accusamus enim, laudantium eveniet.
            Inventore voluptas nemo placeat. Voluptas.
          </p>
          <a href="#">
            <button className="btn">Let's Chat</button>
          </a>
        </div>
      </div>

      <div className="row containered">
        <div className="content">
          <h3>
            <MdDesignServices /> Graphics Designers
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            voluptatem, tempore hic deserunt vel temporibus aperiam recusandae
            ratione, obcaecati at qui accusamus enim, laudantium eveniet.
            Inventore voluptas nemo placeat. Voluptas.
          </p>
          <a href="#">
            <button className="btn">Let's Chat</button>
          </a>
        </div>
        <div className="image">
          <img
            src={
              "https://image.freepik.com/free-vector/flat-world-graphics-day-illustration_23-2148880103.jpg"
            }
            alt=""
          />
        </div>
      </div>

      <div className="row containered">
        <div className="image">
          <video autoPlay loop>
            <source src="https://f.hubspotusercontent20.net/hubfs/165225/wevideo-website-theme/videos/thumb/business/Biz_Page_2.mp4" />
          </video>
        </div>
        <div className="content">
          <h3>
            <FaPhotoVideo /> Video Editing
          </h3>
          <p>
            Make video ads and publish in any format to optimize, engage and
            convert on YouTube, Facebook, Instagram and more.
            <br />
            <br />
            Create unique promo videos that drive results for your business.
            Leave a lasting impression with ultra high-quality resolution for
            the best viewing experience on any display.
          </p>
          <a href="#">
            <button className="btn">Let's Chat</button>
          </a>
        </div>
      </div>

      <div className="row containered">
        <div className="content">
          <h3>
            <MdOutlineAppSettingsAlt /> App Development
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            voluptatem, tempore hic deserunt vel temporibus aperiam recusandae
            ratione, obcaecati at qui accusamus enim, laudantium eveniet.
            Inventore voluptas nemo placeat. Voluptas.
          </p>
          <a href="#">
            <button className="btn">Let's Chat</button>
          </a>
        </div>
        <div className="image">
          <img
            src={
              "https://image.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg"
            }
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
