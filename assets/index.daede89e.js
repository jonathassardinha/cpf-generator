(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(u){if(u.ep)return;u.ep=!0;const i=n(u);fetch(u.href,i)}})();function N(){}function X(e){return e()}function J(){return Object.create(null)}function A(e){e.forEach(X)}function ie(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function oe(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function Z(e){return document.createTextNode(e)}function E(){return Z(" ")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return Array.from(e.childNodes)}function Q(e,t){e.value=t==null?"":t}let q;function k(e){q=e}const w=[],S=[],L=[],B=[],fe=Promise.resolve();let F=!1;function ce(){F||(F=!0,fe.then(x))}function M(e){L.push(e)}function de(e){B.push(e)}const D=new Set;let I=0;function x(){const e=q;do{for(;I<w.length;){const t=w[I];I++,k(t),pe(t.$$)}for(k(null),w.length=0,I=0;S.length;)S.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];D.has(n)||(D.add(n),n())}L.length=0}while(w.length);for(;B.length;)B.pop()();F=!1,D.clear(),k(e)}function pe(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const C=new Set;let _e;function ee(e,t){e&&e.i&&(C.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),_e.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ge(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function me(e){e&&e.c()}function te(e,t,n,r){const{fragment:u,on_mount:i,on_destroy:l,after_update:f}=e.$$;u&&u.m(t,n),r||M(()=>{const c=i.map(X).filter(ie);l?l.push(...c):A(c),e.$$.on_mount=[]}),f.forEach(M)}function ne(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(w.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,r,u,i,l,f=[-1]){const c=q;k(e);const o=e.$$={fragment:null,ctx:null,props:i,update:N,not_equal:u,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:J(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};l&&l(o.root);let s=!1;if(o.ctx=n?n(e,t.props||{},(a,h,...m)=>{const $=m.length?m[0]:h;return o.ctx&&u(o.ctx[a],o.ctx[a]=$)&&(!o.skip_bound&&o.bound[a]&&o.bound[a]($),s&&ye(e,a)),h}):[],o.update(),s=!0,A(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const a=ae(t.target);o.fragment&&o.fragment.l(a),a.forEach(j)}else o.fragment&&o.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),x()}k(c)}class ue{$destroy(){ne(this,1),this.$destroy=N}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const u=r.indexOf(n);u!==-1&&r.splice(u,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e,t,n){const r=e.slice();return r[7]=t[n],r[8]=t,r[9]=n,r}function U(e){let t,n=e[9],r,u;function i(){e[4].call(t,e[9])}const l=()=>e[5](t,n),f=()=>e[5](null,n);function c(...o){return e[6](e[9],...o)}return{c(){t=g("input"),_(t,"class","input"),_(t,"name",`input${e[9]}`),_(t,"maxlength","1")},m(o,s){V(o,t,s),Q(t,e[1][e[9]]),l(),r||(u=[T(t,"input",i),T(t,"keydown",c)],r=!0)},p(o,s){e=o,s&2&&t.value!==e[1][e[9]]&&Q(t,e[1][e[9]]),n!==e[9]&&(f(),n=e[9],l())},d(o){o&&j(t),f(),r=!1,A(u)}}}function ve(e){let t,n=e[1],r=[];for(let u=0;u<n.length;u+=1)r[u]=U(R(e,n,u));return{c(){t=g("div");for(let u=0;u<r.length;u+=1)r[u].c();_(t,"class","svelte-11psxx6")},m(u,i){V(u,t,i);for(let l=0;l<r.length;l+=1)r[l].m(t,null)},p(u,[i]){if(i&7){n=u[1];let l;for(l=0;l<n.length;l+=1){const f=R(u,n,l);r[l]?r[l].p(f,i):(r[l]=U(f),r[l].c(),r[l].m(t,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}},i:N,o:N,d(u){u&&j(t),se(r,u)}}}function be(e,t,n){let{numberOfInputs:r=3}=t,{value:u=""}=t,i=Array(r).fill(""),l=Array(r);function f(s){i[s]=this.value,n(1,i)}function c(s,a){S[s?"unshift":"push"](()=>{l[a]=s,n(2,l)})}const o=(s,a)=>{if(a.key==="Backspace")return a.currentTarget.value===""?s===0?void 0:l[s-1].focus():void 0;if(a.key!=="Tab"&&(a.preventDefault(),a.stopPropagation(),!!a.key.match(/^\d$/)&&(n(1,i[s]=a.key,i),s!==r-1)))return l[s+1].focus()};return e.$$set=s=>{"numberOfInputs"in s&&n(0,r=s.numberOfInputs),"value"in s&&n(3,u=s.value)},e.$$.update=()=>{e.$$.dirty&2&&n(3,u=i.join(""))},[r,i,l,u,f,c,o]}class $e extends ue{constructor(t){super(),re(this,t,be,ve,Y,{numberOfInputs:0,value:3})}}function we(e){let t,n,r,u,i,l,f,c,o,s,a,h,m,$,y,G,O,v,P,K;function le(d){e[3](d)}let z={numberOfInputs:9};return e[0]!==void 0&&(z.value=e[0]),l=new $e({props:z}),S.push(()=>ge(l,"value",le)),{c(){t=g("main"),n=g("h1"),n.textContent="CPF Generator",r=E(),u=g("div"),i=g("div"),me(l.$$.fragment),c=E(),o=g("input"),a=E(),h=g("input"),$=E(),y=g("button"),G=Z("Copy"),_(n,"class","svelte-73t1wa"),_(o,"class","input"),o.value=s=e[0].length===9?e[1]:"",o.disabled=!0,_(h,"class","input"),h.value=m=e[0].length===9?e[2]:"",h.disabled=!0,_(i,"class","input-wrapper svelte-73t1wa"),y.disabled=O=e[0].length!==9,_(y,"class","svelte-73t1wa"),_(u,"class","content-wrapper svelte-73t1wa"),_(t,"class","svelte-73t1wa")},m(d,b){V(d,t,b),p(t,n),p(t,r),p(t,u),p(u,i),te(l,i,null),p(i,c),p(i,o),p(i,a),p(i,h),p(u,$),p(u,y),p(y,G),v=!0,P||(K=T(y,"click",e[4]),P=!0)},p(d,[b]){const H={};!f&&b&1&&(f=!0,H.value=d[0],de(()=>f=!1)),l.$set(H),(!v||b&3&&s!==(s=d[0].length===9?d[1]:"")&&o.value!==s)&&(o.value=s),(!v||b&5&&m!==(m=d[0].length===9?d[2]:"")&&h.value!==m)&&(h.value=m),(!v||b&1&&O!==(O=d[0].length!==9))&&(y.disabled=O)},i(d){v||(ee(l.$$.fragment,d),v=!0)},o(d){he(l.$$.fragment,d),v=!1},d(d){d&&j(t),ne(l),P=!1,K()}}}function W(e){const t=e.length+1;let n=e.split("").reduce((r,u,i)=>r+parseInt(u,10)*(t-i),0);return n%=11,n=n<2?0:11-n,n}function ke(e,t,n){let r="",u="",i="";function l(c){r=c,n(0,r)}const f=()=>{navigator.clipboard.writeText(`${r}${u}${i}`)};return e.$$.update=()=>{e.$$.dirty&3&&r.length===9&&(n(1,u=W(r).toString()),n(2,i=W(`${r}${u}`).toString()))},[r,u,i,l,f]}class Ae extends ue{constructor(t){super(),re(this,t,ke,we,Y,{})}}new Ae({target:document.getElementById("app")});