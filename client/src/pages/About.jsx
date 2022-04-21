import React from "react";
import person1 from "../assets/images/people/p1.jpg";
import person2 from "../assets/images/people/p2.jpg";
import person3 from "../assets/images/people/p3.jpg";

function About() {
  return (
    <div>
      {/* Hero section */}
      <section className="heroSection">
        <div className="max-w-6xl mx-auto my-3 py-10 bg-zinc-100 rounded-lg">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-center text-orange-600">
              About Us
            </h2>
            <div className="font-bold text-5xl my-7 text-zinc-700">
              We're a team of <br />
              creators & innovators
            </div>
            <p className="font-light max-w-xl mx-auto">
              The only corporate payment management system designed for user
              satisfaction and comfort. We help startups grow by offering help
              payment services they would have spent more time doing
            </p>
            <div className="actions my-6 gap-2 flex justify-center">
              <a
                href="#"
                className="btn rounded-3xl bg-black hover:bg-orange-600 text-white py-2 px-4"
              >
                Get Started
              </a>
              <a
                href="#"
                className="btn rounded-3xl border border-black hover:bg-black hover:text-white py-2 px-6"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="valueSection">
        <div className="max-w-6xl mx-auto py-8">
          <h3 className="text-center text-3xl mb-2">The Values We Live By</h3>
          <p className="text-center font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad
            asperiores repell.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-3 py-12">
          <div className="reason text-center">
            <p className="icon">
              <span className="material-icons material-icons-outlined">
                credit_card
              </span>
            </p>
            <h3>Passion before money</h3>
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
          <div className="reason text-center">
            <p className="icon">
              <span className="material-icons material-icons-outlined">
                credit_card
              </span>
            </p>
            <h3>Providing value</h3>
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
          <div className="reason text-center">
            <p className="icon">
              <span className="material-icons">credit_card</span>
            </p>
            <h3>Teamwork</h3>
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
      </section>

      {/* Team section */}
      <section className="teamSection">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl mb-2">Team</h3>
          <p className="text-center font-light">
            Meet The People Behind Boldwallet.
          </p>
          <div className="grid grid-cols-3 items-center gap-5 my-10">
            <div className="grid-it">
              <img
                src={person1}
                alt="person-1"
                className="max-width-[250px] rounded"
                style={{ objectFit: "cover" }}
              />
              <p className="font-bold text-2xl mt-3 text-center">Tomek</p>
              <p className="font-zinc-5 text-zinc-600 text-center">General Manager</p>
              <div className="icons flex gap-2 py-3 items-center text-xl text-zinc-600 justify-center">
                <a href="#"><i className="fa-brands fa-twitter hover:text-black"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f hover:text-black"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in hover:text-black"></i></a>
              </div>
            </div>
            <div className="grid-it">
              <img
                src={person2}
                alt="person-1"
                className="max-width-[250px] rounded"
                style={{ objectFit: "cover" }}
              />
              <p className="font-bold text-2xl mt-3 text-center">Mark</p>
              <p className="font-zinc-5 text-zinc-600 text-center">CEO</p>
              <div className="icons flex gap-2 py-3 items-center text-xl text-zinc-600 justify-center">
                <a href="#"><i className="fa-brands fa-twitter hover:text-black"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f hover:text-black"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in hover:text-black"></i></a>
              </div>
            </div>
            <div className="grid-it">
              <img
                src={person3}
                alt="person-1"
                className="max-w-[380px] max-h-[300px] rounded"
                style={{ objectFit: "cover" }}
              />
              <p className="font-bold text-2xl mt-3 text-center">Steve</p>
              <p className="font-zinc-5 text-zinc-600 text-center">Lead Developer</p>
              <div className="icons flex gap-2 py-3 items-center text-xl text-zinc-600 justify-center">
                <a href="#"><i className="fa-brands fa-twitter hover:text-black"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f hover:text-black"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in hover:text-black"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
