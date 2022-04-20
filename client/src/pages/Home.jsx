import React from "react";
import heroImage from "../assets/images/hero-design.svg";
import brand1 from "../assets/images/brands/1xbet.png";
import brand2 from "../assets/images/brands/dominos.png";
import brand3 from "../assets/images/brands/ginga.png";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-[600px] flex items-center">
        <div className="flex grow justify-between items-center container max-w-6xl mx-auto max-h-[480px] min-h-[350px]">
          <div className="text grow">
            <h1 className="text-[2.813rem]">
              Global Payment <br />
              Gateway Made <br />
              Easy
            </h1>
            <p className="font-light text-justify my-2.5">
              Seamless, Flexible and Easy access transactions from home.{" "}
            </p>
            <button className="btn bg-orange-500 mt-2 rounded-3xl py-2 px-3 text-white">
              Get Started
            </button>
          </div>
          <img src={heroImage} className="max-h-fit" alt="hero-image" />
        </div>
      </div>

      {/* Why us section */}
      <div className="why">
        <div className="max-w-6xl mx-auto grid grid-cols-2">
          <div>
            <p className="text-lg">Why Boldwallet</p>
            <h2 className="text-3xl my-3">
              Tailored Payments <br />
              Solutions for your <br /> Business.
            </h2>
            <p className="text-justify font-thin mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              necessitatibus facilis cumque ut harum ab beatae eius, quas animi
              illo repellendus provident quis quo quam dicta nesciunt nobis
              ipsum sunt numquam pariatur!
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-3 py-12">
          <div className="reason">
            <p className="icon">
              <span className="material-icons material-icons-outlined">
                credit_card
              </span>
            </p>
            <h3>Secure Payment</h3>
            <p className="detail font-thin text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vero
              sed eum voluptate deserunt velit commodi obcaecati perferendis
              assumenda! Ad, in asperiores!
            </p>
            <p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Risk and Compliance
              </a>
            </p>
          </div>
          <div className="reason">
            <p className="icon">
              <span className="material-icons material-icons-outlined">
                credit_card
              </span>
            </p>
            <h3>Revenue</h3>
            <p className="detail font-thin text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vero
              sed eum voluptate deserunt velit commodi obcaecati perferendis
              assumenda! Ad, in asperiores!
            </p>
            <p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Grow with Boldwallet
              </a>
            </p>
          </div>
          <div className="reason">
            <p className="icon">
              <span className="material-icons">credit_card</span>
            </p>
            <h3>Customised for you</h3>
            <p className="detail font-thin text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vero
              sed eum voluptate deserunt velit commodi obcaecati perferendis
              assumenda! Ad, in asperiores!
            </p>
            <p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Learn more multiple payment options
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="max-w-6xl mx-auto min-h-[15rem] flex items-center gap-12">
        <div className="grid grid-cols-2 items-center">
          <div className="text">
            <h2 className="font-bold text-3xl">Our partners</h2>
            <p className="font-thin my-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ex modi molestias vel non cum repellendus, optio ipsa
              pariatur voluptatum nulla itaque officia odio eligendi
              praesentium, quasi asperiores.
            </p>
          </div>
          <div className="brandImages">
            <div className="grid grid-cols-3 gap-3 place-items-center">
              <img src={brand1} className="max-h-12" alt="brand" />
              <img src={brand2} className="max-h-12" alt="brand" />
              <img src={brand3} className="max-h-12" alt="brand" />
            </div>
          </div>
        </div>
      </div>

      {/* Talk to us */}
      <div className="talk max-w-6xl mx-auto flex items-center min-h-[350px]">
        <div className="main max-w-2xl mx-auto">
          <h3 className="text-center text-3xl mb-5">Try Boldwallet</h3>
          <p className="text-center font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad
            asperiores repellat mollitia dolores officiis error, consectetur
            iure, doloribus Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita, amet.
          </p>
          <div className="buttons mx-auto max-w-xl flex gap-3 flex-wrap content-center justify-center items-center my-4 text-sm">
            <a
              href="/"
              className="btn bg-black hover:bg-orange-600 text-white rounded-3xl py-2 px-4 "
            >
              Get Started
            </a>
            <a href="#" className="flex items-center">
              <span className="text-blue-500 font-light hover:underline">
                Lets Talk
              </span>{" "}
              <span className="material-icons font-extralight text-gray-300">
                navigate_next
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
