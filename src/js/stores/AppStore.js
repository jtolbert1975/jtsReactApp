var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var CHANGE_EVENT = 'change';



var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  timeSelected: function (checked) {
    console.log('You Reached the AppStore');

    this.setState({
      checked: !checked
    });

    return checked;


  },

  showModal: function (showModal) {
    this.$el = showModal;

    this.$el.showModal("show");
  }
});

AppDispatcher.register(function(payload){
  console.log(payload);
  return true;
});

module.exports = AppStore;
