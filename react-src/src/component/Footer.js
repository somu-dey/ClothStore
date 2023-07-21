import React from "react";
import logo from "../slices/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "55vh",
        backgroundColor: "black",
        marginTop: "2rem",
      }}
    >
      <div className="container footer" style={{ gap: "3rem", height: "100%" }}>
        <div
          className="child"
          style={{
            flex: 1.2,
            height: "100%",
            textAlign: "justify",
            padding: "50px 0",
          }}
        >
          <img src={logo} alt="" />
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque
            vero ea, quibusdam asperiores eaque sint reprehenderit recusandae
            mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, autem
            modi! Et, sit commodi. Dicta.
          </p>
          <h5>FOLLOW US</h5>
          <ul className="nav">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <BsGoogle />
            </li>
            <li>
              <AiFillTwitterSquare />
            </li>
            <li>
              <AiFillLinkedin />
            </li>
            <li>
              <FaPinterestSquare />
            </li>
          </ul>
          <p
            style={{
              // marginTop: "30px",
              marginBottom: "30px",
              fontSize: "10px",
              padding: "13px",
            }}
          >
            Copyright © 2017 Cloth-store. All rights reserved
          </p>
        </div>
        <div
          className="child"
          style={{
            height: "100%",
            flex: 3,
            // border: "1px solid white",
            padding: "40px 0",
            paddingLeft: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5>NEWSLETTER SIGNUP</h5>
          <div className="w-75 py-3">
            <input
              className="bg-white py-2 px-3 border-0 w-75"
              type="email"
              placeholder="email@example.com"
              style={{ fontSize: "10px" }}
            />
            <button
              className="py-2 px-3 border-0 bg-success text-white w-25"
              style={{ fontSize: "10px" }}
            >
              Subscribe
            </button>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                // flex: "2",
                flexWrap: "wrap",
                // flexDirection: "row",
                // justifyContent: "center",
                // border: "1 px solid white",
                // marginTop: "1rem",
              }}
            >
              <div>
                <h5>INFORMATION</h5>
                <ul style={{ margin: "2px" }}>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Orders and Returns</li>
                  <li>Sites Map</li>
                </ul>
              </div>
              <div>
                <h5>WHY CHOOSE</h5>
                <ul>
                  <li>Product Recall</li>
                  <li>Gift Voucher</li>
                  <li>Return & Exchange</li>
                  <li>Shipping Options</li>
                  <li>Help and FAQs</li>
                  <li>Sale only today</li>
                </ul>
              </div>
              <div>
                <h5>MY ACCOUNT</h5>
                <ul>
                  <li>Sign In</li>
                  <li>View Cart</li>
                  <li>My Wishlist</li>
                  <li>Checkout</li>
                  <li>Track my order</li>
                  <li>Help</li>
                </ul>
                <p
                  style={{
                    // marginTop: "30px",
                    marginBottom: "30px",
                    fontSize: "10px",
                  }}
                >
                  Designed by Solvin Infotech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
