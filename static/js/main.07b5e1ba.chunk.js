(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,n,t){},123:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(29),i=t.n(c),o=(t(72),t(3)),u=t(60),s=t(39),l=t.n(s),m=t(61),E=t(62),d=t.n(E),f={REQUEST_FEED:"REQUEST_FEED",RECIEVE_FEED:"RECIEVE_FEED",ERROR:"ERROR",RENDER_ITEM:"RENDER_ITEM"},p=function(e){return{type:f.REQUEST_FEED,payload:e}},R=function(e){return{type:f.RECIEVE_FEED,payload:e.items}},h=function(e){return{type:f.ERROR,payload:e.message||"Something went wrong."}},g=function(e){var n=new d.a;return function(){var t=Object(m.a)(l.a.mark(function t(r){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r(p(e)),n.parseURL("https://boiling-citadel-49650.herokuapp.com/"+e,function(e,n){r(e?h(e):R(n))});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return{type:f.RENDER_ITEM,payload:e}},O=f,v={url:"",isFetching:!1,feed:[],error:!1,errorMessage:"",renderedItems:[],numRenderedItems:0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O.REQUEST_FEED:return Object.assign({},e,{isFetching:!0,error:!1,errorMessage:""});case O.RECIEVE_FEED:return Object.assign({},e,{isFetching:!1,feed:n.payload,renderedItems:[],numRenderedItems:0});case O.ERROR:return Object.assign({},e,{isFetching:!1,error:!0,errorMessage:n.payload});case O.RENDER_ITEM:return Object.assign({},e,{renderedItems:e.renderedItems.concat(e.feed[e.numRenderedItems]),numRenderedItems:e.numRenderedItems+1});default:return e}},y=t(4),j=t(63),w=t.n(j),_=t(64),F=t(40),D=t(65),T={key:"root",storage:t.n(D).a},S=Object(F.a)(T,I),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d;var M,k=t(30),U=Object(r.memo)(function(e){var n=e.fetchFeed,t=Object(r.useState)(""),c=Object(k.a)(t,2),i=c[0],o=c[1];return a.a.createElement("header",null,a.a.createElement("h1",null,a.a.createElement("span",null,"a"),"reses"),a.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),n(i)}(e)}},a.a.createElement("input",{type:"text",value:i,onChange:function(e){return o(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"fetch feed"})))}),C=Object(o.b)(null,function(e){return{fetchFeed:function(n){return e(g(n))}}})(U),V=t(66),L=t.n(V),Q=Object(r.memo)(function(e){var n=e.feed,t=e.isFetching,c=e.renderedItems,i=e.numRenderedItems,o=e.renderItem;Object(r.useEffect)(function(){return 0!==n.length&&0===i&&u(),function(){n.length===i&&clearTimeout(M)}});var u=function(){M=setTimeout(s,40)},s=function(){o(n[i]),n.length>i&&u()};return t?null:a.a.createElement("ul",{id:"feed"},c.map(function(e,n){return e&&a.a.createElement("li",{key:n},a.a.createElement("a",{href:e.guid},a.a.createElement("h2",null,e.title),a.a.createElement("h5",null,L()(e.isoDate).fromNow()),a.a.createElement("p",null,e.contentSnippet)))}))}),x=Object(o.b)(function(e){return{feed:e.feed,isFetching:e.isFetching,renderedItems:e.renderedItems,numRenderedItems:e.numRenderedItems}},function(e){return{renderItem:function(n){return e(b(n))}}})(Q),A=Object(r.memo)(function(e){var n=function(){return{animationDelay:Math.random()/3.2+"s"}};return e.isFetching?a.a.createElement("div",{id:"spinner"},a.a.createElement("div",{style:n(),className:"spinner-component",id:"spin-1"}),a.a.createElement("div",{style:n(),className:"spinner-component",id:"spin-2"}),a.a.createElement("br",null),a.a.createElement("div",{style:n(),className:"spinner-component",id:"spin-3"}),a.a.createElement("div",{style:n(),className:"spinner-component",id:"spin-4"})):null}),X=Object(o.b)(function(e){return{isFetching:e.isFetching}})(A),B=Object(r.memo)(function(e){var n=e.error,t=e.errorMessage,c=Object(r.useState)(!1),i=Object(k.a)(c,2),o=i[0],u=i[1];return Object(r.useEffect)(function(){return u(!0)},[n,t]),n&&o?a.a.createElement("div",{className:"error"},a.a.createElement("h3",null,"ERROR:"),a.a.createElement("p",null,t),a.a.createElement("p",null,"This may not be a valid RSS feed. Please try a different URL."),a.a.createElement("button",{onClick:function(e){return u(!1)}},"dismiss")):null}),J=Object(o.b)(function(e){return{error:e.error,errorMessage:e.errorMessage}})(B),P=(t(122),function(e){var n=Object(y.e)(S,e,N(Object(y.a)(_.a,w.a)));return{store:n,persistor:Object(F.b)(n)}}(window.REDUX_INITIAL_DATA));var W=function(){return a.a.createElement(o.a,{store:P.store},a.a.createElement(u.a,{loading:null,persistor:P.persistor},a.a.createElement("div",{id:"app"},a.a.createElement(C,null),a.a.createElement(X,null),a.a.createElement(x,null),a.a.createElement(J,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,n,t){e.exports=t(123)},72:function(e,n,t){},84:function(e,n){},86:function(e,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.07b5e1ba.chunk.js.map