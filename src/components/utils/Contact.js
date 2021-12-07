import contact from '../../pic/Contact us-bro.png'
import React from 'react';
import emailjs  from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Result = () = >

const Contact = () => {
  const [result, setResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jvqask9', 'template_y69jt8o', e.target, 'user_SjwEuTOfAY5wWWnuOiNxx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setResult(false);
  };

    return (
              <section id="contact" className="contact">

                    <h1 className="heading">contact us</h1>
                    

                    <div className="row">

                      <div className="image">
                        <img src={contact} alt=""/>
                      </div>

                      <div className="form-container">
                        <form onSubmit={sendEmail}>
                                <div className="inputBox">
                                  <input type="text" placeholder="first name" name='firstname'/>
                                  <input type="text" placeholder="last name" name='lastname'/>
                                </div>

                                <input type="email" placeholder="email" name='email'/>
                                <input as='textarea' name="message" id="" cols="30" rows="10" placeholder="message"/>
                                <input type="submit" value="send"/>

                        </form>  
                        <div>{result ? <Result /> : null }</div>                  
                      </div>

                    </div>

</section>

      </Formik>
    )
}

export default Contact
