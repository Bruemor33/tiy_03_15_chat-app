var Backbone = require('backbone');
var $ = require('jquery');

//Create Application Model
var ChatModel = Backbone.Model.extend({

});

//Create Application Collection
var ChatCollection = Backbone.Collection.extend({
  model: ChatModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages'
});

//Exports
module.exports ={
  'ChatModel': ChatModel,
  'ChatCollection': ChatCollection
}
