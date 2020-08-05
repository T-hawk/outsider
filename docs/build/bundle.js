var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function h(t,n){t.value=null==n?"":n}let $;function g(t){$=t}function v(){const t=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}const I=[],x=[],y=[],b=[],N=Promise.resolve();let E=!1;function w(t){y.push(t)}let T=!1;const _=new Set;function R(){if(!T){T=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];g(n),M(n.$$)}for(I.length=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];_.has(n)||(_.add(n),n())}y.length=0}while(I.length);for(;b.length;)b.pop()();E=!1,T=!1,_.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const C=new Set;let A;function S(t,n){t&&t.i&&(C.delete(t),t.i(n))}function F(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),A.c.push(()=>{C.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function G(t){t&&t.c()}function O(t,e,c){const{fragment:u,on_mount:l,on_destroy:i,after_update:s}=t.$$;u&&u.m(e,c),w(()=>{const e=l.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(w)}function k(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function D(t,n){-1===t.$$.dirty[0]&&(I.push(t),E||(E=!0,N.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(n,r,c,u,l,s,a=[-1]){const f=$;g(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:a};let m=!1;if(p.ctx=c?c(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),m&&D(n,t)),e}):[],p.update(),m=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&S(n.$$.fragment),O(n,r.target,r.anchor),R()}g(f)}class L{$destroy(){k(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function W(n){let e,r,c,$,g,v,I,x,y,b,N,E,w,T;return{c(){e=s("main"),r=s("div"),c=s("h1"),c.textContent="Select the number of players",$=f(),g=s("h1"),v=a(n[0]),I=f(),x=s("input"),y=f(),b=s("br"),N=f(),E=s("button"),E.textContent="NEXT",p(g,"class","white"),p(x,"type","range"),p(x,"class","slider svelte-1lgh3ov"),p(x,"min","4"),p(x,"max","8"),p(E,"class","btn svelte-1lgh3ov"),p(r,"class","card")},m(t,o){l(t,e,o),u(e,r),u(r,c),u(r,$),u(r,g),u(g,v),u(r,I),u(r,x),h(x,n[0]),u(r,y),u(r,b),u(r,N),u(r,E),w||(T=[d(x,"change",n[2]),d(x,"input",n[2]),d(E,"click",n[1])],w=!0)},p(t,[n]){1&n&&m(v,t[0]),1&n&&h(x,t[0])},i:t,o:t,d(t){t&&i(e),w=!1,o(T)}}}function B(t,n,e){const o=v();var{players:r=4}=n;return t.$set=t=>{"players"in t&&e(0,r=t.players)},[r,()=>o("next"),function(){var t;t=this.value,e(0,r=""===t?void 0:+t)}]}class H extends L{constructor(t){super(),j(this,t,B,W,c,{players:0})}}function U(t){let n,e,o=-1!=t[2]&&q();return{c(){o&&o.c(),n=f(),e=s("h2"),e.textContent="Tap to reveal role"},m(t,r){o&&o.m(t,r),l(t,n,r),l(t,e,r)},p(t,e){-1!=t[2]?o||(o=q(),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(t){o&&o.d(t),t&&i(n),t&&i(e)}}}function P(t){let n,e,o,r,c,d,h,$,g,v,I,x=t[0][t[2]]+"",y="commons"!=t[0][t[2]]&&z(t);return{c(){n=s("h1"),e=a(x),o=f(),y&&y.c(),r=f(),c=s("br"),d=f(),h=s("div"),$=s("h3"),$.textContent="Keep looking at the screen for",g=f(),v=s("h1"),I=a(t[3]),p(n,"class","white"),p(h,"class","card-btm")},m(t,i){l(t,n,i),u(n,e),l(t,o,i),y&&y.m(t,i),l(t,r,i),l(t,c,i),l(t,d,i),l(t,h,i),u(h,$),u(h,g),u(h,v),u(v,I)},p(t,n){5&n&&x!==(x=t[0][t[2]]+"")&&m(e,x),"commons"!=t[0][t[2]]?y?y.p(t,n):(y=z(t),y.c(),y.m(r.parentNode,r)):y&&(y.d(1),y=null),8&n&&m(I,t[3])},d(t){t&&i(n),t&&i(o),y&&y.d(t),t&&i(r),t&&i(c),t&&i(d),t&&i(h)}}}function q(t){let n,e,o;return{c(){n=s("h1"),n.textContent="Pass it on",e=f(),o=s("br")},m(t,r){l(t,n,r),l(t,e,r),l(t,o,r)},d(t){t&&i(n),t&&i(e),t&&i(o)}}}function z(t){let n,e,o,r;return{c(){n=s("h2"),e=a("The word is "),o=s("i"),r=a(t[1]),p(o,"class","white")},m(t,c){l(t,n,c),u(n,e),u(n,o),u(o,r)},p(t,n){2&n&&m(r,t[1])},d(t){t&&i(n)}}}function K(n){let e,o,r,c;function a(t,n){return t[4]?P:U}let f=a(n),m=f(n);return{c(){e=s("main"),o=s("div"),m.c(),p(o,"class","card")},m(t,i){l(t,e,i),u(e,o),m.m(o,null),r||(c=d(o,"click",n[5]),r=!0)},p(t,[n]){f===(f=a(t))&&m?m.p(t,n):(m.d(1),m=f(t),m&&(m.c(),m.m(o,null)))},i:t,o:t,d(t){t&&i(e),m.d(),r=!1,c()}}}function X(t,n,e){const o=v();var r,{roles:c=[]}=n,{word:u=""}=n,l=-1,i=0,s=!1;function a(){e(3,i--,i),i<=0&&(clearInterval(r),e(4,s=!1),l>=c.length-1&&o("complete"))}return t.$set=t=>{"roles"in t&&e(0,c=t.roles),"word"in t&&e(1,u=t.word)},[c,u,l,i,s,function(){s||(e(3,i=5),r=setInterval(a,1e3),e(2,l++,l),e(4,s=!0))}]}class J extends L{constructor(t){super(),j(this,t,X,K,c,{roles:0,word:1})}}function Q(n){let e;return{c(){e=s("h1"),e.textContent="Game is complete"},m(t,n){l(t,e,n)},p:t,d(t){t&&i(e)}}}function V(t){let n,e,o,r,c=Math.floor(t[0]/60)+"",f=t[0]%60+"";return{c(){n=s("h1"),e=a(c),o=a(":"),r=a(f)},m(t,c){l(t,n,c),u(n,e),u(n,o),u(n,r)},p(t,n){1&n&&c!==(c=Math.floor(t[0]/60)+"")&&m(e,c),1&n&&f!==(f=t[0]%60+"")&&m(r,f)},d(t){t&&i(n)}}}function Y(n){let e;return{c(){e=s("h1"),e.textContent="Tap to begin game"},m(t,n){l(t,e,n)},p:t,d(t){t&&i(e)}}}function Z(n){let e,o,r,c;function a(t,n){return t[1]==t[2].WAITING?Y:t[1]==t[2].RUNNING?V:t[1]==t[2].FINISHED?Q:void 0}let f=a(n),m=f&&f(n);return{c(){e=s("main"),o=s("div"),m&&m.c(),p(o,"class","card")},m(t,i){l(t,e,i),u(e,o),m&&m.m(o,null),r||(c=d(o,"click",n[3]),r=!0)},p(t,[n]){f===(f=a(t))&&m?m.p(t,n):(m&&m.d(1),m=f&&f(t),m&&(m.c(),m.m(o,null)))},i:t,o:t,d(t){t&&i(e),m&&m.d(),r=!1,c()}}}function tt(t,n,e){const o=v();var r,c=0,u={WAITING:2,RUNNING:1,FINISHED:0},l=u.WAITING;function i(){e(0,c--,c),c<0&&(clearInterval(r),e(0,c=0),e(1,l=u.FINISHED))}return[c,l,u,function(){l==u.WAITING?(e(1,l=u.RUNNING),e(0,c=120),r=setInterval(i,1e3)):l==u.FINISHED&&(e(1,l=u.WAITING),o("complete"))}]}class nt extends L{constructor(t){super(),j(this,t,tt,Z,c,{})}}function et(n){let e,o;return e=new nt({}),e.$on("complete",n[7]),{c(){G(e.$$.fragment)},m(t,n){O(e,t,n),o=!0},p:t,i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){F(e.$$.fragment,t),o=!1},d(t){k(e,t)}}}function ot(t){let n,e;return n=new J({props:{roles:t[1],word:t[3]}}),n.$on("complete",t[6]),{c(){G(n.$$.fragment)},m(t,o){O(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.roles=t[1]),8&e&&(o.word=t[3]),n.$set(o)},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){k(n,t)}}}function rt(t){let n,e,o;function r(n){t[8].call(null,n)}let c={};return void 0!==t[2]&&(c.players=t[2]),n=new H({props:c}),x.push(()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(n,"players",r)),n.$on("next",t[5]),{c(){G(n.$$.fragment)},m(t,e){O(n,t,e),o=!0},p(t,o){const r={};var c;!e&&4&o&&(e=!0,r.players=t[2],c=()=>e=!1,b.push(c)),n.$set(r)},i(t){o||(S(n.$$.fragment,t),o=!0)},o(t){F(n.$$.fragment,t),o=!1},d(t){k(n,t)}}}function ct(t){let n,e,r,c;const u=[rt,ot,et],a=[];function f(t,n){return t[0]==t[4].FORM?0:t[0]==t[4].ROLE_DISTRIB?1:t[0]==t[4].TIMER?2:-1}return~(e=f(t))&&(r=a[e]=u[e](t)),{c(){n=s("main"),r&&r.c()},m(t,o){l(t,n,o),~e&&a[e].m(n,null),c=!0},p(t,[c]){let l=e;e=f(t),e===l?~e&&a[e].p(t,c):(r&&(A={r:0,c:[],p:A},F(a[l],1,1,()=>{a[l]=null}),A.r||o(A.c),A=A.p),~e?(r=a[e],r||(r=a[e]=u[e](t),r.c()),S(r,1),r.m(n,null)):r=null)},i(t){c||(S(r),c=!0)},o(t){F(r),c=!1},d(t){t&&i(n),~e&&a[e].d()}}}function ut(t,n,e){let o={FORM:2,ROLE_DISTRIB:1,TIMER:0},r="master",c="insider",u="commons";var l,i=o.FORM,s=[],a=4;return[i,s,a,l,o,function(){fetch("words.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(t=>t.json()).then(t=>{e(3,l=t[Math.floor(Math.random()*t.length)])}),e(0,i=o.ROLE_DISTRIB),e(1,s=[r,c]);for(let t=2;t<a;t++)s.push(u);!function(t){for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*n),o=t[n];t[n]=t[e],t[e]=o}}(s)},function(){e(0,i=o.TIMER)},function(){e(0,i=o.FORM),e(1,s=[]),e(2,a=4)},function(t){e(2,a=t)}]}return new class extends L{constructor(t){super(),j(this,t,ut,ct,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
