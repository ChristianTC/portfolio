import Carousel from "react-multi-carousel";
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import "react-multi-carousel/lib/styles.css";
//  TODO
const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testimonial" id="skills">
      <Container >
        <Row>
          <Col>
            <div className="testimonial-bx">
              <h2>Testimonials</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, enim ducimus. Maiores tempora quos et optio praesentium molestias illo odit similique veniam. Reiciendis soluta minus a voluptatem exercitationem omnis officiis!</p>
              <Carousel responsive={responsive} infinite={true} className="testimonial-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
