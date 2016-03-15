var Backbone = require('backbone');
var $ = require('jquery');

//Create Application Model
var ChatModel = Backbone.Model.extend({

});

//Create Application Collection
var ChatCollection = Backbone.Model.extend({
  model: ChatModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/massages'
});

//Exports
module.exports ={
  'ChatModel': ChatModel,
  'ChatCollection': ChatCollection
}
