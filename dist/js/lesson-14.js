"use strict";$(document).ready(function(){var o=100,e=o;console.log(o,e),o=200,console.log(o,e),console.clear();var l=["Wes","Sarah","Ryan","Poppy"],a=l;console.log(a,l),a[3]="Viktor",console.log(a,l);var s=l.slice();s[3]="Valerie",console.log(l,s);var c=[].concat(l);c[3]="Evkakiy",console.log(l,c);var n=[].concat(l);n[3]="Ololo",console.log(l,n);var i=Array.from(l);i[3]="LastOne",console.log(l,i);var r={name:"Viktor",age:80},g=r;console.log(r,g),g.number=99,console.log(r,g);var t=Object.assign({},r,{number:50,age:12});console.log(r,t);var m={name:"Viktor",age:25,social:{git:"pixelpusher92",mail:"lifeislife1992"}};console.log(m),console.time("Object copy");var v=Object.assign({},m);console.timeEnd("Object copy"),v.name="Vitek",console.log(m,v),v.social.git="someNewName",console.log(m.social,v.social),console.time("JSCN parse");var p=JSON.parse(JSON.stringify(m));console.timeEnd("JSCN parse"),p.social.mail="viktor_yuriew",console.log(m.social,p.social)});
//# sourceMappingURL=lesson-14.js.map