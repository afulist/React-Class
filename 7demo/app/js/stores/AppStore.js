import shortid from 'shortid';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ActionType from '../constants/ActionType.js';
import {
    EventEmitter
}
from 'events';
var AppStore = Object.assign({}, EventEmitter.prototype, {
    getAllData: function() {
        return {
        };
    }
});

AppStore.dispatchToken = AppDispatcher.register(function(action) {
    switch (action.type) {
    default:
        break;
    }
});

export default AppStore;
