require('./vendor');
require('./bootstrap');

require('angular-mocks');
var context = require.context('.', true, /Spec$/);
context.keys().forEach(context);