import React from 'react'

function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-11">
      <div className="max-w-6xl mx-auto py-2 min-h-[300px]">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 auto-cols-auto pb-20 lg:px-0 px-4 text-zinc-300">
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

          <section className='max-w-[325px]'>
            <div>Subscribe</div>
            <form className='my-6'>
              <div className="input border rounded border-white p-1">
                <input type="email" className="text-base border-0 w-full bg-transparent outline-none" placeholder='Enter email' />
              </div>
            </form>
            <p>By submitting this form, you acknowledge that you have reviewed the terms of our Privacy Statement and consent to the use of data in accordance there with.</p>
            <div className="icons my-3 text-xl flex gap-2">
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
          </section>
        </div>
        <div className="copyright">
          <p className="text-center mt-7 md:mt-6">2022 Boldwallet™ | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer