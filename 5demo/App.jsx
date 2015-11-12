import React from 'react';
import data from './data.js';
import CatList from './CatList.jsx';
import CatForm from './CatForm.jsx';
window.guid = 5;
const App = React.createClass({
	getInitialState() {
		return { data: data };
	},
	_onAdd(item, event){
		event.preventDefault();
		item.guid = window.guid;
		window.guid = window.guid + 1;
		this.state.data.push(item);
		this.setState({ data: this.state.data });
	},
	render() {
		return (
			<div>
				<CatForm onAdd={ this._onAdd }></CatForm>
				<CatList data={ this.state.data }></CatList>
			</div>
		);
	}
});

export default App;