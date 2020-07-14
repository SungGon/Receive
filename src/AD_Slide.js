import React from 'react';
import Slider from 'infinite-react-carousel';


class Slide extends React.Component {
  render() {
    const settings =  {
      arrowsBlock: false,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      pauseOnHover: true
    };

    return (
      <div>
        {/* <span>Explain: Advertisement</span> */}
        <Slider className="Advertisement" { ...settings }>
          <div>
            <img src="https://react-slideshow.herokuapp.com/assets/images/slide_7.jpg" alt="banner1"></img>
          </div>
          <div>
            <img src="https://react-slideshow.herokuapp.com/assets/images/slide_6.jpg" alt="banner2"></img>
          </div>
          <div>
            <img src="https://react-slideshow.herokuapp.com/assets/images/slide_5.jpg" alt="banner3"></img>
          </div>
          <div>
            <img src="https://react-slideshow.herokuapp.com/assets/images/slide_4.jpg" alt="banner4"></img>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;