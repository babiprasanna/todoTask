import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function WebGame() {
  // take the form data from local store
  const formData2 = JSON.parse(localStorage.getItem('fromData'))
  const [formDataLevel, setFormData] = useState({
    difficultyLevel: '',
    ...formData2.formData,
  })
  const [count, setCount] = useState(0)
  const [popUp, setPopUp] = useState(false) // for popup
  const [score, setScore] = useState(0) // for score
  const [time, setTime] = useState(0) // for time
  const [backgroundColor, setBackgroundColor] = useState('green') // // for background color green ang red box
  const [countdown, setCountdown] = useState(40)
  const [running, setRunning] = useState(false)

  let textHeading
  let winOrLoose = 'Game Over'

  // this if function for text heading and message
  if (
    formDataLevel.difficultyLevel === 'Easy' ||
    formDataLevel.difficultyLevel === ''
  ) {
    textHeading =
      'you are playing Easy level of the game. you can click only green box 10 times within 40 sec. otherwise you loose your game '
    if (count === 10) {
      winOrLoose = 'Win The Game !'
    }
  } else if (formDataLevel.difficultyLevel === 'Medium') {
    textHeading =
      'you are playing Medium level of the game. you can click only green box 15 times within 40 sec. otherwise you loose your game '
    if (count === 15) {
      winOrLoose = 'Win The Game !'
    }
  } else if (formDataLevel.difficultyLevel === 'Hard') {
    textHeading =
      'you are playing Hard level of the game. you can click only green box 25 times within 40 sec. otherwise you loose your game '
    if (count === 25) {
      winOrLoose = 'Win The Game !'
    }
  }

  // for countdown to start game

  const startCountdown = () => {
    if (!running) {
      setRunning(true)
      const timer = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 0) {
            clearInterval(timer)
            setCountdown(40)
            setRunning(false)
            return 0
          }
          return prevCountdown - 1
        })
      }, 1000)
    }
  }

  useEffect(() => {
    if (countdown === 0) {
      setRunning(false)
    }
  }, [countdown])

  // for changing background color on box

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const randomColorIndex = Math.random() < 0.5 ? 0 : 1
      const colors = ['green', 'red']
      setBackgroundColor(colors[randomColorIndex])
    }, 1000)

    return () => clearInterval(colorInterval)
  }, [])

  // after clicked green or red box function

  const onClickFunction = () => {
    setScore(count)
    setTime(40 - countdown)
    // console.log(backgroundColor)
    if (
      formDataLevel.difficultyLevel === 'Easy' ||
      formDataLevel.difficultyLevel === ''
    ) {
      console.log(formData2.formData.difficultyLevel)
      if (backgroundColor === 'green' && count <= 10) {
        setCount(() => count + 1)
        console.log('winner At First level')
        console.log(backgroundColor)
      } else if (backgroundColor === 'red') {
        console.log('You Loose The Game')
        setCount(0)
        setCountdown(0)
      } else if (count === 0) {
        setCountdown(0)
      }
    } else if (formDataLevel.difficultyLevel === 'Medium') {
      if (backgroundColor === 'green' && count <= 15) {
        setCount(() => count + 1)
        console.log('winner At First level')
        console.log(backgroundColor)
      } else if (backgroundColor === 'red') {
        console.log('You Loose The Game')
        setCount(0)
        setCountdown(0)
      } else if (count === 0) {
        setCountdown(0)
      }
    } else if (formDataLevel.difficultyLevel === 'Hard') {
      if (backgroundColor === 'green' && count <= 25) {
        setCount(() => count + 1)
        console.log('winner At First level')
        console.log(backgroundColor)
      } else if (backgroundColor === 'red') {
        console.log('You Loose The Game')
        setCount(0)
        setCountdown(0)
      } else if (count === 0) {
        setCountdown(0)
      }
    }
    if (
      count === 10 ||
      count === 15 ||
      count === 25 ||
      backgroundColor === 'red'
    ) {
      setPopUp(true)
      setCountdown(0)
    }
  }

  // on choose the level handle function

  const handleChange = e => {
    const {name, value} = e.target
    // console.log(formData2)
    setFormData({...formDataLevel, [name]: value})
  }

  // on choose the level submit function

  const handleSubmit = e => {
    // alert('Thank For Login')
    e.preventDefault()
    console.log(formDataLevel)
  }

  return (
    <div className="bg-container">
      <div className="container-fluid">
        <div className="row">
          <div className="leader-board-container">
            <p className="text-fonts ">NAME: {formData2.formData.fullName}</p>
            <p className="text-fonts ">NAME: {formData2.formData.email}</p>
            <p className="text-fonts ">TOTAL TIME : {countdown}</p>
            <p className="text-fonts ">TOTAL CLICKS : {count}</p>
            <Link to="/">
              <p className="text-fonts ">User Registration</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="text-part">
            <h1 className="home-heading m-auto">WEB GAME</h1>
            <p className="home-para">{textHeading}</p>
            <div className="form-container col-12 col-lg-6">
              <form className="row-align m-0" onSubmit={handleSubmit}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="mb-3 col-12 col-md-8">
                      <label htmlFor="difficultyLevel" className="form-label">
                        Difficulty Level
                      </label>
                      <select
                        className="form-control"
                        name="difficultyLevel"
                        id="difficultyLevel"
                        value={formDataLevel.difficultyLevel}
                        onChange={handleChange}
                        placeholder="Choose One Option"
                      >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-primary col-md-3">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="bg-container col-12">
                  <div
                    style={{
                      backgroundColor,
                      height: '150px',
                      borderRadius: '20px',
                    }}
                  >
                    {running ? (
                      <button
                        className="color-box"
                        type="button"
                        onClick={onClickFunction}
                        value={backgroundColor}
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Click Me
                      </button>
                    ) : (
                      <button
                        className="color-box"
                        type="button"
                        value={backgroundColor}
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Click Me
                      </button>
                    )}
                  </div>
                  {popUp && (
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Leader Board
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p className="text-leader-board">
                              status of the Game: {winOrLoose}
                            </p>
                            <>
                              <p className="time">time: {time} sec</p>
                              <p className="score">score: {score}</p>
                            </>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={startCountdown}
                    disabled={running}
                    className="btn btn-primary mt-2"
                  >
                    {running ? 'Count Down Started...' : 'Start Game'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebGame
