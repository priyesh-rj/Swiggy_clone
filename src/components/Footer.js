import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Logo / Name */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Food Villa</h2>
          <p className="text-gray-400">
            Delicious food delivered to your doorstep.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="#" className="hover:text-blue-500">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-blue-400">
            <FaLinkedin />
          </a>

          <a href="#" className="hover:text-pink-500">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-sky-500">
            <FaTwitter />
          </a>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm mb-4">
            <Link to="/about" className="hover:text-yellow-400">
                 About
              </Link>
            <Link to="/contact" className="hover:text-yellow-400">
                 Contact
              </Link>
            <Link to="/Privacy Policy" className="hover:text-yellow-400">
                 Privacy Policy
              </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
          © 2026 Priyesh Raj. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;