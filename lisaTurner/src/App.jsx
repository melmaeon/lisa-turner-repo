import { useState } from 'react'
import reactLogo from './assets/react.svg' 
{/* -- Not of utility, leave commented out --
import redFox from './path/to/redfox.jpg' 
*/}
import './App.css'

import Mel from './Mel'

function App() {
  const [count, setCount] = useState(0)

  const imgs = document.getElementById('imgs');
  const img = document.querySelectorAll('#imgs img');

/* ^-- Query Selector will select all objects inside the called classes */

let ind = 0;

function run() {

    ind++;

    if(ind > img.length - 1) {
        ind = 0;
    }

    imgs.style.transform = `translateX(${-ind * 500}px)`;
/*
    setTimeout(run, 2000);
    */
};

setInterval(run, 2000);


/* -- Function call is redundant with setInterval, uncomment setTimeout and function call for identical function
run();
*/

  {/* -- service carousel  */}

  return (
    <div className="App">
     <div class="carousel">
        <div class="image-container" id="imgs">
            
            <img src="http://townline.org/wp-content/uploads/2019/01/Best-shot-Winters-fox-3.jpg" alt="fox" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Vulpes_vulpes_ssp_fulvus_6568085.jpg" alt="" />

            <img src="https://shop.startribune.com/wp-content/uploads/2019/04/04232019_GutterHelmet.jpg" alt="" />

            <img src="https://dickinsoncountyconservationboard.com/wp-content/uploads/sites/2/2020/11/Image-by-272447-from-Pixabay.jpg" alt="" />

            <img src="https://windows10spotlight.com/wp-content/uploads/2021/11/a5a21773bde3635c14cc02e4c652d9b9.jpg" />

            <img src="https://www.goeddelphotography.com/uploads/photos/_large/red-fox-half-buried-in-snow-tail-end-up-2.jpg" />
            
        </div>
      </div>

    </div>
  )
}

export default App
