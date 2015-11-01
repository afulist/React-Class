import React from 'react';
import { transform } from 'react-tools';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			err: ''
		}
	}
	update (e){
	    let code = e.target.value;
	    try {
			this.setState({
				output: transform(code),
				err: ''
			})
	    }
	    catch(err){
			this.setState({
				err: err.message
			})
	    }
	}
	render() {
		return (
			<div className="container" style={{ height: '100%' }}>
				<div className="row">
					<p className="alert alert-danger">{this.state.err}</p>
				</div>
				<div className="row">
		            <textarea defaultValue={this.state.input} className="col-sm-6 input-lg" onChange={this.update.bind(this)} />
		            <pre className="col-sm-6 input-lg">{this.state.output}</pre>
	          	</div>
			</div>
		);
	}
}
