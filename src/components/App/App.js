import React from 'react';
import { Route } from 'react-router-dom';
import Main from "components/Main/Main";

import 'react-slideshow-image/dist/styles.css';
// import './App.css';


class App extends React.Component{
	render(){
		return (
			<Route path="/" component={Main} exact={true} />

		)
	}
}

export default App;
