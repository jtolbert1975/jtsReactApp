/** @jsx React.DOM */
var React = require('react');
var ReactDom = require('react-dom');
var AppActions = require('../actions/AppActions');



/*function getDetails(){
    return AppActions.apptDetails();



}*/
var Appointment = React.createClass({
    getInitialState: function () {
        return {
            firstname: "",
            lastname: "",
            phone: ""

        };


    },
    handleClick:function(){
        AppActions.addItem('this is the item');
    },

    handleChange: function () {
        // console.log('You clicked the checkbox here');
        //this.setState({
        // checked: !this.state.checked
        //});

        // var checked = checked;

        AppActions.timeSelected(checked);
    },
    render:function(){
        let close = () => this.setState({ show: false});
        return (
            <div id="myModal" className="modal fade" role="dialog">
             <div className="modal-dialog">
               <div className="model-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Please Add Contact Details to Confirm Appontment</h4>
                </div>
                   <div className="modal-body">
                    <form role="form">
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="name">First Name:</label>
                                <input type="text" className="form-control" value={this.state.firstname} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last Name:</label>
                                <input type="text" className="form-control" value={this.state.lastname} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="tel">Contact Number</label>
                                <input type="tel" name="tel" value={this.state.phone} required/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-default" data-dismiss="modal">
                                <span className="glyphicon glyphicon-floppy-save"></span>Save
                            </button>
                        </div>
                    </form>
                   </div>
                </div>
             </div>
            </div>
        )
    }
});

module.exports = Appointment;
