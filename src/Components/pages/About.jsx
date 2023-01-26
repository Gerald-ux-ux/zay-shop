import React from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "./Footer";


const AboutUs = () => {
    const socialIcons = [
    {
      path: "#",
      display: <i class="fa fa-instagram" aria-hidden="true">  instagram</i>,
    },
    {
      path: "#",
      display: <i class="fa fa-facebook" aria-hidden="true"> facebook</i>,
    },
    {
      path: "#",
      display: <i class="fa fa-linkedin" aria-hidden="true"> linkedin</i>,
    },
    {
      path: "#",
      display: <i class="fa fa-twitter" aria-hidden="true"> twitter</i>,
    },
  ];
  
  return (
    <>
      <Container>
        <Row>
          <Col className="row-sm-6">
            <div className="md-3 mb-4 py-5">
              <p class="card-texta lead fw-bold text-center">
                Unlock the doors to endless possibilities with our
                state-of-the-art e-commerce platform. From the latest fashion
                trends to cutting-edge technology, we have it all. Our carefully
                curated selection of products is guaranteed to meet all your
                needs and exceed your expectations.
              </p>

              <br />

              <p className="card-texta lead fw-bold text-center">
                Experience the future of shopping with our user-friendly
                interface and lightning fast delivery. Our team of experts works
                tirelessly to bring you the best deals and promotions, so you
                can shop with confidence. With 24/7 customer support, you can
                rest assured that we've got your back.
              </p>

              <br />
              <br />

              <p className="card-texta lead fw-bold text-center">
                Join the revolution and elevate your shopping game with us.
                Treat yourself to a seamless, hassle-free experience and
                discover why we're the go-to destination for discerning shoppers
                everywhere. Shop now and see the difference for yourself.
              </p>

              <div>
                <h6 className="section__subtitle text-center">
                  Need Any Help? Contact us
                </h6>
                <h4 className="text-center">
                  <i class="fa fa-phone" aria-hidden="true"></i>+245 792278510
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <br />
      <br />

      <br />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
