"use strict";$(document).ready(function(){function t(){var t=this;$(this).addClass("trigger-enter"),setTimeout(function(){$(t).hasClass("trigger-enter")&&$(t).addClass("trigger-enter-active")},150),n.addClass("open");var e=$(this).children(".dropdown"),i=e[0].getBoundingClientRect(),o=r[0].getBoundingClientRect(),s={height:i.height,width:i.width,top:i.top-o.top,left:i.left-o.left};n.css({width:s.width+"px",height:s.height+"px",transform:"translate("+s.left+"px, "+s.top+"px)"})}function e(){$(this).removeClass("trigger-enter trigger-enter-active"),n.removeClass("open")}var i=$(".cool > li"),n=$(".dropdownBackground"),r=$(".top");i.on("mouseenter",t),i.on("mouseleave",e)});
//# sourceMappingURL=lesson-26.js.map
