import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const Footer = () => {

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
  const quickLinks = [
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/products",
      display: "Products",
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
            <Link className="footer__logo fw-bold fs-4" to="/home">
              <i class="fa fa-shopping-bag" aria-hidden="true">
                Zay Shop
              </i>
            </Link>

            <p className="footer__logo-content">
              Make Money with Us
              <br />
              Buy products from us on a low bugdet <br />
              <h4 className="fw-bold bg">You order, We deliver !</h4>
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-2 ">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-2 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-2">
              <h5 className="footer__link-title mb-2">Main Shop</h5>
              <p className="office__info">1112 Kenya, Mombasa Rd, Nairobi</p>
              <p className="office__info">Phone: +254 725573399</p>
              <p className="office__info">Email: zayshop@gmail.com</p>
              <p className="office__info">On Site Shop Time: 9am - 9pm</p>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-2 ">
              <h5 className="footer__link-title">Social Links</h5>
              <ListGroup>
                {socialIcons.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-2 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description1 d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright 1990 - {year}, Developed by
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
