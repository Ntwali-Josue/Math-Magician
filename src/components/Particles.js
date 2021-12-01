import React from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = () => (
  <Particles
    id="particles-js"
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: '#fff',
        },
        opacity: {
          value: 0.5,
          anim: {
            enable: true,
          },
        },
        size: {
          value: 7,
          random: true,
          anim: {
            enable: true,
            speed: 4,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          speed: 0.2,
        },
      },
    }}
  />
);

export default ParticlesComponent;
