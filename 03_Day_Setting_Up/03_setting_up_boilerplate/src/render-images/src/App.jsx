import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='header'>Front End Technologies</h1>
      <div className="grid-elem">
        <div>
          <img className='grid-image' src="html_logo.png" alt="HTML5" />
        </div>
        <div>
          <img className='grid-image' src="css_logo.png" alt="CSS3" />
        </div>
        <div>
          <img className='grid-image' src="css_logo.png" alt="CSS3" />
        </div>
        <div>
          <img className='grid-image' src="react_logo.png" alt="React" />
        </div>
      </div>
      
    </div>
  )
}

export default App
