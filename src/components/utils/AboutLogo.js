import "./about.css";
import logo from "../../pic/i2.jpg";
import {
  FcDepartment,
  FcGlobe,
  FcFactory,
  FcCellPhone,
  FcBusinessContact,
  FcShare,
} from "react-icons/fc";
import team from "../../pic/aa.png";

const AboutLogo = () => {
  return (
    <div className="containered">
      <section className="about_achievements">
        <div className="container about__achievements-container">
          <div className="about__achievements-left">
            <img src={team} />
          </div>

          <div className="about__achievements-right">
            <h1>Achievements</h1>
            <p>
              CreativeCorner, founded in 2021, is a leading IT consulting
              company known for its innovative and robust digital solutions. We
              help you evolve your business into a profitable venture by using
              the unrivaled experience of our highly qualified product
              development team. Our huge pool of skilled professionals for
              Graphics,Videography, Machine Learning, Cloud Computing, IoT,
              Artificial Intelligence, and more help you expand your web and
              mobile app development customer base.
            </p>
            <div className="achievements__cards">
              <article className="achievement__card">
                <span className="achievement__icon">
                  <FcGlobe fontSize={"3rem"} />
                </span>
                <h3>450+</h3>
                <p>Works</p>
              </article>

              <article className="achievement__card">
                <span className="achievement__icon">
                  <FcFactory fontSize={"3rem"} />
                </span>
                <h3>108+</h3>
                <p>Partners</p>
              </article>

              <article className="achievement__card">
                <span className="achievement__icon">
                  <FcDepartment fontSize={"3rem"} />
                </span>
                <h3>68+</h3>
                <p>subsidiaries</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* // team sections */}
      <section className="team">
        <h2>Our Partners</h2>
        <div className="container team__container">
          <article className="team__member">
            <div className="team__member-image">
              <img
                src={
                  "https://img.favpng.com/13/15/19/google-logo-google-search-google-cloud-platform-png-favpng-D2A2R4Scw9gAdnumGNePbTSGu.jpg"
                }
              />
            </div>
            <div className="team__member-info">
              <h4>GOOGLE</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <a href="#" target="_blank">
                <FcCellPhone />
              </a>
              <a href="#" target="_blank">
                <FcBusinessContact />
              </a>
              <a href="#" target="_blank">
                <FcShare />
              </a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJu_47b1oaxLkSggVD4RXGVTfXhECaFBJlK5Tw8IS8lQqWf2SX1yxN4X49IEXYemYW2EQ&usqp=CAU"
                }
              />
            </div>
            <div className="team__member-info">
              <h4>VISA</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <a href="#" target="_blank">
                <FcCellPhone />
              </a>
              <a href="#" target="_blank">
                <FcBusinessContact />
              </a>
              <a href="#" target="_blank">
                <FcShare />
              </a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img
                src={
                  "https://blog.logomyway.com/wp-content/uploads/2020/11/coke-logo.jpg"
                }
              />
            </div>
            <div className="team__member-info">
              <h4>COCA-COLA</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <a href="#" target="_blank">
                <FcCellPhone />
              </a>
              <a href="#" target="_blank">
                <FcBusinessContact />
              </a>
              <a href="#" target="_blank">
                <FcShare />
              </a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69_9Plt7uWrrOj4RIUW8rRNT0bV1Z22NRjw&usqp=CAU"
                }
              />
            </div>
            <div className="team__member-info">
              <h4>AT & T</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <a href="#" target="_blank">
                <FcCellPhone />
              </a>
              <a href="#" target="_blank">
                <FcBusinessContact />
              </a>
              <a href="#" target="_blank">
                <FcShare />
              </a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkHZpg0UvC1pcoSnCAfKQk_AwBJpetbEy5Xk8hNObcqw4_po1oSfIM5mk7E9EUl67bss&usqp=CAU"
                }
              />
            </div>
            <div className="team__member-info">
              <h4>Micro Soft</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <a href="#" target="_blank">
                <FcCellPhone />
              </a>
              <a href="#" target="_blank">
                <FcBusinessContact />
              </a>
              <a href="#" target="_blank">
                <FcShare />
              </a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img
                src={
                  "https://media.gettyimages.com/photos/the-royal-dutch-shell-logo-is-displayed-outside-one-of-its-petrol-on-picture-id1320382234?s=612x612"
                }
              />
            </div>
            <div className="team__member-info">
              <h4>Shell PLC</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <a href="#" target="_blank">
                <FcCellPhone />
              </a>
              <a href="#" target="_blank">
                <FcBusinessContact />
              </a>
              <a href="#" target="_blank">
                <FcShare />
              </a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img
                src={
                  "https://www.kindpng.com/picc/m/115-1159666_pepsi-logo-vector-free-download-pepsi-logo-hd.png"
                }
              />
            </div>
            <div className="team__member-info">
              <h4>PEPSI</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <a href="#" target="_blank">
                <FcCellPhone />
              </a>
              <a href="#" target="_blank">
                <FcBusinessContact />
              </a>
              <a href="#" target="_blank">
                <FcShare />
              </a>
            </div>
          </article>
          <article className="team__member">
            <div className="team__member-image">
              <img
                src={
                  "https://www.mnaija.com/wp-content/uploads/2022/02/MTN-Set-To-Unveil-A-New-Logo-Photo.jpg"
                }
              />
            </div>
            <div className="team__member-info">
              <h4>MTN Communications</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <a href="#" target="_blank">
                <FcCellPhone />
              </a>
              <a href="#" target="_blank">
                <FcBusinessContact />
              </a>
              <a href="#" target="_blank">
                <FcShare />
              </a>
            </div>
          </article>
        </div>
      </section>
      ;
    </div>
  );
};

export default AboutLogo;
