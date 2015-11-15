import React from 'react';
import CatListItem from './CatListItem.jsx';
export default class CatList extends React.Component {

	render() {
		var data = this.props.data
		.map(function(item){
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

CatList.propsTypes = {
}