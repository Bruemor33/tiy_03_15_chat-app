var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

//Starting off our class with a review lecture on using Routers with React.
//So I will be following along in this file trying to apply it while taking notes.

//All the router does is alter your address in order to grab some code.

var PageRouter = Backbone.Router.extend({
  routes: {
    "": 'index',
    "": 'chat'
  },
  index: function(){

  },
  chat: funciton(){
    
  }

});

var router = new PageRouter();

Backbone.history.start();
