import React from 'react'
import {Route, Link} from 'react-router-dom'

class Navigator extends React.Component{
    render(){
        return(
			<div>
            <nav>
                <ul className="nav_container">
					<li className="nav_item"> 
						<Link to="/">스킨케어</Link> 
					</li>
					<li className="nav_item"> 
						<Link to="/">메이크업</Link> 
					</li>						
                    <li className="nav_item"> 
						<Link to="/">향수</Link> 
					</li>
					<li className="nav_item"> 
						<Link to="/">가방/지갑</Link> 
					</li>
					<li className="nav_item"> 
						<Link to="">시계/주얼리</Link> 
					</li>
					<li className="nav_item"> 
						<Link to="/">패션/잡화</Link> 
					</li>
					<li className="nav_item"> 
						<Link to="">스포츠/레저</Link> 
					</li>							
                    <li className="nav_item"> 
						<Link to="">디지털</Link> 
					</li>
	    			<li className="nav_item"> 
						<Link to="">유아</Link> 
					</li>
				</ul>
			</nav>
			<hr/>
			</div>
        )
    }
}

export default Navigator;