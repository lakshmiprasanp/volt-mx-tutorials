_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"32PK":function(e,t,n){"use strict";var r=n("nKUr"),o=n("q1tI"),a=n.n(o),i=n("ZPTe"),s=n.n(i),c=n("9xET"),u=n.n(c),l=n("XKlS"),p=n("wuHa"),d=n.n(p),f=n("K4dc");t.a=function(){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)(u.a,{className:d.a.pageOuter,children:Object(r.jsxs)(u.a,{className:d.a.pageWrapper,children:[Object(r.jsx)(s.a,{xs:24,sm:24,md:12,lg:12,children:Object(r.jsx)("img",{src:"/volt-mx-tutorials/static/dist/images/error.svg",alt:"Page not found"})}),Object(r.jsxs)(s.a,{xs:24,sm:24,md:12,lg:12,className:d.a.sidebarWrapper,children:[Object(r.jsx)("h1",{children:"404"}),Object(r.jsx)("h2",{children:"Are you lost?"}),Object(r.jsx)("h3",{children:"Looks like you\u2019ve wandered off trail. Try using the search bar above to find what you are looking for."}),Object(r.jsx)(l.a,{title:"Home",type:"action",color:"blue",href:Object(f.b)("/"),className:d.a.button})]})]})})})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var p=o.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(p)?(f.add(p),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},EwQA:function(e,t,n){var r=n("zZ0H");e.exports=function(e){return"function"==typeof e?e:r}},FSPc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/domain",function(){return n("US8s")}])},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},US8s:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("nKUr"),s=n("1OyB"),c=n("vuIU"),u=n("JX7q"),l=n("Ji7U"),p=n("md7G"),d=n("foSv"),f=n("rePB"),b=n("q1tI"),h=n("/MKj"),y=n("ANjH"),g=n("9xET"),m=n.n(g),v=n("bNQv"),j=n.n(v),O=n("J66h"),x=n("vfq0"),S=n("32PK"),A=n("9At1"),w=n("K4dc"),k=n("Zb9X"),I=n("jleH"),M=n("/ESC"),P=n("cF7z"),_=n("7Qib");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var B=function(e){Object(l.a)(n,e);var t=q(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),Object(f.a)(Object(u.a)(e),"getInfiniteAssets",(function(t){var n=e.props.assets,r=n.list;e.props.loadAssets({count:10,offset:t},n.headers,r)})),Object(f.a)(Object(u.a)(e),"getcloudTitle",(function(e,t){var n=e.query.cloudId;return t.cloudAccounts&&t.cloudAccounts.length>0?(t.cloudAccounts.map((function(t){String(null===t||void 0===t?void 0:t.account_id)===e.query.cloudId&&(n="".concat(Object(_.a)(t.account_title)," (").concat(null===t||void 0===t?void 0:t.account_id,")"))})),n):e.query.cloudId})),Object(f.a)(Object(u.a)(e),"checkCloudAccount",(function(e,t){var n=!1;return j()(t,(function(t){Number(e.query.cloudId)===Number(null===t||void 0===t?void 0:t.account_id)&&(n=!0)})),n})),Object(f.a)(Object(u.a)(e),"getBreadCrumbTitle",(function(){var t=e.props,n=t.mp,r=t.url,o=r.query,a=o.domain,i=o.cloudId,s=o.channels,c=o.keyword,u=o.author;if(i)return e.getcloudTitle(r,n);if(u)try{var l=O.Base64.decode(u);if(l)return l.split("::")[0]}catch(p){return u}return a?Object(_.a)(a):s?e.getChannelTitle(r):c||void 0})),Object(f.a)(Object(u.a)(e),"getChannelTitle",(function(e){var t=e.query.channels;if(t&&!Array.isArray(t)&&e.asPath&&e.asPath.includes("/channels/"))return Object(_.a)(t)})),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.mp.isVizWeb&&(Object(_.b)("/volt-mx-tutorials/static/dist/js/visualizer.js"),this.getInfiniteAssets(0)),this.props.loadFilters()}},{key:"render",value:function(){var e=this.props,t=e.mp,n=e.assets,r=e.url,o=t.cloudAccounts,a=t.config,s=t.isLogin,c=t.isVizApp,u=t.isVizWeb;return r.query.cloudId&&!this.checkCloudAccount(r,o)?Object(i.jsxs)(k.a,{config:a,isLogin:s,url:r,children:[Object(i.jsx)(x.a,{title:Object(_.a)(r.query.domain)||r.query.keyword}),Object(i.jsx)(I.a,{selectedParams:n.selectedFilters}),Object(i.jsx)(S.a,{})]}):Object(i.jsxs)(k.a,{config:t.config,isLogin:t.isLogin,url:this.props.url,children:[Object(i.jsx)(x.a,{title:this.getBreadCrumbTitle()}),Object(i.jsxs)(m.a,{className:"mpDomainPage",children:[Object(i.jsx)(I.a,{selectedParams:n.selectedFilters}),Object(i.jsx)(P.a,{filters:n.filters,viz:t.isVizWeb,vizApp:t.isVizApp,url:r}),Object(i.jsx)(M.a,{title:this.getBreadCrumbTitle(),filters:this.props.assets.filters,selectedList:n.selectedFilters,assets:n.list,currentList:n.currentList,load:n.loadMore,getAssets:this.getInfiniteAssets,filtersLoading:n.filtersLoading,isVizApp:c,isViz:c||u,searchKeyword:r.query.keyword,hideFilters:this.getChannelTitle(r),total:n.totalAssetCount,loading:n.loading})]})]})}}],[{key:"getInitialProps",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var n,r,a,i,s,c,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,Object(w.a)(t);case 4:return i=t.store.getState(),s=i.assets,e.next=7,t.store.dispatch(A.b.getConfig());case 7:if(!(null!==(n=t.query)&&void 0!==n&&n.useragent||null!==(r=t.req)&&void 0!==r&&null!==(a=r.cookies)&&void 0!==a&&a.useragent)){e.next=18;break}if("visualizer"===((null===(c=t.query)||void 0===c?void 0:c.useragent)||(null===(u=t.req)||void 0===u||null===(l=u.cookies)||void 0===l?void 0:l.useragent)).toLowerCase()){e.next=14;break}return e.next=12,t.store.dispatch(A.a.loadAssets({count:10,offset:0},s.headers));case 12:e.next=16;break;case 14:return e.next=16,t.store.dispatch(A.a.setAssetsLoading(!0));case 16:e.next=20;break;case 18:return e.next=20,t.store.dispatch(A.a.loadAssets({count:10,offset:0},s.headers));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(b.Component);t.default=Object(h.b)((function(e){return{mp:e.marketplace,assets:e.assets}}),(function(e){return Object(y.bindActionCreators)(E(E({},A.b),A.a),e)}))(B)},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),p=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bNQv:function(e,t,n){var r=n("gFfm"),o=n("SKAX"),a=n("EwQA"),i=n("Z0cm");e.exports=function(e,t){return(i(e)?r:o)(e,a(t))}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vfq0:function(e,t,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("g4pe")),a=n.n(o),i=function(e){var t=e.title,n=e.description,o=e.keywords,i=e.url,s=e.image,c=e.type;return Object(r.jsxs)(a.a,{children:[Object(r.jsxs)("title",{children:[t?"".concat(t," | "):""," Kony Marketplace"]}),Object(r.jsx)("meta",{name:"description",content:n}),Object(r.jsx)("meta",{property:"og:title",content:t}),Object(r.jsx)("meta",{property:"og:description",content:n}),Object(r.jsx)("meta",{property:"og:type",content:c}),i?Object(r.jsx)("meta",{property:"og:url",content:i}):null,s?Object(r.jsx)("meta",{property:"og:image",content:s}):null,o?Object(r.jsx)("meta",{name:"keywords",content:o}):null]})};i.defaultProps={title:"Kony Marketplace",description:"The Kony Marketplace allows you to explore, use and contribute components, patterns, services and adapters to quickly design and build apps for a broad range of use cases.",type:"website"},t.a=i},wuHa:function(e,t,n){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",pageOuter:"_370ky",pageWrapper:"SB7zu",button:"ds8T6",sidebarWrapper:"_3NUWZ"}}},[["FSPc",1,2,3,6,9,12,21,22,0,4,5,7,10,11,13,14,16,15,19,23,24,26,8]]]);