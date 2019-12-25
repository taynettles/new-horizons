import React from 'react'
import Particles from 'react-particles-js'

function ParticlesContainer() {
  return(
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}  
    >
      <Particles
          params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 1800
                }
              },
              shape: {
                type: 'image',
                image: {
                  src: 'leaf.png',
                  width: 100,
                  height: 100,
                }
              },
              size: {
                value: 10,
                random: false
              },
              line_linked: {
                enable: false
              },
              move: {
                enable: true,
                direction: "bottom",
                out_mode: "out",
                straight: false,
                speed: 1,
              }
            }
          }}
        />
    </div>
    
  )
}

export default ParticlesContainer;