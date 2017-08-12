//constructor
function User(firstName, lastName, age, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');

var user200 = new User('Jill', 'Robinson', 25, 'female');

User.prototype.emailDomain = "@codingdojo.com";

User.prototype.getEmail = function () {
  return this.firstName + this.lastName + this.emailDomain;
};

console.log(user1.getEmail())
