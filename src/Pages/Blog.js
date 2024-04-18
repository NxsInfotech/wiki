import React from "react";
import Laptopscreenwash from "../Asserts/about-us-banner.webp";
import Laptopscreenwashsm from "../Asserts/gray-bg.png";
import mobileclean from "../Asserts/Iclothwipes.png";
import Promiseimg from "../Asserts/promise.png";
import testimonialimg from "../Asserts/icloth-testimonials.jpg";
import flag from "../Asserts/flag-1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <main>
      <section className="h-auto w-full ">
        <div className="  ">
          <div
            className="hidden  lg:grid lg:grid-cols-2 bg-cover bg-center bg-no-repeat h-auto p-14"
            style={{ backgroundImage: `url(${Laptopscreenwash})` }}
          >
            <div></div>
            <div className="w-full sm:w-full  lg:w-[80%] h-auto pl-5">
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
          <div
            className="block sm:block lg:hidden xl:hidden sm:h-auto md:h-auto lg:h-[600px]  xl:h-[600px]  bg-cover bg-no-repeat w-full"
            style={{ backgroundImage: `url(${Laptopscreenwashsm})` }}
          >
            <h1 className="text-3xl font-bold text-center p-4 font-serif text-gray-700">
              ABOUT US
            </h1>
            <hr className="w-[80%] mx-auto border-blue-300 border mt-3" />
            <p className="text-center text-xl mt-3 text-gray-700 ">
              Welcome to iCloth. We’re happy you’ve chosen to come see us and
              hope you’ll feel your time here is well spent. Along the way, you
              may be surprised to see how we can make such a big deal about such
              a small product.
            </p>
            <p className="text-center text-xl mt-5 text-gray-700 pb-10">
              We’ve been specializing in making products to clean what we call
              sensitive optical surfaces since 2001. It all started with
              eyewear, then came to include in-flight entertainment screens in a
              major airline fleet, and today includes all the screens on the
              many devices that surround us daily at work and at play.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full border ">
            <div
              className="border h-[800px] object-fill bg-no-repeat w-full "
              // style={{ backgroundImage: `url(${mobileclean})` }}
            >
              {" "}
              <img src={mobileclean} className="w-full h-full" />
            </div>
            <div className="flex justify-center items-center p-10">
              <div>
                <h1 className="text-2xl font-semibold text-center sm:text-center md:text-start lg:text-start xl:text-start ">
                  Our Product
                </h1>
                <p className="text-xl  mt-5 text-gray-700 ">
                  {" "}
                  As you browse our site, you’ll discover how our Avionics
                  products respond to specific needs. Over the years we have had
                  the opportunity to develop products that meet or exceed all
                  the requirements set by the toughest market out there: the
                  aviation industry. This lead us to bring in the best quality
                  components available – cutting corners is not an option for us
                  and we don’t skimp on quality in our fabric, our liquid
                  formula or our packaging. Our products have been through
                  extensive testing and we don’t sell anything that we don’t use
                  ourselves on a daily basis.
                </p>
                <span className=" flex justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start  lg:text-start xl:text-start ">
                  {" "}
                  <a
                    className="text-lg bg-[#009ad4] text-white px-5 py-2 font-semibold flex items-center gap-2 mt-5 w-44 cursor-pointer"
                    href="https://icloth.io/collections/all"
                    target="blank"
                  >
                    Shop iCloth{" "}
                    <MdOutlineKeyboardArrowRight
                      size={20}
                      className="font-bold"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full  ">
            <div className="flex justify-center items-center p-10">
              <div>
                <h1 className="text-2xl font-semibold text-center sm:text-center md:text-start lg:text-start xl:text-start">
                  Our Promise
                </h1>
                <p className="text-xl  mt-5 text-gray-700 ">
                  {" "}
                  Our prices are great, but we hope that you are looking for
                  more from us than just great prices. Some lessons we have
                  learned the hard way in all our years in business is that,
                  while price is important, trustworthy quality, good service,
                  consistency in manufacturing, reliability of performance and
                  convenience of use are ultimately more valuable. So while our
                  prices are good, our products and the way we take care of our
                  customers are even better.
                </p>
                {/* <button className="text-lg bg-[#009ad4] text-white px-5 py-2 font-semibold flex items-center gap-2 mt-5">
                  Contact Us{" "}
                  <MdOutlineKeyboardArrowRight
                    size={20}
                    className="font-bold"
                  />
                </button> */}
                <span className=" flex justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start  lg:text-start xl:text-start ">
                  <a
                    className="text-lg bg-[#009ad4] text-white px-5 py-2 font-semibold flex items-center gap-2 mt-5 w-44 cursor-pointer"
                    href="https://icloth.io/pages/contact"
                    target="blank"
                  >
                    Contact Us{" "}
                    <MdOutlineKeyboardArrowRight
                      size={20}
                      className="font-bold"
                    />
                  </a>
                </span>
              </div>
            </div>
            <div className="border h-[800px] object-fill bg-no-repeat w-full ">
              {" "}
              <img src={Promiseimg} className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto  w-full">
        {" "}
        <div
          className="bg-cover bg-no-repeat h-full pt-5 flex justify-center items-center "
          style={{ backgroundImage: `url(${testimonialimg})` }}
        >
          <div className="  w-full h-auto">
            <img className="mx-auto " src={flag} alt="flag" />
            <h3 className="text-center font-semibold mt-3 text-2xl">
              Delightful Feedback
            </h3>
            <p className="text-xl  mt-5 text-gray-700 w-full p-10  mx-auto text-center ">
              What we love hearing most is when people say they had no idea they
              even needed our product and now they can’t live without it. We
              also love hearing how happy people are that all the components
              come from the US and the final product is manufactured right in
              New Jersey. The positive product reviews keep pouring in, and we
              can’t wait to hear what you think.
            </p>
            {/* <button className="text-lg bg-[#009ad4] text-white px-5 py-2 font-semibold flex items-center gap-2 mt-5 mx-auto mb-10 ">
              Shop iCloth{" "}
              <MdOutlineKeyboardArrowRight size={20} className="font-bold" />
            </button> */}{" "}
            <a
              className="text-lg bg-[#009ad4] text-white px-5 py-2 mb-10 font-semibold flex items-center mx-auto gap-2  w-44 cursor-pointer"
              href="https://icloth.io/collections/all"
              target="blank"
            >
              Shop iCloth{" "}
              <MdOutlineKeyboardArrowRight size={20} className="font-bold" />
            </a>
          </div>
        </div>
      </section>
      <section className="sm:h-auto md:h-[660px]   w-full   relative">
        <div className=" h-[350px] sm:h-[350px] lg:h-[500px] xl:h-[500px]  md:h-[500px] w-full  bg-[#009ad4] relative">
          <h3 className="text-center font-semibold text-2xl text-white pt-10">
            FlightChops
          </h3>
          <p className="text-xl mt-5  w-full mx-auto text-center p-0 lg:p-10 text-white">
            We’ve become really fascinated with aviation and recently began
            sponsoring FlightChops, which is all about fully immersive flying
            videos and is a passionate community of pilots and flying
            enthusiasts. Steve Thorne and his filmmaking team at FlightChops
            went ahead and made us a hilarious video about our product – in the
            most entertaining way. I invite you to watch it now, it’s really one
            of a kind.
          </p>
          <div className="absolute mx-auto flex justify-center h-auto   md:top-72 w-full p-4 ">
            <iframe
              id="ytplayer"
              title="YouTube video player 1"
              allowFullScreen=""
              allow="autoplay; fullscreen"
              src="https://www.youtube.com/embed/HBRH_GCFjCE?&mute=1&controls=1&rel=0&autoplay=0"
              class="lazyloaded mx-auto sm:w-[200px] md:w-[600px] sm:h-[180px] md:h-[360px] sm:bg-white sm:p-4"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="h-auto w-full mt-28 md:mt-5">
        <div className="bg-[#f2f2f2]  w-[90%] mx-auto rounded-xl  h-auto   border    ">
          <p className="text-xl  p-10 w-full   mx-auto text-center text-gray-500 ">
            On behalf of our team, I’d like to personally thank you for dropping
            by our new online home. Our goal was to make iclothavionics.com a
            nice spot to visit and easy to navigate, but since the team at
            iCloth HQ are only human, there might be a spot or two where you may
            be wondering about something specific or need some assistance. We’ve
            tried to cover some of those topics in our FAQ section.
          </p>
          <a
            className="text-lg bg-[#009ad4] text-white px-5 py-2 mb-10 font-semibold flex items-center mx-auto gap-2 mt-5 w-48 cursor-pointer"
            href="https://icloth.io/pages/faqs"
            target="blank"
          >
            Visit Our FAQ
            <MdOutlineKeyboardArrowRight size={20} className="font-bold" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 md:w-[70%] h-auto mx-auto mt-5">
          <div className="border border-black">
            <p className="p-4 text-xl">
              If you have any questions or feedback, please feel free to{" "}
              <a
                className="text-[#009ad4] mr-1"
                href="https://icloth.io/pages/contact"
                target="_blank"
              >
                Contact Us
              </a>
              through our online form and we’ll get back to you immediately if
              we are here, or the first thing the next business day if we are
              not.
            </p>
          </div>
          <div className="border border-black mt-5 md:mt-0">
            <p className="p-4 text-xl md:w-[100%] text-center">
              {" "}
              We can also be reached by phone at:
              <br />{" "}
              <a
                className="text-[#009ad4]  "
                href="tel:18776314111"
                target="_blank"
              >
                1-877-631-4111
              </a>{" "}
              <br /> Monday – Friday <br /> 9:00AM – 5:00PM Eastern Time
            </p>
          </div>
        </div>
        <div className="md:w-[70%] mx-auto bg-[#f2f2f2] h-20 my-5 border border-black flex justify-center items-center">
          <p className="text-center text-xl ">
            Either way, we’ll be happy to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1   md:w-[70%]  h-auto mx-auto mb-10">
          <div className="border border-black">
            <p className="p-4 text-xl">
              If you’re interested in procuring a larger volume, our expert
              sales team will take good care of you. And if there’s anything we
              can do to make your iCloth experience more enjoyable, please let
              us know.
            </p>
          </div>
          <div className="border border-black mt-5 md:mt-0">
            <p className="p-4 text-xl sm:text-center md:text-center">
              {" "}
              Looking forward,
              <br /> Peter Hartlen <br /> CEO <br /> Devonshire Industries
              <br />
              <a
                className="text-[#009ad4] "
                href="mailto:peter@iclothavionics.com"
                target="_blank"
              >
                {" "}
                peter@iclothavionics.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
