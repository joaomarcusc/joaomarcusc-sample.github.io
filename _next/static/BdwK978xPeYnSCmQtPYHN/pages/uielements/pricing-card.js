(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"+xzY":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uielements/pricing-card",function(){return r("XOzf")}])},XOzf:function(e,t,r){"use strict";r.r(t);var n=r("mK0O"),o=r("mXGw"),i=r.n(o),c=r("9fEB"),a=r.n(c),l=r("MNB/"),p=r("5050"),s=r("kR4u"),u=r("/2f/"),f=r("rPjc"),y=r("6Tvm"),d=r("kGrI"),m=r("zhKl"),g=i.a.createElement;function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=Object(o.useState)(!1),t=e[0],r=e[1];return g(i.a.Fragment,null,g(a.a,null,g("title",null,"UiElements | INST."),g("meta",{name:"Description",content:"Inst calendar app"})),g(y.a,null,g(p.a,{paddingTop:["0","0","0","40px"]},g(l.Row,null,g(l.Col,{lg:3},g(f.a,null)),g(l.Col,{lg:9},g(p.a,{paddingTop:["10px","15px","30px","0"]},g(p.a,{as:"h2",paddingBottom:"20px",overrides:{Block:{style:function(e){var t=e.$theme;return b({},t.typography.font650,{color:t.colors.primaryA})}}}},"PricingCard"),g(p.a,{paddingBottom:"30px"},g(l.Col,{md:6},g(d.a,{title:"Advance Pro Support",type:"Advance",items:[{id:1,title:"Access to MINST on spectrum"},{id:2,title:"Email support"},{id:3,title:"Support reply within 24hrs"}],price:"$799",btn:"Get Started",isLoading:t,onClick:function(){r(!0),setTimeout((function(){r(!1)}),600)}}))),g(p.a,{as:"h2",paddingBottom:"10px",overrides:{Block:{style:function(e){var t=e.$theme;return b({},t.typography.font650,{color:t.colors.primaryA})}}}},"API"),g(p.a,{as:"p",paddingBottom:"30px",overrides:{Block:{style:function(e){var t=e.$theme;return b({},t.typography.font200,{color:t.colors.borderInverseOpaque})}}}},"To get a customized PricingCard, set custom style in style prop."),g(p.a,{overrides:{Block:{style:{minHeight:"150px"}}}},g(s.c,{$gridTemplateColumns:"150px 250px auto auto auto"},g(u.c,null,"Property"),g(u.c,null,"Description"),g(u.c,null,"Type"),g(u.c,null,"Default"),g(u.c,null,"Version"),m.g.map((function(e,t){var r=t%2===0;return g(o.Fragment,{key:t},g(s.a,{$striped:r},e.property),g(s.a,{$striped:r,dangerouslySetInnerHTML:{__html:e.description}}),g(s.a,{$striped:r},g("code",null,e.type)),g(s.a,{$striped:r},e.default),g(s.a,{$striped:r},e.version&&e.version))}))))))))))}},kGrI:function(e,t,r){"use strict";var n=r("mK0O"),o=r("mXGw"),i=r.n(o),c=r("4FtK"),a=r("tgNW"),l=r("/JLY"),p=r("etL/");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=Object(p.a)("article",(function(e){var t=e.$theme;return{width:"100%",padding:"43px 50px 40px",boxShadow:t.lighting.shadow400,backgroundColor:t.colors.primaryB,display:"flex",flexDirection:"column"}})),y=Object(p.a)("header",(function(e){return{marginBottom:e.$theme.sizing.scale1000}})),d=Object(p.a)("h4",(function(e){var t=e.$theme;return u({},t.typography.font450,{color:t.colors.primaryA})})),m=Object(p.a)("div",(function(e){return{marginTop:e.$theme.sizing.scale500}})),g=Object(p.a)("main",(function(e){var t=e.$theme;return{marginBottom:t.sizing.scale1200,color:t.colors.primaryA,flexGrow:1}})),O=Object(p.a)("div",(function(e){var t=e.$theme;return u({},t.typography.font200,{marginBottom:t.sizing.scale600,display:"flex",alignItems:"center"})})),b=Object(p.a)("footer",{textAlign:"center"}),h=Object(p.a)("p",(function(e){var t=e.$theme;return u({},t.typography.font950,{color:t.colors.primaryA,marginBottom:t.sizing.scale900})})),j=Object(p.a)("span",(function(e){var t=e.$theme;return u({},t.typography.font200,{color:t.colors.contentSecondary})})),v=f,w=i.a.createElement;function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t,r=e.title,o=e.type,i=e.items,p=e.price,s=e.btn,u=e.isLoading,f=e.onClick,k=o.toLowerCase();switch(k){case"primary":t=w(c.a,{closeable:!1,kind:"positive",variant:"solid",overrides:{Root:{style:function(){return{marginLeft:0}}}}},o);break;case"advance":t=w(c.a,{closeable:!1,kind:"accent",variant:"solid",overrides:{Root:{style:function(){return{marginLeft:0}}}}},o);break;default:t=w(c.a,{closeable:!1,kind:"accent",overrides:{Root:{style:function(){return{marginLeft:0}}}}},o)}return w(v,null,w(y,null,w(d,null,r),w(m,null,t)),w(g,null,i&&i.map((function(e){return w(O,{key:"price-card--key".concat(e.id)},w(l.b,null),"\xa0 ",e.title)}))),w(b,null,w(h,null,p,"free"!==k&&w(j,null," / mo")),w(a.a,{size:"large",onClick:f,isLoading:u,overrides:{BaseButton:{style:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:"100%"},e.$theme.typography.font250)}}}},s)))}}},[["+xzY",1,0,2,3,4,6,5,7,8,9,11,14,16]]]);