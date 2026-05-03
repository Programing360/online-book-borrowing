import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-[#1f1512] text-white pt-20 pb-10 mt-20">
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
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
              >
                <FaFacebook />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
              >
                <GrInstagram />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
              >
               <FaTwitter />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
              >
               <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/all-books" className="hover:text-yellow-400 transition">
                  All Books
                </Link>
              </li>

              <li>
                <Link href="'/all-books" className="hover:text-yellow-400 transition">
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/myProfile" className="hover:text-yellow-400 transition">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-yellow-400 text-xl"></i>

                <p>Dhangora, Raigonj, Sirajganj, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-yellow-400 text-xl"></i>

                <p>fardhanhasanlimon95@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-yellow-400 text-xl"></i>

                <p>+880 1754318654</p>
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
            <Link href="#" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-yellow-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
