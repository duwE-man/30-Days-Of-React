import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='background'>
        <h2>Subscribe</h2>
        <div>
          Sign up with your email address to recieve news and updates.
        </div>
        <div className='input-buttons'>
          <div className='input'>
            <input type="text" id="fname" name="firstname" placeholder="First name" />
          </div>
          <div className='input'>
            <input type="text" id="fname" name="firstname" placeholder="Last name" />
          </div>
          <div className='input'>
            <input type="text" id="fname" name="firstname" placeholder="Email name" />
          </div>
        </div>
        <div>
          <button>Subscribe</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
