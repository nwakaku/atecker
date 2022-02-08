import faq from "../../pic/Startup life-amico.png";
import { FaFeatherAlt } from "react-icons/fa";

const Faq = () => {
  return (
    <section id="faq" className="service" data-aos="fade-down-right">
      <h1 className="heading">Who We Are</h1>

      <div className="row containered">
        <div className="image">
          <img src={faq} alt="" />
        </div>
        <div className="content">
          <h3>
            <FaFeatherAlt />
            Start your journey with us
          </h3>
          <br />
          <h1>Client-Centric Working Philosophy </h1>
          <p>
            Keeping up with the ever-changing digital space, we employ creative
            digital strategies and out of the box solutions to fulfill your
            digital needs.
          </p>
          <span>
            Every client we take on board is our partner, with whom we want to
            develop fruitful long-term business relationships. We can work as
            collaborative unit, in sync with the client input regularly. Some
            clients like to be involved more in the conceptualization, design
            and development phase and respecting that, we take client feedback
            and directions. Our design process can also be totally independent,
            if you want to give us the entire design freedom and want minimal
            interaction. End result is always about helping our clients achieve
            measurable results in all our focus areas.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Faq;
