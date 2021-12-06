import { useState,useEffect } from 'react';
import { GiRingedPlanet } from 'react-icons/gi'
import './pricing.css';
import data from '../../data';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



  const category = {
    file : [
        {
            "id":1,
            "text":"Logo",
            "to": 'logo'
        },
        {
            "id":2,
            "text":"Web",
            "to": "web"
        },
        {
            "id":3,
            "text":"Video",
            'to': 'video'

        },
        {
            "id":4,
            "text":"App",
            'to': 'app'
        },
    ]
}

const UtilPricing = () => {

      const { file } = category;
      const [activeLink, setActiveLink] = useState();
      const {products} = data;
      const present = products.filter((product) => 
      product.categories === 'logo')
      const [item, setItem] = useState(present);

      const filterItems = (category) => {
        if (category === 'logo') {
            setItem(present);
            return;
        }
        const newItems = products.filter((product) => product.categories 
        === category)
        setItem(newItems)
      }

      useEffect(() => {
 AOS.init();
 
}, [present])

    return (
        <div className='body'>
            <div className="top-banner">
        <p className="current-plan"> Your current Plan</p>
        <p className="plan-type"> Starter Trial . 500MAUs</p>
    </div>

    <div className="container">
        <div className='title'>
            <p><GiRingedPlanet/>Our Pricing</p>
            <h1 >Creative design is our passion</h1>
        </div>
        
      <div className="toggle-switch">
            <span>Billed anually </span>
            <input type="checkbox" className="toggler"/>
            <span> Billed monthly</span>
      </div>

      <div className='choose_plan'>
        {file.map((data) => {
          const {id,text,to} = data;
          return (
            <p key={id}
               onClick={() => {setActiveLink(id); filterItems(to)}} 
               className={id === activeLink ? "active_Item" : ""}>
                 {text}

            </p>
          )
        })}
      </div>

      <div className="cards" >

        {/* <!-- Starter Plan --> */}
        {item.map((product) => 
          <div key={product.id} className="card active" id="card-1" data-aos="flip-left">
            <h1 className="card-title">{product.header}</h1>
            <h2 className="card-price" id="starter-price"> ${product.price} <span> /<del>{product.price * 2}</del> </span> </h2>
            <ul className="card-plan">
                <li>{product.p1}</li>
                <li> {product.p2}</li>
                <li> {product.p3}</li>
                <li>{product.p4}</li>
                <li>{product.p5}</li>
                <li>{product.p6}</li>
            </ul>
            <button type="button" className="card-btn"> Start Project</button>
            <div className='below_text'>
              <div>
                <p>speak with us</p>
                <p>+234 7083 519 662</p>
              </div>
              <div >
                  <p>Quick Delivery</p>
                  <p>Live Chat Us</p>
              </div>
            </div>
          </div>
        )}
         
      </div>
    </div>
        </div>
    )
}

export default UtilPricing
