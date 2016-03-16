
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
