import React from "react";
// import image from "../slices/Blog-shoptica.jpg";
// import image1 from "../slices/Blog-AdBeaut.jpg";
// import image2 from "../slices/Blog-kosmic.jpg";
function Blogs() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-row">
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div class="card" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            src="http://drive.google.com/uc?export=view&id=1eM0i6VSzK-IWaM-E44RXNimIRQ70kWCg
"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">17 Feb 2019</h5>
            <p class="card-text">Unlimited responsive plugins for wp</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            src="http://drive.google.com/uc?export=view&id=1LDbffzLHBti6mPjjT3LsgYuXi13xg71f
"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">15 March 2022</h5>
            <p class="card-text">Built in framework for React</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            src="http://drive.google.com/uc?export=view&id=1CKMbYUzCDVyBLTkV9Dt-gWdZ383gb_fM
"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">23 Jan 2021</h5>
            <p class="card-text">Advanced jQuery tool</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
