// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by easy-messaging-email.js.
import { name as packageName } from "meteor/ibrahimzahoor:easy-messaging-email";

// Write your tests here!
// Here is an example.
Tinytest.add('easy-messaging-email - example', function (test) {
  test.equal(packageName, "easy-messaging-email");
});
