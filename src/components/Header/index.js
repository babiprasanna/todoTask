import 'bootstrap/dist/css/bootstrap.min.css'
import {FaGooglePlay} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light con">
    <div className="container nav">
      <a className="navbar-brand a-row" href="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png"
          alt=""
          className="logo w-2"
        />
        <h1 className="home-heading mt-3">
          Not<span className="sub-heading">In</span>Line
        </h1>
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
        <span className="navbar-toggler-icon">{}</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-black" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="/about">
              Health conditions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-lightblue" href="/contact">
              Lab texts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="/contact">
              medicines
            </a>
          </li>
        </ul>
      </div>
      <div className="d-none d-lg-flex">
        <button type="button" className="btn btn-primary mr-3">
          For patients
        </button>
        <button type="button" className="btn btn-primary mr-3">
          For hospitals
        </button>
      </div>
      <button
        type="button"
        className="btn btn-secondary bg-black text-white d-none d-lg-flex"
      >
        <FaGooglePlay className="icon" /> Play store
      </button>
    </div>
  </nav>
)

export default Header
