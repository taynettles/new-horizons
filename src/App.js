import React from 'react';
import Particles from 'react-particles-js';
import Timer from './Timer.js';
import SwitchStyle from './SwitchStyle.js';
import './App.css';
import logo from './acnh-logo.png';
import wood from './wood.jpg';

function App() {
  return (
    <div className="App">
    <Particles className="window" 
    style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        zIndex: -10 
    }}
    params= {{
      particles: {
        number: {
          value: 90,
          density: {
            enable: true,
            value_area: 5000
          }
        },
        shape: {
          type: 'image',
          image: {
            src: 'leaf.png'
          }
        },
        size: {
          value: 14,
          random: false
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          direction: "bottom-right",
          out_mode: "out",
          straight: false,
          speed: 1.5,
        },
        /* interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
              modes: {
                repulse: {
                distance: 1000,
                size: 80,
                duration: 2,
                speed: 3
                }, 
              },
            },
          },
        }, */
        retina_detect: true
        }
      }}
      />
      <header className="App-header">
        <Timer style={{
          backgroundImage: {wood}
        }} />  
        <img src={logo} className="App-logo" alt="logo" /> 
        <SwitchStyle className="SwitchStyle" />
      </header>
    </div> 
  );
}

export default App;
