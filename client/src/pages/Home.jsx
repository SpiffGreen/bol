import React from "react";
// import heroImage from "../assets/images/hero-design.svg";
import heroImage from "../assets/images/people/p7.jpeg";
import heroImage1 from "../assets/images/hero1.svg";
import brand1 from "../assets/images/brands/1xbet.png";
import brand2 from "../assets/images/brands/dominos.png";
import brand3 from "../assets/images/brands/ginga.png";
import businessView from "../assets/images/people/p4.jpeg";
// import businessView from "../assets/images/businessview.jpg";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero lg:min-h-[90vh] mg:min-h-[60vh] flex lg:items-center md:items-center items-start md:px-3 lg:px-0 px-3">
        <div className="flex grow justify-between items-center container mx-auto max-h-[480px] min-h-[350px] lg:flex-row md:flex-row flex-col-reverse">
          <div className="text max-w-[600px] lg:text-left md:text-left text-center lg:mt-0 md:mt-0 mt-4">
            <h1 className="lg:text-[2.813rem] md:text-[2.813rem] text-3xl hero-text">
              Global Payment <br />
              Gateway Made
              Easy
            </h1>
            {/* <p className="font-light text-justify my-2.5">
              Seamless, Flexible and Easy access transactions from home.{" "}
            </p> */}
            <p className="lg:text-base md:text-base text-sm font-thin my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus unde nesciunt recusandae mollitia aliquam quia deleniti tenetur tempora inventore.</p>
            <button className="btn bg-black mt-2 rounded py-2 px-3 text-white  text-sm">
              Let's get started
            </button>
          </div>
          {/* <img src={heroImage} className="min-h-[350px] max-w-[50%] grow object-cover lg:block md:block hidden" alt="hero-image"/> */}
          {/* <img src={heroImage1} alt="svg" /> */}
          <img src={heroImage} style={{mask: `url(${heroImage1})`, maskRepeat: "no-repeat", maskSize: "contain", maskPosition: "center"}} className="lg:min-h-[350px] lg:max-w-[50%] grow object-cover sm:w-[300px]" alt="hero-image"/>
        </div>
      </div>

      {/* Why us section */}
      <div className="why">
        <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 md:px-3 lg:px-0 px-3 lg:mt-0 md:mt-0 mt-16 lg:text-left md:text-left text-center">
          <div>
            <p className="text-lg">Why Boldwallet</p>
            <h2 className="text-3xl my-3">
              Tailored Payments <br />
              Solutions for your <br /> Business.
            </h2>
            <p className="lg:text-justify md:text-justify text-center font-thin mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              necessitatibus facilis cumque ut harum ab beatae eius, quas animi
              illo repellendus provident quis quo quam dicta nesciunt nobis
              ipsum sunt numquam pariatur!
            </p>
          </div>
        </div>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-12 md:px-3 lg:px-0 px-3 lg:text-left md:text-left text-center">
          <div className="reason">
            <p className="icon">
              <span className="material-icons material-icons-outlined">
                credit_card
              </span>
            </p>
            <h3 className="text-2xl">Secure Payment</h3>
            <p className="detail font-thin text-base my-4">
            Our intuitive risk assessment proactively blocks fraudulent transactions, reducing fraud-related chargebacks for you. Our secure SDKs tokenize card payments to protect users. 
            </p>
            <p>
              <a href="#" className="text-blue-500 text-base hover:underline">
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
            <h3 className="text-2xl">Revenue</h3>
            <p className="detail font-thin text-base my-4">
            Our innovative payment options including recurrent payments, invoice splitting and USSD help to reduce failed payments and increase your revenue.
            </p>
            <p>
              <a href="#" className="text-blue-500 text-base hover:underline">
                Grow with Boldwallet
              </a>
            </p>
          </div>
          <div className="reason">
            <p className="icon">
              <div className="icon-container">
              <span className="material-icons">credit_card</span>
              </div>
            </p>
            <h3 className="text-2xl">Customised for you</h3>
            <p className="detail font-thin text-base my-4">
            We tailor our payment solutions to the specifics of your business, so you can reach every single customer and expand into new markets.
            </p>
            <p>
              <a href="#" className="text-blue-500 text-base hover:underline">
                Learn more multiple payment options
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Get View of business */}
      <section className="business-view">
        <div className="container mx-auto py-20 md:px-3 lg:px-0 px-3">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 items-center">
            <div className="image">
              <img src={businessView} alt="business view" className="max-h-[630px] w-[100%] object-cover" />
            </div>
            <div className="text">
              <div className="text-4xl">Get a full view of your business at a glance.</div>
              <p className="font-light my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam nostrum ut provident distinctio iste, voluptate a nobis est. Numquam vitae atque vero blanditiis molestiae.</p>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 lg:text-left md:text-left text-center">

                <div className="grid-it">
                  <div className="icon text-gray-500">
                    <div className="rounded-[50%] border border-gray-500 w-[50px] h-[50px] flex justify-center items-center lg:mx-0 md:mx-0 mx-auto">
                      <span className="material-icons">payments</span>
                    </div>
                  </div>
                  <div className="title text-xl my-2">Dashboard Analytics</div>
                  <p className="font-light">Access insights from your data in a single system. </p>
                </div>

                <div className="grid-it">
                  <div className="icon text-gray-500">
                    <div className="rounded-[50%] border border-gray-500 w-[50px] h-[50px] flex justify-center items-center lg:mx-0 md:mx-0 mx-auto">
                      <span className="material-icons">payments</span>
                    </div>
                  </div>
                  <div className="title text-xl my-2">Online and Offline Payments</div>
                  <p className="font-light">Our payment methods help you keep the revenue flowing in.</p>
                </div>

                <div className="grid-it">
                  <div className="icon text-gray-500">
                    <div className="rounded-[50%] border border-gray-500 w-[50px] h-[50px] flex justify-center items-center lg:mx-0 md:mx-0 mx-auto">
                      <span className="material-icons">payments</span>
                    </div>
                  </div>
                  <div className="title text-xl my-2">Customised for you</div>
                  <p className="font-light">We help you maintain a cohesive brand identity with our customizable checkout.</p>
                </div>

                <div className="grid-it">
                  <div className="icon text-gray-500">
                    <div className="rounded-[50%] border border-gray-500 w-[50px] h-[50px] flex justify-center items-center lg:mx-0 md:mx-0 mx-auto">
                      <span className="material-icons">payments</span>
                    </div>
                  </div>
                  <div className="title text-xl my-2">Store Collections</div>
                  <p className="font-light">Get an overview of your business across multiple locations.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <div className="container mx-auto min-h-[15rem] flex items-center gap-12 md:px-3 lg:px-0 px-3">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-3">
          <div className="text md:text-left text-center">
            <h2 className="font-bold text-4xl lg:text-left">Our partners</h2>
            <p className="font-thin mt-4 lg:mb-0 md:mb-0 mb-8 text-base">
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
      <div className="container mx-auto flex items-center min-h-[350px] md:px-3 lg:px-0 px-3 lg:my-0 md:my-0 my-14">
        <div className="main max-w-2xl mx-auto">
          <h3 className="text-center lg:text-4xl text-3xl mb-5">Try Boldwallet</h3>
          <p className="text-center font-light text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad
            asperiores repellat mollitia dolores officiis error, consectetur
            iure, doloribus Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita, amet.
          </p>
          <div className="buttons mx-auto max-w-xl flex gap-5 flex-wrap content-center justify-center items-center my-8 text-sm">
            <a
              href="/"
              className="btn bg-black hover:bg-orange-600 text-white rounded py-2 px-4 "
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
