(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{1631:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return V}});var i=n(3552),r=n(7294),o=(n(5444),n(5127)),s=n(3751),c=(n(5827),function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,i){return t[0]===e&&(n=i,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(e,n){var i=t(this.__entries__,e);~i?this.__entries__[i][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,i=t(n,e);~i&&n.splice(i,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];t.call(e,r[1],r[0])}},e}()}()),a="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,h=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),u="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(h):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var f=["top","right","bottom","left","width","height","size","weight"],l="undefined"!=typeof MutationObserver,p=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,i=!1,r=0;function o(){n&&(n=!1,t()),i&&c()}function s(){u(o)}function c(){var t=Date.now();if(n){if(t-r<2)return;i=!0}else n=!0,i=!1,setTimeout(s,e);r=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){a&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){a&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;f.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),d=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},v=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||h},g=O(0,0,0,0);function m(t){return parseFloat(t)||0}function b(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+m(t["border-"+n+"-width"])}),0)}function w(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return g;var i=v(t).getComputedStyle(t),r=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=t["padding-"+r];e[r]=m(o)}return e}(i),o=r.left+r.right,s=r.top+r.bottom,c=m(i.width),a=m(i.height);if("border-box"===i.boxSizing&&(Math.round(c+o)!==e&&(c-=b(i,"left","right")+o),Math.round(a+s)!==n&&(a-=b(i,"top","bottom")+s)),!function(t){return t===v(t).document.documentElement}(t)){var h=Math.round(c+o)-e,u=Math.round(a+s)-n;1!==Math.abs(h)&&(c-=h),1!==Math.abs(u)&&(a-=u)}return O(r.left,r.top,c,a)}var y="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof v(t).SVGGraphicsElement}:function(t){return t instanceof v(t).SVGElement&&"function"==typeof t.getBBox};function _(t){return a?y(t)?function(t){var e=t.getBBox();return O(0,0,e.width,e.height)}(t):w(t):g}function O(t,e,n,i){return{x:t,y:e,width:n,height:i}}var E=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=O(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),C=function(t,e){var n,i,r,o,s,c,a,h=(i=(n=e).x,r=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),d(a,{x:i,y:r,width:o,height:s,top:r,right:i+o,bottom:s+r,left:i}),a);d(this,{target:t,contentRect:h})},x=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new c,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof v(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new E(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof v(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new C(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),k="undefined"!=typeof WeakMap?new WeakMap:new c,j=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=p.getInstance(),i=new x(e,n,this);k.set(this,i)};["observe","unobserve","disconnect"].forEach((function(t){j.prototype[t]=function(){var e;return(e=k.get(this))[t].apply(e,arguments)}}));var M=void 0!==h.ResizeObserver?h.ResizeObserver:j;function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(){return(z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){A(t,e,n[e])}))}return t}function S(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(i=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(a){r=!0,o=a}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T={cursor:"pointer"},H=function(t){var e=t.index,n=t.onClick,i=t.photo,o=t.margin,s=t.direction,c=t.top,a=t.left,h=t.key,u={margin:o,display:"block"};"column"===s&&(u.position="absolute",u.left=a,u.top=c);return r.createElement("img",z({key:h,style:n?R({},u,T):u},i,{onClick:n?function(t){n(t,{photo:i,index:e})}:null}))},D=function(t,e){return e||(e=0),Number(Math.round(t+"e"+e)+"e-"+e)},P=function(t){var e=t.width,n=t.height;return D(e/n,2)};function W(t){this.content=[],this.scoreFunction=t}W.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),t},remove:function(t){for(var e=this.content.length,n=0;n<e;n++)if(this.content[n]==t){var i=this.content.pop();if(n==e-1)break;this.content[n]=i,this.bubbleUp(n),this.sinkDown(n);break}},size:function(){return this.content.length},bubbleUp:function(t){for(var e=this.content[t],n=this.scoreFunction(e);t>0;){var i=Math.floor((t+1)/2)-1,r=this.content[i];if(n>=this.scoreFunction(r))break;this.content[i]=e,this.content[t]=r,t=i}},sinkDown:function(t){for(var e=this.content.length,n=this.content[t],i=this.scoreFunction(n);;){var r=2*(t+1),o=r-1,s=null;if(o<e){var c=this.content[o],a=this.scoreFunction(c);a<i&&(s=o)}if(r<e){var h=this.content[r];this.scoreFunction(h)<(null==s?i:a)&&(s=r)}if(null==s)break;this.content[t]=this.content[s],this.content[s]=n,t=s}}};var F=function(t,e,n){return function(t,e){for(var n=[],i=e;i;)n.push(i),t[i],i=t[i];return n.reverse()}(function(t,e,n){var i={},r={},o={};o[e]=0;var s=new W((function(t){return t.weight}));for(s.push({id:e,weight:0});s.size();){var c=s.pop(),a=c.id;if(!r[a]){var h=t(a)||{};for(var u in r[a]=1,h){var f=c.weight+h[u];(void 0===o[u]||o[u]>f)&&(o[u]=f,s.push({id:u,weight:f}),i[u]=a)}}}if(void 0===o[n])throw new Error("There is no path from ".concat(e," to ").concat(n));return i}(t,e,n),n)},L=function(t,e,n){return(e-t.length*(2*n))/t.reduce((function(t,e){return t+P(e)}),0)},I=function(t,e,n,i,r,o){var s=t.slice(e,n),c=L(s,i,o);return Math.pow(Math.abs(c-r),2)},N=function(t){var e=t.containerWidth,n=t.limitNodeSearch,i=t.targetRowHeight,r=t.margin,o=t.photos,s=function(t,e,n,i,r){return function(o){var s={};s[+(o=+o)]=0;for(var c=o+1;c<n.length+1&&!(c-o>i);++c)s[c.toString()]=I(n,o,c,e,t,r);return s}}(i,e,o,n,r),c=F(s,"0",o.length);c=c.map((function(t){return+t}));for(var a=1;a<c.length;++a)for(var h=o.slice(c[a-1],c[a]),u=L(h,e,r),f=c[a-1];f<c[a];++f)o[f].width=D(u*P(o[f]),1),o[f].height=u;return o},G=r.memo((function(t){var e=t.photos,n=t.onClick,i=t.direction,o=t.margin,s=t.limitNodeSearch,c=t.targetRowHeight,a=t.columns,h=t.renderImage,u=q((0,r.useState)(0),2),f=u[0],l=u[1],p=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){var t=null,e=new M((function(e){var n=e[0].contentRect.width;f!==n&&(t=window.requestAnimationFrame((function(){l(Math.floor(n))})))}));return e.observe(p.current),function(){e.disconnect(),window.cancelAnimationFrame(t)}}));var d=function(t,i){var r=i.index;n(t,{index:r,photo:e[r],previous:e[r-1]||null,next:e[r+1]||null})};if(!f)return r.createElement("div",{ref:p}," ");var v,g,m=f-1;"row"===i&&("function"==typeof s&&(s=s(f)),"function"==typeof c&&(c=c(f)),void 0===s&&(s=2,f>=450&&(s=function(t){var e=t.targetRowHeight,n=t.containerWidth;return D(n/e/1.5)+8}({containerWidth:f,targetRowHeight:c}))),v={display:"flex",flexWrap:"wrap",flexDirection:"row"},g=N({containerWidth:m,limitNodeSearch:s,targetRowHeight:c,margin:o,photos:e})),"column"===i&&("function"==typeof a&&(a=a(f)),void 0===a&&(a=1,f>=500&&(a=2),f>=900&&(a=3),f>=1500&&(a=4)),v={position:"relative"},g=function(t){for(var e=t.photos,n=t.columns,i=t.containerWidth,r=t.margin,o=(i-2*r*n)/n,s=e.map((function(t){var e=t.height/t.width*o;return R({},t,{width:D(o,1),height:D(e,1)})})),c=[],a=[],h=0;h<n;h++)c[h]=D(h*(o+2*r),1),a[h]=0;return s.map((function(t){var e=a.reduce((function(t,e,n){return e<a[t]?n:t}),0);t.top=a[e],t.left=c[e],a[e]=a[e]+t.height+2*r;var n=a.reduce((function(t,e,n){return e>a[t]?n:t}),0);return t.containerHeight=a[n],t}))}({containerWidth:m,columns:a,margin:o,photos:e}),v.height=g[g.length-1].containerHeight);var b=h||H;return r.createElement("div",{className:"react-photo-gallery--gallery"},r.createElement("div",{ref:p,style:v},g.map((function(t,e){var r=t.left,s=t.top,c=t.containerHeight,a=S(t,["left","top","containerHeight"]);return b({left:r,top:s,key:t.key||t.src,containerHeight:c,index:e,margin:o,direction:i,onClick:n?d:null,photo:a})}))))}));G.defaultProps={margin:2,direction:"row",targetRowHeight:300};var B=G,U=function(t){t.children;return console.log("pop up!"),r.createElement("div",{class:"modal"},r.createElement("div",{class:"modal_content"},r.createElement("span",{class:"close"},"×"),r.createElement("p",null,"I'm A Pop Up!!!")))},V=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))||this).state={shown:!1},e.togglePop=function(){e.setState({seen:!e.state.seen})},e.test=function(t,n){console.log(n),e.setState({seen:!0})},e}return(0,i.Z)(e,t),e.prototype.render=function(){return r.createElement(o.Z,null,r.createElement(s.Z,{title:"Home"}),r.createElement(B,{photos:Z,margin:5,direction:"column",onClick:this.test}),this.state.shown?r.createElement(U,{toggle:this.togglePop}):null)},e}(r.Component),Z=[{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:926,height:665},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:1,height:1},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:7,height:2},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:1,height:1},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:4,height:3},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:1,height:1},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:3,height:2},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:1,height:1},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:7,height:2},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:1,height:1},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:4,height:3},{src:"https://images.theconversation.com/files/239356/original/file-20181004-52660-1fosymz.jpg?ixlib=rb-1.1.0&rect=121%2C5%2C3214%2C2309&q=45&auto=format&w=926&fit=clip",width:1,height:1}]}}]);
//# sourceMappingURL=component---src-pages-index-js-ae6c87c3b22b98eda8b1.js.map