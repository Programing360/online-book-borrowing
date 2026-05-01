import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1512] text-white pt-20 pb-10 ">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* LOGO & ABOUT */}
          <div>
            <h1 className="text-3xl font-black text-yellow-400">BookNest</h1>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Discover thousands of books, explore new worlds, and enjoy a
              modern digital reading experience.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
              >
                <i className="ri-twitter-x-line text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  All Books
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-yellow-400 text-xl"></i>

                <p>Dhangora, Raigonj, Sirajগঞ্জ, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-yellow-400 text-xl"></i>

                <p>support@booknest.com</p>
              </div>

              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-yellow-400 text-xl"></i>

                <p>+880 1234-567890</p>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Newsletter</h2>

            <p className="text-gray-400 leading-relaxed">
              Subscribe to get updates about new books, offers, and membership
              discounts.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
              />

              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-center md:text-left">
            © 2026 BookNest. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-500">
            <a href="#" className="hover:text-yellow-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
