Template.home.helpers({
  hasTexts: function() {
    return Texts.find().count() > 0;
  }
});
