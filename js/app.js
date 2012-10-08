var App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
    App.president.set("firstName", "Hello,");
  }
});

App.president = Ember.Object.create({
  firstName: "Barack",
  lastName: "Obama",
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  // Tell Ember that this computed property depends on firstName
  // and lastName
  }.property('firstName', 'lastName')
});

Person = Ember.Object.extend({
  say: function (str) {
    alert(str);
  }
});

yamada = Person.create({
  name: "Yamada",
  say: function (str) {
    this._super(str + " " + this.get("name"));
  }
});

