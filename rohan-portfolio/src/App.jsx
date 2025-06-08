import './App.css'
import Navbar from './Navbar'
import About from './About'

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
    </div>
  </div> 

  )
}

export default App
