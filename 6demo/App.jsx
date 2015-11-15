import React from 'react';
import NumInput from './NumInput/NumInput.jsx';
const App = React.createClass({
    getInitialState:function(){
        return {
            cpu: 0
        }
    },
    _update: function(event){
        this.setState({
            cpu: +event.target.value
        });
    },
    render:function(){
        return (
            <div>
                <NumInput
                val={ this.state.cpu }
                update={ this._update } />
            </div>
        );

    }
});

export default App;
