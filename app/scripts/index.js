
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

//Local Imports
var UserForm = require('./components/user-comp.js').UserForm;
var ChatComponent = require('./components/chat-comp.js').ChatComponent;

//Render to the DOM
ReactDOM.render(
  React.createElement(UserForm),
  document.getElementById('user-creation')
);

ReactDOM.render(
  React.createElement(ChatApp),
  document.getElementById('chat-window')
);
