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
            We don't just sell websites, we create websites that SELL.
            <br />
            <br />
            Let us take you into a deeper experience, make a moment a lasting
            conveyable memory. Let us help build your tribe.
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
            “There are three responses to a piece of design – yes, no, and WOW!
            Wow is the one we give you.
            <br />
            <br />
            The key to great ideas is not having them, it is executing them. And
            great ideas come from problems. As designers we call problems,
            briefs and we call reactions to problems, concepts.” – Atecker
          </p>
          <a href="#">
            <button className="btn">Let's Chat</button>
          </a>
        </div>
        <div className="image">
          <img
            src={
              "https://image.freepik.com/free-vector/graphic-designer-digital-illustrator-concept_277904-12045.jpg"
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
            A picture is worth a thousand words.......and a video is worth a
            million pictures.....
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
            The future of mobile is the future of online. It is how people
            access online content now.
            <br />
            <br />
            Mobile is becoming not only the new digital hub, but also the bridge
            to the physical world. That’s why mobile will affect more than just
            your digital operations — it will transform your entire business.
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
