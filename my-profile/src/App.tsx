import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import './styles/index.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact/>
    </div>
  )
}

export default App
