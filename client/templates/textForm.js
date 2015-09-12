Template.textForm.events = {
  'submit': function (e, tmpl) {
    // Don't postback
    e.preventDefault();

    // create the new text
    var newText = {
      text: event.target.text.value,
      isHappy: "unknown",
      createdAt: new Date()
    };

    Meteor.call('happyOrSad', newText, function(err,response) {
      if(err) {
        console.log("Error:" + err.reason);
		    return;
			}
		});

  }
};
