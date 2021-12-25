(this["webpackJsonpmath-magician"]=this["webpackJsonpmath-magician"]||[]).push([[0],{445:function(t,e,n){"use strict";n.r(e);var i=n(4),a=n.n(i),c=n(88),o=n.n(c),s=(n(96),n(42)),r=n(12),u=(n(97),n(91)),l=n(16),m=n(56),j=n.n(m);function b(t,e,n){var i=j()(t),a=j()(e);if("+"===n)return i.plus(a).toString();if("-"===n)return i.minus(a).toString();if("x"===n)return i.times(a).toString();if("\xf7"===n)try{return i.div(a).toString()}catch(c){return"Can't divide by 0."}if("%"===n)return i.mod(a).toString();throw Error("Unknown operation '".concat(n,"'"))}n(98);var d=n(3),x=function(){var t=Object(i.useState)({total:0,next:0,operation:null}),e=Object(u.a)(t,2),n=e[0],a=e[1],c=function(t,e){var n=function(t,e){return"AC"===e?{total:null,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?Object(l.a)(Object(l.a)({},t),{},{next:t.next+e}):Object(l.a)(Object(l.a)({},t),{},{next:e}):t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?Object(l.a)({},t):Object(l.a)(Object(l.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===e?t.next&&t.operation?{total:b(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===e?t.next?Object(l.a)(Object(l.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(l.a)(Object(l.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.operation?t.total&&!t.next?Object(l.a)(Object(l.a)({},t),{},{operation:e}):{total:b(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}:Object(l.a)(Object(l.a)({},t),{},{operation:e})}(t,e);!function(t){a(t)}(n)},o=["AC","+/-","%","\xf7","7","8","9","x","4","5","6","-","1","2","3","+"].map((function(t){return"x"===t||"+"===t||"-"===t||"\xf7"===t?Object(d.jsx)("button",{type:"button",className:"button-section operator",value:t,onClick:function(){return c(n,t)},children:t},t):Object(d.jsx)("button",{type:"button",className:"button-section",value:t,onClick:function(){return c(n,t)},children:t},t)}));return Object(d.jsxs)("section",{className:"calculator",children:[Object(d.jsx)("h1",{children:"Let's do some math!"}),Object(d.jsxs)("div",{className:"calculator-section",children:[Object(d.jsx)("div",{className:"return-section",children:function(){var t=n.total,e=n.next,i=n.operation;return null===t&&null===e?0:null!==e&&null===t?e:null!==t&&null!==e&&null!==i&&void 0!==i?"".concat(t," ").concat(i," ").concat(e):t}()}),Object(d.jsx)("div",{className:"digits-elts",children:o}),Object(d.jsxs)("span",{className:"end",children:[Object(d.jsx)("button",{type:"button",className:"button-section",value:"0",onClick:function(){c(n,"0")},children:"0"}),Object(d.jsx)("button",{type:"button",className:"button-section",value:".",onClick:function(){c(n,".")},children:"."}),Object(d.jsx)("button",{type:"button",className:"button-section operator",value:"=",onClick:function(){c(n,"=")},children:"="})]})]})]})},p=n(41),h=n.n(p),O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"welcome",children:[Object(d.jsx)("h1",{children:"Welcome to Our Page"}),Object(d.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur saepe sunt consequatur labore, exercitationem nesciunt reiciendis? Exercitationem, consectetur minima odio harum asperiores pariatur eum accusantium soluta rem, maxime minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Facilis consectetur saepe sunt consequatur labore."}),Object(d.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur saepe sunt consequatur labore, exercitationem nesciunt reiciendis? Exercitationem, consectetur minima odio harum asperiores pariatur eum accusantium soluta rem, maxime minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Facilis consectetur saepe sunt consequatur labore."}),Object(d.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur saepe sunt consequatur labore, exercitationem nesciunt reiciendis? Exercitationem, consectetur minima odio harum asperiores pariatur eum accusantium soluta rem, maxime minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Facilis consectetur saepe sunt consequatur labore."}),Object(d.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur saepe sunt consequatur labore, exercitationem nesciunt reiciendis? Exercitationem, consectetur minima odio harum asperiores pariatur eum accusantium soluta rem, maxime minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Facilis consectetur saepe sunt consequatur labore."})]}),Object(d.jsx)(h.a,{})]})},g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"quotes",children:Object(d.jsxs)("h3",{children:["Mathematics is not about numbers, equations, computations, or algorithms.",Object(d.jsx)("br",{}),"It is about understanding. -William Paul Thurston."]})}),Object(d.jsx)(h.a,{})]})},f=n.p+"static/media/not-found.f4c2a8d6.png",v=function(){return Object(d.jsxs)("div",{className:"no-match",children:[Object(d.jsx)("h3",{children:"Whoops! Page not found!"}),Object(d.jsx)("img",{src:f,alt:"Not found"})]})},M=[{id:1,name:"Home",path:"/Math-Magician"},{id:2,name:"Calculator",path:"/Math-Magician/calculator"},{id:3,name:"Qoute",path:"/Math-Magician/quote"}],N=function(){return Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)("h1",{children:"Math Magician"}),Object(d.jsx)("ul",{children:M.map((function(t){return Object(d.jsx)(s.b,{to:t.path,className:"links",children:t.name},t.id)}))})]})},q=function(){return Object(d.jsxs)(s.a,{children:[Object(d.jsx)(N,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/Math-Magician",children:Object(d.jsx)(O,{})}),Object(d.jsx)(r.a,{path:"/Math-Magician/calculator",children:Object(d.jsx)(x,{})}),Object(d.jsx)(r.a,{path:"/Math-Magician/quote",children:Object(d.jsx)(g,{})}),Object(d.jsx)(r.a,{path:"*",children:Object(d.jsx)(v,{})})]})]})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root"))},96:function(t,e,n){},97:function(t,e,n){},98:function(t,e,n){}},[[445,1,2]]]);
//# sourceMappingURL=main.83fe1321.chunk.js.map