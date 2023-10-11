import About from './components/About/About'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import './styles/index.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
    </div>
  )
}

export default App
