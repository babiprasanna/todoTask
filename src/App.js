import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FormContainer from './components/FormContainer'
import WebGame from './components/WebGame'
import './App.css'

// i take tow components here one is FormContainer and  WebGame i used react-router-dom concept here
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<FormContainer />} />
      <Route exact path="/web-game" element={<WebGame />} />
    </Routes>
  </BrowserRouter>
)

export default App
