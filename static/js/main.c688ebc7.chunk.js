(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(7),a=c.n(i),o=(c(12),c(6)),s=c(3),j=(c(13),c(0));var u=function(e){var t=e.value,c=e.onClick,n=t?"squares ".concat(t):"squares";return Object(j.jsx)("button",{className:n,onClick:c,children:t})};c(15);var l=function(e){var t=e.squares,c=e.onClick,n=t.map((function(e,t){return Object(j.jsx)(u,{value:e,onClick:function(){return c(t)}},t)}));return Object(j.jsx)("div",{className:"board",children:n})};c(16);var b=function(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(s.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(0),a=Object(s.a)(i,2),u=a[0],b=a[1],d=Object(n.useState)("X"),O=Object(s.a)(d,2),h=O[0],f=O[1],x=function(e,t){for(var c=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<c.length;n++){var r=Object(s.a)(c[n],3),i=r[0],a=r[1],o=r[2];if(e[i]&&e[i]===e[a]&&e[i]===e[o])return e[i]}return 9===t?"Draw":null}(c[u],u),v=c.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return function(e){b(e),f(e%2===0?"X":"O")}(t)},children:t?"Go to move ".concat(t):"Go to Start"})},t)}));return Object(j.jsxs)("div",{id:"app",children:[Object(j.jsx)("header",{id:"header",children:Object(j.jsx)("h1",{children:"Tic Tac Toe"})}),Object(j.jsx)("div",{id:"game",children:Object(j.jsx)(l,{squares:c[u],onClick:function(e){var t=c.slice(0,u+1),n=t[u],i=Object(o.a)(n);x||i[e]||(i[e]=h,r([].concat(Object(o.a)(t),[i])),b(t.length),f("X"===h?"O":"X"))}})}),Object(j.jsxs)("div",{className:"info-wrapper",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"History"}),Object(j.jsx)("ul",{children:v})]}),Object(j.jsx)("h3",{children:x?"Winner: "+x:"Next Player: "+h})]}),Object(j.jsx)("footer",{id:"footer",children:"Jakub Korzeniewski \xa9 2021"})]})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.c688ebc7.chunk.js.map