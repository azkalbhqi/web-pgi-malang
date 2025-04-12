import { FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-center space-y-4 bottom-0">
      <p className="text-gray-600">
        © 2025 Persatuan Golf Indonesia Malang. All rights reserved.
      </p>

      <div className="space-y-4">
        <p className="text-gray-700 font-semibold">Our Socials</p>
        <div className="flex justify-center gap-12 text-gray-600">
          {/* Instagram PGI Pusat */}
          <a
            href="https://www.instagram.com/pb.pgi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-pink-600 transition"
          >
            <FaInstagram className="text-2xl" />
            <span className="text-sm mt-1">PGI Pusat</span>
          </a>

          {/* Instagram PGI Malang */}
          <a
            href="https://www.instagram.com/pgi_malang/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-pink-600 transition"
          >
            <FaInstagram className="text-2xl" />
            <span className="text-sm mt-1">PGI Malang</span>
          </a>

          {/* Website PGI Pusat */}
          <a
            href="https://www.pbpgi.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-600 transition"
          >
            <FaGlobe className="text-2xl" />
            <span className="text-sm mt-1">Website PGI</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
