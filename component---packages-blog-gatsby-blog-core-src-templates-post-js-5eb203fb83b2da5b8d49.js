(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_personal=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_personal||[]).push([[621],{5365:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},9090:function(t,e,r){var n=r(5365);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},639:function(t,e,r){var n=r(7276),o=r(7321);function i(e,r,a){return o()?(t.exports=i=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},t.exports.__esModule=!0,t.exports.default=t.exports),i.apply(null,arguments)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},7321:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},8850:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},5929:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},6292:function(t,e,r){var n=r(9090),o=r(8850),i=r(4595),a=r(5929);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},4595:function(t,e,r){var n=r(5365);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},8676:function(t){"use strict";t.exports=function(t,e){e=e||JSON.stringify;for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e(i);n[a]||(r.push(i),n[a]=!0)}return r}},6851:function(t,e,r){var n=r(121);t.exports={MDXRenderer:n}},121:function(t,e,r){var n=r(639),o=r(6292),i=r(5526),a=r(5600),l=["scope","children"];function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r(7378),p=r(1368).mdx,f=r(3981).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,i=a(t,l),s=f(e),d=u.useMemo((function(){if(!r)return null;var t=c({React:u,mdx:p},s),e=Object.keys(t),i=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,e]);return u.createElement(d,c({},i))}},9458:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return dt}});var n=r(5773),o=r(126),i=r(808),a=r(7378),l=r(3314),s=r(2710),c=r(5446),u=r(9835),p=r(4675),f=r(6131),d=r(7296),g=r(9642),b=r(7375),m=r(3359),Z=r(2551),v=r(6495),h=["author","omitSocial"],x={wrapper:{textAlign:"center"},avatarWrapper:{mb:4},title:{color:"omegaDark"}},y=function(t){var e=t.author,r=t.omitSocial,o=(0,i.Z)(t,h);return e?(0,v.tZ)(b.Z,(0,n.Z)({aside:!0,title:"The Author"},o),(0,v.tZ)(l.Zb,{variant:"paper"},(0,v.tZ)(l.xu,{sx:x.wrapper},e.thumbnail&&(0,v.tZ)(l.xu,{sx:x.avatarWrapper},(0,v.tZ)(l.rU,{as:d.Link,to:e.slug,"aria-label":e.name},(0,v.tZ)(m.Z,{avatar:e.thumbnail,alt:e.name,withPattern:!0}))),(0,v.tZ)(l.rU,{as:d.Link,to:e.slug},(0,v.tZ)(l.X6,{variant:"h3"},e.name)),(0,v.tZ)(l.X6,{variant:"h4",sx:x.title},e.title),!r&&e.social&&(0,v.tZ)(g.Z,{variant:"horizontal",items:(0,Z.Z)(e.social),iconOnly:!0})))):""},O={number:{color:"omega",width:"2rem",mr:3,mb:0},text:{flex:"1",":hover":{color:"alphaDark"},mb:0}},w=function(t){var e=t.tableOfContents.items,r=void 0===e?[]:e,n=t.columns;return r.length>1?(0,v.tZ)(b.Z,{title:"Table Of Contents"},(0,v.tZ)(l.Zb,{variant:"paper"},(0,v.tZ)(l.rj,{sx:{gridRowGap:1,gridAutoFlow:["row",null,"column"],gridTemplateRows:["auto",null,"repeat("+Math.ceil(r.length/n)+", 1fr)"]}},r.map((function(t,e){return(0,v.tZ)(l.rU,{key:"item-"+e,as:d.Link,to:t.url,variant:"vertical"},(0,v.tZ)(l.kC,{sx:{alignItems:"center"}},(0,v.tZ)(l.X6,{variant:"h3",as:"div",sx:O.number},(e+1).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})),(0,v.tZ)(l.X6,{variant:"h4",as:"div",sx:O.text},t.title)))}))))):null};w.defaultProps={columns:2};var P=w,j=r(72),k=(0,j.ZP)((function(){return r.e(334).then(r.bind(r,4334))})),S=(0,j.ZP)((function(){return r.e(104).then(r.bind(r,6104))})),D=(0,j.ZP)((function(){return r.e(639).then(r.bind(r,5639))})),C=(0,j.ZP)((function(){return r.e(716).then(r.bind(r,716))})),_=r(4649),A=r(3084),R=r(3095);function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){(0,_.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T={item:{display:"inline-block"}},L=function(t){var e=t.title,r=t.author,n=t.date,o=t.timeToRead,i=t.category,a=(0,v.tZ)(A.Z,null,r&&r.slug&&(0,v.tZ)(l.xv,{sx:T.item},"By ",(0,v.tZ)(l.rU,{variant:"mute",as:d.Link,to:r.slug},(0,v.tZ)("strong",null,r.name))),i&&i.slug&&(0,v.tZ)(l.xv,{sx:T.item},"Published in ",(0,v.tZ)(l.rU,{variant:"mute",as:d.Link,to:i.slug},(0,v.tZ)("strong",null,i.name))),n&&(0,v.tZ)(l.xv,{sx:T.item},n),o&&(0,v.tZ)(l.xv,{sx:E(E({},T.item),{},{color:"error"})},(0,v.tZ)("strong",null,o," min read")));return(0,v.tZ)(R.Z,{header:e,running:a})},U=r(7192),I=r(1025),z=r(7314);function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){(0,_.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B={regular:{minHeight:"23rem",img:{borderRadius:"lg"}},wide:{img:{borderRadius:"lg"}},inCard:{mt:-4,mx:-4,img:{borderRadius:function(t){return t.radii.lg+" "+t.radii.lg+" 0 0"}}},inCardLarge:{mt:[-4,-5],mx:[-4,-5],img:{borderRadius:function(t){return t.radii.lg+" "+t.radii.lg+" 0 0"}}}},F=function(t){var e=t.title,r=t.thumbnail,n=t.wide,o=t.full,i=t.inCard,l=t.inCardLarge;if(!r)return null;var s=(n?"wide":o&&"full")||"regular",c=(0,z.Z)(r,"hero");return(0,v.tZ)(a.Fragment,null,(0,v.tZ)(U.G,{image:c,alt:e,css:(0,I.i)(X(X(X({},B[s]),i&&B.inCard),l&&B.inCardLarge)),imgStyle:"wide"===s||"full"===s?B.full:void 0}),(0,v.tZ)(u.Z,{space:3}))},G=r(6851),N=r(5013),q=r(7566),K={heading:{svg:{visibility:"hidden",size:"icon.xs",position:"absolute",top:"50%",transform:"translate(0,-50%)",pl:2},":hover svg":{visibility:"visible"},pointerEvents:"painted"},link:{position:"relative"}},H=function(t){return function(e){return(0,v.tZ)(t,(0,n.Z)({},e,{css:(0,I.i)(K.heading)}),(0,v.tZ)(l.rU,{href:"#"+e.id,variant:"text."+t,sx:K.link},e.children,(0,v.tZ)(q.gjK,null)))}},J={h1:H("h1"),h2:H("h2"),h3:H("h3")},Q=function(t){return(0,v.tZ)("figure",(0,n.Z)({},t,{css:(0,I.i)((function(t){return t.styles.figure}))}),t.children)},V=function(t){return(0,v.tZ)("figcaption",(0,n.Z)({},t,{css:(0,I.i)((function(t){return t.styles.figcaption}))}),t.children)},Y=(0,j.ZP)((function(){return r.e(482).then(r.bind(r,482))}));function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var tt=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){(0,_.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({figure:Q,figcaption:V,pre:function(t){return t.children},code:function(t){return(0,v.tZ)(Y,(0,n.Z)({},t,{fallback:(0,v.tZ)(N.RQ.pre,null,t.children)}))}},J),et=function(t){var e=t.body;return(0,v.tZ)(N.Zo,{components:tt},(0,v.tZ)(G.MDXRenderer,null,e))},rt={wrapper:{alignItems:"center"},heading:{color:"omegaDark",mr:3,mb:0}},nt=function(t){var e=t.tags;return e&&e.length>0?(0,v.tZ)(l.kC,{sx:rt.wrapper},(0,v.tZ)(l.X6,{variant:"h5",sx:rt.heading},"Tags"),(0,v.tZ)(l.xu,{variant:"lists.badges"},e.map((function(t){var e=t.id,r=t.name,n=t.slug;return(0,v.tZ)(l.Ct,{variant:"tag",key:e,as:d.Link,to:n},r)})))):null},ot={flex:{alignItems:["flex-start","center"],justifyContent:"space-between",flexDirection:["column","row"],"& > div + div":{mt:[3,0],flexBasis:"1/2",justifyContent:"flex-end"}}},it=function(t){return(0,v.tZ)(l.xu,null,(0,v.tZ)(l.iz,null),(0,v.tZ)(l.kC,{sx:ot.flex},(0,v.tZ)(nt,t),(0,v.tZ)(C,t)))};function at(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?at(Object(r),!0).forEach((function(e){(0,_.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var st={wrapper:{bg:"omegaLight",borderRadius:"bottom",color:"omegaDark",borderStyle:"solid",borderWidth:"md",borderColor:"contentBg",mx:-4,mb:-4,mt:4},flex:{flexWrap:"wrap",justifyContent:"space-between",p:4},item:{flexBasis:"50%"},next:{textAlign:"right"},guide:{mb:2}},ct=function(t){var e=t.title,r=t.post;return(0,v.tZ)(a.Fragment,null,(0,v.tZ)(l.xv,{sx:st.guide},e),(0,v.tZ)(l.X6,{variant:"h4",as:d.Link,to:r.slug},r.title))},ut=function(t){var e=t.previous,r=t.next;return r||e?(0,v.tZ)(l.xu,{sx:st.wrapper},(0,v.tZ)(l.kC,{sx:st.flex},(0,v.tZ)(l.xu,{sx:st.item},e&&(0,v.tZ)(ct,{post:e,title:"Previous Article"})),(0,v.tZ)(l.xu,{sx:lt(lt({},st.item),st.next)},r&&(0,v.tZ)(ct,{post:r,title:"Next Article"})))):null},pt=["data"],ft=function(t){var e,r=t.data,d=r.post,g=r.tagCategoryPosts,b=r.tagPosts,m=r.categoryPosts,Z=r.previous,h=r.next,x=(0,i.Z)(t,pt),O=[].concat((0,o.Z)(g?g.nodes:[]),(0,o.Z)(b?b.nodes:[]),(0,o.Z)(m?m.nodes:[])),w=x.pageContext,j=(w=void 0===w?{}:w).services,C=void 0===j?{}:j,_=w.siteUrl;return(0,v.tZ)(s.Ar,x,(0,v.tZ)(f.Z,(0,n.Z)({},d,{siteUrl:_})),(0,v.tZ)(u.Z,null),(0,v.tZ)(s.Kq,{effectProps:{effect:"fadeInDown"}},(0,v.tZ)(L,d),(0,v.tZ)(u.Z,null)),(0,v.tZ)(u.Z,{space:3}),(0,v.tZ)(s.VM,{wide:!0},(0,v.tZ)(F,(0,n.Z)({},d,{wide:!0}))),(0,v.tZ)(u.Z,{space:3}),(0,v.tZ)(s.Kq,{effectProps:{fraction:0}},(0,v.tZ)(s.or,null,(null===(e=d.tableOfContents)||void 0===e?void 0:e.items)&&(0,v.tZ)(a.Fragment,null,(0,v.tZ)(P,(0,n.Z)({},d,{columns:1})),(0,v.tZ)(u.Z,null)),(0,v.tZ)(l.Zb,{variant:"paper"},(0,v.tZ)(et,d),(0,v.tZ)(it,(0,n.Z)({},d,{location:x.location})),C.disqus&&(0,v.tZ)(k,d),C.graphComment&&(0,v.tZ)(D,d),C.facebookComment&&(0,v.tZ)(S,(0,n.Z)({},d,{siteUrl:_})),(0,v.tZ)(ut,{previous:Z,next:h}))),(0,v.tZ)(s.YE,null,(0,v.tZ)(y,{author:d.author,omitTitle:!0}),(0,v.tZ)(u.Z,null),d.category&&(0,v.tZ)(p.Z,null,(0,v.tZ)(c.Z,{title:"Related Posts",nodes:O,variant:"horizontal-aside",limit:6,omitCategory:!0,distinct:!0,aside:!0})))))},dt=ft},3359:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var n=r(4649),o=(r(7378),r(7192)),i=r(3314),a=r(1025),l=r(1115),s=r(7314),c=r(6495);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=function(t){return.35*t+"rem"},d={wrapper:{position:"relative",zIndex:2,textAlign:"center",mb:f(3)},pattern:{backgroundSize:"8rem",opacity:.15},circle:function(t){var e=t.width;return{width:[f(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",transform:"translate(-50%)  scale(0.98)",left:"50%",top:f(3),bg:"alpha"}},arc:function(t){var e=t.width;return{width:[f(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",zIndex:2,left:"50%",transform:"translate(-50%)",mt:f(-1),ml:f(-2),boxShadow:function(t){return"\n\t\t\t"+f(2)+"\n\t\t\t"+f(4)+"\n\t\t\t"+t.colors.omegaLight+"\n\t\t"}}},imageWrapper:{mx:"auto",img:{borderRadius:"0 0 9999px 9999px"}}},g=function(t){var e=t.avatar,r=t.withPattern,n=t.patternStyles,u=void 0===n?{}:n,f=t.size,g=t.width,b=t.loading,m=t.alt,Z=e&&(0,s.Z)(e,f);return Z?(g=g||Z.width,(0,c.tZ)(i.xu,{sx:d.wrapper},(0,c.tZ)(i.xu,null,r&&(0,c.tZ)(l.Z,{sx:p(p({},d.pattern),u)}),(0,c.tZ)(i.xu,{sx:d.circle({width:g})}),(0,c.tZ)(i.xu,{sx:d.arc({width:g})}),(0,c.tZ)(o.G,{image:Z,alt:m,loading:b,css:(0,a.i)(d.imageWrapper)})))):null},b=g;g.defaultProps={size:"regular",withPattern:!1}},5446:function(t,e,r){"use strict";r.d(e,{Z:function(){return S}});var n=r(5773),o=r(808),i=r(7378),a=r(3314),l=r(2923),s=r(5302),c=r(8676),u=r.n(c),p=r(7375),f=r(4649),d=r(5987),g=r(1025),b=r(7566),m={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},Z=r(72),v=r(6495);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,f.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=(0,Z.ZP)((function(){return r.e(636).then(r.bind(r,2324))})),O=i.forwardRef((function(t,e){var r=t.columns,o=t.slidesToScroll,i=t.smoothAutoScroll,l=t.autoPlay,s=t.autoplaySpeed,c=t.fade,u=t.dots,p=t.arrows,f=t.centerMode,Z=t.centerPadding,h=t.controlPosition,O=t.beforeChange,w=t.children,P=(0,d.B7)(),j={slidesToScroll:1,autoplay:!0,cssEase:"linear"},k={centerMode:!c,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!c)},S=P.theme.breakpoints.map((function(t,e){var n=r[e>=r.length?r.length-1:e],i=o[e>=o.length?o.length-1:e];return{breakpoint:parseInt(t),settings:x({slidesToShow:n,slidesToScroll:i},0===e?k:{})}})),D={ref:e,beforeChange:O,slidesToShow:r[r.length-1],slidesToScroll:o[o.length-1],speed:800,dots:u,arrows:p,centerMode:f,centerPadding:Z,infinite:!0,cssEase:c?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:c,responsive:S,css:(0,g.i)(x(x(x(x({},c?m.fade:m.slide),"bottom"===h&&m.controlBottom),"center"===h&&m.controlCenter),"over"===h&&m.controlOver)),prevArrow:(0,v.tZ)(a.hU,{sx:m.arrowPrev},(0,v.tZ)(b.bUI,null)),nextArrow:(0,v.tZ)(a.hU,{sx:m.arrowNext},(0,v.tZ)(b.Dli,null))};i&&(D=x(x(x({},D),j),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!i&&l&&(D=x(x(x({},D),j),{},{speed:300,autoplaySpeed:s}));var C=w.slice(0,r[r.length-1]);return(0,v.tZ)(y,(0,n.Z)({},D,{fallback:C}),w)})),w=O;O.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var P=r(8229),j=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],k=i.forwardRef((function(t,e){var r=t.nodes,i=t.variant,c=t.title,f=t.withTitleLink,d=t.limit,g=t.skip,b=t.distinct,m=t.slider,Z=t.aside,h=t.asNavFor,x=t.loading,y=(0,o.Z)(t,j),O=function(t,e){var r=e.limit,n=e.skip,o=e.distinct;if(!t)return null;if(!r&&!n&&!o)return t;var i=t;return o&&(i=u()(i,(function(t){return t.id}))),n&&(i=i.slice(n)),r&&(i=i.slice(0,r)),i}(r,{distinct:b,limit:d,skip:g});if(!O||!O.length)return null;var k=f?O[0].category&&O[0].category.slug:"",S=c&&""+(0,s.Z)(O.map((function(t){return t.id})).join()),D=(0,l.Z)(m?"lists.cards.slider":"lists.cards.fixed",i),C=function(t){h&&h.current&&(h.current.slickPause(),h.current.slickGoTo(t))},_=O.map((function(e,r){return(0,v.tZ)(P.Z,(0,n.Z)({key:e.id,variant:i,onMouseOver:function(){return C(r)},onFocus:function(){return C(r)},loading:t.fade?0===r?x:void 0:x},e,y))})),A=function(){return(0,v.tZ)(a.xu,{sx:{variant:D}},m?(0,v.tZ)(w,(0,n.Z)({ref:e},y),_):_)};return c?(0,v.tZ)(p.Z,{title:c,titleLink:k,key:S,aside:Z},(0,v.tZ)(A,null)):(0,v.tZ)(A,null)})),S=k;k.defaultProps={variant:"vertical",columns:[1],aside:!1}},3095:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});r(7378);var n=r(3314),o=r(6495),i={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},a=function(t){var e=t.header,r=t.subheader,a=t.running,l=t.totalCount;return(0,o.tZ)("div",null,(0,o.tZ)(n.X6,{variant:"h1",as:"h1"},e," ",l&&(0,o.tZ)(n.Ct,{variant:"tag-white",sx:i.count}," ",l)),r&&(0,o.tZ)(n.xv,{variant:"h3",sx:i.subheader},r),a&&(0,o.tZ)(n.xv,{variant:"h4",sx:i.runninghead},a))}},4675:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});r(7378);var n=r(3314),o=r(6495),i=function(t){var e=t.children;return(0,o.tZ)(n.W2,{variant:"sticky"},e)}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-post-js-5eb203fb83b2da5b8d49.js.map