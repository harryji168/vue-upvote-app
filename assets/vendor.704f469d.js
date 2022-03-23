var Js=Object.defineProperty;var Di=Object.getOwnPropertySymbols;var Zs=Object.prototype.hasOwnProperty,el=Object.prototype.propertyIsEnumerable;var zi=(e,t,n)=>t in e?Js(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ui=(e,t)=>{for(var n in t||(t={}))Zs.call(t,n)&&zi(e,n,t[n]);if(Di)for(var n of Di(t))el.call(t,n)&&zi(e,n,t[n]);return e};function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nl=Qr(tl);function eo(e){return!!e||e===""}function Jr(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=fe(r)?al(r):Jr(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(fe(e))return e;if(ue(e))return e}}const rl=/;(?![^(]*\))/g,il=/:(.+)/;function al(e){const t={};return e.split(rl).forEach(n=>{if(n){const r=n.split(il);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Zr(e){let t="";if(fe(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=Zr(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const te={},Lt=[],Oe=()=>{},ol=()=>!1,sl=/^on[^a-z]/,Wn=e=>sl.test(e),ei=e=>e.startsWith("onUpdate:"),he=Object.assign,ti=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ll=Object.prototype.hasOwnProperty,W=(e,t)=>ll.call(e,t),U=Array.isArray,tn=e=>Gn(e)==="[object Map]",cl=e=>Gn(e)==="[object Set]",H=e=>typeof e=="function",fe=e=>typeof e=="string",ni=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",to=e=>ue(e)&&H(e.then)&&H(e.catch),fl=Object.prototype.toString,Gn=e=>fl.call(e),ul=e=>Gn(e).slice(8,-1),dl=e=>Gn(e)==="[object Object]",ri=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ml=/-(\w)/g,$e=Vn(e=>e.replace(ml,(t,n)=>n?n.toUpperCase():"")),hl=/\B([A-Z])/g,Ht=Vn(e=>e.replace(hl,"-$1").toLowerCase()),qn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=Vn(e=>e?`on${qn(e)}`:""),un=(e,t)=>!Object.is(e,t),cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},pl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Hi;const gl=()=>Hi||(Hi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let He;class vl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&He&&(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1)}run(t){if(this.active)try{return He=this,t()}finally{He=this.parent}}on(){He=this}off(){He=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function bl(e,t=He){t&&t.active&&t.effects.push(e)}const ii=e=>{const t=new Set(e);return t.w=0,t.n=0,t},no=e=>(e.w&st)>0,ro=e=>(e.n&st)>0,yl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},_l=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];no(i)&&!ro(i)?i.delete(e):t[n++]=i,i.w&=~st,i.n&=~st}t.length=n}},wr=new WeakMap;let Jt=0,st=1;const xr=30;let Le;const gt=Symbol(""),Er=Symbol("");class ai{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bl(this,r)}run(){if(!this.active)return this.fn();let t=Le,n=it;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,it=!0,st=1<<++Jt,Jt<=xr?yl(this):Bi(this),this.fn()}finally{Jt<=xr&&_l(this),st=1<<--Jt,Le=this.parent,it=n,this.parent=void 0}}stop(){this.active&&(Bi(this),this.onStop&&this.onStop(),this.active=!1)}}function Bi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let it=!0;const io=[];function Bt(){io.push(it),it=!1}function Yt(){const e=io.pop();it=e===void 0?!0:e}function ye(e,t,n){if(it&&Le){let r=wr.get(e);r||wr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=ii()),ao(i)}}function ao(e,t){let n=!1;Jt<=xr?ro(e)||(e.n|=st,n=!no(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function Ke(e,t,n,r,i,a){const o=wr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&U(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":U(e)?ri(n)&&s.push(o.get("length")):(s.push(o.get(gt)),tn(e)&&s.push(o.get(Er)));break;case"delete":U(e)||(s.push(o.get(gt)),tn(e)&&s.push(o.get(Er)));break;case"set":tn(e)&&s.push(o.get(gt));break}if(s.length===1)s[0]&&kr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);kr(ii(l))}}function kr(e,t){for(const n of U(e)?e:[...e])(n!==Le||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const wl=Qr("__proto__,__v_isRef,__isVue"),oo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(ni)),xl=oi(),El=oi(!1,!0),kl=oi(!0),Yi=Al();function Al(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let a=0,o=this.length;a<o;a++)ye(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=G(this)[t].apply(this,n);return Yt(),r}}),e}function oi(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Ul:uo:t?fo:co).get(r))return r;const o=U(r);if(!e&&o&&W(Yi,i))return Reflect.get(Yi,i,a);const s=Reflect.get(r,i,a);return(ni(i)?oo.has(i):wl(i))||(e||ye(r,"get",i),t)?s:ce(s)?!o||!ri(i)?s.value:s:ue(s)?e?mo(s):Kt(s):s}}const Cl=so(),Ol=so(!0);function so(e=!1){return function(n,r,i,a){let o=n[r];if(dn(o)&&ce(o)&&!ce(i))return!1;if(!e&&!dn(i)&&(ho(i)||(i=G(i),o=G(o)),!U(n)&&ce(o)&&!ce(i)))return o.value=i,!0;const s=U(n)&&ri(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,i,a);return n===G(a)&&(s?un(i,o)&&Ke(n,"set",r,i):Ke(n,"add",r,i)),l}}function Pl(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ke(e,"delete",t,void 0),r}function Sl(e,t){const n=Reflect.has(e,t);return(!ni(t)||!oo.has(t))&&ye(e,"has",t),n}function Il(e){return ye(e,"iterate",U(e)?"length":gt),Reflect.ownKeys(e)}const lo={get:xl,set:Cl,deleteProperty:Pl,has:Sl,ownKeys:Il},Tl={get:kl,set(e,t){return!0},deleteProperty(e,t){return!0}},Rl=he({},lo,{get:El,set:Ol}),si=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function wn(e,t,n=!1,r=!1){e=e.__v_raw;const i=G(e),a=G(t);t!==a&&!n&&ye(i,"get",t),!n&&ye(i,"get",a);const{has:o}=Xn(i),s=r?si:n?fi:mn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function xn(e,t=!1){const n=this.__v_raw,r=G(n),i=G(e);return e!==i&&!t&&ye(r,"has",e),!t&&ye(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function En(e,t=!1){return e=e.__v_raw,!t&&ye(G(e),"iterate",gt),Reflect.get(e,"size",e)}function Ki(e){e=G(e);const t=G(this);return Xn(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function Wi(e,t){t=G(t);const n=G(this),{has:r,get:i}=Xn(n);let a=r.call(n,e);a||(e=G(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?un(t,o)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function Gi(e){const t=G(this),{has:n,get:r}=Xn(t);let i=n.call(t,e);i||(e=G(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Ke(t,"delete",e,void 0),a}function Vi(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=G(o),l=t?si:e?fi:mn;return!e&&ye(s,"iterate",gt),o.forEach((f,c)=>r.call(i,l(f),l(c),a))}}function An(e,t,n){return function(...r){const i=this.__v_raw,a=G(i),o=tn(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),c=n?si:t?fi:mn;return!t&&ye(a,"iterate",l?Er:gt),{next(){const{value:d,done:m}=f.next();return m?{value:d,done:m}:{value:s?[c(d[0]),c(d[1])]:c(d),done:m}},[Symbol.iterator](){return this}}}}function Je(e){return function(...t){return e==="delete"?!1:this}}function Ml(){const e={get(a){return wn(this,a)},get size(){return En(this)},has:xn,add:Ki,set:Wi,delete:Gi,clear:Vi,forEach:kn(!1,!1)},t={get(a){return wn(this,a,!1,!0)},get size(){return En(this)},has:xn,add:Ki,set:Wi,delete:Gi,clear:Vi,forEach:kn(!1,!0)},n={get(a){return wn(this,a,!0)},get size(){return En(this,!0)},has(a){return xn.call(this,a,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:kn(!0,!1)},r={get(a){return wn(this,a,!0,!0)},get size(){return En(this,!0)},has(a){return xn.call(this,a,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=An(a,!1,!1),n[a]=An(a,!0,!1),t[a]=An(a,!1,!0),r[a]=An(a,!0,!0)}),[e,n,t,r]}const[Nl,Ll,Fl,jl]=Ml();function li(e,t){const n=t?e?jl:Fl:e?Ll:Nl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(W(n,i)&&i in r?n:r,i,a)}const $l={get:li(!1,!1)},Dl={get:li(!1,!0)},zl={get:li(!0,!1)},co=new WeakMap,fo=new WeakMap,uo=new WeakMap,Ul=new WeakMap;function Hl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bl(e){return e.__v_skip||!Object.isExtensible(e)?0:Hl(ul(e))}function Kt(e){return dn(e)?e:ci(e,!1,lo,$l,co)}function Yl(e){return ci(e,!1,Rl,Dl,fo)}function mo(e){return ci(e,!0,Tl,zl,uo)}function ci(e,t,n,r,i){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Bl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Ft(e){return dn(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function dn(e){return!!(e&&e.__v_isReadonly)}function ho(e){return!!(e&&e.__v_isShallow)}function po(e){return Ft(e)||dn(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function go(e){return Mn(e,"__v_skip",!0),e}const mn=e=>ue(e)?Kt(e):e,fi=e=>ue(e)?mo(e):e;function vo(e){it&&Le&&(e=G(e),ao(e.dep||(e.dep=ii())))}function bo(e,t){e=G(e),e.dep&&kr(e.dep)}function ce(e){return!!(e&&e.__v_isRef===!0)}function Kl(e){return yo(e,!1)}function Wl(e){return yo(e,!0)}function yo(e,t){return ce(e)?e:new Gl(e,t)}class Gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:mn(t)}get value(){return vo(this),this._value}set value(t){t=this.__v_isShallow?t:G(t),un(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:mn(t),bo(this))}}function nn(e){return ce(e)?e.value:e}const Vl={get:(e,t,n)=>nn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ce(i)&&!ce(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function _o(e){return Ft(e)?e:new Proxy(e,Vl)}class ql{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ai(t,()=>{this._dirty||(this._dirty=!0,bo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=G(this);return vo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Xl(e,t,n=!1){let r,i;const a=H(e);return a?(r=e,i=Oe):(r=e.get,i=e.set),new ql(r,i,a||!i,n)}Promise.resolve();function at(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){Qn(a,t,n)}return i}function Pe(e,t,n,r){if(H(e)){const a=at(e,t,n,r);return a&&to(a)&&a.catch(o=>{Qn(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Pe(e[a],t,n,r));return i}function Qn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,o,s]);return}}Ql(e,n,i,r)}function Ql(e,t,n,r=!0){console.error(e)}let Nn=!1,Ar=!1;const be=[];let Ye=0;const rn=[];let Zt=null,St=0;const an=[];let tt=null,It=0;const wo=Promise.resolve();let ui=null,Cr=null;function xo(e){const t=ui||wo;return e?t.then(this?e.bind(this):e):t}function Jl(e){let t=Ye+1,n=be.length;for(;t<n;){const r=t+n>>>1;hn(be[r])<e?t=r+1:n=r}return t}function Eo(e){(!be.length||!be.includes(e,Nn&&e.allowRecurse?Ye+1:Ye))&&e!==Cr&&(e.id==null?be.push(e):be.splice(Jl(e.id),0,e),ko())}function ko(){!Nn&&!Ar&&(Ar=!0,ui=wo.then(Oo))}function Zl(e){const t=be.indexOf(e);t>Ye&&be.splice(t,1)}function Ao(e,t,n,r){U(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),ko()}function ec(e){Ao(e,Zt,rn,St)}function tc(e){Ao(e,tt,an,It)}function di(e,t=null){if(rn.length){for(Cr=t,Zt=[...new Set(rn)],rn.length=0,St=0;St<Zt.length;St++)Zt[St]();Zt=null,St=0,Cr=null,di(e,t)}}function Co(e){if(an.length){const t=[...new Set(an)];if(an.length=0,tt){tt.push(...t);return}for(tt=t,tt.sort((n,r)=>hn(n)-hn(r)),It=0;It<tt.length;It++)tt[It]();tt=null,It=0}}const hn=e=>e.id==null?1/0:e.id;function Oo(e){Ar=!1,Nn=!0,di(e),be.sort((n,r)=>hn(n)-hn(r));const t=Oe;try{for(Ye=0;Ye<be.length;Ye++){const n=be[Ye];n&&n.active!==!1&&at(n,null,14)}}finally{Ye=0,be.length=0,Co(),Nn=!1,ui=null,(be.length||rn.length||an.length)&&Oo(e)}}function nc(e,t,...n){const r=e.vnode.props||te;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:m}=r[c]||te;m?i=n.map(g=>g.trim()):d&&(i=n.map(pl))}let s,l=r[s=lr(t)]||r[s=lr($e(t))];!l&&a&&(l=r[s=lr(Ht(t))]),l&&Pe(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(f,e,6,i)}}function Po(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const c=Po(f,t,!0);c&&(s=!0,he(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(r.set(e,null),null):(U(a)?a.forEach(l=>o[l]=null):he(o,a),r.set(e,o),o)}function mi(e,t){return!e||!Wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Ht(t))||W(e,t))}let Fe=null,So=null;function Ln(e){const t=Fe;return Fe=e,So=e&&e.type.__scopeId||null,t}function rc(e,t=Fe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ia(-1);const a=Ln(t),o=e(...i);return Ln(a),r._d&&ia(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:m,setupState:g,ctx:E,inheritAttrs:F}=e;let P,O;const R=Ln(e);try{if(n.shapeFlag&4){const Y=i||r;P=Me(c.call(Y,Y,d,a,g,m,E)),O=l}else{const Y=t;P=Me(Y.length>1?Y(a,{attrs:l,slots:s,emit:f}):Y(a,null)),O=t.props?l:ic(l)}}catch(Y){on.length=0,Qn(Y,e,1),P=ke(pn)}let $=P;if(O&&F!==!1){const Y=Object.keys(O),{shapeFlag:V}=$;Y.length&&V&7&&(o&&Y.some(ei)&&(O=ac(O,o)),$=gn($,O))}return n.dirs&&($.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),P=$,Ln(R),P}const ic=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wn(n))&&((t||(t={}))[n]=e[n]);return t},ac=(e,t)=>{const n={};for(const r in e)(!ei(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function oc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(o[m]!==r[m]&&!mi(f,m))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?qi(r,o,f):!0:!!o;return!1}function qi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!mi(n,a))return!0}return!1}function sc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const lc=e=>e.__isSuspense;function cc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):tc(e)}function Pn(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function ot(e,t,n=!1){const r=le||Fe;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}const Xi={};function jt(e,t,n){return Io(e,t,n)}function Io(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=te){const s=le;let l,f=!1,c=!1;if(ce(e)?(l=()=>e.value,f=ho(e)):Ft(e)?(l=()=>e,r=!0):U(e)?(c=!0,f=e.some(Ft),l=()=>e.map(O=>{if(ce(O))return O.value;if(Ft(O))return Rt(O);if(H(O))return at(O,s,2)})):H(e)?t?l=()=>at(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Pe(e,s,3,[m])}:l=Oe,t&&r){const O=l;l=()=>Rt(O())}let d,m=O=>{d=P.onStop=()=>{at(O,s,4)}};if(vn)return m=Oe,t?n&&Pe(t,s,3,[l(),c?[]:void 0,m]):l(),Oe;let g=c?[]:Xi;const E=()=>{if(!!P.active)if(t){const O=P.run();(r||f||(c?O.some((R,$)=>un(R,g[$])):un(O,g)))&&(d&&d(),Pe(t,s,3,[O,g===Xi?void 0:g,m]),g=O)}else P.run()};E.allowRecurse=!!t;let F;i==="sync"?F=E:i==="post"?F=()=>pe(E,s&&s.suspense):F=()=>{!s||s.isMounted?ec(E):E()};const P=new ai(l,F);return t?n?E():g=P.run():i==="post"?pe(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&ti(s.scope.effects,P)}}function fc(e,t,n){const r=this.proxy,i=fe(e)?e.includes(".")?To(r,e):()=>r[e]:e.bind(r,r);let a;H(t)?a=t:(a=t.handler,n=t);const o=le;Dt(this);const s=Io(i,a.bind(r),n);return o?Dt(o):bt(),s}function To(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Rt(e,t){if(!ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))Rt(e.value,t);else if(U(e))for(let n=0;n<e.length;n++)Rt(e[n],t);else if(cl(e)||tn(e))e.forEach(n=>{Rt(n,t)});else if(dl(e))for(const n in e)Rt(e[n],t);return e}function Ro(e){return H(e)?{setup:e,name:e.name}:e}const Or=e=>!!e.type.__asyncLoader,Mo=e=>e.type.__isKeepAlive;function uc(e,t){No(e,"a",t)}function dc(e,t){No(e,"da",t)}function No(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Jn(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Mo(i.parent.vnode)&&mc(r,t,n,i),i=i.parent}}function mc(e,t,n,r){const i=Jn(t,e,r,!0);Lo(()=>{ti(r[t],i)},n)}function Jn(e,t,n=le,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),Dt(n);const s=Pe(t,n,e,o);return bt(),Yt(),s});return r?i.unshift(a):i.push(a),a}}const qe=e=>(t,n=le)=>(!vn||e==="sp")&&Jn(e,t,n),hc=qe("bm"),pc=qe("m"),gc=qe("bu"),vc=qe("u"),bc=qe("bum"),Lo=qe("um"),yc=qe("sp"),_c=qe("rtg"),wc=qe("rtc");function xc(e,t=le){Jn("ec",e,t)}let Pr=!0;function Ec(e){const t=jo(e),n=e.proxy,r=e.ctx;Pr=!1,t.beforeCreate&&Qi(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:m,beforeUpdate:g,updated:E,activated:F,deactivated:P,beforeDestroy:O,beforeUnmount:R,destroyed:$,unmounted:Y,render:V,renderTracked:ae,renderTriggered:de,errorCaptured:we,serverPrefetch:se,expose:Qe,inheritAttrs:De,components:ze,directives:xt,filters:Et}=t;if(f&&kc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const q=o[Z];H(q)&&(r[Z]=q.bind(n))}if(i){const Z=i.call(n,n);ue(Z)&&(e.data=Kt(Z))}if(Pr=!0,a)for(const Z in a){const q=a[Z],xe=H(q)?q.bind(n,n):H(q.get)?q.get.bind(n,n):Oe,At=!H(q)&&H(q.set)?q.set.bind(n):Oe,Ue=Ne({get:xe,set:At});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Ie=>Ue.value=Ie})}if(s)for(const Z in s)Fo(s[Z],r,n,Z);if(l){const Z=H(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(q=>{Pn(q,Z[q])})}c&&Qi(c,e,"c");function oe(Z,q){U(q)?q.forEach(xe=>Z(xe.bind(n))):q&&Z(q.bind(n))}if(oe(hc,d),oe(pc,m),oe(gc,g),oe(vc,E),oe(uc,F),oe(dc,P),oe(xc,we),oe(wc,ae),oe(_c,de),oe(bc,R),oe(Lo,Y),oe(yc,se),U(Qe))if(Qe.length){const Z=e.exposed||(e.exposed={});Qe.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:xe=>n[q]=xe})})}else e.exposed||(e.exposed={});V&&e.render===Oe&&(e.render=V),De!=null&&(e.inheritAttrs=De),ze&&(e.components=ze),xt&&(e.directives=xt)}function kc(e,t,n=Oe,r=!1){U(e)&&(e=Sr(e));for(const i in e){const a=e[i];let o;ue(a)?"default"in a?o=ot(a.from||i,a.default,!0):o=ot(a.from||i):o=ot(a),ce(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[i]=o}}function Qi(e,t,n){Pe(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fo(e,t,n,r){const i=r.includes(".")?To(n,r):()=>n[r];if(fe(e)){const a=t[e];H(a)&&jt(i,a)}else if(H(e))jt(i,e.bind(n));else if(ue(e))if(U(e))e.forEach(a=>Fo(a,t,n,r));else{const a=H(e.handler)?e.handler.bind(n):t[e.handler];H(a)&&jt(i,a,e)}}function jo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Fn(l,f,o,!0)),Fn(l,t,o)),a.set(t,l),l}function Fn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Fn(e,a,n,!0),i&&i.forEach(o=>Fn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ac[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ac={data:Ji,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:mt,directives:mt,watch:Oc,provide:Ji,inject:Cc};function Ji(e,t){return t?e?function(){return he(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Cc(e,t){return mt(Sr(e),Sr(t))}function Sr(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function mt(e,t){return e?he(he(Object.create(null),e),t):t}function Oc(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function Pc(e,t,n,r=!1){const i={},a={};Mn(a,Zn,1),e.propsDefaults=Object.create(null),$o(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Yl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Sc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=G(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];const g=t[m];if(l)if(W(a,m))g!==a[m]&&(a[m]=g,f=!0);else{const E=$e(m);i[E]=Ir(l,s,E,g,e,!1)}else g!==a[m]&&(a[m]=g,f=!0)}}}else{$o(e,t,i,a)&&(f=!0);let c;for(const d in s)(!t||!W(t,d)&&((c=Ht(d))===d||!W(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(i[d]=Ir(l,s,d,void 0,e,!0)):delete i[d]);if(a!==s)for(const d in a)(!t||!W(t,d)&&!0)&&(delete a[d],f=!0)}f&&Ke(e,"set","$attrs")}function $o(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(On(l))continue;const f=t[l];let c;i&&W(i,c=$e(l))?!a||!a.includes(c)?n[c]=f:(s||(s={}))[c]=f:mi(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=G(n),f=s||te;for(let c=0;c<a.length;c++){const d=a[c];n[d]=Ir(i,l,d,f[d],e,!W(f,d))}}return o}function Ir(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:f}=i;n in f?r=f[n]:(Dt(i),r=f[n]=l.call(null,t),bt())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function Do(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!H(e)){const c=d=>{l=!0;const[m,g]=Do(d,t,!0);he(o,m),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!l)return r.set(e,Lt),Lt;if(U(a))for(let c=0;c<a.length;c++){const d=$e(a[c]);Zi(d)&&(o[d]=te)}else if(a)for(const c in a){const d=$e(c);if(Zi(d)){const m=a[c],g=o[d]=U(m)||H(m)?{type:m}:m;if(g){const E=na(Boolean,g.type),F=na(String,g.type);g[0]=E>-1,g[1]=F<0||E<F,(E>-1||W(g,"default"))&&s.push(d)}}}const f=[o,s];return r.set(e,f),f}function Zi(e){return e[0]!=="$"}function ea(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ta(e,t){return ea(e)===ea(t)}function na(e,t){return U(t)?t.findIndex(n=>ta(n,e)):H(t)&&ta(t,e)?0:-1}const zo=e=>e[0]==="_"||e==="$stable",hi=e=>U(e)?e.map(Me):[Me(e)],Ic=(e,t,n)=>{const r=rc((...i)=>hi(t(...i)),n);return r._c=!1,r},Uo=(e,t,n)=>{const r=e._ctx;for(const i in e){if(zo(i))continue;const a=e[i];if(H(a))t[i]=Ic(i,a,r);else if(a!=null){const o=hi(a);t[i]=()=>o}}},Ho=(e,t)=>{const n=hi(t);e.slots.default=()=>n},Tc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),Mn(t,"_",n)):Uo(t,e.slots={})}else e.slots={},t&&Ho(e,t);Mn(e.slots,Zn,1)},Rc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=te;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(he(i,t),!n&&s===1&&delete i._):(a=!t.$stable,Uo(t,i)),o=t}else t&&(Ho(e,t),o={default:1});if(a)for(const s in i)!zo(s)&&!(s in o)&&delete i[s]};function ft(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(Bt(),Pe(l,n,8,[e.el,s,e,t]),Yt())}}function Bo(){return{app:null,config:{isNativeTag:ol,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mc=0;function Nc(e,t){return function(r,i=null){i!=null&&!ue(i)&&(i=null);const a=Bo(),o=new Set;let s=!1;const l=a.app={_uid:Mc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:nf,get config(){return a.config},set config(f){},use(f,...c){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...c)):H(f)&&(o.add(f),f(l,...c))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,c){return c?(a.components[f]=c,l):a.components[f]},directive(f,c){return c?(a.directives[f]=c,l):a.directives[f]},mount(f,c,d){if(!s){const m=ke(r,i);return m.appContext=a,c&&t?t(m,f):e(m,f,d),s=!0,l._container=f,f.__vue_app__=l,vi(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return a.provides[f]=c,l}};return l}}function Tr(e,t,n,r,i=!1){if(U(e)){e.forEach((m,g)=>Tr(m,t&&(U(t)?t[g]:t),n,r,i));return}if(Or(r)&&!i)return;const a=r.shapeFlag&4?vi(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,c=s.refs===te?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(fe(f)?(c[f]=null,W(d,f)&&(d[f]=null)):ce(f)&&(f.value=null)),H(l))at(l,s,12,[o,c]);else{const m=fe(l),g=ce(l);if(m||g){const E=()=>{if(e.f){const F=m?c[l]:l.value;i?U(F)&&ti(F,a):U(F)?F.includes(a)||F.push(a):m?c[l]=[a]:(l.value=[a],e.k&&(c[e.k]=l.value))}else m?(c[l]=o,W(d,l)&&(d[l]=o)):ce(l)&&(l.value=o,e.k&&(c[e.k]=o))};o?(E.id=-1,pe(E,n)):E()}}}const pe=cc;function Lc(e){return Fc(e)}function Fc(e,t){const n=gl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:m,setScopeId:g=Oe,cloneNode:E,insertStaticContent:F}=e,P=(u,h,p,y=null,b=null,x=null,C=!1,w=null,k=!!h.dynamicChildren)=>{if(u===h)return;u&&!Xt(u,h)&&(y=M(u),Ee(u,b,x,!0),u=null),h.patchFlag===-2&&(k=!1,h.dynamicChildren=null);const{type:_,ref:N,shapeFlag:I}=h;switch(_){case pi:O(u,h,p,y);break;case pn:R(u,h,p,y);break;case ur:u==null&&$(h,p,y,C);break;case Be:xt(u,h,p,y,b,x,C,w,k);break;default:I&1?ae(u,h,p,y,b,x,C,w,k):I&6?Et(u,h,p,y,b,x,C,w,k):(I&64||I&128)&&_.process(u,h,p,y,b,x,C,w,k,ee)}N!=null&&b&&Tr(N,u&&u.ref,x,h||u,!h)},O=(u,h,p,y)=>{if(u==null)r(h.el=s(h.children),p,y);else{const b=h.el=u.el;h.children!==u.children&&f(b,h.children)}},R=(u,h,p,y)=>{u==null?r(h.el=l(h.children||""),p,y):h.el=u.el},$=(u,h,p,y)=>{[u.el,u.anchor]=F(u.children,h,p,y,u.el,u.anchor)},Y=({el:u,anchor:h},p,y)=>{let b;for(;u&&u!==h;)b=m(u),r(u,p,y),u=b;r(h,p,y)},V=({el:u,anchor:h})=>{let p;for(;u&&u!==h;)p=m(u),i(u),u=p;i(h)},ae=(u,h,p,y,b,x,C,w,k)=>{C=C||h.type==="svg",u==null?de(h,p,y,b,x,C,w,k):Qe(u,h,b,x,C,w,k)},de=(u,h,p,y,b,x,C,w)=>{let k,_;const{type:N,props:I,shapeFlag:L,transition:D,patchFlag:K,dirs:ie}=u;if(u.el&&E!==void 0&&K===-1)k=u.el=E(u.el);else{if(k=u.el=o(u.type,x,I&&I.is,I),L&8?c(k,u.children):L&16&&se(u.children,k,null,y,b,x&&N!=="foreignObject",C,w),ie&&ft(u,null,y,"created"),I){for(const ne in I)ne!=="value"&&!On(ne)&&a(k,ne,null,I[ne],x,u.children,y,b,A);"value"in I&&a(k,"value",null,I.value),(_=I.onVnodeBeforeMount)&&Re(_,y,u)}we(k,u,u.scopeId,C,y)}ie&&ft(u,null,y,"beforeMount");const Q=(!b||b&&!b.pendingBranch)&&D&&!D.persisted;Q&&D.beforeEnter(k),r(k,h,p),((_=I&&I.onVnodeMounted)||Q||ie)&&pe(()=>{_&&Re(_,y,u),Q&&D.enter(k),ie&&ft(u,null,y,"mounted")},b)},we=(u,h,p,y,b)=>{if(p&&g(u,p),y)for(let x=0;x<y.length;x++)g(u,y[x]);if(b){let x=b.subTree;if(h===x){const C=b.vnode;we(u,C,C.scopeId,C.slotScopeIds,b.parent)}}},se=(u,h,p,y,b,x,C,w,k=0)=>{for(let _=k;_<u.length;_++){const N=u[_]=w?nt(u[_]):Me(u[_]);P(null,N,h,p,y,b,x,C,w)}},Qe=(u,h,p,y,b,x,C)=>{const w=h.el=u.el;let{patchFlag:k,dynamicChildren:_,dirs:N}=h;k|=u.patchFlag&16;const I=u.props||te,L=h.props||te;let D;p&&ut(p,!1),(D=L.onVnodeBeforeUpdate)&&Re(D,p,h,u),N&&ft(h,u,p,"beforeUpdate"),p&&ut(p,!0);const K=b&&h.type!=="foreignObject";if(_?De(u.dynamicChildren,_,w,p,y,K,x):C||xe(u,h,w,null,p,y,K,x,!1),k>0){if(k&16)ze(w,h,I,L,p,y,b);else if(k&2&&I.class!==L.class&&a(w,"class",null,L.class,b),k&4&&a(w,"style",I.style,L.style,b),k&8){const ie=h.dynamicProps;for(let Q=0;Q<ie.length;Q++){const ne=ie[Q],Ae=I[ne],Ct=L[ne];(Ct!==Ae||ne==="value")&&a(w,ne,Ae,Ct,b,u.children,p,y,A)}}k&1&&u.children!==h.children&&c(w,h.children)}else!C&&_==null&&ze(w,h,I,L,p,y,b);((D=L.onVnodeUpdated)||N)&&pe(()=>{D&&Re(D,p,h,u),N&&ft(h,u,p,"updated")},y)},De=(u,h,p,y,b,x,C)=>{for(let w=0;w<h.length;w++){const k=u[w],_=h[w],N=k.el&&(k.type===Be||!Xt(k,_)||k.shapeFlag&70)?d(k.el):p;P(k,_,N,null,y,b,x,C,!0)}},ze=(u,h,p,y,b,x,C)=>{if(p!==y){for(const w in y){if(On(w))continue;const k=y[w],_=p[w];k!==_&&w!=="value"&&a(u,w,_,k,C,h.children,b,x,A)}if(p!==te)for(const w in p)!On(w)&&!(w in y)&&a(u,w,p[w],null,C,h.children,b,x,A);"value"in y&&a(u,"value",p.value,y.value)}},xt=(u,h,p,y,b,x,C,w,k)=>{const _=h.el=u?u.el:s(""),N=h.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:L,slotScopeIds:D}=h;D&&(w=w?w.concat(D):D),u==null?(r(_,p,y),r(N,p,y),se(h.children,p,N,b,x,C,w,k)):I>0&&I&64&&L&&u.dynamicChildren?(De(u.dynamicChildren,L,p,b,x,C,w),(h.key!=null||b&&h===b.subTree)&&Yo(u,h,!0)):xe(u,h,p,N,b,x,C,w,k)},Et=(u,h,p,y,b,x,C,w,k)=>{h.slotScopeIds=w,u==null?h.shapeFlag&512?b.ctx.activate(h,p,y,C,k):kt(h,p,y,b,x,C,k):oe(u,h,k)},kt=(u,h,p,y,b,x,C)=>{const w=u.component=qc(u,y,b);if(Mo(u)&&(w.ctx.renderer=ee),Xc(w),w.asyncDep){if(b&&b.registerDep(w,Z),!u.el){const k=w.subTree=ke(pn);R(null,k,h,p)}return}Z(w,u,h,p,b,x,C)},oe=(u,h,p)=>{const y=h.component=u.component;if(oc(u,h,p))if(y.asyncDep&&!y.asyncResolved){q(y,h,p);return}else y.next=h,Zl(y.update),y.update();else h.component=u.component,h.el=u.el,y.vnode=h},Z=(u,h,p,y,b,x,C)=>{const w=()=>{if(u.isMounted){let{next:N,bu:I,u:L,parent:D,vnode:K}=u,ie=N,Q;ut(u,!1),N?(N.el=K.el,q(u,N,C)):N=K,I&&cr(I),(Q=N.props&&N.props.onVnodeBeforeUpdate)&&Re(Q,D,N,K),ut(u,!0);const ne=fr(u),Ae=u.subTree;u.subTree=ne,P(Ae,ne,d(Ae.el),M(Ae),u,b,x),N.el=ne.el,ie===null&&sc(u,ne.el),L&&pe(L,b),(Q=N.props&&N.props.onVnodeUpdated)&&pe(()=>Re(Q,D,N,K),b)}else{let N;const{el:I,props:L}=h,{bm:D,m:K,parent:ie}=u,Q=Or(h);if(ut(u,!1),D&&cr(D),!Q&&(N=L&&L.onVnodeBeforeMount)&&Re(N,ie,h),ut(u,!0),I&&z){const ne=()=>{u.subTree=fr(u),z(I,u.subTree,u,b,null)};Q?h.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=fr(u);P(null,ne,p,y,u,b,x),h.el=ne.el}if(K&&pe(K,b),!Q&&(N=L&&L.onVnodeMounted)){const ne=h;pe(()=>Re(N,ie,ne),b)}h.shapeFlag&256&&u.a&&pe(u.a,b),u.isMounted=!0,h=p=y=null}},k=u.effect=new ai(w,()=>Eo(u.update),u.scope),_=u.update=k.run.bind(k);_.id=u.uid,ut(u,!0),_()},q=(u,h,p)=>{h.component=u;const y=u.vnode.props;u.vnode=h,u.next=null,Sc(u,h.props,y,p),Rc(u,h.children,p),Bt(),di(void 0,u.update),Yt()},xe=(u,h,p,y,b,x,C,w,k=!1)=>{const _=u&&u.children,N=u?u.shapeFlag:0,I=h.children,{patchFlag:L,shapeFlag:D}=h;if(L>0){if(L&128){Ue(_,I,p,y,b,x,C,w,k);return}else if(L&256){At(_,I,p,y,b,x,C,w,k);return}}D&8?(N&16&&A(_,b,x),I!==_&&c(p,I)):N&16?D&16?Ue(_,I,p,y,b,x,C,w,k):A(_,b,x,!0):(N&8&&c(p,""),D&16&&se(I,p,y,b,x,C,w,k))},At=(u,h,p,y,b,x,C,w,k)=>{u=u||Lt,h=h||Lt;const _=u.length,N=h.length,I=Math.min(_,N);let L;for(L=0;L<I;L++){const D=h[L]=k?nt(h[L]):Me(h[L]);P(u[L],D,p,null,b,x,C,w,k)}_>N?A(u,b,x,!0,!1,I):se(h,p,y,b,x,C,w,k,I)},Ue=(u,h,p,y,b,x,C,w,k)=>{let _=0;const N=h.length;let I=u.length-1,L=N-1;for(;_<=I&&_<=L;){const D=u[_],K=h[_]=k?nt(h[_]):Me(h[_]);if(Xt(D,K))P(D,K,p,null,b,x,C,w,k);else break;_++}for(;_<=I&&_<=L;){const D=u[I],K=h[L]=k?nt(h[L]):Me(h[L]);if(Xt(D,K))P(D,K,p,null,b,x,C,w,k);else break;I--,L--}if(_>I){if(_<=L){const D=L+1,K=D<N?h[D].el:y;for(;_<=L;)P(null,h[_]=k?nt(h[_]):Me(h[_]),p,K,b,x,C,w,k),_++}}else if(_>L)for(;_<=I;)Ee(u[_],b,x,!0),_++;else{const D=_,K=_,ie=new Map;for(_=K;_<=L;_++){const ve=h[_]=k?nt(h[_]):Me(h[_]);ve.key!=null&&ie.set(ve.key,_)}let Q,ne=0;const Ae=L-K+1;let Ct=!1,Fi=0;const qt=new Array(Ae);for(_=0;_<Ae;_++)qt[_]=0;for(_=D;_<=I;_++){const ve=u[_];if(ne>=Ae){Ee(ve,b,x,!0);continue}let Te;if(ve.key!=null)Te=ie.get(ve.key);else for(Q=K;Q<=L;Q++)if(qt[Q-K]===0&&Xt(ve,h[Q])){Te=Q;break}Te===void 0?Ee(ve,b,x,!0):(qt[Te-K]=_+1,Te>=Fi?Fi=Te:Ct=!0,P(ve,h[Te],p,null,b,x,C,w,k),ne++)}const ji=Ct?jc(qt):Lt;for(Q=ji.length-1,_=Ae-1;_>=0;_--){const ve=K+_,Te=h[ve],$i=ve+1<N?h[ve+1].el:y;qt[_]===0?P(null,Te,p,$i,b,x,C,w,k):Ct&&(Q<0||_!==ji[Q]?Ie(Te,p,$i,2):Q--)}}},Ie=(u,h,p,y,b=null)=>{const{el:x,type:C,transition:w,children:k,shapeFlag:_}=u;if(_&6){Ie(u.component.subTree,h,p,y);return}if(_&128){u.suspense.move(h,p,y);return}if(_&64){C.move(u,h,p,ee);return}if(C===Be){r(x,h,p);for(let I=0;I<k.length;I++)Ie(k[I],h,p,y);r(u.anchor,h,p);return}if(C===ur){Y(u,h,p);return}if(y!==2&&_&1&&w)if(y===0)w.beforeEnter(x),r(x,h,p),pe(()=>w.enter(x),b);else{const{leave:I,delayLeave:L,afterLeave:D}=w,K=()=>r(x,h,p),ie=()=>{I(x,()=>{K(),D&&D()})};L?L(x,K,ie):ie()}else r(x,h,p)},Ee=(u,h,p,y=!1,b=!1)=>{const{type:x,props:C,ref:w,children:k,dynamicChildren:_,shapeFlag:N,patchFlag:I,dirs:L}=u;if(w!=null&&Tr(w,null,p,u,!0),N&256){h.ctx.deactivate(u);return}const D=N&1&&L,K=!Or(u);let ie;if(K&&(ie=C&&C.onVnodeBeforeUnmount)&&Re(ie,h,u),N&6)T(u.component,p,y);else{if(N&128){u.suspense.unmount(p,y);return}D&&ft(u,null,h,"beforeUnmount"),N&64?u.type.remove(u,h,p,b,ee,y):_&&(x!==Be||I>0&&I&64)?A(_,h,p,!1,!0):(x===Be&&I&384||!b&&N&16)&&A(k,h,p),y&&sr(u)}(K&&(ie=C&&C.onVnodeUnmounted)||D)&&pe(()=>{ie&&Re(ie,h,u),D&&ft(u,null,h,"unmounted")},p)},sr=u=>{const{type:h,el:p,anchor:y,transition:b}=u;if(h===Be){v(p,y);return}if(h===ur){V(u);return}const x=()=>{i(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:w}=b,k=()=>C(p,x);w?w(u.el,x,k):k()}else x()},v=(u,h)=>{let p;for(;u!==h;)p=m(u),i(u),u=p;i(h)},T=(u,h,p)=>{const{bum:y,scope:b,update:x,subTree:C,um:w}=u;y&&cr(y),b.stop(),x&&(x.active=!1,Ee(C,u,h,p)),w&&pe(w,h),pe(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},A=(u,h,p,y=!1,b=!1,x=0)=>{for(let C=x;C<u.length;C++)Ee(u[C],h,p,y,b)},M=u=>u.shapeFlag&6?M(u.component.subTree):u.shapeFlag&128?u.suspense.next():m(u.anchor||u.el),X=(u,h,p)=>{u==null?h._vnode&&Ee(h._vnode,null,null,!0):P(h._vnode||null,u,h,null,null,null,p),Co(),h._vnode=u},ee={p:P,um:Ee,m:Ie,r:sr,mt:kt,mc:se,pc:xe,pbc:De,n:M,o:e};let B,z;return t&&([B,z]=t(ee)),{render:X,hydrate:B,createApp:Nc(X,B)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Yo(e,t,n=!1){const r=e.children,i=t.children;if(U(r)&&U(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=nt(i[a]),s.el=o.el),n||Yo(o,s))}}function jc(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const $c=e=>e.__isTeleport,Ko="components";function Tm(e,t){return zc(Ko,e,!0,t)||e}const Dc=Symbol();function zc(e,t,n=!0,r=!1){const i=Fe||le;if(i){const a=i.type;if(e===Ko){const s=ef(a);if(s&&(s===t||s===$e(t)||s===qn($e(t))))return a}const o=ra(i[e]||a[e],t)||ra(i.appContext[e],t);return!o&&r?a:o}}function ra(e,t){return e&&(e[t]||e[$e(t)]||e[qn($e(t))])}const Be=Symbol(void 0),pi=Symbol(void 0),pn=Symbol(void 0),ur=Symbol(void 0),on=[];let vt=null;function Rm(e=!1){on.push(vt=e?null:[])}function Uc(){on.pop(),vt=on[on.length-1]||null}let jn=1;function ia(e){jn+=e}function Wo(e){return e.dynamicChildren=jn>0?vt||Lt:null,Uc(),jn>0&&vt&&vt.push(e),e}function Mm(e,t,n,r,i,a){return Wo(Vo(e,t,n,r,i,a,!0))}function Nm(e,t,n,r,i){return Wo(ke(e,t,n,r,i,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Zn="__vInternal",Go=({key:e})=>e!=null?e:null,Sn=({ref:e,ref_key:t,ref_for:n})=>e!=null?fe(e)||ce(e)||H(e)?{i:Fe,r:e,k:t,f:!!n}:e:null;function Vo(e,t=null,n=null,r=0,i=null,a=e===Be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Go(t),ref:t&&Sn(t),scopeId:So,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return s?(gi(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),jn>0&&!o&&vt&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&vt.push(l),l}const ke=Hc;function Hc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Dc)&&(e=pn),Rr(e)){const s=gn(e,t,!0);return n&&gi(s,n),s}if(tf(e)&&(e=e.__vccOpts),t){t=Bc(t);let{class:s,style:l}=t;s&&!fe(s)&&(t.class=Zr(s)),ue(l)&&(po(l)&&!U(l)&&(l=he({},l)),t.style=Jr(l))}const o=fe(e)?1:lc(e)?128:$c(e)?64:ue(e)?4:H(e)?2:0;return Vo(e,t,n,r,i,o,a,!0)}function Bc(e){return e?po(e)||Zn in e?he({},e):e:null}function gn(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?Kc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Go(s),ref:t&&t.ref?n&&i?U(i)?i.concat(Sn(t)):[i,Sn(t)]:Sn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gn(e.ssContent),ssFallback:e.ssFallback&&gn(e.ssFallback),el:e.el,anchor:e.anchor}}function Yc(e=" ",t=0){return ke(pi,null,e,t)}function Me(e){return e==null||typeof e=="boolean"?ke(pn):U(e)?ke(Be,null,e.slice()):typeof e=="object"?nt(e):ke(pi,null,String(e))}function nt(e){return e.el===null||e.memo?e:gn(e)}function gi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),gi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Zn in t)?t._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Fe},n=32):(t=String(t),r&64?(n=16,t=[Yc(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Zr([t.class,r.class]));else if(i==="style")t.style=Jr([t.style,r.style]);else if(Wn(i)){const a=t[i],o=r[i];o&&a!==o&&!(U(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Re(e,t,n,r=null){Pe(e,t,7,[n,r])}function Lm(e,t,n,r){let i;const a=n&&n[r];if(U(e)||fe(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(ue(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}const Mr=e=>e?qo(e)?vi(e)||e.proxy:Mr(e.parent):null,$n=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mr(e.parent),$root:e=>Mr(e.root),$emit:e=>e.emit,$options:e=>jo(e),$forceUpdate:e=>()=>Eo(e.update),$nextTick:e=>xo.bind(e.proxy),$watch:e=>fc.bind(e)}),Wc={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(r!==te&&W(r,t))return o[t]=1,r[t];if(i!==te&&W(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,a[t];if(n!==te&&W(n,t))return o[t]=4,n[t];Pr&&(o[t]=0)}}const c=$n[t];let d,m;if(c)return t==="$attrs"&&ye(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==te&&W(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,W(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return i!==te&&W(i,t)?(i[t]=n,!0):r!==te&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==te&&W(e,o)||t!==te&&W(t,o)||(s=a[0])&&W(s,o)||W(r,o)||W($n,o)||W(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Gc=Bo();let Vc=0;function qc(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Gc,a={uid:Vc++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new vl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Do(r,i),emitsOptions:Po(r,i),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=nc.bind(null,a),e.ce&&e.ce(a),a}let le=null;const Dt=e=>{le=e,e.scope.on()},bt=()=>{le&&le.scope.off(),le=null};function qo(e){return e.vnode.shapeFlag&4}let vn=!1;function Xc(e,t=!1){vn=t;const{props:n,children:r}=e.vnode,i=qo(e);Pc(e,n,i,t),Tc(e,r);const a=i?Qc(e,t):void 0;return vn=!1,a}function Qc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=go(new Proxy(e.ctx,Wc));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Zc(e):null;Dt(e),Bt();const a=at(r,e,0,[e.props,i]);if(Yt(),bt(),to(a)){if(a.then(bt,bt),t)return a.then(o=>{aa(e,o,t)}).catch(o=>{Qn(o,e,0)});e.asyncDep=a}else aa(e,a,t)}else Xo(e,t)}function aa(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=_o(t)),Xo(e,n)}let oa;function Xo(e,t,n){const r=e.type;if(!e.render){if(!t&&oa&&!r.render){const i=r.template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=he(he({isCustomElement:a,delimiters:s},o),l);r.render=oa(i,f)}}e.render=r.render||Oe}Dt(e),Bt(),Ec(e),Yt(),bt()}function Jc(e){return new Proxy(e.attrs,{get(t,n){return ye(e,"get","$attrs"),t[n]}})}function Zc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Jc(e))},slots:e.slots,emit:e.emit,expose:t}}function vi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(_o(go(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $n)return $n[n](e)}}))}function ef(e){return H(e)&&e.displayName||e.name}function tf(e){return H(e)&&"__vccOpts"in e}const Ne=(e,t)=>Xl(e,t,vn);function Qo(e,t,n){const r=arguments.length;return r===2?ue(t)&&!U(t)?Rr(t)?ke(e,null,[t]):ke(e,t):ke(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),ke(e,t,n))}const nf="3.2.31",rf="http://www.w3.org/2000/svg",ht=typeof document!="undefined"?document:null,sa=ht&&ht.createElement("template"),af={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ht.createElementNS(rf,e):ht.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{sa.innerHTML=r?`<svg>${e}</svg>`:e;const s=sa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function of(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function sf(e,t,n){const r=e.style,i=fe(n);if(n&&!i){for(const a in n)Nr(r,a,n[a]);if(t&&!fe(t))for(const a in t)n[a]==null&&Nr(r,a,"")}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const la=/\s*!important$/;function Nr(e,t,n){if(U(n))n.forEach(r=>Nr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=lf(e,t);la.test(n)?e.setProperty(Ht(r),n.replace(la,""),"important"):e[r]=n}}const ca=["Webkit","Moz","ms"],dr={};function lf(e,t){const n=dr[t];if(n)return n;let r=$e(t);if(r!=="filter"&&r in e)return dr[t]=r;r=qn(r);for(let i=0;i<ca.length;i++){const a=ca[i]+r;if(a in e)return dr[t]=a}return t}const fa="http://www.w3.org/1999/xlink";function cf(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fa,t.slice(6,t.length)):e.setAttributeNS(fa,t,n);else{const a=nl(t);n==null||a&&!eo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function ff(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=eo(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Dn=Date.now,Jo=!1;if(typeof window!="undefined"){Dn()>document.createEvent("Event").timeStamp&&(Dn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Jo=!!(e&&Number(e[1])<=53)}let Lr=0;const uf=Promise.resolve(),df=()=>{Lr=0},mf=()=>Lr||(uf.then(df),Lr=Dn());function hf(e,t,n,r){e.addEventListener(t,n,r)}function pf(e,t,n,r){e.removeEventListener(t,n,r)}function gf(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=vf(t);if(r){const f=a[t]=bf(r,i);hf(e,s,f,l)}else o&&(pf(e,s,o,l),a[t]=void 0)}}const ua=/(?:Once|Passive|Capture)$/;function vf(e){let t;if(ua.test(e)){t={};let n;for(;n=e.match(ua);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ht(e.slice(2)),t]}function bf(e,t){const n=r=>{const i=r.timeStamp||Dn();(Jo||i>=n.attached-1)&&Pe(yf(r,n.value),t,5,[r])};return n.value=e,n.attached=mf(),n}function yf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const da=/^on[a-z]/,_f=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?of(e,r,i):t==="style"?sf(e,n,r):Wn(t)?ei(t)||gf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wf(e,t,r,i))?ff(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cf(e,t,r,i))};function wf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&da.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||da.test(t)&&fe(n)?!1:t in e}const xf=he({patchProp:_f},af);let ma;function Ef(){return ma||(ma=Lc(xf))}const Fm=(...e)=>{const t=Ef().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=kf(r);if(!i)return;const a=t._component;!H(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function kf(e){return fe(e)?document.querySelector(e):e}/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function ha(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ha(Object(n),!0).forEach(function(r){Of(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ha(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function Af(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cf(e,t,n){return t&&pa(e.prototype,t),n&&pa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Of(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bi(e,t){return Sf(e)||Tf(e,t)||Zo(e,t)||Mf()}function er(e){return Pf(e)||If(e)||Zo(e)||Rf()}function Pf(e){if(Array.isArray(e))return Fr(e)}function Sf(e){if(Array.isArray(e))return e}function If(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Zo(e,t){if(!!e){if(typeof e=="string")return Fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fr(e,t)}}function Fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ga=function(){},yi={},es={},ts=null,ns={mark:ga,measure:ga};try{typeof window!="undefined"&&(yi=window),typeof document!="undefined"&&(es=document),typeof MutationObserver!="undefined"&&(ts=MutationObserver),typeof performance!="undefined"&&(ns=performance)}catch{}var Nf=yi.navigator||{},va=Nf.userAgent,ba=va===void 0?"":va,lt=yi,re=es,ya=ts,Cn=ns;lt.document;var Xe=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",rs=~ba.indexOf("MSIE")||~ba.indexOf("Trident/"),We="___FONT_AWESOME___",jr=16,is="fa",as="svg-inline--fa",yt="data-fa-i2svg",$r="data-fa-pseudo-element",Lf="data-fa-pseudo-element-pending",_i="data-prefix",wi="data-icon",_a="fontawesome-i2svg",Ff="async",jf=["HTML","HEAD","STYLE","SCRIPT"],os=function(){try{return!0}catch{return!1}}(),xi={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Un={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ss={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},$f={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Df=/fa[srltdbk\-\ ]/,ls="fa-layers-text",zf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Uf={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},cs=[1,2,3,4,5,6,7,8,9,10],Hf=cs.concat([11,12,13,14,15,16,17,18,19,20]),Bf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yf=[].concat(er(Object.keys(Un)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY]).concat(cs.map(function(e){return"".concat(e,"x")})).concat(Hf.map(function(e){return"w-".concat(e)})),fs=lt.FontAwesomeConfig||{};function Kf(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Gf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gf.forEach(function(e){var t=bi(e,2),n=t[0],r=t[1],i=Wf(Kf(n));i!=null&&(fs[r]=i)})}var Vf={familyPrefix:is,styleDefault:"solid",replacementClass:as,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},sn=S(S({},Vf),fs);sn.autoReplaceSvg||(sn.observeMutations=!1);var j={};Object.keys(sn).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){sn[e]=n,In.forEach(function(r){return r(j)})},get:function(){return sn[e]}})});lt.FontAwesomeConfig=j;var In=[];function qf(e){return In.push(e),function(){In.splice(In.indexOf(e),1)}}var Ze=jr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xf(e){if(!(!e||!Xe)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return re.head.insertBefore(t,r),e}}var Qf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bn(){for(var e=12,t="";e-- >0;)t+=Qf[Math.random()*62|0];return t}function Wt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ei(e){return e.classList?Wt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function us(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(us(e[n]),'" ')},"").trim()}function tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ki(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function Zf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function eu(e){var t=e.transform,n=e.width,r=n===void 0?jr:n,i=e.height,a=i===void 0?jr:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&rs?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var tu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ds(){var e=is,t=as,n=j.familyPrefix,r=j.replacementClass,i=tu;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var wa=!1;function mr(){j.autoAddCss&&!wa&&(Xf(ds()),wa=!0)}var nu={mixout:function(){return{dom:{css:ds,insertCss:mr}}},hooks:function(){return{beforeDOMElementCreation:function(){mr()},beforeI2svg:function(){mr()}}}},Ge=lt||{};Ge[We]||(Ge[We]={});Ge[We].styles||(Ge[We].styles={});Ge[We].hooks||(Ge[We].hooks={});Ge[We].shims||(Ge[We].shims=[]);var Ce=Ge[We],ms=[],ru=function e(){re.removeEventListener("DOMContentLoaded",e),Hn=1,ms.map(function(t){return t()})},Hn=!1;Xe&&(Hn=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),Hn||re.addEventListener("DOMContentLoaded",ru));function iu(e){!Xe||(Hn?setTimeout(e,0):ms.push(e))}function _n(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?us(e):"<".concat(t," ").concat(Jf(r),">").concat(a.map(_n).join(""),"</").concat(t,">")}function xa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var au=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},hr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?au(n,i):n,l,f,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)f=a[l],c=s(c,t[f],f,t);return c};function ou(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Dr(e){var t=ou(e);return t.length===1?t[0].toString(16):null}function su(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ea(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function zr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ea(t);typeof Ce.hooks.addPack=="function"&&!i?Ce.hooks.addPack(e,Ea(t)):Ce.styles[e]=S(S({},Ce.styles[e]||{}),a),e==="fas"&&zr("fa",t)}var ln=Ce.styles,lu=Ce.shims,cu=Object.values(ss),Ai=null,hs={},ps={},gs={},vs={},bs={},fu=Object.keys(xi);function uu(e){return~Yf.indexOf(e)}function du(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!uu(i)?i:null}var ys=function(){var t=function(a){return hr(ln,function(o,s,l){return o[l]=hr(s,a,{}),o},{})};hs=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),ps=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),bs=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in ln||j.autoFetchSvg,r=hr(lu,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});gs=r.names,vs=r.unicodes,Ai=nr(j.styleDefault)};qf(function(e){Ai=nr(e.styleDefault)});ys();function Ci(e,t){return(hs[e]||{})[t]}function mu(e,t){return(ps[e]||{})[t]}function Mt(e,t){return(bs[e]||{})[t]}function _s(e){return gs[e]||{prefix:null,iconName:null}}function hu(e){var t=vs[e],n=Ci("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ct(){return Ai}var Oi=function(){return{prefix:null,iconName:null,rest:[]}};function nr(e){var t=xi[e],n=Un[e]||Un[t],r=e in Ce.styles?e:null;return n||r||null}function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,a=e.reduce(function(o,s){var l=du(j.familyPrefix,s);if(ln[s]?(s=cu.includes(s)?$f[s]:s,i=s,o.prefix=s):fu.indexOf(s)>-1?(i=s,o.prefix=nr(s)):l?o.iconName=l:s!==j.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=i==="fa"?_s(o.iconName):{},c=Mt(o.prefix,o.iconName);f.prefix&&(i=null),o.iconName=f.iconName||c||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!ln.far&&ln.fas&&!j.autoFetchSvg&&(o.prefix="fas")}return o},Oi());return(a.prefix==="fa"||i==="fa")&&(a.prefix=ct()||"fas"),a}var pu=function(){function e(){Af(this,e),this.definitions={}}return Cf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),zr(s,o[s]);var l=ss[s];l&&zr(l,o[s]),ys()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),ka=[],Nt={},$t={},gu=Object.keys($t);function vu(e,t){var n=t.mixoutsTo;return ka=e,Nt={},Object.keys($t).forEach(function(r){gu.indexOf(r)===-1&&delete $t[r]}),ka.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),zn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Nt[o]||(Nt[o]=[]),Nt[o].push(a[o])})}r.provides&&r.provides($t)}),n}function Ur(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Nt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function _t(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $t[e]?$t[e].apply(null,t):void 0}function Hr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ct();if(!!t)return t=Mt(n,t)||t,xa(ws.definitions,n,t)||xa(Ce.styles,n,t)}var ws=new pu,bu=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,_t("noAuto")},yu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(_t("beforeI2svg",t),Ve("pseudoElements2svg",t),Ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,iu(function(){wu({autoReplaceSvgRoot:n}),_t("watch",t)})}},_u={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nr(t[0]);return{prefix:r,iconName:Mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.familyPrefix,"-"))>-1||t.match(Df))){var i=rr(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||ct(),iconName:Mt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=ct();return{prefix:a,iconName:Mt(a,t)||t}}}},_e={noAuto:bu,config:j,dom:yu,parse:_u,library:ws,findIconDefinition:Hr,toHtml:_n},wu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(Ce.styles).length>0||j.autoFetchSvg)&&Xe&&j.autoReplaceSvg&&_e.dom.i2svg({node:r})};function ir(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return _n(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Xe){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xu(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ki(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=tr(S(S({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Eu(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(j.familyPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},i),{},{id:o}),children:r}]}]}function Pi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,m=e.watchable,g=m===void 0?!1:m,E=r.found?r:n,F=E.width,P=E.height,O=i==="fak",R=[j.replacementClass,a?"".concat(j.familyPrefix,"-").concat(a):""].filter(function(se){return d.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(d.classes).join(" "),$={children:[],attributes:S(S({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:R,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(P)})},Y=O&&!~d.classes.indexOf("fa-fw")?{width:"".concat(F/P*16*.0625,"em")}:{};g&&($.attributes[yt]=""),l&&($.children.push({tag:"title",attributes:{id:$.attributes["aria-labelledby"]||"title-".concat(c||bn())},children:[l]}),delete $.attributes.title);var V=S(S({},$),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:S(S({},Y),d.styles)}),ae=r.found&&n.found?Ve("generateAbstractMask",V)||{children:[],attributes:{}}:Ve("generateAbstractIcon",V)||{children:[],attributes:{}},de=ae.children,we=ae.attributes;return V.children=de,V.attributes=we,s?Eu(V):xu(V)}function Aa(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=S(S(S({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[yt]="");var c=S({},o.styles);ki(i)&&(c.transform=eu({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=tr(c);d.length>0&&(f.style=d);var m=[];return m.push({tag:"span",attributes:f,children:[t]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function ku(e){var t=e.content,n=e.title,r=e.extra,i=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=tr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var pr=Ce.styles;function Br(e){var t=e[0],n=e[1],r=e.slice(4),i=bi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Au={found:!1,width:512,height:512};function Cu(e,t){!os&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Yr(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=ct()),new Promise(function(r,i){if(Ve("missingIconAbstract"),n==="fa"){var a=_s(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&pr[t]&&pr[t][e]){var o=pr[t][e];return r(Br(o))}Cu(e,t),r(S(S({},Au),{},{icon:j.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}var Ca=function(){},Kr=j.measurePerformance&&Cn&&Cn.mark&&Cn.measure?Cn:{mark:Ca,measure:Ca},en='FA "6.1.0"',Ou=function(t){return Kr.mark("".concat(en," ").concat(t," begins")),function(){return xs(t)}},xs=function(t){Kr.mark("".concat(en," ").concat(t," ends")),Kr.measure("".concat(en," ").concat(t),"".concat(en," ").concat(t," begins"),"".concat(en," ").concat(t," ends"))},Si={begin:Ou,end:xs},Tn=function(){};function Oa(e){var t=e.getAttribute?e.getAttribute(yt):null;return typeof t=="string"}function Pu(e){var t=e.getAttribute?e.getAttribute(_i):null,n=e.getAttribute?e.getAttribute(wi):null;return t&&n}function Su(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function Iu(){if(j.autoReplaceSvg===!0)return Rn.replace;var e=Rn[j.autoReplaceSvg];return e||Rn.replace}function Tu(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function Ru(e){return re.createElement(e)}function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Tu:Ru:n;if(typeof e=="string")return re.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Es(o,{ceFn:r}))}),i}function Mu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Es(i),n)}),n.getAttribute(yt)===null&&j.keepOriginalSource){var r=re.createComment(Mu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ei(n).indexOf(j.replacementClass))return Rn.replace(t);var i=new RegExp("".concat(j.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===j.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return _n(s)}).join(`
`);n.setAttribute(yt,""),n.innerHTML=o}};function Pa(e){e()}function ks(e,t){var n=typeof t=="function"?t:Tn;if(e.length===0)n();else{var r=Pa;j.mutateApproach===Ff&&(r=lt.requestAnimationFrame||Pa),r(function(){var i=Iu(),a=Si.begin("mutate");e.map(i),a(),n()})}}var Ii=!1;function As(){Ii=!0}function Wr(){Ii=!1}var Bn=null;function Sa(e){if(!!ya&&!!j.observeMutations){var t=e.treeCallback,n=t===void 0?Tn:t,r=e.nodeCallback,i=r===void 0?Tn:r,a=e.pseudoElementsCallback,o=a===void 0?Tn:a,s=e.observeMutationsRoot,l=s===void 0?re:s;Bn=new ya(function(f){if(!Ii){var c=ct();Wt(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Oa(d.addedNodes[0])&&(j.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&j.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Oa(d.target)&&~Bf.indexOf(d.attributeName))if(d.attributeName==="class"&&Pu(d.target)){var m=rr(Ei(d.target)),g=m.prefix,E=m.iconName;d.target.setAttribute(_i,g||c),E&&d.target.setAttribute(wi,E)}else Su(d.target)&&i(d.target)})}}),!!Xe&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nu(){!Bn||Bn.disconnect()}function Lu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Fu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=rr(Ei(e));return i.prefix||(i.prefix=ct()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=mu(i.prefix,e.innerText)||Ci(i.prefix,Dr(e.innerText))),i}function ju(e){var t=Wt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||bn()):(t["aria-hidden"]="true",t.focusable="false")),t}function $u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fu(e),r=n.iconName,i=n.prefix,a=n.rest,o=ju(e),s=Ur("parseNodeAttributes",{},e),l=t.styleParser?Lu(e):[];return S({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Du=Ce.styles;function Cs(e){var t=j.autoReplaceSvg==="nest"?Ia(e,{styleParser:!1}):Ia(e);return~t.extra.classes.indexOf(ls)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=re.documentElement.classList,r=function(d){return n.add("".concat(_a,"-").concat(d))},i=function(d){return n.remove("".concat(_a,"-").concat(d))},a=j.autoFetchSvg?Object.keys(xi):Object.keys(Du),o=[".".concat(ls,":not([").concat(yt,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(yt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Wt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Si.begin("onTree"),f=s.reduce(function(c,d){try{var m=Cs(d);m&&c.push(m)}catch(g){os||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(m){ks(m,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(m){l(),d(m)})})}function zu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cs(e).then(function(n){n&&ks([n],t)})}function Uu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hr(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Hr(i||{})),e(r,S(S({},n),{},{mask:i}))}}var Hu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?je:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,m=d===void 0?null:d,g=n.titleId,E=g===void 0?null:g,F=n.classes,P=F===void 0?[]:F,O=n.attributes,R=O===void 0?{}:O,$=n.styles,Y=$===void 0?{}:$;if(!!t){var V=t.prefix,ae=t.iconName,de=t.icon;return ir(S({type:"icon"},t),function(){return _t("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(m?R["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(E||bn()):(R["aria-hidden"]="true",R.focusable="false")),Pi({icons:{main:Br(de),mask:l?Br(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:ae,transform:S(S({},je),i),symbol:o,title:m,maskId:c,titleId:E,extra:{attributes:R,styles:Y,classes:P}})})}},Bu={mixout:function(){return{icon:Uu(Hu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ta,n.nodeCallback=zu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?re:r,a=n.callback,o=a===void 0?function(){}:a;return Ta(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,m=r.extra;return new Promise(function(g,E){Promise.all([Yr(i,s),c.iconName?Yr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var P=bi(F,2),O=P[0],R=P[1];g([n,Pi({icons:{main:O,mask:R},prefix:s,iconName:i,transform:l,symbol:f,maskId:d,title:a,titleId:o,extra:m,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=tr(s);l.length>0&&(i.style=l);var f;return ki(o)&&(f=Ve("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},Yu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return ir({type:"layer"},function(){_t("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(j.familyPrefix,"-layers")].concat(er(a)).join(" ")},children:o}]})}}}},Ku={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return ir({type:"counter",content:n},function(){return _t("beforeDOMElementCreation",{content:n,params:r}),ku({content:n.toString(),title:a,extra:{attributes:f,styles:d,classes:["".concat(j.familyPrefix,"-layers-counter")].concat(er(s))}})})}}}},Wu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?je:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,m=r.styles,g=m===void 0?{}:m;return ir({type:"text",content:n},function(){return _t("beforeDOMElementCreation",{content:n,params:r}),Aa({content:n,transform:S(S({},je),a),title:s,extra:{attributes:d,styles:g,classes:["".concat(j.familyPrefix,"-layers-text")].concat(er(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(rs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Aa({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Gu=new RegExp('"',"ug"),Ra=[1105920,1112319];function Vu(e){var t=e.replace(Gu,""),n=su(t,0),r=n>=Ra[0]&&n<=Ra[1],i=t.length===2?t[0]===t[1]:!1;return{value:Dr(i?t[0]:t),isSecondary:r||i}}function Ma(e,t){var n="".concat(Lf).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Wt(e.children),o=a.filter(function(ae){return ae.getAttribute($r)===t})[0],s=lt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(zf),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Un[l[2].toLowerCase()]:Uf[f],g=Vu(d),E=g.value,F=g.isSecondary,P=l[0].startsWith("FontAwesome"),O=Ci(m,E),R=O;if(P){var $=hu(E);$.iconName&&$.prefix&&(O=$.iconName,m=$.prefix)}if(O&&!F&&(!o||o.getAttribute(_i)!==m||o.getAttribute(wi)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var Y=$u(),V=Y.extra;V.attributes[$r]=t,Yr(O,m).then(function(ae){var de=Pi(S(S({},Y),{},{icons:{main:ae,mask:Oi()},prefix:m,iconName:R,extra:V,watchable:!0})),we=re.createElement("svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=de.map(function(se){return _n(se)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function qu(e){return Promise.all([Ma(e,"::before"),Ma(e,"::after")])}function Xu(e){return e.parentNode!==document.head&&!~jf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($r)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Na(e){if(!!Xe)return new Promise(function(t,n){var r=Wt(e.querySelectorAll("*")).filter(Xu).map(qu),i=Si.begin("searchPseudoElements");As(),Promise.all(r).then(function(){i(),Wr(),t()}).catch(function(){i(),Wr(),n()})})}var Qu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Na,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?re:r;j.searchPseudoElements&&Na(i)}}},La=!1,Ju={mixout:function(){return{dom:{unwatch:function(){As(),La=!0}}}},hooks:function(){return{bootstrap:function(){Sa(Ur("mutationObserverCallbacks",{}))},noAuto:function(){Nu()},watch:function(n){var r=n.observeMutationsRoot;La?Wr():Sa(Ur("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Zu={mixout:function(){return{parse:{transform:function(n){return Fa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Fa(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:m};return{tag:"g",attributes:S({},g.outer),children:[{tag:"g",attributes:S({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),g.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ed(e){return e.tag==="g"?e.children:[e]}var td={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?rr(i.split(" ").map(function(o){return o.trim()})):Oi();return a.prefix||(a.prefix=ct()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,c=a.icon,d=o.width,m=o.icon,g=Zf({transform:l,containerWidth:d,iconWidth:f}),E={tag:"rect",attributes:S(S({},gr),{},{fill:"white"})},F=c.children?{children:c.children.map(ja)}:{},P={tag:"g",attributes:S({},g.inner),children:[ja(S({tag:c.tag,attributes:S(S({},c.attributes),g.path)},F))]},O={tag:"g",attributes:S({},g.outer),children:[P]},R="mask-".concat(s||bn()),$="clip-".concat(s||bn()),Y={tag:"mask",attributes:S(S({},gr),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,O]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:ed(m)},Y]};return r.push(V,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(R,")")},gr)}),{children:r,attributes:i}}}},nd={provides:function(t){var n=!1;lt.matchMedia&&(n=lt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},rd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},id=[nu,Bu,Yu,Ku,Wu,Qu,Ju,Zu,td,nd,rd];vu(id,{mixoutsTo:_e});_e.noAuto;_e.config;var jm=_e.library;_e.dom;_e.parse;var $m=_e.findIconDefinition;_e.toHtml;_e.icon;_e.layer;_e.text;_e.counter;/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Dm={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"]},zm={prefix:"fas",iconName:"plus",icon:[448,512,[10133,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]};function ad(){return Os().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Os(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const od=typeof Proxy=="function",sd="devtools-plugin:setup",ld="plugin:settings:set";class cd{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const o in t.settings){const s=t.settings[o];r[o]=s.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let a=Ui({},r);try{const o=localStorage.getItem(i),s=JSON.parse(o);Object.assign(a,s)}catch{}this.fallbacks={getSettings(){return a},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}a=o}},n.on(ld,(o,s)=>{o===this.plugin.id&&this.fallbacks.setSettings(s)}),this.proxiedOn=new Proxy({},{get:(o,s)=>this.target?this.target.on[s]:(...l)=>{this.onQueue.push({method:s,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,s)=>this.target?this.target[s]:s==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(s)?(...l)=>(this.targetQueue.push({method:s,args:l,resolve:()=>{}}),this.fallbacks[s](...l)):(...l)=>new Promise(f=>{this.targetQueue.push({method:s,args:l,resolve:f})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function fd(e,t){const n=Os(),r=ad(),i=od&&e.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(sd,e,t);else{const a=i?new cd(e,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:e,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var ud="store";function Gt(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function Ps(e){return e!==null&&typeof e=="object"}function dd(e){return e&&typeof e.then=="function"}function md(e,t){return function(){return e(t)}}function Ss(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Is(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;ar(e,n,[],e._modules.root,!0),Ti(e,n,t)}function Ti(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,a={};Gt(i,function(o,s){a[s]=md(o,e),Object.defineProperty(e.getters,s,{get:function(){return a[s]()},enumerable:!0})}),e._state=Kt({data:t}),e.strict&&bd(e),r&&n&&e._withCommit(function(){r.data=null})}function ar(e,t,n,r,i){var a=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!a&&!i){var s=Ri(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit(function(){s[l]=r.state})}var f=r.context=hd(e,o,n);r.forEachMutation(function(c,d){var m=o+d;pd(e,m,c,f)}),r.forEachAction(function(c,d){var m=c.root?d:o+d,g=c.handler||c;gd(e,m,g,f)}),r.forEachGetter(function(c,d){var m=o+d;vd(e,m,c,f)}),r.forEachChild(function(c,d){ar(e,t,n.concat(d),c,i)})}function hd(e,t,n){var r=t==="",i={dispatch:r?e.dispatch:function(a,o,s){var l=Yn(a,o,s),f=l.payload,c=l.options,d=l.type;return(!c||!c.root)&&(d=t+d),e.dispatch(d,f)},commit:r?e.commit:function(a,o,s){var l=Yn(a,o,s),f=l.payload,c=l.options,d=l.type;(!c||!c.root)&&(d=t+d),e.commit(d,f,c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return Ts(e,t)}},state:{get:function(){return Ri(e.state,n)}}}),i}function Ts(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(i){if(i.slice(0,r)===t){var a=i.slice(r);Object.defineProperty(n,a,{get:function(){return e.getters[i]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function pd(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push(function(o){n.call(e,r.state,o)})}function gd(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push(function(o){var s=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},o);return dd(s)||(s=Promise.resolve(s)),e._devtoolHook?s.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):s})}function vd(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(a){return n(r.state,r.getters,a.state,a.getters)})}function bd(e){jt(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function Ri(e,t){return t.reduce(function(n,r){return n[r]},e)}function Yn(e,t,n){return Ps(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var yd="vuex bindings",$a="vuex:mutations",vr="vuex:actions",Ot="vuex",_d=0;function wd(e,t){fd({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[yd]},function(n){n.addTimelineLayer({id:$a,label:"Vuex Mutations",color:Da}),n.addTimelineLayer({id:vr,label:"Vuex Actions",color:Da}),n.addInspector({id:Ot,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===Ot)if(r.filter){var i=[];Ls(i,t._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[Ns(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===Ot){var i=r.nodeId;Ts(t,i),r.state=kd(Cd(t._modules,i),i==="root"?t.getters:t._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===Ot){var i=r.nodeId,a=r.path;i!=="root"&&(a=i.split("/").filter(Boolean).concat(a)),t._withCommit(function(){r.set(t._state.data,a,r.state.value)})}}),t.subscribe(function(r,i){var a={};r.payload&&(a.payload=r.payload),a.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Ot),n.sendInspectorState(Ot),n.addTimelineEvent({layerId:$a,event:{time:Date.now(),title:r.type,data:a}})}),t.subscribeAction({before:function(r,i){var a={};r.payload&&(a.payload=r.payload),r._id=_d++,r._time=Date.now(),a.state=i,n.addTimelineEvent({layerId:vr,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:a}})},after:function(r,i){var a={},o=Date.now()-r._time;a.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(a.payload=r.payload),a.state=i,n.addTimelineEvent({layerId:vr,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:a}})}})})}var Da=8702998,xd=6710886,Ed=16777215,Rs={label:"namespaced",textColor:Ed,backgroundColor:xd};function Ms(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Ns(e,t){return{id:t||"root",label:Ms(t),tags:e.namespaced?[Rs]:[],children:Object.keys(e._children).map(function(n){return Ns(e._children[n],t+n+"/")})}}function Ls(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Rs]:[]}),Object.keys(t._children).forEach(function(i){Ls(e,t._children[i],n,r+i+"/")})}function kd(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(r.length){var a=Ad(t);i.getters=Object.keys(a).map(function(o){return{key:o.endsWith("/")?Ms(o):o,editable:!1,value:Gr(function(){return a[o]})}})}return i}function Ad(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var i=t,a=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[a]=Gr(function(){return e[n]})}else t[n]=Gr(function(){return e[n]})}),t}function Cd(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,i,a){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+t+'".');return a===n.length-1?o:o._children},t==="root"?e:e.root._children)}function Gr(e){try{return e()}catch(t){return t}}var Se=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},Fs={namespaced:{configurable:!0}};Fs.namespaced.get=function(){return!!this._rawModule.namespaced};Se.prototype.addChild=function(t,n){this._children[t]=n};Se.prototype.removeChild=function(t){delete this._children[t]};Se.prototype.getChild=function(t){return this._children[t]};Se.prototype.hasChild=function(t){return t in this._children};Se.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Se.prototype.forEachChild=function(t){Gt(this._children,t)};Se.prototype.forEachGetter=function(t){this._rawModule.getters&&Gt(this._rawModule.getters,t)};Se.prototype.forEachAction=function(t){this._rawModule.actions&&Gt(this._rawModule.actions,t)};Se.prototype.forEachMutation=function(t){this._rawModule.mutations&&Gt(this._rawModule.mutations,t)};Object.defineProperties(Se.prototype,Fs);var wt=function(t){this.register([],t,!1)};wt.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};wt.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};wt.prototype.update=function(t){js([],this.root,t)};wt.prototype.register=function(t,n,r){var i=this;r===void 0&&(r=!0);var a=new Se(n,r);if(t.length===0)this.root=a;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],a)}n.modules&&Gt(n.modules,function(s,l){i.register(t.concat(l),s,r)})};wt.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};wt.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function js(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;js(e.concat(r),t.getChild(r),n.modules[r])}}function Um(e){return new ge(e)}var ge=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var i=t.strict;i===void 0&&(i=!1);var a=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new wt(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=a;var o=this,s=this,l=s.dispatch,f=s.commit;this.dispatch=function(m,g){return l.call(o,m,g)},this.commit=function(m,g,E){return f.call(o,m,g,E)},this.strict=i;var c=this._modules.root.state;ar(this,c,[],this._modules.root),Ti(this,c),r.forEach(function(d){return d(n)})},Mi={state:{configurable:!0}};ge.prototype.install=function(t,n){t.provide(n||ud,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&wd(t,this)};Mi.state.get=function(){return this._state.data};Mi.state.set=function(e){};ge.prototype.commit=function(t,n,r){var i=this,a=Yn(t,n,r),o=a.type,s=a.payload,l={type:o,payload:s},f=this._mutations[o];!f||(this._withCommit(function(){f.forEach(function(d){d(s)})}),this._subscribers.slice().forEach(function(c){return c(l,i.state)}))};ge.prototype.dispatch=function(t,n){var r=this,i=Yn(t,n),a=i.type,o=i.payload,s={type:a,payload:o},l=this._actions[a];if(!!l){try{this._actionSubscribers.slice().filter(function(c){return c.before}).forEach(function(c){return c.before(s,r.state)})}catch{}var f=l.length>1?Promise.all(l.map(function(c){return c(o)})):l[0](o);return new Promise(function(c,d){f.then(function(m){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(s,r.state)})}catch{}c(m)},function(m){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(s,r.state,m)})}catch{}d(m)})})}};ge.prototype.subscribe=function(t,n){return Ss(t,this._subscribers,n)};ge.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return Ss(r,this._actionSubscribers,n)};ge.prototype.watch=function(t,n,r){var i=this;return jt(function(){return t(i.state,i.getters)},n,Object.assign({},r))};ge.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};ge.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),ar(this,this.state,t,this._modules.get(t),r.preserveState),Ti(this,this.state)};ge.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=Ri(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),Is(this)};ge.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};ge.prototype.hotUpdate=function(t){this._modules.update(t),Is(this,!0)};ge.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(ge.prototype,Mi);var Hm=Ds(function(e,t){var n={};return $s(t).forEach(function(r){var i=r.key,a=r.val;n[i]=function(){var s=this.$store.state,l=this.$store.getters;if(e){var f=zs(this.$store,"mapState",e);if(!f)return;s=f.context.state,l=f.context.getters}return typeof a=="function"?a.call(this,s,l):s[a]},n[i].vuex=!0}),n}),Bm=Ds(function(e,t){var n={};return $s(t).forEach(function(r){var i=r.key,a=r.val;n[i]=function(){for(var s=[],l=arguments.length;l--;)s[l]=arguments[l];var f=this.$store.dispatch;if(e){var c=zs(this.$store,"mapActions",e);if(!c)return;f=c.context.dispatch}return typeof a=="function"?a.apply(this,[f].concat(s)):f.apply(this.$store,[a].concat(s))}}),n});function $s(e){return Od(e)?Array.isArray(e)?e.map(function(t){return{key:t,val:t}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function Od(e){return Array.isArray(e)||Ps(e)}function Ds(e){return function(t,n){return typeof t!="string"?(n=t,t=""):t.charAt(t.length-1)!=="/"&&(t+="/"),e(t,n)}}function zs(e,t,n){var r=e._modulesNamespaceMap[n];return r}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Us=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Vt=e=>Us?Symbol(e):"_vr_"+e,Pd=Vt("rvlm"),za=Vt("rvd"),Ni=Vt("r"),Hs=Vt("rl"),Vr=Vt("rvl"),Tt=typeof window!="undefined";function Sd(e){return e.__esModule||Us&&e[Symbol.toStringTag]==="Module"}const J=Object.assign;function br(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const cn=()=>{},Id=/\/$/,Td=e=>e.replace(Id,"");function yr(e,t,n="/"){let r,i={},a="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),a=t.slice(s+1,l>-1?l:t.length),i=e(a)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Ld(r!=null?r:t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:i,hash:o}}function Rd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ua(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Md(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&zt(t.matched[r],n.matched[i])&&Bs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function zt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Bs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Nd(e[n],t[n]))return!1;return!0}function Nd(e,t){return Array.isArray(e)?Ha(e,t):Array.isArray(t)?Ha(t,e):e===t}function Ha(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ld(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var yn;(function(e){e.pop="pop",e.push="push"})(yn||(yn={}));var fn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fn||(fn={}));function Fd(e){if(!e)if(Tt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Td(e)}const jd=/^[^#]+#/;function $d(e,t){return e.replace(jd,"#")+t}function Dd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const or=()=>({left:window.pageXOffset,top:window.pageYOffset});function zd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Dd(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ba(e,t){return(history.state?history.state.position-t:-1)+e}const qr=new Map;function Ud(e,t){qr.set(e,t)}function Hd(e){const t=qr.get(e);return qr.delete(e),t}let Bd=()=>location.protocol+"//"+location.host;function Ys(e,t){const{pathname:n,search:r,hash:i}=t,a=e.indexOf("#");if(a>-1){let s=i.includes(e.slice(a))?e.slice(a).length:1,l=i.slice(s);return l[0]!=="/"&&(l="/"+l),Ua(l,"")}return Ua(n,e)+r+i}function Yd(e,t,n,r){let i=[],a=[],o=null;const s=({state:m})=>{const g=Ys(e,location),E=n.value,F=t.value;let P=0;if(m){if(n.value=g,t.value=m,o&&o===E){o=null;return}P=F?m.position-F.position:0}else r(g);i.forEach(O=>{O(n.value,E,{delta:P,type:yn.pop,direction:P?P>0?fn.forward:fn.back:fn.unknown})})};function l(){o=n.value}function f(m){i.push(m);const g=()=>{const E=i.indexOf(m);E>-1&&i.splice(E,1)};return a.push(g),g}function c(){const{history:m}=window;!m.state||m.replaceState(J({},m.state,{scroll:or()}),"")}function d(){for(const m of a)m();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function Ya(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?or():null}}function Kd(e){const{history:t,location:n}=window,r={value:Ys(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,f,c){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Bd()+e+l;try{t[c?"replaceState":"pushState"](f,"",m),i.value=f}catch(g){console.error(g),n[c?"replace":"assign"](m)}}function o(l,f){const c=J({},t.state,Ya(i.value.back,l,i.value.forward,!0),f,{position:i.value.position});a(l,c,!0),r.value=l}function s(l,f){const c=J({},i.value,t.state,{forward:l,scroll:or()});a(c.current,c,!0);const d=J({},Ya(r.value,l,null),{position:c.position+1},f);a(l,d,!1),r.value=l}return{location:r,state:i,push:s,replace:o}}function Ym(e){e=Fd(e);const t=Kd(e),n=Yd(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const i=J({location:"",base:e,go:r,createHref:$d.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Wd(e){return typeof e=="string"||e&&typeof e=="object"}function Ks(e){return typeof e=="string"||typeof e=="symbol"}const et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ws=Vt("nf");var Ka;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ka||(Ka={}));function Ut(e,t){return J(new Error,{type:e,[Ws]:!0},t)}function dt(e,t){return e instanceof Error&&Ws in e&&(t==null||!!(e.type&t))}const Wa="[^/]+?",Gd={sensitive:!1,strict:!1,start:!0,end:!0},Vd=/[.+*?^${}()[\]/\\]/g;function qd(e,t){const n=J({},Gd,t),r=[];let i=n.start?"^":"";const a=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let d=0;d<f.length;d++){const m=f[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(i+="/"),i+=m.value.replace(Vd,"\\$&"),g+=40;else if(m.type===1){const{value:E,repeatable:F,optional:P,regexp:O}=m;a.push({name:E,repeatable:F,optional:P});const R=O||Wa;if(R!==Wa){g+=10;try{new RegExp(`(${R})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${E}" (${R}): `+Y.message)}}let $=F?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||($=P&&f.length<2?`(?:/${$})`:"/"+$),P&&($+="?"),i+=$,g+=20,P&&(g+=-8),F&&(g+=-20),R===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let m=1;m<c.length;m++){const g=c[m]||"",E=a[m-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const m of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of m)if(g.type===0)c+=g.value;else if(g.type===1){const{value:E,repeatable:F,optional:P}=g,O=E in f?f[E]:"";if(Array.isArray(O)&&!F)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const R=Array.isArray(O)?O.join("/"):O;if(!R)if(P)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);c+=R}}return c}return{re:o,score:r,keys:a,parse:s,stringify:l}}function Xd(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Qd(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=Xd(r[n],i[n]);if(a)return a;n++}return i.length-r.length}const Jd={type:0,value:""},Zd=/[a-zA-Z0-9_]/;function em(e){if(!e)return[[]];if(e==="/")return[[Jd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const i=[];let a;function o(){a&&i.push(a),a=[]}let s=0,l,f="",c="";function d(){!f||(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function m(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:Zd.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),i}function tm(e,t,n){const r=qd(em(e.path),n),i=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function nm(e,t){const n=[],r=new Map;t=Va({strict:!1,end:!0,sensitive:!1},t);function i(c){return r.get(c)}function a(c,d,m){const g=!m,E=im(c);E.aliasOf=m&&m.record;const F=Va(t,c),P=[E];if("alias"in c){const $=typeof c.alias=="string"?[c.alias]:c.alias;for(const Y of $)P.push(J({},E,{components:m?m.record.components:E.components,path:Y,aliasOf:m?m.record:E}))}let O,R;for(const $ of P){const{path:Y}=$;if(d&&Y[0]!=="/"){const V=d.record.path,ae=V[V.length-1]==="/"?"":"/";$.path=d.record.path+(Y&&ae+Y)}if(O=tm($,d,F),m?m.alias.push(O):(R=R||O,R!==O&&R.alias.push(O),g&&c.name&&!Ga(O)&&o(c.name)),"children"in E){const V=E.children;for(let ae=0;ae<V.length;ae++)a(V[ae],O,m&&m.children[ae])}m=m||O,l(O)}return R?()=>{o(R)}:cn}function o(c){if(Ks(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&Qd(c,n[d])>=0;)d++;n.splice(d,0,c),c.record.name&&!Ga(c)&&r.set(c.record.name,c)}function f(c,d){let m,g={},E,F;if("name"in c&&c.name){if(m=r.get(c.name),!m)throw Ut(1,{location:c});F=m.record.name,g=J(rm(d.params,m.keys.filter(R=>!R.optional).map(R=>R.name)),c.params),E=m.stringify(g)}else if("path"in c)E=c.path,m=n.find(R=>R.re.test(E)),m&&(g=m.parse(E),F=m.record.name);else{if(m=d.name?r.get(d.name):n.find(R=>R.re.test(d.path)),!m)throw Ut(1,{location:c,currentLocation:d});F=m.record.name,g=J({},d.params,c.params),E=m.stringify(g)}const P=[];let O=m;for(;O;)P.unshift(O.record),O=O.parent;return{name:F,path:E,params:g,matched:P,meta:om(P)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:i}}function rm(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function im(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:am(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function am(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ga(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function om(e){return e.reduce((t,n)=>J(t,n.meta),{})}function Va(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Gs=/#/g,sm=/&/g,lm=/\//g,cm=/=/g,fm=/\?/g,Vs=/\+/g,um=/%5B/g,dm=/%5D/g,qs=/%5E/g,mm=/%60/g,Xs=/%7B/g,hm=/%7C/g,Qs=/%7D/g,pm=/%20/g;function Li(e){return encodeURI(""+e).replace(hm,"|").replace(um,"[").replace(dm,"]")}function gm(e){return Li(e).replace(Xs,"{").replace(Qs,"}").replace(qs,"^")}function Xr(e){return Li(e).replace(Vs,"%2B").replace(pm,"+").replace(Gs,"%23").replace(sm,"%26").replace(mm,"`").replace(Xs,"{").replace(Qs,"}").replace(qs,"^")}function vm(e){return Xr(e).replace(cm,"%3D")}function bm(e){return Li(e).replace(Gs,"%23").replace(fm,"%3F")}function ym(e){return e==null?"":bm(e).replace(lm,"%2F")}function Kn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function _m(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const a=r[i].replace(Vs," "),o=a.indexOf("="),s=Kn(o<0?a:a.slice(0,o)),l=o<0?null:Kn(a.slice(o+1));if(s in t){let f=t[s];Array.isArray(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function qa(e){let t="";for(let n in e){const r=e[n];if(n=vm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(a=>a&&Xr(a)):[r&&Xr(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function wm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}function Qt(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function rt(e,t,n,r,i){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Ut(4,{from:n,to:t})):d instanceof Error?s(d):Wd(d)?s(Ut(2,{from:t,to:d})):(a&&r.enterCallbacks[i]===a&&typeof d=="function"&&a.push(d),o())},f=e.call(r&&r.instances[i],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function _r(e,t,n,r){const i=[];for(const a of e)for(const o in a.components){let s=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(xm(s)){const f=(s.__vccOpts||s)[t];f&&i.push(rt(f,n,r,a,o))}else{let l=s();i.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const c=Sd(f)?f.default:f;a.components[o]=c;const m=(c.__vccOpts||c)[t];return m&&rt(m,n,r,a,o)()}))}}return i}function xm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xa(e){const t=ot(Ni),n=ot(Hs),r=Ne(()=>t.resolve(nn(e.to))),i=Ne(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const m=d.findIndex(zt.bind(null,c));if(m>-1)return m;const g=Qa(l[f-2]);return f>1&&Qa(c)===g&&d[d.length-1].path!==g?d.findIndex(zt.bind(null,l[f-2])):m}),a=Ne(()=>i.value>-1&&Cm(n.params,r.value.params)),o=Ne(()=>i.value>-1&&i.value===n.matched.length-1&&Bs(n.params,r.value.params));function s(l={}){return Am(l)?t[nn(e.replace)?"replace":"push"](nn(e.to)).catch(cn):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}const Em=Ro({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xa,setup(e,{slots:t}){const n=Kt(Xa(e)),{options:r}=ot(Ni),i=Ne(()=>({[Ja(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ja(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Qo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),km=Em;function Am(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Cm(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((a,o)=>a!==i[o]))return!1}return!0}function Qa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ja=(e,t,n)=>e!=null?e:t!=null?t:n,Om=Ro({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=ot(Vr),i=Ne(()=>e.route||r.value),a=ot(za,0),o=Ne(()=>i.value.matched[a]);Pn(za,a+1),Pn(Pd,o),Pn(Vr,i);const s=Kl();return jt(()=>[s.value,o.value,e.name],([l,f,c],[d,m,g])=>{f&&(f.instances[c]=l,m&&m!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),l&&f&&(!m||!zt(f,m)||!d)&&(f.enterCallbacks[c]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=i.value,f=o.value,c=f&&f.components[e.name],d=e.name;if(!c)return Za(n.default,{Component:c,route:l});const m=f.props[e.name],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=Qo(c,J({},g,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[d]=null)},ref:s}));return Za(n.default,{Component:F,route:l})||F}}});function Za(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Pm=Om;function Km(e){const t=nm(e.routes,e),n=e.parseQuery||_m,r=e.stringifyQuery||qa,i=e.history,a=Qt(),o=Qt(),s=Qt(),l=Wl(et);let f=et;Tt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=br.bind(null,v=>""+v),d=br.bind(null,ym),m=br.bind(null,Kn);function g(v,T){let A,M;return Ks(v)?(A=t.getRecordMatcher(v),M=T):M=v,t.addRoute(M,A)}function E(v){const T=t.getRecordMatcher(v);T&&t.removeRoute(T)}function F(){return t.getRoutes().map(v=>v.record)}function P(v){return!!t.getRecordMatcher(v)}function O(v,T){if(T=J({},T||l.value),typeof v=="string"){const z=yr(n,v,T.path),u=t.resolve({path:z.path},T),h=i.createHref(z.fullPath);return J(z,u,{params:m(u.params),hash:Kn(z.hash),redirectedFrom:void 0,href:h})}let A;if("path"in v)A=J({},v,{path:yr(n,v.path,T.path).path});else{const z=J({},v.params);for(const u in z)z[u]==null&&delete z[u];A=J({},v,{params:d(v.params)}),T.params=d(T.params)}const M=t.resolve(A,T),X=v.hash||"";M.params=c(m(M.params));const ee=Rd(r,J({},v,{hash:gm(X),path:M.path})),B=i.createHref(ee);return J({fullPath:ee,hash:X,query:r===qa?wm(v.query):v.query||{}},M,{redirectedFrom:void 0,href:B})}function R(v){return typeof v=="string"?yr(n,v,l.value.path):J({},v)}function $(v,T){if(f!==v)return Ut(8,{from:T,to:v})}function Y(v){return de(v)}function V(v){return Y(J(R(v),{replace:!0}))}function ae(v){const T=v.matched[v.matched.length-1];if(T&&T.redirect){const{redirect:A}=T;let M=typeof A=="function"?A(v):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=R(M):{path:M},M.params={}),J({query:v.query,hash:v.hash,params:v.params},M)}}function de(v,T){const A=f=O(v),M=l.value,X=v.state,ee=v.force,B=v.replace===!0,z=ae(A);if(z)return de(J(R(z),{state:X,force:ee,replace:B}),T||A);const u=A;u.redirectedFrom=T;let h;return!ee&&Md(r,M,A)&&(h=Ut(16,{to:u,from:M}),At(M,M,!0,!1)),(h?Promise.resolve(h):se(u,M)).catch(p=>dt(p)?p:Z(p,u,M)).then(p=>{if(p){if(dt(p,2))return de(J(R(p.to),{state:X,force:ee,replace:B}),T||u)}else p=De(u,M,!0,B,X);return Qe(u,M,p),p})}function we(v,T){const A=$(v,T);return A?Promise.reject(A):Promise.resolve()}function se(v,T){let A;const[M,X,ee]=Sm(v,T);A=_r(M.reverse(),"beforeRouteLeave",v,T);for(const z of M)z.leaveGuards.forEach(u=>{A.push(rt(u,v,T))});const B=we.bind(null,v,T);return A.push(B),Pt(A).then(()=>{A=[];for(const z of a.list())A.push(rt(z,v,T));return A.push(B),Pt(A)}).then(()=>{A=_r(X,"beforeRouteUpdate",v,T);for(const z of X)z.updateGuards.forEach(u=>{A.push(rt(u,v,T))});return A.push(B),Pt(A)}).then(()=>{A=[];for(const z of v.matched)if(z.beforeEnter&&!T.matched.includes(z))if(Array.isArray(z.beforeEnter))for(const u of z.beforeEnter)A.push(rt(u,v,T));else A.push(rt(z.beforeEnter,v,T));return A.push(B),Pt(A)}).then(()=>(v.matched.forEach(z=>z.enterCallbacks={}),A=_r(ee,"beforeRouteEnter",v,T),A.push(B),Pt(A))).then(()=>{A=[];for(const z of o.list())A.push(rt(z,v,T));return A.push(B),Pt(A)}).catch(z=>dt(z,8)?z:Promise.reject(z))}function Qe(v,T,A){for(const M of s.list())M(v,T,A)}function De(v,T,A,M,X){const ee=$(v,T);if(ee)return ee;const B=T===et,z=Tt?history.state:{};A&&(M||B?i.replace(v.fullPath,J({scroll:B&&z&&z.scroll},X)):i.push(v.fullPath,X)),l.value=v,At(v,T,A,B),xe()}let ze;function xt(){ze=i.listen((v,T,A)=>{const M=O(v),X=ae(M);if(X){de(J(X,{replace:!0}),M).catch(cn);return}f=M;const ee=l.value;Tt&&Ud(Ba(ee.fullPath,A.delta),or()),se(M,ee).catch(B=>dt(B,12)?B:dt(B,2)?(de(B.to,M).then(z=>{dt(z,20)&&!A.delta&&A.type===yn.pop&&i.go(-1,!1)}).catch(cn),Promise.reject()):(A.delta&&i.go(-A.delta,!1),Z(B,M,ee))).then(B=>{B=B||De(M,ee,!1),B&&(A.delta?i.go(-A.delta,!1):A.type===yn.pop&&dt(B,20)&&i.go(-1,!1)),Qe(M,ee,B)}).catch(cn)})}let Et=Qt(),kt=Qt(),oe;function Z(v,T,A){xe(v);const M=kt.list();return M.length?M.forEach(X=>X(v,T,A)):console.error(v),Promise.reject(v)}function q(){return oe&&l.value!==et?Promise.resolve():new Promise((v,T)=>{Et.add([v,T])})}function xe(v){oe||(oe=!0,xt(),Et.list().forEach(([T,A])=>v?A(v):T()),Et.reset())}function At(v,T,A,M){const{scrollBehavior:X}=e;if(!Tt||!X)return Promise.resolve();const ee=!A&&Hd(Ba(v.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return xo().then(()=>X(v,T,ee)).then(B=>B&&zd(B)).catch(B=>Z(B,v,T))}const Ue=v=>i.go(v);let Ie;const Ee=new Set;return{currentRoute:l,addRoute:g,removeRoute:E,hasRoute:P,getRoutes:F,resolve:O,options:e,push:Y,replace:V,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:kt.add,isReady:q,install(v){const T=this;v.component("RouterLink",km),v.component("RouterView",Pm),v.config.globalProperties.$router=T,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(l)}),Tt&&!Ie&&l.value===et&&(Ie=!0,Y(i.location).catch(X=>{}));const A={};for(const X in et)A[X]=Ne(()=>l.value[X]);v.provide(Ni,T),v.provide(Hs,Kt(A)),v.provide(Vr,l);const M=v.unmount;Ee.add(v),v.unmount=function(){Ee.delete(v),Ee.size<1&&(f=et,ze&&ze(),l.value=et,Ie=!1,oe=!1),M()}}}}function Pt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Sm(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const s=t.matched[o];s&&(e.matched.find(f=>zt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>zt(f,l))||i.push(l))}return[n,r,i]}export{Be as F,Mm as a,Vo as b,Ne as c,Ro as d,zm as e,$m as f,Dm as g,ke as h,Tm as i,Bm as j,Jr as k,jm as l,Hm as m,Zr as n,Rm as o,Lm as p,Nm as q,Kl as r,Yc as s,Um as t,Fm as u,Km as v,rc as w,Ym as x};
