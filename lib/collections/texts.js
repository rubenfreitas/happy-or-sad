Texts = new Mongo.Collection('texts');

if (Meteor.isServer) {
  Meteor.startup(function() {
    return Meteor.methods({
      removeAllTexts: function() {
        return Texts.remove({});
      }
    });
  });
  
}
