var $, fill;

$ = require('jquery');

(fill = function(item) {
  $('.tagline').append(`${item}`);
  return fill;
})('The most Creative minds in art ');
