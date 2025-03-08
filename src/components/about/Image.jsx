import React from 'react';
import './Image.css';
import sanni1 from './sanni1.jpg';
import sanni2 from './sanni2.jpg';
import sanni3 from './sanni3.jpg';
import sanni4 from './sanni4.jpg';
import sanni5 from './sanni5.jpg';
import sanni6 from './sanni6.jpg';
import sanni7 from './sanni7.jpg';
import sanni8 from './sanni8.jpg';
import sanni9 from './sanni9.jpg';
import sanni10 from './sanni10.jpg';

const Image = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="slider">
          {[sanni1, sanni2, sanni3, sanni4, sanni5, sanni6, sanni7, sanni8, sanni9, sanni10].map((img, index) => (
            <div key={index} className="item" style={{ "--position": index + 1 }}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Image;
