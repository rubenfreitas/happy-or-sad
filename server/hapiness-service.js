Meteor.startup(function () {
	Meteor.methods({
	  happyOrSad: function (text) {
	    console.log('on server: happyOrSad called');

			if(Texts.find({ text: text.text }).count() === 1){
				return;
			}

			textWords = text.text.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");

			var weight = 0;

			textWords.forEach(function(w) {
				var word = Words.findOne({ word: w });

				if(word) {
					word.sentiment == "positive" ? weight++ : weight--;
				}
			});

			console.log("on server: sentiment analysis > { " + weight + " }");

			text.sentiment = weight;

			Texts.insert(text);

      return text.isHappy;
	  }
	});
});
