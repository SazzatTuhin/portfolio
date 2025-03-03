import Link from "next/link";
import { navLinks } from "./Navbar";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <ul className="flex flex-wrap gap-4 justify-center">{navLinks}</ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://github.com/SazzatTuhin" target="_blank">
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/m-m-sazzat-hossain-7ba102142/"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://www.facebook.com/sazzathossain.tuhin"
            target="_blank"
          >
            <FaFacebook size={24} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Sazzat
          Tuhin
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
