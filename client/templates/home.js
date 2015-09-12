Template.home.helpers({
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
            return 'warning';
        }
        break;
        default : {
          return 'default';
        }
    }
  },

  getStyleLabel: function(isHappy) {
    switch (isHappy) {
        case "true" : {
            return 'HAPPY';
        }
        break;
        case "false" : {
            return 'SAD';
        }
        break;
        default : {
          return 'unknown';
        }
    }
  }

});
