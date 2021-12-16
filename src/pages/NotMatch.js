import React from 'react';
import image from '../images/not-found.png';

const NotMatch = () => (
  <div className="no-match">
    <h3>Whoops! Page not found!</h3>
    <img src={image} alt="Not found" />
  </div>
);

export default NotMatch;
