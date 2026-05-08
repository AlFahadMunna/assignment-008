// components/Footer.jsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-primary">PageSwap</h2>

            <p className="mt-3 text-sm leading-6 max-w-sm mx-auto sm:mx-0">
              Borrow. Read. Repeat. A community-driven platform where readers
              can borrow, share, and explore books together.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title text-lg">Contact Us</h3>

            <div className="space-y-2 text-sm">
              <p>Email: mdalfahad.afm@gmail.com</p>
              <p>Phone: +880 1912845367</p>
              <p>Location: Bangladesh</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title text-lg">Follow Us</h3>

            <div className="flex justify-center sm:justify-start gap-5 mt-3">
              {/* Facebook */}
              <Link
                href="#"
                className="hover:text-primary transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.99 22 12z" />
                </svg>
              </Link>

              {/* Twitter */}
              <Link
                href="#"
                className="hover:text-primary transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.556 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                className="hover:text-primary transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-base-300">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          © 2026 PageSwap — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
