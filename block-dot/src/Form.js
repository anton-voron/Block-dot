import React, {Component} from 'react';
import './App.css';

class Form extends Component {
	render () {
		return (
			<section calssName="form-wrapper">
				 <h2>Text field</h2>
				 <form calssName="form-wrapper">
					<input calssName="textField" type="text" name="textField"/>
					<button calssName="font-wight" onClick={this.submit.bind(this)} type="submit">Font weight flipper</button>
				 </form>
			</section>
		);
	}
}


export default From 