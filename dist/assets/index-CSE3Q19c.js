var EM=Object.defineProperty;var TM=(o,e,a)=>e in o?EM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var Ps=(o,e,a)=>TM(o,typeof e!="symbol"?e+"":e,a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function tx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var $h={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function bM(){if(Hv)return ol;Hv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:r,key:d,ref:c!==void 0?c:null,props:f}}return ol.Fragment=e,ol.jsx=a,ol.jsxs=a,ol}var Gv;function AM(){return Gv||(Gv=1,$h.exports=bM()),$h.exports}var k=AM(),td={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function CM(){if(Vv)return ie;Vv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(R){return R===null||typeof R!="object"?null:(R=M&&R[M]||R["@@iterator"],typeof R=="function"?R:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function z(R,Y,gt){this.props=R,this.context=Y,this.refs=x,this.updater=gt||w}z.prototype.isReactComponent={},z.prototype.setState=function(R,Y){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Y,"setState")},z.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function O(){}O.prototype=z.prototype;function N(R,Y,gt){this.props=R,this.context=Y,this.refs=x,this.updater=gt||w}var st=N.prototype=new O;st.constructor=N,S(st,z.prototype),st.isPureReactComponent=!0;var G=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function A(R,Y,gt){var ut=gt.ref;return{$$typeof:o,type:R,key:Y,ref:ut!==void 0?ut:null,props:gt}}function F(R,Y){return A(R.type,Y,R.props)}function et(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function tt(R){var Y={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(gt){return Y[gt]})}var dt=/\/+/g;function pt(R,Y){return typeof R=="object"&&R!==null&&R.key!=null?tt(""+R.key):Y.toString(36)}function j(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(P,P):(R.status="pending",R.then(function(Y){R.status==="pending"&&(R.status="fulfilled",R.value=Y)},function(Y){R.status==="pending"&&(R.status="rejected",R.reason=Y)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function rt(R,Y,gt,ut,bt){var wt=typeof R;(wt==="undefined"||wt==="boolean")&&(R=null);var It=!1;if(R===null)It=!0;else switch(wt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(R.$$typeof){case o:case e:It=!0;break;case _:return It=R._init,rt(It(R._payload),Y,gt,ut,bt)}}if(It)return bt=bt(R),It=ut===""?"."+pt(R,0):ut,G(bt)?(gt="",It!=null&&(gt=It.replace(dt,"$&/")+"/"),rt(bt,Y,gt,"",function(De){return De})):bt!=null&&(et(bt)&&(bt=F(bt,gt+(bt.key==null||R&&R.key===bt.key?"":(""+bt.key).replace(dt,"$&/")+"/")+It)),Y.push(bt)),1;It=0;var Tt=ut===""?".":ut+":";if(G(R))for(var At=0;At<R.length;At++)ut=R[At],wt=Tt+pt(ut,At),It+=rt(ut,Y,gt,wt,bt);else if(At=b(R),typeof At=="function")for(R=At.call(R),At=0;!(ut=R.next()).done;)ut=ut.value,wt=Tt+pt(ut,At++),It+=rt(ut,Y,gt,wt,bt);else if(wt==="object"){if(typeof R.then=="function")return rt(j(R),Y,gt,ut,bt);throw Y=String(R),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return It}function Q(R,Y,gt){if(R==null)return R;var ut=[],bt=0;return rt(R,ut,"","",function(wt){return Y.call(gt,wt,bt++)}),ut}function yt(R){if(R._status===-1){var Y=R._result,gt=Y();gt.then(function(ut){(R._status===0||R._status===-1)&&(R._status=1,R._result=ut,gt.status===void 0&&(gt.status="fulfilled",gt.value=ut))},function(ut){(R._status===0||R._status===-1)&&(R._status=2,R._result=ut,gt.status===void 0&&(gt.status="rejected",gt.reason=ut))}),R._status===-1&&(R._status=0,R._result=gt)}if(R._status===1)return R._result.default;throw R._result}var St=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function Gt(R){var Y=B.T,gt={};gt.types=Y!==null?Y.types:null,B.T=gt;try{var ut=R(),bt=B.S;bt!==null&&bt(gt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(P,St)}catch(wt){St(wt)}finally{Y!==null&&gt.types!==null&&(Y.types=gt.types),B.T=Y}}function ne(R){var Y=B.T;if(Y!==null){var gt=Y.types;gt===null?Y.types=[R]:gt.indexOf(R)===-1&&gt.push(R)}else Gt(ne.bind(null,R))}var Ee={map:Q,forEach:function(R,Y,gt){Q(R,function(){Y.apply(this,arguments)},gt)},count:function(R){var Y=0;return Q(R,function(){Y++}),Y},toArray:function(R){return Q(R,function(Y){return Y})||[]},only:function(R){if(!et(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ie.Activity=g,ie.Children=Ee,ie.Component=z,ie.Fragment=a,ie.Profiler=c,ie.PureComponent=N,ie.StrictMode=r,ie.Suspense=p,ie.ViewTransition=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ie.__COMPILER_RUNTIME={__proto__:null,c:function(R){return B.H.useMemoCache(R)}},ie.addTransitionType=ne,ie.cache=function(R){return function(){return R.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(R,Y,gt){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ut=S({},R.props),bt=R.key;if(Y!=null)for(wt in Y.key!==void 0&&(bt=""+Y.key),Y)!D.call(Y,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&Y.ref===void 0||(ut[wt]=Y[wt]);var wt=arguments.length-2;if(wt===1)ut.children=gt;else if(1<wt){for(var It=Array(wt),Tt=0;Tt<wt;Tt++)It[Tt]=arguments[Tt+2];ut.children=It}return A(R.type,bt,ut)},ie.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:f,_context:R},R},ie.createElement=function(R,Y,gt){var ut,bt={},wt=null;if(Y!=null)for(ut in Y.key!==void 0&&(wt=""+Y.key),Y)D.call(Y,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(bt[ut]=Y[ut]);var It=arguments.length-2;if(It===1)bt.children=gt;else if(1<It){for(var Tt=Array(It),At=0;At<It;At++)Tt[At]=arguments[At+2];bt.children=Tt}if(R&&R.defaultProps)for(ut in It=R.defaultProps,It)bt[ut]===void 0&&(bt[ut]=It[ut]);return A(R,wt,bt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(R){return{$$typeof:h,render:R}},ie.isValidElement=et,ie.lazy=function(R){return{$$typeof:_,_payload:{_status:-1,_result:R},_init:yt}},ie.memo=function(R,Y){return{$$typeof:v,type:R,compare:Y===void 0?null:Y}},ie.startTransition=Gt,ie.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ie.use=function(R){return B.H.use(R)},ie.useActionState=function(R,Y,gt){return B.H.useActionState(R,Y,gt)},ie.useCallback=function(R,Y){return B.H.useCallback(R,Y)},ie.useContext=function(R){return B.H.useContext(R)},ie.useDebugValue=function(){},ie.useDeferredValue=function(R,Y){return B.H.useDeferredValue(R,Y)},ie.useEffect=function(R,Y){return B.H.useEffect(R,Y)},ie.useEffectEvent=function(R){return B.H.useEffectEvent(R)},ie.useId=function(){return B.H.useId()},ie.useImperativeHandle=function(R,Y,gt){return B.H.useImperativeHandle(R,Y,gt)},ie.useInsertionEffect=function(R,Y){return B.H.useInsertionEffect(R,Y)},ie.useLayoutEffect=function(R,Y){return B.H.useLayoutEffect(R,Y)},ie.useMemo=function(R,Y){return B.H.useMemo(R,Y)},ie.useOptimistic=function(R,Y){return B.H.useOptimistic(R,Y)},ie.useReducer=function(R,Y,gt){return B.H.useReducer(R,Y,gt)},ie.useRef=function(R){return B.H.useRef(R)},ie.useState=function(R){return B.H.useState(R)},ie.useSyncExternalStore=function(R,Y,gt){return B.H.useSyncExternalStore(R,Y,gt)},ie.useTransition=function(){return B.H.useTransition()},ie.version="19.3.1",ie}var kv;function Sp(){return kv||(kv=1,td.exports=CM()),td.exports}var he=Sp();const RM=tx(he);var ed={exports:{}},ll={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function wM(){return Xv||(Xv=1,(function(o){function e(j,rt){var Q=j.length;j.push(rt);t:for(;0<Q;){var yt=Q-1>>>1,St=j[yt];if(0<c(St,rt))j[yt]=rt,j[Q]=St,Q=yt;else break t}}function a(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var rt=j[0],Q=j.pop();if(Q!==rt){j[0]=Q;t:for(var yt=0,St=j.length,Gt=St>>>1;yt<Gt;){var ne=2*(yt+1)-1,Ee=j[ne],R=ne+1,Y=j[R];if(0>c(Ee,Q))R<St&&0>c(Y,Ee)?(j[yt]=Y,j[R]=Q,yt=R):(j[yt]=Ee,j[ne]=Q,yt=ne);else if(R<St&&0>c(Y,Q))j[yt]=Y,j[R]=Q,yt=R;else break t}}return rt}function c(j,rt){var Q=j.sortIndex-rt.sortIndex;return Q!==0?Q:j.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],v=[],_=1,g=null,y=3,M=!1,b=!1,w=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(j){for(var rt=a(v);rt!==null;){if(rt.callback===null)r(v);else if(rt.startTime<=j)r(v),rt.sortIndex=rt.expirationTime,e(p,rt);else break;rt=a(v)}}function st(j){if(w=!1,N(j),!b)if(a(p)!==null)b=!0,G||(G=!0,et());else{var rt=a(v);rt!==null&&pt(st,rt.startTime-j)}}var G=!1,P=-1,B=5,D=-1;function A(){return S?!0:!(o.unstable_now()-D<B)}function F(){if(S=!1,G){var j=o.unstable_now();D=j;var rt=!0;try{t:{b=!1,w&&(w=!1,z(P),P=-1),M=!0;var Q=y;try{e:{for(N(j),g=a(p);g!==null&&!(g.expirationTime>j&&A());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,y=g.priorityLevel;var St=yt(g.expirationTime<=j);if(j=o.unstable_now(),typeof St=="function"){g.callback=St,N(j),rt=!0;break e}g===a(p)&&r(p),N(j)}else r(p);g=a(p)}if(g!==null)rt=!0;else{var Gt=a(v);Gt!==null&&pt(st,Gt.startTime-j),rt=!1}}break t}finally{g=null,y=Q,M=!1}rt=void 0}}finally{rt?et():G=!1}}}var et;if(typeof O=="function")et=function(){O(F)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,dt=tt.port2;tt.port1.onmessage=F,et=function(){dt.postMessage(null)}}else et=function(){x(F,0)};function pt(j,rt){P=x(function(){j(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(j){switch(y){case 1:case 2:case 3:var rt=3;break;default:rt=y}var Q=y;y=rt;try{return j()}finally{y=Q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(j,rt){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Q=y;y=j;try{return rt()}finally{y=Q}},o.unstable_scheduleCallback=function(j,rt,Q){var yt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?yt+Q:yt):Q=yt,j){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Q+St,j={id:_++,callback:rt,priorityLevel:j,startTime:Q,expirationTime:St,sortIndex:-1},Q>yt?(j.sortIndex=Q,e(v,j),a(p)===null&&j===a(v)&&(w?(z(P),P=-1):w=!0,pt(st,Q-yt))):(j.sortIndex=St,e(p,j),b||M||(b=!0,G||(G=!0,et()))),j},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(j){var rt=y;return function(){var Q=y;y=rt;try{return j.apply(this,arguments)}finally{y=Q}}}})(id)),id}var qv;function DM(){return qv||(qv=1,nd.exports=wM()),nd.exports}var ad={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function NM(){if(jv)return bn;jv=1;var o=Sp();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,g,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:_,containerInfo:g,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.browser=function(_){return{$$typeof:f,_reason:_}},bn.createPortal=function(_,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(_,g,null,y)},bn.flushSync=function(_){var g=p.T,y=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=g,r.p=y,r.d.f()}},bn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},bn.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},bn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var y=g.as,M=v(y,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:w}):y==="script"&&r.d.X(_,{crossOrigin:M,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},bn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=v(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(_)},bn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,M=v(y,g.crossOrigin);r.d.L(_,y,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},bn.preloadModule=function(_,g){if(typeof _=="string")if(g){var y=v(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(_)},bn.requestFormReset=function(_){r.d.r(_)},bn.unstable_batchedUpdates=function(_,g){return _(g)},bn.useFormState=function(_,g,y){return p.H.useFormState(_,g,y)},bn.useFormStatus=function(){return p.H.useHostTransitionStatus()},bn.version="19.3.1",bn}var Yv;function UM(){if(Yv)return ad.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ad.exports=NM(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function LM(){if(Wv)return ll;Wv=1;var o=DM(),e=Sp(),a=UM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(r(188))}function v(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var i=t,s=n;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){i=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return p(l),t;if(u===s)return p(l),n;u=u.sibling}throw Error(r(188))}if(i.return!==s.return)i=l,s=u;else{for(var m=!1,E=l.child;E;){if(E===i){m=!0,i=l,s=u;break}if(E===s){m=!0,s=l,i=u;break}E=E.sibling}if(!m){for(E=u.child;E;){if(E===i){m=!0,i=u,s=l;break}if(E===s){m=!0,s=u,i=l;break}E=E.sibling}if(!m)throw Error(r(189))}}if(i.alternate!==s)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function g(t,n,i,s,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,s,l,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,i,s,l,u))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],i=y(t);return i===null||w(n,t,i.child,{foundSelf:!1}),n}function w(t,n,i,s){for(;i!==null;){if(i===n)s.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(s.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(t,n,i.child,s))return!0;i=i.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,z=null;function O(t,n,i){return t===i?!0:t===n?(x=t,!0):!1}function N(t,n,i){return t===i?(z=t,!1):t===n?(z!==null&&(x=t),!0):!1}function st(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,n,i){for(var s=0,l=t;l;l=i(l))s++;l=0;for(var u=n;u;u=i(u))l++;for(;0<s-l;)t=i(t),s--;for(;0<l-s;)n=i(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var P=Object.assign,B=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),pt=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),ne=Symbol.for("react.legacy_hidden"),Ee=Symbol.for("react.memo_cache_sentinel"),R=Symbol.for("react.view_transition"),Y=Symbol.for("react.recoverable"),gt=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=gt&&t[gt]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case tt:return"Profiler";case et:return"StrictMode";case rt:return"Suspense";case Q:return"SuspenseList";case Gt:return"Activity";case R:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case pt:return t.displayName||"Context";case dt:return(t._context.displayName||"Context")+".Consumer";case j:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yt:return n=t.displayName||null,n!==null?n:wt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return wt(t(n))}catch{}}return null}var It=Array.isArray,Tt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De={pending:!1,data:null,method:null,action:null},K=[],on=-1;function ae(t){return{current:t}}function Jt(t){0>on||(t.current=K[on],K[on]=null,on--)}function Rt(t,n){on++,K[on]=t.current,t.current=n}var ye=ae(null),Kt=ae(null),U=ae(null),T=ae(null);function nt(t,n){switch(Rt(U,n),Rt(Kt,t),Rt(ye,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zg(n),t=Kg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Jt(ye),Rt(ye,t)}function vt(){Jt(ye),Jt(Kt),Jt(U)}function xt(t){var n=t.memoizedState;n!==null&&(zr._currentValue=n.memoizedState,Rt(T,t)),n=ye.current;var i=Kg(n,t.type);n!==i&&(Rt(Kt,t),Rt(ye,i))}function mt(t){Kt.current===t&&(Jt(ye),Jt(Kt)),T.current===t&&(Jt(T),zr._currentValue=De)}var Yt,Nt;function Pt(t){if(Yt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",Nt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+Nt}var ve=!1;function Mt(t,n){if(!t||ve)return"";ve=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ht=function(){throw Error()};if(Object.defineProperty(ht.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ht,[])}catch(Ct){var V=Ct}Reflect.construct(t,[],ht)}else{try{ht.call()}catch(Ct){V=Ct}ht=!1;try{var $=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ht=!0,new t}finally{ht&&($!==void 0?Object.defineProperty(t.prototype,"props",$):delete t.prototype.props)}}}else{try{throw Error()}catch(Ct){V=Ct}(ht=t())&&typeof ht.catch=="function"&&ht.catch(function(){})}}catch(Ct){if(Ct&&V&&typeof Ct.stack=="string")return[Ct.stack,V.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),m=u[0],E=u[1];if(m&&E){var L=m.split(`
`),q=E.split(`
`);for(l=s=0;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;for(;l<q.length&&!q[l].includes("DetermineComponentFrameRoot");)l++;if(s===L.length||l===q.length)for(s=L.length-1,l=q.length-1;1<=s&&0<=l&&L[s]!==q[l];)l--;for(;1<=s&&0<=l;s--,l--)if(L[s]!==q[l]){if(s!==1||l!==1)do if(s--,l--,0>l||L[s]!==q[l]){var it=`
`+L[s].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=s&&0<=l);break}}}finally{ve=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Pt(i):""}function Vt(t,n){switch(t.tag){case 26:case 27:case 5:return Pt(t.type);case 16:return Pt("Lazy");case 13:return t.child!==n&&n!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return Mt(t.type,!1);case 11:return Mt(t.type.render,!1);case 1:return Mt(t.type,!0);case 31:return Pt("Activity");case 30:return Pt("ViewTransition");default:return""}}function $t(t){try{var n="",i=null;do n+=Vt(t,i),i=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var ee=Object.prototype.hasOwnProperty,Ht=o.unstable_scheduleCallback,ge=o.unstable_cancelCallback,oe=o.unstable_shouldYield,Be=o.unstable_requestPaint,H=o.unstable_now,Ut=o.unstable_getCurrentPriorityLevel,ct=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,se=o.unstable_IdlePriority,Ye=o.log,pn=o.unstable_setDisableYieldValue,Te=null,je=null;function mn(t){if(typeof Ye=="function"&&pn(t),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(Te,t)}catch{}}var An=Math.clz32?Math.clz32:go,El=Math.log,Qi=Math.LN2;function go(t){return t>>>=0,t===0?32:31-(El(t)/Qi|0)|0}var ds=256,ps=262144,Ji=4194304;function Pi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $i(t,n,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~u,s!==0?l=Pi(s):(m&=E,m!==0?l=Pi(m):i||(i=E&~t,i!==0&&(l=Pi(i))))):(E=s&~u,E!==0?l=Pi(E):m!==0?l=Pi(m):i||(i=s&~t,i!==0&&(l=Pi(i)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,i=n&-n,u>=i||u===32&&(i&4194048)!==0)?n:l}function Ca(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function vo(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var s=31-An(i),l=1<<s;n|=t[s],i&=~l}return n}function Cu(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tl(){var t=Ji;return Ji<<=1,(Ji&62914560)===0&&(Ji=4194304),t}function _o(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function C(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function W(t,n,i,s,l,u){var m=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,q=t.hiddenUpdates;for(i=m&~i;0<i;){var it=31-An(i),ht=1<<it;E[it]=0,L[it]=-1;var V=q[it];if(V!==null)for(q[it]=null,it=0;it<V.length;it++){var $=V[it];$!==null&&($.lane&=-536870913)}i&=~ht}s!==0&&ot(t,s,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~n))}function ot(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-An(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|i&261930}function lt(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var s=31-An(i),l=1<<s;l&n|t[s]&n&&(t[s]|=n),i&=~l}}function Z(t,n){var i=n&-n;return i=(i&42)!==0?1:Et(i),(i&(t.suspendedLanes|n))!==0?0:i}function Et(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qt(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:Lv(t.type))}function jt(t,n){var i=At.p;try{return At.p=t,n()}finally{At.p=i}}var Qt=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Qt,zt="__reactProps$"+Qt,de="__reactContainer$"+Qt,Le="__reactEvents$"+Qt,Ve="__reactListeners$"+Qt,Cn="__reactHandles$"+Qt,Ce="__reactResources$"+Qt,Xt="__reactMarker$"+Qt,Gn="__reactLoad$"+Qt;function be(t){delete t[Wt],delete t[zt],delete t[Ve],delete t[Cn]}function ln(t){var n;if(n=t[Wt])return n;for(var i=t.parentNode;i;){if(n=i[de]||i[Wt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=dv(t);t!==null;){if(i=t[Wt])return i;t=dv(t)}return n}t=i,i=t.parentNode}return null}function Qn(t){if(t=t[Wt]||t[de]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ui(t){var n=t[Ce];return n||(n=t[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function re(t){t[Xt]=!0}function Jn(t){t[Gn]=void 0}var Ra=new Set,Ln={};function Rn(t,n){On(t,n),On(t+"Capture",n)}function On(t,n){for(Ln[t]=n,t=0;t<n.length;t++)Ra.add(n[t])}var bl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lp={},Op={};function Vx(t){return ee.call(Op,t)?!0:ee.call(Lp,t)?!1:bl.test(t)?Op[t]=!0:(Lp[t]=!0,!1)}var we=!1;function Pp(){var t=we;return we=!1,t}function Al(t,n,i){if(Vx(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function Cl(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function ta(t,n,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,s)}}function $n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function kx(t,n,i){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,u.call(this,m)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ru(t){if(!t._valueTracker){var n=zp(t)?"checked":"value";t._valueTracker=kx(t,n,""+t[n])}}function Bp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return t&&(s=zp(t)?t.checked?"true":"false":t.value),t=s,t!==i?(n.setValue(t),!0):!1}var Xx=/[\n"\\]/g;function fi(t){return t.replace(Xx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wu(t,n,i,s,l,u,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),n!=null?m==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$n(n)):t.value!==""+$n(n)&&(t.value=""+$n(n)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),n!=null?m==="number"&&t.value==n?Du(t,$n(t.value)):Du(t,$n(n)):i!=null?Du(t,$n(i)):s!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+$n(E):t.removeAttribute("name")}function Ip(t,n,i,s,l,u,m,E){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Ru(t);return}i=i!=null?""+$n(i):"",n=n!=null?""+$n(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Ru(t)}function Du(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function tr(t,n,i,s){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&s&&(t[i].defaultSelected=!0)}else{for(i=""+$n(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Fp(t,n,i){if(n!=null&&(n=""+$n(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+$n(i):""}function Hp(t,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(r(92));if(It(s)){if(1<s.length)throw Error(r(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=$n(n),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s),Ru(t)}function er(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var qx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gp(t,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,i):typeof i!="number"||i===0||qx.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Vp(t,n,i){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",we=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&i[l]!==s&&(Gp(t,l,s),we=!0)}else for(var u in n)n.hasOwnProperty(u)&&Gp(t,u,n[u])}function Nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(t){return Yx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Uu=null;function Lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function kp(t){var n=Qn(t);if(n&&(t=n.stateNode)){var i=t[zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(wu(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==t&&s.form===t.form){var l=s[zt]||null;if(!l)throw Error(r(90));wu(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===t.form&&Bp(s)}break t;case"textarea":Fp(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&tr(t,!!i.multiple,n,!1)}}}var Ou=!1;function Xp(t,n,i){if(Ou)return t(n,i);Ou=!0;try{var s=t(n);return s}finally{if(Ou=!1,(nr!==null||ir!==null)&&(Rc(),nr&&(n=nr,t=ir,ir=nr=null,kp(n),t)))for(n=0;n<t.length;n++)kp(t[n])}}function xo(t,n){var i=t.stateNode;if(i===null)return null;var s=i[zt]||null;if(s===null)return null;i=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(ea)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Pu=!1}var wa=null,zu=null,wl=null;function qp(){if(wl)return wl;var t,n=zu,i=n.length,s,l="value"in wa?wa.value:wa.textContent,u=l.length;for(t=0;t<i&&n[t]===l[t];t++);var m=i-t;for(s=1;s<=m&&n[i-s]===l[u-s];s++);return wl=l.slice(t,1<s?1-s:void 0)}function Dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function jp(){return!1}function Pn(t){function n(i,s,l,u,m){this._reactName=i,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(u):u[E]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Nl:jp,this.isPropagationStopped=jp,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Pn(Da),So=P({},Da,{view:0,detail:0}),Wx=Pn(So),Bu,Iu,Mo,Ll=P({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Bu=t.screenX-Mo.screenX,Iu=t.screenY-Mo.screenY):Iu=Bu=0,Mo=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),Yp=Pn(Ll),Zx=P({},Ll,{dataTransfer:0}),Kx=Pn(Zx),Qx=P({},So,{relatedTarget:0}),Fu=Pn(Qx),Jx=P({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=Pn(Jx),ty=P({},Da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ey=Pn(ty),ny=P({},Da,{data:0}),Wp=Pn(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=sy[t])?!!n[t]:!1}function Hu(){return ry}var oy=P({},So,{key:function(t){if(t.key){var n=iy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=Pn(oy),cy=P({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Pn(cy),uy=P({},Da,{submitter:0}),fy=Pn(uy),hy=P({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),dy=Pn(hy),py=P({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=Pn(py),gy=P({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=Pn(gy),_y=P({},Da,{newState:0,oldState:0,source:0}),xy=Pn(_y),yy=[9,13,27,32],Gu=ea&&"CompositionEvent"in window,Eo=null;ea&&"documentMode"in document&&(Eo=document.documentMode);var Sy=ea&&"TextEvent"in window&&!Eo,Kp=ea&&(!Gu||Eo&&8<Eo&&11>=Eo),Qp=" ",Jp=!1;function $p(t,n){switch(t){case"keyup":return yy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function My(t,n){switch(t){case"compositionend":return tm(n);case"keypress":return n.which!==32?null:(Jp=!0,Qp);case"textInput":return t=n.data,t===Qp&&Jp?null:t;default:return null}}function Ey(t,n){if(ar)return t==="compositionend"||!Gu&&$p(t,n)?(t=qp(),wl=zu=wa=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kp&&n.locale!=="ko"?null:n.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ty[t.type]:n==="textarea"}function nm(t,n,i,s){nr?ir?ir.push(s):ir=[s]:nr=s,n=Oc(n,"onChange"),0<n.length&&(i=new Ul("onChange","change",null,i,s),t.push({event:i,listeners:n}))}var To=null,bo=null;function by(t){kg(t,0)}function Ol(t){var n=cn(t);if(Bp(n))return t}function im(t,n){if(t==="change")return n}var am=!1;if(ea){var Vu;if(ea){var ku="oninput"in document;if(!ku){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),ku=typeof sm.oninput=="function"}Vu=ku}else Vu=!1;am=Vu&&(!document.documentMode||9<document.documentMode)}function rm(){To&&(To.detachEvent("onpropertychange",om),bo=To=null)}function om(t){if(t.propertyName==="value"&&Ol(bo)){var n=[];nm(n,bo,t,Lu(t)),Xp(by,n)}}function Ay(t,n,i){t==="focusin"?(rm(),To=n,bo=i,To.attachEvent("onpropertychange",om)):t==="focusout"&&rm()}function Cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(bo)}function Ry(t,n){if(t==="click")return Ol(n)}function wy(t,n){if(t==="input"||t==="change")return Ol(n)}function Dy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:Dy;function Ao(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var l=i[s];if(!ee.call(n,l)||!ti(t[l],n[l]))return!1}return!0}function Xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,n){var i=lm(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=n&&s>=n)return{node:i,offset:n-t};t=s}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=lm(i)}}function um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xu(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Xu(t.document)}return n}function qu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ny=ea&&"documentMode"in document&&11>=document.documentMode,sr=null,ju=null,Co=null,Yu=!1;function hm(t,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Yu||sr==null||sr!==Xu(s)||(s=sr,"selectionStart"in s&&qu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Co&&Ao(Co,s)||(Co=s,s=Oc(ju,"onSelect"),0<s.length&&(n=new Ul("onSelect","select",null,n,i),t.push({event:n,listeners:s}),n.target=sr)))}function ms(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var rr={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Wu={},dm={};ea&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function gs(t){if(Wu[t])return Wu[t];if(!rr[t])return t;var n=rr[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in dm)return Wu[t]=n[i];return t}var pm=gs("animationend"),mm=gs("animationiteration"),gm=gs("animationstart"),Uy=gs("transitionrun"),Ly=gs("transitionstart"),Oy=gs("transitioncancel"),vm=gs("transitionend"),_m=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function Ei(t,n){_m.set(t,n),Rn(n,[t])}var Py=0;function na(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ci.identifierPrefix;var i=Py++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function xm(t){if(t==null||typeof t=="string")return t;var n=null,i=Ar;if(i!==null)for(var s=0;s<i.length;s++){var l=t[i[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ia(t,n){return t=xm(t),n=xm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],or=0,Ku=0;function zl(){for(var t=or,n=Ku=or=0;n<t;){var i=hi[n];hi[n++]=null;var s=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var u=hi[n];if(hi[n++]=null,s!==null&&l!==null){var m=s.pending;m===null?l.next=l:(l.next=m.next,m.next=l),s.pending=l}u!==0&&ym(i,l,u)}}function Bl(t,n,i,s){hi[or++]=t,hi[or++]=n,hi[or++]=i,hi[or++]=s,Ku|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Qu(t,n,i,s){return Bl(t,n,i,s),Il(t)}function vs(t,n){return Bl(t,null,null,n),Il(t)}function ym(t,n,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var l=!1,u=t.return;u!==null;)u.childLanes|=i,s=u.alternate,s!==null&&(s.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&n!==null&&(l=31-An(i),t=u.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=i|536870912),u):null}function Il(t){if(50<Zo)throw Zo=0,Cc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var lr={};function zy(t,n,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,i,s){return new zy(t,n,i,s)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,n){var i=t.alternate;return i===null?(i=Vn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Sm(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Fl(t,n,i,s,l,u){var m=0;if(s=t,typeof s=="function")Ju(s)&&(m=1);else if(typeof s=="string")m=uM(t,i,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Gt:return t=Vn(31,i,n,l),t.elementType=Gt,t.lanes=u,t;case F:return _s(i.children,l,u,n);case et:m=8,l|=24;break;case tt:return t=Vn(12,i,n,l|2),t.elementType=tt,t.lanes=u,t;case rt:return t=Vn(13,i,n,l),t.elementType=rt,t.lanes=u,t;case Q:return t=Vn(19,i,n,l),t.elementType=Q,t.lanes=u,t;case ne:case R:return t=l|32,t=Vn(30,i,n,t),t.elementType=R,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case pt:m=10;break t;case dt:m=9;break t;case j:m=11;break t;case yt:m=14;break t;case St:m=16,s=null;break t}m=29,i=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(m,i,n,l),n.elementType=t,n.type=s,n.lanes=u,n}function _s(t,n,i,s){return t=Vn(7,t,s,n),t.lanes=i,t}function $u(t,n,i){return t=Vn(6,t,null,n),t.lanes=i,t}function Mm(t){var n=Vn(18,null,null,0);return n.stateNode=t,n}function tf(t,n,i){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Em=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var i=Em.get(t);return i!==void 0?i:(n={value:t,source:n,stack:$t(n)},Em.set(t,n),n)}return{value:t,source:n,stack:$t(n)}}var cr=[],ur=0,Hl=null,Ro=0,pi=[],mi=0,Na=null,Bi=1,Ii="";function sa(t,n){cr[ur++]=Ro,cr[ur++]=Hl,Hl=t,Ro=n}function Tm(t,n,i){pi[mi++]=Bi,pi[mi++]=Ii,pi[mi++]=Na,Na=t;var s=Bi;t=Ii;var l=32-An(s)-1;s&=~(1<<l),i+=1;var u=32-An(n)+l;if(30<u){var m=l-l%5;u=(s&(1<<m)-1).toString(32),s>>=m,l-=m,Bi=1<<32-An(n)+l|i<<l|s,Ii=u+t}else Bi=1<<u|i<<l|s,Ii=t}function Gl(t){t.return!==null&&(sa(t,1),Tm(t,1,0))}function ef(t){for(;t===Hl;)Hl=cr[--ur],cr[ur]=null,Ro=cr[--ur],cr[ur]=null;for(;t===Na;)Na=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null}function bm(t,n){pi[mi++]=Bi,pi[mi++]=Ii,pi[mi++]=Na,Bi=n.id,Ii=n.overflow,Na=t}var gn=null,Xe=null,pe=!1,Ua=null,gi=!1,nf=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(di(n,t)),nf}function Am(t){var n=t.stateNode,i=t.type,s=t.memoizedProps;switch(n[Wt]=t,n[zt]=s,i){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(i=0;i<Qo.length;i++)xe(Qo[i],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Ip(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Hp(n,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||Yg(n.textContent,i)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||La(t,!0)}function Vl(t){for(gn=t.return;gn;)switch(gn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:gn=gn.return}}function fr(t){if(t!==gn)return!1;if(!pe)return Vl(t),pe=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Lh(t.type,t.memoizedProps)),i=!i),i&&Xe&&La(t),Vl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xe=hv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xe=hv(t)}else n===27?(n=Xe,Za(t.type)?(t=Vh,Vh=null,Xe=t):Xe=n):Xe=gn?_i(t.stateNode.nextSibling):null;return!0}function xs(){Xe=gn=null,pe=!1}function af(){var t=Ua;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Ua=null),t}function wo(t){Ua===null?Ua=[t]:Ua.push(t)}var sf=ae(null),ys=null,ra=null;function Oa(t,n,i){Rt(sf,n._currentValue),n._currentValue=i}function oa(t){t._currentValue=sf.current,Jt(sf)}function kl(t,n,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===i)break;t=t.return}}function rf(t,n,i,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;t:for(;u!==null;){var E=u;u=l;for(var L=0;L<n.length;L++)if(E.context===n[L]){u.lanes|=i,E=u.alternate,E!==null&&(E.lanes|=i),kl(u.return,i,t),s||(m=null);break t}u=E.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(r(341));m.lanes|=i,u=m.alternate,u!==null&&(u.lanes|=i),kl(m,i,t),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),kl(l.return,i,t),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Ss(t,n,i,s){t=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var E=l.type;ti(l.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(l===T.current){if(m=l.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(zr):t=[zr])}l=l.return}return t!==null&&rf(n,t,i,s),n.flags|=262144,t!==null}function Xl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ms(t){ys=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return Cm(ys,t)}function ql(t,n){return ys===null&&Ms(t),Cm(t,n)}function Cm(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},ra===null){if(t===null)throw Error(r(308));ra=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ra=ra.next=n;return i}var By=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Iy=o.unstable_scheduleCallback,Fy=o.unstable_NormalPriority,tn={$$typeof:pt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function of(){return{controller:new By,data:new Map,refCount:0}}function Do(t){t.refCount--,t.refCount===0&&Iy(Fy,function(){t.controller.abort()})}function Rm(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];i.indexOf(s)===-1&&i.push(s)}}}var No=null;function Hy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,lf=0,Es=0,hr=null;function Gy(t,n){if(Uo===null){var i=Uo=[];lf=0,Es=Th(),hr={status:"pending",value:void 0,then:function(s){i.push(s)}}}return lf++,n.then(wm,wm),n}function wm(){if(--lf===0&&(No=null,Uo!==null)){hr!==null&&(hr.status="fulfilled");var t=Uo;Uo=null,Es=0,hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Vy(t,n){var i=[],s={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),s}var Dm=Tt.S;Tt.S=function(t,n){if(Mg=H(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Gy(t,n),No!==null)for(var i=Dr;i!==null;)Rm(i,No),i=i.next;if(i=t.types,i!==null){for(var s=Dr;s!==null;)Rm(s,i),s=s.next;if(Es!==0){s=No,s===null&&(s=No=[]);for(var l=0;l<i.length;l++){var u=i[l];s.indexOf(u)===-1&&s.push(u)}}}Dm!==null&&Dm(t,n)};var Ts=ae(null);function cf(){var t=Ts.current;return t!==null?t:ke.pooledCache}function jl(t,n){n===null?Rt(Ts,Ts.current):Rt(Ts,n.pool)}function Nm(){var t=cf();return t===null?null:{parent:tn._currentValue,pool:t}}var dr=Error(r(460)),uf=Error(r(474)),Yl=Error(r(542)),Wl={then:function(){}};function Um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lm(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(zi,zi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pm(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pm(t),t}throw As=n,dr}}function bs(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(As=i,dr):i}}var As=null;function Om(){if(As===null)throw Error(r(459));var t=As;return As=null,t}function Pm(t){if(t===dr||t===Yl)throw Error(r(483))}var pr=null,Lo=0;function Zl(t){var n=Lo;return Lo+=1,pr===null&&(pr=[]),Lm(pr,t,n)}function Pa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Kl(t,n){throw n.$$typeof===B?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function zm(t){function n(X,I){if(t){var J=X.deletions;J===null?(X.deletions=[I],X.flags|=16):J.push(I)}}function i(X,I){if(!t)return null;for(;I!==null;)n(X,I),I=I.sibling;return null}function s(X){for(var I=new Map;X!==null;)X.key===null?I.set(X.index,X):I.set(X.key,X),X=X.sibling;return I}function l(X,I){return X=aa(X,I),X.index=0,X.sibling=null,X}function u(X,I,J){return X.index=J,t?(J=X.alternate,J!==null?(J=J.index,J<I?(X.flags|=2,I):J):(X.flags|=134217730,I)):(X.flags|=1048576,I)}function m(X){return t&&X.alternate===null&&(X.flags|=134217730),X}function E(X,I,J,ft){return I===null||I.tag!==6?(I=$u(J,X.mode,ft),I.return=X,I):(I=l(I,J),I.return=X,I)}function L(X,I,J,ft){var Ft=J.type;return Ft===F?(X=it(X,I,J.props.children,ft,J.key),Pa(X,J),X):I!==null&&(I.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&bs(Ft)===I.type)?(I=l(I,J.props),Pa(I,J),I.return=X,I):(I=Fl(J.type,J.key,J.props,null,X.mode,ft),Pa(I,J),I.return=X,I)}function q(X,I,J,ft){return I===null||I.tag!==4||I.stateNode.containerInfo!==J.containerInfo||I.stateNode.implementation!==J.implementation?(I=tf(J,X.mode,ft),I.return=X,I):(I=l(I,J.children||[]),I.return=X,I)}function it(X,I,J,ft,Ft){return I===null||I.tag!==7?(I=_s(J,X.mode,ft,Ft),I.return=X,I):(I=l(I,J),I.return=X,I)}function ht(X,I,J){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=$u(""+I,X.mode,J),I.return=X,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case D:return J=Fl(I.type,I.key,I.props,null,X.mode,J),Pa(J,I),J.return=X,J;case A:return I=tf(I,X.mode,J),I.return=X,I;case St:return I=bs(I),ht(X,I,J)}if(It(I)||ut(I))return I=_s(I,X.mode,J,null),I.return=X,I;if(typeof I.then=="function")return ht(X,Zl(I),J);if(I.$$typeof===pt)return ht(X,ql(X,I),J);Kl(X,I)}return null}function V(X,I,J,ft){var Ft=I!==null?I.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:E(X,I,""+J,ft);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ft?L(X,I,J,ft):null;case A:return J.key===Ft?q(X,I,J,ft):null;case St:return J=bs(J),V(X,I,J,ft)}if(It(J)||ut(J))return Ft!==null?null:it(X,I,J,ft,null);if(typeof J.then=="function")return V(X,I,Zl(J),ft);if(J.$$typeof===pt)return V(X,I,ql(X,J),ft);Kl(X,J)}return null}function $(X,I,J,ft,Ft){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return X=X.get(J)||null,E(I,X,""+ft,Ft);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case D:return X=X.get(ft.key===null?J:ft.key)||null,L(I,X,ft,Ft);case A:return X=X.get(ft.key===null?J:ft.key)||null,q(I,X,ft,Ft);case St:return ft=bs(ft),$(X,I,J,ft,Ft)}if(It(ft)||ut(ft))return X=X.get(J)||null,it(I,X,ft,Ft,null);if(typeof ft.then=="function")return $(X,I,J,Zl(ft),Ft);if(ft.$$typeof===pt)return $(X,I,J,ql(I,ft),Ft);Kl(I,ft)}return null}function Ct(X,I,J,ft){for(var Ft=null,Me=null,Zt=I,te=I=0,an=null;Zt!==null&&te<J.length;te++){Zt.index>te?(an=Zt,Zt=null):an=Zt.sibling;var Ae=V(X,Zt,J[te],ft);if(Ae===null){Zt===null&&(Zt=an);break}t&&Zt&&Ae.alternate===null&&n(X,Zt),I=u(Ae,I,te),Me===null?Ft=Ae:Me.sibling=Ae,Me=Ae,Zt=an}if(te===J.length)return i(X,Zt),pe&&sa(X,te),Ft;if(Zt===null){for(;te<J.length;te++)Zt=ht(X,J[te],ft),Zt!==null&&(I=u(Zt,I,te),Me===null?Ft=Zt:Me.sibling=Zt,Me=Zt);return pe&&sa(X,te),Ft}for(Zt=s(Zt);te<J.length;te++)an=$(Zt,X,te,J[te],ft),an!==null&&(t&&(Ae=an.alternate,Ae!==null&&Zt.delete(Ae.key===null?te:Ae.key)),I=u(an,I,te),Me===null?Ft=an:Me.sibling=an,Me=an);return t&&Zt.forEach(function(ts){return n(X,ts)}),pe&&sa(X,te),Ft}function kt(X,I,J,ft){if(J==null)throw Error(r(151));for(var Ft=null,Me=null,Zt=I,te=I=0,an=null,Ae=J.next();Zt!==null&&!Ae.done;te++,Ae=J.next()){Zt.index>te?(an=Zt,Zt=null):an=Zt.sibling;var ts=V(X,Zt,Ae.value,ft);if(ts===null){Zt===null&&(Zt=an);break}t&&Zt&&ts.alternate===null&&n(X,Zt),I=u(ts,I,te),Me===null?Ft=ts:Me.sibling=ts,Me=ts,Zt=an}if(Ae.done)return i(X,Zt),pe&&sa(X,te),Ft;if(Zt===null){for(;!Ae.done;te++,Ae=J.next())Ae=ht(X,Ae.value,ft),Ae!==null&&(I=u(Ae,I,te),Me===null?Ft=Ae:Me.sibling=Ae,Me=Ae);return pe&&sa(X,te),Ft}for(Zt=s(Zt);!Ae.done;te++,Ae=J.next())Ae=$(Zt,X,te,Ae.value,ft),Ae!==null&&(t&&(an=Ae.alternate,an!==null&&Zt.delete(an.key===null?te:an.key)),I=u(Ae,I,te),Me===null?Ft=Ae:Me.sibling=Ae,Me=Ae);return t&&Zt.forEach(function(MM){return n(X,MM)}),pe&&sa(X,te),Ft}function ce(X,I,J,ft){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Ft=J.key;I!==null;){if(I.key===Ft){if(Ft=J.type,Ft===F){if(I.tag===7){i(X,I.sibling),ft=l(I,J.props.children),Pa(ft,J),ft.return=X,X=ft;break t}}else if(I.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&bs(Ft)===I.type){i(X,I.sibling),ft=l(I,J.props),Pa(ft,J),ft.return=X,X=ft;break t}i(X,I);break}else n(X,I);I=I.sibling}J.type===F?(ft=_s(J.props.children,X.mode,ft,J.key),Pa(ft,J),ft.return=X,X=ft):(ft=Fl(J.type,J.key,J.props,null,X.mode,ft),Pa(ft,J),ft.return=X,X=ft)}return m(X);case A:t:{for(Ft=J.key;I!==null;){if(I.key===Ft)if(I.tag===4&&I.stateNode.containerInfo===J.containerInfo&&I.stateNode.implementation===J.implementation){i(X,I.sibling),ft=l(I,J.children||[]),ft.return=X,X=ft;break t}else{i(X,I);break}else n(X,I);I=I.sibling}ft=tf(J,X.mode,ft),ft.return=X,X=ft}return m(X);case St:return J=bs(J),ce(X,I,J,ft)}if(It(J))return Ct(X,I,J,ft);if(ut(J)){if(Ft=ut(J),typeof Ft!="function")throw Error(r(150));return J=Ft.call(J),kt(X,I,J,ft)}if(typeof J.then=="function")return ce(X,I,Zl(J),ft);if(J.$$typeof===pt)return ce(X,I,ql(X,J),ft);Kl(X,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,I!==null&&I.tag===6?(i(X,I.sibling),ft=l(I,J),ft.return=X,X=ft):(i(X,I),ft=$u(J,X.mode,ft),ft.return=X,X=ft),m(X)):i(X,I)}return function(X,I,J,ft){try{Lo=0;var Ft=ce(X,I,J,ft);return pr=null,Ft}catch(Zt){if(Zt===dr||Zt===Yl)throw Zt;var Me=Vn(29,Zt,null,X.mode);return Me.lanes=ft,Me.return=X,Me}finally{}}}var Cs=zm(!0),Bm=zm(!1),za=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Il(t),ym(t,null,i),n}return Bl(t,s,n,i),Il(t)}function Oo(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,lt(t,i)}}function df(t,n){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,i=i.next}while(i!==null);u===null?l=u=n:u=u.next=n}else l=u=n;i={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var pf=!1;function Po(){if(pf){var t=hr;if(t!==null)throw t}}function zo(t,n,i,s){pf=!1;var l=t.updateQueue;za=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var L=E,q=L.next;L.next=null,m===null?u=q:m.next=q,m=L;var it=t.alternate;it!==null&&(it=it.updateQueue,E=it.lastBaseUpdate,E!==m&&(E===null?it.firstBaseUpdate=q:E.next=q,it.lastBaseUpdate=L))}if(u!==null){var ht=l.baseState;m=0,it=q=L=null,E=u;do{var V=E.lane&-536870913,$=V!==E.lane;if($?(Se&V)===V:(s&V)===V){V!==0&&V===Es&&(pf=!0),it!==null&&(it=it.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ct=t,kt=E;V=n;var ce=i;switch(kt.tag){case 1:if(Ct=kt.payload,typeof Ct=="function"){ht=Ct.call(ce,ht,V);break t}ht=Ct;break t;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=kt.payload,V=typeof Ct=="function"?Ct.call(ce,ht,V):Ct,V==null)break t;ht=P({},ht,V);break t;case 2:za=!0}}V=E.callback,V!==null&&(t.flags|=64,$&&(t.flags|=8192),$=l.callbacks,$===null?l.callbacks=[V]:$.push(V))}else $={lane:V,tag:E.tag,payload:E.payload,callback:E.callback,next:null},it===null?(q=it=$,L=ht):it=it.next=$,m|=V;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;$=E,E=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);it===null&&(L=ht),l.baseState=L,l.firstBaseUpdate=q,l.lastBaseUpdate=it,u===null&&(l.shared.lanes=0),qa|=m,t.lanes=m,t.memoizedState=ht}}function Im(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Fm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Im(i[t],n)}var Fa=ae(null),Ql=ae(0);function Hm(t,n){t=ha,Rt(Ql,t),Rt(Fa,n),ha=t|n.baseLanes}function mf(){Rt(Ql,ha),Rt(Fa,Fa.current)}function gf(){ha=Ql.current,Jt(Fa),Jt(Ql)}var Sn=ae(null),wn=null;function Ha(t){var n=t.alternate;Rt(Mn,Mn.current&1),Rt(Sn,t),wn===null&&(n===null||Fa.current!==null||n.memoizedState!==null)&&(wn=t)}function vf(t){Rt(Mn,Mn.current),Rt(Sn,t),wn===null&&(wn=t)}function Gm(t){t.tag===22?(Rt(Mn,Mn.current),Rt(Sn,t),wn===null&&(wn=t)):Ga()}function Ga(){Rt(Mn,Mn.current),Rt(Sn,Sn.current)}function ei(t){Jt(Sn),wn===t&&(wn=null),Jt(Mn)}var Mn=ae(0);function Bo(t,n){Rt(Sn,Sn.current),Rt(Mn,n)}function _f(t){Jt(Mn),Jt(Sn),wn===t&&(wn=null)}function Jl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Hh(i)||Gh(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,le=null,Ie=null,en=null,$l=!1,mr=!1,Rs=!1,tc=0,Io=0,gr=null,ky=0;function Ke(){throw Error(r(321))}function xf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!ti(t[i],n[i]))return!1;return!0}function yf(t,n,i,s,l,u){return la=u,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=t===null||t.memoizedState===null?T0:b0,Rs=!1,u=i(s,l),Rs=!1,mr&&(u=km(n,i,s,l)),Vm(t),u}function Vm(t){Tt.H=oc;var n=Ie!==null&&Ie.next!==null;if(la=0,en=Ie=le=null,$l=!1,Io=0,gr=null,n)throw Error(r(300));t===null||nn||(t=t.dependencies,t!==null&&Xl(t)&&(nn=!0))}function km(t,n,i,s){le=t;var l=0;do{if(mr&&(gr=null),Io=0,mr=!1,25<=l)throw Error(r(301));if(l+=1,en=Ie=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Tt.H=Qy,u=n(i,s)}while(mr);return u}function Xy(){var t=Tt.H,n=t.useState()[0];return n=typeof n.then=="function"?Fo(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(le.flags|=1024),n}function Sf(){var t=tc!==0;return tc=0,t}function Mf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Ef(t){if($l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}$l=!1}la=0,en=Ie=le=null,mr=!1,Io=tc=0,gr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?le.memoizedState=en=t:en=en.next=t,en}function Je(){if(Ie===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=en===null?le.memoizedState:en.next;if(n!==null)en=n,Ie=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},en===null?le.memoizedState=en=t:en=en.next=t}return en}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(t){var n=Io;return Io+=1,gr===null&&(gr=[]),t=Lm(gr,t,n),n=le,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?T0:b0),t}function nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===Y)return;if(t.$$typeof===pt)return yn(t)}throw Error(r(438,String(t)))}function Tf(t){var n=null,i=le.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=ec(),le.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),s=0;s<t;s++)i[s]=Ee;return n.index++,i}function ca(t,n){return typeof n=="function"?n(t):n}function ic(t){var n=Je();return bf(n,Ie,t)}function bf(t,n,i){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=i;var l=t.baseQueue,u=s.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}n.baseQueue=l=u,s.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{n=l.next;var E=m=null,L=null,q=n,it=!1;do{var ht=q.lane&-536870913;if(ht!==q.lane?(Se&ht)===ht:(la&ht)===ht){var V=q.revertLane;if(V===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ht===Es&&(it=!0);else if((la&V)===V){q=q.next,V===Es&&(it=!0);continue}else ht={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},L===null?(E=L=ht,m=u):L=L.next=ht,le.lanes|=V,qa|=V;ht=q.action,Rs&&i(u,ht),u=q.hasEagerState?q.eagerState:i(u,ht)}else V={lane:ht,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},L===null?(E=L=V,m=u):L=L.next=V,le.lanes|=ht,qa|=ht;q=q.next}while(q!==null&&q!==n);if(L===null?m=u:L.next=E,!ti(u,t.memoizedState)&&(nn=!0,it&&(i=hr,i!==null)))throw i;t.memoizedState=u,t.baseState=m,t.baseQueue=L,s.lastRenderedState=u}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Af(t){var n=Je(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var s=i.dispatch,l=i.pending,u=n.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do u=t(u,m.action),m=m.next;while(m!==l);ti(u,n.memoizedState)||(nn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),i.lastRenderedState=u}return[u,s]}function Xm(t,n,i){var s=le,l=Je(),u=pe;if(u){if(i===void 0)throw Error(r(407));i=i()}else i=n();var m=!ti((Ie||l).memoizedState,i);if(m&&(l.memoizedState=i,nn=!0),l=l.queue,wf(Ym.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||m||en!==null&&(en.memoizedState.tag&1)!==0,vr(t?9:8,{destroy:void 0},jm.bind(null,s,l,i,n),null),t){if(s.flags|=2048,ke===null)throw Error(r(349));u||(la&127)!==0||qm(s,n,i)}return i}function qm(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=le.updateQueue,n===null?(n=ec(),le.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function jm(t,n,i,s){n.value=i,n.getSnapshot=s,Wm(n)&&Zm(t)}function Ym(t,n,i){return i(function(){Wm(n)&&Zm(t)})}function Wm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!ti(t,i)}catch{return!0}}function Zm(t){var n=vs(t,2);n!==null&&jn(n,t,2)}function Cf(t){var n=zn();if(typeof t=="function"){var i=t;if(t=i(),Rs){mn(!0);try{i()}finally{mn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function Km(t,n,i,s){return t.baseState=i,bf(t,Ie,typeof s=="function"?s:ca)}function qy(t,n,i,s,l){if(rc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};Tt.T!==null?i(!0):u.isTransition=!1,s(u),i=n.pending,i===null?(u.next=n.pending=u,Qm(n,u)):(u.next=i.next,n.pending=i.next=u)}}function Qm(t,n){var i=n.action,s=n.payload,l=t.state;if(n.isTransition){var u=Tt.T,m={};m.types=u!==null?u.types:null,Tt.T=m;try{var E=i(l,s),L=Tt.S;L!==null&&L(m,E),Jm(t,n,E)}catch(q){Rf(t,n,q)}finally{u!==null&&m.types!==null&&(u.types=m.types),Tt.T=u}}else try{u=i(l,s),Jm(t,n,u)}catch(q){Rf(t,n,q)}}function Jm(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){$m(t,n,s)},function(s){return Rf(t,n,s)}):$m(t,n,i)}function $m(t,n,i){n.status="fulfilled",n.value=i,t0(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,Qm(t,i)))}function Rf(t,n,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,t0(n),n=n.next;while(n!==s)}t.action=null}function t0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function e0(t,n){return n}function n0(t,n){if(pe){var i=ke.formState;if(i!==null){t:{var s=le;if(pe){if(Xe){e:{for(var l=Xe,u=gi;l.nodeType!==8;){if(!u){l=null;break e}if(l=_i(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Xe=_i(l.nextSibling),s=l.data==="F!";break t}}La(s)}s=!1}s&&(n=i[0])}}return i=zn(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:n},i.queue=s,i=S0.bind(null,le,s),s.dispatch=i,s=Cf(!1),u=Of.bind(null,le,!1,s.queue),s=zn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,i=qy.bind(null,le,l,u,i),l.dispatch=i,s.memoizedState=t,[n,i,!1]}function i0(t){var n=Je();return a0(n,Ie,t)}function a0(t,n,i){if(n=bf(t,n,e0)[0],t=ic(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Fo(n)}catch(m){throw m===dr?Yl:m}else s=n;n=Je();var l=n.queue,u=l.dispatch;return i!==n.memoizedState&&(le.flags|=2048,vr(9,{destroy:void 0},jy.bind(null,l,i),null)),[s,u,t]}function jy(t,n){t.action=n}function s0(t){var n=Je(),i=Ie;if(i!==null)return a0(n,i,t);Je(),n=n.memoizedState,i=Je();var s=i.queue.dispatch;return i.memoizedState=t,[n,s,!1]}function vr(t,n,i,s){return t={tag:t,create:i,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=ec(),le.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,n.lastEffect=t),t}function r0(){return Je().memoizedState}function ac(t,n,i,s){var l=zn();le.flags|=t,l.memoizedState=vr(1|n,{destroy:void 0},i,s===void 0?null:s)}function sc(t,n,i,s){var l=Je();s=s===void 0?null:s;var u=l.memoizedState.inst;Ie!==null&&s!==null&&xf(s,Ie.memoizedState.deps)?l.memoizedState=vr(n,u,i,s):(le.flags|=t,l.memoizedState=vr(1|n,u,i,s))}function o0(t,n){ac(8390656,8,t,n)}function wf(t,n){sc(2048,8,t,n)}function Yy(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=ec(),le.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function l0(t){var n=Je().memoizedState;return Yy({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function c0(t,n){return sc(4,2,t,n)}function u0(t,n){return sc(4,4,t,n)}function f0(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function h0(t,n,i){i=i!=null?i.concat([t]):null,sc(4,4,f0.bind(null,n,t),i)}function Df(){}function d0(t,n){var i=Je();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&xf(n,s[1])?s[0]:(i.memoizedState=[t,n],t)}function p0(t,n){var i=Je();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&xf(n,s[1]))return s[0];if(s=t(),Rs){mn(!0);try{t()}finally{mn(!1)}}return i.memoizedState=[s,n],s}function Nf(t,n,i){return i===void 0||(la&1073741824)!==0&&(Se&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=Tg(),le.lanes|=t,qa|=t,i)}function m0(t,n,i,s){return ti(i,n)?i:Fa.current!==null?(t=Nf(t,i,s),ti(t,n)||(nn=!0),t):(la&106)===0||(la&1073741824)!==0&&(Se&261930)===0?(nn=!0,t.memoizedState=i):(t=Tg(),le.lanes|=t,qa|=t,n)}function g0(t,n,i,s,l){var u=At.p;At.p=u!==0&&8>u?u:8;var m=Tt.T,E={};E.types=m!==null?m.types:null,Tt.T=E,Of(t,!1,n,i);try{var L=l(),q=Tt.S;if(q!==null&&q(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var it=Vy(L,s);Ho(t,n,it,si(t))}else Ho(t,n,s,si(t))}catch(ht){Ho(t,n,{then:function(){},status:"rejected",reason:ht},si())}finally{At.p=u,m!==null&&E.types!==null&&(m.types=E.types),Tt.T=m}}function Wy(){}function Uf(t,n,i,s){if(t.tag!==5)throw Error(r(476));var l=v0(t).queue;g0(t,l,n,De,i===null?Wy:function(){return _0(t),i(s)})}function v0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:De,baseState:De,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:De},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function _0(t){var n=v0(t);n.next===null&&(n=t.alternate.memoizedState),Ho(t,n.next.queue,{},si())}function Lf(){return yn(zr)}function x0(){return Je().memoizedState}function y0(){return Je().memoizedState}function Zy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=si();t=Ba(i);var s=Ia(n,t,i);s!==null&&(jn(s,n,i),Oo(s,n,i)),n={cache:of()},t.payload=n;return}n=n.return}}function Ky(t,n,i){var s=si();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},rc(t)?M0(n,i):(i=Qu(t,n,i,s),i!==null&&(jn(i,t,s),E0(i,n,s)))}function S0(t,n,i){var s=si();Ho(t,n,i,s)}function Ho(t,n,i,s){var l={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(rc(t))M0(n,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var m=n.lastRenderedState,E=u(m,i);if(l.hasEagerState=!0,l.eagerState=E,ti(E,m))return Bl(t,n,l,0),ke===null&&zl(),!1}catch{}finally{}if(i=Qu(t,n,l,s),i!==null)return jn(i,t,s),E0(i,n,s),!0}return!1}function Of(t,n,i,s){if(s={lane:2,revertLane:Th(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},rc(t)){if(n)throw Error(r(479))}else n=Qu(t,i,s,2),n!==null&&jn(n,t,2)}function rc(t){var n=t.alternate;return t===le||n!==null&&n===le}function M0(t,n){mr=$l=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function E0(t,n,i){if((i&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,lt(t,i)}}var oc={readContext:yn,use:nc,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke,useEffectEvent:Ke},T0={readContext:yn,use:nc,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:o0,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,ac(4194308,4,f0.bind(null,n,t),i)},useLayoutEffect:function(t,n){return ac(4194308,4,t,n)},useInsertionEffect:function(t,n){ac(4,2,t,n)},useMemo:function(t,n){var i=zn();n=n===void 0?null:n;var s=t();if(Rs){mn(!0);try{t()}finally{mn(!1)}}return i.memoizedState=[s,n],s},useReducer:function(t,n,i){var s=zn();if(i!==void 0){var l=i(n);if(Rs){mn(!0);try{i(n)}finally{mn(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=Ky.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Cf(t);var n=t.queue,i=S0.bind(null,le,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Df,useDeferredValue:function(t,n){var i=zn();return Nf(i,t,n)},useTransition:function(){var t=Cf(!1);return t=g0.bind(null,le,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var s=le,l=zn();if(pe){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),ke===null)throw Error(r(349));(Se&127)!==0||qm(s,n,i)}l.memoizedState=i;var u={value:i,getSnapshot:n};return l.queue=u,o0(Ym.bind(null,s,u,t),[t]),s.flags|=2048,vr(9,{destroy:void 0},jm.bind(null,s,u,i,n),null),i},useId:function(){var t=zn(),n=ke.identifierPrefix;if(pe){var i=Ii,s=Bi;i=(s&~(1<<32-An(s)-1)).toString(32)+i,n="_"+n+"R_"+i,i=tc++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=ky++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lf,useFormState:n0,useActionState:n0,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Of.bind(null,le,!0,i),i.dispatch=n,[t,n]},useMemoCache:Tf,useCacheRefresh:function(){return zn().memoizedState=Zy.bind(null,le)},useEffectEvent:function(t){var n=zn(),i={impl:t};return n.memoizedState=i,function(){if((Ne&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},b0={readContext:yn,use:nc,useCallback:d0,useContext:yn,useEffect:wf,useImperativeHandle:h0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:ic,useRef:r0,useState:function(){return ic(ca)},useDebugValue:Df,useDeferredValue:function(t,n){var i=Je();return m0(i,Ie.memoizedState,t,n)},useTransition:function(){var t=ic(ca)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:Xm,useId:x0,useHostTransitionStatus:Lf,useFormState:i0,useActionState:i0,useOptimistic:function(t,n){var i=Je();return Km(i,Ie,t,n)},useMemoCache:Tf,useCacheRefresh:y0,useEffectEvent:l0},Qy={readContext:yn,use:nc,useCallback:d0,useContext:yn,useEffect:wf,useImperativeHandle:h0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Af,useRef:r0,useState:function(){return Af(ca)},useDebugValue:Df,useDeferredValue:function(t,n){var i=Je();return Ie===null?Nf(i,t,n):m0(i,Ie.memoizedState,t,n)},useTransition:function(){var t=Af(ca)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:Xm,useId:x0,useHostTransitionStatus:Lf,useFormState:s0,useActionState:s0,useOptimistic:function(t,n){var i=Je();return Ie!==null?Km(i,Ie,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:y0,useEffectEvent:l0};function Pf(t,n,i,s){n=t.memoizedState,i=i(s,n),i=i==null?n:P({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var zf={enqueueSetState:function(t,n,i){t=t._reactInternals;var s=si(),l=Ba(s);l.payload=n,i!=null&&(l.callback=i),n=Ia(t,l,s),n!==null&&(jn(n,t,s),Oo(n,t,s))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var s=si(),l=Ba(s);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Ia(t,l,s),n!==null&&(jn(n,t,s),Oo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=si(),s=Ba(i);s.tag=2,n!=null&&(s.callback=n),n=Ia(t,s,i),n!==null&&(jn(n,t,i),Oo(n,t,i))}};function A0(t,n,i,s,l,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,m):n.prototype&&n.prototype.isPureReactComponent?!Ao(i,s)||!Ao(l,u):!0}function C0(t,n,i,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==t&&zf.enqueueReplaceState(n,n.state,null)}function ws(t,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(t=t.defaultProps){i===n&&(i=P({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function R0(t){Pl(t)}function w0(t){console.error(t)}function D0(t){Pl(t)}function lc(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function N0(t,n,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Bf(t,n,i){return i=Ba(i),i.tag=3,i.payload={element:null},i.callback=function(){lc(t,n)},i}function U0(t){return t=Ba(t),t.tag=3,t}function L0(t,n,i,s){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=s.value;t.payload=function(){return l(u)},t.callback=function(){N0(n,i,s)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){N0(n,i,s),typeof l!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Jy(t,n,i,s,l){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&Ss(n,i,l,!0),i=Sn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return wn===null?wc():i.alternate===null&&Qe===0&&(Qe=3),i.flags&=-257,i.flags|=65536,i.lanes=l,s===Wl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),Sh(t,s,l)),!1;case 22:return i.flags|=65536,s===Wl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),Sh(t,s,l)),!1}throw Error(r(435,i.tag))}return Sh(t,s,l),wc(),!1}if(pe)return n=Sn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==nf&&(t=Error(r(422),{cause:s}),wo(di(t,i)))):(s!==nf&&(n=Error(r(423),{cause:s}),wo(di(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=di(s,i),l=Bf(t.stateNode,s,l),df(t,l),Qe!==4&&(Qe=2)),!1;var u=Error(r(520),{cause:s});if(u=di(u,i),Wo===null?Wo=[u]:Wo.push(u),Qe!==4&&(Qe=2),n===null)return!0;s=di(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Bf(i.stateNode,s,t),df(i,t),!1;case 1:if(n=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ja===null||!ja.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=U0(l),L0(l,t,i,s),df(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var If=Error(r(461)),nn=!1;function un(t,n,i,s){n.child=t===null?Bm(n,null,i,s):Cs(n,t.child,i,s)}function O0(t,n,i,s,l){i=i.render;var u=n.ref;if("ref"in s){var m={};for(var E in s)E!=="ref"&&(m[E]=s[E])}else m=s;return Ms(n),s=yf(t,n,i,m,u,l),E=Sf(),t!==null&&!nn?(Mf(t,n,l),ua(t,n,l)):(pe&&E&&Gl(n),n.flags|=1,un(t,n,s,l),n.child)}function P0(t,n,i,s,l){if(t===null){var u=i.type;return typeof u=="function"&&!Ju(u)&&u.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=u,z0(t,n,u,s,l)):(t=Fl(i.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!jf(t,l)){var m=u.memoizedProps;if(i=i.compare,i=i!==null?i:Ao,i(m,s)&&t.ref===n.ref)return ua(t,n,l)}return n.flags|=1,t=aa(u,s),t.ref=n.ref,t.return=n,n.child=t}function z0(t,n,i,s,l){if(t!==null){var u=t.memoizedProps;if(Ao(u,s)&&t.ref===n.ref)if(nn=!1,n.pendingProps=s=u,jf(t,l))(t.flags&131072)!==0&&(nn=!0);else return n.lanes=t.lanes,ua(t,n,l)}return Ff(t,n,i,s,l)}function B0(t,n,i,s){var l=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~u}else s=0,n.child=null;return I0(t,n,u,i,s)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&jl(n,u!==null?u.cachePool:null),u!==null?Hm(n,u):mf(),Gm(n);else return s=n.lanes=536870912,I0(t,n,u!==null?u.baseLanes|i:i,i,s)}else u!==null?(jl(n,u.cachePool),Hm(n,u),Ga(),n.memoizedState=null):(t!==null&&jl(n,null),mf(),Ga());return un(t,n,l,i),n.child}function Go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function I0(t,n,i,s,l){var u=cf();return u=u===null?null:{parent:tn._currentValue,pool:u},n.memoizedState={baseLanes:i,cachePool:u},t!==null&&jl(n,null),mf(),Gm(n),t!==null&&Ss(t,n,s,!0),n.childLanes=l,null}function cc(t,n){return n=uc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function F0(t,n,i){return Cs(n,t.child,null,i),t=cc(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function $y(t,n,i){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(pe){if(s.mode==="hidden")return t=cc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Go(null,t);if(vf(n),(t=Xe)?(t=fv(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=Mm(t),i.return=n,n.child=i,gn=n,Xe=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return cc(n,s)}var u=t.memoizedState;if(u!==null){var m=u.dehydrated;if(vf(n),l)if(n.flags&256)n.flags&=-257,n=F0(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(nn||Ss(t,n,i,!1),l=(i&t.childLanes)!==0,nn||l){if(Fa.current===null){if(s=ke,s!==null&&(m=Z(s,i),m!==0&&m!==u.retryLane))throw u.retryLane=m,vs(t,m),jn(s,t,m),If;wc()}n=F0(t,n,i)}else t=u.treeContext,Xe=_i(m.nextSibling),gn=n,pe=!0,Ua=null,gi=!1,t!==null&&bm(n,t),n=cc(n,s),n.flags|=134221824;return n}return t=aa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _r(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function Ff(t,n,i,s,l){return Ms(n),i=yf(t,n,i,s,void 0,l),s=Sf(),t!==null&&!nn?(Mf(t,n,l),ua(t,n,l)):(pe&&s&&Gl(n),n.flags|=1,un(t,n,i,l),n.child)}function H0(t,n,i,s,l,u){return Ms(n),n.updateQueue=null,i=km(n,s,i,l),Vm(t),s=Sf(),t!==null&&!nn?(Mf(t,n,u),ua(t,n,u)):(pe&&s&&Gl(n),n.flags|=1,un(t,n,i,u),n.child)}function G0(t,n,i,s,l){if(Ms(n),n.stateNode===null){var u=lr,m=i.contextType;typeof m=="object"&&m!==null&&(u=yn(m)),u=new i(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=zf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},ff(n),m=i.contextType,u.context=typeof m=="object"&&m!==null?yn(m):lr,u.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Pf(n,i,m,s),u.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&zf.enqueueReplaceState(u,u.state,null),zo(n,s,u,l),Po(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var E=n.memoizedProps,L=ws(i,E);u.props=L;var q=u.context,it=i.contextType;m=lr,typeof it=="object"&&it!==null&&(m=yn(it));var ht=i.getDerivedStateFromProps;it=typeof ht=="function"||typeof u.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,it||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(E||q!==m)&&C0(n,u,s,m),za=!1;var V=n.memoizedState;u.state=V,zo(n,s,u,l),Po(),q=n.memoizedState,E||V!==q||za?(typeof ht=="function"&&(Pf(n,i,ht,s),q=n.memoizedState),(L=za||A0(n,i,L,s,V,q,m))?(it||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=q),u.props=s,u.state=q,u.context=m,s=L):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,hf(t,n),m=n.memoizedProps,it=ws(i,m),u.props=it,ht=n.pendingProps,V=u.context,q=i.contextType,L=lr,typeof q=="object"&&q!==null&&(L=yn(q)),E=i.getDerivedStateFromProps,(q=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==ht||V!==L)&&C0(n,u,s,L),za=!1,V=n.memoizedState,u.state=V,zo(n,s,u,l),Po();var $=n.memoizedState;m!==ht||V!==$||za||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof E=="function"&&(Pf(n,i,E,s),$=n.memoizedState),(it=za||A0(n,i,it,s,V,$,L)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,$,L),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,$,L)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&V===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&V===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=$),u.props=s,u.state=$,u.context=L,s=it):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&V===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&V===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,_r(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Cs(n,t.child,null,l),n.child=Cs(n,null,i,l)):un(t,n,i,l),n.memoizedState=u.state,t=n.child):t=ua(t,n,l),t}function V0(t,n,i,s){return xs(),n.flags|=256,un(t,n,i,s),n.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gf(t){return{baseLanes:t,cachePool:Nm()}}function Vf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ai),t}function k0(t,n,i){var s=n.pendingProps,l=!1,u=(n.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(Mn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,t===null){if(pe){if(l?Ha(n):Ga(),(t=Xe)?(t=fv(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=Mm(t),i.return=n,n.child=i,gn=n,Xe=null)):t=null,t===null)throw La(n);return Gh(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,l?(Ga(),l=n.mode,u=uc({mode:"hidden",children:u},l),s=_s(s,l,i,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=Gf(i),s.childLanes=Vf(t,m,i),n.memoizedState=Hf,Go(null,s)):(Ha(n),kf(n,u))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return tS(t,n,u,m,s,L,E,i)}return l?(Ga(),l=s.fallback,u=n.mode,E=t.child,L=E.sibling,s=aa(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,L!==null?l=aa(L,l):(l=_s(l,u,i,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Go(null,s),s=n.child,l=t.child.memoizedState,l===null?l=Gf(i):(u=l.cachePool,u!==null?(E=tn._currentValue,u=u.parent!==E?{parent:E,pool:E}:u):u=Nm(),l={baseLanes:l.baseLanes|i,cachePool:u}),s.memoizedState=l,s.childLanes=Vf(t,m,i),n.memoizedState=Hf,Go(t.child,s)):(Ha(n),i=t.child,t=i.sibling,i=aa(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,t!==null&&(m=n.deletions,m===null?(n.deletions=[t],n.flags|=16):m.push(t)),n.child=i,n.memoizedState=null,i)}function kf(t,n){return n=uc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function uc(t,n){return t=Vn(22,t,null,n),t.lanes=0,t}function fc(t,n,i){return Cs(n,t.child,null,i),t=kf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function tS(t,n,i,s,l,u,m,E){if(i)return n.flags&256?(Ha(n),n.flags&=-257,fc(t,n,E)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,null):(Ga(),u=l.fallback,m=n.mode,l=uc({mode:"visible",children:l.children},m),u=_s(u,m,E,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Cs(n,t.child,null,E),l=n.child,l.memoizedState=Gf(E),l.childLanes=Vf(t,s,E),n.memoizedState=Hf,Go(null,l));if(Ha(n),Gh(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var L=s.dgst;return s=L,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,wo({value:l,source:null,stack:null})),fc(t,n,E)}if(nn||Ss(t,n,E,!1),s=(E&t.childLanes)!==0,nn||s){if(Fa.current!==null)return fc(t,n,E);if(s=ke,s!==null&&(l=Z(s,E),l!==0&&l!==m.retryLane))throw m.retryLane=l,vs(t,l),jn(s,t,l),If;return Hh(u)||wc(),fc(t,n,E)}return Hh(u)?(n.flags|=192,n.child=t.child,null):(t=m.treeContext,Xe=_i(u.nextSibling),gn=n,pe=!0,Ua=null,gi=!1,t!==null&&bm(n,t),n=kf(n,l.children),n.flags|=134221824,n)}function X0(t,n,i){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),kl(t.return,n,i)}function q0(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&Jl(i)===null&&(n=t),t=t.sibling}return n}function hc(t,n,i,s,l,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:l,treeForkCount:u}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=i,m.tailMode=l,m.treeForkCount=u)}function Xf(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function qf(t,n,i){var s=n.pendingProps,l=s.revealOrder,u=s.tail;s=s.children;var m=Mn.current;if(n.flags&128)return Bo(n,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,n.flags|=128):m&=1,Bo(n,m),l==="backwards"&&t!==null?(Xf(t),un(t,n,s,i),Xf(t)):un(t,n,s,i),s=pe?Ro:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&X0(t,i,n);else if(t.tag===19)X0(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=q0(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Xf(n)),hc(n,!0,l,null,u,s);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Jl(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}hc(n,!0,i,null,u,s);break;case"together":hc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:i=q0(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),hc(n,!1,l,i,u,s)}return n.child}function j0(t,n,i){var s=n.pendingProps;return Oa(n,n.type,s.value),un(t,n,s.children,i),n.child}function ua(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Ss(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,i=aa(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=aa(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function jf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function eS(t,n,i){switch(n.tag){case 3:nt(n,n.stateNode.containerInfo),Oa(n,tn,t.memoizedState.cache),xs();break;case 27:case 5:xt(n);break;case 4:nt(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ha(n),n.flags|=128,null;s=Ss(t,n,i,!1);var l=n.child.childLanes;return s||(i&l)!==0?k0(t,n,i):(Ha(n),t=ua(t,n,i),t!==null?t.sibling:null)}Ha(n);break;case 19:if(n.flags&128)return qf(t,n,i);if(l=(t.flags&128)!==0,s=(i&n.childLanes)!==0,s||(Ss(t,n,i,!1),s=(i&n.childLanes)!==0),l){if(s)return qf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Bo(n,Mn.current),s)break;return null;case 22:return n.lanes=0,B0(t,n,i,n.pendingProps);case 24:Oa(n,tn,t.memoizedState.cache)}return ua(t,n,i)}function Y0(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)nn=!0;else{if(!jf(t,i)&&(n.flags&128)===0)return nn=!1,eS(t,n,i);nn=(t.flags&131072)!==0}else nn=!1,pe&&(n.flags&1048576)!==0&&Tm(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=bs(n.elementType),n.type=t,typeof t=="function")Ju(t)?(s=ws(t,s),n.tag=1,n=G0(null,n,t,s,i)):(n.tag=0,n=Ff(null,n,t,s,i));else{if(t!=null){var l=t.$$typeof;if(l===j){n.tag=11,n=O0(null,n,t,s,i);break t}else if(l===yt){n.tag=14,n=P0(null,n,t,s,i);break t}else if(l===pt){n.tag=10,n.type=t,n=j0(null,n,i);break t}}throw n=wt(t)||t,Error(r(306,n,""))}}return n;case 0:return Ff(t,n,n.type,n.pendingProps,i);case 1:return s=n.type,l=ws(s,n.pendingProps),G0(t,n,s,l,i);case 3:t:{if(nt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;l=u.element,hf(t,n),zo(n,s,null,i);var m=n.memoizedState;if(s=m.cache,Oa(n,tn,s),s!==u.cache&&rf(n,[tn],i,!0),Po(),s=m.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=V0(t,n,s,i);break t}else if(s!==l){l=di(Error(r(424)),n),wo(l),n=V0(t,n,s,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=_i(t.firstChild),gn=n,pe=!0,Ua=null,gi=!0,i=Bm(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(xs(),s===l){n=ua(t,n,i);break t}un(t,n,s,i)}n=n.child}return n;case 26:return _r(t,n),t===null?(i=_v(n.type,null,n.pendingProps,null))?n.memoizedState=i:pe||(n.stateNode=Qg(n.type,n.pendingProps,U.current,n)):n.memoizedState=_v(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return xt(n),t===null&&pe&&(s=n.stateNode=pv(n.type,n.pendingProps,U.current),gn=n,gi=!0,l=Xe,Za(n.type)?(Vh=l,Xe=_i(s.firstChild)):Xe=l),un(t,n,n.pendingProps.children,i),_r(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&pe&&((l=s=Xe)&&(s=ZS(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,gn=n,Xe=_i(s.firstChild),gi=!1,l=!0):l=!1),l||La(n)),xt(n),l=n.type,u=n.pendingProps,m=t!==null?t.memoizedProps:null,s=u.children,Lh(l,u)?s=null:m!==null&&Lh(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=yf(t,n,Xy,null,null,i),zr._currentValue=l),_r(t,n),un(t,n,s,i),n.child;case 6:return t===null&&pe&&((t=i=Xe)&&(i=KS(i,n.pendingProps,gi),i!==null?(n.stateNode=i,gn=n,Xe=null,t=!0):t=!1),t||La(n)),null;case 13:return k0(t,n,i);case 4:return nt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Cs(n,null,s,i):un(t,n,s,i),n.child;case 11:return O0(t,n,n.type,n.pendingProps,i);case 7:return s=n.pendingProps,_r(t,n),un(t,n,s,i),n.child;case 8:return un(t,n,n.pendingProps.children,i),n.child;case 12:return un(t,n,n.pendingProps.children,i),n.child;case 10:return j0(t,n,i);case 9:return l=n.type._context,s=n.pendingProps.children,Ms(n),l=yn(l),s=s(l),n.flags|=1,un(t,n,s,i),n.child;case 14:return P0(t,n,n.type,n.pendingProps,i);case 15:return z0(t,n,n.type,n.pendingProps,i);case 19:return qf(t,n,i);case 31:return $y(t,n,i);case 22:return B0(t,n,i,n.pendingProps);case 24:return Ms(n),s=yn(tn),t===null?(l=cf(),l===null&&(l=ke,u=of(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),n.memoizedState={parent:s,cache:l},ff(n),Oa(n,tn,l)):((t.lanes&i)!==0&&(hf(t,n),zo(n,null,null,i),Po()),l=t.memoizedState,u=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Oa(n,tn,s)):(s=u.cache,Oa(n,tn,s),s!==l.cache&&rf(n,[tn],i,!0))),un(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:pe&&Gl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:_r(t,n),un(t,n,s.children,i),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function fa(t){t.flags|=4}function Yf(t,n,i,s,l){var u;if((u=(t.mode&32)!==0)&&(u=i===null?Mv(n,s):Mv(n,s)&&(s.src!==i.src||s.srcSet!==i.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Rg())t.flags|=8192;else throw As=Wl,uf}else t.flags&=-16777217}function W0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ev(n))if(Rg())t.flags|=8192;else throw As=Wl,uf}function dc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Tl():536870912,t.lanes|=n,Er|=n)}function Vo(t,n){if(!pe)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=i,n}function nS(t,n,i){var s=n.pendingProps;switch(ef(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return i=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),oa(tn),vt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fr(n)?fa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,af())),qe(n),null;case 26:var l=n.type,u=n.memoizedState;return t===null?(fa(n),u!==null?(qe(n),W0(n,u)):(qe(n),Yf(n,l,null,s,i))):u?u!==t.memoizedState?(fa(n),qe(n),W0(n,u)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&fa(n),qe(n),Yf(n,l,t,s,i)),null;case 27:if(mt(n),i=U.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&fa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),n.subtreeFlags&=-33554433,null}t=ye.current,fr(n)?Am(n):(t=pv(l,s,i),n.stateNode=t,fa(n))}return qe(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&fa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),n.subtreeFlags&=-33554433,null}if(u=ye.current,fr(n))Am(n);else{var m=$o(U.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?m.createElement(l,{is:s.is}):m.createElement(l)}}u[Wt]=n,u[zt]=s;t:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break t;for(;m.sibling===null;){if(m.return===null||m.return===n)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=u;t:switch(Tn(u,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&fa(n)}}return qe(n),n.subtreeFlags&=-33554433,Yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&fa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=U.current,fr(n)){if(t=n.stateNode,i=n.memoizedProps,s=null,l=gn,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[Wt]=n,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||Yg(t.nodeValue,i)),t||La(n,!0)}else t=$o(t).createTextNode(s),t[Wt]=n,n.stateNode=t}return qe(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(s=fr(n),i!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Wt]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else i=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=fr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Wt]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),l=!1}else l=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=i,n):(i=s!==null,t=t!==null&&t.memoizedState!==null,i&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==l&&(s.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),dc(n,n.updateQueue),qe(n),null);case 4:return vt(),t===null&&Rh(n.stateNode.containerInfo),n.flags|=67108864,qe(n),null;case 10:return oa(n.type),qe(n),null;case 19:if(_f(n),s=n.memoizedState,s===null)return qe(n),null;if(l=(n.flags&128)!==0,u=s.rendering,u===null)if(l)Vo(s,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=Jl(t),u!==null){for(n.flags|=128,Vo(s,!1),t=u.updateQueue,n.updateQueue=t,dc(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Sm(i,t),i=i.sibling;return Bo(n,Mn.current&1|2),pe&&sa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&H()>bc&&(n.flags|=128,l=!0,Vo(s,!1),n.lanes=4194304)}else{if(!l)if(t=Jl(u),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,dc(n,t),Vo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!pe)return qe(n),null}else 2*H()-s.renderingStartTime>bc&&i!==536870912&&(n.flags|=128,l=!0,Vo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=H(),t.sibling=null,u=Mn.current,u=l?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!i||pe?Bo(n,u):(i=u,Rt(Sn,n),Rt(Mn,i),wn===null&&(wn=n)),pe&&sa(n,s.treeForkCount),t}return qe(n),null;case 22:case 23:return ei(n),gf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),i=n.updateQueue,i!==null&&dc(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),t!==null&&Jt(Ts),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),oa(tn),qe(n),null;case 25:return null;case 30:return n.flags|=33554432,qe(n),null}throw Error(r(156,n.tag))}function iS(t,n){switch(ef(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return oa(tn),vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(r(340));xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return _f(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return vt(),null;case 10:return oa(n.type),null;case 22:case 23:return ei(n),gf(),t!==null&&Jt(Ts),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return oa(tn),null;case 25:return null;default:return null}}function Z0(t,n){switch(ef(n),n.tag){case 3:oa(tn),vt();break;case 26:case 27:case 5:mt(n);break;case 4:vt();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:_f(n);break;case 10:oa(n.type);break;case 22:case 23:ei(n),gf(),t!==null&&Jt(Ts);break;case 24:oa(tn)}}function ko(t,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var l=s.next;i=l;do{if((i.tag&t)===t){s=void 0;var u=i.create,m=i.inst;s=u(),m.destroy=s}i=i.next}while(i!==l)}}catch(E){Pe(n,n.return,E)}}function Va(t,n,i){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){var m=s.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,l=n;var L=i,q=E;try{q()}catch(it){Pe(l,L,it)}}}s=s.next}while(s!==u)}}catch(it){Pe(n,n.return,it)}}function K0(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Fm(n,i)}catch(s){Pe(t,t.return,s)}}}function Q0(t,n,i){i.props=ws(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){Pe(t,n,s)}}function Fi(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,u=na(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=av(u)),s=l.ref;break;case 7:if(t.stateNode===null){var m=new ri(t);g(t.child,!1,YS,m,void 0,void 0),t.stateNode=m}s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(E){Pe(t,n,E)}}function En(t,n){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(l){Pe(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Pe(t,n,l)}else i.current=null}function pc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)uv(t.stateNode,n[i])}function J0(t){for(var n=t.return;n!==null&&(Zf(n)&&uv(t.stateNode,n.stateNode),!Wf(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(Zf(n)&&WS(t.stateNode,n.stateNode),!Wf(n));)n=n.return}function Wf(t){return t.tag===5||t.tag===3||t.tag===27}function Zf(t){return t&&t.tag===7&&t.stateNode!==null}function Kf(t){var n=t.type,i=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break t;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(l){Pe(t,t.return,l)}}function Qf(t,n,i){try{var s=t.stateNode;wS(s,t.type,i,n),s[zt]=n}catch(l){Pe(t,t.return,l)}}function $0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Jf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,n,i,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=zi)),pc(t,s),we=!0;else if(l!==4&&(l===27&&(pc(t,s),s=null,Za(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for($f(t,n,i,s),t=t.sibling;t!==null;)$f(t,n,i,s),t=t.sibling}function mc(t,n,i,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),pc(t,s),we=!0;else if(l!==4&&(l===27&&(pc(t,s),s=null,Za(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(mc(t,n,i,s),t=t.sibling;t!==null;)mc(t,n,i,s),t=t.sibling}function tg(t){var n=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Tn(n,s,i),n[Wt]=t,n[zt]=i}catch(u){Pe(t,t.return,u)}}var gc=!1,ni=null;function eg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(gc=!0)}var Hi=null;function ng(){var t=Hi;return Hi=null,t}var kn=0;function xr(t,n,i,s,l){return kn=0,ig(t.child,n,i,s,l)}function ig(t,n,i,s,l){for(var u=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(s!==null){var E=zh(m);s.push(E),E.view&&(u=!0)}else u||zh(m).view&&(u=!0);gc=!0,nv(m,kn===0?n:n+"_"+kn,i),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||ig(t.child,n,i,s,l)&&(u=!0));t=t.sibling}return u}function Gi(t,n){for(;t!==null;)t.tag===5?iv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Gi(t.child,n)),t=t.sibling}function vc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(vc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var i=n.name;n=ia(n.default,n.share),n!=="none"&&(xr(t,i,n,null,!1)||Gi(t.child,!1))}t=t.sibling}}function th(t,n){if(t.tag===30){var i=t.stateNode,s=t.memoizedProps,l=na(s,i),u=ia(s.default,i.paired?s.share:s.enter);u!=="none"?xr(t,l,u,null,!1)?(vc(t),i.paired||n||Cr(t,s.onEnter)):Gi(t.child,!1):vc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)th(t,n),t=t.sibling;else vc(t)}function eh(t){if(ni!==null&&ni.size!==0){var n=ni;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,s=i.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var u=ia(i.default,i.share);if(u!=="none"&&(xr(t,s,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,Cr(t,i.onShare)):Gi(t.child,!1)),n.delete(s),n.size===0)break}}}eh(t)}t=t.sibling}}}function nh(t){if(t.tag===30){var n=t.memoizedProps,i=na(n,t.stateNode),s=ni!==null?ni.get(i):void 0,l=ia(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(xr(t,i,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,ni.delete(i),Cr(t,n.onShare)):Cr(t,n.onExit):Gi(t.child,!1)),ni!==null&&eh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)nh(t),t=t.sibling;else ni!==null&&eh(t)}function ag(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=na(n,t.stateNode);n=ia(n.default,n.update),t.flags&=-5,n!=="none"&&xr(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&ag(t);t=t.sibling}}function ih(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Gi(t.child,!1))}ih(t)}t=t.sibling}}function _c(t){if(t.tag===30)t.stateNode.paired=null,Gi(t.child,!1),ih(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_c(t),t=t.sibling;else ih(t)}function sg(t){for(t=t.child;t!==null;)t.tag===30?Gi(t.child,!1):(t.subtreeFlags&33554432)!==0&&sg(t),t=t.sibling}function ah(t,n,i,s,l,u,m){for(var E=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(u!==null&&kn<u.length){var q=u[kn],it=zh(L);(q.view||it.view)&&(E=!0);var ht;if(ht=(t.flags&4)===0)if(it.clip)ht=!0;else{ht=q.rect;var V=it.rect;ht=ht.y!==V.y||ht.x!==V.x||ht.height!==V.height||ht.width!==V.width}ht&&(t.flags|=4),it.abs?it=!q.abs:(q=q.rect,it=it.rect,it=q.height!==it.height||q.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&nv(L,kn===0?i:i+"_"+kn,l),E&&(t.flags&4)!==0||(Hi===null&&(Hi=[]),Hi.push(L,kn===0?s:s+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?t.flags|=n.flags&32:ah(t,n.child,i,s,l,u,m)&&(E=!0));n=n.sibling}return E}function rg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,s=t.stateNode,l=na(i,s),u=ia(i.default,i.update),m;m=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;kn=0,l=ah(s,E,l,l,u,m,!1),(t.flags&4)!==0&&l&&Cr(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&rg(t);t=t.sibling}}var vn=!1,Ue=!1,Vi=!1,sh=!1,og=typeof WeakSet=="function"?WeakSet:Set,_n=null,ki=!1,qo=!1,xc=!1,rh=!1;function aS(t,n,i){if(t=t.containerInfo,Nh=Br,t=fm(t),qu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,L=-1,q=-1,it=0,ht=0,V=t,$=null;e:for(;;){for(var Ct;V!==s||u!==0&&V.nodeType!==3||(L=E+u),V!==m||l!==0&&V.nodeType!==3||(q=E+l),V.nodeType===3&&(E+=V.nodeValue.length),(Ct=V.firstChild)!==null;)$=V,V=Ct;for(;;){if(V===t)break e;if($===s&&++it===u&&(L=E),$===m&&++ht===l&&(q=E),(Ct=V.nextSibling)!==null)break;V=$,$=V.parentNode}V=Ct}s=L===-1||q===-1?null:{start:L,end:q}}else s=null}s=s||{start:0,end:0}}else s=null;for(Uh={focusedElem:t,selectionRange:s},Br=!1,i=(i&335544064)===i,_n=n,n=i?9270:1024;_n!==null;){if(t=_n,i&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)i&&nh(s[u]);if(t.alternate===null&&(t.flags&2)!==0)i&&eg(t),yc(i);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&i&&nh(s),yc(i);continue}else if(s!==null&&s.memoizedState!==null){i&&eg(t),yc(i);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,_n=s):(i&&ag(t),yc(i))}}ni=null}function yc(t){for(;_n!==null;){var n=_n,i=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){i=void 0,l=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var m=ws(n.type,l);i=u.getSnapshotBeforeUpdate(m,s),u.__reactInternalSnapshotBeforeUpdate=i}catch(E){Pe(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,i=s.nodeType,i===9)Fh(s);else if(i===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Fh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&s!==null&&(i=na(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=ia(l.default,l.update),l!=="none"&&xr(s,i,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,_n=s;break}_n=n.return}}function lg(t,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(t,i),s&4&&ko(5,i);break;case 1:if(Xi(t,i),s&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(m){Pe(i,i.return,m)}else{var l=ws(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Pe(i,i.return,m)}}s&64&&K0(i),s&512&&Fi(i,i.return);break;case 3:if(Xi(t,i),s&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Fm(t,n)}catch(m){Pe(i,i.return,m)}}break;case 27:n===null&&s&4&&tg(i);case 26:case 5:Xi(t,i),n===null&&s&4&&Kf(i),s&512&&Fi(i,i.return);break;case 12:Xi(t,i);break;case 31:Xi(t,i),s&4&&hg(t,i);break;case 13:Xi(t,i),s&4&&dg(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=gS.bind(null,i),QS(t,i))));break;case 22:if(s=i.memoizedState!==null||vn,!s){var u=n!==null&&n.memoizedState!==null||Ue;n=vn,l=Ue,vn=s,(Ue=u)&&!l?(s=2,(i.subtreeFlags&8772)!==0&&(s|=1),Ai(t,i,s)):Xi(t,i),vn=n,Ue=l}break;case 30:Xi(t,i),s&512&&Fi(i,i.return);break;case 7:s&512&&Fi(i,i.return);default:Xi(t,i)}}function oh(t,n){for(t=t.child;t!==null;)cg(t,n),t=t.sibling}function cg(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var s=i.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,m=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(L){Pe(t,t.return,L)}lh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,we=!0}catch(L){Pe(t,t.return,L)}break;case 18:try{var E=t.stateNode;n?ev(E,!0):ev(t.stateNode,!1)}catch(L){Pe(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&oh(t,n);break;default:oh(t,n)}}function lh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,s=n;switch(i.tag){case 4:cg(i,s);break t;case 22:i.memoizedState===null&&lh(i,s);break t;default:lh(i,s)}}t=t.sibling}}function ug(t){var n=t.alternate;n!==null&&(t.alternate=null,ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&be(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,Xn=!1;function Ti(t,n,i){for(i=i.child;i!==null;)fg(t,n,i),i=i.sibling}function fg(t,n,i){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Te,i)}catch{}switch(i.tag){case 26:Ue||En(i,n),Ti(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ue&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ue||En(i,n),Xo(i);var s=We,l=Xn;Za(i.type)&&(We=i.stateNode,Xn=!1),Ti(t,n,i),mv(i.stateNode,i.type,i.memoizedProps),We=s,Xn=l;break;case 5:Ue||En(i,n),Xo(i);case 6:if(i.tag===6&&Xo(i),s=We,l=Xn,We=null,Ti(t,n,i),We=s,Xn=l,We!==null)if(Xn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(i.stateNode),we=!0}catch(u){Pe(i,n,u)}else try{We.removeChild(i.stateNode),we=!0}catch(u){Pe(i,n,u)}break;case 18:We!==null&&(Xn?(t=We,tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ir(t)):tv(We,i.stateNode));break;case 4:s=We,l=Xn,We=i.stateNode.containerInfo,Xn=!0,Ti(t,n,i),We=s,Xn=l;break;case 0:case 11:case 14:case 15:Va(2,i,n),Ue||Va(4,i,n),Ti(t,n,i);break;case 1:Ue||(En(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&Q0(i,n,s)),Ti(t,n,i);break;case 21:Ti(t,n,i);break;case 22:Ue=(s=Ue)||i.memoizedState!==null,Ti(t,n,i),Ue=s;break;case 30:En(i,n),Ti(t,n,i);break;case 7:Ue||En(i,n),Ti(t,n,i);break;default:Ti(t,n,i)}}function hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ir(t)}catch(i){Pe(n,n.return,i)}}}function dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ir(t)}catch(i){Pe(n,n.return,i)}}function sS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new og),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new og),n;default:throw Error(r(435,t.tag))}}function Sc(t,n){var i=sS(t);n.forEach(function(s){if(!i.has(s)){i.add(s);var l=vS.bind(null,t,s);s.then(l,l)}})}function Bn(t,n,i){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],m=t,E=n,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(Za(L.type)){We=L.stateNode,Xn=!1;break t}break;case 5:We=L.stateNode,Xn=!1;break t;case 3:case 4:We=L.stateNode.containerInfo,Xn=!0;break t}L=L.return}if(We===null)throw Error(r(160));fg(m,E,u),We=null,Xn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pg(n,t,i),n=n.sibling}var bi=null;function pg(t,n,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var m=s[u];m.ref.impl=m.nextImpl}Bn(n,t,i),In(t),l&4&&(Va(3,t,t.return),ko(3,t),Va(5,t,t.return));break;case 1:Bn(n,t,i),In(t),l&512&&(Ue||s===null||En(s,s.return)),l&64&&vn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(u=bi,Bn(n,t,i),In(t),l&512&&(Ue||s===null||En(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,i=t.memoizedState,s===null)if(i===null)if(t.stateNode===null)if(vn)t.stateNode=Qg(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=u.ownerDocument||u;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Xt]||s[Wt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Tn(s,n,i),s[Wt]=t,re(s),n=s;break t;case"link":if(u=Sv("link","href",l).get(n+(i.href||""))){for(m=0;m<u.length;m++)if(s=u[m],s.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&s.getAttribute("rel")===(i.rel==null?null:i.rel)&&s.getAttribute("title")===(i.title==null?null:i.title)&&s.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(m,1);break e}}s=l.createElement(n),Tn(s,n,i),l.head.appendChild(s);break;case"meta":if(u=Sv("meta","content",l).get(n+(i.content||""))){for(m=0;m<u.length;m++)if(s=u[m],s.getAttribute("content")===(i.content==null?null:""+i.content)&&s.getAttribute("name")===(i.name==null?null:i.name)&&s.getAttribute("property")===(i.property==null?null:i.property)&&s.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&s.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(m,1);break e}}s=l.createElement(n),Tn(s,n,i),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[Wt]=t,re(s),n=s}t.stateNode=n}else vn||jh(u,t.type,t.stateNode);else t.stateNode=yv(u,i,t.memoizedProps);else l!==i?(l===null?(n=s.stateNode,n===null||Ue||n.parentNode.removeChild(n)):l.count--,i===null?vn||jh(u,t.type,t.stateNode):yv(u,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,s.memoizedProps);break;case 27:Bn(n,t,i),In(t),l&512&&(Ue||s===null||En(s,s.return)),s!==null&&l&4&&Qf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=Vi,Vi=!1,Bn(n,t,i),Vi=u,In(t),l&512&&(Ue||s===null||En(s,s.return)),t.flags&32){n=t.stateNode;try{er(n,""),we=!0}catch(it){Pe(t,t.return,it)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Qf(t,n,s!==null?s.memoizedProps:n)),l&1024&&(sh=!0);break;case 6:if(Bn(n,t,i),In(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,we=!0}catch(it){Pe(t,t.return,it)}}break;case 3:if(we=!1,zc=null,u=bi,bi=tl(n.containerInfo),Bn(n,t,i),bi=u,In(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ir(n.containerInfo)}catch(it){Pe(t,t.return,it)}sh&&(sh=!1,mg(t)),we=!1;break;case 4:l=Vi,Vi=vn,s=Pp(),u=bi,bi=tl(t.stateNode.containerInfo),Bn(n,t,i),In(t),bi=u,we&&qo&&(xc=!0),we=s,Vi=l;break;case 12:Bn(n,t,i),In(t);break;case 31:Bn(n,t,i),In(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Sc(t,n)));break;case 13:Bn(n,t,i),In(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Tc=H()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Sc(t,n)));break;case 22:u=t.memoizedState!==null,m=s!==null&&s.memoizedState!==null;var E=vn,L=Ue,q=Vi;vn=E||u,Vi=q||u,Ue=L||m,Bn(n,t,i),Ue=L,Vi=q,vn=E,In(t),l&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||m||vn||Ue||(n=m||Ue,i=vn,s=Ue,vn=u||vn,Ue=n,ka(t,2),vn=i,Ue=s),!u&&Vi||oh(t,u)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Sc(t,i))));break;case 19:Bn(n,t,i),In(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Sc(t,n)));break;case 30:l&512&&(Ue||s===null||En(s,s.return)),l=Pp(),u=qo,m=(i&335544064)===i,E=t.memoizedProps,qo=m&&ia(E.default,E.update)!=="none",Bn(n,t,i),In(t),m&&s!==null&&we&&(t.flags|=4),qo=u,we=l;break;case 21:break;case 7:l&512&&(Ue||s===null||En(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Bn(n,t,i),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var i,s=t.return;s!==null;){if($0(s)){i=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(Zf(l)){var u=l.stateNode;s===null?s=[u]:s.push(u)}if(Wf(l))break;l=l.return}var m=s;if(i==null)throw Error(r(160));switch(i.tag){case 27:var E=i.stateNode,L=Jf(t);mc(t,L,E,m);break;case 5:var q=i.stateNode;i.flags&32&&(er(q,""),i.flags&=-33);var it=Jf(t);mc(t,it,q,m);break;case 3:case 4:var ht=i.stateNode.containerInfo,V=Jf(t);$f(t,V,ht,m);break;default:throw Error(r(161))}}catch($){Pe(t,t.return,$)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;mg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Br=!0,n.reset(),Br=!1),t=t.sibling}}function yr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)gg(n,t),n=n.sibling;else rg(n)}function gg(t,n){var i=t.alternate;if(i===null)th(t,!1);else switch(t.tag){case 3:if(rh=ki=!1,ng(),yr(n,t),!ki&&!xc){if(t=Hi,t!==null)for(var s=0;s<t.length;s+=3){i=t[s];var l=t[s+1];iv(i,t[s+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),rh=!0}Hi=null;break;case 5:yr(n,t);break;case 4:s=ki,ki=!1,yr(n,t),ki&&(xc=!0),ki=s;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?th(t,!1):yr(n,t));break;case 30:s=ki,l=ng(),ki=!1,yr(n,t),ki&&(t.flags|=4);var u=t.memoizedProps,m=t.stateNode;n=na(u,m),m=na(i.memoizedProps,m);var E=ia(u.default,u.update);E==="none"?n=!1:(u=i.memoizedState,i.memoizedState=null,i=t.child,kn=0,n=ah(t,i,n,m,E,u,!0),kn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cr(t,t.memoizedProps.onUpdate),Hi=l):l!==null&&(l.push.apply(l,Hi),Hi=l),ki=(t.flags&32)!==0?!0:s;break;default:yr(n,t)}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)lg(t,n.alternate,n),n=n.sibling}function ka(t,n){for(t=t.child;t!==null;){var i=t,s=n;switch(i.tag){case 0:case 11:case 14:case 15:Va(4,i,i.return),ka(i,s);break;case 1:En(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&Q0(i,i.return,l),ka(i,s);break;case 27:(s&2)!==0&&mv(i.stateNode,i.type,i.memoizedProps);case 5:En(i,i.return),i.tag!==5&&i.tag!==27||Xo(i),ka(i,s);break;case 6:Xo(i);break;case 26:En(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ue||l.parentNode.removeChild(l),ka(i,s);break;case 22:i.memoizedState===null&&ka(i,s);break;case 30:En(i,i.return),ka(i,s);break;case 7:En(i,i.return);default:ka(i,s)}t=t.sibling}}function Ai(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var s=n.alternate,l=t,u=n,m=u.flags,E=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:Ai(l,u,i),ko(4,u);break;case 1:if(Ai(l,u,i),s=u,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(it){Pe(s,s.return,it)}if(s=u,l=s.updateQueue,l!==null){var L=s.stateNode;try{var q=l.shared.hiddenCallbacks;if(q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<q.length;l++)Im(q[l],L)}catch(it){Pe(s,s.return,it)}}E&&m&64&&K0(u),Fi(u,u.return);break;case 27:(i&2)!==0&&tg(u);case 5:u.tag!==5&&u.tag!==27||J0(u),Ai(l,u,i),E&&s===null&&m&4&&Kf(u),Fi(u,u.return);break;case 6:J0(u);break;case 26:L=u.stateNode,u.memoizedState!==null||L===null||vn||jh(tl(L.ownerDocument),u.type,L),Ai(l,u,i),E&&s===null&&m&4&&Kf(u),Fi(u,u.return);break;case 12:Ai(l,u,i);break;case 31:Ai(l,u,i),E&&m&4&&hg(l,u);break;case 13:Ai(l,u,i),E&&m&4&&dg(l,u);break;case 22:u.memoizedState===null&&Ai(l,u,i),Fi(u,u.return);break;case 30:Ai(l,u,i),Fi(u,u.return);break;case 7:Fi(u,u.return);default:Ai(l,u,i)}n=n.sibling}}function ch(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Do(i))}function uh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Do(t))}function vi(t,n,i,s){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)vg(t,n,i,s),n=n.sibling;else l&&sg(n)}function vg(t,n,i,s){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&_c(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,i,s),u&2048&&ko(9,n);break;case 1:vi(t,n,i,s);break;case 3:vi(t,n,i,s),l&&rh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Do(u)));break;case 12:if(u&2048){vi(t,n,i,s),u=n.stateNode;try{var m=n.memoizedProps,E=m.id,L=m.onPostCommit;typeof L=="function"&&L(E,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(q){Pe(n,n.return,q)}}else vi(t,n,i,s);break;case 31:vi(t,n,i,s);break;case 13:vi(t,n,i,s);break;case 23:break;case 22:m=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&_c(E),m._visibility&2?vi(t,n,i,s):jo(t,n)):(l&&E!==null&&E.memoizedState!==null&&_c(n),m._visibility&2?vi(t,n,i,s):(m._visibility|=2,Sr(t,n,i,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&ch(E,n);break;case 24:vi(t,n,i,s),u&2048&&uh(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Gi(u.child,!0),Gi(n.child,!0))),vi(t,n,i,s);break;default:vi(t,n,i,s)}}function Sr(t,n,i,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,m=n,E=i,L=s,q=m.flags;switch(m.tag){case 0:case 11:case 15:Sr(u,m,E,L,l),ko(8,m);break;case 23:break;case 22:var it=m.stateNode;m.memoizedState!==null?it._visibility&2?Sr(u,m,E,L,l):jo(u,m):(it._visibility|=2,Sr(u,m,E,L,l)),l&&q&2048&&ch(m.alternate,m);break;case 24:Sr(u,m,E,L,l),l&&q&2048&&uh(m.alternate,m);break;default:Sr(u,m,E,L,l)}n=n.sibling}}function jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,s=n,l=s.flags;switch(s.tag){case 22:jo(i,s),l&2048&&ch(s.alternate,s);break;case 24:jo(i,s),l&2048&&uh(s.alternate,s);break;default:jo(i,s)}n=n.sibling}}var Ds=8192;function Ns(t,n,i){if(t.subtreeFlags&Ds)for(t=t.child;t!==null;)_g(t,n,i),t=t.sibling}function _g(t,n,i){switch(t.tag){case 26:Ns(t,n,i),t.flags&Ds&&(t.memoizedState!==null?fM(i,bi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&bv(i,t)));break;case 5:Ns(t,n,i),t.flags&Ds&&(t=t.stateNode,(n&335544128)===n&&bv(i,t));break;case 3:case 4:var s=bi;bi=tl(t.stateNode.containerInfo),Ns(t,n,i),bi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Ds,Ds=16777216,Ns(t,n,i),Ds=s):Ns(t,n,i));break;case 30:if((t.flags&Ds)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,ni===null&&(ni=new Map),ni.set(s,l)}Ns(t,n,i);break;default:Ns(t,n,i)}}function xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];_n=s,Sg(s,t)}xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Mc(t)):Yo(t);break;default:Yo(t)}}function Mc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];_n=s,Sg(s,t)}xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Mc(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Mc(n));break;default:Mc(n)}t=t.sibling}}function Sg(t,n){for(;_n!==null;){var i=_n;switch(i.tag){case 0:case 11:case 15:Va(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Do(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,_n=s;else t:for(i=t;_n!==null;){s=_n;var l=s.sibling,u=s.return;if(ug(s),s===i){_n=null;break t}if(l!==null){l.return=u,_n=l;break t}_n=u}}}var rS={getCacheForType:function(t){var n=yn(tn),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return yn(tn).controller.signal}},oS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,ke=null,_e=null,Se=0,Oe=0,ii=null,Xa=!1,Mr=!1,fh=!1,ha=0,Qe=0,qa=0,Us=0,Ec=0,ai=0,Er=0,Wo=null,qn=null,hh=!1,Tc=0,Mg=0,bc=1/0,Ac=null,ja=null,Ze=0,Ci=null,Ls=null,qi=0,dh=0,ph=null,Eg=null,Tr=null,br=null,Ar=null,Zo=0,Cc=null;function si(){return(Ne&2)!==0&&Se!==0?Se&-Se:Tt.T!==null?Th():qt()}function Tg(){if(ai===0)if((Se&536870912)===0||pe){var t=ps;ps<<=1,(ps&3932160)===0&&(ps=262144),ai=t}else ai=536870912;return t=Sn.current,t!==null&&(t.flags|=32),ai}function Cr(t,n){if(n!=null){var i=t.stateNode,s=i.ref;s===null&&(s=i.ref=av(na(t.memoizedProps,i))),br===null&&(br=[]),br.push(n.bind(null,s))}}function jn(t,n,i){(t===ke&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Rr(t,0),Ya(t,Se,ai,!1)),C(t,i),((Ne&2)===0||t!==ke)&&(t===ke&&((Ne&2)===0&&(Us|=i),Qe===4&&Ya(t,Se,ai,!1)),ji(t))}function bg(t,n,i){if((Ne&6)!==0)throw Error(r(327));var s=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Ca(t,n),l=s?uS(t,n):gh(t,n,!0),u=s;do{if(l===0){Mr&&!s&&Ya(t,n,0,!1);break}else{if(i=t.current.alternate,u&&!lS(i)){l=gh(t,n,!1),u=!1;continue}if(l===2){if(u=n,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;t:{var E=t;l=Wo;var L=E.current.memoizedState.isDehydrated;if(L&&(Rr(E,m).flags|=256),m=gh(E,m,!1),m!==2&&m!==6){if(fh&&!L){E.errorRecoveryDisabledLanes|=u,Us|=u,l=4;break t}u=qn,qn=l,u!==null&&(qn===null?qn=u:qn.push.apply(qn,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){Rr(t,0),Ya(t,n,0,!0);break}t:{switch(s=t,u=l,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(s,n,ai,!Xa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Tc+300-H(),10<l)){if(Ya(s,n,ai,!Xa),$i(s,0,!0)!==0)break t;qi=n,s.timeoutHandle=Ph(Ag.bind(null,s,i,qn,Ac,hh,n,ai,Us,Er,Xa,u,"Throttled",-0,0),l);break t}Ag(s,i,qn,Ac,hh,n,ai,Us,Er,Xa,u,null,-0,0)}}break}while(!0);ji(t)}function Ag(t,n,i,s,l,u,m,E,L,q,it,ht,V,$){t.timeoutHandle=-1;var Ct=n.subtreeFlags,kt=(u&335544064)===u;if(ht=null,(kt||Ct&8192||(Ct&16785408)===16785408)&&(ht={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},ni=null,_g(n,u,ht),kt&&(Ct=ht,kt=t.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Ct.count++,Ct.waitingForViewTransition=!0,Ct=il.bind(Ct),kt.finished.then(Ct,Ct))),Ct=(u&62914560)===u?Tc-H():(u&4194048)===u?Mg-H():0,Ct=hM(ht,Ct),Ct!==null)){qi=u,t.cancelPendingCommit=Ct(Og.bind(null,t,n,u,i,s,l,m,E,L,q,it,ht,null,V,$)),Ya(t,u,m,!q);return}Og(t,n,u,i,s,l,m,E,L,q,it,ht)}function lS(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var l=i[s],u=l.getSnapshot;l=l.value;try{if(!ti(u(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,i,s){n=vo(t,n),n&=~Ec,n&=~Us,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var u=31-An(l),m=1<<u;s[u]=-1,l&=~m}i!==0&&ot(t,i,n)}function Rc(){return(Ne&6)===0?(Ko(0),!1):!0}function mh(){if(_e!==null){if(Oe===0)var t=_e.return;else t=_e,ra=ys=null,Ef(t),pr=null,Lo=0,t=_e;for(;t!==null;)Z0(t.alternate,t),t=t.return;_e=null}}function Rr(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,US(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),qi=0,mh(),ke=t,_e=i=aa(t.current,null),Se=n,Oe=0,ii=null,Xa=!1,Mr=Ca(t,n),fh=!1,Er=ai=Ec=Us=qa=Qe=0,qn=Wo=null,hh=!1,ha=vo(t,n),zl(),i}function Cg(t,n){le=null,Tt.H=oc,n===dr||n===Yl?(n=Om(),Oe=3):n===uf?(n=Om(),Oe=4):Oe=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,_e===null&&(Qe=1,lc(t,di(n,t.current)))}function Rg(){var t=Sn.current;return t===null?!0:(Se&4194048)===Se?wn===null:(Se&62914560)===Se||(Se&536870912)!==0?t===wn:!1}function wg(){var t=Tt.H;return Tt.H=oc,t===null?oc:t}function Dg(){var t=Tt.A;return Tt.A=rS,t}function wc(){Qe=4,Xa||(Se&4194048)!==Se&&Sn.current!==null||(Mr=!0),(qa&134217727)===0&&(Us&134217727)===0||ke===null||Ya(ke,Se,ai,!1)}function gh(t,n,i){var s=Ne;Ne|=2;var l=wg(),u=Dg();(ke!==t||Se!==n)&&(Ac=null,Rr(t,n)),n=!1;var m=Qe;t:do try{if(Oe!==0&&_e!==null){var E=_e,L=ii;switch(Oe){case 8:mh(),m=6;break t;case 3:case 2:case 9:case 6:Sn.current===null&&(n=!0);var q=Oe;if(Oe=0,ii=null,wr(t,E,L,q),i&&Mr){m=0;break t}break;default:q=Oe,Oe=0,ii=null,wr(t,E,L,q)}}cS(),m=Qe;break}catch(it){Cg(t,it)}while(!0);return n&&t.shellSuspendCounter++,ra=ys=null,Ne=s,Tt.H=l,Tt.A=u,_e===null&&(ke=null,Se=0,zl()),m}function cS(){for(;_e!==null;)Ng(_e)}function uS(t,n){var i=Ne;Ne|=2;var s=wg(),l=Dg();ke!==t||Se!==n?(Ac=null,bc=H()+500,Rr(t,n)):Mr=Ca(t,n);t:do try{if(Oe!==0&&_e!==null){n=_e;var u=ii;e:switch(Oe){case 1:Oe=0,ii=null,wr(t,n,u,1);break;case 2:case 9:if(Um(u)){Oe=0,ii=null,Ug(n);break}n=function(){Oe!==2&&Oe!==9||ke!==t||(Oe=7),ji(t)},u.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Um(u)?(Oe=0,ii=null,Ug(n)):(Oe=0,ii=null,wr(t,n,u,7));break;case 5:var m=null;switch(_e.tag){case 26:m=_e.memoizedState;case 5:case 27:var E=_e;if(m?Ev(m):E.stateNode.complete){Oe=0,ii=null;var L=E.sibling;if(L!==null)_e=L;else{var q=E.return;q!==null?(_e=q,Dc(q)):_e=null}break e}}Oe=0,ii=null,wr(t,n,u,5);break;case 6:Oe=0,ii=null,wr(t,n,u,6);break;case 8:mh(),Qe=6;break t;default:throw Error(r(462))}}fS();break}catch(it){Cg(t,it)}while(!0);return ra=ys=null,Tt.H=s,Tt.A=l,Ne=i,_e!==null?0:(ke=null,Se=0,zl(),Qe)}function fS(){for(;_e!==null&&!oe();)Ng(_e)}function Ng(t){var n=Y0(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?Dc(t):_e=n}function Ug(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=H0(i,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=H0(i,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Ef(n);var s=n;s===gn&&(pe?(Vl(s),s.tag===5&&s.stateNode!=null&&(Xe=s.stateNode)):(Vl(s),pe=!0));default:Z0(i,n),n=_e=Sm(n,ha),n=Y0(i,n,ha)}t.memoizedProps=t.pendingProps,n===null?Dc(t):_e=n}function wr(t,n,i,s){ra=ys=null,Ef(n),pr=null,Lo=0;var l=n.return;try{if(Jy(t,l,n,i,Se)){Qe=1,lc(t,di(i,t.current)),_e=null;return}}catch(u){if(l!==null)throw _e=l,u;Qe=1,lc(t,di(i,t.current)),_e=null;return}n.flags&32768?(pe||s===1?t=!0:Mr||(Se&536870912)!==0?t=!1:(Xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Sn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Lg(n,t)):Dc(n)}function Dc(t){var n=t;do{if((n.flags&32768)!==0){Lg(n,Xa);return}t=n.return;var i=nS(n.alternate,n,ha);if(i!==null){_e=i;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);Qe===0&&(Qe=5)}function Lg(t,n){do{var i=iS(t.alternate,t);if(i!==null){i.flags&=32767,_e=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=i}while(t!==null);Qe=6,_e=null}function Og(t,n,i,s,l,u,m,E,L,q,it,ht){t.cancelPendingCommit=null;do Nc();while(Ze!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===ke&&(_e=ke=null,Se=0),Ls=n,Ci=t,qi=i,ph=l,Eg=s,hS(t,n,i,m,E,L,ht)}}function hS(t,n,i,s,l,u,m){var E=n.lanes|n.childLanes;if(dh=E,E|=Ku,W(t,i,E,s,l,u),br=null,(i&335544064)===i?(Ar=Hy(t),s=10262):(Ar=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,_S(Lt,function(){return yh(),null})):(t.callbackNode=null,t.callbackPriority=0),gc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Tt.T,Tt.T=null,l=At.p,At.p=2,u=Ne,Ne|=4;try{aS(t,n,i)}finally{Ne=u,At.p=l,Tt.T=s}}Ze=1,gc?Tr=IS(m,t.containerInfo,Ar,vh,_h,pS,xh,yh,dS):(vh(),_h(),xh())}function dS(t){if(Ze!==0){var n=Ci.onRecoverableError;n(t,{componentStack:null})}}function pS(){Ze===3&&(Ze=0,gg(Ls,Ci),Ze=4)}function vh(){if(Ze===1){Ze=0;var t=Ci,n=Ls,i=qi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Tt.T,Tt.T=null;var l=At.p;At.p=2;var u=Ne;Ne|=4;try{qo=xc=!1,pg(n,t,i),i=Uh;var m=fm(t.containerInfo),E=i.focusedElem,L=i.selectionRange;if(m!==E&&E&&E.ownerDocument&&um(E.ownerDocument.documentElement,E)){if(L!==null&&qu(E)){var q=L.start,it=L.end;if(it===void 0&&(it=q),"selectionStart"in E)E.selectionStart=q,E.selectionEnd=Math.min(it,E.value.length);else{var ht=E.ownerDocument||document,V=ht&&ht.defaultView||window;if(V.getSelection){var $=V.getSelection(),Ct=E.textContent.length,kt=Math.min(L.start,Ct),ce=L.end===void 0?kt:Math.min(L.end,Ct);!$.extend&&kt>ce&&(m=ce,ce=kt,kt=m);var X=cm(E,kt),I=cm(E,ce);if(X&&I&&($.rangeCount!==1||$.anchorNode!==X.node||$.anchorOffset!==X.offset||$.focusNode!==I.node||$.focusOffset!==I.offset)){var J=ht.createRange();J.setStart(X.node,X.offset),$.removeAllRanges(),kt>ce?($.addRange(J),$.extend(I.node,I.offset)):(J.setEnd(I.node,I.offset),$.addRange(J))}}}}for(ht=[],$=E;$=$.parentNode;)$.nodeType===1&&ht.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ht.length;E++){var ft=ht[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Br=!!Nh,Uh=Nh=null}finally{Ne=u,At.p=l,Tt.T=s}}t.current=n,Ze=2}}function _h(){if(Ze===2){Ze=0;var t=Ci,n=Ls,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Tt.T,Tt.T=null;var s=At.p;At.p=2;var l=Ne;Ne|=4;try{lg(t,n.alternate,n)}finally{Ne=l,At.p=s,Tt.T=i}}Ze=3}}function xh(){if(Ze===4||Ze===3){Ze=0;var t=Tr;Tr=null,Be();var n=Ci,i=Ls,s=qi,l=Eg,u=(s&335544064)===s?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?Ze=5:(Ze=0,Ls=Ci=null,Pg(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(ja=null),Ot(s),i=i.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Te,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Tt.T,u=At.p,At.p=2,Tt.T=null;try{for(var m=n.onRecoverableError,E=0;E<l.length;E++){var L=l[E];m(L.value,{componentStack:L.stack})}}finally{Tt.T=i,At.p=u}}if(l=br,m=Ar,Ar=null,l!==null&&(br=null,m===null&&(m=[]),t!==null))for(L=0;L<l.length;L++)i=(0,l[L])(m),i!==void 0&&t.finished.finally(i);(qi&3)!==0&&Nc(),ji(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Cc?Zo++:(Zo=0,Cc=n):(Zo=0,Cc=null),Ko(0)}}function Pg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Do(n)))}function Nc(){return Tr!==null&&(Tr.skipTransition(),Tr=null),vh(),_h(),xh(),yh()}function yh(){if(Ze!==5)return!1;var t=Ci,n=dh;dh=0;var i=Ot(qi),s=Tt.T,l=At.p;try{At.p=32>i?32:i,Tt.T=null,i=ph,ph=null;var u=Ci,m=qi;if(Ze=0,Ls=Ci=null,qi=0,(Ne&6)!==0)throw Error(r(331));var E=Ne;if(Ne|=4,yg(u.current),vg(u,u.current,m,i),Ne=E,Ko(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Te,u)}catch{}return!0}finally{At.p=l,Tt.T=s,Pg(t,n)}}function zg(t,n,i){n=di(i,n),n=Bf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(C(t,2),ji(t))}function Pe(t,n,i){if(t.tag===3)zg(t,t,i);else for(;n!==null;){if(n.tag===3){zg(n,t,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ja===null||!ja.has(s))){t=di(i,t),i=U0(2),s=Ia(n,i,2),s!==null&&(L0(i,s,n,t),C(s,2),ji(s));break}}n=n.return}}function Sh(t,n,i){var s=t.pingCache;if(s===null){s=t.pingCache=new oS;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(i)||(fh=!0,l.add(i),t=mS.bind(null,t,n,i),n.then(t,t))}function mS(t,n,i){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,ke===t&&(Se&i)===i&&((Qe===4||Qe===3&&(Se&62914560)===Se&&300>H()-Tc)&&(Ne&2)===0?Rr(t,0):Ec|=i,Er===Se&&(Er=0)),ji(t)}function Bg(t,n){n===0&&(n=Tl()),t=vs(t,n),t!==null&&(C(t,n),ji(t))}function gS(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Bg(t,i)}function vS(t,n){var i=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Bg(t,i)}function _S(t,n){return Ht(t,n)}var Dr=null,Nr=null,Mh=!1,Uc=!1,Eh=!1,Wa=0;function ji(t){t!==Nr&&t.next===null&&(Nr===null?Dr=Nr=t:Nr=Nr.next=t),Uc=!0,Mh||(Mh=!0,yS())}function Ko(t,n){if(!Eh&&Uc){Eh=!0;do for(var i=!1,s=Dr;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var u=0;else{var m=s.suspendedLanes,E=s.pingedLanes;u=(1<<31-An(42|t)+1)-1,u&=l&~(m&~E),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,Gg(s,u))}else u=Se,u=$i(s,s===ke?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ca(s,u)||(i=!0,Gg(s,u));s=s.next}while(i);Eh=!1}}function xS(){Ig()}function Ig(){Uc=Mh=!1;var t=0;Wa!==0&&NS()&&(t=Wa);for(var n=H(),i=null,s=Dr;s!==null;){var l=s.next,u=Fg(s,n);u===0?(s.next=null,i===null?Dr=l:i.next=l,l===null&&(Nr=i)):(i=s,(t!==0||(u&3)!==0)&&(Uc=!0)),s=l}Ze!==0&&Ze!==5||Ko(t),Wa!==0&&(Wa=0)}function Fg(t,n){for(var i=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-An(u),E=1<<m,L=l[m];L===-1?((E&i)===0||(E&s)!==0)&&(l[m]=Cu(E,n)):L<=n&&(t.expiredLanes|=E),u&=~E}if(n=ke,i=Se,i=$i(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ge(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ca(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(s!==null&&ge(s),Ot(i)){case 2:case 8:i=_t;break;case 32:i=Lt;break;case 268435456:i=se;break;default:i=Lt}return s=Hg.bind(null,t),i=Ht(i,s),t.callbackPriority=n,t.callbackNode=i,n}return s!==null&&s!==null&&ge(s),t.callbackPriority=2,t.callbackNode=null,2}function Hg(t,n){if(Ze!==0&&Ze!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Nc()&&t.callbackNode!==i)return null;var s=Se;return s=$i(t,t===ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(bg(t,s,n),Fg(t,H()),t.callbackNode!=null&&t.callbackNode===i?Hg.bind(null,t):null)}function Gg(t,n){if(Nc())return null;bg(t,n,!0)}function yS(){LS(function(){(Ne&6)!==0?Ht(ct,xS):Ig()})}function Th(){if(Wa===0){var t=Es;t===0&&(t=ds,ds<<=1,(ds&261888)===0&&(ds=256)),Wa=t}return Wa}function Vg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rl(t)}function SS(t,n,i,s,l){if(n==="submit"&&i&&i.stateNode===l){var u=Vg((l[zt]||null).action),m=s.submitter;m&&(n=(n=m[zt]||null)?Vg(n.formAction):m.getAttribute("formAction"),n!==null&&(u=n,m=null));var E=new Ul("action","action",null,s,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Wa!==0){var L=new FormData(l,m);Uf(i,{pending:!0,data:L,method:l.method,action:u},null,L)}}else typeof u=="function"&&(E.preventDefault(),L=new FormData(l,m),Uf(i,{pending:!0,data:L,method:l.method,action:u},u,L))},currentTarget:l}]})}}for(var bh=0;bh<Zu.length;bh++){var Ah=Zu[bh],MS=Ah.toLowerCase(),ES=Ah[0].toUpperCase()+Ah.slice(1);Ei(MS,"on"+ES)}Ei(pm,"onAnimationEnd"),Ei(mm,"onAnimationIteration"),Ei(gm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Uy,"onTransitionRun"),Ei(Ly,"onTransitionStart"),Ei(Oy,"onTransitionCancel"),Ei(vm,"onTransitionEnd"),On("onMouseEnter",["mouseout","mouseover"]),On("onMouseLeave",["mouseout","mouseover"]),On("onPointerEnter",["pointerout","pointerover"]),On("onPointerLeave",["pointerout","pointerover"]),Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function kg(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],l=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var m=s.length-1;0<=m;m--){var E=s[m],L=E.instance,q=E.currentTarget;if(E=E.listener,L!==u&&l.isPropagationStopped())break t;u=E,l.currentTarget=q;try{u(l)}catch(it){Pl(it)}l.currentTarget=null,u=L}else for(m=0;m<s.length;m++){if(E=s[m],L=E.instance,q=E.currentTarget,E=E.listener,L!==u&&l.isPropagationStopped())break t;u=E,l.currentTarget=q;try{u(l)}catch(it){Pl(it)}l.currentTarget=null,u=L}}}}function xe(t,n){var i=n[Le];i===void 0&&(i=n[Le]=new Set);var s=t+"__bubble";i.has(s)||(Xg(n,t,2,!1),i.add(s))}function Ch(t,n,i){var s=0;n&&(s|=4),Xg(i,t,s,n)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Rh(t){if(!t[Lc]){t[Lc]=!0,Ra.forEach(function(i){i!=="selectionchange"&&(TS.has(i)||Ch(i,!1,t),Ch(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Lc]||(n[Lc]=!0,Ch("selectionchange",!1,n))}}function Xg(t,n,i,s){switch(Lv(n)){case 2:var l=gM;break;case 8:l=vM;break;default:l=Wh}i=l.bind(null,n,i,t),l=void 0,!Pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function wh(t,n,i,s,l){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var E=s.stateNode.containerInfo;if(E===l)break;if(m===4)for(m=s.return;m!==null;){var L=m.tag;if((L===3||L===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;E!==null;){if(m=ln(E),m===null)return;if(L=m.tag,L===5||L===6||L===26||L===27){s=u=m;continue t}E=E.parentNode}}s=s.return}Xp(function(){var q=u,it=Lu(i),ht=[];t:{var V=_m.get(t);if(V!==void 0){var $=Ul,Ct=t;switch(t){case"keypress":if(Dl(i)===0)break t;case"keydown":case"keyup":$=ly;break;case"focusin":Ct="focus",$=Fu;break;case"focusout":Ct="blur",$=Fu;break;case"beforeblur":case"afterblur":$=Fu;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=dy;break;case pm:case mm:case gm:$=$x;break;case vm:$=my;break;case"scroll":case"scrollend":$=Wx;break;case"wheel":$=vy;break;case"copy":case"cut":case"paste":$=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Zp;break;case"submit":$=fy;break;case"toggle":case"beforetoggle":$=xy}var kt=(n&4)!==0,ce=!kt&&(t==="scroll"||t==="scrollend"),X=kt?V!==null?V+"Capture":null:V;kt=[];for(var I=q,J;I!==null;){var ft=I;if(J=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||J===null||X===null||(ft=xo(I,X),ft!=null&&kt.push(Jo(I,ft,J))),ce)break;I=I.return}0<kt.length&&(V=new $(V,Ct,null,i,it),ht.push({event:V,listeners:kt}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",$&&i!==Uu&&(Ct=i.relatedTarget||i.fromElement)&&(ln(Ct)||Ct[de]))break t;(V||$)&&(Ct=it.window===it?it:($=it.ownerDocument)?$.defaultView||$.parentWindow:window,V?($=i.relatedTarget||i.toElement,V=q,$=$?ln($):null,$!==null&&(ce=f($),kt=$.tag,$!==ce||kt!==5&&kt!==27&&kt!==6)&&($=null)):(V=null,$=q),V!==$&&(kt=Yp,ft="onMouseLeave",X="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(kt=Zp,ft="onPointerLeave",X="onPointerEnter",I="pointer"),ce=V==null?Ct:cn(V),J=$==null?Ct:cn($),Ct=new kt(ft,I+"leave",V,i,it),Ct.target=ce,Ct.relatedTarget=J,ft=null,ln(it)===q&&(kt=new kt(X,I+"enter",$,i,it),kt.target=J,kt.relatedTarget=ce,ft=kt),ce=ft,kt=V&&$?G(V,$,bS):null,V!==null&&qg(ht,Ct,V,kt,!1),$!==null&&ce!==null&&qg(ht,ce,$,kt,!0)))}t:{if(V=q?cn(q):window,$=V.nodeName&&V.nodeName.toLowerCase(),$==="select"||$==="input"&&V.type==="file")var Ft=im;else if(em(V))if(am)Ft=wy;else{Ft=Cy;var Me=Ay}else $=V.nodeName,!$||$.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?q&&Nu(q.elementType)&&(Ft=im):Ft=Ry;if(Ft&&(Ft=Ft(t,q))){nm(ht,Ft,i,it);break t}Me&&Me(t,V,q)}switch(Me=q?cn(q):window,t){case"focusin":(em(Me)||Me.contentEditable==="true")&&(sr=Me,ju=q,Co=null);break;case"focusout":Co=ju=sr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,hm(ht,i,it);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":hm(ht,i,it)}var Zt;if(Gu)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else ar?$p(t,i)&&(te="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(te="onCompositionStart");te&&(Kp&&i.locale!=="ko"&&(ar||te!=="onCompositionStart"?te==="onCompositionEnd"&&ar&&(Zt=qp()):(wa=it,zu="value"in wa?wa.value:wa.textContent,ar=!0)),Me=Oc(q,te),0<Me.length&&(te=new Wp(te,t,null,i,it),ht.push({event:te,listeners:Me}),Zt?te.data=Zt:(Zt=tm(i),Zt!==null&&(te.data=Zt)))),(Zt=Sy?My(t,i):Ey(t,i))&&(te=Oc(q,"onBeforeInput"),0<te.length&&(Me=new Wp("onBeforeInput","beforeinput",null,i,it),ht.push({event:Me,listeners:te}),Me.data=Zt)),SS(ht,t,q,i,it)}kg(ht,n)})}function Jo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Oc(t,n){for(var i=n+"Capture",s=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=xo(t,i),l!=null&&s.unshift(Jo(t,l,u)),l=xo(t,n),l!=null&&s.push(Jo(t,l,u))),t.tag===3)return s;t=t.return}return[]}function bS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qg(t,n,i,s,l){for(var u=n._reactName,m=[];i!==null&&i!==s;){var E=i,L=E.alternate,q=E.stateNode;if(E=E.tag,L!==null&&L===s)break;E!==5&&E!==26&&E!==27||q===null||(L=q,l?(q=xo(i,u),q!=null&&m.unshift(Jo(i,q,L))):l||(q=xo(i,u),q!=null&&m.push(Jo(i,q,L)))),i=i.return}m.length!==0&&t.push({event:n,listeners:m})}var AS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(AS,`
`).replace(CS,"")}function Yg(t,n){return n=jg(n),jg(t)===n}function ze(t,n,i,s,l,u){switch(i){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||er(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&er(t,""+s);else return;break;case"className":Cl(t,"class",s);break;case"tabIndex":Cl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Cl(t,i,s);break;case"style":Vp(t,s,u);return;case"data":if(n!=="object"){Cl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Rl(s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(n!=="input"&&ze(t,n,"name",l.name,l,null),ze(t,n,"formEncType",l.formEncType,l,null),ze(t,n,"formMethod",l.formMethod,l,null),ze(t,n,"formTarget",l.formTarget,l,null)):(ze(t,n,"encType",l.encType,l,null),ze(t,n,"method",l.method,l,null),ze(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Rl(s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=zi);return;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=Rl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Al(t,"popover",s);break;case"xlinkActuate":ta(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ta(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ta(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ta(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ta(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ta(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ta(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ta(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ta(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Al(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=jx.get(i)||i,Al(t,i,s);else return}we=!0}function Dh(t,n,i,s,l,u){switch(i){case"style":Vp(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(l.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof s=="string")er(t,s);else if(typeof s=="number"||typeof s=="bigint")er(t,""+s);else return;break;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"onClick":s!=null&&(t.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ln.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),u=i.slice(2,l?i.length-7:void 0),n=t[zt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(u,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(u,s,l);break t}we=!0,i in t?t[i]=s:s===!0?t.setAttribute(i,""):Al(t,i,s)}return}we=!0}function Tn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var m=i[u];if(m!=null)switch(u){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,u,m,i,null)}}l&&ze(t,n,"srcSet",i.srcSet,i,null),s&&ze(t,n,"src",i.src,i,null);return;case"input":xe("invalid",t);var E=u=m=l=null,L=null,q=null;for(s in i)if(i.hasOwnProperty(s)){var it=i[s];if(it!=null)switch(s){case"name":l=it;break;case"type":m=it;break;case"checked":L=it;break;case"defaultChecked":q=it;break;case"value":u=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:ze(t,n,s,it,i,null)}}Ip(t,u,E,L,q,m,l,!1);return;case"select":xe("invalid",t),s=m=u=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":u=E;break;case"defaultValue":m=E;break;case"multiple":s=E;default:ze(t,n,l,E,i,null)}n=u,i=m,t.multiple=!!s,n!=null?tr(t,!!s,n,!1):i!=null&&tr(t,!!s,i,!0);return;case"textarea":xe("invalid",t),u=l=s=null;for(m in i)if(i.hasOwnProperty(m)&&(E=i[m],E!=null))switch(m){case"value":s=E;break;case"defaultValue":l=E;break;case"children":u=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:ze(t,n,m,E,i,null)}Hp(t,s,l,u);return;case"option":for(L in i)if(i.hasOwnProperty(L)&&(s=i[L],s!=null))switch(L){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ze(t,n,L,s,i,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<Qo.length;s++)xe(Qo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in i)if(i.hasOwnProperty(q)&&(s=i[q],s!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,q,s,i,null)}return;default:if(Nu(n)){for(it in i)i.hasOwnProperty(it)&&(s=i[it],s!==void 0&&Dh(t,n,it,s,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(s=i[E],s!=null&&ze(t,n,E,s,i,null))}var RS={};function wS(t,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,E=null,L=null,q=null,it=null;for($ in i){var ht=i[$];if(i.hasOwnProperty($)&&ht!=null)switch($){case"checked":break;case"value":break;case"defaultValue":L=ht;default:s.hasOwnProperty($)||ze(t,n,$,null,s,ht)}}for(var V in s){var $=s[V];if(ht=i[V],s.hasOwnProperty(V)&&($!=null||ht!=null))switch(V){case"type":$!==ht&&(we=!0),u=$;break;case"name":$!==ht&&(we=!0),l=$;break;case"checked":$!==ht&&(we=!0),q=$;break;case"defaultChecked":$!==ht&&(we=!0),it=$;break;case"value":$!==ht&&(we=!0),m=$;break;case"defaultValue":$!==ht&&(we=!0),E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:$!==ht&&ze(t,n,V,$,s,ht)}}wu(t,m,E,L,q,it,u,l);return;case"select":$=m=E=V=null;for(u in i)if(L=i[u],i.hasOwnProperty(u)&&L!=null)switch(u){case"value":break;case"multiple":$=L;default:s.hasOwnProperty(u)||ze(t,n,u,null,s,L)}for(l in s)if(u=s[l],L=i[l],s.hasOwnProperty(l)&&(u!=null||L!=null))switch(l){case"value":u!==L&&(we=!0),V=u;break;case"defaultValue":u!==L&&(we=!0),E=u;break;case"multiple":u!==L&&(we=!0),m=u;default:u!==L&&ze(t,n,l,u,s,L)}n=E,i=m,s=$,V!=null?tr(t,!!i,V,!1):!!s!=!!i&&(n!=null?tr(t,!!i,n,!0):tr(t,!!i,i?[]:"",!1));return;case"textarea":$=V=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ze(t,n,E,null,s,l)}for(m in s)if(l=s[m],u=i[m],s.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":l!==u&&(we=!0),V=l;break;case"defaultValue":l!==u&&(we=!0),$=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&ze(t,n,m,l,s,u)}Fp(t,V,$);return;case"option":for(var Ct in i)if(V=i[Ct],i.hasOwnProperty(Ct)&&V!=null&&!s.hasOwnProperty(Ct))switch(Ct){case"selected":t.selected=!1;break;default:ze(t,n,Ct,null,s,V)}for(L in s)if(V=s[L],$=i[L],s.hasOwnProperty(L)&&V!==$&&(V!=null||$!=null))switch(L){case"selected":V!==$&&(we=!0),t.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:ze(t,n,L,V,s,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in i)V=i[kt],i.hasOwnProperty(kt)&&V!=null&&!s.hasOwnProperty(kt)&&ze(t,n,kt,null,s,V);for(q in s)if(V=s[q],$=i[q],s.hasOwnProperty(q)&&V!==$&&(V!=null||$!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(r(137,n));break;default:ze(t,n,q,V,s,$)}return;default:if(Nu(n)){for(var ce in i)V=i[ce],i.hasOwnProperty(ce)&&V!==void 0&&!s.hasOwnProperty(ce)&&Dh(t,n,ce,void 0,s,V);for(it in s)V=s[it],$=i[it],!s.hasOwnProperty(it)||V===$||V===void 0&&$===void 0||Dh(t,n,it,V,s,$);return}}for(var X in i)V=i[X],i.hasOwnProperty(X)&&V!=null&&!s.hasOwnProperty(X)&&ze(t,n,X,null,s,V);for(ht in s)V=s[ht],$=i[ht],!s.hasOwnProperty(ht)||V===$||V==null&&$==null||ze(t,n,ht,V,s,$)}function Wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var l=i[s],u=l.transferSize,m=l.initiatorType,E=l.duration;if(u&&E&&Wg(m)){for(m=0,E=l.responseEnd,s+=1;s<i.length;s++){var L=i[s],q=L.startTime;if(q>E)break;var it=L.transferSize,ht=L.initiatorType;it&&Wg(ht)&&(L=L.responseEnd,m+=it*(L<E?1:(E-q)/(L-q)))}if(--s,n+=8*(u+m)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nh=null,Uh=null;function $o(t){return t.nodeType===9?t:t.ownerDocument}function Zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Qg(t,n,i,s){return i=$o(i).createElement(t),i[Wt]=s,i[zt]=n,Tn(i,t,n),re(i),i}function Lh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Oh=null;function NS(){var t=window.event;return t&&t.type==="popstate"?t===Oh?!1:(Oh=t,!0):(Oh=null,!1)}var Ph=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,$g=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ph,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(t){return Jg.resolve(null).then(t).catch(OS)}:Ph;function OS(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function tv(t,n){var i=n,s=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(s===0){t.removeChild(l),Ir(n);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")kh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,kh(i);for(var u=i.firstChild;u;){var m=u.nextSibling,E=u.nodeName;u[Xt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=m}}else i==="body"&&kh(t.ownerDocument.body);i=l}while(i);Ir(n)}function ev(t,n){var i=t;t=0;do{var s=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=s}while(i)}function nv(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function iv(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function PS(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function zh(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return PS(n,i,t)}function zS(t){return t.documentElement.clientHeight}function BS(t){this.addEventListener("load",t),this.addEventListener("error",t)}function IS(t,n,i,s,l,u,m,E,L){var q=n.nodeType===9?n:n.ownerDocument;try{var it=q.startViewTransition({update:function(){var V=q.defaultView,$=V.navigation&&V.navigation.transition,Ct=q.fonts.status;s();var kt=[];if(Ct==="loaded"&&(zS(q),q.fonts.status==="loading"&&kt.push(q.fonts.ready)),Ct=kt.length,t!==null)for(var ce=t.suspenseyImages,X=0,I=0;I<ce.length;I++){var J=ce[I];if(!J.complete){var ft=J.getBoundingClientRect();if(0<ft.bottom&&0<ft.right&&ft.top<V.innerHeight&&ft.left<V.innerWidth){if(X+=Tv(J),X>Bc){kt.length=Ct;break}J=new Promise(BS.bind(J)),kt.push(J)}}}if(0<kt.length)return V=Promise.race([Promise.all(kt),new Promise(function(Ft){return setTimeout(Ft,500)})]).then(l,l),($?Promise.allSettled([$.finished,V]):V).then(u,u);if(l(),$)return $.finished.then(u,u);u()},types:i});q.__reactViewTransition=it;var ht=[];return it.ready.then(function(){for(var V=q.documentElement.getAnimations({subtree:!0}),$=0;$<V.length;$++){var Ct=V[$],kt=Ct.effect,ce=kt.pseudoElement;if(ce!=null&&ce.startsWith("::view-transition")){ht.push(Ct),Ct=kt.getKeyframes();for(var X=ce=void 0,I=!0,J=0;J<Ct.length;J++){var ft=Ct[J],Ft=ft.width;if(ce===void 0)ce=Ft;else if(ce!==Ft){I=!1;break}if(Ft=ft.height,X===void 0)X=Ft;else if(X!==Ft){I=!1;break}delete ft.width,delete ft.height,ft.transform==="none"&&delete ft.transform}I&&ce!==void 0&&X!==void 0&&(kt.setKeyframes(Ct),I=getComputedStyle(kt.target,kt.pseudoElement),I.width!==ce||I.height!==X)&&(I=Ct[0],I.width=ce,I.height=X,I=Ct[Ct.length-1],I.width=ce,I.height=X,kt.setKeyframes(Ct))}}m()},function(V){q.__reactViewTransition===it&&(q.__reactViewTransition=null);try{if(typeof V=="object"&&V!==null)switch(V.name){case"InvalidStateError":(V.message==="View transition was skipped because document visibility state is hidden."||V.message==="Skipping view transition because document visibility state has become hidden."||V.message==="Skipping view transition because viewport size changed."||V.message==="Transition was aborted because of invalid state")&&(V=null)}V!==null&&L(V)}finally{s(),l(),m()}}),it.finished.finally(function(){for(var V=0;V<ht.length;V++)ht[V].cancel();q.__reactViewTransition===it&&(q.__reactViewTransition=null),E()}),it}catch{return s(),l(),m(),null}}function Os(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Os.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Os.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),s=[],l=0;l<i.length;l++){var u=i[l].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(i[l])}return s},Os.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function av(t){return{name:t,group:new Os("group",t),imagePair:new Os("image-pair",t),old:new Os("old",t),new:new Os("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,n,i){var s=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(s=i.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(rv(u,t,n,i)===-1){var m=this,E=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(L){m.removeEventListener(t,n,i),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),s!==null&&(l=m.removeEventListener.bind(m,t,n,i),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Ur(i),u.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),g(this._fragmentFiber.child,!1,FS,t,E,s)}this._eventListeners=u}};function FS(t,n,i,s){return S(t).addEventListener(n,i,s),!1}ri.prototype.removeEventListener=function(t,n,i){var s=this._eventListeners;if(s!==null&&(n=rv(s,t,n,i),n!==-1)){var l=s[n];i=l.attachedListener;var u=l.cleanup;l=Ur(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,HS,t,i,l),s.splice(n,1),u!==null&&u()}};function HS(t,n,i,s){return S(t).removeEventListener(n,i,s),!1}function Ur(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function sv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function rv(t,n,i,s){if(t.length===0)return-1;s=sv(s);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===n&&u.listener===i&&sv(u.optionsOrUseCapture)===s)return l}return-1}ri.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var u=i[l];s.addEventListener(u.type,u.attachedListener,Ur(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),i)for(l=0;l<i.length;l++)u=i[l],s.removeEventListener(u.type,u.attachedListener,Ur(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ri.prototype.focus=function(t){g(this._fragmentFiber.child,!0,ov,t,void 0,void 0)};function ov(t,n){return t.tag===6?!1:(t=S(t),JS(t,n))}ri.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,Bh,n,void 0,void 0);for(var i=n.length-1;0<=i&&!ov(n[i],t);i--);};function Bh(t,n){return n.push(t),!1}ri.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=$o(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,GS,t,void 0,void 0))};function GS(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,VS,t,void 0,void 0)};function VS(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,kS,t,void 0,void 0);for(var i=n=0;i<Ri.length;i++){var s=Ri[i];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ri[n++]=s}Ri.length=n}};function kS(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Ri=[],Ih=!1;function XS(t,n,i){Ri.push({fragmentInstance:t,observer:n,instance:i}),Ih||(Ih=!0,$S(function(){Ih=!1;var s=Ri;Ri=[];for(var l=0;l<s.length;l++){var u=s[l];u.observer.unobserve(u.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,qS,t,void 0,void 0),t};function qS(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},ri.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];g(this._fragmentFiber.child,!1,Bh,i,void 0,void 0);var s=S(n);if(i.length===0){if(i=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=s=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(i[0]),l=S(i[i.length-1]);var u=M(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),L=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&u&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&l===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||jS(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function jS(t,n,i,s,l){var u=ln(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){i=!0;break t}u=u.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=n,n=y(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===i)&&(n=G(i,u,st),n===null?n=!1:(g(n,!0,O,u,i),u=x,x=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=G(s,u,st),n===null?n=!1:(g(n,!0,N,u,s),u=x,z=x=null,n=u!==null)),n):!1}function lv(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,Bh,n,void 0,void 0);var i=t!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=i?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=S(s),lv(t,i);return}if(s=S(s),s.nodeType!==9){if(s.nodeType===11){i="host"in s?s.host:null,i!==null&&i.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=i?n.length-1:0;s!==(i?-1:n.length);){var l=n[s];l.tag===6?(l=S(l),lv(l,i)):S(l).scrollIntoView(t),s+=i?-1:1}};function YS(t,n){return t=S(t),cv(t,n),!1}function cv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function uv(t,n){var i=n._eventListeners;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];t.addEventListener(l.type,l.attachedListener,Ur(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(u){for(var m=0,E=0;E<Ri.length;E++){var L=Ri[E];(L.fragmentInstance!==n||L.observer!==u||L.instance!==t)&&(Ri[m++]=L)}Ri.length=m,u.observe(t)}),cv(t,n))}function WS(t,n){var i=n._eventListeners;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];t.removeEventListener(l.type,l.attachedListener,Ur(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?XS(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Fh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Fh(i),be(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function ZS(t,n,i,s){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Xt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function KS(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_i(t.nextSibling),t===null))return null;return t}function fv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function Hh(t){return t.data==="$?"||t.data==="$~"}function Gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function QS(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Vh=null;function hv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return _i(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function dv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function JS(t,n){function i(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return s}function $S(t){$g(function(){$g(function(n){return t(n)})})}function pv(t,n,i){switch(n=$o(i),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function mv(t,n,i){for(var s in i){var l=i[s];i.hasOwnProperty(s)&&l!=null&&ze(t,n,s,null,RS,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===zi&&(t.onclick=null),be(t)}function kh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);be(t)}var xi=new Map,gv=new Set;function tl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var da=At.d;At.d={f:tM,r:eM,D:nM,C:iM,L:aM,m:sM,X:oM,S:rM,M:lM};function tM(){var t=da.f(),n=Rc();return t||n}function eM(t){var n=Qn(t);n!==null&&n.tag===5&&n.type==="form"?_0(n):da.r(t)}var Lr=typeof document>"u"?null:document;function vv(t,n,i){var s=Lr;if(s&&typeof n=="string"&&n){var l=fi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),gv.has(l)||(gv.add(l),t={rel:t,crossOrigin:i,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),Tn(n,"link",t),re(n),s.head.appendChild(n)))}}function nM(t){da.D(t),vv("dns-prefetch",t,null)}function iM(t,n){da.C(t,n),vv("preconnect",t,n)}function aM(t,n,i){da.L(t,n,i);var s=Lr;if(s&&t&&n){var l='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+fi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+fi(i.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var u=l;switch(n){case"style":u=Or(t);break;case"script":u=Pr(t)}if(!(xi.has(u)||(t=P({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),xi.set(u,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(el(u))||n==="script"&&s.querySelector(nl(u))))){var m=s.createElement("link");Tn(m,"link",t),n==="style"&&(m[Gn]=!0,m.onload=m.onerror=function(){Jn(m)}),re(m),s.head.appendChild(m)}}}function sM(t,n){da.m(t,n);var i=Lr;if(i&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+fi(s)+'"][href="'+fi(t)+'"]',u=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Pr(t)}if(!xi.has(u)&&(t=P({rel:"modulepreload",href:t},n),xi.set(u,t),i.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(nl(u)))return}s=i.createElement("link"),Tn(s,"link",t),re(s),i.head.appendChild(s)}}}function rM(t,n,i){da.S(t,n,i);var s=Lr;if(s&&t){var l=ui(s).hoistableStyles,u=Or(t);n=n||"default";var m=l.get(u);if(!m){var E={loading:0,preload:null};if(m=s.querySelector(el(u)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},i),(i=xi.get(u))&&Xh(t,i);var L=m=s.createElement("link");re(L),Tn(L,"link",t),L._p=new Promise(function(q,it){L.onload=q,L.onerror=it}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Pc(m,n,s)}m={type:"stylesheet",instance:m,count:1,state:E},l.set(u,m)}}}function oM(t,n){da.X(t,n);var i=Lr;if(i&&t){var s=ui(i).hoistableScripts,l=Pr(t),u=s.get(l);u||(u=i.querySelector(nl(l)),u||(t=P({src:t,async:!0},n),(n=xi.get(l))&&qh(t,n),u=i.createElement("script"),re(u),Tn(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function lM(t,n){da.M(t,n);var i=Lr;if(i&&t){var s=ui(i).hoistableScripts,l=Pr(t),u=s.get(l);u||(u=i.querySelector(nl(l)),u||(t=P({src:t,async:!0,type:"module"},n),(n=xi.get(l))&&qh(t,n),u=i.createElement("script"),re(u),Tn(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(l,u))}}function _v(t,n,i,s){var l=(l=U.current)?tl(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Or(i.href),n=ui(l).hoistableStyles,s=n.get(i),s||(s={type:"style",instance:null,count:0,state:null},n.set(i,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Or(i.href);var u=ui(l).hoistableStyles,m=u.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=l.querySelector(el(t)))?u._p||(m.instance=u,m.state.loading=5):(u=xi.get(t),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},xi.set(t,u)),cM(l,t,u,m.state))),n&&s===null)throw Error(r(528,""));return m}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Pr(i),n=ui(l).hoistableScripts,s=n.get(i),s||(s={type:"script",instance:null,count:0,state:null},n.set(i,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Or(t){return'href="'+fi(t)+'"'}function el(t){return'link[rel="stylesheet"]['+t+"]"}function xv(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function cM(t,n,i,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Gn]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Gn]=!0,n.onload=n.onerror=Jn.bind(null,n),Tn(n,"link",i),re(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Pr(t){return'[src="'+fi(t)+'"]'}function nl(t){return"script[async]"+t}function yv(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+fi(i.href)+'"]');if(s)return n.instance=s,re(s),s;var l=P({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),re(s),Tn(s,"style",l),Pc(s,i.precedence,t),n.instance=s;case"stylesheet":l=Or(i.href);var u=t.querySelector(el(l));if(u)return n.state.loading|=4,n.instance=u,re(u),u;s=xv(i),(l=xi.get(l))&&Xh(s,l),u=(t.ownerDocument||t).createElement("link"),re(u);var m=u;return m._p=new Promise(function(E,L){m.onload=E,m.onerror=L}),Tn(u,"link",s),n.state.loading|=4,Pc(u,i.precedence,t),n.instance=u;case"script":return u=Pr(i.src),(l=t.querySelector(nl(u)))?(n.instance=l,re(l),l):(s=i,(l=xi.get(u))&&(s=P({},i),qh(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),re(l),Tn(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pc(s,i.precedence,t));return n.instance}function Pc(t,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,u=l,m=0;m<s.length;m++){var E=s[m];if(E.dataset.precedence===n)u=E;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Xh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zc=null;function Sv(t,n,i){if(zc===null){var s=new Map,l=zc=new Map;l.set(i,s)}else l=zc,s=l.get(i),s||(s=new Map,l.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var u=i[l];if(!(u[Xt]||u[Wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(n)||"";m=t+m;var E=s.get(m);E?E.push(u):s.set(m,[u])}}return s}function jh(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function uM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Tv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function bv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Tv(n),t.suspenseyImages.push(n)),t=dM.bind(t),n.decode().then(t,t))}function fM(t,n,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Or(s.href),u=n.querySelector(el(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=il.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=u,re(u);return}u=n.ownerDocument||n,s=xv(s),(l=xi.get(l))&&Xh(s,l),u=u.createElement("link"),re(u);var m=u;m._p=new Promise(function(E,L){m.onload=E,m.onerror=L}),Tn(u,"link",s),i.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=il.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Bc=0;function hM(t,n){return t.stylesheets&&t.count===0&&Fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var s=setTimeout(function(){if(t.stylesheets&&Fc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Bc===0&&(Bc=62500*DS());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Bc?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Av(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Fc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function il(){this.count--,Av(this)}function dM(){this.imgCount--,Av(this)}var Ic=null;function Fc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ic=new Map,n.forEach(pM,t),Ic=null,il.call(t))}function pM(t,n){if(!(n.state.loading&4)){var i=Ic.get(t);if(i)var s=i.get(null);else{i=new Map,Ic.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),s=m)}s&&i.set(null,s)}l=n.instance,m=l.getAttribute("data-precedence"),u=i.get(m)||s,u===s&&i.set(null,l),i.set(m,l),this.count++,s=il.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var zr={$$typeof:pt,Provider:null,Consumer:null,_currentValue:De,_currentValue2:De,_threadCount:0};function mM(t,n,i,s,l,u,m,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function Cv(t,n,i,s,l,u,m,E,L,q,it,ht){return t=new mM(t,n,i,m,L,q,it,ht,E),n=1,u===!0&&(n|=24),u=Vn(3,null,null,n),t.current=u,u.stateNode=t,n=of(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:i,cache:n},ff(u),t}function Rv(t){return t?(t=lr,t):lr}function wv(t,n,i,s,l,u){l=Rv(l),s.context===null?s.context=l:s.pendingContext=l,s=Ba(n),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Ia(t,s,n),i!==null&&(jn(i,t,n),Oo(i,t,n))}function Dv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Yh(t,n){Dv(t,n),(t=t.alternate)&&Dv(t,n)}function Nv(t){if(t.tag===13||t.tag===31){var n=vs(t,67108864);n!==null&&jn(n,t,67108864),Yh(t,67108864)}}function Uv(t){if(t.tag===13||t.tag===31){var n=si();n=Et(n);var i=vs(t,n);i!==null&&jn(i,t,n),Yh(t,n)}}var Br=!0;function gM(t,n,i,s){var l=Tt.T;Tt.T=null;var u=At.p;try{At.p=2,Wh(t,n,i,s)}finally{At.p=u,Tt.T=l}}function vM(t,n,i,s){var l=Tt.T;Tt.T=null;var u=At.p;try{At.p=8,Wh(t,n,i,s)}finally{At.p=u,Tt.T=l}}function Wh(t,n,i,s){if(Br){var l=Zh(s);if(l===null)wh(t,n,s,Hc,i),Ov(t,s);else if(xM(l,t,n,i,s))s.stopPropagation();else if(Ov(t,s),n&4&&-1<_M.indexOf(t)){for(;l!==null;){var u=Qn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Pi(u.pendingLanes);if(m!==0){var E=u;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var L=1<<31-An(m);E.entanglements[1]|=L,m&=~L}ji(u),(Ne&6)===0&&(bc=H()+500,Ko(0))}}break;case 31:case 13:E=vs(u,2),E!==null&&jn(E,u,2),Rc(),Yh(u,2)}if(u=Zh(s),u===null&&wh(t,n,s,Hc,i),u===l)break;l=u}l!==null&&s.stopPropagation()}else wh(t,n,s,null,i)}}function Zh(t){return t=Lu(t),Kh(t)}var Hc=null;function Kh(t){if(Hc=null,t=ln(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=d(n),t!==null)return t;t=null}else if(i===31){if(t=h(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hc=t,null}function Lv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case ct:return 2;case _t:return 8;case Lt:case Bt:return 32;case se:return 268435456;default:return 32}default:return 32}}var Qh=!1,Ka=null,Qa=null,Ja=null,al=new Map,sl=new Map,$a=[],_M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ov(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":al.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(n.pointerId)}}function rl(t,n,i,s,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},n!==null&&(n=Qn(n),n!==null&&Nv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function xM(t,n,i,s,l){switch(n){case"focusin":return Ka=rl(Ka,t,n,i,s,l),!0;case"dragenter":return Qa=rl(Qa,t,n,i,s,l),!0;case"mouseover":return Ja=rl(Ja,t,n,i,s,l),!0;case"pointerover":var u=l.pointerId;return al.set(u,rl(al.get(u)||null,t,n,i,s,l)),!0;case"gotpointercapture":return u=l.pointerId,sl.set(u,rl(sl.get(u)||null,t,n,i,s,l)),!0}return!1}function Pv(t){var n=ln(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=d(i),n!==null){t.blockedOn=n,jt(t.priority,function(){Uv(i)});return}}else if(n===31){if(n=h(i),n!==null){t.blockedOn=n,jt(t.priority,function(){Uv(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Zh(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);Uu=s,i.target.dispatchEvent(s),Uu=null}else return n=Qn(i),n!==null&&Nv(n),t.blockedOn=i,!1;n.shift()}return!0}function zv(t,n,i){Gc(t)&&i.delete(n)}function yM(){Qh=!1,Ka!==null&&Gc(Ka)&&(Ka=null),Qa!==null&&Gc(Qa)&&(Qa=null),Ja!==null&&Gc(Ja)&&(Ja=null),al.forEach(zv),sl.forEach(zv)}function Vc(t,n){t.blockedOn===n&&(t.blockedOn=null,Qh||(Qh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yM)))}var kc=null;function Bv(t){kc!==t&&(kc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kc===t&&(kc=null);for(var n=0;n<t.length;n+=3){var i=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(Kh(s||i)===null)continue;break}var u=Qn(i);u!==null&&(t.splice(n,3),n-=3,Uf(u,{pending:!0,data:l,method:i.method,action:s},s,l))}}))}function Ir(t){function n(L){return Vc(L,t)}Ka!==null&&Vc(Ka,t),Qa!==null&&Vc(Qa,t),Ja!==null&&Vc(Ja,t),al.forEach(n),sl.forEach(n);for(var i=0;i<$a.length;i++){var s=$a[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<$a.length&&(i=$a[0],i.blockedOn===null);)Pv(i),i.blockedOn===null&&$a.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var l=i[s],u=i[s+1],m=l[zt]||null;if(typeof u=="function")m||Bv(i);else if(m){var E=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[zt]||null)E=m.formAction;else if(Kh(l)!==null)continue}else E=m.action;typeof E=="function"?i[s+1]=E:(i.splice(s,3),s-=3),Bv(i)}}}function Iv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Jh(t){this._internalRoot=t}Xc.prototype.render=Jh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var i=n.current,s=si();wv(i,s,t,n,null,null)},Xc.prototype.unmount=Jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;wv(t.current,2,null,t,null,null),Rc(),n[de]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qt();t={blockedOn:null,target:t,priority:n};for(var i=0;i<$a.length&&n!==0&&n<$a[i].priority;i++);$a.splice(i,0,t),i===0&&Pv(t)}};var Fv=e.version;if(Fv!=="19.3.1")throw Error(r(527,Fv,"19.3.1"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=v(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var SM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{Te=qc.inject(SM),je=qc}catch{}}return ll.createRoot=function(t,n){if(!c(t))throw Error(r(299));var i=!1,s="",l=R0,u=w0,m=D0;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Cv(t,1,!1,null,null,i,s,null,l,u,m,Iv),t[de]=n.current,Rh(t),new Jh(n)},ll.hydrateRoot=function(t,n,i){if(!c(t))throw Error(r(299));var s=!1,l="",u=R0,m=w0,E=D0,L=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(L=i.formState)),n=Cv(t,1,!0,n,i??null,s,l,L,u,m,E,Iv),n.context=Rv(null),i=n.current,s=si(),s=Et(s),l=Ba(s),l.callback=null,Ia(i,l,s),i=s,n.current.lanes=i,C(n,i),ji(n),t[de]=n.current,Rh(t),new Xc(n)},ll.version="19.3.1",ll}var Zv;function OM(){if(Zv)return ed.exports;Zv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ed.exports=LM(),ed.exports}var PM=OM();const zM=tx(PM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ex=(...o)=>o.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=he.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:c="",children:f,iconNode:d,...h},p)=>he.createElement("svg",{ref:p,...IM,width:e,height:e,stroke:o,strokeWidth:r?Number(a)*24/Number(e):a,className:ex("lucide",c),...h},[...d.map(([v,_])=>he.createElement(v,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=(o,e)=>{const a=he.forwardRef(({className:r,...c},f)=>he.createElement(FM,{ref:f,iconNode:e,className:ex(`lucide-${BM(o)}`,r),...c}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=Kn("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=Kn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=Kn("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=Kn("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=Kn("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=Kn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=Kn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=Kn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=Kn("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=Kn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=Kn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=Kn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=Kn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=Kn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ks=[{id:0,kicker:"01 / SUNSET ATOLL · 00:00–00:05",label:"Sunset Atoll",titleLines:["Golden light over","the coral lagoon."],subtitle:"Subsurface coral reef caustics, anisotropic solar glint, and 22 backlit pinnate coconut palms.",startCamPos:[-2.4,1.85,22],endCamPos:[.4,1.65,14.5],startLookAt:[1.5,2,-7.5],endLookAt:[2.2,2.1,-7.5],fov:44,durationSec:5},{id:1,kicker:"02 / CLIFFSIDE VILLAS · 00:05–00:10",label:"Cliffside Villas",titleLines:["Cantilevered teak","above wet sand."],subtitle:"Mirror-wet shoreline swash reflections, weathered coastal basalt cliffs, and warm 2700K architectural interiors.",startCamPos:[3.2,2.1,21.5],endCamPos:[2.5,1.95,10.5],startLookAt:[-4.2,3.6,-12],endLookAt:[-4.8,3.8,-16],fov:45,durationSec:5},{id:2,kicker:"03 / JUNGLE WATERFALL · 00:10–00:15",label:"Jungle Waterfall",titleLines:["Roaring cataract","in emerald mist."],subtitle:"Striated limestone canyon walls, multi-chute fluid simulation, rising spray clouds, and diagonal god-ray shafts.",startCamPos:[0,14.5,26],endCamPos:[0,16.8,8.5],startLookAt:[0,15.8,-24],endLookAt:[0,18.2,-24],fov:46,durationSec:5},{id:3,kicker:"04 / CRESCENT BAY · 00:15–00:20",label:"Crescent Bay",titleLines:["Where the valley","meets the reef."],subtitle:"Layered volcanic headlands in golden aerial haze, turquoise coral lagoon, and cliffside infinity pavilions.",startCamPos:[8.5,21.5,28],endCamPos:[2.8,24,11.5],startLookAt:[-9.5,6.2,-32],endLookAt:[-12.5,5.2,-36],fov:46,durationSec:5}],KM=[0,5,10,15],sd=["./posters/chapter_0.jpg","./posters/chapter_1.jpg","./posters/chapter_2.jpg","./posters/chapter_3.jpg"],Kv=[{title:"Sunset Atoll",time:"00:00 – 00:05",baseline:"Uniform cyan plane, 9 straight cylinder palms",iteration9:"Subsurface caustics, 44 curved palms, anisotropic solar glitter",fps:"120 FPS",samples:"512 spp"},{title:"Cliffside Villas",time:"00:05 – 00:10",baseline:"Blocky voxel rock steps, flat unlit boxes",iteration9:"Mirror-wet sand reflection, rolling foam swash, warm teak cantilever",fps:"118 FPS",samples:"512 spp"},{title:"Jungle Waterfall",time:"00:10 – 00:15",baseline:"Smooth green hill spheres, flat white ribbon",iteration9:"Limestone canyon strata, multi-chute fluid cascade, volumetric mist",fps:"115 FPS",samples:"768 spp"},{title:"Crescent Bay",time:"00:15 – 00:20",baseline:"Low-poly green terrain cones, flat gray boxes",iteration9:"Layered mountain headlands in golden haze, turquoise reef lagoon",fps:"122 FPS",samples:"512 spp"}],QM=({activeChapter:o,isPlaying:e,onChapterChange:a,onPlayPauseToggle:r,isMuted:c,onToggleMute:f,sliderPosition:d,onSliderChange:h})=>{const p=he.useRef(null),v=he.useRef(null),[_,g]=he.useState(!1),[y,M]=he.useState(0),[b,w]=he.useState(20),[S,x]=he.useState(!1);he.useEffect(()=>{const B=p.current;B&&(B.muted=c,e?B.play().then(()=>x(!0)).catch(()=>{}):B.pause())},[e,c]),he.useEffect(()=>{const B=p.current;if(!B)return;const D=KM[o]??0;Math.abs(B.currentTime-D)>.45&&(B.currentTime=D,B.play().then(()=>x(!0)).catch(()=>{}))},[o]);const z=()=>{const B=p.current;if(!B)return;const D=B.currentTime;M(D);let A=0;D>=15?A=3:D>=10?A=2:D>=5?A=1:A=0,A!==o&&a(A)},O=()=>{p.current&&(w(p.current.duration||20),p.current.play().then(()=>x(!0)).catch(()=>{}))},N=B=>{g(!0),B.target.setPointerCapture(B.pointerId)},st=he.useCallback(B=>{if(!_||!v.current)return;const D=v.current.getBoundingClientRect(),A=B.clientX-D.left,F=Math.max(5,Math.min(95,A/D.width*100));h(F)},[_,h]),G=()=>{g(!1)},P=Kv[o];return k.jsxs("div",{ref:v,onPointerMove:st,onPointerUp:G,className:"relative w-full h-full flex items-center justify-center overflow-hidden bg-[#070C10] select-none",children:[k.jsx("div",{className:"absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none scale-110 filter blur-3xl",children:k.jsx("img",{src:sd[o],alt:"",className:"w-full h-full object-cover"})}),k.jsxs("div",{className:"relative z-10 w-full h-full max-w-7xl mx-auto flex items-center justify-between p-4 sm:p-6 lg:p-8 gap-6",children:[k.jsxs("aside",{className:"hidden lg:flex flex-col justify-between w-72 h-[720px] p-6 rounded-3xl bg-[#0E161D]/80 backdrop-blur-2xl border border-white/10 shadow-2xl",children:[k.jsxs("div",{className:"space-y-4",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx(ix,{size:16,className:"text-[#E59846]"}),k.jsx("span",{className:"text-xs font-bold tracking-widest text-[#E59846] uppercase",children:"Active Benchmark"})]}),k.jsx("h3",{className:"font-serif text-2xl font-normal text-white",children:P.title}),k.jsx("span",{className:"inline-block px-2.5 py-1 rounded text-xs font-mono font-semibold bg-white/10 text-white/80",children:P.time}),k.jsxs("div",{className:"pt-3 border-t border-white/10 space-y-3 text-xs",children:[k.jsxs("div",{children:[k.jsx("span",{className:"text-white/50 block font-medium mb-1",children:"GPT-6.1 Terra | 9th Iteration"}),k.jsx("p",{className:"text-[#2EC492] font-semibold leading-relaxed",children:P.iteration9})]}),k.jsxs("div",{children:[k.jsx("span",{className:"text-white/50 block font-medium mb-1",children:"GPT-6.1 Terra | 1st Attempt"}),k.jsx("p",{className:"text-white/70 leading-relaxed",children:P.baseline})]})]})]}),k.jsxs("div",{className:"pt-4 border-t border-white/10 space-y-2 text-xs font-mono",children:[k.jsxs("div",{className:"flex justify-between text-white/60",children:[k.jsx("span",{children:"Frame Rate"}),k.jsx("span",{className:"text-[#2EC492] font-bold",children:P.fps})]}),k.jsxs("div",{className:"flex justify-between text-white/60",children:[k.jsx("span",{children:"Ray Samples"}),k.jsx("span",{className:"text-white font-bold",children:P.samples})]}),k.jsxs("div",{className:"flex justify-between text-white/60",children:[k.jsx("span",{children:"Color Space"}),k.jsx("span",{className:"text-white font-bold",children:"ACES Filmic"})]})]})]}),k.jsx("div",{className:"relative flex-1 h-full max-h-[820px] flex items-center justify-center",children:k.jsxs("div",{className:"relative h-full aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.85)] border border-white/15 bg-black",children:[!S&&k.jsx("img",{src:sd[o],alt:"Terra Preview",className:"absolute inset-0 w-full h-full object-cover z-0"}),k.jsx("video",{ref:p,src:"./video/terra-comparison.mp4",poster:sd[o],playsInline:!0,autoPlay:!0,loop:!0,muted:c,onTimeUpdate:z,onLoadedMetadata:O,className:"relative z-10 w-full h-full object-cover pointer-events-none"}),k.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-[2px] bg-white/40 pointer-events-none shadow-sm z-20"}),k.jsxs("div",{className:"absolute top-0 bottom-0 z-30 flex items-center justify-center cursor-ew-resize group",style:{left:`${d}%`},onPointerDown:N,children:[k.jsx("div",{className:"w-[3px] h-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)] group-hover:bg-[#E59846] transition-colors"}),k.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border border-black/10 group-hover:scale-110 transition-transform",children:k.jsx("span",{className:"text-xs font-bold leading-none select-none",children:"↔"})})]}),k.jsxs("div",{className:"absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-auto",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("button",{type:"button",onClick:r,className:"w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all cursor-pointer","aria-label":e?"Pause video":"Play video",children:e?k.jsx(qM,{size:17}):k.jsx(jM,{size:17,className:"translate-x-0.5"})}),k.jsx("button",{type:"button",onClick:f,className:"w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all cursor-pointer","aria-label":c?"Unmute audio":"Mute audio",children:c?k.jsx(sx,{size:17}):k.jsx(ax,{size:17})})]}),k.jsx("div",{className:"flex items-center gap-2",children:k.jsxs("span",{className:"text-xs font-medium font-mono px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/20",children:[y.toFixed(1),"s / ",b.toFixed(1),"s"]})})]})]})}),k.jsxs("aside",{className:"hidden lg:flex flex-col justify-between w-72 h-[720px] p-6 rounded-3xl bg-[#0E161D]/80 backdrop-blur-2xl border border-white/10 shadow-2xl",children:[k.jsxs("div",{className:"space-y-4",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx(nx,{size:16,className:"text-[#2EC492]"}),k.jsx("span",{className:"text-xs font-bold tracking-widest text-white/60 uppercase",children:"World Chapters"})]}),k.jsx("div",{className:"space-y-2",children:Kv.map((B,D)=>{const A=o===D;return k.jsxs("button",{type:"button",onClick:()=>a(D),className:`w-full p-3 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${A?"bg-[#E59846]/15 border-[#E59846] text-white":"bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"}`,children:[k.jsxs("div",{children:[k.jsxs("span",{className:"text-[10px] font-bold tracking-wider text-[#E59846] block uppercase",children:["0",D+1," / ",B.time]}),k.jsx("span",{className:"text-sm font-semibold",children:B.title})]}),k.jsx(GM,{size:16,className:A?"text-[#E59846]":"text-white/30"})]},B.title)})})]}),k.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-1",children:[k.jsx("span",{className:"font-semibold text-white block",children:"Draggable Split Comparison"}),k.jsx("p",{className:"leading-relaxed",children:"Drag the white handle ↔ horizontally to inspect pixel fidelity between 1st attempt and 9th iteration."})]})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="170",no={ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JM=0,Qv=1,$M=2,rx=1,tE=2,xa=3,hs=0,Wn=1,ya=2,us=0,io=1,Jv=2,$v=3,t_=4,eE=5,Xs=100,nE=101,iE=102,aE=103,sE=104,rE=200,oE=201,lE=202,cE=203,Pd=204,zd=205,uE=206,fE=207,hE=208,dE=209,pE=210,mE=211,gE=212,vE=213,_E=214,Bd=0,Id=1,Fd=2,ro=3,Hd=4,Gd=5,Vd=6,kd=7,ox=0,xE=1,yE=2,fs=0,SE=1,ME=2,EE=3,TE=4,bE=5,AE=6,CE=7,lx=300,oo=301,lo=302,Xd=303,qd=304,Eu=306,jd=1e3,js=1001,Yd=1002,Oi=1003,RE=1004,jc=1005,Wi=1006,rd=1007,Ys=1008,Ta=1009,cx=1010,ux=1011,vl=1012,Ep=1013,Zs=1014,Sa=1015,xl=1016,Tp=1017,bp=1018,co=1020,fx=35902,hx=1021,dx=1022,Li=1023,px=1024,mx=1025,ao=1026,uo=1027,gx=1028,Ap=1029,vx=1030,Cp=1031,Rp=1033,mu=33776,gu=33777,vu=33778,_u=33779,Wd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,tp=37496,ep=37808,np=37809,ip=37810,ap=37811,sp=37812,rp=37813,op=37814,lp=37815,cp=37816,up=37817,fp=37818,hp=37819,dp=37820,pp=37821,xu=36492,mp=36494,gp=36495,_x=36283,vp=36284,_p=36285,xp=36286,wE=3200,DE=3201,NE=0,UE=1,cs="",Si="srgb",ho="srgb-linear",Tu="linear",Fe="srgb",Fr=7680,e_=519,LE=512,OE=513,PE=514,xx=515,zE=516,BE=517,IE=518,FE=519,n_=35044,i_="300 es",Ma=2e3,Su=2001;class Js{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(a)===-1&&r[e].push(a)}hasEventListener(e,a){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(a)!==-1}removeEventListener(e,a){if(this._listeners===void 0)return;const c=this._listeners[e];if(c!==void 0){const f=c.indexOf(a);f!==-1&&c.splice(f,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const c=r.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a_=1234567;const ml=Math.PI/180,_l=180/Math.PI;function po(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[a&63|128]+Dn[a>>8&255]+"-"+Dn[a>>16&255]+Dn[a>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Un(o,e,a){return Math.max(e,Math.min(a,o))}function wp(o,e){return(o%e+e)%e}function HE(o,e,a,r,c){return r+(o-e)*(c-r)/(a-e)}function GE(o,e,a){return o!==e?(a-o)/(e-o):0}function gl(o,e,a){return(1-a)*o+a*e}function VE(o,e,a,r){return gl(o,e,1-Math.exp(-a*r))}function kE(o,e=1){return e-Math.abs(wp(o,e*2)-e)}function XE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*(3-2*o))}function qE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*o*(o*(o*6-15)+10))}function jE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function YE(o,e){return o+Math.random()*(e-o)}function WE(o){return o*(.5-Math.random())}function ZE(o){o!==void 0&&(a_=o);let e=a_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KE(o){return o*ml}function QE(o){return o*_l}function JE(o){return(o&o-1)===0&&o!==0}function $E(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function t1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function e1(o,e,a,r,c){const f=Math.cos,d=Math.sin,h=f(a/2),p=d(a/2),v=f((e+r)/2),_=d((e+r)/2),g=f((e-r)/2),y=d((e-r)/2),M=f((r-e)/2),b=d((r-e)/2);switch(c){case"XYX":o.set(h*_,p*g,p*y,h*v);break;case"YZY":o.set(p*y,h*_,p*g,h*v);break;case"ZXZ":o.set(p*g,p*y,h*_,h*v);break;case"XZX":o.set(h*_,p*b,p*M,h*v);break;case"YXY":o.set(p*M,h*_,p*b,h*v);break;case"ZYZ":o.set(p*b,p*M,h*_,h*v);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+c)}}function $r(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const os={DEG2RAD:ml,RAD2DEG:_l,generateUUID:po,clamp:Un,euclideanModulo:wp,mapLinear:HE,inverseLerp:GE,lerp:gl,damp:VE,pingpong:kE,smoothstep:XE,smootherstep:qE,randInt:jE,randFloat:YE,randFloatSpread:WE,seededRandom:ZE,degToRad:KE,radToDeg:QE,isPowerOfTwo:JE,ceilPowerOfTwo:$E,floorPowerOfTwo:t1,setQuaternionFromProperEuler:e1,normalize:Fn,denormalize:$r};class me{constructor(e=0,a=0){me.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,r=this.y,c=e.elements;return this.x=c[0]*a+c[3]*r+c[6],this.y=c[1]*a+c[4]*r+c[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(a,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const r=this.dot(e)/a;return Math.acos(Un(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,r=this.y-e.y;return a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const r=Math.cos(a),c=Math.sin(a),f=this.x-e.x,d=this.y-e.y;return this.x=f*r-d*c+e.x,this.y=f*c+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(e,a,r,c,f,d,h,p,v){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,r,c,f,d,h,p,v)}set(e,a,r,c,f,d,h,p,v){const _=this.elements;return _[0]=e,_[1]=c,_[2]=h,_[3]=a,_[4]=f,_[5]=p,_[6]=r,_[7]=d,_[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,r=e.elements;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[3],a[4]=r[4],a[5]=r[5],a[6]=r[6],a[7]=r[7],a[8]=r[8],this}extractBasis(e,a,r){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const r=e.elements,c=a.elements,f=this.elements,d=r[0],h=r[3],p=r[6],v=r[1],_=r[4],g=r[7],y=r[2],M=r[5],b=r[8],w=c[0],S=c[3],x=c[6],z=c[1],O=c[4],N=c[7],st=c[2],G=c[5],P=c[8];return f[0]=d*w+h*z+p*st,f[3]=d*S+h*O+p*G,f[6]=d*x+h*N+p*P,f[1]=v*w+_*z+g*st,f[4]=v*S+_*O+g*G,f[7]=v*x+_*N+g*P,f[2]=y*w+M*z+b*st,f[5]=y*S+M*O+b*G,f[8]=y*x+M*N+b*P,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],r=e[1],c=e[2],f=e[3],d=e[4],h=e[5],p=e[6],v=e[7],_=e[8];return a*d*_-a*h*v-r*f*_+r*h*p+c*f*v-c*d*p}invert(){const e=this.elements,a=e[0],r=e[1],c=e[2],f=e[3],d=e[4],h=e[5],p=e[6],v=e[7],_=e[8],g=_*d-h*v,y=h*p-_*f,M=v*f-d*p,b=a*g+r*y+c*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=g*w,e[1]=(c*v-_*r)*w,e[2]=(h*r-c*d)*w,e[3]=y*w,e[4]=(_*a-c*p)*w,e[5]=(c*f-h*a)*w,e[6]=M*w,e[7]=(r*p-v*a)*w,e[8]=(d*a-r*f)*w,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,r,c,f,d,h){const p=Math.cos(f),v=Math.sin(f);return this.set(r*p,r*v,-r*(p*d+v*h)+d+e,-c*v,c*p,-c*(-v*d+p*h)+h+a,0,0,1),this}scale(e,a){return this.premultiply(od.makeScale(e,a)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,a){return this.premultiply(od.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,-r,0,r,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,r=e.elements;for(let c=0;c<9;c++)if(a[c]!==r[c])return!1;return!0}fromArray(e,a=0){for(let r=0;r<9;r++)this.elements[r]=e[r+a];return this}toArray(e=[],a=0){const r=this.elements;return e[a]=r[0],e[a+1]=r[1],e[a+2]=r[2],e[a+3]=r[3],e[a+4]=r[4],e[a+5]=r[5],e[a+6]=r[6],e[a+7]=r[7],e[a+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new ue;function yx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Mu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function n1(){const o=Mu("canvas");return o.style.display="block",o}const s_={};function dl(o){o in s_||(s_[o]=!0,console.warn(o))}function i1(o,e,a){return new Promise(function(r,c){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:r()}}setTimeout(f,a)})}function a1(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function s1(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Re={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(o,e,a){return this.enabled===!1||e===a||!e||!a||(this.spaces[e].transfer===Fe&&(o.r=Ea(o.r),o.g=Ea(o.g),o.b=Ea(o.b)),this.spaces[e].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Fe&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cs?Tu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,a){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function so(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const r_=[.64,.33,.3,.6,.15,.06],o_=[.2126,.7152,.0722],l_=[.3127,.329],c_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Re.define({[ho]:{primaries:r_,whitePoint:l_,transfer:Tu,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:o_,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:r_,whitePoint:l_,transfer:Fe,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:o_,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}});let Hr;class r1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Hr===void 0&&(Hr=Mu("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Hr}return a.width>2048||a.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),a.toDataURL("image/jpeg",.6)):a.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=Mu("canvas");a.width=e.width,a.height=e.height;const r=a.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const c=r.getImageData(0,0,e.width,e.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Ea(f[d]/255)*255;return r.putImageData(c,0,0),a}else if(e.data){const a=e.data.slice(0);for(let r=0;r<a.length;r++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[r]=Math.floor(Ea(a[r]/255)*255):a[r]=Ea(a[r]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o1=0;class Sx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(ld(c[d].image)):f.push(ld(c[d]))}else f=ld(c);r.url=f}return a||(e.images[this.uuid]=r),r}}function ld(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?r1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let l1=0;class Zn extends Js{constructor(e=Zn.DEFAULT_IMAGE,a=Zn.DEFAULT_MAPPING,r=js,c=js,f=Wi,d=Ys,h=Li,p=Ta,v=Zn.DEFAULT_ANISOTROPY,_=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=po(),this.name="",this.source=new Sx(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=v,this.format=h,this.internalFormat=null,this.type=p,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),a||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jd:e.x=e.x-Math.floor(e.x);break;case js:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jd:e.y=e.y-Math.floor(e.y);break;case js:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=lx;Zn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,a=0,r=0,c=1){$e.prototype.isVector4=!0,this.x=e,this.y=a,this.z=r,this.w=c}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,r,c){return this.x=e,this.y=a,this.z=r,this.w=c,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,r=this.y,c=this.z,f=this.w,d=e.elements;return this.x=d[0]*a+d[4]*r+d[8]*c+d[12]*f,this.y=d[1]*a+d[5]*r+d[9]*c+d[13]*f,this.z=d[2]*a+d[6]*r+d[10]*c+d[14]*f,this.w=d[3]*a+d[7]*r+d[11]*c+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,r,c,f;const p=e.elements,v=p[0],_=p[4],g=p[8],y=p[1],M=p[5],b=p[9],w=p[2],S=p[6],x=p[10];if(Math.abs(_-y)<.01&&Math.abs(g-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+w)<.1&&Math.abs(b+S)<.1&&Math.abs(v+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const O=(v+1)/2,N=(M+1)/2,st=(x+1)/2,G=(_+y)/4,P=(g+w)/4,B=(b+S)/4;return O>N&&O>st?O<.01?(r=0,c=.707106781,f=.707106781):(r=Math.sqrt(O),c=G/r,f=P/r):N>st?N<.01?(r=.707106781,c=0,f=.707106781):(c=Math.sqrt(N),r=G/c,f=B/c):st<.01?(r=.707106781,c=.707106781,f=0):(f=Math.sqrt(st),r=P/f,c=B/f),this.set(r,c,f,a),this}let z=Math.sqrt((S-b)*(S-b)+(g-w)*(g-w)+(y-_)*(y-_));return Math.abs(z)<.001&&(z=1),this.x=(S-b)/z,this.y=(g-w)/z,this.z=(y-_)/z,this.w=Math.acos((v+M+x-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this.w=Math.max(e.w,Math.min(a.w,this.w)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this.w=Math.max(e,Math.min(a,this.w)),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(a,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this.z=e.z+(a.z-e.z)*r,this.w=e.w+(a.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c1 extends Js{constructor(e=1,a=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=1,this.scissor=new $e(0,0,e,a),this.scissorTest=!1,this.viewport=new $e(0,0,e,a);const c={width:e,height:a,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const f=new Zn(c,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);f.flipY=!1,f.generateMipmaps=r.generateMipmaps,f.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,a,r=1){if(this.width!==e||this.height!==a||this.depth!==r){this.width=e,this.height=a,this.depth=r;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=e,this.textures[c].image.height=a,this.textures[c].image.depth=r;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,c=e.textures.length;r<c;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const a=Object.assign({},e.texture.image);return this.texture.source=new Sx(a),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends c1{constructor(e=1,a=1,r={}){super(e,a,r),this.isWebGLRenderTarget=!0}}class Mx extends Zn{constructor(e=null,a=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:r,depth:c},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u1 extends Zn{constructor(e=null,a=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:r,depth:c},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=0,a=0,r=0,c=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=r,this._w=c}static slerpFlat(e,a,r,c,f,d,h){let p=r[c+0],v=r[c+1],_=r[c+2],g=r[c+3];const y=f[d+0],M=f[d+1],b=f[d+2],w=f[d+3];if(h===0){e[a+0]=p,e[a+1]=v,e[a+2]=_,e[a+3]=g;return}if(h===1){e[a+0]=y,e[a+1]=M,e[a+2]=b,e[a+3]=w;return}if(g!==w||p!==y||v!==M||_!==b){let S=1-h;const x=p*y+v*M+_*b+g*w,z=x>=0?1:-1,O=1-x*x;if(O>Number.EPSILON){const st=Math.sqrt(O),G=Math.atan2(st,x*z);S=Math.sin(S*G)/st,h=Math.sin(h*G)/st}const N=h*z;if(p=p*S+y*N,v=v*S+M*N,_=_*S+b*N,g=g*S+w*N,S===1-h){const st=1/Math.sqrt(p*p+v*v+_*_+g*g);p*=st,v*=st,_*=st,g*=st}}e[a]=p,e[a+1]=v,e[a+2]=_,e[a+3]=g}static multiplyQuaternionsFlat(e,a,r,c,f,d){const h=r[c],p=r[c+1],v=r[c+2],_=r[c+3],g=f[d],y=f[d+1],M=f[d+2],b=f[d+3];return e[a]=h*b+_*g+p*M-v*y,e[a+1]=p*b+_*y+v*g-h*M,e[a+2]=v*b+_*M+h*y-p*g,e[a+3]=_*b-h*g-p*y-v*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,r,c){return this._x=e,this._y=a,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const r=e._x,c=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,v=h(r/2),_=h(c/2),g=h(f/2),y=p(r/2),M=p(c/2),b=p(f/2);switch(d){case"XYZ":this._x=y*_*g+v*M*b,this._y=v*M*g-y*_*b,this._z=v*_*b+y*M*g,this._w=v*_*g-y*M*b;break;case"YXZ":this._x=y*_*g+v*M*b,this._y=v*M*g-y*_*b,this._z=v*_*b-y*M*g,this._w=v*_*g+y*M*b;break;case"ZXY":this._x=y*_*g-v*M*b,this._y=v*M*g+y*_*b,this._z=v*_*b+y*M*g,this._w=v*_*g-y*M*b;break;case"ZYX":this._x=y*_*g-v*M*b,this._y=v*M*g+y*_*b,this._z=v*_*b-y*M*g,this._w=v*_*g+y*M*b;break;case"YZX":this._x=y*_*g+v*M*b,this._y=v*M*g+y*_*b,this._z=v*_*b-y*M*g,this._w=v*_*g-y*M*b;break;case"XZY":this._x=y*_*g-v*M*b,this._y=v*M*g-y*_*b,this._z=v*_*b+y*M*g,this._w=v*_*g+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const r=a/2,c=Math.sin(r);return this._x=e.x*c,this._y=e.y*c,this._z=e.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,r=a[0],c=a[4],f=a[8],d=a[1],h=a[5],p=a[9],v=a[2],_=a[6],g=a[10],y=r+h+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(f-v)*M,this._z=(d-c)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(_-p)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+v)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(f-v)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(d-c)/M,this._x=(f+v)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let r=e.dot(a)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,a){const r=this.angleTo(e);if(r===0)return this;const c=Math.min(1,a/r);return this.slerp(e,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const r=e._x,c=e._y,f=e._z,d=e._w,h=a._x,p=a._y,v=a._z,_=a._w;return this._x=r*_+d*h+c*v-f*p,this._y=c*_+d*p+f*h-r*v,this._z=f*_+d*v+r*p-c*h,this._w=d*_-r*h-c*p-f*v,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const r=this._x,c=this._y,f=this._z,d=this._w;let h=d*e._w+r*e._x+c*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=c,this._z=f,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-a;return this._w=M*d+a*this._w,this._x=M*r+a*this._x,this._y=M*c+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const v=Math.sqrt(p),_=Math.atan2(v,h),g=Math.sin((1-a)*_)/v,y=Math.sin(a*_)/v;return this._w=d*g+this._w*y,this._x=r*g+this._x*y,this._y=c*g+this._y*y,this._z=f*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,a,r){return this.copy(e).slerp(a,r)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(c*Math.sin(e),c*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,a=0,r=0){at.prototype.isVector3=!0,this.x=e,this.y=a,this.z=r}set(e,a,r){return r===void 0&&(r=this.z),this.x=e,this.y=a,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(f_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(f_.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,r=this.y,c=this.z,f=e.elements;return this.x=f[0]*a+f[3]*r+f[6]*c,this.y=f[1]*a+f[4]*r+f[7]*c,this.z=f[2]*a+f[5]*r+f[8]*c,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,r=this.y,c=this.z,f=e.elements,d=1/(f[3]*a+f[7]*r+f[11]*c+f[15]);return this.x=(f[0]*a+f[4]*r+f[8]*c+f[12])*d,this.y=(f[1]*a+f[5]*r+f[9]*c+f[13])*d,this.z=(f[2]*a+f[6]*r+f[10]*c+f[14])*d,this}applyQuaternion(e){const a=this.x,r=this.y,c=this.z,f=e.x,d=e.y,h=e.z,p=e.w,v=2*(d*c-h*r),_=2*(h*a-f*c),g=2*(f*r-d*a);return this.x=a+p*v+d*g-h*_,this.y=r+p*_+h*v-f*g,this.z=c+p*g+f*_-d*v,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,r=this.y,c=this.z,f=e.elements;return this.x=f[0]*a+f[4]*r+f[8]*c,this.y=f[1]*a+f[5]*r+f[9]*c,this.z=f[2]*a+f[6]*r+f[10]*c,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this}clampLength(e,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(a,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,r){return this.x=e.x+(a.x-e.x)*r,this.y=e.y+(a.y-e.y)*r,this.z=e.z+(a.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const r=e.x,c=e.y,f=e.z,d=a.x,h=a.y,p=a.z;return this.x=c*p-f*h,this.y=f*d-r*p,this.z=r*h-c*d,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const r=e.dot(this)/a;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const r=this.dot(e)/a;return Math.acos(Un(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,r=this.y-e.y,c=this.z-e.z;return a*a+r*r+c*c}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,r){const c=Math.sin(a)*e;return this.x=c*Math.sin(r),this.y=Math.cos(a)*e,this.z=c*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,r){return this.x=e*Math.sin(a),this.y=r,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),c=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=r,this.z=c,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,r=Math.sqrt(1-a*a);return this.x=r*Math.cos(e),this.y=a,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new at,f_=new Qs;class yl{constructor(e=new at(1/0,1/0,1/0),a=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,r=e.length;a<r;a+=3)this.expandByPoint(wi.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,r=e.count;a<r;a++)this.expandByPoint(wi.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,r=e.length;a<r;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const r=wi.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,wi):wi.fromBufferAttribute(f,d),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yc.copy(r.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}const c=e.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,r;return e.normal.x>0?(a=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),a<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cl),Wc.subVectors(this.max,cl),Gr.subVectors(e.a,cl),Vr.subVectors(e.b,cl),kr.subVectors(e.c,cl),es.subVectors(Vr,Gr),ns.subVectors(kr,Vr),zs.subVectors(Gr,kr);let a=[0,-es.z,es.y,0,-ns.z,ns.y,0,-zs.z,zs.y,es.z,0,-es.x,ns.z,0,-ns.x,zs.z,0,-zs.x,-es.y,es.x,0,-ns.y,ns.x,0,-zs.y,zs.x,0];return!ud(a,Gr,Vr,kr,Wc)||(a=[1,0,0,0,1,0,0,0,1],!ud(a,Gr,Vr,kr,Wc))?!1:(Zc.crossVectors(es,ns),a=[Zc.x,Zc.y,Zc.z],ud(a,Gr,Vr,kr,Wc))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pa=[new at,new at,new at,new at,new at,new at,new at,new at],wi=new at,Yc=new yl,Gr=new at,Vr=new at,kr=new at,es=new at,ns=new at,zs=new at,cl=new at,Wc=new at,Zc=new at,Bs=new at;function ud(o,e,a,r,c){for(let f=0,d=o.length-3;f<=d;f+=3){Bs.fromArray(o,f);const h=c.x*Math.abs(Bs.x)+c.y*Math.abs(Bs.y)+c.z*Math.abs(Bs.z),p=e.dot(Bs),v=a.dot(Bs),_=r.dot(Bs);if(Math.max(-Math.max(p,v,_),Math.min(p,v,_))>h)return!1}return!0}const f1=new yl,ul=new at,fd=new at;class Dp{constructor(e=new at,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const r=this.center;a!==void 0?r.copy(a):f1.setFromPoints(e).getCenter(r);let c=0;for(let f=0,d=e.length;f<d;f++)c=Math.max(c,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(c),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const r=this.center.distanceToSquared(e);return a.copy(e),r>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ul.subVectors(e,this.center);const a=ul.lengthSq();if(a>this.radius*this.radius){const r=Math.sqrt(a),c=(r-this.radius)*.5;this.center.addScaledVector(ul,c/r),this.radius+=c}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ul.copy(e.center).add(fd)),this.expandByPoint(ul.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ma=new at,hd=new at,Kc=new at,is=new at,dd=new at,Qc=new at,pd=new at;class Ex{constructor(e=new at,a=new at(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const r=a.dot(this.direction);return r<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=ma.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,a),ma.distanceToSquared(e))}distanceSqToSegment(e,a,r,c){hd.copy(e).add(a).multiplyScalar(.5),Kc.copy(a).sub(e).normalize(),is.copy(this.origin).sub(hd);const f=e.distanceTo(a)*.5,d=-this.direction.dot(Kc),h=is.dot(this.direction),p=-is.dot(Kc),v=is.lengthSq(),_=Math.abs(1-d*d);let g,y,M,b;if(_>0)if(g=d*p-h,y=d*h-p,b=f*_,g>=0)if(y>=-b)if(y<=b){const w=1/_;g*=w,y*=w,M=g*(g+d*y+2*h)+y*(d*g+y+2*p)+v}else y=f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+v;else y=-f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+v;else y<=-b?(g=Math.max(0,-(-d*f+h)),y=g>0?-f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+v):y<=b?(g=0,y=Math.min(Math.max(-f,-p),f),M=y*(y+2*p)+v):(g=Math.max(0,-(d*f+h)),y=g>0?f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+v);else y=d>0?-f:f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+v;return r&&r.copy(this.origin).addScaledVector(this.direction,g),c&&c.copy(hd).addScaledVector(Kc,y),M}intersectSphere(e,a){ma.subVectors(e.center,this.origin);const r=ma.dot(this.direction),c=ma.dot(ma)-r*r,f=e.radius*e.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,a):this.at(h,a)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/a;return r>=0?r:null}intersectPlane(e,a){const r=this.distanceToPlane(e);return r===null?null:this.at(r,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let r,c,f,d,h,p;const v=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return v>=0?(r=(e.min.x-y.x)*v,c=(e.max.x-y.x)*v):(r=(e.max.x-y.x)*v,c=(e.min.x-y.x)*v),_>=0?(f=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(f=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),r>d||f>c||((f>r||isNaN(r))&&(r=f),(d<c||isNaN(c))&&(c=d),g>=0?(h=(e.min.z-y.z)*g,p=(e.max.z-y.z)*g):(h=(e.max.z-y.z)*g,p=(e.min.z-y.z)*g),r>p||h>c)||((h>r||r!==r)&&(r=h),(p<c||c!==c)&&(c=p),c<0)?null:this.at(r>=0?r:c,a)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,a,r,c,f){dd.subVectors(a,e),Qc.subVectors(r,e),pd.crossVectors(dd,Qc);let d=this.direction.dot(pd),h;if(d>0){if(c)return null;h=1}else if(d<0)h=-1,d=-d;else return null;is.subVectors(this.origin,e);const p=h*this.direction.dot(Qc.crossVectors(is,Qc));if(p<0)return null;const v=h*this.direction.dot(dd.cross(is));if(v<0||p+v>d)return null;const _=-h*is.dot(pd);return _<0?null:this.at(_/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,a,r,c,f,d,h,p,v,_,g,y,M,b,w,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,r,c,f,d,h,p,v,_,g,y,M,b,w,S)}set(e,a,r,c,f,d,h,p,v,_,g,y,M,b,w,S){const x=this.elements;return x[0]=e,x[4]=a,x[8]=r,x[12]=c,x[1]=f,x[5]=d,x[9]=h,x[13]=p,x[2]=v,x[6]=_,x[10]=g,x[14]=y,x[3]=M,x[7]=b,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const a=this.elements,r=e.elements;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[3],a[4]=r[4],a[5]=r[5],a[6]=r[6],a[7]=r[7],a[8]=r[8],a[9]=r[9],a[10]=r[10],a[11]=r[11],a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15],this}copyPosition(e){const a=this.elements,r=e.elements;return a[12]=r[12],a[13]=r[13],a[14]=r[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,r){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,a,r){return this.set(e.x,a.x,r.x,0,e.y,a.y,r.y,0,e.z,a.z,r.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,r=e.elements,c=1/Xr.setFromMatrixColumn(e,0).length(),f=1/Xr.setFromMatrixColumn(e,1).length(),d=1/Xr.setFromMatrixColumn(e,2).length();return a[0]=r[0]*c,a[1]=r[1]*c,a[2]=r[2]*c,a[3]=0,a[4]=r[4]*f,a[5]=r[5]*f,a[6]=r[6]*f,a[7]=0,a[8]=r[8]*d,a[9]=r[9]*d,a[10]=r[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,r=e.x,c=e.y,f=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(c),v=Math.sin(c),_=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const y=d*_,M=d*g,b=h*_,w=h*g;a[0]=p*_,a[4]=-p*g,a[8]=v,a[1]=M+b*v,a[5]=y-w*v,a[9]=-h*p,a[2]=w-y*v,a[6]=b+M*v,a[10]=d*p}else if(e.order==="YXZ"){const y=p*_,M=p*g,b=v*_,w=v*g;a[0]=y+w*h,a[4]=b*h-M,a[8]=d*v,a[1]=d*g,a[5]=d*_,a[9]=-h,a[2]=M*h-b,a[6]=w+y*h,a[10]=d*p}else if(e.order==="ZXY"){const y=p*_,M=p*g,b=v*_,w=v*g;a[0]=y-w*h,a[4]=-d*g,a[8]=b+M*h,a[1]=M+b*h,a[5]=d*_,a[9]=w-y*h,a[2]=-d*v,a[6]=h,a[10]=d*p}else if(e.order==="ZYX"){const y=d*_,M=d*g,b=h*_,w=h*g;a[0]=p*_,a[4]=b*v-M,a[8]=y*v+w,a[1]=p*g,a[5]=w*v+y,a[9]=M*v-b,a[2]=-v,a[6]=h*p,a[10]=d*p}else if(e.order==="YZX"){const y=d*p,M=d*v,b=h*p,w=h*v;a[0]=p*_,a[4]=w-y*g,a[8]=b*g+M,a[1]=g,a[5]=d*_,a[9]=-h*_,a[2]=-v*_,a[6]=M*g+b,a[10]=y-w*g}else if(e.order==="XZY"){const y=d*p,M=d*v,b=h*p,w=h*v;a[0]=p*_,a[4]=-g,a[8]=v*_,a[1]=y*g+w,a[5]=d*_,a[9]=M*g-b,a[2]=b*g-M,a[6]=h*_,a[10]=w*g+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h1,e,d1)}lookAt(e,a,r){const c=this.elements;return oi.subVectors(e,a),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),as.crossVectors(r,oi),as.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),as.crossVectors(r,oi)),as.normalize(),Jc.crossVectors(oi,as),c[0]=as.x,c[4]=Jc.x,c[8]=oi.x,c[1]=as.y,c[5]=Jc.y,c[9]=oi.y,c[2]=as.z,c[6]=Jc.z,c[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const r=e.elements,c=a.elements,f=this.elements,d=r[0],h=r[4],p=r[8],v=r[12],_=r[1],g=r[5],y=r[9],M=r[13],b=r[2],w=r[6],S=r[10],x=r[14],z=r[3],O=r[7],N=r[11],st=r[15],G=c[0],P=c[4],B=c[8],D=c[12],A=c[1],F=c[5],et=c[9],tt=c[13],dt=c[2],pt=c[6],j=c[10],rt=c[14],Q=c[3],yt=c[7],St=c[11],Gt=c[15];return f[0]=d*G+h*A+p*dt+v*Q,f[4]=d*P+h*F+p*pt+v*yt,f[8]=d*B+h*et+p*j+v*St,f[12]=d*D+h*tt+p*rt+v*Gt,f[1]=_*G+g*A+y*dt+M*Q,f[5]=_*P+g*F+y*pt+M*yt,f[9]=_*B+g*et+y*j+M*St,f[13]=_*D+g*tt+y*rt+M*Gt,f[2]=b*G+w*A+S*dt+x*Q,f[6]=b*P+w*F+S*pt+x*yt,f[10]=b*B+w*et+S*j+x*St,f[14]=b*D+w*tt+S*rt+x*Gt,f[3]=z*G+O*A+N*dt+st*Q,f[7]=z*P+O*F+N*pt+st*yt,f[11]=z*B+O*et+N*j+st*St,f[15]=z*D+O*tt+N*rt+st*Gt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],r=e[4],c=e[8],f=e[12],d=e[1],h=e[5],p=e[9],v=e[13],_=e[2],g=e[6],y=e[10],M=e[14],b=e[3],w=e[7],S=e[11],x=e[15];return b*(+f*p*g-c*v*g-f*h*y+r*v*y+c*h*M-r*p*M)+w*(+a*p*M-a*v*y+f*d*y-c*d*M+c*v*_-f*p*_)+S*(+a*v*g-a*h*M-f*d*g+r*d*M+f*h*_-r*v*_)+x*(-c*h*_-a*p*g+a*h*y+c*d*g-r*d*y+r*p*_)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,r){const c=this.elements;return e.isVector3?(c[12]=e.x,c[13]=e.y,c[14]=e.z):(c[12]=e,c[13]=a,c[14]=r),this}invert(){const e=this.elements,a=e[0],r=e[1],c=e[2],f=e[3],d=e[4],h=e[5],p=e[6],v=e[7],_=e[8],g=e[9],y=e[10],M=e[11],b=e[12],w=e[13],S=e[14],x=e[15],z=g*S*v-w*y*v+w*p*M-h*S*M-g*p*x+h*y*x,O=b*y*v-_*S*v-b*p*M+d*S*M+_*p*x-d*y*x,N=_*w*v-b*g*v+b*h*M-d*w*M-_*h*x+d*g*x,st=b*g*p-_*w*p-b*h*y+d*w*y+_*h*S-d*g*S,G=a*z+r*O+c*N+f*st;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return e[0]=z*P,e[1]=(w*y*f-g*S*f-w*c*M+r*S*M+g*c*x-r*y*x)*P,e[2]=(h*S*f-w*p*f+w*c*v-r*S*v-h*c*x+r*p*x)*P,e[3]=(g*p*f-h*y*f-g*c*v+r*y*v+h*c*M-r*p*M)*P,e[4]=O*P,e[5]=(_*S*f-b*y*f+b*c*M-a*S*M-_*c*x+a*y*x)*P,e[6]=(b*p*f-d*S*f-b*c*v+a*S*v+d*c*x-a*p*x)*P,e[7]=(d*y*f-_*p*f+_*c*v-a*y*v-d*c*M+a*p*M)*P,e[8]=N*P,e[9]=(b*g*f-_*w*f-b*r*M+a*w*M+_*r*x-a*g*x)*P,e[10]=(d*w*f-b*h*f+b*r*v-a*w*v-d*r*x+a*h*x)*P,e[11]=(_*h*f-d*g*f-_*r*v+a*g*v+d*r*M-a*h*M)*P,e[12]=st*P,e[13]=(_*w*c-b*g*c+b*r*y-a*w*y-_*r*S+a*g*S)*P,e[14]=(b*h*c-d*w*c-b*r*p+a*w*p+d*r*S-a*h*S)*P,e[15]=(d*g*c-_*h*c+_*r*p-a*g*p-d*r*y+a*h*y)*P,this}scale(e){const a=this.elements,r=e.x,c=e.y,f=e.z;return a[0]*=r,a[4]*=c,a[8]*=f,a[1]*=r,a[5]*=c,a[9]*=f,a[2]*=r,a[6]*=c,a[10]*=f,a[3]*=r,a[7]*=c,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],c=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,r,c))}makeTranslation(e,a,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,r,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,a,-r,0,0,r,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,0,r,0,0,1,0,0,-r,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),r=Math.sin(e);return this.set(a,-r,0,0,r,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const r=Math.cos(a),c=Math.sin(a),f=1-r,d=e.x,h=e.y,p=e.z,v=f*d,_=f*h;return this.set(v*d+r,v*h-c*p,v*p+c*h,0,v*h+c*p,_*h+r,_*p-c*d,0,v*p-c*h,_*p+c*d,f*p*p+r,0,0,0,0,1),this}makeScale(e,a,r){return this.set(e,0,0,0,0,a,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,a,r,c,f,d){return this.set(1,r,f,0,e,1,d,0,a,c,1,0,0,0,0,1),this}compose(e,a,r){const c=this.elements,f=a._x,d=a._y,h=a._z,p=a._w,v=f+f,_=d+d,g=h+h,y=f*v,M=f*_,b=f*g,w=d*_,S=d*g,x=h*g,z=p*v,O=p*_,N=p*g,st=r.x,G=r.y,P=r.z;return c[0]=(1-(w+x))*st,c[1]=(M+N)*st,c[2]=(b-O)*st,c[3]=0,c[4]=(M-N)*G,c[5]=(1-(y+x))*G,c[6]=(S+z)*G,c[7]=0,c[8]=(b+O)*P,c[9]=(S-z)*P,c[10]=(1-(y+w))*P,c[11]=0,c[12]=e.x,c[13]=e.y,c[14]=e.z,c[15]=1,this}decompose(e,a,r){const c=this.elements;let f=Xr.set(c[0],c[1],c[2]).length();const d=Xr.set(c[4],c[5],c[6]).length(),h=Xr.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),e.x=c[12],e.y=c[13],e.z=c[14],Di.copy(this);const v=1/f,_=1/d,g=1/h;return Di.elements[0]*=v,Di.elements[1]*=v,Di.elements[2]*=v,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,a.setFromRotationMatrix(Di),r.x=f,r.y=d,r.z=h,this}makePerspective(e,a,r,c,f,d,h=Ma){const p=this.elements,v=2*f/(a-e),_=2*f/(r-c),g=(a+e)/(a-e),y=(r+c)/(r-c);let M,b;if(h===Ma)M=-(d+f)/(d-f),b=-2*d*f/(d-f);else if(h===Su)M=-d/(d-f),b=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,a,r,c,f,d,h=Ma){const p=this.elements,v=1/(a-e),_=1/(r-c),g=1/(d-f),y=(a+e)*v,M=(r+c)*_;let b,w;if(h===Ma)b=(d+f)*g,w=-2*g;else if(h===Su)b=f*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*v,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const a=this.elements,r=e.elements;for(let c=0;c<16;c++)if(a[c]!==r[c])return!1;return!0}fromArray(e,a=0){for(let r=0;r<16;r++)this.elements[r]=e[r+a];return this}toArray(e=[],a=0){const r=this.elements;return e[a]=r[0],e[a+1]=r[1],e[a+2]=r[2],e[a+3]=r[3],e[a+4]=r[4],e[a+5]=r[5],e[a+6]=r[6],e[a+7]=r[7],e[a+8]=r[8],e[a+9]=r[9],e[a+10]=r[10],e[a+11]=r[11],e[a+12]=r[12],e[a+13]=r[13],e[a+14]=r[14],e[a+15]=r[15],e}}const Xr=new at,Di=new rn,h1=new at(0,0,0),d1=new at(1,1,1),as=new at,Jc=new at,oi=new at,h_=new rn,d_=new Qs;class ba{constructor(e=0,a=0,r=0,c=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=r,this._order=c}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,r,c=this._order){return this._x=e,this._y=a,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,r=!0){const c=e.elements,f=c[0],d=c[4],h=c[8],p=c[1],v=c[5],_=c[9],g=c[2],y=c[6],M=c[10];switch(a){case"XYZ":this._y=Math.asin(Un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(y,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,v)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Un(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,v)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Un(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,v));break;case"YZX":this._z=Math.asin(Un(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,v),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,v),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,r){return h_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h_,a,r)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return d_.setFromEuler(this),this.setFromQuaternion(d_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class Tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p1=0;const p_=new at,qr=new Qs,ga=new rn,$c=new at,fl=new at,m1=new at,g1=new Qs,m_=new at(1,0,0),g_=new at(0,1,0),v_=new at(0,0,1),__={type:"added"},v1={type:"removed"},jr={type:"childadded",child:null},md={type:"childremoved",child:null};class ci extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new at,a=new ba,r=new Qs,c=new at(1,1,1);function f(){r.setFromEuler(a,!1)}function d(){a.setFromQuaternion(r,void 0,!1)}a._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new rn},normalMatrix:{value:new ue}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return qr.setFromAxisAngle(e,a),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,a){return qr.setFromAxisAngle(e,a),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(m_,e)}rotateY(e){return this.rotateOnAxis(g_,e)}rotateZ(e){return this.rotateOnAxis(v_,e)}translateOnAxis(e,a){return p_.copy(e).applyQuaternion(this.quaternion),this.position.add(p_.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(m_,e)}translateY(e){return this.translateOnAxis(g_,e)}translateZ(e){return this.translateOnAxis(v_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,a,r){e.isVector3?$c.copy(e):$c.set(e,a,r);const c=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(fl,$c,this.up):ga.lookAt($c,fl,this.up),this.quaternion.setFromRotationMatrix(ga),c&&(ga.extractRotation(c.matrixWorld),qr.setFromRotationMatrix(ga),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(__),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(v1),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(__),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let r=0,c=this.children.length;r<c;r++){const d=this.children[r].getObjectByProperty(e,a);if(d!==void 0)return d}}getObjectsByProperty(e,a,r=[]){this[e]===a&&r.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(e,a,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,m1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,g1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].updateMatrixWorld(e)}updateWorldMatrix(e,a){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",r={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let v=0,_=p.length;v<_;v++){const g=p[v];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,v=this.material.length;p<v;p++)h.push(f(e.materials,this.material[p]));c.material=h}else c.material=f(e.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];c.animations.push(f(e.animations,p))}}if(a){const h=d(e.geometries),p=d(e.materials),v=d(e.textures),_=d(e.images),g=d(e.shapes),y=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),v.length>0&&(r.textures=v),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=c,r;function d(h){const p=[];for(const v in h){const _=h[v];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let r=0;r<e.children.length;r++){const c=e.children[r];this.add(c.clone())}return this}}ci.DEFAULT_UP=new at(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new at,va=new at,gd=new at,_a=new at,Yr=new at,Wr=new at,x_=new at,vd=new at,_d=new at,xd=new at,yd=new $e,Sd=new $e,Md=new $e;class Ui{constructor(e=new at,a=new at,r=new at){this.a=e,this.b=a,this.c=r}static getNormal(e,a,r,c){c.subVectors(r,a),Ni.subVectors(e,a),c.cross(Ni);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(e,a,r,c,f){Ni.subVectors(c,a),va.subVectors(r,a),gd.subVectors(e,a);const d=Ni.dot(Ni),h=Ni.dot(va),p=Ni.dot(gd),v=va.dot(va),_=va.dot(gd),g=d*v-h*h;if(g===0)return f.set(0,0,0),null;const y=1/g,M=(v*p-h*_)*y,b=(d*_-h*p)*y;return f.set(1-M-b,b,M)}static containsPoint(e,a,r,c){return this.getBarycoord(e,a,r,c,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,a,r,c,f,d,h,p){return this.getBarycoord(e,a,r,c,_a)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,_a.x),p.addScaledVector(d,_a.y),p.addScaledVector(h,_a.z),p)}static getInterpolatedAttribute(e,a,r,c,f,d){return yd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(e,a),Sd.fromBufferAttribute(e,r),Md.fromBufferAttribute(e,c),d.setScalar(0),d.addScaledVector(yd,f.x),d.addScaledVector(Sd,f.y),d.addScaledVector(Md,f.z),d}static isFrontFacing(e,a,r,c){return Ni.subVectors(r,a),va.subVectors(e,a),Ni.cross(va).dot(c)<0}set(e,a,r){return this.a.copy(e),this.b.copy(a),this.c.copy(r),this}setFromPointsAndIndices(e,a,r,c){return this.a.copy(e[a]),this.b.copy(e[r]),this.c.copy(e[c]),this}setFromAttributeAndIndices(e,a,r,c){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,c),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ni.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Ui.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,r,c,f){return Ui.getInterpolation(e,this.a,this.b,this.c,a,r,c,f)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const r=this.a,c=this.b,f=this.c;let d,h;Yr.subVectors(c,r),Wr.subVectors(f,r),vd.subVectors(e,r);const p=Yr.dot(vd),v=Wr.dot(vd);if(p<=0&&v<=0)return a.copy(r);_d.subVectors(e,c);const _=Yr.dot(_d),g=Wr.dot(_d);if(_>=0&&g<=_)return a.copy(c);const y=p*g-_*v;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),a.copy(r).addScaledVector(Yr,d);xd.subVectors(e,f);const M=Yr.dot(xd),b=Wr.dot(xd);if(b>=0&&M<=b)return a.copy(f);const w=M*v-p*b;if(w<=0&&v>=0&&b<=0)return h=v/(v-b),a.copy(r).addScaledVector(Wr,h);const S=_*b-M*g;if(S<=0&&g-_>=0&&M-b>=0)return x_.subVectors(f,c),h=(g-_)/(g-_+(M-b)),a.copy(c).addScaledVector(x_,h);const x=1/(S+w+y);return d=w*x,h=y*x,a.copy(r).addScaledVector(Yr,d).addScaledVector(Wr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},tu={h:0,s:0,l:0};function Ed(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Ge{constructor(e,a,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,r)}set(e,a,r){if(a===void 0&&r===void 0){const c=e;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(e,a,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.toWorkingColorSpace(this,a),this}setRGB(e,a,r,c=Re.workingColorSpace){return this.r=e,this.g=a,this.b=r,Re.toWorkingColorSpace(this,c),this}setHSL(e,a,r,c=Re.workingColorSpace){if(e=wp(e,1),a=Un(a,0,1),r=Un(r,0,1),a===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+a):r+a-r*a,d=2*r-f;this.r=Ed(d,f,e+1/3),this.g=Ed(d,f,e),this.b=Ed(d,f,e-1/3)}return Re.toWorkingColorSpace(this,c),this}setStyle(e,a=Si){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=Si){const r=bx[e.toLowerCase()];return r!==void 0?this.setHex(r,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Re.fromWorkingColorSpace(Nn.copy(this),e),Math.round(Un(Nn.r*255,0,255))*65536+Math.round(Un(Nn.g*255,0,255))*256+Math.round(Un(Nn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=Re.workingColorSpace){Re.fromWorkingColorSpace(Nn.copy(this),a);const r=Nn.r,c=Nn.g,f=Nn.b,d=Math.max(r,c,f),h=Math.min(r,c,f);let p,v;const _=(h+d)/2;if(h===d)p=0,v=0;else{const g=d-h;switch(v=_<=.5?g/(d+h):g/(2-d-h),d){case r:p=(c-f)/g+(c<f?6:0);break;case c:p=(f-r)/g+2;break;case f:p=(r-c)/g+4;break}p/=6}return e.h=p,e.s=v,e.l=_,e}getRGB(e,a=Re.workingColorSpace){return Re.fromWorkingColorSpace(Nn.copy(this),a),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Si){Re.fromWorkingColorSpace(Nn.copy(this),e);const a=Nn.r,r=Nn.g,c=Nn.b;return e!==Si?`color(${e} ${a.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(e,a,r){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+a,ss.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,r){return this.r=e.r+(a.r-e.r)*r,this.g=e.g+(a.g-e.g)*r,this.b=e.b+(a.b-e.b)*r,this}lerpHSL(e,a){this.getHSL(ss),e.getHSL(tu);const r=gl(ss.h,tu.h,a),c=gl(ss.s,tu.s,a),f=gl(ss.l,tu.l,a);return this.setHSL(r,c,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,r=this.g,c=this.b,f=e.elements;return this.r=f[0]*a+f[3]*r+f[6]*c,this.g=f[1]*a+f[4]*r+f[7]*c,this.b=f[2]*a+f[5]*r+f[8]*c,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ge;Ge.NAMES=bx;let _1=0;class bu extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=po(),this.name="",this.blending=io,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=zd,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const r=e[a];if(r===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[a]=r}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==hs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pd&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==Xs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(a){const f=c(e.textures),d=c(e.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let r=null;if(a!==null){const c=a.length;r=new Array(c);for(let f=0;f!==c;++f)r[f]=a[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ax extends bu{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new at,eu=new me;class Ki{constructor(e,a,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=r,this.usage=n_,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,r){e*=this.itemSize,r*=a.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[e+c]=a.array[r+c];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,r=this.count;a<r;a++)eu.fromBufferAttribute(this,a),eu.applyMatrix3(e),this.setXY(a,eu.x,eu.y);else if(this.itemSize===3)for(let a=0,r=this.count;a<r;a++)sn.fromBufferAttribute(this,a),sn.applyMatrix3(e),this.setXYZ(a,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let a=0,r=this.count;a<r;a++)sn.fromBufferAttribute(this,a),sn.applyMatrix4(e),this.setXYZ(a,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let a=0,r=this.count;a<r;a++)sn.fromBufferAttribute(this,a),sn.applyNormalMatrix(e),this.setXYZ(a,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let a=0,r=this.count;a<r;a++)sn.fromBufferAttribute(this,a),sn.transformDirection(e),this.setXYZ(a,sn.x,sn.y,sn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let r=this.array[e*this.itemSize+a];return this.normalized&&(r=$r(r,this.array)),r}setComponent(e,a,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+a]=r,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=$r(a,this.array)),a}setX(e,a){return this.normalized&&(a=Fn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=$r(a,this.array)),a}setY(e,a){return this.normalized&&(a=Fn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=$r(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Fn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=$r(a,this.array)),a}setW(e,a){return this.normalized&&(a=Fn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,r){return e*=this.itemSize,this.normalized&&(a=Fn(a,this.array),r=Fn(r,this.array)),this.array[e+0]=a,this.array[e+1]=r,this}setXYZ(e,a,r,c){return e*=this.itemSize,this.normalized&&(a=Fn(a,this.array),r=Fn(r,this.array),c=Fn(c,this.array)),this.array[e+0]=a,this.array[e+1]=r,this.array[e+2]=c,this}setXYZW(e,a,r,c,f){return e*=this.itemSize,this.normalized&&(a=Fn(a,this.array),r=Fn(r,this.array),c=Fn(c,this.array),f=Fn(f,this.array)),this.array[e+0]=a,this.array[e+1]=r,this.array[e+2]=c,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==n_&&(e.usage=this.usage),e}}class Cx extends Ki{constructor(e,a,r){super(new Uint16Array(e),a,r)}}class Rx extends Ki{constructor(e,a,r){super(new Uint32Array(e),a,r)}}class Ws extends Ki{constructor(e,a,r){super(new Float32Array(e),a,r)}}let x1=0;const yi=new rn,Td=new ci,Zr=new at,li=new yl,hl=new yl,xn=new at;class $s extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?Rx:Cx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,r=0){this.groups.push({start:e,count:a,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new ue().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(e),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,a,r){return yi.makeTranslation(e,a,r),this.applyMatrix4(yi),this}scale(e,a,r){return yi.makeScale(e,a,r),this.applyMatrix4(yi),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const r=[];for(let c=0,f=e.length;c<f;c++){const d=e[c];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ws(r,3))}else{for(let r=0,c=a.count;r<c;r++){const f=e[r];a.setXYZ(r,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let r=0,c=a.length;r<c;r++){const f=a[r];li.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dp);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];hl.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(li.min,hl.min),li.expandByPoint(xn),xn.addVectors(li.max,hl.max),li.expandByPoint(xn)):(li.expandByPoint(hl.min),li.expandByPoint(hl.max))}li.getCenter(r);let c=0;for(let f=0,d=e.count;f<d;f++)xn.fromBufferAttribute(e,f),c=Math.max(c,r.distanceToSquared(xn));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],p=this.morphTargetsRelative;for(let v=0,_=h.count;v<_;v++)xn.fromBufferAttribute(h,v),p&&(Zr.fromBufferAttribute(e,v),xn.add(Zr)),c=Math.max(c,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=a.position,c=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let B=0;B<r.count;B++)h[B]=new at,p[B]=new at;const v=new at,_=new at,g=new at,y=new me,M=new me,b=new me,w=new at,S=new at;function x(B,D,A){v.fromBufferAttribute(r,B),_.fromBufferAttribute(r,D),g.fromBufferAttribute(r,A),y.fromBufferAttribute(f,B),M.fromBufferAttribute(f,D),b.fromBufferAttribute(f,A),_.sub(v),g.sub(v),M.sub(y),b.sub(y);const F=1/(M.x*b.y-b.x*M.y);isFinite(F)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(F),S.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(F),h[B].add(w),h[D].add(w),h[A].add(w),p[B].add(S),p[D].add(S),p[A].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let B=0,D=z.length;B<D;++B){const A=z[B],F=A.start,et=A.count;for(let tt=F,dt=F+et;tt<dt;tt+=3)x(e.getX(tt+0),e.getX(tt+1),e.getX(tt+2))}const O=new at,N=new at,st=new at,G=new at;function P(B){st.fromBufferAttribute(c,B),G.copy(st);const D=h[B];O.copy(D),O.sub(st.multiplyScalar(st.dot(D))).normalize(),N.crossVectors(G,D);const F=N.dot(p[B])<0?-1:1;d.setXYZW(B,O.x,O.y,O.z,F)}for(let B=0,D=z.length;B<D;++B){const A=z[B],F=A.start,et=A.count;for(let tt=F,dt=F+et;tt<dt;tt+=3)P(e.getX(tt+0)),P(e.getX(tt+1)),P(e.getX(tt+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ki(new Float32Array(a.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const c=new at,f=new at,d=new at,h=new at,p=new at,v=new at,_=new at,g=new at;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);c.fromBufferAttribute(a,b),f.fromBufferAttribute(a,w),d.fromBufferAttribute(a,S),_.subVectors(d,f),g.subVectors(c,f),_.cross(g),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,S),h.add(_),p.add(_),v.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(S,v.x,v.y,v.z)}else for(let y=0,M=a.count;y<M;y+=3)c.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),d.fromBufferAttribute(a,y+2),_.subVectors(d,f),g.subVectors(c,f),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,r=e.count;a<r;a++)xn.fromBufferAttribute(e,a),xn.normalize(),e.setXYZ(a,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,p){const v=h.array,_=h.itemSize,g=h.normalized,y=new v.constructor(p.length*_);let M=0,b=0;for(let w=0,S=p.length;w<S;w++){h.isInterleavedBufferAttribute?M=p[w]*h.data.stride+h.offset:M=p[w]*_;for(let x=0;x<_;x++)y[b++]=v[M++]}return new Ki(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new $s,r=this.index.array,c=this.attributes;for(const h in c){const p=c[h],v=e(p,r);a.setAttribute(h,v)}const f=this.morphAttributes;for(const h in f){const p=[],v=f[h];for(let _=0,g=v.length;_<g;_++){const y=v[_],M=e(y,r);p.push(M)}a.morphAttributes[h]=p}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const v=d[h];a.addGroup(v.start,v.count,v.materialIndex)}return a}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const v in p)p[v]!==void 0&&(e[v]=p[v]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const r=this.attributes;for(const p in r){const v=r[p];e.data.attributes[p]=v.toJSON(e.data)}const c={};let f=!1;for(const p in this.morphAttributes){const v=this.morphAttributes[p],_=[];for(let g=0,y=v.length;g<y;g++){const M=v[g];_.push(M.toJSON(e.data))}_.length>0&&(c[p]=_,f=!0)}f&&(e.data.morphAttributes=c,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(a));const c=e.attributes;for(const v in c){const _=c[v];this.setAttribute(v,_.clone(a))}const f=e.morphAttributes;for(const v in f){const _=[],g=f[v];for(let y=0,M=g.length;y<M;y++)_.push(g[y].clone(a));this.morphAttributes[v]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let v=0,_=d.length;v<_;v++){const g=d[v];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y_=new rn,Is=new Ex,nu=new Dp,S_=new at,iu=new at,au=new at,su=new at,bd=new at,ru=new at,M_=new at,ou=new at;class Zi extends ci{constructor(e=new $s,a=new Ax){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,r=Object.keys(a);if(r.length>0){const c=a[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,a){const r=this.geometry,c=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;a.fromBufferAttribute(c,e);const h=this.morphTargetInfluences;if(f&&h){ru.set(0,0,0);for(let p=0,v=f.length;p<v;p++){const _=h[p],g=f[p];_!==0&&(bd.fromBufferAttribute(g,e),d?ru.addScaledVector(bd,_):ru.addScaledVector(bd.sub(a),_))}a.add(ru)}return a}raycast(e,a){const r=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(f),Is.copy(e.ray).recast(e.near),!(nu.containsPoint(Is.origin)===!1&&(Is.intersectSphere(nu,S_)===null||Is.origin.distanceToSquared(S_)>(e.far-e.near)**2))&&(y_.copy(f).invert(),Is.copy(e.ray).applyMatrix4(y_),!(r.boundingBox!==null&&Is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,a,Is)))}_computeIntersections(e,a,r){let c;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,v=f.attributes.uv,_=f.attributes.uv1,g=f.attributes.normal,y=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,w=y.length;b<w;b++){const S=y[b],x=d[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let N=z,st=O;N<st;N+=3){const G=h.getX(N),P=h.getX(N+1),B=h.getX(N+2);c=lu(this,x,e,r,v,_,g,G,P,B),c&&(c.faceIndex=Math.floor(N/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const b=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let S=b,x=w;S<x;S+=3){const z=h.getX(S),O=h.getX(S+1),N=h.getX(S+2);c=lu(this,d,e,r,v,_,g,z,O,N),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,w=y.length;b<w;b++){const S=y[b],x=d[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let N=z,st=O;N<st;N+=3){const G=N,P=N+1,B=N+2;c=lu(this,x,e,r,v,_,g,G,P,B),c&&(c.faceIndex=Math.floor(N/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let S=b,x=w;S<x;S+=3){const z=S,O=S+1,N=S+2;c=lu(this,d,e,r,v,_,g,z,O,N),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}}}function y1(o,e,a,r,c,f,d,h){let p;if(e.side===Wn?p=r.intersectTriangle(d,f,c,!0,h):p=r.intersectTriangle(c,f,d,e.side===hs,h),p===null)return null;ou.copy(h),ou.applyMatrix4(o.matrixWorld);const v=a.ray.origin.distanceTo(ou);return v<a.near||v>a.far?null:{distance:v,point:ou.clone(),object:o}}function lu(o,e,a,r,c,f,d,h,p,v){o.getVertexPosition(h,iu),o.getVertexPosition(p,au),o.getVertexPosition(v,su);const _=y1(o,e,a,r,iu,au,su,M_);if(_){const g=new at;Ui.getBarycoord(M_,iu,au,su,g),c&&(_.uv=Ui.getInterpolatedAttribute(c,h,p,v,g,new me)),f&&(_.uv1=Ui.getInterpolatedAttribute(f,h,p,v,g,new me)),d&&(_.normal=Ui.getInterpolatedAttribute(d,h,p,v,g,new at),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:p,c:v,normal:new at,materialIndex:0};Ui.getNormal(iu,au,su,y.normal),_.face=y,_.barycoord=g}return _}class Sl extends $s{constructor(e=1,a=1,r=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:r,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const p=[],v=[],_=[],g=[];let y=0,M=0;b("z","y","x",-1,-1,r,a,e,d,f,0),b("z","y","x",1,-1,r,a,-e,d,f,1),b("x","z","y",1,1,e,r,a,c,d,2),b("x","z","y",1,-1,e,r,-a,c,d,3),b("x","y","z",1,-1,e,a,r,c,f,4),b("x","y","z",-1,-1,e,a,-r,c,f,5),this.setIndex(p),this.setAttribute("position",new Ws(v,3)),this.setAttribute("normal",new Ws(_,3)),this.setAttribute("uv",new Ws(g,2));function b(w,S,x,z,O,N,st,G,P,B,D){const A=N/P,F=st/B,et=N/2,tt=st/2,dt=G/2,pt=P+1,j=B+1;let rt=0,Q=0;const yt=new at;for(let St=0;St<j;St++){const Gt=St*F-tt;for(let ne=0;ne<pt;ne++){const Ee=ne*A-et;yt[w]=Ee*z,yt[S]=Gt*O,yt[x]=dt,v.push(yt.x,yt.y,yt.z),yt[w]=0,yt[S]=0,yt[x]=G>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(ne/P),g.push(1-St/B),rt+=1}}for(let St=0;St<B;St++)for(let Gt=0;Gt<P;Gt++){const ne=y+Gt+pt*St,Ee=y+Gt+pt*(St+1),R=y+(Gt+1)+pt*(St+1),Y=y+(Gt+1)+pt*St;p.push(ne,Ee,Y),p.push(Ee,R,Y),Q+=6}h.addGroup(M,Q,D),M+=Q,y+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(o){const e={};for(const a in o){e[a]={};for(const r in o[a]){const c=o[a][r];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][r]=null):e[a][r]=c.clone():Array.isArray(c)?e[a][r]=c.slice():e[a][r]=c}}return e}function Hn(o){const e={};for(let a=0;a<o.length;a++){const r=fo(o[a]);for(const c in r)e[c]=r[c]}return e}function S1(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function wx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const M1={clone:fo,merge:Hn};var E1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Aa extends bu{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E1,this.fragmentShader=T1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=S1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?a.uniforms[c]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?a.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[c]={type:"m4",value:d.toArray()}:a.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(a.extensions=r),a}}class Dx extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ma}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new at,E_=new me,T_=new me;class Mi extends Dx{constructor(e=50,a=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,r){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,a){return this.getViewBounds(e,E_,T_),a.subVectors(T_,E_)}setViewOffset(e,a,r,c,f,d){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(ml*.5*this.fov)/this.zoom,r=2*a,c=this.aspect*r,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,v=d.fullHeight;f+=d.offsetX*c/p,a-=d.offsetY*r/v,c*=d.width/p,r*=d.height/v}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,a,a-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Kr=-90,Qr=1;class b1 extends ci{constructor(e,a,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Mi(Kr,Qr,e,a);c.layers=this.layers,this.add(c);const f=new Mi(Kr,Qr,e,a);f.layers=this.layers,this.add(f);const d=new Mi(Kr,Qr,e,a);d.layers=this.layers,this.add(d);const h=new Mi(Kr,Qr,e,a);h.layers=this.layers,this.add(h);const p=new Mi(Kr,Qr,e,a);p.layers=this.layers,this.add(p);const v=new Mi(Kr,Qr,e,a);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[r,c,f,d,h,p]=a;for(const v of a)this.remove(v);if(e===Ma)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Su)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const v of a)this.add(v),v.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,v,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,c),e.render(a,f),e.setRenderTarget(r,1,c),e.render(a,d),e.setRenderTarget(r,2,c),e.render(a,h),e.setRenderTarget(r,3,c),e.render(a,p),e.setRenderTarget(r,4,c),e.render(a,v),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,c),e.render(a,_),e.setRenderTarget(g,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Nx extends Zn{constructor(e,a,r,c,f,d,h,p,v,_){e=e!==void 0?e:[],a=a!==void 0?a:oo,super(e,a,r,c,f,d,h,p,v,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A1 extends Ks{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},c=[r,r,r,r,r,r];this.texture=new Nx(c,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:Wi}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new Sl(5,5,5),f=new Aa({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:us});f.uniforms.tEquirect.value=a;const d=new Zi(c,f),h=a.minFilter;return a.minFilter===Ys&&(a.minFilter=Wi),new b1(1,10,this).update(e,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,a,r,c){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(a,r,c);e.setRenderTarget(f)}}const Ad=new at,C1=new at,R1=new ue;class ls{constructor(e=new at(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,r,c){return this.normal.set(e,a,r),this.constant=c,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,r){const c=Ad.subVectors(r,a).cross(C1.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(c,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const r=e.delta(Ad),c=this.normal.dot(r);if(c===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:a.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return a<0&&r>0||r<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const r=a||R1.getNormalMatrix(e),c=this.coplanarPoint(Ad).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Dp,cu=new at;class Ux{constructor(e=new ls,a=new ls,r=new ls,c=new ls,f=new ls,d=new ls){this.planes=[e,a,r,c,f,d]}set(e,a,r,c,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(a),h[2].copy(r),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(e){const a=this.planes;for(let r=0;r<6;r++)a[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,a=Ma){const r=this.planes,c=e.elements,f=c[0],d=c[1],h=c[2],p=c[3],v=c[4],_=c[5],g=c[6],y=c[7],M=c[8],b=c[9],w=c[10],S=c[11],x=c[12],z=c[13],O=c[14],N=c[15];if(r[0].setComponents(p-f,y-v,S-M,N-x).normalize(),r[1].setComponents(p+f,y+v,S+M,N+x).normalize(),r[2].setComponents(p+d,y+_,S+b,N+z).normalize(),r[3].setComponents(p-d,y-_,S-b,N-z).normalize(),r[4].setComponents(p-h,y-g,S-w,N-O).normalize(),a===Ma)r[5].setComponents(p+h,y+g,S+w,N+O).normalize();else if(a===Su)r[5].setComponents(h,g,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Fs.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const a=this.planes,r=e.center,c=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(r)<c)return!1;return!0}intersectsBox(e){const a=this.planes;for(let r=0;r<6;r++){const c=a[r];if(cu.x=c.normal.x>0?e.max.x:e.min.x,cu.y=c.normal.y>0?e.max.y:e.min.y,cu.z=c.normal.z>0?e.max.z:e.min.z,c.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let r=0;r<6;r++)if(a[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lx(){let o=null,e=!1,a=null,r=null;function c(f,d){a(f,d),r=o.requestAnimationFrame(c)}return{start:function(){e!==!0&&a!==null&&(r=o.requestAnimationFrame(c),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function w1(o){const e=new WeakMap;function a(h,p){const v=h.array,_=h.usage,g=v.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,v,_),h.onUploadCallback();let M;if(v instanceof Float32Array)M=o.FLOAT;else if(v instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)M=o.SHORT;else if(v instanceof Uint32Array)M=o.UNSIGNED_INT;else if(v instanceof Int32Array)M=o.INT;else if(v instanceof Int8Array)M=o.BYTE;else if(v instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:y,type:M,bytesPerElement:v.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,p,v){const _=p.array,g=p.updateRanges;if(o.bindBuffer(v,h),g.length===0)o.bufferSubData(v,0,_);else{g.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<g.length;M++){const b=g[y],w=g[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++y,g[y]=w)}g.length=y+1;for(let M=0,b=g.length;M<b;M++){const w=g[M];o.bufferSubData(v,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const v=e.get(h);if(v===void 0)e.set(h,a(h,p));else if(v.version<h.version){if(v.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(v.buffer,h,p),v.version=h.version}}return{get:c,remove:f,update:d}}class Ml extends $s{constructor(e=1,a=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:r,heightSegments:c};const f=e/2,d=a/2,h=Math.floor(r),p=Math.floor(c),v=h+1,_=p+1,g=e/h,y=a/p,M=[],b=[],w=[],S=[];for(let x=0;x<_;x++){const z=x*y-d;for(let O=0;O<v;O++){const N=O*g-f;b.push(N,-z,0),w.push(0,0,1),S.push(O/h),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let z=0;z<h;z++){const O=z+v*x,N=z+v*(x+1),st=z+1+v*(x+1),G=z+1+v*x;M.push(O,N,G),M.push(N,st,G)}this.setIndex(M),this.setAttribute("position",new Ws(b,3)),this.setAttribute("normal",new Ws(w,3)),this.setAttribute("uv",new Ws(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
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
#endif`,U1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z1=`#ifdef USE_AOMAP
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
#endif`,B1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I1=`#ifdef USE_BATCHING
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
#endif`,F1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k1=`#ifdef USE_IRIDESCENCE
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
#endif`,X1=`#ifdef USE_BUMPMAP
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
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$1=`#define PI 3.141592653589793
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
} // validated`,tT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eT=`vec3 transformedNormal = objectNormal;
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
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rT="gl_FragColor = linearToOutputTexel( gl_FragColor );",oT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
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
#endif`,dT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
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
}`,_T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ST=`uniform bool receiveShadow;
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
#endif`,MT=`#ifdef USE_ENVMAP
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
#endif`,ET=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
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
#endif`,RT=`struct PhysicalMaterial {
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
}`,wT=`
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
#endif`,DT=`#if defined( RE_IndirectDiffuse )
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
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FT=`#if defined( USE_POINTS_UV )
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
#endif`,HT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qT=`#ifdef USE_MORPHTARGETS
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
#endif`,jT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JT=`#ifdef USE_NORMALMAP
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
#endif`,$T=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
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
}`,zb=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,Ib=`#define DISTANCE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`uniform float scale;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,Xb=`uniform vec3 diffuse;
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
}`,qb=`#define LAMBERT
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
}`,jb=`#define LAMBERT
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
}`,Yb=`#define MATCAP
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
}`,Wb=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,Qb=`#define PHONG
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
}`,Jb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,t2=`#define STANDARD
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
}`,e2=`#define TOON
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
}`,n2=`#define TOON
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
}`,i2=`uniform float size;
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
}`,a2=`uniform vec3 diffuse;
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
}`,s2=`#include <common>
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
}`,r2=`uniform vec3 color;
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
}`,o2=`uniform float rotation;
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
}`,l2=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:D1,alphahash_pars_fragment:N1,alphamap_fragment:U1,alphamap_pars_fragment:L1,alphatest_fragment:O1,alphatest_pars_fragment:P1,aomap_fragment:z1,aomap_pars_fragment:B1,batching_pars_vertex:I1,batching_vertex:F1,begin_vertex:H1,beginnormal_vertex:G1,bsdfs:V1,iridescence_fragment:k1,bumpmap_pars_fragment:X1,clipping_planes_fragment:q1,clipping_planes_pars_fragment:j1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:W1,color_fragment:Z1,color_pars_fragment:K1,color_pars_vertex:Q1,color_vertex:J1,common:$1,cube_uv_reflection_fragment:tT,defaultnormal_vertex:eT,displacementmap_pars_vertex:nT,displacementmap_vertex:iT,emissivemap_fragment:aT,emissivemap_pars_fragment:sT,colorspace_fragment:rT,colorspace_pars_fragment:oT,envmap_fragment:lT,envmap_common_pars_fragment:cT,envmap_pars_fragment:uT,envmap_pars_vertex:fT,envmap_physical_pars_fragment:MT,envmap_vertex:hT,fog_vertex:dT,fog_pars_vertex:pT,fog_fragment:mT,fog_pars_fragment:gT,gradientmap_pars_fragment:vT,lightmap_pars_fragment:_T,lights_lambert_fragment:xT,lights_lambert_pars_fragment:yT,lights_pars_begin:ST,lights_toon_fragment:ET,lights_toon_pars_fragment:TT,lights_phong_fragment:bT,lights_phong_pars_fragment:AT,lights_physical_fragment:CT,lights_physical_pars_fragment:RT,lights_fragment_begin:wT,lights_fragment_maps:DT,lights_fragment_end:NT,logdepthbuf_fragment:UT,logdepthbuf_pars_fragment:LT,logdepthbuf_pars_vertex:OT,logdepthbuf_vertex:PT,map_fragment:zT,map_pars_fragment:BT,map_particle_fragment:IT,map_particle_pars_fragment:FT,metalnessmap_fragment:HT,metalnessmap_pars_fragment:GT,morphinstance_vertex:VT,morphcolor_vertex:kT,morphnormal_vertex:XT,morphtarget_pars_vertex:qT,morphtarget_vertex:jT,normal_fragment_begin:YT,normal_fragment_maps:WT,normal_pars_fragment:ZT,normal_pars_vertex:KT,normal_vertex:QT,normalmap_pars_fragment:JT,clearcoat_normal_fragment_begin:$T,clearcoat_normal_fragment_maps:tb,clearcoat_pars_fragment:eb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:ab,premultiplied_alpha_fragment:sb,project_vertex:rb,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:hb,shadowmap_vertex:db,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:vb,skinnormal_vertex:_b,specularmap_fragment:xb,specularmap_pars_fragment:yb,tonemapping_fragment:Sb,tonemapping_pars_fragment:Mb,transmission_fragment:Eb,transmission_pars_fragment:Tb,uv_pars_fragment:bb,uv_pars_vertex:Ab,uv_vertex:Cb,worldpos_vertex:Rb,background_vert:wb,background_frag:Db,backgroundCube_vert:Nb,backgroundCube_frag:Ub,cube_vert:Lb,cube_frag:Ob,depth_vert:Pb,depth_frag:zb,distanceRGBA_vert:Bb,distanceRGBA_frag:Ib,equirect_vert:Fb,equirect_frag:Hb,linedashed_vert:Gb,linedashed_frag:Vb,meshbasic_vert:kb,meshbasic_frag:Xb,meshlambert_vert:qb,meshlambert_frag:jb,meshmatcap_vert:Yb,meshmatcap_frag:Wb,meshnormal_vert:Zb,meshnormal_frag:Kb,meshphong_vert:Qb,meshphong_frag:Jb,meshphysical_vert:$b,meshphysical_frag:t2,meshtoon_vert:e2,meshtoon_frag:n2,points_vert:i2,points_frag:a2,shadow_vert:s2,shadow_frag:r2,sprite_vert:o2,sprite_frag:l2},Dt={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Yi={basic:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Hn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Hn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Hn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Hn([Dt.points,Dt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Hn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Hn([Dt.common,Dt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Hn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Hn([Dt.sprite,Dt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Hn([Dt.common,Dt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Hn([Dt.lights,Dt.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Yi.physical={uniforms:Hn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const uu={r:0,b:0,g:0},Hs=new ba,c2=new rn;function u2(o,e,a,r,c,f,d){const h=new Ge(0);let p=f===!0?0:1,v,_,g=null,y=0,M=null;function b(z){let O=z.isScene===!0?z.background:null;return O&&O.isTexture&&(O=(z.backgroundBlurriness>0?a:e).get(O)),O}function w(z){let O=!1;const N=b(z);N===null?x(h,p):N&&N.isColor&&(x(N,1),O=!0);const st=o.xr.getEnvironmentBlendMode();st==="additive"?r.buffers.color.setClear(0,0,0,1,d):st==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(z,O){const N=b(O);N&&(N.isCubeTexture||N.mapping===Eu)?(_===void 0&&(_=new Zi(new Sl(1,1,1),new Aa({name:"BackgroundCubeMaterial",uniforms:fo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(st,G,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(_)),Hs.copy(O.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(c2.makeRotationFromEuler(Hs)),_.material.toneMapped=Re.getTransfer(N.colorSpace)!==Fe,(g!==N||y!==N.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=N,y=N.version,M=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(v===void 0&&(v=new Zi(new Ml(2,2),new Aa({name:"BackgroundMaterial",uniforms:fo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(v)),v.material.uniforms.t2D.value=N,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.toneMapped=Re.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),v.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||y!==N.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,g=N,y=N.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null))}function x(z,O){z.getRGB(uu,wx(o)),r.buffers.color.setClear(uu.r,uu.g,uu.b,O,d)}return{getClearColor:function(){return h},setClearColor:function(z,O=1){h.set(z),p=O,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,x(h,p)},render:w,addToRenderList:S}}function f2(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},c=y(null);let f=c,d=!1;function h(A,F,et,tt,dt){let pt=!1;const j=g(tt,et,F);f!==j&&(f=j,v(f.object)),pt=M(A,tt,et,dt),pt&&b(A,tt,et,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(pt||d)&&(d=!1,N(A,F,et,tt),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function p(){return o.createVertexArray()}function v(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function g(A,F,et){const tt=et.wireframe===!0;let dt=r[A.id];dt===void 0&&(dt={},r[A.id]=dt);let pt=dt[F.id];pt===void 0&&(pt={},dt[F.id]=pt);let j=pt[tt];return j===void 0&&(j=y(p()),pt[tt]=j),j}function y(A){const F=[],et=[],tt=[];for(let dt=0;dt<a;dt++)F[dt]=0,et[dt]=0,tt[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:et,attributeDivisors:tt,object:A,attributes:{},index:null}}function M(A,F,et,tt){const dt=f.attributes,pt=F.attributes;let j=0;const rt=et.getAttributes();for(const Q in rt)if(rt[Q].location>=0){const St=dt[Q];let Gt=pt[Q];if(Gt===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(Gt=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(Gt=A.instanceColor)),St===void 0||St.attribute!==Gt||Gt&&St.data!==Gt.data)return!0;j++}return f.attributesNum!==j||f.index!==tt}function b(A,F,et,tt){const dt={},pt=F.attributes;let j=0;const rt=et.getAttributes();for(const Q in rt)if(rt[Q].location>=0){let St=pt[Q];St===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(St=A.instanceColor));const Gt={};Gt.attribute=St,St&&St.data&&(Gt.data=St.data),dt[Q]=Gt,j++}f.attributes=dt,f.attributesNum=j,f.index=tt}function w(){const A=f.newAttributes;for(let F=0,et=A.length;F<et;F++)A[F]=0}function S(A){x(A,0)}function x(A,F){const et=f.newAttributes,tt=f.enabledAttributes,dt=f.attributeDivisors;et[A]=1,tt[A]===0&&(o.enableVertexAttribArray(A),tt[A]=1),dt[A]!==F&&(o.vertexAttribDivisor(A,F),dt[A]=F)}function z(){const A=f.newAttributes,F=f.enabledAttributes;for(let et=0,tt=F.length;et<tt;et++)F[et]!==A[et]&&(o.disableVertexAttribArray(et),F[et]=0)}function O(A,F,et,tt,dt,pt,j){j===!0?o.vertexAttribIPointer(A,F,et,dt,pt):o.vertexAttribPointer(A,F,et,tt,dt,pt)}function N(A,F,et,tt){w();const dt=tt.attributes,pt=et.getAttributes(),j=F.defaultAttributeValues;for(const rt in pt){const Q=pt[rt];if(Q.location>=0){let yt=dt[rt];if(yt===void 0&&(rt==="instanceMatrix"&&A.instanceMatrix&&(yt=A.instanceMatrix),rt==="instanceColor"&&A.instanceColor&&(yt=A.instanceColor)),yt!==void 0){const St=yt.normalized,Gt=yt.itemSize,ne=e.get(yt);if(ne===void 0)continue;const Ee=ne.buffer,R=ne.type,Y=ne.bytesPerElement,gt=R===o.INT||R===o.UNSIGNED_INT||yt.gpuType===Ep;if(yt.isInterleavedBufferAttribute){const ut=yt.data,bt=ut.stride,wt=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let It=0;It<Q.locationSize;It++)x(Q.location+It,ut.meshPerAttribute);A.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let It=0;It<Q.locationSize;It++)S(Q.location+It);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let It=0;It<Q.locationSize;It++)O(Q.location+It,Gt/Q.locationSize,R,St,bt*Y,(wt+Gt/Q.locationSize*It)*Y,gt)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<Q.locationSize;ut++)x(Q.location+ut,yt.meshPerAttribute);A.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<Q.locationSize;ut++)S(Q.location+ut);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let ut=0;ut<Q.locationSize;ut++)O(Q.location+ut,Gt/Q.locationSize,R,St,Gt*Y,Gt/Q.locationSize*ut*Y,gt)}}else if(j!==void 0){const St=j[rt];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(Q.location,St);break;case 3:o.vertexAttrib3fv(Q.location,St);break;case 4:o.vertexAttrib4fv(Q.location,St);break;default:o.vertexAttrib1fv(Q.location,St)}}}}z()}function st(){B();for(const A in r){const F=r[A];for(const et in F){const tt=F[et];for(const dt in tt)_(tt[dt].object),delete tt[dt];delete F[et]}delete r[A]}}function G(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const et in F){const tt=F[et];for(const dt in tt)_(tt[dt].object),delete tt[dt];delete F[et]}delete r[A.id]}function P(A){for(const F in r){const et=r[F];if(et[A.id]===void 0)continue;const tt=et[A.id];for(const dt in tt)_(tt[dt].object),delete tt[dt];delete et[A.id]}}function B(){D(),d=!0,f!==c&&(f=c,v(f.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:D,dispose:st,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:S,disableUnusedAttributes:z}}function h2(o,e,a){let r;function c(v){r=v}function f(v,_){o.drawArrays(r,v,_),a.update(_,r,1)}function d(v,_,g){g!==0&&(o.drawArraysInstanced(r,v,_,g),a.update(_,r,g))}function h(v,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,v,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];a.update(M,r,1)}function p(v,_,g,y){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<v.length;b++)d(v[b],_[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,v,0,_,0,y,0,g);let b=0;for(let w=0;w<g;w++)b+=_[w]*y[w];a.update(b,r,1)}}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function d2(o,e,a,r){let c;function f(){if(c!==void 0)return c;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");c=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(P){return!(P!==Li&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const B=P===xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ta&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Sa&&!B)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=a.precision!==void 0?a.precision:"highp";const _=p(v);_!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",_,"instead."),v=_);const g=a.logarithmicDepthBuffer===!0,y=a.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),st=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:v,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:N,vertexTextures:st,maxSamples:G}}function p2(o){const e=this;let a=null,r=0,c=!1,f=!1;const d=new ls,h=new ue,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||r!==0||c;return c=y,r=g.length,M},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,y){a=_(g,y,0)},this.setState=function(g,y,M){const b=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!c||b===null||b.length===0||f&&!S)f?_(null):v();else{const z=f?0:r,O=z*4;let N=x.clippingState||null;p.value=N,N=_(b,y,O,M);for(let st=0;st!==O;++st)N[st]=a[st];x.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=z}};function v(){p.value!==a&&(p.value=a,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,M,b){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=p.value,b!==!0||S===null){const x=M+w*4,z=y.matrixWorldInverse;h.getNormalMatrix(z),(S===null||S.length<x)&&(S=new Float32Array(x));for(let O=0,N=M;O!==w;++O,N+=4)d.copy(g[O]).applyMatrix4(z,h),d.normal.toArray(S,N),S[N+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function m2(o){let e=new WeakMap;function a(d,h){return h===Xd?d.mapping=oo:h===qd&&(d.mapping=lo),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Xd||h===qd)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new A1(p.height);return v.fromEquirectangularTexture(o,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}class Ox extends Dx{constructor(e=-1,a=1,r=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=r,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,r,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=r-e,d=r+e,h=c+a,p=c-a;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,d=f+v*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}const eo=4,b_=[.125,.215,.35,.446,.526,.582],qs=20,Cd=new Ox,A_=new Ge;let Rd=null,wd=0,Dd=0,Nd=!1;const Vs=(1+Math.sqrt(5))/2,Jr=1/Vs,C_=[new at(-Vs,Jr,0),new at(Vs,Jr,0),new at(-Jr,0,Vs),new at(Jr,0,Vs),new at(0,Vs,-Jr),new at(0,Vs,Jr),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class R_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,r=.1,c=100){Rd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,c,f),a>0&&this._blur(f,0,0,a),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rd,wd,Dd),this._renderer.xr.enabled=Nd,e.scissorTest=!1,fu(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===oo||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=a||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,r={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:xl,format:Li,colorSpace:ho,depthBuffer:!1},c=w_(e,a,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w_(e,a,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g2(f)),this._blurMaterial=v2(f,e,a)}return c}_compileMaterial(e){const a=new Zi(this._lodPlanes[0],e);this._renderer.compile(a,Cd)}_sceneToCubeUV(e,a,r,c){const h=new Mi(90,1,a,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(A_),_.toneMapping=fs,_.autoClear=!1;const M=new Ax({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),b=new Zi(new Sl,M);let w=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,w=!0):(M.color.copy(A_),w=!0);for(let x=0;x<6;x++){const z=x%3;z===0?(h.up.set(0,p[x],0),h.lookAt(v[x],0,0)):z===1?(h.up.set(0,0,p[x]),h.lookAt(0,v[x],0)):(h.up.set(0,p[x],0),h.lookAt(0,0,v[x]));const O=this._cubeSize;fu(c,z*O,x>2?O:0,O,O),_.setRenderTarget(c),w&&_.render(b,h),_.render(e,h)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=y,_.autoClear=g,e.background=S}_textureToCubeUV(e,a){const r=this._renderer,c=e.mapping===oo||e.mapping===lo;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const f=c?this._cubemapMaterial:this._equirectMaterial,d=new Zi(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;fu(a,0,0,3*p,2*p),r.setRenderTarget(a),r.render(d,Cd)}_applyPMREM(e){const a=this._renderer,r=a.autoClear;a.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=C_[(c-f-1)%C_.length];this._blur(e,f-1,f,d,h)}a.autoClear=r}_blur(e,a,r,c,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,a,r,c,"latitudinal",f),this._halfBlur(d,e,r,r,c,"longitudinal",f)}_halfBlur(e,a,r,c,f,d,h){const p=this._renderer,v=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Zi(this._lodPlanes[c],v),y=v.uniforms,M=this._sizeLods[r]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*qs-1),w=f/b,S=isFinite(f)?1+Math.floor(_*w):qs;S>qs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qs}`);const x=[];let z=0;for(let P=0;P<qs;++P){const B=P/w,D=Math.exp(-B*B/2);x.push(D),P===0?z+=D:P<S&&(z+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/z;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:O}=this;y.dTheta.value=b,y.mipInt.value=O-r;const N=this._sizeLods[c],st=3*N*(c>O-eo?c-O+eo:0),G=4*(this._cubeSize-N);fu(a,st,G,3*N,2*N),p.setRenderTarget(a),p.render(g,Cd)}}function g2(o){const e=[],a=[],r=[];let c=o;const f=o-eo+1+b_.length;for(let d=0;d<f;d++){const h=Math.pow(2,c);a.push(h);let p=1/h;d>o-eo?p=b_[d-o+eo-1]:d===0&&(p=0),r.push(p);const v=1/(h-2),_=-v,g=1+v,y=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,w=3,S=2,x=1,z=new Float32Array(w*b*M),O=new Float32Array(S*b*M),N=new Float32Array(x*b*M);for(let G=0;G<M;G++){const P=G%3*2/3-1,B=G>2?0:-1,D=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];z.set(D,w*b*G),O.set(y,S*b*G);const A=[G,G,G,G,G,G];N.set(A,x*b*G)}const st=new $s;st.setAttribute("position",new Ki(z,w)),st.setAttribute("uv",new Ki(O,S)),st.setAttribute("faceIndex",new Ki(N,x)),e.push(st),c>eo&&c--}return{lodPlanes:e,sizeLods:a,sigmas:r}}function w_(o,e,a){const r=new Ks(o,e,a);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fu(o,e,a,r,c){o.viewport.set(e,a,r,c),o.scissor.set(e,a,r,c)}function v2(o,e,a){const r=new Float32Array(qs),c=new at(0,1,0);return new Aa({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Np(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function D_(){return new Aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function N_(){return new Aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Np(){return`

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
	`}function _2(o){let e=new WeakMap,a=null;function r(h){if(h&&h.isTexture){const p=h.mapping,v=p===Xd||p===qd,_=p===oo||p===lo;if(v||_){let g=e.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return a===null&&(a=new R_(o)),g=v?a.fromEquirectangular(h,g):a.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return v&&M&&M.height>0||_&&M&&c(M)?(a===null&&(a=new R_(o)),g=v?a.fromEquirectangular(h):a.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function c(h){let p=0;const v=6;for(let _=0;_<v;_++)h[_]!==void 0&&p++;return p===v}function f(h){const p=h.target;p.removeEventListener("dispose",f);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:r,dispose:d}}function x2(o){const e={};function a(r){if(e[r]!==void 0)return e[r];let c;switch(r){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(r)}return e[r]=c,c}return{has:function(r){return a(r)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(r){const c=a(r);return c===null&&dl("THREE.WebGLRenderer: "+r+" extension not supported."),c}}}function y2(o,e,a,r){const c={},f=new WeakMap;function d(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);for(const b in y.morphAttributes){const w=y.morphAttributes[b];for(let S=0,x=w.length;S<x;S++)e.remove(w[S])}y.removeEventListener("dispose",d),delete c[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function h(g,y){return c[y.id]===!0||(y.addEventListener("dispose",d),c[y.id]=!0,a.memory.geometries++),y}function p(g){const y=g.attributes;for(const b in y)e.update(y[b],o.ARRAY_BUFFER);const M=g.morphAttributes;for(const b in M){const w=M[b];for(let S=0,x=w.length;S<x;S++)e.update(w[S],o.ARRAY_BUFFER)}}function v(g){const y=[],M=g.index,b=g.attributes.position;let w=0;if(M!==null){const z=M.array;w=M.version;for(let O=0,N=z.length;O<N;O+=3){const st=z[O+0],G=z[O+1],P=z[O+2];y.push(st,G,G,P,P,st)}}else if(b!==void 0){const z=b.array;w=b.version;for(let O=0,N=z.length/3-1;O<N;O+=3){const st=O+0,G=O+1,P=O+2;y.push(st,G,G,P,P,st)}}else return;const S=new(yx(y)?Rx:Cx)(y,1);S.version=w;const x=f.get(g);x&&e.remove(x),f.set(g,S)}function _(g){const y=f.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&v(g)}else v(g);return f.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function S2(o,e,a){let r;function c(y){r=y}let f,d;function h(y){f=y.type,d=y.bytesPerElement}function p(y,M){o.drawElements(r,M,f,y*d),a.update(M,r,1)}function v(y,M,b){b!==0&&(o.drawElementsInstanced(r,M,f,y*d,b),a.update(M,r,b))}function _(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,y,0,b);let S=0;for(let x=0;x<b;x++)S+=M[x];a.update(S,r,1)}function g(y,M,b,w){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)v(y[x]/d,M[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,f,y,0,w,0,b);let x=0;for(let z=0;z<b;z++)x+=M[z]*w[z];a.update(x,r,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=v,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function M2(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:c,update:r}}function E2(o,e,a){const r=new WeakMap,c=new $e;function f(d,h,p){const v=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let A=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",A)};var M=A;y!==void 0&&y.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),w===!0&&(N=2),S===!0&&(N=3);let st=h.attributes.position.count*N,G=1;st>e.maxTextureSize&&(G=Math.ceil(st/e.maxTextureSize),st=e.maxTextureSize);const P=new Float32Array(st*G*4*g),B=new Mx(P,st,G,g);B.type=Sa,B.needsUpdate=!0;const D=N*4;for(let F=0;F<g;F++){const et=x[F],tt=z[F],dt=O[F],pt=st*G*4*F;for(let j=0;j<et.count;j++){const rt=j*D;b===!0&&(c.fromBufferAttribute(et,j),P[pt+rt+0]=c.x,P[pt+rt+1]=c.y,P[pt+rt+2]=c.z,P[pt+rt+3]=0),w===!0&&(c.fromBufferAttribute(tt,j),P[pt+rt+4]=c.x,P[pt+rt+5]=c.y,P[pt+rt+6]=c.z,P[pt+rt+7]=0),S===!0&&(c.fromBufferAttribute(dt,j),P[pt+rt+8]=c.x,P[pt+rt+9]=c.y,P[pt+rt+10]=c.z,P[pt+rt+11]=dt.itemSize===4?c.w:1)}}y={count:g,texture:B,size:new me(st,G)},r.set(h,y),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let b=0;for(let S=0;S<v.length;S++)b+=v[S];const w=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",v)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,a),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function T2(o,e,a,r){let c=new WeakMap;function f(p){const v=r.render.frame,_=p.geometry,g=e.get(p,_);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),c.get(p)!==v&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return g}function d(){c=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),a.remove(v.instanceMatrix),v.instanceColor!==null&&a.remove(v.instanceColor)}return{update:f,dispose:d}}class Px extends Zn{constructor(e,a,r,c,f,d,h,p,v,_=ao){if(_!==ao&&_!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===ao&&(r=Zs),r===void 0&&_===uo&&(r=co),super(null,c,f,d,h,p,_,r,v),this.isDepthTexture=!0,this.image={width:e,height:a},this.magFilter=h!==void 0?h:Oi,this.minFilter=p!==void 0?p:Oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}const zx=new Zn,U_=new Px(1,1),Bx=new Mx,Ix=new u1,Fx=new Nx,L_=[],O_=[],P_=new Float32Array(16),z_=new Float32Array(9),B_=new Float32Array(4);function mo(o,e,a){const r=o[0];if(r<=0||r>0)return o;const c=e*a;let f=L_[c];if(f===void 0&&(f=new Float32Array(c),L_[c]=f),e!==0){r.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=a,o[d].toArray(f,h)}return f}function hn(o,e){if(o.length!==e.length)return!1;for(let a=0,r=o.length;a<r;a++)if(o[a]!==e[a])return!1;return!0}function dn(o,e){for(let a=0,r=e.length;a<r;a++)o[a]=e[a]}function Au(o,e){let a=O_[e];a===void 0&&(a=new Int32Array(e),O_[e]=a);for(let r=0;r!==e;++r)a[r]=o.allocateTextureUnit();return a}function b2(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function A2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(hn(a,e))return;o.uniform2fv(this.addr,e),dn(a,e)}}function C2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(hn(a,e))return;o.uniform3fv(this.addr,e),dn(a,e)}}function R2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(hn(a,e))return;o.uniform4fv(this.addr,e),dn(a,e)}}function w2(o,e){const a=this.cache,r=e.elements;if(r===void 0){if(hn(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(a,e)}else{if(hn(a,r))return;B_.set(r),o.uniformMatrix2fv(this.addr,!1,B_),dn(a,r)}}function D2(o,e){const a=this.cache,r=e.elements;if(r===void 0){if(hn(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(a,e)}else{if(hn(a,r))return;z_.set(r),o.uniformMatrix3fv(this.addr,!1,z_),dn(a,r)}}function N2(o,e){const a=this.cache,r=e.elements;if(r===void 0){if(hn(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(a,e)}else{if(hn(a,r))return;P_.set(r),o.uniformMatrix4fv(this.addr,!1,P_),dn(a,r)}}function U2(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function L2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(hn(a,e))return;o.uniform2iv(this.addr,e),dn(a,e)}}function O2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(hn(a,e))return;o.uniform3iv(this.addr,e),dn(a,e)}}function P2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(hn(a,e))return;o.uniform4iv(this.addr,e),dn(a,e)}}function z2(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function B2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(hn(a,e))return;o.uniform2uiv(this.addr,e),dn(a,e)}}function I2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(hn(a,e))return;o.uniform3uiv(this.addr,e),dn(a,e)}}function F2(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(hn(a,e))return;o.uniform4uiv(this.addr,e),dn(a,e)}}function H2(o,e,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(U_.compareFunction=xx,f=U_):f=zx,a.setTexture2D(e||f,c)}function G2(o,e,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),a.setTexture3D(e||Ix,c)}function V2(o,e,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),a.setTextureCube(e||Fx,c)}function k2(o,e,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(o.uniform1i(this.addr,c),r[0]=c),a.setTexture2DArray(e||Bx,c)}function X2(o){switch(o){case 5126:return b2;case 35664:return A2;case 35665:return C2;case 35666:return R2;case 35674:return w2;case 35675:return D2;case 35676:return N2;case 5124:case 35670:return U2;case 35667:case 35671:return L2;case 35668:case 35672:return O2;case 35669:case 35673:return P2;case 5125:return z2;case 36294:return B2;case 36295:return I2;case 36296:return F2;case 35678:case 36198:case 36298:case 36306:case 35682:return H2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return k2}}function q2(o,e){o.uniform1fv(this.addr,e)}function j2(o,e){const a=mo(e,this.size,2);o.uniform2fv(this.addr,a)}function Y2(o,e){const a=mo(e,this.size,3);o.uniform3fv(this.addr,a)}function W2(o,e){const a=mo(e,this.size,4);o.uniform4fv(this.addr,a)}function Z2(o,e){const a=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function K2(o,e){const a=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function Q2(o,e){const a=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function J2(o,e){o.uniform1iv(this.addr,e)}function $2(o,e){o.uniform2iv(this.addr,e)}function tA(o,e){o.uniform3iv(this.addr,e)}function eA(o,e){o.uniform4iv(this.addr,e)}function nA(o,e){o.uniform1uiv(this.addr,e)}function iA(o,e){o.uniform2uiv(this.addr,e)}function aA(o,e){o.uniform3uiv(this.addr,e)}function sA(o,e){o.uniform4uiv(this.addr,e)}function rA(o,e,a){const r=this.cache,c=e.length,f=Au(a,c);hn(r,f)||(o.uniform1iv(this.addr,f),dn(r,f));for(let d=0;d!==c;++d)a.setTexture2D(e[d]||zx,f[d])}function oA(o,e,a){const r=this.cache,c=e.length,f=Au(a,c);hn(r,f)||(o.uniform1iv(this.addr,f),dn(r,f));for(let d=0;d!==c;++d)a.setTexture3D(e[d]||Ix,f[d])}function lA(o,e,a){const r=this.cache,c=e.length,f=Au(a,c);hn(r,f)||(o.uniform1iv(this.addr,f),dn(r,f));for(let d=0;d!==c;++d)a.setTextureCube(e[d]||Fx,f[d])}function cA(o,e,a){const r=this.cache,c=e.length,f=Au(a,c);hn(r,f)||(o.uniform1iv(this.addr,f),dn(r,f));for(let d=0;d!==c;++d)a.setTexture2DArray(e[d]||Bx,f[d])}function uA(o){switch(o){case 5126:return q2;case 35664:return j2;case 35665:return Y2;case 35666:return W2;case 35674:return Z2;case 35675:return K2;case 35676:return Q2;case 5124:case 35670:return J2;case 35667:case 35671:return $2;case 35668:case 35672:return tA;case 35669:case 35673:return eA;case 5125:return nA;case 36294:return iA;case 36295:return aA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class fA{constructor(e,a,r){this.id=e,this.addr=r,this.cache=[],this.type=a.type,this.setValue=X2(a.type)}}class hA{constructor(e,a,r){this.id=e,this.addr=r,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=uA(a.type)}}class dA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,r){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(e,a[h.id],r)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function I_(o,e){o.seq.push(e),o.map[e.id]=e}function pA(o,e,a){const r=o.name,c=r.length;for(Ud.lastIndex=0;;){const f=Ud.exec(r),d=Ud.lastIndex;let h=f[1];const p=f[2]==="]",v=f[3];if(p&&(h=h|0),v===void 0||v==="["&&d+2===c){I_(a,v===void 0?new fA(h,o,e):new hA(h,o,e));break}else{let g=a.map[h];g===void 0&&(g=new dA(h),I_(a,g)),a=g}}}class yu{constructor(e,a){this.seq=[],this.map={};const r=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(a,c),d=e.getUniformLocation(a,f.name);pA(f,d,this)}}setValue(e,a,r,c){const f=this.map[a];f!==void 0&&f.setValue(e,r,c)}setOptional(e,a,r){const c=a[r];c!==void 0&&this.setValue(e,r,c)}static upload(e,a,r,c){for(let f=0,d=a.length;f!==d;++f){const h=a[f],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,c)}}static seqWithValue(e,a){const r=[];for(let c=0,f=e.length;c!==f;++c){const d=e[c];d.id in a&&r.push(d)}return r}}function F_(o,e,a){const r=o.createShader(e);return o.shaderSource(r,a),o.compileShader(r),r}const mA=37297;let gA=0;function vA(o,e){const a=o.split(`
`),r=[],c=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let d=c;d<f;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${a[d]}`)}return r.join(`
`)}const H_=new ue;function _A(o){Re._getMatrix(H_,Re.workingColorSpace,o);const e=`mat3( ${H_.elements.map(a=>a.toFixed(4))} )`;switch(Re.getTransfer(o)){case Tu:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function G_(o,e,a){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=o.getShaderInfoLog(e).trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return a.toUpperCase()+`

`+c+`

`+vA(o.getShaderSource(e),d)}else return c}function xA(o,e){const a=_A(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function yA(o,e){let a;switch(e){case SE:a="Linear";break;case ME:a="Reinhard";break;case EE:a="Cineon";break;case TE:a="ACESFilmic";break;case AE:a="AgX";break;case CE:a="Neutral";break;case bE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const hu=new at;function SA(){Re.getLuminanceCoefficients(hu);const o=hu.x.toFixed(4),e=hu.y.toFixed(4),a=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function EA(o){const e=[];for(const a in o){const r=o[a];r!==!1&&e.push("#define "+a+" "+r)}return e.join(`
`)}function TA(o,e){const a={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const f=o.getActiveAttrib(e,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return a}function pl(o){return o!==""}function V_(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(o){return o.replace(bA,CA)}const AA=new Map;function CA(o,e){let a=fe[e];if(a===void 0){const r=AA.get(e);if(r!==void 0)a=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yp(a)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X_(o){return o.replace(RA,wA)}function wA(o,e,a,r){let c="";for(let f=parseInt(e);f<parseInt(a);f++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function q_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function DA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===rx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===tE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===xa&&(e="SHADOWMAP_TYPE_VSM"),e}function NA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case oo:case lo:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function LA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ox:e="ENVMAP_BLENDING_MULTIPLY";break;case xE:e="ENVMAP_BLENDING_MIX";break;case yE:e="ENVMAP_BLENDING_ADD";break}return e}function OA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:r,maxMip:a}}function PA(o,e,a,r){const c=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const p=DA(a),v=NA(a),_=UA(a),g=LA(a),y=OA(a),M=MA(a),b=EA(f),w=c.createProgram();let S,x,z=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(pl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(pl).join(`
`),x.length>0&&(x+=`
`)):(S=[q_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),x=[q_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.envMap?"#define "+_:"",a.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==fs?"#define TONE_MAPPING":"",a.toneMapping!==fs?fe.tonemapping_pars_fragment:"",a.toneMapping!==fs?yA("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,xA("linearToOutputTexel",a.outputColorSpace),SA(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(pl).join(`
`)),d=yp(d),d=V_(d,a),d=k_(d,a),h=yp(h),h=V_(h,a),h=k_(h,a),d=X_(d),h=X_(h),a.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",a.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=z+S+d,N=z+x+h,st=F_(c,c.VERTEX_SHADER,O),G=F_(c,c.FRAGMENT_SHADER,N);c.attachShader(w,st),c.attachShader(w,G),a.index0AttributeName!==void 0?c.bindAttribLocation(w,0,a.index0AttributeName):a.morphTargets===!0&&c.bindAttribLocation(w,0,"position"),c.linkProgram(w);function P(F){if(o.debug.checkShaderErrors){const et=c.getProgramInfoLog(w).trim(),tt=c.getShaderInfoLog(st).trim(),dt=c.getShaderInfoLog(G).trim();let pt=!0,j=!0;if(c.getProgramParameter(w,c.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,w,st,G);else{const rt=G_(c,st,"vertex"),Q=G_(c,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(w,c.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+et+`
`+rt+`
`+Q)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(tt===""||dt==="")&&(j=!1);j&&(F.diagnostics={runnable:pt,programLog:et,vertexShader:{log:tt,prefix:S},fragmentShader:{log:dt,prefix:x}})}c.deleteShader(st),c.deleteShader(G),B=new yu(c,w),D=TA(c,w)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let A=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=c.getProgramParameter(w,mA)),A},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(w),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=st,this.fragmentShader=G,this}let zA=0;class BA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,r=e.fragmentShader,c=this._getShaderStage(a),f=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const r of a)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let r=a.get(e);return r===void 0&&(r=new Set,a.set(e,r)),r}_getShaderStage(e){const a=this.shaderCache;let r=a.get(e);return r===void 0&&(r=new IA(e),a.set(e,r)),r}}class IA{constructor(e){this.id=zA++,this.code=e,this.usedTimes=0}}function FA(o,e,a,r,c,f,d){const h=new Tx,p=new BA,v=new Set,_=[],g=c.logarithmicDepthBuffer,y=c.vertexTextures;let M=c.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return v.add(D),D===0?"uv":`uv${D}`}function S(D,A,F,et,tt){const dt=et.fog,pt=tt.geometry,j=D.isMeshStandardMaterial?et.environment:null,rt=(D.isMeshStandardMaterial?a:e).get(D.envMap||j),Q=rt&&rt.mapping===Eu?rt.image.height:null,yt=b[D.type];D.precision!==null&&(M=c.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Gt=St!==void 0?St.length:0;let ne=0;pt.morphAttributes.position!==void 0&&(ne=1),pt.morphAttributes.normal!==void 0&&(ne=2),pt.morphAttributes.color!==void 0&&(ne=3);let Ee,R,Y,gt;if(yt){const Te=Yi[yt];Ee=Te.vertexShader,R=Te.fragmentShader}else Ee=D.vertexShader,R=D.fragmentShader,p.update(D),Y=p.getVertexShaderID(D),gt=p.getFragmentShaderID(D);const ut=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),wt=tt.isInstancedMesh===!0,It=tt.isBatchedMesh===!0,Tt=!!D.map,At=!!D.matcap,De=!!rt,K=!!D.aoMap,on=!!D.lightMap,ae=!!D.bumpMap,Jt=!!D.normalMap,Rt=!!D.displacementMap,ye=!!D.emissiveMap,Kt=!!D.metalnessMap,U=!!D.roughnessMap,T=D.anisotropy>0,nt=D.clearcoat>0,vt=D.dispersion>0,xt=D.iridescence>0,mt=D.sheen>0,Yt=D.transmission>0,Nt=T&&!!D.anisotropyMap,Pt=nt&&!!D.clearcoatMap,ve=nt&&!!D.clearcoatNormalMap,Mt=nt&&!!D.clearcoatRoughnessMap,Vt=xt&&!!D.iridescenceMap,$t=xt&&!!D.iridescenceThicknessMap,ee=mt&&!!D.sheenColorMap,Ht=mt&&!!D.sheenRoughnessMap,ge=!!D.specularMap,oe=!!D.specularColorMap,Be=!!D.specularIntensityMap,H=Yt&&!!D.transmissionMap,Ut=Yt&&!!D.thicknessMap,ct=!!D.gradientMap,_t=!!D.alphaMap,Lt=D.alphaTest>0,Bt=!!D.alphaHash,se=!!D.extensions;let Ye=fs;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ye=o.toneMapping);const pn={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:Ee,fragmentShader:R,defines:D.defines,customVertexShaderID:Y,customFragmentShaderID:gt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:It,batchingColor:It&&tt._colorsTexture!==null,instancing:wt,instancingColor:wt&&tt.instanceColor!==null,instancingMorph:wt&&tt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ho,alphaToCoverage:!!D.alphaToCoverage,map:Tt,matcap:At,envMap:De,envMapMode:De&&rt.mapping,envMapCubeUVHeight:Q,aoMap:K,lightMap:on,bumpMap:ae,normalMap:Jt,displacementMap:y&&Rt,emissiveMap:ye,normalMapObjectSpace:Jt&&D.normalMapType===UE,normalMapTangentSpace:Jt&&D.normalMapType===NE,metalnessMap:Kt,roughnessMap:U,anisotropy:T,anisotropyMap:Nt,clearcoat:nt,clearcoatMap:Pt,clearcoatNormalMap:ve,clearcoatRoughnessMap:Mt,dispersion:vt,iridescence:xt,iridescenceMap:Vt,iridescenceThicknessMap:$t,sheen:mt,sheenColorMap:ee,sheenRoughnessMap:Ht,specularMap:ge,specularColorMap:oe,specularIntensityMap:Be,transmission:Yt,transmissionMap:H,thicknessMap:Ut,gradientMap:ct,opaque:D.transparent===!1&&D.blending===io&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:Lt,alphaHash:Bt,combine:D.combine,mapUv:Tt&&w(D.map.channel),aoMapUv:K&&w(D.aoMap.channel),lightMapUv:on&&w(D.lightMap.channel),bumpMapUv:ae&&w(D.bumpMap.channel),normalMapUv:Jt&&w(D.normalMap.channel),displacementMapUv:Rt&&w(D.displacementMap.channel),emissiveMapUv:ye&&w(D.emissiveMap.channel),metalnessMapUv:Kt&&w(D.metalnessMap.channel),roughnessMapUv:U&&w(D.roughnessMap.channel),anisotropyMapUv:Nt&&w(D.anisotropyMap.channel),clearcoatMapUv:Pt&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:ve&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&w(D.sheenRoughnessMap.channel),specularMapUv:ge&&w(D.specularMap.channel),specularColorMapUv:oe&&w(D.specularColorMap.channel),specularIntensityMapUv:Be&&w(D.specularIntensityMap.channel),transmissionMapUv:H&&w(D.transmissionMap.channel),thicknessMapUv:Ut&&w(D.thicknessMap.channel),alphaMapUv:_t&&w(D.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(Jt||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!pt.attributes.uv&&(Tt||_t),fog:!!dt,useFog:D.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:bt,skinning:tt.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Tt&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:ye&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ya,flipSided:D.side===Wn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:se&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&D.extensions.multiDraw===!0||It)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return pn.vertexUv1s=v.has(1),pn.vertexUv2s=v.has(2),pn.vertexUv3s=v.has(3),v.clear(),pn}function x(D){const A=[];if(D.shaderID?A.push(D.shaderID):(A.push(D.customVertexShaderID),A.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)A.push(F),A.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(z(A,D),O(A,D),A.push(o.outputColorSpace)),A.push(D.customProgramCacheKey),A.join()}function z(D,A){D.push(A.precision),D.push(A.outputColorSpace),D.push(A.envMapMode),D.push(A.envMapCubeUVHeight),D.push(A.mapUv),D.push(A.alphaMapUv),D.push(A.lightMapUv),D.push(A.aoMapUv),D.push(A.bumpMapUv),D.push(A.normalMapUv),D.push(A.displacementMapUv),D.push(A.emissiveMapUv),D.push(A.metalnessMapUv),D.push(A.roughnessMapUv),D.push(A.anisotropyMapUv),D.push(A.clearcoatMapUv),D.push(A.clearcoatNormalMapUv),D.push(A.clearcoatRoughnessMapUv),D.push(A.iridescenceMapUv),D.push(A.iridescenceThicknessMapUv),D.push(A.sheenColorMapUv),D.push(A.sheenRoughnessMapUv),D.push(A.specularMapUv),D.push(A.specularColorMapUv),D.push(A.specularIntensityMapUv),D.push(A.transmissionMapUv),D.push(A.thicknessMapUv),D.push(A.combine),D.push(A.fogExp2),D.push(A.sizeAttenuation),D.push(A.morphTargetsCount),D.push(A.morphAttributeCount),D.push(A.numDirLights),D.push(A.numPointLights),D.push(A.numSpotLights),D.push(A.numSpotLightMaps),D.push(A.numHemiLights),D.push(A.numRectAreaLights),D.push(A.numDirLightShadows),D.push(A.numPointLightShadows),D.push(A.numSpotLightShadows),D.push(A.numSpotLightShadowsWithMaps),D.push(A.numLightProbes),D.push(A.shadowMapType),D.push(A.toneMapping),D.push(A.numClippingPlanes),D.push(A.numClipIntersection),D.push(A.depthPacking)}function O(D,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),D.push(h.mask)}function N(D){const A=b[D.type];let F;if(A){const et=Yi[A];F=M1.clone(et.uniforms)}else F=D.uniforms;return F}function st(D,A){let F;for(let et=0,tt=_.length;et<tt;et++){const dt=_[et];if(dt.cacheKey===A){F=dt,++F.usedTimes;break}}return F===void 0&&(F=new PA(o,A,D,f),_.push(F)),F}function G(D){if(--D.usedTimes===0){const A=_.indexOf(D);_[A]=_[_.length-1],_.pop(),D.destroy()}}function P(D){p.remove(D)}function B(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:N,acquireProgram:st,releaseProgram:G,releaseShaderCache:P,programs:_,dispose:B}}function HA(){let o=new WeakMap;function e(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function c(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:a,remove:r,update:c,dispose:f}}function GA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function j_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Y_(){const o=[];let e=0;const a=[],r=[],c=[];function f(){e=0,a.length=0,r.length=0,c.length=0}function d(g,y,M,b,w,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:M,groupOrder:b,renderOrder:g.renderOrder,z:w,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=M,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=w,x.group=S),e++,x}function h(g,y,M,b,w,S){const x=d(g,y,M,b,w,S);M.transmission>0?r.push(x):M.transparent===!0?c.push(x):a.push(x)}function p(g,y,M,b,w,S){const x=d(g,y,M,b,w,S);M.transmission>0?r.unshift(x):M.transparent===!0?c.unshift(x):a.unshift(x)}function v(g,y){a.length>1&&a.sort(g||GA),r.length>1&&r.sort(y||j_),c.length>1&&c.sort(y||j_)}function _(){for(let g=e,y=o.length;g<y;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:r,transparent:c,init:f,push:h,unshift:p,finish:_,sort:v}}function VA(){let o=new WeakMap;function e(r,c){const f=o.get(r);let d;return f===void 0?(d=new Y_,o.set(r,[d])):c>=f.length?(d=new Y_,f.push(d)):d=f[c],d}function a(){o=new WeakMap}return{get:e,dispose:a}}function kA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new at,color:new Ge};break;case"SpotLight":a={position:new at,direction:new at,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new at,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":a={direction:new at,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":a={color:new Ge,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=a,a}}}function XA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let qA=0;function jA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function YA(o){const e=new kA,a=XA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)r.probe.push(new at);const c=new at,f=new rn,d=new rn;function h(v){let _=0,g=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,w=0,S=0,x=0,z=0,O=0,N=0,st=0,G=0,P=0;v.sort(jA);for(let D=0,A=v.length;D<A;D++){const F=v[D],et=F.color,tt=F.intensity,dt=F.distance,pt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=et.r*tt,g+=et.g*tt,y+=et.b*tt;else if(F.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(F.sh.coefficients[j],tt);P++}else if(F.isDirectionalLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const rt=F.shadow,Q=a.get(F);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,r.directionalShadow[M]=Q,r.directionalShadowMap[M]=pt,r.directionalShadowMatrix[M]=F.shadow.matrix,z++}r.directional[M]=j,M++}else if(F.isSpotLight){const j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(et).multiplyScalar(tt),j.distance=dt,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,r.spot[w]=j;const rt=F.shadow;if(F.map&&(r.spotLightMap[st]=F.map,st++,rt.updateMatrices(F),F.castShadow&&G++),r.spotLightMatrix[w]=rt.matrix,F.castShadow){const Q=a.get(F);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,r.spotShadow[w]=Q,r.spotShadowMap[w]=pt,N++}w++}else if(F.isRectAreaLight){const j=e.get(F);j.color.copy(et).multiplyScalar(tt),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=j,S++}else if(F.isPointLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){const rt=F.shadow,Q=a.get(F);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,Q.shadowCameraNear=rt.camera.near,Q.shadowCameraFar=rt.camera.far,r.pointShadow[b]=Q,r.pointShadowMap[b]=pt,r.pointShadowMatrix[b]=F.shadow.matrix,O++}r.point[b]=j,b++}else if(F.isHemisphereLight){const j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(tt),j.groundColor.copy(F.groundColor).multiplyScalar(tt),r.hemi[x]=j,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const B=r.hash;(B.directionalLength!==M||B.pointLength!==b||B.spotLength!==w||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==z||B.numPointShadows!==O||B.numSpotShadows!==N||B.numSpotMaps!==st||B.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=S,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=N+st-G,r.spotLightMap.length=st,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=P,B.directionalLength=M,B.pointLength=b,B.spotLength=w,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=z,B.numPointShadows=O,B.numSpotShadows=N,B.numSpotMaps=st,B.numLightProbes=P,r.version=qA++)}function p(v,_){let g=0,y=0,M=0,b=0,w=0;const S=_.matrixWorldInverse;for(let x=0,z=v.length;x<z;x++){const O=v[x];if(O.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(O.matrixWorld),c.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(c),N.direction.transformDirection(S),g++}else if(O.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(O.matrixWorld),c.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(c),N.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),d.identity(),f.copy(O.matrixWorld),f.premultiply(S),d.extractRotation(f),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),b++}else if(O.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),y++}else if(O.isHemisphereLight){const N=r.hemi[w];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(S),w++}}}return{setup:h,setupView:p,state:r}}function W_(o){const e=new YA(o),a=[],r=[];function c(_){v.camera=_,a.length=0,r.length=0}function f(_){a.push(_)}function d(_){r.push(_)}function h(){e.setup(a)}function p(_){e.setupView(a,_)}const v={lightsArray:a,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:c,state:v,setupLights:h,setupLightsView:p,pushLight:f,pushShadow:d}}function WA(o){let e=new WeakMap;function a(c,f=0){const d=e.get(c);let h;return d===void 0?(h=new W_(o),e.set(c,[h])):f>=d.length?(h=new W_(o),d.push(h)):h=d[f],h}function r(){e=new WeakMap}return{get:a,dispose:r}}class ZA extends bu{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KA extends bu{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
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
}`;function $A(o,e,a){let r=new Ux;const c=new me,f=new me,d=new $e,h=new ZA({depthPacking:DE}),p=new KA,v={},_=a.maxTextureSize,g={[hs]:Wn,[Wn]:hs,[ya]:ya},y=new Aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:QA,fragmentShader:JA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new $s;b.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Zi(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rx;let x=this.type;this.render=function(G,P,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),A=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),et=o.state;et.setBlending(us),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const tt=x!==xa&&this.type===xa,dt=x===xa&&this.type!==xa;for(let pt=0,j=G.length;pt<j;pt++){const rt=G[pt],Q=rt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;c.copy(Q.mapSize);const yt=Q.getFrameExtents();if(c.multiply(yt),f.copy(Q.mapSize),(c.x>_||c.y>_)&&(c.x>_&&(f.x=Math.floor(_/yt.x),c.x=f.x*yt.x,Q.mapSize.x=f.x),c.y>_&&(f.y=Math.floor(_/yt.y),c.y=f.y*yt.y,Q.mapSize.y=f.y)),Q.map===null||tt===!0||dt===!0){const Gt=this.type!==xa?{minFilter:Oi,magFilter:Oi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ks(c.x,c.y,Gt),Q.map.texture.name=rt.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const St=Q.getViewportCount();for(let Gt=0;Gt<St;Gt++){const ne=Q.getViewport(Gt);d.set(f.x*ne.x,f.y*ne.y,f.x*ne.z,f.y*ne.w),et.viewport(d),Q.updateMatrices(rt,Gt),r=Q.getFrustum(),N(P,B,Q.camera,rt,this.type)}Q.isPointLightShadow!==!0&&this.type===xa&&z(Q,B),Q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(D,A,F)};function z(G,P){const B=e.update(w);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ks(c.x,c.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(P,null,B,y,w,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(P,null,B,M,w,null)}function O(G,P,B,D){let A=null;const F=B.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)A=F;else if(A=B.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const et=A.uuid,tt=P.uuid;let dt=v[et];dt===void 0&&(dt={},v[et]=dt);let pt=dt[tt];pt===void 0&&(pt=A.clone(),dt[tt]=pt,P.addEventListener("dispose",st)),A=pt}if(A.visible=P.visible,A.wireframe=P.wireframe,D===xa?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:g[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const et=o.properties.get(A);et.light=B}return A}function N(G,P,B,D,A){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&A===xa)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,G.matrixWorld);const tt=e.update(G),dt=G.material;if(Array.isArray(dt)){const pt=tt.groups;for(let j=0,rt=pt.length;j<rt;j++){const Q=pt[j],yt=dt[Q.materialIndex];if(yt&&yt.visible){const St=O(G,yt,D,A);G.onBeforeShadow(o,G,P,B,tt,St,Q),o.renderBufferDirect(B,null,tt,St,G,Q),G.onAfterShadow(o,G,P,B,tt,St,Q)}}}else if(dt.visible){const pt=O(G,dt,D,A);G.onBeforeShadow(o,G,P,B,tt,pt,null),o.renderBufferDirect(B,null,tt,pt,G,null),G.onAfterShadow(o,G,P,B,tt,pt,null)}}const et=G.children;for(let tt=0,dt=et.length;tt<dt;tt++)N(et[tt],P,B,D,A)}function st(G){G.target.removeEventListener("dispose",st);for(const B in v){const D=v[B],A=G.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}const t3={[Bd]:Id,[Fd]:Vd,[Hd]:kd,[ro]:Gd,[Id]:Bd,[Vd]:Fd,[kd]:Hd,[Gd]:ro};function e3(o,e){function a(){let H=!1;const Ut=new $e;let ct=null;const _t=new $e(0,0,0,0);return{setMask:function(Lt){ct!==Lt&&!H&&(o.colorMask(Lt,Lt,Lt,Lt),ct=Lt)},setLocked:function(Lt){H=Lt},setClear:function(Lt,Bt,se,Ye,pn){pn===!0&&(Lt*=Ye,Bt*=Ye,se*=Ye),Ut.set(Lt,Bt,se,Ye),_t.equals(Ut)===!1&&(o.clearColor(Lt,Bt,se,Ye),_t.copy(Ut))},reset:function(){H=!1,ct=null,_t.set(-1,0,0,0)}}}function r(){let H=!1,Ut=!1,ct=null,_t=null,Lt=null;return{setReversed:function(Bt){if(Ut!==Bt){const se=e.get("EXT_clip_control");Ut?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const Ye=Lt;Lt=null,this.setClear(Ye)}Ut=Bt},getReversed:function(){return Ut},setTest:function(Bt){Bt?ut(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Bt){ct!==Bt&&!H&&(o.depthMask(Bt),ct=Bt)},setFunc:function(Bt){if(Ut&&(Bt=t3[Bt]),_t!==Bt){switch(Bt){case Bd:o.depthFunc(o.NEVER);break;case Id:o.depthFunc(o.ALWAYS);break;case Fd:o.depthFunc(o.LESS);break;case ro:o.depthFunc(o.LEQUAL);break;case Hd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case Vd:o.depthFunc(o.GREATER);break;case kd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Bt}},setLocked:function(Bt){H=Bt},setClear:function(Bt){Lt!==Bt&&(Ut&&(Bt=1-Bt),o.clearDepth(Bt),Lt=Bt)},reset:function(){H=!1,ct=null,_t=null,Lt=null,Ut=!1}}}function c(){let H=!1,Ut=null,ct=null,_t=null,Lt=null,Bt=null,se=null,Ye=null,pn=null;return{setTest:function(Te){H||(Te?ut(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Te){Ut!==Te&&!H&&(o.stencilMask(Te),Ut=Te)},setFunc:function(Te,je,mn){(ct!==Te||_t!==je||Lt!==mn)&&(o.stencilFunc(Te,je,mn),ct=Te,_t=je,Lt=mn)},setOp:function(Te,je,mn){(Bt!==Te||se!==je||Ye!==mn)&&(o.stencilOp(Te,je,mn),Bt=Te,se=je,Ye=mn)},setLocked:function(Te){H=Te},setClear:function(Te){pn!==Te&&(o.clearStencil(Te),pn=Te)},reset:function(){H=!1,Ut=null,ct=null,_t=null,Lt=null,Bt=null,se=null,Ye=null,pn=null}}}const f=new a,d=new r,h=new c,p=new WeakMap,v=new WeakMap;let _={},g={},y=new WeakMap,M=[],b=null,w=!1,S=null,x=null,z=null,O=null,N=null,st=null,G=null,P=new Ge(0,0,0),B=0,D=!1,A=null,F=null,et=null,tt=null,dt=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,rt=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=rt>=1):Q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=rt>=2);let yt=null,St={};const Gt=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ee=new $e().fromArray(Gt),R=new $e().fromArray(ne);function Y(H,Ut,ct,_t){const Lt=new Uint8Array(4),Bt=o.createTexture();o.bindTexture(H,Bt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let se=0;se<ct;se++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(Ut+se,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return Bt}const gt={};gt[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(o.DEPTH_TEST),d.setFunc(ro),ae(!1),Jt(Qv),ut(o.CULL_FACE),K(us);function ut(H){_[H]!==!0&&(o.enable(H),_[H]=!0)}function bt(H){_[H]!==!1&&(o.disable(H),_[H]=!1)}function wt(H,Ut){return g[H]!==Ut?(o.bindFramebuffer(H,Ut),g[H]=Ut,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ut),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(H,Ut){let ct=M,_t=!1;if(H){ct=y.get(Ut),ct===void 0&&(ct=[],y.set(Ut,ct));const Lt=H.textures;if(ct.length!==Lt.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Bt=0,se=Lt.length;Bt<se;Bt++)ct[Bt]=o.COLOR_ATTACHMENT0+Bt;ct.length=Lt.length,_t=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ct)}function Tt(H){return b!==H?(o.useProgram(H),b=H,!0):!1}const At={[Xs]:o.FUNC_ADD,[nE]:o.FUNC_SUBTRACT,[iE]:o.FUNC_REVERSE_SUBTRACT};At[aE]=o.MIN,At[sE]=o.MAX;const De={[rE]:o.ZERO,[oE]:o.ONE,[lE]:o.SRC_COLOR,[Pd]:o.SRC_ALPHA,[pE]:o.SRC_ALPHA_SATURATE,[hE]:o.DST_COLOR,[uE]:o.DST_ALPHA,[cE]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[dE]:o.ONE_MINUS_DST_COLOR,[fE]:o.ONE_MINUS_DST_ALPHA,[mE]:o.CONSTANT_COLOR,[gE]:o.ONE_MINUS_CONSTANT_COLOR,[vE]:o.CONSTANT_ALPHA,[_E]:o.ONE_MINUS_CONSTANT_ALPHA};function K(H,Ut,ct,_t,Lt,Bt,se,Ye,pn,Te){if(H===us){w===!0&&(bt(o.BLEND),w=!1);return}if(w===!1&&(ut(o.BLEND),w=!0),H!==eE){if(H!==S||Te!==D){if((x!==Xs||N!==Xs)&&(o.blendEquation(o.FUNC_ADD),x=Xs,N=Xs),Te)switch(H){case io:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jv:o.blendFunc(o.ONE,o.ONE);break;case $v:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case t_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case io:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case $v:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case t_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}z=null,O=null,st=null,G=null,P.set(0,0,0),B=0,S=H,D=Te}return}Lt=Lt||Ut,Bt=Bt||ct,se=se||_t,(Ut!==x||Lt!==N)&&(o.blendEquationSeparate(At[Ut],At[Lt]),x=Ut,N=Lt),(ct!==z||_t!==O||Bt!==st||se!==G)&&(o.blendFuncSeparate(De[ct],De[_t],De[Bt],De[se]),z=ct,O=_t,st=Bt,G=se),(Ye.equals(P)===!1||pn!==B)&&(o.blendColor(Ye.r,Ye.g,Ye.b,pn),P.copy(Ye),B=pn),S=H,D=!1}function on(H,Ut){H.side===ya?bt(o.CULL_FACE):ut(o.CULL_FACE);let ct=H.side===Wn;Ut&&(ct=!ct),ae(ct),H.blending===io&&H.transparent===!1?K(us):K(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),f.setMask(H.colorWrite);const _t=H.stencilWrite;h.setTest(_t),_t&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ye(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(H){A!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),A=H)}function Jt(H){H!==JM?(ut(o.CULL_FACE),H!==F&&(H===Qv?o.cullFace(o.BACK):H===$M?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),F=H}function Rt(H){H!==et&&(j&&o.lineWidth(H),et=H)}function ye(H,Ut,ct){H?(ut(o.POLYGON_OFFSET_FILL),(tt!==Ut||dt!==ct)&&(o.polygonOffset(Ut,ct),tt=Ut,dt=ct)):bt(o.POLYGON_OFFSET_FILL)}function Kt(H){H?ut(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function U(H){H===void 0&&(H=o.TEXTURE0+pt-1),yt!==H&&(o.activeTexture(H),yt=H)}function T(H,Ut,ct){ct===void 0&&(yt===null?ct=o.TEXTURE0+pt-1:ct=yt);let _t=St[ct];_t===void 0&&(_t={type:void 0,texture:void 0},St[ct]=_t),(_t.type!==H||_t.texture!==Ut)&&(yt!==ct&&(o.activeTexture(ct),yt=ct),o.bindTexture(H,Ut||gt[H]),_t.type=H,_t.texture=Ut)}function nt(){const H=St[yt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function vt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Yt(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Nt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $t(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(H){Ee.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function Ht(H){R.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),R.copy(H))}function ge(H,Ut){let ct=v.get(Ut);ct===void 0&&(ct=new WeakMap,v.set(Ut,ct));let _t=ct.get(H);_t===void 0&&(_t=o.getUniformBlockIndex(Ut,H.name),ct.set(H,_t))}function oe(H,Ut){const _t=v.get(Ut).get(H);p.get(Ut)!==_t&&(o.uniformBlockBinding(Ut,_t,H.__bindingPointIndex),p.set(Ut,_t))}function Be(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},yt=null,St={},g={},y=new WeakMap,M=[],b=null,w=!1,S=null,x=null,z=null,O=null,N=null,st=null,G=null,P=new Ge(0,0,0),B=0,D=!1,A=null,F=null,et=null,tt=null,dt=null,Ee.set(0,0,o.canvas.width,o.canvas.height),R.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ut,disable:bt,bindFramebuffer:wt,drawBuffers:It,useProgram:Tt,setBlending:K,setMaterial:on,setFlipSided:ae,setCullFace:Jt,setLineWidth:Rt,setPolygonOffset:ye,setScissorTest:Kt,activeTexture:U,bindTexture:T,unbindTexture:nt,compressedTexImage2D:vt,compressedTexImage3D:xt,texImage2D:Vt,texImage3D:$t,updateUBOMapping:ge,uniformBlockBinding:oe,texStorage2D:ve,texStorage3D:Mt,texSubImage2D:mt,texSubImage3D:Yt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Pt,scissor:ee,viewport:Ht,reset:Be}}function Z_(o,e,a,r){const c=n3(r);switch(a){case hx:return o*e;case px:return o*e;case mx:return o*e*2;case gx:return o*e/c.components*c.byteLength;case Ap:return o*e/c.components*c.byteLength;case vx:return o*e*2/c.components*c.byteLength;case Cp:return o*e*2/c.components*c.byteLength;case dx:return o*e*3/c.components*c.byteLength;case Li:return o*e*4/c.components*c.byteLength;case Rp:return o*e*4/c.components*c.byteLength;case mu:case gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vu:case _u:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zd:case Qd:return Math.max(o,16)*Math.max(e,8)/4;case Wd:case Kd:return Math.max(o,8)*Math.max(e,8)/2;case Jd:case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ip:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ap:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case sp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case lp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case up:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case fp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case hp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case dp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case pp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xu:case mp:case gp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _x:case vp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case _p:case xp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function n3(o){switch(o){case Ta:case cx:return{byteLength:1,components:1};case vl:case ux:case xl:return{byteLength:2,components:1};case Tp:case bp:return{byteLength:2,components:4};case Zs:case Ep:case Sa:return{byteLength:4,components:1};case fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function i3(o,e,a,r,c,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new me,_=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Mu("canvas")}function w(U,T,nt){let vt=1;const xt=Kt(U);if((xt.width>nt||xt.height>nt)&&(vt=nt/Math.max(xt.width,xt.height)),vt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(vt*xt.width),Yt=Math.floor(vt*xt.height);g===void 0&&(g=b(mt,Yt));const Nt=T?b(mt,Yt):g;return Nt.width=mt,Nt.height=Yt,Nt.getContext("2d").drawImage(U,0,0,mt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+mt+"x"+Yt+")."),Nt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,T,nt,vt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=T;if(T===o.RED&&(nt===o.FLOAT&&(mt=o.R32F),nt===o.HALF_FLOAT&&(mt=o.R16F),nt===o.UNSIGNED_BYTE&&(mt=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(mt=o.R8UI),nt===o.UNSIGNED_SHORT&&(mt=o.R16UI),nt===o.UNSIGNED_INT&&(mt=o.R32UI),nt===o.BYTE&&(mt=o.R8I),nt===o.SHORT&&(mt=o.R16I),nt===o.INT&&(mt=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(mt=o.RG32F),nt===o.HALF_FLOAT&&(mt=o.RG16F),nt===o.UNSIGNED_BYTE&&(mt=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(mt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(mt=o.RG16UI),nt===o.UNSIGNED_INT&&(mt=o.RG32UI),nt===o.BYTE&&(mt=o.RG8I),nt===o.SHORT&&(mt=o.RG16I),nt===o.INT&&(mt=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),nt===o.UNSIGNED_INT&&(mt=o.RGB32UI),nt===o.BYTE&&(mt=o.RGB8I),nt===o.SHORT&&(mt=o.RGB16I),nt===o.INT&&(mt=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(mt=o.RGBA32UI),nt===o.BYTE&&(mt=o.RGBA8I),nt===o.SHORT&&(mt=o.RGBA16I),nt===o.INT&&(mt=o.RGBA32I)),T===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),T===o.RGBA){const Yt=xt?Tu:Re.getTransfer(vt);nt===o.FLOAT&&(mt=o.RGBA32F),nt===o.HALF_FLOAT&&(mt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(mt=Yt===Fe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function N(U,T){let nt;return U?T===null||T===Zs||T===co?nt=o.DEPTH24_STENCIL8:T===Sa?nt=o.DEPTH32F_STENCIL8:T===vl&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zs||T===co?nt=o.DEPTH_COMPONENT24:T===Sa?nt=o.DEPTH_COMPONENT32F:T===vl&&(nt=o.DEPTH_COMPONENT16),nt}function st(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Oi&&U.minFilter!==Wi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),B(T),T.isVideoTexture&&_.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),A(T)}function B(U){const T=r.get(U);if(T.__webglInit===void 0)return;const nt=U.source,vt=y.get(nt);if(vt){const xt=vt[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(vt).length===0&&y.delete(nt)}r.remove(U)}function D(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const nt=U.source,vt=y.get(nt);delete vt[T.__cacheKey],d.memory.textures--}function A(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(T.__webglFramebuffer[vt]))for(let xt=0;xt<T.__webglFramebuffer[vt].length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[vt][xt]);else o.deleteFramebuffer(T.__webglFramebuffer[vt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[vt])}else{if(Array.isArray(T.__webglFramebuffer))for(let vt=0;vt<T.__webglFramebuffer.length;vt++)o.deleteFramebuffer(T.__webglFramebuffer[vt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let vt=0;vt<T.__webglColorRenderbuffer.length;vt++)T.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[vt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=U.textures;for(let vt=0,xt=nt.length;vt<xt;vt++){const mt=r.get(nt[vt]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),d.memory.textures--),r.remove(nt[vt])}r.remove(U)}let F=0;function et(){F=0}function tt(){const U=F;return U>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+c.maxTextures),F+=1,U}function dt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function pt(U,T){const nt=r.get(U);if(U.isVideoTexture&&Rt(U),U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){const vt=U.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(nt,U,T);return}}a.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function j(U,T){const nt=r.get(U);if(U.version>0&&nt.__version!==U.version){R(nt,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function rt(U,T){const nt=r.get(U);if(U.version>0&&nt.__version!==U.version){R(nt,U,T);return}a.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function Q(U,T){const nt=r.get(U);if(U.version>0&&nt.__version!==U.version){Y(nt,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const yt={[jd]:o.REPEAT,[js]:o.CLAMP_TO_EDGE,[Yd]:o.MIRRORED_REPEAT},St={[Oi]:o.NEAREST,[RE]:o.NEAREST_MIPMAP_NEAREST,[jc]:o.NEAREST_MIPMAP_LINEAR,[Wi]:o.LINEAR,[rd]:o.LINEAR_MIPMAP_NEAREST,[Ys]:o.LINEAR_MIPMAP_LINEAR},Gt={[LE]:o.NEVER,[FE]:o.ALWAYS,[OE]:o.LESS,[xx]:o.LEQUAL,[PE]:o.EQUAL,[IE]:o.GEQUAL,[zE]:o.GREATER,[BE]:o.NOTEQUAL};function ne(U,T){if(T.type===Sa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Wi||T.magFilter===rd||T.magFilter===jc||T.magFilter===Ys||T.minFilter===Wi||T.minFilter===rd||T.minFilter===jc||T.minFilter===Ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,yt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Gt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Oi||T.minFilter!==jc&&T.minFilter!==Ys||T.type===Sa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(U,T){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const vt=T.source;let xt=y.get(vt);xt===void 0&&(xt={},y.set(vt,xt));const mt=dt(T);if(mt!==U.__cacheKey){xt[mt]===void 0&&(xt[mt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),xt[mt].usedTimes++;const Yt=xt[U.__cacheKey];Yt!==void 0&&(xt[U.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(T)),U.__cacheKey=mt,U.__webglTexture=xt[mt].texture}return nt}function R(U,T,nt){let vt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=o.TEXTURE_3D);const xt=Ee(U,T),mt=T.source;a.bindTexture(vt,U.__webglTexture,o.TEXTURE0+nt);const Yt=r.get(mt);if(mt.version!==Yt.__version||xt===!0){a.activeTexture(o.TEXTURE0+nt);const Nt=Re.getPrimaries(Re.workingColorSpace),Pt=T.colorSpace===cs?null:Re.getPrimaries(T.colorSpace),ve=T.colorSpace===cs||Nt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Mt=w(T.image,!1,c.maxTextureSize);Mt=ye(T,Mt);const Vt=f.convert(T.format,T.colorSpace),$t=f.convert(T.type);let ee=O(T.internalFormat,Vt,$t,T.colorSpace,T.isVideoTexture);ne(vt,T);let Ht;const ge=T.mipmaps,oe=T.isVideoTexture!==!0,Be=Yt.__version===void 0||xt===!0,H=mt.dataReady,Ut=st(T,Mt);if(T.isDepthTexture)ee=N(T.format===uo,T.type),Be&&(oe?a.texStorage2D(o.TEXTURE_2D,1,ee,Mt.width,Mt.height):a.texImage2D(o.TEXTURE_2D,0,ee,Mt.width,Mt.height,0,Vt,$t,null));else if(T.isDataTexture)if(ge.length>0){oe&&Be&&a.texStorage2D(o.TEXTURE_2D,Ut,ee,ge[0].width,ge[0].height);for(let ct=0,_t=ge.length;ct<_t;ct++)Ht=ge[ct],oe?H&&a.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ht.width,Ht.height,Vt,$t,Ht.data):a.texImage2D(o.TEXTURE_2D,ct,ee,Ht.width,Ht.height,0,Vt,$t,Ht.data);T.generateMipmaps=!1}else oe?(Be&&a.texStorage2D(o.TEXTURE_2D,Ut,ee,Mt.width,Mt.height),H&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Vt,$t,Mt.data)):a.texImage2D(o.TEXTURE_2D,0,ee,Mt.width,Mt.height,0,Vt,$t,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&Be&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,ee,ge[0].width,ge[0].height,Mt.depth);for(let ct=0,_t=ge.length;ct<_t;ct++)if(Ht=ge[ct],T.format!==Li)if(Vt!==null)if(oe){if(H)if(T.layerUpdates.size>0){const Lt=Z_(Ht.width,Ht.height,T.format,T.type);for(const Bt of T.layerUpdates){const se=Ht.data.subarray(Bt*Lt/Ht.data.BYTES_PER_ELEMENT,(Bt+1)*Lt/Ht.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Bt,Ht.width,Ht.height,1,Vt,se)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ht.width,Ht.height,Mt.depth,Vt,Ht.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,ee,Ht.width,Ht.height,Mt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?H&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ht.width,Ht.height,Mt.depth,Vt,$t,Ht.data):a.texImage3D(o.TEXTURE_2D_ARRAY,ct,ee,Ht.width,Ht.height,Mt.depth,0,Vt,$t,Ht.data)}else{oe&&Be&&a.texStorage2D(o.TEXTURE_2D,Ut,ee,ge[0].width,ge[0].height);for(let ct=0,_t=ge.length;ct<_t;ct++)Ht=ge[ct],T.format!==Li?Vt!==null?oe?H&&a.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Ht.width,Ht.height,Vt,Ht.data):a.compressedTexImage2D(o.TEXTURE_2D,ct,ee,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?H&&a.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ht.width,Ht.height,Vt,$t,Ht.data):a.texImage2D(o.TEXTURE_2D,ct,ee,Ht.width,Ht.height,0,Vt,$t,Ht.data)}else if(T.isDataArrayTexture)if(oe){if(Be&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,ee,Mt.width,Mt.height,Mt.depth),H)if(T.layerUpdates.size>0){const ct=Z_(Mt.width,Mt.height,T.format,T.type);for(const _t of T.layerUpdates){const Lt=Mt.data.subarray(_t*ct/Mt.data.BYTES_PER_ELEMENT,(_t+1)*ct/Mt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Vt,$t,Lt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Vt,$t,Mt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,ee,Mt.width,Mt.height,Mt.depth,0,Vt,$t,Mt.data);else if(T.isData3DTexture)oe?(Be&&a.texStorage3D(o.TEXTURE_3D,Ut,ee,Mt.width,Mt.height,Mt.depth),H&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Vt,$t,Mt.data)):a.texImage3D(o.TEXTURE_3D,0,ee,Mt.width,Mt.height,Mt.depth,0,Vt,$t,Mt.data);else if(T.isFramebufferTexture){if(Be)if(oe)a.texStorage2D(o.TEXTURE_2D,Ut,ee,Mt.width,Mt.height);else{let ct=Mt.width,_t=Mt.height;for(let Lt=0;Lt<Ut;Lt++)a.texImage2D(o.TEXTURE_2D,Lt,ee,ct,_t,0,Vt,$t,null),ct>>=1,_t>>=1}}else if(ge.length>0){if(oe&&Be){const ct=Kt(ge[0]);a.texStorage2D(o.TEXTURE_2D,Ut,ee,ct.width,ct.height)}for(let ct=0,_t=ge.length;ct<_t;ct++)Ht=ge[ct],oe?H&&a.texSubImage2D(o.TEXTURE_2D,ct,0,0,Vt,$t,Ht):a.texImage2D(o.TEXTURE_2D,ct,ee,Vt,$t,Ht);T.generateMipmaps=!1}else if(oe){if(Be){const ct=Kt(Mt);a.texStorage2D(o.TEXTURE_2D,Ut,ee,ct.width,ct.height)}H&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,$t,Mt)}else a.texImage2D(o.TEXTURE_2D,0,ee,Vt,$t,Mt);S(T)&&x(vt),Yt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Y(U,T,nt){if(T.image.length!==6)return;const vt=Ee(U,T),xt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const mt=r.get(xt);if(xt.version!==mt.__version||vt===!0){a.activeTexture(o.TEXTURE0+nt);const Yt=Re.getPrimaries(Re.workingColorSpace),Nt=T.colorSpace===cs?null:Re.getPrimaries(T.colorSpace),Pt=T.colorSpace===cs||Yt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ve=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Vt=[];for(let _t=0;_t<6;_t++)!ve&&!Mt?Vt[_t]=w(T.image[_t],!0,c.maxCubemapSize):Vt[_t]=Mt?T.image[_t].image:T.image[_t],Vt[_t]=ye(T,Vt[_t]);const $t=Vt[0],ee=f.convert(T.format,T.colorSpace),Ht=f.convert(T.type),ge=O(T.internalFormat,ee,Ht,T.colorSpace),oe=T.isVideoTexture!==!0,Be=mt.__version===void 0||vt===!0,H=xt.dataReady;let Ut=st(T,$t);ne(o.TEXTURE_CUBE_MAP,T);let ct;if(ve){oe&&Be&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ge,$t.width,$t.height);for(let _t=0;_t<6;_t++){ct=Vt[_t].mipmaps;for(let Lt=0;Lt<ct.length;Lt++){const Bt=ct[Lt];T.format!==Li?ee!==null?oe?H&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,Bt.width,Bt.height,ee,Bt.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,ge,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,Bt.width,Bt.height,ee,Ht,Bt.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,ge,Bt.width,Bt.height,0,ee,Ht,Bt.data)}}}else{if(ct=T.mipmaps,oe&&Be){ct.length>0&&Ut++;const _t=Kt(Vt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ge,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt[_t].width,Vt[_t].height,ee,Ht,Vt[_t].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ge,Vt[_t].width,Vt[_t].height,0,ee,Ht,Vt[_t].data);for(let Lt=0;Lt<ct.length;Lt++){const se=ct[Lt].image[_t].image;oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,se.width,se.height,ee,Ht,se.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,ge,se.width,se.height,0,ee,Ht,se.data)}}else{oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ee,Ht,Vt[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ge,ee,Ht,Vt[_t]);for(let Lt=0;Lt<ct.length;Lt++){const Bt=ct[Lt];oe?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,ee,Ht,Bt.image[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,ge,ee,Ht,Bt.image[_t])}}}S(T)&&x(o.TEXTURE_CUBE_MAP),mt.__version=xt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function gt(U,T,nt,vt,xt,mt){const Yt=f.convert(nt.format,nt.colorSpace),Nt=f.convert(nt.type),Pt=O(nt.internalFormat,Yt,Nt,nt.colorSpace),ve=r.get(T),Mt=r.get(nt);if(Mt.__renderTarget=T,!ve.__hasExternalTextures){const Vt=Math.max(1,T.width>>mt),$t=Math.max(1,T.height>>mt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?a.texImage3D(xt,mt,Pt,Vt,$t,T.depth,0,Yt,Nt,null):a.texImage2D(xt,mt,Pt,Vt,$t,0,Yt,Nt,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Jt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,xt,Mt.__webglTexture,0,ae(T)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,xt,Mt.__webglTexture,mt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(U,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const vt=T.depthTexture,xt=vt&&vt.isDepthTexture?vt.type:null,mt=N(T.stencilBuffer,xt),Yt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=ae(T);Jt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,mt,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,U)}else{const vt=T.textures;for(let xt=0;xt<vt.length;xt++){const mt=vt[xt],Yt=f.convert(mt.format,mt.colorSpace),Nt=f.convert(mt.type),Pt=O(mt.internalFormat,Yt,Nt,mt.colorSpace),ve=ae(T);nt&&Jt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,Pt,T.width,T.height):Jt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve,Pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(T.depthTexture);vt.__renderTarget=T,(!vt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const xt=vt.__webglTexture,mt=ae(T);if(T.depthTexture.format===ao)Jt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(T.depthTexture.format===uo)Jt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function wt(U){const T=r.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const vt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),vt){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,vt.removeEventListener("dispose",xt)};vt.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=vt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");bt(T.__webglFramebuffer,U)}else if(nt){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]===void 0)T.__webglDepthbuffer[vt]=o.createRenderbuffer(),ut(T.__webglDepthbuffer[vt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,mt)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ut(T.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,xt)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function It(U,T,nt){const vt=r.get(U);T!==void 0&&gt(vt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&wt(U)}function Tt(U){const T=U.texture,nt=r.get(U),vt=r.get(T);U.addEventListener("dispose",P);const xt=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Yt=xt.length>1;if(Yt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=T.version,d.memory.textures++),mt){nt.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Nt]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)nt.__webglFramebuffer[Nt][Pt]=o.createFramebuffer()}else nt.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Nt=0;Nt<T.mipmaps.length;Nt++)nt.__webglFramebuffer[Nt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Nt=0,Pt=xt.length;Nt<Pt;Nt++){const ve=r.get(xt[Nt]);ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Jt(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Nt=0;Nt<xt.length;Nt++){const Pt=xt[Nt];nt.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Nt]);const ve=f.convert(Pt.format,Pt.colorSpace),Mt=f.convert(Pt.type),Vt=O(Pt.internalFormat,ve,Mt,Pt.colorSpace,U.isXRRenderTarget===!0),$t=ae(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Vt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),ut(nt.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){a.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),ne(o.TEXTURE_CUBE_MAP,T);for(let Nt=0;Nt<6;Nt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)gt(nt.__webglFramebuffer[Nt][Pt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Pt);else gt(nt.__webglFramebuffer[Nt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);S(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Yt){for(let Nt=0,Pt=xt.length;Nt<Pt;Nt++){const ve=xt[Nt],Mt=r.get(ve);a.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),ne(o.TEXTURE_2D,ve),gt(nt.__webglFramebuffer,U,ve,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),S(ve)&&x(o.TEXTURE_2D)}a.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Nt,vt.__webglTexture),ne(Nt,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)gt(nt.__webglFramebuffer[Pt],U,T,o.COLOR_ATTACHMENT0,Nt,Pt);else gt(nt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Nt,0);S(T)&&x(Nt),a.unbindTexture()}U.depthBuffer&&wt(U)}function At(U){const T=U.textures;for(let nt=0,vt=T.length;nt<vt;nt++){const xt=T[nt];if(S(xt)){const mt=z(U),Yt=r.get(xt).__webglTexture;a.bindTexture(mt,Yt),x(mt),a.unbindTexture()}}}const De=[],K=[];function on(U){if(U.samples>0){if(Jt(U)===!1){const T=U.textures,nt=U.width,vt=U.height;let xt=o.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=r.get(U),Nt=T.length>1;if(Nt)for(let Pt=0;Pt<T.length;Pt++)a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Pt]);const ve=r.get(T[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ve,0)}o.blitFramebuffer(0,0,nt,vt,0,0,nt,vt,xt,o.NEAREST),p===!0&&(De.length=0,K.length=0,De.push(o.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(De.push(mt),K.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,K)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let Pt=0;Pt<T.length;Pt++){a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Pt]);const ve=r.get(T[Pt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,ve,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ae(U){return Math.min(c.maxSamples,U.samples)}function Jt(U){const T=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(U){const T=d.render.frame;_.get(U)!==T&&(_.set(U,T),U.update())}function ye(U,T){const nt=U.colorSpace,vt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==ho&&nt!==cs&&(Re.getTransfer(nt)===Fe?(vt!==Li||xt!==Ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function Kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(v.width=U.naturalWidth||U.width,v.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(v.width=U.displayWidth,v.height=U.displayHeight):(v.width=U.width,v.height=U.height),v}this.allocateTextureUnit=tt,this.resetTextureUnits=et,this.setTexture2D=pt,this.setTexture2DArray=j,this.setTexture3D=rt,this.setTextureCube=Q,this.rebindTextures=It,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Jt}function a3(o,e){function a(r,c=cs){let f;const d=Re.getTransfer(c);if(r===Ta)return o.UNSIGNED_BYTE;if(r===Tp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===bp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===fx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===cx)return o.BYTE;if(r===ux)return o.SHORT;if(r===vl)return o.UNSIGNED_SHORT;if(r===Ep)return o.INT;if(r===Zs)return o.UNSIGNED_INT;if(r===Sa)return o.FLOAT;if(r===xl)return o.HALF_FLOAT;if(r===hx)return o.ALPHA;if(r===dx)return o.RGB;if(r===Li)return o.RGBA;if(r===px)return o.LUMINANCE;if(r===mx)return o.LUMINANCE_ALPHA;if(r===ao)return o.DEPTH_COMPONENT;if(r===uo)return o.DEPTH_STENCIL;if(r===gx)return o.RED;if(r===Ap)return o.RED_INTEGER;if(r===vx)return o.RG;if(r===Cp)return o.RG_INTEGER;if(r===Rp)return o.RGBA_INTEGER;if(r===mu||r===gu||r===vu||r===_u)if(d===Fe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===mu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_u)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===mu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_u)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wd||r===Zd||r===Kd||r===Qd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Wd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jd||r===$d||r===tp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Jd||r===$d)return d===Fe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===tp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ep||r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===hp||r===dp||r===pp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===ep)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===np)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ip)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ap)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===op)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===up)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xu||r===mp||r===gp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===xu)return d===Fe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_x||r===vp||r===_p||r===xp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===xu)return f.COMPRESSED_RED_RGTC1_EXT;if(r===vp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_p)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===co?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:a}}class s3 extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class du extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r3={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const r of e.hand.values())this._getHandJoint(a,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,r){let c=null,f=null,d=null;const h=this._targetRay,p=this._grip,v=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(v&&e.hand){d=!0;for(const w of e.hand.values()){const S=a.getJointPose(w,r),x=this._getHandJoint(v,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=v.joints["index-finger-tip"],g=v.joints["thumb-tip"],y=_.position.distanceTo(g.position),M=.02,b=.005;v.inputState.pinching&&y>M+b?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!v.inputState.pinching&&y<=M-b&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,r),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(c=a.getPose(e.targetRaySpace,r),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(r3)))}return h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),v!==null&&(v.visible=d!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const r=new du;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[a.jointName]=r,e.add(r)}return e.joints[a.jointName]}}const o3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l3=`
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

}`;class c3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a,r){if(this.texture===null){const c=new Zn,f=e.properties.get(c);f.__webglTexture=a.texture,(a.depthNear!=r.depthNear||a.depthFar!=r.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=c}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,r=new Aa({vertexShader:o3,fragmentShader:l3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Zi(new Ml(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u3 extends Js{constructor(e,a){super();const r=this;let c=null,f=1,d=null,h="local-floor",p=1,v=null,_=null,g=null,y=null,M=null,b=null;const w=new c3,S=a.getContextAttributes();let x=null,z=null;const O=[],N=[],st=new me;let G=null;const P=new Mi;P.viewport=new $e;const B=new Mi;B.viewport=new $e;const D=[P,B],A=new s3;let F=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let Y=O[R];return Y===void 0&&(Y=new Ld,O[R]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(R){let Y=O[R];return Y===void 0&&(Y=new Ld,O[R]=Y),Y.getGripSpace()},this.getHand=function(R){let Y=O[R];return Y===void 0&&(Y=new Ld,O[R]=Y),Y.getHandSpace()};function tt(R){const Y=N.indexOf(R.inputSource);if(Y===-1)return;const gt=O[Y];gt!==void 0&&(gt.update(R.inputSource,R.frame,v||d),gt.dispatchEvent({type:R.type,data:R.inputSource}))}function dt(){c.removeEventListener("select",tt),c.removeEventListener("selectstart",tt),c.removeEventListener("selectend",tt),c.removeEventListener("squeeze",tt),c.removeEventListener("squeezestart",tt),c.removeEventListener("squeezeend",tt),c.removeEventListener("end",dt),c.removeEventListener("inputsourceschange",pt);for(let R=0;R<O.length;R++){const Y=N[R];Y!==null&&(N[R]=null,O[R].disconnect(Y))}F=null,et=null,w.reset(),e.setRenderTarget(x),M=null,y=null,g=null,c=null,z=null,Ee.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(st.width,st.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){f=R,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){h=R,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||d},this.setReferenceSpace=function(R){v=R},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return c},this.setSession=async function(R){if(c=R,c!==null){if(x=e.getRenderTarget(),c.addEventListener("select",tt),c.addEventListener("selectstart",tt),c.addEventListener("selectend",tt),c.addEventListener("squeeze",tt),c.addEventListener("squeezestart",tt),c.addEventListener("squeezeend",tt),c.addEventListener("end",dt),c.addEventListener("inputsourceschange",pt),S.xrCompatible!==!0&&await a.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(st),c.renderState.layers===void 0){const Y={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,a,Y),c.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Ks(M.framebufferWidth,M.framebufferHeight,{format:Li,type:Ta,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let Y=null,gt=null,ut=null;S.depth&&(ut=S.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Y=S.stencil?uo:ao,gt=S.stencil?co:Zs);const bt={colorFormat:a.RGBA8,depthFormat:ut,scaleFactor:f};g=new XRWebGLBinding(c,a),y=g.createProjectionLayer(bt),c.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new Ks(y.textureWidth,y.textureHeight,{format:Li,type:Ta,depthTexture:new Px(y.textureWidth,y.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),v=null,d=await c.requestReferenceSpace(h),Ee.setContext(c),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pt(R){for(let Y=0;Y<R.removed.length;Y++){const gt=R.removed[Y],ut=N.indexOf(gt);ut>=0&&(N[ut]=null,O[ut].disconnect(gt))}for(let Y=0;Y<R.added.length;Y++){const gt=R.added[Y];let ut=N.indexOf(gt);if(ut===-1){for(let wt=0;wt<O.length;wt++)if(wt>=N.length){N.push(gt),ut=wt;break}else if(N[wt]===null){N[wt]=gt,ut=wt;break}if(ut===-1)break}const bt=O[ut];bt&&bt.connect(gt)}}const j=new at,rt=new at;function Q(R,Y,gt){j.setFromMatrixPosition(Y.matrixWorld),rt.setFromMatrixPosition(gt.matrixWorld);const ut=j.distanceTo(rt),bt=Y.projectionMatrix.elements,wt=gt.projectionMatrix.elements,It=bt[14]/(bt[10]-1),Tt=bt[14]/(bt[10]+1),At=(bt[9]+1)/bt[5],De=(bt[9]-1)/bt[5],K=(bt[8]-1)/bt[0],on=(wt[8]+1)/wt[0],ae=It*K,Jt=It*on,Rt=ut/(-K+on),ye=Rt*-K;if(Y.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ye),R.translateZ(Rt),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),bt[10]===-1)R.projectionMatrix.copy(Y.projectionMatrix),R.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Kt=It+Rt,U=Tt+Rt,T=ae-ye,nt=Jt+(ut-ye),vt=At*Tt/U*Kt,xt=De*Tt/U*Kt;R.projectionMatrix.makePerspective(T,nt,vt,xt,Kt,U),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function yt(R,Y){Y===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(Y.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(c===null)return;let Y=R.near,gt=R.far;w.texture!==null&&(w.depthNear>0&&(Y=w.depthNear),w.depthFar>0&&(gt=w.depthFar)),A.near=B.near=P.near=Y,A.far=B.far=P.far=gt,(F!==A.near||et!==A.far)&&(c.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,et=A.far),P.layers.mask=R.layers.mask|2,B.layers.mask=R.layers.mask|4,A.layers.mask=P.layers.mask|B.layers.mask;const ut=R.parent,bt=A.cameras;yt(A,ut);for(let wt=0;wt<bt.length;wt++)yt(bt[wt],ut);bt.length===2?Q(A,P,B):A.projectionMatrix.copy(P.projectionMatrix),St(R,A,ut)};function St(R,Y,gt){gt===null?R.matrix.copy(Y.matrixWorld):(R.matrix.copy(gt.matrixWorld),R.matrix.invert(),R.matrix.multiply(Y.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(Y.projectionMatrix),R.projectionMatrixInverse.copy(Y.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=_l*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(R){p=R,y!==null&&(y.fixedFoveation=R),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=R)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let Gt=null;function ne(R,Y){if(_=Y.getViewerPose(v||d),b=Y,_!==null){const gt=_.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let ut=!1;gt.length!==A.cameras.length&&(A.cameras.length=0,ut=!0);for(let wt=0;wt<gt.length;wt++){const It=gt[wt];let Tt=null;if(M!==null)Tt=M.getViewport(It);else{const De=g.getViewSubImage(y,It);Tt=De.viewport,wt===0&&(e.setRenderTargetTextures(z,De.colorTexture,y.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(z))}let At=D[wt];At===void 0&&(At=new Mi,At.layers.enable(wt),At.viewport=new $e,D[wt]=At),At.matrix.fromArray(It.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(It.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),wt===0&&(A.matrix.copy(At.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ut===!0&&A.cameras.push(At)}const bt=c.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const wt=g.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&w.init(e,wt,c.renderState)}}for(let gt=0;gt<O.length;gt++){const ut=N[gt],bt=O[gt];ut!==null&&bt!==void 0&&bt.update(ut,Y,v||d)}Gt&&Gt(R,Y),Y.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Y}),b=null}const Ee=new Lx;Ee.setAnimationLoop(ne),this.setAnimationLoop=function(R){Gt=R},this.dispose=function(){}}}const Gs=new ba,f3=new rn;function h3(o,e){function a(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,wx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function c(S,x,z,O,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),g(S,x)):x.isMeshPhongMaterial?(f(S,x),_(S,x)):x.isMeshStandardMaterial?(f(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,N)):x.isMeshMatcapMaterial?(f(S,x),b(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),w(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?p(S,x,z,O):x.isSpriteMaterial?v(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,a(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,a(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,a(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,a(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const z=e.get(x),O=z.envMap,N=z.envMapRotation;O&&(S.envMap.value=O,Gs.copy(N),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),S.envMapRotation.value.setFromMatrix4(f3.makeRotationFromEuler(Gs)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,z,O){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*z,S.scale.value=O*.5,x.map&&(S.map.value=x.map,a(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,z){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const z=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function d3(o,e,a,r){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,O){const N=O.program;r.uniformBlockBinding(z,N)}function v(z,O){let N=c[z.id];N===void 0&&(b(z),N=_(z),c[z.id]=N,z.addEventListener("dispose",S));const st=O.program;r.updateUBOMapping(z,st);const G=e.render.frame;f[z.id]!==G&&(y(z),f[z.id]=G)}function _(z){const O=g();z.__bindingPointIndex=O;const N=o.createBuffer(),st=z.__size,G=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,st,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function g(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const O=c[z.id],N=z.uniforms,st=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,P=N.length;G<P;G++){const B=Array.isArray(N[G])?N[G]:[N[G]];for(let D=0,A=B.length;D<A;D++){const F=B[D];if(M(F,G,D,st)===!0){const et=F.__offset,tt=Array.isArray(F.value)?F.value:[F.value];let dt=0;for(let pt=0;pt<tt.length;pt++){const j=tt[pt],rt=w(j);typeof j=="number"||typeof j=="boolean"?(F.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,et+dt,F.__data)):j.isMatrix3?(F.__data[0]=j.elements[0],F.__data[1]=j.elements[1],F.__data[2]=j.elements[2],F.__data[3]=0,F.__data[4]=j.elements[3],F.__data[5]=j.elements[4],F.__data[6]=j.elements[5],F.__data[7]=0,F.__data[8]=j.elements[6],F.__data[9]=j.elements[7],F.__data[10]=j.elements[8],F.__data[11]=0):(j.toArray(F.__data,dt),dt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,O,N,st){const G=z.value,P=O+"_"+N;if(st[P]===void 0)return typeof G=="number"||typeof G=="boolean"?st[P]=G:st[P]=G.clone(),!0;{const B=st[P];if(typeof G=="number"||typeof G=="boolean"){if(B!==G)return st[P]=G,!0}else if(B.equals(G)===!1)return B.copy(G),!0}return!1}function b(z){const O=z.uniforms;let N=0;const st=16;for(let P=0,B=O.length;P<B;P++){const D=Array.isArray(O[P])?O[P]:[O[P]];for(let A=0,F=D.length;A<F;A++){const et=D[A],tt=Array.isArray(et.value)?et.value:[et.value];for(let dt=0,pt=tt.length;dt<pt;dt++){const j=tt[dt],rt=w(j),Q=N%st,yt=Q%rt.boundary,St=Q+yt;N+=yt,St!==0&&st-St<rt.storage&&(N+=st-St),et.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=N,N+=rt.storage}}}const G=N%st;return G>0&&(N+=st-G),z.__size=N,z.__cache={},this}function w(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function S(z){const O=z.target;O.removeEventListener("dispose",S);const N=d.indexOf(O.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(c[O.id]),delete c[O.id],delete f[O.id]}function x(){for(const z in c)o.deleteBuffer(c[z]);d=[],c={},f={}}return{bind:p,update:v,dispose:x}}class p3{constructor(e={}){const{canvas:a=n1(),context:r=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:v=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const b=new Uint32Array(4),w=new Int32Array(4);let S=null,x=null;const z=[],O=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this.toneMapping=fs,this.toneMappingExposure=1;const N=this;let st=!1,G=0,P=0,B=null,D=-1,A=null;const F=new $e,et=new $e;let tt=null;const dt=new Ge(0);let pt=0,j=a.width,rt=a.height,Q=1,yt=null,St=null;const Gt=new $e(0,0,j,rt),ne=new $e(0,0,j,rt);let Ee=!1;const R=new Ux;let Y=!1,gt=!1;const ut=new rn,bt=new rn,wt=new at,It=new $e,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function De(){return B===null?Q:1}let K=r;function on(C,W){return a.getContext(C,W)}try{const C={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:v,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Mp}`),a.addEventListener("webglcontextlost",_t,!1),a.addEventListener("webglcontextrestored",Lt,!1),a.addEventListener("webglcontextcreationerror",Bt,!1),K===null){const W="webgl2";if(K=on(W,C),K===null)throw on(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,Jt,Rt,ye,Kt,U,T,nt,vt,xt,mt,Yt,Nt,Pt,ve,Mt,Vt,$t,ee,Ht,ge,oe,Be,H;function Ut(){ae=new x2(K),ae.init(),oe=new a3(K,ae),Jt=new d2(K,ae,e,oe),Rt=new e3(K,ae),Jt.reverseDepthBuffer&&y&&Rt.buffers.depth.setReversed(!0),ye=new M2(K),Kt=new HA,U=new i3(K,ae,Rt,Kt,Jt,oe,ye),T=new m2(N),nt=new _2(N),vt=new w1(K),Be=new f2(K,vt),xt=new y2(K,vt,ye,Be),mt=new T2(K,xt,vt,ye),ee=new E2(K,Jt,U),Mt=new p2(Kt),Yt=new FA(N,T,nt,ae,Jt,Be,Mt),Nt=new h3(N,Kt),Pt=new VA,ve=new WA(ae),$t=new u2(N,T,nt,Rt,mt,M,p),Vt=new $A(N,mt,Jt),H=new d3(K,ye,Jt,Rt),Ht=new h2(K,ae,ye),ge=new S2(K,ae,ye),ye.programs=Yt.programs,N.capabilities=Jt,N.extensions=ae,N.properties=Kt,N.renderLists=Pt,N.shadowMap=Vt,N.state=Rt,N.info=ye}Ut();const ct=new u3(N,K);this.xr=ct,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(j,rt,!1))},this.getSize=function(C){return C.set(j,rt)},this.setSize=function(C,W,ot=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,rt=W,a.width=Math.floor(C*Q),a.height=Math.floor(W*Q),ot===!0&&(a.style.width=C+"px",a.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(j*Q,rt*Q).floor()},this.setDrawingBufferSize=function(C,W,ot){j=C,rt=W,Q=ot,a.width=Math.floor(C*ot),a.height=Math.floor(W*ot),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(Gt)},this.setViewport=function(C,W,ot,lt){C.isVector4?Gt.set(C.x,C.y,C.z,C.w):Gt.set(C,W,ot,lt),Rt.viewport(F.copy(Gt).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,W,ot,lt){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,W,ot,lt),Rt.scissor(et.copy(ne).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Rt.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){St=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(C=!0,W=!0,ot=!0){let lt=0;if(C){let Z=!1;if(B!==null){const Et=B.texture.format;Z=Et===Rp||Et===Cp||Et===Ap}if(Z){const Et=B.texture.type,Ot=Et===Ta||Et===Zs||Et===vl||Et===co||Et===Tp||Et===bp,qt=$t.getClearColor(),jt=$t.getClearAlpha(),Qt=qt.r,Wt=qt.g,zt=qt.b;Ot?(b[0]=Qt,b[1]=Wt,b[2]=zt,b[3]=jt,K.clearBufferuiv(K.COLOR,0,b)):(w[0]=Qt,w[1]=Wt,w[2]=zt,w[3]=jt,K.clearBufferiv(K.COLOR,0,w))}else lt|=K.COLOR_BUFFER_BIT}W&&(lt|=K.DEPTH_BUFFER_BIT),ot&&(lt|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",_t,!1),a.removeEventListener("webglcontextrestored",Lt,!1),a.removeEventListener("webglcontextcreationerror",Bt,!1),Pt.dispose(),ve.dispose(),Kt.dispose(),T.dispose(),nt.dispose(),mt.dispose(),Be.dispose(),H.dispose(),Yt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",An),ct.removeEventListener("sessionend",El),Qi.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),st=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),st=!1;const C=ye.autoReset,W=Vt.enabled,ot=Vt.autoUpdate,lt=Vt.needsUpdate,Z=Vt.type;Ut(),ye.autoReset=C,Vt.enabled=W,Vt.autoUpdate=ot,Vt.needsUpdate=lt,Vt.type=Z}function Bt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const W=C.target;W.removeEventListener("dispose",se),Ye(W)}function Ye(C){pn(C),Kt.remove(C)}function pn(C){const W=Kt.get(C).programs;W!==void 0&&(W.forEach(function(ot){Yt.releaseProgram(ot)}),C.isShaderMaterial&&Yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ot,lt,Z,Et){W===null&&(W=Tt);const Ot=Z.isMesh&&Z.matrixWorld.determinant()<0,qt=Cu(C,W,ot,lt,Z);Rt.setMaterial(lt,Ot);let jt=ot.index,Qt=1;if(lt.wireframe===!0){if(jt=xt.getWireframeAttribute(ot),jt===void 0)return;Qt=2}const Wt=ot.drawRange,zt=ot.attributes.position;let de=Wt.start*Qt,Le=(Wt.start+Wt.count)*Qt;Et!==null&&(de=Math.max(de,Et.start*Qt),Le=Math.min(Le,(Et.start+Et.count)*Qt)),jt!==null?(de=Math.max(de,0),Le=Math.min(Le,jt.count)):zt!=null&&(de=Math.max(de,0),Le=Math.min(Le,zt.count));const Ve=Le-de;if(Ve<0||Ve===1/0)return;Be.setup(Z,lt,qt,ot,jt);let Cn,Ce=Ht;if(jt!==null&&(Cn=vt.get(jt),Ce=ge,Ce.setIndex(Cn)),Z.isMesh)lt.wireframe===!0?(Rt.setLineWidth(lt.wireframeLinewidth*De()),Ce.setMode(K.LINES)):Ce.setMode(K.TRIANGLES);else if(Z.isLine){let Xt=lt.linewidth;Xt===void 0&&(Xt=1),Rt.setLineWidth(Xt*De()),Z.isLineSegments?Ce.setMode(K.LINES):Z.isLineLoop?Ce.setMode(K.LINE_LOOP):Ce.setMode(K.LINE_STRIP)}else Z.isPoints?Ce.setMode(K.POINTS):Z.isSprite&&Ce.setMode(K.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ce.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Xt=Z._multiDrawStarts,Gn=Z._multiDrawCounts,be=Z._multiDrawCount,ln=jt?vt.get(jt).bytesPerElement:1,Qn=Kt.get(lt).currentProgram.getUniforms();for(let cn=0;cn<be;cn++)Qn.setValue(K,"_gl_DrawID",cn),Ce.render(Xt[cn]/ln,Gn[cn])}else if(Z.isInstancedMesh)Ce.renderInstances(de,Ve,Z.count);else if(ot.isInstancedBufferGeometry){const Xt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Gn=Math.min(ot.instanceCount,Xt);Ce.renderInstances(de,Ve,Gn)}else Ce.render(de,Ve)};function Te(C,W,ot){C.transparent===!0&&C.side===ya&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,$i(C,W,ot),C.side=hs,C.needsUpdate=!0,$i(C,W,ot),C.side=ya):$i(C,W,ot)}this.compile=function(C,W,ot=null){ot===null&&(ot=C),x=ve.get(ot),x.init(W),O.push(x),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),C!==ot&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const lt=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Et=Z.material;if(Et)if(Array.isArray(Et))for(let Ot=0;Ot<Et.length;Ot++){const qt=Et[Ot];Te(qt,ot,Z),lt.add(qt)}else Te(Et,ot,Z),lt.add(Et)}),O.pop(),x=null,lt},this.compileAsync=function(C,W,ot=null){const lt=this.compile(C,W,ot);return new Promise(Z=>{function Et(){if(lt.forEach(function(Ot){Kt.get(Ot).currentProgram.isReady()&&lt.delete(Ot)}),lt.size===0){Z(C);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let je=null;function mn(C){je&&je(C)}function An(){Qi.stop()}function El(){Qi.start()}const Qi=new Lx;Qi.setAnimationLoop(mn),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){je=C,ct.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},ct.addEventListener("sessionstart",An),ct.addEventListener("sessionend",El),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(st===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(W),W=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,W,B),x=ve.get(C,O.length),x.init(W),O.push(x),bt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),R.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,Y=Mt.init(this.clippingPlanes,gt),S=Pt.get(C,z.length),S.init(),z.push(S),ct.enabled===!0&&ct.isPresenting===!0){const Et=N.xr.getDepthSensingMesh();Et!==null&&go(Et,W,-1/0,N.sortObjects)}go(C,W,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(yt,St),At=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,At&&$t.addToRenderList(S,C),this.info.render.frame++,Y===!0&&Mt.beginShadows();const ot=x.state.shadowsArray;Vt.render(ot,C,W),Y===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,Z=S.transmissive;if(x.setupLights(),W.isArrayCamera){const Et=W.cameras;if(Z.length>0)for(let Ot=0,qt=Et.length;Ot<qt;Ot++){const jt=Et[Ot];ps(lt,Z,C,jt)}At&&$t.render(C);for(let Ot=0,qt=Et.length;Ot<qt;Ot++){const jt=Et[Ot];ds(S,C,jt,jt.viewport)}}else Z.length>0&&ps(lt,Z,C,W),At&&$t.render(C),ds(S,C,W);B!==null&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(N,C,W),Be.resetDefaultState(),D=-1,A=null,O.pop(),O.length>0?(x=O[O.length-1],Y===!0&&Mt.setGlobalState(N.clippingPlanes,x.state.camera)):x=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function go(C,W,ot,lt){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||R.intersectsSprite(C)){lt&&It.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const Ot=mt.update(C),qt=C.material;qt.visible&&S.push(C,Ot,qt,ot,It.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||R.intersectsObject(C))){const Ot=mt.update(C),qt=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),It.copy(C.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),It.copy(Ot.boundingSphere.center)),It.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(qt)){const jt=Ot.groups;for(let Qt=0,Wt=jt.length;Qt<Wt;Qt++){const zt=jt[Qt],de=qt[zt.materialIndex];de&&de.visible&&S.push(C,Ot,de,ot,It.z,zt)}}else qt.visible&&S.push(C,Ot,qt,ot,It.z,null)}}const Et=C.children;for(let Ot=0,qt=Et.length;Ot<qt;Ot++)go(Et[Ot],W,ot,lt)}function ds(C,W,ot,lt){const Z=C.opaque,Et=C.transmissive,Ot=C.transparent;x.setupLightsView(ot),Y===!0&&Mt.setGlobalState(N.clippingPlanes,ot),lt&&Rt.viewport(F.copy(lt)),Z.length>0&&Ji(Z,W,ot),Et.length>0&&Ji(Et,W,ot),Ot.length>0&&Ji(Ot,W,ot),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ps(C,W,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new Ks(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?xl:Ta,minFilter:Ys,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Et=x.state.transmissionRenderTarget[lt.id],Ot=lt.viewport||F;Et.setSize(Ot.z,Ot.w);const qt=N.getRenderTarget();N.setRenderTarget(Et),N.getClearColor(dt),pt=N.getClearAlpha(),pt<1&&N.setClearColor(16777215,.5),N.clear(),At&&$t.render(ot);const jt=N.toneMapping;N.toneMapping=fs;const Qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),Y===!0&&Mt.setGlobalState(N.clippingPlanes,lt),Ji(C,ot,lt),U.updateMultisampleRenderTarget(Et),U.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let zt=0,de=W.length;zt<de;zt++){const Le=W[zt],Ve=Le.object,Cn=Le.geometry,Ce=Le.material,Xt=Le.group;if(Ce.side===ya&&Ve.layers.test(lt.layers)){const Gn=Ce.side;Ce.side=Wn,Ce.needsUpdate=!0,Pi(Ve,ot,lt,Cn,Ce,Xt),Ce.side=Gn,Ce.needsUpdate=!0,Wt=!0}}Wt===!0&&(U.updateMultisampleRenderTarget(Et),U.updateRenderTargetMipmap(Et))}N.setRenderTarget(qt),N.setClearColor(dt,pt),Qt!==void 0&&(lt.viewport=Qt),N.toneMapping=jt}function Ji(C,W,ot){const lt=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Et=C.length;Z<Et;Z++){const Ot=C[Z],qt=Ot.object,jt=Ot.geometry,Qt=lt===null?Ot.material:lt,Wt=Ot.group;qt.layers.test(ot.layers)&&Pi(qt,W,ot,jt,Qt,Wt)}}function Pi(C,W,ot,lt,Z,Et){C.onBeforeRender(N,W,ot,lt,Z,Et),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(N,W,ot,lt,C,Et),Z.transparent===!0&&Z.side===ya&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,N.renderBufferDirect(ot,W,lt,Z,C,Et),Z.side=hs,Z.needsUpdate=!0,N.renderBufferDirect(ot,W,lt,Z,C,Et),Z.side=ya):N.renderBufferDirect(ot,W,lt,Z,C,Et),C.onAfterRender(N,W,ot,lt,Z,Et)}function $i(C,W,ot){W.isScene!==!0&&(W=Tt);const lt=Kt.get(C),Z=x.state.lights,Et=x.state.shadowsArray,Ot=Z.state.version,qt=Yt.getParameters(C,Z.state,Et,W,ot),jt=Yt.getProgramCacheKey(qt);let Qt=lt.programs;lt.environment=C.isMeshStandardMaterial?W.environment:null,lt.fog=W.fog,lt.envMap=(C.isMeshStandardMaterial?nt:T).get(C.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",se),Qt=new Map,lt.programs=Qt);let Wt=Qt.get(jt);if(Wt!==void 0){if(lt.currentProgram===Wt&&lt.lightsStateVersion===Ot)return vo(C,qt),Wt}else qt.uniforms=Yt.getUniforms(C),C.onBeforeCompile(qt,N),Wt=Yt.acquireProgram(qt,jt),Qt.set(jt,Wt),lt.uniforms=qt.uniforms;const zt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=Mt.uniform),vo(C,qt),lt.needsLights=_o(C),lt.lightsStateVersion=Ot,lt.needsLights&&(zt.ambientLightColor.value=Z.state.ambient,zt.lightProbe.value=Z.state.probe,zt.directionalLights.value=Z.state.directional,zt.directionalLightShadows.value=Z.state.directionalShadow,zt.spotLights.value=Z.state.spot,zt.spotLightShadows.value=Z.state.spotShadow,zt.rectAreaLights.value=Z.state.rectArea,zt.ltc_1.value=Z.state.rectAreaLTC1,zt.ltc_2.value=Z.state.rectAreaLTC2,zt.pointLights.value=Z.state.point,zt.pointLightShadows.value=Z.state.pointShadow,zt.hemisphereLights.value=Z.state.hemi,zt.directionalShadowMap.value=Z.state.directionalShadowMap,zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,zt.spotShadowMap.value=Z.state.spotShadowMap,zt.spotLightMatrix.value=Z.state.spotLightMatrix,zt.spotLightMap.value=Z.state.spotLightMap,zt.pointShadowMap.value=Z.state.pointShadowMap,zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),lt.currentProgram=Wt,lt.uniformsList=null,Wt}function Ca(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=yu.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function vo(C,W){const ot=Kt.get(C);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function Cu(C,W,ot,lt,Z){W.isScene!==!0&&(W=Tt),U.resetTextureUnits();const Et=W.fog,Ot=lt.isMeshStandardMaterial?W.environment:null,qt=B===null?N.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ho,jt=(lt.isMeshStandardMaterial?nt:T).get(lt.envMap||Ot),Qt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Wt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),zt=!!ot.morphAttributes.position,de=!!ot.morphAttributes.normal,Le=!!ot.morphAttributes.color;let Ve=fs;lt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ve=N.toneMapping);const Cn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ce=Cn!==void 0?Cn.length:0,Xt=Kt.get(lt),Gn=x.state.lights;if(Y===!0&&(gt===!0||C!==A)){const Ln=C===A&&lt.id===D;Mt.setState(lt,C,Ln)}let be=!1;lt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Gn.state.version||Xt.outputColorSpace!==qt||Z.isBatchedMesh&&Xt.batching===!1||!Z.isBatchedMesh&&Xt.batching===!0||Z.isBatchedMesh&&Xt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Xt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Xt.instancing===!1||!Z.isInstancedMesh&&Xt.instancing===!0||Z.isSkinnedMesh&&Xt.skinning===!1||!Z.isSkinnedMesh&&Xt.skinning===!0||Z.isInstancedMesh&&Xt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Xt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Xt.instancingMorph===!1&&Z.morphTexture!==null||Xt.envMap!==jt||lt.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Mt.numPlanes||Xt.numIntersection!==Mt.numIntersection)||Xt.vertexAlphas!==Qt||Xt.vertexTangents!==Wt||Xt.morphTargets!==zt||Xt.morphNormals!==de||Xt.morphColors!==Le||Xt.toneMapping!==Ve||Xt.morphTargetsCount!==Ce)&&(be=!0):(be=!0,Xt.__version=lt.version);let ln=Xt.currentProgram;be===!0&&(ln=$i(lt,W,Z));let Qn=!1,cn=!1,ui=!1;const re=ln.getUniforms(),Jn=Xt.uniforms;if(Rt.useProgram(ln.program)&&(Qn=!0,cn=!0,ui=!0),lt.id!==D&&(D=lt.id,cn=!0),Qn||A!==C){Rt.buffers.depth.getReversed()?(ut.copy(C.projectionMatrix),a1(ut),s1(ut),re.setValue(K,"projectionMatrix",ut)):re.setValue(K,"projectionMatrix",C.projectionMatrix),re.setValue(K,"viewMatrix",C.matrixWorldInverse);const Rn=re.map.cameraPosition;Rn!==void 0&&Rn.setValue(K,wt.setFromMatrixPosition(C.matrixWorld)),Jt.logarithmicDepthBuffer&&re.setValue(K,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&re.setValue(K,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,cn=!0,ui=!0)}if(Z.isSkinnedMesh){re.setOptional(K,Z,"bindMatrix"),re.setOptional(K,Z,"bindMatrixInverse");const Ln=Z.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),re.setValue(K,"boneTexture",Ln.boneTexture,U))}Z.isBatchedMesh&&(re.setOptional(K,Z,"batchingTexture"),re.setValue(K,"batchingTexture",Z._matricesTexture,U),re.setOptional(K,Z,"batchingIdTexture"),re.setValue(K,"batchingIdTexture",Z._indirectTexture,U),re.setOptional(K,Z,"batchingColorTexture"),Z._colorsTexture!==null&&re.setValue(K,"batchingColorTexture",Z._colorsTexture,U));const Ra=ot.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0)&&ee.update(Z,ot,ln),(cn||Xt.receiveShadow!==Z.receiveShadow)&&(Xt.receiveShadow=Z.receiveShadow,re.setValue(K,"receiveShadow",Z.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Jn.envMap.value=jt,Jn.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&W.environment!==null&&(Jn.envMapIntensity.value=W.environmentIntensity),cn&&(re.setValue(K,"toneMappingExposure",N.toneMappingExposure),Xt.needsLights&&Tl(Jn,ui),Et&&lt.fog===!0&&Nt.refreshFogUniforms(Jn,Et),Nt.refreshMaterialUniforms(Jn,lt,Q,rt,x.state.transmissionRenderTarget[C.id]),yu.upload(K,Ca(Xt),Jn,U)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(yu.upload(K,Ca(Xt),Jn,U),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&re.setValue(K,"center",Z.center),re.setValue(K,"modelViewMatrix",Z.modelViewMatrix),re.setValue(K,"normalMatrix",Z.normalMatrix),re.setValue(K,"modelMatrix",Z.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Ln=lt.uniformsGroups;for(let Rn=0,On=Ln.length;Rn<On;Rn++){const bl=Ln[Rn];H.update(bl,ln),H.bind(bl,ln)}}return ln}function Tl(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function _o(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,W,ot){Kt.get(C.texture).__webglTexture=W,Kt.get(C.depthTexture).__webglTexture=ot;const lt=Kt.get(C);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=ot===void 0,lt.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const ot=Kt.get(C);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ot=0){B=C,G=W,P=ot;let lt=!0,Z=null,Et=!1,Ot=!1;if(C){const jt=Kt.get(C);if(jt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(K.FRAMEBUFFER,null),lt=!1;else if(jt.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(jt.__hasExternalTextures)U.rebindTextures(C,Kt.get(C.texture).__webglTexture,Kt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const zt=C.depthTexture;if(jt.__boundDepthTexture!==zt){if(zt!==null&&Kt.has(zt)&&(C.width!==zt.image.width||C.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);const Wt=Kt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[W])?Z=Wt[W][ot]:Z=Wt[W],Et=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?Z=Kt.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?Z=Wt[ot]:Z=Wt,F.copy(C.viewport),et.copy(C.scissor),tt=C.scissorTest}else F.copy(Gt).multiplyScalar(Q).floor(),et.copy(ne).multiplyScalar(Q).floor(),tt=Ee;if(Rt.bindFramebuffer(K.FRAMEBUFFER,Z)&&lt&&Rt.drawBuffers(C,Z),Rt.viewport(F),Rt.scissor(et),Rt.setScissorTest(tt),Et){const jt=Kt.get(C.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+W,jt.__webglTexture,ot)}else if(Ot){const jt=Kt.get(C.texture),Qt=W||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,jt.__webglTexture,ot||0,Qt)}D=-1},this.readRenderTargetPixels=function(C,W,ot,lt,Z,Et,Ot){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){Rt.bindFramebuffer(K.FRAMEBUFFER,qt);try{const jt=C.texture,Qt=jt.format,Wt=jt.type;if(!Jt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-lt&&ot>=0&&ot<=C.height-Z&&K.readPixels(W,ot,lt,Z,oe.convert(Qt),oe.convert(Wt),Et)}finally{const jt=B!==null?Kt.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(K.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,W,ot,lt,Z,Et,Ot){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){const jt=C.texture,Qt=jt.format,Wt=jt.type;if(!Jt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-lt&&ot>=0&&ot<=C.height-Z){Rt.bindFramebuffer(K.FRAMEBUFFER,qt);const zt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,zt),K.bufferData(K.PIXEL_PACK_BUFFER,Et.byteLength,K.STREAM_READ),K.readPixels(W,ot,lt,Z,oe.convert(Qt),oe.convert(Wt),0);const de=B!==null?Kt.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(K.FRAMEBUFFER,de);const Le=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await i1(K,Le,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,zt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Et),K.deleteBuffer(zt),K.deleteSync(Le),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,ot=0){C.isTexture!==!0&&(dl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const lt=Math.pow(2,-ot),Z=Math.floor(C.image.width*lt),Et=Math.floor(C.image.height*lt),Ot=W!==null?W.x:0,qt=W!==null?W.y:0;U.setTexture2D(C,0),K.copyTexSubImage2D(K.TEXTURE_2D,ot,0,0,Ot,qt,Z,Et),Rt.unbindTexture()},this.copyTextureToTexture=function(C,W,ot=null,lt=null,Z=0){C.isTexture!==!0&&(dl("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,C=arguments[1],W=arguments[2],Z=arguments[3]||0,ot=null);let Et,Ot,qt,jt,Qt,Wt,zt,de,Le;const Ve=C.isCompressedTexture?C.mipmaps[Z]:C.image;ot!==null?(Et=ot.max.x-ot.min.x,Ot=ot.max.y-ot.min.y,qt=ot.isBox3?ot.max.z-ot.min.z:1,jt=ot.min.x,Qt=ot.min.y,Wt=ot.isBox3?ot.min.z:0):(Et=Ve.width,Ot=Ve.height,qt=Ve.depth||1,jt=0,Qt=0,Wt=0),lt!==null?(zt=lt.x,de=lt.y,Le=lt.z):(zt=0,de=0,Le=0);const Cn=oe.convert(W.format),Ce=oe.convert(W.type);let Xt;W.isData3DTexture?(U.setTexture3D(W,0),Xt=K.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),Xt=K.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),Xt=K.TEXTURE_2D),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,W.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,W.unpackAlignment);const Gn=K.getParameter(K.UNPACK_ROW_LENGTH),be=K.getParameter(K.UNPACK_IMAGE_HEIGHT),ln=K.getParameter(K.UNPACK_SKIP_PIXELS),Qn=K.getParameter(K.UNPACK_SKIP_ROWS),cn=K.getParameter(K.UNPACK_SKIP_IMAGES);K.pixelStorei(K.UNPACK_ROW_LENGTH,Ve.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ve.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,jt),K.pixelStorei(K.UNPACK_SKIP_ROWS,Qt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Wt);const ui=C.isDataArrayTexture||C.isData3DTexture,re=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Jn=Kt.get(C),Ra=Kt.get(W),Ln=Kt.get(Jn.__renderTarget),Rn=Kt.get(Ra.__renderTarget);Rt.bindFramebuffer(K.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Rt.bindFramebuffer(K.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let On=0;On<qt;On++)ui&&K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Kt.get(C).__webglTexture,Z,Wt+On),C.isDepthTexture?(re&&K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Kt.get(W).__webglTexture,Z,Le+On),K.blitFramebuffer(jt,Qt,Et,Ot,zt,de,Et,Ot,K.DEPTH_BUFFER_BIT,K.NEAREST)):re?K.copyTexSubImage3D(Xt,Z,zt,de,Le+On,jt,Qt,Et,Ot):K.copyTexSubImage2D(Xt,Z,zt,de,Le+On,jt,Qt,Et,Ot);Rt.bindFramebuffer(K.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else re?C.isDataTexture||C.isData3DTexture?K.texSubImage3D(Xt,Z,zt,de,Le,Et,Ot,qt,Cn,Ce,Ve.data):W.isCompressedArrayTexture?K.compressedTexSubImage3D(Xt,Z,zt,de,Le,Et,Ot,qt,Cn,Ve.data):K.texSubImage3D(Xt,Z,zt,de,Le,Et,Ot,qt,Cn,Ce,Ve):C.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Z,zt,de,Et,Ot,Cn,Ce,Ve.data):C.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Z,zt,de,Ve.width,Ve.height,Cn,Ve.data):K.texSubImage2D(K.TEXTURE_2D,Z,zt,de,Et,Ot,Cn,Ce,Ve);K.pixelStorei(K.UNPACK_ROW_LENGTH,Gn),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,be),K.pixelStorei(K.UNPACK_SKIP_PIXELS,ln),K.pixelStorei(K.UNPACK_SKIP_ROWS,Qn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,cn),Z===0&&W.generateMipmaps&&K.generateMipmap(Xt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ot=null,lt=null,Z=0){return C.isTexture!==!0&&(dl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,lt=arguments[1]||null,C=arguments[2],W=arguments[3],Z=arguments[4]||0),dl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,ot,lt,Z)},this.initRenderTarget=function(C){Kt.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Rt.unbindTexture()},this.resetState=function(){G=0,P=0,B=null,Rt.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorspace=Re._getDrawingBufferColorSpace(e),a.unpackColorSpace=Re._getUnpackColorSpace()}}class m3 extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class g3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=K_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=K_();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}}function K_(){return performance.now()}class Q_{constructor(e=1,a=0,r=0){return this.radius=e,this.phi=a,this.theta=r,this}set(e,a,r){return this.radius=e,this.phi=a,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,a,r){return this.radius=Math.sqrt(e*e+a*a+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Un(a/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class v3 extends Js{constructor(e,a=null){super(),this.object=e,this.domElement=a,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);const J_={type:"change"},Up={type:"start"},Hx={type:"end"},pu=new Ex,$_=new ls,_3=Math.cos(70*os.DEG2RAD),fn=new at,Yn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Od=1e-6;class x3 extends v3{constructor(e,a=null){super(e,a),this.state=He.NONE,this.enabled=!0,this.target=new at,this.cursor=new at,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:no.ROTATE,MIDDLE:no.DOLLY,RIGHT:no.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new at,this._lastQuaternion=new Qs,this._lastTargetPosition=new at,this._quat=new Qs().setFromUnitVectors(e.up,new at(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Q_,this._sphericalDelta=new Q_,this._scale=1,this._panOffset=new at,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new at,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=S3.bind(this),this._onPointerDown=y3.bind(this),this._onPointerUp=M3.bind(this),this._onContextMenu=w3.bind(this),this._onMouseWheel=b3.bind(this),this._onKeyDown=A3.bind(this),this._onTouchStart=C3.bind(this),this._onTouchMove=R3.bind(this),this._onMouseDown=E3.bind(this),this._onMouseMove=T3.bind(this),this._interceptControlDown=D3.bind(this),this._interceptControlUp=N3.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(J_),this.update(),this.state=He.NONE}update(e=null){const a=this.object.position;fn.copy(a).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,c=this.maxAzimuthAngle;isFinite(r)&&isFinite(c)&&(r<-Math.PI?r+=Yn:r>Math.PI&&(r-=Yn),c<-Math.PI?c+=Yn:c>Math.PI&&(c-=Yn),r<=c?this._spherical.theta=Math.max(r,Math.min(c,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+c)/2?Math.max(r,this._spherical.theta):Math.min(c,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=d!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),a.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const h=fn.length();d=this._clampDistance(h*this._scale);const p=h-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),f=!!p}else if(this.object.isOrthographicCamera){const h=new at(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=p!==this.object.zoom;const v=new at(this._mouse.x,this._mouse.y,0);v.unproject(this.object),this.object.position.sub(v).add(h),this.object.updateMatrixWorld(),d=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(pu.origin.copy(this.object.position),pu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pu.direction))<_3?this.object.lookAt(this.target):($_.setFromNormalAndCoplanarPoint(this.object.up,this.target),pu.intersectPlane($_,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Od||this._lastTargetPosition.distanceToSquared(this.target)>Od?(this.dispatchEvent(J_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yn/60*this.autoRotateSpeed*e:Yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const a=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*a)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,a){fn.setFromMatrixColumn(a,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,a){this.screenSpacePanning===!0?fn.setFromMatrixColumn(a,1):(fn.setFromMatrixColumn(a,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,a){const r=this.domElement;if(this.object.isPerspectiveCamera){const c=this.object.position;fn.copy(c).sub(this.target);let f=fn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*a*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(a*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,a){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),c=e-r.left,f=a-r.top,d=r.width,h=r.height;this._mouse.x=c/d*2-1,this._mouse.y=-(f/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const a=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/a.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/a.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let a=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),a=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),a=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),a=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),a=!0;break}a&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._rotateStart.set(r,c)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._panStart.set(r,c)}}_handleTouchStartDolly(e){const a=this._getSecondPointerPosition(e),r=e.pageX-a.x,c=e.pageY-a.y,f=Math.sqrt(r*r+c*c);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),c=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(c,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const a=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/a.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/a.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._panEnd.set(r,c)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const a=this._getSecondPointerPosition(e),r=e.pageX-a.x,c=e.pageY-a.y,f=Math.sqrt(r*r+c*c);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+a.x)*.5,h=(e.pageY+a.y)*.5;this._updateZoomParameters(d,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let a=0;a<this._pointers.length;a++)if(this._pointers[a]==e.pointerId){this._pointers.splice(a,1);return}}_isTrackingPointer(e){for(let a=0;a<this._pointers.length;a++)if(this._pointers[a]==e.pointerId)return!0;return!1}_trackPointer(e){let a=this._pointerPositions[e.pointerId];a===void 0&&(a=new me,this._pointerPositions[e.pointerId]=a),a.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const a=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[a]}_customWheelEvent(e){const a=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(a){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function y3(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function S3(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function M3(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hx),this.state=He.NONE;break;case 1:const e=this._pointers[0],a=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:a.x,pageY:a.y});break}}function E3(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case no.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=He.DOLLY;break;case no.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}break;case no.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Up)}function T3(o){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function b3(o){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(o.preventDefault(),this.dispatchEvent(Up),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Hx))}function A3(o){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(o)}function C3(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case to.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=He.TOUCH_ROTATE;break;case to.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case to.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=He.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Up)}function R3(o){switch(this._trackPointer(o),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=He.NONE}}function w3(o){this.enabled!==!1&&o.preventDefault()}function D3(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function N3(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U3(){const o=new Ox(-1,1,1,-1,0,1),e=new m3,a={uResolution:{value:new me(window.innerWidth,window.innerHeight)},uTime:{value:0},uSceneId:{value:0},uIsBaseline:{value:0},uCamPos:{value:new at},uCamTarget:{value:new at},uFov:{value:45},uSunScale:{value:.78},uWaveStrength:{value:.64},uMistDensity:{value:.88},uClarity:{value:.94}},r=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,c=`
    precision highp float;

    uniform vec2 uResolution;
    uniform float uTime;
    uniform int uSceneId;
    uniform int uIsBaseline;
    uniform vec3 uCamPos;
    uniform vec3 uCamTarget;
    uniform float uFov;
    uniform float uSunScale;
    uniform float uWaveStrength;
    uniform float uMistDensity;
    uniform float uClarity;

    varying vec2 vUv;

    #define PI 3.14159265359

    // ==========================================================================
    // HIGH-SPEED ANALYTICAL NOISE & FRACTAL BROWNIAN MOTION
    // ==========================================================================
    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    vec2 hash22(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.xx + p3.yz) * p3.zy);
    }

    float noise2D(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
      float a = hash12(i);
      float b = hash12(i + vec2(1.0, 0.0));
      float c = hash12(i + vec2(0.0, 1.0));
      float d = hash12(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    const mat2 ROT2 = mat2(0.80, 0.60, -0.60, 0.80);

    float fbm4(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 4; i++) {
        v += a * noise2D(p);
        p = ROT2 * p * 2.03;
        a *= 0.5;
      }
      return v;
    }

    float fbm6(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 6; i++) {
        v += a * noise2D(p);
        p = ROT2 * p * 2.04;
        a *= 0.5;
      }
      return v;
    }

    float ridgedFbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        float n = 1.0 - abs(noise2D(p) * 2.0 - 1.0);
        v += a * n * n;
        p = ROT2 * p * 2.08;
        a *= 0.5;
      }
      return v;
    }

    // Optical Voronoi-style water caustics
    float causticPattern(vec2 p, float t) {
      vec2 uv = p * 1.45;
      float c1 = sin(uv.x * 3.1 + t * 1.6 + cos(uv.y * 2.7 - t * 1.2));
      float c2 = cos(uv.y * 3.5 - t * 1.4 + sin(uv.x * 3.0 + t * 1.8));
      float c3 = sin((uv.x + uv.y) * 2.6 - t * 1.9);
      float v = abs(c1 + c2 + c3 * 0.5);
      return pow(clamp(1.0 - v * 0.42, 0.0, 1.0), 3.4);
    }

    // ACES Filmic Tone Mapping
    vec3 acesToneMap(vec3 x) {
      const float a = 2.51;
      const float b = 0.03;
      const float c = 2.43;
      const float d = 0.59;
      const float e = 0.14;
      return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }

    // ==========================================================================
    // PHYSICAL ATMOSPHERIC SKY, SOLAR DISK & VOLUMETRIC CLOUDS
    // ==========================================================================
    vec3 getSunDir(int sceneId) {
      float elevScale = 0.65 + uSunScale * 0.50;
      if (sceneId == 0) {
        // Scene 1: Golden sunset low on left of the island
        return normalize(vec3(-0.27, 0.088 * elevScale, -0.95));
      } else if (sceneId == 1) {
        // Scene 2: Warm coastal sunset ahead-right
        return normalize(vec3(-0.18, 0.12 * elevScale, -0.97));
      } else if (sceneId == 2) {
        // Scene 3: Slanting golden afternoon light from upper-right mountain ridge
        return normalize(vec3(0.58, 0.26 * elevScale, -0.76));
      } else {
        // Scene 4: Golden hour sun in upper-right over Crescent Bay
        return normalize(vec3(0.52, 0.19 * elevScale, -0.83));
      }
    }

    vec3 renderSky(vec3 rd, vec3 sunDir, int sceneId, bool isBaseline) {
      float h = clamp(rd.y, 0.0, 1.0);
      vec3 zenithCol = vec3(0.20, 0.34, 0.48);
      vec3 horizonCol = vec3(0.92, 0.67, 0.46);

      if (sceneId == 0) {
        zenithCol = isBaseline ? vec3(0.38, 0.56, 0.72) : vec3(0.18, 0.30, 0.44);
        horizonCol = isBaseline ? vec3(0.84, 0.72, 0.62) : vec3(0.95, 0.66, 0.42);
      } else if (sceneId == 1) {
        zenithCol = isBaseline ? vec3(0.45, 0.60, 0.74) : vec3(0.24, 0.38, 0.54);
        horizonCol = isBaseline ? vec3(0.86, 0.76, 0.66) : vec3(0.94, 0.70, 0.48);
      } else if (sceneId == 2) {
        zenithCol = vec3(0.32, 0.46, 0.56);
        horizonCol = vec3(0.88, 0.80, 0.66);
      } else {
        zenithCol = vec3(0.28, 0.42, 0.56);
        horizonCol = vec3(0.94, 0.74, 0.52);
      }

      vec3 sky = mix(horizonCol, zenithCol, pow(h, 0.52));

      float sunDot = max(dot(rd, sunDir), 0.0);
      // Warm Mie scattering halo
      sky += vec3(1.0, 0.65, 0.30) * pow(sunDot, 5.0) * 0.48 * (1.0 - h * 0.6);
      sky += vec3(1.0, 0.84, 0.55) * pow(sunDot, 36.0) * 0.65;
      // Intense solar disk
      float sunDisk = smoothstep(0.9985, 0.9998, sunDot);
      sky += vec3(1.8, 1.5, 1.1) * sunDisk;

      // Volumetric sunset cloud bands in Ultra mode
      if (!isBaseline && rd.y > 0.008 && rd.y < 0.42) {
        vec2 cUv = rd.xz / (rd.y + 0.14) * 0.55 + vec2(uTime * 0.008, 0.0);
        float c1 = fbm4(cUv);
        float c2 = fbm4(cUv * 2.2 - vec2(uTime * 0.012, 0.0));
        float cloudAlpha = smoothstep(0.45, 0.76, c1 * 0.68 + c2 * 0.32) *
                           smoothstep(0.01, 0.06, rd.y) *
                           smoothstep(0.40, 0.10, rd.y);
        vec3 cloudDark = mix(zenithCol * 0.72, horizonCol * 0.78, 0.5);
        vec3 cloudLit = vec3(1.0, 0.78, 0.52) * (0.75 + pow(sunDot, 3.0) * 0.95);
        vec3 cloudCol = mix(cloudDark, cloudLit, smoothstep(0.38, 0.75, c2));
        sky = mix(sky, cloudCol, cloudAlpha * 0.68);
      }

      return sky;
    }

    // ==========================================================================
    // PROCEDURAL 3D COCONUT PALM TREE EVALUATOR (CURVED TRUNK + PINNATE FRONDS)
    // ==========================================================================
    // Returns vec4(hitAlpha, shadeFactor, isTrunk, hitT)
    vec4 evalPalmTree(
      vec3 ro,
      vec3 rd,
      vec3 basePos,
      float height,
      vec2 lean,
      float seed,
      vec3 sunDir,
      bool isBaseline,
      float maxT
    ) {
      vec3 crownCenter = basePos + vec3(lean.x, height, lean.y);
      float crownRadius = isBaseline ? 1.55 : 2.35;

      // Bounding sphere test around entire palm tree
      vec3 treeMid = mix(basePos, crownCenter, 0.55);
      float boundR = height * 0.65 + crownRadius;
      vec3 oc = ro - treeMid;
      float b = dot(oc, rd);
      float c = dot(oc, oc) - boundR * boundR;
      if (b > 0.0 && c > 0.0) return vec4(0.0);
      float disc = b * b - c;
      if (disc < 0.0) return vec4(0.0);

      float bestAlpha = 0.0;
      float bestShade = 0.0;
      float bestIsTrunk = 0.0;
      float bestT = maxT;

      // 1. Curved Trunk Intersection (Analytical Ray-Curve Closest Approach)
      float tApprox = clamp(dot(treeMid - ro, rd), 0.5, maxT);
      for (int stepIdx = 0; stepIdx < 3; stepIdx++) {
        vec3 p = ro + rd * tApprox;
        float hNorm = clamp((p.y - basePos.y) / height, 0.0, 1.0);
        float curveF = isBaseline ? hNorm : pow(hNorm, 1.45);
        vec3 spine = basePos + vec3(lean.x * curveF, hNorm * height, lean.y * curveF);
        tApprox = clamp(dot(spine - ro, rd), 0.5, maxT);
      }

      if (tApprox < maxT) {
        vec3 p = ro + rd * tApprox;
        float hNorm = (p.y - basePos.y) / height;
        if (hNorm >= -0.02 && hNorm <= 1.02) {
          float hc = clamp(hNorm, 0.0, 1.0);
          float curveF = isBaseline ? hc : pow(hc, 1.45);
          vec3 spine = basePos + vec3(lean.x * curveF, hc * height, lean.y * curveF);
          float trunkR = mix(0.18, 0.075, hc) * (1.0 + (hc < 0.15 ? (0.15 - hc) * 2.2 : 0.0));
          if (!isBaseline) {
            trunkR *= 1.0 + 0.04 * sin(hc * 55.0);
          }
          float distToSpine = length(p.xz - spine.xz);
          if (distToSpine < trunkR) {
            bestAlpha = smoothstep(trunkR, trunkR * 0.65, distToSpine);
            vec3 trunkN = normalize(vec3(p.x - spine.x, 0.1, p.z - spine.z));
            float ringTex = isBaseline ? 1.0 : (0.75 + 0.25 * sin(hc * 65.0));
            bestShade = clamp(dot(trunkN, sunDir) * 0.5 + 0.5, 0.1, 1.0) * ringTex;
            bestIsTrunk = 1.0;
            bestT = tApprox;
          }
        }
      }

      // 2. Arching Pinnate Frond Crown Intersection
      vec3 ocCrown = ro - crownCenter;
      float bC = dot(ocCrown, rd);
      float cC = dot(ocCrown, ocCrown) - crownRadius * crownRadius;
      float discC = bC * bC - cC;
      if (discC > 0.0) {
        float sqrtD = sqrt(discC);
        float t0 = max(0.2, -bC - sqrtD);
        float t1 = min(bestT, -bC + sqrtD);
        if (t1 > t0) {
          // Sample 5 slices through the crown volume to capture multi-layered arching fronds
          for (int s = 0; s < 5; s++) {
            float frac = (float(s) + 0.5) / 5.0;
            float tS = mix(t0, t1, frac);
            vec3 q = ro + rd * tS - crownCenter;

            // Gentle tropical breeze sway on crown
            float sway = sin(uTime * 2.1 + seed * 3.7 + q.x * 0.8) * 0.09 * (0.4 + uWaveStrength * 0.8);
            q.y += sway * length(q.xz) * 0.35;

            float rXZ = length(q.xz);
            float r3D = length(q);
            if (r3D < crownRadius && rXZ > 0.04) {
              float angle = atan(q.z, q.x) + seed * 2.1;
              float numFronds = isBaseline ? 7.0 : 13.0;

              // Two overlapping spiral whorls of fronds
              for (int w = 0; w < 2; w++) {
                float wOffset = float(w) * 1.9 + seed;
                float whorlPitch = w == 0 ? 0.28 : -0.08;
                float reach = rXZ / crownRadius;

                // Parabolic gravity arch of the frond rachis
                float expectedY = (whorlPitch + sin(reach * PI * 0.72) * 0.52 - pow(reach, 1.85) * 1.15) * crownRadius * 0.62;
                float dy = abs(q.y - expectedY);

                // Angular distance to nearest frond rachis
                float sector = (angle + wOffset + reach * 0.28) * (numFronds / (2.0 * PI));
                float frondPhase = abs(fract(sector) - 0.5) * 2.0; // 0 along rachis -> 1 between fronds

                // Envelope of frond width along its length
                float frondWidthEnv = sin(pow(clamp(reach, 0.0, 1.0), 0.75) * PI);
                float thicknessY = isBaseline ? 0.22 : (0.14 + reach * 0.16);

                if (dy < thicknessY && frondPhase < frondWidthEnv * 0.92) {
                  float leafletMask = 1.0;
                  if (!isBaseline) {
                    // Individual feathery pinnate leaflets combed along each frond!
                    float comb = sin(reach * 48.0 - frondPhase * 22.0 + float(w) * 3.1);
                    leafletMask = smoothstep(-0.35, 0.45, comb) * (1.0 - pow(frondPhase / max(0.01, frondWidthEnv), 1.6));
                    // Central rachis stem is always solid
                    leafletMask = max(leafletMask, smoothstep(0.14, 0.03, frondPhase));
                  } else {
                    leafletMask = smoothstep(frondWidthEnv * 0.7, 0.0, frondPhase);
                  }

                  float sliceAlpha = leafletMask * smoothstep(thicknessY, thicknessY * 0.2, dy) * smoothstep(1.0, 0.78, reach);
                  if (sliceAlpha > 0.22) {
                    float sunLit = clamp(dot(normalize(q + vec3(0.0, 0.4, 0.0)), sunDir) * 0.5 + 0.5, 0.08, 1.0);
                    bestAlpha = max(bestAlpha, sliceAlpha);
                    bestShade = mix(bestShade, sunLit, sliceAlpha);
                    bestIsTrunk = 0.0;
                    bestT = min(bestT, tS);
                    if (bestAlpha > 0.85) break;
                  }
                }
              }
            }
          }
        }
      }

      return vec4(bestAlpha, bestShade, bestIsTrunk, bestT);
    }

    // ==========================================================================
    // OCEAN WAVE NORMAL & CORAL REEF WATER OPTICS
    // ==========================================================================
    vec3 getOceanNormal(vec2 p, float t, bool isBaseline) {
      if (isBaseline) {
        float dx = cos(p.x * 1.8 + t * 1.6) * 0.08;
        float dz = sin(p.y * 1.8 - t * 1.4) * 0.08;
        return normalize(vec3(-dx, 1.0, -dz));
      }
      float amp = 0.05 + uWaveStrength * 0.075;
      vec2 d = vec2(0.0);
      // Multi-directional Gerstner + FBM capillary facets
      d.x += cos(p.x * 0.65 + p.y * 0.35 + t * 1.8) * 0.65;
      d.y += cos(p.x * 0.65 + p.y * 0.35 + t * 1.8) * 0.35;

      d.x += -sin(p.x * 1.4 - p.y * 1.1 + t * 2.4) * 0.45;
      d.y += cos(p.x * 1.4 - p.y * 1.1 + t * 2.4) * 0.45;

      d.x += cos(p.x * 3.8 + p.y * 2.9 - t * 3.5) * 0.28;
      d.y += sin(p.x * 3.8 + p.y * 2.9 - t * 3.5) * 0.28;

      // High-frequency micro-ripples for realistic anisotropic sun sparkle
      float n1 = noise2D(p * 4.5 + vec2(t * 1.1, -t * 0.9)) - 0.5;
      float n2 = noise2D(p * 11.2 - vec2(t * 1.7, t * 1.4)) - 0.5;
      d += vec2(n1 * 0.55 + n2 * 0.35, -n1 * 0.45 + n2 * 0.38);

      return normalize(vec3(-d.x * amp * 2.4, 1.0, -d.y * amp * 2.4));
    }

    // ==========================================================================
    // SCENE 01: SUNSET ATOLL (00:00 - 00:05)
    // ==========================================================================
    float getAtollSandHeight(vec2 p, bool isBaseline) {
      // Elongated coral sandbar island centered at (2.2, -9.0)
      vec2 q = (p - vec2(2.4, -9.0)) / vec2(12.2, 4.4);
      // Left tip tapers into a low sandy spit
      float r2 = dot(q, q);
      if (r2 > 1.8) return -2.5;
      float spitProfile = smoothstep(-1.1, 0.2, q.x);
      float baseH = (1.0 - r2) * (0.45 + spitProfile * 0.65);
      if (!isBaseline) {
        baseH += (fbm4(p * 0.45) - 0.5) * 0.25;
      }
      return baseH;
    }

    float getAtollShrubHeight(vec2 p, bool isBaseline) {
      if (isBaseline) return -5.0;
      vec2 q = (p - vec2(3.4, -9.0)) / vec2(9.8, 3.3);
      float r2 = dot(q, q);
      if (r2 > 1.05) return -5.0;
      float dome = sqrt(max(0.0, 1.0 - r2)) * 1.85;
      // Billowy tropical shrub clusters
      float bushFbm = fbm6(p * 1.35 + vec2(2.1, 4.7));
      return 0.35 + dome * (0.55 + bushFbm * 0.85);
    }

    vec3 renderScene1Atoll(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline) {
      vec3 skyCol = renderSky(rd, sunDir, 0, isBaseline);
      vec3 finalCol = skyCol;
      float maxT = 180.0;

      // 1. Raymarch Island Sandbar & Lush Tropical Shrub Undergrowth
      float hitT = maxT;
      int hitMat = 0; // 0=sky, 1=sand, 2=shrub
      vec3 hitPos = vec3(0.0);

      // Bounding slab for island (z in [-16, -2], y in [-0.2, 3.8])
      float tStart = max(0.5, (-2.0 - ro.z) / min(-0.001, rd.z));
      float tEnd = min(80.0, (-16.5 - ro.z) / min(-0.001, rd.z));
      if (rd.z < 0.0 && tEnd > tStart) {
        float t = tStart;
        for (int i = 0; i < 48; i++) {
          vec3 p = ro + rd * t;
          if (p.y < -0.05 || t > tEnd) break;
          float hSand = getAtollSandHeight(p.xz, isBaseline);
          float hShrub = getAtollShrubHeight(p.xz, isBaseline);
          float hMax = max(hSand, hShrub);
          float diff = p.y - hMax;
          if (diff < 0.03) {
            hitT = t;
            hitPos = p;
            hitMat = (hShrub > hSand) ? 2 : 1;
            break;
          }
          t += max(0.14, diff * 0.55);
        }
      }

      if (hitMat == 1) {
        // Coral Sand Beach Spit
        vec2 eps = vec2(0.08, 0.0);
        vec3 N = normalize(vec3(
          getAtollSandHeight(hitPos.xz - eps.xy, isBaseline) - getAtollSandHeight(hitPos.xz + eps.xy, isBaseline),
          0.16,
          getAtollSandHeight(hitPos.xz - eps.yx, isBaseline) - getAtollSandHeight(hitPos.xz + eps.yx, isBaseline)
        ));
        float wetness = smoothstep(0.35, 0.02, hitPos.y);
        vec3 sandAlbedo = mix(vec3(0.84, 0.73, 0.58), vec3(0.45, 0.38, 0.30), wetness);
        float diff = max(dot(N, sunDir), 0.0);
        finalCol = sandAlbedo * (vec3(0.26, 0.30, 0.36) + vec3(1.1, 0.78, 0.45) * diff);
      } else if (hitMat == 2) {
        // Dense Tropical Undergrowth Foliage with Golden Rim Scattering
        vec2 eps = vec2(0.06, 0.0);
        vec3 N = normalize(vec3(
          getAtollShrubHeight(hitPos.xz - eps.xy, false) - getAtollShrubHeight(hitPos.xz + eps.xy, false),
          0.12,
          getAtollShrubHeight(hitPos.xz - eps.yx, false) - getAtollShrubHeight(hitPos.xz + eps.yx, false)
        ));
        float leafDetail = fbm4(hitPos.xz * 4.5);
        vec3 leafDark = vec3(0.04, 0.09, 0.04);
        vec3 leafLit = vec3(0.22, 0.38, 0.12);
        float sunFace = clamp(dot(N, sunDir) * 0.5 + 0.5, 0.0, 1.0);
        float rim = pow(clamp(1.0 - max(dot(-rd, N), 0.0), 0.0, 1.0), 2.5) * pow(max(dot(rd, sunDir), 0.0), 2.0);
        finalCol = mix(leafDark, leafLit, sunFace * leafDetail) + vec3(0.85, 0.55, 0.18) * rim * 0.75;
      }

      // 2. Evaluate 22 Curved Coconut Palms across the Atoll Island
      int palmCount = isBaseline ? 9 : 22;
      for (int i = 0; i < 22; i++) {
        if (i >= palmCount) break;
        float fi = float(i);
        float u = fi / float(palmCount - 1);
        float px = mix(-6.8, 12.2, u) + (isBaseline ? 0.0 : sin(fi * 4.7) * 0.55);
        float pz = -8.8 + cos(fi * 3.3) * 1.9;
        float env = sin(pow(u, 0.85) * PI);
        float ph = (isBaseline ? 3.2 : 3.6) + env * (isBaseline ? 1.4 : 3.1) + mod(fi, 3.0) * 0.45;
        vec2 lean = isBaseline
          ? vec2(0.0)
          : vec2((u - 0.38) * 1.9 + sin(fi * 2.9) * 0.55, cos(fi * 4.1) * 0.65);
        vec3 baseP = vec3(px, max(0.15, getAtollSandHeight(vec2(px, pz), isBaseline)), pz);

        vec4 pHit = evalPalmTree(ro, rd, baseP, ph, lean, fi * 1.7 + 1.0, sunDir, isBaseline, hitT);
        if (pHit.x > 0.05 && pHit.w < hitT) {
          float sunBack = pow(max(dot(rd, sunDir), 0.0), 3.0);
          vec3 trunkCol = isBaseline
            ? vec3(0.55, 0.38, 0.24) * (0.4 + pHit.y * 0.6)
            : mix(vec3(0.05, 0.04, 0.03), vec3(0.28, 0.20, 0.13), pHit.y);
          vec3 frondCol = isBaseline
            ? vec3(0.32, 0.48, 0.20) * (0.4 + pHit.y * 0.6)
            : mix(vec3(0.03, 0.07, 0.02), vec3(0.24, 0.38, 0.11), pHit.y) +
              vec3(0.95, 0.64, 0.20) * sunBack * (1.0 - pHit.y * 0.4) * 0.65;
          vec3 treeCol = mix(frondCol, trunkCol, pHit.z);
          finalCol = mix(finalCol, treeCol, pHit.x);
          if (pHit.x > 0.75) hitT = pHit.w;
        }
      }

      // 3. Ocean Plane Intersection (y = 0.0) with Coral Reef Caustics & Island Reflection
      if (rd.y < -0.001) {
        float tWater = -ro.y / rd.y;
        if (tWater > 0.1 && tWater < hitT) {
          vec3 wPos = ro + rd * tWater;
          vec3 N = getOceanNormal(wPos.xz, uTime, isBaseline);
          vec3 viewDir = -rd;

          if (isBaseline) {
            float fres = pow(1.0 - max(dot(viewDir, N), 0.0), 3.0);
            finalCol = mix(vec3(0.14, 0.52, 0.66), skyCol, fres * 0.45);
          } else {
            // Shallow reef distance & coral patch reefs (matching dark reef patches on right of Scene 1)
            float islandGroundH = getAtollSandHeight(wPos.xz, false);
            float waterDepth = clamp(0.65 - islandGroundH, 0.05, 4.0);
            float shallowMask = smoothstep(3.8, 0.2, waterDepth);

            float reefFbm = fbm6(wPos.xz * 0.28 + vec2(1.4, 2.8));
            float rightBias = smoothstep(-3.0, 5.0, wPos.x);
            float coralPatch = smoothstep(0.43, 0.63, reefFbm) * mix(0.45, 1.0, rightBias);

            float caustics = causticPattern(wPos.xz * 0.9 + N.xz * 0.4, uTime);
            vec3 sandBed = vec3(0.18, 0.72, 0.70) + vec3(0.95, 0.85, 0.60) * caustics * 0.42;
            vec3 darkCoral = vec3(0.02, 0.08, 0.13) + vec3(0.08, 0.24, 0.28) * caustics * 0.20;
            vec3 reefBed = mix(sandBed, darkCoral, coralPatch * 0.88);

            vec3 deepSea = vec3(0.03, 0.16, 0.26);
            vec3 midSea = vec3(0.07, 0.42, 0.52);
            vec3 seaBody = mix(deepSea, midSea, smoothstep(0.0, 0.6, shallowMask));
            seaBody = mix(seaBody, reefBed, shallowMask * 0.82 * uClarity);

            // Reflection of sky AND dark island silhouette in the water ripples
            vec3 reflDir = reflect(rd, N);
            reflDir.y = max(0.01, reflDir.y);
            vec3 reflCol = renderSky(reflDir, sunDir, 0, false);

            // Check if reflected ray points toward the dark backlit island & palms
            if (wPos.z > -8.5 && reflDir.z < -0.1) {
              float tIsl = (-9.0 - wPos.z) / reflDir.z;
              vec3 rIsl = wPos + reflDir * tIsl;
              float rMask = smoothstep(13.0, 7.0, abs(rIsl.x - 2.8)) * smoothstep(7.5, 1.5, rIsl.y);
              reflCol = mix(reflCol, vec3(0.04, 0.07, 0.04), rMask * 0.78);
            }

            float fresnel = pow(1.0 - max(dot(viewDir, N), 0.0), 4.0);
            vec3 col = mix(seaBody, reflCol, clamp(0.18 + fresnel * 0.76, 0.0, 0.95));

            // Blazing golden solar glitter path across the water facets
            vec3 halfV = normalize(sunDir + viewDir);
            float NdotH = max(dot(N, halfV), 0.0);
            float glint = pow(NdotH, 280.0) * 4.2 + pow(NdotH, 32.0) * 0.65;
            col += vec3(1.0, 0.85, 0.55) * glint;

            // Gentle white shoreline foam lapping the left sandy spit
            float shoreFoam = smoothstep(0.28, 0.02, waterDepth) *
                              smoothstep(0.45, 0.85, sin(waterDepth * 18.0 - uTime * 2.5) * 0.5 + 0.5);
            col = mix(col, vec3(0.96, 0.95, 0.92), shoreFoam * 0.65);

            finalCol = col;
          }
        }
      }

      // Crepuscular golden sun flare
      float sunGlow = pow(max(dot(rd, sunDir), 0.0), 8.0);
      finalCol += vec3(1.0, 0.65, 0.28) * sunGlow * (isBaseline ? 0.05 : 0.18);

      return finalCol;
    }

    // ==========================================================================
    // SCENE 02: CLIFFSIDE LUXURY VILLAS & WET SHORELINE (00:05 - 00:10)
    // ==========================================================================
    float sdBox(vec3 p, vec3 b) {
      vec3 q = abs(p) - b;
      return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
    }

    // Evaluates the 3 stepped cantilevered luxury villas & lower terrace
    // Returns vec2(dist, matId): matId 3=travertine, 4=teak wood, 5=glass/interior
    vec2 mapVillas(vec3 p) {
      vec2 res = vec2(1e5, 0.0);

      // Foreground-left lower limestone beachfront terrace (z in [3.5, 11.5], x in [-8.5, -2.5])
      float dTerrace = sdBox(p - vec3(-5.5, 0.95, 7.5), vec3(3.2, 0.95, 3.8));
      if (dTerrace < res.x) res = vec2(dTerrace, 3.0);

      // 3 Stepped Two-Story Modern Villas along the coastal bluff
      for (int v = 0; v < 3; v++) {
        float fv = float(v);
        vec3 vc = vec3(-8.2 - fv * 1.1, 2.2 + fv * 0.45, 4.2 - fv * 10.5);
        vec3 q = p - vc;

        // Ground & Upper Floor Travertine Slabs & Piers
        float slab1 = sdBox(q - vec3(0.2, 0.0, 0.0), vec3(4.2, 0.22, 3.8));
        float slab2 = sdBox(q - vec3(0.4, 2.35, 0.0), vec3(4.5, 0.24, 4.0));
        float pier = sdBox(q - vec3(-2.6, 2.2, 0.0), vec3(0.8, 2.2, 3.6));
        float dStone = min(min(slab1, slab2), pier);
        if (dStone < res.x) res = vec2(dStone, 3.0);

        // Warm Fluted Teak Roof Overhangs
        float teakMid = sdBox(q - vec3(0.45, 2.62, 0.0), vec3(4.6, 0.22, 4.1));
        float teakTop = sdBox(q - vec3(0.3, 4.85, 0.0), vec3(4.8, 0.32, 4.3));
        float dTeak = min(teakMid, teakTop);
        if (dTeak < res.x) res = vec2(dTeak, 4.0);

        // Floor-to-ceiling Architectural Glass Rooms
        float glass1 = sdBox(q - vec3(0.2, 1.2, 0.0), vec3(3.4, 1.1, 3.2));
        float glass2 = sdBox(q - vec3(-0.1, 3.6, 0.0), vec3(3.2, 1.05, 3.0));
        float dGlass = min(glass1, glass2);
        if (dGlass < res.x) res = vec2(dGlass, 5.0);
      }

      return res;
    }

    float mapCliffRock(vec3 p, bool isBaseline) {
      // Coastal headland bluff on the left (x < -3.2, z > -26.0)
      float endCap = smoothstep(-28.0, -21.0, p.z);
      if (endCap <= 0.001) return 1e5;

      if (isBaseline) {
        // Voxelized cubic rock blocks matching "1st Attempt" in the video!
        vec3 vp = floor(p * 0.85) / 0.85 + 0.58;
        float wallX = -4.2 - max(0.0, (-12.0 - vp.z) * 0.15) + sin(vp.z * 0.3) * 0.8;
        float maxH = (2.8 + smoothstep(-2.0, -8.0, vp.x) * 2.5) * endCap;
        if (p.y > maxH + 0.8 || p.x > wallX + 1.8) return max(p.x - wallX, p.y - maxH);
        return max(p.x - wallX, p.y - maxH);
      } else {
        float f = fbm6(p.yz * 0.28 + vec2(p.x * 0.18, 1.3));
        float strata = sin(p.y * 4.5 + f * 3.0) * 0.18;
        float wallX = -3.8 - max(0.0, (-10.0 - p.z) * 0.14) + (f - 0.5) * 2.4 + strata;
        float maxH = (2.6 + smoothstep(-2.5, -9.5, p.x) * 3.2) * endCap + f * 0.8;
        return max(p.x - wallX, p.y - maxH);
      }
    }

    vec3 shadeCliffAndVillas(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline, out float hitDist) {
      vec3 skyCol = renderSky(rd, sunDir, 1, isBaseline);
      hitDist = 180.0;

      // Trace Cliff & Villas on the left side
      float t = 1.0;
      int matId = 0;
      vec3 hitPos = vec3(0.0);

      for (int i = 0; i < 64; i++) {
        vec3 p = ro + rd * t;
        if (t > 95.0 || p.y > 16.0 || p.y < -0.5) break;

        vec2 dVilla = mapVillas(p);
        float dCliff = mapCliffRock(p, isBaseline);
        float dMin = min(dVilla.x, dCliff);

        if (dMin < 0.035) {
          hitDist = t;
          hitPos = p;
          matId = (dVilla.x < dCliff) ? int(dVilla.y) : 2;
          break;
        }
        t += max(0.12, dMin * 0.55);
      }

      vec3 col = skyCol;
      if (matId > 0) {
        // Numerical normal
        vec2 e = vec2(0.04, 0.0);
        vec3 N;
        if (matId == 2) {
          N = normalize(vec3(
            mapCliffRock(hitPos + e.xyy, isBaseline) - mapCliffRock(hitPos - e.xyy, isBaseline),
            mapCliffRock(hitPos + e.yxy, isBaseline) - mapCliffRock(hitPos - e.yxy, isBaseline),
            mapCliffRock(hitPos + e.yyx, isBaseline) - mapCliffRock(hitPos - e.yyx, isBaseline)
          ));
        } else {
          N = normalize(vec3(
            mapVillas(hitPos + e.xyy).x - mapVillas(hitPos - e.xyy).x,
            mapVillas(hitPos + e.yxy).x - mapVillas(hitPos - e.yxy).x,
            mapVillas(hitPos + e.yyx).x - mapVillas(hitPos - e.yyx).x
          ));
        }

        float diff = max(dot(N, sunDir), 0.0);
        vec3 sunLightCol = vec3(1.15, 0.82, 0.52);
        vec3 ambCol = vec3(0.28, 0.34, 0.42);

        if (matId == 2) {
          if (isBaseline) {
            // Blocky beige voxel rock
            col = vec3(0.84, 0.72, 0.58) * (ambCol + sunLightCol * diff);
          } else {
            // Weathered dark coastal basalt + cascading lush tropical cliff shrubs
            float rockTex = fbm6(hitPos.yz * 1.8);
            float foliageMask = smoothstep(0.25, 0.68, N.y + (rockTex - 0.45) * 0.75) *
                                smoothstep(0.4, 1.4, hitPos.y);
            vec3 rockAlb = mix(vec3(0.16, 0.13, 0.11), vec3(0.36, 0.30, 0.24), rockTex);
            vec3 shrubAlb = mix(vec3(0.08, 0.18, 0.06), vec3(0.26, 0.42, 0.14), rockTex);
            vec3 alb = mix(rockAlb, shrubAlb, foliageMask);
            col = alb * (ambCol + sunLightCol * diff);
          }
        } else if (matId == 3) {
          // Cream architectural travertine limestone
          vec3 alb = vec3(0.88, 0.81, 0.71);
          col = alb * (ambCol + sunLightCol * diff);
        } else if (matId == 4) {
          // Warm fluted teak timber overhangs
          float plank = isBaseline ? 1.0 : (0.85 + 0.15 * sin(hitPos.z * 14.0));
          vec3 alb = (isBaseline ? vec3(0.76, 0.62, 0.46) : vec3(0.62, 0.36, 0.18)) * plank;
          col = alb * (ambCol + sunLightCol * diff);
        } else if (matId == 5) {
          // Architectural Glass Curtain Wall with Warm 2700K Lit Interior + Sky Reflection
          float mullion = smoothstep(0.06, 0.02, abs(fract(hitPos.z * 0.55) - 0.5));
          vec3 refl = renderSky(reflect(rd, N), sunDir, 1, isBaseline);
          float fres = pow(1.0 - max(dot(-rd, N), 0.0), 3.0);
          vec3 interiorWarm = isBaseline
            ? vec3(0.25, 0.30, 0.34)
            : mix(vec3(0.18, 0.22, 0.26), vec3(1.15, 0.76, 0.38), 0.65 * (0.5 + 0.5 * sin(hitPos.z * 1.2)));
          col = mix(interiorWarm, refl, 0.35 + fres * 0.55) * (1.0 - mullion * 0.7);
        }

        // Distance aerial perspective haze
        float fog = 1.0 - exp(-hitDist * 0.006);
        col = mix(col, skyCol, fog);
      }

      // Evaluate foreground-left hero palm & cliff palms
      vec3 palmCoords[6];
      palmCoords[0] = vec3(-3.8, 1.2, 12.5); // Hero foreground-left palm
      palmCoords[1] = vec3(-5.2, 1.8, 9.2);
      palmCoords[2] = vec3(-5.6, 2.4, -1.2);
      palmCoords[3] = vec3(-6.4, 2.8, -11.8);
      palmCoords[4] = vec3(-7.2, 3.1, -22.5);
      palmCoords[5] = vec3(-8.0, 3.2, -25.0);

      for (int i = 0; i < 6; i++) {
        if (isBaseline && i < 2) continue; // Baseline has no foreground palm on left
        float fi = float(i);
        vec2 lean = vec2(1.4 + sin(fi * 2.1) * 0.5, cos(fi * 3.3) * 0.5);
        vec4 pHit = evalPalmTree(
          ro,
          rd,
          palmCoords[i],
          6.2 - fi * 0.25,
          lean,
          fi * 3.1 + 10.0,
          sunDir,
          isBaseline,
          hitDist
        );
        if (pHit.x > 0.05 && pHit.w < hitDist) {
          vec3 treeCol = mix(
            vec3(0.14, 0.26, 0.08) * (0.35 + pHit.y * 0.85),
            vec3(0.22, 0.16, 0.11) * (0.35 + pHit.y * 0.75),
            pHit.z
          );
          col = mix(col, treeCol, pHit.x);
          if (pHit.x > 0.75) hitDist = pHit.w;
        }
      }

      return col;
    }

    vec3 renderScene2Villas(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline) {
      float sceneHitDist = 180.0;
      vec3 upperCol = shadeCliffAndVillas(ro, rd, sunDir, isBaseline, sceneHitDist);

      // Sloped Sandy Beach & Rolling Shorebreak Swash Plane Intersection
      // Beach surface: y = clamp(0.35 - (x - shoreCurve) * 0.065, -0.1, 1.2)
      if (rd.y < 0.02) {
        float tBeach = (0.12 - ro.y) / min(-0.001, rd.y);
        if (tBeach > 0.2 && tBeach < sceneHitDist) {
          vec3 bPos = ro + rd * tBeach;
          float shoreCurve = sin(bPos.z * 0.08) * 1.4 + cos(bPos.z * 0.17) * 0.55;
          float relX = bPos.x - shoreCurve;

          // Animated rolling swash waves coming from the right (+x)
          float swash1 = 1.2 + sin(uTime * 1.4 - bPos.z * 0.22 + sin(bPos.z * 0.1) * 1.5) * (1.8 + uWaveStrength * 0.9);
          float swash2 = 3.6 + sin(uTime * 1.85 - bPos.z * 0.26 + 2.2) * (1.6 + uWaveStrength * 0.8);
          float swash3 = 6.4 + sin(uTime * 2.1 - bPos.z * 0.20 + 4.1) * 1.5;

          float sandN = fbm4(bPos.xz * 4.5);
          float maxWetX = -1.8 + sin(bPos.z * 0.18) * 0.65;
          float wetness = isBaseline
            ? smoothstep(0.2, 2.2, relX)
            : smoothstep(maxWetX - 1.2, maxWetX + 1.5, relX);
          float waterMask = smoothstep(swash1 - 0.25, swash1 + 0.45, relX);

          // Base dry coral sand vs darkened wet sand
          vec3 drySand = vec3(0.78, 0.67, 0.54) + (sandN - 0.5) * (isBaseline ? 0.01 : 0.06);
          vec3 wetSand = vec3(0.46, 0.38, 0.31);
          vec3 col = mix(drySand, wetSand, wetness);

          // TRUE 3D RAY-TRACED REFLECTION ON THE MIRROR-WET SAND & SHALLOW SURF!
          vec3 surfNormal = normalize(vec3(
            0.05 + (sandN - 0.5) * 0.03 * (1.0 - wetness * 0.8),
            1.0,
            (noise2D(bPos.xz * 8.0) - 0.5) * 0.025
          ));
          if (waterMask > 0.1) {
            surfNormal = mix(surfNormal, getOceanNormal(bPos.xz, uTime, isBaseline), waterMask * 0.75);
          }

          vec3 reflRd = reflect(rd, surfNormal);
          reflRd.y = max(0.015, abs(reflRd.y));
          float dummyDist;
          vec3 reflScene = shadeCliffAndVillas(bPos + vec3(0.0, 0.08, 0.0), reflRd, sunDir, isBaseline, dummyDist);

          float fresnel = pow(1.0 - max(dot(-rd, surfNormal), 0.0), 3.2);
          float reflWeight = wetness * (isBaseline ? 0.22 : (0.38 + fresnel * 0.52));

          // Turquoise ocean water on the right side (relX > swash1)
          vec3 oceanTint = mix(vec3(0.22, 0.68, 0.72), vec3(0.08, 0.42, 0.54), clamp((relX - swash1) * 0.18, 0.0, 1.0));
          col = mix(col, oceanTint, waterMask * 0.78);
          col = mix(col, reflScene, clamp(reflWeight, 0.0, 0.88));

          // Multi-layered lacy white seafoam swash lines
          float lace = isBaseline ? 0.5 : fbm4(bPos.xz * 3.6 + vec2(uTime * 0.4, -uTime * 0.25));
          float foam1 = smoothstep(0.65, 0.05, abs(relX - swash1)) +
                        smoothstep(2.2, 0.0, relX - swash1) * smoothstep(-0.1, 0.4, relX - swash1) * smoothstep(0.32, 0.68, lace) * 0.65;
          float foam2 = smoothstep(0.85, 0.08, abs(relX - swash2)) * (0.65 + lace * 0.35);
          float foam3 = smoothstep(1.05, 0.10, abs(relX - swash3)) * (0.55 + lace * 0.45);

          float totalFoam = isBaseline
            ? clamp(smoothstep(0.45, 0.05, abs(relX - swash1)) + foam2 * 0.5, 0.0, 1.0)
            : clamp(foam1 * 0.92 + foam2 * 0.85 + foam3 * 0.75, 0.0, 1.0);

          col = mix(col, vec3(0.96, 0.95, 0.92), totalFoam);
          upperCol = col;
        }
      }

      return upperCol;
    }

    // ==========================================================================
    // SCENE 03: RAINFOREST CANOPY & TWIN-CLIFF WATERFALL GORGE (00:10 - 00:15)
    // ==========================================================================
    // Returns vec2(height, matType): matType 1=striated cliff rock, 2=waterfall chute, 3=rainforest canopy
    vec2 getWaterfallGorgeSurface(vec2 p, bool isBaseline) {
      // Back canyon cliff wall at z < -18
      float canyonNotch = abs(p.x) - (3.8 + max(0.0, (p.y + 24.0) * 0.15));
      float cliffMask = smoothstep(-14.0, -24.0, p.y);

      // Steep valley side ridges rising on left (x < -8) and right (x > +8)
      float sideValley = pow(max(0.0, (abs(p.x) - 2.2) / 18.0), 1.45) * 18.0;

      if (p.y < -18.5) {
        // Towering Twin Canyon Cliffs & Central Waterfall Notch
        float fRock = isBaseline ? 0.4 : ridgedFbm(p * 0.22);
        float cliffH = 26.0 + sideValley * 0.55 + fRock * 5.5;
        // Central V-notch where the cataract plunges (|x| < 4.8)
        float notchFactor = smoothstep(1.8, 5.8, abs(p.x));
        float lipH = 19.8 + sin(p.x * 1.4) * 0.45;
        float h = mix(lipH, cliffH, notchFactor);

        // Top of cliffs is carpeted in lush rainforest canopy
        if (abs(p.x) > 5.8 && h > 24.5) {
          float topTree = isBaseline
            ? sin(p.x * 1.5) * cos(p.y * 1.5) * 1.2
            : fbm6(p * 0.85) * 3.8;
          return vec2(h + topTree, 3.0);
        }
        return vec2(h, abs(p.x) < 4.9 ? 2.0 : 1.0);
      } else {
        // Foreground & Midground Undulating Rainforest Canopy Valley
        // Narrow central river channel at |x| < 1.8
        float riverCut = smoothstep(0.8, 3.2, abs(p.x));
        float treeCanopy = 0.0;
        if (isBaseline) {
          // Repetitive smooth spherical blobs matching "1st Attempt"
          vec2 cell = fract(p * 0.24) - 0.5;
          treeCanopy = sqrt(max(0.0, 0.28 - dot(cell, cell))) * 7.5;
        } else {
          // Billowy multi-octave cauliflower rainforest domes
          float domes = 1.0 - abs(noise2D(p * 0.32) * 2.0 - 1.0);
          float detail = fbm6(p * 1.15);
          treeCanopy = domes * 3.6 + detail * 2.8;
        }
        float h = 1.5 + (sideValley + 3.2 + treeCanopy) * riverCut;
        return vec2(h, riverCut < 0.2 ? 0.0 : 3.0);
      }
    }

    vec3 renderScene3Waterfall(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline) {
      vec3 skyCol = renderSky(rd, sunDir, 2, isBaseline);
      vec3 col = skyCol;
      float hitT = 160.0;

      // 1. Raymarch the Canyon Cliffs, Waterfall Cataract & Rainforest Canopy
      float t = 1.5;
      int hitType = -1;
      vec3 hitPos = vec3(0.0);

      for (int i = 0; i < 84; i++) {
        vec3 p = ro + rd * t;
        if (t > 92.0 || p.y > 42.0 || p.y < 0.0) break;

        // Vertical waterfall cliff wall check around z in [-26, -18]
        vec2 surf = getWaterfallGorgeSurface(p.xz, isBaseline);
        float diff = p.y - surf.x;
        if (diff < 0.06) {
          hitT = t;
          hitPos = p;
          hitType = int(surf.y);
          break;
        }
        t += max(0.16, diff * 0.38);
      }

      if (hitType >= 0) {
        vec2 eps = vec2(0.12, 0.0);
        float hC = getWaterfallGorgeSurface(hitPos.xz, isBaseline).x;
        float hX = getWaterfallGorgeSurface(hitPos.xz + eps.xy, isBaseline).x;
        float hZ = getWaterfallGorgeSurface(hitPos.xz + eps.yx, isBaseline).x;
        vec3 N = normalize(vec3(hC - hX, 0.22, hC - hZ));

        float diff = clamp(dot(N, sunDir), 0.0, 1.0);

        if (hitType == 0) {
          // Glimpsed jungle river channel below the canopy
          col = vec3(0.08, 0.28, 0.36) + vec3(0.65, 0.75, 0.80) * pow(max(0.0, sin(hitPos.z * 3.0 + uTime * 3.0)), 4.0) * 0.25;
        } else if (hitType == 1) {
          // Striated vertical limestone/basalt canyon walls
          float strata = sin(hitPos.y * 2.8 + fbm4(hitPos.xy * 0.45) * 4.0);
          float vertStreaks = fbm6(vec2(hitPos.x * 1.8, hitPos.y * 0.25));
          vec3 rockCol = mix(vec3(0.14, 0.14, 0.13), vec3(0.38, 0.35, 0.31), vertStreaks * 0.75 + strata * 0.25);
          // Moss on gentler ledges
          float moss = smoothstep(0.35, 0.75, N.y) * smoothstep(10.0, 26.0, hitPos.y);
          rockCol = mix(rockCol, vec3(0.12, 0.26, 0.09), moss * 0.75);
          col = rockCol * (vec3(0.32, 0.38, 0.42) + vec3(1.1, 0.90, 0.65) * diff * 0.85);
        } else if (hitType == 2) {
          // Roaring Multi-Chute Waterfall Cataract!
          vec2 wfUv = vec2(hitPos.x * 0.55, hitPos.y * 0.18 + uTime * 1.45);
          float s1 = fbm6(wfUv * vec2(3.2, 1.8));
          float s2 = fbm4(vec2(hitPos.x * 3.8, hitPos.y * 0.42 + uTime * 2.4));
          float chuteMask = smoothstep(4.8, 2.2, abs(hitPos.x)) * (0.35 + 0.65 * sin(hitPos.x * 3.4 + s1 * 2.0));
          float lipFoam = smoothstep(16.5, 20.0, hitPos.y) * 0.65;
          float baseFoam = smoothstep(11.0, 5.5, hitPos.y) * 0.75;
          float waterIntensity = clamp((s1 * 0.6 + s2 * 0.5) * chuteMask + lipFoam + baseFoam, 0.0, 1.0);

          vec3 wetBasalt = vec3(0.15, 0.17, 0.18) * (0.5 + 0.5 * fbm4(hitPos.xy * 1.2));
          vec3 whiteWater = vec3(0.88, 0.93, 0.96);
          col = mix(wetBasalt, whiteWater, isBaseline ? 0.85 : smoothstep(0.18, 0.78, waterIntensity));
        } else {
          // Undulating Rainforest Canopy Domes
          float leafTex = isBaseline ? 0.5 : fbm6(hitPos.xz * 2.8);
          float canopyAO = smoothstep(3.5, 14.0, hitPos.y);
          vec3 darkLeaf = vec3(0.03, 0.08, 0.03);
          vec3 midLeaf = vec3(0.11, 0.26, 0.08);
          vec3 sunLeaf = vec3(0.34, 0.48, 0.14);
          vec3 treeCol = mix(darkLeaf, midLeaf, canopyAO * (0.5 + leafTex * 0.5));
          treeCol = mix(treeCol, sunLeaf, diff * (isBaseline ? 0.45 : (0.35 + leafTex * 0.65)));
          col = treeCol;
        }
      }

      // 2. Emergent Coconut & Royal Palms rising above the Rainforest Canopy (including the solitary waterfall-base palm!)
      for (int i = 0; i < 15; i++) {
        float fi = float(i);
        vec3 baseP;
        float ph = 6.2;
        vec2 lean = vec2(0.0);

        if (i == 0) {
          // Iconic solitary palm silhouetted against the misty base of the waterfall!
          baseP = vec3(0.35, 3.8, -14.5);
          ph = 5.4;
          lean = vec2(0.25, 0.35);
        } else {
          float row = floor(fi / 2.0);
          float side = mod(fi, 2.0) < 0.5 ? -1.0 : 1.0;
          float pz = 18.0 - row * 4.4 + sin(fi * 3.1) * 1.2;
          float px = side * (3.6 + mod(fi * 3.7, 7.5));
          float py = getWaterfallGorgeSurface(vec2(px, pz), isBaseline).x - 1.4;
          baseP = vec3(px, py, pz);
          ph = 5.2 + mod(fi, 3.0) * 1.1;
          lean = isBaseline ? vec2(0.0) : vec2(-side * 0.85 + sin(fi * 2.3) * 0.4, cos(fi * 1.9) * 0.5);
        }

        vec4 pHit = evalPalmTree(ro, rd, baseP, ph, lean, fi * 2.9 + 30.0, sunDir, isBaseline, hitT);
        if (pHit.x > 0.05 && pHit.w < hitT) {
          vec3 frondCol = mix(vec3(0.04, 0.11, 0.03), vec3(0.32, 0.46, 0.14), pHit.y);
          vec3 trunkCol = mix(vec3(0.06, 0.05, 0.04), vec3(0.24, 0.18, 0.13), pHit.y);
          vec3 pCol = mix(frondCol, trunkCol, pHit.z);
          col = mix(col, pCol, pHit.x);
          if (pHit.x > 0.75) hitT = pHit.w;
        }
      }

      // 3. Volumetric Waterfall Spray Mist & Diagonal Golden God-Ray Shafts
      if (!isBaseline) {
        // Rising mist cloud in the waterfall gorge basin (around x=0, y=8, z=-18)
        float tMist = clamp((-17.5 - ro.z) / min(-0.001, rd.z), 1.0, hitT);
        if (rd.z < 0.0 && tMist < hitT) {
          vec3 mPos = ro + rd * tMist;
          float mistRadial = exp(-dot(mPos.xy - vec2(0.0, 9.5), (mPos.xy - vec2(0.0, 9.5)) * vec2(0.018, 0.022)));
          float mistNoise = fbm4(mPos.xy * 0.35 - vec2(0.0, uTime * 0.28));
          float mistAlpha = clamp(mistRadial * (0.45 + mistNoise * 0.65) * uMistDensity * 0.68, 0.0, 0.78);
          col = mix(col, vec3(0.84, 0.88, 0.89), mistAlpha);
        }

        // Slanting Golden God-Ray Shafts from the top-right mountain ridge
        float rayCoord = rd.x * 0.78 - rd.y * 0.62;
        float shaftPattern = 0.5 + 0.5 * sin(rayCoord * 28.0 + uTime * 0.25) * cos(rayCoord * 17.0 - uTime * 0.18);
        float rightSunMask = smoothstep(-0.25, 0.45, rd.x) * smoothstep(-0.15, 0.35, rd.y) * smoothstep(8.0, 35.0, hitT);
        col += vec3(1.0, 0.78, 0.42) * shaftPattern * rightSunMask * 0.22 * uMistDensity;
      }

      // Valley atmospheric haze
      float haze = 1.0 - exp(-hitT * 0.0085);
      col = mix(col, vec3(0.76, 0.82, 0.78), haze * 0.55);

      return col;
    }

    // ==========================================================================
    // SCENE 04: CRESCENT BAY & COASTAL SANCTUARY PANORAMA (00:15 - 00:20)
    // ==========================================================================
    // Returns vec2(height, matType): 0=ocean, 1=mountain/forest, 2=white sand beach, 3=villa roof, 4=infinity pool
    vec2 getCrescentBayTerrain(vec2 p, bool isBaseline) {
      // Sweeping Crescent Coastline Curve:
      // Foreground valley at z > 8 opens out onto a curved bay on the left (x < 0) and headlands in distance
      float bayArc = -4.0 + sin(p.y * 0.065 + 0.8) * 14.0 - max(0.0, (p.y + 15.0) * 0.35);

      // 3 Receding Mountain Headlands jutting out on the left/background (z < -8)
      float headland1 = exp(-dot(p - vec2(-16.0, -24.0), (p - vec2(-16.0, -24.0)) * vec2(0.006, 0.012))) * 22.0;
      float headland2 = exp(-dot(p - vec2(-28.0, -56.0), (p - vec2(-28.0, -56.0)) * vec2(0.004, 0.009))) * 29.0;
      float headland3 = exp(-dot(p - vec2(-42.0, -92.0), (p - vec2(-42.0, -92.0)) * vec2(0.003, 0.007))) * 35.0;

      // Right-hand lush peninsula & foreground river valley slopes
      float rightHill = max(0.0, (p.x - bayArc) * 0.42);
      // Carve narrow river valley notch in the foreground (z > 6, x near 3.0)
      float fgValley = smoothstep(2.0, 12.0, p.y) * exp(-pow((p.x - 3.5) * 0.28, 2.0)) * 6.5;

      float baseTerrain = max(headland1, max(headland2, headland3)) + rightHill - fgValley - 1.2;

      if (baseTerrain < 0.0) {
        return vec2(baseTerrain, 0.0); // Underwater
      }

      // White-sand Crescent Beach zone along the waterline (0.0 <= baseTerrain < 0.85)
      if (baseTerrain < 0.78 && p.y < 8.0 && p.y > -38.0 && p.x > -18.0) {
        return vec2(baseTerrain * 0.45, 2.0);
      }

      // Luxury Eco-Resort Pavilion Cluster & Glowing Infinity Pools along the peninsula (p.x in [-3, 18], p.y in [-24, 6])
      if (p.y > -25.0 && p.y < 5.0 && baseTerrain > 0.45 && baseTerrain < 6.5) {
        vec2 cellId = floor(p * 0.22);
        vec2 cellLocal = fract(p * 0.22) - 0.5;
        float cellRand = hash12(cellId + vec2(7.3, 2.1));
        if (cellRand > 0.52) {
          // Resort Villa Pavilion Roof
          float boxD = max(abs(cellLocal.x), abs(cellLocal.y));
          if (boxD < 0.28) {
            float roofH = (0.28 - boxD) * 3.8 + 1.1;
            return vec2(baseTerrain + roofH, 3.0);
          }
          // Beachfront Infinity Pool deck on sea-facing side (-x) of front villas
          if (!isBaseline && baseTerrain < 2.2 && cellLocal.x < -0.26 && cellLocal.x > -0.44 && abs(cellLocal.y) < 0.22) {
            return vec2(baseTerrain + 0.35, 4.0);
          }
        }
      }

      // Forest canopy & mountain ridge roughness
      float detail = isBaseline
        ? sin(p.x * 0.8) * cos(p.y * 0.8) * 0.45
        : (ridgedFbm(p * 0.14) * 2.8 + fbm6(p * 0.95) * 1.45);

      return vec2(baseTerrain + detail, 1.0);
    }

    vec3 renderScene4CrescentBay(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline) {
      vec3 skyCol = renderSky(rd, sunDir, 3, isBaseline);
      vec3 col = skyCol;
      float hitT = 220.0;

      // 1. Raymarch the Coastal Mountains, Crescent Beach & Resort Peninsula
      float t = 2.0;
      int hitMat = -1;
      vec3 hitPos = vec3(0.0);

      for (int i = 0; i < 90; i++) {
        vec3 p = ro + rd * t;
        if (t > 145.0 || p.y > 46.0) break;
        if (p.y < 0.0) break; // Hits ocean plane

        vec2 terr = getCrescentBayTerrain(p.xz, isBaseline);
        float diff = p.y - max(0.0, terr.x);
        if (diff < 0.08 && terr.x > 0.0) {
          hitT = t;
          hitPos = p;
          hitMat = int(terr.y);
          break;
        }
        t += max(0.22, diff * 0.45);
      }

      if (hitMat > 0) {
        vec2 eps = vec2(0.18, 0.0);
        float hC = getCrescentBayTerrain(hitPos.xz, isBaseline).x;
        float hX = getCrescentBayTerrain(hitPos.xz + eps.xy, isBaseline).x;
        float hZ = getCrescentBayTerrain(hitPos.xz + eps.yx, isBaseline).x;
        vec3 N = normalize(vec3(hC - hX, 0.36, hC - hZ));

        float diff = clamp(dot(N, sunDir), 0.0, 1.0);

        if (hitMat == 2) {
          // Pristine white-sand Crescent Beach
          col = vec3(0.88, 0.80, 0.68) * (vec3(0.38, 0.42, 0.46) + vec3(1.05, 0.85, 0.62) * diff);
        } else if (hitMat == 3) {
          // Luxury Resort Pavilion Roofs (warm weathered timber & slate)
          col = (isBaseline ? vec3(0.48, 0.46, 0.44) : vec3(0.32, 0.25, 0.20)) *
                (vec3(0.35, 0.38, 0.42) + vec3(1.15, 0.88, 0.58) * diff);
        } else if (hitMat == 4) {
          // Glowing Turquoise Beachfront Infinity Pools!
          col = vec3(0.18, 0.88, 0.86) * 1.15;
        } else {
          // Lush Rainforest Canopy & Emergent Palms on Peninsula & Mountains
          float canopyFbm = isBaseline ? 0.5 : fbm6(hitPos.xz * 2.2);
          float palmDots = isBaseline ? 0.0 : smoothstep(0.68, 0.88, noise2D(hitPos.xz * 3.8));
          vec3 darkForest = vec3(0.04, 0.10, 0.04);
          vec3 midForest = vec3(0.12, 0.26, 0.09);
          vec3 sunlitCrown = vec3(0.38, 0.50, 0.16);
          vec3 alb = mix(darkForest, midForest, 0.35 + canopyFbm * 0.65);
          alb = mix(alb, sunlitCrown, diff * (0.4 + canopyFbm * 0.6) + palmDots * 0.35);
          col = alb * (0.55 + 0.65 * diff);
        }

        // Physical Golden Aerial Perspective Haze across the receding coastal headlands
        float hazeFactor = 1.0 - exp(-hitT * 0.0115);
        vec3 goldenHaze = mix(vec3(0.56, 0.66, 0.72), vec3(0.95, 0.76, 0.54), pow(max(dot(rd, sunDir), 0.0), 1.8));
        col = mix(col, goldenHaze, hazeFactor * 0.78);
      }

      // 2. Foreground Emergent Palm Crowns framing the River Valley (at z > 10)
      for (int i = 0; i < 8; i++) {
        float fi = float(i);
        float side = mod(fi, 2.0) < 0.5 ? -1.0 : 1.0;
        float pz = 14.0 + floor(fi / 2.0) * 3.8;
        float px = 3.5 + side * (3.2 + mod(fi * 2.3, 4.5));
        float py = max(1.0, getCrescentBayTerrain(vec2(px, pz), isBaseline).x - 1.2);
        vec4 pHit = evalPalmTree(
          ro,
          rd,
          vec3(px, py, pz),
          4.8 + mod(fi, 2.0) * 0.9,
          vec2(-side * 0.7, 0.3),
          fi * 3.7 + 70.0,
          sunDir,
          isBaseline,
          hitT
        );
        if (pHit.x > 0.05 && pHit.w < hitT) {
          vec3 pCol = mix(vec3(0.06, 0.14, 0.04), vec3(0.34, 0.46, 0.15), pHit.y);
          col = mix(col, pCol, pHit.x);
          if (pHit.x > 0.75) hitT = pHit.w;
        }
      }

      // 3. Turquoise Coral Lagoon & Crescent Bay Ocean Plane (y = 0.0)
      if (rd.y < -0.001) {
        float tWater = -ro.y / rd.y;
        if (tWater > 0.5 && tWater < hitT) {
          vec3 wPos = ro + rd * tWater;
          vec3 N = getOceanNormal(wPos.xz * 0.85, uTime, isBaseline);
          float bathy = getCrescentBayTerrain(wPos.xz, false).x; // negative underwater depth
          float depth = clamp(-bathy, 0.05, 6.0);
          float shallow = smoothstep(4.2, 0.15, depth);

          if (isBaseline) {
            col = mix(vec3(0.10, 0.46, 0.62), vec3(0.22, 0.68, 0.74), shallow * 0.65);
          } else {
            // Coral patch reefs inside the turquoise crescent bay
            float reefNoise = fbm6(wPos.xz * 0.32);
            float coralPatch = smoothstep(0.45, 0.66, reefNoise) * smoothstep(0.3, 2.2, depth);
            float caustics = causticPattern(wPos.xz * 0.7, uTime);

            vec3 aquaLagoon = vec3(0.16, 0.76, 0.74) + vec3(0.85, 0.92, 0.70) * caustics * 0.28;
            vec3 darkReef = vec3(0.03, 0.13, 0.19);
            vec3 shallowCol = mix(aquaLagoon, darkReef, coralPatch * 0.82);

            vec3 deepMarine = vec3(0.05, 0.25, 0.38);
            vec3 waterCol = mix(deepMarine, shallowCol, shallow * uClarity);

            // Concentric curved white breaking wave lines wrapping into the Crescent Bay
            float waveCrests = pow(max(0.0, sin(depth * 9.5 + uTime * 2.2)), 8.0) *
                               smoothstep(2.4, 0.15, depth) *
                               smoothstep(0.02, 0.22, depth);
            float shoreSwash = smoothstep(0.22, 0.02, depth);
            waterCol = mix(waterCol, vec3(0.95, 0.96, 0.94), clamp(waveCrests * 0.65 + shoreSwash * 0.78, 0.0, 1.0));

            // Fresnel reflection & golden aerial haze over water
            float fres = pow(1.0 - max(dot(-rd, N), 0.0), 3.6);
            waterCol = mix(waterCol, skyCol, fres * 0.48);

            float hazeW = 1.0 - exp(-tWater * 0.009);
            col = mix(waterCol, skyCol, hazeW * 0.62);
          }
        }
      }

      return col;
    }

    // ==========================================================================
    // MAIN ENTRY POINT
    // ==========================================================================
    void main() {
      vec2 p = (vUv * 2.0 - 1.0);
      p.x *= uResolution.x / max(1.0, uResolution.y);

      // Construct 3D camera basis from live OrbitControls / Director camera
      vec3 cw = normalize(uCamTarget - uCamPos);
      vec3 cu = normalize(cross(cw, vec3(0.0, 1.0, 0.0)));
      vec3 cv = cross(cu, cw);

      float fovRad = radians(uFov);
      float focal = 1.0 / tan(fovRad * 0.5);
      vec3 rd = normalize(p.x * cu + p.y * cv + focal * cw);
      vec3 ro = uCamPos;

      bool isBaseline = (uIsBaseline == 1);
      vec3 sunDir = getSunDir(uSceneId);
      vec3 color = vec3(0.0);

      if (uSceneId == 0) {
        color = renderScene1Atoll(ro, rd, sunDir, isBaseline);
      } else if (uSceneId == 1) {
        color = renderScene2Villas(ro, rd, sunDir, isBaseline);
      } else if (uSceneId == 2) {
        color = renderScene3Waterfall(ro, rd, sunDir, isBaseline);
      } else {
        color = renderScene4CrescentBay(ro, rd, sunDir, isBaseline);
      }

      // Filmic Tone Mapping + Subtle Optical Vignette + Gamma Correction
      color = acesToneMap(color * 1.06);
      float vig = 1.0 - dot(vUv - 0.5, vUv - 0.5) * 0.28;
      color *= vig;
      color = pow(max(color, 0.0), vec3(1.0 / 2.2));

      gl_FragColor = vec4(color, 1.0);
    }
  `,f=new Aa({uniforms:a,vertexShader:r,fragmentShader:c,depthWrite:!1,depthTest:!1}),d=new Zi(new Ml(2,2),f);return e.add(d),{render:(h,p,v,_)=>{a.uTime.value=_.elapsed,a.uSceneId.value=_.sceneId,a.uCamPos.value.copy(p.position),a.uCamTarget.value.copy(v),a.uFov.value=p.fov,a.uSunScale.value=_.sunElevationScale,a.uWaveStrength.value=_.waveStrength,a.uMistDensity.value=_.mistDensity,a.uClarity.value=_.waterClarity;const g=window.innerWidth,y=window.innerHeight,M=h.getPixelRatio();if(!_.isSplitMode)h.setScissorTest(!1),h.setViewport(0,0,g,y),a.uResolution.value.set(g*M,y*M),a.uIsBaseline.value=0,h.render(e,o);else{const b=Math.floor(y/2);h.setScissorTest(!0),a.uResolution.value.set(g*M,b*M),a.uIsBaseline.value=0,h.setViewport(0,b,g,y-b),h.setScissor(0,b,g,y-b),h.render(e,o),a.uIsBaseline.value=1,h.setViewport(0,0,g,b),h.setScissor(0,0,g,b),h.render(e,o)}},resize:(h,p)=>{a.uResolution.value.set(h,p)}}}const L3=({activeChapter:o,isDirector:e,isSplit:a,sunElevation:r,waveStrength:c,mistDensity:f,waterClarity:d,onChapterProgress:h})=>{const p=he.useRef(null),v=he.useRef(null),_=he.useRef(null),g=he.useRef(null),y=he.useRef(null),M=he.useRef(new g3),b=he.useRef(0),w=he.useRef(o);return he.useEffect(()=>{const S=p.current;if(!S)return;const x=new p3({canvas:S,antialias:!1,powerPreference:"high-performance"});x.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),x.setSize(window.innerWidth,window.innerHeight),_.current=x;const z=new Mi(ks[o].fov,window.innerWidth/window.innerHeight,.1,500);z.position.set(...ks[o].startCamPos),g.current=z;const O=new x3(z,x.domElement);O.target.set(...ks[o].startLookAt),O.enableDamping=!0,O.dampingFactor=.06,O.maxPolarAngle=Math.PI*.495,O.minDistance=1.5,O.maxDistance=110,y.current=O;const N=U3();v.current=N;const st=()=>{const B=window.innerWidth,D=window.innerHeight;x.setSize(B,D),z.aspect=B/D,z.updateProjectionMatrix(),N.resize(B*x.getPixelRatio(),D*x.getPixelRatio())};window.addEventListener("resize",st);let G=0;const P=()=>{G=requestAnimationFrame(P);const B=Math.min(M.current.getDelta(),.1),D=M.current.getElapsedTime(),A=ks[o];if(e){b.current+=B;const F=A.durationSec,et=os.clamp(b.current%F/F,0,1),tt=et*et*(3-2*et)*.35+et*.65;z.position.set(os.lerp(A.startCamPos[0],A.endCamPos[0],tt),os.lerp(A.startCamPos[1],A.endCamPos[1],tt),os.lerp(A.startCamPos[2],A.endCamPos[2],tt)),O.target.set(os.lerp(A.startLookAt[0],A.endLookAt[0],tt),os.lerp(A.startLookAt[1],A.endLookAt[1],tt),os.lerp(A.startLookAt[2],A.endLookAt[2],tt)),h&&h(et)}O.update(),N.render(x,z,O.target,{elapsed:D,sceneId:o,sunElevationScale:r,waveStrength:c,mistDensity:f,waterClarity:d,isSplitMode:a})};return P(),()=>{cancelAnimationFrame(G),window.removeEventListener("resize",st),x.dispose(),O.dispose()}},[]),he.useEffect(()=>{if(w.current!==o){w.current=o,b.current=0;const S=ks[o];g.current&&y.current&&(g.current.fov=S.fov,g.current.updateProjectionMatrix(),g.current.position.set(...S.startCamPos),y.current.target.set(...S.startLookAt),y.current.update())}},[o]),k.jsx("canvas",{ref:p,className:"absolute inset-0 w-full h-full block cursor-grab active:cursor-grabbing"})},O3=({isOpen:o,onClose:e})=>o?k.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200",onClick:e,children:k.jsxs("div",{className:"relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0D151D] border border-white/15 p-6 sm:p-8 text-[#F4F1EA] shadow-2xl space-y-6",onClick:a=>a.stopPropagation(),children:[k.jsxs("div",{className:"flex items-start justify-between border-b border-white/10 pb-4",children:[k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[k.jsx("span",{className:"text-xs font-bold tracking-widest text-[#E59846] uppercase",children:"Architecture & Benchmark Report"}),k.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-semibold bg-[#2EC492]/20 text-[#2EC492]",children:"100% LIVE MVP"})]}),k.jsx("h2",{className:"text-2xl font-serif font-medium text-white",children:"GPT-6.1 Terra System Telemetry"})]}),k.jsx("button",{type:"button",onClick:e,className:"w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all","aria-label":"Close modal",children:k.jsx(ZM,{size:18})})]}),k.jsxs("div",{className:"space-y-3",children:[k.jsx("h3",{className:"text-sm font-semibold tracking-wider text-white/80 uppercase",children:"Iteration Variance Matrix"}),k.jsx("div",{className:"overflow-x-auto rounded-2xl border border-white/10 bg-black/30",children:k.jsxs("table",{className:"w-full text-left text-xs sm:text-sm",children:[k.jsx("thead",{className:"border-b border-white/10 bg-white/5 text-white/70",children:k.jsxs("tr",{children:[k.jsx("th",{className:"p-3 font-semibold",children:"Subsystem Feature"}),k.jsx("th",{className:"p-3 font-semibold text-[#E59846]",children:"1st Attempt (Baseline)"}),k.jsx("th",{className:"p-3 font-semibold text-[#2EC492]",children:"9th Iteration (Photoreal)"})]})}),k.jsxs("tbody",{className:"divide-y divide-white/5 text-white/80",children:[k.jsxs("tr",{children:[k.jsxs("td",{className:"p-3 font-medium flex items-center gap-2",children:[k.jsx(kM,{size:14,className:"text-[#2EC492]"})," Water Optics"]}),k.jsx("td",{className:"p-3 text-white/60",children:"Uniform blue planar mesh, zero refraction"}),k.jsx("td",{className:"p-3 text-[#2EC492]",children:"Subsurface Voronoi caustics, shallow reef depth gradient, solar glint"})]}),k.jsxs("tr",{children:[k.jsxs("td",{className:"p-3 font-medium flex items-center gap-2",children:[k.jsx(WM,{size:14,className:"text-[#E59846]"})," Solar Lighting"]}),k.jsx("td",{className:"p-3 text-white/60",children:"Single flat directional light, harsh shadow"}),k.jsx("td",{className:"p-3 text-[#2EC492]",children:"ACES Filmic tone mapping, golden Rayleigh horizon, crepuscular rays"})]}),k.jsxs("tr",{children:[k.jsxs("td",{className:"p-3 font-medium flex items-center gap-2",children:[k.jsx(nx,{size:14,className:"text-purple-400"})," Botanical Canopy"]}),k.jsx("td",{className:"p-3 text-white/60",children:"Straight stick trunks with star cones"}),k.jsx("td",{className:"p-3 text-[#2EC492]",children:"S-curved bark trunks, 3 phyllotactic whorls, pinnate feathery leaflets"})]}),k.jsxs("tr",{children:[k.jsxs("td",{className:"p-3 font-medium flex items-center gap-2",children:[k.jsx(VM,{size:14,className:"text-cyan-400"})," Cliff & Architecture"]}),k.jsx("td",{className:"p-3 text-white/60",children:"Blocky cubic voxels, untextured boxes"}),k.jsx("td",{className:"p-3 text-[#2EC492]",children:"Stratified basalt ledges, cantilevered teak overhangs, warm 2700K rooms"})]})]})]})})]}),k.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[k.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2",children:[k.jsx("span",{className:"text-xs font-bold text-[#E59846]",children:"01 / SUNSET ATOLL (00:00–00:05)"}),k.jsx("p",{className:"text-xs text-white/70 leading-relaxed",children:"Low-altitude flight over shallow coral sandbar. Features 22 backlit coconut palms with translucent sub-surface chlorophyll scattering and anisotropic sun reflections across Gerstner wave crests."})]}),k.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2",children:[k.jsx("span",{className:"text-xs font-bold text-[#E59846]",children:"02 / CLIFFSIDE VILLAS (00:05–00:10)"}),k.jsx("p",{className:"text-xs text-white/70 leading-relaxed",children:"Beach-level dolly across mirror-wet sand. Features dynamic rolling foamy shorebreak swash, travertine stone piers, fluted teak roofs, and glowing interior reflections."})]}),k.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2",children:[k.jsx("span",{className:"text-xs font-bold text-[#E59846]",children:"03 / JUNGLE WATERFALL (00:10–00:15)"}),k.jsx("p",{className:"text-xs text-white/70 leading-relaxed",children:"Flight through deep rainforest canyon. Features twin towering limestone cliffs, multi-chute fluid cascade, rising volumetric spray clouds, and diagonal god-ray shafts."})]}),k.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2",children:[k.jsx("span",{className:"text-xs font-bold text-[#E59846]",children:"04 / CRESCENT BAY (00:15–00:20)"}),k.jsx("p",{className:"text-xs text-white/70 leading-relaxed",children:"High mountain-pass reveal over jungle river valley. Features layered volcanic headlands in golden haze, turquoise lagoon, and beachfront infinity-pool pavilions."})]})]}),k.jsxs("div",{className:"pt-2 flex items-center justify-between border-t border-white/10",children:[k.jsx("span",{className:"text-xs text-white/50",children:"Real-Time Engine: WebGL 2.0 · Three.js · React 19 · Vite 6"}),k.jsx("button",{type:"button",onClick:e,className:"px-5 py-2.5 rounded-full bg-[#E59846] text-[#0C1217] text-xs font-bold tracking-wide hover:bg-[#F0A95D] transition-all",children:"Return to Simulation"})]})]})}):null;class P3{constructor(){Ps(this,"ctx",null);Ps(this,"masterGain",null);Ps(this,"surfFilter",null);Ps(this,"waterfallGain",null);Ps(this,"isPlaying",!1);Ps(this,"waveTimer",null)}toggle(){return this.ctx||this.initAudio(),!this.ctx||!this.masterGain?!1:(this.isPlaying?(this.masterGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.35),this.isPlaying=!1,this.waveTimer!==null&&(window.clearInterval(this.waveTimer),this.waveTimer=null)):(this.ctx.state==="suspended"&&this.ctx.resume(),this.masterGain.gain.setTargetAtTime(.24,this.ctx.currentTime,.5),this.isPlaying=!0,this.startWaveModulation()),this.isPlaying)}setChapterAtmosphere(e,a){if(!this.ctx||!this.surfFilter||!this.waterfallGain)return;const r=this.ctx.currentTime,c=e===2?.45:.08;this.waterfallGain.gain.setTargetAtTime(c,r,.4),this.surfFilter.frequency.setTargetAtTime(280+a*420,r,.4)}initAudio(){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=1e-4,this.masterGain.connect(this.ctx.destination);const a=this.ctx.sampleRate*4,r=this.ctx.createBuffer(1,a,this.ctx.sampleRate),c=r.getChannelData(0);let f=0;for(let _=0;_<a;_++){const g=Math.random()*2-1;c[_]=(f+.02*g)/1.02,f=c[_],c[_]*=3.2}const d=this.ctx.createBufferSource();d.buffer=r,d.loop=!0,this.surfFilter=this.ctx.createBiquadFilter(),this.surfFilter.type="lowpass",this.surfFilter.frequency.value=460;const h=this.ctx.createGain();h.gain.value=.55,d.connect(this.surfFilter),this.surfFilter.connect(h),h.connect(this.masterGain),d.start();const p=this.ctx.createBufferSource();p.buffer=r,p.loop=!0;const v=this.ctx.createBiquadFilter();v.type="bandpass",v.frequency.value=920,v.Q.value=.7,this.waterfallGain=this.ctx.createGain(),this.waterfallGain.gain.value=.1,p.connect(v),v.connect(this.waterfallGain),this.waterfallGain.connect(this.masterGain),p.start()}startWaveModulation(){this.waveTimer!==null&&window.clearInterval(this.waveTimer),this.waveTimer=window.setInterval(()=>{if(!this.ctx||!this.surfFilter||!this.isPlaying)return;const e=this.ctx.currentTime;this.surfFilter.frequency.setTargetAtTime(640,e,1.4),this.surfFilter.frequency.setTargetAtTime(280,e+2.1,1.8)},4500)}}const z3=()=>{const[o,e]=he.useState("video"),[a,r]=he.useState(0),[c,f]=he.useState(!0),[d,h]=he.useState(!0),[p,v]=he.useState(50),[_,g]=he.useState(!0),[y,M]=he.useState(!1),[b,w]=he.useState(!1),[S,x]=he.useState(.78),[z,O]=he.useState(.64),[N,st]=he.useState(.88),[G,P]=he.useState(.94),B=he.useRef(null);he.useEffect(()=>{B.current=new P3},[]);const D=()=>{if(!B.current)return;const et=B.current.toggle();g(!et),B.current.setChapterAtmosphere(a,z)},A=et=>{r(et),B.current&&B.current.setChapterAtmosphere(et,z)};he.useEffect(()=>{const et=tt=>{tt.key>="1"&&tt.key<="4"?A(Number(tt.key)-1):tt.key===" "?(tt.preventDefault(),f(dt=>!dt)):tt.key.toLowerCase()==="m"?D():tt.key.toLowerCase()==="s"?h(dt=>!dt):tt.key.toLowerCase()==="v"?e(dt=>dt==="video"?"3d":"video"):tt.key.toLowerCase()==="t"&&w(dt=>!dt)};return window.addEventListener("keydown",et),()=>window.removeEventListener("keydown",et)},[a]);const F=ks[a];return k.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#070C10] text-[#F7F4ED]",children:[o==="video"?k.jsx(QM,{activeChapter:a,isPlaying:c,onChapterChange:r,onPlayPauseToggle:()=>f(et=>!et),isMuted:_,onToggleMute:D,sliderPosition:p,onSliderChange:v}):k.jsx(L3,{activeChapter:a,isDirector:c,isSplit:d,sunElevation:S,waveStrength:z,mistDensity:N,waterClarity:G}),k.jsxs("header",{className:"fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 sm:p-6 pointer-events-none",children:[k.jsx("div",{className:"pointer-events-auto flex items-center gap-3",children:k.jsxs("div",{className:"flex flex-col",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"font-serif text-2xl font-bold tracking-widest text-white leading-none",children:"TERRA"}),k.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#E59846] text-[#070C10] uppercase",children:"GPT-6.1 Engine"})]}),k.jsx("span",{className:"text-[11px] font-medium tracking-wider text-white/60 uppercase",children:"100% Live Photorealistic MVP"})]})}),k.jsxs("div",{className:"pointer-events-auto hidden md:flex items-center p-1 rounded-full bg-[#0E161D]/80 backdrop-blur-xl border border-white/15 shadow-xl",children:[k.jsxs("button",{type:"button",onClick:()=>e("video"),className:`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${o==="video"?"bg-[#E59846] text-[#070C10] shadow-md":"text-white/70 hover:text-white"}`,children:[k.jsx(XM,{size:13}),k.jsx("span",{children:"Video Reel (Ground Truth)"})]}),k.jsxs("button",{type:"button",onClick:()=>e("3d"),className:`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${o==="3d"?"bg-[#E59846] text-[#070C10] shadow-md":"text-white/70 hover:text-white"}`,children:[k.jsx(ix,{size:13}),k.jsx("span",{children:"3D Orbit Simulation"})]})]}),k.jsxs("div",{className:"pointer-events-auto flex items-center gap-2",children:[k.jsxs("button",{type:"button",onClick:()=>w(!0),className:"h-10 px-3.5 rounded-full bg-[#0E161D]/80 backdrop-blur-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 flex items-center gap-2 text-xs font-semibold shadow-lg transition-all",title:"Open Technical Telemetry & Benchmark Matrix",children:[k.jsx(HM,{size:15,className:"text-[#2EC492]"}),k.jsx("span",{className:"hidden sm:inline",children:"Telemetry"})]}),k.jsx("button",{type:"button",onClick:D,className:`w-10 h-10 rounded-full bg-[#0E161D]/80 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 shadow-lg transition-all ${_?"":"text-[#E59846] border-[#E59846]/40"}`,title:"Toggle Spatial Audio (Key M)","aria-label":"Toggle Spatial Audio",children:_?k.jsx(sx,{size:16}):k.jsx(ax,{size:16})}),k.jsx("button",{type:"button",onClick:()=>M(et=>!et),className:`w-10 h-10 rounded-full bg-[#0E161D]/80 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 shadow-lg transition-all ${y?"text-[#E59846] border-[#E59846]":""}`,title:"Shader and Atmosphere Controls","aria-label":"Shader and Atmosphere Controls",children:k.jsx(YM,{size:16})})]})]}),y&&k.jsxs("aside",{className:"fixed top-20 right-4 sm:right-6 z-40 w-80 p-5 rounded-3xl bg-[#0E161D]/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200",children:[k.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[k.jsx("span",{className:"text-xs font-bold tracking-wider text-white/60 uppercase",children:"Shader & Atmosphere Engine"}),k.jsx("span",{className:"text-[11px] font-semibold text-[#2EC492]",children:"60 FPS · ACES"})]}),k.jsxs("div",{className:"space-y-3 text-xs",children:[k.jsxs("div",{children:[k.jsxs("div",{className:"flex justify-between mb-1",children:[k.jsx("span",{className:"text-white/70",children:"Solar Elevation & Warmth"}),k.jsxs("span",{className:"font-semibold text-[#E59846]",children:[Math.round(S*100),"%"]})]}),k.jsx("input",{type:"range",min:"20",max:"100",value:Math.round(S*100),onChange:et=>x(Number(et.target.value)/100),className:"w-full accent-[#E59846] cursor-pointer"})]}),k.jsxs("div",{children:[k.jsxs("div",{className:"flex justify-between mb-1",children:[k.jsx("span",{className:"text-white/70",children:"Wave Swell & Swash Reach"}),k.jsxs("span",{className:"font-semibold text-[#E59846]",children:[Math.round(z*100),"%"]})]}),k.jsx("input",{type:"range",min:"10",max:"100",value:Math.round(z*100),onChange:et=>O(Number(et.target.value)/100),className:"w-full accent-[#E59846] cursor-pointer"})]}),k.jsxs("div",{children:[k.jsxs("div",{className:"flex justify-between mb-1",children:[k.jsx("span",{className:"text-white/70",children:"Volumetric Mist & God Rays"}),k.jsxs("span",{className:"font-semibold text-[#E59846]",children:[Math.round(N*100),"%"]})]}),k.jsx("input",{type:"range",min:"10",max:"100",value:Math.round(N*100),onChange:et=>st(Number(et.target.value)/100),className:"w-full accent-[#E59846] cursor-pointer"})]}),k.jsxs("div",{children:[k.jsxs("div",{className:"flex justify-between mb-1",children:[k.jsx("span",{className:"text-white/70",children:"Coral Reef Water Clarity"}),k.jsxs("span",{className:"font-semibold text-[#E59846]",children:[Math.round(G*100),"%"]})]}),k.jsx("input",{type:"range",min:"20",max:"100",value:Math.round(G*100),onChange:et=>P(Number(et.target.value)/100),className:"w-full accent-[#E59846] cursor-pointer"})]})]}),k.jsxs("div",{className:"pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50",children:[k.jsx("span",{children:"Keys 1–4 switch scenes"}),k.jsx("span",{children:"Space: Play/Pause"})]})]}),o==="3d"&&k.jsxs("section",{className:"fixed bottom-24 sm:bottom-28 left-4 sm:left-8 z-30 max-w-sm sm:max-w-md pointer-events-none drop-shadow-md",children:[k.jsx("p",{className:"text-xs font-bold tracking-widest text-[#E59846] uppercase mb-1",children:F.kicker}),k.jsxs("h1",{className:"font-serif text-3xl sm:text-4xl font-normal leading-tight text-white mb-2",children:[F.titleLines[0]," ",k.jsx("br",{}),F.titleLines[1]]}),k.jsx("p",{className:"text-xs sm:text-sm text-white/70 leading-relaxed",children:F.subtitle})]}),k.jsx("nav",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 rounded-full bg-[#0E161D]/85 backdrop-blur-2xl border border-white/15 shadow-2xl",children:ks.map((et,tt)=>{const dt=a===tt;return k.jsxs("button",{type:"button",onClick:()=>A(tt),className:`px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${dt?"bg-[#E59846] text-[#070C10] shadow-md scale-105":"text-white/70 hover:text-white hover:bg-white/5"}`,children:[k.jsxs("span",{className:`text-[10px] font-bold ${dt?"text-[#070C10]":"text-[#E59846]"}`,children:["0",tt+1]}),k.jsx("span",{className:"hidden sm:inline whitespace-nowrap",children:et.label})]},et.id)})}),k.jsx(O3,{isOpen:b,onClose:()=>w(!1)})]})},Gx=document.getElementById("root");if(!Gx)throw new Error("Failed to find root element");zM.createRoot(Gx).render(k.jsx(RM.StrictMode,{children:k.jsx(z3,{})}));
