
//Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var parsley = require('parsleyjs');
require('backbone-react-component');

//Local Inports
// var application = require('../model/app-model');
//
// var chatRoom = new application.ChatCollection();

var ChatMessages = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){

    return(
      <ul>
        <li>
          <span className="username">{this.props.model.get('username')}</span>
          <span className="user-message">{this.props.model.get('content')}</span>
        </li>
      </ul>
    );
  }
});

var ChatComponentForm = React.createClass({
  render: function(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input
          parsley-type="text"
          className="message-input"
          id="chat-input"
          data-required="true"
          data-parsley-minlength="1"
          onChange={this.props.handleChange}
          value={this.props.userMessage}
        />
        <button className="btn btn-primary" type="submit">Enter</button>
      </form>
    );
  }

});

var ChatComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  componentDidMount: function(){
    setInterval(this.handleFetch, 5000);
  },

  getInitialState: function(){
    return {
      usersMessages: [], //use an empty array in order to store the messages
      userMessage: "", //use an empty string in order to hold A message
      collectedMessages: this.props.collection
    }
  },

  handleFetch: function(){
    this.state.collectedMessages.fetch();
  },

  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.props.collection)
    this.setState({items: [], text: ''});
  },

  handleChange: function(e){
    this.setState({userMessage: e.target.value});
  },

  render: function(){
    var messageCollection = this.props.collection.map(function(model){
      return (
        <div className="message-print">
          <ChatMessages model={model} key={model.get('_id')} />
        </div>
      )
    })
    return (
      <div>

        <ChatComponentForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          userMessage={this.state.userMessage}
        />
      </div>
    );
  }
});

//Exports
module.exports = {
  'ChatComponent': ChatComponent
}
