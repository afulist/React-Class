import React from 'react';
const NumInput = React.createClass({
    render:function(){
        return (
            <div>
            <input
            type="number"
            min="0"
            max="255"
            step="5"
            value={ this.props.val }
            onChange={ this.props.update } />
            { this.props.val + " CPU" }
            </div>
        );

    }
});

export default NumInput;