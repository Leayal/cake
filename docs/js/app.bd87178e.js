(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(v.length)v.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],r=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var r={},n={app:0},a=[];function s(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=r,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cake/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},3584:function(e,t,i){},"3b39":function(e,t,i){"use strict";var r=i("8647"),n=i.n(r);n.a},"42ce":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("a026"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[e._v("Home")]),i("router-link",{attrs:{to:"/kicker"}},[e._v("Kicker")]),i("router-link",{attrs:{to:"/disc"}},[e._v("Disc")])],1),i("router-view")],1)},a=[],s=(i("5c0b"),i("2877")),o={},c=Object(s["a"])(o,n,a,!1,null,null,null),l=c.exports,d=i("9483");Object(d["a"])("".concat("/cake/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var u=i("8c4f"),v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pageContainerHome"},[i("div",{staticClass:"discordFlex"},[i("div",{staticClass:"discordIcon"},[i("a",{attrs:{href:"https://discord.gg/HXHQE5K",target:"_blank"}},[i("div",{staticClass:"discordLabel"},[i("div",[e._v("Join & Kick-Flight Together")])]),i("img",{attrs:{src:"img/icons/server.png"}})])]),i("div",{staticClass:"discordQA"},[i("div",{staticClass:"question"},[e._v("Q1: What is inside the Discord server?")]),i("div",{staticClass:"answer"},[e._v("• A players community"),i("br"),e._v("• Non-official English news which is made, based on Japanese in-game announcements")]),i("div",{staticClass:"question"},[e._v("Q2: Why does it have non-official English news?")]),i("div",{staticClass:"answer"},[e._v("• The game "),i("b",[e._v("may not")]),e._v(" update non-Japanese news in real time (late an hour, a day or even a month)")]),i("div",{staticClass:"question"},[e._v("Q3: What is the difference between official & non-official English news?")]),i("div",{staticClass:"answer"},[e._v("• Adding untranslated information. For example: Kicker Balance (version 1.2.0)")])])]),i("div",{staticClass:"precaution"},[i("h1",[i("img",{attrs:{src:"img/icons/exclaimationSmall.png"}}),e._v("Precautions")]),i("p",[e._v("1) This "),i("b",[e._v("is not")]),e._v(" an official website.")]),i("p",[e._v("2) Description regarding to Kickers & Discs written on this website "),i("b",[e._v("can be different")]),e._v(" with in-game.")]),i("p",[e._v("3) Discord invitation posted here leads to a private server, associated with this website. In other words, it "),i("b",[e._v("is not")]),e._v(" official server.")])])])}],f={},m=f,k=(i("b8fb"),Object(s["a"])(m,v,p,!1,null,"11799c18",null)),y=k.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pageContainer"},[i("div",{attrs:{id:"kickerContainer"}},[i("ul",{staticClass:"kickerGrid"},e._l(e.kickers,(function(t){return i("li",{key:t.id},[i("div",{staticClass:"kickerWrapper",attrs:{"data-kicker":t.id},on:{"!click":function(t){return e.selectKicker(t)}}},[i("div",{staticClass:"kickerName"},[e._v(e._s(t.id))]),i("img",{staticClass:"showOnPC",attrs:{src:"img/character/kickerList/"+t.id+".jpg"}}),i("img",{staticClass:"showOnPhone",attrs:{src:"img/character/kickerListSmall/"+t.id+".jpg"}}),i("div",{staticClass:"kickerBG"})])])})),0)]),i("div",{staticClass:"kickerInfoHolder",attrs:{id:"kickerInfoHolder"}},[i("div",{staticClass:"kickerInfoWrapper",attrs:{id:"kickerInfoWrapper"}},e._l(e.kickers,(function(t){return i("div",{key:t.id,staticClass:"kickerInfo",attrs:{"data-kickerinfo":t.id}},[i("div",{staticClass:"kickerInfoImage"},[i("img",{attrs:{src:"img/character/kickers/"+t.id+".jpg"}})]),i("div",{staticClass:"kickerInfoText"},[i("div",{staticClass:"kickerInfoName"},[e._v(e._s(t.name))]),i("div",{staticClass:"kickerInfoSkill"},[i("ul",e._l(t.skills,(function(t){return i("li",{key:t.id},[i("div",{staticClass:"skillName",class:t.id},[e._v(" "+e._s(t.skillName)+" ")]),i("div",{staticClass:"skillDescription"},[e._v(e._s(t.description))])])})),0)])])])})),0),i("div",{staticClass:"kickerInfoClose",on:{"!click":function(t){return e.closeKickerInfo()}}},[e._m(0)]),i("div",{staticClass:"kickerInfoHolderBG"})])])},_=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"closebutton"},[i("div",{attrs:{id:"mdiv"}},[i("div",{staticClass:"mdiv"},[i("div",{staticClass:"md"})])])])}],g=(i("96cf"),i("1da1")),b=i("bc3a"),C=i.n(b),w={name:"kickerGrid",data:function(){return{kickers:[]}},created:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("json/kickers.json");case 3:i=t.sent,e.kickers=i.data.kickers,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{selectKicker:function(e){var t=e.target.parentElement.dataset.kicker,i=document.getElementById("kickerInfoHolder"),r=document.querySelector('.kickerInfo[data-kickerinfo="'+t+'"]');i.classList.add("active"),r.classList.add("active")},closeKickerInfo:function(){var e,t=document.getElementById("kickerInfoHolder"),i=document.querySelectorAll(".kickerInfo[data-kickerinfo]");for(t.classList.remove("active"),e=0;e<i.length;++e)i[e].classList.remove("active")}}},x=w,T=(i("3b39"),Object(s["a"])(x,h,_,!1,null,null,null)),E=T.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pageContainer"},[i("button",{attrs:{id:"buttonGoTop",title:"Go to top"},on:{click:function(t){return e.goTop()}}},[e._v("Top")]),i("div",{attrs:{id:"discQueryHolder"}},[i("div",{staticClass:"field fieldType"},[i("div",{staticClass:"fieldLabel"},[e._v("Type")]),i("div",{staticClass:"buttonAll"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"all",value:""},domProps:{checked:e._q(e.type,"")},on:{change:function(t){e.type=""}}}),i("label",{attrs:{for:"all"}},[e._v("ALL")])]),e._l(e.typeLists,(function(t){return i("div",{key:t},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.type,t)},on:{change:function(i){e.type=t}}}),i("label",{class:"type-"+t,attrs:{for:t}})])}))],2),i("div",{staticClass:"field fieldElement"},[i("div",{staticClass:"fieldLabel"},[e._v("Element")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.element,expression:"element"}],attrs:{type:"radio",id:"all",value:""},domProps:{checked:e._q(e.element,"")},on:{change:function(t){e.element=""}}}),i("label",{attrs:{for:"all"}},[e._v("All")])]),e._l(e.elementLists,(function(t){return i("div",{key:t},[i("label",{attrs:{for:t}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.element,expression:"element"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.element,t)},on:{change:function(i){e.element=t}}}),e._v(e._s(t))])])}))],2),i("div",{staticClass:"field fieldRarity"},[i("div",{staticClass:"fieldLabel"},[e._v("Rarity")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.rarity,expression:"rarity"}],attrs:{type:"radio",id:"all",value:""},domProps:{checked:e._q(e.rarity,"")},on:{change:function(t){e.rarity=""}}}),i("label",{attrs:{for:"all"}},[e._v("All")])]),e._l(e.rarityLists,(function(t){return i("div",{key:t},[i("label",{attrs:{for:t}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.rarity,expression:"rarity"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.rarity,t)},on:{change:function(i){e.rarity=t}}}),e._v(e._s(t))])])}))],2)]),i("div",{staticClass:"discGridContainer"},[i("div",{staticClass:"discGrid"},e._l(e.filterdisc,(function(t){return i("div",{key:t.id,staticClass:"discWrapper"},[i("div",{staticClass:"discName"},[e._v(e._s(t.nameEN))]),i("div",{staticClass:"discType"},[i("span",{class:"type-"+t.type})]),i("div",{staticClass:"discImage"},[i("img",{attrs:{src:"img/disc/icon/"+t.id+".png"}})]),i("div",{staticClass:"discSkill"},[e._v(e._s(t.descriptionEN))])])})),0)])])},j=[],I=(i("4de4"),i("2ef0")),N=i.n(I),O={data:function(){return{typeLists:["atk-r","atk-l","atk-s","atk-c","warp","move","trap","buff","heal"],elementLists:["fire","water","wind"],rarityLists:["ur","sr","r","n"],rarity:"",type:"",element:"",discs:[]}},created:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("json/discs.json");case 3:i=t.sent,e.discs=i.data.discs,console.log(i.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},computed:{filterdisc:function(){var e=this,t=e.discs;return N.a.filter(t,(function(t){var i=!e.rarity||t.rarity==e.rarity,r=!e.type||t.type==e.type,n=!e.element||t.element==e.element;return r&&n&&i}))}},methods:{goTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},mounted:function(){var e=document.getElementById("buttonGoTop");function t(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"}window.onscroll=function(){t()}}},P=O,q=(i("8268"),Object(s["a"])(P,L,j,!1,null,"ce4b9c0a",null)),A=q.exports,G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pageContainer"},[i("button",{attrs:{id:"buttonGoTop",title:"Go to top"},on:{click:function(t){return e.goTop()}}},[e._v("Top")]),i("div",{attrs:{id:"discQueryHolder"}},[i("div",{staticClass:"field fieldType"},[i("div",{staticClass:"fieldLabel"},[e._v("Type")]),i("div",{staticClass:"buttonAll"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"all",value:""},domProps:{checked:e._q(e.type,"")},on:{change:function(t){e.type=""}}}),i("label",{attrs:{for:"all"}},[e._v("ALL")])]),e._l(e.typeLists,(function(t){return i("div",{key:t},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.type,t)},on:{change:function(i){e.type=t}}}),i("label",{class:"type-"+t,attrs:{for:t}})])}))],2),i("div",{staticClass:"field fieldElement"},[i("div",{staticClass:"fieldLabel"},[e._v("Element")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.element,expression:"element"}],attrs:{type:"radio",id:"all",value:""},domProps:{checked:e._q(e.element,"")},on:{change:function(t){e.element=""}}}),i("label",{attrs:{for:"all"}},[e._v("All")])]),e._l(e.elementLists,(function(t){return i("div",{key:t},[i("label",{attrs:{for:t}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.element,expression:"element"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.element,t)},on:{change:function(i){e.element=t}}}),e._v(e._s(t))])])}))],2),i("div",{staticClass:"field fieldRarity"},[i("div",{staticClass:"fieldLabel"},[e._v("Rarity")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.rarity,expression:"rarity"}],attrs:{type:"radio",id:"all",value:""},domProps:{checked:e._q(e.rarity,"")},on:{change:function(t){e.rarity=""}}}),i("label",{attrs:{for:"all"}},[e._v("All")])]),e._l(e.rarityLists,(function(t){return i("div",{key:t},[i("label",{attrs:{for:t}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.rarity,expression:"rarity"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.rarity,t)},on:{change:function(i){e.rarity=t}}}),e._v(e._s(t))])])}))],2)]),i("div",{staticClass:"discGridContainer"},[i("div",{staticClass:"discGrid"},e._l(e.filterdisc,(function(t){return i("div",{key:t.id,staticClass:"discWrapper"},[i("div",{staticClass:"discName"},[e._v(e._s(t.nameEN))]),i("div",{staticClass:"discType"},[i("span",{class:"type-"+t.type})]),i("div",{staticClass:"discImage"},[i("img",{attrs:{src:"img/disc/icon/"+t.id+".png"}})]),i("div",{staticClass:"discSkill"},[e._v(e._s(t.descriptionEN))])])})),0)])])},S=[],H={data:function(){return{typeLists:["atk-r","atk-l","atk-s","atk-c","warp","move","trap","buff","heal"],elementLists:["fire","water","wind"],rarityLists:["ur","sr","r","n"],rarity:"",type:"",element:"",discs:[]}},created:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("json/discs.json");case 3:i=t.sent,e.discs=i.data.discs,console.log(i.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},computed:{filterdisc:function(){var e=this,t=e.discs;return N.a.filter(t,(function(t){var i=!e.rarity||t.rarity==e.rarity,r=!e.type||t.type==e.type,n=!e.element||t.element==e.element;return r&&n&&i}))}},methods:{goTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},mounted:function(){var e=document.getElementById("buttonGoTop");function t(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"}window.onscroll=function(){t()}}},K=H,R=(i("edab"),Object(s["a"])(K,G,S,!1,null,"9b61fbfe",null)),B=R.exports;r["a"].use(u["a"]);var W=[{path:"/",name:"Home",component:y},{path:"/kicker",name:"Kicker",component:E},{path:"/disc",name:"Disc",component:A},{path:"/axios_test",name:"axios_test",component:B}],$=new u["a"]({routes:W}),D=$,Q=i("2f62");r["a"].use(Q["a"]);var F=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:D,store:F,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var r=i("9c0c"),n=i.n(r);n.a},8268:function(e,t,i){"use strict";var r=i("3584"),n=i.n(r);n.a},8647:function(e,t,i){},"9c0c":function(e,t,i){},b8fb:function(e,t,i){"use strict";var r=i("c178"),n=i.n(r);n.a},c178:function(e,t,i){},edab:function(e,t,i){"use strict";var r=i("42ce"),n=i.n(r);n.a}});
//# sourceMappingURL=app.bd87178e.js.map