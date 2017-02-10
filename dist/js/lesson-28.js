"use strict";$(document).ready(function(){var e=$(".speed"),t=$(".speed-bar"),o=$(".flex");e.on("mousemove",function(e){var s=e.clientY-$(this).offset().top,i=s/$(this).outerHeight(),a=.4,n=4,c=Math.round(100*i)+"%",r=i*(n-a)+a;t.text(r.toFixed(2)+"x"),t.css({height:c}),o[0].playbackRate=r})});
//# sourceMappingURL=lesson-28.js.map
