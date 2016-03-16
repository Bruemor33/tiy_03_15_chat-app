
//Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var parsley = require('parsleyjs');
require('backbone-react-component');

//Local Inports
var application = require('../model/app-model');

var chatRoom = new application.ChatCollection();

var ChatMessages = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  //Setting up some properties for main Chat Component
  //We want the properties to be passed into the "parent" ChatComponent
  render: function(){
    return (
      <form data-validate="parsley" onSubmit={this.props.handleSubmit} id="message-form" className="input-group">
        <input
          parsley-type="text"
          className="form-control"
          id="message-input"
          data-required="true"
          data-parsley-minlength="1"
          value="this.props.userMessage"
          onChange="this.props.handleChange"
        />
        <button className="btn btn-primary" id="chat-sumbit" disabled="true" role="button">Enter</button>
      </form>
    )
  }
});

var ChatComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  getInitialState: function(){
    return {
      usersMessages: [], //use an empty array in order to store the messages
      userMessage: "", //use an empty string in order to hold A message
      collectedMessages: this.props.collection
    }
  }

  render: function(){
    return (
      <div>
        <div className="message-print"></div>
        <input
          className="message-input"
          type="text"
          placeholder="Type Message Here"
        />
      </div>
    )
  }
});

//Exports
module.exports = {
  'ChatComponent': ChatComponent
}
