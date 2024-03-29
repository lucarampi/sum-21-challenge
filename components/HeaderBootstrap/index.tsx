import {
  FaGithub,
  FaGithubAlt,
  FaInstagram,
  FaLaptopCode,
  FaLinkedinIn,
} from "react-icons/fa";

export default function HeaderBootstrap() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid text-center">
        <a
          className="navbar-brand"
          href="https://github.com/lucarampi/"
          target={`_blank`}
        >
          <span className="me-2">
            <FaGithub />
          </span>{" "}
          Luca A.R.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav text-center d-flex">
           
            <li className="nav-item ">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.linkedin.com/in/lucarampi/"
                target={`_blank`}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.instagram.com/luca.rampi_/"
                target={`_blank`}
              >
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://drive.google.com/file/d/1_P6PPjlM0DLPS7r1h29P3AG8qdHWtyE3/view?usp=sharing"
                target={`_blank`}
              >
                <FaLaptopCode />
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://github.com/lucarampi/sum-21-challenge#readme"
                target={`_blank`}
              >
                 <strong>Readme</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
