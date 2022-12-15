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
              <div className="service-home-cards-carousel-track">
                <div className="service-home-cards-carousel-track-cards">
                  <a href="#">
                    <picture className="service-home-cards-carousel-picture-1">
                      <source type="image/webp" srcset="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fred-fox-mammal&psig=AOvVaw2n0aIuTuiEZWglQpRb16QK&ust=1671148507548000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiGrbqn-vsCFQAAAAAdAAAAABAE" />
                      <img itemprop="image" class alt="Red Fox" />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
