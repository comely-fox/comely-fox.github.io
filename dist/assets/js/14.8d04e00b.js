(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{339:function(t,n,e){"use strict";e.r(n);e(88);var r=e(52);var a=e(21),i=e(51),o=0,u=[],l=null,c=null,s=function(){function t(){Object(a.a)(this,t)}return Object(i.a)(t,[{key:"readHtml",value:function(t){this.readed=!0;var n="";o=0;for(var e=h;n=f(t);)e=e(n);return this}},{key:"output",value:function(t,n){this.readed||this.readHtml(n);var e,a=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(r.a)(t))){var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,o=!0,u=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){u=!0,i=t},f:function(){try{o||null==a.return||a.return()}finally{if(u)throw i}}}}(u);try{for(a.s();!(e=a.n()).done;){t(e.value)}}catch(t){a.e(t)}finally{a.f()}}}]),t}();function f(t){return t.charAt(o++)}function h(t){return"<"===t?v:(k(t),h)}function v(t){return"/"===t?w:/[a-zA-Z]/.test(t)?(l={tokenStart:!0,name:t},d):void O(t,o)}function d(t){return/[\t\n\f\s]/.test(t)?m:"/"===t?g:">"===t?(k(l),h):/[a-zA-Z1-6]/.test(t)?(l.name+=t,d):void 0}function m(t){return/[\t\n\f\s]/.test(t)?m:"/"===t?g:">"===t?(k(l),h):/[a-zA-Z-]/.test(t)?(c={name:t.toLowerCase(),value:""},p):void O(t,o)}function p(t){return/[a-zA-Z0-9-]/.test(t)?(c.name+=t.toLowerCase(),p):"="===t?y:void O(t,o)}function y(t){return/['"]/.test(t)?(n=t,function t(e){return e===n?(l[c.name]=c.value,m):(">"===e&&O(e,o),c.value+=e,t)}):(c.value+=t,b);var n}function b(t){return">"===t?(l[c.name]=c.value,k(l),h):/[\t\n\f\s]/.test(t)?(l[c.name]=c.value,m):(c.value+=t,b)}function g(t){if(">"===t){k(l);var n={tokenEnd:!0};return n.name=l.name,k(n),h}}function w(t){if(/[a-zA-Z]/.test(t))return l={tokenEnd:!0,name:t},d;O(t,o)}function k(t){u.push(t)}function O(t,n){throw new SyntaxError("unexpected char "+t+" ;at position: "+n)}var j=e(136),S=e(135),_=function t(){Object(a.a)(this,t),this.isDocument=!0,this.childNodes=[]},A=function t(){Object(a.a)(this,t)},x=function(t){Object(j.a)(e,t);var n=Object(S.a)(e);function e(t){var r;for(var i in Object(a.a)(this,e),r=n.call(this,t),t)"tokenStart"!==i&&(r[i]=t[i]);return r.childNodes=[],r}return e}(A),C=function(t){Object(j.a)(e,t);var n=Object(S.a)(e);function e(t){var r;return Object(a.a)(this,e),(r=n.call(this,t)).value=t||"",r}return e}(A),E=[],T=0,z=function(){function t(){Object(a.a)(this,t),E=[new _]}return Object(i.a)(t,[{key:"receiveToken",value:function(t){var n=E[T];if("string"==typeof t)if(n instanceof C)n.value+=t;else{var e=new C(t);n.childNodes.push(e),T++,E.push(e)}else n instanceof C&&(T--,E.pop(),n=E[T]);if(t.tokenStart){var r=new x(t);n.childNodes.push(r),T++,E.push(r)}t.tokenEnd&&(E.pop(),T--)}},{key:"getDomTree",value:function(){return E[0]}}]),t}(),D={data:function(){return{result:""}},mounted:function(){var t=new s,n=new z;t.readHtml('<html id="html" c="3">\n  <head>\n    <title>lexer - html</title>\n  </head>\n  <body>\n    <figure>\n      <img src="test.jpg" />\n      <figcaption>img description</figcaption>\n    </figure>\n    <h2>I like the fruit</h2>\n    <ul>\n      <li>Apple</li>\n      <li>Orange</li>\n      <li>Banana</li>\n      <li>\n        <h3 style="color: red; background-color: gray;">Outer</h3>\n        <ul>\n          <li>Cherry</li>\n          <li>Grape</li>\n          <li>Mango</li>\n        </ul>\n      </li>\n    </ul>\n  </body>\n</html>\n').output(n.receiveToken),console.log(n.getDomTree()),this.result=JSON.stringify(n.getDomTree(),null,2)}},N=e(34),Z=Object(N.a)(D,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"./"}},[t._v("返回")])]),t._v(" "),e("h3",{attrs:{id:"f12-查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#f12-查看"}},[t._v("#")]),t._v(" F12 查看")]),t._v(" "),e("h4",{attrs:{id:"输出结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输出结果"}},[t._v("#")]),t._v(" 输出结果")]),t._v(" "),e("pre",{staticStyle:{color:"white",background:"gray"}},[t._v(t._s(t.result)+"\n")])])}),[],!1,null,null,null);n.default=Z.exports}}]);