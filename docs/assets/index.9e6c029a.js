(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function b(){}function D(e){return e()}function O(){return Object.create(null)}function v(e){e.forEach(D)}function M(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function q(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function C(){return B(" ")}function G(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function N(e,t){e.value=t==null?"":t}let E;function g(e){E=e}const m=[],S=[],$=[],j=[],H=Promise.resolve();let k=!1;function J(){k||(k=!0,H.then(F))}function w(e){$.push(e)}const x=new Set;let y=0;function F(){const e=E;do{for(;y<m.length;){const t=m[y];y++,g(t),Q(t.$$)}for(g(null),m.length=0,y=0;S.length;)S.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];x.has(n)||(x.add(n),n())}$.length=0}while(m.length);for(;j.length;)j.pop()();k=!1,x.clear(),g(e)}function Q(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(w)}}const R=new Set;function U(e,t){e&&e.i&&(R.delete(e),e.i(t))}function W(e,t,n,i){const{fragment:r,on_mount:o,on_destroy:c,after_update:f}=e.$$;r&&r.m(t,n),i||w(()=>{const l=o.map(D).filter(M);c?c.push(...l):v(l),e.$$.on_mount=[]}),f.forEach(w)}function X(e,t){const n=e.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(m.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,i,r,o,c,f=[-1]){const l=E;g(e);const s=e.$$={fragment:null,ctx:null,props:o,update:b,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:O(),dirty:f,skip_bound:!1,root:t.target||l.$$.root};c&&c(s.root);let _=!1;if(s.ctx=n?n(e,t.props||{},(u,d,...A)=>{const L=A.length?A[0]:d;return s.ctx&&r(s.ctx[u],s.ctx[u]=L)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](L),_&&Y(e,u)),d}):[],s.update(),_=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const u=K(t.target);s.fragment&&s.fragment.l(u),u.forEach(I)}else s.fragment&&s.fragment.c();t.intro&&U(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),F()}g(l)}class ee{$destroy(){X(this,1),this.$destroy=b}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function te(e){let t,n,i,r,o,c,f,l,s,_;return{c(){t=h("main"),n=h("h1"),n.textContent="CPF Generator",i=C(),r=h("div"),o=h("h2"),c=B(e[1]),f=C(),l=h("input"),a(n,"class","svelte-16adfsi"),a(o,"class","svelte-16adfsi"),a(l,"name","cpf"),a(l,"maxlength","9"),a(l,"size","6"),a(l,"class","svelte-16adfsi"),a(r,"class","content-wrapper svelte-16adfsi"),a(t,"class","svelte-16adfsi")},m(u,d){z(u,t,d),p(t,n),p(t,i),p(t,r),p(r,o),p(o,c),p(r,f),p(r,l),N(l,e[0]),s||(_=G(l,"input",e[4]),s=!0)},p(u,[d]){d&2&&V(c,u[1]),d&1&&l.value!==u[0]&&N(l,u[0])},i:b,o:b,d(u){u&&I(t),s=!1,_()}}}function P(e){const t=e.length+1;let n=e.split("").reduce((i,r,o)=>i+parseInt(r,10)*(t-o),0);return n%=11,n=n<2?0:11-n,n}function ne(e,t,n){let i="",r="",o="",c="___.___.___-__";function f(){i=this.value,n(0,i)}return e.$$.update=()=>{if(e.$$.dirty&5&&i.length===9&&(n(2,r=P(i).toString()),n(3,o=P(`${i}${r}`).toString())),e.$$.dirty&13){const l=i.length===9?`${r}${o}`:"__";n(1,c=`${i.padEnd(9,"_").match(/.{3}/g).join(".")}-${l}`)}},[i,c,r,o,f]}class re extends ee{constructor(t){super(),Z(this,t,ne,te,T,{})}}new re({target:document.getElementById("app")});