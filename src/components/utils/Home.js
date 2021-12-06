import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
            <Carousel autoPlay showArrows={true} infiniteLoop={true}>
                <section id="home" class="home" style={{backgroundImage: "url('https://www.logoknox.com/assets/images/home-banner1.jpg ')"}}>
                    <div className='home_text'>
                    <h1 class="banner">Animated Explainer Videos that tastes different</h1>
                    <h3 class="slogan">if pictures speak louder than words,videos speak even 
                    louder.we produce inspirational animated videos for business globally</h3>
                    <a href="#"><button>get started</button></a>
                    </div>

                    


                    <div class="wave wave1"></div>
                    <div class="wave wave2"></div>
                    <div class="wave wave3"></div>

                    <div class="fas fa-cog nut1"></div>
                    <div class="fas fa-cog nut2"></div>
                </section> 

                <section id="home" class="home" style={{backgroundImage: "url('https://www.logoknox.com/assets/images/home-web-banner.jpg')"}}>
                    <div className='home_text'>
                    <h1 class="banner">Digital Experience & Engineered To Perform</h1>
                    <h3 class="slogan">we take integrated approach to creating highly engaging Digital 
                    properties and & focused creative solutions</h3>
                    <a href="#"><button>get started</button></a>
                    </div>



                    <div class="wave wave1"></div>
                    <div class="wave wave2"></div>
                    <div class="wave wave3"></div>

                    <div class="fas fa-cog nut1"></div>
                    <div class="fas fa-cog nut2"></div>
                </section>
                    
                <section id="home" class="home" style={{backgroundImage:"url('https://www.logoknox.com/assets/images/home-banner2.jpg')"}}>
                    <div className='home_text'>
                    <h1 class="banner">Innovative Logo & Branding Solution</h1>
                    <h3 class="slogan">We are committed toward professional logo
                     designs tailored to your brand's culture,core values and distinction</h3>
                    <a href="#"><button>get started</button></a>
                    </div>



                    <div class="wave wave1"></div>
                    <div class="wave wave2"></div>
                    <div class="wave wave3"></div>

                    <div class="fas fa-cog nut1"></div>
                    <div class="fas fa-cog nut2"></div>
                </section>               
            </Carousel>



    )
}

export default Home
