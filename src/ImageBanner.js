import React from 'react';
import Slider from 'infinite-react-carousel';

class ImageBanner extends React.Component {
  render() {
    const settings =  {
      arrowsBlock: false,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      pauseOnHover: true
    };
    return (
      <div>
        <span>ImageBanner</span>
        <Slider className="Advertisement" { ...settings }>
          <div>
            <img src="https://static.lottedfs.com/contents/images/store-img/store-content-img/1140000/02/23211018/2020052715260211827b63a83b2464ebc9993711f19669d9d.jpg" width="600" height="150"></img>
          </div>
          <div>
            <img src="https://static.lottedfs.com/contents/images/store-img/store-content-img/1140000/02/23211018/2020052715260211827b63a83b2464ebc9993711f19669d9d.jpg" width="600" height="150"></img>
          </div>
          <div>
            <img src="https://static.lottedfs.com/contents/images/store-img/store-content-img/1140000/02/23211018/2020052715260211827b63a83b2464ebc9993711f19669d9d.jpg" width="600" height="150"></img>
          </div>
          <div>
            <img src="https://static.lottedfs.com/contents/images/store-img/store-content-img/1140000/02/23211018/2020052715260211827b63a83b2464ebc9993711f19669d9d.jpg" width="600" height="150"></img>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ImageBanner;