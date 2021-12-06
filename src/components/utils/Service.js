import React from 'react';
import webpic from '../../pic/Website designer-bro.png';
import graphic from '../../pic/Designer girl-cuate.png';
import video from '../../pic/Content creator-pana.png';
import mobile from '../../pic/Mobile development-bro.png';
import { SiWebmoney } from 'react-icons/si'
import { MdDesignServices } from 'react-icons/md';
import { FaPhotoVideo } from 'react-icons/fa';
import { MdOutlineAppSettingsAlt } from 'react-icons/md'



const Service = () => {
    return (

<section id="service" className="service">

<h1 className="heading">our services</h1>

<div className="row">

  <div className="image">
    <img src={webpic} alt=""/>
  </div>
  <div className="content">
    <h3><SiWebmoney/> website development</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>

</div>

<div className="row">

  <div className="content">
    <h3><MdDesignServices/> Graphics Designers</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="image">
    <img src={graphic} alt=""/>
  </div>

</div>

<div className="row">

  
  <div className="image">
    <img src={video} alt=""/>
  </div>
  <div className="content">
    <h3><FaPhotoVideo/> Video Editing</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>

</div>

<div className="row">

  <div className="content">
    <h3><MdOutlineAppSettingsAlt/> App Development</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="image">
    <img src={mobile} alt=""/>
  </div>

</div>



</section>


    )
}

export default Service
