import React from 'react'

function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-11">
      <div className="max-w-6xl mx-auto py-2 min-h-[300px]">
        <div className="grid grid-flow-col auto-cols-auto">
          <section>
            <div className="mb-4">Boldwallet</div>
            <ul className="font-light">
              <li className="mb-2 hover:text-blue-500"><a href="#">Blog</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Contact Us</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">For E-Commerce</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">For Entrepreneurs</a></li>
            </ul>
          </section>

          <section>
            <div className="mb-4">Boldwallet</div>
            <ul className="font-light">
              <li className="mb-2 hover:text-blue-500"><a href="#">Blog</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Contact Us</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">For E-Commerce</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">For Entrepreneurs</a></li>
            </ul>
          </section>

          <section>
            <div className="mb-4">Features</div>
            <ul className="font-light">
              <li className="mb-2 hover:text-blue-500"><a href="#">Pricing</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Payment Methods</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Libraries & Plugins</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Disputes</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Refunds</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Recurring Payments</a></li>
            </ul>
          </section>

          <section>
            <div className="mb-4">Knowledge Hub</div>
            <ul className="font-light">
              <li className="mb-2 hover:text-blue-500"><a href="#">Support</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Developers</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Documentation</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Release Notes</a></li>
              <li className="mb-2 hover:text-blue-500"><a href="#">Support Ticket</a></li>
            </ul>
          </section>

          <section>
            <div className="mb-4">Subscribe</div>
            <form>
              <div className="input"></div>
            </form>
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