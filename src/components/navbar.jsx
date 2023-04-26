import "../styles/navbar.css";
import logoNavbar from "../rsrc/images/logo.svg";

const NavBar = () => {
  return (
    <>
      <div className="containerNavbar">
        <div className="row">
          <div className="col-md-3 text-center">
            <ul className="containerLogo">
              <li className="logoNavbar">
                {" "}
                <img src={logoNavbar} alt="logoNewman" />
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <ul className="containerLinks">
              <li className="link">
                <a href=""> Home </a>
              </li>
              <li className="link">
                {" "}
                <a href=""> The Crew </a>
              </li>
              <li className="link">
                {" "}
                <a href=""> Events </a>
              </li>
              <li className="link">
                {" "}
                <a href=""> {"What's New"}</a>
              </li>
              <li className="link">
                {" "}
                <a href=""> Virtual Office </a>
              </li>
              <li className="link">
                {" "}
                <a href=""> Contact</a>
              </li>
              <li className="link">
                <button>Maria Reina Parish</button>
              </li>
              <li className="link">
                <button>IG</button>
              </li>
              <li className="link">
                <button>FB</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
