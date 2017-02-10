"use strict";$(document).ready(function(){function t(t){var f=e.outerWidth(),s=e.outerHeight(),a=t.offsetX,h=t.offsetY;this!==t.target&&(a+=t.target.offsetLeft,h+=t.target.offsetTop);var n=Math.round(a/f*r-r/2),u=Math.round(h/s*r-r/2);o.css({"text-shadow":n+"px "+u+"px 0 red"})}var e=$(".hero"),o=e.children("h1"),r=50;e.on("mousemove",t)});
//# sourceMappingURL=lesson-16.js.map
