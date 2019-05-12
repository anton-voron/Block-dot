import React, {Component} from 'react';
import background from './background.png';
import './App.css';

class Background extends Component {
	constructor (props) {
		super(props)
		this.state = {
			styles: {
				position: "relative",
				width: "500px",
  				height: "500px",
			}
		}
	}
	render () {
		return (
			<div>
				<img src={background} className="background" alt="background" style={this.state.styles}/>
			</div>
		);
	}
}

export default Background;