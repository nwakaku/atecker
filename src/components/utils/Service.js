import React from "react";
import graph from "../../pic/graph-removebg.png";
import { IoLogoAmplify } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

const Service = () => {
  return (
    <section id="service" className="service">
      <h1 className="heading">our services</h1>

      <div className="row containered">
        <div className="image">
          <img src={graph} alt="" />
        </div>
        <div className="content">
          <h3>
            <IoLogoAmplify /> Logo & Branding Solution
          </h3>
          <p>
            Creating a logo is nearly never on anyone’s priority list when
            building a new business. Among high-quality products, positive
            referrals, and branding, you might even doubt if you need a logo at
            all for a good business.
            <br />
            <br /> However, you cannot be farther from the truth. In business, a
            logo functions as the most critical tool in your promotional
            arsenal. It depicts the company’s core values and what it endeavors
            to offer. If executed properly, a logo ensures that your company is
            recognized and remembered.
          </p>
          <a href="#">
            <button className="btn">Let's Chat</button>
          </a>
        </div>
      </div>

      <div className="row containered">
        <div className="content">
          <h3>
            <MdDesignServices /> Graphics & Instagram Filters
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
            src={"https://i.ytimg.com/vi/ycPIjvAKOB4/maxresdefault.jpg"}
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
            <FaPhotoVideo /> Customized Video
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
            <MdOutlineAppSettingsAlt /> Animated Explainer Videos
          </h3>
          <p>
            “Animation can explain whatever the mind of man can conceive. This
            facility makes it the most versatile and explicit means of
            communication yet devised for quick mass appreciation.”
            <br />
            <br />
            We offer you in whatever language you choose with effiency of
            delivery
          </p>
          <a href="#">
            <button className="btn">Let's Chat</button>
          </a>
        </div>
        <div className="image">
          <video autoPlay loop>
            <source src="https://f.hubspotusercontent20.net/hubfs/165225/wevideo-website-theme/videos/thumb/homepage/Home_Page_3.mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Service;
