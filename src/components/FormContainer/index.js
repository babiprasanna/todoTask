import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './index.css'

function FormContainer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNo: '',
    difficultyLevel: '',
  })
  const [isTrue, setIsTrue] = useState(null)

  const handleChange = e => {
    const {name, value} = e.target
    // console.log(e.target.value)
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = e => {
    // alert('Thank For Login')
    e.preventDefault()
    if (
      formData.fullName.length > 0 &&
      formData.email.length > 10 &&
      formData.mobileNo.length > 9
    ) {
      setIsTrue(() => true)
      localStorage.setItem('fromData', JSON.stringify({formData}))
    } else {
      setIsTrue(false)
    }
    //  console.log(formData)
  }

  // i take one form container here and store all the form data in local store and add link to web game page
  return (
    <div className="bg-container">
      <h1 className="home-heading">WEB GAME</h1>
      <p className="home-para">
        you are playing level of the game. you can click only green box n times
        within y sec. if you are click red button you loose your score and game
      </p>
      <div className="form-container col-12 col-lg-6">
        <h2 className="form-heading">Get Quote Instantly in a Minute</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
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
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">
              Mobile No
            </label>
            <input
              type="text"
              className="form-control"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter your Mobile Number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="difficultyLevel" className="form-label">
              Difficulty Level
            </label>
            <select
              className="form-control"
              name="difficultyLevel"
              id="difficultyLevel"
              value={formData.difficultyLevel}
              onChange={handleChange}
              placeholder="Choose One Option"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          {isTrue === false && <p className="error">*REQUIRED THE DATA</p>}
          {isTrue ? (
            <Link to="/web-game">
              <button type="submit" className="btn btn-primary">
                Click To Submit
              </button>
            </Link>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default FormContainer
