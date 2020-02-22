'use strict';(function(d,n){"object"===typeof exports&&"undefined"!==typeof module?n(exports,require("react"),require("history"),require("react-router")):"function"===typeof define&&define.amd?define(["exports","react","history","react-router"],n):(d=d||self,n(d.ReactRouterDOM={},d.React,d.HistoryLibrary,d.ReactRouter))})(this,function(d,n,I,h){function v(){v=Object.assign||function(a){for(var c=1;c<arguments.length;c++){var p=arguments[c],g;for(g in p)Object.prototype.hasOwnProperty.call(p,g)&&(a[g]=
p[g])}return a};return v.apply(this,arguments)}function J(a,c){if(null==a)return{};var p={},g=Object.keys(a),f;for(f=0;f<g.length;f++){var k=g[f];0<=c.indexOf(k)||(p[k]=a[k])}return p}function u(a,c){return c={exports:{}},a(c,c.exports),c.exports}function B(a,c,p,g,f){for(var k in a)if(O(a,k)){try{if("function"!==typeof a[k]){var d=Error((g||"React class")+": "+p+" type `"+k+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof a[k]+"`.");d.name="Invariant Violation";
throw d;}var m=a[k](c,k,g,p,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(P){m=P}!m||m instanceof Error||C((g||"React class")+": type specification of "+p+" `"+k+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof m+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");if(m instanceof Error&&!(m.message in D)){D[m.message]=!0;var e=
f?f():"";C("Failed "+p+" type: "+m.message+(null!=e?e:""))}}}function y(){return null}function E(a){var c=a.children,p=a.timeout;a=a.window;var g=n.useRef(null);null==g.current&&(g.current=I.createBrowserHistory({window:a}));return n.createElement(h.Router,{children:c,history:g.current,timeout:p})}function F(a){var c=a.children,p=a.timeout;a=a.window;var g=n.useRef(null);null==g.current&&(g.current=I.createHashHistory({window:a}));return n.createElement(h.Router,{children:c,history:g.current,timeout:p})}
function G(a){K(a.message,a.when);return null}function K(a,c){var p=n.useCallback(function(g){window.confirm(a)&&g.retry()},[a]);h.useBlocker(p,c)}n=n&&n.hasOwnProperty("default")?n["default"]:n;var L=u(function(a,c){(function(){function a(a){if("object"===typeof a&&null!==a){var g=a.$$typeof;switch(g){case k:switch(a=a.type,a){case b:case l:case m:case h:case e:case w:return a;default:switch(a=a&&a.$$typeof,a){case r:case x:case z:case A:case n:return a;default:return g}}case d:return g}}}function g(b){return a(b)===
l}Object.defineProperty(c,"__esModule",{value:!0});var f="function"===typeof Symbol&&Symbol.for,k=f?Symbol.for("react.element"):60103,d=f?Symbol.for("react.portal"):60106,m=f?Symbol.for("react.fragment"):60107,e=f?Symbol.for("react.strict_mode"):60108,h=f?Symbol.for("react.profiler"):60114,n=f?Symbol.for("react.provider"):60109,r=f?Symbol.for("react.context"):60110,b=f?Symbol.for("react.async_mode"):60111,l=f?Symbol.for("react.concurrent_mode"):60111,x=f?Symbol.for("react.forward_ref"):60112,w=f?
Symbol.for("react.suspense"):60113,Q=f?Symbol.for("react.suspense_list"):60120,A=f?Symbol.for("react.memo"):60115,z=f?Symbol.for("react.lazy"):60116,R=f?Symbol.for("react.fundamental"):60117,S=f?Symbol.for("react.responder"):60118,v=f?Symbol.for("react.scope"):60119;f=function(){};var T=function(a){for(var b=arguments.length,l=Array(1<b?b-1:0),g=1;g<b;g++)l[g-1]=arguments[g];var c=0;b="Warning: "+a.replace(/%s/g,function(){return l[c++]});"undefined"!==typeof console&&console.warn(b);try{throw Error(b);
}catch(Z){}},q=f=function(b,a){if(void 0===a)throw Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");if(!b){for(var l=arguments.length,g=Array(2<l?l-2:0),c=2;c<l;c++)g[c-2]=arguments[c];T.apply(void 0,[a].concat(g))}},t=!1;c.typeOf=a;c.AsyncMode=b;c.ConcurrentMode=l;c.ContextConsumer=r;c.ContextProvider=n;c.Element=k;c.ForwardRef=x;c.Fragment=m;c.Lazy=z;c.Memo=A;c.Portal=d;c.Profiler=h;c.StrictMode=e;c.Suspense=w;c.isValidElementType=function(a){return"string"===
typeof a||"function"===typeof a||a===m||a===l||a===h||a===e||a===w||a===Q||"object"===typeof a&&null!==a&&(a.$$typeof===z||a.$$typeof===A||a.$$typeof===n||a.$$typeof===r||a.$$typeof===x||a.$$typeof===R||a.$$typeof===S||a.$$typeof===v)};c.isAsyncMode=function(l){t||(t=!0,q(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."));return g(l)||a(l)===b};c.isConcurrentMode=g;c.isContextConsumer=
function(b){return a(b)===r};c.isContextProvider=function(b){return a(b)===n};c.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===k};c.isForwardRef=function(b){return a(b)===x};c.isFragment=function(b){return a(b)===m};c.isLazy=function(b){return a(b)===z};c.isMemo=function(b){return a(b)===A};c.isPortal=function(b){return a(b)===d};c.isProfiler=function(b){return a(b)===h};c.isStrictMode=function(b){return a(b)===e};c.isSuspense=function(b){return a(b)===w}})()});(function(a){return a&&
a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a["default"]:a})(L);var M=u(function(a){a.exports=L}),N=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,W=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var c={};for(a=0;10>a;a++)c["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(c).map(function(a){return c[a]}).join(""))return!1;
var d={};"abcdefghijklmnopqrst".split("").forEach(function(a){d[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},d)).join("")?!1:!0}catch(g){return!1}}()?Object.assign:function(a,c){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var d=Object(a);for(var g,f=1;f<arguments.length;f++){var k=Object(arguments[f]);for(var e in k)U.call(k,e)&&(d[e]=k[e]);if(N){g=N(k);for(var h=0;h<g.length;h++)V.call(k,g[h])&&(d[g[h]]=k[g[h]])}}return d},
C=function(){},D={},O=Function.call.bind(Object.prototype.hasOwnProperty);C=function(a){a="Warning: "+a;"undefined"!==typeof console&&console.error(a);try{throw Error(a);}catch(c){}};B.resetWarningCache=function(){D={}};var X=Function.call.bind(Object.prototype.hasOwnProperty),q=function(){};q=function(a){a="Warning: "+a;"undefined"!==typeof console&&console.error(a);try{throw Error(a);}catch(c){}};var Y=function(a,c){function d(a,l){return a===l?0!==a||1/a===1/l:a!==a&&l!==l}function g(a){this.message=
a;this.stack=""}function f(a){function b(b,l,d,e,h,k,w){e=e||"<<anonymous>>";k=k||d;if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==w){if(c)throw b=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),b.name="Invariant Violation",b;"undefined"!==typeof console&&(w=e+":"+d,!x[w]&&3>f&&(q("You are manually calling a React.PropTypes validation function for the `"+
k+"` prop on `"+e+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),x[w]=!0,f++))}return null==l[d]?b?null===l[d]?new g("The "+h+" `"+k+"` is marked as required in `"+(e+"`, but its value is `null`.")):new g("The "+h+" `"+k+"` is marked as required in `"+(e+"`, but its value is `undefined`.")):null:a(l,d,e,h,k)}var x={},f=0,d=b.bind(null,
!1);d.isRequired=b.bind(null,!0);return d}function e(a){return f(function(b,c,d,f,e,h){b=b[c];return m(b)!==a?(b=n(b),new g("Invalid "+f+" `"+e+"` of type `"+(b+"` supplied to `"+d+"`, expected `")+(a+"`."))):null})}function h(b){switch(typeof b){case "number":case "string":case "undefined":return!0;case "boolean":return!b;case "object":if(Array.isArray(b))return b.every(h);if(null===b||a(b))return!0;var l=b&&(t&&b[t]||b["@@iterator"]);var g="function"===typeof l?l:void 0;if(g)if(l=g.call(b),g!==
b.entries)for(;!(b=l.next()).done;){if(!h(b.value))return!1}else for(;!(b=l.next()).done;){if((b=b.value)&&!h(b[1]))return!1}else return!1;return!0;default:return!1}}function m(a){var b=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":"symbol"===b||a&&("Symbol"===a["@@toStringTag"]||"function"===typeof Symbol&&a instanceof Symbol)?"symbol":b}function n(a){if("undefined"===typeof a||null===a)return""+a;var b=m(a);if("object"===b){if(a instanceof Date)return"date";if(a instanceof
RegExp)return"regexp"}return b}function v(a){a=n(a);switch(a){case "array":case "object":return"an "+a;case "boolean":case "date":case "regexp":return"a "+a;default:return a}}var t="function"===typeof Symbol&&Symbol.iterator,r={array:e("array"),bool:e("boolean"),func:e("function"),number:e("number"),object:e("object"),string:e("string"),symbol:e("symbol"),any:f(y),arrayOf:function(a){return f(function(b,c,d,f,e){if("function"!==typeof a)return new g("Property `"+e+"` of component `"+d+"` has invalid PropType notation inside arrayOf.");
b=b[c];if(!Array.isArray(b))return b=m(b),new g("Invalid "+f+" `"+e+"` of type `"+(b+"` supplied to `"+d+"`, expected an array."));for(c=0;c<b.length;c++){var l=a(b,c,d,f,e+"["+c+"]","SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");if(l instanceof Error)return l}return null})},element:function(){return f(function(b,c,d,f,e){b=b[c];return a(b)?null:(b=m(b),new g("Invalid "+f+" `"+e+"` of type `"+(b+"` supplied to `"+d+"`, expected a single ReactElement.")))})}(),elementType:function(){return f(function(a,
c,d,f,e){a=a[c];return M.isValidElementType(a)?null:(a=m(a),new g("Invalid "+f+" `"+e+"` of type `"+(a+"` supplied to `"+d+"`, expected a single ReactElement type.")))})}(),instanceOf:function(a){return f(function(b,c,d,f,e){if(!(b[c]instanceof a)){var l=a.name||"<<anonymous>>";b=b[c];b=b.constructor&&b.constructor.name?b.constructor.name:"<<anonymous>>";return new g("Invalid "+f+" `"+e+"` of type `"+(b+"` supplied to `"+d+"`, expected instance of `")+(l+"`."))}return null})},node:function(){return f(function(a,
c,d,f,e){return h(a[c])?null:new g("Invalid "+f+" `"+e+"` supplied to `"+(d+"`, expected a ReactNode."))})}(),objectOf:function(a){return f(function(b,c,d,f,e){if("function"!==typeof a)return new g("Property `"+e+"` of component `"+d+"` has invalid PropType notation inside objectOf.");b=b[c];c=m(b);if("object"!==c)return new g("Invalid "+f+" `"+e+"` of type `"+(c+"` supplied to `"+d+"`, expected an object."));for(var l in b)if(X(b,l)&&(c=a(b,l,d,f,e+"."+l,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),
c instanceof Error))return c;return null})},oneOf:function(a){return Array.isArray(a)?f(function(b,c,e,f,h){b=b[c];for(c=0;c<a.length;c++)if(d(b,a[c]))return null;c=JSON.stringify(a,function(a,b){return"symbol"===n(b)?String(b):b});return new g("Invalid "+f+" `"+h+"` of value `"+String(b)+"` supplied to `"+(e+"`, expected one of "+c+"."))}):(1<arguments.length?q("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):
q("Invalid argument supplied to oneOf, expected an array."),y)},oneOfType:function(a){if(!Array.isArray(a))return q("Invalid argument supplied to oneOfType, expected an instance of array."),y;for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)return q("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+v(c)+" at index "+b+"."),y}return f(function(b,c,d,e,f){for(var h=0;h<a.length;h++)if(null==(0,a[h])(b,c,d,e,f,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return null;
return new g("Invalid "+e+" `"+f+"` supplied to `"+(d+"`."))})},shape:function(a){return f(function(b,c,d,e,f){b=b[c];c=m(b);if("object"!==c)return new g("Invalid "+e+" `"+f+"` of type `"+c+"` supplied to `"+(d+"`, expected `object`."));for(var h in a)if(c=a[h])if(c=c(b,h,d,e,f+"."+h,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return c;return null})},exact:function(a){return f(function(b,c,d,e,f){var h=b[c],k=m(h);if("object"!==k)return new g("Invalid "+e+" `"+f+"` of type `"+k+"` supplied to `"+
(d+"`, expected `object`."));k=W({},b[c],a);for(var l in k){k=a[l];if(!k)return new g("Invalid "+e+" `"+f+"` key `"+l+"` supplied to `"+d+"`.\nBad object: "+JSON.stringify(b[c],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(a),null,"  "));if(k=k(h,l,d,e,f+"."+l,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return k}return null})}};g.prototype=Error.prototype;r.checkPropTypes=B;r.resetWarningCache=B.resetWarningCache;return r.PropTypes=r},e=u(function(a){a.exports=Y(M.isElement,!0)});E.displayName=
"BrowserRouter";E.propTypes={children:e.node,timeout:e.number,window:e.object};F.displayName="HashRouter";F.propTypes={children:e.node,timeout:e.number,window:e.object};var t=n.forwardRef(function(a,c){var d=a.as;d=void 0===d?"a":d;var e=a.onClick,f=a.replace,k=void 0===f?!1:f,t=a.state,m=a.target,q=a.to;a=J(a,"as onClick replace state target to".split(" "));f=h.useHref(q);var y=h.useNavigate(),u=h.useLocation(),r=h.useResolvedLocation(q);return n.createElement(d,v({},a,{href:f,onClick:function(a){e&&
e(a);a.defaultPrevented||0!==a.button||m&&"_self"!==m||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||(a.preventDefault(),a=r.pathname===u.pathname&&r.search===u.search&&r.hash===u.hash,y(q,{replace:!!k||a,state:t}))},ref:c,target:m}))});t.displayName="Link";t.propTypes={as:e.elementType,onClick:e.func,replace:e.bool,state:e.object,target:e.string,to:e.oneOfType([e.string,e.shape({pathname:e.string,search:e.string,hash:e.string})]).isRequired};var H=n.forwardRef(function(a,c){var d=a["aria-current"];
d=void 0===d?"page":d;var e=a.activeClassName;e=void 0===e?"active":e;var f=a.activeStyle;f=void 0===f?null:f;var k=a.className,q=void 0===k?"":k;k=a.style;var m=void 0===k?null:k;k=a.to;a=J(a,"aria-current activeClassName activeStyle className style to".split(" "));var u=h.useMatch(k);d=u?d:void 0;e=[q,u?e:null].filter(Boolean).join(" ");f=v({},m,{},u?f:null);return n.createElement(t,v({},a,{"aria-current":d,className:e,ref:c,style:f,to:k}))});H.displayName="NavLink";H.propTypes=v({},t.propTypes,
{"aria-current":e.oneOf("page step location date time true".split(" ")),activeClassName:e.string,activeStyle:e.object,className:e.string,style:e.object,to:e.oneOfType([e.string,e.shape({pathname:e.string,search:e.string,hash:e.string})]).isRequired});G.displayName="Prompt";G.propTypes={message:e.string,when:e.bool};Object.defineProperty(d,"MemoryRouter",{enumerable:!0,get:function(){return h.MemoryRouter}});Object.defineProperty(d,"Navigate",{enumerable:!0,get:function(){return h.Navigate}});Object.defineProperty(d,
"Outlet",{enumerable:!0,get:function(){return h.Outlet}});Object.defineProperty(d,"Redirect",{enumerable:!0,get:function(){return h.Redirect}});Object.defineProperty(d,"Route",{enumerable:!0,get:function(){return h.Route}});Object.defineProperty(d,"Router",{enumerable:!0,get:function(){return h.Router}});Object.defineProperty(d,"Routes",{enumerable:!0,get:function(){return h.Routes}});Object.defineProperty(d,"createRoutesFromChildren",{enumerable:!0,get:function(){return h.createRoutesFromChildren}});
Object.defineProperty(d,"generatePath",{enumerable:!0,get:function(){return h.generatePath}});Object.defineProperty(d,"matchRoutes",{enumerable:!0,get:function(){return h.matchRoutes}});Object.defineProperty(d,"resolveLocation",{enumerable:!0,get:function(){return h.resolveLocation}});Object.defineProperty(d,"useBlocker",{enumerable:!0,get:function(){return h.useBlocker}});Object.defineProperty(d,"useHref",{enumerable:!0,get:function(){return h.useHref}});Object.defineProperty(d,"useLocation",{enumerable:!0,
get:function(){return h.useLocation}});Object.defineProperty(d,"useMatch",{enumerable:!0,get:function(){return h.useMatch}});Object.defineProperty(d,"useNavigate",{enumerable:!0,get:function(){return h.useNavigate}});Object.defineProperty(d,"useOutlet",{enumerable:!0,get:function(){return h.useOutlet}});Object.defineProperty(d,"useParams",{enumerable:!0,get:function(){return h.useParams}});Object.defineProperty(d,"useResolvedLocation",{enumerable:!0,get:function(){return h.useResolvedLocation}});
Object.defineProperty(d,"useRouteMatch",{enumerable:!0,get:function(){return h.useRouteMatch}});Object.defineProperty(d,"useRoutes",{enumerable:!0,get:function(){return h.useRoutes}});d.BrowserRouter=E;d.HashRouter=F;d.Link=t;d.NavLink=H;d.Prompt=G;d.usePrompt=K;Object.defineProperty(d,"__esModule",{value:!0})});
//# sourceMappingURL=react-router-dom.development.js.map
