import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./slices/logo.png";
import img from "./slices/slide-A.jpg";
import img1 from "./slices/Ads-Men.jpg";
import img2 from "./slices/Ads-Women.jpg";
import img3 from "./slices/Adv-Kids.jpg";
import Product2 from "./component/Product2";
import "./App.css";
import Product3 from "./component/Product3";
import Product4 from "./component/Product4";
import Blogs from "./component/Blogs";
import Footer from "./component/Footer";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  return (
    <div className="App" style={{ width: "100vw" }}>
      <div className="  d-flex justify-content-center pt-4">
        <img src={logo} alt="" />
      </div>
      <div className="container" style={{ width: "100%" }}>
        <ul class="nav justify-content-center my-2">
          <li>
            <BsSearch />
          </li>
          <li className="nav-items mt-2 p-1">Home</li>
          <li className="nav-items mt-2 p-1">Men</li>
          <li className="nav-items mt-2 p-1">Women</li>
          <li className="nav-items mt-2 p-1">Footwear</li>
          <li className="nav-items mt-2 p-1">Blog</li>
          <li className="nav-items mt-2 p-1">About Us</li>
          <li className="nav-items mt-2 p-1">Contact</li>
          <li>
            <AiOutlineShoppingCart />
          </li>
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        <img
          src="http://drive.google.com/uc?export=view&id=1_brJp4fLyjh6LphugnMnPPyTOFIqtghz"
          class="img-fluid"
          alt=""
        />
      </div>
      <div className=" d-flex w-100 my-1">
        <div className=" d-inline-block">
          <img
            src="http://drive.google.com/uc?export=view&id=1WdF1qjw42OElII4PuQhpyPUjzcx_wRUu
"
            className="img-fluid w-100"
            alt=""
          />
        </div>
        <div className=" d-inline-block">
          <img
            src="http://drive.google.com/uc?export=view&id=163xDhmvtyCXrCLuFNDSiMhT39nVgST9g
"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className=" d-inline-block">
          <img
            src="http://drive.google.com/uc?export=view&id=1UmCnNs8M1TGetf83a6Cz2ErxE1crLh-2"
            className="img-fluid "
            alt=""
          />
        </div>
      </div>
      <div>
        <h3 className="mt-4 mb-4 d-flex justify-content-center ">
          FEATURED ITEMS
        </h3>
        <Product2 />
        <h3 className="mt-4 mb-4 d-flex justify-content-center ">
          BEST SELLER
        </h3>
        <div>
          <Product3 />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Product4 />
        </div>
        <h3 className="mt-4 mb-4 d-flex justify-content-center ">
          LATEST BLOGS
        </h3>
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
