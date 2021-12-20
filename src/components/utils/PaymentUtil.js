import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import contact from "../../pic/contact.png";

const Result = () => {
  return <p>your message ha been successfully sent</p>;
};

const PaymentUtil = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvqask9",
        "template_y69jt8o",
        e.target,
        "user_SjwEuTOfAY5wWWnuOiNxx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <section id="contact" className="contact">
      <h1 className="heading">contact us</h1>

      <div className="row">
        <div className="image">
          <img src={contact} />
        </div>

        <div className="form-container">
          <form onSubmit={sendEmail}>
            <div className="inputBox">
              <input type="text" placeholder="first name" name="firstname" />
              <input type="text" placeholder="last name" name="lastname" />
            </div>

            <div className="inputBox">
              <input type="text" placeholder="phoneNumber" name="phone" />
              <input type="email" placeholder="email" name="email" />
            </div>

            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
            <input type="submit" value="send" />
          </form>
          <div>{result ? <Result /> : null}</div>
        </div>
      </div>
    </section>
  );
};

export default PaymentUtil;