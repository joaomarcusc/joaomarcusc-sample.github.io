(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"2LUv":function(t,e,r){var n=r("m1Oa"),o=r("o/EK"),i=r("sJOi");t.exports=function(t){return n(t)||o(t)||i()}},"6Tvm":function(t,e,r){"use strict";var n=r("mXGw"),o=r.n(n),i=r("etL/"),a=Object(i.a)("div",{width:"100%",maxWidth:"1070px",paddingLeft:"15px",paddingRight:"15px",margin:"0 auto",position:"relative",zIndex:1,"@media screen and (max-width: 1200px)":{maxWidth:"970px"}}),u=o.a.createElement;e.a=function(t){var e=t.children;return u(a,null,e)}},"9fEB":function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("mXGw")),i=n(r("GlZI")),a=r("9rrO"),u=r("bxxT"),c=r("vI6Y");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(s,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var s=o.props[l],p=n[l]||new Set;p.has(s)?i=!1:(p.add(s),n[l]=p)}}}return i}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}var d=i.default();function h(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(r){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:r,inAmpMode:c.isInAmpMode(t)},e)}))}))}h.rewind=d.rewind,e.default=h},"9rrO":function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("mXGw"));e.AmpStateContext=o.createContext({})},GlZI:function(t,e,r){"use strict";var n=r("fwM5"),o=r("0pOA"),i=r("bkNG"),a=r("5YB7"),u=r("Y8Bl"),c=r("7osH"),l=r("2LUv");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}Object.defineProperty(e,"__esModule",{value:!0});var f=r("mXGw"),p=!1;e.default=function(){var t,e=new Set;function r(r){t=r.props.reduceComponentsToState(l(e),r.props),r.props.handleStateChange&&r.props.handleStateChange(t)}return(function(u){a(l,u);var c=s(l);function l(t){var i;return n(this,l),i=c.call(this,t),p&&(e.add(o(i)),r(o(i))),i}return i(l,null,[{key:"rewind",value:function(){var r=t;return t=void 0,e.clear(),r}}]),i(l,[{key:"componentDidMount",value:function(){e.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),r(this)}},{key:"render",value:function(){return null}}]),l}(f.Component))}},JJrw:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r("uK0A")}])},bxxT:function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("mXGw"));e.HeadManagerContext=o.createContext(null)},eHG4:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("mXGw"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r};function c(t){return function(e){return n.createElement(l,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,r){return n.createElement(e.tag,a({key:r},e.attr),t(e.child))}))}(t.child))}}function l(t){var e=function(e){var r,o=t.size||e.size||"1em";e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className);var i=t.attr,c=t.title,l=u(t,["attr","title"]);return n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,l,{className:r,style:a({color:t.color||e.color},e.style,t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},m1Oa:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},mK0O:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},"o/EK":function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},sJOi:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},uK0A:function(t,e,r){"use strict";r.r(e);var n=r("mK0O"),o=r("mXGw"),i=r.n(o),a=r("9fEB"),u=r.n(a),c=r("bBV7"),l=r("08xJ"),s=r("5050"),f=r("tgNW"),p=r("6Tvm"),d=i.a.createElement;function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(){var t=Object(c.useRouter)();return d(i.a.Fragment,null,d(u.a,null,d("title",null,"Signup | INST."),d("meta",{name:"Description",content:"Inst signup page"})),d(p.a,null,d(s.a,{overrides:{Block:{style:{minHeight:"calc(100vh - 213px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}}},d(s.a,{as:"h1",overrides:{Block:{style:function(t){return m({},t.$theme.typography.font1250,{fontWeight:700,marginBottom:"30px"})}}}},"Sign up for INST."),d(f.a,{onClick:function(){return t.push("/")},startEnhancer:function(){return d(l.o,{size:"1.25rem"})},overrides:{BaseButton:{style:function(t){return m({},t.$theme.typography.font250,{width:"100%",maxWidth:"260px",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px",marginTop:"10px",justifyContent:"flex-start",paddingLeft:"25px",paddingRight:"25px",backgroundColor:"#4267B2",transition:"all 0.3s ease",":hover":{backgroundColor:"#4267B2",opacity:.95}})}}}},"Continue with Facebook"),d(f.a,{onClick:function(){return t.push("/")},startEnhancer:function(){return d(l.p,{size:"1.25rem"})},overrides:{BaseButton:{style:function(t){return m({},t.$theme.typography.font250,{backgroundColor:"#1DA1F2",width:"100%",maxWidth:"260px",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px",marginTop:"10px",justifyContent:"flex-start",paddingLeft:"25px",paddingRight:"25px",":hover":{backgroundColor:"#1DA1F2",opacity:.95}})}}}},"Continue with Twitter"))))}},vI6Y:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("mXGw")),i=r("9rrO");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,i=t.hasQuery;return r||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}}},[["JJrw",1,0,14,2,3,4,6,9]]]);