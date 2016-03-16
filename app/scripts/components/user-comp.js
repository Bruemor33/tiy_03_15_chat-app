
//Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
require('backbone-react-component');

//Local Inports
var user = require('../model/user-model');

var modelUser = new user.UserCollection();

var UserForm = React.createClass({
  handleSubmit: function(){

  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="user-name"
          type="text"
          placeholder="User Name"
          value={this.props.text}
        />
        <input
          className="password"
          type="text"
          placeholder="Password"
        />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }
});

//Exports
module.exports = {
  'UserForm': UserForm
}
