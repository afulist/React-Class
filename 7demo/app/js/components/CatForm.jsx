import React from 'react';

export default class CatForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			price: 0,
			about: 'a cat',
			picture: 'http://lorempixel.com/output/cats-h-c-200-300-1.jpg'
		};	
	}
	_nameOnChange(event){
		this.setState({
			name: event.target.value
		});
	}
	_priceOnChange(event){
		this.setState({
			price: event.target.value
		});
	}
	render() {
		return (
			<div>
				<label>
					Name:
					<input 
					type="text" 
					value={ this.state.name } 
					onChange={ this._nameOnChange.bind(this) }/>
				</label>
				<label>
					Price:
					<input type="number" value={ this.state.price } onChange={ this._priceOnChange.bind(this) }/>
				</label>
				<button onClick={ this.props.onAdd.bind(null, this.state) }>Add</button>
			</div>
		);
	}
}
