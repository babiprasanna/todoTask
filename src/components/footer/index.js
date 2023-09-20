import {MdOutlineCall} from 'react-icons/md'
import './index.css'

const Footer = () => (
  <div className="footer-client">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <img
            src="https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png"
            alt="img"
            className="img"
          />
        </div>
        <div className="col-12 col-md-4">
          <h1 className="text2">
            Book a docter appointments online and get your aliments treated in
            no time with our expert medical support systems. cet rid of all your
            medical problem with our expert panel of docters who guide you
            towards a healthier life.
          </h1>
          <div className="input ml-0 pl-0">
            <p className="text pl-0 ml-0">+91</p>
            <p className="line">{}</p>
            <input type="number" className="input-element btn4" />
            <p className="bounding-box">
              <MdOutlineCall className="call" />
            </p>
          </div>
        </div>

        <div className="col-4 col-md-2">
          <div className="footer-container">
            <h1 className="heading21 mb-3">Services</h1>
            <ul className="scroll">
              <li className="list">Appointments</li>
              <li className="list">Lab texts</li>
              <li className="list">A-Z medicine</li>
              <li className="list">Doctor support</li>
            </ul>
          </div>
        </div>
        <div className="col-4 col-md-2">
          <div className="footer-container">
            <h1 className="heading21 mb-3">Legal</h1>
            <ul>
              <li className="list">General info</li>
              <li className="list">Privacy policy</li>
              <li className="list">Terms of Services</li>
              <li className="list">Consultation</li>
              <li className="list">How it works</li>
            </ul>
          </div>
        </div>
        <div className="col-4 col-md-3">
          <div className="footer-container">
            <h1 className="heading21 mb-3">Talk to Us</h1>
            <ul>
              <li className="list">support@notinline.com</li>
              <li className="list">appointment@notinline.com</li>
              <li className="list">+91 12345 67899</li>
              <li className="list">+91 97642 09752</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="row-con">
      <p className="foot-para">
        Copyrights © 2009 - 2023 Startupwala Pvt. Ltd.{' '}
      </p>
    </div>
  </div>
)

export default Footer
