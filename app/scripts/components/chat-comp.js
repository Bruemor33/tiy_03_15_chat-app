
//Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

//Local Inports
var application = require('../model/app-model');

var chatRoom = new application.ChatCollection();
var ChatApp = React.createClass({
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
  'ChatApp': ChatApp
}
