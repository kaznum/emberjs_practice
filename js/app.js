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
    return "say " + str;
  }
});

App.yamada = Person.create({
  name: "Yamada",
  say: function (str) {
    value = str + " " + this.get("name");
    return this._super(value);
  }
});

App.yamada.reopen({
  sayHello: function () {
    return this.say("Hello,");
  }.property('name')
});
