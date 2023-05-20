// eslint-disable-next-line no-unused-vars
import React from "react";

const ProductDes = () => {
  return (
    <div>
      <div
        className="hero height2"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/flat-abstract-doodle-background_23-2149337653.jpg?t=st=1684601404~exp=1684602004~hmac=c28579d22eff5a98a70312920bad7871a6661289d39b87a6bcf2ae96bf25434c")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
        <div >
             <img className="h-96 rounded-sm hover:translate-x-3 hover:skew-y-12 hover:scale-75" src="product.png" alt="" />
          </div>
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold ">If You Are New User And It is Your first order.</h1>
            <p className="mb-5 text-3xl hover:scale-125">
              Order Soon !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDes;
