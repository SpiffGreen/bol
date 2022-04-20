import React from "react";

function About() {
  return (
    <div>
      {/* Hero section */}
      <section className="heroSection">
        <div className="max-w-6xl mx-auto my-3 py-10 bg-zinc-300 rounded-lg">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-center text-orange-600">
              About Us
            </h2>
            <div className="font-bold text-5xl my-7 text-zinc-700">We're a team of <br />creators & innovators</div>
            <p className="font-light max-w-xl mx-auto">The only corporate payment management system designed for user satisfaction and comfort. We help startups grow by offering help payment services they would have spent more time doing</p>
            <div className="actions my-6 gap-1 flex justify-center">
              <a href="#" className="btn rounded-3xl bg-black hover:bg-orange-600 text-white py-2 px-4">Get Started</a>
              <a href="#" className="btn rounded-3xl border border-black hover:bg-black hover:text-white py-2 px-6">Pricing</a>
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
          <div className="reason">
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
          <div className="reason">
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
          <div className="reason">
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
    </div>
  );
}

export default About;
