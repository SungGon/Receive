import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import 'react-slideshow-image/dist/styles.css';
import './App.css';

class App extends React.Component{
	render(){
		return (
			<Route path="/" component={Home} exact={true} />
			
		)
	}
}

export default App;
