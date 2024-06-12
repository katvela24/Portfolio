
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import AboutMe from './pages/aboutme'
import Header from './components/Header'

function App() {
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>

      
      </Routes>
      </Router> 
    </>
  )
}

export default App
