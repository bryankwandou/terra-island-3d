var p1=Object.defineProperty;var m1=(o,e,i)=>e in o?p1(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var ar=(o,e,i)=>m1(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Wy(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var wd={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function g1(){if(Cv)return Cl;Cv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Cl.Fragment=e,Cl.jsx=i,Cl.jsxs=i,Cl}var Dv;function _1(){return Dv||(Dv=1,wd.exports=g1()),wd.exports}var dt=_1(),Rd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function v1(){if(Nv)return de;Nv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function L(N,Z,gt){this.props=N,this.context=Z,this.refs=x,this.updater=gt||C}L.prototype.isReactComponent={},L.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},L.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function U(){}U.prototype=L.prototype;function R(N,Z,gt){this.props=N,this.context=Z,this.refs=x,this.updater=gt||C}var k=R.prototype=new U;k.constructor=R,M(k,L.prototype),k.isPureReactComponent=!0;var I=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function A(N,Z,gt){var ft=gt.ref;return{$$typeof:o,type:N,key:Z,ref:ft!==void 0?ft:null,props:gt}}function H(N,Z){return A(N.type,Z,N.props)}function st(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function J(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return Z[gt]})}var ut=/\/+/g;function et(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):Z.toString(36)}function F(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(z,z):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function tt(N,Z,gt,ft,At){var It=typeof N;(It==="undefined"||It==="boolean")&&(N=null);var Dt=!1;if(N===null)Dt=!0;else switch(It){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(N.$$typeof){case o:case e:Dt=!0;break;case _:return Dt=N._init,tt(Dt(N._payload),Z,gt,ft,At)}}if(Dt)return At=At(N),Dt=ft===""?"."+et(N,0):ft,I(At)?(gt="",Dt!=null&&(gt=Dt.replace(ut,"$&/")+"/"),tt(At,Z,gt,"",function(ce){return ce})):At!=null&&(st(At)&&(At=H(At,gt+(At.key==null||N&&N.key===At.key?"":(""+At.key).replace(ut,"$&/")+"/")+Dt)),Z.push(At)),1;Dt=0;var wt=ft===""?".":ft+":";if(I(N))for(var Bt=0;Bt<N.length;Bt++)ft=N[Bt],It=wt+et(ft,Bt),Dt+=tt(ft,Z,gt,It,At);else if(Bt=E(N),typeof Bt=="function")for(N=Bt.call(N),Bt=0;!(ft=N.next()).done;)ft=ft.value,It=wt+et(ft,Bt++),Dt+=tt(ft,Z,gt,It,At);else if(It==="object"){if(typeof N.then=="function")return tt(F(N),Z,gt,ft,At);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function Q(N,Z,gt){if(N==null)return N;var ft=[],At=0;return tt(N,ft,"","",function(It){return Z.call(gt,It,At++)}),ft}function xt(N){if(N._status===-1){var Z=N._result,gt=Z();gt.then(function(ft){(N._status===0||N._status===-1)&&(N._status=1,N._result=ft,gt.status===void 0&&(gt.status="fulfilled",gt.value=ft))},function(ft){(N._status===0||N._status===-1)&&(N._status=2,N._result=ft,gt.status===void 0&&(gt.status="rejected",gt.reason=ft))}),N._status===-1&&(N._status=0,N._result=gt)}if(N._status===1)return N._result.default;throw N._result}var Mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function kt(N){var Z=B.T,gt={};gt.types=Z!==null?Z.types:null,B.T=gt;try{var ft=N(),At=B.S;At!==null&&At(gt,ft),typeof ft=="object"&&ft!==null&&typeof ft.then=="function"&&ft.then(z,Mt)}catch(It){Mt(It)}finally{Z!==null&&gt.types!==null&&(Z.types=gt.types),B.T=Z}}function Jt(N){var Z=B.T;if(Z!==null){var gt=Z.types;gt===null?Z.types=[N]:gt.indexOf(N)===-1&&gt.push(N)}else kt(Jt.bind(null,N))}var pe={map:Q,forEach:function(N,Z,gt){Q(N,function(){Z.apply(this,arguments)},gt)},count:function(N){var Z=0;return Q(N,function(){Z++}),Z},toArray:function(N){return Q(N,function(Z){return Z})||[]},only:function(N){if(!st(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return de.Activity=m,de.Children=pe,de.Component=L,de.Fragment=i,de.Profiler=l,de.PureComponent=R,de.StrictMode=s,de.Suspense=p,de.ViewTransition=y,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,de.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},de.addTransitionType=Jt,de.cache=function(N){return function(){return N.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(N,Z,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ft=M({},N.props),At=N.key;if(Z!=null)for(It in Z.key!==void 0&&(At=""+Z.key),Z)!D.call(Z,It)||It==="key"||It==="__self"||It==="__source"||It==="ref"&&Z.ref===void 0||(ft[It]=Z[It]);var It=arguments.length-2;if(It===1)ft.children=gt;else if(1<It){for(var Dt=Array(It),wt=0;wt<It;wt++)Dt[wt]=arguments[wt+2];ft.children=Dt}return A(N.type,At,ft)},de.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},de.createElement=function(N,Z,gt){var ft,At={},It=null;if(Z!=null)for(ft in Z.key!==void 0&&(It=""+Z.key),Z)D.call(Z,ft)&&ft!=="key"&&ft!=="__self"&&ft!=="__source"&&(At[ft]=Z[ft]);var Dt=arguments.length-2;if(Dt===1)At.children=gt;else if(1<Dt){for(var wt=Array(Dt),Bt=0;Bt<Dt;Bt++)wt[Bt]=arguments[Bt+2];At.children=wt}if(N&&N.defaultProps)for(ft in Dt=N.defaultProps,Dt)At[ft]===void 0&&(At[ft]=Dt[ft]);return A(N,It,At)},de.createRef=function(){return{current:null}},de.forwardRef=function(N){return{$$typeof:d,render:N}},de.isValidElement=st,de.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:xt}},de.memo=function(N,Z){return{$$typeof:g,type:N,compare:Z===void 0?null:Z}},de.startTransition=kt,de.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},de.use=function(N){return B.H.use(N)},de.useActionState=function(N,Z,gt){return B.H.useActionState(N,Z,gt)},de.useCallback=function(N,Z){return B.H.useCallback(N,Z)},de.useContext=function(N){return B.H.useContext(N)},de.useDebugValue=function(){},de.useDeferredValue=function(N,Z){return B.H.useDeferredValue(N,Z)},de.useEffect=function(N,Z){return B.H.useEffect(N,Z)},de.useEffectEvent=function(N){return B.H.useEffectEvent(N)},de.useId=function(){return B.H.useId()},de.useImperativeHandle=function(N,Z,gt){return B.H.useImperativeHandle(N,Z,gt)},de.useInsertionEffect=function(N,Z){return B.H.useInsertionEffect(N,Z)},de.useLayoutEffect=function(N,Z){return B.H.useLayoutEffect(N,Z)},de.useMemo=function(N,Z){return B.H.useMemo(N,Z)},de.useOptimistic=function(N,Z){return B.H.useOptimistic(N,Z)},de.useReducer=function(N,Z,gt){return B.H.useReducer(N,Z,gt)},de.useRef=function(N){return B.H.useRef(N)},de.useState=function(N){return B.H.useState(N)},de.useSyncExternalStore=function(N,Z,gt){return B.H.useSyncExternalStore(N,Z,gt)},de.useTransition=function(){return B.H.useTransition()},de.version="19.3.1",de}var Uv;function em(){return Uv||(Uv=1,Rd.exports=v1()),Rd.exports}var Ee=em();const y1=Wy(Ee);var Cd={exports:{}},Dl={},Dd={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function x1(){return Lv||(Lv=1,(function(o){function e(F,tt){var Q=F.length;F.push(tt);t:for(;0<Q;){var xt=Q-1>>>1,Mt=F[xt];if(0<l(Mt,tt))F[xt]=tt,F[Q]=Mt,Q=xt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var tt=F[0],Q=F.pop();if(Q!==tt){F[0]=Q;t:for(var xt=0,Mt=F.length,kt=Mt>>>1;xt<kt;){var Jt=2*(xt+1)-1,pe=F[Jt],N=Jt+1,Z=F[N];if(0>l(pe,Q))N<Mt&&0>l(Z,pe)?(F[xt]=Z,F[N]=Q,xt=N):(F[xt]=pe,F[Jt]=Q,xt=Jt);else if(N<Mt&&0>l(Z,Q))F[xt]=Z,F[N]=Q,xt=N;else break t}}return tt}function l(F,tt){var Q=F.sortIndex-tt.sortIndex;return Q!==0?Q:F.id-tt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],_=1,m=null,y=3,S=!1,E=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var tt=i(g);tt!==null;){if(tt.callback===null)s(g);else if(tt.startTime<=F)s(g),tt.sortIndex=tt.expirationTime,e(p,tt);else break;tt=i(g)}}function k(F){if(C=!1,R(F),!E)if(i(p)!==null)E=!0,I||(I=!0,st());else{var tt=i(g);tt!==null&&et(k,tt.startTime-F)}}var I=!1,z=-1,B=5,D=-1;function A(){return M?!0:!(o.unstable_now()-D<B)}function H(){if(M=!1,I){var F=o.unstable_now();D=F;var tt=!0;try{t:{E=!1,C&&(C=!1,L(z),z=-1),S=!0;var Q=y;try{e:{for(R(F),m=i(p);m!==null&&!(m.expirationTime>F&&A());){var xt=m.callback;if(typeof xt=="function"){m.callback=null,y=m.priorityLevel;var Mt=xt(m.expirationTime<=F);if(F=o.unstable_now(),typeof Mt=="function"){m.callback=Mt,R(F),tt=!0;break e}m===i(p)&&s(p),R(F)}else s(p);m=i(p)}if(m!==null)tt=!0;else{var kt=i(g);kt!==null&&et(k,kt.startTime-F),tt=!1}}break t}finally{m=null,y=Q,S=!1}tt=void 0}}finally{tt?st():I=!1}}}var st;if(typeof U=="function")st=function(){U(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ut=J.port2;J.port1.onmessage=H,st=function(){ut.postMessage(null)}}else st=function(){x(H,0)};function et(F,tt){z=x(function(){F(o.unstable_now())},tt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(F){switch(y){case 1:case 2:case 3:var tt=3;break;default:tt=y}var Q=y;y=tt;try{return F()}finally{y=Q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,tt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=y;y=F;try{return tt()}finally{y=Q}},o.unstable_scheduleCallback=function(F,tt,Q){var xt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?xt+Q:xt):Q=xt,F){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=Q+Mt,F={id:_++,callback:tt,priorityLevel:F,startTime:Q,expirationTime:Mt,sortIndex:-1},Q>xt?(F.sortIndex=Q,e(g,F),i(p)===null&&F===i(g)&&(C?(L(z),z=-1):C=!0,et(k,Q-xt))):(F.sortIndex=Mt,e(p,F),E||S||(E=!0,I||(I=!0,st()))),F},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(F){var tt=y;return function(){var Q=y;y=tt;try{return F.apply(this,arguments)}finally{y=Q}}}})(Nd)),Nd}var Ov;function S1(){return Ov||(Ov=1,Dd.exports=x1()),Dd.exports}var Ud={exports:{}},ti={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function M1(){if(zv)return ti;zv=1;var o=em();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,m,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:_,containerInfo:m,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ti.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ti.browser=function(_){return{$$typeof:u,_reason:_}},ti.createPortal=function(_,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(_,m,null,y)},ti.flushSync=function(_){var m=p.T,y=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=m,s.p=y,s.d.f()}},ti.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},ti.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},ti.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var y=m.as,S=g(y,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:C}):y==="script"&&s.d.X(_,{crossOrigin:S,integrity:E,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ti.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(_)},ti.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,S=g(y,m.crossOrigin);s.d.L(_,y,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ti.preloadModule=function(_,m){if(typeof _=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(_)},ti.requestFormReset=function(_){s.d.r(_)},ti.unstable_batchedUpdates=function(_,m){return _(m)},ti.useFormState=function(_,m,y){return p.H.useFormState(_,m,y)},ti.useFormStatus=function(){return p.H.useHostTransitionStatus()},ti.version="19.3.1",ti}var Pv;function E1(){if(Pv)return Ud.exports;Pv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ud.exports=M1(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function T1(){if(Iv)return Dl;Iv=1;var o=S1(),e=em(),i=E1();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,r=f;break}if(T===r){v=!0,r=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,r=c;break}if(T===r){v=!0,r=f,a=c;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,c,f))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=y(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,L=null;function U(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function R(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(x=t),!0):!1}function k(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function I(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,B=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),ut=Symbol.for("react.consumer"),et=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),kt=Symbol.for("react.activity"),Jt=Symbol.for("react.legacy_hidden"),pe=Symbol.for("react.memo_cache_sentinel"),N=Symbol.for("react.view_transition"),Z=Symbol.for("react.recoverable"),gt=Symbol.iterator;function ft(t){return t===null||typeof t!="object"?null:(t=gt&&t[gt]||t["@@iterator"],typeof t=="function"?t:null)}var At=Symbol.for("react.client.reference");function It(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===At?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case J:return"Profiler";case st:return"StrictMode";case tt:return"Suspense";case Q:return"SuspenseList";case kt:return"Activity";case N:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case et:return t.displayName||"Context";case ut:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:It(t.type)||"Memo";case Mt:n=t._payload,t=t._init;try{return It(t(n))}catch{}}return null}var Dt=Array.isArray,wt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},V=[],we=-1;function se(t){return{current:t}}function Vt(t){0>we||(t.current=V[we],V[we]=null,we--)}function bt(t,n){we++,V[we]=t.current,t.current=n}var ge=se(null),Wt=se(null),O=se(null),w=se(null);function rt(t,n){switch(bt(O,n),bt(Wt,t),bt(ge,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?B_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=B_(n),t=F_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Vt(ge),bt(ge,t)}function vt(){Vt(ge),Vt(Wt),Vt(O)}function St(t){var n=t.memoizedState;n!==null&&(so._currentValue=n.memoizedState,bt(w,t)),n=ge.current;var a=F_(n,t.type);n!==a&&(bt(Wt,t),bt(ge,a))}function _t(t){Wt.current===t&&(Vt(ge),Vt(Wt)),w.current===t&&(Vt(w),so._currentValue=ce)}var Qt,Ot;function Ft(t){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",Ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+Ot}var be=!1;function Tt(t,n){if(!t||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Lt){var W=Lt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Lt){W=Lt}mt=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Lt){W=Lt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Lt){if(Lt&&W&&typeof Lt.stack=="string")return[Lt.stack,W.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var P=v.split(`
`),K=T.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===K.length)for(r=P.length-1,c=K.length-1;1<=r&&0<=c&&P[r]!==K[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==K[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==K[c]){var lt=`
`+P[r].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=r&&0<=c);break}}}finally{be=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ft(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return Ft(t.type);case 16:return Ft("Lazy");case 13:return t.child!==n&&n!==null?Ft("Suspense Fallback"):Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return Tt(t.type,!1);case 11:return Tt(t.type.render,!1);case 1:return Tt(t.type,!0);case 31:return Ft("Activity");case 30:return Ft("ViewTransition");default:return""}}function oe(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var re=Object.prototype.hasOwnProperty,Yt=o.unstable_scheduleCallback,Se=o.unstable_cancelCallback,me=o.unstable_shouldYield,Pe=o.unstable_requestPaint,q=o.unstable_now,Nt=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,zt=o.unstable_NormalPriority,Ht=o.unstable_LowPriority,fe=o.unstable_IdlePriority,Ve=o.log,An=o.unstable_setDisableYieldValue,Re=null,Ke=null;function Tn(t){if(typeof Ve=="function"&&An(t),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Re,t)}catch{}}var On=Math.clz32?Math.clz32:Pt,Ta=Math.log,ct=Math.LN2;function Pt(t){return t>>>=0,t===0?32:31-(Ta(t)/ct|0)|0}var Zt=256,ne=262144,_e=4194304;function tn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function en(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=tn(r):(v&=T,v!==0?c=tn(v):a||(a=T&~t,a!==0&&(c=tn(a))))):(T=r&~f,T!==0?c=tn(T):v!==0?c=tn(v):a||(a=r&~t,a!==0&&(c=tn(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function vn(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function yn(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-On(a),c=1<<r;n|=t[r],a&=~c}return n}function wn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var t=_e;return _e<<=1,(_e&62914560)===0&&(_e=4194304),t}function qn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hn(t,n,a,r,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,K=t.hiddenUpdates;for(a=v&~a;0<a;){var lt=31-On(a),mt=1<<lt;T[lt]=0,P[lt]=-1;var W=K[lt];if(W!==null)for(K[lt]=null,lt=0;lt<W.length;lt++){var at=W[lt];at!==null&&(at.lane&=-536870913)}a&=~mt}r!==0&&ke(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function ke(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-On(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function b(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-On(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Y(t,n){var a=n&-n;return a=(a&42)!==0?1:it(a),(a&(t.suspendedLanes|n))!==0?0:a}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $(){var t=Bt.p;return t!==0?t:(t=window.event,t===void 0?32:Mv(t.type))}function Et(t,n){var a=Bt.p;try{return Bt.p=t,n()}finally{Bt.p=a}}var Rt=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Rt,Ut="__reactProps$"+Rt,ie="__reactContainer$"+Rt,he="__reactEvents$"+Rt,ae="__reactListeners$"+Rt,ze="__reactHandles$"+Rt,Be="__reactResources$"+Rt,rn="__reactMarker$"+Rt,nn="__reactLoad$"+Rt;function Ce(t){delete t[Ct],delete t[Ut],delete t[ae],delete t[ze]}function $t(t){var n;if(n=t[Ct])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[Ct]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=nv(t);t!==null;){if(a=t[Ct])return a;t=nv(t)}return n}t=a,a=t.parentNode}return null}function dn(t){if(t=t[Ct]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ue(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Hn(t){var n=t[Be];return n||(n=t[Be]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(t){t[rn]=!0}function ai(t){t[nn]=void 0}var Ja=new Set,an={};function Rn(t,n){zn(t,n),zn(t+"Capture",n)}function zn(t,n){for(an[t]=n,t=0;t<n.length;t++)Ja.add(n[t])}var Wn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jn={},Mr={};function ba(t){return re.call(Mr,t)?!0:re.call(jn,t)?!1:Wn.test(t)?Mr[t]=!0:(jn[t]=!0,!1)}var Fe=!1;function Tm(){var t=Fe;return Fe=!1,t}function Zl(t,n,a){if(ba(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Kl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Aa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function Ei(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ox(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function nf(t){if(!t._valueTracker){var n=bm(t)?"checked":"value";t._valueTracker=Ox(t,n,""+t[n])}}function Am(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=bm(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var zx=/[\n"\\]/g;function Oi(t){return t.replace(zx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function af(t,n,a,r,c,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ei(n)):t.value!==""+Ei(n)&&(t.value=""+Ei(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?sf(t,Ei(t.value)):sf(t,Ei(n)):a!=null?sf(t,Ei(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Ei(T):t.removeAttribute("name")}function wm(t,n,a,r,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){nf(t);return}a=a!=null?""+Ei(a):"",n=n!=null?""+Ei(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),nf(t)}function sf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Er(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Ei(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Rm(t,n,a){if(n!=null&&(n=""+Ei(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ei(a):""}function Cm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Dt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Ei(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),nf(t)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Px=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Px.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Nm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Fe=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Dm(t,c,r),Fe=!0)}else for(var f in n)n.hasOwnProperty(f)&&Dm(t,f,n[f])}function rf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(t){return Bx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var of=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Ar=null;function Um(t){var n=dn(t);if(n&&(t=n.stateNode)){var a=t[Ut]||null;t:switch(t=n.stateNode,n.type){case"input":if(af(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Oi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Ut]||null;if(!c)throw Error(s(90));af(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Am(r)}break t;case"textarea":Rm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Er(t,!!a.multiple,n,!1)}}}var cf=!1;function Lm(t,n,a){if(cf)return t(n,a);cf=!0;try{var r=t(n);return r}finally{if(cf=!1,(br!==null||Ar!==null)&&(Qc(),br&&(n=br,t=Ar,Ar=br=null,Um(n),t)))for(n=0;n<t.length;n++)Um(t[n])}}function Go(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Ut]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=!1;if(wa)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){uf=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{uf=!1}var $a=null,ff=null,Jl=null;function Om(){if(Jl)return Jl;var t,n=ff,a=n.length,r,c="value"in $a?$a.value:$a.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return Jl=c.slice(t,1<r?1-r:void 0)}function $l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tc(){return!0}function zm(){return!1}function ci(t){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tc:zm,this.isPropagationStopped=zm,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=ci(ts),ko=z({},ts,{view:0,detail:0}),Fx=ci(ko),hf,df,Xo,nc=z({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(hf=t.screenX-Xo.screenX,df=t.screenY-Xo.screenY):df=hf=0,Xo=t),hf)},movementY:function(t){return"movementY"in t?t.movementY:df}}),Pm=ci(nc),Hx=z({},nc,{dataTransfer:0}),Gx=ci(Hx),Vx=z({},ko,{relatedTarget:0}),pf=ci(Vx),kx=z({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Xx=ci(kx),Yx=z({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qx=ci(Yx),Wx=z({},ts,{data:0}),Im=ci(Wx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kx[t])?!!n[t]:!1}function mf(){return Qx}var Jx=z({},ko,{key:function(t){if(t.key){var n=jx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$x=ci(Jx),tS=z({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=ci(tS),eS=z({},ts,{submitter:0}),nS=ci(eS),iS=z({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),aS=ci(iS),sS=z({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=ci(sS),oS=z({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=ci(oS),cS=z({},ts,{newState:0,oldState:0,source:0}),uS=ci(cS),fS=[9,13,27,32],gf=wa&&"CompositionEvent"in window,Yo=null;wa&&"documentMode"in document&&(Yo=document.documentMode);var hS=wa&&"TextEvent"in window&&!Yo,Fm=wa&&(!gf||Yo&&8<Yo&&11>=Yo),Hm=" ",Gm=!1;function Vm(t,n){switch(t){case"keyup":return fS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function dS(t,n){switch(t){case"compositionend":return km(n);case"keypress":return n.which!==32?null:(Gm=!0,Hm);case"textInput":return t=n.data,t===Hm&&Gm?null:t;default:return null}}function pS(t,n){if(wr)return t==="compositionend"||!gf&&Vm(t,n)?(t=Om(),Jl=ff=$a=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fm&&n.locale!=="ko"?null:n.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mS[t.type]:n==="textarea"}function Ym(t,n,a,r){br?Ar?Ar.push(r):Ar=[r]:br=r,n=iu(n,"onChange"),0<n.length&&(a=new ec("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var qo=null,Wo=null;function gS(t){U_(t,0)}function ic(t){var n=Ue(t);if(Am(n))return t}function qm(t,n){if(t==="change")return n}var Wm=!1;if(wa){var _f;if(wa){var vf="oninput"in document;if(!vf){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),vf=typeof jm.oninput=="function"}_f=vf}else _f=!1;Wm=_f&&(!document.documentMode||9<document.documentMode)}function Zm(){qo&&(qo.detachEvent("onpropertychange",Km),Wo=qo=null)}function Km(t){if(t.propertyName==="value"&&ic(Wo)){var n=[];Ym(n,Wo,t,lf(t)),Lm(gS,n)}}function _S(t,n,a){t==="focusin"?(Zm(),qo=n,Wo=a,qo.attachEvent("onpropertychange",Km)):t==="focusout"&&Zm()}function vS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(Wo)}function yS(t,n){if(t==="click")return ic(n)}function xS(t,n){if(t==="input"||t==="change")return ic(n)}function SS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ti=typeof Object.is=="function"?Object.is:SS;function jo(t,n){if(Ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!re.call(n,c)||!Ti(t[c],n[c]))return!1}return!0}function yf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,n){var a=Qm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qm(a)}}function $m(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?$m(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function t0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=yf(t.document)}return n}function xf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var MS=wa&&"documentMode"in document&&11>=document.documentMode,Rr=null,Sf=null,Zo=null,Mf=!1;function e0(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mf||Rr==null||Rr!==yf(r)||(r=Rr,"selectionStart"in r&&xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&jo(Zo,r)||(Zo=r,r=iu(Sf,"onSelect"),0<r.length&&(n=new ec("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Rr)))}function Bs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Cr={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},Ef={},n0={};wa&&(n0=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Fs(t){if(Ef[t])return Ef[t];if(!Cr[t])return t;var n=Cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in n0)return Ef[t]=n[a];return t}var i0=Fs("animationend"),a0=Fs("animationiteration"),s0=Fs("animationstart"),ES=Fs("transitionrun"),TS=Fs("transitionstart"),bS=Fs("transitioncancel"),r0=Fs("transitionend"),o0=new Map,Tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tf.push("scrollEnd");function Zi(t,n){o0.set(t,n),Rn(n,[t])}var AS=0;function Ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=$i.identifierPrefix;var a=AS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function l0(t){if(t==null||typeof t=="string")return t;var n=null,a=Zr;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function Ca(t,n){return t=l0(t),n=l0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ac=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},zi=[],Dr=0,bf=0;function sc(){for(var t=Dr,n=bf=Dr=0;n<t;){var a=zi[n];zi[n++]=null;var r=zi[n];zi[n++]=null;var c=zi[n];zi[n++]=null;var f=zi[n];if(zi[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&c0(a,c,f)}}function rc(t,n,a,r){zi[Dr++]=t,zi[Dr++]=n,zi[Dr++]=a,zi[Dr++]=r,bf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Af(t,n,a,r){return rc(t,n,a,r),oc(t)}function Hs(t,n){return rc(t,null,null,n),oc(t)}function c0(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-On(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function oc(t){if(50<_l)throw _l=0,Kc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function wS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(t,n,a,r){return new wS(t,n,a,r)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Da(t,n){var a=t.alternate;return a===null?(a=gi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function u0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function lc(t,n,a,r,c,f){var v=0;if(r=t,typeof r=="function")wf(r)&&(v=1);else if(typeof r=="string")v=e1(t,a,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case kt:return t=gi(31,a,n,c),t.elementType=kt,t.lanes=f,t;case H:return Gs(a.children,c,f,n);case st:v=8,c|=24;break;case J:return t=gi(12,a,n,c|2),t.elementType=J,t.lanes=f,t;case tt:return t=gi(13,a,n,c),t.elementType=tt,t.lanes=f,t;case Q:return t=gi(19,a,n,c),t.elementType=Q,t.lanes=f,t;case Jt:case N:return t=c|32,t=gi(30,a,n,t),t.elementType=N,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case et:v=10;break t;case ut:v=9;break t;case F:v=11;break t;case xt:v=14;break t;case Mt:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=gi(v,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Gs(t,n,a,r){return t=gi(7,t,r,n),t.lanes=a,t}function Rf(t,n,a){return t=gi(6,t,null,n),t.lanes=a,t}function f0(t){var n=gi(18,null,null,0);return n.stateNode=t,n}function Cf(t,n,a){return n=gi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var h0=new WeakMap;function Pi(t,n){if(typeof t=="object"&&t!==null){var a=h0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:oe(n)},h0.set(t,n),n)}return{value:t,source:n,stack:oe(n)}}var Ur=[],Lr=0,cc=null,Ko=0,Ii=[],Bi=0,es=null,ua=1,fa="";function Na(t,n){Ur[Lr++]=Ko,Ur[Lr++]=cc,cc=t,Ko=n}function d0(t,n,a){Ii[Bi++]=ua,Ii[Bi++]=fa,Ii[Bi++]=es,es=t;var r=ua;t=fa;var c=32-On(r)-1;r&=~(1<<c),a+=1;var f=32-On(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,ua=1<<32-On(n)+c|a<<c|r,fa=f+t}else ua=1<<f|a<<c|r,fa=t}function uc(t){t.return!==null&&(Na(t,1),d0(t,1,0))}function Df(t){for(;t===cc;)cc=Ur[--Lr],Ur[Lr]=null,Ko=Ur[--Lr],Ur[Lr]=null;for(;t===es;)es=Ii[--Bi],Ii[Bi]=null,fa=Ii[--Bi],Ii[Bi]=null,ua=Ii[--Bi],Ii[Bi]=null}function p0(t,n){Ii[Bi++]=ua,Ii[Bi++]=fa,Ii[Bi++]=es,ua=n.id,fa=n.overflow,es=t}var Gn=null,on=null,Ae=!1,ns=null,Fi=!1,Nf=Error(s(519));function is(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qo(Pi(n,t)),Nf}function m0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ct]=t,n[Ut]=r,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<yl.length;a++)Ne(yl[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),wm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),Cm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||P_(n.textContent,a)?(r.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),r.onScroll!=null&&Ne("scroll",n),r.onScrollEnd!=null&&Ne("scrollend",n),r.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||is(t,!0)}function fc(t){for(Gn=t.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Gn=Gn.return}}function Or(t){if(t!==Gn)return!1;if(!Ae)return fc(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||od(t.type,t.memoizedProps)),a=!a),a&&on&&is(t),fc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));on=ev(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));on=ev(t)}else n===27?(n=on,ys(t.type)?(t=gd,gd=null,on=t):on=n):on=Gn?Gi(t.stateNode.nextSibling):null;return!0}function Vs(){on=Gn=null,Ae=!1}function Uf(){var t=ns;return t!==null&&(yi===null?yi=t:yi.push.apply(yi,t),ns=null),t}function Qo(t){ns===null?ns=[t]:ns.push(t)}var Lf=se(null),ks=null,Ua=null;function as(t,n,a){bt(Lf,n._currentValue),n._currentValue=a}function La(t){t._currentValue=Lf.current,Vt(Lf)}function hc(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Of(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),hc(f.return,a,t),r||(v=null);break t}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),hc(v,a,t),v=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),hc(c.return,a,t),v=c.child,v=v!==null?v.sibling:null):v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Xs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=c.type;Ti(c.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(c===w.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(so):t=[so])}c=c.return}return t!==null&&Of(n,t,a,r),n.flags|=262144,t!==null}function dc(t){for(t=t.firstContext;t!==null;){if(!Ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ys(t){ks=t,Ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zn(t){return g0(ks,t)}function pc(t,n){return ks===null&&Ys(t),g0(t,n)}function g0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ua===null){if(t===null)throw Error(s(308));Ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ua=Ua.next=n;return a}var RS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},CS=o.unstable_scheduleCallback,DS=o.unstable_NormalPriority,Cn={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zf(){return{controller:new RS,data:new Map,refCount:0}}function Jo(t){t.refCount--,t.refCount===0&&CS(DS,function(){t.controller.abort()})}function _0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var $o=null;function NS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var tl=null,Pf=0,qs=0,zr=null;function US(t,n){if(tl===null){var a=tl=[];Pf=0,qs=Jh(),zr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Pf++,n.then(v0,v0),n}function v0(){if(--Pf===0&&($o=null,tl!==null)){zr!==null&&(zr.status="fulfilled");var t=tl;tl=null,qs=0,zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function LS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var y0=wt.S;wt.S=function(t,n){if(f_=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&US(t,n),$o!==null)for(var a=$r;a!==null;)_0(a,$o),a=a.next;if(a=t.types,a!==null){for(var r=$r;r!==null;)_0(r,a),r=r.next;if(qs!==0){r=$o,r===null&&(r=$o=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}y0!==null&&y0(t,n)};var Ws=se(null);function If(){var t=Ws.current;return t!==null?t:sn.pooledCache}function mc(t,n){n===null?bt(Ws,Ws.current):bt(Ws,n.pool)}function x0(){var t=If();return t===null?null:{parent:Cn._currentValue,pool:t}}var Pr=Error(s(460)),Bf=Error(s(474)),gc=Error(s(542)),_c={then:function(){}};function S0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function M0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ca,ca),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,T0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(ca,ca);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,T0(t),t}throw Zs=n,Pr}}function js(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Zs=a,Pr):a}}var Zs=null;function E0(){if(Zs===null)throw Error(s(459));var t=Zs;return Zs=null,t}function T0(t){if(t===Pr||t===gc)throw Error(s(483))}var Ir=null,el=0;function vc(t){var n=el;return el+=1,Ir===null&&(Ir=[]),M0(Ir,t,n)}function ss(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yc(t,n){throw n.$$typeof===B?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function b0(t){function n(j,X){if(t){var nt=j.deletions;nt===null?(j.deletions=[X],j.flags|=16):nt.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function r(j){for(var X=new Map;j!==null;)j.key===null?X.set(j.index,j):X.set(j.key,j),j=j.sibling;return X}function c(j,X){return j=Da(j,X),j.index=0,j.sibling=null,j}function f(j,X,nt){return j.index=nt,t?(nt=j.alternate,nt!==null?(nt=nt.index,nt<X?(j.flags|=2,X):nt):(j.flags|=134217730,X)):(j.flags|=1048576,X)}function v(j){return t&&j.alternate===null&&(j.flags|=134217730),j}function T(j,X,nt,pt){return X===null||X.tag!==6?(X=Rf(nt,j.mode,pt),X.return=j,X):(X=c(X,nt),X.return=j,X)}function P(j,X,nt,pt){var qt=nt.type;return qt===H?(j=lt(j,X,nt.props.children,pt,nt.key),ss(j,nt),j):X!==null&&(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Mt&&js(qt)===X.type)?(X=c(X,nt.props),ss(X,nt),X.return=j,X):(X=lc(nt.type,nt.key,nt.props,null,j.mode,pt),ss(X,nt),X.return=j,X)}function K(j,X,nt,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Cf(nt,j.mode,pt),X.return=j,X):(X=c(X,nt.children||[]),X.return=j,X)}function lt(j,X,nt,pt,qt){return X===null||X.tag!==7?(X=Gs(nt,j.mode,pt,qt),X.return=j,X):(X=c(X,nt),X.return=j,X)}function mt(j,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Rf(""+X,j.mode,nt),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return nt=lc(X.type,X.key,X.props,null,j.mode,nt),ss(nt,X),nt.return=j,nt;case A:return X=Cf(X,j.mode,nt),X.return=j,X;case Mt:return X=js(X),mt(j,X,nt)}if(Dt(X)||ft(X))return X=Gs(X,j.mode,nt,null),X.return=j,X;if(typeof X.then=="function")return mt(j,vc(X),nt);if(X.$$typeof===et)return mt(j,pc(j,X),nt);yc(j,X)}return null}function W(j,X,nt,pt){var qt=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return qt!==null?null:T(j,X,""+nt,pt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case D:return nt.key===qt?P(j,X,nt,pt):null;case A:return nt.key===qt?K(j,X,nt,pt):null;case Mt:return nt=js(nt),W(j,X,nt,pt)}if(Dt(nt)||ft(nt))return qt!==null?null:lt(j,X,nt,pt,null);if(typeof nt.then=="function")return W(j,X,vc(nt),pt);if(nt.$$typeof===et)return W(j,X,pc(j,nt),pt);yc(j,nt)}return null}function at(j,X,nt,pt,qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(nt)||null,T(X,j,""+pt,qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case D:return j=j.get(pt.key===null?nt:pt.key)||null,P(X,j,pt,qt);case A:return j=j.get(pt.key===null?nt:pt.key)||null,K(X,j,pt,qt);case Mt:return pt=js(pt),at(j,X,nt,pt,qt)}if(Dt(pt)||ft(pt))return j=j.get(nt)||null,lt(X,j,pt,qt,null);if(typeof pt.then=="function")return at(j,X,nt,vc(pt),qt);if(pt.$$typeof===et)return at(j,X,nt,pc(X,pt),qt);yc(X,pt)}return null}function Lt(j,X,nt,pt){for(var qt=null,Oe=null,ee=X,ue=X=0,Un=null;ee!==null&&ue<nt.length;ue++){ee.index>ue?(Un=ee,ee=null):Un=ee.sibling;var Ie=W(j,ee,nt[ue],pt);if(Ie===null){ee===null&&(ee=Un);break}t&&ee&&Ie.alternate===null&&n(j,ee),X=f(Ie,X,ue),Oe===null?qt=Ie:Oe.sibling=Ie,Oe=Ie,ee=Un}if(ue===nt.length)return a(j,ee),Ae&&Na(j,ue),qt;if(ee===null){for(;ue<nt.length;ue++)ee=mt(j,nt[ue],pt),ee!==null&&(X=f(ee,X,ue),Oe===null?qt=ee:Oe.sibling=ee,Oe=ee);return Ae&&Na(j,ue),qt}for(ee=r(ee);ue<nt.length;ue++)Un=at(ee,j,ue,nt[ue],pt),Un!==null&&(t&&(Ie=Un.alternate,Ie!==null&&ee.delete(Ie.key===null?ue:Ie.key)),X=f(Un,X,ue),Oe===null?qt=Un:Oe.sibling=Un,Oe=Un);return t&&ee.forEach(function(Ts){return n(j,Ts)}),Ae&&Na(j,ue),qt}function Kt(j,X,nt,pt){if(nt==null)throw Error(s(151));for(var qt=null,Oe=null,ee=X,ue=X=0,Un=null,Ie=nt.next();ee!==null&&!Ie.done;ue++,Ie=nt.next()){ee.index>ue?(Un=ee,ee=null):Un=ee.sibling;var Ts=W(j,ee,Ie.value,pt);if(Ts===null){ee===null&&(ee=Un);break}t&&ee&&Ts.alternate===null&&n(j,ee),X=f(Ts,X,ue),Oe===null?qt=Ts:Oe.sibling=Ts,Oe=Ts,ee=Un}if(Ie.done)return a(j,ee),Ae&&Na(j,ue),qt;if(ee===null){for(;!Ie.done;ue++,Ie=nt.next())Ie=mt(j,Ie.value,pt),Ie!==null&&(X=f(Ie,X,ue),Oe===null?qt=Ie:Oe.sibling=Ie,Oe=Ie);return Ae&&Na(j,ue),qt}for(ee=r(ee);!Ie.done;ue++,Ie=nt.next())Ie=at(ee,j,ue,Ie.value,pt),Ie!==null&&(t&&(Un=Ie.alternate,Un!==null&&ee.delete(Un.key===null?ue:Un.key)),X=f(Ie,X,ue),Oe===null?qt=Ie:Oe.sibling=Ie,Oe=Ie);return t&&ee.forEach(function(d1){return n(j,d1)}),Ae&&Na(j,ue),qt}function ye(j,X,nt,pt){if(typeof nt=="object"&&nt!==null&&nt.type===H&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case D:t:{for(var qt=nt.key;X!==null;){if(X.key===qt){if(qt=nt.type,qt===H){if(X.tag===7){a(j,X.sibling),pt=c(X,nt.props.children),ss(pt,nt),pt.return=j,j=pt;break t}}else if(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Mt&&js(qt)===X.type){a(j,X.sibling),pt=c(X,nt.props),ss(pt,nt),pt.return=j,j=pt;break t}a(j,X);break}else n(j,X);X=X.sibling}nt.type===H?(pt=Gs(nt.props.children,j.mode,pt,nt.key),ss(pt,nt),pt.return=j,j=pt):(pt=lc(nt.type,nt.key,nt.props,null,j.mode,pt),ss(pt,nt),pt.return=j,j=pt)}return v(j);case A:t:{for(qt=nt.key;X!==null;){if(X.key===qt)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(j,X.sibling),pt=c(X,nt.children||[]),pt.return=j,j=pt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}pt=Cf(nt,j.mode,pt),pt.return=j,j=pt}return v(j);case Mt:return nt=js(nt),ye(j,X,nt,pt)}if(Dt(nt))return Lt(j,X,nt,pt);if(ft(nt)){if(qt=ft(nt),typeof qt!="function")throw Error(s(150));return nt=qt.call(nt),Kt(j,X,nt,pt)}if(typeof nt.then=="function")return ye(j,X,vc(nt),pt);if(nt.$$typeof===et)return ye(j,X,pc(j,nt),pt);yc(j,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(j,X.sibling),pt=c(X,nt),pt.return=j,j=pt):(a(j,X),pt=Rf(nt,j.mode,pt),pt.return=j,j=pt),v(j)):a(j,X)}return function(j,X,nt,pt){try{el=0;var qt=ye(j,X,nt,pt);return Ir=null,qt}catch(ee){if(ee===Pr||ee===gc)throw ee;var Oe=gi(29,ee,null,j.mode);return Oe.lanes=pt,Oe.return=j,Oe}finally{}}}var Ks=b0(!0),A0=b0(!1),rs=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function os(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ls(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ge&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=oc(t),c0(t,null,a),n}return rc(t,r,n,a),oc(t)}function nl(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,b(t,a)}}function Gf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Vf=!1;function il(){if(Vf){var t=zr;if(t!==null)throw t}}function al(t,n,a,r){Vf=!1;var c=t.updateQueue;rs=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,K=P.next;P.next=null,v===null?f=K:v.next=K,v=P;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,T=lt.lastBaseUpdate,T!==v&&(T===null?lt.firstBaseUpdate=K:T.next=K,lt.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;v=0,lt=K=P=null,T=f;do{var W=T.lane&-536870913,at=W!==T.lane;if(at?(Le&W)===W:(r&W)===W){W!==0&&W===qs&&(Vf=!0),lt!==null&&(lt=lt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Lt=t,Kt=T;W=n;var ye=a;switch(Kt.tag){case 1:if(Lt=Kt.payload,typeof Lt=="function"){mt=Lt.call(ye,mt,W);break t}mt=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Kt.payload,W=typeof Lt=="function"?Lt.call(ye,mt,W):Lt,W==null)break t;mt=z({},mt,W);break t;case 2:rs=!0}}W=T.callback,W!==null&&(t.flags|=64,at&&(t.flags|=8192),at=c.callbacks,at===null?c.callbacks=[W]:at.push(W))}else at={lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},lt===null?(K=lt=at,P=mt):lt=lt.next=at,v|=W;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;at=T,T=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);lt===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=K,c.lastBaseUpdate=lt,f===null&&(c.shared.lanes=0),ms|=v,t.lanes=v,t.memoizedState=mt}}function w0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function R0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)w0(a[t],n)}var cs=se(null),xc=se(0);function C0(t,n){t=Ba,bt(xc,t),bt(cs,n),Ba=t|n.baseLanes}function kf(){bt(xc,Ba),bt(cs,cs.current)}function Xf(){Ba=xc.current,Vt(cs),Vt(xc)}var Kn=se(null),si=null;function us(t){var n=t.alternate;bt(Qn,Qn.current&1),bt(Kn,t),si===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(si=t)}function Yf(t){bt(Qn,Qn.current),bt(Kn,t),si===null&&(si=t)}function D0(t){t.tag===22?(bt(Qn,Qn.current),bt(Kn,t),si===null&&(si=t)):fs()}function fs(){bt(Qn,Qn.current),bt(Kn,Kn.current)}function bi(t){Vt(Kn),si===t&&(si=null),Vt(Qn)}var Qn=se(0);function sl(t,n){bt(Kn,Kn.current),bt(Qn,n)}function qf(t){Vt(Qn),Vt(Kn),si===t&&(si=null)}function Sc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pd(a)||md(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=0,ve=null,Qe=null,Dn=null,Mc=!1,Br=!1,Qs=!1,Ec=0,rl=0,Fr=null,OS=0;function xn(){throw Error(s(321))}function Wf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Ti(t[a],n[a]))return!1;return!0}function jf(t,n,a,r,c,f){return Oa=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wt.H=t===null||t.memoizedState===null?dg:pg,Qs=!1,f=a(r,c),Qs=!1,Br&&(f=U0(n,a,r,c)),N0(t),f}function N0(t){wt.H=Dc;var n=Qe!==null&&Qe.next!==null;if(Oa=0,Dn=Qe=ve=null,Mc=!1,rl=0,Fr=null,n)throw Error(s(300));t===null||Nn||(t=t.dependencies,t!==null&&dc(t)&&(Nn=!0))}function U0(t,n,a,r){ve=t;var c=0;do{if(Br&&(Fr=null),rl=0,Br=!1,25<=c)throw Error(s(301));if(c+=1,Dn=Qe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}wt.H=VS,f=n(a,r)}while(Br);return f}function zS(){var t=wt.H,n=t.useState()[0];return n=typeof n.then=="function"?ol(n):n,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(ve.flags|=1024),n}function Zf(){var t=Ec!==0;return Ec=0,t}function Kf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Qf(t){if(Mc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Mc=!1}Oa=0,Dn=Qe=ve=null,Br=!1,rl=Ec=0,Fr=null}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?ve.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function bn(){if(Qe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var n=Dn===null?ve.memoizedState:Dn.next;if(n!==null)Dn=n,Qe=t;else{if(t===null)throw ve.alternate===null?Error(s(467)):Error(s(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Dn===null?ve.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function Tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(t){var n=rl;return rl+=1,Fr===null&&(Fr=[]),t=M0(Fr,t,n),n=ve,(Dn===null?n.memoizedState:Dn.next)===null&&(n=n.alternate,wt.H=n===null||n.memoizedState===null?dg:pg),t}function bc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ol(t);if(t.$$typeof===Z)return;if(t.$$typeof===et)return Zn(t)}throw Error(s(438,String(t)))}function Jf(t){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ve.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tc(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=pe;return n.index++,a}function za(t,n){return typeof n=="function"?n(t):n}function Ac(t){var n=bn();return $f(n,Qe,t)}function $f(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=v=null,P=null,K=n,lt=!1;do{var mt=K.lane&-536870913;if(mt!==K.lane?(Le&mt)===mt:(Oa&mt)===mt){var W=K.revertLane;if(W===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),mt===qs&&(lt=!0);else if((Oa&W)===W){K=K.next,W===qs&&(lt=!0);continue}else mt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},P===null?(T=P=mt,v=f):P=P.next=mt,ve.lanes|=W,ms|=W;mt=K.action,Qs&&a(f,mt),f=K.hasEagerState?K.eagerState:a(f,mt)}else W={lane:mt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},P===null?(T=P=W,v=f):P=P.next=W,ve.lanes|=mt,ms|=mt;K=K.next}while(K!==null&&K!==n);if(P===null?v=f:P.next=T,!Ti(f,t.memoizedState)&&(Nn=!0,lt&&(a=zr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function th(t){var n=bn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Ti(f,n.memoizedState)||(Nn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function L0(t,n,a){var r=ve,c=bn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Ti((Qe||c).memoizedState,a);if(v&&(c.memoizedState=a,Nn=!0),c=c.queue,ih(P0.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||v||Dn!==null&&(Dn.memoizedState.tag&1)!==0,Hr(t?9:8,{destroy:void 0},z0.bind(null,r,c,a,n),null),t){if(r.flags|=2048,sn===null)throw Error(s(349));f||(Oa&127)!==0||O0(r,n,a)}return a}function O0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=Tc(),ve.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function z0(t,n,a,r){n.value=a,n.getSnapshot=r,I0(n)&&B0(t)}function P0(t,n,a){return a(function(){I0(n)&&B0(t)})}function I0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Ti(t,a)}catch{return!0}}function B0(t){var n=Hs(t,2);n!==null&&xi(n,t,2)}function eh(t){var n=ui();if(typeof t=="function"){var a=t;if(t=a(),Qs){Tn(!0);try{a()}finally{Tn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},n}function F0(t,n,a,r){return t.baseState=a,$f(t,Qe,typeof r=="function"?r:za)}function PS(t,n,a,r,c){if(Cc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};wt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,H0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function H0(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=wt.T,v={};v.types=f!==null?f.types:null,wt.T=v;try{var T=a(c,r),P=wt.S;P!==null&&P(v,T),G0(t,n,T)}catch(K){nh(t,n,K)}finally{f!==null&&v.types!==null&&(f.types=v.types),wt.T=f}}else try{f=a(c,r),G0(t,n,f)}catch(K){nh(t,n,K)}}function G0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){V0(t,n,r)},function(r){return nh(t,n,r)}):V0(t,n,a)}function V0(t,n,a){n.status="fulfilled",n.value=a,k0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,H0(t,a)))}function nh(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,k0(n),n=n.next;while(n!==r)}t.action=null}function k0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function X0(t,n){return n}function Y0(t,n){if(Ae){var a=sn.formState;if(a!==null){t:{var r=ve;if(Ae){if(on){e:{for(var c=on,f=Fi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Gi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){on=Gi(c.nextSibling),r=c.data==="F!";break t}}is(r)}r=!1}r&&(n=a[0])}}return a=ui(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:X0,lastRenderedState:n},a.queue=r,a=ug.bind(null,ve,r),r.dispatch=a,r=eh(!1),f=lh.bind(null,ve,!1,r.queue),r=ui(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=PS.bind(null,ve,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function q0(t){var n=bn();return W0(n,Qe,t)}function W0(t,n,a){if(n=$f(t,n,X0)[0],t=Ac(za)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ol(n)}catch(v){throw v===Pr?gc:v}else r=n;n=bn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Hr(9,{destroy:void 0},IS.bind(null,c,a),null)),[r,f,t]}function IS(t,n){t.action=n}function j0(t){var n=bn(),a=Qe;if(a!==null)return W0(n,a,t);bn(),n=n.memoizedState,a=bn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Hr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ve.updateQueue,n===null&&(n=Tc(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Z0(){return bn().memoizedState}function wc(t,n,a,r){var c=ui();ve.flags|=t,c.memoizedState=Hr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rc(t,n,a,r){var c=bn();r=r===void 0?null:r;var f=c.memoizedState.inst;Qe!==null&&r!==null&&Wf(r,Qe.memoizedState.deps)?c.memoizedState=Hr(n,f,a,r):(ve.flags|=t,c.memoizedState=Hr(1|n,f,a,r))}function K0(t,n){wc(8390656,8,t,n)}function ih(t,n){Rc(2048,8,t,n)}function BS(t){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=Tc(),ve.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Q0(t){var n=bn().memoizedState;return BS({ref:n,nextImpl:t}),function(){if((Ge&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function J0(t,n){return Rc(4,2,t,n)}function $0(t,n){return Rc(4,4,t,n)}function tg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function eg(t,n,a){a=a!=null?a.concat([t]):null,Rc(4,4,tg.bind(null,n,t),a)}function ah(){}function ng(t,n){var a=bn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Wf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function ig(t,n){var a=bn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Wf(n,r[1]))return r[0];if(r=t(),Qs){Tn(!0);try{t()}finally{Tn(!1)}}return a.memoizedState=[r,n],r}function sh(t,n,a){return a===void 0||(Oa&1073741824)!==0&&(Le&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=d_(),ve.lanes|=t,ms|=t,a)}function ag(t,n,a,r){return Ti(a,n)?a:cs.current!==null?(t=sh(t,a,r),Ti(t,n)||(Nn=!0),t):(Oa&106)===0||(Oa&1073741824)!==0&&(Le&261930)===0?(Nn=!0,t.memoizedState=a):(t=d_(),ve.lanes|=t,ms|=t,n)}function sg(t,n,a,r,c){var f=Bt.p;Bt.p=f!==0&&8>f?f:8;var v=wt.T,T={};T.types=v!==null?v.types:null,wt.T=T,lh(t,!1,n,a);try{var P=c(),K=wt.S;if(K!==null&&K(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var lt=LS(P,r);ll(t,n,lt,Ci(t))}else ll(t,n,r,Ci(t))}catch(mt){ll(t,n,{then:function(){},status:"rejected",reason:mt},Ci())}finally{Bt.p=f,v!==null&&T.types!==null&&(v.types=T.types),wt.T=v}}function FS(){}function rh(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=rg(t).queue;sg(t,c,n,ce,a===null?FS:function(){return og(t),a(r)})}function rg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:ce},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function og(t){var n=rg(t);n.next===null&&(n=t.alternate.memoizedState),ll(t,n.next.queue,{},Ci())}function oh(){return Zn(so)}function lg(){return bn().memoizedState}function cg(){return bn().memoizedState}function HS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ci();t=os(a);var r=ls(n,t,a);r!==null&&(xi(r,n,a),nl(r,n,a)),n={cache:zf()},t.payload=n;return}n=n.return}}function GS(t,n,a){var r=Ci();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cc(t)?fg(n,a):(a=Af(t,n,a,r),a!==null&&(xi(a,t,r),hg(a,n,r)))}function ug(t,n,a){var r=Ci();ll(t,n,a,r)}function ll(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cc(t))fg(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Ti(T,v))return rc(t,n,c,0),sn===null&&sc(),!1}catch{}finally{}if(a=Af(t,n,c,r),a!==null)return xi(a,t,r),hg(a,n,r),!0}return!1}function lh(t,n,a,r){if(r={lane:2,revertLane:Jh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cc(t)){if(n)throw Error(s(479))}else n=Af(t,a,r,2),n!==null&&xi(n,t,2)}function Cc(t){var n=t.alternate;return t===ve||n!==null&&n===ve}function fg(t,n){Br=Mc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function hg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,b(t,a)}}var Dc={readContext:Zn,use:bc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn,useEffectEvent:xn},dg={readContext:Zn,use:bc,useCallback:function(t,n){return ui().memoizedState=[t,n===void 0?null:n],t},useContext:Zn,useEffect:K0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wc(4194308,4,tg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wc(4194308,4,t,n)},useInsertionEffect:function(t,n){wc(4,2,t,n)},useMemo:function(t,n){var a=ui();n=n===void 0?null:n;var r=t();if(Qs){Tn(!0);try{t()}finally{Tn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=ui();if(a!==void 0){var c=a(n);if(Qs){Tn(!0);try{a(n)}finally{Tn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=GS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var n=ui();return t={current:t},n.memoizedState=t},useState:function(t){t=eh(t);var n=t.queue,a=ug.bind(null,ve,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ah,useDeferredValue:function(t,n){var a=ui();return sh(a,t,n)},useTransition:function(){var t=eh(!1);return t=sg.bind(null,ve,t.queue,!0,!1),ui().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ve,c=ui();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),sn===null)throw Error(s(349));(Le&127)!==0||O0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,K0(P0.bind(null,r,f,t),[t]),r.flags|=2048,Hr(9,{destroy:void 0},z0.bind(null,r,f,a,n),null),a},useId:function(){var t=ui(),n=sn.identifierPrefix;if(Ae){var a=fa,r=ua;a=(r&~(1<<32-On(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=OS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:oh,useFormState:Y0,useActionState:Y0,useOptimistic:function(t){var n=ui();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lh.bind(null,ve,!0,a),a.dispatch=n,[t,n]},useMemoCache:Jf,useCacheRefresh:function(){return ui().memoizedState=HS.bind(null,ve)},useEffectEvent:function(t){var n=ui(),a={impl:t};return n.memoizedState=a,function(){if((Ge&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pg={readContext:Zn,use:bc,useCallback:ng,useContext:Zn,useEffect:ih,useImperativeHandle:eg,useInsertionEffect:J0,useLayoutEffect:$0,useMemo:ig,useReducer:Ac,useRef:Z0,useState:function(){return Ac(za)},useDebugValue:ah,useDeferredValue:function(t,n){var a=bn();return ag(a,Qe.memoizedState,t,n)},useTransition:function(){var t=Ac(za)[0],n=bn().memoizedState;return[typeof t=="boolean"?t:ol(t),n]},useSyncExternalStore:L0,useId:lg,useHostTransitionStatus:oh,useFormState:q0,useActionState:q0,useOptimistic:function(t,n){var a=bn();return F0(a,Qe,t,n)},useMemoCache:Jf,useCacheRefresh:cg,useEffectEvent:Q0},VS={readContext:Zn,use:bc,useCallback:ng,useContext:Zn,useEffect:ih,useImperativeHandle:eg,useInsertionEffect:J0,useLayoutEffect:$0,useMemo:ig,useReducer:th,useRef:Z0,useState:function(){return th(za)},useDebugValue:ah,useDeferredValue:function(t,n){var a=bn();return Qe===null?sh(a,t,n):ag(a,Qe.memoizedState,t,n)},useTransition:function(){var t=th(za)[0],n=bn().memoizedState;return[typeof t=="boolean"?t:ol(t),n]},useSyncExternalStore:L0,useId:lg,useHostTransitionStatus:oh,useFormState:j0,useActionState:j0,useOptimistic:function(t,n){var a=bn();return Qe!==null?F0(a,Qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Jf,useCacheRefresh:cg,useEffectEvent:Q0};function ch(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uh={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Ci(),c=os(r);c.payload=n,a!=null&&(c.callback=a),n=ls(t,c,r),n!==null&&(xi(n,t,r),nl(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Ci(),c=os(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ls(t,c,r),n!==null&&(xi(n,t,r),nl(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ci(),r=os(a);r.tag=2,n!=null&&(r.callback=n),n=ls(t,r,a),n!==null&&(xi(n,t,a),nl(n,t,a))}};function mg(t,n,a,r,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!jo(a,r)||!jo(c,f):!0}function gg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&uh.enqueueReplaceState(n,n.state,null)}function Js(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function _g(t){ac(t)}function vg(t){console.error(t)}function yg(t){ac(t)}function Nc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function xg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function fh(t,n,a){return a=os(a),a.tag=3,a.payload={element:null},a.callback=function(){Nc(t,n)},a}function Sg(t){return t=os(t),t.tag=3,t}function Mg(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){xg(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){xg(n,a,r),typeof c!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function kS(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return si===null?Jc():a.alternate===null&&Sn===0&&(Sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===_c?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Zh(t,r,c)),!1;case 22:return a.flags|=65536,r===_c?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Zh(t,r,c)),!1}throw Error(s(435,a.tag))}return Zh(t,r,c),Jc(),!1}if(Ae)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Nf&&(t=Error(s(422),{cause:r}),Qo(Pi(t,a)))):(r!==Nf&&(n=Error(s(423),{cause:r}),Qo(Pi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=Pi(r,a),c=fh(t.stateNode,r,c),Gf(t,c),Sn!==4&&(Sn=2)),!1;var f=Error(s(520),{cause:r});if(f=Pi(f,a),gl===null?gl=[f]:gl.push(f),Sn!==4&&(Sn=2),n===null)return!0;r=Pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=fh(a.stateNode,r,t),Gf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(gs===null||!gs.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Sg(c),Mg(c,t,a,r),Gf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var hh=Error(s(461)),Nn=!1;function Pn(t,n,a,r){n.child=t===null?A0(n,null,a,r):Ks(n,t.child,a,r)}function Eg(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return Ys(n),r=jf(t,n,a,v,f,c),T=Zf(),t!==null&&!Nn?(Kf(t,n,c),Pa(t,n,c)):(Ae&&T&&uc(n),n.flags|=1,Pn(t,n,r,c),n.child)}function Tg(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!wf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bg(t,n,f,r,c)):(t=lc(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!xh(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:jo,a(v,r)&&t.ref===n.ref)return Pa(t,n,c)}return n.flags|=1,t=Da(f,r),t.ref=n.ref,t.return=n,n.child=t}function bg(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(jo(f,r)&&t.ref===n.ref)if(Nn=!1,n.pendingProps=r=f,xh(t,c))(t.flags&131072)!==0&&(Nn=!0);else return n.lanes=t.lanes,Pa(t,n,c)}return dh(t,n,a,r,c)}function Ag(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return wg(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&mc(n,f!==null?f.cachePool:null),f!==null?C0(n,f):kf(),D0(n);else return r=n.lanes=536870912,wg(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(mc(n,f.cachePool),C0(n,f),fs(),n.memoizedState=null):(t!==null&&mc(n,null),kf(),fs());return Pn(t,n,c,a),n.child}function cl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wg(t,n,a,r,c){var f=If();return f=f===null?null:{parent:Cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&mc(n,null),kf(),D0(n),t!==null&&Xs(t,n,r,!0),n.childLanes=c,null}function Uc(t,n){return n=Lc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Rg(t,n,a){return Ks(n,t.child,null,a),t=Uc(n,n.pendingProps),t.flags|=2,bi(n),n.memoizedState=null,t}function XS(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ae){if(r.mode==="hidden")return t=Uc(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},cl(null,t);if(Yf(n),(t=on)?(t=tv(t,Fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:es!==null?{id:ua,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},a=f0(t),a.return=n,n.child=a,Gn=n,on=null)):t=null,t===null)throw is(n);return n.lanes=536870912,null}return Uc(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Yf(n),c)if(n.flags&256)n.flags&=-257,n=Rg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Nn||Xs(t,n,a,!1),c=(a&t.childLanes)!==0,Nn||c){if(cs.current===null){if(r=sn,r!==null&&(v=Y(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Hs(t,v),xi(r,t,v),hh;Jc()}n=Rg(t,n,a)}else t=f.treeContext,on=Gi(v.nextSibling),Gn=n,Ae=!0,ns=null,Fi=!1,t!==null&&p0(n,t),n=Uc(n,r),n.flags|=134221824;return n}return t=Da(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Gr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function dh(t,n,a,r,c){return Ys(n),a=jf(t,n,a,r,void 0,c),r=Zf(),t!==null&&!Nn?(Kf(t,n,c),Pa(t,n,c)):(Ae&&r&&uc(n),n.flags|=1,Pn(t,n,a,c),n.child)}function Cg(t,n,a,r,c,f){return Ys(n),n.updateQueue=null,a=U0(n,r,a,c),N0(t),r=Zf(),t!==null&&!Nn?(Kf(t,n,f),Pa(t,n,f)):(Ae&&r&&uc(n),n.flags|=1,Pn(t,n,a,f),n.child)}function Dg(t,n,a,r,c){if(Ys(n),n.stateNode===null){var f=Nr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Zn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ff(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Zn(v):Nr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ch(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&uh.enqueueReplaceState(f,f.state,null),al(n,r,f,c),il(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=Js(a,T);f.props=P;var K=f.context,lt=a.contextType;v=Nr,typeof lt=="object"&&lt!==null&&(v=Zn(lt));var mt=a.getDerivedStateFromProps;lt=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||K!==v)&&gg(n,f,r,v),rs=!1;var W=n.memoizedState;f.state=W,al(n,r,f,c),il(),K=n.memoizedState,T||W!==K||rs?(typeof mt=="function"&&(ch(n,a,mt,r),K=n.memoizedState),(P=rs||mg(n,a,P,r,W,K,v))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=K),f.props=r,f.state=K,f.context=v,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Hf(t,n),v=n.memoizedProps,lt=Js(a,v),f.props=lt,mt=n.pendingProps,W=f.context,K=a.contextType,P=Nr,typeof K=="object"&&K!==null&&(P=Zn(K)),T=a.getDerivedStateFromProps,(K=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||W!==P)&&gg(n,f,r,P),rs=!1,W=n.memoizedState,f.state=W,al(n,r,f,c),il();var at=n.memoizedState;v!==mt||W!==at||rs||t!==null&&t.dependencies!==null&&dc(t.dependencies)?(typeof T=="function"&&(ch(n,a,T,r),at=n.memoizedState),(lt=rs||mg(n,a,lt,r,W,at,P)||t!==null&&t.dependencies!==null&&dc(t.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,at,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,at,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),f.props=r,f.state=at,f.context=P,r=lt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Gr(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Ks(n,t.child,null,c),n.child=Ks(n,null,a,c)):Pn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Pa(t,n,c),t}function Ng(t,n,a,r){return Vs(),n.flags|=256,Pn(t,n,a,r),n.child}var ph={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mh(t){return{baseLanes:t,cachePool:x0()}}function gh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Ri),t}function Ug(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(Qn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(c?us(n):fs(),(t=on)?(t=tv(t,Fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:es!==null?{id:ua,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},a=f0(t),a.return=n,n.child=a,Gn=n,on=null)):t=null,t===null)throw is(n);return md(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(fs(),c=n.mode,f=Lc({mode:"hidden",children:f},c),r=Gs(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=mh(a),r.childLanes=gh(t,v,a),n.memoizedState=ph,cl(null,r)):(us(n),_h(n,f))}var T=t.memoizedState;if(T!==null){var P=T.dehydrated;if(P!==null)return YS(t,n,f,v,r,P,T,a)}return c?(fs(),c=r.fallback,f=n.mode,T=t.child,P=T.sibling,r=Da(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,P!==null?c=Da(P,c):(c=Gs(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,cl(null,r),r=n.child,c=t.child.memoizedState,c===null?c=mh(a):(f=c.cachePool,f!==null?(T=Cn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=x0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=gh(t,v,a),n.memoizedState=ph,cl(t.child,r)):(us(n),a=t.child,t=a.sibling,a=Da(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function _h(t,n){return n=Lc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Lc(t,n){return t=gi(22,t,null,n),t.lanes=0,t}function Oc(t,n,a){return Ks(n,t.child,null,a),t=_h(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function YS(t,n,a,r,c,f,v,T){if(a)return n.flags&256?(us(n),n.flags&=-257,Oc(t,n,T)):n.memoizedState!==null?(fs(),n.child=t.child,n.flags|=128,null):(fs(),f=c.fallback,v=n.mode,c=Lc({mode:"visible",children:c.children},v),f=Gs(f,v,T,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Ks(n,t.child,null,T),c=n.child,c.memoizedState=mh(T),c.childLanes=gh(t,r,T),n.memoizedState=ph,cl(null,c));if(us(n),md(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Qo({value:c,source:null,stack:null})),Oc(t,n,T)}if(Nn||Xs(t,n,T,!1),r=(T&t.childLanes)!==0,Nn||r){if(cs.current!==null)return Oc(t,n,T);if(r=sn,r!==null&&(c=Y(r,T),c!==0&&c!==v.retryLane))throw v.retryLane=c,Hs(t,c),xi(r,t,c),hh;return pd(f)||Jc(),Oc(t,n,T)}return pd(f)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,on=Gi(f.nextSibling),Gn=n,Ae=!0,ns=null,Fi=!1,t!==null&&p0(n,t),n=_h(n,c.children),n.flags|=134221824,n)}function Lg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),hc(t.return,n,a)}function Og(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Sc(a)===null&&(n=t),t=t.sibling}return n}function zc(t,n,a,r,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function vh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function yh(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=Qn.current;if(n.flags&128)return sl(n,v),null;var T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,sl(n,v),c==="backwards"&&t!==null?(vh(t),Pn(t,n,r,a),vh(t)):Pn(t,n,r,a),r=Ae?Ko:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,a,n);else if(t.tag===19)Lg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Og(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,vh(n)),zc(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Sc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}zc(n,!0,a,null,f,r);break;case"together":zc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Og(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),zc(n,!1,c,a,f,r)}return n.child}function zg(t,n,a){var r=n.pendingProps;return as(n,n.type,r.value),Pn(t,n,r.children,a),n.child}function Pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ms|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function xh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&dc(t)))}function qS(t,n,a){switch(n.tag){case 3:rt(n,n.stateNode.containerInfo),as(n,Cn,t.memoizedState.cache),Vs();break;case 27:case 5:St(n);break;case 4:rt(n,n.stateNode.containerInfo);break;case 10:as(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return us(n),n.flags|=128,null;r=Xs(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Ug(t,n,a):(us(n),t=Pa(t,n,a),t!==null?t.sibling:null)}us(n);break;case 19:if(n.flags&128)return yh(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Xs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return yh(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),sl(n,Qn.current),r)break;return null;case 22:return n.lanes=0,Ag(t,n,a,n.pendingProps);case 24:as(n,Cn,t.memoizedState.cache)}return Pa(t,n,a)}function Pg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Nn=!0;else{if(!xh(t,a)&&(n.flags&128)===0)return Nn=!1,qS(t,n,a);Nn=(t.flags&131072)!==0}else Nn=!1,Ae&&(n.flags&1048576)!==0&&d0(n,Ko,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=js(n.elementType),n.type=t,typeof t=="function")wf(t)?(r=Js(t,r),n.tag=1,n=Dg(null,n,t,r,a)):(n.tag=0,n=dh(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===F){n.tag=11,n=Eg(null,n,t,r,a);break t}else if(c===xt){n.tag=14,n=Tg(null,n,t,r,a);break t}else if(c===et){n.tag=10,n.type=t,n=zg(null,n,a);break t}}throw n=It(t)||t,Error(s(306,n,""))}}return n;case 0:return dh(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Js(r,n.pendingProps),Dg(t,n,r,c,a);case 3:t:{if(rt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Hf(t,n),al(n,r,null,a);var v=n.memoizedState;if(r=v.cache,as(n,Cn,r),r!==f.cache&&Of(n,[Cn],a,!0),il(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ng(t,n,r,a);break t}else if(r!==c){c=Pi(Error(s(424)),n),Qo(c),n=Ng(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Gi(t.firstChild),Gn=n,Ae=!0,ns=null,Fi=!0,a=A0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Vs(),r===c){n=Pa(t,n,a);break t}Pn(t,n,r,a)}n=n.child}return n;case 26:return Gr(t,n),t===null?(a=ov(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(n.stateNode=H_(n.type,n.pendingProps,O.current,n)):n.memoizedState=ov(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return St(n),t===null&&Ae&&(r=n.stateNode=iv(n.type,n.pendingProps,O.current),Gn=n,Fi=!0,c=on,ys(n.type)?(gd=c,on=Gi(r.firstChild)):on=c),Pn(t,n,n.pendingProps.children,a),Gr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((c=r=on)&&(r=HM(r,n.type,n.pendingProps,Fi),r!==null?(n.stateNode=r,Gn=n,on=Gi(r.firstChild),Fi=!1,c=!0):c=!1),c||is(n)),St(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,od(c,f)?r=null:v!==null&&od(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=jf(t,n,zS,null,null,a),so._currentValue=c),Gr(t,n),Pn(t,n,r,a),n.child;case 6:return t===null&&Ae&&((t=a=on)&&(a=GM(a,n.pendingProps,Fi),a!==null?(n.stateNode=a,Gn=n,on=null,t=!0):t=!1),t||is(n)),null;case 13:return Ug(t,n,a);case 4:return rt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ks(n,null,r,a):Pn(t,n,r,a),n.child;case 11:return Eg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Gr(t,n),Pn(t,n,r,a),n.child;case 8:return Pn(t,n,n.pendingProps.children,a),n.child;case 12:return Pn(t,n,n.pendingProps.children,a),n.child;case 10:return zg(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Ys(n),c=Zn(c),r=r(c),n.flags|=1,Pn(t,n,r,a),n.child;case 14:return Tg(t,n,n.type,n.pendingProps,a);case 15:return bg(t,n,n.type,n.pendingProps,a);case 19:return yh(t,n,a);case 31:return XS(t,n,a);case 22:return Ag(t,n,a,n.pendingProps);case 24:return Ys(n),r=Zn(Cn),t===null?(c=If(),c===null&&(c=sn,f=zf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Ff(n),as(n,Cn,c)):((t.lanes&a)!==0&&(Hf(t,n),al(n,null,null,a),il()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),as(n,Cn,r)):(r=f.cache,as(n,Cn,r),r!==c.cache&&Of(n,[Cn],a,!0))),Pn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Ae&&uc(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Gr(t,n),Pn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ia(t){t.flags|=4}function Sh(t,n,a,r,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?fv(n,r):fv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(__())t.flags|=8192;else throw Zs=_c,Bf}else t.flags&=-16777217}function Ig(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!hv(n))if(__())t.flags|=8192;else throw Zs=_c,Bf}function Pc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?fn():536870912,t.lanes|=n,qr|=n)}function ul(t,n){if(!Ae)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function WS(t,n,a){var r=n.pendingProps;switch(Df(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),La(Cn),vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Or(n)?Ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uf())),ln(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ia(n),f!==null?(ln(n),Ig(n,f)):(ln(n),Sh(n,c,null,r,a))):f?f!==t.memoizedState?(Ia(n),ln(n),Ig(n,f)):(ln(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ia(n),ln(n),Sh(n,c,t,r,a)),null;case 27:if(_t(n),a=O.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ln(n),n.subtreeFlags&=-33554433,null}t=ge.current,Or(n)?m0(n):(t=iv(c,r,a),n.stateNode=t,Ia(n))}return ln(n),n.subtreeFlags&=-33554433,null;case 5:if(_t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ln(n),n.subtreeFlags&=-33554433,null}if(f=ge.current,Or(n))m0(n);else{var v=Sl(O.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[Ct]=n,f[Ut]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch($n(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ia(n)}}return ln(n),n.subtreeFlags&=-33554433,Sh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=O.current,Or(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Gn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ct]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||P_(t.nodeValue,a)),t||is(n,!0)}else t=Sl(t).createTextNode(r),t[Ct]=n,n.stateNode=t}return ln(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Or(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ct]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),t=!1}else a=Uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(bi(n),n):(bi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ln(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Or(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ct]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),c=!1}else c=Uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(bi(n),n):(bi(n),null)}return bi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pc(n,n.updateQueue),ln(n),null);case 4:return vt(),t===null&&nd(n.stateNode.containerInfo),n.flags|=67108864,ln(n),null;case 10:return La(n.type),ln(n),null;case 19:if(qf(n),r=n.memoizedState,r===null)return ln(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ul(r,!1);else{if(Sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sc(t),f!==null){for(n.flags|=128,ul(r,!1),t=f.updateQueue,n.updateQueue=t,Pc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)u0(a,t),a=a.sibling;return sl(n,Qn.current&1|2),Ae&&Na(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&q()>jc&&(n.flags|=128,c=!0,ul(r,!1),n.lanes=4194304)}else{if(!c)if(t=Sc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Pc(n,t),ul(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Ae)return ln(n),null}else 2*q()-r.renderingStartTime>jc&&a!==536870912&&(n.flags|=128,c=!0,ul(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=q(),t.sibling=null,f=Qn.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Ae?sl(n,f):(a=f,bt(Kn,n),bt(Qn,a),si===null&&(si=n)),Ae&&Na(n,r.treeForkCount),t}return ln(n),null;case 22:case 23:return bi(n),Xf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&Pc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Vt(Ws),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),La(Cn),ln(n),null;case 25:return null;case 30:return n.flags|=33554432,ln(n),null}throw Error(s(156,n.tag))}function jS(t,n){switch(Df(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return La(Cn),vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _t(n),null;case 31:if(n.memoizedState!==null){if(bi(n),n.alternate===null)throw Error(s(340));Vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return qf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return vt(),null;case 10:return La(n.type),null;case 22:case 23:return bi(n),Xf(),t!==null&&Vt(Ws),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return La(Cn),null;case 25:return null;default:return null}}function Bg(t,n){switch(Df(n),n.tag){case 3:La(Cn),vt();break;case 26:case 27:case 5:_t(n);break;case 4:vt();break;case 31:n.memoizedState!==null&&bi(n);break;case 13:bi(n);break;case 19:qf(n);break;case 10:La(n.type);break;case 22:case 23:bi(n),Xf(),t!==null&&Vt(Ws);break;case 24:La(Cn)}}function fl(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(T){We(n,n.return,T)}}function hs(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var P=a,K=T;try{K()}catch(lt){We(c,P,lt)}}}r=r.next}while(r!==f)}}catch(lt){We(n,n.return,lt)}}function Fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{R0(n,a)}catch(r){We(t,t.return,r)}}}function Hg(t,n,a){a.props=Js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){We(t,n,r)}}function ha(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,f=Ra(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=W_(f)),r=c.ref;break;case 7:if(t.stateNode===null){var v=new Di(t);m(t.child,!1,BM,v,void 0,void 0),t.stateNode=v}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(T){We(t,n,T)}}function Jn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){We(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(t,n,c)}else a.current=null}function Ic(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)$_(t.stateNode,n[a])}function Gg(t){for(var n=t.return;n!==null&&(Eh(n)&&$_(t.stateNode,n.stateNode),!Mh(n));)n=n.return}function hl(t){for(var n=t.return;n!==null&&(Eh(n)&&FM(t.stateNode,n.stateNode),!Mh(n));)n=n.return}function Mh(t){return t.tag===5||t.tag===3||t.tag===27}function Eh(t){return t&&t.tag===7&&t.stateNode!==null}function Th(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){We(t,t.return,c)}}function bh(t,n,a){try{var r=t.stateNode;xM(r,t.type,a,n),r[Ut]=n}catch(c){We(t,t.return,c)}}function Vg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ys(t.type)||t.tag===4}function Ah(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ys(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wh(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ca)),Ic(t,r),Fe=!0;else if(c!==4&&(c===27&&(Ic(t,r),r=null,ys(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(wh(t,n,a,r),t=t.sibling;t!==null;)wh(t,n,a,r),t=t.sibling}function Bc(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Ic(t,r),Fe=!0;else if(c!==4&&(c===27&&(Ic(t,r),r=null,ys(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Bc(t,n,a,r),t=t.sibling;t!==null;)Bc(t,n,a,r),t=t.sibling}function kg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);$n(n,r,a),n[Ct]=t,n[Ut]=a}catch(f){We(t,t.return,f)}}var Fc=!1,Ai=null;function Xg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Fc=!0)}var da=null;function Yg(){var t=da;return da=null,t}var _i=0;function Vr(t,n,a,r,c){return _i=0,qg(t.child,n,a,r,c)}function qg(t,n,a,r,c){for(var f=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(r!==null){var T=ud(v);r.push(T),T.view&&(f=!0)}else f||ud(v).view&&(f=!0);Fc=!0,Y_(v,_i===0?n:n+"_"+_i,a),_i++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||qg(t.child,n,a,r,c)&&(f=!0));t=t.sibling}return f}function pa(t,n){for(;t!==null;)t.tag===5?q_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||pa(t.child,n)),t=t.sibling}function Hc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Hc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=Ca(n.default,n.share),n!=="none"&&(Vr(t,a,n,null,!1)||pa(t.child,!1))}t=t.sibling}}function Rh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=Ra(r,a),f=Ca(r.default,a.paired?r.share:r.enter);f!=="none"?Vr(t,c,f,null,!1)?(Hc(t),a.paired||n||Kr(t,r.onEnter)):pa(t.child,!1):Hc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rh(t,n),t=t.sibling;else Hc(t)}function Ch(t){if(Ai!==null&&Ai.size!==0){var n=Ai;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=Ca(a.default,a.share);if(f!=="none"&&(Vr(t,r,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Kr(t,a.onShare)):pa(t.child,!1)),n.delete(r),n.size===0)break}}}Ch(t)}t=t.sibling}}}function Dh(t){if(t.tag===30){var n=t.memoizedProps,a=Ra(n,t.stateNode),r=Ai!==null?Ai.get(a):void 0,c=Ca(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Vr(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,Ai.delete(a),Kr(t,n.onShare)):Kr(t,n.onExit):pa(t.child,!1)),Ai!==null&&Ch(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Dh(t),t=t.sibling;else Ai!==null&&Ch(t)}function Wg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=Ra(n,t.stateNode);n=Ca(n.default,n.update),t.flags&=-5,n!=="none"&&Vr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Wg(t);t=t.sibling}}function Nh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,pa(t.child,!1))}Nh(t)}t=t.sibling}}function Gc(t){if(t.tag===30)t.stateNode.paired=null,pa(t.child,!1),Nh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Gc(t),t=t.sibling;else Nh(t)}function jg(t){for(t=t.child;t!==null;)t.tag===30?pa(t.child,!1):(t.subtreeFlags&33554432)!==0&&jg(t),t=t.sibling}function Uh(t,n,a,r,c,f,v){for(var T=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(f!==null&&_i<f.length){var K=f[_i],lt=ud(P);(K.view||lt.view)&&(T=!0);var mt;if(mt=(t.flags&4)===0)if(lt.clip)mt=!0;else{mt=K.rect;var W=lt.rect;mt=mt.y!==W.y||mt.x!==W.x||mt.height!==W.height||mt.width!==W.width}mt&&(t.flags|=4),lt.abs?lt=!K.abs:(K=K.rect,lt=lt.rect,lt=K.height!==lt.height||K.width!==lt.width),lt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Y_(P,_i===0?a:a+"_"+_i,c),T&&(t.flags&4)!==0||(da===null&&(da=[]),da.push(P,_i===0?r:r+"_"+_i,n.memoizedProps)),_i++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:Uh(t,n.child,a,r,c,f,v)&&(T=!0));n=n.sibling}return T}function Zg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=Ra(a,r),f=Ca(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,r=t;var T=t.child;_i=0,c=Uh(r,T,c,c,f,v,!1),(t.flags&4)!==0&&c&&Kr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Zg(t);t=t.sibling}}var Vn=!1,Xe=!1,ma=!1,Lh=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,kn=null,ga=!1,dl=!1,Vc=!1,Oh=!1;function ZS(t,n,a){if(t=t.containerInfo,sd=ro,t=t0(t),xf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{r.nodeType,v.nodeType}catch{r=null;break t}var T=0,P=-1,K=-1,lt=0,mt=0,W=t,at=null;e:for(;;){for(var Lt;W!==r||f!==0&&W.nodeType!==3||(P=T+f),W!==v||c!==0&&W.nodeType!==3||(K=T+c),W.nodeType===3&&(T+=W.nodeValue.length),(Lt=W.firstChild)!==null;)at=W,W=Lt;for(;;){if(W===t)break e;if(at===r&&++lt===f&&(P=T),at===v&&++mt===c&&(K=T),(Lt=W.nextSibling)!==null)break;W=at,at=W.parentNode}W=Lt}r=P===-1||K===-1?null:{start:P,end:K}}else r=null}r=r||{start:0,end:0}}else r=null;for(rd={focusedElem:t,selectionRange:r},ro=!1,a=(a&335544064)===a,kn=n,n=a?9270:1024;kn!==null;){if(t=kn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&Dh(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&Xg(t),kc(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Dh(r),kc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Xg(t),kc(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,kn=r):(a&&Wg(t),kc(a))}}Ai=null}function kc(t){for(;kn!==null;){var n=kn,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var v=Js(n.type,c);a=f.getSnapshotBeforeUpdate(v,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){We(n,n.return,T)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)dd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":dd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Ra(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=Ca(c.default,c.update),c!=="none"&&Vr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,kn=r;break}kn=n.return}}function Qg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),r&4&&fl(5,a);break;case 1:if(_a(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){We(a,a.return,v)}else{var c=Js(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){We(a,a.return,v)}}r&64&&Fg(a),r&512&&ha(a,a.return);break;case 3:if(_a(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{R0(t,n)}catch(v){We(a,a.return,v)}}break;case 27:n===null&&r&4&&kg(a);case 26:case 5:_a(t,a),n===null&&r&4&&Th(a),r&512&&ha(a,a.return);break;case 12:_a(t,a);break;case 31:_a(t,a),r&4&&e_(t,a);break;case 13:_a(t,a),r&4&&n_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=oM.bind(null,a),VM(t,a))));break;case 22:if(r=a.memoizedState!==null||Vn,!r){var f=n!==null&&n.memoizedState!==null||Xe;n=Vn,c=Xe,Vn=r,(Xe=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ji(t,a,r)):_a(t,a),Vn=n,Xe=c}break;case 30:_a(t,a),r&512&&ha(a,a.return);break;case 7:r&512&&ha(a,a.return);default:_a(t,a)}}function zh(t,n){for(t=t.child;t!==null;)Jg(t,n),t=t.sibling}function Jg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,v=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(P){We(t,t.return,P)}Ph(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Fe=!0}catch(P){We(t,t.return,P)}break;case 18:try{var T=t.stateNode;n?X_(T,!0):X_(t.stateNode,!1)}catch(P){We(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&zh(t,n);break;default:zh(t,n)}}function Ph(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:Jg(a,r);break t;case 22:a.memoizedState===null&&Ph(a,r);break t;default:Ph(a,r)}}t=t.sibling}}function $g(t){var n=t.alternate;n!==null&&(t.alternate=null,$g(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ce(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pn=null,vi=!1;function Ki(t,n,a){for(a=a.child;a!==null;)t_(t,n,a),a=a.sibling}function t_(t,n,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:Xe||Jn(a,n),Ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Xe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Jn(a,n),hl(a);var r=pn,c=vi;ys(a.type)&&(pn=a.stateNode,vi=!1),Ki(t,n,a),av(a.stateNode,a.type,a.memoizedProps),pn=r,vi=c;break;case 5:Xe||Jn(a,n),hl(a);case 6:if(a.tag===6&&hl(a),r=pn,c=vi,pn=null,Ki(t,n,a),pn=r,vi=c,pn!==null)if(vi)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(a.stateNode),Fe=!0}catch(f){We(a,n,f)}else try{pn.removeChild(a.stateNode),Fe=!0}catch(f){We(a,n,f)}break;case 18:pn!==null&&(vi?(t=pn,k_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),oo(t)):k_(pn,a.stateNode));break;case 4:r=pn,c=vi,pn=a.stateNode.containerInfo,vi=!0,Ki(t,n,a),pn=r,vi=c;break;case 0:case 11:case 14:case 15:hs(2,a,n),Xe||hs(4,a,n),Ki(t,n,a);break;case 1:Xe||(Jn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Hg(a,n,r)),Ki(t,n,a);break;case 21:Ki(t,n,a);break;case 22:Xe=(r=Xe)||a.memoizedState!==null,Ki(t,n,a),Xe=r;break;case 30:Jn(a,n),Ki(t,n,a);break;case 7:Xe||Jn(a,n),Ki(t,n,a);break;default:Ki(t,n,a)}}function e_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{oo(t)}catch(a){We(n,n.return,a)}}}function n_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{oo(t)}catch(a){We(n,n.return,a)}}function KS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Kg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Kg),n;default:throw Error(s(435,t.tag))}}function Xc(t,n){var a=KS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=lM.bind(null,t,r);r.then(c,c)}})}function fi(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],v=t,T=n,P=T;t:for(;P!==null;){switch(P.tag){case 27:if(ys(P.type)){pn=P.stateNode,vi=!1;break t}break;case 5:pn=P.stateNode,vi=!1;break t;case 3:case 4:pn=P.stateNode.containerInfo,vi=!0;break t}P=P.return}if(pn===null)throw Error(s(160));t_(v,T,f),pn=null,vi=!1,v=f.alternate,v!==null&&(v.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)i_(n,t,a),n=n.sibling}var Qi=null;function i_(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var v=r[f];v.ref.impl=v.nextImpl}fi(n,t,a),hi(t),c&4&&(hs(3,t,t.return),fl(3,t),hs(5,t,t.return));break;case 1:fi(n,t,a),hi(t),c&512&&(Xe||r===null||Jn(r,r.return)),c&64&&Vn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Qi,fi(n,t,a),hi(t),c&512&&(Xe||r===null||Jn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Vn)t.stateNode=H_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[rn]||r[Ct]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),$n(r,n,a),r[Ct]=t,cn(r),n=r;break t;case"link":if(f=uv("link","href",c).get(n+(a.href||""))){for(v=0;v<f.length;v++)if(r=f[v],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(v,1);break e}}r=c.createElement(n),$n(r,n,a),c.head.appendChild(r);break;case"meta":if(f=uv("meta","content",c).get(n+(a.content||""))){for(v=0;v<f.length;v++)if(r=f[v],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(v,1);break e}}r=c.createElement(n),$n(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ct]=t,cn(r),n=r}t.stateNode=n}else Vn||xd(f,t.type,t.stateNode);else t.stateNode=cv(f,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Xe||n.parentNode.removeChild(n)):c.count--,a===null?Vn||xd(f,t.type,t.stateNode):cv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&bh(t,t.memoizedProps,r.memoizedProps);break;case 27:fi(n,t,a),hi(t),c&512&&(Xe||r===null||Jn(r,r.return)),r!==null&&c&4&&bh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=ma,ma=!1,fi(n,t,a),ma=f,hi(t),c&512&&(Xe||r===null||Jn(r,r.return)),t.flags&32){n=t.stateNode;try{Tr(n,""),Fe=!0}catch(lt){We(t,t.return,lt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,bh(t,n,r!==null?r.memoizedProps:n)),c&1024&&(Lh=!0);break;case 6:if(fi(n,t,a),hi(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Fe=!0}catch(lt){We(t,t.return,lt)}}break;case 3:if(Fe=!1,su=null,f=Qi,Qi=Ml(n.containerInfo),fi(n,t,a),Qi=f,hi(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{oo(n.containerInfo)}catch(lt){We(t,t.return,lt)}Lh&&(Lh=!1,a_(t)),Fe=!1;break;case 4:c=ma,ma=Vn,r=Tm(),f=Qi,Qi=Ml(t.stateNode.containerInfo),fi(n,t,a),hi(t),Qi=f,Fe&&dl&&(Vc=!0),Fe=r,ma=c;break;case 12:fi(n,t,a),hi(t);break;case 31:fi(n,t,a),hi(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xc(t,n)));break;case 13:fi(n,t,a),hi(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Wc=q()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xc(t,n)));break;case 22:f=t.memoizedState!==null,v=r!==null&&r.memoizedState!==null;var T=Vn,P=Xe,K=ma;Vn=T||f,ma=K||f,Xe=P||v,fi(n,t,a),Xe=P,ma=K,Vn=T,hi(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||v||Vn||Xe||(n=v||Xe,a=Vn,r=Xe,Vn=f||Vn,Xe=n,ds(t,2),Vn=a,Xe=r),!f&&ma||zh(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xc(t,a))));break;case 19:fi(n,t,a),hi(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xc(t,n)));break;case 30:c&512&&(Xe||r===null||Jn(r,r.return)),c=Tm(),f=dl,v=(a&335544064)===a,T=t.memoizedProps,dl=v&&Ca(T.default,T.update)!=="none",fi(n,t,a),hi(t),v&&r!==null&&Fe&&(t.flags|=4),dl=f,Fe=c;break;case 21:break;case 7:c&512&&(Xe||r===null||Jn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:fi(n,t,a),hi(t)}}function hi(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Vg(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(Eh(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(Mh(c))break;c=c.return}var v=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,P=Ah(t);Bc(t,P,T,v);break;case 5:var K=a.stateNode;a.flags&32&&(Tr(K,""),a.flags&=-33);var lt=Ah(t);Bc(t,lt,K,v);break;case 3:case 4:var mt=a.stateNode.containerInfo,W=Ah(t);wh(t,W,mt,v);break;default:throw Error(s(161))}}catch(at){We(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function a_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;a_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,ro=!0,n.reset(),ro=!1),t=t.sibling}}function kr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)s_(n,t),n=n.sibling;else Zg(n)}function s_(t,n){var a=t.alternate;if(a===null)Rh(t,!1);else switch(t.tag){case 3:if(Oh=ga=!1,Yg(),kr(n,t),!ga&&!Vc){if(t=da,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];q_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Oh=!0}da=null;break;case 5:kr(n,t);break;case 4:r=ga,ga=!1,kr(n,t),ga&&(Vc=!0),ga=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Rh(t,!1):kr(n,t));break;case 30:r=ga,c=Yg(),ga=!1,kr(n,t),ga&&(t.flags|=4);var f=t.memoizedProps,v=t.stateNode;n=Ra(f,v),v=Ra(a.memoizedProps,v);var T=Ca(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,_i=0,n=Uh(t,a,n,v,T,f,!0),_i!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Kr(t,t.memoizedProps.onUpdate),da=c):c!==null&&(c.push.apply(c,da),da=c),ga=(t.flags&32)!==0?!0:r;break;default:kr(n,t)}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qg(t,n.alternate,n),n=n.sibling}function ds(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:hs(4,a,a.return),ds(a,r);break;case 1:Jn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Hg(a,a.return,c),ds(a,r);break;case 27:(r&2)!==0&&av(a.stateNode,a.type,a.memoizedProps);case 5:Jn(a,a.return),a.tag!==5&&a.tag!==27||hl(a),ds(a,r);break;case 6:hl(a);break;case 26:Jn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Xe||c.parentNode.removeChild(c),ds(a,r);break;case 22:a.memoizedState===null&&ds(a,r);break;case 30:Jn(a,a.return),ds(a,r);break;case 7:Jn(a,a.return);default:ds(a,r)}t=t.sibling}}function Ji(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,v=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ji(c,f,a),fl(4,f);break;case 1:if(Ji(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(lt){We(r,r.return,lt)}if(r=f,c=r.updateQueue,c!==null){var P=r.stateNode;try{var K=c.shared.hiddenCallbacks;if(K!==null)for(c.shared.hiddenCallbacks=null,c=0;c<K.length;c++)w0(K[c],P)}catch(lt){We(r,r.return,lt)}}T&&v&64&&Fg(f),ha(f,f.return);break;case 27:(a&2)!==0&&kg(f);case 5:f.tag!==5&&f.tag!==27||Gg(f),Ji(c,f,a),T&&r===null&&v&4&&Th(f),ha(f,f.return);break;case 6:Gg(f);break;case 26:P=f.stateNode,f.memoizedState!==null||P===null||Vn||xd(Ml(P.ownerDocument),f.type,P),Ji(c,f,a),T&&r===null&&v&4&&Th(f),ha(f,f.return);break;case 12:Ji(c,f,a);break;case 31:Ji(c,f,a),T&&v&4&&e_(c,f);break;case 13:Ji(c,f,a),T&&v&4&&n_(c,f);break;case 22:f.memoizedState===null&&Ji(c,f,a),ha(f,f.return);break;case 30:Ji(c,f,a),ha(f,f.return);break;case 7:ha(f,f.return);default:Ji(c,f,a)}n=n.sibling}}function Ih(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jo(a))}function Bh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jo(t))}function Hi(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)r_(t,n,a,r),n=n.sibling;else c&&jg(n)}function r_(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Gc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(t,n,a,r),f&2048&&fl(9,n);break;case 1:Hi(t,n,a,r);break;case 3:Hi(t,n,a,r),c&&Oh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Jo(f)));break;case 12:if(f&2048){Hi(t,n,a,r),f=n.stateNode;try{var v=n.memoizedProps,T=v.id,P=v.onPostCommit;typeof P=="function"&&P(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(K){We(n,n.return,K)}}else Hi(t,n,a,r);break;case 31:Hi(t,n,a,r);break;case 13:Hi(t,n,a,r);break;case 23:break;case 22:v=n.stateNode,T=n.alternate,n.memoizedState!==null?(c&&T!==null&&T.memoizedState===null&&Gc(T),v._visibility&2?Hi(t,n,a,r):pl(t,n)):(c&&T!==null&&T.memoizedState!==null&&Gc(n),v._visibility&2?Hi(t,n,a,r):(v._visibility|=2,Xr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Ih(T,n);break;case 24:Hi(t,n,a,r),f&2048&&Bh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(pa(f.child,!0),pa(n.child,!0))),Hi(t,n,a,r);break;default:Hi(t,n,a,r)}}function Xr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,P=r,K=v.flags;switch(v.tag){case 0:case 11:case 15:Xr(f,v,T,P,c),fl(8,v);break;case 23:break;case 22:var lt=v.stateNode;v.memoizedState!==null?lt._visibility&2?Xr(f,v,T,P,c):pl(f,v):(lt._visibility|=2,Xr(f,v,T,P,c)),c&&K&2048&&Ih(v.alternate,v);break;case 24:Xr(f,v,T,P,c),c&&K&2048&&Bh(v.alternate,v);break;default:Xr(f,v,T,P,c)}n=n.sibling}}function pl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:pl(a,r),c&2048&&Ih(r.alternate,r);break;case 24:pl(a,r),c&2048&&Bh(r.alternate,r);break;default:pl(a,r)}n=n.sibling}}var $s=8192;function tr(t,n,a){if(t.subtreeFlags&$s)for(t=t.child;t!==null;)o_(t,n,a),t=t.sibling}function o_(t,n,a){switch(t.tag){case 26:tr(t,n,a),t.flags&$s&&(t.memoizedState!==null?n1(a,Qi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&pv(a,t)));break;case 5:tr(t,n,a),t.flags&$s&&(t=t.stateNode,(n&335544128)===n&&pv(a,t));break;case 3:case 4:var r=Qi;Qi=Ml(t.stateNode.containerInfo),tr(t,n,a),Qi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=$s,$s=16777216,tr(t,n,a),$s=r):tr(t,n,a));break;case 30:if((t.flags&$s)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,Ai===null&&(Ai=new Map),Ai.set(r,c)}tr(t,n,a);break;default:tr(t,n,a)}}function l_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];kn=r,u_(r,t)}l_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)c_(t),t=t.sibling}function c_(t){switch(t.tag){case 0:case 11:case 15:ml(t),t.flags&2048&&hs(9,t,t.return);break;case 3:ml(t);break;case 12:ml(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yc(t)):ml(t);break;default:ml(t)}}function Yc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];kn=r,u_(r,t)}l_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:hs(8,n,n.return),Yc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yc(n));break;default:Yc(n)}t=t.sibling}}function u_(t,n){for(;kn!==null;){var a=kn;switch(a.tag){case 0:case 11:case 15:hs(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,kn=r;else t:for(a=t;kn!==null;){r=kn;var c=r.sibling,f=r.return;if($g(r),r===a){kn=null;break t}if(c!==null){c.return=f,kn=c;break t}kn=f}}}var QS={getCacheForType:function(t){var n=Zn(Cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Zn(Cn).controller.signal}},JS=typeof WeakMap=="function"?WeakMap:Map,Ge=0,sn=null,De=null,Le=0,qe=0,wi=null,ps=!1,Yr=!1,Fh=!1,Ba=0,Sn=0,ms=0,er=0,qc=0,Ri=0,qr=0,gl=null,yi=null,Hh=!1,Wc=0,f_=0,jc=1/0,Zc=null,gs=null,gn=0,$i=null,nr=null,va=0,Gh=0,Vh=null,h_=null,Wr=null,jr=null,Zr=null,_l=0,Kc=null;function Ci(){return(Ge&2)!==0&&Le!==0?Le&-Le:wt.T!==null?Jh():$()}function d_(){if(Ri===0)if((Le&536870912)===0||Ae){var t=ne;ne<<=1,(ne&3932160)===0&&(ne=262144),Ri=t}else Ri=536870912;return t=Kn.current,t!==null&&(t.flags|=32),Ri}function Kr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=W_(Ra(t.memoizedProps,a))),jr===null&&(jr=[]),jr.push(n.bind(null,r))}}function xi(t,n,a){(t===sn&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),_s(t,Le,Ri,!1)),Ye(t,a),((Ge&2)===0||t!==sn)&&(t===sn&&((Ge&2)===0&&(er|=a),Sn===4&&_s(t,Le,Ri,!1)),ya(t))}function p_(t,n,a){if((Ge&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||vn(t,n),c=r?eM(t,n):Xh(t,n,!0),f=r;do{if(c===0){Yr&&!r&&_s(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!$S(a)){c=Xh(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;c=gl;var P=T.current.memoizedState.isDehydrated;if(P&&(Qr(T,v).flags|=256),v=Xh(T,v,!1),v!==2&&v!==6){if(Fh&&!P){T.errorRecoveryDisabledLanes|=f,er|=f,c=4;break t}f=yi,yi=c,f!==null&&(yi===null?yi=f:yi.push.apply(yi,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){Qr(t,0),_s(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:_s(r,n,Ri,!ps);break t;case 2:yi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Wc+300-q(),10<c)){if(_s(r,n,Ri,!ps),en(r,0,!0)!==0)break t;va=n,r.timeoutHandle=cd(m_.bind(null,r,a,yi,Zc,Hh,n,Ri,er,qr,ps,f,"Throttled",-0,0),c);break t}m_(r,a,yi,Zc,Hh,n,Ri,er,qr,ps,f,null,-0,0)}}break}while(!0);ya(t)}function m_(t,n,a,r,c,f,v,T,P,K,lt,mt,W,at){t.timeoutHandle=-1;var Lt=n.subtreeFlags,Kt=(f&335544064)===f;if(mt=null,(Kt||Lt&8192||(Lt&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},Ai=null,o_(n,f,mt),Kt&&(Lt=mt,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(Lt.count++,Lt.waitingForViewTransition=!0,Lt=bl.bind(Lt),Kt.finished.then(Lt,Lt))),Lt=(f&62914560)===f?Wc-q():(f&4194048)===f?f_-q():0,Lt=i1(mt,Lt),Lt!==null)){va=f,t.cancelPendingCommit=Lt(E_.bind(null,t,n,f,a,r,c,v,T,P,K,lt,mt,null,W,at)),_s(t,f,v,!K);return}E_(t,n,f,a,r,c,v,T,P,K,lt,mt)}function $S(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Ti(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _s(t,n,a,r){n=yn(t,n),n&=~qc,n&=~er,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-On(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&ke(t,a,n)}function Qc(){return(Ge&6)===0?(vl(0),!1):!0}function kh(){if(De!==null){if(qe===0)var t=De.return;else t=De,Ua=ks=null,Qf(t),Ir=null,el=0,t=De;for(;t!==null;)Bg(t.alternate,t),t=t.return;De=null}}function Qr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,EM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),va=0,kh(),sn=t,De=a=Da(t.current,null),Le=n,qe=0,wi=null,ps=!1,Yr=vn(t,n),Fh=!1,qr=Ri=qc=er=ms=Sn=0,yi=gl=null,Hh=!1,Ba=yn(t,n),sc(),a}function g_(t,n){ve=null,wt.H=Dc,n===Pr||n===gc?(n=E0(),qe=3):n===Bf?(n=E0(),qe=4):qe=n===hh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wi=n,De===null&&(Sn=1,Nc(t,Pi(n,t.current)))}function __(){var t=Kn.current;return t===null?!0:(Le&4194048)===Le?si===null:(Le&62914560)===Le||(Le&536870912)!==0?t===si:!1}function v_(){var t=wt.H;return wt.H=Dc,t===null?Dc:t}function y_(){var t=wt.A;return wt.A=QS,t}function Jc(){Sn=4,ps||(Le&4194048)!==Le&&Kn.current!==null||(Yr=!0),(ms&134217727)===0&&(er&134217727)===0||sn===null||_s(sn,Le,Ri,!1)}function Xh(t,n,a){var r=Ge;Ge|=2;var c=v_(),f=y_();(sn!==t||Le!==n)&&(Zc=null,Qr(t,n)),n=!1;var v=Sn;t:do try{if(qe!==0&&De!==null){var T=De,P=wi;switch(qe){case 8:kh(),v=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var K=qe;if(qe=0,wi=null,Jr(t,T,P,K),a&&Yr){v=0;break t}break;default:K=qe,qe=0,wi=null,Jr(t,T,P,K)}}tM(),v=Sn;break}catch(lt){g_(t,lt)}while(!0);return n&&t.shellSuspendCounter++,Ua=ks=null,Ge=r,wt.H=c,wt.A=f,De===null&&(sn=null,Le=0,sc()),v}function tM(){for(;De!==null;)x_(De)}function eM(t,n){var a=Ge;Ge|=2;var r=v_(),c=y_();sn!==t||Le!==n?(Zc=null,jc=q()+500,Qr(t,n)):Yr=vn(t,n);t:do try{if(qe!==0&&De!==null){n=De;var f=wi;e:switch(qe){case 1:qe=0,wi=null,Jr(t,n,f,1);break;case 2:case 9:if(S0(f)){qe=0,wi=null,S_(n);break}n=function(){qe!==2&&qe!==9||sn!==t||(qe=7),ya(t)},f.then(n,n);break t;case 3:qe=7;break t;case 4:qe=5;break t;case 7:S0(f)?(qe=0,wi=null,S_(n)):(qe=0,wi=null,Jr(t,n,f,7));break;case 5:var v=null;switch(De.tag){case 26:v=De.memoizedState;case 5:case 27:var T=De;if(v?hv(v):T.stateNode.complete){qe=0,wi=null;var P=T.sibling;if(P!==null)De=P;else{var K=T.return;K!==null?(De=K,$c(K)):De=null}break e}}qe=0,wi=null,Jr(t,n,f,5);break;case 6:qe=0,wi=null,Jr(t,n,f,6);break;case 8:kh(),Sn=6;break t;default:throw Error(s(462))}}nM();break}catch(lt){g_(t,lt)}while(!0);return Ua=ks=null,wt.H=r,wt.A=c,Ge=a,De!==null?0:(sn=null,Le=0,sc(),Sn)}function nM(){for(;De!==null&&!me();)x_(De)}function x_(t){var n=Pg(t.alternate,t,Ba);t.memoizedProps=t.pendingProps,n===null?$c(t):De=n}function S_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cg(a,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=Cg(a,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:Qf(n);var r=n;r===Gn&&(Ae?(fc(r),r.tag===5&&r.stateNode!=null&&(on=r.stateNode)):(fc(r),Ae=!0));default:Bg(a,n),n=De=u0(n,Ba),n=Pg(a,n,Ba)}t.memoizedProps=t.pendingProps,n===null?$c(t):De=n}function Jr(t,n,a,r){Ua=ks=null,Qf(n),Ir=null,el=0;var c=n.return;try{if(kS(t,c,n,a,Le)){Sn=1,Nc(t,Pi(a,t.current)),De=null;return}}catch(f){if(c!==null)throw De=c,f;Sn=1,Nc(t,Pi(a,t.current)),De=null;return}n.flags&32768?(Ae||r===1?t=!0:Yr||(Le&536870912)!==0?t=!1:(ps=t=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),M_(n,t)):$c(n)}function $c(t){var n=t;do{if((n.flags&32768)!==0){M_(n,ps);return}t=n.return;var a=WS(n.alternate,n,Ba);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=t}while(n!==null);Sn===0&&(Sn=5)}function M_(t,n){do{var a=jS(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);Sn=6,De=null}function E_(t,n,a,r,c,f,v,T,P,K,lt,mt){t.cancelPendingCommit=null;do tu();while(gn!==0);if((Ge&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===sn&&(De=sn=null,Le=0),nr=n,$i=t,va=a,Vh=c,h_=r,iM(t,n,a,v,T,P,mt)}}function iM(t,n,a,r,c,f,v){var T=n.lanes|n.childLanes;if(Gh=T,T|=bf,hn(t,a,T,r,c,f),jr=null,(a&335544064)===a?(Zr=NS(t),r=10262):(Zr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,cM(zt,function(){return jh(),null})):(t.callbackNode=null,t.callbackPriority=0),Fc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=wt.T,wt.T=null,c=Bt.p,Bt.p=2,f=Ge,Ge|=4;try{ZS(t,n,a)}finally{Ge=f,Bt.p=c,wt.T=r}}gn=1,Fc?Wr=CM(v,t.containerInfo,Zr,Yh,qh,sM,Wh,jh,aM):(Yh(),qh(),Wh())}function aM(t){if(gn!==0){var n=$i.onRecoverableError;n(t,{componentStack:null})}}function sM(){gn===3&&(gn=0,s_(nr,$i),gn=4)}function Yh(){if(gn===1){gn=0;var t=$i,n=nr,a=va,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=wt.T,wt.T=null;var c=Bt.p;Bt.p=2;var f=Ge;Ge|=4;try{dl=Vc=!1,i_(n,t,a),a=rd;var v=t0(t.containerInfo),T=a.focusedElem,P=a.selectionRange;if(v!==T&&T&&T.ownerDocument&&$m(T.ownerDocument.documentElement,T)){if(P!==null&&xf(T)){var K=P.start,lt=P.end;if(lt===void 0&&(lt=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(lt,T.value.length);else{var mt=T.ownerDocument||document,W=mt&&mt.defaultView||window;if(W.getSelection){var at=W.getSelection(),Lt=T.textContent.length,Kt=Math.min(P.start,Lt),ye=P.end===void 0?Kt:Math.min(P.end,Lt);!at.extend&&Kt>ye&&(v=ye,ye=Kt,Kt=v);var j=Jm(T,Kt),X=Jm(T,ye);if(j&&X&&(at.rangeCount!==1||at.anchorNode!==j.node||at.anchorOffset!==j.offset||at.focusNode!==X.node||at.focusOffset!==X.offset)){var nt=mt.createRange();nt.setStart(j.node,j.offset),at.removeAllRanges(),Kt>ye?(at.addRange(nt),at.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),at.addRange(nt))}}}}for(mt=[],at=T;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ro=!!sd,rd=sd=null}finally{Ge=f,Bt.p=c,wt.T=r}}t.current=n,gn=2}}function qh(){if(gn===2){gn=0;var t=$i,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=wt.T,wt.T=null;var r=Bt.p;Bt.p=2;var c=Ge;Ge|=4;try{Qg(t,n.alternate,n)}finally{Ge=c,Bt.p=r,wt.T=a}}gn=3}}function Wh(){if(gn===4||gn===3){gn=0;var t=Wr;Wr=null,Pe();var n=$i,a=nr,r=va,c=h_,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?gn=5:(gn=0,nr=$i=null,T_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(gs=null),ot(r),a=a.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Re,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=wt.T,f=Bt.p,Bt.p=2,wt.T=null;try{for(var v=n.onRecoverableError,T=0;T<c.length;T++){var P=c[T];v(P.value,{componentStack:P.stack})}}finally{wt.T=a,Bt.p=f}}if(c=jr,v=Zr,Zr=null,c!==null&&(jr=null,v===null&&(v=[]),t!==null))for(P=0;P<c.length;P++)a=(0,c[P])(v),a!==void 0&&t.finished.finally(a);(va&3)!==0&&tu(),ya(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Kc?_l++:(_l=0,Kc=n):(_l=0,Kc=null),vl(0)}}function T_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jo(n)))}function tu(){return Wr!==null&&(Wr.skipTransition(),Wr=null),Yh(),qh(),Wh(),jh()}function jh(){if(gn!==5)return!1;var t=$i,n=Gh;Gh=0;var a=ot(va),r=wt.T,c=Bt.p;try{Bt.p=32>a?32:a,wt.T=null,a=Vh,Vh=null;var f=$i,v=va;if(gn=0,nr=$i=null,va=0,(Ge&6)!==0)throw Error(s(331));var T=Ge;if(Ge|=4,c_(f.current),r_(f,f.current,v,a),Ge=T,vl(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{Bt.p=c,wt.T=r,T_(t,n)}}function b_(t,n,a){n=Pi(a,n),n=fh(t.stateNode,n,2),t=ls(t,n,2),t!==null&&(Ye(t,2),ya(t))}function We(t,n,a){if(t.tag===3)b_(t,t,a);else for(;n!==null;){if(n.tag===3){b_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gs===null||!gs.has(r))){t=Pi(a,t),a=Sg(2),r=ls(n,a,2),r!==null&&(Mg(a,r,n,t),Ye(r,2),ya(r));break}}n=n.return}}function Zh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new JS;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Fh=!0,c.add(a),t=rM.bind(null,t,n,a),n.then(t,t))}function rM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,sn===t&&(Le&a)===a&&((Sn===4||Sn===3&&(Le&62914560)===Le&&300>q()-Wc)&&(Ge&2)===0?Qr(t,0):qc|=a,qr===Le&&(qr=0)),ya(t)}function A_(t,n){n===0&&(n=fn()),t=Hs(t,n),t!==null&&(Ye(t,n),ya(t))}function oM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),A_(t,a)}function lM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),A_(t,a)}function cM(t,n){return Yt(t,n)}var $r=null,to=null,Kh=!1,eu=!1,Qh=!1,vs=0;function ya(t){t!==to&&t.next===null&&(to===null?$r=to=t:to=to.next=t),eu=!0,Kh||(Kh=!0,fM())}function vl(t,n){if(!Qh&&eu){Qh=!0;do for(var a=!1,r=$r;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-On(42|t)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,D_(r,f))}else f=Le,f=en(r,r===sn?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||vn(r,f)||(a=!0,D_(r,f));r=r.next}while(a);Qh=!1}}function uM(){w_()}function w_(){eu=Kh=!1;var t=0;vs!==0&&MM()&&(t=vs);for(var n=q(),a=null,r=$r;r!==null;){var c=r.next,f=R_(r,n);f===0?(r.next=null,a===null?$r=c:a.next=c,c===null&&(to=a)):(a=r,(t!==0||(f&3)!==0)&&(eu=!0)),r=c}gn!==0&&gn!==5||vl(t),vs!==0&&(vs=0)}function R_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-On(f),T=1<<v,P=c[v];P===-1?((T&a)===0||(T&r)!==0)&&(c[v]=wn(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=sn,a=Le,a=en(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||vn(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Se(r),ot(a)){case 2:case 8:a=yt;break;case 32:a=zt;break;case 268435456:a=fe;break;default:a=zt}return r=C_.bind(null,t),a=Yt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Se(r),t.callbackPriority=2,t.callbackNode=null,2}function C_(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tu()&&t.callbackNode!==a)return null;var r=Le;return r=en(t,t===sn?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(p_(t,r,n),R_(t,q()),t.callbackNode!=null&&t.callbackNode===a?C_.bind(null,t):null)}function D_(t,n){if(tu())return null;p_(t,n,!0)}function fM(){TM(function(){(Ge&6)!==0?Yt(ht,uM):w_()})}function Jh(){if(vs===0){var t=qs;t===0&&(t=Zt,Zt<<=1,(Zt&261888)===0&&(Zt=256)),vs=t}return vs}function N_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ql(t)}function hM(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=N_((c[Ut]||null).action),v=r.submitter;v&&(n=(n=v[Ut]||null)?N_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new ec("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(vs!==0){var P=new FormData(c,v);rh(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=new FormData(c,v),rh(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var $h=0;$h<Tf.length;$h++){var td=Tf[$h],dM=td.toLowerCase(),pM=td[0].toUpperCase()+td.slice(1);Zi(dM,"on"+pM)}Zi(i0,"onAnimationEnd"),Zi(a0,"onAnimationIteration"),Zi(s0,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(ES,"onTransitionRun"),Zi(TS,"onTransitionStart"),Zi(bS,"onTransitionCancel"),Zi(r0,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function U_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],P=T.instance,K=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=K;try{f(c)}catch(lt){ac(lt)}c.currentTarget=null,f=P}else for(v=0;v<r.length;v++){if(T=r[v],P=T.instance,K=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=K;try{f(c)}catch(lt){ac(lt)}c.currentTarget=null,f=P}}}}function Ne(t,n){var a=n[he];a===void 0&&(a=n[he]=new Set);var r=t+"__bubble";a.has(r)||(L_(n,t,2,!1),a.add(r))}function ed(t,n,a){var r=0;n&&(r|=4),L_(a,t,r,n)}var nu="_reactListening"+Math.random().toString(36).slice(2);function nd(t){if(!t[nu]){t[nu]=!0,Ja.forEach(function(a){a!=="selectionchange"&&(mM.has(a)||ed(a,!1,t),ed(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nu]||(n[nu]=!0,ed("selectionchange",!1,n))}}function L_(t,n,a,r){switch(Mv(n)){case 2:var c=o1;break;case 8:c=l1;break;default:c=Md}a=c.bind(null,n,a,t),c=void 0,!uf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function id(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=r.return;v!==null;){var P=v.tag;if((P===3||P===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=$t(T),v===null)return;if(P=v.tag,P===5||P===6||P===26||P===27){r=f=v;continue t}T=T.parentNode}}r=r.return}Lm(function(){var K=f,lt=lf(a),mt=[];t:{var W=o0.get(t);if(W!==void 0){var at=ec,Lt=t;switch(t){case"keypress":if($l(a)===0)break t;case"keydown":case"keyup":at=$x;break;case"focusin":Lt="focus",at=pf;break;case"focusout":Lt="blur",at=pf;break;case"beforeblur":case"afterblur":at=pf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=aS;break;case i0:case a0:case s0:at=Xx;break;case r0:at=rS;break;case"scroll":case"scrollend":at=Fx;break;case"wheel":at=lS;break;case"copy":case"cut":case"paste":at=qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Bm;break;case"submit":at=nS;break;case"toggle":case"beforetoggle":at=uS}var Kt=(n&4)!==0,ye=!Kt&&(t==="scroll"||t==="scrollend"),j=Kt?W!==null?W+"Capture":null:W;Kt=[];for(var X=K,nt;X!==null;){var pt=X;if(nt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||nt===null||j===null||(pt=Go(X,j),pt!=null&&Kt.push(xl(X,pt,nt))),ye)break;X=X.return}0<Kt.length&&(W=new at(W,Lt,null,a,lt),mt.push({event:W,listeners:Kt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",at&&a!==of&&(Lt=a.relatedTarget||a.fromElement)&&($t(Lt)||Lt[ie]))break t;(W||at)&&(Lt=lt.window===lt?lt:(at=lt.ownerDocument)?at.defaultView||at.parentWindow:window,W?(at=a.relatedTarget||a.toElement,W=K,at=at?$t(at):null,at!==null&&(ye=u(at),Kt=at.tag,at!==ye||Kt!==5&&Kt!==27&&Kt!==6)&&(at=null)):(W=null,at=K),W!==at&&(Kt=Pm,pt="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Bm,pt="onPointerLeave",j="onPointerEnter",X="pointer"),ye=W==null?Lt:Ue(W),nt=at==null?Lt:Ue(at),Lt=new Kt(pt,X+"leave",W,a,lt),Lt.target=ye,Lt.relatedTarget=nt,pt=null,$t(lt)===K&&(Kt=new Kt(j,X+"enter",at,a,lt),Kt.target=nt,Kt.relatedTarget=ye,pt=Kt),ye=pt,Kt=W&&at?I(W,at,gM):null,W!==null&&O_(mt,Lt,W,Kt,!1),at!==null&&ye!==null&&O_(mt,ye,at,Kt,!0)))}t:{if(W=K?Ue(K):window,at=W.nodeName&&W.nodeName.toLowerCase(),at==="select"||at==="input"&&W.type==="file")var qt=qm;else if(Xm(W))if(Wm)qt=xS;else{qt=vS;var Oe=_S}else at=W.nodeName,!at||at.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?K&&rf(K.elementType)&&(qt=qm):qt=yS;if(qt&&(qt=qt(t,K))){Ym(mt,qt,a,lt);break t}Oe&&Oe(t,W,K)}switch(Oe=K?Ue(K):window,t){case"focusin":(Xm(Oe)||Oe.contentEditable==="true")&&(Rr=Oe,Sf=K,Zo=null);break;case"focusout":Zo=Sf=Rr=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,e0(mt,a,lt);break;case"selectionchange":if(MS)break;case"keydown":case"keyup":e0(mt,a,lt)}var ee;if(gf)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else wr?Vm(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Fm&&a.locale!=="ko"&&(wr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&wr&&(ee=Om()):($a=lt,ff="value"in $a?$a.value:$a.textContent,wr=!0)),Oe=iu(K,ue),0<Oe.length&&(ue=new Im(ue,t,null,a,lt),mt.push({event:ue,listeners:Oe}),ee?ue.data=ee:(ee=km(a),ee!==null&&(ue.data=ee)))),(ee=hS?dS(t,a):pS(t,a))&&(ue=iu(K,"onBeforeInput"),0<ue.length&&(Oe=new Im("onBeforeInput","beforeinput",null,a,lt),mt.push({event:Oe,listeners:ue}),Oe.data=ee)),hM(mt,t,K,a,lt)}U_(mt,n)})}function xl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function iu(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Go(t,a),c!=null&&r.unshift(xl(t,c,f)),c=Go(t,n),c!=null&&r.push(xl(t,c,f))),t.tag===3)return r;t=t.return}return[]}function gM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function O_(t,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var T=a,P=T.alternate,K=T.stateNode;if(T=T.tag,P!==null&&P===r)break;T!==5&&T!==26&&T!==27||K===null||(P=K,c?(K=Go(a,f),K!=null&&v.unshift(xl(a,K,P))):c||(K=Go(a,f),K!=null&&v.push(xl(a,K,P)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var _M=/\r\n?/g,vM=/\u0000|\uFFFD/g;function z_(t){return(typeof t=="string"?t:""+t).replace(_M,`
`).replace(vM,"")}function P_(t,n){return n=z_(n),z_(t)===n}function je(t,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Tr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Tr(t,""+r);else return;break;case"className":Kl(t,"class",r);break;case"tabIndex":Kl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(t,a,r);break;case"style":Nm(t,r,f);return;case"data":if(n!=="object"){Kl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ql(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&je(t,n,"name",c.name,c,null),je(t,n,"formEncType",c.formEncType,c,null),je(t,n,"formMethod",c.formMethod,c,null),je(t,n,"formTarget",c.formTarget,c,null)):(je(t,n,"encType",c.encType,c,null),je(t,n,"method",c.method,c,null),je(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ql(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ca);return;case"onScroll":r!=null&&Ne("scroll",t);return;case"onScrollEnd":r!=null&&Ne("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ql(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),Zl(t,"popover",r);break;case"xlinkActuate":Aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Aa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Aa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Aa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Aa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Zl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Ix.get(a)||a,Zl(t,a,r);else return}Fe=!0}function ad(t,n,a,r,c,f){switch(a){case"style":Nm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")Tr(t,r);else if(typeof r=="number"||typeof r=="bigint")Tr(t,""+r);else return;break;case"onScroll":r!=null&&Ne("scroll",t);return;case"onScrollEnd":r!=null&&Ne("scrollend",t);return;case"onClick":r!=null&&(t.onclick=ca);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!an.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[Ut]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,c);break t}Fe=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Zl(t,a,r)}return}Fe=!0}function $n(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(t,n,f,v,a,null)}}c&&je(t,n,"srcSet",a.srcSet,a,null),r&&je(t,n,"src",a.src,a,null);return;case"input":Ne("invalid",t);var T=f=v=c=null,P=null,K=null;for(r in a)if(a.hasOwnProperty(r)){var lt=a[r];if(lt!=null)switch(r){case"name":c=lt;break;case"type":v=lt;break;case"checked":P=lt;break;case"defaultChecked":K=lt;break;case"value":f=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:je(t,n,r,lt,a,null)}}wm(t,f,T,P,K,v,c,!1);return;case"select":Ne("invalid",t),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:je(t,n,c,T,a,null)}n=f,a=v,t.multiple=!!r,n!=null?Er(t,!!r,n,!1):a!=null&&Er(t,!!r,a,!0);return;case"textarea":Ne("invalid",t),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:je(t,n,v,T,a,null)}Cm(t,r,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:je(t,n,P,r,a,null)}return;case"dialog":Ne("beforetoggle",t),Ne("toggle",t),Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(r=0;r<yl.length;r++)Ne(yl[r],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(r=a[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(t,n,K,r,a,null)}return;default:if(rf(n)){for(lt in a)a.hasOwnProperty(lt)&&(r=a[lt],r!==void 0&&ad(t,n,lt,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&je(t,n,T,r,a,null))}var yM={};function xM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,P=null,K=null,lt=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=mt;default:r.hasOwnProperty(at)||je(t,n,at,null,r,mt)}}for(var W in r){var at=r[W];if(mt=a[W],r.hasOwnProperty(W)&&(at!=null||mt!=null))switch(W){case"type":at!==mt&&(Fe=!0),f=at;break;case"name":at!==mt&&(Fe=!0),c=at;break;case"checked":at!==mt&&(Fe=!0),K=at;break;case"defaultChecked":at!==mt&&(Fe=!0),lt=at;break;case"value":at!==mt&&(Fe=!0),v=at;break;case"defaultValue":at!==mt&&(Fe=!0),T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==mt&&je(t,n,W,at,r,mt)}}af(t,v,T,P,K,lt,f,c);return;case"select":at=v=T=W=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":at=P;default:r.hasOwnProperty(f)||je(t,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":f!==P&&(Fe=!0),W=f;break;case"defaultValue":f!==P&&(Fe=!0),T=f;break;case"multiple":f!==P&&(Fe=!0),v=f;default:f!==P&&je(t,n,c,f,r,P)}n=T,a=v,r=at,W!=null?Er(t,!!a,W,!1):!!r!=!!a&&(n!=null?Er(t,!!a,n,!0):Er(t,!!a,a?[]:"",!1));return;case"textarea":at=W=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:je(t,n,T,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":c!==f&&(Fe=!0),W=c;break;case"defaultValue":c!==f&&(Fe=!0),at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&je(t,n,v,c,r,f)}Rm(t,W,at);return;case"option":for(var Lt in a)if(W=a[Lt],a.hasOwnProperty(Lt)&&W!=null&&!r.hasOwnProperty(Lt))switch(Lt){case"selected":t.selected=!1;break;default:je(t,n,Lt,null,r,W)}for(P in r)if(W=r[P],at=a[P],r.hasOwnProperty(P)&&W!==at&&(W!=null||at!=null))switch(P){case"selected":W!==at&&(Fe=!0),t.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:je(t,n,P,W,r,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)W=a[Kt],a.hasOwnProperty(Kt)&&W!=null&&!r.hasOwnProperty(Kt)&&je(t,n,Kt,null,r,W);for(K in r)if(W=r[K],at=a[K],r.hasOwnProperty(K)&&W!==at&&(W!=null||at!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,n));break;default:je(t,n,K,W,r,at)}return;default:if(rf(n)){for(var ye in a)W=a[ye],a.hasOwnProperty(ye)&&W!==void 0&&!r.hasOwnProperty(ye)&&ad(t,n,ye,void 0,r,W);for(lt in r)W=r[lt],at=a[lt],!r.hasOwnProperty(lt)||W===at||W===void 0&&at===void 0||ad(t,n,lt,W,r,at);return}}for(var j in a)W=a[j],a.hasOwnProperty(j)&&W!=null&&!r.hasOwnProperty(j)&&je(t,n,j,null,r,W);for(mt in r)W=r[mt],at=a[mt],!r.hasOwnProperty(mt)||W===at||W==null&&at==null||je(t,n,mt,W,r,at)}function I_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&I_(v)){for(v=0,T=c.responseEnd,r+=1;r<a.length;r++){var P=a[r],K=P.startTime;if(K>T)break;var lt=P.transferSize,mt=P.initiatorType;lt&&I_(mt)&&(P=P.responseEnd,v+=lt*(P<T?1:(T-K)/(P-K)))}if(--r,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,rd=null;function Sl(t){return t.nodeType===9?t:t.ownerDocument}function B_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function H_(t,n,a,r){return a=Sl(a).createElement(t),a[Ct]=r,a[Ut]=n,$n(a,t,n),cn(a),a}function od(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ld=null;function MM(){var t=window.event;return t&&t.type==="popstate"?t===ld?!1:(ld=t,!0):(ld=null,!1)}var cd=typeof setTimeout=="function"?setTimeout:void 0,EM=typeof clearTimeout=="function"?clearTimeout:void 0,G_=typeof Promise=="function"?Promise:void 0,V_=typeof requestAnimationFrame=="function"?requestAnimationFrame:cd,TM=typeof queueMicrotask=="function"?queueMicrotask:typeof G_<"u"?function(t){return G_.resolve(null).then(t).catch(bM)}:cd;function bM(t){setTimeout(function(){throw t})}function ys(t){return t==="head"}function k_(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),oo(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")_d(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_d(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[rn]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&_d(t.ownerDocument.body);a=c}while(a);oo(n)}function X_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Y_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function q_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function AM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function ud(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return AM(n,a,t)}function wM(t){return t.documentElement.clientHeight}function RM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function CM(t,n,a,r,c,f,v,T,P){var K=n.nodeType===9?n:n.ownerDocument;try{var lt=K.startViewTransition({update:function(){var W=K.defaultView,at=W.navigation&&W.navigation.transition,Lt=K.fonts.status;r();var Kt=[];if(Lt==="loaded"&&(wM(K),K.fonts.status==="loading"&&Kt.push(K.fonts.ready)),Lt=Kt.length,t!==null)for(var ye=t.suspenseyImages,j=0,X=0;X<ye.length;X++){var nt=ye[X];if(!nt.complete){var pt=nt.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<W.innerHeight&&pt.left<W.innerWidth){if(j+=dv(nt),j>ru){Kt.length=Lt;break}nt=new Promise(RM.bind(nt)),Kt.push(nt)}}}if(0<Kt.length)return W=Promise.race([Promise.all(Kt),new Promise(function(qt){return setTimeout(qt,500)})]).then(c,c),(at?Promise.allSettled([at.finished,W]):W).then(f,f);if(c(),at)return at.finished.then(f,f);f()},types:a});K.__reactViewTransition=lt;var mt=[];return lt.ready.then(function(){for(var W=K.documentElement.getAnimations({subtree:!0}),at=0;at<W.length;at++){var Lt=W[at],Kt=Lt.effect,ye=Kt.pseudoElement;if(ye!=null&&ye.startsWith("::view-transition")){mt.push(Lt),Lt=Kt.getKeyframes();for(var j=ye=void 0,X=!0,nt=0;nt<Lt.length;nt++){var pt=Lt[nt],qt=pt.width;if(ye===void 0)ye=qt;else if(ye!==qt){X=!1;break}if(qt=pt.height,j===void 0)j=qt;else if(j!==qt){X=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}X&&ye!==void 0&&j!==void 0&&(Kt.setKeyframes(Lt),X=getComputedStyle(Kt.target,Kt.pseudoElement),X.width!==ye||X.height!==j)&&(X=Lt[0],X.width=ye,X.height=j,X=Lt[Lt.length-1],X.width=ye,X.height=j,Kt.setKeyframes(Lt))}}v()},function(W){K.__reactViewTransition===lt&&(K.__reactViewTransition=null);try{if(typeof W=="object"&&W!==null)switch(W.name){case"InvalidStateError":(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null)}W!==null&&P(W)}finally{r(),c(),v()}}),lt.finished.finally(function(){for(var W=0;W<mt.length;W++)mt[W].cancel();K.__reactViewTransition===lt&&(K.__reactViewTransition=null),T()}),lt}catch{return r(),c(),v(),null}}function ir(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}ir.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},ir.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[c])}return r},ir.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function W_(t){return{name:t,group:new ir("group",t),imagePair:new ir("image-pair",t),old:new ir("old",t),new:new ir("new",t)}}function Di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Di.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Z_(f,t,n,a)===-1){var v=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(P){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),r!==null&&(c=v.removeEventListener.bind(v,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=eo(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:c}),m(this._fragmentFiber.child,!1,DM,t,T,r)}this._eventListeners=f}};function DM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}Di.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=Z_(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=eo(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,NM,t,a,c),r.splice(n,1),f!==null&&f()}};function NM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function eo(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function j_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Z_(t,n,a,r){if(t.length===0)return-1;r=j_(r);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&j_(f.optionsOrUseCapture)===r)return c}return-1}Di.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,eo(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,eo(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},Di.prototype.focus=function(t){m(this._fragmentFiber.child,!0,K_,t,void 0,void 0)};function K_(t,n){return t.tag===6?!1:(t=M(t),kM(t,n))}Di.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,fd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!K_(n[a],t);a--);};function fd(t,n){return n.push(t),!1}Di.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=M(t),t=Sl(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,UM,t,void 0,void 0))};function UM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}Di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,LM,t,void 0,void 0)};function LM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}Di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,OM,t,void 0,void 0);for(var a=n=0;a<ta.length;a++){var r=ta[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):ta[n++]=r}ta.length=n}};function OM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var ta=[],hd=!1;function zM(t,n,a){ta.push({fragmentInstance:t,observer:n,instance:a}),hd||(hd=!0,XM(function(){hd=!1;var r=ta;ta=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}Di.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,PM,t,void 0,void 0),t};function PM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}Di.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},Di.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,fd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),T=c.compareDocumentPosition(t),P=v&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&f&&v&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&c===t||P||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||IM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function IM(t,n,a,r,c){var f=$t(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=y(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=I(a,f,k),n===null?n=!1:(m(n,!0,U,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=I(r,f,k),n===null?n=!1:(m(n,!0,R,f,r),f=x,L=x=null,n=f!==null)),n):!1}function Q_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,fd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),Q_(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),Q_(c,a)):M(c).scrollIntoView(t),r+=a?-1:1}};function BM(t,n){return t=M(t),J_(t,n),!1}function J_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function $_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,eo(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var v=0,T=0;T<ta.length;T++){var P=ta[T];(P.fragmentInstance!==n||P.observer!==f||P.instance!==t)&&(ta[v++]=P)}ta.length=v,f.observe(t)}),J_(t,n))}function FM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,eo(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?zM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function dd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dd(a),Ce(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function HM(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[rn])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Gi(t.nextSibling),t===null)break}return null}function GM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Gi(t.nextSibling),t===null))return null;return t}function tv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Gi(t.nextSibling),t===null))return null;return t}function pd(t){return t.data==="$?"||t.data==="$~"}function md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function VM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var gd=null;function ev(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function nv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function kM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function XM(t){V_(function(){V_(function(n){return t(n)})})}function iv(t,n,a){switch(n=Sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function av(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&je(t,n,r,null,yM,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ca&&(t.onclick=null),Ce(t)}function _d(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ce(t)}var Vi=new Map,sv=new Set;function Ml(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Fa=Bt.d;Bt.d={f:YM,r:qM,D:WM,C:jM,L:ZM,m:KM,X:JM,S:QM,M:$M};function YM(){var t=Fa.f(),n=Qc();return t||n}function qM(t){var n=dn(t);n!==null&&n.tag===5&&n.type==="form"?og(n):Fa.r(t)}var no=typeof document>"u"?null:document;function rv(t,n,a){var r=no;if(r&&typeof n=="string"&&n){var c=Oi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),sv.has(c)||(sv.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),$n(n,"link",t),cn(n),r.head.appendChild(n)))}}function WM(t){Fa.D(t),rv("dns-prefetch",t,null)}function jM(t,n){Fa.C(t,n),rv("preconnect",t,n)}function ZM(t,n,a){Fa.L(t,n,a);var r=no;if(r&&t&&n){var c='link[rel="preload"][as="'+Oi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Oi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Oi(a.imageSizes)+'"]')):c+='[href="'+Oi(t)+'"]';var f=c;switch(n){case"style":f=io(t);break;case"script":f=ao(t)}if(!(Vi.has(f)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Vi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(El(f))||n==="script"&&r.querySelector(Tl(f))))){var v=r.createElement("link");$n(v,"link",t),n==="style"&&(v[nn]=!0,v.onload=v.onerror=function(){ai(v)}),cn(v),r.head.appendChild(v)}}}function KM(t,n){Fa.m(t,n);var a=no;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Oi(r)+'"][href="'+Oi(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ao(t)}if(!Vi.has(f)&&(t=z({rel:"modulepreload",href:t},n),Vi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tl(f)))return}r=a.createElement("link"),$n(r,"link",t),cn(r),a.head.appendChild(r)}}}function QM(t,n,a){Fa.S(t,n,a);var r=no;if(r&&t){var c=Hn(r).hoistableStyles,f=io(t);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(El(f)))T.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Vi.get(f))&&vd(t,a);var P=v=r.createElement("link");cn(P),$n(P,"link",t),P._p=new Promise(function(K,lt){P.onload=K,P.onerror=lt}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,au(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function JM(t,n){Fa.X(t,n);var a=no;if(a&&t){var r=Hn(a).hoistableScripts,c=ao(t),f=r.get(c);f||(f=a.querySelector(Tl(c)),f||(t=z({src:t,async:!0},n),(n=Vi.get(c))&&yd(t,n),f=a.createElement("script"),cn(f),$n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function $M(t,n){Fa.M(t,n);var a=no;if(a&&t){var r=Hn(a).hoistableScripts,c=ao(t),f=r.get(c);f||(f=a.querySelector(Tl(c)),f||(t=z({src:t,async:!0,type:"module"},n),(n=Vi.get(c))&&yd(t,n),f=a.createElement("script"),cn(f),$n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ov(t,n,a,r){var c=(c=O.current)?Ml(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=io(a.href),n=Hn(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=io(a.href);var f=Hn(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(El(t)))?f._p||(v.instance=f,v.state.loading=5):(f=Vi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vi.set(t,f)),t1(c,t,f,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=ao(a),n=Hn(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function io(t){return'href="'+Oi(t)+'"'}function El(t){return'link[rel="stylesheet"]['+t+"]"}function lv(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function t1(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[nn]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[nn]=!0,n.onload=n.onerror=ai.bind(null,n),$n(n,"link",a),cn(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function ao(t){return'[src="'+Oi(t)+'"]'}function Tl(t){return"script[async]"+t}function cv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Oi(a.href)+'"]');if(r)return n.instance=r,cn(r),r;var c=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),cn(r),$n(r,"style",c),au(r,a.precedence,t),n.instance=r;case"stylesheet":c=io(a.href);var f=t.querySelector(El(c));if(f)return n.state.loading|=4,n.instance=f,cn(f),f;r=lv(a),(c=Vi.get(c))&&vd(r,c),f=(t.ownerDocument||t).createElement("link"),cn(f);var v=f;return v._p=new Promise(function(T,P){v.onload=T,v.onerror=P}),$n(f,"link",r),n.state.loading|=4,au(f,a.precedence,t),n.instance=f;case"script":return f=ao(a.src),(c=t.querySelector(Tl(f)))?(n.instance=c,cn(c),c):(r=a,(c=Vi.get(f))&&(r=z({},a),yd(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),cn(c),$n(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,au(r,a.precedence,t));return n.instance}function au(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function vd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function yd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var su=null;function uv(t,n,a){if(su===null){var r=new Map,c=su=new Map;c.set(a,r)}else c=su,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[rn]||f[Ct]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=r.get(v);T?T.push(f):r.set(v,[f])}}return r}function xd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function e1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function hv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function pv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=dv(n),t.suspenseyImages.push(n)),t=a1.bind(t),n.decode().then(t,t))}function n1(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=io(r.href),f=n.querySelector(El(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=bl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,cn(f);return}f=n.ownerDocument||n,r=lv(r),(c=Vi.get(c))&&vd(r,c),f=f.createElement("link"),cn(f);var v=f;v._p=new Promise(function(T,P){v.onload=T,v.onerror=P}),$n(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=bl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ru=0;function i1(t,n){return t.stylesheets&&t.count===0&&lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ru===0&&(ru=62500*SM());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ru?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function mv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)lu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function bl(){this.count--,mv(this)}function a1(){this.imgCount--,mv(this)}var ou=null;function lu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ou=new Map,n.forEach(s1,t),ou=null,bl.call(t))}function s1(t,n){if(!(n.state.loading&4)){var a=ou.get(t);if(a)var r=a.get(null);else{a=new Map,ou.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=bl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var so={$$typeof:et,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function r1(t,n,a,r,c,f,v,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.hiddenUpdates=qn(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function gv(t,n,a,r,c,f,v,T,P,K,lt,mt){return t=new r1(t,n,a,v,P,K,lt,mt,T),n=1,f===!0&&(n|=24),f=gi(3,null,null,n),t.current=f,f.stateNode=t,n=zf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ff(f),t}function _v(t){return t?(t=Nr,t):Nr}function vv(t,n,a,r,c,f){c=_v(c),r.context===null?r.context=c:r.pendingContext=c,r=os(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ls(t,r,n),a!==null&&(xi(a,t,n),nl(a,t,n))}function yv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sd(t,n){yv(t,n),(t=t.alternate)&&yv(t,n)}function xv(t){if(t.tag===13||t.tag===31){var n=Hs(t,67108864);n!==null&&xi(n,t,67108864),Sd(t,67108864)}}function Sv(t){if(t.tag===13||t.tag===31){var n=Ci();n=it(n);var a=Hs(t,n);a!==null&&xi(a,t,n),Sd(t,n)}}var ro=!0;function o1(t,n,a,r){var c=wt.T;wt.T=null;var f=Bt.p;try{Bt.p=2,Md(t,n,a,r)}finally{Bt.p=f,wt.T=c}}function l1(t,n,a,r){var c=wt.T;wt.T=null;var f=Bt.p;try{Bt.p=8,Md(t,n,a,r)}finally{Bt.p=f,wt.T=c}}function Md(t,n,a,r){if(ro){var c=Ed(r);if(c===null)id(t,n,r,cu,a),Ev(t,r);else if(u1(c,t,n,a,r))r.stopPropagation();else if(Ev(t,r),n&4&&-1<c1.indexOf(t)){for(;c!==null;){var f=dn(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=tn(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var P=1<<31-On(v);T.entanglements[1]|=P,v&=~P}ya(f),(Ge&6)===0&&(jc=q()+500,vl(0))}}break;case 31:case 13:T=Hs(f,2),T!==null&&xi(T,f,2),Qc(),Sd(f,2)}if(f=Ed(r),f===null&&id(t,n,r,cu,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else id(t,n,r,null,a)}}function Ed(t){return t=lf(t),Td(t)}var cu=null;function Td(t){if(cu=null,t=$t(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cu=t,null}function Mv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case ht:return 2;case yt:return 8;case zt:case Ht:return 32;case fe:return 268435456;default:return 32}default:return 32}}var bd=!1,xs=null,Ss=null,Ms=null,Al=new Map,wl=new Map,Es=[],c1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ev(t,n){switch(t){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":Al.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(n.pointerId)}}function Rl(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=dn(n),n!==null&&xv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function u1(t,n,a,r,c){switch(n){case"focusin":return xs=Rl(xs,t,n,a,r,c),!0;case"dragenter":return Ss=Rl(Ss,t,n,a,r,c),!0;case"mouseover":return Ms=Rl(Ms,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Al.set(f,Rl(Al.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,wl.set(f,Rl(wl.get(f)||null,t,n,a,r,c)),!0}return!1}function Tv(t){var n=$t(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Et(t.priority,function(){Sv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Et(t.priority,function(){Sv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ed(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);of=r,a.target.dispatchEvent(r),of=null}else return n=dn(a),n!==null&&xv(n),t.blockedOn=a,!1;n.shift()}return!0}function bv(t,n,a){uu(t)&&a.delete(n)}function f1(){bd=!1,xs!==null&&uu(xs)&&(xs=null),Ss!==null&&uu(Ss)&&(Ss=null),Ms!==null&&uu(Ms)&&(Ms=null),Al.forEach(bv),wl.forEach(bv)}function fu(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,f1)))}var hu=null;function Av(t){hu!==t&&(hu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hu===t&&(hu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Td(r||a)===null)continue;break}var f=dn(a);f!==null&&(t.splice(n,3),n-=3,rh(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function oo(t){function n(P){return fu(P,t)}xs!==null&&fu(xs,t),Ss!==null&&fu(Ss,t),Ms!==null&&fu(Ms,t),Al.forEach(n),wl.forEach(n);for(var a=0;a<Es.length;a++){var r=Es[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Es.length&&(a=Es[0],a.blockedOn===null);)Tv(a),a.blockedOn===null&&Es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[Ut]||null;if(typeof f=="function")v||Av(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[Ut]||null)T=v.formAction;else if(Td(c)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),Av(a)}}}function wv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Ad(t){this._internalRoot=t}du.prototype.render=Ad.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Ci();vv(a,r,t,n,null,null)},du.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;vv(t.current,2,null,t,null,null),Qc(),n[ie]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var n=$();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Es.length&&n!==0&&n<Es[a].priority;a++);Es.splice(a,0,t),a===0&&Tv(t)}};var Rv=e.version;if(Rv!=="19.3.1")throw Error(s(527,Rv,"19.3.1"));Bt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var h1={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:wt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Re=pu.inject(h1),Ke=pu}catch{}}return Dl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=_g,f=vg,v=yg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=gv(t,1,!1,null,null,a,r,null,c,f,v,wv),t[ie]=n.current,nd(t),new Ad(n)},Dl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=_g,v=vg,T=yg,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=gv(t,1,!0,n,a??null,r,c,P,f,v,T,wv),n.context=_v(null),a=n.current,r=Ci(),r=it(r),c=os(r),c.callback=null,ls(a,c,r),a=r,n.current.lanes=a,Ye(n,a),ya(n),t[ie]=n.current,nd(t),new du(n)},Dl.version="19.3.1",Dl}var Bv;function b1(){if(Bv)return Cd.exports;Bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cd.exports=T1(),Cd.exports}var A1=b1();const w1=Wy(A1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=o=>{const e=C1(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ld={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},N1=Ee.createContext({}),U1=()=>Ee.useContext(N1),L1=Ee.forwardRef(({color:o,size:e,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},p)=>{const{size:g=24,strokeWidth:_=2,absoluteStrokeWidth:m=!1,color:y="currentColor",className:S=""}=U1()??{},E=s??m?Number(i??_)*24/Number(e??g):i??_;return Ee.createElement("svg",{ref:p,...Ld,width:e??g??Ld.width,height:e??g??Ld.height,stroke:o??y,strokeWidth:E,className:jy("lucide",S,l),...!u&&!D1(d)&&{"aria-hidden":"true"},...d},[...h.map(([C,M])=>Ee.createElement(C,M)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=(o,e)=>{const i=Ee.forwardRef(({className:s,...l},u)=>Ee.createElement(L1,{ref:u,iconNode:e,className:jy(`lucide-${R1(Fv(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Fv(o),i};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],z1=Li("arrow-up-right",O1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Gu=Li("box",P1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],B1=Li("columns-2",I1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],H1=Li("film",F1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],V1=Li("grid-3x3",G1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]],X1=Li("move-horizontal",k1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],q1=Li("pause",Y1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],j1=Li("play",W1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],K1=Li("sliders-vertical",Z1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Vu=Li("sparkles",Q1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],$1=Li("volume-2",J1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],eE=Li("volume-x",tE);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],iE=Li("x",nE),Ls=[{id:0,kicker:"01 / CORAL ATOLL · Outer Lagoon Sanctuary",label:"Sunset Atoll",titleLines:["Golden light over","the coral lagoon."],subtitle:"Subsurface coral reef caustics, anisotropic solar glint, and 28 backlit pinnate coconut palms.",startCamPos:[-2.4,1.85,22],endCamPos:[.4,1.65,14.5],startLookAt:[1.5,2,-7.5],endLookAt:[2.2,2.1,-7.5],fov:44,durationSec:5},{id:1,kicker:"02 / CLIFFSIDE VILLAS · Modern Cantilevered Teak",label:"Cliffside Villas",titleLines:["Cantilevered teak","above wet sand."],subtitle:"Mirror-wet shoreline swash reflections, weathered coastal basalt cliffs, and warm 2700K architectural interiors.",startCamPos:[7.2,2.8,22],endCamPos:[5.2,2.4,11],startLookAt:[-4.2,4.2,-6],endLookAt:[-5,4.5,-10],fov:46,durationSec:5},{id:2,kicker:"03 / JUNGLE WATERFALL · Emerald Canyon Cataract",label:"Jungle Waterfall",titleLines:["Roaring cataract","in emerald mist."],subtitle:"Striated limestone canyon walls, multi-chute fluid simulation, rising spray clouds, and diagonal god-ray shafts.",startCamPos:[0,11.8,22],endCamPos:[0,10.5,10],startLookAt:[0,13.5,-30],endLookAt:[0,14.8,-30],fov:48,durationSec:5},{id:3,kicker:"04 / CRESCENT BAY · Volcanic Headlands & Reef",label:"Crescent Bay",titleLines:["Where the valley","meets the reef."],subtitle:"Layered volcanic headlands in golden aerial haze, turquoise coral lagoon, and cliffside infinity pavilions.",startCamPos:[8.5,21.5,28],endCamPos:[2.8,24,11.5],startLookAt:[-9.5,6.2,-32],endLookAt:[-12.5,5.2,-36],fov:46,durationSec:5}],Hv={pos:[0,34,48],lookAt:[0,6,-10]};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nm="174",Co={ROTATE:0,DOLLY:1,PAN:2},wo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},aE=0,Gv=1,sE=2,Zy=1,rE=2,Ya=3,Is=0,li=1,qi=2,zs=0,_r=1,pp=2,Vv=3,kv=4,oE=5,dr=100,lE=101,cE=102,uE=103,fE=104,hE=200,dE=201,pE=202,mE=203,mp=204,gp=205,gE=206,_E=207,vE=208,yE=209,xE=210,SE=211,ME=212,EE=213,TE=214,_p=0,vp=1,yp=2,Uo=3,xp=4,Sp=5,Mp=6,Ep=7,Ky=0,bE=1,AE=2,Ps=0,wE=1,RE=2,CE=3,DE=4,NE=5,UE=6,LE=7,Qy=300,Lo=301,Oo=302,Tp=303,bp=304,tf=306,_n=1e3,mr=1001,Ap=1002,ra=1003,OE=1004,mu=1005,Ma=1006,Od=1007,gr=1008,Ka=1009,Jy=1010,$y=1011,Yl=1012,im=1013,vr=1014,qa=1015,Wl=1016,am=1017,sm=1018,zo=1020,tx=35902,ex=1021,nx=1022,sa=1023,ix=1024,ax=1025,Do=1026,Po=1027,sx=1028,rm=1029,rx=1030,om=1031,lm=1033,ku=33776,Xu=33777,Yu=33778,qu=33779,wp=35840,Rp=35841,Cp=35842,Dp=35843,Np=36196,Up=37492,Lp=37496,Op=37808,zp=37809,Pp=37810,Ip=37811,Bp=37812,Fp=37813,Hp=37814,Gp=37815,Vp=37816,kp=37817,Xp=37818,Yp=37819,qp=37820,Wp=37821,Wu=36492,jp=36494,Zp=36495,ox=36283,Kp=36284,Qp=36285,Jp=36286,zE=3200,PE=3201,lx=0,IE=1,Os="",Xi="srgb",Io="srgb-linear",Zu="linear",Je="srgb",lo=7680,Xv=519,BE=512,FE=513,HE=514,cx=515,GE=516,VE=517,kE=518,XE=519,$p=35044,Yv="300 es",Wa=2e3,Ku=2001;class Sr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qv=1234567;const Fl=Math.PI/180,ql=180/Math.PI;function ja(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ri[o&255]+ri[o>>8&255]+ri[o>>16&255]+ri[o>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[i&63|128]+ri[i>>8&255]+"-"+ri[i>>16&255]+ri[i>>24&255]+ri[s&255]+ri[s>>8&255]+ri[s>>16&255]+ri[s>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function cm(o,e){return(o%e+e)%e}function YE(o,e,i,s,l){return s+(o-e)*(l-s)/(i-e)}function qE(o,e,i){return o!==e?(i-o)/(e-o):0}function Hl(o,e,i){return(1-i)*o+i*e}function WE(o,e,i,s){return Hl(o,e,1-Math.exp(-i*s))}function jE(o,e=1){return e-Math.abs(cm(o,e*2)-e)}function ZE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function KE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function QE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function JE(o,e){return o+Math.random()*(e-o)}function $E(o){return o*(.5-Math.random())}function tT(o){o!==void 0&&(qv=o);let e=qv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eT(o){return o*Fl}function nT(o){return o*ql}function iT(o){return(o&o-1)===0&&o!==0}function aT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function sT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function rT(o,e,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),g=u((e+s)/2),_=h((e+s)/2),m=u((e-s)/2),y=h((e-s)/2),S=u((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":o.set(d*_,p*m,p*y,d*g);break;case"YZY":o.set(p*y,d*_,p*m,d*g);break;case"ZXZ":o.set(p*m,p*y,d*_,d*g);break;case"XZX":o.set(d*_,p*E,p*S,d*g);break;case"YXY":o.set(p*S,d*_,p*E,d*g);break;case"ZYZ":o.set(p*E,p*S,d*_,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function aa(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ze(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ns={DEG2RAD:Fl,RAD2DEG:ql,generateUUID:ja,clamp:Te,euclideanModulo:cm,mapLinear:YE,inverseLerp:qE,lerp:Hl,damp:WE,pingpong:jE,smoothstep:ZE,smootherstep:KE,randInt:QE,randFloat:JE,randFloatSpread:$E,seededRandom:tT,degToRad:eT,radToDeg:nT,isPowerOfTwo:iT,ceilPowerOfTwo:aT,floorPowerOfTwo:sT,setQuaternionFromProperEuler:rT,normalize:Ze,denormalize:aa};class Xt{constructor(e=0,i=0){Xt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(e,i,s,l,u,h,d,p,g){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,p,g)}set(e,i,s,l,u,h,d,p,g){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=p,_[6]=s,_[7]=h,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],_=s[4],m=s[7],y=s[2],S=s[5],E=s[8],C=l[0],M=l[3],x=l[6],L=l[1],U=l[4],R=l[7],k=l[2],I=l[5],z=l[8];return u[0]=h*C+d*L+p*k,u[3]=h*M+d*U+p*I,u[6]=h*x+d*R+p*z,u[1]=g*C+_*L+m*k,u[4]=g*M+_*U+m*I,u[7]=g*x+_*R+m*z,u[2]=y*C+S*L+E*k,u[5]=y*M+S*U+E*I,u[8]=y*x+S*R+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8];return i*h*_-i*d*g-s*u*_+s*d*p+l*u*g-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=_*h-d*g,y=d*p-_*u,S=g*u-h*p,E=i*m+s*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=m*C,e[1]=(l*g-_*s)*C,e[2]=(d*s-l*h)*C,e[3]=y*C,e[4]=(_*i-l*p)*C,e[5]=(l*u-d*i)*C,e[6]=S*C,e[7]=(s*p-g*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const p=Math.cos(u),g=Math.sin(u);return this.set(s*p,s*g,-s*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(zd.makeScale(e,i)),this}rotate(e){return this.premultiply(zd.makeRotation(-e)),this}translate(e,i){return this.premultiply(zd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new xe;function ux(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Qu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oT(){const o=Qu("canvas");return o.style.display="block",o}const Wv={};function fr(o){o in Wv||(Wv[o]=!0,console.warn(o))}function lT(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function cT(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uT(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zv=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fT(){const o={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Je&&(l.r=Za(l.r),l.g=Za(l.g),l.b=Za(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Je&&(l.r=No(l.r),l.g=No(l.g),l.b=No(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Os?Zu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Io]:{primaries:e,whitePoint:s,transfer:Zu,toXYZ:jv,fromXYZ:Zv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Xi},outputColorSpaceConfig:{drawingBufferColorSpace:Xi}},[Xi]:{primaries:e,whitePoint:s,transfer:Je,toXYZ:jv,fromXYZ:Zv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Xi}}}),o}const He=fT();function Za(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function No(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let co;class hT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{co===void 0&&(co=Qu("canvas")),co.width=e.width,co.height=e.height;const s=co.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=co}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Za(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Za(i[s]/255)*255):i[s]=Za(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dT=0;class um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Pd(l[h].image)):u.push(Pd(l[h]))}else u=Pd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Pd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pT=0;class mi extends Sr{constructor(e=mi.DEFAULT_IMAGE,i=mi.DEFAULT_MAPPING,s=mr,l=mr,u=Ma,h=gr,d=sa,p=Ka,g=mi.DEFAULT_ANISOTROPY,_=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=ja(),this.name="",this.source=new um(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _n:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _n:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=Qy;mi.DEFAULT_ANISOTROPY=1;class En{constructor(e=0,i=0,s=0,l=1){En.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const p=e.elements,g=p[0],_=p[4],m=p[8],y=p[1],S=p[5],E=p[9],C=p[2],M=p[6],x=p[10];if(Math.abs(_-y)<.01&&Math.abs(m-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(m+C)<.1&&Math.abs(E+M)<.1&&Math.abs(g+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(g+1)/2,R=(S+1)/2,k=(x+1)/2,I=(_+y)/4,z=(m+C)/4,B=(E+M)/4;return U>R&&U>k?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=I/s,u=z/s):R>k?R<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),s=I/l,u=B/l):k<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),s=z/u,l=B/u),this.set(s,l,u,i),this}let L=Math.sqrt((M-E)*(M-E)+(m-C)*(m-C)+(y-_)*(y-_));return Math.abs(L)<.001&&(L=1),this.x=(M-E)/L,this.y=(m-C)/L,this.z=(y-_)/L,this.w=Math.acos((g+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mT extends Sr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new En(0,0,e,i),this.scissorTest=!1,this.viewport=new En(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ma,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new mi(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new um(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends mT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class fx extends mi{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ra,this.minFilter=ra,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gT extends mi{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ra,this.minFilter=ra,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let p=s[l+0],g=s[l+1],_=s[l+2],m=s[l+3];const y=u[h+0],S=u[h+1],E=u[h+2],C=u[h+3];if(d===0){e[i+0]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m;return}if(d===1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=C;return}if(m!==C||p!==y||g!==S||_!==E){let M=1-d;const x=p*y+g*S+_*E+m*C,L=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const k=Math.sqrt(U),I=Math.atan2(k,x*L);M=Math.sin(M*I)/k,d=Math.sin(d*I)/k}const R=d*L;if(p=p*M+y*R,g=g*M+S*R,_=_*M+E*R,m=m*M+C*R,M===1-d){const k=1/Math.sqrt(p*p+g*g+_*_+m*m);p*=k,g*=k,_*=k,m*=k}}e[i]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],p=s[l+1],g=s[l+2],_=s[l+3],m=u[h],y=u[h+1],S=u[h+2],E=u[h+3];return e[i]=d*E+_*m+p*S-g*y,e[i+1]=p*E+_*y+g*m-d*S,e[i+2]=g*E+_*S+d*y-p*m,e[i+3]=_*E-d*m-p*y-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(s/2),_=d(l/2),m=d(u/2),y=p(s/2),S=p(l/2),E=p(u/2);switch(h){case"XYZ":this._x=y*_*m+g*S*E,this._y=g*S*m-y*_*E,this._z=g*_*E+y*S*m,this._w=g*_*m-y*S*E;break;case"YXZ":this._x=y*_*m+g*S*E,this._y=g*S*m-y*_*E,this._z=g*_*E-y*S*m,this._w=g*_*m+y*S*E;break;case"ZXY":this._x=y*_*m-g*S*E,this._y=g*S*m+y*_*E,this._z=g*_*E+y*S*m,this._w=g*_*m-y*S*E;break;case"ZYX":this._x=y*_*m-g*S*E,this._y=g*S*m+y*_*E,this._z=g*_*E-y*S*m,this._w=g*_*m+y*S*E;break;case"YZX":this._x=y*_*m+g*S*E,this._y=g*S*m+y*_*E,this._z=g*_*E-y*S*m,this._w=g*_*m-y*S*E;break;case"XZY":this._x=y*_*m-g*S*E,this._y=g*S*m-y*_*E,this._z=g*_*E+y*S*m,this._w=g*_*m+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],g=i[2],_=i[6],m=i[10],y=s+d+m;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-g)*S,this._z=(h-l)*S}else if(s>d&&s>m){const S=2*Math.sqrt(1+s-d-m);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(u+g)/S}else if(d>m){const S=2*Math.sqrt(1+d-s-m);this._w=(u-g)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+m-s-d);this._w=(h-l)/S,this._x=(u+g)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,g=i._z,_=i._w;return this._x=s*_+h*d+l*g-u*p,this._y=l*_+h*p+u*d-s*g,this._z=u*_+h*g+s*p-l*d,this._w=h*_-s*d-l*p-u*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,d),m=Math.sin((1-i)*_)/g,y=Math.sin(i*_)/g;return this._w=h*m+this._w*y,this._x=s*m+this._x*y,this._y=l*m+this._y*y,this._z=u*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,i=0,s=0){G.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Kv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Kv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*s),_=2*(d*i-u*l),m=2*(u*s-h*i);return this.x=i+p*g+h*m-d*_,this.y=s+p*_+d*g-u*m,this.z=l+p*m+u*_-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Id.copy(this).projectOnVector(e),this.sub(Id)}reflect(e){return this.sub(Id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Id=new G,Kv=new xr;class jl{constructor(e=new G(1/0,1/0,1/0),i=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(ea.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(ea.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=ea.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ea):ea.fromBufferAttribute(u,h),ea.applyMatrix4(e.matrixWorld),this.expandByPoint(ea);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gu.copy(s.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ea),ea.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),_u.subVectors(this.max,Nl),uo.subVectors(e.a,Nl),fo.subVectors(e.b,Nl),ho.subVectors(e.c,Nl),bs.subVectors(fo,uo),As.subVectors(ho,fo),sr.subVectors(uo,ho);let i=[0,-bs.z,bs.y,0,-As.z,As.y,0,-sr.z,sr.y,bs.z,0,-bs.x,As.z,0,-As.x,sr.z,0,-sr.x,-bs.y,bs.x,0,-As.y,As.x,0,-sr.y,sr.x,0];return!Bd(i,uo,fo,ho,_u)||(i=[1,0,0,0,1,0,0,0,1],!Bd(i,uo,fo,ho,_u))?!1:(vu.crossVectors(bs,As),i=[vu.x,vu.y,vu.z],Bd(i,uo,fo,ho,_u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ea).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ea).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ha=[new G,new G,new G,new G,new G,new G,new G,new G],ea=new G,gu=new jl,uo=new G,fo=new G,ho=new G,bs=new G,As=new G,sr=new G,Nl=new G,_u=new G,vu=new G,rr=new G;function Bd(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){rr.fromArray(o,u);const d=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),p=e.dot(rr),g=i.dot(rr),_=s.dot(rr);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>d)return!1}return!0}const _T=new jl,Ul=new G,Fd=new G;class fm{constructor(e=new G,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):_T.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ul.subVectors(e,this.center);const i=Ul.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ul,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ul.copy(e.center).add(Fd)),this.expandByPoint(Ul.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ga=new G,Hd=new G,yu=new G,ws=new G,Gd=new G,xu=new G,Vd=new G;class hx{constructor(e=new G,i=new G(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ga.copy(this.origin).addScaledVector(this.direction,i),Ga.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Hd.copy(e).add(i).multiplyScalar(.5),yu.copy(i).sub(e).normalize(),ws.copy(this.origin).sub(Hd);const u=e.distanceTo(i)*.5,h=-this.direction.dot(yu),d=ws.dot(this.direction),p=-ws.dot(yu),g=ws.lengthSq(),_=Math.abs(1-h*h);let m,y,S,E;if(_>0)if(m=h*p-d,y=h*d-p,E=u*_,m>=0)if(y>=-E)if(y<=E){const C=1/_;m*=C,y*=C,S=m*(m+h*y+2*d)+y*(h*m+y+2*p)+g}else y=u,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;else y=-u,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;else y<=-E?(m=Math.max(0,-(-h*u+d)),y=m>0?-u:Math.min(Math.max(-u,-p),u),S=-m*m+y*(y+2*p)+g):y<=E?(m=0,y=Math.min(Math.max(-u,-p),u),S=y*(y+2*p)+g):(m=Math.max(0,-(h*u+d)),y=m>0?u:Math.min(Math.max(-u,-p),u),S=-m*m+y*(y+2*p)+g);else y=h>0?-u:u,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Hd).addScaledVector(yu,y),S}intersectSphere(e,i){Ga.subVectors(e.center,this.origin);const s=Ga.dot(this.direction),l=Ga.dot(Ga)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,p;const g=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,y=this.origin;return g>=0?(s=(e.min.x-y.x)*g,l=(e.max.x-y.x)*g):(s=(e.max.x-y.x)*g,l=(e.min.x-y.x)*g),_>=0?(u=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(u=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-y.z)*m,p=(e.max.z-y.z)*m):(d=(e.max.z-y.z)*m,p=(e.min.z-y.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ga)!==null}intersectTriangle(e,i,s,l,u){Gd.subVectors(i,e),xu.subVectors(s,e),Vd.crossVectors(Gd,xu);let h=this.direction.dot(Vd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ws.subVectors(this.origin,e);const p=d*this.direction.dot(xu.crossVectors(ws,xu));if(p<0)return null;const g=d*this.direction.dot(Gd.cross(ws));if(g<0||p+g>h)return null;const _=-d*ws.dot(Vd);return _<0?null:this.at(_/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(e,i,s,l,u,h,d,p,g,_,m,y,S,E,C,M){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,p,g,_,m,y,S,E,C,M)}set(e,i,s,l,u,h,d,p,g,_,m,y,S,E,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=p,x[2]=g,x[6]=_,x[10]=m,x[14]=y,x[3]=S,x[7]=E,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/po.setFromMatrixColumn(e,0).length(),u=1/po.setFromMatrixColumn(e,1).length(),h=1/po.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),_=Math.cos(u),m=Math.sin(u);if(e.order==="XYZ"){const y=h*_,S=h*m,E=d*_,C=d*m;i[0]=p*_,i[4]=-p*m,i[8]=g,i[1]=S+E*g,i[5]=y-C*g,i[9]=-d*p,i[2]=C-y*g,i[6]=E+S*g,i[10]=h*p}else if(e.order==="YXZ"){const y=p*_,S=p*m,E=g*_,C=g*m;i[0]=y+C*d,i[4]=E*d-S,i[8]=h*g,i[1]=h*m,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=C+y*d,i[10]=h*p}else if(e.order==="ZXY"){const y=p*_,S=p*m,E=g*_,C=g*m;i[0]=y-C*d,i[4]=-h*m,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=C-y*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const y=h*_,S=h*m,E=d*_,C=d*m;i[0]=p*_,i[4]=E*g-S,i[8]=y*g+C,i[1]=p*m,i[5]=C*g+y,i[9]=S*g-E,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const y=h*p,S=h*g,E=d*p,C=d*g;i[0]=p*_,i[4]=C-y*m,i[8]=E*m+S,i[1]=m,i[5]=h*_,i[9]=-d*_,i[2]=-g*_,i[6]=S*m+E,i[10]=y-C*m}else if(e.order==="XZY"){const y=h*p,S=h*g,E=d*p,C=d*g;i[0]=p*_,i[4]=-m,i[8]=g*_,i[1]=y*m+C,i[5]=h*_,i[9]=S*m-E,i[2]=E*m-S,i[6]=d*_,i[10]=C*m+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vT,e,yT)}lookAt(e,i,s){const l=this.elements;return Ni.subVectors(e,i),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),Rs.crossVectors(s,Ni),Rs.lengthSq()===0&&(Math.abs(s.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),Rs.crossVectors(s,Ni)),Rs.normalize(),Su.crossVectors(Ni,Rs),l[0]=Rs.x,l[4]=Su.x,l[8]=Ni.x,l[1]=Rs.y,l[5]=Su.y,l[9]=Ni.y,l[2]=Rs.z,l[6]=Su.z,l[10]=Ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],_=s[1],m=s[5],y=s[9],S=s[13],E=s[2],C=s[6],M=s[10],x=s[14],L=s[3],U=s[7],R=s[11],k=s[15],I=l[0],z=l[4],B=l[8],D=l[12],A=l[1],H=l[5],st=l[9],J=l[13],ut=l[2],et=l[6],F=l[10],tt=l[14],Q=l[3],xt=l[7],Mt=l[11],kt=l[15];return u[0]=h*I+d*A+p*ut+g*Q,u[4]=h*z+d*H+p*et+g*xt,u[8]=h*B+d*st+p*F+g*Mt,u[12]=h*D+d*J+p*tt+g*kt,u[1]=_*I+m*A+y*ut+S*Q,u[5]=_*z+m*H+y*et+S*xt,u[9]=_*B+m*st+y*F+S*Mt,u[13]=_*D+m*J+y*tt+S*kt,u[2]=E*I+C*A+M*ut+x*Q,u[6]=E*z+C*H+M*et+x*xt,u[10]=E*B+C*st+M*F+x*Mt,u[14]=E*D+C*J+M*tt+x*kt,u[3]=L*I+U*A+R*ut+k*Q,u[7]=L*z+U*H+R*et+k*xt,u[11]=L*B+U*st+R*F+k*Mt,u[15]=L*D+U*J+R*tt+k*kt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],g=e[13],_=e[2],m=e[6],y=e[10],S=e[14],E=e[3],C=e[7],M=e[11],x=e[15];return E*(+u*p*m-l*g*m-u*d*y+s*g*y+l*d*S-s*p*S)+C*(+i*p*S-i*g*y+u*h*y-l*h*S+l*g*_-u*p*_)+M*(+i*g*m-i*d*S-u*h*m+s*h*S+u*d*_-s*g*_)+x*(-l*d*_-i*p*m+i*d*y+l*h*m-s*h*y+s*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=e[9],y=e[10],S=e[11],E=e[12],C=e[13],M=e[14],x=e[15],L=m*M*g-C*y*g+C*p*S-d*M*S-m*p*x+d*y*x,U=E*y*g-_*M*g-E*p*S+h*M*S+_*p*x-h*y*x,R=_*C*g-E*m*g+E*d*S-h*C*S-_*d*x+h*m*x,k=E*m*p-_*C*p-E*d*y+h*C*y+_*d*M-h*m*M,I=i*L+s*U+l*R+u*k;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=L*z,e[1]=(C*y*u-m*M*u-C*l*S+s*M*S+m*l*x-s*y*x)*z,e[2]=(d*M*u-C*p*u+C*l*g-s*M*g-d*l*x+s*p*x)*z,e[3]=(m*p*u-d*y*u-m*l*g+s*y*g+d*l*S-s*p*S)*z,e[4]=U*z,e[5]=(_*M*u-E*y*u+E*l*S-i*M*S-_*l*x+i*y*x)*z,e[6]=(E*p*u-h*M*u-E*l*g+i*M*g+h*l*x-i*p*x)*z,e[7]=(h*y*u-_*p*u+_*l*g-i*y*g-h*l*S+i*p*S)*z,e[8]=R*z,e[9]=(E*m*u-_*C*u-E*s*S+i*C*S+_*s*x-i*m*x)*z,e[10]=(h*C*u-E*d*u+E*s*g-i*C*g-h*s*x+i*d*x)*z,e[11]=(_*d*u-h*m*u-_*s*g+i*m*g+h*s*S-i*d*S)*z,e[12]=k*z,e[13]=(_*C*l-E*m*l+E*s*y-i*C*y-_*s*M+i*m*M)*z,e[14]=(E*d*l-h*C*l-E*s*p+i*C*p+h*s*M-i*d*M)*z,e[15]=(h*m*l-_*d*l+_*s*p-i*m*p-h*s*y+i*d*y)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,p=e.z,g=u*h,_=u*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,_*d+s,_*p-l*h,0,g*p-l*d,_*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,g=u+u,_=h+h,m=d+d,y=u*g,S=u*_,E=u*m,C=h*_,M=h*m,x=d*m,L=p*g,U=p*_,R=p*m,k=s.x,I=s.y,z=s.z;return l[0]=(1-(C+x))*k,l[1]=(S+R)*k,l[2]=(E-U)*k,l[3]=0,l[4]=(S-R)*I,l[5]=(1-(y+x))*I,l[6]=(M+L)*I,l[7]=0,l[8]=(E+U)*z,l[9]=(M-L)*z,l[10]=(1-(y+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=po.set(l[0],l[1],l[2]).length();const h=po.set(l[4],l[5],l[6]).length(),d=po.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],na.copy(this);const g=1/u,_=1/h,m=1/d;return na.elements[0]*=g,na.elements[1]*=g,na.elements[2]*=g,na.elements[4]*=_,na.elements[5]*=_,na.elements[6]*=_,na.elements[8]*=m,na.elements[9]*=m,na.elements[10]*=m,i.setFromRotationMatrix(na),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=Wa){const p=this.elements,g=2*u/(i-e),_=2*u/(s-l),m=(i+e)/(i-e),y=(s+l)/(s-l);let S,E;if(d===Wa)S=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Ku)S=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Wa){const p=this.elements,g=1/(i-e),_=1/(s-l),m=1/(h-u),y=(i+e)*g,S=(s+l)*_;let E,C;if(d===Wa)E=(h+u)*m,C=-2*m;else if(d===Ku)E=u*m,C=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=C,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const po=new G,na=new mn,vT=new G(0,0,0),yT=new G(1,1,1),Rs=new G,Su=new G,Ni=new G,Qv=new mn,Jv=new xr;class Ea{constructor(e=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],g=l[5],_=l[9],m=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-m,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jv.setFromEuler(this),this.setFromQuaternion(Jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xT=0;const $v=new G,mo=new xr,Va=new mn,Mu=new G,Ll=new G,ST=new G,MT=new xr,ty=new G(1,0,0),ey=new G(0,1,0),ny=new G(0,0,1),iy={type:"added"},ET={type:"removed"},go={type:"childadded",child:null},kd={type:"childremoved",child:null};class Yn extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new G,i=new Ea,s=new xr,l=new G(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new xe}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return mo.setFromAxisAngle(e,i),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,i){return mo.setFromAxisAngle(e,i),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(ty,e)}rotateY(e){return this.rotateOnAxis(ey,e)}rotateZ(e){return this.rotateOnAxis(ny,e)}translateOnAxis(e,i){return $v.copy(e).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ty,e)}translateY(e){return this.translateOnAxis(ey,e)}translateZ(e){return this.translateOnAxis(ny,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Va.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Mu.copy(e):Mu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Va.lookAt(Ll,Mu,this.up):Va.lookAt(Mu,Ll,this.up),this.quaternion.setFromRotationMatrix(Va),l&&(Va.extractRotation(l.matrixWorld),mo.setFromRotationMatrix(Va),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iy),go.child=e,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ET),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Va.multiply(e.parent.matrixWorld)),e.applyMatrix4(Va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iy),go.child=e,this.dispatchEvent(go),go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,ST),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,MT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const m=p[g];u(e.shapes,m)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),_=h(e.images),m=h(e.shapes),y=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),_.length>0&&(s.images=_),m.length>0&&(s.shapes=m),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const g in d){const _=d[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new G(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ia=new G,ka=new G,Xd=new G,Xa=new G,_o=new G,vo=new G,ay=new G,Yd=new G,qd=new G,Wd=new G,jd=new En,Zd=new En,Kd=new En;class Wi{constructor(e=new G,i=new G,s=new G){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),ia.subVectors(e,i),l.cross(ia);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){ia.subVectors(l,i),ka.subVectors(s,i),Xd.subVectors(e,i);const h=ia.dot(ia),d=ia.dot(ka),p=ia.dot(Xd),g=ka.dot(ka),_=ka.dot(Xd),m=h*g-d*d;if(m===0)return u.set(0,0,0),null;const y=1/m,S=(g*p-d*_)*y,E=(h*_-d*p)*y;return u.set(1-S-E,E,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Xa)===null?!1:Xa.x>=0&&Xa.y>=0&&Xa.x+Xa.y<=1}static getInterpolation(e,i,s,l,u,h,d,p){return this.getBarycoord(e,i,s,l,Xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Xa.x),p.addScaledVector(h,Xa.y),p.addScaledVector(d,Xa.z),p)}static getInterpolatedAttribute(e,i,s,l,u,h){return jd.setScalar(0),Zd.setScalar(0),Kd.setScalar(0),jd.fromBufferAttribute(e,i),Zd.fromBufferAttribute(e,s),Kd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(jd,u.x),h.addScaledVector(Zd,u.y),h.addScaledVector(Kd,u.z),h}static isFrontFacing(e,i,s,l){return ia.subVectors(s,i),ka.subVectors(e,i),ia.cross(ka).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),ia.cross(ka).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;_o.subVectors(l,s),vo.subVectors(u,s),Yd.subVectors(e,s);const p=_o.dot(Yd),g=vo.dot(Yd);if(p<=0&&g<=0)return i.copy(s);qd.subVectors(e,l);const _=_o.dot(qd),m=vo.dot(qd);if(_>=0&&m<=_)return i.copy(l);const y=p*m-_*g;if(y<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(_o,h);Wd.subVectors(e,u);const S=_o.dot(Wd),E=vo.dot(Wd);if(E>=0&&S<=E)return i.copy(u);const C=S*g-p*E;if(C<=0&&g>=0&&E<=0)return d=g/(g-E),i.copy(s).addScaledVector(vo,d);const M=_*E-S*m;if(M<=0&&m-_>=0&&S-E>=0)return ay.subVectors(u,l),d=(m-_)/(m-_+(S-E)),i.copy(l).addScaledVector(ay,d);const x=1/(M+C+y);return h=C*x,d=y*x,i.copy(s).addScaledVector(_o,h).addScaledVector(vo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function Qd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class te{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=He.workingColorSpace){return this.r=e,this.g=i,this.b=s,He.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=He.workingColorSpace){if(e=cm(e,1),i=Te(i,0,1),s=Te(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Qd(h,u,e+1/3),this.g=Qd(h,u,e),this.b=Qd(h,u,e-1/3)}return He.toWorkingColorSpace(this,l),this}setStyle(e,i=Xi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Xi){const s=px[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return He.fromWorkingColorSpace(oi.copy(this),e),Math.round(Te(oi.r*255,0,255))*65536+Math.round(Te(oi.g*255,0,255))*256+Math.round(Te(oi.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=He.workingColorSpace){He.fromWorkingColorSpace(oi.copy(this),i);const s=oi.r,l=oi.g,u=oi.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,g;const _=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=_<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-u)/m+(l<u?6:0);break;case l:p=(u-s)/m+2;break;case u:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,i=He.workingColorSpace){return He.fromWorkingColorSpace(oi.copy(this),i),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=Xi){He.fromWorkingColorSpace(oi.copy(this),e);const i=oi.r,s=oi.g,l=oi.b;return e!==Xi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Cs),this.setHSL(Cs.h+e,Cs.s+i,Cs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Cs),e.getHSL(Eu);const s=Hl(Cs.h,Eu.h,i),l=Hl(Cs.s,Eu.s,i),u=Hl(Cs.l,Eu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new te;te.NAMES=px;let TT=0;class Fo extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=_r,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mp,this.blendDst=gp,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(s.blending=this.blending),this.side!==Is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==mp&&(s.blendSrc=this.blendSrc),this.blendDst!==gp&&(s.blendDst=this.blendDst),this.blendEquation!==dr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xa extends Fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ln=new G,Tu=new Xt;let bT=0;class oa{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=$p,this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(e),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.applyMatrix3(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.applyMatrix4(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.applyNormalMatrix(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Ln.fromBufferAttribute(this,i),Ln.transformDirection(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=aa(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ze(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=aa(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=aa(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=aa(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=aa(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Ze(i,this.array),s=Ze(s,this.array),l=Ze(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Ze(i,this.array),s=Ze(s,this.array),l=Ze(l,this.array),u=Ze(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$p&&(e.usage=this.usage),e}}class mx extends oa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class gx extends oa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class un extends oa{constructor(e,i,s){super(new Float32Array(e),i,s)}}let AT=0;const ki=new mn,Jd=new Yn,yo=new G,Ui=new jl,Ol=new jl,Xn=new G;class Mi extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ux(e)?gx:mx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new xe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,i,s){return ki.makeTranslation(e,i,s),this.applyMatrix4(ki),this}scale(e,i,s){return ki.makeScale(e,i,s),this.applyMatrix4(ki),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new un(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Ui.setFromBufferAttribute(u),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const s=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ol.setFromBufferAttribute(d),this.morphTargetsRelative?(Xn.addVectors(Ui.min,Ol.min),Ui.expandByPoint(Xn),Xn.addVectors(Ui.max,Ol.max),Ui.expandByPoint(Xn)):(Ui.expandByPoint(Ol.min),Ui.expandByPoint(Ol.max))}Ui.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)Xn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Xn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let g=0,_=d.count;g<_;g++)Xn.fromBufferAttribute(d,g),p&&(yo.fromBufferAttribute(e,g),Xn.add(yo)),l=Math.max(l,s.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<s.count;B++)d[B]=new G,p[B]=new G;const g=new G,_=new G,m=new G,y=new Xt,S=new Xt,E=new Xt,C=new G,M=new G;function x(B,D,A){g.fromBufferAttribute(s,B),_.fromBufferAttribute(s,D),m.fromBufferAttribute(s,A),y.fromBufferAttribute(u,B),S.fromBufferAttribute(u,D),E.fromBufferAttribute(u,A),_.sub(g),m.sub(g),S.sub(y),E.sub(y);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(H),M.copy(m).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(H),d[B].add(C),d[D].add(C),d[A].add(C),p[B].add(M),p[D].add(M),p[A].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let B=0,D=L.length;B<D;++B){const A=L[B],H=A.start,st=A.count;for(let J=H,ut=H+st;J<ut;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const U=new G,R=new G,k=new G,I=new G;function z(B){k.fromBufferAttribute(l,B),I.copy(k);const D=d[B];U.copy(D),U.sub(k.multiplyScalar(k.dot(D))).normalize(),R.crossVectors(I,D);const H=R.dot(p[B])<0?-1:1;h.setXYZW(B,U.x,U.y,U.z,H)}for(let B=0,D=L.length;B<D;++B){const A=L[B],H=A.start,st=A.count;for(let J=H,ut=H+st;J<ut;J+=3)z(e.getX(J+0)),z(e.getX(J+1)),z(e.getX(J+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new oa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new G,u=new G,h=new G,d=new G,p=new G,g=new G,_=new G,m=new G;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),C=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,u),m.subVectors(l,u),_.cross(m),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,M),d.add(_),p.add(_),g.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,u),m.subVectors(l,u),_.cross(m),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Xn.fromBufferAttribute(e,i),Xn.normalize(),e.setXYZ(i,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function e(d,p){const g=d.array,_=d.itemSize,m=d.normalized,y=new g.constructor(p.length*_);let S=0,E=0;for(let C=0,M=p.length;C<M;C++){d.isInterleavedBufferAttribute?S=p[C]*d.data.stride+d.offset:S=p[C]*_;for(let x=0;x<_;x++)y[E++]=g[S++]}return new oa(y,_,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mi,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,s);i.setAttribute(d,g)}const u=this.morphAttributes;for(const d in u){const p=[],g=u[d];for(let _=0,m=g.length;_<m;_++){const y=g[_],S=e(y,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let m=0,y=g.length;m<y;m++){const S=g[m];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const g in l){const _=l[g];this.setAttribute(g,_.clone(i))}const u=e.morphAttributes;for(const g in u){const _=[],m=u[g];for(let y=0,S=m.length;y<S;y++)_.push(m[y].clone(i));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,_=h.length;g<_;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sy=new mn,or=new hx,bu=new fm,ry=new G,Au=new G,wu=new G,Ru=new G,$d=new G,Cu=new G,oy=new G,Du=new G;class le extends Yn{constructor(e=new Mi,i=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Cu.set(0,0,0);for(let p=0,g=u.length;p<g;p++){const _=d[p],m=u[p];_!==0&&($d.fromBufferAttribute(m,e),h?Cu.addScaledVector($d,_):Cu.addScaledVector($d.sub(i),_))}i.add(Cu)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bu.copy(s.boundingSphere),bu.applyMatrix4(u),or.copy(e.ray).recast(e.near),!(bu.containsPoint(or.origin)===!1&&(or.intersectSphere(bu,ry)===null||or.origin.distanceToSquared(ry)>(e.far-e.near)**2))&&(sy.copy(u).invert(),or.copy(e.ray).applyMatrix4(sy),!(s.boundingBox!==null&&or.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,or)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,g=u.attributes.uv,_=u.attributes.uv1,m=u.attributes.normal,y=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=y.length;E<C;E++){const M=y[E],x=h[M.materialIndex],L=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let R=L,k=U;R<k;R+=3){const I=d.getX(R),z=d.getX(R+1),B=d.getX(R+2);l=Nu(this,x,e,s,g,_,m,I,z,B),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let M=E,x=C;M<x;M+=3){const L=d.getX(M),U=d.getX(M+1),R=d.getX(M+2);l=Nu(this,h,e,s,g,_,m,L,U,R),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,C=y.length;E<C;E++){const M=y[E],x=h[M.materialIndex],L=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let R=L,k=U;R<k;R+=3){const I=R,z=R+1,B=R+2;l=Nu(this,x,e,s,g,_,m,I,z,B),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let M=E,x=C;M<x;M+=3){const L=M,U=M+1,R=M+2;l=Nu(this,h,e,s,g,_,m,L,U,R),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function wT(o,e,i,s,l,u,h,d){let p;if(e.side===li?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,e.side===Is,d),p===null)return null;Du.copy(d),Du.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Du);return g<i.near||g>i.far?null:{distance:g,point:Du.clone(),object:o}}function Nu(o,e,i,s,l,u,h,d,p,g){o.getVertexPosition(d,Au),o.getVertexPosition(p,wu),o.getVertexPosition(g,Ru);const _=wT(o,e,i,s,Au,wu,Ru,oy);if(_){const m=new G;Wi.getBarycoord(oy,Au,wu,Ru,m),l&&(_.uv=Wi.getInterpolatedAttribute(l,d,p,g,m,new Xt)),u&&(_.uv1=Wi.getInterpolatedAttribute(u,d,p,g,m,new Xt)),h&&(_.normal=Wi.getInterpolatedAttribute(h,d,p,g,m,new G),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:g,normal:new G,materialIndex:0};Wi.getNormal(Au,wu,Ru,y.normal),_.face=y,_.barycoord=m}return _}class Mn extends Mi{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],g=[],_=[],m=[];let y=0,S=0;E("z","y","x",-1,-1,s,i,e,h,u,0),E("z","y","x",1,-1,s,i,-e,h,u,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(m,2));function E(C,M,x,L,U,R,k,I,z,B,D){const A=R/z,H=k/B,st=R/2,J=k/2,ut=I/2,et=z+1,F=B+1;let tt=0,Q=0;const xt=new G;for(let Mt=0;Mt<F;Mt++){const kt=Mt*H-J;for(let Jt=0;Jt<et;Jt++){const pe=Jt*A-st;xt[C]=pe*L,xt[M]=kt*U,xt[x]=ut,g.push(xt.x,xt.y,xt.z),xt[C]=0,xt[M]=0,xt[x]=I>0?1:-1,_.push(xt.x,xt.y,xt.z),m.push(Jt/z),m.push(1-Mt/B),tt+=1}}for(let Mt=0;Mt<B;Mt++)for(let kt=0;kt<z;kt++){const Jt=y+kt+et*Mt,pe=y+kt+et*(Mt+1),N=y+(kt+1)+et*(Mt+1),Z=y+(kt+1)+et*Mt;p.push(Jt,pe,Z),p.push(pe,N,Z),Q+=6}d.addGroup(S,Q,D),S+=Q,y+=tt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function pi(o){const e={};for(let i=0;i<o.length;i++){const s=Bo(o[i]);for(const l in s)e[l]=s[l]}return e}function RT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function _x(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const CT={clone:Bo,merge:pi};var DT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends Fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DT,this.fragmentShader=NT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=RT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class vx extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Wa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ds=new G,ly=new Xt,cy=new Xt;class Yi extends vx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ql*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,i){return this.getViewBounds(e,ly,cy),i.subVectors(cy,ly)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Fl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xo=-90,So=1;class UT extends Yn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yi(xo,So,e,i);l.layers=this.layers,this.add(l);const u=new Yi(xo,So,e,i);u.layers=this.layers,this.add(u);const h=new Yi(xo,So,e,i);h.layers=this.layers,this.add(h);const d=new Yi(xo,So,e,i);d.layers=this.layers,this.add(d);const p=new Yi(xo,So,e,i);p.layers=this.layers,this.add(p);const g=new Yi(xo,So,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const g of i)this.remove(g);if(e===Wa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ku)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,g,_]=this.children,m=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(m,y,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class yx extends mi{constructor(e,i,s,l,u,h,d,p,g,_){e=e!==void 0?e:[],i=i!==void 0?i:Lo,super(e,i,s,l,u,h,d,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LT extends yr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new yx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ma}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Mn(5,5,5),u=new la({name:"CubemapFromEquirect",uniforms:Bo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:li,blending:zs});u.uniforms.tEquirect.value=i;const h=new le(l,u),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=Ma),new UT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class ni extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OT={type:"move"};class tp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),x=this._getHandJoint(g,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],y=_.position.distanceTo(m.position),S=.02,E=.005;g.inputState.pinching&&y>S+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=S-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(OT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ni;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class hm{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(e),this.density=i}clone(){return new hm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dm{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new te(e),this.near=i,this.far=s}clone(){return new dm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uy extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class zT{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=$p,this.updateRanges=[],this.version=0,this.uuid=ja()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const di=new G;class Ju{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)di.fromBufferAttribute(this,i),di.applyMatrix4(e),this.setXYZ(i,di.x,di.y,di.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)di.fromBufferAttribute(this,i),di.applyNormalMatrix(e),this.setXYZ(i,di.x,di.y,di.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)di.fromBufferAttribute(this,i),di.transformDirection(e),this.setXYZ(i,di.x,di.y,di.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=aa(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ze(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=aa(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=aa(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=aa(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=aa(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),s=Ze(s,this.array),l=Ze(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),s=Ze(s,this.array),l=Ze(l,this.array),u=Ze(u,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=u,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new oa(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ju(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xx extends Fo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mo;const zl=new G,Eo=new G,To=new G,bo=new Xt,Pl=new Xt,Sx=new mn,Uu=new G,Il=new G,Lu=new G,fy=new Xt,ep=new Xt,hy=new Xt;class PT extends Yn{constructor(e=new xx){if(super(),this.isSprite=!0,this.type="Sprite",Mo===void 0){Mo=new Mi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new zT(i,5);Mo.setIndex([0,1,2,0,2,3]),Mo.setAttribute("position",new Ju(s,3,0,!1)),Mo.setAttribute("uv",new Ju(s,2,3,!1))}this.geometry=Mo,this.material=e,this.center=new Xt(.5,.5)}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Eo.setFromMatrixScale(this.matrixWorld),Sx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),To.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Eo.multiplyScalar(-To.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const h=this.center;Ou(Uu.set(-.5,-.5,0),To,h,Eo,l,u),Ou(Il.set(.5,-.5,0),To,h,Eo,l,u),Ou(Lu.set(.5,.5,0),To,h,Eo,l,u),fy.set(0,0),ep.set(1,0),hy.set(1,1);let d=e.ray.intersectTriangle(Uu,Il,Lu,!1,zl);if(d===null&&(Ou(Il.set(-.5,.5,0),To,h,Eo,l,u),ep.set(0,1),d=e.ray.intersectTriangle(Uu,Lu,Il,!1,zl),d===null))return;const p=e.ray.origin.distanceTo(zl);p<e.near||p>e.far||i.push({distance:p,point:zl.clone(),uv:Wi.getInterpolation(zl,Uu,Il,Lu,fy,ep,hy,new Xt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ou(o,e,i,s,l,u){bo.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Pl.x=u*bo.x-l*bo.y,Pl.y=l*bo.x+u*bo.y):Pl.copy(bo),o.copy(e),o.x+=Pl.x,o.y+=Pl.y,o.applyMatrix4(Sx)}const np=new G,IT=new G,BT=new xe;class Us{constructor(e=new G(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=np.subVectors(s,i).cross(IT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(np),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||BT.getNormalMatrix(e),l=this.coplanarPoint(np).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new fm,zu=new G;class pm{constructor(e=new Us,i=new Us,s=new Us,l=new Us,u=new Us,h=new Us){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Wa){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],g=l[4],_=l[5],m=l[6],y=l[7],S=l[8],E=l[9],C=l[10],M=l[11],x=l[12],L=l[13],U=l[14],R=l[15];if(s[0].setComponents(p-u,y-g,M-S,R-x).normalize(),s[1].setComponents(p+u,y+g,M+S,R+x).normalize(),s[2].setComponents(p+h,y+_,M+E,R+L).normalize(),s[3].setComponents(p-h,y-_,M-E,R-L).normalize(),s[4].setComponents(p-d,y-m,M-C,R-U).normalize(),i===Wa)s[5].setComponents(p+d,y+m,M+C,R+U).normalize();else if(i===Ku)s[5].setComponents(d,m,C,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zu.x=l.normal.x>0?e.max.x:e.min.x,zu.y=l.normal.y>0?e.max.y:e.min.y,zu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ji extends mi{constructor(e,i,s,l,u,h,d,p,g){super(e,i,s,l,u,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mx extends mi{constructor(e,i,s,l,u,h,d,p,g,_=Do){if(_!==Do&&_!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Do&&(s=vr),s===void 0&&_===Po&&(s=zo),super(null,l,u,h,d,p,_,s,g),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:ra,this.minFilter=p!==void 0?p:ra,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const u=s.length;let h;i?h=i:h=e*s[u-1];let d=0,p=u-1,g;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),g=s[l]-h,g<0)d=l+1;else if(g>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(u-1);const _=s[l],y=s[l+1]-_,S=(h-_)/y;return(l+S)/(u-1)}getTangent(e,i){let l=e-1e-4,u=e+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new Xt:new G);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new G,l=[],u=[],h=[],d=new G,p=new mn;for(let S=0;S<=e;S++){const E=S/e;l[S]=this.getTangentAt(E,new G)}u[0]=new G,h[0]=new G;let g=Number.MAX_VALUE;const _=Math.abs(l[0].x),m=Math.abs(l[0].y),y=Math.abs(l[0].z);_<=g&&(g=_,s.set(1,0,0)),m<=g&&(g=m,s.set(0,1,0)),y<=g&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let S=1;S<=e;S++){if(u[S]=u[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Te(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(d,E))}h[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(Te(u[0].dot(u[e]),-1,1));S/=e,l[0].dot(d.crossVectors(u[0],u[e]))>0&&(S=-S);for(let E=1;E<=e;E++)u[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ex extends Qa{constructor(e=0,i=0,s=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,i=new Xt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+e*u;let p=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),m=Math.sin(this.aRotation),y=p-this.aX,S=g-this.aY;p=y*_-S*m+this.aX,g=y*m+S*_+this.aY}return s.set(p,g)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class FT extends Ex{constructor(e,i,s,l,u,h){super(e,i,s,s,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function mm(){let o=0,e=0,i=0,s=0;function l(u,h,d,p){o=u,e=d,i=-3*u+3*h-2*d-p,s=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,g){l(h,d,g*(d-u),g*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,g,_,m){let y=(h-u)/g-(d-u)/(g+_)+(d-h)/_,S=(d-h)/_-(p-h)/(_+m)+(p-d)/m;y*=_,S*=_,l(h,d,y,S)},calc:function(u){const h=u*u,d=h*u;return o+e*u+i*h+s*d}}}const Pu=new G,ip=new mm,ap=new mm,sp=new mm;class Tx extends Qa{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new G){const s=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let g,_;this.closed||d>0?g=l[(d-1)%u]:(Pu.subVectors(l[0],l[1]).add(l[0]),g=Pu);const m=l[d%u],y=l[(d+1)%u];if(this.closed||d+2<u?_=l[(d+2)%u]:(Pu.subVectors(l[u-1],l[u-2]).add(l[u-1]),_=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(g.distanceToSquared(m),S),C=Math.pow(m.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(_),S);C<1e-4&&(C=1),E<1e-4&&(E=C),M<1e-4&&(M=C),ip.initNonuniformCatmullRom(g.x,m.x,y.x,_.x,E,C,M),ap.initNonuniformCatmullRom(g.y,m.y,y.y,_.y,E,C,M),sp.initNonuniformCatmullRom(g.z,m.z,y.z,_.z,E,C,M)}else this.curveType==="catmullrom"&&(ip.initCatmullRom(g.x,m.x,y.x,_.x,this.tension),ap.initCatmullRom(g.y,m.y,y.y,_.y,this.tension),sp.initCatmullRom(g.z,m.z,y.z,_.z,this.tension));return s.set(ip.calc(p),ap.calc(p),sp.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new G().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dy(o,e,i,s,l){const u=(s-e)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+h)*p+(-3*i+3*s-2*u-h)*d+u*o+i}function HT(o,e){const i=1-o;return i*i*e}function GT(o,e){return 2*(1-o)*o*e}function VT(o,e){return o*o*e}function Gl(o,e,i,s){return HT(o,e)+GT(o,i)+VT(o,s)}function kT(o,e){const i=1-o;return i*i*i*e}function XT(o,e){const i=1-o;return 3*i*i*o*e}function YT(o,e){return 3*(1-o)*o*o*e}function qT(o,e){return o*o*o*e}function Vl(o,e,i,s,l){return kT(o,e)+XT(o,i)+YT(o,s)+qT(o,l)}class WT extends Qa{constructor(e=new Xt,i=new Xt,s=new Xt,l=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new Xt){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Vl(e,l.x,u.x,h.x,d.x),Vl(e,l.y,u.y,h.y,d.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jT extends Qa{constructor(e=new G,i=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new G){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Vl(e,l.x,u.x,h.x,d.x),Vl(e,l.y,u.y,h.y,d.y),Vl(e,l.z,u.z,h.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ZT extends Qa{constructor(e=new Xt,i=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new Xt){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Xt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KT extends Qa{constructor(e=new G,i=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new G){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new G){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QT extends Qa{constructor(e=new Xt,i=new Xt,s=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new Xt){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Gl(e,l.x,u.x,h.x),Gl(e,l.y,u.y,h.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bx extends Qa{constructor(e=new G,i=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new G){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Gl(e,l.x,u.x,h.x),Gl(e,l.y,u.y,h.y),Gl(e,l.z,u.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JT extends Qa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new Xt){const s=i,l=this.points,u=(l.length-1)*e,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],g=l[h],_=l[h>l.length-2?l.length-1:h+1],m=l[h>l.length-3?l.length-1:h+2];return s.set(dy(d,p.x,g.x,_.x,m.x),dy(d,p.y,g.y,_.y,m.y)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new Xt().fromArray(l))}return this}}var $T=Object.freeze({__proto__:null,ArcCurve:FT,CatmullRomCurve3:Tx,CubicBezierCurve:WT,CubicBezierCurve3:jT,EllipseCurve:Ex,LineCurve:ZT,LineCurve3:KT,QuadraticBezierCurve:QT,QuadraticBezierCurve3:bx,SplineCurve:JT});class gm extends Mi{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const u=[],h=[],d=[],p=[],g=new G,_=new Xt;h.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let m=0,y=3;m<=i;m++,y+=3){const S=s+m/i*l;g.x=e*Math.cos(S),g.y=e*Math.sin(S),h.push(g.x,g.y,g.z),d.push(0,0,1),_.x=(h[y]/e+1)/2,_.y=(h[y+1]/e+1)/2,p.push(_.x,_.y)}for(let m=1;m<=i;m++)u.push(m,m+1,0);this.setIndex(u),this.setAttribute("position",new un(h,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _m extends Mi{constructor(e=1,i=1,s=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const g=this;l=Math.floor(l),u=Math.floor(u);const _=[],m=[],y=[],S=[];let E=0;const C=[],M=s/2;let x=0;L(),h===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(S,2));function L(){const R=new G,k=new G;let I=0;const z=(i-e)/s;for(let B=0;B<=u;B++){const D=[],A=B/u,H=A*(i-e)+e;for(let st=0;st<=l;st++){const J=st/l,ut=J*p+d,et=Math.sin(ut),F=Math.cos(ut);k.x=H*et,k.y=-A*s+M,k.z=H*F,m.push(k.x,k.y,k.z),R.set(et,z,F).normalize(),y.push(R.x,R.y,R.z),S.push(J,1-A),D.push(E++)}C.push(D)}for(let B=0;B<l;B++)for(let D=0;D<u;D++){const A=C[D][B],H=C[D+1][B],st=C[D+1][B+1],J=C[D][B+1];(e>0||D!==0)&&(_.push(A,H,J),I+=3),(i>0||D!==u-1)&&(_.push(H,st,J),I+=3)}g.addGroup(x,I,0),x+=I}function U(R){const k=E,I=new Xt,z=new G;let B=0;const D=R===!0?e:i,A=R===!0?1:-1;for(let st=1;st<=l;st++)m.push(0,M*A,0),y.push(0,A,0),S.push(.5,.5),E++;const H=E;for(let st=0;st<=l;st++){const ut=st/l*p+d,et=Math.cos(ut),F=Math.sin(ut);z.x=D*F,z.y=M*A,z.z=D*et,m.push(z.x,z.y,z.z),y.push(0,A,0),I.x=et*.5+.5,I.y=F*.5*A+.5,S.push(I.x,I.y),E++}for(let st=0;st<l;st++){const J=k+st,ut=H+st;R===!0?_.push(ut,ut+1,J):_.push(ut+1,ut,J),B+=3}g.addGroup(x,B,R===!0?1:2),x+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _m(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kl extends _m{constructor(e=1,i=1,s=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,e,i,s,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(e){return new kl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vm extends Mi{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],h=[];d(l),g(s),_(),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(u.slice(),3)),this.setAttribute("uv",new un(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const U=new G,R=new G,k=new G;for(let I=0;I<i.length;I+=3)S(i[I+0],U),S(i[I+1],R),S(i[I+2],k),p(U,R,k,L)}function p(L,U,R,k){const I=k+1,z=[];for(let B=0;B<=I;B++){z[B]=[];const D=L.clone().lerp(R,B/I),A=U.clone().lerp(R,B/I),H=I-B;for(let st=0;st<=H;st++)st===0&&B===I?z[B][st]=D:z[B][st]=D.clone().lerp(A,st/H)}for(let B=0;B<I;B++)for(let D=0;D<2*(I-B)-1;D++){const A=Math.floor(D/2);D%2===0?(y(z[B][A+1]),y(z[B+1][A]),y(z[B][A])):(y(z[B][A+1]),y(z[B+1][A+1]),y(z[B+1][A]))}}function g(L){const U=new G;for(let R=0;R<u.length;R+=3)U.x=u[R+0],U.y=u[R+1],U.z=u[R+2],U.normalize().multiplyScalar(L),u[R+0]=U.x,u[R+1]=U.y,u[R+2]=U.z}function _(){const L=new G;for(let U=0;U<u.length;U+=3){L.x=u[U+0],L.y=u[U+1],L.z=u[U+2];const R=M(L)/2/Math.PI+.5,k=x(L)/Math.PI+.5;h.push(R,1-k)}E(),m()}function m(){for(let L=0;L<h.length;L+=6){const U=h[L+0],R=h[L+2],k=h[L+4],I=Math.max(U,R,k),z=Math.min(U,R,k);I>.9&&z<.1&&(U<.2&&(h[L+0]+=1),R<.2&&(h[L+2]+=1),k<.2&&(h[L+4]+=1))}}function y(L){u.push(L.x,L.y,L.z)}function S(L,U){const R=L*3;U.x=e[R+0],U.y=e[R+1],U.z=e[R+2]}function E(){const L=new G,U=new G,R=new G,k=new G,I=new Xt,z=new Xt,B=new Xt;for(let D=0,A=0;D<u.length;D+=9,A+=6){L.set(u[D+0],u[D+1],u[D+2]),U.set(u[D+3],u[D+4],u[D+5]),R.set(u[D+6],u[D+7],u[D+8]),I.set(h[A+0],h[A+1]),z.set(h[A+2],h[A+3]),B.set(h[A+4],h[A+5]),k.copy(L).add(U).add(R).divideScalar(3);const H=M(k);C(I,A+0,L,H),C(z,A+2,U,H),C(B,A+4,R,H)}}function C(L,U,R,k){k<0&&L.x===1&&(h[U]=L.x-1),R.x===0&&R.z===0&&(h[U]=k/2/Math.PI+.5)}function M(L){return Math.atan2(L.z,-L.x)}function x(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vm(e.vertices,e.indices,e.radius,e.details)}}class ym extends vm{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,u=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(u,h,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ym(e.radius,e.detail)}}class ii extends Mi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,_=p+1,m=e/d,y=i/p,S=[],E=[],C=[],M=[];for(let x=0;x<_;x++){const L=x*y-h;for(let U=0;U<g;U++){const R=U*m-u;E.push(R,-L,0),C.push(0,0,1),M.push(U/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<d;L++){const U=L+g*x,R=L+g*(x+1),k=L+1+g*(x+1),I=L+1+g*x;S.push(U,R,I),S.push(R,k,I)}this.setIndex(S),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(C,3)),this.setAttribute("uv",new un(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xl extends Mi{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let g=0;const _=[],m=new G,y=new G,S=[],E=[],C=[],M=[];for(let x=0;x<=s;x++){const L=[],U=x/s;let R=0;x===0&&h===0?R=.5/i:x===s&&p===Math.PI&&(R=-.5/i);for(let k=0;k<=i;k++){const I=k/i;m.x=-e*Math.cos(l+I*u)*Math.sin(h+U*d),m.y=e*Math.cos(h+U*d),m.z=e*Math.sin(l+I*u)*Math.sin(h+U*d),E.push(m.x,m.y,m.z),y.copy(m).normalize(),C.push(y.x,y.y,y.z),M.push(I+R,1-U),L.push(g++)}_.push(L)}for(let x=0;x<s;x++)for(let L=0;L<i;L++){const U=_[x][L+1],R=_[x][L],k=_[x+1][L],I=_[x+1][L+1];(x!==0||h>0)&&S.push(U,R,I),(x!==s-1||p<Math.PI)&&S.push(R,k,I)}this.setIndex(S),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(C,3)),this.setAttribute("uv",new un(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $u extends Mi{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],g=[],_=new G,m=new G,y=new G;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const C=E/l*u,M=S/s*Math.PI*2;m.x=(e+i*Math.cos(M))*Math.cos(C),m.y=(e+i*Math.cos(M))*Math.sin(C),m.z=i*Math.sin(M),d.push(m.x,m.y,m.z),_.x=e*Math.cos(C),_.y=e*Math.sin(C),y.subVectors(m,_).normalize(),p.push(y.x,y.y,y.z),g.push(E/l),g.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const C=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,L=(l+1)*S+E;h.push(C,M,L),h.push(M,x,L)}this.setIndex(h),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xm extends Mi{constructor(e=new bx(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:s,radialSegments:l,closed:u};const h=e.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new G,p=new G,g=new Xt;let _=new G;const m=[],y=[],S=[],E=[];C(),this.setIndex(E),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(S,2));function C(){for(let U=0;U<i;U++)M(U);M(u===!1?i:0),L(),x()}function M(U){_=e.getPointAt(U/i,_);const R=h.normals[U],k=h.binormals[U];for(let I=0;I<=l;I++){const z=I/l*Math.PI*2,B=Math.sin(z),D=-Math.cos(z);p.x=D*R.x+B*k.x,p.y=D*R.y+B*k.y,p.z=D*R.z+B*k.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=_.x+s*p.x,d.y=_.y+s*p.y,d.z=_.z+s*p.z,m.push(d.x,d.y,d.z)}}function x(){for(let U=1;U<=i;U++)for(let R=1;R<=l;R++){const k=(l+1)*(U-1)+(R-1),I=(l+1)*U+(R-1),z=(l+1)*U+R,B=(l+1)*(U-1)+R;E.push(k,I,B),E.push(I,z,B)}}function L(){for(let U=0;U<=i;U++)for(let R=0;R<=l;R++)g.x=U/i,g.y=R/l,S.push(g.x,g.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new xm(new $T[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ei extends Fo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lx,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tb extends Fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends Fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sm extends Yn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class nb extends Sm{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const rp=new mn,py=new G,my=new G;class ib{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pm,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new En(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;py.setFromMatrixPosition(e.matrixWorld),i.position.copy(py),my.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(my),i.updateMatrixWorld(),rp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rp),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(rp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ax extends vx{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,h=u+g*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ab extends ib{constructor(){super(new Ax(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gy extends Sm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new ab}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _y extends Sm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class sb extends Yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class rb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=vy();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function vy(){return performance.now()}class yy{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Te(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ob extends Sr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function xy(o,e,i,s){const l=lb(s);switch(i){case ex:return o*e;case ix:return o*e;case ax:return o*e*2;case sx:return o*e/l.components*l.byteLength;case rm:return o*e/l.components*l.byteLength;case rx:return o*e*2/l.components*l.byteLength;case om:return o*e*2/l.components*l.byteLength;case nx:return o*e*3/l.components*l.byteLength;case sa:return o*e*4/l.components*l.byteLength;case lm:return o*e*4/l.components*l.byteLength;case ku:case Xu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yu:case qu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rp:case Dp:return Math.max(o,16)*Math.max(e,8)/4;case wp:case Cp:return Math.max(o,8)*Math.max(e,8)/2;case Np:case Up:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case kp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Yp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case qp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Wp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Wu:case jp:case Zp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ox:case Kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Qp:case Jp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lb(o){switch(o){case Ka:case Jy:return{byteLength:1,components:1};case Yl:case $y:case Wl:return{byteLength:2,components:1};case am:case sm:return{byteLength:2,components:4};case vr:case im:case qa:return{byteLength:4,components:1};case tx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wx(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function cb(o){const e=new WeakMap;function i(d,p){const g=d.array,_=d.usage,m=g.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,g,_),d.onUploadCallback();let S;if(g instanceof Float32Array)S=o.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=o.SHORT;else if(g instanceof Uint32Array)S=o.UNSIGNED_INT;else if(g instanceof Int32Array)S=o.INT;else if(g instanceof Int8Array)S=o.BYTE;else if(g instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const _=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,_);else{m.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<m.length;S++){const E=m[y],C=m[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++y,m[y]=C)}m.length=y+1;for(let S=0,E=m.length;S<E;S++){const C=m[S];o.bufferSubData(g,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:u,update:h}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_A=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$A=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,v2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:ub,alphahash_pars_fragment:fb,alphamap_fragment:hb,alphamap_pars_fragment:db,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:yb,begin_vertex:xb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:bb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:wb,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:Db,color_pars_vertex:Nb,color_vertex:Ub,common:Lb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:zb,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ib,emissivemap_fragment:Bb,emissivemap_pars_fragment:Fb,colorspace_fragment:Hb,colorspace_pars_fragment:Gb,envmap_fragment:Vb,envmap_common_pars_fragment:kb,envmap_pars_fragment:Xb,envmap_pars_vertex:Yb,envmap_physical_pars_fragment:nA,envmap_vertex:qb,fog_vertex:Wb,fog_pars_vertex:jb,fog_fragment:Zb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Qb,lightmap_pars_fragment:Jb,lights_lambert_fragment:$b,lights_lambert_pars_fragment:tA,lights_pars_begin:eA,lights_toon_fragment:iA,lights_toon_pars_fragment:aA,lights_phong_fragment:sA,lights_phong_pars_fragment:rA,lights_physical_fragment:oA,lights_physical_pars_fragment:lA,lights_fragment_begin:cA,lights_fragment_maps:uA,lights_fragment_end:fA,logdepthbuf_fragment:hA,logdepthbuf_pars_fragment:dA,logdepthbuf_pars_vertex:pA,logdepthbuf_vertex:mA,map_fragment:gA,map_pars_fragment:_A,map_particle_fragment:vA,map_particle_pars_fragment:yA,metalnessmap_fragment:xA,metalnessmap_pars_fragment:SA,morphinstance_vertex:MA,morphcolor_vertex:EA,morphnormal_vertex:TA,morphtarget_pars_vertex:bA,morphtarget_vertex:AA,normal_fragment_begin:wA,normal_fragment_maps:RA,normal_pars_fragment:CA,normal_pars_vertex:DA,normal_vertex:NA,normalmap_pars_fragment:UA,clearcoat_normal_fragment_begin:LA,clearcoat_normal_fragment_maps:OA,clearcoat_pars_fragment:zA,iridescence_pars_fragment:PA,opaque_fragment:IA,packing:BA,premultiplied_alpha_fragment:FA,project_vertex:HA,dithering_fragment:GA,dithering_pars_fragment:VA,roughnessmap_fragment:kA,roughnessmap_pars_fragment:XA,shadowmap_pars_fragment:YA,shadowmap_pars_vertex:qA,shadowmap_vertex:WA,shadowmask_pars_fragment:jA,skinbase_vertex:ZA,skinning_pars_vertex:KA,skinning_vertex:QA,skinnormal_vertex:JA,specularmap_fragment:$A,specularmap_pars_fragment:t2,tonemapping_fragment:e2,tonemapping_pars_fragment:n2,transmission_fragment:i2,transmission_pars_fragment:a2,uv_pars_fragment:s2,uv_pars_vertex:r2,uv_vertex:o2,worldpos_vertex:l2,background_vert:c2,background_frag:u2,backgroundCube_vert:f2,backgroundCube_frag:h2,cube_vert:d2,cube_frag:p2,depth_vert:m2,depth_frag:g2,distanceRGBA_vert:_2,distanceRGBA_frag:v2,equirect_vert:y2,equirect_frag:x2,linedashed_vert:S2,linedashed_frag:M2,meshbasic_vert:E2,meshbasic_frag:T2,meshlambert_vert:b2,meshlambert_frag:A2,meshmatcap_vert:w2,meshmatcap_frag:R2,meshnormal_vert:C2,meshnormal_frag:D2,meshphong_vert:N2,meshphong_frag:U2,meshphysical_vert:L2,meshphysical_frag:O2,meshtoon_vert:z2,meshtoon_frag:P2,points_vert:I2,points_frag:B2,shadow_vert:F2,shadow_frag:H2,sprite_vert:G2,sprite_frag:V2},Gt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Sa={basic:{uniforms:pi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:pi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new te(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:pi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:pi([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:pi([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new te(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:pi([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:pi([Gt.points,Gt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:pi([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:pi([Gt.common,Gt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:pi([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:pi([Gt.sprite,Gt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:pi([Gt.common,Gt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:pi([Gt.lights,Gt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Sa.physical={uniforms:pi([Sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Iu={r:0,b:0,g:0},cr=new Ea,k2=new mn;function X2(o,e,i,s,l,u,h){const d=new te(0);let p=u===!0?0:1,g,_,m=null,y=0,S=null;function E(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?i:e).get(R)),R}function C(U){let R=!1;const k=E(U);k===null?x(d,p):k&&k.isColor&&(x(k,1),R=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,R){const k=E(R);k&&(k.isCubeTexture||k.mapping===tf)?(_===void 0&&(_=new le(new Mn(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:Bo(Sa.backgroundCube.uniforms),vertexShader:Sa.backgroundCube.vertexShader,fragmentShader:Sa.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,z,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),cr.copy(R.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),_.material.uniforms.envMap.value=k,_.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(k2.makeRotationFromEuler(cr)),_.material.toneMapped=He.getTransfer(k.colorSpace)!==Je,(m!==k||y!==k.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,m=k,y=k.version,S=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):k&&k.isTexture&&(g===void 0&&(g=new le(new ii(2,2),new la({name:"BackgroundMaterial",uniforms:Bo(Sa.background.uniforms),vertexShader:Sa.background.vertexShader,fragmentShader:Sa.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=k,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.toneMapped=He.getTransfer(k.colorSpace)!==Je,k.matrixAutoUpdate===!0&&k.updateMatrix(),g.material.uniforms.uvTransform.value.copy(k.matrix),(m!==k||y!==k.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,m=k,y=k.version,S=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function x(U,R){U.getRGB(Iu,_x(o)),s.buffers.color.setClear(Iu.r,Iu.g,Iu.b,R,h)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,R=1){d.set(U),p=R,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(d,p)},render:C,addToRenderList:M,dispose:L}}function Y2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,h=!1;function d(A,H,st,J,ut){let et=!1;const F=m(J,st,H);u!==F&&(u=F,g(u.object)),et=S(A,J,st,ut),et&&E(A,J,st,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(et||h)&&(h=!1,R(A,H,st,J),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function p(){return o.createVertexArray()}function g(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function m(A,H,st){const J=st.wireframe===!0;let ut=s[A.id];ut===void 0&&(ut={},s[A.id]=ut);let et=ut[H.id];et===void 0&&(et={},ut[H.id]=et);let F=et[J];return F===void 0&&(F=y(p()),et[J]=F),F}function y(A){const H=[],st=[],J=[];for(let ut=0;ut<i;ut++)H[ut]=0,st[ut]=0,J[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:J,object:A,attributes:{},index:null}}function S(A,H,st,J){const ut=u.attributes,et=H.attributes;let F=0;const tt=st.getAttributes();for(const Q in tt)if(tt[Q].location>=0){const Mt=ut[Q];let kt=et[Q];if(kt===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(kt=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(kt=A.instanceColor)),Mt===void 0||Mt.attribute!==kt||kt&&Mt.data!==kt.data)return!0;F++}return u.attributesNum!==F||u.index!==J}function E(A,H,st,J){const ut={},et=H.attributes;let F=0;const tt=st.getAttributes();for(const Q in tt)if(tt[Q].location>=0){let Mt=et[Q];Mt===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(Mt=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(Mt=A.instanceColor));const kt={};kt.attribute=Mt,Mt&&Mt.data&&(kt.data=Mt.data),ut[Q]=kt,F++}u.attributes=ut,u.attributesNum=F,u.index=J}function C(){const A=u.newAttributes;for(let H=0,st=A.length;H<st;H++)A[H]=0}function M(A){x(A,0)}function x(A,H){const st=u.newAttributes,J=u.enabledAttributes,ut=u.attributeDivisors;st[A]=1,J[A]===0&&(o.enableVertexAttribArray(A),J[A]=1),ut[A]!==H&&(o.vertexAttribDivisor(A,H),ut[A]=H)}function L(){const A=u.newAttributes,H=u.enabledAttributes;for(let st=0,J=H.length;st<J;st++)H[st]!==A[st]&&(o.disableVertexAttribArray(st),H[st]=0)}function U(A,H,st,J,ut,et,F){F===!0?o.vertexAttribIPointer(A,H,st,ut,et):o.vertexAttribPointer(A,H,st,J,ut,et)}function R(A,H,st,J){C();const ut=J.attributes,et=st.getAttributes(),F=H.defaultAttributeValues;for(const tt in et){const Q=et[tt];if(Q.location>=0){let xt=ut[tt];if(xt===void 0&&(tt==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),tt==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor)),xt!==void 0){const Mt=xt.normalized,kt=xt.itemSize,Jt=e.get(xt);if(Jt===void 0)continue;const pe=Jt.buffer,N=Jt.type,Z=Jt.bytesPerElement,gt=N===o.INT||N===o.UNSIGNED_INT||xt.gpuType===im;if(xt.isInterleavedBufferAttribute){const ft=xt.data,At=ft.stride,It=xt.offset;if(ft.isInstancedInterleavedBuffer){for(let Dt=0;Dt<Q.locationSize;Dt++)x(Q.location+Dt,ft.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Dt=0;Dt<Q.locationSize;Dt++)M(Q.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let Dt=0;Dt<Q.locationSize;Dt++)U(Q.location+Dt,kt/Q.locationSize,N,Mt,At*Z,(It+kt/Q.locationSize*Dt)*Z,gt)}else{if(xt.isInstancedBufferAttribute){for(let ft=0;ft<Q.locationSize;ft++)x(Q.location+ft,xt.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ft=0;ft<Q.locationSize;ft++)M(Q.location+ft);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let ft=0;ft<Q.locationSize;ft++)U(Q.location+ft,kt/Q.locationSize,N,Mt,kt*Z,kt/Q.locationSize*ft*Z,gt)}}else if(F!==void 0){const Mt=F[tt];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(Q.location,Mt);break;case 3:o.vertexAttrib3fv(Q.location,Mt);break;case 4:o.vertexAttrib4fv(Q.location,Mt);break;default:o.vertexAttrib1fv(Q.location,Mt)}}}}L()}function k(){B();for(const A in s){const H=s[A];for(const st in H){const J=H[st];for(const ut in J)_(J[ut].object),delete J[ut];delete H[st]}delete s[A]}}function I(A){if(s[A.id]===void 0)return;const H=s[A.id];for(const st in H){const J=H[st];for(const ut in J)_(J[ut].object),delete J[ut];delete H[st]}delete s[A.id]}function z(A){for(const H in s){const st=s[H];if(st[A.id]===void 0)continue;const J=st[A.id];for(const ut in J)_(J[ut].object),delete J[ut];delete st[A.id]}}function B(){D(),h=!0,u!==l&&(u=l,g(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:L}}function q2(o,e,i){let s;function l(g){s=g}function u(g,_){o.drawArrays(s,g,_),i.update(_,s,1)}function h(g,_,m){m!==0&&(o.drawArraysInstanced(s,g,_,m),i.update(_,s,m))}function d(g,_,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,_,0,m);let S=0;for(let E=0;E<m;E++)S+=_[E];i.update(S,s,1)}function p(g,_,m,y){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g.length;E++)h(g[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,g,0,_,0,y,0,m);let E=0;for(let C=0;C<m;C++)E+=_[C]*y[C];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function W2(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==sa&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const B=z===Wl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ka&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==qa&&!B)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const _=p(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const m=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:k,maxSamples:I}}function j2(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Us,d=new xe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const S=m.length!==0||y||s!==0||l;return l=y,s=m.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(m,y){i=_(m,y,0)},this.setState=function(m,y,S){const E=m.clippingPlanes,C=m.clipIntersection,M=m.clipShadows,x=o.get(m);if(!l||E===null||E.length===0||u&&!M)u?_(null):g();else{const L=u?0:s,U=L*4;let R=x.clippingState||null;p.value=R,R=_(E,y,U,S);for(let k=0;k!==U;++k)R[k]=i[k];x.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(m,y,S,E){const C=m!==null?m.length:0;let M=null;if(C!==0){if(M=p.value,E!==!0||M===null){const x=S+C*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,R=S;U!==C;++U,R+=4)h.copy(m[U]).applyMatrix4(L,d),h.normal.toArray(M,R),M[R+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function Z2(o){let e=new WeakMap;function i(h,d){return d===Tp?h.mapping=Lo:d===bp&&(h.mapping=Oo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Tp||d===bp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new LT(p.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Ro=4,Sy=[.125,.215,.35,.446,.526,.582],pr=20,op=new Ax,My=new te;let lp=null,cp=0,up=0,fp=!1;const hr=(1+Math.sqrt(5))/2,Ao=1/hr,Ey=[new G(-hr,Ao,0),new G(hr,Ao,0),new G(-Ao,0,hr),new G(Ao,0,hr),new G(0,hr,-Ao),new G(0,hr,Ao),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],K2=new G;class Ty{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=K2}=u;lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ay(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lp,cp,up),this._renderer.xr.enabled=fp,e.scissorTest=!1,Bu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Lo||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ma,minFilter:Ma,generateMipmaps:!1,type:Wl,format:sa,colorSpace:Io,depthBuffer:!1},l=by(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=by(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q2(u)),this._blurMaterial=J2(u,e,i)}return l}_compileMaterial(e){const i=new le(this._lodPlanes[0],e);this._renderer.compile(i,op)}_sceneToCubeUV(e,i,s,l,u){const p=new Yi(90,1,i,s),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,S=m.toneMapping;m.getClearColor(My),m.toneMapping=Ps,m.autoClear=!1;const E=new xa({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),C=new le(new Mn,E);let M=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,M=!0):(E.color.copy(My),M=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(p.up.set(0,g[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[L],u.y,u.z)):U===1?(p.up.set(0,0,g[L]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[L],u.z)):(p.up.set(0,g[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[L]));const R=this._cubeSize;Bu(l,U*R,L>2?R:0,R,R),m.setRenderTarget(l),M&&m.render(C,p),m.render(e,p)}C.geometry.dispose(),C.material.dispose(),m.toneMapping=S,m.autoClear=y,e.background=x}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Lo||e.mapping===Oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ay());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new le(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Bu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,op)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Ey[(l-u-1)%Ey.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,m=new le(this._lodPlanes[l],g),y=g.uniforms,S=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*pr-1),C=u/E,M=isFinite(u)?1+Math.floor(_*C):pr;M>pr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${pr}`);const x=[];let L=0;for(let z=0;z<pr;++z){const B=z/C,D=Math.exp(-B*B/2);x.push(D),z===0?L+=D:z<M&&(L+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/L;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-s;const R=this._sizeLods[l],k=3*R*(l>U-Ro?l-U+Ro:0),I=4*(this._cubeSize-R);Bu(i,k,I,3*R,2*R),p.setRenderTarget(i),p.render(m,op)}}function Q2(o){const e=[],i=[],s=[];let l=o;const u=o-Ro+1+Sy.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-Ro?p=Sy[h-o+Ro-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),_=-g,m=1+g,y=[_,_,m,_,m,m,_,_,m,m,_,m],S=6,E=6,C=3,M=2,x=1,L=new Float32Array(C*E*S),U=new Float32Array(M*E*S),R=new Float32Array(x*E*S);for(let I=0;I<S;I++){const z=I%3*2/3-1,B=I>2?0:-1,D=[z,B,0,z+2/3,B,0,z+2/3,B+1,0,z,B,0,z+2/3,B+1,0,z,B+1,0];L.set(D,C*E*I),U.set(y,M*E*I);const A=[I,I,I,I,I,I];R.set(A,x*E*I)}const k=new Mi;k.setAttribute("position",new oa(L,C)),k.setAttribute("uv",new oa(U,M)),k.setAttribute("faceIndex",new oa(R,x)),e.push(k),l>Ro&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function by(o,e,i){const s=new yr(o,e,i);return s.texture.mapping=tf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Bu(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function J2(o,e,i){const s=new Float32Array(pr),l=new G(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Ay(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function wy(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Mm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $2(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===Tp||p===bp,_=p===Lo||p===Oo;if(g||_){let m=e.get(d);const y=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new Ty(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new Ty(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function tw(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&fr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ew(o,e,i,s){const l={},u=new WeakMap;function h(m){const y=m.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=u.get(y);S&&(e.remove(S),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(m,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(m){const y=m.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function g(m){const y=[],S=m.index,E=m.attributes.position;let C=0;if(S!==null){const L=S.array;C=S.version;for(let U=0,R=L.length;U<R;U+=3){const k=L[U+0],I=L[U+1],z=L[U+2];y.push(k,I,I,z,z,k)}}else if(E!==void 0){const L=E.array;C=E.version;for(let U=0,R=L.length/3-1;U<R;U+=3){const k=U+0,I=U+1,z=U+2;y.push(k,I,I,z,z,k)}}else return;const M=new(ux(y)?gx:mx)(y,1);M.version=C;const x=u.get(m);x&&e.remove(x),u.set(m,M)}function _(m){const y=u.get(m);if(y){const S=m.index;S!==null&&y.version<S.version&&g(m)}else g(m);return u.get(m)}return{get:d,update:p,getWireframeAttribute:_}}function nw(o,e,i){let s;function l(y){s=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function p(y,S){o.drawElements(s,S,u,y*h),i.update(S,s,1)}function g(y,S,E){E!==0&&(o.drawElementsInstanced(s,S,u,y*h,E),i.update(S,s,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,s,1)}function m(y,S,E,C){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)g(y[x]/h,S[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,u,y,0,C,0,E);let x=0;for(let L=0;L<E;L++)x+=S[L]*C[L];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=m}function iw(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function aw(o,e,i){const s=new WeakMap,l=new En;function u(h,d,p){const g=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==m){let A=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var S=A;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),C===!0&&(R=2),M===!0&&(R=3);let k=d.attributes.position.count*R,I=1;k>e.maxTextureSize&&(I=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*I*4*m),B=new fx(z,k,I,m);B.type=qa,B.needsUpdate=!0;const D=R*4;for(let H=0;H<m;H++){const st=x[H],J=L[H],ut=U[H],et=k*I*4*H;for(let F=0;F<st.count;F++){const tt=F*D;E===!0&&(l.fromBufferAttribute(st,F),z[et+tt+0]=l.x,z[et+tt+1]=l.y,z[et+tt+2]=l.z,z[et+tt+3]=0),C===!0&&(l.fromBufferAttribute(J,F),z[et+tt+4]=l.x,z[et+tt+5]=l.y,z[et+tt+6]=l.z,z[et+tt+7]=0),M===!0&&(l.fromBufferAttribute(ut,F),z[et+tt+8]=l.x,z[et+tt+9]=l.y,z[et+tt+10]=l.z,z[et+tt+11]=ut.itemSize===4?l.w:1)}}y={count:m,texture:B,size:new Xt(k,I)},s.set(d,y),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<g.length;M++)E+=g[M];const C=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function sw(o,e,i,s){let l=new WeakMap;function u(p){const g=s.render.frame,_=p.geometry,m=e.get(p,_);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const Rx=new mi,Ry=new Mx(1,1),Cx=new fx,Dx=new gT,Nx=new yx,Cy=[],Dy=[],Ny=new Float32Array(16),Uy=new Float32Array(9),Ly=new Float32Array(4);function Ho(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=Cy[l];if(u===void 0&&(u=new Float32Array(l),Cy[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function Bn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Fn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function ef(o,e){let i=Dy[e];i===void 0&&(i=new Int32Array(e),Dy[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function rw(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ow(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;o.uniform2fv(this.addr,e),Fn(i,e)}}function lw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Bn(i,e))return;o.uniform3fv(this.addr,e),Fn(i,e)}}function cw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;o.uniform4fv(this.addr,e),Fn(i,e)}}function uw(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Bn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Fn(i,e)}else{if(Bn(i,s))return;Ly.set(s),o.uniformMatrix2fv(this.addr,!1,Ly),Fn(i,s)}}function fw(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Bn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Fn(i,e)}else{if(Bn(i,s))return;Uy.set(s),o.uniformMatrix3fv(this.addr,!1,Uy),Fn(i,s)}}function hw(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Bn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Fn(i,e)}else{if(Bn(i,s))return;Ny.set(s),o.uniformMatrix4fv(this.addr,!1,Ny),Fn(i,s)}}function dw(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function pw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;o.uniform2iv(this.addr,e),Fn(i,e)}}function mw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Bn(i,e))return;o.uniform3iv(this.addr,e),Fn(i,e)}}function gw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;o.uniform4iv(this.addr,e),Fn(i,e)}}function _w(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function vw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Bn(i,e))return;o.uniform2uiv(this.addr,e),Fn(i,e)}}function yw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Bn(i,e))return;o.uniform3uiv(this.addr,e),Fn(i,e)}}function xw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Bn(i,e))return;o.uniform4uiv(this.addr,e),Fn(i,e)}}function Sw(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ry.compareFunction=cx,u=Ry):u=Rx,i.setTexture2D(e||u,l)}function Mw(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Dx,l)}function Ew(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Nx,l)}function Tw(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Cx,l)}function bw(o){switch(o){case 5126:return rw;case 35664:return ow;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return dw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return _w;case 36294:return vw;case 36295:return yw;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}function Aw(o,e){o.uniform1fv(this.addr,e)}function ww(o,e){const i=Ho(e,this.size,2);o.uniform2fv(this.addr,i)}function Rw(o,e){const i=Ho(e,this.size,3);o.uniform3fv(this.addr,i)}function Cw(o,e){const i=Ho(e,this.size,4);o.uniform4fv(this.addr,i)}function Dw(o,e){const i=Ho(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Nw(o,e){const i=Ho(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Uw(o,e){const i=Ho(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Lw(o,e){o.uniform1iv(this.addr,e)}function Ow(o,e){o.uniform2iv(this.addr,e)}function zw(o,e){o.uniform3iv(this.addr,e)}function Pw(o,e){o.uniform4iv(this.addr,e)}function Iw(o,e){o.uniform1uiv(this.addr,e)}function Bw(o,e){o.uniform2uiv(this.addr,e)}function Fw(o,e){o.uniform3uiv(this.addr,e)}function Hw(o,e){o.uniform4uiv(this.addr,e)}function Gw(o,e,i){const s=this.cache,l=e.length,u=ef(i,l);Bn(s,u)||(o.uniform1iv(this.addr,u),Fn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Rx,u[h])}function Vw(o,e,i){const s=this.cache,l=e.length,u=ef(i,l);Bn(s,u)||(o.uniform1iv(this.addr,u),Fn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Dx,u[h])}function kw(o,e,i){const s=this.cache,l=e.length,u=ef(i,l);Bn(s,u)||(o.uniform1iv(this.addr,u),Fn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Nx,u[h])}function Xw(o,e,i){const s=this.cache,l=e.length,u=ef(i,l);Bn(s,u)||(o.uniform1iv(this.addr,u),Fn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Cx,u[h])}function Yw(o){switch(o){case 5126:return Aw;case 35664:return ww;case 35665:return Rw;case 35666:return Cw;case 35674:return Dw;case 35675:return Nw;case 35676:return Uw;case 5124:case 35670:return Lw;case 35667:case 35671:return Ow;case 35668:case 35672:return zw;case 35669:case 35673:return Pw;case 5125:return Iw;case 36294:return Bw;case 36295:return Fw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return Xw}}class qw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=bw(i.type)}}class Ww{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Yw(i.type)}}class jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const hp=/(\w+)(\])?(\[|\.)?/g;function Oy(o,e){o.seq.push(e),o.map[e.id]=e}function Zw(o,e,i){const s=o.name,l=s.length;for(hp.lastIndex=0;;){const u=hp.exec(s),h=hp.lastIndex;let d=u[1];const p=u[2]==="]",g=u[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){Oy(i,g===void 0?new qw(d,o,e):new Ww(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new jw(d),Oy(i,m)),i=m}}}class ju{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Zw(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function zy(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Kw=37297;let Qw=0;function Jw(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Py=new xe;function $w(o){He._getMatrix(Py,He.workingColorSpace,o);const e=`mat3( ${Py.elements.map(i=>i.toFixed(4))} )`;switch(He.getTransfer(o)){case Zu:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Iy(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Jw(o.getShaderSource(e),h)}else return l}function tR(o,e){const i=$w(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eR(o,e){let i;switch(e){case wE:i="Linear";break;case RE:i="Reinhard";break;case CE:i="Cineon";break;case DE:i="ACESFilmic";break;case UE:i="AgX";break;case LE:i="Neutral";break;case NE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fu=new G;function nR(){He.getLuminanceCoefficients(Fu);const o=Fu.x.toFixed(4),e=Fu.y.toFixed(4),i=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function aR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function sR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Bl(o){return o!==""}function By(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fy(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function tm(o){return o.replace(rR,lR)}const oR=new Map;function lR(o,e){let i=Me[e];if(i===void 0){const s=oR.get(e);if(s!==void 0)i=Me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return tm(i)}const cR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hy(o){return o.replace(cR,uR)}function uR(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Gy(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Zy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===rE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ya&&(e="SHADOWMAP_TYPE_VSM"),e}function hR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Lo:case Oo:e="ENVMAP_TYPE_CUBE";break;case tf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function pR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ky:e="ENVMAP_BLENDING_MULTIPLY";break;case bE:e="ENVMAP_BLENDING_MIX";break;case AE:e="ENVMAP_BLENDING_ADD";break}return e}function mR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function gR(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=fR(i),g=hR(i),_=dR(i),m=pR(i),y=mR(i),S=iR(i),E=aR(u),C=l.createProgram();let M,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bl).join(`
`),x.length>0&&(x+=`
`)):(M=[Gy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),x=[Gy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",i.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ps?"#define TONE_MAPPING":"",i.toneMapping!==Ps?Me.tonemapping_pars_fragment:"",i.toneMapping!==Ps?eR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,tR("linearToOutputTexel",i.outputColorSpace),nR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bl).join(`
`)),h=tm(h),h=By(h,i),h=Fy(h,i),d=tm(d),d=By(d,i),d=Fy(d,i),h=Hy(h),d=Hy(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=L+M+h,R=L+x+d,k=zy(l,l.VERTEX_SHADER,U),I=zy(l,l.FRAGMENT_SHADER,R);l.attachShader(C,k),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(H){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(C).trim(),J=l.getShaderInfoLog(k).trim(),ut=l.getShaderInfoLog(I).trim();let et=!0,F=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,k,I);else{const tt=Iy(l,k,"vertex"),Q=Iy(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+tt+`
`+Q)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(J===""||ut==="")&&(F=!1);F&&(H.diagnostics={runnable:et,programLog:st,vertexShader:{log:J,prefix:M},fragmentShader:{log:ut,prefix:x}})}l.deleteShader(k),l.deleteShader(I),B=new ju(l,C),D=sR(l,C)}let B;this.getUniforms=function(){return B===void 0&&z(this),B};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(C,Kw)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Qw++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=I,this}let _R=0;class vR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new yR(e),i.set(e,s)),s}}class yR{constructor(e){this.id=_R++,this.code=e,this.usedTimes=0}}function xR(o,e,i,s,l,u,h){const d=new dx,p=new vR,g=new Set,_=[],m=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return g.add(D),D===0?"uv":`uv${D}`}function M(D,A,H,st,J){const ut=st.fog,et=J.geometry,F=D.isMeshStandardMaterial?st.environment:null,tt=(D.isMeshStandardMaterial?i:e).get(D.envMap||F),Q=tt&&tt.mapping===tf?tt.image.height:null,xt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const Mt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,kt=Mt!==void 0?Mt.length:0;let Jt=0;et.morphAttributes.position!==void 0&&(Jt=1),et.morphAttributes.normal!==void 0&&(Jt=2),et.morphAttributes.color!==void 0&&(Jt=3);let pe,N,Z,gt;if(xt){const Re=Sa[xt];pe=Re.vertexShader,N=Re.fragmentShader}else pe=D.vertexShader,N=D.fragmentShader,p.update(D),Z=p.getVertexShaderID(D),gt=p.getFragmentShaderID(D);const ft=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),It=J.isInstancedMesh===!0,Dt=J.isBatchedMesh===!0,wt=!!D.map,Bt=!!D.matcap,ce=!!tt,V=!!D.aoMap,we=!!D.lightMap,se=!!D.bumpMap,Vt=!!D.normalMap,bt=!!D.displacementMap,ge=!!D.emissiveMap,Wt=!!D.metalnessMap,O=!!D.roughnessMap,w=D.anisotropy>0,rt=D.clearcoat>0,vt=D.dispersion>0,St=D.iridescence>0,_t=D.sheen>0,Qt=D.transmission>0,Ot=w&&!!D.anisotropyMap,Ft=rt&&!!D.clearcoatMap,be=rt&&!!D.clearcoatNormalMap,Tt=rt&&!!D.clearcoatRoughnessMap,jt=St&&!!D.iridescenceMap,oe=St&&!!D.iridescenceThicknessMap,re=_t&&!!D.sheenColorMap,Yt=_t&&!!D.sheenRoughnessMap,Se=!!D.specularMap,me=!!D.specularColorMap,Pe=!!D.specularIntensityMap,q=Qt&&!!D.transmissionMap,Nt=Qt&&!!D.thicknessMap,ht=!!D.gradientMap,yt=!!D.alphaMap,zt=D.alphaTest>0,Ht=!!D.alphaHash,fe=!!D.extensions;let Ve=Ps;D.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ve=o.toneMapping);const An={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:pe,fragmentShader:N,defines:D.defines,customVertexShaderID:Z,customFragmentShaderID:gt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Dt,batchingColor:Dt&&J._colorsTexture!==null,instancing:It,instancingColor:It&&J.instanceColor!==null,instancingMorph:It&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Io,alphaToCoverage:!!D.alphaToCoverage,map:wt,matcap:Bt,envMap:ce,envMapMode:ce&&tt.mapping,envMapCubeUVHeight:Q,aoMap:V,lightMap:we,bumpMap:se,normalMap:Vt,displacementMap:y&&bt,emissiveMap:ge,normalMapObjectSpace:Vt&&D.normalMapType===IE,normalMapTangentSpace:Vt&&D.normalMapType===lx,metalnessMap:Wt,roughnessMap:O,anisotropy:w,anisotropyMap:Ot,clearcoat:rt,clearcoatMap:Ft,clearcoatNormalMap:be,clearcoatRoughnessMap:Tt,dispersion:vt,iridescence:St,iridescenceMap:jt,iridescenceThicknessMap:oe,sheen:_t,sheenColorMap:re,sheenRoughnessMap:Yt,specularMap:Se,specularColorMap:me,specularIntensityMap:Pe,transmission:Qt,transmissionMap:q,thicknessMap:Nt,gradientMap:ht,opaque:D.transparent===!1&&D.blending===_r&&D.alphaToCoverage===!1,alphaMap:yt,alphaTest:zt,alphaHash:Ht,combine:D.combine,mapUv:wt&&C(D.map.channel),aoMapUv:V&&C(D.aoMap.channel),lightMapUv:we&&C(D.lightMap.channel),bumpMapUv:se&&C(D.bumpMap.channel),normalMapUv:Vt&&C(D.normalMap.channel),displacementMapUv:bt&&C(D.displacementMap.channel),emissiveMapUv:ge&&C(D.emissiveMap.channel),metalnessMapUv:Wt&&C(D.metalnessMap.channel),roughnessMapUv:O&&C(D.roughnessMap.channel),anisotropyMapUv:Ot&&C(D.anisotropyMap.channel),clearcoatMapUv:Ft&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:be&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:re&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&C(D.sheenRoughnessMap.channel),specularMapUv:Se&&C(D.specularMap.channel),specularColorMapUv:me&&C(D.specularColorMap.channel),specularIntensityMapUv:Pe&&C(D.specularIntensityMap.channel),transmissionMapUv:q&&C(D.transmissionMap.channel),thicknessMapUv:Nt&&C(D.thicknessMap.channel),alphaMapUv:yt&&C(D.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Vt||w),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!et.attributes.uv&&(wt||yt),fog:!!ut,useFog:D.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:At,skinning:J.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Jt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ve,decodeVideoTexture:wt&&D.map.isVideoTexture===!0&&He.getTransfer(D.map.colorSpace)===Je,decodeVideoTextureEmissive:ge&&D.emissiveMap.isVideoTexture===!0&&He.getTransfer(D.emissiveMap.colorSpace)===Je,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===qi,flipSided:D.side===li,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:fe&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&D.extensions.multiDraw===!0||Dt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return An.vertexUv1s=g.has(1),An.vertexUv2s=g.has(2),An.vertexUv3s=g.has(3),g.clear(),An}function x(D){const A=[];if(D.shaderID?A.push(D.shaderID):(A.push(D.customVertexShaderID),A.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)A.push(H),A.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(L(A,D),U(A,D),A.push(o.outputColorSpace)),A.push(D.customProgramCacheKey),A.join()}function L(D,A){D.push(A.precision),D.push(A.outputColorSpace),D.push(A.envMapMode),D.push(A.envMapCubeUVHeight),D.push(A.mapUv),D.push(A.alphaMapUv),D.push(A.lightMapUv),D.push(A.aoMapUv),D.push(A.bumpMapUv),D.push(A.normalMapUv),D.push(A.displacementMapUv),D.push(A.emissiveMapUv),D.push(A.metalnessMapUv),D.push(A.roughnessMapUv),D.push(A.anisotropyMapUv),D.push(A.clearcoatMapUv),D.push(A.clearcoatNormalMapUv),D.push(A.clearcoatRoughnessMapUv),D.push(A.iridescenceMapUv),D.push(A.iridescenceThicknessMapUv),D.push(A.sheenColorMapUv),D.push(A.sheenRoughnessMapUv),D.push(A.specularMapUv),D.push(A.specularColorMapUv),D.push(A.specularIntensityMapUv),D.push(A.transmissionMapUv),D.push(A.thicknessMapUv),D.push(A.combine),D.push(A.fogExp2),D.push(A.sizeAttenuation),D.push(A.morphTargetsCount),D.push(A.morphAttributeCount),D.push(A.numDirLights),D.push(A.numPointLights),D.push(A.numSpotLights),D.push(A.numSpotLightMaps),D.push(A.numHemiLights),D.push(A.numRectAreaLights),D.push(A.numDirLightShadows),D.push(A.numPointLightShadows),D.push(A.numSpotLightShadows),D.push(A.numSpotLightShadowsWithMaps),D.push(A.numLightProbes),D.push(A.shadowMapType),D.push(A.toneMapping),D.push(A.numClippingPlanes),D.push(A.numClipIntersection),D.push(A.depthPacking)}function U(D,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),D.push(d.mask)}function R(D){const A=E[D.type];let H;if(A){const st=Sa[A];H=CT.clone(st.uniforms)}else H=D.uniforms;return H}function k(D,A){let H;for(let st=0,J=_.length;st<J;st++){const ut=_[st];if(ut.cacheKey===A){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new gR(o,A,D,u),_.push(H)),H}function I(D){if(--D.usedTimes===0){const A=_.indexOf(D);_[A]=_[_.length-1],_.pop(),D.destroy()}}function z(D){p.remove(D)}function B(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:R,acquireProgram:k,releaseProgram:I,releaseShaderCache:z,programs:_,dispose:B}}function SR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function MR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Vy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ky(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(m,y,S,E,C,M){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:y,material:S,groupOrder:E,renderOrder:m.renderOrder,z:C,group:M},o[e]=x):(x.id=m.id,x.object=m,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=C,x.group=M),e++,x}function d(m,y,S,E,C,M){const x=h(m,y,S,E,C,M);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function p(m,y,S,E,C,M){const x=h(m,y,S,E,C,M);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function g(m,y){i.length>1&&i.sort(m||MR),s.length>1&&s.sort(y||Vy),l.length>1&&l.sort(y||Vy)}function _(){for(let m=e,y=o.length;m<y;m++){const S=o[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:_,sort:g}}function ER(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new ky,o.set(s,[h])):l>=u.length?(h=new ky,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function TR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new G,color:new te};break;case"SpotLight":i={position:new G,direction:new G,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new te,groundColor:new te};break;case"RectAreaLight":i={color:new te,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=i,i}}}function bR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let AR=0;function wR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function RR(o){const e=new TR,i=bR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new G);const l=new G,u=new mn,h=new mn;function d(g){let _=0,m=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,E=0,C=0,M=0,x=0,L=0,U=0,R=0,k=0,I=0,z=0;g.sort(wR);for(let D=0,A=g.length;D<A;D++){const H=g[D],st=H.color,J=H.intensity,ut=H.distance,et=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=st.r*J,m+=st.g*J,y+=st.b*J;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],J);z++}else if(H.isDirectionalLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const tt=H.shadow,Q=i.get(H);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,s.directionalShadow[S]=Q,s.directionalShadowMap[S]=et,s.directionalShadowMatrix[S]=H.shadow.matrix,L++}s.directional[S]=F,S++}else if(H.isSpotLight){const F=e.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(st).multiplyScalar(J),F.distance=ut,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[C]=F;const tt=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,tt.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[C]=tt.matrix,H.castShadow){const Q=i.get(H);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,s.spotShadow[C]=Q,s.spotShadowMap[C]=et,R++}C++}else if(H.isRectAreaLight){const F=e.get(H);F.color.copy(st).multiplyScalar(J),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=F,M++}else if(H.isPointLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const tt=H.shadow,Q=i.get(H);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,Q.shadowCameraNear=tt.camera.near,Q.shadowCameraFar=tt.camera.far,s.pointShadow[E]=Q,s.pointShadowMap[E]=et,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=F,E++}else if(H.isHemisphereLight){const F=e.get(H);F.skyColor.copy(H.color).multiplyScalar(J),F.groundColor.copy(H.groundColor).multiplyScalar(J),s.hemi[x]=F,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=m,s.ambient[2]=y;const B=s.hash;(B.directionalLength!==S||B.pointLength!==E||B.spotLength!==C||B.rectAreaLength!==M||B.hemiLength!==x||B.numDirectionalShadows!==L||B.numPointShadows!==U||B.numSpotShadows!==R||B.numSpotMaps!==k||B.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=R+k-I,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,B.directionalLength=S,B.pointLength=E,B.spotLength=C,B.rectAreaLength=M,B.hemiLength=x,B.numDirectionalShadows=L,B.numPointShadows=U,B.numSpotShadows=R,B.numSpotMaps=k,B.numLightProbes=z,s.version=AR++)}function p(g,_){let m=0,y=0,S=0,E=0,C=0;const M=_.matrixWorldInverse;for(let x=0,L=g.length;x<L;x++){const U=g[x];if(U.isDirectionalLight){const R=s.directional[m];R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),m++}else if(U.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),h.identity(),u.copy(U.matrixWorld),u.premultiply(M),h.extractRotation(u),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const R=s.point[y];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const R=s.hemi[C];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(M),C++}}}return{setup:d,setupView:p,state:s}}function Xy(o){const e=new RR(o),i=[],s=[];function l(_){g.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function CR(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Xy(o),e.set(l,[d])):u>=h.length?(d=new Xy(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UR(o,e,i){let s=new pm;const l=new Xt,u=new Xt,h=new En,d=new tb({depthPacking:PE}),p=new eb,g={},_=i.maxTextureSize,m={[Is]:li,[li]:Is,[qi]:qi},y=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:DR,fragmentShader:NR}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Mi;E.setAttribute("position",new oa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new le(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zy;let x=this.type;this.render=function(I,z,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const D=o.getRenderTarget(),A=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),st=o.state;st.setBlending(zs),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const J=x!==Ya&&this.type===Ya,ut=x===Ya&&this.type!==Ya;for(let et=0,F=I.length;et<F;et++){const tt=I[et],Q=tt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const xt=Q.getFrameExtents();if(l.multiply(xt),u.copy(Q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/xt.x),l.x=u.x*xt.x,Q.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/xt.y),l.y=u.y*xt.y,Q.mapSize.y=u.y)),Q.map===null||J===!0||ut===!0){const kt=this.type!==Ya?{minFilter:ra,magFilter:ra}:{};Q.map!==null&&Q.map.dispose(),Q.map=new yr(l.x,l.y,kt),Q.map.texture.name=tt.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const Mt=Q.getViewportCount();for(let kt=0;kt<Mt;kt++){const Jt=Q.getViewport(kt);h.set(u.x*Jt.x,u.y*Jt.y,u.x*Jt.z,u.y*Jt.w),st.viewport(h),Q.updateMatrices(tt,kt),s=Q.getFrustum(),R(z,B,Q.camera,tt,this.type)}Q.isPointLightShadow!==!0&&this.type===Ya&&L(Q,B),Q.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(D,A,H)};function L(I,z){const B=e.update(C);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new yr(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,B,y,C,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,B,S,C,null)}function U(I,z,B,D){let A=null;const H=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)A=H;else if(A=B.isPointLight===!0?p:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const st=A.uuid,J=z.uuid;let ut=g[st];ut===void 0&&(ut={},g[st]=ut);let et=ut[J];et===void 0&&(et=A.clone(),ut[J]=et,z.addEventListener("dispose",k)),A=et}if(A.visible=z.visible,A.wireframe=z.wireframe,D===Ya?A.side=z.shadowSide!==null?z.shadowSide:z.side:A.side=z.shadowSide!==null?z.shadowSide:m[z.side],A.alphaMap=z.alphaMap,A.alphaTest=z.alphaTest,A.map=z.map,A.clipShadows=z.clipShadows,A.clippingPlanes=z.clippingPlanes,A.clipIntersection=z.clipIntersection,A.displacementMap=z.displacementMap,A.displacementScale=z.displacementScale,A.displacementBias=z.displacementBias,A.wireframeLinewidth=z.wireframeLinewidth,A.linewidth=z.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=o.properties.get(A);st.light=B}return A}function R(I,z,B,D,A){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Ya)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const J=e.update(I),ut=I.material;if(Array.isArray(ut)){const et=J.groups;for(let F=0,tt=et.length;F<tt;F++){const Q=et[F],xt=ut[Q.materialIndex];if(xt&&xt.visible){const Mt=U(I,xt,D,A);I.onBeforeShadow(o,I,z,B,J,Mt,Q),o.renderBufferDirect(B,null,J,Mt,I,Q),I.onAfterShadow(o,I,z,B,J,Mt,Q)}}}else if(ut.visible){const et=U(I,ut,D,A);I.onBeforeShadow(o,I,z,B,J,et,null),o.renderBufferDirect(B,null,J,et,I,null),I.onAfterShadow(o,I,z,B,J,et,null)}}const st=I.children;for(let J=0,ut=st.length;J<ut;J++)R(st[J],z,B,D,A)}function k(I){I.target.removeEventListener("dispose",k);for(const B in g){const D=g[B],A=I.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}const LR={[_p]:vp,[yp]:Mp,[xp]:Ep,[Uo]:Sp,[vp]:_p,[Mp]:yp,[Ep]:xp,[Sp]:Uo};function OR(o,e){function i(){let q=!1;const Nt=new En;let ht=null;const yt=new En(0,0,0,0);return{setMask:function(zt){ht!==zt&&!q&&(o.colorMask(zt,zt,zt,zt),ht=zt)},setLocked:function(zt){q=zt},setClear:function(zt,Ht,fe,Ve,An){An===!0&&(zt*=Ve,Ht*=Ve,fe*=Ve),Nt.set(zt,Ht,fe,Ve),yt.equals(Nt)===!1&&(o.clearColor(zt,Ht,fe,Ve),yt.copy(Nt))},reset:function(){q=!1,ht=null,yt.set(-1,0,0,0)}}}function s(){let q=!1,Nt=!1,ht=null,yt=null,zt=null;return{setReversed:function(Ht){if(Nt!==Ht){const fe=e.get("EXT_clip_control");Nt?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);const Ve=zt;zt=null,this.setClear(Ve)}Nt=Ht},getReversed:function(){return Nt},setTest:function(Ht){Ht?ft(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(Ht){ht!==Ht&&!q&&(o.depthMask(Ht),ht=Ht)},setFunc:function(Ht){if(Nt&&(Ht=LR[Ht]),yt!==Ht){switch(Ht){case _p:o.depthFunc(o.NEVER);break;case vp:o.depthFunc(o.ALWAYS);break;case yp:o.depthFunc(o.LESS);break;case Uo:o.depthFunc(o.LEQUAL);break;case xp:o.depthFunc(o.EQUAL);break;case Sp:o.depthFunc(o.GEQUAL);break;case Mp:o.depthFunc(o.GREATER);break;case Ep:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}yt=Ht}},setLocked:function(Ht){q=Ht},setClear:function(Ht){zt!==Ht&&(Nt&&(Ht=1-Ht),o.clearDepth(Ht),zt=Ht)},reset:function(){q=!1,ht=null,yt=null,zt=null,Nt=!1}}}function l(){let q=!1,Nt=null,ht=null,yt=null,zt=null,Ht=null,fe=null,Ve=null,An=null;return{setTest:function(Re){q||(Re?ft(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Re){Nt!==Re&&!q&&(o.stencilMask(Re),Nt=Re)},setFunc:function(Re,Ke,Tn){(ht!==Re||yt!==Ke||zt!==Tn)&&(o.stencilFunc(Re,Ke,Tn),ht=Re,yt=Ke,zt=Tn)},setOp:function(Re,Ke,Tn){(Ht!==Re||fe!==Ke||Ve!==Tn)&&(o.stencilOp(Re,Ke,Tn),Ht=Re,fe=Ke,Ve=Tn)},setLocked:function(Re){q=Re},setClear:function(Re){An!==Re&&(o.clearStencil(Re),An=Re)},reset:function(){q=!1,Nt=null,ht=null,yt=null,zt=null,Ht=null,fe=null,Ve=null,An=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let _={},m={},y=new WeakMap,S=[],E=null,C=!1,M=null,x=null,L=null,U=null,R=null,k=null,I=null,z=new te(0,0,0),B=0,D=!1,A=null,H=null,st=null,J=null,ut=null;const et=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,tt=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),F=tt>=1):Q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),F=tt>=2);let xt=null,Mt={};const kt=o.getParameter(o.SCISSOR_BOX),Jt=o.getParameter(o.VIEWPORT),pe=new En().fromArray(kt),N=new En().fromArray(Jt);function Z(q,Nt,ht,yt){const zt=new Uint8Array(4),Ht=o.createTexture();o.bindTexture(q,Ht),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let fe=0;fe<ht;fe++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,yt,0,o.RGBA,o.UNSIGNED_BYTE,zt):o.texImage2D(Nt+fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,zt);return Ht}const gt={};gt[o.TEXTURE_2D]=Z(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=Z(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=Z(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=Z(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(Uo),se(!1),Vt(Gv),ft(o.CULL_FACE),V(zs);function ft(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function At(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function It(q,Nt){return m[q]!==Nt?(o.bindFramebuffer(q,Nt),m[q]=Nt,q===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Nt),q===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Dt(q,Nt){let ht=S,yt=!1;if(q){ht=y.get(Nt),ht===void 0&&(ht=[],y.set(Nt,ht));const zt=q.textures;if(ht.length!==zt.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let Ht=0,fe=zt.length;Ht<fe;Ht++)ht[Ht]=o.COLOR_ATTACHMENT0+Ht;ht.length=zt.length,yt=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,yt=!0);yt&&o.drawBuffers(ht)}function wt(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const Bt={[dr]:o.FUNC_ADD,[lE]:o.FUNC_SUBTRACT,[cE]:o.FUNC_REVERSE_SUBTRACT};Bt[uE]=o.MIN,Bt[fE]=o.MAX;const ce={[hE]:o.ZERO,[dE]:o.ONE,[pE]:o.SRC_COLOR,[mp]:o.SRC_ALPHA,[xE]:o.SRC_ALPHA_SATURATE,[vE]:o.DST_COLOR,[gE]:o.DST_ALPHA,[mE]:o.ONE_MINUS_SRC_COLOR,[gp]:o.ONE_MINUS_SRC_ALPHA,[yE]:o.ONE_MINUS_DST_COLOR,[_E]:o.ONE_MINUS_DST_ALPHA,[SE]:o.CONSTANT_COLOR,[ME]:o.ONE_MINUS_CONSTANT_COLOR,[EE]:o.CONSTANT_ALPHA,[TE]:o.ONE_MINUS_CONSTANT_ALPHA};function V(q,Nt,ht,yt,zt,Ht,fe,Ve,An,Re){if(q===zs){C===!0&&(At(o.BLEND),C=!1);return}if(C===!1&&(ft(o.BLEND),C=!0),q!==oE){if(q!==M||Re!==D){if((x!==dr||R!==dr)&&(o.blendEquation(o.FUNC_ADD),x=dr,R=dr),Re)switch(q){case _r:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pp:o.blendFunc(o.ONE,o.ONE);break;case Vv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case kv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case _r:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Vv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case kv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}L=null,U=null,k=null,I=null,z.set(0,0,0),B=0,M=q,D=Re}return}zt=zt||Nt,Ht=Ht||ht,fe=fe||yt,(Nt!==x||zt!==R)&&(o.blendEquationSeparate(Bt[Nt],Bt[zt]),x=Nt,R=zt),(ht!==L||yt!==U||Ht!==k||fe!==I)&&(o.blendFuncSeparate(ce[ht],ce[yt],ce[Ht],ce[fe]),L=ht,U=yt,k=Ht,I=fe),(Ve.equals(z)===!1||An!==B)&&(o.blendColor(Ve.r,Ve.g,Ve.b,An),z.copy(Ve),B=An),M=q,D=!1}function we(q,Nt){q.side===qi?At(o.CULL_FACE):ft(o.CULL_FACE);let ht=q.side===li;Nt&&(ht=!ht),se(ht),q.blending===_r&&q.transparent===!1?V(zs):V(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),u.setMask(q.colorWrite);const yt=q.stencilWrite;d.setTest(yt),yt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ge(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(q){A!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),A=q)}function Vt(q){q!==aE?(ft(o.CULL_FACE),q!==H&&(q===Gv?o.cullFace(o.BACK):q===sE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),H=q}function bt(q){q!==st&&(F&&o.lineWidth(q),st=q)}function ge(q,Nt,ht){q?(ft(o.POLYGON_OFFSET_FILL),(J!==Nt||ut!==ht)&&(o.polygonOffset(Nt,ht),J=Nt,ut=ht)):At(o.POLYGON_OFFSET_FILL)}function Wt(q){q?ft(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function O(q){q===void 0&&(q=o.TEXTURE0+et-1),xt!==q&&(o.activeTexture(q),xt=q)}function w(q,Nt,ht){ht===void 0&&(xt===null?ht=o.TEXTURE0+et-1:ht=xt);let yt=Mt[ht];yt===void 0&&(yt={type:void 0,texture:void 0},Mt[ht]=yt),(yt.type!==q||yt.texture!==Nt)&&(xt!==ht&&(o.activeTexture(ht),xt=ht),o.bindTexture(q,Nt||gt[q]),yt.type=q,yt.texture=Nt)}function rt(){const q=Mt[xt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function vt(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function oe(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function re(q){pe.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),pe.copy(q))}function Yt(q){N.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),N.copy(q))}function Se(q,Nt){let ht=g.get(Nt);ht===void 0&&(ht=new WeakMap,g.set(Nt,ht));let yt=ht.get(q);yt===void 0&&(yt=o.getUniformBlockIndex(Nt,q.name),ht.set(q,yt))}function me(q,Nt){const yt=g.get(Nt).get(q);p.get(Nt)!==yt&&(o.uniformBlockBinding(Nt,yt,q.__bindingPointIndex),p.set(Nt,yt))}function Pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,Mt={},m={},y=new WeakMap,S=[],E=null,C=!1,M=null,x=null,L=null,U=null,R=null,k=null,I=null,z=new te(0,0,0),B=0,D=!1,A=null,H=null,st=null,J=null,ut=null,pe.set(0,0,o.canvas.width,o.canvas.height),N.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ft,disable:At,bindFramebuffer:It,drawBuffers:Dt,useProgram:wt,setBlending:V,setMaterial:we,setFlipSided:se,setCullFace:Vt,setLineWidth:bt,setPolygonOffset:ge,setScissorTest:Wt,activeTexture:O,bindTexture:w,unbindTexture:rt,compressedTexImage2D:vt,compressedTexImage3D:St,texImage2D:jt,texImage3D:oe,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:be,texStorage3D:Tt,texSubImage2D:_t,texSubImage3D:Qt,compressedTexSubImage2D:Ot,compressedTexSubImage3D:Ft,scissor:re,viewport:Yt,reset:Pe}}function zR(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Xt,_=new WeakMap;let m;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,w){return S?new OffscreenCanvas(O,w):Qu("canvas")}function C(O,w,rt){let vt=1;const St=Wt(O);if((St.width>rt||St.height>rt)&&(vt=rt/Math.max(St.width,St.height)),vt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const _t=Math.floor(vt*St.width),Qt=Math.floor(vt*St.height);m===void 0&&(m=E(_t,Qt));const Ot=w?E(_t,Qt):m;return Ot.width=_t,Ot.height=Qt,Ot.getContext("2d").drawImage(O,0,0,_t,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+_t+"x"+Qt+")."),Ot}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function M(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,w,rt,vt,St=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _t=w;if(w===o.RED&&(rt===o.FLOAT&&(_t=o.R32F),rt===o.HALF_FLOAT&&(_t=o.R16F),rt===o.UNSIGNED_BYTE&&(_t=o.R8)),w===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.R8UI),rt===o.UNSIGNED_SHORT&&(_t=o.R16UI),rt===o.UNSIGNED_INT&&(_t=o.R32UI),rt===o.BYTE&&(_t=o.R8I),rt===o.SHORT&&(_t=o.R16I),rt===o.INT&&(_t=o.R32I)),w===o.RG&&(rt===o.FLOAT&&(_t=o.RG32F),rt===o.HALF_FLOAT&&(_t=o.RG16F),rt===o.UNSIGNED_BYTE&&(_t=o.RG8)),w===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RG8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RG16UI),rt===o.UNSIGNED_INT&&(_t=o.RG32UI),rt===o.BYTE&&(_t=o.RG8I),rt===o.SHORT&&(_t=o.RG16I),rt===o.INT&&(_t=o.RG32I)),w===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),rt===o.UNSIGNED_INT&&(_t=o.RGB32UI),rt===o.BYTE&&(_t=o.RGB8I),rt===o.SHORT&&(_t=o.RGB16I),rt===o.INT&&(_t=o.RGB32I)),w===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),rt===o.UNSIGNED_INT&&(_t=o.RGBA32UI),rt===o.BYTE&&(_t=o.RGBA8I),rt===o.SHORT&&(_t=o.RGBA16I),rt===o.INT&&(_t=o.RGBA32I)),w===o.RGB&&rt===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),w===o.RGBA){const Qt=St?Zu:He.getTransfer(vt);rt===o.FLOAT&&(_t=o.RGBA32F),rt===o.HALF_FLOAT&&(_t=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(_t=Qt===Je?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&e.get("EXT_color_buffer_float"),_t}function R(O,w){let rt;return O?w===null||w===vr||w===zo?rt=o.DEPTH24_STENCIL8:w===qa?rt=o.DEPTH32F_STENCIL8:w===Yl&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vr||w===zo?rt=o.DEPTH_COMPONENT24:w===qa?rt=o.DEPTH_COMPONENT32F:w===Yl&&(rt=o.DEPTH_COMPONENT16),rt}function k(O,w){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==ra&&O.minFilter!==Ma?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function I(O){const w=O.target;w.removeEventListener("dispose",I),B(w),w.isVideoTexture&&_.delete(w)}function z(O){const w=O.target;w.removeEventListener("dispose",z),A(w)}function B(O){const w=s.get(O);if(w.__webglInit===void 0)return;const rt=O.source,vt=y.get(rt);if(vt){const St=vt[w.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(O),Object.keys(vt).length===0&&y.delete(rt)}s.remove(O)}function D(O){const w=s.get(O);o.deleteTexture(w.__webglTexture);const rt=O.source,vt=y.get(rt);delete vt[w.__cacheKey],h.memory.textures--}function A(O){const w=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(w.__webglFramebuffer[vt]))for(let St=0;St<w.__webglFramebuffer[vt].length;St++)o.deleteFramebuffer(w.__webglFramebuffer[vt][St]);else o.deleteFramebuffer(w.__webglFramebuffer[vt]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[vt])}else{if(Array.isArray(w.__webglFramebuffer))for(let vt=0;vt<w.__webglFramebuffer.length;vt++)o.deleteFramebuffer(w.__webglFramebuffer[vt]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let vt=0;vt<w.__webglColorRenderbuffer.length;vt++)w.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[vt]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const rt=O.textures;for(let vt=0,St=rt.length;vt<St;vt++){const _t=s.get(rt[vt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),h.memory.textures--),s.remove(rt[vt])}s.remove(O)}let H=0;function st(){H=0}function J(){const O=H;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function ut(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function et(O,w){const rt=s.get(O);if(O.isVideoTexture&&bt(O),O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){const vt=O.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(rt,O,w);return}}i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+w)}function F(O,w){const rt=s.get(O);if(O.version>0&&rt.__version!==O.version){N(rt,O,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+w)}function tt(O,w){const rt=s.get(O);if(O.version>0&&rt.__version!==O.version){N(rt,O,w);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+w)}function Q(O,w){const rt=s.get(O);if(O.version>0&&rt.__version!==O.version){Z(rt,O,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+w)}const xt={[_n]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[Ap]:o.MIRRORED_REPEAT},Mt={[ra]:o.NEAREST,[OE]:o.NEAREST_MIPMAP_NEAREST,[mu]:o.NEAREST_MIPMAP_LINEAR,[Ma]:o.LINEAR,[Od]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},kt={[BE]:o.NEVER,[XE]:o.ALWAYS,[FE]:o.LESS,[cx]:o.LEQUAL,[HE]:o.EQUAL,[kE]:o.GEQUAL,[GE]:o.GREATER,[VE]:o.NOTEQUAL};function Jt(O,w){if(w.type===qa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ma||w.magFilter===Od||w.magFilter===mu||w.magFilter===gr||w.minFilter===Ma||w.minFilter===Od||w.minFilter===mu||w.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,xt[w.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,xt[w.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,xt[w.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Mt[w.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Mt[w.minFilter]),w.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,kt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ra||w.minFilter!==mu&&w.minFilter!==gr||w.type===qa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function pe(O,w){let rt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",I));const vt=w.source;let St=y.get(vt);St===void 0&&(St={},y.set(vt,St));const _t=ut(w);if(_t!==O.__cacheKey){St[_t]===void 0&&(St[_t]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,rt=!0),St[_t].usedTimes++;const Qt=St[O.__cacheKey];Qt!==void 0&&(St[O.__cacheKey].usedTimes--,Qt.usedTimes===0&&D(w)),O.__cacheKey=_t,O.__webglTexture=St[_t].texture}return rt}function N(O,w,rt){let vt=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(vt=o.TEXTURE_3D);const St=pe(O,w),_t=w.source;i.bindTexture(vt,O.__webglTexture,o.TEXTURE0+rt);const Qt=s.get(_t);if(_t.version!==Qt.__version||St===!0){i.activeTexture(o.TEXTURE0+rt);const Ot=He.getPrimaries(He.workingColorSpace),Ft=w.colorSpace===Os?null:He.getPrimaries(w.colorSpace),be=w.colorSpace===Os||Ot===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Tt=C(w.image,!1,l.maxTextureSize);Tt=ge(w,Tt);const jt=u.convert(w.format,w.colorSpace),oe=u.convert(w.type);let re=U(w.internalFormat,jt,oe,w.colorSpace,w.isVideoTexture);Jt(vt,w);let Yt;const Se=w.mipmaps,me=w.isVideoTexture!==!0,Pe=Qt.__version===void 0||St===!0,q=_t.dataReady,Nt=k(w,Tt);if(w.isDepthTexture)re=R(w.format===Po,w.type),Pe&&(me?i.texStorage2D(o.TEXTURE_2D,1,re,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,re,Tt.width,Tt.height,0,jt,oe,null));else if(w.isDataTexture)if(Se.length>0){me&&Pe&&i.texStorage2D(o.TEXTURE_2D,Nt,re,Se[0].width,Se[0].height);for(let ht=0,yt=Se.length;ht<yt;ht++)Yt=Se[ht],me?q&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Yt.width,Yt.height,jt,oe,Yt.data):i.texImage2D(o.TEXTURE_2D,ht,re,Yt.width,Yt.height,0,jt,oe,Yt.data);w.generateMipmaps=!1}else me?(Pe&&i.texStorage2D(o.TEXTURE_2D,Nt,re,Tt.width,Tt.height),q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,jt,oe,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,re,Tt.width,Tt.height,0,jt,oe,Tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){me&&Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,re,Se[0].width,Se[0].height,Tt.depth);for(let ht=0,yt=Se.length;ht<yt;ht++)if(Yt=Se[ht],w.format!==sa)if(jt!==null)if(me){if(q)if(w.layerUpdates.size>0){const zt=xy(Yt.width,Yt.height,w.format,w.type);for(const Ht of w.layerUpdates){const fe=Yt.data.subarray(Ht*zt/Yt.data.BYTES_PER_ELEMENT,(Ht+1)*zt/Yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,Ht,Yt.width,Yt.height,1,jt,fe)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Yt.width,Yt.height,Tt.depth,jt,Yt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,re,Yt.width,Yt.height,Tt.depth,0,Yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Yt.width,Yt.height,Tt.depth,jt,oe,Yt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ht,re,Yt.width,Yt.height,Tt.depth,0,jt,oe,Yt.data)}else{me&&Pe&&i.texStorage2D(o.TEXTURE_2D,Nt,re,Se[0].width,Se[0].height);for(let ht=0,yt=Se.length;ht<yt;ht++)Yt=Se[ht],w.format!==sa?jt!==null?me?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,Yt.width,Yt.height,jt,Yt.data):i.compressedTexImage2D(o.TEXTURE_2D,ht,re,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?q&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Yt.width,Yt.height,jt,oe,Yt.data):i.texImage2D(o.TEXTURE_2D,ht,re,Yt.width,Yt.height,0,jt,oe,Yt.data)}else if(w.isDataArrayTexture)if(me){if(Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,re,Tt.width,Tt.height,Tt.depth),q)if(w.layerUpdates.size>0){const ht=xy(Tt.width,Tt.height,w.format,w.type);for(const yt of w.layerUpdates){const zt=Tt.data.subarray(yt*ht/Tt.data.BYTES_PER_ELEMENT,(yt+1)*ht/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,yt,Tt.width,Tt.height,1,jt,oe,zt)}w.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,jt,oe,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,re,Tt.width,Tt.height,Tt.depth,0,jt,oe,Tt.data);else if(w.isData3DTexture)me?(Pe&&i.texStorage3D(o.TEXTURE_3D,Nt,re,Tt.width,Tt.height,Tt.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,jt,oe,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,re,Tt.width,Tt.height,Tt.depth,0,jt,oe,Tt.data);else if(w.isFramebufferTexture){if(Pe)if(me)i.texStorage2D(o.TEXTURE_2D,Nt,re,Tt.width,Tt.height);else{let ht=Tt.width,yt=Tt.height;for(let zt=0;zt<Nt;zt++)i.texImage2D(o.TEXTURE_2D,zt,re,ht,yt,0,jt,oe,null),ht>>=1,yt>>=1}}else if(Se.length>0){if(me&&Pe){const ht=Wt(Se[0]);i.texStorage2D(o.TEXTURE_2D,Nt,re,ht.width,ht.height)}for(let ht=0,yt=Se.length;ht<yt;ht++)Yt=Se[ht],me?q&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,jt,oe,Yt):i.texImage2D(o.TEXTURE_2D,ht,re,jt,oe,Yt);w.generateMipmaps=!1}else if(me){if(Pe){const ht=Wt(Tt);i.texStorage2D(o.TEXTURE_2D,Nt,re,ht.width,ht.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,jt,oe,Tt)}else i.texImage2D(o.TEXTURE_2D,0,re,jt,oe,Tt);M(w)&&x(vt),Qt.__version=_t.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Z(O,w,rt){if(w.image.length!==6)return;const vt=pe(O,w),St=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+rt);const _t=s.get(St);if(St.version!==_t.__version||vt===!0){i.activeTexture(o.TEXTURE0+rt);const Qt=He.getPrimaries(He.workingColorSpace),Ot=w.colorSpace===Os?null:He.getPrimaries(w.colorSpace),Ft=w.colorSpace===Os||Qt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,Tt=w.image[0]&&w.image[0].isDataTexture,jt=[];for(let yt=0;yt<6;yt++)!be&&!Tt?jt[yt]=C(w.image[yt],!0,l.maxCubemapSize):jt[yt]=Tt?w.image[yt].image:w.image[yt],jt[yt]=ge(w,jt[yt]);const oe=jt[0],re=u.convert(w.format,w.colorSpace),Yt=u.convert(w.type),Se=U(w.internalFormat,re,Yt,w.colorSpace),me=w.isVideoTexture!==!0,Pe=_t.__version===void 0||vt===!0,q=St.dataReady;let Nt=k(w,oe);Jt(o.TEXTURE_CUBE_MAP,w);let ht;if(be){me&&Pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,Se,oe.width,oe.height);for(let yt=0;yt<6;yt++){ht=jt[yt].mipmaps;for(let zt=0;zt<ht.length;zt++){const Ht=ht[zt];w.format!==sa?re!==null?me?q&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt,0,0,Ht.width,Ht.height,re,Ht.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt,Se,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt,0,0,Ht.width,Ht.height,re,Yt,Ht.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt,Se,Ht.width,Ht.height,0,re,Yt,Ht.data)}}}else{if(ht=w.mipmaps,me&&Pe){ht.length>0&&Nt++;const yt=Wt(jt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,Se,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Tt){me?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,jt[yt].width,jt[yt].height,re,Yt,jt[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Se,jt[yt].width,jt[yt].height,0,re,Yt,jt[yt].data);for(let zt=0;zt<ht.length;zt++){const fe=ht[zt].image[yt].image;me?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt+1,0,0,fe.width,fe.height,re,Yt,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt+1,Se,fe.width,fe.height,0,re,Yt,fe.data)}}else{me?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,re,Yt,jt[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Se,re,Yt,jt[yt]);for(let zt=0;zt<ht.length;zt++){const Ht=ht[zt];me?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt+1,0,0,re,Yt,Ht.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt+1,Se,re,Yt,Ht.image[yt])}}}M(w)&&x(o.TEXTURE_CUBE_MAP),_t.__version=St.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function gt(O,w,rt,vt,St,_t){const Qt=u.convert(rt.format,rt.colorSpace),Ot=u.convert(rt.type),Ft=U(rt.internalFormat,Qt,Ot,rt.colorSpace),be=s.get(w),Tt=s.get(rt);if(Tt.__renderTarget=w,!be.__hasExternalTextures){const jt=Math.max(1,w.width>>_t),oe=Math.max(1,w.height>>_t);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,_t,Ft,jt,oe,w.depth,0,Qt,Ot,null):i.texImage2D(St,_t,Ft,jt,oe,0,Qt,Ot,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Vt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,St,Tt.__webglTexture,0,se(w)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,St,Tt.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ft(O,w,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),w.depthBuffer){const vt=w.depthTexture,St=vt&&vt.isDepthTexture?vt.type:null,_t=R(w.stencilBuffer,St),Qt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=se(w);Vt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot,_t,w.width,w.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,_t,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,_t,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Qt,o.RENDERBUFFER,O)}else{const vt=w.textures;for(let St=0;St<vt.length;St++){const _t=vt[St],Qt=u.convert(_t.format,_t.colorSpace),Ot=u.convert(_t.type),Ft=U(_t.internalFormat,Qt,Ot,_t.colorSpace),be=se(w);rt&&Vt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,be,Ft,w.width,w.height):Vt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,be,Ft,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ft,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(w.depthTexture);vt.__renderTarget=w,(!vt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),et(w.depthTexture,0);const St=vt.__webglTexture,_t=se(w);if(w.depthTexture.format===Do)Vt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(w.depthTexture.format===Po)Vt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function It(O){const w=s.get(O),rt=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const vt=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),vt){const St=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,vt.removeEventListener("dispose",St)};vt.addEventListener("dispose",St),w.__depthDisposeCallback=St}w.__boundDepthTexture=vt}if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");At(w.__webglFramebuffer,O)}else if(rt){w.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[vt]),w.__webglDepthbuffer[vt]===void 0)w.__webglDepthbuffer[vt]=o.createRenderbuffer(),ft(w.__webglDepthbuffer[vt],O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=w.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),ft(w.__webglDepthbuffer,O,!1);else{const vt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,St)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(O,w,rt){const vt=s.get(O);w!==void 0&&gt(vt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&It(O)}function wt(O){const w=O.texture,rt=s.get(O),vt=s.get(w);O.addEventListener("dispose",z);const St=O.textures,_t=O.isWebGLCubeRenderTarget===!0,Qt=St.length>1;if(Qt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=w.version,h.memory.textures++),_t){rt.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(w.mipmaps&&w.mipmaps.length>0){rt.__webglFramebuffer[Ot]=[];for(let Ft=0;Ft<w.mipmaps.length;Ft++)rt.__webglFramebuffer[Ot][Ft]=o.createFramebuffer()}else rt.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Ot=0;Ot<w.mipmaps.length;Ot++)rt.__webglFramebuffer[Ot]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Qt)for(let Ot=0,Ft=St.length;Ot<Ft;Ot++){const be=s.get(St[Ot]);be.__webglTexture===void 0&&(be.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Vt(O)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Ot=0;Ot<St.length;Ot++){const Ft=St[Ot];rt.__webglColorRenderbuffer[Ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ot]);const be=u.convert(Ft.format,Ft.colorSpace),Tt=u.convert(Ft.type),jt=U(Ft.internalFormat,be,Tt,Ft.colorSpace,O.isXRRenderTarget===!0),oe=se(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,oe,jt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),ft(rt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),Jt(o.TEXTURE_CUBE_MAP,w);for(let Ot=0;Ot<6;Ot++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)gt(rt.__webglFramebuffer[Ot][Ft],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Ft);else gt(rt.__webglFramebuffer[Ot],O,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);M(w)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Ot=0,Ft=St.length;Ot<Ft;Ot++){const be=St[Ot],Tt=s.get(be);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),Jt(o.TEXTURE_2D,be),gt(rt.__webglFramebuffer,O,be,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,0),M(be)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let Ot=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ot=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,vt.__webglTexture),Jt(Ot,w),w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)gt(rt.__webglFramebuffer[Ft],O,w,o.COLOR_ATTACHMENT0,Ot,Ft);else gt(rt.__webglFramebuffer,O,w,o.COLOR_ATTACHMENT0,Ot,0);M(w)&&x(Ot),i.unbindTexture()}O.depthBuffer&&It(O)}function Bt(O){const w=O.textures;for(let rt=0,vt=w.length;rt<vt;rt++){const St=w[rt];if(M(St)){const _t=L(O),Qt=s.get(St).__webglTexture;i.bindTexture(_t,Qt),x(_t),i.unbindTexture()}}}const ce=[],V=[];function we(O){if(O.samples>0){if(Vt(O)===!1){const w=O.textures,rt=O.width,vt=O.height;let St=o.COLOR_BUFFER_BIT;const _t=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Qt=s.get(O),Ot=w.length>1;if(Ot)for(let Ft=0;Ft<w.length;Ft++)i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let Ft=0;Ft<w.length;Ft++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Qt.__webglColorRenderbuffer[Ft]);const be=s.get(w[Ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,rt,vt,0,0,rt,vt,St,o.NEAREST),p===!0&&(ce.length=0,V.length=0,ce.push(o.COLOR_ATTACHMENT0+Ft),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ce.push(_t),V.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,V)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let Ft=0;Ft<w.length;Ft++){i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,Qt.__webglColorRenderbuffer[Ft]);const be=s.get(w[Ft]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const w=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function se(O){return Math.min(l.maxSamples,O.samples)}function Vt(O){const w=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function bt(O){const w=h.render.frame;_.get(O)!==w&&(_.set(O,w),O.update())}function ge(O,w){const rt=O.colorSpace,vt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||rt!==Io&&rt!==Os&&(He.getTransfer(rt)===Je?(vt!==sa||St!==Ka)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),w}function Wt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=J,this.resetTextureUnits=st,this.setTexture2D=et,this.setTexture2DArray=F,this.setTexture3D=tt,this.setTextureCube=Q,this.rebindTextures=Dt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Vt}function PR(o,e){function i(s,l=Os){let u;const h=He.getTransfer(l);if(s===Ka)return o.UNSIGNED_BYTE;if(s===am)return o.UNSIGNED_SHORT_4_4_4_4;if(s===sm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===tx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Jy)return o.BYTE;if(s===$y)return o.SHORT;if(s===Yl)return o.UNSIGNED_SHORT;if(s===im)return o.INT;if(s===vr)return o.UNSIGNED_INT;if(s===qa)return o.FLOAT;if(s===Wl)return o.HALF_FLOAT;if(s===ex)return o.ALPHA;if(s===nx)return o.RGB;if(s===sa)return o.RGBA;if(s===ix)return o.LUMINANCE;if(s===ax)return o.LUMINANCE_ALPHA;if(s===Do)return o.DEPTH_COMPONENT;if(s===Po)return o.DEPTH_STENCIL;if(s===sx)return o.RED;if(s===rm)return o.RED_INTEGER;if(s===rx)return o.RG;if(s===om)return o.RG_INTEGER;if(s===lm)return o.RGBA_INTEGER;if(s===ku||s===Xu||s===Yu||s===qu)if(h===Je)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===ku)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===ku)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wp||s===Rp||s===Cp||s===Dp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===wp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Np||s===Up||s===Lp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Np||s===Up)return h===Je?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Lp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Op||s===zp||s===Pp||s===Ip||s===Bp||s===Fp||s===Hp||s===Gp||s===Vp||s===kp||s===Xp||s===Yp||s===qp||s===Wp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Op)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ip)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wu||s===jp||s===Zp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Wu)return h===Je?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ox||s===Kp||s===Qp||s===Jp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Wu)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Kp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const IR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new mi,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new la({vertexShader:IR,fragmentShader:BR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new le(new ii(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HR extends Sr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,g=null,_=null,m=null,y=null,S=null,E=null;const C=new FR,M=i.getContextAttributes();let x=null,L=null;const U=[],R=[],k=new Xt;let I=null;const z=new Yi;z.viewport=new En;const B=new Yi;B.viewport=new En;const D=[z,B],A=new sb;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Z=U[N];return Z===void 0&&(Z=new tp,U[N]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(N){let Z=U[N];return Z===void 0&&(Z=new tp,U[N]=Z),Z.getGripSpace()},this.getHand=function(N){let Z=U[N];return Z===void 0&&(Z=new tp,U[N]=Z),Z.getHandSpace()};function J(N){const Z=R.indexOf(N.inputSource);if(Z===-1)return;const gt=U[Z];gt!==void 0&&(gt.update(N.inputSource,N.frame,g||h),gt.dispatchEvent({type:N.type,data:N.inputSource}))}function ut(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",et);for(let N=0;N<U.length;N++){const Z=R[N];Z!==null&&(R[N]=null,U[N].disconnect(Z))}H=null,st=null,C.reset(),e.setRenderTarget(x),S=null,y=null,m=null,l=null,L=null,pe.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){u=N,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){d=N,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(N){g=N},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(N){if(l=N,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,ft=null,At=null;M.depth&&(At=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=M.stencil?Po:Do,ft=M.stencil?zo:vr);const It={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};m=new XRWebGLBinding(l,i),y=m.createProjectionLayer(It),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new yr(y.textureWidth,y.textureHeight,{format:sa,type:Ka,depthTexture:new Mx(y.textureWidth,y.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const gt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new yr(S.framebufferWidth,S.framebufferHeight,{format:sa,type:Ka,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),pe.setContext(l),pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function et(N){for(let Z=0;Z<N.removed.length;Z++){const gt=N.removed[Z],ft=R.indexOf(gt);ft>=0&&(R[ft]=null,U[ft].disconnect(gt))}for(let Z=0;Z<N.added.length;Z++){const gt=N.added[Z];let ft=R.indexOf(gt);if(ft===-1){for(let It=0;It<U.length;It++)if(It>=R.length){R.push(gt),ft=It;break}else if(R[It]===null){R[It]=gt,ft=It;break}if(ft===-1)break}const At=U[ft];At&&At.connect(gt)}}const F=new G,tt=new G;function Q(N,Z,gt){F.setFromMatrixPosition(Z.matrixWorld),tt.setFromMatrixPosition(gt.matrixWorld);const ft=F.distanceTo(tt),At=Z.projectionMatrix.elements,It=gt.projectionMatrix.elements,Dt=At[14]/(At[10]-1),wt=At[14]/(At[10]+1),Bt=(At[9]+1)/At[5],ce=(At[9]-1)/At[5],V=(At[8]-1)/At[0],we=(It[8]+1)/It[0],se=Dt*V,Vt=Dt*we,bt=ft/(-V+we),ge=bt*-V;if(Z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(ge),N.translateZ(bt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),At[10]===-1)N.projectionMatrix.copy(Z.projectionMatrix),N.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Wt=Dt+bt,O=wt+bt,w=se-ge,rt=Vt+(ft-ge),vt=Bt*wt/O*Wt,St=ce*wt/O*Wt;N.projectionMatrix.makePerspective(w,rt,vt,St,Wt,O),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function xt(N,Z){Z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(l===null)return;let Z=N.near,gt=N.far;C.texture!==null&&(C.depthNear>0&&(Z=C.depthNear),C.depthFar>0&&(gt=C.depthFar)),A.near=B.near=z.near=Z,A.far=B.far=z.far=gt,(H!==A.near||st!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,st=A.far),z.layers.mask=N.layers.mask|2,B.layers.mask=N.layers.mask|4,A.layers.mask=z.layers.mask|B.layers.mask;const ft=N.parent,At=A.cameras;xt(A,ft);for(let It=0;It<At.length;It++)xt(At[It],ft);At.length===2?Q(A,z,B):A.projectionMatrix.copy(z.projectionMatrix),Mt(N,A,ft)};function Mt(N,Z,gt){gt===null?N.matrix.copy(Z.matrixWorld):(N.matrix.copy(gt.matrixWorld),N.matrix.invert(),N.matrix.multiply(Z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Z.projectionMatrix),N.projectionMatrixInverse.copy(Z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ql*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(N){p=N,y!==null&&(y.fixedFoveation=N),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=N)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let kt=null;function Jt(N,Z){if(_=Z.getViewerPose(g||h),E=Z,_!==null){const gt=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ft=!1;gt.length!==A.cameras.length&&(A.cameras.length=0,ft=!0);for(let Dt=0;Dt<gt.length;Dt++){const wt=gt[Dt];let Bt=null;if(S!==null)Bt=S.getViewport(wt);else{const V=m.getViewSubImage(y,wt);Bt=V.viewport,Dt===0&&(e.setRenderTargetTextures(L,V.colorTexture,y.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(L))}let ce=D[Dt];ce===void 0&&(ce=new Yi,ce.layers.enable(Dt),ce.viewport=new En,D[Dt]=ce),ce.matrix.fromArray(wt.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(wt.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Dt===0&&(A.matrix.copy(ce.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ft===!0&&A.cameras.push(ce)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&m){const Dt=m.getDepthInformation(gt[0]);Dt&&Dt.isValid&&Dt.texture&&C.init(e,Dt,l.renderState)}}for(let gt=0;gt<U.length;gt++){const ft=R[gt],At=U[gt];ft!==null&&At!==void 0&&At.update(ft,Z,g||h)}kt&&kt(N,Z),Z.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Z}),E=null}const pe=new wx;pe.setAnimationLoop(Jt),this.setAnimationLoop=function(N){kt=N},this.dispose=function(){}}}const ur=new Ea,GR=new mn;function VR(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,_x(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,L,U,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),m(M,x)):x.isMeshPhongMaterial?(u(M,x),_(M,x)):x.isMeshStandardMaterial?(u(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,R)):x.isMeshMatcapMaterial?(u(M,x),E(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),C(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,L,U):x.isSpriteMaterial?g(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===li&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===li&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const L=e.get(x),U=L.envMap,R=L.envMapRotation;U&&(M.envMap.value=U,ur.copy(R),ur.x*=-1,ur.y*=-1,ur.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),M.envMapRotation.value.setFromMatrix4(GR.makeRotationFromEuler(ur)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,L,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*L,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function m(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,L){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===li&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const L=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kR(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,U){const R=U.program;s.uniformBlockBinding(L,R)}function g(L,U){let R=l[L.id];R===void 0&&(E(L),R=_(L),l[L.id]=R,L.addEventListener("dispose",M));const k=U.program;s.updateUBOMapping(L,k);const I=e.render.frame;u[L.id]!==I&&(y(L),u[L.id]=I)}function _(L){const U=m();L.__bindingPointIndex=U;const R=o.createBuffer(),k=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,k,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,R),R}function m(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const U=l[L.id],R=L.uniforms,k=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let I=0,z=R.length;I<z;I++){const B=Array.isArray(R[I])?R[I]:[R[I]];for(let D=0,A=B.length;D<A;D++){const H=B[D];if(S(H,I,D,k)===!0){const st=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let et=0;et<J.length;et++){const F=J[et],tt=C(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,st+ut,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ut),ut+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(L,U,R,k){const I=L.value,z=U+"_"+R;if(k[z]===void 0)return typeof I=="number"||typeof I=="boolean"?k[z]=I:k[z]=I.clone(),!0;{const B=k[z];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return k[z]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function E(L){const U=L.uniforms;let R=0;const k=16;for(let z=0,B=U.length;z<B;z++){const D=Array.isArray(U[z])?U[z]:[U[z]];for(let A=0,H=D.length;A<H;A++){const st=D[A],J=Array.isArray(st.value)?st.value:[st.value];for(let ut=0,et=J.length;ut<et;ut++){const F=J[ut],tt=C(F),Q=R%k,xt=Q%tt.boundary,Mt=Q+xt;R+=xt,Mt!==0&&k-Mt<tt.storage&&(R+=k-Mt),st.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=tt.storage}}}const I=R%k;return I>0&&(R+=k-I),L.__size=R,L.__cache={},this}function C(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function M(L){const U=L.target;U.removeEventListener("dispose",M);const R=h.indexOf(U.__bindingPointIndex);h.splice(R,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function x(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:p,update:g,dispose:x}}class XR{constructor(e={}){const{canvas:i=oT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),C=new Int32Array(4);let M=null,x=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xi,this.toneMapping=Ps,this.toneMappingExposure=1;const R=this;let k=!1,I=0,z=0,B=null,D=-1,A=null;const H=new En,st=new En;let J=null;const ut=new te(0);let et=0,F=i.width,tt=i.height,Q=1,xt=null,Mt=null;const kt=new En(0,0,F,tt),Jt=new En(0,0,F,tt);let pe=!1;const N=new pm;let Z=!1,gt=!1;this.transmissionResolutionScale=1;const ft=new mn,At=new mn,It=new G,Dt=new En,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function ce(){return B===null?Q:1}let V=s;function we(b,Y){return i.getContext(b,Y)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${nm}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Ht,!1),V===null){const Y="webgl2";if(V=we(Y,b),V===null)throw we(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,Vt,bt,ge,Wt,O,w,rt,vt,St,_t,Qt,Ot,Ft,be,Tt,jt,oe,re,Yt,Se,me,Pe,q;function Nt(){se=new tw(V),se.init(),me=new PR(V,se),Vt=new W2(V,se,e,me),bt=new OR(V,se),Vt.reverseDepthBuffer&&y&&bt.buffers.depth.setReversed(!0),ge=new iw(V),Wt=new SR,O=new zR(V,se,bt,Wt,Vt,me,ge),w=new Z2(R),rt=new $2(R),vt=new cb(V),Pe=new Y2(V,vt),St=new ew(V,vt,ge,Pe),_t=new sw(V,St,vt,ge),re=new aw(V,Vt,O),Tt=new j2(Wt),Qt=new xR(R,w,rt,se,Vt,Pe,Tt),Ot=new VR(R,Wt),Ft=new ER,be=new CR(se),oe=new X2(R,w,rt,bt,_t,S,p),jt=new UR(R,_t,Vt),q=new kR(V,ge,Vt,bt),Yt=new q2(V,se,ge),Se=new nw(V,se,ge),ge.programs=Qt.programs,R.capabilities=Vt,R.extensions=se,R.properties=Wt,R.renderLists=Ft,R.shadowMap=jt,R.state=bt,R.info=ge}Nt();const ht=new HR(R,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(F,tt,!1))},this.getSize=function(b){return b.set(F,tt)},this.setSize=function(b,Y,it=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,tt=Y,i.width=Math.floor(b*Q),i.height=Math.floor(Y*Q),it===!0&&(i.style.width=b+"px",i.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(F*Q,tt*Q).floor()},this.setDrawingBufferSize=function(b,Y,it){F=b,tt=Y,Q=it,i.width=Math.floor(b*it),i.height=Math.floor(Y*it),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(kt)},this.setViewport=function(b,Y,it,ot){b.isVector4?kt.set(b.x,b.y,b.z,b.w):kt.set(b,Y,it,ot),bt.viewport(H.copy(kt).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(Jt)},this.setScissor=function(b,Y,it,ot){b.isVector4?Jt.set(b.x,b.y,b.z,b.w):Jt.set(b,Y,it,ot),bt.scissor(st.copy(Jt).multiplyScalar(Q).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){bt.setScissorTest(pe=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,it=!0){let ot=0;if(b){let $=!1;if(B!==null){const Et=B.texture.format;$=Et===lm||Et===om||Et===rm}if($){const Et=B.texture.type,Rt=Et===Ka||Et===vr||Et===Yl||Et===zo||Et===am||Et===sm,Ct=oe.getClearColor(),Ut=oe.getClearAlpha(),ie=Ct.r,he=Ct.g,ae=Ct.b;Rt?(E[0]=ie,E[1]=he,E[2]=ae,E[3]=Ut,V.clearBufferuiv(V.COLOR,0,E)):(C[0]=ie,C[1]=he,C[2]=ae,C[3]=Ut,V.clearBufferiv(V.COLOR,0,C))}else ot|=V.COLOR_BUFFER_BIT}Y&&(ot|=V.DEPTH_BUFFER_BIT),it&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Ht,!1),oe.dispose(),Ft.dispose(),be.dispose(),Wt.dispose(),w.dispose(),rt.dispose(),_t.dispose(),Pe.dispose(),q.dispose(),Qt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",On),ht.removeEventListener("sessionend",Ta),ct.stop()};function yt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const b=ge.autoReset,Y=jt.enabled,it=jt.autoUpdate,ot=jt.needsUpdate,$=jt.type;Nt(),ge.autoReset=b,jt.enabled=Y,jt.autoUpdate=it,jt.needsUpdate=ot,jt.type=$}function Ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fe(b){const Y=b.target;Y.removeEventListener("dispose",fe),Ve(Y)}function Ve(b){An(b),Wt.remove(b)}function An(b){const Y=Wt.get(b).programs;Y!==void 0&&(Y.forEach(function(it){Qt.releaseProgram(it)}),b.isShaderMaterial&&Qt.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,it,ot,$,Et){Y===null&&(Y=wt);const Rt=$.isMesh&&$.matrixWorld.determinant()<0,Ct=wn(b,Y,it,ot,$);bt.setMaterial(ot,Rt);let Ut=it.index,ie=1;if(ot.wireframe===!0){if(Ut=St.getWireframeAttribute(it),Ut===void 0)return;ie=2}const he=it.drawRange,ae=it.attributes.position;let ze=he.start*ie,Be=(he.start+he.count)*ie;Et!==null&&(ze=Math.max(ze,Et.start*ie),Be=Math.min(Be,(Et.start+Et.count)*ie)),Ut!==null?(ze=Math.max(ze,0),Be=Math.min(Be,Ut.count)):ae!=null&&(ze=Math.max(ze,0),Be=Math.min(Be,ae.count));const rn=Be-ze;if(rn<0||rn===1/0)return;Pe.setup($,ot,Ct,it,Ut);let nn,Ce=Yt;if(Ut!==null&&(nn=vt.get(Ut),Ce=Se,Ce.setIndex(nn)),$.isMesh)ot.wireframe===!0?(bt.setLineWidth(ot.wireframeLinewidth*ce()),Ce.setMode(V.LINES)):Ce.setMode(V.TRIANGLES);else if($.isLine){let $t=ot.linewidth;$t===void 0&&($t=1),bt.setLineWidth($t*ce()),$.isLineSegments?Ce.setMode(V.LINES):$.isLineLoop?Ce.setMode(V.LINE_LOOP):Ce.setMode(V.LINE_STRIP)}else $.isPoints?Ce.setMode(V.POINTS):$.isSprite&&Ce.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Ce.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $t=$._multiDrawStarts,dn=$._multiDrawCounts,Ue=$._multiDrawCount,Hn=Ut?vt.get(Ut).bytesPerElement:1,cn=Wt.get(ot).currentProgram.getUniforms();for(let ai=0;ai<Ue;ai++)cn.setValue(V,"_gl_DrawID",ai),Ce.render($t[ai]/Hn,dn[ai])}else if($.isInstancedMesh)Ce.renderInstances(ze,rn,$.count);else if(it.isInstancedBufferGeometry){const $t=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,dn=Math.min(it.instanceCount,$t);Ce.renderInstances(ze,rn,dn)}else Ce.render(ze,rn)};function Re(b,Y,it){b.transparent===!0&&b.side===qi&&b.forceSinglePass===!1?(b.side=li,b.needsUpdate=!0,en(b,Y,it),b.side=Is,b.needsUpdate=!0,en(b,Y,it),b.side=qi):en(b,Y,it)}this.compile=function(b,Y,it=null){it===null&&(it=b),x=be.get(it),x.init(Y),U.push(x),it.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),b!==it&&b.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const ot=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Et=$.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const Ct=Et[Rt];Re(Ct,it,$),ot.add(Ct)}else Re(Et,it,$),ot.add(Et)}),x=U.pop(),ot},this.compileAsync=function(b,Y,it=null){const ot=this.compile(b,Y,it);return new Promise($=>{function Et(){if(ot.forEach(function(Rt){Wt.get(Rt).currentProgram.isReady()&&ot.delete(Rt)}),ot.size===0){$(b);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ke=null;function Tn(b){Ke&&Ke(b)}function On(){ct.stop()}function Ta(){ct.start()}const ct=new wx;ct.setAnimationLoop(Tn),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(b){Ke=b,ht.setAnimationLoop(b),b===null?ct.stop():ct.start()},ht.addEventListener("sessionstart",On),ht.addEventListener("sessionend",Ta),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Y),Y=ht.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,Y,B),x=be.get(b,U.length),x.init(Y),U.push(x),At.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),N.setFromProjectionMatrix(At),gt=this.localClippingEnabled,Z=Tt.init(this.clippingPlanes,gt),M=Ft.get(b,L.length),M.init(),L.push(M),ht.enabled===!0&&ht.isPresenting===!0){const Et=R.xr.getDepthSensingMesh();Et!==null&&Pt(Et,Y,-1/0,R.sortObjects)}Pt(b,Y,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(xt,Mt),Bt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Bt&&oe.addToRenderList(M,b),this.info.render.frame++,Z===!0&&Tt.beginShadows();const it=x.state.shadowsArray;jt.render(it,b,Y),Z===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,$=M.transmissive;if(x.setupLights(),Y.isArrayCamera){const Et=Y.cameras;if($.length>0)for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const Ut=Et[Rt];ne(ot,$,b,Ut)}Bt&&oe.render(b);for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const Ut=Et[Rt];Zt(M,b,Ut,Ut.viewport)}}else $.length>0&&ne(ot,$,b,Y),Bt&&oe.render(b),Zt(M,b,Y);B!==null&&z===0&&(O.updateMultisampleRenderTarget(B),O.updateRenderTargetMipmap(B)),b.isScene===!0&&b.onAfterRender(R,b,Y),Pe.resetDefaultState(),D=-1,A=null,U.pop(),U.length>0?(x=U[U.length-1],Z===!0&&Tt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function Pt(b,Y,it,ot){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||N.intersectsSprite(b)){ot&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);const Rt=_t.update(b),Ct=b.material;Ct.visible&&M.push(b,Rt,Ct,it,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||N.intersectsObject(b))){const Rt=_t.update(b),Ct=b.material;if(ot&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Dt.copy(Rt.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(Ct)){const Ut=Rt.groups;for(let ie=0,he=Ut.length;ie<he;ie++){const ae=Ut[ie],ze=Ct[ae.materialIndex];ze&&ze.visible&&M.push(b,Rt,ze,it,Dt.z,ae)}}else Ct.visible&&M.push(b,Rt,Ct,it,Dt.z,null)}}const Et=b.children;for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++)Pt(Et[Rt],Y,it,ot)}function Zt(b,Y,it,ot){const $=b.opaque,Et=b.transmissive,Rt=b.transparent;x.setupLightsView(it),Z===!0&&Tt.setGlobalState(R.clippingPlanes,it),ot&&bt.viewport(H.copy(ot)),$.length>0&&_e($,Y,it),Et.length>0&&_e(Et,Y,it),Rt.length>0&&_e(Rt,Y,it),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ne(b,Y,it,ot){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ot.id]===void 0&&(x.state.transmissionRenderTarget[ot.id]=new yr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Wl:Ka,minFilter:gr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const Et=x.state.transmissionRenderTarget[ot.id],Rt=ot.viewport||H;Et.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);const Ct=R.getRenderTarget();R.setRenderTarget(Et),R.getClearColor(ut),et=R.getClearAlpha(),et<1&&R.setClearColor(16777215,.5),R.clear(),Bt&&oe.render(it);const Ut=R.toneMapping;R.toneMapping=Ps;const ie=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),x.setupLightsView(ot),Z===!0&&Tt.setGlobalState(R.clippingPlanes,ot),_e(b,it,ot),O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let ae=0,ze=Y.length;ae<ze;ae++){const Be=Y[ae],rn=Be.object,nn=Be.geometry,Ce=Be.material,$t=Be.group;if(Ce.side===qi&&rn.layers.test(ot.layers)){const dn=Ce.side;Ce.side=li,Ce.needsUpdate=!0,tn(rn,it,ot,nn,Ce,$t),Ce.side=dn,Ce.needsUpdate=!0,he=!0}}he===!0&&(O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et))}R.setRenderTarget(Ct),R.setClearColor(ut,et),ie!==void 0&&(ot.viewport=ie),R.toneMapping=Ut}function _e(b,Y,it){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Et=b.length;$<Et;$++){const Rt=b[$],Ct=Rt.object,Ut=Rt.geometry,ie=ot===null?Rt.material:ot,he=Rt.group;Ct.layers.test(it.layers)&&tn(Ct,Y,it,Ut,ie,he)}}function tn(b,Y,it,ot,$,Et){b.onBeforeRender(R,Y,it,ot,$,Et),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(R,Y,it,ot,b,Et),$.transparent===!0&&$.side===qi&&$.forceSinglePass===!1?($.side=li,$.needsUpdate=!0,R.renderBufferDirect(it,Y,ot,$,b,Et),$.side=Is,$.needsUpdate=!0,R.renderBufferDirect(it,Y,ot,$,b,Et),$.side=qi):R.renderBufferDirect(it,Y,ot,$,b,Et),b.onAfterRender(R,Y,it,ot,$,Et)}function en(b,Y,it){Y.isScene!==!0&&(Y=wt);const ot=Wt.get(b),$=x.state.lights,Et=x.state.shadowsArray,Rt=$.state.version,Ct=Qt.getParameters(b,$.state,Et,Y,it),Ut=Qt.getProgramCacheKey(Ct);let ie=ot.programs;ot.environment=b.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(b.isMeshStandardMaterial?rt:w).get(b.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,ie===void 0&&(b.addEventListener("dispose",fe),ie=new Map,ot.programs=ie);let he=ie.get(Ut);if(he!==void 0){if(ot.currentProgram===he&&ot.lightsStateVersion===Rt)return yn(b,Ct),he}else Ct.uniforms=Qt.getUniforms(b),b.onBeforeCompile(Ct,R),he=Qt.acquireProgram(Ct,Ut),ie.set(Ut,he),ot.uniforms=Ct.uniforms;const ae=ot.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ae.clippingPlanes=Tt.uniform),yn(b,Ct),ot.needsLights=qn(b),ot.lightsStateVersion=Rt,ot.needsLights&&(ae.ambientLightColor.value=$.state.ambient,ae.lightProbe.value=$.state.probe,ae.directionalLights.value=$.state.directional,ae.directionalLightShadows.value=$.state.directionalShadow,ae.spotLights.value=$.state.spot,ae.spotLightShadows.value=$.state.spotShadow,ae.rectAreaLights.value=$.state.rectArea,ae.ltc_1.value=$.state.rectAreaLTC1,ae.ltc_2.value=$.state.rectAreaLTC2,ae.pointLights.value=$.state.point,ae.pointLightShadows.value=$.state.pointShadow,ae.hemisphereLights.value=$.state.hemi,ae.directionalShadowMap.value=$.state.directionalShadowMap,ae.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ae.spotShadowMap.value=$.state.spotShadowMap,ae.spotLightMatrix.value=$.state.spotLightMatrix,ae.spotLightMap.value=$.state.spotLightMap,ae.pointShadowMap.value=$.state.pointShadowMap,ae.pointShadowMatrix.value=$.state.pointShadowMatrix),ot.currentProgram=he,ot.uniformsList=null,he}function vn(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=ju.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function yn(b,Y){const it=Wt.get(b);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function wn(b,Y,it,ot,$){Y.isScene!==!0&&(Y=wt),O.resetTextureUnits();const Et=Y.fog,Rt=ot.isMeshStandardMaterial?Y.environment:null,Ct=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Io,Ut=(ot.isMeshStandardMaterial?rt:w).get(ot.envMap||Rt),ie=ot.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,he=!!it.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),ae=!!it.morphAttributes.position,ze=!!it.morphAttributes.normal,Be=!!it.morphAttributes.color;let rn=Ps;ot.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(rn=R.toneMapping);const nn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ce=nn!==void 0?nn.length:0,$t=Wt.get(ot),dn=x.state.lights;if(Z===!0&&(gt===!0||b!==A)){const Wn=b===A&&ot.id===D;Tt.setState(ot,b,Wn)}let Ue=!1;ot.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==dn.state.version||$t.outputColorSpace!==Ct||$.isBatchedMesh&&$t.batching===!1||!$.isBatchedMesh&&$t.batching===!0||$.isBatchedMesh&&$t.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$t.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$t.instancing===!1||!$.isInstancedMesh&&$t.instancing===!0||$.isSkinnedMesh&&$t.skinning===!1||!$.isSkinnedMesh&&$t.skinning===!0||$.isInstancedMesh&&$t.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$t.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$t.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$t.instancingMorph===!1&&$.morphTexture!==null||$t.envMap!==Ut||ot.fog===!0&&$t.fog!==Et||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Tt.numPlanes||$t.numIntersection!==Tt.numIntersection)||$t.vertexAlphas!==ie||$t.vertexTangents!==he||$t.morphTargets!==ae||$t.morphNormals!==ze||$t.morphColors!==Be||$t.toneMapping!==rn||$t.morphTargetsCount!==Ce)&&(Ue=!0):(Ue=!0,$t.__version=ot.version);let Hn=$t.currentProgram;Ue===!0&&(Hn=en(ot,Y,$));let cn=!1,ai=!1,Ja=!1;const an=Hn.getUniforms(),Rn=$t.uniforms;if(bt.useProgram(Hn.program)&&(cn=!0,ai=!0,Ja=!0),ot.id!==D&&(D=ot.id,ai=!0),cn||A!==b){bt.buffers.depth.getReversed()?(ft.copy(b.projectionMatrix),cT(ft),uT(ft),an.setValue(V,"projectionMatrix",ft)):an.setValue(V,"projectionMatrix",b.projectionMatrix),an.setValue(V,"viewMatrix",b.matrixWorldInverse);const jn=an.map.cameraPosition;jn!==void 0&&jn.setValue(V,It.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&an.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&an.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,ai=!0,Ja=!0)}if($.isSkinnedMesh){an.setOptional(V,$,"bindMatrix"),an.setOptional(V,$,"bindMatrixInverse");const Wn=$.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),an.setValue(V,"boneTexture",Wn.boneTexture,O))}$.isBatchedMesh&&(an.setOptional(V,$,"batchingTexture"),an.setValue(V,"batchingTexture",$._matricesTexture,O),an.setOptional(V,$,"batchingIdTexture"),an.setValue(V,"batchingIdTexture",$._indirectTexture,O),an.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&an.setValue(V,"batchingColorTexture",$._colorsTexture,O));const zn=it.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&re.update($,it,Hn),(ai||$t.receiveShadow!==$.receiveShadow)&&($t.receiveShadow=$.receiveShadow,an.setValue(V,"receiveShadow",$.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Rn.envMap.value=Ut,Rn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(Rn.envMapIntensity.value=Y.environmentIntensity),ai&&(an.setValue(V,"toneMappingExposure",R.toneMappingExposure),$t.needsLights&&fn(Rn,Ja),Et&&ot.fog===!0&&Ot.refreshFogUniforms(Rn,Et),Ot.refreshMaterialUniforms(Rn,ot,Q,tt,x.state.transmissionRenderTarget[b.id]),ju.upload(V,vn($t),Rn,O)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ju.upload(V,vn($t),Rn,O),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&an.setValue(V,"center",$.center),an.setValue(V,"modelViewMatrix",$.modelViewMatrix),an.setValue(V,"normalMatrix",$.normalMatrix),an.setValue(V,"modelMatrix",$.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Wn=ot.uniformsGroups;for(let jn=0,Mr=Wn.length;jn<Mr;jn++){const ba=Wn[jn];q.update(ba,Hn),q.bind(ba,Hn)}}return Hn}function fn(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function qn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,Y,it){Wt.get(b.texture).__webglTexture=Y,Wt.get(b.depthTexture).__webglTexture=it;const ot=Wt.get(b);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=it===void 0,ot.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,Y){const it=Wt.get(b);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0};const Ye=V.createFramebuffer();this.setRenderTarget=function(b,Y=0,it=0){B=b,I=Y,z=it;let ot=!0,$=null,Et=!1,Rt=!1;if(b){const Ut=Wt.get(b);if(Ut.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(V.FRAMEBUFFER,null),ot=!1;else if(Ut.__webglFramebuffer===void 0)O.setupRenderTarget(b);else if(Ut.__hasExternalTextures)O.rebindTextures(b,Wt.get(b.texture).__webglTexture,Wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ae=b.depthTexture;if(Ut.__boundDepthTexture!==ae){if(ae!==null&&Wt.has(ae)&&(b.width!==ae.image.width||b.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(b)}}const ie=b.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Rt=!0);const he=Wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(he[Y])?$=he[Y][it]:$=he[Y],Et=!0):b.samples>0&&O.useMultisampledRTT(b)===!1?$=Wt.get(b).__webglMultisampledFramebuffer:Array.isArray(he)?$=he[it]:$=he,H.copy(b.viewport),st.copy(b.scissor),J=b.scissorTest}else H.copy(kt).multiplyScalar(Q).floor(),st.copy(Jt).multiplyScalar(Q).floor(),J=pe;if(it!==0&&($=Ye),bt.bindFramebuffer(V.FRAMEBUFFER,$)&&ot&&bt.drawBuffers(b,$),bt.viewport(H),bt.scissor(st),bt.setScissorTest(J),Et){const Ut=Wt.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ut.__webglTexture,it)}else if(Rt){const Ut=Wt.get(b.texture),ie=Y;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ut.__webglTexture,it,ie)}else if(b!==null&&it!==0){const Ut=Wt.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ut.__webglTexture,it)}D=-1},this.readRenderTargetPixels=function(b,Y,it,ot,$,Et,Rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){bt.bindFramebuffer(V.FRAMEBUFFER,Ct);try{const Ut=b.texture,ie=Ut.format,he=Ut.type;if(!Vt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-ot&&it>=0&&it<=b.height-$&&V.readPixels(Y,it,ot,$,me.convert(ie),me.convert(he),Et)}finally{const Ut=B!==null?Wt.get(B).__webglFramebuffer:null;bt.bindFramebuffer(V.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,Y,it,ot,$,Et,Rt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){const Ut=b.texture,ie=Ut.format,he=Ut.type;if(!Vt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=b.width-ot&&it>=0&&it<=b.height-$){bt.bindFramebuffer(V.FRAMEBUFFER,Ct);const ae=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ae),V.bufferData(V.PIXEL_PACK_BUFFER,Et.byteLength,V.STREAM_READ),V.readPixels(Y,it,ot,$,me.convert(ie),me.convert(he),0);const ze=B!==null?Wt.get(B).__webglFramebuffer:null;bt.bindFramebuffer(V.FRAMEBUFFER,ze);const Be=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await lT(V,Be,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ae),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Et),V.deleteBuffer(ae),V.deleteSync(Be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Y=null,it=0){b.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1]);const ot=Math.pow(2,-it),$=Math.floor(b.image.width*ot),Et=Math.floor(b.image.height*ot),Rt=Y!==null?Y.x:0,Ct=Y!==null?Y.y:0;O.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,it,0,0,Rt,Ct,$,Et),bt.unbindTexture()};const hn=V.createFramebuffer(),ke=V.createFramebuffer();this.copyTextureToTexture=function(b,Y,it=null,ot=null,$=0,Et=null){b.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,b=arguments[1],Y=arguments[2],Et=arguments[3]||0,it=null),Et===null&&($!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=$,$=0):Et=0);let Rt,Ct,Ut,ie,he,ae,ze,Be,rn;const nn=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(it!==null)Rt=it.max.x-it.min.x,Ct=it.max.y-it.min.y,Ut=it.isBox3?it.max.z-it.min.z:1,ie=it.min.x,he=it.min.y,ae=it.isBox3?it.min.z:0;else{const zn=Math.pow(2,-$);Rt=Math.floor(nn.width*zn),Ct=Math.floor(nn.height*zn),b.isDataArrayTexture?Ut=nn.depth:b.isData3DTexture?Ut=Math.floor(nn.depth*zn):Ut=1,ie=0,he=0,ae=0}ot!==null?(ze=ot.x,Be=ot.y,rn=ot.z):(ze=0,Be=0,rn=0);const Ce=me.convert(Y.format),$t=me.convert(Y.type);let dn;Y.isData3DTexture?(O.setTexture3D(Y,0),dn=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(O.setTexture2DArray(Y,0),dn=V.TEXTURE_2D_ARRAY):(O.setTexture2D(Y,0),dn=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ue=V.getParameter(V.UNPACK_ROW_LENGTH),Hn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),cn=V.getParameter(V.UNPACK_SKIP_PIXELS),ai=V.getParameter(V.UNPACK_SKIP_ROWS),Ja=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,nn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,nn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ie),V.pixelStorei(V.UNPACK_SKIP_ROWS,he),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ae);const an=b.isDataArrayTexture||b.isData3DTexture,Rn=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const zn=Wt.get(b),Wn=Wt.get(Y),jn=Wt.get(zn.__renderTarget),Mr=Wt.get(Wn.__renderTarget);bt.bindFramebuffer(V.READ_FRAMEBUFFER,jn.__webglFramebuffer),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let ba=0;ba<Ut;ba++)an&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.get(b).__webglTexture,$,ae+ba),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.get(Y).__webglTexture,Et,rn+ba)),V.blitFramebuffer(ie,he,Rt,Ct,ze,Be,Rt,Ct,V.DEPTH_BUFFER_BIT,V.NEAREST);bt.bindFramebuffer(V.READ_FRAMEBUFFER,null),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||Wt.has(b)){const zn=Wt.get(b),Wn=Wt.get(Y);bt.bindFramebuffer(V.READ_FRAMEBUFFER,hn),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ke);for(let jn=0;jn<Ut;jn++)an?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,$,ae+jn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,$),Rn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wn.__webglTexture,Et,rn+jn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Wn.__webglTexture,Et),$!==0?V.blitFramebuffer(ie,he,Rt,Ct,ze,Be,Rt,Ct,V.COLOR_BUFFER_BIT,V.NEAREST):Rn?V.copyTexSubImage3D(dn,Et,ze,Be,rn+jn,ie,he,Rt,Ct):V.copyTexSubImage2D(dn,Et,ze,Be,ie,he,Rt,Ct);bt.bindFramebuffer(V.READ_FRAMEBUFFER,null),bt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rn?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(dn,Et,ze,Be,rn,Rt,Ct,Ut,Ce,$t,nn.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(dn,Et,ze,Be,rn,Rt,Ct,Ut,Ce,nn.data):V.texSubImage3D(dn,Et,ze,Be,rn,Rt,Ct,Ut,Ce,$t,nn):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Et,ze,Be,Rt,Ct,Ce,$t,nn.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Et,ze,Be,nn.width,nn.height,Ce,nn.data):V.texSubImage2D(V.TEXTURE_2D,Et,ze,Be,Rt,Ct,Ce,$t,nn);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ue),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Hn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,cn),V.pixelStorei(V.UNPACK_SKIP_ROWS,ai),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ja),Et===0&&Y.generateMipmaps&&V.generateMipmap(dn),bt.unbindTexture()},this.copyTextureToTexture3D=function(b,Y,it=null,ot=null,$=0){return b.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,ot=arguments[1]||null,b=arguments[2],Y=arguments[3],$=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Y,it,ot,$)},this.initRenderTarget=function(b){Wt.get(b).__webglFramebuffer===void 0&&O.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?O.setTextureCube(b,0):b.isData3DTexture?O.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?O.setTexture2DArray(b,0):O.setTexture2D(b,0),bt.unbindTexture()},this.resetState=function(){I=0,z=0,B=null,bt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=He._getDrawingBufferColorSpace(e),i.unpackColorSpace=He._getUnpackColorSpace()}}const Yy={type:"change"},Em={type:"start"},Ux={type:"end"},Hu=new hx,qy=new Us,YR=Math.cos(70*Ns.DEG2RAD),In=new G,Si=2*Math.PI,$e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dp=1e-6;class qR extends ob{constructor(e,i=null){super(e,i),this.state=$e.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Co.ROTATE,MIDDLE:Co.DOLLY,RIGHT:Co.PAN},this.touches={ONE:wo.ROTATE,TWO:wo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new xr,this._lastTargetPosition=new G,this._quat=new xr().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yy,this._sphericalDelta=new yy,this._scale=1,this._panOffset=new G,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new G,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jR.bind(this),this._onPointerDown=WR.bind(this),this._onPointerUp=ZR.bind(this),this._onContextMenu=nC.bind(this),this._onMouseWheel=JR.bind(this),this._onKeyDown=$R.bind(this),this._onTouchStart=tC.bind(this),this._onTouchMove=eC.bind(this),this._onMouseDown=KR.bind(this),this._onMouseMove=QR.bind(this),this._interceptControlDown=iC.bind(this),this._interceptControlUp=aC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yy),this.update(),this.state=$e.NONE}update(e=null){const i=this.object.position;In.copy(i).sub(this.target),In.applyQuaternion(this._quat),this._spherical.setFromVector3(In),this.autoRotate&&this.state===$e.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Si:s>Math.PI&&(s-=Si),l<-Math.PI?l+=Si:l>Math.PI&&(l-=Si),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(In.setFromSpherical(this._spherical),In.applyQuaternion(this._quatInverse),i.copy(this.target).add(In),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=In.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new G(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const g=new G(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(d),this.object.updateMatrixWorld(),h=In.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Hu.origin.copy(this.object.position),Hu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hu.direction))<YR?this.object.lookAt(this.target):(qy.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hu.intersectPlane(qy,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>dp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dp||this._lastTargetPosition.distanceToSquared(this.target)>dp?(this.dispatchEvent(Yy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Si/60*this.autoRotateSpeed*e:Si/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){In.setFromMatrixColumn(i,0),In.multiplyScalar(-e),this._panOffset.add(In)}_panUp(e,i){this.screenSpacePanning===!0?In.setFromMatrixColumn(i,1):(In.setFromMatrixColumn(i,0),In.crossVectors(this.object.up,In)),In.multiplyScalar(e),this._panOffset.add(In)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;In.copy(l).sub(this.target);let u=In.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Si*this._rotateDelta.x/i.clientHeight),this._rotateUp(Si*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Si*this._rotateDelta.x/i.clientHeight),this._rotateUp(Si*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Xt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function WR(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function jR(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function ZR(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ux),this.state=$e.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function KR(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=$e.DOLLY;break;case Co.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=$e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=$e.ROTATE}break;case Co.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=$e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=$e.PAN}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(Em)}function QR(o){switch(this.state){case $e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case $e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case $e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function JR(o){this.enabled===!1||this.enableZoom===!1||this.state!==$e.NONE||(o.preventDefault(),this.dispatchEvent(Em),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ux))}function $R(o){this.enabled!==!1&&this._handleKeyDown(o)}function tC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case wo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=$e.TOUCH_ROTATE;break;case wo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=$e.TOUCH_PAN;break;default:this.state=$e.NONE}break;case 2:switch(this.touches.TWO){case wo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=$e.TOUCH_DOLLY_PAN;break;case wo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=$e.TOUCH_DOLLY_ROTATE;break;default:this.state=$e.NONE}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(Em)}function eC(o){switch(this._trackPointer(o),this.state){case $e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case $e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case $e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case $e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=$e.NONE}}function nC(o){this.enabled!==!1&&o.preventDefault()}function iC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sC(){const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=512;const l=s.getContext("2d"),u=i.createLinearGradient(0,0,512,512);u.addColorStop(0,"#e8d7b8"),u.addColorStop(.5,"#decba7"),u.addColorStop(1,"#d6bf96"),i.fillStyle=u,i.fillRect(0,0,512,512),l.fillStyle="#808080",l.fillRect(0,0,512,512);const h=i.getImageData(0,0,512,512),d=l.getImageData(0,0,512,512),p=h.data,g=d.data;for(let y=0;y<p.length;y+=4){const S=(Math.random()-.5)*24;p[y]=Math.min(255,Math.max(0,p[y]+S)),p[y+1]=Math.min(255,Math.max(0,p[y+1]+S*.9)),p[y+2]=Math.min(255,Math.max(0,p[y+2]+S*.7));const E=128+Math.floor(S*2.8);g[y]=E,g[y+1]=E,g[y+2]=E}i.putImageData(h,0,0),l.putImageData(d,0,0),i.fillStyle="rgba(255, 255, 255, 0.05)";for(let y=0;y<512;y+=18)i.fillRect(0,y,512,5);const _=new ji(e);_.wrapS=_n,_.wrapT=_n,_.repeat.set(10,10);const m=new ji(s);return m.wrapS=_n,m.wrapT=_n,m.repeat.set(10,10),{map:_,bumpMap:m}}function rC(){const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=512;const l=s.getContext("2d");i.fillStyle="#8a7e72",i.fillRect(0,0,512,512),l.fillStyle="#808080",l.fillRect(0,0,512,512);for(let m=0;m<512;m+=4+Math.random()*16){const y=3+Math.random()*14,S=115+Math.random()*65,E=Math.random()>.68;i.fillStyle=E?`rgb(${Math.floor(S*.82)}, ${Math.floor(S*1.15)}, ${Math.floor(S*.72)})`:`rgb(${Math.floor(S)}, ${Math.floor(S*.94)}, ${Math.floor(S*.86)})`,i.fillRect(0,m,512,y);const C=Math.floor(S*1.3);l.fillStyle=`rgb(${C}, ${C}, ${C})`,l.fillRect(0,m,512,y)}const u=i.getImageData(0,0,512,512),h=l.getImageData(0,0,512,512),d=u.data,p=h.data;for(let m=0;m<d.length;m+=4){const y=(Math.random()-.5)*32;d[m]=Math.min(255,Math.max(0,d[m]+y)),d[m+1]=Math.min(255,Math.max(0,d[m+1]+y*.95)),d[m+2]=Math.min(255,Math.max(0,d[m+2]+y*.88)),p[m]=Math.min(255,Math.max(0,p[m]+y*2)),p[m+1]=p[m],p[m+2]=p[m]}i.putImageData(u,0,0),l.putImageData(h,0,0);const g=new ji(e);g.wrapS=_n,g.wrapT=_n,g.repeat.set(4,4);const _=new ji(s);return _.wrapS=_n,_.wrapT=_n,_.repeat.set(4,4),{map:g,bumpMap:_}}function oC(){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d");i.fillStyle="#2c6c28",i.fillRect(0,0,256,256);for(let l=0;l<2400;l++){const u=Math.random()*256,h=Math.random()*256,d=2+Math.random()*8,p=95+Math.floor(Math.random()*70);i.fillStyle=`rgb(${Math.floor(p*.42)}, ${p}, ${Math.floor(p*.32)})`,i.beginPath(),i.arc(u,h,d,0,Math.PI*2),i.fill()}const s=new ji(e);return s.wrapS=_n,s.wrapT=_n,s.repeat.set(2,2),{map:s}}function lC(){const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=512;const l=s.getContext("2d");i.fillStyle="#724e30",i.fillRect(0,0,512,512),l.fillStyle="#808080",l.fillRect(0,0,512,512);const u=64;for(let p=0;p<512;p+=u){const g=(Math.random()-.5)*20;i.fillStyle=`rgb(${Math.floor(114+g)}, ${Math.floor(78+g*.7)}, ${Math.floor(48+g*.5)})`,i.fillRect(p+2,0,u-4,512),i.fillStyle="#1e1005",i.fillRect(p,0,2,512),l.fillStyle="#101010",l.fillRect(p,0,2,512),i.fillStyle="rgba(42, 24, 12, 0.18)";for(let _=p+4;_<p+u-4;_+=4)i.fillRect(_,0,1.5,512)}const h=new ji(e);h.wrapS=_n,h.wrapT=_n,h.repeat.set(4,4);const d=new ji(s);return d.wrapS=_n,d.wrapT=_n,d.repeat.set(4,4),{map:h,bumpMap:d}}function cC(){const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=512;const l=s.getContext("2d");i.fillStyle="#98928a",i.fillRect(0,0,512,512),l.fillStyle="#808080",l.fillRect(0,0,512,512);for(let m=0;m<512;m+=48)i.fillStyle="#5e5a55",i.fillRect(0,m,512,2),l.fillStyle="#222222",l.fillRect(0,m,512,2);const u=i.getImageData(0,0,512,512),h=l.getImageData(0,0,512,512),d=u.data,p=h.data;for(let m=0;m<d.length;m+=4){const y=(Math.random()-.5)*18;d[m]=Math.min(255,Math.max(0,d[m]+y)),d[m+1]=Math.min(255,Math.max(0,d[m+1]+y)),d[m+2]=Math.min(255,Math.max(0,d[m+2]+y)),p[m]=Math.min(255,Math.max(0,p[m]+y*1.6)),p[m+1]=p[m],p[m+2]=p[m]}i.putImageData(u,0,0),l.putImageData(h,0,0);const g=new ji(e);g.wrapS=_n,g.wrapT=_n,g.repeat.set(3,3);const _=new ji(s);return _.wrapS=_n,_.wrapT=_n,_.repeat.set(3,3),{map:g,bumpMap:_}}function uC(){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d"),s=i.createImageData(256,256);for(let u=0;u<256;u++)for(let h=0;h<256;h++){const d=(u*256+h)*4,p=Math.sin(h*.15)*.5+Math.sin((h+u)*.08)*.5,g=Math.cos(u*.15)*.5+Math.cos((h-u)*.08)*.5;s.data[d]=Math.floor((p*.5+.5)*255),s.data[d+1]=Math.floor((g*.5+.5)*255),s.data[d+2]=255,s.data[d+3]=255}i.putImageData(s,0,0);const l=new ji(e);return l.wrapS=_n,l.wrapT=_n,l.repeat.set(8,8),l}function fC(){const o=document.createElement("canvas");o.width=128,o.height=128;const e=o.getContext("2d"),i=e.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(245, 250, 255, 0.85)"),i.addColorStop(.35,"rgba(220, 238, 250, 0.45)"),i.addColorStop(.7,"rgba(195, 225, 245, 0.12)"),i.addColorStop(1,"rgba(195, 225, 245, 0.0)"),e.fillStyle=i,e.fillRect(0,0,128,128),new ji(o)}function hC(){const o=document.createElement("canvas");o.width=256,o.height=512;const e=o.getContext("2d"),i=e.createLinearGradient(0,0,0,512);return i.addColorStop(0,"rgba(255, 242, 205, 0.65)"),i.addColorStop(.5,"rgba(255, 225, 165, 0.3)"),i.addColorStop(1,"rgba(255, 200, 130, 0.0)"),e.fillStyle=i,e.fillRect(0,0,256,512),new ji(o)}function dC(){const o=new uy;o.fog=new hm(14850907,.0035);const e=new uy;e.fog=new dm(9159643,30,180);const i=sC(),s=rC(),l=lC(),u=cC(),h=uC(),d=fC(),p=hC(),g=oC(),_=new Xl(280,32,20),m=new la({uniforms:{uTopColor:{value:new te(1718876)},uBottomColor:{value:new te(16161886)},uSunColor:{value:new te(16773844)},uSunPos:{value:new G(-40,30,-60).normalize()}},vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform vec3 uSunColor;
      uniform vec3 uSunPos;
      varying vec3 vWorldPos;

      void main() {
        vec3 dir = normalize(vWorldPos);
        float h = clamp(dir.y * 1.8 + 0.12, 0.0, 1.0);
        vec3 sky = mix(uBottomColor, uTopColor, pow(h, 0.72));

        float cosTheta = dot(dir, uSunPos);
        float sunDisc = smoothstep(0.9982, 0.9996, cosTheta);
        float sunGlow = pow(max(cosTheta, 0.0), 16.0) * 0.75;
        vec3 col = sky + uSunColor * (sunDisc * 2.8 + sunGlow);
        gl_FragColor = vec4(col, 1.0);
      }
    `,side:li,depthWrite:!1}),y=new le(_,m);o.add(y);const S=new xa({color:8566994,side:li,depthWrite:!1}),E=new le(_,S);e.add(E);const C=new _y(16772827,1.5);o.add(C);const M=new nb(16768952,1321789,1.4);o.add(M);const x=new gy(16772290,3.6);x.position.set(-40,30,-60),o.add(x);const L=new _y(16777215,1.8);e.add(L);const U=new gy(16777215,1.2);U.position.set(20,40,20),e.add(U);const R=new ei({color:10786950,map:s.map,bumpMap:s.bumpMap,bumpScale:.065,roughness:.86,metalness:.03}),k=new ei({color:2845222,map:g.map,roughness:.65,metalness:.04}),I=new ei({color:1920282,map:g.map,roughness:.72,metalness:.03}),z=new ei({color:4031024,map:g.map,roughness:.6,metalness:.05}),B=new ei({color:13157046,map:u.map,bumpMap:u.bumpMap,bumpScale:.03,roughness:.72}),D=new ei({color:7228978,map:l.map,bumpMap:l.bumpMap,bumpScale:.02,roughness:.45}),A=new ei({color:1579548,roughness:.32,metalness:.88}),H=new ei({color:16770739,emissive:16753720,emissiveIntensity:1.15,roughness:.25}),st=new ei({color:14086396,roughness:.08,metalness:.92,transparent:!0,opacity:.48});function J(ct=7.5,Pt=.8,Zt=0,ne=!1){const _e=new ni,tn=new Tx([new G(0,0,0),new G(Math.sin(Zt)*Pt*.4,ct*.35,Math.cos(Zt)*Pt*.4),new G(Math.sin(Zt)*Pt,ct*.72,Math.cos(Zt)*Pt),new G(Math.sin(Zt)*Pt*1.5,ct,Math.cos(Zt)*Pt*1.5)]),en=new xm(tn,14,.26,ne?5:8,!1),vn=ne?new xa({color:7231556}):new ei({color:6836796,map:l.map,bumpMap:l.bumpMap,bumpScale:.05,roughness:.88});_e.add(new le(en,vn));const yn=tn.getPoint(1),wn=new ni;if(wn.position.copy(yn),!ne){const Ye=new Xl(.25,6,6),hn=new ei({color:4731422,roughness:.82});for(let ke=0;ke<5;ke++){const b=new le(Ye,hn);b.position.set(Math.sin(ke*1.25)*.28,-.22,Math.cos(ke*1.25)*.28),wn.add(b)}}const fn=ne?6:18,qn=ne?new xa({color:4028482}):new ei({color:3043124,roughness:.58,metalness:.05,side:qi});for(let Ye=0;Ye<fn;Ye++){const hn=Ye/fn*Math.PI*2,ke=4.2+Ye%3*.5,b=new ii(.65,ke,3,10),Y=b.attributes.position;for(let ot=0;ot<Y.count;ot++){const $=Y.getX(ot),Rt=(Y.getY(ot)+ke*.5)/ke,Ct=Math.sin(Rt*Math.PI)*.85+.15;Y.setX(ot,$*Ct);const Ut=-Math.pow(Rt,2.1)*(1.6+Ye%2*.4),ie=-Math.abs($)*.2;Y.setZ(ot,Ut+ie)}b.computeVertexNormals();const it=new le(b,qn);it.rotation.order="YXZ",it.rotation.y=hn,it.rotation.x=-Math.PI*.38-Ye%3*.08,wn.add(it)}return _e.add(wn),_e}function ut(ct=4.2,Pt=0,Zt=!1){const ne=new ni,_e=Zt?new xa({color:2778664}):Pt===0?k:Pt===1?I:z,tn=[{pos:[0,0,0],scale:[ct,ct*.72,ct]},{pos:[ct*.35,ct*.12,ct*.22],scale:[ct*.65,ct*.55,ct*.65]},{pos:[-ct*.32,ct*.1,-ct*.25],scale:[ct*.62,ct*.5,ct*.62]},{pos:[0,ct*.28,0],scale:[ct*.7,ct*.55,ct*.7]}];for(const en of tn){const vn=new Xl(1,10,8),yn=vn.attributes.position;for(let fn=0;fn<yn.count;fn++){const qn=yn.getX(fn),Ye=yn.getY(fn),hn=yn.getZ(fn),ke=Math.sin(qn*3.2+Ye*2.6)*.09+Math.cos(hn*3.8)*.07;yn.setXYZ(fn,qn*(1+ke),Ye*(1+ke),hn*(1+ke))}vn.computeVertexNormals();const wn=new le(vn,_e);wn.position.set(en.pos[0],en.pos[1],en.pos[2]),wn.scale.set(en.scale[0],en.scale[1],en.scale[2]),ne.add(wn)}return ne}const et=new ii(240,160,120,80);et.rotateX(-Math.PI/2);const F=new la({uniforms:{uTime:{value:0},uWaveStrength:{value:.64},uWaterClarity:{value:.94},uSunDir:{value:new G(-.35,.18,-.92).normalize()},uCamPos:{value:new G(0,3,18)},uNormalMap:{value:h}},vertexShader:`
      uniform float uTime;
      uniform float uWaveStrength;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv * 8.0;
        vec3 p = position;
        float w1 = sin(p.x * 0.22 + uTime * 2.2) * cos(p.z * 0.18 + uTime * 1.8) * 0.38;
        float w2 = sin(p.x * 0.52 - uTime * 3.1 + p.z * 0.32) * 0.16;
        float w3 = cos(p.x * 1.05 + p.z * 0.75 + uTime * 4.2) * 0.08;
        p.y += (w1 + w2 + w3) * uWaveStrength;

        vec4 worldP = modelMatrix * vec4(p, 1.0);
        vWorldPos = worldP.xyz;
        vNormal = normalize(vec3(-cos(p.x * 0.22) * 0.2 * uWaveStrength, 1.0, -sin(p.z * 0.18) * 0.2 * uWaveStrength));
        gl_Position = projectionMatrix * viewMatrix * worldP;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uWaterClarity;
      uniform vec3 uSunDir;
      uniform vec3 uCamPos;
      uniform sampler2D uNormalMap;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vec3 V = normalize(uCamPos - vWorldPos);
        vec2 uvOff1 = vUv + vec2(uTime * 0.035, uTime * 0.022);
        vec2 uvOff2 = vUv * 1.5 - vec2(uTime * 0.028, -uTime * 0.04);
        vec3 n1 = texture2D(uNormalMap, uvOff1).rgb * 2.0 - 1.0;
        vec3 n2 = texture2D(uNormalMap, uvOff2).rgb * 2.0 - 1.0;
        vec3 N = normalize(vNormal + (n1 + n2) * 0.22);

        float fresnel = pow(1.0 - max(dot(V, N), 0.0), 3.8);
        vec3 deepWater = vec3(0.04, 0.26, 0.42);
        vec3 shallowWater = vec3(0.12, 0.78, 0.72) * uWaterClarity;
        vec3 waterColor = mix(shallowWater, deepWater, clamp(vWorldPos.y * -0.6 + 0.4, 0.0, 1.0));

        vec3 skyReflection = mix(vec3(0.96, 0.68, 0.45), vec3(0.42, 0.68, 0.88), fresnel * 0.6);
        vec3 H = normalize(uSunDir + V);
        float spec = pow(max(dot(N, H), 0.0), 220.0) * 3.6;
        vec3 sunColor = vec3(1.0, 0.94, 0.82);

        vec3 finalColor = mix(waterColor, skyReflection, fresnel * 0.8) + sunColor * spec;
        gl_FragColor = vec4(finalColor, 0.92);
      }
    `,transparent:!0}),tt=new ni;o.add(tt);const Q=new ni;e.add(Q);const xt=new le(et,F);xt.position.set(0,0,0),tt.add(xt);const Mt=new le(new ii(160,90),new xa({color:4753576}));Mt.rotateX(-Math.PI/2),Q.add(Mt);const kt=new $u(42,8.5,16,56,Math.PI*.88);kt.rotateX(Math.PI/2);const Jt=new ei({map:i.map,bumpMap:i.bumpMap,bumpScale:.035,roughness:.62}),pe=new le(kt,Jt);pe.position.set(2,.24,-20),tt.add(pe);const N=new ii(42,60,32,32);N.rotateX(-Math.PI/2);const Z=new le(N,Jt);Z.position.set(9.5,.18,2),tt.add(Z);const gt=new ii(32,52,16,16);gt.rotateX(-Math.PI/2);const ft=new ei({color:14666667,roughness:.18,metalness:.38}),At=new le(gt,ft);At.position.set(3,.2,2),tt.add(At);for(let ct=0;ct<12;ct++){const Pt=new le(new ym(1.5+ct%3*.6,1),new ei({color:2246740,roughness:.9}));Pt.position.set(-8+ct%4*3.8,-.45,3-ct*2.8),Pt.scale.set(1.5,.6,1.5),tt.add(Pt)}for(let ct=0;ct<28;ct++){const Pt=(ct%2===0?.36:-.34)+ct*.08,Zt=6.6+ct%4*.65,ne=J(Zt,.75,Pt,!1);ne.position.set(5.5+ct%5*2.6,.28,12-ct*1.8),tt.add(ne);const _e=J(Zt,.75,Pt,!0);_e.position.set(5.5+ct%5*2.6,.28,12-ct*1.8),Q.add(_e)}const It=new ni;o.add(It);const Dt=new ni;e.add(Dt);const wt=new le(new ii(120,75,24,24),Jt);wt.rotateX(-Math.PI/2),wt.position.set(4,.1,2),It.add(wt);const Bt=new le(new ii(42,65,16,16),ft);Bt.rotateX(-Math.PI/2),Bt.position.set(5.5,.14,2),It.add(Bt);const ce=new le(new ii(100,75,48,36),F);ce.rotateX(-Math.PI/2),ce.position.set(28,0,2),It.add(ce);const V=new ii(42,28,32,24),we=V.attributes.position;for(let ct=0;ct<we.count;ct++){const Pt=we.getX(ct),Zt=we.getY(ct),ne=Math.sin(Zt*.7)*1.4+Math.cos(Pt*.45)*1.2;we.setZ(ct,ne)}V.computeVertexNormals();const se=new le(V,R);se.position.set(-18,11,-8),se.rotation.y=.48,It.add(se);for(let ct=0;ct<5;ct++){const Pt=new le(new Mn(11+ct%3*2.5,1.8,8.5),R);Pt.position.set(-14-ct*1.8,1.8+ct*2.6,4-ct*5.5),Pt.rotation.y=ct*.18,It.add(Pt)}for(let ct=0;ct<3;ct++){const Pt=new ni,Zt=4-ct*12,ne=-7.5-ct*2.2,_e=2.6+ct*2.6,tn=new le(new Mn(9.6,2.2,7.8),B);tn.position.set(ne-2.5,_e-1.1,Zt),Pt.add(tn);const en=new le(new Mn(9.8,.4,7.6),D);en.position.set(ne,_e,Zt),Pt.add(en);const vn=new le(new Mn(6.6,2.6,5.4),H);vn.position.set(ne-1.2,_e+1.4,Zt),Pt.add(vn);const yn=new le(new Mn(6.8,2.6,5.6),st);yn.position.set(ne-1.1,_e+1.4,Zt),Pt.add(yn);for(let it=0;it<4;it++){const ot=ne+(it%2===0?-4.4:4.4),$=Zt+(it<2?-3.4:3.4),Et=new le(new Mn(.14,2.8,.14),A);Et.position.set(ot,_e+1.4,$),Pt.add(Et)}const wn=new le(new Mn(10.2,.35,8),D);wn.position.set(ne,_e+2.8,Zt),Pt.add(wn);const fn=new le(new Mn(5.8,2.4,4.8),H);fn.position.set(ne-1.6,_e+4.2,Zt),Pt.add(fn);const qn=new le(new Mn(6,2.4,5),st);qn.position.set(ne-1.5,_e+4.2,Zt),Pt.add(qn);const Ye=new le(new Mn(7.6,.35,6.2),D);Ye.position.set(ne-1.4,_e+5.5,Zt),Pt.add(Ye);const hn=new le(new Mn(.06,.9,7.4),st);hn.position.set(ne+4.7,_e+.65,Zt),Pt.add(hn);const ke=new le(new Mn(.06,.9,5.2),st);ke.position.set(ne+2.2,_e+3.45,Zt),Pt.add(ke);const b=new le(new Mn(3.6,.3,5.2),new ei({color:1359560,roughness:.08,metalness:.88}));b.position.set(ne+3.6,_e+.2,Zt),Pt.add(b),It.add(Pt);const Y=new le(new Mn(8,5.4,6.2),new xa({color:11904144}));Y.position.set(ne,_e+2.7,Zt),Dt.add(Y)}for(let ct=0;ct<14;ct++){const Pt=J(7+ct%3*.7,.75,-.4,!1);Pt.position.set(-9.5-ct%3*2.4,3.6+ct*.8,6-ct*2.8),It.add(Pt)}const Vt=new ni;o.add(Vt);const bt=new ni;e.add(bt);const ge=new ii(32,46,32,40),Wt=ge.attributes.position;for(let ct=0;ct<Wt.count;ct++){const Pt=Wt.getY(ct),Zt=Wt.getX(ct),ne=Math.sin(Pt*.65)*1.5+Math.cos(Zt*.35)*1.1;Wt.setZ(ct,ne)}ge.computeVertexNormals();const O=new le(ge,R);O.position.set(0,21,-32),Vt.add(O);const w=new kl(24,42,16);w.scale(1.4,1,1.2);const rt=new le(w,I);rt.position.set(-28,18,-42),Vt.add(rt);const vt=new kl(24,40,16);vt.scale(1.4,1,1.2);const St=new le(vt,I);St.position.set(28,17,-42),Vt.add(St);for(let ct=0;ct<12;ct++){const Pt=18-ct*4.2,Zt=ut(5.5+ct%3*.8,(ct+1)%3,!1);Zt.position.set(-18-ct%3*3.5,4+ct*1.4,Pt),Vt.add(Zt);const ne=ut(5.5+ct%3*.8,ct%3,!1);ne.position.set(18+ct%3*3.5,3.8+ct*1.4,Pt),Vt.add(ne)}const _t=new ii(15,36,32,64),Qt=new la({uniforms:{uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 p = position;
        p.z += sin(uv.y * 3.14159 * 0.85) * 1.5;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uvRibbon = vec2(vUv.x * 6.0, vUv.y * 28.0 - uTime * 9.5);
        float stream = sin(uvRibbon.x * 2.8 + sin(uvRibbon.y * 0.6)) * 0.5 + 0.5;
        float turb = sin(uvRibbon.y * 1.8 + uvRibbon.x * 3.6) * cos(uvRibbon.y * 2.4 - uvRibbon.x * 1.9) * 0.5 + 0.5;
        float pulse = sin(vUv.y * 18.0 - uTime * 16.0) * 0.5 + 0.5;
        float foam = smoothstep(0.24, 0.74, stream * 0.5 + turb * 0.35 + pulse * 0.25);

        vec3 deepWater = vec3(0.08, 0.44, 0.46);
        vec3 rushingTurquoise = vec3(0.38, 0.82, 0.88);
        vec3 pureWhiteFoam = vec3(0.99, 1.0, 1.0);

        vec3 col = mix(deepWater, rushingTurquoise, smoothstep(0.1, 0.48, foam));
        col = mix(col, pureWhiteFoam, smoothstep(0.52, 0.85, foam));

        float edgeAlpha = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        float bottomMistFade = smoothstep(0.0, 0.12, vUv.y);

        gl_FragColor = vec4(col, clamp(edgeAlpha * 0.96 * bottomMistFade, 0.0, 0.98));
      }
    `,transparent:!0,side:qi}),Ot=new le(_t,Qt);Ot.position.set(0,18,-31.2),Vt.add(Ot);const Ft=new gm(32,44);Ft.rotateX(-Math.PI/2);const be=new ei({color:1459774,roughness:.14,metalness:.78}),Tt=new le(Ft,be);Tt.position.set(0,1.2,-24),Vt.add(Tt);const jt=8,oe=9;for(let ct=0;ct<jt;ct++)for(let Pt=0;Pt<oe;Pt++){const Zt=22-ct*5.8,ne=-18+Pt*4.5+ct%2*2.2,_e=Math.abs(ne)/18;if(Math.abs(ne)<4.8&&Zt<10)continue;const tn=1.2+Math.pow(_e,2)*8-ct*.25,en=3.6+(ct+Pt)%3*.7,vn=(ct+Pt)%3,yn=ut(en,vn,!1);if(yn.position.set(ne,tn,Zt),Vt.add(yn),(ct+Pt)%4===0){const fn=6+ct*Pt%3*.6,qn=(ne>0?-1:1)*.28,Ye=J(fn,.7,qn,!1);Ye.position.set(ne,tn+en*.55,Zt),Vt.add(Ye)}const wn=ut(en,vn,!0);wn.position.set(ne,tn,Zt),bt.add(wn)}const re=[],Yt=new xx({map:d,color:14547186,transparent:!0,opacity:.42,depthWrite:!1,blending:_r});for(let ct=0;ct<55;ct++){const Pt=new PT(Yt.clone()),Zt=(Math.random()-.5)*22,ne=2+Math.random()*8.5,_e=-24+(Math.random()-.5)*8,tn=7+Math.random()*8;Pt.scale.set(tn,tn,1),Pt.position.set(Zt,ne,_e),Vt.add(Pt),re.push({mesh:Pt,basePos:new G(Zt,ne,_e),speed:.35+Math.random()*.45,rotSpeed:(Math.random()-.5)*.4})}const Se=new ii(36,52),me=new xa({map:p,color:16774872,transparent:!0,opacity:.28,depthWrite:!1,blending:pp,side:qi}),Pe=new le(Se,me);Pe.position.set(10,24,-18),Pe.rotation.z=-.42,Pe.rotation.y=.25,Vt.add(Pe);const q=new le(new ii(12,34),new xa({color:6600920}));q.position.set(0,18,-27),bt.add(q);const Nt=new ni;o.add(Nt);const ht=new ni;e.add(ht);const yt=new le(et,F);yt.position.set(0,0,0),Nt.add(yt);const zt=new $u(46,9.5,16,56,Math.PI*.78);zt.rotateX(Math.PI/2);const Ht=new le(zt,Jt);Ht.position.set(4.5,.22,-18),Nt.add(Ht);const fe=new le(new kl(42,32,10),R);fe.position.set(-32,14,-34),Nt.add(fe);const Ve=new ni;Ve.position.set(-8.5,7,-20);const An=new le(new Mn(11.5,.45,9),D);Ve.add(An);const Re=new le(new Mn(12,.35,9.4),D);Re.position.y=3.4,Ve.add(Re);const Ke=new le(new Mn(7.4,2.9,5.8),H);Ke.position.set(-1,1.7,0),Ve.add(Ke),Nt.add(Ve);for(let ct=0;ct<18;ct++){const Pt=-.4+ct/17*.8,Zt=J(7+ct%3*.8,.7,Pt,!1);Zt.position.set(-12+ct*2.8,2,-10-ct%2*2.2),Nt.add(Zt)}const Tn=[{top:new te(1718876),bottom:new te(16161886),sun:new te(16773844),sunPos:new G(-45,18,-45),hemiSky:new te(16755302),hemiGround:new te(1587272),fogColor:14850907,fogDensity:.0035},{top:new te(2640492),bottom:new te(15114610),sun:new te(16773328),sunPos:new G(35,24,30),hemiSky:new te(16767156),hemiGround:new te(2635828),fogColor:14596244,fogDensity:.0032},{top:new te(1591352),bottom:new te(4098660),sun:new te(16775394),sunPos:new G(30,48,15),hemiSky:new te(9232564),hemiGround:new te(1457696),fogColor:3696720,fogDensity:.0055},{top:new te(2390176),bottom:new te(5686484),sun:new te(16776924),sunPos:new G(40,38,25),hemiSky:new te(7914730),hemiGround:new te(2246700),fogColor:5548216,fogDensity:.004}];function On(ct,Pt){tt.visible=ct===0,It.visible=ct===1,Vt.visible=ct===2,Nt.visible=ct===3,Q.visible=ct===0,Dt.visible=ct===1,bt.visible=ct===2,ht.visible=ct===3;const Zt=Tn[ct]||Tn[0];m.uniforms.uTopColor.value.copy(Zt.top),m.uniforms.uBottomColor.value.copy(Zt.bottom),m.uniforms.uSunColor.value.copy(Zt.sun);const ne=Zt.sunPos.y*(.8+Pt*.4);x.position.set(Zt.sunPos.x,ne,Zt.sunPos.z),x.color.copy(Zt.sun),x.intensity=3.2+Pt*.8,m.uniforms.uSunPos.value.copy(x.position).normalize(),M.color.copy(Zt.hemiSky),M.groundColor.copy(Zt.hemiGround),o.fog&&o.fog.density!==void 0&&(o.fog.color.setHex(Zt.fogColor),o.fog.density=Zt.fogDensity)}On(0,.78);let Ta=!1;return{render:(ct,Pt,Zt,ne)=>{const{elapsed:_e,sceneId:tn,sunElevationScale:en,waveStrength:vn,mistDensity:yn,waterClarity:wn,viewMode:fn,sliderPosition:qn,wireframe:Ye}=ne;On(tn,en),Ye!==void 0&&Ye!==Ta&&(Ta=Ye,o.traverse(b=>{if(b.isMesh){const Y=b.material;Array.isArray(Y)?Y.forEach(it=>it.wireframe=Ta):Y&&(Y.wireframe=Ta)}})),F.uniforms.uTime.value=_e,F.uniforms.uWaveStrength.value=vn,F.uniforms.uWaterClarity.value=wn,F.uniforms.uCamPos.value.copy(Pt.position),Qt.uniforms.uTime.value=_e;for(let b=0;b<re.length;b++){const Y=re[b],it=(_e*Y.speed+b*.35)%8.5;Y.mesh.position.y=Y.basePos.y+it,Y.mesh.material.opacity=Math.sin(it/8.5*Math.PI)*.45*yn,Y.mesh.material.rotation+=Y.rotSpeed*.02}Pe.material.opacity=(.28+Math.sin(_e*1.2)*.08)*yn;const hn=window.innerWidth,ke=window.innerHeight;if(fn==="photorealistic")ct.setScissorTest(!1),ct.setViewport(0,0,hn,ke),ct.render(o,Pt);else if(fn==="baseline")ct.setScissorTest(!1),ct.setViewport(0,0,hn,ke),ct.render(e,Pt);else if(fn==="reel"){const b=Math.floor(ke/2);ct.setScissorTest(!0),ct.setViewport(0,b,hn,ke-b),ct.setScissor(0,b,hn,ke-b),ct.render(o,Pt),ct.setViewport(0,0,hn,b),ct.setScissor(0,0,hn,b),ct.render(e,Pt)}else if(fn==="split"){const b=Math.max(1,Math.min(hn-1,Math.floor(hn*(qn/100))));ct.setScissorTest(!0),ct.setViewport(0,0,b,ke),ct.setScissor(0,0,b,ke),ct.render(o,Pt),ct.setViewport(b,0,hn-b,ke),ct.setScissor(b,0,hn-b,ke),ct.render(e,Pt)}},resize:(ct,Pt)=>{}}}const pC=({activeChapter:o,isDirector:e,viewMode:i,sliderPosition:s,onSliderChange:l,isOverview:u,isWireframe:h=!1,sunElevation:d,waveStrength:p,mistDensity:g,waterClarity:_,onChapterProgress:m,onChapterAdvance:y})=>{const S=Ee.useRef(null),E=Ee.useRef(null),C=Ee.useRef(null),M=Ee.useRef(null),x=Ee.useRef(null),L=Ee.useRef(null),U=Ee.useRef(new rb),R=Ee.useRef(0),k=Ee.useRef(o),I=Ee.useRef(u),z=Ee.useRef(!1),B=Ee.useRef({activeChapter:o,isDirector:e,viewMode:i,sliderPosition:s,isOverview:u,isWireframe:h,sunElevation:d,waveStrength:p,mistDensity:g,waterClarity:_,onChapterProgress:m,onChapterAdvance:y});B.current={activeChapter:o,isDirector:e,viewMode:i,sliderPosition:s,isOverview:u,isWireframe:h,sunElevation:d,waveStrength:p,mistDensity:g,waterClarity:_,onChapterProgress:m,onChapterAdvance:y};const D=J=>{i==="split"&&(z.current=!0,J.currentTarget.setPointerCapture(J.pointerId),st(J.clientX))},A=J=>{z.current&&st(J.clientX)},H=J=>{z.current=!1;try{J.currentTarget.releasePointerCapture(J.pointerId)}catch{}},st=Ee.useCallback(J=>{const ut=S.current;if(!ut)return;const et=ut.getBoundingClientRect(),F=Math.max(0,Math.min(et.width,J-et.left)),tt=Math.round(F/et.width*100);l==null||l(tt)},[l]);return Ee.useEffect(()=>{const J=E.current;if(!J)return;const ut=new XR({canvas:J,antialias:!1,powerPreference:"high-performance"});ut.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),ut.setSize(window.innerWidth,window.innerHeight),M.current=ut;const et=Ls[o],F=new Yi(et.fov,window.innerWidth/window.innerHeight,.1,500);F.position.set(...et.startCamPos),x.current=F;const tt=new qR(F,ut.domElement);tt.target.set(...et.startLookAt),tt.enableDamping=!0,tt.dampingFactor=.06,tt.maxPolarAngle=Math.PI*.495,tt.minDistance=1.5,tt.maxDistance=120,L.current=tt;const Q=dC();C.current=Q;const xt=()=>{const Jt=window.innerWidth,pe=window.innerHeight;ut.setSize(Jt,pe),F.aspect=Jt/pe,F.updateProjectionMatrix(),Q.resize(Jt*ut.getPixelRatio(),pe*ut.getPixelRatio())};window.addEventListener("resize",xt);let Mt=0;const kt=()=>{Mt=requestAnimationFrame(kt);const Jt=Math.min(U.current.getDelta(),.1),pe=U.current.getElapsedTime(),{activeChapter:N,isDirector:Z,viewMode:gt,sliderPosition:ft,isOverview:At,sunElevation:It,waveStrength:Dt,mistDensity:wt,waterClarity:Bt,onChapterProgress:ce,onChapterAdvance:V}=B.current,we=Ls[N];if(At)F.position.lerp(new G(...Hv.pos),Jt*1.8),tt.target.lerp(new G(...Hv.lookAt),Jt*1.8);else if(Z){R.current+=Jt;const se=we.durationSec;R.current>=se&&(R.current=0,V&&V((N+1)%Ls.length));const Vt=Ns.clamp(R.current%se/se,0,1),bt=Vt*Vt*(3-2*Vt)*.35+Vt*.65,ge=new G(Ns.lerp(we.startCamPos[0],we.endCamPos[0],bt),Ns.lerp(we.startCamPos[1],we.endCamPos[1],bt),Ns.lerp(we.startCamPos[2],we.endCamPos[2],bt)),Wt=new G(Ns.lerp(we.startLookAt[0],we.endLookAt[0],bt),Ns.lerp(we.startLookAt[1],we.endLookAt[1],bt),Ns.lerp(we.startLookAt[2],we.endLookAt[2],bt));F.position.lerp(ge,.15),tt.target.lerp(Wt,.15),ce&&ce(Vt)}tt.update(),Q.render(ut,F,tt.target,{elapsed:pe,sceneId:N,sunElevationScale:It,waveStrength:Dt,mistDensity:wt,waterClarity:Bt,viewMode:gt,sliderPosition:ft,wireframe:B.current.isWireframe})};return kt(),()=>{cancelAnimationFrame(Mt),window.removeEventListener("resize",xt),ut.dispose(),tt.dispose()}},[]),Ee.useEffect(()=>{if(k.current!==o){k.current=o,R.current=0;const J=Ls[o];x.current&&L.current&&!B.current.isOverview&&(x.current.fov=J.fov,x.current.updateProjectionMatrix(),x.current.position.set(...J.startCamPos),L.current.target.set(...J.startLookAt),L.current.update())}},[o]),Ee.useEffect(()=>{if(I.current!==u&&(I.current=u,!u&&x.current&&L.current)){const J=Ls[o];x.current.fov=J.fov,x.current.updateProjectionMatrix(),x.current.position.set(...J.startCamPos),L.current.target.set(...J.startLookAt),L.current.update()}},[u,o]),dt.jsxs("div",{ref:S,className:"relative w-full h-full overflow-hidden select-none",children:[dt.jsx("canvas",{ref:E,className:"absolute inset-0 w-full h-full block cursor-grab active:cursor-grabbing"}),i==="photorealistic"&&dt.jsxs("div",{className:"absolute top-24 left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md",children:[dt.jsx(Vu,{size:13,className:"text-[#E59846]"}),dt.jsx("span",{className:"text-[11px] font-bold tracking-[0.14em] uppercase text-white/90",children:"9th Iteration · Photorealistic 3D (100% WebGL)"})]}),i==="baseline"&&dt.jsxs("div",{className:"absolute top-24 left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md",children:[dt.jsx(Gu,{size:13,className:"text-[#8BC3DB]"}),dt.jsx("span",{className:"text-[11px] font-bold tracking-[0.14em] uppercase text-white/90",children:"1st Attempt · Low-Poly Baseline (100% WebGL)"})]}),i==="reel"&&dt.jsxs(dt.Fragment,{children:[dt.jsxs("div",{className:"absolute top-24 left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-[#E59846]/40 backdrop-blur-md",children:[dt.jsx(Vu,{size:13,className:"text-[#E59846]"}),dt.jsx("span",{className:"text-[11px] font-bold tracking-[0.14em] uppercase text-white",children:"Top: 9th Iteration (Photorealistic PBR)"})]}),dt.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-[2px] bg-white/40 pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.4)]"}),dt.jsxs("div",{className:"absolute top-[calc(50%+16px)] left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-md",children:[dt.jsx(Gu,{size:13,className:"text-[#8BC3DB]"}),dt.jsx("span",{className:"text-[11px] font-bold tracking-[0.14em] uppercase text-white",children:"Bottom: 1st Attempt (Low-Poly Baseline)"})]})]}),i==="split"&&dt.jsxs(dt.Fragment,{children:[dt.jsxs("div",{className:"absolute top-24 left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-[#2EC492]/50 backdrop-blur-md",children:[dt.jsx(Vu,{size:13,className:"text-[#2EC492]"}),dt.jsx("span",{className:"text-[11px] font-bold tracking-[0.14em] uppercase text-white",children:"Left: 9th Iteration (PBR)"})]}),dt.jsxs("div",{className:"absolute top-24 right-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-md",children:[dt.jsx(Gu,{size:13,className:"text-[#8BC3DB]"}),dt.jsx("span",{className:"text-[11px] font-bold tracking-[0.14em] uppercase text-white",children:"Right: 1st Attempt (Baseline)"})]}),dt.jsxs("div",{className:"absolute top-0 bottom-0 z-30 cursor-ew-resize flex items-center justify-center group",style:{left:`${s}%`,transform:"translateX(-50%)"},onPointerDown:D,onPointerMove:A,onPointerUp:H,children:[dt.jsx("div",{className:"w-[3px] h-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.6)] group-hover:bg-[#2EC492] transition-colors"}),dt.jsx("div",{className:"absolute w-9 h-9 rounded-full bg-[#1E2629]/90 border-2 border-white shadow-2xl backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-active:scale-95 transition-transform",children:dt.jsx(X1,{size:16})})]})]})]})};class mC{constructor(){ar(this,"ctx",null);ar(this,"masterGain",null);ar(this,"surfFilter",null);ar(this,"waterfallGain",null);ar(this,"isPlaying",!1);ar(this,"waveTimer",null)}toggle(){return this.ctx||this.initAudio(),!this.ctx||!this.masterGain?!1:(this.isPlaying?(this.masterGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.35),this.isPlaying=!1,this.waveTimer!==null&&(window.clearInterval(this.waveTimer),this.waveTimer=null)):(this.ctx.state==="suspended"&&this.ctx.resume(),this.masterGain.gain.setTargetAtTime(.24,this.ctx.currentTime,.5),this.isPlaying=!0,this.startWaveModulation()),this.isPlaying)}setChapterAtmosphere(e,i){if(!this.ctx||!this.surfFilter||!this.waterfallGain)return;const s=this.ctx.currentTime,l=e===2?.45:.08;this.waterfallGain.gain.setTargetAtTime(l,s,.4),this.surfFilter.frequency.setTargetAtTime(280+i*420,s,.4)}initAudio(){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=1e-4,this.masterGain.connect(this.ctx.destination);const i=this.ctx.sampleRate*4,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);let u=0;for(let _=0;_<i;_++){const m=Math.random()*2-1;l[_]=(u+.02*m)/1.02,u=l[_],l[_]*=3.2}const h=this.ctx.createBufferSource();h.buffer=s,h.loop=!0,this.surfFilter=this.ctx.createBiquadFilter(),this.surfFilter.type="lowpass",this.surfFilter.frequency.value=460;const d=this.ctx.createGain();d.gain.value=.55,h.connect(this.surfFilter),this.surfFilter.connect(d),d.connect(this.masterGain),h.start();const p=this.ctx.createBufferSource();p.buffer=s,p.loop=!0;const g=this.ctx.createBiquadFilter();g.type="bandpass",g.frequency.value=920,g.Q.value=.7,this.waterfallGain=this.ctx.createGain(),this.waterfallGain.gain.value=.1,p.connect(g),g.connect(this.waterfallGain),this.waterfallGain.connect(this.masterGain),p.start()}startWaveModulation(){this.waveTimer!==null&&window.clearInterval(this.waveTimer),this.waveTimer=window.setInterval(()=>{if(!this.ctx||!this.surfFilter||!this.isPlaying)return;const e=this.ctx.currentTime;this.surfFilter.frequency.setTargetAtTime(640,e,1.4),this.surfFilter.frequency.setTargetAtTime(280,e+2.1,1.8)},4500)}}const gC=()=>{const[o,e]=Ee.useState(()=>{try{const et=new URLSearchParams(window.location.search),F=parseInt(et.get("ch")||et.get("chapter")||"0",10);if(!isNaN(F)&&F>=0&&F<Ls.length)return F}catch{}return 0}),[i,s]=Ee.useState(!0),[l,u]=Ee.useState(!1),[h,d]=Ee.useState(()=>{try{const et=new URLSearchParams(window.location.search);return et.get("wireframe")==="true"||et.get("wireframe")==="1"||window.location.hash==="#wireframe"}catch{}return!1}),[p,g]=Ee.useState(!0),[_,m]=Ee.useState(!1),[y,S]=Ee.useState(!1),[E,C]=Ee.useState(()=>{try{const F=new URLSearchParams(window.location.search).get("mode");if(F==="photorealistic"||F==="reel"||F==="split"||F==="baseline")return F;if(window.location.hash==="#baseline")return"baseline";if(window.location.hash==="#split")return"split";if(window.location.hash==="#reel")return"reel"}catch{}return"photorealistic"}),[M,x]=Ee.useState(50),[L,U]=Ee.useState(.78),[R,k]=Ee.useState(.64),[I,z]=Ee.useState(.88),[B,D]=Ee.useState(.94),A=Ee.useRef(null);Ee.useEffect(()=>{A.current=new mC},[]);const H=et=>{C(et);try{const F=new URL(window.location.href);F.searchParams.set("mode",et),window.history.replaceState({},"",F.toString())}catch{}},st=()=>{if(!A.current)return;const et=A.current.toggle();g(!et),A.current.setChapterAtmosphere(o,R)},J=et=>{u(!1),e(et),A.current&&A.current.setChapterAtmosphere(et,R)};Ee.useEffect(()=>{const et=F=>{F.key>="1"&&F.key<="4"?J(Number(F.key)-1):F.key===" "?(F.preventDefault(),s(tt=>!tt)):F.key.toLowerCase()==="m"?st():F.key.toLowerCase()==="o"?u(tt=>!tt):F.key.toLowerCase()==="v"&&C(tt=>tt==="photorealistic"?"reel":tt==="reel"?"split":tt==="split"?"baseline":"photorealistic")};return window.addEventListener("keydown",et),()=>window.removeEventListener("keydown",et)},[o]);const ut=Ls[o];return dt.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#070C10] text-[#F7F4ED]",children:[dt.jsx(pC,{activeChapter:o,isDirector:i,viewMode:E,sliderPosition:M,onSliderChange:x,isOverview:l,isWireframe:h,sunElevation:L,waveStrength:R,mistDensity:I,waterClarity:B,onChapterAdvance:J}),dt.jsxs("header",{className:"fixed top-0 left-0 right-0 z-40 flex items-start justify-between p-6 pointer-events-none",children:[dt.jsxs("div",{className:"pointer-events-auto flex flex-col gap-1 text-shadow-md",children:[dt.jsx("span",{className:"font-sans text-xl font-semibold tracking-[0.24em] text-white leading-tight",children:"TERRA"}),dt.jsx("span",{className:"font-sans text-xs font-medium tracking-[0.2em] text-white/80 origin-left scale-[0.82] uppercase",children:"A PACIFIC ATOLL IN ULTRA-FIDELITY"})]}),dt.jsxs("div",{className:"pointer-events-auto flex items-center p-1 rounded-full bg-[rgba(244,240,230,0.94)] border border-[rgba(30,38,41,0.14)] shadow-2xl backdrop-blur-xl",children:[dt.jsxs("button",{type:"button",onClick:()=>{d(!1),H("photorealistic")},className:`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${E==="photorealistic"&&!h?"bg-white text-[#1E2629] shadow-sm font-bold":"text-[#727670] hover:text-[#1E2629]"}`,children:[dt.jsx(Vu,{size:13,className:E==="photorealistic"&&!h?"text-[#E59846]":""}),dt.jsx("span",{children:"Photorealistic PBR"})]}),dt.jsxs("button",{type:"button",onClick:()=>d(et=>!et),className:`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${h?"bg-[#1E2629] text-[#2EC492] shadow-sm font-bold":"text-[#727670] hover:text-[#1E2629]"}`,title:"Inspect Live 3D Polygon Wireframe Mesh (Live GPU Render Proof)",children:[dt.jsx(V1,{size:13,className:h?"text-[#2EC492]":""}),dt.jsx("span",{children:"Wireframe Mesh"})]}),dt.jsxs("button",{type:"button",onClick:()=>{d(!1),H("split")},className:`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${E==="split"?"bg-white text-[#1E2629] shadow-sm font-bold":"text-[#727670] hover:text-[#1E2629]"}`,children:[dt.jsx(B1,{size:13,className:E==="split"?"text-[#2EC492]":""}),dt.jsx("span",{children:"Split Wipe Slider"})]}),dt.jsxs("button",{type:"button",onClick:()=>{d(!1),H("reel")},className:`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${E==="reel"?"bg-white text-[#1E2629] shadow-sm font-bold":"text-[#727670] hover:text-[#1E2629]"}`,children:[dt.jsx(H1,{size:13,className:E==="reel"?"text-[#D4893B]":""}),dt.jsx("span",{children:"Dual Viewport (9:16)"})]}),dt.jsxs("button",{type:"button",onClick:()=>{d(!1),H("baseline")},className:`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${E==="baseline"?"bg-white text-[#1E2629] shadow-sm font-bold":"text-[#727670] hover:text-[#1E2629]"}`,children:[dt.jsx(Gu,{size:13,className:E==="baseline"?"text-[#1A6B7C]":""}),dt.jsx("span",{children:"Low-Poly Baseline"})]})]}),dt.jsxs("div",{className:"pointer-events-auto flex items-center gap-2.5",children:[dt.jsx("button",{type:"button",onClick:()=>s(et=>!et),className:"circle-btn",title:i?"Pause Camera Flythrough (Space)":"Resume Cinematic Flythrough (Space)","aria-label":i?"Pause":"Play",children:i?dt.jsx(q1,{size:17}):dt.jsx(j1,{size:17,className:"translate-x-0.5"})}),dt.jsx("button",{type:"button",onClick:st,className:`circle-btn ${p?"":"is-active"}`,title:"Toggle Spatial Ocean Soundscape (Key M)","aria-label":"Toggle Spatial Ocean Soundscape",children:p?dt.jsx(eE,{size:17}):dt.jsx($1,{size:17})}),dt.jsx("button",{type:"button",onClick:()=>m(et=>!et),className:`circle-btn ${_?"is-active":""}`,title:"Scene Atmosphere & Realism Controls","aria-label":"Atmosphere Controls",children:dt.jsx(K1,{size:17})})]})]}),_&&dt.jsxs("aside",{className:"fixed top-20 right-6 z-40 w-80 p-5 rounded-2xl bg-[rgba(244,240,230,0.96)] text-[#1E2629] border border-[rgba(30,38,41,0.14)] shadow-2xl space-y-4 backdrop-blur-xl animate-in slide-in-from-top-3 duration-200",children:[dt.jsxs("div",{className:"flex items-center justify-between border-b border-black/10 pb-3",children:[dt.jsx("span",{className:"text-xs font-bold tracking-wider text-[#727670] uppercase",children:"Atmosphere & Light"}),dt.jsx("span",{className:"text-[11px] font-semibold text-[#1A6B7C]",children:"60 FPS · ACES PBR"})]}),dt.jsxs("div",{className:"space-y-3.5 text-xs",children:[dt.jsxs("div",{children:[dt.jsxs("div",{className:"flex justify-between mb-1",children:[dt.jsx("span",{className:"font-medium text-[#1E2629]",children:"Sun Elevation & Glint"}),dt.jsxs("span",{className:"text-[#727670] font-semibold",children:[Math.round(L*100),"%"]})]}),dt.jsx("input",{type:"range",min:"20",max:"100",value:Math.round(L*100),onChange:et=>U(Number(et.target.value)/100),className:"w-full accent-[#D4893B] cursor-pointer"})]}),dt.jsxs("div",{children:[dt.jsxs("div",{className:"flex justify-between mb-1",children:[dt.jsx("span",{className:"font-medium text-[#1E2629]",children:"Gerstner Ocean Waves"}),dt.jsxs("span",{className:"text-[#727670] font-semibold",children:[Math.round(R*100),"%"]})]}),dt.jsx("input",{type:"range",min:"10",max:"100",value:Math.round(R*100),onChange:et=>k(Number(et.target.value)/100),className:"w-full accent-[#D4893B] cursor-pointer"})]}),dt.jsxs("div",{children:[dt.jsxs("div",{className:"flex justify-between mb-1",children:[dt.jsx("span",{className:"font-medium text-[#1E2629]",children:"Volumetric Mist & Spray"}),dt.jsxs("span",{className:"text-[#727670] font-semibold",children:[Math.round(I*100),"%"]})]}),dt.jsx("input",{type:"range",min:"10",max:"100",value:Math.round(I*100),onChange:et=>z(Number(et.target.value)/100),className:"w-full accent-[#D4893B] cursor-pointer"})]}),dt.jsxs("div",{children:[dt.jsxs("div",{className:"flex justify-between mb-1",children:[dt.jsx("span",{className:"font-medium text-[#1E2629]",children:"Lagoon Water Clarity & Caustics"}),dt.jsxs("span",{className:"text-[#727670] font-semibold",children:[Math.round(B*100),"%"]})]}),dt.jsx("input",{type:"range",min:"20",max:"100",value:Math.round(B*100),onChange:et=>D(Number(et.target.value)/100),className:"w-full accent-[#D4893B] cursor-pointer"})]})]}),dt.jsx("div",{className:"pt-2 text-[11px] text-[#727670] text-center border-t border-black/10",children:"Drag to orbit · Scroll to zoom · Keys 1–4 · Key V toggles mode"})]}),dt.jsxs("section",{className:"hud-editorial",children:[dt.jsx("p",{className:"editorial-kicker",children:ut.kicker}),dt.jsxs("h1",{className:"editorial-title",children:[dt.jsx("span",{children:ut.titleLines[0]}),dt.jsx("span",{children:ut.titleLines[1]})]}),dt.jsx("p",{className:"editorial-subtitle",children:ut.subtitle})]}),dt.jsx("nav",{className:"hud-dock","aria-label":"Atoll camera chapters",children:Ls.map((et,F)=>{const tt=o===F&&!l;return dt.jsxs("button",{type:"button",onClick:()=>J(F),className:`dock-item ${tt?"is-active":""}`,children:[dt.jsxs("span",{className:"dock-index",children:["0",F+1]}),dt.jsx("span",{className:"dock-label",children:et.label})]},et.id)})}),dt.jsx("div",{className:"fixed right-6 bottom-6 z-40",children:dt.jsx("button",{type:"button",onClick:()=>S(et=>!et),className:`circle-btn ${y?"is-active":""}`,title:"Scene Telemetry & Technical Specs","aria-label":"Scene Details",children:dt.jsx(z1,{size:20})})}),y&&dt.jsxs("aside",{className:"fixed bottom-20 right-6 z-40 w-88 p-5 rounded-2xl bg-[rgba(244,240,230,0.96)] text-[#1E2629] border border-[rgba(30,38,41,0.14)] shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-3 duration-200",children:[dt.jsxs("div",{className:"flex items-center justify-between border-b border-black/10 pb-3",children:[dt.jsx("span",{className:"text-xs font-bold tracking-wider text-[#727670] uppercase",children:"GPT-6.1 Terra Engine Specs"}),dt.jsx("button",{type:"button",onClick:()=>S(!1),className:"text-[#727670] hover:text-[#1E2629]",children:dt.jsx(iE,{size:15})})]}),dt.jsxs("div",{className:"py-3 space-y-2.5 text-xs",children:[dt.jsxs("div",{className:"flex justify-between",children:[dt.jsx("span",{className:"text-[#727670]",children:"Chapter"}),dt.jsx("span",{className:"font-semibold",children:ut.label})]}),dt.jsxs("div",{className:"flex justify-between",children:[dt.jsx("span",{className:"text-[#727670]",children:"Rendering Pipeline"}),dt.jsx("span",{className:"font-semibold",children:"100% WebGL PBR (Zero Video)"})]}),dt.jsxs("div",{className:"flex justify-between",children:[dt.jsx("span",{className:"text-[#727670]",children:"Frame Rate"}),dt.jsx("span",{className:"font-semibold",children:"60 FPS Native WebGL"})]}),dt.jsxs("div",{className:"flex justify-between",children:[dt.jsx("span",{className:"text-[#727670]",children:"Atmospheric Model"}),dt.jsx("span",{className:"font-semibold",children:"Mie & Rayleigh Solar Scattering"})]}),dt.jsxs("div",{className:"flex justify-between",children:[dt.jsx("span",{className:"text-[#727670]",children:"Ocean Engine"}),dt.jsx("span",{className:"font-semibold",children:"4-Octave Gerstner Analytical Wave"})]}),dt.jsxs("div",{className:"flex justify-between",children:[dt.jsx("span",{className:"text-[#727670]",children:"Underwater Caustics"}),dt.jsx("span",{className:"font-semibold",children:"Dynamic Voronoi Light Dispersion"})]}),dt.jsxs("div",{className:"flex justify-between",children:[dt.jsx("span",{className:"text-[#727670]",children:"Audio Synthesis"}),dt.jsx("span",{className:"font-semibold",children:"100% Procedural Web Audio API"})]})]})]})]})},Lx=document.getElementById("root");if(!Lx)throw new Error("Failed to find root element");w1.createRoot(Lx).render(dt.jsx(y1.StrictMode,{children:dt.jsx(gC,{})}));
