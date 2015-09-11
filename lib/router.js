Router.configure({
  // the default layout
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('home');
});
