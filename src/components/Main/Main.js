import React from 'react';

import SearchBar from 'components/SearchBar/SearchBar';
import Navigator from 'components/Navigator/Navigator';
import AdSlide from 'components/Advertisement/adSlide';
import AdFade from 'components/Advertisement/adFade';
import ItemList from 'components/ItemList/ItemList';


class Main extends React.Component{
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
				<div>
					<h3>HOT100</h3>
				</div>
					

				{/* <Info /> */}
			</div>
        );
    };
}

export default Main;