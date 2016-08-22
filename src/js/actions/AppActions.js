var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_ITEM,
      item: item
    });
  },

  timeSelected: function(checked){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.TIME_SELECTED,
      checked: checked
    });
  },

  setAppointment: function(details){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.SET_APPOINTMENT,
      details: details
    });
  },

  showModal: function(showModal){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.SHOW_MODAL,
      showModal: showModal
    });
  },

  apptDetails: function (details) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.APPT_DETAILS,
      apptDetails: details
    });

  }



}

module.exports = AppActions
