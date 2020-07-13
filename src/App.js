import React from 'react'
import './App.css';
import SearchBar from './SearchBar'

import Navigator from './Navigator'
import ImageBanner from './ImageBanner'


class App extends React.Component{
	render(){
		return (
				<body>
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
						<ImageBanner />
					</div>

					{/* hot100 */}

					{/* <Info /> */}
				</body>

		)
	}
}

export default App;
