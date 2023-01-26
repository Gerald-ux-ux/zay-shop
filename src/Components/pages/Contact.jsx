import React from "react";
import Footer from "./Footer";
/* eslint-disable no-restricted-globals */

const Contact = () => {
  return (
    <>
      <div>
        <form className="d-flex justify-content-center mb-2  py-5 ms-1">
          <div class="form-group col-md-2 p-4">
            <label for="inputEmail4" className="input-1">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
            <div class="form-group col-md-12 ">
              <label for="inputZip" className="input-1">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                placeholder="00100"
              />
            </div>
          </div>
          <div class="form-group col-md-2  p-4">
            <label for="inputAddress" className="input-1">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
            <div class="form-group col-md-12 ">
              <label for="inputCity" className="input-1">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="Nairobi"
              />
            </div>
          </div>
        </form>

        <div className="d-flex text-center mb-4">
          <button
            type="submit"
            className="btn btn-outline-dark mx-auto"
            onClick={() => {
              location.reload();
            }}
          >
            Submit form
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className="snt1 ">
        Thank you for your feedback !
        <i class="fa fa-smile-o" aria-hidden="true"></i>
      </h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
