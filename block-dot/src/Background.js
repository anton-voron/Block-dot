import React, {Component} from 'react';
import background from './background.png';
import './App.css';

class Background extends Component {
	render = (evt) => {
		return (
			<div>
				<img src={background} className="background" alt="background"/>
			</div>
		);
	}
}

export default Background;