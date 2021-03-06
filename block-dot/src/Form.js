import React, {Component} from 'react';
import './App.css';


class Form extends Component {
	constructor (props) {
		super(props)
		this.state = {
			message: "",
			styles: {
			    fontSize: "17px",
			    border: "2px solid black",
			    fontWeight: "normal",

			    width: "200px",
			    height: "100px",
				},
			isToggleOn: true,
			wrapper: {
				position: "absolute",
				top: "35px",
				left: "80px",
			}

		};
		this.handleClick = this.handleClick.bind(this);
	}
	onChange = evt => {
		const value = evt.target.value;
		this.setState({message: value});
	}
	handleClick = (evt) => {
		evt.preventDefault();
		this.setState(state => ({
      		isToggleOn: !state.isToggleOn
    	}));
		if(this.state.isToggleOn==false){
			let styles = Object.assign({}, this.state.styles);
			styles.fontWeight = "bold";
			this.setState({styles})
		} else {
			let styles = Object.assign({}, this.state.styles);
			styles.fontWeight = "normal";
			this.setState({styles})	
		}

	}
	render () {
		return (
			<section 
			calssName="form-wrapper"
			style={this.state.wrapper}>
				 <h2>Text field</h2>
				 <form calssName="form-wrapper">
					<textarea 
					placeholder = "Enter your message"
					calssName="messageField" 
					type="text" 
					name="message"
					value = {this.state.message} 
					style={this.state.styles}
					onChange={this.onChange}/>
				 </form>
				 <button calssName="font-width" onClick={this.handleClick} type="button">Font weight flipper</button>
			</section>
		);
	}
}



export default Form 
