var Backbone = require('backbone');
var $ = require('jquery');

//Create User Model
var UserModel = Backbone.Model.extend({

});

//Create User Collection
var UserCollection = Backbone.Collection.extend({
  model: UserModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/users'
});

//Exports
module.exports = {
  'UserModel': UserModel,
  'UserCollection': UserCollection
}
