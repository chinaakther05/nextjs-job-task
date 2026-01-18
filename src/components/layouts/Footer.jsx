import React from "react";
import Logo from "./Logo";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content">
      <div className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div>
          <Logo />
          <p className="mt-2 text-gray-400">
            Building your brand with excellence.
          </p>

         
        </div>

        
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

       
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
           {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/sohag.gaji.14473"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
           
            
            <a
              href="https://www.linkedin.com/in/china-akther-a384b23a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
  href="https://github.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-gray-800 transition-colors"
>
  <FaGithub size={20} />
</a>

          </div>
        </nav>
        
      </div>
    </div>
  );
};

export default Footer;
