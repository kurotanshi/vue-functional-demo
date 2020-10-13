(function(t){function n(n){for(var r,i,u=n[0],c=n[1],l=n[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(n);while(p.length)p.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var s=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Current Amount: "+t._s(t.count))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.count,expression:"count",modifiers:{number:!0}}],attrs:{type:"range",min:"100",max:"3500",step:"100"},domProps:{value:t.count},on:{__r:function(n){t.count=t._n(n.target.value)},blur:function(n){return t.$forceUpdate()}}}),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var n="_value"in t?t._value:t.value;return n}));t.current=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"NormalChart"}},[t._v("Normal")]),e("option",{attrs:{value:"FunctionalChart"}},[t._v("Functional")])])]),e("div",[e(t.current,{tag:"component",attrs:{count:t.count}})],1)])},a=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",t._l(t.count,(function(n,r){return e("circleComp",{key:r,attrs:{timer:t.timer,WIDTH:800,HEIGHT:600}})})),1)},u=[],c=(e("a9e3"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("circle",{attrs:{cx:t.cx,cy:t.cy,r:"3",fill:"#FC309D"}})}),l=[],s={props:{timer:Number,WIDTH:Number,HEIGHT:Number},data:function(){var t=this.WIDTH,n=this.HEIGHT,e=Math.random()*t,r=Math.random()*n,o=4*Math.random()-2,a=4*Math.random()-2;return{vx:o,vy:a,cx:e,cy:r}},methods:{move:function(){var t=this.WIDTH,n=this.HEIGHT;(this.cx>t||this.cx<0)&&(this.vx*=-1),(this.cy>n||this.cy<0)&&(this.vy*=-1),this.cy+=this.vy,this.cx+=this.vx}},watch:{timer:function(){this.move()}}},f=s,p=e("2877"),h=Object(p["a"])(f,c,l,!1,null,null,null),m=h.exports,d={components:{circleComp:m},props:{count:{type:Number,default:100}},data:function(){return{timer:0,raf:null}},methods:{render:function(){this.raf&&window.cancelAnimationFrame(this.raf),this.timer=+new Date,this.raf=window.requestAnimationFrame(this.render)}},mounted:function(){this.render()}},v=d,y=Object(p["a"])(v,i,u,!1,null,null,null),b=y.exports,x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",t._l(t.points,(function(t,n){return e("circle",{key:n,attrs:{cx:t.x,cy:t.y,r:"3",fill:"#FC309D"}})})),0)},w=[],_=(e("4160"),e("5530")),g=800,O=600;function j(t){for(var n=[],e=0;e<t;++e)n.push({x:Math.random()*g,y:Math.random()*O,vx:4*Math.random()-2,vy:4*Math.random()-2});function r(){n.forEach(o)}function o(t){(t.x>g||t.x<0)&&(t.vx*=-1),(t.y>O||t.y<0)&&(t.vy*=-1),t.y+=t.vy,t.x+=t.vx}return{points:n,step:r}}var H={props:{count:{type:Number,default:100}},data:function(){var t=j(this.count);return Object(_["a"])({raf:null},t)},watch:{count:function(t){var n=j(t);this.points=n.points,this.step=n.step}},methods:{render:function(){this.raf&&window.cancelAnimationFrame(this.raf),this.raf=window.requestAnimationFrame(this.render),this.step()}},created:function(){this.raf=window.requestAnimationFrame(this.render)}},M=H,N=Object(p["a"])(M,x,w,!1,null,null,null),T=N.exports,C={name:"App",components:{FunctionalChart:T,NormalChart:b},data:function(){return{current:"NormalChart",count:100}}},F=C,E=(e("034f"),Object(p["a"])(F,o,a,!1,null,null,null)),A=E.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.f71ec63c.js.map