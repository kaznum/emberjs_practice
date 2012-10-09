var App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    App.president.set("firstName", "Hello,");
    App.peopleController.createPerson("f_name", "l_name");
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

App.Person = Ember.Object.extend({
  first: null,
  last: null
});

App.peopleController = Ember.ArrayController.create({
  content: [],

  createPerson: function (firstName, lastName) {
    var person = App.Person.create({ first: firstName, last: lastName });
    this.pushObject(person);
  }
});

for (var i = 0; i < 5; i++) {
  App.peopleController.createPerson("f_name" + i, "l_name" + i);
}

