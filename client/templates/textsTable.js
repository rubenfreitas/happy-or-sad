Template.textsTable.helpers({
  texts: function() {
    return Texts.find();
  },
  getStyle: function(sentiment) {
    if(sentiment > 0)
      return 'success';
    else if (sentiment < 0)
      return 'danger';
    else
      return 'warning';
  }
});

Template.textsTable.events({
    'click #clean': function(){
      Meteor.call('removeAllTexts');
    }
});
