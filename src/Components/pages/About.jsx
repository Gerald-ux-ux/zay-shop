import React from "react";
import { Container, Row, Col } from "reactstrap";

const AboutUs = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="row-sm-6">
            <div className="md-3 mb-4 py-5">
              <p class="card-texta lead fw-bold">
                Welcome to our e-commerce website! We are a team of dedicated
                individuals who strive to provide the best shopping experience
                for our customers. We offer a wide range of products at
                competitive prices, and are constantly updating our inventory to
                bring you the latest trends and must-haves.
              </p>
              <p className="card-texta lead fw-bold">
                Our goal is to make shopping easy, convenient, and enjoyable for
                everyone. We pride ourselves on our customer service and are
                always happy to help with any questions or concerns.
              </p>
              <p>Thanks for choosing us, and happy shopping!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
