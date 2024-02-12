import logoImg from "../../assets/suvLogo.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function NavBar() {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img id="navbar-logo-img" src={logoImg} alt="Logo" />
      </div>
      <button
        className="toggle-btn"
        onClick={() => setOpenNavBar((prev) => !prev)}
      >
        {openNavBar ? (
          <MdClose style={{ width: "20px", height: "20px" }} />
        ) : (
          <FiMenu
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        )}
      </button>
      <ul className={`navbar-menu${openNavBar ? " navbar-menu-open" : ""}`}>
        <li>
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setOpenNavBar(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="specs"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setOpenNavBar(false)}
          >
            Specs
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setOpenNavBar(false)}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="models"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setOpenNavBar(false)}
          >
            Models
          </Link>
        </li>
      </ul>
    </nav>
  );
}
