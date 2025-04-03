"use client";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaMusic } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaMusic className="text-2xl text-purple-500" />
              <span className="text-xl font-bold">MusicWorld</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400">
              Elevate your musical journey with our premium courses and expert instructors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="text-gray-300 hover:text-white transition">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/guitar" className="text-gray-300 hover:text-white transition">
                  Guitar
                </Link>
              </li>
              <li>
                <Link href="/courses/piano" className="text-gray-300 hover:text-white transition">
                  Piano
                </Link>
              </li>
              <li>
                <Link href="/courses/vocals" className="text-gray-300 hover:text-white transition">
                  Vocals
                </Link>
              </li>
              <li>
                <Link href="/courses/production" className="text-gray-300 hover:text-white transition">
                  Music Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Subscribe to get updates on new courses and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 dark:text-gray-400">
            &copy; {new Date().getFullYear()} MusicWorld. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;