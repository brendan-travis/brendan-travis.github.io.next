(function(e){function t(t){for(var a,o,s=t[0],l=t[1],r=t[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(h.length)h.shift()();return c.push.apply(c,r||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/next/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var r=0;r<s.length;r++)t(s[r]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0219":function(e,t,n){},"0ff1":function(e,t,n){"use strict";n("9bd6")},"38d9":function(e,t,n){},"3ac3":function(e,t,n){"use strict";n("38d9")},5058:function(e,t,n){"use strict";n("0219")},"9bd6":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i=Object(a["d"])("div",{class:"background"},null,-1),c=Object(a["d"])("section",{id:"landing",class:"h-100vh"},[Object(a["d"])("div",{class:"landing-heading"},[Object(a["d"])("h1",null,[Object(a["e"])("BRENDAN"),Object(a["d"])("br"),Object(a["e"])("TRAVIS")]),Object(a["d"])("p",null,"Full stack developer")])],-1),o={id:"about",class:"h-100vh"},s=Object(a["d"])("div",{class:"page-heading"},[Object(a["d"])("h2",null,"About me")],-1),l={id:"dark-souls-checklist",class:"h-100vh"},r=Object(a["d"])("div",{class:"page-heading"},[Object(a["d"])("h2",null,[Object(a["e"])("Dark Souls III"),Object(a["d"])("br"),Object(a["e"])("Quest Checklist")])],-1),u={id:"contact",class:"h-100vh"},d=Object(a["d"])("div",{class:"page-heading"},[Object(a["d"])("h2",null,"Connect")],-1);function h(e,t,n,h,v,f){var m=Object(a["l"])("pageIndicator"),b=Object(a["l"])("particles"),p=Object(a["l"])("frame");return Object(a["g"])(),Object(a["c"])(a["a"],null,[i,Object(a["f"])(m),Object(a["f"])(b),c,Object(a["d"])("section",o,[Object(a["f"])(p),s]),Object(a["d"])("section",l,[Object(a["f"])(p),r]),Object(a["d"])("section",u,[Object(a["f"])(p),d])],64)}var v=n("d4ec"),f=n("bee2"),m=n("262e"),b=n("2caf"),p=n("9ab4"),y=n("ce1f"),O=function(e){return Object(a["j"])("data-v-e4b1642c"),e=e(),Object(a["h"])(),e},j={id:"selector-container",class:"page-indicator"},g=O((function(){return Object(a["d"])("div",{id:"selector-i"},null,-1)})),w=O((function(){return Object(a["d"])("div",{id:"selector-ii"},null,-1)})),k=O((function(){return Object(a["d"])("div",{id:"selector-iii"},null,-1)})),C=O((function(){return Object(a["d"])("div",{id:"selector-iv"},null,-1)})),S=[g,w,k,C];function B(e,t,n,i,c,o){return Object(a["g"])(),Object(a["c"])("div",j,S)}var E=n("b85c"),L=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(v["a"])(this,n),e=t.apply(this,arguments),e.selectedClass="selected",e.selectorContainer="selector-container",e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;window.addEventListener("hashchange",(function(){return e.SelectFromRoute()})),this.SelectFromRoute()}},{key:"SelectFromRoute",value:function(){var e,t,n,a;this.UnselectAll();var i=window.location.hash;switch(i){case"":case"#landing":null===(e=document.getElementById("selector-i"))||void 0===e||e.classList.add(this.selectedClass);break;case"#about":null===(t=document.getElementById("selector-ii"))||void 0===t||t.classList.add(this.selectedClass);break;case"#dark-souls-checklist":null===(n=document.getElementById("selector-iii"))||void 0===n||n.classList.add(this.selectedClass);break;case"#contact":null===(a=document.getElementById("selector-iv"))||void 0===a||a.classList.add(this.selectedClass);break}}},{key:"UnselectAll",value:function(){var e,t=null===(e=document.getElementById(this.selectorContainer))||void 0===e?void 0:e.getElementsByClassName(this.selectedClass);if(t){var n,a=Object(E["a"])(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;i.classList.remove(this.selectedClass)}}catch(c){a.e(c)}finally{a.f()}}}}]),n}(y["b"]),A=(n("5058"),n("6b0d")),I=n.n(A);const P=I()(L,[["render",B],["__scopeId","data-v-e4b1642c"]]);var R=P,N={id:"particle-container"};function x(e,t,n,i,c,o){return Object(a["g"])(),Object(a["c"])("div",N)}n("99af"),n("4de4");var M=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(v["a"])(this,n),e=t.apply(this,arguments),e.numberOfParticles=30,e.colours=["#4e242a","#fcb360","#fdee98"],e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;window.addEventListener("resize",(function(){e.ClearParticles(),e.InitialiseParticles()})),this.InitialiseParticles()}},{key:"InitialiseParticles",value:function(){var e,t,n,a;this.container=document.getElementById("particle-container"),this.maxWidth=null!==(e=1.2*(null===(t=this.container)||void 0===t?void 0:t.offsetWidth))&&void 0!==e?e:0,this.maxHeight=null!==(n=1.2*(null===(a=this.container)||void 0===a?void 0:a.offsetHeight))&&void 0!==n?n:0;for(var i=0;i<this.numberOfParticles;i++)this.CreateParticle()}},{key:"CreateParticle",value:function(){var e,t,n,a=null!==(e=this.maxHeight)&&void 0!==e?e:0,i=null!==(t=this.maxWidth)&&void 0!==t?t:0,c=this.GetRandomNumberBetween(0,2),o="".concat(Math.floor(Math.random()*i),"px"),s="".concat(Math.floor(Math.random()*a),"px"),l="".concat(Math.floor(Math.random()*i),"px"),r="".concat(Math.floor(Math.random()*a),"px"),u=this.GetRandomNumberBetween(10,30),d=this.GetRandomNumberBetween(2,8),h="particle-".concat(Math.floor(1e6*Math.random())),v=this.GetRandomNumberBetween(40,80),f=this.GetRandomNumberBetween(30,80),m="\n            @keyframes ".concat(h," {\n                0% {\n                    opacity: 0;\n                    left: ").concat(o,";\n                    top: ").concat(s,";\n                }\n                ").concat(f,"% {\n                    opacity: 0.8;\n                }\n                100% {\n                    opacity: 0;\n                    left: ").concat(l,";\n                    top: ").concat(r,";\n                }\n            }");document.styleSheets[0].insertRule(m,document.styleSheets[0].cssRules.length-1);var b=document.createElement("div");b.classList.add("particle"),b.style.animation="".concat(h," ").concat(v,"s infinite"),b.style.height=b.style.width="".concat(u,"px"),b.style.filter="blur(".concat(d,"px)"),b.style.background=this.colours[c],null===(n=this.container)||void 0===n||n.appendChild(b)}},{key:"ClearParticles",value:function(){this.container&&(this.container.innerHTML="")}},{key:"GetRandomNumberBetween",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}]),n}(y["b"]);n("d123");const F=I()(M,[["render",x]]);var T=F,D=function(e){return Object(a["j"])("data-v-2738e1b1"),e=e(),Object(a["h"])(),e},_={class:"frame-container"},G=D((function(){return Object(a["d"])("div",{class:"top-frame"},null,-1)})),H=D((function(){return Object(a["d"])("div",{class:"bottom-frame"},null,-1)})),W=D((function(){return Object(a["d"])("div",{class:"left-frame"},null,-1)})),U=D((function(){return Object(a["d"])("div",{class:"right-frame"},null,-1)})),Y=[G,H,W,U];function z(e,t,n,i,c,o){return Object(a["g"])(),Object(a["c"])("div",_,Y)}var J=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(v["a"])(this,n),e=t.apply(this,arguments),e.animationClass="animate",e.animationDelay=500,e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;window.addEventListener("hashchange",(function(){return e.SetAnimationsForCurrentPage()})),window.addEventListener("load",(function(){return e.SetAnimationsForCurrentPage(0)}))}},{key:"SetAnimationsForCurrentPage",value:function(e){var t,n,a,i,c,o=this,s=window.location.hash;switch(null===(t=document.getElementsByClassName("selected-section")[0])||void 0===t||t.classList.remove("selected-section"),s){case"":case"#landing":null===(n=document.getElementById("landing"))||void 0===n||n.classList.add("selected-section");break;case"#about":null===(a=document.getElementById("about"))||void 0===a||a.classList.add("selected-section"),this.RemoveFrameAnimations("about"),setTimeout((function(){return o.ApplyFrameAnimations("about")}),null!==e&&void 0!==e?e:this.animationDelay);break;case"#dark-souls-checklist":null===(i=document.getElementById("dark-souls-checklist"))||void 0===i||i.classList.add("selected-section"),this.RemoveFrameAnimations("dark-souls-checklist"),setTimeout((function(){return o.ApplyFrameAnimations("dark-souls-checklist")}),null!==e&&void 0!==e?e:this.animationDelay);break;case"#contact":null===(c=document.getElementById("contact"))||void 0===c||c.classList.add("selected-section"),this.RemoveFrameAnimations("contact"),setTimeout((function(){return o.ApplyFrameAnimations("contact")}),null!==e&&void 0!==e?e:this.animationDelay);break}}},{key:"RemoveFrameAnimations",value:function(e){var t,n,a,i,c=document.getElementById(e);null===c||void 0===c||null===(t=c.getElementsByClassName("top-frame")[0])||void 0===t||t.classList.remove(this.animationClass),null===c||void 0===c||null===(n=c.getElementsByClassName("bottom-frame")[0])||void 0===n||n.classList.remove(this.animationClass),null===c||void 0===c||null===(a=c.getElementsByClassName("left-frame")[0])||void 0===a||a.classList.remove(this.animationClass),null===c||void 0===c||null===(i=c.getElementsByClassName("right-frame")[0])||void 0===i||i.classList.remove(this.animationClass)}},{key:"ApplyFrameAnimations",value:function(e){var t,n,a,i,c=document.getElementById(e);null===c||void 0===c||null===(t=c.getElementsByClassName("top-frame")[0])||void 0===t||t.classList.add(this.animationClass),null===c||void 0===c||null===(n=c.getElementsByClassName("bottom-frame")[0])||void 0===n||n.classList.add(this.animationClass),null===c||void 0===c||null===(a=c.getElementsByClassName("left-frame")[0])||void 0===a||a.classList.add(this.animationClass),null===c||void 0===c||null===(i=c.getElementsByClassName("right-frame")[0])||void 0===i||i.classList.add(this.animationClass)}}]),n}(y["b"]);n("3ac3");const K=I()(J,[["render",z],["__scopeId","data-v-2738e1b1"]]);var Q=K,V=function(){function e(){var t=this;Object(v["a"])(this,e),this.scrollDelay=500,this.scrolling=!1,this.touchStart=0,window.addEventListener("wheel",(function(e){return t.WheelScroll(e)}),{passive:!1}),window.addEventListener("keydown",(function(e){return t.KeyScroll(e)})),window.addEventListener("touchstart",(function(e){return t.TouchStart(e)}),{passive:!1}),window.addEventListener("touchend",(function(e){return t.TouchScroll(e)}),{passive:!1}),window.addEventListener("resize",this.RefreshHash)}return Object(f["a"])(e,[{key:"WheelScroll",value:function(e){e.preventDefault(),this.ScrollBetweenSections(e.deltaY>0)}},{key:"KeyScroll",value:function(e){var t=e.key;"ArrowUp"!==t&&"ArrowDown"!==t||this.ScrollBetweenSections("ArrowDown"===t)}},{key:"TouchStart",value:function(e){e.preventDefault(),this.touchStart=e.changedTouches[0].pageY}},{key:"TouchScroll",value:function(e){e.preventDefault(),this.ScrollBetweenSections(e.changedTouches[0].pageY<this.touchStart)}},{key:"ScrollBetweenSections",value:function(e){var t=this;if(!this.scrolling){this.scrolling=!0,setTimeout((function(){return t.scrolling=!1}),this.scrollDelay);var n=window.location.hash;if(e)switch(n){case"":case"#landing":window.location.hash="#about";break;case"#about":window.location.hash="#dark-souls-checklist";break;case"#dark-souls-checklist":window.location.hash="#contact";break}else switch(n){case"#about":window.location.hash="#landing";break;case"#dark-souls-checklist":window.location.hash="#about";break;case"#contact":window.location.hash="#dark-souls-checklist";break}}}},{key:"RefreshHash",value:function(){var e=window.location.hash;window.location.hash="",window.location.hash=e}}]),e}(),q=function(e){Object(m["a"])(n,e);var t=Object(b["a"])(n);function n(){return Object(v["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"mounted",value:function(){new V}}]),n}(y["b"]);q=Object(p["a"])([Object(y["a"])({components:{Frame:Q,Particles:T,PageIndicator:R}})],q);var X=q;n("0ff1");const Z=I()(X,[["render",h]]);var $=Z;Object(a["b"])($).mount("#app")},d123:function(e,t,n){"use strict";n("d4ba")},d4ba:function(e,t,n){}});
//# sourceMappingURL=app.25ef6775.js.map