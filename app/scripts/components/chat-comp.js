
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
  render: function(){

    var chatMessages = [];
    if(this.props.items){
      chatMessages = this.props.items.map(function(message){
        return <li key={message.id}>{message.text}</li>;
      });
    }

    console.log(this.props.items);

    return(
      <ul>
        {chatMessages}
      </ul>
    );
  }
});

var ChatComponentForm = React.createClass({
  render: function(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input
          className="message-input"
          type="text"
          onChange={this.props.handleChange}
          value={this.props.text}
        />
        <button className="btn btn-primary" type="submit">Enter</button>
      </form>
    );
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
  },

  handleSubmit: function(e){
    e.preventDefault();

    this.setState({items: [], text: ''});
  },

  handleChange: function(e){
    this.setState({text: e.target.value});
  },

  render: function(){

    console.log(this.state.items);

    return (
      <div>
        <div className="message-print">
          <ChatMessages items={this.state.usersMessages} />
        </div>
        <div>
          <ChatComponentForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
});

//Exports
module.exports = {
  'ChatComponent': ChatComponent
}
