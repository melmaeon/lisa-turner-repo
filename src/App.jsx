import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  {/* -- service carousel  */}

  return (
    <div className="App">
      <div className="wrapper">
        <div className="service-module">
          <section className="service-home-cards">
            <p className="service-home-cards-top-text">Read Now</p>
            <h2 className="service-home-cards-top-header">Services</h2>
            <div className="service-home-cards-carousel">
              <div className="service-home-cards-arrows">
                <span className="service-home-cards-arrow-left" data-glide-dir="<">::before</span>
                <span className="service-home-cards-arrow-right" data-glide-dir=">">::before</span>
              </div>
              <div className="service-home-cards-carousel-track">{/* refer to template site for help here */}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
