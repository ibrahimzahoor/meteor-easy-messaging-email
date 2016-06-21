Package.describe({
  name: 'ibrahimzahoor:easy-messaging-email',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Email extension for ibrahimzahoor:easy-messaging',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ibrahimzahoor/meteor-easy-messaging-email',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3.1');
  api.use('ecmascript');
  api.mainModule('lib/easy-messaging-email.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ibrahimzahoor:easy-messaging-email');
  api.mainModule('tests/easy-messaging-email-tests.js');
});
