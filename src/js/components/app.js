/** @jsx React.DOM */
var React = require('react');
var ReactDom = require('react-dom');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Appointment = require('../components/AppointmentModal');


function getChecked(){
    return{
        checked: false
    };


}
var App = React.createClass({
    getInitialState: function () {
      return getChecked();


    },
    handleClick:function(){

        var modal = React.findDOMNode(this.refs.showModal);
            //$(this.getDOMNode('#myModal'));
      AppActions.showModal(modal);
    },

    handleChange: function () {


        AppActions.timeSelected(checked);
    },
    render:function(){
      return (
        <div className="wrapper">
          <h3 onClick={this.handleClick}>Select Time To Make My Deal</h3>
            <ul className="list-group">
            <li className="list-group-item"><input type="checkbox" id="chk0" checked={this.state.checked} onChange={this.handleChange} /> 9am - 10am
                <p>Add Contact Info to Confirm Appointment</p>
                <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal" onClick={this.handleClick}>
                    <span className="glyphicon glyphicon-pencil"></span> Contact Info</button>
            </li>
            <li className="list-group-item"><input type="checkbox" id="chk0" checked={this.state.checked} onChange={this.handleChange} /> 10am - 11am </li>
            <li className="list-group-item"><input type="checkbox" id="chk0" checked={this.state.checked} onChange={this.handleChange} /> 11am - 12pm </li>
            <li className="list-group-item"><input type="checkbox" id="chk0" checked={this.state.checked} onChange={this.handleChange} /> 12pm - 1pm </li>
            <li className="list-group-item"><input type="checkbox" id="chk0" checked={this.state.checked} onChange={this.handleChange} /> 1pm - 2pm </li>
            <li className="list-group-item"><input type="checkbox" id="chk0" checked={this.state.checked} onChange={this.handleChange} /> 2pm - 3pm </li>
            <li className="list-group-item"><input type="checkbox" id="chk0" checked={this.state.checked} onChange={this.handleChange} /> 3pm - 4pm </li>
            <li className="list-group-item"><input type="checkbox" id="chk0" checked={this.state.checked} onChange={this.handleChange} /> 4pm - 5pm </li>

            </ul>

            <Appointment ref="showModal" />
        </div>
      )
    }
  });

module.exports = App;
