(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,n,t){},124:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(30),o=t.n(c),i=(t(73),t(3)),u=t(61),l={REQUEST_FEED:"REQUEST_FEED",RECIEVE_FEED:"RECIEVE_FEED",ERROR:"ERROR",RENDER_ITEM:"RENDER_ITEM"},s=t(40),m=t.n(s),E=t(62),d=t(63),f=t.n(d),p=function(e){return{type:l.REQUEST_FEED,payload:e}},R=function(e){return{type:l.RECIEVE_FEED,payload:e.items}},h=function(e){return{type:l.ERROR,payload:e.message||"Something went wrong."}},b=function(e){var n=new f.a;return function(){var t=Object(E.a)(m.a.mark(function t(r){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r(p(e)),n.parseURL("https://boiling-citadel-49650.herokuapp.com/"+e,function(e,n){r(e?h(e):R(n))});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return{type:l.RENDER_ITEM,payload:e}},O=l,v=t(14),I={url:"",isFetching:!1,feed:[],error:!1,errorMessage:"",renderedItems:[],numRenderedItems:0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O.REQUEST_FEED:return Object(v.a)({},e,{isFetching:!0,error:!1,errorMessage:""});case O.RECIEVE_FEED:return Object(v.a)({},e,{isFetching:!1,feed:n.payload,renderedItems:[],numRenderedItems:0});case O.ERROR:return Object(v.a)({},e,{isFetching:!1,error:!0,errorMessage:n.payload});case O.RENDER_ITEM:return Object(v.a)({},e,{renderedItems:e.renderedItems.concat(e.feed[e.numRenderedItems]),numRenderedItems:e.numRenderedItems+1});default:return e}},j=t(4),w=t(64),_=t.n(w),F=t(65),D=t(41),T=t(66),S={key:"root",storage:t.n(T).a},N=Object(D.a)(S,y),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d;var k,U=t(31),C=Object(r.memo)(function(e){var n=e.fetchFeed,t=Object(r.useState)(""),c=Object(U.a)(t,2),o=c[0],i=c[1];return a.a.createElement("header",null,a.a.createElement("h1",null,a.a.createElement("span",null,"a"),"reses"),a.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),n(o)}(e)}},a.a.createElement("input",{type:"text",value:o,onChange:function(e){return i(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"fetch feed"})))}),V={fetchFeed:function(e){return b(e)}},L=Object(i.b)(null,V)(C),Q=t(67),x=t.n(Q),A=Object(r.memo)(function(e){var n=e.feed,t=e.isFetching,c=e.renderedItems,o=e.numRenderedItems,i=e.renderItem;Object(r.useEffect)(function(){return 0!==n.length&&0===o&&u(),function(){n.length===o&&clearTimeout(k)}});var u=function(){k=setTimeout(l,40)},l=function(){i(n[o]),n.length>o&&u()};return t?null:a.a.createElement("ul",{id:"feed"},c.map(function(e,n){return e&&a.a.createElement("li",{key:n},a.a.createElement("a",{href:e.guid},a.a.createElement("h2",null,e.title),a.a.createElement("h5",null,x()(e.isoDate).fromNow()),a.a.createElement("p",null,e.contentSnippet)))}))}),X={renderItem:function(e){return g(e)}},B=Object(i.b)(function(e){return{feed:e.feed,isFetching:e.isFetching,renderedItems:e.renderedItems,numRenderedItems:e.numRenderedItems}},X)(A),J=Object(r.memo)(function(e){var n=function(){return{animationDelay:Math.random()/3.2+"s"}};return e.isFetching?a.a.createElement("div",{id:"spinner"},a.a.createElement("div",{style:n(),className:"spinner-component",id:"spin-1"}),a.a.createElement("div",{style:n(),className:"spinner-component",id:"spin-2"}),a.a.createElement("br",null),a.a.createElement("div",{style:n(),className:"spinner-component",id:"spin-3"}),a.a.createElement("div",{style:n(),className:"spinner-component",id:"spin-4"})):null}),P=Object(i.b)(function(e){return{isFetching:e.isFetching}})(J),W=Object(r.memo)(function(e){var n=e.error,t=e.errorMessage,c=Object(r.useState)(!1),o=Object(U.a)(c,2),i=o[0],u=o[1];return Object(r.useEffect)(function(){return u(!0)},[n,t]),n&&i?a.a.createElement("div",{className:"error"},a.a.createElement("h3",null,"ERROR:"),a.a.createElement("p",null,t),a.a.createElement("p",null,"This may not be a valid RSS feed. Please try a different URL."),a.a.createElement("button",{onClick:function(e){return u(!1)}},"dismiss")):null}),$=Object(i.b)(function(e){return{error:e.error,errorMessage:e.errorMessage}})(W),q=(t(123),function(e){var n=Object(j.e)(N,e,M(Object(j.a)(F.a,_.a)));return{store:n,persistor:Object(D.b)(n)}}(window.REDUX_INITIAL_DATA));var z=function(){return a.a.createElement(i.a,{store:q.store},a.a.createElement(u.a,{loading:null,persistor:q.persistor},a.a.createElement("div",{id:"app"},a.a.createElement(L,null),a.a.createElement(P,null),a.a.createElement(B,null),a.a.createElement($,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,n,t){e.exports=t(124)},73:function(e,n,t){},85:function(e,n){},87:function(e,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.b7751367.chunk.js.map