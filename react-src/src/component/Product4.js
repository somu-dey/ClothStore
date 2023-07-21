import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const api = [
  {
    id: 4,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

function Product4() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div
          id="main"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            width: "100%",
            // padding: "40px",
            // borderRadius: "50px",
          }}
        >
          <div className="card">
            {/* style={{ width: "12rem" }} */}
            <img
              className="h-100"
              src="http://drive.google.com/uc?export=view&id=1O81DXqCA3iNGAVZpdkv9KWJyt-8oqThc
"
              alt="Card image cap"
            />
          </div>
          {api.map((item) => (
            <div className="card" id="card1" key={item.id}>
              {/* style={{ width: "12rem" }} */}
              <img
                className=" p-5 h-100"
                src={item.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <p
                  className="card-title"
                  style={{
                    overflow: "hidden",
                    // fontWeight: "bold",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.title}
                </p>
                <h3 className="price">
                  ${item.price}
                  {/* <BsFillCartPlusFill
                    style={{
                      color: "#018318",
                      marginLeft: "1rem",
                      display: "inline-block",
                    }}
                  /> */}
                  <button
                    type="button"
                    href="#"
                    className="btn btn-sm "
                    style={{
                      backgroundColor: "#018318",
                      color: "white",
                      fontSize: "15px",
                      float: "right",
                    }}
                  >
                    <AiOutlineShoppingCart style={{ marginTop: "3px" }} />
                  </button>
                </h3>
                {/* <button
                  type="button"
                  href="#"
                  className="btn "
                  style={{ backgroundColor: "#018318", color: "white" }}
                >
                  Add To Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product4;
