"use strict";$(document).ready(function(){function n(n){var a=$('audio[data-key="'+n.which+'"]')[0];if(a){a.currentTime=0,a.play();var i=$('.key[data-key="'+n.which+'"]');i.addClass("playing")}}function a(n){"transform"===n.originalEvent.propertyName&&$(this).removeClass("playing")}var i=$(".key");i.each(function(){$(this).on("transitionend",a)}),$(window).on("keydown",n)});
//# sourceMappingURL=lesson-1.js.map