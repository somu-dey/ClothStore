import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import image from "./Ads-Men.jpg";
const api = "https://fakestoreapi.com/products";
function products() {
  const [item, setitem] = useState([]);
  const fetchuser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setitem(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchuser(api);
  });
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row ">
        <div
          className="col-md-4"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: "40px",
            boxSizing: "border-box",
            // border: "none",
            borderRadius: "50px",
          }}
        >
          {item.map((value) => {
            return (
              <div className="card " style={{ width: "250px" }}>
                <img
                  className="h-100 p-5"
                  src={value.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p
                    className="card-title"
                    style={{
                      width: "25ch",
                      overflow: "hidden",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {value.title}
                  </p>
                  <h2>${value.price}</h2>
                  <button
                    type="button"
                    href="#"
                    className="btn "
                    style={{ backgroundColor: "#018318", color: "white" }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default products;
