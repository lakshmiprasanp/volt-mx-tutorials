_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{XKlS:function(e,t,a){"use strict";var o=a("nKUr"),n=(a("q1tI"),a("4IMT")),s=a.n(n),r=a("zk85"),c=a.n(r),i=function(e){if(e)return Object(o.jsx)("img",{src:"/volt-mx-tutorials/static/dist/images/icons/filterCross.svg",alt:"icon",className:c.a.filterCloseIcon})},l=function(e){return"download"===e?Object(o.jsx)("img",{src:"/volt-mx-tutorials/static/dist/images/download.svg",alt:"Download icon",className:c.a.downloadIcon}):null},u=function(e){return e?Object(o.jsx)("img",{src:"/volt-mx-tutorials/static/dist/images/icons/codeIcon.png",alt:"Code icon",className:c.a.codeIcon}):null},d=function(e){var t=e.title,a=e.type,n=e.color,r=e.active,d=e.selected,m=e.children,p=e.className,f=e.onClick,j=e.featured,g=e.href,b=e.target,h=e.disabled,v=e.isCode;return Object(o.jsxs)(s.a,{title:t,className:"\n      ".concat(c.a.konyButton,"\n      ").concat(c.a[a]?c.a[a]:"","\n      ").concat(c.a[n]?c.a[n]:"","\n      ").concat(r?c.a.active:"","\n      ").concat(d?c.a.selected:"","\n      ").concat(j?c.a.featured:"","\n      ").concat(p,"\n    "),onClick:f,href:g||null,target:b,disabled:h,children:[l(a),u(v),m||t,i(d)]})};d.defaultProps={title:"Button",type:"normal",color:"",active:!1,featured:!1,selected:!1,children:"",className:"",href:"",target:null,onClick:function(){},disabled:!1,isCode:!1},t.a=d},kACj:function(e,t,a){"use strict";a.r(t);var o=a("o0o1"),n=a.n(o),s=a("HaE+"),r=a("nKUr"),c=a("1OyB"),i=a("vuIU"),l=a("JX7q"),u=a("Ji7U"),d=a("md7G"),m=a("foSv"),p=a("rePB"),f=a("q1tI"),j=a("K4dc"),g=a("Djov"),b=a("9xET"),h=a.n(b),v=a("ZPTe"),y=a.n(v),x=a("DG/x"),S=a("XKlS"),O=a("PGnZ"),k=a.n(O);function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=Object(m.a)(e);if(t){var n=Object(m.a)(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return Object(d.a)(this,a)}}var _=function(e){Object(u.a)(a,e);var t=I(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n)),Object(p.a)(Object(l.a)(e),"getPostMessage",(function(){var t=e.props.tour.tourDetails,a=new Date;return{namespace:"hike",msg_id:"id_".concat(a.getTime()),msg_type:"POST",request:{context:"tour",category:t.category,title:t.title,checksum:t.checksum,download_url:"".concat(t.fileURL,"?agent=viz"),version:t.hikeVersion,filename:t.fileName,kuid:t.kuid,id:"".concat(t.nid).concat(t.fid).concat(a.getTime())}}})),e}return Object(i.a)(a,[{key:"sendPostMessage",value:function(e){return e.preventDefault(),e.message=this.getPostMessage(),"undefined"!==typeof e.message&&parent.postMessage(e.message,"*"),!1}},{key:"render",value:function(){var e=this,t=this.props.tour.tourDetails,a=this.props.url.query,o=void 0!==a.search&&null!==a.search?a.search:null;return Object(r.jsxs)("div",{className:k.a.hikeBody,children:[Object(r.jsx)(g.a,{search:!1}),Object(r.jsxs)("div",{className:k.a.tourContainer,children:[Object(r.jsx)(x.a,{title:t.title,search:o}),Object(r.jsxs)("div",{className:k.a.tourInfo,children:[Object(r.jsx)("div",{className:k.a.tourThumb,children:Object(r.jsx)("img",{src:t.image,alt:"Hike Thumbnail"})}),Object(r.jsxs)("div",{className:k.a.tourDesc,children:[Object(r.jsx)("h2",{className:k.a.tourTitle,children:t.title}),Object(r.jsxs)("h3",{className:k.a.tourVersion,children:["Hike Version: ",t.hikeVersion]}),Object(r.jsx)("div",{className:k.a.tourBody,dangerouslySetInnerHTML:{__html:t.description}}),Object(r.jsxs)(h.a,{className:k.a.metaData,children:[Object(r.jsxs)(y.a,{span:6,sm:24,xs:24,md:6,lg:6,className:k.a.innerTabWrapper,children:[Object(r.jsx)("h3",{className:k.a.tourHeader,children:"Platform Version"}),Object(r.jsx)("div",{className:k.a.tourContent,children:t.platformVersion})]}),Object(r.jsxs)(y.a,{span:6,sm:24,xs:24,md:6,lg:6,className:k.a.innerTabWrapper,children:[Object(r.jsx)("h3",{className:k.a.tourHeader,children:"Categories"}),Object(r.jsx)("ul",{className:k.a.tourContent,children:t.category.map((function(e){return Object(r.jsx)("li",{children:e})}))})]})]}),Object(r.jsx)("h3",{className:k.a.tourTime,children:"".concat(t.cards," Steps - ").concat(t.time)}),Object(r.jsx)("div",{className:k.a.tourDetails,dangerouslySetInnerHTML:{__html:t.details}})]})]}),Object(r.jsx)("div",{className:k.a.startBtn,children:Object(r.jsx)(S.a,{title:"START",type:"blue",onClick:function(t){return e.sendPostMessage(t)}})})]})]})}}],[{key:"getInitialProps",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,e.prev=1,e.next=4,j.c.get("/api/v1_1/hike/tour/".concat(a.tour,"/details"));case 4:return o=e.sent,e.abrupt("return",{tour:o.data});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}]),a}(f.Component);t.default=_},zJMs:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tour",function(){return a("kACj")}])},zk85:function(e,t,a){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",konyButton:"_1zJKe",normal:"_3Ekqs",active:"_2LeOg",filter:"Orjkm",selected:"_2bLYr",downloadIcon:"_3AqOe",codeIcon:"_2n6ua",action:"I6ToG",download:"_2oNV4",blue:"nUQSe",red:"_1xDUH",lightBlue:"_1g8e2",skyBlue:"UHdfC",lightGreen:"_2T8V3",appPreview:"_2Hptp",featured:"_16x0J",filterCloseIcon:"shvlF"}}},[["zJMs",1,2,3,6,0,4,5,25,8]]]);