Words = new Mongo.Collection('words');

// Initialize a seed activity
Meteor.startup(function() {
  if (Meteor.isServer && Words.find().count() === 0) {
    _.each(WordsData, function(word) {
      Words.insert(word);
    });
  }
});
