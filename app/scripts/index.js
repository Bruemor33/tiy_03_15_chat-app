
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

//Local Imports
var UserForm = require('./components/user-comp.js').UserForm;
var ChatComponent = require('./components/chat-comp.js').ChatComponent;
var ChatCollection = require('./model/app-model.js').ChatCollection;
var ChatModel = require('./model/app-model.js').ChatModel

var chatCollection = new ChatCollection();
var chatModel = new ChatModel();

//Render to the DOM
ReactDOM.render(
  React.createElement(UserForm),
  document.getElementById('user-creation')
);

ReactDOM.render(
  React.createElement(ChatComponent, {collection: chatCollection, item: chatModel}),
  document.getElementById('chat-window')
);
