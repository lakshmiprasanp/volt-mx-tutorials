_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"7gpI":function(e,t,o){"use strict";var a=o("nKUr"),s=(o("q1tI"),o("9xET")),i=o.n(s),r=(o("YFqc"),o("17x9")),n=o.n(r),c=o("whbN"),l=o("4CzQ"),p=o.n(l),m=o("mOvS"),u=o.n(m)()().publicRuntimeConfig;c.a.propTypes={title:n.a.string,tours:n.a.array},c.a.defaultProps={title:"",tours:[]},t.a=function(e){e.alias;var t=e.title,o=e.desc,s=e.tours;return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.a,{className:p.a.domainTitleWrapper,children:Object(a.jsxs)("div",{children:["dbx"===t.toLowerCase()?Object(a.jsx)("img",{src:"".concat(u.asset,"/static/dist/images/dbx_logo.png"),className:p.a.title}):Object(a.jsx)("h1",{className:p.a.title,children:t.toUpperCase()}),Object(a.jsx)("div",{className:p.a.desc,dangerouslySetInnerHTML:{__html:o}})]})}),Object(a.jsx)(i.a,{type:"flex",className:p.a.assetsContainer,children:s.map((function(e){return Object(a.jsx)(c.a,{tour:e,dbx:"dbx"===t.toLowerCase()},e.nid)}))})]})}},"8SHQ":function(e,t,o){"use strict";(function(e){o.d(t,"f",(function(){return a})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r})),o.d(t,"d",(function(){return n})),o.d(t,"e",(function(){return c}));var a="production"!==(e&&e.env,"production"),s=3200,i="phx-dev",r="volt-mx-tutorials",n="HCL-TECH-SOFTWARE",c=a?"http://localhost:".concat(s):"".concat("https://opensource.hcltechsw.com","/").concat(r)}).call(this,o("8oxB"))},CSbH:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",headerRow:"_3w-lt",headerLayout:"tnIEI",logo:"_1NTTx",header:"N33B7",hide:"_2VwXw",search:"_5eQst",camp:"_3ys2l",subHeader:"_5tLpv",switchLang:"_17QWv"}},Djov:function(e,t,o){"use strict";var a=o("nKUr"),s=o("q1tI"),i=o("d2CI"),r=o.n(i),n=o("9xET"),c=o.n(n),l=o("ZPTe"),p=o.n(l),m=o("YFqc"),u=o.n(m),b=o("CSbH"),g=o.n(b),d=o("1OyB"),j=o("vuIU"),h=o("JX7q"),S=o("Ji7U"),f=o("md7G"),y=o("foSv"),v=o("rePB"),x=o("4IMT"),I=o.n(x),B=o("iJl9"),E=o.n(B),O=o("CC+v"),U=o.n(O),_=o("20a2"),C=o.n(_),R=o("jr0K"),A=o.n(R),N=o("mOvS"),k=o.n(N);function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,a=Object(y.a)(e);if(t){var s=Object(y.a)(this).constructor;o=Reflect.construct(a,arguments,s)}else o=a.apply(this,arguments);return Object(f.a)(this,o)}}var w=k()().publicRuntimeConfig,T=function(e){Object(S.a)(o,e);var t=F(o);function o(){var e;Object(d.a)(this,o);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(v.a)(Object(h.a)(e),"state",{keyword:e.props.keyword||""}),Object(v.a)(Object(h.a)(e),"handleSearchClick",(function(){e.handleSubmit(document.getElementById("search").value)})),Object(v.a)(Object(h.a)(e),"handleSubmit",(function(e){var t=e.trim().replace(/\\|\/|  +/g," ");if(!(t.length>2))return U.a.error({title:"Please enter minimum 3 characters"}),!1;var o="/hikes/search/".concat(t);C.a.replace(o)})),e}return Object(j.a)(o,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:A.a.searchWrapper,ref:this.setWrapperRef,children:Object(a.jsxs)(p.a,{span:24,className:A.a.innerWrapper,children:[Object(a.jsx)(E.a,{id:"search",placeholder:"Search",className:A.a.input,onPressEnter:function(t){return e.handleSubmit(t.target.value)},autoComplete:"off",defaultValue:this.state.keyword}),Object(a.jsx)(I.a,{type:"primary",shape:"circle",size:"default",className:A.a.searchIcon,onClick:this.handleSearchClick,children:Object(a.jsx)("img",{src:"".concat(w.asset,"/static/dist/images/search.svg"),alt:"search icon"})})]})})}}]),o}(s.Component),H=k()().publicRuntimeConfig,M=r.a.Header,P=function(e){var t=e.search,o=e.keyword;return Object(a.jsx)(c.a,{className:g.a.headerRow,children:Object(a.jsxs)(r.a,{className:g.a.headerLayout,children:[Object(a.jsx)(M,{className:g.a.header,children:Object(a.jsxs)(c.a,{type:"flex",justify:"space-between",children:[Object(a.jsx)(p.a,{span:4,style:{height:"inherit"},children:Object(a.jsx)(u.a,{href:"".concat(H.asset,"/hikes"),children:Object(a.jsxs)("a",{title:"Kony Logo",className:g.a.logo,children:[Object(a.jsx)("img",{src:"".concat(H.asset,"/static/dist/images/productlogo.svg"),className:g.a.logo,alt:"logo"}),Object(a.jsx)("br",{})]})})}),Object(a.jsx)(p.a,{className:g.a.camp,children:Object(a.jsx)("img",{src:"".concat(H.asset,"/static/dist/images/camp-mountain.svg"),alt:"camp mountain"})})]})}),t?Object(a.jsx)("div",{className:g.a.search,children:Object(a.jsx)(T,{keyword:o})}):null]})})};P.defaultProps={search:!0,keyword:""};t.a=P},PGnZ:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",hide:"_2lx70",switchWrapper:"_3dK4q",channels:"_1_fDn",generalButton:"_2h9jN",detailPageWrapper:"_1wlJH",mobileMetaWrapper:"_18sTW",hikeBody:"un9yd",hikeContainer:"_4980",tourInfo:"_1sg5s",tourTitle:"_1zCBc",tourVersion:"_34gMg",tourBody:"RSpOC",tourThumb:"_1uuIs",tourContainer:"_3Z4gB",tourDesc:"_1DQZI",innerTabWrapper:"_14Op9",tourHeader:"_3f8tX",tourContent:"_2FiW3",tourDetails:"_8wI-z",tourTime:"_2GNWc",startBtn:"_3FjBe",noresult:"_1ZgnQ",assetsContainer:"_3POKL",skeletonWrapper:"_21ZUU",metaData:"vgCP3",datePanel:"_OfnV",filterTablePanel:"_2v7ht",tableHeading:"_3BG8h",componentPerformanceButton:"X9xGv",miniPanelContainer:"_1AvNV",panelContainer:"_1OM0t",RowContainer:"gkuiu",pageContainer:"_3brHz",generate:"_27j98",generateForm:"_1n1qG",preview:"_1zsEw",previews:"_1o1qI"}},gyl2:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/hikes",function(){return o("zcz4")}])},jr0K:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",input:"_1OQcm",searchIcon:"_2N6F0",searchWrapper:"_3qwBd",show:"_30n2x",hide:"_3EwJQ",innerWrapper:"_1pB6w"}},whbN:function(e,t,o){"use strict";(function(e){var a=o("nKUr"),s=(o("q1tI"),o("ZPTe")),i=o.n(s),r=o("YFqc"),n=o.n(r),c=o("JviU"),l=o.n(c),p=o("7Qib"),m=o("8SHQ"),u="production"===(e&&e.env,"production")?"".concat(m.b,"/"):"",b=function(e){var t=e.tour,o=e.dbx,s=e.search;return Object(a.jsx)(i.a,{sm:8,xs:24,children:Object(a.jsx)("div",{className:l.a.tour,children:void 0!==s&&null!==s?Object(a.jsx)(n.a,{href:{pathname:"".concat(u).concat(t.alias),query:{search:s}},children:Object(a.jsxs)("div",{className:l.a.info,children:[Object(a.jsx)("h2",{className:"".concat(l.a.title," ").concat(o?l.a.dbxColor:""," "),children:Object(p.f)(t.title,34)}),Object(a.jsx)("p",{className:l.a.desc,children:t.description}),Object(a.jsx)("p",{className:l.a.meta,children:"".concat(t.cards," Steps / ").concat(t.time)})]})}):Object(a.jsx)(n.a,{href:"".concat(u).concat(t.alias),children:Object(a.jsxs)("div",{className:l.a.info,children:[Object(a.jsx)("h2",{className:"".concat(l.a.title," ").concat(o?l.a.dbxColor:""," "),children:Object(p.f)(t.title,34)}),Object(a.jsx)("p",{className:l.a.desc,children:t.description}),Object(a.jsx)("p",{className:l.a.meta,children:"".concat(t.cards," Steps / ").concat(t.time)})]})})})})};b.defaultProps={tour:{},dbx:!1},t.a=b}).call(this,o("8oxB"))},zcz4:function(e,t,o){"use strict";o.r(t),o.d(t,"__N_SSG",(function(){return l})),o.d(t,"default",(function(){return p}));var a=o("nKUr"),s=(o("q1tI"),o("PGnZ")),i=o.n(s),r=o("Djov"),n=o("7gpI"),c=o("XzT5"),l=!0;function p(e){var t=e.language,o=e.paths;console.log(o);return Object(a.jsxs)("div",{className:i.a.hikeBody,children:[Object(a.jsx)(r.a,{currentLang:t}),Object(a.jsx)("div",{className:i.a.hikeContainer,children:[{categoryName:c.a.t("categoryName"),categoryDescription:c.a.t("categoryDescription"),categoryAlias:"alias",categoryTours:c.a.t("tours")}].map((function(e){return null!==e.categoryTours?Object(a.jsx)(n.a,{title:e.categoryName,desc:e.categoryDescription,alias:e.categoryAlias||e.categoryName,tours:e.categoryTours},e.categoryName):null}))})]})}}},[["gyl2",0,2,4,8,1,3,7,14,5]]]);