import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Team = () => {
  return (
    <section id="team" className="team">
      <h1 className="heading">our client</h1>

      {/* <div className='row'>
  
</div> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="card" data-aos="flip-left">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/portrait-of-a-businesswoman-in-the-office-picture-id1264290292?b=1&k=20&m=1264290292&s=170667a&w=0&h=ZNHnTs8w-_9gi1DHTX-pRaZSdvQYhtCgfoddDfaywyE="
              alt=""
            />
          </div>
          <div className="info">
            <h3>Megan Bremer</h3>
            <span>
              “Totally the agency you would want to be on your side! I love the
              way they take interest in your work and treat is like their very
              own, phenomenal creations and delivery.”
            </span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        <div className="card" data-aos="flip-left">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="info">
            <h3>Thomas Halvorson</h3>
            <span>
              “You just cannot ask more of them. They give it all. Amazing
              concepts. Creative suggestions. Good customer service and fast
              turnaround times.”
            </span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        <div className="card" data-aos="flip-left">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/happy-mature-businessman-standing-with-folded-arms-picture-id1138561531?b=1&k=20&m=1138561531&s=170667a&w=0&h=2jAMEIbXN7LN-9cg04cFhTJfnzbQqL6iURT0GBssHgQ="
              alt=""
            />
          </div>
          <div className="info">
            <h3>Jason Bartz </h3>
            <span>
              “Top-notch service, incredible designs. There is nothing more you
              could ask for! Thanks to the CreativeCorner Team for their
              remarkable effort.”
            </span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        <div className="card" data-aos="flip-left">
          <div className="image">
            <img
              src="https://media.istockphoto.com/photos/portrait-of-a-pride-businesswoman-standing-with-arms-crossed-in-the-picture-id1264705934?b=1&k=20&m=1264705934&s=170667a&w=0&h=1l3zVNE3yo0hMfSGJLcMxHhdslV73UyVe56H2Cd8bdo="
              alt=""
            />
          </div>
          <div className="info">
            <h3>Kristina Jones</h3>
            <span>
              " CreativeCorner's videos really helped us get the customer
              engagement boost we were looking for. Looking forward to working
              with them again. "
            </span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        <div className="card" data-aos="flip-left">
          <div className="image">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1149359631.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <h3>Gurpreet K</h3>
            <span>
              "CreativeCorner is a excellent Agency.They do amazing
              work,responds to requests quickly,is attentive to detail and is a
              pleasure to work with.I would highly recommend them to anybody ”
            </span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        <div className="card" data-aos="flip-left">
          <div className="image">
            <img
              src="https://i1.wp.com/www.lusakatimes.com/wp-content/uploads/2017/03/Linda-Kasonde.jpg?fit=650%2C592&ssl=1"
              alt=""
            />
          </div>
          <div className="info">
            <h3>Cassandra P.</h3>
            <span>
              "I would definitely hire CreativeCorner again.They were very
              responsive to my (many) Questions".
              <br />
              They also didn't immediately leave me to fend for myself once my
              project was complete.
            </span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Team;
