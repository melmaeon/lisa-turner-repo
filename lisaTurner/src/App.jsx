import { useState } from 'react'
import reactLogo from './assets/react.svg' 
{/* -- Not of utility, leave commented out --
import redFox from './path/to/redfox.jpg' 
*/}
import './App.css'

import Mel from './Mel'

function App() {
  const [count, setCount] = useState(0)

  {/* -- service carousel  */}

  return (
    <div className="App">
     <Mel />
    </div>
  )
}

export default App
