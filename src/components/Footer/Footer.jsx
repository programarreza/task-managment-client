import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#081b29] text-white px-24 flex items-center justify-center min-h-[150px] ">
      <div className="text-center ">
        <div className="flex gap-5 mx-auto justify-center mb-4">
          <a
            href="#"
            className="border p-2 block rounded-full hover:shadow-xl hover:shadow-cyan-500/50 hover:bg-[#0090f0] hover:border-[#0090f0] "
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/ProgrammerReza"
            className="border p-2 block rounded-full hover:shadow-xl hover:shadow-cyan-500/50 hover:bg-[#0090f0] hover:border-[#0090f0] "
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/MNalchity"
            className="border p-2 block rounded-full hover:shadow-xl hover:shadow-cyan-500/50 hover:bg-[#0090f0] hover:border-[#0090f0] "
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-gray-400">
          Copyright <span>© 2023</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
