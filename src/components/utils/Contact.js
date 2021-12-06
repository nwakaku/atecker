import React from 'react';
import contact from '../../pic/Contact us-bro.png'

const Contact = () => {
    return (
        <div>

<section id="contact" className="contact">

<h1 className="heading">contact us</h1>


<div className="row">

  <div className="image">
    <img src={contact} alt=""/>
  </div>

  <div className="form-container">
    <form action="">

      <div className="inputBox">
        <input type="text" placeholder="first name"/>
        <input type="text" placeholder="last name"/>
      </div>

      <input type="email" placeholder="email"/>
      <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
      <input type="submit" value="send"/>

    </form>
  </div>

</div>

</section>


        </div>
    )
}

export default Contact
