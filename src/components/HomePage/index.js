import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineCall} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'
import Packages from '../packags'
import './index.css'

function HomePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNo: '',
    location: '',
    dropDown: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Do something with the form data, e.g., send it to an API
    console.log(formData)
  }

  return (
    <div>
      <div className="bg-container">
        <div className="container-fluid">
          <div className="row">
            <div className="form-container col-12 col-lg-6">
              <h2 className="form-heading">
                Fill in the details to get a call
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="align-row mb-3">
                  <CgProfile className="mr-3 icon-img" />
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                  />
                </div>

                <div className="align-row mb-3">
                  <MdOutlineCall className="mr-3 icon-img" />
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNo"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    placeholder="Enter your Mobial Number"
                  />
                </div>
                <div className="align-row mb-3">
                  <ImLocation className="mr-3 icon-img text-blue" />
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your City"
                  />
                </div>
                <div className="align-row mb-3">
                  <input type="checkbox" className="check m-0" />
                  <p className="paragraph m-0 ml-3 pl-3">
                    By continuing you agree to our T&C and privacy policy
                  </p>
                </div>
                <button type="submit" className="btn btn-primary bg-blue">
                  Proceed
                </button>
              </form>
            </div>
            <div className="d-none col-lg-5">
              <img
                src="https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png"
                alt="img"
                className="image col-lg-5"
              />
              <img
                src="https://www.pexels.com/photo/crop-black-woman-making-aromatic-liquid-incense-5760907/"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <Packages />
    </div>
  )
}

export default HomePage
