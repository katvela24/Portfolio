
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './pages/aboutme'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Resume from './pages/resume'

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />


        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
