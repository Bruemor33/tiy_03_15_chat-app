var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

//Starting off our class with a review lecture on using Routers with React.
//So I will be following along in this file trying to apply it while taking notes.

//All the router does is alter your address in order to grab some code.

//Local Inports
var UserModel = require('../model/user-model.js').UserModel;
var ChatCollection = require('../model/app-model.js').ChatCollection;
var userModel = new UserModel();
var chatCollection = new ChatCollection();
var ChatComponent = require('../components/chat-comp.js').ChatComponent;
var UserForm = require('../components/user-comp.js').UserForm;

var PageRouter = Backbone.Router.extend({
  routes: {
    "": 'index',
    "chat/:username": 'chatLoad'
  },
  indexLoad: function(){
    console.log(index);
    ReactDOM.render(
      <UserForm model={userModel} />,
      document.getElementById('user-creation')
    )

  },
  chatLoad: function(){
    ReactDOM.render(
      <ChatComponent model={userModel} collection={chatCollection} />,
      document.getElementById("chat-window")
    )
  }

});

//Exports
module.exports = {
  'PageRouter': PageRouter
}
