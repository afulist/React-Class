import React from 'react';

export default class CatListItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.item.name}</td>
				<td>{this.props.item.about}</td>
				<td>
					<img src={this.props.item.picture}/>
				</td>
				<td>{this.props.item.price}</td>
			</tr>
		);
	}
}
