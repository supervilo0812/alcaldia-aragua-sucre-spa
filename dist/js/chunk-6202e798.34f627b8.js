(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6202e798"],{"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),a=n("5530"),i=(n("4b85"),n("2b0e")),o=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],u=["start","end","center"];function d(t,e){return s.reduce((function(n,r){return n[t+Object(c["u"])(r)]=e(),n}),{})}var f=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},l=d("align",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},p=d("justify",(function(){return{type:String,default:null,validator:v}})),g=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},b=d("alignContent",(function(){return{type:String,default:null,validator:g}})),h={align:Object.keys(l),justify:Object.keys(p),alignContent:Object.keys(b)},y={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){var r=y[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var x=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},l),{},{justify:{type:String,default:null,validator:v}},p),{},{alignContent:{type:String,default:null,validator:g}},b),render:function(t,e){var n=e.props,a=e.data,i=e.children,c="";for(var s in n)c+=String(n[s]);var u=x.get(c);return u||function(){var t,e;for(e in u=[],h)h[e].forEach((function(t){var r=n[t],a=m(e,t,r);a&&u.push(a)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(c,u)}(),t(n.tag,Object(o["a"])(a,{staticClass:"row",class:u}),i)}})},"20f6":function(t,e,n){},"4b62":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{staticClass:"fill-height"},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("h1",{staticClass:"text-center"},[t._v("pagina no encontrada")]),r("img",{attrs:{src:n("c785"),alt:""}})])],1)],1)},a=[],i={name:"404",data:function(){return{}}},o=i,c=n("2877"),s=n("6544"),u=n.n(s),d=(n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f6"),n("4b85"),n("a15b"),n("498a"),n("2b0e"));function f(t){return d["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,a=n.data,i=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var o=a.attrs;if(o){a.attrs={};var c=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(a.staticClass+=" ".concat(c.join(" ")))}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),e(r.tag,a,i)}})}var l=n("d9f7"),v=f("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,a=e.data,i=e.children,o=a.attrs;return o&&(a.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),t(r.tag,Object(l["a"])(a,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),i)}}),p=n("f6c4"),g=n("d9bd"),b=p["a"].extend({name:"v-main",created:function(){Object(g["d"])("v-content","v-main",this)},render:function(t){var e=p["a"].options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}}),h=n("0fd9"),y=Object(c["a"])(o,r,a,!1,null,"984d38e6",null);e["default"]=y.exports;u()(y,{VContainer:v,VContent:b,VRow:h["a"]})},"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),o=n("0366"),c=n("19aa"),s=n("2266"),u=n("7dd0"),d=n("2626"),f=n("83ab"),l=n("f183").fastKey,v=n("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var d=t((function(t,r){c(t,d,e),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&s(r,t[u],t,n)})),v=g(e),b=function(t,e,n){var r,a,i=v(t),o=h(t,e);return o?o.value=n:(i.last=o={index:a=l(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=o),r&&(r.next=o),f?i.size++:t.size++,"F"!==a&&(i.index[a]=o)),t},h=function(t,e){var n,r=v(t),a=l(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(d.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=h(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!h(this,t)}}),i(d.prototype,n?{get:function(t){var e=h(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),f&&r(d.prototype,"size",{get:function(){return v(this).size}}),d},setStrong:function(t,e,n){var r=e+" Iterator",a=g(e),i=g(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),o=n("6eeb"),c=n("f183"),s=n("2266"),u=n("19aa"),d=n("861d"),f=n("d039"),l=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),h=g?"set":"add",y=a[t],m=y&&y.prototype,x=y,j={},w=function(t){var e=m[t];o(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!d(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!d(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof y||!(b||m.forEach&&!f((function(){(new y).entries().next()})))))x=n.getConstructor(e,t,g,h),c.REQUIRED=!0;else if(i(t,!0)){var O=new x,k=O[h](b?{}:-0,1)!=O,C=f((function(){O.has(1)})),S=l((function(t){new y(t)})),z=!b&&f((function(){var t=new y,e=5;while(e--)t[h](e,e);return!t.has(-0)}));S||(x=e((function(e,n){u(e,x,t);var r=p(new y,e,x);return void 0!=n&&s(n,r[h],r,g),r})),x.prototype=m,m.constructor=x),(C||z)&&(w("delete"),w("has"),g&&w("get")),(z||k)&&w(h),b&&m.clear&&delete m.clear}return j[t]=x,r({global:!0,forced:x!=y},j),v(x,t),b||n.setStrong(x,t,g),x}},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,o=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(s)throw o}}}}},bd0c:function(t,e,n){},c785:function(t,e,n){t.exports=n.p+"img/DinosaurioConfundido.9c690ef6.png"},d10f:function(t,e,n){"use strict";var r=n("2b0e");e["a"]=r["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("99af"),n("b64b"),n("ac1f"),n("1276"),n("498a");var r=n("5530"),a=n("3835"),i=n("b85c"),o=n("80d2"),c={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(t){var e,n={},r=Object(i["a"])(t.split(c.styleList));try{for(r.s();!(e=r.n()).done;){var s=e.value,u=s.split(c.styleProp),d=Object(a["a"])(u,2),f=d[0],l=d[1];f=f.trim(),f&&("string"===typeof l&&(l=l.trim()),n[Object(o["c"])(f)]=l)}}catch(v){r.e(v)}finally{r.f()}return n}function u(){var t,e={},n=arguments.length;while(n--)for(var a=0,i=Object.keys(arguments[n]);a<i.length;a++)switch(t=i[a],t){case"class":case"directives":arguments[n][t]&&(e[t]=f(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=d(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=l(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]=Object(r["a"])(Object(r["a"])({},arguments[n][t]),e[t]);break;default:e[t]||(e[t]=arguments[n][t])}return e}function d(t,e){return t?e?(t=Object(o["v"])("string"===typeof t?s(t):t),t.concat("string"===typeof e?s(e):e)):t:e}function f(t,e){return e?t&&t?Object(o["v"])(t).concat(e):e:t}function l(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var n=e<0||arguments.length<=e?void 0:arguments[e];for(var r in n)n[r]&&(t[r]?t[r]=[].concat(n[r],t[r]):t[r]=n[r])}return t}},f6c4:function(t,e,n){"use strict";n("bd0c");var r=n("d10f");e["a"]=r["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,n=t.top,r=t.right,a=t.footer,i=t.insetFooter,o=t.bottom,c=t.left;return{paddingTop:"".concat(n+e,"px"),paddingRight:"".concat(r,"px"),paddingBottom:"".concat(a+i+o,"px"),paddingLeft:"".concat(c,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=chunk-6202e798.34f627b8.js.map