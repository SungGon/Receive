import React from 'react';
import { Fade } from 'react-slideshow-image';

const Images = [
  'https://react-slideshow.herokuapp.com/assets/images/slide_7.jpg',
  'https://react-slideshow.herokuapp.com/assets/images/slide_6.jpg',
  'https://react-slideshow.herokuapp.com/assets/images/slide_5.jpg',
  'https://react-slideshow.herokuapp.com/assets/images/slide_4.jpg'
];

const properties = {
  duration: 3000,
  transitionDuration: 300,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true
}

const Fadeshow = () => {
  return (
    <div>
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-fade">
            <img src={Images[0]} />
            {/* <h2>First Slide</h2> */}
          </div>
          <div className="each-fade">
            {/* <h2>Second Slide</h2> */}
            <img src={Images[1]} />
          </div>
          <div className="each-fade">
            <img src={Images[2]} />
            {/* <h2>Third Slide</h2> */}
          </div>
          <div className="each-fade">
            <img src={Images[3]} />
            {/* <h2>Third Slide</h2> */}
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Fadeshow;