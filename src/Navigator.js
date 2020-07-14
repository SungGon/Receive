import React from 'react';
import {Route, Link} from 'react-router-dom';
// import Skincare from './Skincare';
// import Makeup from './Makeup';


class Navigator extends React.Component{
    render(){
        return(
			<div>
            	<nav>
                	<ul className="nav_container">
						<li className="nav_item"> 
							<Link to="/skincare">스킨케어</Link> 
						</li>
						<li className="nav_item"> 
							<Link to="/makeup">메이크업</Link> 
						</li>						
                    	<li className="nav_item"> 
							<Link to="/perfume">향수</Link> 
						</li>
						<li className="nav_item"> 
							<Link to="/bw">가방/지갑</Link> 
						</li>
						<li className="nav_item"> 
							<Link to="/cj">시계/주얼리</Link> 
						</li>
						<li className="nav_item"> 
							<Link to="/fashion">패션/잡화</Link> 
						</li>
						<li className="nav_item"> 
							<Link to="sports">스포츠/레저</Link> 
						</li>							
                    	<li className="nav_item"> 
							<Link to="digital">디지털</Link> 
						</li>
	    				<li className="nav_item"> 
							<Link to="kids">유아</Link> 
						</li>
					</ul>
				</nav>
				<hr/>
				{/* <Route path="/skincare" component={Skincare}/>
                <Route path="/makeup" component={Makeup}/>
                <Route path={[]} component={}/>
                <Route path={[]} component={}/>
	            <Route path={[]} component={}/>
                <Route path={[]} component={}/>
                <Route path={[]} component={}/> */}
			</div>
        )
    }
}

export default Navigator;