import React from 'react';
import CatListItem from './CatListItem.jsx';
export default class CatList extends React.Component {
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps -> nextProps: ', nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log(`shouldComponentUpdate -> (nextProps, nextState): (${nextProps}, ${nextState})`);
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate');
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	render() {
		var data = this.props.data.map(function(item){
			return (<CatListItem key={item.guid} item={item}></CatListItem>)
		});
		return (
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>About</td>
						<td>Picture</td>
						<td>Price</td>
					</tr>
				</thead>
				<tbody>
				{data}
				</tbody>
			</table>
		);
	}
}
