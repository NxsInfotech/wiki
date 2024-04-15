import React from "react";
import Laptopscreenwash from "../Asserts/about-us-banner.webp";
import mobileclean from "../Asserts/Iclothwipes.png";

const Blog = () => {
  return (
    <main>
      <section>
        <div
          className="bg-cover bg-center h-[450px] "
          style={{ backgroundImage: `url(${Laptopscreenwash})` }}
        >
          <div className="grid grid-cols-2">
            <div></div>
            <div className="w-[550px]   h-[450px] pl-5">
              <h1 className="text-3xl font-bold text-center p-4 font-serif text-gray-700">
                ABOUT US
              </h1>
              <hr className="w-full border-blue-300 border mt-3" />
              <p className="text-center text-xl mt-3 text-gray-700">
                Welcome to iCloth. We’re happy you’ve chosen to come see us and
                hope you’ll feel your time here is well spent. Along the way,
                you may be surprised to see how we can make such a big deal
                about such a small product.
              </p>
              <p className="text-center text-xl mt-5 text-gray-700">
                We’ve been specializing in making products to clean what we call
                sensitive optical surfaces since 2001. It all started with
                eyewear, then came to include in-flight entertainment screens in
                a major airline fleet, and today includes all the screens on the
                many devices that surround us daily at work and at play.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full border ">
            <div
              className="border h-[800px] object-fill bg-no-repeat w-full "
              //   style={{ backgroundImage: `url(${mobileclean})` }}
            >
              {" "}
              <img src={mobileclean} />
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
