"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function t(e,n,i){function o(a,s){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var n=e[a][1][t];return o(n?n:t)},c,c.exports,t,e,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,e,n){!function(t,i){"function"==typeof define&&define.amd?define(i):"object"===("undefined"==typeof n?"undefined":_typeof(n))?e.exports=i():t.NProgress=i()}(this,function(){function t(t,e,n){return t<e?e:t>n?n:t}function e(t){return 100*(-1+t)}function n(t,n,i){var o;return o="translate3d"===c.positionUsing?{transform:"translate3d("+e(t)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(t)+"%,0)"}:{"margin-left":e(t)+"%"},o.transition="all "+n+"ms "+i,o}function i(t,e){var n="string"==typeof t?t:a(t);return n.indexOf(" "+e+" ")>=0}function o(t,e){var n=a(t),o=n+e;i(n,e)||(t.className=o.substring(1))}function r(t,e){var n,o=a(t);i(t,e)&&(n=o.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function a(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function s(t){t&&t.parentNode&&t.parentNode.removeChild(t)}var l={};l.version="0.2.0";var c=l.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};l.configure=function(t){var e,n;for(e in t)n=t[e],void 0!==n&&t.hasOwnProperty(e)&&(c[e]=n);return this},l.status=null,l.set=function(e){var i=l.isStarted();e=t(e,c.minimum,1),l.status=1===e?null:e;var o=l.render(!i),r=o.querySelector(c.barSelector),a=c.speed,s=c.easing;return o.offsetWidth,u(function(t){""===c.positionUsing&&(c.positionUsing=l.getPositioningCSS()),d(r,n(e,a,s)),1===e?(d(o,{transition:"none",opacity:1}),o.offsetWidth,setTimeout(function(){d(o,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){l.remove(),t()},a)},a)):setTimeout(t,a)}),this},l.isStarted=function(){return"number"==typeof l.status},l.start=function(){l.status||l.set(0);var t=function e(){setTimeout(function(){l.status&&(l.trickle(),e())},c.trickleSpeed)};return c.trickle&&t(),this},l.done=function(t){return t||l.status?l.inc(.3+.5*Math.random()).set(1):this},l.inc=function(e){var n=l.status;return n?("number"!=typeof e&&(e=(1-n)*t(Math.random()*n,.1,.95)),n=t(n+e,0,.994),l.set(n)):l.start()},l.trickle=function(){return l.inc(Math.random()*c.trickleRate)},function(){var t=0,e=0;l.promise=function(n){return n&&"resolved"!==n.state()?(0===e&&l.start(),t++,e++,n.always(function(){e--,0===e?(t=0,l.done()):l.set((t-e)/t)}),this):this}}(),l.render=function(t){if(l.isRendered())return document.getElementById("nprogress");o(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=c.template;var i,r=n.querySelector(c.barSelector),a=t?"-100":e(l.status||0),u=document.querySelector(c.parent);return d(r,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),c.showSpinner||(i=n.querySelector(c.spinnerSelector),i&&s(i)),u!=document.body&&o(u,"nprogress-custom-parent"),u.appendChild(n),n},l.remove=function(){r(document.documentElement,"nprogress-busy"),r(document.querySelector(c.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&s(t)},l.isRendered=function(){return!!document.getElementById("nprogress")},l.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var u=function(){function t(){var n=e.shift();n&&n(t)}var e=[];return function(n){e.push(n),1==e.length&&t()}}(),d=function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var n,i=o.length,r=t.charAt(0).toUpperCase()+t.slice(1);i--;)if(n=o[i]+r,n in e)return n;return t}function n(n){return n=t(n),r[n]||(r[n]=e(n))}function i(t,e,i){e=n(e),t.style[e]=i}var o=["Webkit","O","Moz","ms"],r={};return function(t,e){var n,o,r=arguments;if(2==r.length)for(n in e)o=e[n],void 0!==o&&e.hasOwnProperty(n)&&i(t,n,o);else i(t,r[1],r[2])}}();return l})},{}],2:[function(t,e,n){/**!
   * Sortable
   * @author	RubaXa   <trash@rubaxa.org>
   * @license MIT
   */
!function(t){"function"==typeof define&&define.amd?define(t):"undefined"!=typeof e&&"undefined"!=typeof e.exports?e.exports=t():window.Sortable=t()}(function(){function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=b({},e),t[F]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0}};for(var i in n)!(i in e)&&(e[i]=n[i]);at(e);for(var o in this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Q,r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),r(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(r(t,"dragover",this),r(t,"dragenter",this)),ot.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),C&&C.state!==e&&(l(C,"display",e?"none":""),e||C.state&&(t.options.group.revertClone?($.insertBefore(C,k),t._animate(S,C)):$.insertBefore(C,S)),C.state=e)}function n(t,e,n){if(t){n=n||z;do if(">*"===e&&t.parentNode===n||m(t,e))return t;while(t=i(t))}return null}function i(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function o(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function r(t,e,n){t.addEventListener(e,n,G)}function a(t,e,n){t.removeEventListener(e,n,G)}function s(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(j," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(j," ")}}function l(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return z.defaultView&&z.defaultView.getComputedStyle?n=z.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function c(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function u(t,e,n,i,o,r,a){t=t||e[F];var s=z.createEvent("Event"),l=t.options,c="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=C,s.oldIndex=r,s.newIndex=a,e.dispatchEvent(s),l[c]&&l[c].call(t,s)}function d(t,e,n,i,o,r,a,s){var l,c,u=t[F],d=u.options.onMove;return l=z.createEvent("Event"),l.initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),d&&(c=d.call(u,l,a)),c}function f(t){t.draggable=!1}function h(){tt=!1}function p(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return e.clientY-(i.top+i.height)>5||e.clientX-(i.left+i.width)>5}function g(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function v(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!m(t,e)||n++;return n}function m(t,e){if(t){e=e.split(".");var n=e.shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function y(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function b(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function _(t){return J?J(t).clone(!0)[0]:K&&K.dom?K.dom(t).cloneNode(!0):t.cloneNode(!0)}function D(t){for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&it.push(i)}}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var S,w,T,C,$,k,E,x,N,O,B,M,R,P,Y,I,X,U,A,L,W={},j=/\s+/g,q=/left|right|inline/,F="Sortable"+(new Date).getTime(),H=window,z=H.document,V=H.parseInt,J=H.jQuery||H.Zepto,K=H.Polymer,G=!1,Q=!!("draggable"in z.createElement("div")),Z=function(t){return!navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(t=z.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),tt=!1,et=Math.abs,nt=Math.min,it=[],ot=[],rt=y(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s,l,c=n[F],u=e.scrollSensitivity,d=e.scrollSpeed,f=t.clientX,h=t.clientY,p=window.innerWidth,g=window.innerHeight;if(N!==n&&(x=e.scroll,N=n,O=e.scrollFn,x===!0)){x=n;do if(x.offsetWidth<x.scrollWidth||x.offsetHeight<x.scrollHeight)break;while(x=x.parentNode)}x&&(i=x,o=x.getBoundingClientRect(),r=(et(o.right-f)<=u)-(et(o.left-f)<=u),a=(et(o.bottom-h)<=u)-(et(o.top-h)<=u)),r||a||(r=(p-f<=u)-(f<=u),a=(g-h<=u)-(h<=u),(r||a)&&(i=H)),W.vx===r&&W.vy===a&&W.el===i||(W.el=i,W.vx=r,W.vy=a,clearInterval(W.pid),i&&(W.pid=setInterval(function(){return l=a?a*d:0,s=r?r*d:0,"function"==typeof O?O.call(c,s,l,t):void(i===H?H.scrollTo(H.pageXOffset+s,H.pageYOffset+l):(i.scrollTop+=l,i.scrollLeft+=s))},24)))}},30),at=function(t){function e(t,e){return void 0!==t&&t!==!0||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==("undefined"==typeof i?"undefined":_typeof(i))||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};t.prototype={constructor:t,_onTapStart:function(t){var e,i=this,o=this.el,r=this.options,a=r.preventOnFilter,s=t.type,l=t.touches&&t.touches[0],c=(l||t).target,d=t.target.shadowRoot&&t.path[0]||c,f=r.filter;if(D(o),!S&&!("mousedown"===s&&0!==t.button||r.disabled)&&(c=n(c,r.draggable,o),c&&E!==c)){if(e=v(c,r.draggable),"function"==typeof f){if(f.call(this,t,c,this))return u(i,d,"filter",c,o,e),void(a&&t.preventDefault())}else if(f&&(f=f.split(",").some(function(t){if(t=n(d,t.trim(),o))return u(i,t,"filter",c,o,e),!0})))return void(a&&t.preventDefault());r.handle&&!n(d,r.handle,o)||this._prepareDragStart(t,l,c,e)}},_prepareDragStart:function(t,e,n,i){var o,a=this,l=a.el,d=a.options,h=l.ownerDocument;n&&!S&&n.parentNode===l&&(U=t,$=l,S=n,w=S.parentNode,k=S.nextSibling,E=n,I=d.group,P=i,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,S.style["will-change"]="transform",o=function(){a._disableDelayedDrag(),S.draggable=a.nativeDraggable,s(S,d.chosenClass,!0),a._triggerDragStart(t,e),u(a,$,"choose",S,$,P)},d.ignore.split(",").forEach(function(t){c(S,t.trim(),f)}),r(h,"mouseup",a._onDrop),r(h,"touchend",a._onDrop),r(h,"touchcancel",a._onDrop),r(h,"pointercancel",a._onDrop),r(h,"selectstart",a),d.delay?(r(h,"mouseup",a._disableDelayedDrag),r(h,"touchend",a._disableDelayedDrag),r(h,"touchcancel",a._disableDelayedDrag),r(h,"mousemove",a._disableDelayedDrag),r(h,"touchmove",a._disableDelayedDrag),r(h,"pointermove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(o,d.delay)):o())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag),a(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){e=e||("touch"==t.pointerType?t:null),e?(U={target:S,clientX:e.clientX,clientY:e.clientY},this._onDragStart(U,"touch")):this.nativeDraggable?(r(S,"dragend",this),r($,"dragstart",this._onDragStart)):this._onDragStart(U,!0);try{z.selection?setTimeout(function(){z.selection.empty()}):window.getSelection().removeAllRanges()}catch(n){}},_dragStarted:function(){if($&&S){var e=this.options;s(S,e.ghostClass,!0),s(S,e.dragClass,!1),t.active=this,u(this,$,"start",S,$,P)}else this._nulling()},_emulateDragOver:function(){if(A){if(this._lastX===A.clientX&&this._lastY===A.clientY)return;this._lastX=A.clientX,this._lastY=A.clientY,Z||l(T,"display","none");var t=z.elementFromPoint(A.clientX,A.clientY),e=t,n=ot.length;if(e)do{if(e[F]){for(;n--;)ot[n]({clientX:A.clientX,clientY:A.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);Z||l(T,"display","")}},_onTouchMove:function(e){if(U){var n=this.options,i=n.fallbackTolerance,o=n.fallbackOffset,r=e.touches?e.touches[0]:e,a=r.clientX-U.clientX+o.x,s=r.clientY-U.clientY+o.y,c=e.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!t.active){if(i&&nt(et(r.clientX-this._lastX),et(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),L=!0,A=r,l(T,"webkitTransform",c),l(T,"mozTransform",c),l(T,"msTransform",c),l(T,"transform",c),e.preventDefault()}},_appendGhost:function(){if(!T){var t,e=S.getBoundingClientRect(),n=l(S),i=this.options;T=S.cloneNode(!0),s(T,i.ghostClass,!1),s(T,i.fallbackClass,!0),s(T,i.dragClass,!0),l(T,"top",e.top-V(n.marginTop,10)),l(T,"left",e.left-V(n.marginLeft,10)),l(T,"width",e.width),l(T,"height",e.height),l(T,"opacity","0.8"),l(T,"position","fixed"),l(T,"zIndex","100000"),l(T,"pointerEvents","none"),i.fallbackOnBody&&z.body.appendChild(T)||$.appendChild(T),t=T.getBoundingClientRect(),l(T,"width",2*e.width-t.width),l(T,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),I.checkPull(this,this,S,t)&&(C=_(S),C.draggable=!1,C.style["will-change"]="",l(C,"display","none"),s(C,this.options.chosenClass,!1),$.insertBefore(C,S),u(this,$,"clone",S)),s(S,i.dragClass,!0),e?("touch"===e?(r(z,"touchmove",this._onTouchMove),r(z,"touchend",this._onDrop),r(z,"touchcancel",this._onDrop),r(z,"pointermove",this._onTouchMove),r(z,"pointerup",this._onDrop)):(r(z,"mousemove",this._onTouchMove),r(z,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,S)),r(z,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(i){var o,r,a,s,c=this.el,u=this.options,f=u.group,g=t.active,v=I===f,m=!1,y=u.sort;if(void 0!==i.preventDefault&&(i.preventDefault(),!u.dragoverBubble&&i.stopPropagation()),!S.animated&&(L=!0,g&&!u.disabled&&(v?y||(s=!$.contains(S)):X===this||(g.lastPullMode=I.checkPull(this,g,S,i))&&f.checkPut(this,g,S,i))&&(void 0===i.rootEl||i.rootEl===this.el))){if(rt(i,u,this.el),tt)return;if(o=n(i.target,u.draggable,c),r=S.getBoundingClientRect(),X!==this&&(X=this,m=!0),s)return e(g,!0),w=$,void(C||k?$.insertBefore(S,C||k):y||$.appendChild(S));if(0===c.children.length||c.children[0]===T||c===i.target&&p(c,i)){if(0!==c.children.length&&c.children[0]!==T&&c===i.target&&(o=c.lastElementChild),o){if(o.animated)return;a=o.getBoundingClientRect()}e(g,v),d($,c,S,r,o,a,i)!==!1&&(S.contains(c)||(c.appendChild(S),w=c),this._animate(r,S),o&&this._animate(a,o))}else if(o&&!o.animated&&o!==S&&void 0!==o.parentNode[F]){B!==o&&(B=o,M=l(o),R=l(o.parentNode)),a=o.getBoundingClientRect();var b=a.right-a.left,_=a.bottom-a.top,D=q.test(M.cssFloat+M.display)||"flex"==R.display&&0===R["flex-direction"].indexOf("row"),E=o.offsetWidth>S.offsetWidth,x=o.offsetHeight>S.offsetHeight,N=(D?(i.clientX-a.left)/b:(i.clientY-a.top)/_)>.5,O=o.nextElementSibling,P=!1;if(D){var Y=S.offsetTop,U=o.offsetTop;P=Y===U?o.previousElementSibling===S&&!E||N&&E:o.previousElementSibling===S||S.previousElementSibling===o?(i.clientY-a.top)/_>.5:U>Y}else m||(P=O!==S&&!x||N&&x);var A=d($,c,S,r,o,a,i,P);A!==!1&&(1!==A&&A!==-1||(P=1===A),tt=!0,setTimeout(h,30),e(g,v),S.contains(c)||(P&&!O?c.appendChild(S):o.parentNode.insertBefore(S,P?O:o)),w=S.parentNode,this._animate(r,S),this._animate(a,o))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),l(e,"transition","none"),l(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,l(e,"transition","all "+n+"ms"),l(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){l(e,"transition",""),l(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(z,"touchmove",this._onTouchMove),a(z,"pointermove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"pointerup",this._onDrop),a(t,"touchcancel",this._onDrop),a(t,"pointercancel",this._onDrop),a(t,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(W.pid),clearTimeout(this._dragStartTimer),a(z,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(z,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(L&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),T&&T.parentNode&&T.parentNode.removeChild(T),$!==w&&"clone"===t.active.lastPullMode||C&&C.parentNode&&C.parentNode.removeChild(C),S&&(this.nativeDraggable&&a(S,"dragend",this),f(S),S.style["will-change"]="",s(S,this.options.ghostClass,!1),s(S,this.options.chosenClass,!1),u(this,$,"unchoose",S,$,P),$!==w?(Y=v(S,i.draggable),Y>=0&&(u(null,w,"add",S,$,P,Y),u(this,$,"remove",S,$,P,Y),u(null,w,"sort",S,$,P,Y),u(this,$,"sort",S,$,P,Y))):S.nextSibling!==k&&(Y=v(S,i.draggable),Y>=0&&(u(this,$,"update",S,$,P,Y),u(this,$,"sort",S,$,P,Y))),t.active&&(null!=Y&&Y!==-1||(Y=P),u(this,$,"end",S,$,P,Y),this.save()))),this._nulling()},_nulling:function(){$=S=w=T=k=C=E=x=N=U=A=L=Y=B=M=X=I=t.active=null,it.forEach(function(t){t.checked=!0}),it.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":S&&(this._onDragOver(t),o(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,r=i.length,a=this.options;o<r;o++)t=i[o],n(t,a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||g(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var r=i.children[o];n(r,this.options.draggable,i)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:(n[t]=e,void("group"===t&&at(n)))},destroy:function(){var t=this.el;t[F]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),a(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),ot.splice(ot.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},r(z,"touchmove",function(e){t.active&&e.preventDefault()});try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){G={capture:!1,passive:!1}}}))}catch(st){}return t.utils={on:r,off:a,css:l,find:c,is:function(t,e){return!!n(t,e,t)},extend:b,throttle:y,closest:n,toggleClass:s,clone:_,index:v},t.create=function(e,n){return new t(e,n)},t.version="1.6.0",t})},{}],3:[function(t,e,n){!function(){function t(t,e,n){return t.splice(e,!n||1+n-e+(!(n<0^e>=0)&&(n<0||-1)*t.length)),t.length}var n=function(){var e,n,i=[],o=-1,r=0,a=!1;return n=function(t,e){return t&&"function"==typeof t[e]?(a=!0,t[e](),a=!1,this):this},{add:function(n){return a?this:(i.splice(o+1,i.length-o),i.push(n),r&&i.length>r&&t(i,0,-(r+1)),o=i.length-1,e&&e(),this)},setCallback:function(t){e=t},undo:function(){var t=i[o];return t?(n(t,"undo"),o-=1,e&&e(),this):this},redo:function(){var t=i[o+1];return t?(n(t,"redo"),o+=1,e&&e(),this):this},clear:function(){var t=i.length;i=[],o=-1,e&&t>0&&e()},hasUndo:function(){return o!==-1},hasRedo:function(){return o<i.length-1},getCommands:function(){return i},getIndex:function(){return o},setLimit:function(t){r=t}}};"function"==typeof define&&"object"===_typeof(define.amd)&&define.amd?define(function(){return n}):"undefined"!=typeof e&&e.exports?e.exports=n:window.UndoManager=n}()},{}],4:[function(t,e,n){var i=t("nprogress"),o=t("sortablejs"),r=t("undo-manager");$(function(){function t(t,e){y.add({undo:function(){return d(t)},redo:function(){return d(e)}})}function e(t){t=t||"[data-autocomplete]",$(t).each(function(){$(this).typeahead("destroy")})}function n(){m.destroy()}function a(t){t=t||"[data-autocomplete]",$(t).each(function(){var t=this;$(t).typeahead({hint:!1,minLength:1,highlight:!1},{name:"linkSuggestions",limit:5,display:"url",templates:{suggestion:function(t){switch(t.type){case"post":return'<div><i class="fa fa-file-text"></i> '+t.label+"</div>";case"tag":return'<div><i class="fa fa-tag"></i> '+t.label+"</div>";case"user":return'<div><i class="fa fa-user"></i> '+t.label+"</div>";case"upload":return'<div><i class="fa fa-file-o"></i> '+t.label+"</div>";default:return"<div>"+t.label+"</div>"}}},source:function(t){return function(e,n){var i=[],o=new RegExp(e,"i");$.each(t,function(t,e){o.test(e.searchText)&&i.push(e)}),n(i)}}(g)})})}function s(){var e=void 0,n=void 0;m=o.create($("#nav-items").get(0),{animation:150,filter:"input, button, .twitter-typeahead",preventOnFilter:!1,onChoose:function(){n=l()},onUpdate:function(){e=l(),t(n,e)}})}function l(){return c(),$("#nav-items").clone()}function c(t){t=t||"[data-autocomplete]",$(t).each(function(){$(this).typeahead("close")})}function u(){var t=[];return $("#nav-items .nav-item").each(function(){var e=$(this).find('input[name="label"]').val(),n=$(this).find('input[name="link"]').val();t.push({label:e,link:n})}),{navigation:t}}function d(t){e(),n(),$("#nav-items").replaceWith(t),a(),s()}function f(t){"undefined"==typeof t&&(t=0===$("#nav-items .nav-item").length),$("#empty").prop("hidden",!t),$("#nav-items").prop("hidden",t)}var h=$("#navigation-form").attr("data-changes-saved"),p=JSON.stringify(u()),g=JSON.parse($("#navigation-form").attr("data-link-suggestions")),v=$("#navigation-form").attr("data-save-confirmation"),m=void 0,y=new r;y.setCallback(function(){$("[data-undo]").prop("disabled",!y.hasUndo()),$("[data-redo]").prop("disabled",!y.hasRedo())}),a(),s(),f(),$(document).on("click","[data-remove]",function(){var e=void 0,n=l();$(this).closest(".nav-item").animateCSS("fadeOut",300,function(){$(this).remove(),e=l(),t(n,e),f()})}),$("[data-create]").on("click",function(){var e=$("#nav-item-template").html(),n=void 0,i=l();f(!1),$(e).appendTo("#nav-items").animateCSS("fadeIn",300,function(){var e=$(this).find('input[name="label"]'),o=$(this).find("[data-autocomplete]");n=l(),t(i,n),a(o),$(e).focus()})}),$(document).on("change","#nav-items :input",function(){var e=this,n=$(e).typeahead("val"),i=e.defaultValue,o=void 0,r=void 0;$(e).typeahead("val",i),r=l(),$(e).typeahead("val",n),e.defaultValue=n,o=l(),t(r,o)}),$("[data-undo]").on("click",function(){return y.undo()}),$("[data-redo]").on("click",function(){return y.redo()}),$(document).on("keydown",function(t){(t.metaKey||t.ctrlKey)&&90===t.keyCode&&(t.shiftKey?y.redo():y.undo())}),$("#navigation-form").ajaxSubmit({before:function(){var t=!1;if($("#nav-items .nav-item").each(function(){var e=this,n=$(e).find('input[name="label"]').val(),i=$(e).find('input[name="link"]').val();$(e).toggleClass("has-warning",!n.length||!i.length),n.length&&i.length||($(e).animateCSS("shake"),t=!0)}),t){var e=$("#nav-items .has-warning:first");return $(e).is(":off-screen")&&$(".main-container").animate({scrollTop:$(e).offset().top-$(e).height()/2+($(".main-container").offset().top-$(window).height()/2)+$(".main-container").scrollTop()},300),!1}i.start()},after:i.done,data:function(){return u()},error:function(t){return $.announce.warning(t.message)},success:function(){p=JSON.stringify(u()),$.announce.success(h)}}),$("[data-save]").on("click",function(){return $("#navigation-form").submit()}),window.onbeforeunload=function(){if(JSON.stringify(u())!==p)return v}})},{nprogress:1,sortablejs:2,"undo-manager":3}]},{},[4]);