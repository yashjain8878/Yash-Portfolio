  
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import About from './componants/About'
import Skills from './componants/Skills'
import Project from './componants/Projects'
import Experience from './componants/Experience'
import Contact from './componants/Contact'


function App() {
  return (
    <div className="bg-[#E7ECEF] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />  
      <Experience />
      <Contact/>
    </div>
  )
}

export default App


