var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var CHANGE_EVENT = 'change';



var AppointmentStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    apptDetails: function (firstnme, lastnme, phnumber) {
        console.log('You Are Setting the Appointment Details');

        var details, firstname, lastname, phone;


        this.setState({
             details:  [{
                firstname: !firstnme,
                lastname:  !lastnme,
                phone: !phnumber

            }]

        });

        return details;


    },

    showModal: function (showModal) {
        this.setState({showModal: showModal});

    }
});

AppDispatcher.register(function(payload){
    console.log(payload);
    return true;
});

module.exports = AppointmentStore;
