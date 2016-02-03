Template.textForm.events = {
  'submit': function (e, tmpl) {
    // Don't postback
    e.preventDefault();

    var phrase = event.target.text.value;

    if (!!phrase && phrase.split(' ').length > 2) {
      throw new Meteor.Error('text', 'You must enter a phrase with at least 3 words!');
    } else {
      // create the new text
      var newText = {
        text: phrase,
        isHappy: "unknown",
        createdAt: new Date()
      };

      Meteor.call('happyOrSad', newText, function(err,response) {
        if(err) {
          console.log("Error: " + err.reason);
  		    return;
  			}
  		});

    }

    // Clear form
    event.target.text.value = "";

  }
};
