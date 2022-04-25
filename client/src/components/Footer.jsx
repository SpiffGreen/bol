import React from 'react'

function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-11">
      <div className="container mx-auto py-2 min-h-[270px]">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 auto-cols-auto pb-10 lg:px-0 px-4 text-zinc-300 lg:text-base md:text-base text-sm lg:text-left md:text-left text-center">
          <section className='md:mb-0 lg:mb-0 mb-8'>
            <div className="mb-4">Boldwallet</div>
            <ul className="font-light">
              <li className="mb-3 hover:text-blue-500"><a href="#">Blog</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Contact Us</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">For E-Commerce</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">For Entrepreneurs</a></li>
            </ul>
          </section>

          <section className='md:mb-0 lg:mb-0 mb-8'>
            <div className="mb-4">Features</div>
            <ul className="font-light">
              <li className="mb-3 hover:text-blue-500"><a href="#">Pricing</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Payment Methods</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Libraries & Plugins</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Disputes</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Refunds</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Recurring Payments</a></li>
            </ul>
          </section>

          <section className='md:mb-0 lg:mb-0 mb-8'>
            <div className="mb-4">Knowledge Hub</div>
            <ul className="font-light">
              <li className="mb-3 hover:text-blue-500"><a href="#">Support</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Developers</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Documentation</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Release Notes</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Support Ticket</a></li>
            </ul>
          </section>

          <section className='md:mb-0 lg:mb-0 mb-8'>
            <div className="mb-4">Platform</div>
            <ul className="font-light">
              <li className="mb-3 hover:text-blue-500"><a href="#">Privacy</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Acceptable Use Policy</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Service Agreement</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Top Level Security</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Risk Management</a></li>
              <li className="mb-3 hover:text-blue-500"><a href="#">Fraud Prevention</a></li>
            </ul>
          </section>

          <section className='max-w-[325px] md:mx-0 lg:mx-0 mx-auto'>
            <div className='lg:text-base md:text-base text-sm lg:text-left md:text-left text-center'>Subscribe</div>
            <form className='my-6'>
              <div className="input border rounded border-zinc-600 p-2">
                <input type="email" className="text-base border-0 w-full bg-transparent outline-none" placeholder='Enter email' />
              </div>
            </form>
            <p className='lg:text-base md:text-base text-sm md:text-left text-center'>By submitting this form, you acknowledge that you have reviewed the terms of our Privacy Statement and consent to the use of data in accordance there with.</p>
            <div className="icons mt-3 text-xl flex gap-4 md:justify-start justify-center">
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </section>
        </div>
        <div className="copyright">
          <p className="text-center text-zinc-300 my-4 md:mt-6 lg:text-base md:text-base text-sm">2022 Boldwallet™ | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer