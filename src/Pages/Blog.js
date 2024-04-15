import React from "react";
import Laptopscreenwash from "../Asserts/about-us-banner.webp";

const Blog = () => {
  return (
    <main>
      <section>
        <div
          className="bg-cover bg-center h-[450px] "
          style={{ backgroundImage: `url(${Laptopscreenwash})` }}
        ></div>
      </section>
    </main>
  );
};

export default Blog;
