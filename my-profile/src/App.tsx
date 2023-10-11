import About from './components/About/About'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Services from './components/Services/Services'
import './styles/index.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Services />
    </div>
  )
}

export default App
