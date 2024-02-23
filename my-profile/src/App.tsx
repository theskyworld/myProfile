import { useEffect } from 'react'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import './styles/index.css'

function App() {

  const sectionElems = document.querySelectorAll("section");
  const navLinkElems = document.querySelectorAll("header nav a");

  useEffect(() => {
    const onScroll = () => {
      sectionElems.forEach((section) => {
        const scrollY = window.scrollY;
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinkElems.forEach((link) => {
            
            link.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + sectionId + "]")
              ?.classList.add("active");
          });
        }
      })
    }

    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
