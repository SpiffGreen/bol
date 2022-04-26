import React from 'react'
import brand1 from "../assets/images/brands/1xbet.png";
import brand2 from "../assets/images/brands/dominos.png";
import brand3 from "../assets/images/brands/ginga.png";
import p5 from "../assets/images/people/p5.jpeg";
// import businessView from "../assets/images/hero-1.png";

function Developers() {
  return (
    <div>

      {/* Hero Section */}
      <div className="heroSection">
        <div className="container md:bg-cover sm:bg-cover mx-auto min-h-[460px]" style={{backgroundImage: `url(${p5})`, backgroundPosition: "right center", backgroundSize: "75% 100%", backgroundRepeat: "no-repeat"}} >
          {/* <div className="relative min-h-[500px] max-w-[75%] right-[-330px]" style={{backgroundImage: `url(${businessView})`, backgroundPosition: "center", backgroundSize: "cover"}}></div> */}
          <div className="content bg-white max-w-[500px] min-h-[300px]">
            <p className="text-5xl title">Start <br /> building today</p>
            <p className='my-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla libero odit facere deleniti odio accusamus, vecipit vero, tempore esse? Voluptas, earum.</p>
            <div className="action my-3">
              <a href="#" className='bg-black hover:bg-orange-600 text-white rounded py-2 px-4 text-sm'>Get Quote</a>
            </div>
          </div>
        </div>
      </div>

      {/* notes */}
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:px-0 px-2 gap-3 py-12">
          <div className="reason text-center">
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
          <div className="reason text-center">
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
          <div className="reason text-center">
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

      {/* Access payments the easy way */}
      <div className="container mx-auto min-h-[15rem] flex items-center gap-12">
        <div className="grid lg:grid-cols-2 gap-3 lg:px-0 px-3 items-center">
          <div className="text lg:mb-0 mb-6 md:text-left text-center">
            <h2 className="font-bold text-3xl lg:px-0 px-3 lg:text-left">Accepts payments the easy way</h2>
            <p className="font-thin mt-4 text-sm">
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

      {/* Protect Yourself section */}
      <section className="protectSelf min-h-[450px] py-14">
        <div className="container mx-auto lg:text-left text-center">
          <div className="text-2xl lg:text-4xl md:text-3xl lg:max-w-[50%] md:max-w-[75%] text-center lg:text-left md:text-left lg:px-0 px-3">Protect yourself and your customers with advanced fraud detection</div>
          <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 py-5 lg:px-0 px-3">
            <div className="grid-it">
              <div className="icons">
                <span className="material-icons text-4xl">done_all</span>
              </div>
              <p className="text-2xl">Secure Tokenisation</p>
              <p className='my-2'>We develop our own card tokenisation and we don't store any card numbers.</p>
            </div>

            <div className="grid-it">
              <div className="icons">
                <span className="material-icons text-4xl">done_all</span>
              </div>
              <p className="text-2xl">Secure Tokenisation</p>
              <p className='my-2'>We develop our own card tokenisation and we don't store any card numbers.</p>
            </div>

            <div className="grid-it">
              <div className="icons">
                <span className="material-icons text-4xl">done_all</span>
              </div>
              <p className="text-2xl">Secure Tokenisation</p>
              <p className='my-2'>We develop our own card tokenisation and we don't store any card numbers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="nextSteps bg-stone-100 min-h-[350px] py-10">
        <div className="container mx-auto">
          <div className="title text-4xl md:text-left lg:text-left text-center lg:px-1 px-2">Next Steps?</div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:px-1 px-2 md:text-left lg:text-left text-center gap-10 py-4">
            <div className="grid-t1">
              <div className="icons">
                <div className="rounded-[50%] bg-zinc-600 flex lg:mx-0 md:mx-0 mx-auto justify-center items-center w-[45px] h-[45px]">
                  <span className='text-white'>1</span>
                </div>
              </div>
              <p className="my-3 text-2xl">Create an account</p>
              <p>Create a free account and select integration type.</p>
            </div>

            <div className="grid-t1">
              <div className="icons">
                <div className="rounded-[50%] bg-zinc-600 flex lg:mx-0 md:mx-0 mx-auto justify-center items-center w-[45px] h-[45px]">
                  <span className='text-white'>2</span>
                </div>
              </div>
              <p className="my-3 text-2xl">Set-up</p>
              <p>Create a free account and select integration type.</p>
            </div>

            <div className="grid-t1">
              <div className="icons">
                <div className="rounded-[50%] bg-zinc-600 flex lg:mx-0 md:mx-0 mx-auto justify-center items-center w-[45px] h-[45px]">
                  <span className='text-white'>3</span>
                </div>
              </div>
              <p className="my-3 text-2xl">Configuration</p>
              <p>Create a free account and select integration type.</p>
            </div>

            <div className="grid-t1">
              <div className="icons">
                <div className="rounded-[50%] bg-zinc-600 flex lg:mx-0 md:mx-0 mx-auto justify-center items-center w-[45px] h-[45px]">
                  <span className='text-white'>4</span>
                </div>
              </div>
              <p className="my-3 text-2xl">Go live</p>
              <p>Create a free account and select integration type.</p>
            </div>
          </div>
          <div className="action mt-16 lg:text-left md:text-left text-center">
            <a href="#" className="rounded bg-black hover:bg-orange-600 text-white py-2 px-3 text-sm">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Developers