
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

//Local Imports
// var UserForm = require('./components/user-comp.js').UserForm;
// var ChatComponent = require('./components/chat-comp.js').ChatComponent;
var PageRouter = require('./router/user-router.js').PageRouter;

var router = new PageRouter();

$(function(){
  Backbone.history.start();
});

// //Render to the DOM
// ReactDOM.render(
//   React.createElement(UserForm),
//   document.getElementById('user-creation')
// );
