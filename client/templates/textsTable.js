Template.textsTable.helpers({
  texts: function() {
    return Texts.find();
  },
  getStyle: function(isHappy) {
    switch (isHappy) {
        case "true" : {
            return 'success';
        }
        break;
        case "false" : {
            return 'danger';
        }
        break;
        default : {
          return 'warning';
        }
    }
  }
});

Template.textsTable.events({
    'click #clean': function(){
      Meteor.call('removeAllTexts');
    }
});
