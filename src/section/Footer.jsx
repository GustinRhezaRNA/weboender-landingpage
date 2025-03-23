import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#034142] pt-8  min-h-[400px] flex flex-col justify-between">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10 flex-grow mt-10">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logo.png"
            alt="Weboender Logo"
            className="w-12 h-12"
             loading="lazy"
          />
          <h2 className="text-4xl font-bold text-white">Weboender</h2>
        </div>

        <nav className="mt-4">
          <ul className="flex space-x-6 text-xl font-normal text-white">
            <li>
              <a
                href="#home"
                className="hover:text-gray-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#schdule"
                className="hover:text-gray-300"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="hover:text-gray-300"
              >
                Join
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-6 pt-3">
          <a
            href="#"
            className="hover:text-gray-300 text-white"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 text-white"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com/weboender_community/"
            className="hover:text-gray-300 text-white"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 text-white"
          >
            <FaLinkedinIn size={30} />
          </a>
        </div>
      </div>

      <div className=" text-white text-sm text-center py-4 w-full  bg-black">
        © 2025 <span className="font-semibold text-[#107A7B]">Weboender</span> All Rights Reserved, Inc.
      </div>
    </footer>
  );
};

export default Footer;
