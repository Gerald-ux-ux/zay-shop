import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const Footer = () => {
    const quickLinks = [
      {
        path: "/about",
        display: "About",
      },
      {
        path: "/cars",
        display: "Car Listing",
      },
      {
        path: "/blogs",
        display: "Blog",
      },

      {
        path: "/contact",
        display: "Contact",
      },
    ];
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col class="col-sm-6">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap- 2">
                  <i class="ri-car-line"></i>
                  <span>Rent Car Service</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Consequuntur, distinctio, itaque reiciendis ab cupiditate
              <br />
              harum ex quam veniam, omnis expedita animi quibusdam <br />
              obcaecati mollitia? Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-2">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-2">
              <h5 className="footer__link-title mb-2">Head Office</h5>
              <p className="office__info">1738 Kenya, Thika Rd, Nairobi</p>
              <p className="office__info">Phone: +254 720673399</p>
              <p className="office__info">Email: maridadyrentals@gmail.com</p>
              <p className="office__info">Office Time: 9am - 5pm</p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description1 d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Gerald Kamau. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;