"use strict";$(document).ready(function(){function t(t){var n=e.outerWidth(),f=e.outerHeight(),s=t.offsetX,a=t.offsetY;this!==t.target&&(s+=t.target.offsetLeft,a+=t.target.offsetTop);var u=Math.round(s/n*r-r/2),h=Math.round(a/f*r-r/2);o.css({"text-shadow":u+"px "+h+"px 0 red,\n                            "+u*-1+"px "+h*-1+"px 0 blue,\n                            "+u+"px "+h*-1+"px 0 green,\n                            "+u*-1+"px "+h+"px 0 yellow"})}var e=$(".hero"),o=e.children("h1"),r=50;e.on("mousemove",t)});
//# sourceMappingURL=lesson-16.js.map