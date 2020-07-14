import React from 'react';

import SearchBar from './SearchBar';
import Navigator from './Navigator';
import AdSlide from './adSlide';
import AdFade from './adFade';


class Home extends React.Component{
    render(){
        return(
            <div>
				{/* 로고, 검색창 */}
				<div>
					<SearchBar />
				</div>
				{/* 카테고리들 */}
				<div>
					<Navigator />
				</div>

				{/* 이미지 배너 */}
				<div>
					<h3>후보 1</h3>
					<AdSlide />
				</div>
				<div>
                    <h3>후보 2</h3>
					<AdFade />
				</div>

				{/* hot100 */}
					

				{/* <Info /> */}
			</div>
        );
    };
}

export default Home;