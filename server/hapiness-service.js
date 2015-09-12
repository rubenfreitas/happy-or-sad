Meteor.startup(function () {
	Meteor.methods({
	  happyOrSad: function (text) {
		    console.log('on server, happyOrSad called');

				if(Texts.find({ text: text.text}).count() === 1){
					return;
				}
				textWords = text.text.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");

				var happy = 0;
				var sad = 0;

				textWords.forEach(function(w) {
					if(Words.find({ word: w, isHappy: true}).count()) {
						happy++;
					}
					if(Words.find({ word: w, isHappy: false}).count()) {
						sad++;
					}
				});

				if(happy > (sad + happy) / 2) {
					text.isHappy = "true";
				}

				if(sad > (sad + happy) / 2) {
					text.isHappy = "false";
				}

				Texts.insert(text);

	      return text.isHappy;
	  }
	});
});
