import './App.css'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'

function App() {
/**
 * Description:
 * Component for the home page.
 */

  return (
  <div>
      <Navbar/>
    
    <div id="content">
      <About/>
      <Projects/>
      <Experience/>
    </div>
  </div> 

  )
}

export default App
