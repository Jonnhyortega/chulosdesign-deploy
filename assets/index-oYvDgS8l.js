var S1=Object.defineProperty;var C1=(e,t,n)=>t in e?S1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var rt=(e,t,n)=>C1(e,typeof t!="symbol"?t+"":t,n);function E1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Id={exports:{}},ga={},zd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),b1=Symbol.for("react.portal"),P1=Symbol.for("react.fragment"),_1=Symbol.for("react.strict_mode"),j1=Symbol.for("react.profiler"),N1=Symbol.for("react.provider"),O1=Symbol.for("react.context"),T1=Symbol.for("react.forward_ref"),I1=Symbol.for("react.suspense"),z1=Symbol.for("react.memo"),L1=Symbol.for("react.lazy"),yc=Symbol.iterator;function A1(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ad=Object.assign,Rd={};function _r(e,t,n){this.props=e,this.context=t,this.refs=Rd,this.updater=n||Ld}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fd(){}Fd.prototype=_r.prototype;function ou(e,t,n){this.props=e,this.context=t,this.refs=Rd,this.updater=n||Ld}var iu=ou.prototype=new Fd;iu.constructor=ou;Ad(iu,_r.prototype);iu.isPureReactComponent=!0;var xc=Array.isArray,Md=Object.prototype.hasOwnProperty,au={current:null},$d={key:!0,ref:!0,__self:!0,__source:!0};function Dd(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Md.call(t,r)&&!$d.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:To,type:e,key:i,ref:a,props:o,_owner:au.current}}function R1(e,t){return{$$typeof:To,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===To}function F1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wc=/\/+/g;function Qa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?F1(""+e.key):t.toString(36)}function di(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case To:case b1:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Qa(a,0):r,xc(o)?(n="",e!=null&&(n=e.replace(wc,"$&/")+"/"),di(o,t,n,"",function(u){return u})):o!=null&&(lu(o)&&(o=R1(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(wc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",xc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Qa(i,l);a+=di(i,t,n,s,o)}else if(s=A1(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Qa(i,l++),a+=di(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ho(e,t,n){if(e==null)return e;var r=[],o=0;return di(e,r,"","",function(i){return t.call(n,i,o++)}),r}function M1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},pi={transition:null},$1={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:pi,ReactCurrentOwner:au};function Ud(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Ho,forEach:function(e,t,n){Ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ho(e,function(){t++}),t},toArray:function(e){return Ho(e,function(t){return t})||[]},only:function(e){if(!lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=_r;F.Fragment=P1;F.Profiler=j1;F.PureComponent=ou;F.StrictMode=_1;F.Suspense=I1;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;F.act=Ud;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ad({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=au.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Md.call(t,s)&&!$d.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:To,type:e.type,key:o,ref:i,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:O1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N1,_context:e},e.Consumer=e};F.createElement=Dd;F.createFactory=function(e){var t=Dd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:T1,render:e}};F.isValidElement=lu;F.lazy=function(e){return{$$typeof:L1,_payload:{_status:-1,_result:e},_init:M1}};F.memo=function(e,t){return{$$typeof:z1,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=pi.transition;pi.transition={};try{e()}finally{pi.transition=t}};F.unstable_act=Ud;F.useCallback=function(e,t){return Ce.current.useCallback(e,t)};F.useContext=function(e){return Ce.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};F.useEffect=function(e,t){return Ce.current.useEffect(e,t)};F.useId=function(){return Ce.current.useId()};F.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Ce.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};F.useRef=function(e){return Ce.current.useRef(e)};F.useState=function(e){return Ce.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Ce.current.useTransition()};F.version="18.3.1";zd.exports=F;var E=zd.exports;const ie=Td(E),D1=E1({__proto__:null,default:ie},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1=E,B1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),V1=Object.prototype.hasOwnProperty,H1=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y1={key:!0,ref:!0,__self:!0,__source:!0};function Bd(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)V1.call(t,r)&&!Y1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:B1,type:e,key:i,ref:a,props:o,_owner:H1.current}}ga.Fragment=W1;ga.jsx=Bd;ga.jsxs=Bd;Id.exports=ga;var g=Id.exports,Rl={},Wd={exports:{}},Me={},Vd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,I){var z=_.length;_.push(I);e:for(;0<z;){var B=z-1>>>1,W=_[B];if(0<o(W,I))_[B]=I,_[z]=W,z=B;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var I=_[0],z=_.pop();if(z!==I){_[0]=z;e:for(var B=0,W=_.length,mn=W>>>1;B<mn;){var Qe=2*(B+1)-1,Tt=_[Qe],Oe=Qe+1,mt=_[Oe];if(0>o(Tt,z))Oe<W&&0>o(mt,Tt)?(_[B]=mt,_[Oe]=z,B=Oe):(_[B]=Tt,_[Qe]=z,B=Qe);else if(Oe<W&&0>o(mt,z))_[B]=mt,_[Oe]=z,B=Oe;else break e}}return I}function o(_,I){var z=_.sortIndex-I.sortIndex;return z!==0?z:_.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,p=null,h=3,y=!1,x=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=_)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function v(_){if(w=!1,m(_),!x)if(n(s)!==null)x=!0,zr(S);else{var I=n(u);I!==null&&pn(v,I.startTime-_)}}function S(_,I){x=!1,w&&(w=!1,d(N),N=-1),y=!0;var z=h;try{for(m(I),p=n(s);p!==null&&(!(p.expirationTime>I)||_&&!we());){var B=p.callback;if(typeof B=="function"){p.callback=null,h=p.priorityLevel;var W=B(p.expirationTime<=I);I=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(s)&&r(s),m(I)}else r(s);p=n(s)}if(p!==null)var mn=!0;else{var Qe=n(u);Qe!==null&&pn(v,Qe.startTime-I),mn=!1}return mn}finally{p=null,h=z,y=!1}}var b=!1,C=null,N=-1,U=5,L=-1;function we(){return!(e.unstable_now()-L<U)}function fn(){if(C!==null){var _=e.unstable_now();L=_;var I=!0;try{I=C(!0,_)}finally{I?dn():(b=!1,C=null)}}else b=!1}var dn;if(typeof c=="function")dn=function(){c(fn)};else if(typeof MessageChannel<"u"){var Wo=new MessageChannel,Ya=Wo.port2;Wo.port1.onmessage=fn,dn=function(){Ya.postMessage(null)}}else dn=function(){k(fn,0)};function zr(_){C=_,b||(b=!0,dn())}function pn(_,I){N=k(function(){_(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,zr(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var z=h;h=I;try{return _()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,I){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var z=h;h=_;try{return I()}finally{h=z}},e.unstable_scheduleCallback=function(_,I,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,_){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=z+W,_={id:f++,callback:I,priorityLevel:_,startTime:z,expirationTime:W,sortIndex:-1},z>B?(_.sortIndex=z,t(u,_),n(s)===null&&_===n(u)&&(w?(d(N),N=-1):w=!0,pn(v,z-B))):(_.sortIndex=W,t(s,_),x||y||(x=!0,zr(S))),_},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(_){var I=h;return function(){var z=h;h=I;try{return _.apply(this,arguments)}finally{h=z}}}})(Hd);Vd.exports=Hd;var G1=Vd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1=E,Fe=G1;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yd=new Set,so={};function Rn(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(so[e]=t,e=0;e<t.length;e++)Yd.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,K1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},Sc={};function X1(e){return Fl.call(Sc,e)?!0:Fl.call(kc,e)?!1:K1.test(e)?Sc[e]=!0:(kc[e]=!0,!1)}function Z1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q1(e,t,n,r){if(t===null||typeof t>"u"||Z1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var su=/[\-:]([a-z])/g;function uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(su,uu);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(su,uu);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(su,uu);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function cu(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q1(t,n,o,r)&&(n=null),r||o===null?X1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _t=Q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),du=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),pu=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Kd=Symbol.for("react.offscreen"),Cc=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=Cc&&e[Cc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ka;function Wr(e){if(Ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ka=t&&t[1]||""}return`
`+Ka+e}var Xa=!1;function Za(e,t){if(!e||Xa)return"";Xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Xa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wr(e):""}function J1(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=Za(e.type,!1),e;case 11:return e=Za(e.type.render,!1),e;case 1:return e=Za(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Wn:return"Portal";case Ml:return"Profiler";case fu:return"StrictMode";case $l:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qd:return(e.displayName||"Context")+".Consumer";case Gd:return(e._context.displayName||"Context")+".Provider";case du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pu:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function eg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tg(e){var t=Xd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=tg(e))}function Zd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qd(e,t){t=t.checked,t!=null&&cu(e,"checked",t,!1)}function Wl(e,t){qd(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vl(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vr=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Vr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function Jd(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _c(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ep(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,tp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function uo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ng=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){ng.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function np(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function rp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=np(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var rg=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){if(rg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,ir=null,ar=null;function jc(e){if(e=Lo(e)){if(typeof Xl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ka(t),Xl(e.stateNode,e.type,t))}}function op(e){ir?ar?ar.push(e):ar=[e]:ir=e}function ip(){if(ir){var e=ir,t=ar;if(ar=ir=null,jc(e),t)for(e=0;e<t.length;e++)jc(t[e])}}function ap(e,t){return e(t)}function lp(){}var qa=!1;function sp(e,t,n){if(qa)return e(t,n);qa=!0;try{return ap(e,t,n)}finally{qa=!1,(ir!==null||ar!==null)&&(lp(),ip())}}function co(e,t){var n=e.stateNode;if(n===null)return null;var r=ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Zl=!1;if(kt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Zl=!1}function og(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Zr=!1,zi=null,Li=!1,ql=null,ig={onError:function(e){Zr=!0,zi=e}};function ag(e,t,n,r,o,i,a,l,s){Zr=!1,zi=null,og.apply(ig,arguments)}function lg(e,t,n,r,o,i,a,l,s){if(ag.apply(this,arguments),Zr){if(Zr){var u=zi;Zr=!1,zi=null}else throw Error(P(198));Li||(Li=!0,ql=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function up(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nc(e){if(Fn(e)!==e)throw Error(P(188))}function sg(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Nc(o),e;if(i===r)return Nc(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function cp(e){return e=sg(e),e!==null?fp(e):null}function fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fp(e);if(t!==null)return t;e=e.sibling}return null}var dp=Fe.unstable_scheduleCallback,Oc=Fe.unstable_cancelCallback,ug=Fe.unstable_shouldYield,cg=Fe.unstable_requestPaint,ne=Fe.unstable_now,fg=Fe.unstable_getCurrentPriorityLevel,hu=Fe.unstable_ImmediatePriority,pp=Fe.unstable_UserBlockingPriority,Ai=Fe.unstable_NormalPriority,dg=Fe.unstable_LowPriority,mp=Fe.unstable_IdlePriority,va=null,ft=null;function pg(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(va,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:gg,mg=Math.log,hg=Math.LN2;function gg(e){return e>>>=0,e===0?32:31-(mg(e)/hg|0)|0}var Ko=64,Xo=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Hr(l):(i&=a,i!==0&&(r=Hr(i)))}else a=n&~o,a!==0?r=Hr(a):i!==0&&(r=Hr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function vg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Je(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=vg(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hp(){var e=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),e}function Ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function xg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function gu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function gp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vp,vu,yp,xp,wp,es=!1,Zo=[],Ht=null,Yt=null,Gt=null,fo=new Map,po=new Map,Mt=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tc(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(t.pointerId)}}function Fr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Lo(t),t!==null&&vu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function kg(e,t,n,r,o){switch(t){case"focusin":return Ht=Fr(Ht,e,t,n,r,o),!0;case"dragenter":return Yt=Fr(Yt,e,t,n,r,o),!0;case"mouseover":return Gt=Fr(Gt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return fo.set(i,Fr(fo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,po.set(i,Fr(po.get(i)||null,e,t,n,r,o)),!0}return!1}function kp(e){var t=xn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=up(n),t!==null){e.blockedOn=t,wp(e.priority,function(){yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return t=Lo(n),t!==null&&vu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ic(e,t,n){mi(e)&&n.delete(t)}function Sg(){es=!1,Ht!==null&&mi(Ht)&&(Ht=null),Yt!==null&&mi(Yt)&&(Yt=null),Gt!==null&&mi(Gt)&&(Gt=null),fo.forEach(Ic),po.forEach(Ic)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Sg)))}function mo(e){function t(o){return Mr(o,e)}if(0<Zo.length){Mr(Zo[0],e);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&Mr(Ht,e),Yt!==null&&Mr(Yt,e),Gt!==null&&Mr(Gt,e),fo.forEach(t),po.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)kp(n),n.blockedOn===null&&Mt.shift()}var lr=_t.ReactCurrentBatchConfig,Fi=!0;function Cg(e,t,n,r){var o=D,i=lr.transition;lr.transition=null;try{D=1,yu(e,t,n,r)}finally{D=o,lr.transition=i}}function Eg(e,t,n,r){var o=D,i=lr.transition;lr.transition=null;try{D=4,yu(e,t,n,r)}finally{D=o,lr.transition=i}}function yu(e,t,n,r){if(Fi){var o=ts(e,t,n,r);if(o===null)ul(e,t,r,Mi,n),Tc(e,r);else if(kg(o,e,t,n,r))r.stopPropagation();else if(Tc(e,r),t&4&&-1<wg.indexOf(e)){for(;o!==null;){var i=Lo(o);if(i!==null&&vp(i),i=ts(e,t,n,r),i===null&&ul(e,t,r,Mi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ul(e,t,r,null,n)}}var Mi=null;function ts(e,t,n,r){if(Mi=null,e=mu(r),e=xn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=up(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function Sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fg()){case hu:return 1;case pp:return 4;case Ai:case dg:return 16;case mp:return 536870912;default:return 16}default:return 16}}var Ut=null,xu=null,hi=null;function Cp(){if(hi)return hi;var e,t=xu,n=t.length,r,o="value"in Ut?Ut.value:Ut.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return hi=o.slice(e,1<r?1-r:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function zc(){return!1}function $e(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qo:zc,this.isPropagationStopped=zc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=$e(jr),zo=J({},jr,{view:0,detail:0}),bg=$e(zo),el,tl,$r,ya=J({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(el=e.screenX-$r.screenX,tl=e.screenY-$r.screenY):tl=el=0,$r=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),Lc=$e(ya),Pg=J({},ya,{dataTransfer:0}),_g=$e(Pg),jg=J({},zo,{relatedTarget:0}),nl=$e(jg),Ng=J({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=$e(Ng),Tg=J({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ig=$e(Tg),zg=J({},jr,{data:0}),Ac=$e(zg),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rg[e])?!!t[e]:!1}function ku(){return Fg}var Mg=J({},zo,{key:function(e){if(e.key){var t=Lg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$g=$e(Mg),Dg=J({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rc=$e(Dg),Ug=J({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),Bg=$e(Ug),Wg=J({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=$e(Wg),Hg=J({},ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yg=$e(Hg),Gg=[9,13,27,32],Su=kt&&"CompositionEvent"in window,qr=null;kt&&"documentMode"in document&&(qr=document.documentMode);var Qg=kt&&"TextEvent"in window&&!qr,Ep=kt&&(!Su||qr&&8<qr&&11>=qr),Fc=" ",Mc=!1;function bp(e,t){switch(e){case"keyup":return Gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Kg(e,t){switch(e){case"compositionend":return Pp(t);case"keypress":return t.which!==32?null:(Mc=!0,Fc);case"textInput":return e=t.data,e===Fc&&Mc?null:e;default:return null}}function Xg(e,t){if(Hn)return e==="compositionend"||!Su&&bp(e,t)?(e=Cp(),hi=xu=Ut=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ep&&t.locale!=="ko"?null:t.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zg[e.type]:t==="textarea"}function _p(e,t,n,r){op(r),t=$i(t,"onChange"),0<t.length&&(n=new wu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jr=null,ho=null;function qg(e){Mp(e,0)}function xa(e){var t=Qn(e);if(Zd(t))return e}function Jg(e,t){if(e==="change")return t}var jp=!1;if(kt){var rl;if(kt){var ol="oninput"in document;if(!ol){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),ol=typeof Dc.oninput=="function"}rl=ol}else rl=!1;jp=rl&&(!document.documentMode||9<document.documentMode)}function Uc(){Jr&&(Jr.detachEvent("onpropertychange",Np),ho=Jr=null)}function Np(e){if(e.propertyName==="value"&&xa(ho)){var t=[];_p(t,ho,e,mu(e)),sp(qg,t)}}function e0(e,t,n){e==="focusin"?(Uc(),Jr=t,ho=n,Jr.attachEvent("onpropertychange",Np)):e==="focusout"&&Uc()}function t0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xa(ho)}function n0(e,t){if(e==="click")return xa(t)}function r0(e,t){if(e==="input"||e==="change")return xa(t)}function o0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:o0;function go(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Fl.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function Bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wc(e,t){var n=Bc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bc(n)}}function Op(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Op(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tp(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function i0(e){var t=Tp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Op(n.ownerDocument.documentElement,n)){if(r!==null&&Cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Wc(n,i);var a=Wc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a0=kt&&"documentMode"in document&&11>=document.documentMode,Yn=null,ns=null,eo=null,rs=!1;function Vc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||Yn==null||Yn!==Ii(r)||(r=Yn,"selectionStart"in r&&Cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&go(eo,r)||(eo=r,r=$i(ns,"onSelect"),0<r.length&&(t=new wu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function Jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},il={},Ip={};kt&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function wa(e){if(il[e])return il[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ip)return il[e]=t[n];return e}var zp=wa("animationend"),Lp=wa("animationiteration"),Ap=wa("animationstart"),Rp=wa("transitionend"),Fp=new Map,Hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Fp.set(e,t),Rn(t,[e])}for(var al=0;al<Hc.length;al++){var ll=Hc[al],l0=ll.toLowerCase(),s0=ll[0].toUpperCase()+ll.slice(1);ln(l0,"on"+s0)}ln(zp,"onAnimationEnd");ln(Lp,"onAnimationIteration");ln(Ap,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(Rp,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lg(r,t,void 0,e),e.currentTarget=null}function Mp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Yc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Yc(o,l,u),i=s}}}if(Li)throw e=ql,Li=!1,ql=null,e}function H(e,t){var n=t[ss];n===void 0&&(n=t[ss]=new Set);var r=e+"__bubble";n.has(r)||($p(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),$p(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function vo(e){if(!e[ei]){e[ei]=!0,Yd.forEach(function(n){n!=="selectionchange"&&(u0.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ei]||(t[ei]=!0,sl("selectionchange",!1,t))}}function $p(e,t,n,r){switch(Sp(t)){case 1:var o=Cg;break;case 4:o=Eg;break;default:o=yu}n=o.bind(null,t,n,e),o=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ul(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=xn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}sp(function(){var u=i,f=mu(n),p=[];e:{var h=Fp.get(e);if(h!==void 0){var y=wu,x=e;switch(e){case"keypress":if(gi(n)===0)break e;case"keydown":case"keyup":y=$g;break;case"focusin":x="focus",y=nl;break;case"focusout":x="blur",y=nl;break;case"beforeblur":case"afterblur":y=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Bg;break;case zp:case Lp:case Ap:y=Og;break;case Rp:y=Vg;break;case"scroll":y=bg;break;case"wheel":y=Yg;break;case"copy":case"cut":case"paste":y=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rc}var w=(t&4)!==0,k=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var c=u,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,d!==null&&(v=co(c,d),v!=null&&w.push(yo(c,v,m)))),k)break;c=c.return}0<w.length&&(h=new y(h,x,null,n,f),p.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Kl&&(x=n.relatedTarget||n.fromElement)&&(xn(x)||x[St]))break e;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?xn(x):null,x!==null&&(k=Fn(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(w=Lc,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Rc,v="onPointerLeave",d="onPointerEnter",c="pointer"),k=y==null?h:Qn(y),m=x==null?h:Qn(x),h=new w(v,c+"leave",y,n,f),h.target=k,h.relatedTarget=m,v=null,xn(f)===u&&(w=new w(d,c+"enter",x,n,f),w.target=m,w.relatedTarget=k,v=w),k=v,y&&x)t:{for(w=y,d=x,c=0,m=w;m;m=Dn(m))c++;for(m=0,v=d;v;v=Dn(v))m++;for(;0<c-m;)w=Dn(w),c--;for(;0<m-c;)d=Dn(d),m--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=Dn(w),d=Dn(d)}w=null}else w=null;y!==null&&Gc(p,h,y,w,!1),x!==null&&k!==null&&Gc(p,k,x,w,!0)}}e:{if(h=u?Qn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=Jg;else if($c(h))if(jp)S=r0;else{S=t0;var b=e0}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=n0);if(S&&(S=S(e,u))){_p(p,S,n,f);break e}b&&b(e,h,u),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Vl(h,"number",h.value)}switch(b=u?Qn(u):window,e){case"focusin":($c(b)||b.contentEditable==="true")&&(Yn=b,ns=u,eo=null);break;case"focusout":eo=ns=Yn=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Vc(p,n,f);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Vc(p,n,f)}var C;if(Su)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Hn?bp(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ep&&n.locale!=="ko"&&(Hn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Hn&&(C=Cp()):(Ut=f,xu="value"in Ut?Ut.value:Ut.textContent,Hn=!0)),b=$i(u,N),0<b.length&&(N=new Ac(N,e,null,n,f),p.push({event:N,listeners:b}),C?N.data=C:(C=Pp(n),C!==null&&(N.data=C)))),(C=Qg?Kg(e,n):Xg(e,n))&&(u=$i(u,"onBeforeInput"),0<u.length&&(f=new Ac("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=C))}Mp(p,t)})}function yo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=co(e,n),i!=null&&r.unshift(yo(e,i,o)),i=co(e,t),i!=null&&r.push(yo(e,i,o))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=co(n,i),s!=null&&a.unshift(yo(n,s,l))):o||(s=co(n,i),s!=null&&a.push(yo(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var c0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(c0,`
`).replace(f0,"")}function ti(e,t,n){if(t=Qc(t),Qc(e)!==t&&n)throw Error(P(425))}function Di(){}var os=null,is=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,d0=typeof clearTimeout=="function"?clearTimeout:void 0,Kc=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kc<"u"?function(e){return Kc.resolve(null).then(e).catch(m0)}:ls;function m0(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);mo(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),st="__reactFiber$"+Nr,xo="__reactProps$"+Nr,St="__reactContainer$"+Nr,ss="__reactEvents$"+Nr,h0="__reactListeners$"+Nr,g0="__reactHandles$"+Nr;function xn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xc(e);e!==null;){if(n=e[st])return n;e=Xc(e)}return t}e=n,n=e.parentNode}return null}function Lo(e){return e=e[st]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ka(e){return e[xo]||null}var us=[],Kn=-1;function sn(e){return{current:e}}function G(e){0>Kn||(e.current=us[Kn],us[Kn]=null,Kn--)}function V(e,t){Kn++,us[Kn]=e.current,e.current=t}var nn={},xe=sn(nn),_e=sn(!1),jn=nn;function dr(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function je(e){return e=e.childContextTypes,e!=null}function Ui(){G(_e),G(xe)}function Zc(e,t,n){if(xe.current!==nn)throw Error(P(168));V(xe,t),V(_e,n)}function Dp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,eg(e)||"Unknown",o));return J({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,jn=xe.current,V(xe,e),V(_e,_e.current),!0}function qc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Dp(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,G(_e),G(xe),V(xe,e)):G(_e),V(_e,n)}var vt=null,Sa=!1,fl=!1;function Up(e){vt===null?vt=[e]:vt.push(e)}function v0(e){Sa=!0,Up(e)}function un(){if(!fl&&vt!==null){fl=!0;var e=0,t=D;try{var n=vt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,Sa=!1}catch(o){throw vt!==null&&(vt=vt.slice(e+1)),dp(hu,un),o}finally{D=t,fl=!1}}return null}var Xn=[],Zn=0,Wi=null,Vi=0,Ue=[],Be=0,Nn=null,yt=1,xt="";function gn(e,t){Xn[Zn++]=Vi,Xn[Zn++]=Wi,Wi=e,Vi=t}function Bp(e,t,n){Ue[Be++]=yt,Ue[Be++]=xt,Ue[Be++]=Nn,Nn=e;var r=yt;e=xt;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,yt=1<<32-Je(t)+o|n<<o|r,xt=i+e}else yt=1<<i|n<<o|r,xt=e}function Eu(e){e.return!==null&&(gn(e,1),Bp(e,1,0))}function bu(e){for(;e===Wi;)Wi=Xn[--Zn],Xn[Zn]=null,Vi=Xn[--Zn],Xn[Zn]=null;for(;e===Nn;)Nn=Ue[--Be],Ue[Be]=null,xt=Ue[--Be],Ue[Be]=null,yt=Ue[--Be],Ue[Be]=null}var Le=null,ze=null,K=!1,qe=null;function Wp(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,ze=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:yt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,ze=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fs(e){if(K){var t=ze;if(t){var n=t;if(!Jc(e,t)){if(cs(e))throw Error(P(418));t=Qt(n.nextSibling);var r=Le;t&&Jc(e,t)?Wp(r,n):(e.flags=e.flags&-4097|2,K=!1,Le=e)}}else{if(cs(e))throw Error(P(418));e.flags=e.flags&-4097|2,K=!1,Le=e}}}function ef(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ni(e){if(e!==Le)return!1;if(!K)return ef(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=ze)){if(cs(e))throw Vp(),Error(P(418));for(;t;)Wp(e,t),t=Qt(t.nextSibling)}if(ef(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Le?Qt(e.stateNode.nextSibling):null;return!0}function Vp(){for(var e=ze;e;)e=Qt(e.nextSibling)}function pr(){ze=Le=null,K=!1}function Pu(e){qe===null?qe=[e]:qe.push(e)}var y0=_t.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ri(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tf(e){var t=e._init;return t(e._payload)}function Hp(e){function t(d,c){if(e){var m=d.deletions;m===null?(d.deletions=[c],d.flags|=16):m.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=qt(d,c),d.index=0,d.sibling=null,d}function i(d,c,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<c?(d.flags|=2,c):m):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,m,v){return c===null||c.tag!==6?(c=yl(m,d.mode,v),c.return=d,c):(c=o(c,m),c.return=d,c)}function s(d,c,m,v){var S=m.type;return S===Vn?f(d,c,m.props.children,v,m.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Rt&&tf(S)===c.type)?(v=o(c,m.props),v.ref=Dr(d,c,m),v.return=d,v):(v=Ci(m.type,m.key,m.props,null,d.mode,v),v.ref=Dr(d,c,m),v.return=d,v)}function u(d,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=xl(m,d.mode,v),c.return=d,c):(c=o(c,m.children||[]),c.return=d,c)}function f(d,c,m,v,S){return c===null||c.tag!==7?(c=En(m,d.mode,v,S),c.return=d,c):(c=o(c,m),c.return=d,c)}function p(d,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yl(""+c,d.mode,m),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Yo:return m=Ci(c.type,c.key,c.props,null,d.mode,m),m.ref=Dr(d,null,c),m.return=d,m;case Wn:return c=xl(c,d.mode,m),c.return=d,c;case Rt:var v=c._init;return p(d,v(c._payload),m)}if(Vr(c)||Ar(c))return c=En(c,d.mode,m,null),c.return=d,c;ri(d,c)}return null}function h(d,c,m,v){var S=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(d,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yo:return m.key===S?s(d,c,m,v):null;case Wn:return m.key===S?u(d,c,m,v):null;case Rt:return S=m._init,h(d,c,S(m._payload),v)}if(Vr(m)||Ar(m))return S!==null?null:f(d,c,m,v,null);ri(d,m)}return null}function y(d,c,m,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(m)||null,l(c,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yo:return d=d.get(v.key===null?m:v.key)||null,s(c,d,v,S);case Wn:return d=d.get(v.key===null?m:v.key)||null,u(c,d,v,S);case Rt:var b=v._init;return y(d,c,m,b(v._payload),S)}if(Vr(v)||Ar(v))return d=d.get(m)||null,f(c,d,v,S,null);ri(c,v)}return null}function x(d,c,m,v){for(var S=null,b=null,C=c,N=c=0,U=null;C!==null&&N<m.length;N++){C.index>N?(U=C,C=null):U=C.sibling;var L=h(d,C,m[N],v);if(L===null){C===null&&(C=U);break}e&&C&&L.alternate===null&&t(d,C),c=i(L,c,N),b===null?S=L:b.sibling=L,b=L,C=U}if(N===m.length)return n(d,C),K&&gn(d,N),S;if(C===null){for(;N<m.length;N++)C=p(d,m[N],v),C!==null&&(c=i(C,c,N),b===null?S=C:b.sibling=C,b=C);return K&&gn(d,N),S}for(C=r(d,C);N<m.length;N++)U=y(C,d,N,m[N],v),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?N:U.key),c=i(U,c,N),b===null?S=U:b.sibling=U,b=U);return e&&C.forEach(function(we){return t(d,we)}),K&&gn(d,N),S}function w(d,c,m,v){var S=Ar(m);if(typeof S!="function")throw Error(P(150));if(m=S.call(m),m==null)throw Error(P(151));for(var b=S=null,C=c,N=c=0,U=null,L=m.next();C!==null&&!L.done;N++,L=m.next()){C.index>N?(U=C,C=null):U=C.sibling;var we=h(d,C,L.value,v);if(we===null){C===null&&(C=U);break}e&&C&&we.alternate===null&&t(d,C),c=i(we,c,N),b===null?S=we:b.sibling=we,b=we,C=U}if(L.done)return n(d,C),K&&gn(d,N),S;if(C===null){for(;!L.done;N++,L=m.next())L=p(d,L.value,v),L!==null&&(c=i(L,c,N),b===null?S=L:b.sibling=L,b=L);return K&&gn(d,N),S}for(C=r(d,C);!L.done;N++,L=m.next())L=y(C,d,N,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?N:L.key),c=i(L,c,N),b===null?S=L:b.sibling=L,b=L);return e&&C.forEach(function(fn){return t(d,fn)}),K&&gn(d,N),S}function k(d,c,m,v){if(typeof m=="object"&&m!==null&&m.type===Vn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yo:e:{for(var S=m.key,b=c;b!==null;){if(b.key===S){if(S=m.type,S===Vn){if(b.tag===7){n(d,b.sibling),c=o(b,m.props.children),c.return=d,d=c;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Rt&&tf(S)===b.type){n(d,b.sibling),c=o(b,m.props),c.ref=Dr(d,b,m),c.return=d,d=c;break e}n(d,b);break}else t(d,b);b=b.sibling}m.type===Vn?(c=En(m.props.children,d.mode,v,m.key),c.return=d,d=c):(v=Ci(m.type,m.key,m.props,null,d.mode,v),v.ref=Dr(d,c,m),v.return=d,d=v)}return a(d);case Wn:e:{for(b=m.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(d,c.sibling),c=o(c,m.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=xl(m,d.mode,v),c.return=d,d=c}return a(d);case Rt:return b=m._init,k(d,c,b(m._payload),v)}if(Vr(m))return x(d,c,m,v);if(Ar(m))return w(d,c,m,v);ri(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,m),c.return=d,d=c):(n(d,c),c=yl(m,d.mode,v),c.return=d,d=c),a(d)):n(d,c)}return k}var mr=Hp(!0),Yp=Hp(!1),Hi=sn(null),Yi=null,qn=null,_u=null;function ju(){_u=qn=Yi=null}function Nu(e){var t=Hi.current;G(Hi),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Yi=e,_u=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(_u!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Yi===null)throw Error(P(308));qn=e,Yi.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var wn=null;function Ou(e){wn===null?wn=[e]:wn.push(e)}function Gp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ou(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ct(e,n)}return o=r.interleaved,o===null?(t.next=t,Ou(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ct(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gu(e,n)}}function nf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gi(e,t,n,r){var o=e.updateQueue;Ft=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;a=0,f=u=s=null,l=i;do{var h=l.lane,y=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(h=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){p=x.call(y,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(y,p,h):x,h==null)break e;p=J({},p,h);break e;case 2:Ft=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,s=p):f=f.next=y,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Tn|=a,e.lanes=a,e.memoizedState=p}}function rf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Ao={},dt=sn(Ao),wo=sn(Ao),ko=sn(Ao);function kn(e){if(e===Ao)throw Error(P(174));return e}function Iu(e,t){switch(V(ko,t),V(wo,e),V(dt,Ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yl(t,e)}G(dt),V(dt,t)}function hr(){G(dt),G(wo),G(ko)}function Kp(e){kn(ko.current);var t=kn(dt.current),n=Yl(t,e.type);t!==n&&(V(wo,e),V(dt,n))}function zu(e){wo.current===e&&(G(dt),G(wo))}var Z=sn(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dl=[];function Lu(){for(var e=0;e<dl.length;e++)dl[e]._workInProgressVersionPrimary=null;dl.length=0}var yi=_t.ReactCurrentDispatcher,pl=_t.ReactCurrentBatchConfig,On=0,q=null,ae=null,se=null,Ki=!1,to=!1,So=0,x0=0;function he(){throw Error(P(321))}function Au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Ru(e,t,n,r,o,i){if(On=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?C0:E0,e=n(r,o),to){i=0;do{if(to=!1,So=0,25<=i)throw Error(P(301));i+=1,se=ae=null,t.updateQueue=null,yi.current=b0,e=n(r,o)}while(to)}if(yi.current=Xi,t=ae!==null&&ae.next!==null,On=0,se=ae=q=null,Ki=!1,t)throw Error(P(300));return e}function Fu(){var e=So!==0;return So=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?q.memoizedState=se=e:se=se.next=e,se}function Ye(){if(ae===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=se===null?q.memoizedState:se.next;if(t!==null)se=t,ae=e;else{if(e===null)throw Error(P(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},se===null?q.memoizedState=se=e:se=se.next=e}return se}function Co(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=Ye(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var f=u.lane;if((On&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,q.lanes|=f,Tn|=f}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,nt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,Tn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hl(e){var t=Ye(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);nt(i,t.memoizedState)||(Pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xp(){}function Zp(e,t){var n=q,r=Ye(),o=t(),i=!nt(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,Mu(em.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Eo(9,Jp.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(P(349));On&30||qp(n,t,o)}return o}function qp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jp(e,t,n,r){t.value=n,t.getSnapshot=r,tm(t)&&nm(e)}function em(e,t,n){return n(function(){tm(t)&&nm(e)})}function tm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function nm(e){var t=Ct(e,1);t!==null&&et(t,e,1,-1)}function of(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=S0.bind(null,q,e),[t.memoizedState,e]}function Eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rm(){return Ye().memoizedState}function xi(e,t,n,r){var o=it();q.flags|=e,o.memoizedState=Eo(1|t,n,void 0,r===void 0?null:r)}function Ca(e,t,n,r){var o=Ye();r=r===void 0?null:r;var i=void 0;if(ae!==null){var a=ae.memoizedState;if(i=a.destroy,r!==null&&Au(r,a.deps)){o.memoizedState=Eo(t,n,i,r);return}}q.flags|=e,o.memoizedState=Eo(1|t,n,i,r)}function af(e,t){return xi(8390656,8,e,t)}function Mu(e,t){return Ca(2048,8,e,t)}function om(e,t){return Ca(4,2,e,t)}function im(e,t){return Ca(4,4,e,t)}function am(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lm(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4,4,am.bind(null,t,e),n)}function $u(){}function sm(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Au(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function um(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Au(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cm(e,t,n){return On&21?(nt(n,t)||(n=hp(),q.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function w0(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{D=n,pl.transition=r}}function fm(){return Ye().memoizedState}function k0(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dm(e))pm(t,n);else if(n=Gp(e,t,n,r),n!==null){var o=Se();et(n,e,r,o),mm(n,t,r)}}function S0(e,t,n){var r=Zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dm(e))pm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,nt(l,a)){var s=t.interleaved;s===null?(o.next=o,Ou(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Gp(e,t,o,r),n!==null&&(o=Se(),et(n,e,r,o),mm(n,t,r))}}function dm(e){var t=e.alternate;return e===q||t!==null&&t===q}function pm(e,t){to=Ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gu(e,n)}}var Xi={readContext:He,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},C0={readContext:He,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:af,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xi(4194308,4,am.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return xi(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=k0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:of,useDebugValue:$u,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=of(!1),t=e[0];return e=w0.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=it();if(K){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ce===null)throw Error(P(349));On&30||qp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,af(em.bind(null,r,i,e),[e]),r.flags|=2048,Eo(9,Jp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(K){var n=xt,r=yt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=So++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=x0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},E0={readContext:He,useCallback:sm,useContext:He,useEffect:Mu,useImperativeHandle:lm,useInsertionEffect:om,useLayoutEffect:im,useMemo:um,useReducer:ml,useRef:rm,useState:function(){return ml(Co)},useDebugValue:$u,useDeferredValue:function(e){var t=Ye();return cm(t,ae.memoizedState,e)},useTransition:function(){var e=ml(Co)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Zp,useId:fm,unstable_isNewReconciler:!1},b0={readContext:He,useCallback:sm,useContext:He,useEffect:Mu,useImperativeHandle:lm,useInsertionEffect:om,useLayoutEffect:im,useMemo:um,useReducer:hl,useRef:rm,useState:function(){return hl(Co)},useDebugValue:$u,useDeferredValue:function(e){var t=Ye();return ae===null?t.memoizedState=e:cm(t,ae.memoizedState,e)},useTransition:function(){var e=hl(Co)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Zp,useId:fm,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ea={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Zt(e),i=wt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(et(t,e,o,r),vi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=Zt(e),i=wt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(et(t,e,o,r),vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Zt(e),o=wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Kt(e,o,r),t!==null&&(et(t,e,r,n),vi(t,e,r))}};function lf(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!go(n,r)||!go(o,i):!0}function hm(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=He(i):(o=je(t)?jn:xe.current,r=t.contextTypes,i=(r=r!=null)?dr(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function sf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ea.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Tu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=He(i):(i=je(t)?jn:xe.current,o.context=dr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ps(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ea.enqueueReplaceState(o,o.state,null),Gi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var n="",r=t;do n+=J1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function gm(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qi||(qi=!0,bs=r),hs(e,t)},n}function vm(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){hs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){hs(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function uf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new P0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=D0.bind(null,e,t,n),t.then(e,e))}function cf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ff(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var _0=_t.ReactCurrentOwner,Pe=!1;function ke(e,t,n,r){t.child=e===null?Yp(t,null,n,r):mr(t,e.child,n,r)}function df(e,t,n,r,o){n=n.render;var i=t.ref;return sr(t,o),r=Ru(e,t,n,r,i,o),n=Fu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(K&&n&&Eu(t),t.flags|=1,ke(e,t,r,o),t.child)}function pf(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Gu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ym(e,t,i,r,o)):(e=Ci(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(a,r)&&e.ref===t.ref)return Et(e,t,o)}return t.flags|=1,e=qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function ym(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(go(i,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,Et(e,t,o)}return gs(e,t,n,r,o)}function xm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(er,Ie),Ie|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(er,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(er,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(er,Ie),Ie|=r;return ke(e,t,o,n),t.child}function wm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gs(e,t,n,r,o){var i=je(n)?jn:xe.current;return i=dr(t,i),sr(t,o),n=Ru(e,t,n,r,i,o),r=Fu(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(K&&r&&Eu(t),t.flags|=1,ke(e,t,n,o),t.child)}function mf(e,t,n,r,o){if(je(n)){var i=!0;Bi(t)}else i=!1;if(sr(t,o),t.stateNode===null)wi(e,t),hm(t,n,r),ms(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=je(n)?jn:xe.current,u=dr(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&sf(t,a,r,u),Ft=!1;var h=t.memoizedState;a.state=h,Gi(t,r,a,o),s=t.memoizedState,l!==r||h!==s||_e.current||Ft?(typeof f=="function"&&(ps(t,n,f,r),s=t.memoizedState),(l=Ft||lf(t,n,l,r,h,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Qp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Xe(t.type,l),a.props=u,p=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=He(s):(s=je(n)?jn:xe.current,s=dr(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==s)&&sf(t,a,r,s),Ft=!1,h=t.memoizedState,a.state=h,Gi(t,r,a,o);var x=t.memoizedState;l!==p||h!==x||_e.current||Ft?(typeof y=="function"&&(ps(t,n,y,r),x=t.memoizedState),(u=Ft||lf(t,n,u,r,h,x,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return vs(e,t,n,r,i,o)}function vs(e,t,n,r,o,i){wm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&qc(t,n,!1),Et(e,t,i);r=t.stateNode,_0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=mr(t,e.child,null,i),t.child=mr(t,null,l,i)):ke(e,t,l,i),t.memoizedState=r.state,o&&qc(t,n,!0),t.child}function km(e){var t=e.stateNode;t.pendingContext?Zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zc(e,t.context,!1),Iu(e,t.containerInfo)}function hf(e,t,n,r,o){return pr(),Pu(o),t.flags|=256,ke(e,t,n,r),t.child}var ys={dehydrated:null,treeContext:null,retryLane:0};function xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sm(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Z,o&1),e===null)return fs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=_a(a,r,0,null),e=En(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xs(n),t.memoizedState=ys,e):Du(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return j0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=qt(l,i):(i=En(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?xs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ys,r}return i=e.child,e=i.sibling,r=qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Du(e,t){return t=_a({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&Pu(r),mr(t,e.child,null,n),e=Du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function j0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(P(422))),oi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=_a({mode:"visible",children:r.children},o,0,null),i=En(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&mr(t,e.child,null,a),t.child.memoizedState=xs(a),t.memoizedState=ys,i);if(!(t.mode&1))return oi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(P(419)),r=gl(i,r,void 0),oi(e,t,a,r)}if(l=(a&e.childLanes)!==0,Pe||l){if(r=ce,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ct(e,o),et(r,e,o,-1))}return Yu(),r=gl(Error(P(421))),oi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=U0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ze=Qt(o.nextSibling),Le=t,K=!0,qe=null,e!==null&&(Ue[Be++]=yt,Ue[Be++]=xt,Ue[Be++]=Nn,yt=e.id,xt=e.overflow,Nn=t),t=Du(t,r.children),t.flags|=4096,t)}function gf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function vl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Cm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gf(e,n,t);else if(e.tag===19)gf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),vl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}vl(t,!0,n,null,i);break;case"together":vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N0(e,t,n){switch(t.tag){case 3:km(t),pr();break;case 5:Kp(t);break;case 1:je(t.type)&&Bi(t);break;case 4:Iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Hi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Sm(e,t,n):(V(Z,Z.current&1),e=Et(e,t,n),e!==null?e.sibling:null);V(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,xm(e,t,n)}return Et(e,t,n)}var Em,ws,bm,Pm;Em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ws=function(){};bm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,kn(dt.current);var i=null;switch(n){case"input":o=Bl(e,o),r=Bl(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=Hl(e,o),r=Hl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}Gl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Pm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function O0(e,t,n){var r=t.pendingProps;switch(bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return je(t.type)&&Ui(),ge(t),null;case 3:return r=t.stateNode,hr(),G(_e),G(xe),Lu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(js(qe),qe=null))),ws(e,t),ge(t),null;case 5:zu(t);var o=kn(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)bm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ge(t),null}if(e=kn(dt.current),ni(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[st]=t,r[xo]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<Yr.length;o++)H(Yr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ec(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Pc(r,i),H("invalid",r)}Gl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ti(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ti(r.textContent,l,e),o=["children",""+l]):so.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":Go(r),bc(r,i,!0);break;case"textarea":Go(r),_c(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Di)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ep(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[st]=t,e[xo]=r,Em(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ql(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yr.length;o++)H(Yr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":Ec(e,r),o=Bl(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),H("invalid",e);break;case"textarea":Pc(e,r),o=Hl(e,r),H("invalid",e);break;default:o=r}Gl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?rp(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&tp(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&uo(e,s):typeof s=="number"&&uo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(so.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&cu(e,i,s,a))}switch(n){case"input":Go(e),bc(e,r,!1);break;case"textarea":Go(e),_c(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?or(e,!!r.multiple,i,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Pm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=kn(ko.current),kn(dt.current),ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(i=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ge(t),null;case 13:if(G(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ze!==null&&t.mode&1&&!(t.flags&128))Vp(),pr(),t.flags|=98560,i=!1;else if(i=ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[st]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else qe!==null&&(js(qe),qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?le===0&&(le=3):Yu())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return hr(),ws(e,t),e===null&&vo(t.stateNode.containerInfo),ge(t),null;case 10:return Nu(t.type._context),ge(t),null;case 17:return je(t.type)&&Ui(),ge(t),null;case 19:if(G(Z),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Ur(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Qi(e),a!==null){for(t.flags|=128,Ur(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>vr&&(t.flags|=128,r=!0,Ur(i,!1),t.lanes=4194304)}else{if(!r)if(e=Qi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!K)return ge(t),null}else 2*ne()-i.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,Ur(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=Z.current,V(Z,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Hu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function T0(e,t){switch(bu(t),t.tag){case 1:return je(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),G(_e),G(xe),Lu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(G(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Z),null;case 4:return hr(),null;case 10:return Nu(t.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var ii=!1,ve=!1,I0=typeof WeakSet=="function"?WeakSet:Set,j=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function ks(e,t,n){try{n()}catch(r){ee(e,t,r)}}var vf=!1;function z0(e,t){if(os=Fi,e=Tp(),Cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,p=e,h=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++f===r&&(s=a),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},Fi=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,k=x.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Xe(t.type,w),k);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(v){ee(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return x=vf,vf=!1,x}function no(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ks(t,n,i)}o=o.next}while(o!==r)}}function ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _m(e){var t=e.alternate;t!==null&&(e.alternate=null,_m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[xo],delete t[ss],delete t[h0],delete t[g0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jm(e){return e.tag===5||e.tag===3||e.tag===4}function yf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}var fe=null,Ze=!1;function zt(e,t,n){for(n=n.child;n!==null;)Nm(e,t,n),n=n.sibling}function Nm(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(va,n)}catch{}switch(n.tag){case 5:ve||Jn(n,t);case 6:var r=fe,o=Ze;fe=null,zt(e,t,n),fe=r,Ze=o,fe!==null&&(Ze?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ze?(e=fe,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),mo(e)):cl(fe,n.stateNode));break;case 4:r=fe,o=Ze,fe=n.stateNode.containerInfo,Ze=!0,zt(e,t,n),fe=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ks(n,t,a),o=o.next}while(o!==r)}zt(e,t,n);break;case 1:if(!ve&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,zt(e,t,n),ve=r):zt(e,t,n);break;default:zt(e,t,n)}}function xf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new I0),t.forEach(function(r){var o=B0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Ze=!1;break e;case 3:fe=l.stateNode.containerInfo,Ze=!0;break e;case 4:fe=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(fe===null)throw Error(P(160));Nm(i,a,o),fe=null,Ze=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}function Om(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),ot(e),r&4){try{no(3,e,e.return),ba(3,e)}catch(w){ee(e,e.return,w)}try{no(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Ke(t,e),ot(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(Ke(t,e),ot(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var o=e.stateNode;try{uo(o,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&qd(o,i),Ql(l,a);var u=Ql(l,i);for(a=0;a<s.length;a+=2){var f=s[a],p=s[a+1];f==="style"?rp(o,p):f==="dangerouslySetInnerHTML"?tp(o,p):f==="children"?uo(o,p):cu(o,f,p,u)}switch(l){case"input":Wl(o,i);break;case"textarea":Jd(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?or(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?or(o,!!i.multiple,i.defaultValue,!0):or(o,!!i.multiple,i.multiple?[]:"",!1))}o[xo]=i}catch(w){ee(e,e.return,w)}}break;case 6:if(Ke(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ee(e,e.return,w)}}break;case 3:if(Ke(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Ke(t,e),ot(e);break;case 13:Ke(t,e),ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Wu=ne())),r&4&&xf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||f,Ke(t,e),ve=u):Ke(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(j=e,f=e.child;f!==null;){for(p=j=f;j!==null;){switch(h=j,y=h.child,h.tag){case 0:case 11:case 14:case 15:no(4,h,h.return);break;case 1:Jn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:Jn(h,h.return);break;case 22:if(h.memoizedState!==null){kf(p);continue}}y!==null?(y.return=h,j=y):kf(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=np("display",a))}catch(w){ee(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){ee(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ke(t,e),ot(e),r&4&&xf(e);break;case 21:break;default:Ke(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jm(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(uo(o,""),r.flags&=-33);var i=yf(e);Es(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=yf(e);Cs(e,l,a);break;default:throw Error(P(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L0(e,t,n){j=e,Tm(e)}function Tm(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ii;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ve;l=ii;var u=ve;if(ii=a,(ve=s)&&!u)for(j=o;j!==null;)a=j,s=a.child,a.tag===22&&a.memoizedState!==null?Sf(o):s!==null?(s.return=a,j=s):Sf(o);for(;i!==null;)j=i,Tm(i),i=i.sibling;j=o,ii=l,ve=u}wf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):wf(e)}}function wf(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&rf(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ve||t.flags&512&&Ss(t)}catch(h){ee(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function kf(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Sf(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ba(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ee(t,o,s)}}var i=t.return;try{Ss(t)}catch(s){ee(t,i,s)}break;case 5:var a=t.return;try{Ss(t)}catch(s){ee(t,a,s)}}}catch(s){ee(t,t.return,s)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var A0=Math.ceil,Zi=_t.ReactCurrentDispatcher,Uu=_t.ReactCurrentOwner,Ve=_t.ReactCurrentBatchConfig,M=0,ce=null,oe=null,pe=0,Ie=0,er=sn(0),le=0,bo=null,Tn=0,Pa=0,Bu=0,ro=null,be=null,Wu=0,vr=1/0,ht=null,qi=!1,bs=null,Xt=null,ai=!1,Bt=null,Ji=0,oo=0,Ps=null,ki=-1,Si=0;function Se(){return M&6?ne():ki!==-1?ki:ki=ne()}function Zt(e){return e.mode&1?M&2&&pe!==0?pe&-pe:y0.transition!==null?(Si===0&&(Si=hp()),Si):(e=D,e!==0||(e=window.event,e=e===void 0?16:Sp(e.type)),e):1}function et(e,t,n,r){if(50<oo)throw oo=0,Ps=null,Error(P(185));Io(e,n,r),(!(M&2)||e!==ce)&&(e===ce&&(!(M&2)&&(Pa|=n),le===4&&$t(e,pe)),Ne(e,r),n===1&&M===0&&!(t.mode&1)&&(vr=ne()+500,Sa&&un()))}function Ne(e,t){var n=e.callbackNode;yg(e,t);var r=Ri(e,e===ce?pe:0);if(r===0)n!==null&&Oc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oc(n),t===1)e.tag===0?v0(Cf.bind(null,e)):Up(Cf.bind(null,e)),p0(function(){!(M&6)&&un()}),n=null;else{switch(gp(r)){case 1:n=hu;break;case 4:n=pp;break;case 16:n=Ai;break;case 536870912:n=mp;break;default:n=Ai}n=$m(n,Im.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Im(e,t){if(ki=-1,Si=0,M&6)throw Error(P(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=Ri(e,e===ce?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ea(e,r);else{t=r;var o=M;M|=2;var i=Lm();(ce!==e||pe!==t)&&(ht=null,vr=ne()+500,Cn(e,t));do try{M0();break}catch(l){zm(e,l)}while(!0);ju(),Zi.current=i,M=o,oe!==null?t=0:(ce=null,pe=0,t=le)}if(t!==0){if(t===2&&(o=Jl(e),o!==0&&(r=o,t=_s(e,o))),t===1)throw n=bo,Cn(e,0),$t(e,r),Ne(e,ne()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,!(r&30)&&!R0(o)&&(t=ea(e,r),t===2&&(i=Jl(e),i!==0&&(r=i,t=_s(e,i))),t===1))throw n=bo,Cn(e,0),$t(e,r),Ne(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:vn(e,be,ht);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Wu+500-ne(),10<t)){if(Ri(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ls(vn.bind(null,e,be,ht),t);break}vn(e,be,ht);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Je(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*A0(r/1960))-r,10<r){e.timeoutHandle=ls(vn.bind(null,e,be,ht),r);break}vn(e,be,ht);break;case 5:vn(e,be,ht);break;default:throw Error(P(329))}}}return Ne(e,ne()),e.callbackNode===n?Im.bind(null,e):null}function _s(e,t){var n=ro;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=ea(e,t),e!==2&&(t=be,be=n,t!==null&&js(t)),e}function js(e){be===null?be=e:be.push.apply(be,e)}function R0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Bu,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Cf(e){if(M&6)throw Error(P(327));ur();var t=Ri(e,0);if(!(t&1))return Ne(e,ne()),null;var n=ea(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=_s(e,r))}if(n===1)throw n=bo,Cn(e,0),$t(e,t),Ne(e,ne()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,be,ht),Ne(e,ne()),null}function Vu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(vr=ne()+500,Sa&&un())}}function In(e){Bt!==null&&Bt.tag===0&&!(M&6)&&ur();var t=M;M|=1;var n=Ve.transition,r=D;try{if(Ve.transition=null,D=1,e)return e()}finally{D=r,Ve.transition=n,M=t,!(M&6)&&un()}}function Hu(){Ie=er.current,G(er)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,d0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ui();break;case 3:hr(),G(_e),G(xe),Lu();break;case 5:zu(r);break;case 4:hr();break;case 13:G(Z);break;case 19:G(Z);break;case 10:Nu(r.type._context);break;case 22:case 23:Hu()}n=n.return}if(ce=e,oe=e=qt(e.current,null),pe=Ie=t,le=0,bo=null,Bu=Pa=Tn=0,be=ro=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}wn=null}return e}function zm(e,t){do{var n=oe;try{if(ju(),yi.current=Xi,Ki){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ki=!1}if(On=0,se=ae=q=null,to=!1,So=0,Uu.current=null,n===null||n.return===null){le=1,bo=t,oe=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=pe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=cf(a);if(y!==null){y.flags&=-257,ff(y,a,l,i,t),y.mode&1&&uf(i,u,t),t=y,s=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){uf(i,u,t),Yu();break e}s=Error(P(426))}}else if(K&&l.mode&1){var k=cf(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ff(k,a,l,i,t),Pu(gr(s,l));break e}}i=s=gr(s,l),le!==4&&(le=2),ro===null?ro=[i]:ro.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=gm(i,s,t);nf(i,d);break e;case 1:l=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xt===null||!Xt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=vm(i,l,t);nf(i,v);break e}}i=i.return}while(i!==null)}Rm(n)}catch(S){t=S,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Lm(){var e=Zi.current;return Zi.current=Xi,e===null?Xi:e}function Yu(){(le===0||le===3||le===2)&&(le=4),ce===null||!(Tn&268435455)&&!(Pa&268435455)||$t(ce,pe)}function ea(e,t){var n=M;M|=2;var r=Lm();(ce!==e||pe!==t)&&(ht=null,Cn(e,t));do try{F0();break}catch(o){zm(e,o)}while(!0);if(ju(),M=n,Zi.current=r,oe!==null)throw Error(P(261));return ce=null,pe=0,le}function F0(){for(;oe!==null;)Am(oe)}function M0(){for(;oe!==null&&!ug();)Am(oe)}function Am(e){var t=Mm(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?Rm(e):oe=t,Uu.current=null}function Rm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=T0(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=O0(n,t,Ie),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function vn(e,t,n){var r=D,o=Ve.transition;try{Ve.transition=null,D=1,$0(e,t,n,r)}finally{Ve.transition=o,D=r}return null}function $0(e,t,n,r){do ur();while(Bt!==null);if(M&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(xg(e,i),e===ce&&(oe=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ai||(ai=!0,$m(Ai,function(){return ur(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var a=D;D=1;var l=M;M|=4,Uu.current=null,z0(e,n),Om(n,e),i0(is),Fi=!!os,is=os=null,e.current=n,L0(n),cg(),M=l,D=a,Ve.transition=i}else e.current=n;if(ai&&(ai=!1,Bt=e,Ji=o),i=e.pendingLanes,i===0&&(Xt=null),pg(n.stateNode),Ne(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(qi)throw qi=!1,e=bs,bs=null,e;return Ji&1&&e.tag!==0&&ur(),i=e.pendingLanes,i&1?e===Ps?oo++:(oo=0,Ps=e):oo=0,un(),null}function ur(){if(Bt!==null){var e=gp(Ji),t=Ve.transition,n=D;try{if(Ve.transition=null,D=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,Ji=0,M&6)throw Error(P(331));var o=M;for(M|=4,j=e.current;j!==null;){var i=j,a=i.child;if(j.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(j=u;j!==null;){var f=j;switch(f.tag){case 0:case 11:case 15:no(8,f,i)}var p=f.child;if(p!==null)p.return=f,j=p;else for(;j!==null;){f=j;var h=f.sibling,y=f.return;if(_m(f),f===u){j=null;break}if(h!==null){h.return=y,j=h;break}j=y}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}j=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,j=a;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:no(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,j=d;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){a=j;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,j=m;else e:for(a=c;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ba(9,l)}}catch(S){ee(l,l.return,S)}if(l===a){j=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,j=v;break e}j=l.return}}if(M=o,un(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(va,e)}catch{}r=!0}return r}finally{D=n,Ve.transition=t}}return!1}function Ef(e,t,n){t=gr(n,t),t=gm(e,t,1),e=Kt(e,t,1),t=Se(),e!==null&&(Io(e,1,t),Ne(e,t))}function ee(e,t,n){if(e.tag===3)Ef(e,e,n);else for(;t!==null;){if(t.tag===3){Ef(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=gr(n,e),e=vm(t,e,1),t=Kt(t,e,1),e=Se(),t!==null&&(Io(t,1,e),Ne(t,e));break}}t=t.return}}function D0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>ne()-Wu?Cn(e,0):Bu|=n),Ne(e,t)}function Fm(e,t){t===0&&(e.mode&1?(t=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):t=1);var n=Se();e=Ct(e,t),e!==null&&(Io(e,t,n),Ne(e,n))}function U0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fm(e,n)}function B0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Fm(e,n)}var Mm;Mm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,N0(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,K&&t.flags&1048576&&Bp(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wi(e,t),e=t.pendingProps;var o=dr(t,xe.current);sr(t,n),o=Ru(null,t,r,e,o,n);var i=Fu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(i=!0,Bi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Tu(t),o.updater=Ea,t.stateNode=o,o._reactInternals=t,ms(t,r,e,n),t=vs(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Eu(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=V0(r),e=Xe(r,e),o){case 0:t=gs(null,t,r,e,n);break e;case 1:t=mf(null,t,r,e,n);break e;case 11:t=df(null,t,r,e,n);break e;case 14:t=pf(null,t,r,Xe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),gs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),mf(e,t,r,o,n);case 3:e:{if(km(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Qp(e,t),Gi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gr(Error(P(423)),t),t=hf(e,t,r,n,o);break e}else if(r!==o){o=gr(Error(P(424)),t),t=hf(e,t,r,n,o);break e}else for(ze=Qt(t.stateNode.containerInfo.firstChild),Le=t,K=!0,qe=null,n=Yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===o){t=Et(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Kp(t),e===null&&fs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,as(r,o)?a=null:i!==null&&as(r,i)&&(t.flags|=32),wm(e,t),ke(e,t,a,n),t.child;case 6:return e===null&&fs(t),null;case 13:return Sm(e,t,n);case 4:return Iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),df(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,V(Hi,r._currentValue),r._currentValue=a,i!==null)if(nt(i.value,a)){if(i.children===o.children&&!_e.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=wt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ds(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(P(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ds(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sr(t,n),o=He(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),pf(e,t,r,o,n);case 15:return ym(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),wi(e,t),t.tag=1,je(r)?(e=!0,Bi(t)):e=!1,sr(t,n),hm(t,r,o),ms(t,r,o,n),vs(null,t,r,!0,e,n);case 19:return Cm(e,t,n);case 22:return xm(e,t,n)}throw Error(P(156,t.tag))};function $m(e,t){return dp(e,t)}function W0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new W0(e,t,n,r)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function V0(e){if(typeof e=="function")return Gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===du)return 11;if(e===pu)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ci(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Gu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Vn:return En(n.children,o,i,t);case fu:a=8,o|=8;break;case Ml:return e=We(12,n,t,o|2),e.elementType=Ml,e.lanes=i,e;case $l:return e=We(13,n,t,o),e.elementType=$l,e.lanes=i,e;case Dl:return e=We(19,n,t,o),e.elementType=Dl,e.lanes=i,e;case Kd:return _a(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gd:a=10;break e;case Qd:a=9;break e;case du:a=11;break e;case pu:a=14;break e;case Rt:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=We(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function En(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function _a(e,t,n,r){return e=We(22,e,r,t),e.elementType=Kd,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qu(e,t,n,r,o,i,a,l,s){return e=new H0(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=We(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(i),e}function Y0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dm(e){if(!e)return nn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(je(n))return Dp(e,n,t)}return t}function Um(e,t,n,r,o,i,a,l,s){return e=Qu(n,r,!0,e,o,i,a,l,s),e.context=Dm(null),n=e.current,r=Se(),o=Zt(n),i=wt(r,o),i.callback=t??null,Kt(n,i,o),e.current.lanes=o,Io(e,o,r),Ne(e,r),e}function ja(e,t,n,r){var o=t.current,i=Se(),a=Zt(o);return n=Dm(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(o,t,a),e!==null&&(et(e,o,a,i),vi(e,o,a)),a}function ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){bf(e,t),(e=e.alternate)&&bf(e,t)}function G0(){return null}var Bm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xu(e){this._internalRoot=e}Na.prototype.render=Xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));ja(e,t,null,null)};Na.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){ja(null,e,null,null)}),t[St]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var t=xp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&kp(e)}};function Zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pf(){}function Q0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ta(a);i.call(u)}}var a=Um(t,r,e,0,null,!1,!1,"",Pf);return e._reactRootContainer=a,e[St]=a.current,vo(e.nodeType===8?e.parentNode:e),In(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ta(s);l.call(u)}}var s=Qu(e,0,!1,null,null,!1,!1,"",Pf);return e._reactRootContainer=s,e[St]=s.current,vo(e.nodeType===8?e.parentNode:e),In(function(){ja(t,s,n,r)}),s}function Ta(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=ta(a);l.call(s)}}ja(t,a,e,o)}else a=Q0(n,t,e,o,r);return ta(a)}vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(gu(t,n|1),Ne(t,ne()),!(M&6)&&(vr=ne()+500,un()))}break;case 13:In(function(){var r=Ct(e,1);if(r!==null){var o=Se();et(r,e,1,o)}}),Ku(e,1)}};vu=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Se();et(t,e,134217728,n)}Ku(e,134217728)}};yp=function(e){if(e.tag===13){var t=Zt(e),n=Ct(e,t);if(n!==null){var r=Se();et(n,e,t,r)}Ku(e,t)}};xp=function(){return D};wp=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Xl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ka(r);if(!o)throw Error(P(90));Zd(r),Wl(r,o)}}}break;case"textarea":Jd(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};ap=Vu;lp=In;var K0={usingClientEntryPoint:!1,Events:[Lo,Qn,ka,op,ip,Vu]},Br={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X0={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cp(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{va=li.inject(X0),ft=li}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(t))throw Error(P(200));return Y0(e,t,null,n)};Me.createRoot=function(e,t){if(!Zu(e))throw Error(P(299));var n=!1,r="",o=Bm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qu(e,1,!1,null,null,n,!1,r,o),e[St]=t.current,vo(e.nodeType===8?e.parentNode:e),new Xu(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=cp(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return In(e)};Me.hydrate=function(e,t,n){if(!Oa(t))throw Error(P(200));return Ta(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Zu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Bm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Um(t,null,e,1,n??null,o,!1,i,a),e[St]=t.current,vo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Na(t)};Me.render=function(e,t,n){if(!Oa(t))throw Error(P(200));return Ta(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Oa(e))throw Error(P(40));return e._reactRootContainer?(In(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Me.unstable_batchedUpdates=Vu;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oa(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ta(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Wm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wm)}catch(e){console.error(e)}}Wm(),Wd.exports=Me;var Z0=Wd.exports,_f=Z0;Rl.createRoot=_f.createRoot,Rl.hydrateRoot=_f.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const jf="popstate";function q0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return Ns("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:na(o)}return ev(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function J0(){return Math.random().toString(36).substr(2,8)}function Nf(e,t){return{usr:e.state,key:e.key,idx:t}}function Ns(e,t,n,r){return n===void 0&&(n=null),Po({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Or(t):t,{state:n,key:t&&t.key||r||J0()})}function na(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Or(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ev(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Wt.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(Po({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function p(){l=Wt.Pop;let k=f(),d=k==null?null:k-u;u=k,s&&s({action:l,location:w.location,delta:d})}function h(k,d){l=Wt.Push;let c=Ns(w.location,k,d);u=f()+1;let m=Nf(c,u),v=w.createHref(c);try{a.pushState(m,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(v)}i&&s&&s({action:l,location:w.location,delta:1})}function y(k,d){l=Wt.Replace;let c=Ns(w.location,k,d);u=f();let m=Nf(c,u),v=w.createHref(c);a.replaceState(m,"",v),i&&s&&s({action:l,location:w.location,delta:0})}function x(k){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof k=="string"?k:na(k);return c=c.replace(/ $/,"%20"),te(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let w={get action(){return l},get location(){return e(o,a)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(jf,p),s=k,()=>{o.removeEventListener(jf,p),s=null}},createHref(k){return t(o,k)},createURL:x,encodeLocation(k){let d=x(k);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:y,go(k){return a.go(k)}};return w}var Of;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Of||(Of={}));function tv(e,t,n){return n===void 0&&(n="/"),nv(e,t,n,!1)}function nv(e,t,n,r){let o=typeof t=="string"?Or(t):t,i=yr(o.pathname||"/",n);if(i==null)return null;let a=Hm(e);rv(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=mv(i);l=dv(a[s],u,r)}return l}function Hm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Jt([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:cv(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Ym(i.path))o(i,a,s)}),t}function Ym(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Ym(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function rv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ov=/^:[\w-]+$/,iv=3,av=2,lv=1,sv=10,uv=-2,Tf=e=>e==="*";function cv(e,t){let n=e.split("/"),r=n.length;return n.some(Tf)&&(r+=uv),t&&(r+=av),n.filter(o=>!Tf(o)).reduce((o,i)=>o+(ov.test(i)?iv:i===""?lv:sv),r)}function fv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function dv(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=ra({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),h=s.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=ra({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!p)return null;Object.assign(o,p.params),a.push({params:o,pathname:Jt([i,p.pathname]),pathnameBase:yv(Jt([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=Jt([i,p.pathnameBase]))}return a}function ra(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=pv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:h,isOptional:y}=f;if(h==="*"){let w=l[p]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=l[p];return y&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function pv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function mv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Or(e):e;return{pathname:n?n.startsWith("/")?n:gv(n,t):t,search:xv(r),hash:wv(o)}}function gv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gm(e,t){let n=vv(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Qm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Or(e):(o=Po({},e),te(!o.pathname||!o.pathname.includes("?"),wl("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),wl("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),wl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;o.pathname=h.join("/")}l=p>=0?t[p]:"/"}let s=hv(o,l),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Jt=e=>e.join("/").replace(/\/\/+/g,"/"),yv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Km=["post","put","patch","delete"];new Set(Km);const Sv=["get",...Km];new Set(Sv);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_o.apply(this,arguments)}const Ia=E.createContext(null),Xm=E.createContext(null),cn=E.createContext(null),za=E.createContext(null),Mn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Zm=E.createContext(null);function Cv(e,t){let{relative:n}=t===void 0?{}:t;Ro()||te(!1);let{basename:r,navigator:o}=E.useContext(cn),{hash:i,pathname:a,search:l}=La(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Jt([r,a])),o.createHref({pathname:s,search:l,hash:i})}function Ro(){return E.useContext(za)!=null}function $n(){return Ro()||te(!1),E.useContext(za).location}function qm(e){E.useContext(cn).static||E.useLayoutEffect(e)}function Fo(){let{isDataRoute:e}=E.useContext(Mn);return e?Rv():Ev()}function Ev(){Ro()||te(!1);let e=E.useContext(Ia),{basename:t,future:n,navigator:r}=E.useContext(cn),{matches:o}=E.useContext(Mn),{pathname:i}=$n(),a=JSON.stringify(Gm(o,n.v7_relativeSplatPath)),l=E.useRef(!1);return qm(()=>{l.current=!0}),E.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Qm(u,JSON.parse(a),i,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Jt([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,a,i,e])}function La(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(cn),{matches:o}=E.useContext(Mn),{pathname:i}=$n(),a=JSON.stringify(Gm(o,r.v7_relativeSplatPath));return E.useMemo(()=>Qm(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function bv(e,t){return Pv(e,t)}function Pv(e,t,n,r){Ro()||te(!1);let{navigator:o}=E.useContext(cn),{matches:i}=E.useContext(Mn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=$n(),f;if(t){var p;let k=typeof t=="string"?Or(t):t;s==="/"||(p=k.pathname)!=null&&p.startsWith(s)||te(!1),f=k}else f=u;let h=f.pathname||"/",y=h;if(s!=="/"){let k=s.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=tv(e,{pathname:y}),w=Tv(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Jt([s,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:Jt([s,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&w?E.createElement(za.Provider,{value:{location:_o({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Wt.Pop}},w):w}function _v(){let e=Av(),t=kv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,null)}const jv=E.createElement(_v,null);class Nv extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Mn.Provider,{value:this.props.routeContext},E.createElement(Zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ov(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(Ia);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Mn.Provider,{value:t},r)}function Tv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let f=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||te(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let p=a[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:h,errors:y}=n,x=p.route.loader&&h[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||x){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,p,h)=>{let y,x=!1,w=null,k=null;n&&(y=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||jv,s&&(u<0&&h===0?(x=!0,k=null):u===h&&(x=!0,k=p.route.hydrateFallbackElement||null)));let d=t.concat(a.slice(0,h+1)),c=()=>{let m;return y?m=w:x?m=k:p.route.Component?m=E.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=f,E.createElement(Ov,{match:p,routeContext:{outlet:f,matches:d,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?E.createElement(Nv,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Jm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jm||{}),oa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(oa||{});function Iv(e){let t=E.useContext(Ia);return t||te(!1),t}function zv(e){let t=E.useContext(Xm);return t||te(!1),t}function Lv(e){let t=E.useContext(Mn);return t||te(!1),t}function eh(e){let t=Lv(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Av(){var e;let t=E.useContext(Zm),n=zv(oa.UseRouteError),r=eh(oa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Rv(){let{router:e}=Iv(Jm.UseNavigateStable),t=eh(oa.UseNavigateStable),n=E.useRef(!1);return qm(()=>{n.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,_o({fromRouteId:t},i)))},[e,t])}function Bn(e){te(!1)}function Fv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Wt.Pop,navigator:i,static:a=!1,future:l}=e;Ro()&&te(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:i,static:a,future:_o({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Or(r));let{pathname:f="/",search:p="",hash:h="",state:y=null,key:x="default"}=r,w=E.useMemo(()=>{let k=yr(f,s);return k==null?null:{location:{pathname:k,search:p,hash:h,state:y,key:x},navigationType:o}},[s,f,p,h,y,x,o]);return w==null?null:E.createElement(cn.Provider,{value:u},E.createElement(za.Provider,{children:n,value:w}))}function Mv(e){let{children:t,location:n}=e;return bv(Os(t),n)}new Promise(()=>{});function Os(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;let i=[...t,o];if(r.type===E.Fragment){n.push.apply(n,Os(r.props.children,i));return}r.type!==Bn&&te(!1),!r.props.index||!r.props.children||te(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Os(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ia.apply(this,arguments)}function th(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function $v(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dv(e,t){return e.button===0&&(!t||t==="_self")&&!$v(e)}const Uv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Bv=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Wv="6";try{window.__reactRouterVersion=Wv}catch{}const Vv=E.createContext({isTransitioning:!1}),Hv="startTransition",If=D1[Hv];function Yv(e){let{basename:t,children:n,future:r,window:o}=e,i=E.useRef();i.current==null&&(i.current=q0({window:o,v5Compat:!0}));let a=i.current,[l,s]=E.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=E.useCallback(p=>{u&&If?If(()=>s(p)):s(p)},[s,u]);return E.useLayoutEffect(()=>a.listen(f),[a,f]),E.createElement(Fv,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nh=E.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:p}=t,h=th(t,Uv),{basename:y}=E.useContext(cn),x,w=!1;if(typeof u=="string"&&Qv.test(u)&&(x=u,Gv))try{let m=new URL(window.location.href),v=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=yr(v.pathname,y);v.origin===m.origin&&S!=null?u=S+v.search+v.hash:w=!0}catch{}let k=Cv(u,{relative:o}),d=Zv(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:o,unstable_viewTransition:p});function c(m){r&&r(m),m.defaultPrevented||d(m)}return E.createElement("a",ia({},h,{href:x||k,onClick:w||i?r:c,ref:n,target:s}))}),Kv=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,unstable_viewTransition:u,children:f}=t,p=th(t,Bv),h=La(s,{relative:p.relative}),y=$n(),x=E.useContext(Xm),{navigator:w,basename:k}=E.useContext(cn),d=x!=null&&qv(h)&&u===!0,c=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,m=y.pathname,v=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;o||(m=m.toLowerCase(),v=v?v.toLowerCase():null,c=c.toLowerCase()),v&&k&&(v=yr(v,k)||v);const S=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let b=m===c||!a&&m.startsWith(c)&&m.charAt(S)==="/",C=v!=null&&(v===c||!a&&v.startsWith(c)&&v.charAt(c.length)==="/"),N={isActive:b,isPending:C,isTransitioning:d},U=b?r:void 0,L;typeof i=="function"?L=i(N):L=[i,b?"active":null,C?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let we=typeof l=="function"?l(N):l;return E.createElement(nh,ia({},p,{"aria-current":U,className:L,ref:n,style:we,to:s,unstable_viewTransition:u}),typeof f=="function"?f(N):f)});var Ts;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ts||(Ts={}));var zf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zf||(zf={}));function Xv(e){let t=E.useContext(Ia);return t||te(!1),t}function Zv(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=Fo(),u=$n(),f=La(e,{relative:a});return E.useCallback(p=>{if(Dv(p,n)){p.preventDefault();let h=r!==void 0?r:na(u)===na(f);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,f,r,o,n,e,i,a,l])}function qv(e,t){t===void 0&&(t={});let n=E.useContext(Vv);n==null&&te(!1);let{basename:r}=Xv(Ts.useViewTransitionState),o=La(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=yr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=yr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ra(o.pathname,a)!=null||ra(o.pathname,i)!=null}var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ye.apply(this,arguments)};function xr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Y="-ms-",io="-moz-",$="-webkit-",rh="comm",Aa="rule",qu="decl",Jv="@import",oh="@keyframes",ey="@layer",ih=Math.abs,Ju=String.fromCharCode,Is=Object.assign;function ty(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function ah(e){return e.trim()}function gt(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Ei(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function wr(e,t,n){return e.slice(t,n)}function at(e){return e.length}function lh(e){return e.length}function Gr(e,t){return t.push(e),e}function ny(e,t){return e.map(t).join("")}function Lf(e,t){return e.filter(function(n){return!gt(n,t)})}var Ra=1,kr=1,sh=0,Ge=0,re=0,Tr="";function Fa(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ra,column:kr,length:a,return:"",siblings:l}}function At(e,t){return Is(Fa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Un(e){for(;e.root;)e=At(e.root,{children:[e]});Gr(e,e.siblings)}function ry(){return re}function oy(){return re=Ge>0?ue(Tr,--Ge):0,kr--,re===10&&(kr=1,Ra--),re}function tt(){return re=Ge<sh?ue(Tr,Ge++):0,kr++,re===10&&(kr=1,Ra++),re}function bn(){return ue(Tr,Ge)}function bi(){return Ge}function Ma(e,t){return wr(Tr,e,t)}function zs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iy(e){return Ra=kr=1,sh=at(Tr=e),Ge=0,[]}function ay(e){return Tr="",e}function kl(e){return ah(Ma(Ge-1,Ls(e===91?e+2:e===40?e+1:e)))}function ly(e){for(;(re=bn())&&re<33;)tt();return zs(e)>2||zs(re)>3?"":" "}function sy(e,t){for(;--t&&tt()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Ma(e,bi()+(t<6&&bn()==32&&tt()==32))}function Ls(e){for(;tt();)switch(re){case e:return Ge;case 34:case 39:e!==34&&e!==39&&Ls(re);break;case 40:e===41&&Ls(e);break;case 92:tt();break}return Ge}function uy(e,t){for(;tt()&&e+re!==57;)if(e+re===84&&bn()===47)break;return"/*"+Ma(t,Ge-1)+"*"+Ju(e===47?e:tt())}function cy(e){for(;!zs(bn());)tt();return Ma(e,Ge)}function fy(e){return ay(Pi("",null,null,null,[""],e=iy(e),0,[0],e))}function Pi(e,t,n,r,o,i,a,l,s){for(var u=0,f=0,p=a,h=0,y=0,x=0,w=1,k=1,d=1,c=0,m="",v=o,S=i,b=r,C=m;k;)switch(x=c,c=tt()){case 40:if(x!=108&&ue(C,p-1)==58){Ei(C+=A(kl(c),"&","&\f"),"&\f",ih(u?l[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:C+=kl(c);break;case 9:case 10:case 13:case 32:C+=ly(x);break;case 92:C+=sy(bi()-1,7);continue;case 47:switch(bn()){case 42:case 47:Gr(dy(uy(tt(),bi()),t,n,s),s);break;default:C+="/"}break;case 123*w:l[u++]=at(C)*d;case 125*w:case 59:case 0:switch(c){case 0:case 125:k=0;case 59+f:d==-1&&(C=A(C,/\f/g,"")),y>0&&at(C)-p&&Gr(y>32?Rf(C+";",r,n,p-1,s):Rf(A(C," ","")+";",r,n,p-2,s),s);break;case 59:C+=";";default:if(Gr(b=Af(C,t,n,u,f,o,l,m,v=[],S=[],p,i),i),c===123)if(f===0)Pi(C,t,b,b,v,i,p,l,S);else switch(h===99&&ue(C,3)===110?100:h){case 100:case 108:case 109:case 115:Pi(e,b,b,r&&Gr(Af(e,b,b,0,0,o,l,m,o,v=[],p,S),S),o,S,p,l,r?v:S);break;default:Pi(C,b,b,b,[""],S,0,l,S)}}u=f=y=0,w=d=1,m=C="",p=a;break;case 58:p=1+at(C),y=x;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&oy()==125)continue}switch(C+=Ju(c),c*w){case 38:d=f>0?1:(C+="\f",-1);break;case 44:l[u++]=(at(C)-1)*d,d=1;break;case 64:bn()===45&&(C+=kl(tt())),h=bn(),f=p=at(m=C+=cy(bi())),c++;break;case 45:x===45&&at(C)==2&&(w=0)}}return i}function Af(e,t,n,r,o,i,a,l,s,u,f,p){for(var h=o-1,y=o===0?i:[""],x=lh(y),w=0,k=0,d=0;w<r;++w)for(var c=0,m=wr(e,h+1,h=ih(k=a[w])),v=e;c<x;++c)(v=ah(k>0?y[c]+" "+m:A(m,/&\f/g,y[c])))&&(s[d++]=v);return Fa(e,t,n,o===0?Aa:l,s,u,f,p)}function dy(e,t,n,r){return Fa(e,t,n,rh,Ju(ry()),wr(e,2,-2),0,r)}function Rf(e,t,n,r,o){return Fa(e,t,n,qu,wr(e,0,r),wr(e,r+1,-1),r,o)}function uh(e,t,n){switch(ty(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return io+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+io+e+Y+e+e;case 5936:switch(ue(e,t+11)){case 114:return $+e+Y+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+Y+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+Y+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+Y+e+e;case 6165:return $+e+Y+"flex-"+e+e;case 5187:return $+e+A(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return $+e+Y+"flex-item-"+A(e,/flex-|-self/g,"")+(gt(e,/flex-|baseline/)?"":Y+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return $+e+Y+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+Y+A(e,"shrink","negative")+e;case 5292:return $+e+Y+A(e,"basis","preferred-size")+e;case 6060:return $+"box-"+A(e,"-grow","")+$+e+Y+A(e,"grow","positive")+e;case 4554:return $+A(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!gt(e,/flex-|baseline/))return Y+"grid-column-align"+wr(e,t)+e;break;case 2592:case 3360:return Y+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,gt(r.props,/grid-\w+-end/)})?~Ei(e+(n=n[t].value),"span",0)?e:Y+A(e,"-start","")+e+Y+"grid-row-span:"+(~Ei(n,"span",0)?gt(n,/\d+/):+gt(n,/\d+/)-+gt(e,/\d+/))+";":Y+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return gt(r.props,/grid-\w+-start/)})?e:Y+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(at(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+io+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ei(e,"stretch",0)?uh(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,u){return Y+o+":"+i+u+(a?Y+o+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(ue(e,t+6)===121)return A(e,":",":"+$)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(ue(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+Y+"$2box$3")+e;case 100:return A(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function aa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function py(e,t,n,r){switch(e.type){case ey:if(e.children.length)break;case Jv:case qu:return e.return=e.return||e.value;case rh:return"";case oh:return e.return=e.value+"{"+aa(e.children,r)+"}";case Aa:if(!at(e.value=e.props.join(",")))return""}return at(n=aa(e.children,r))?e.return=e.value+"{"+n+"}":""}function my(e){var t=lh(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function hy(e){return function(t){t.root||(t=t.return)&&e(t)}}function gy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case qu:e.return=uh(e.value,e.length,n);return;case oh:return aa([At(e,{value:A(e.value,"@","@"+$)})],r);case Aa:if(e.length)return ny(n=e.props,function(o){switch(gt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Un(At(e,{props:[A(o,/:(read-\w+)/,":"+io+"$1")]})),Un(At(e,{props:[o]})),Is(e,{props:Lf(n,r)});break;case"::placeholder":Un(At(e,{props:[A(o,/:(plac\w+)/,":"+$+"input-$1")]})),Un(At(e,{props:[A(o,/:(plac\w+)/,":"+io+"$1")]})),Un(At(e,{props:[A(o,/:(plac\w+)/,Y+"input-$1")]})),Un(At(e,{props:[o]})),Is(e,{props:Lf(n,r)});break}return""})}}var vy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Te={},Sr=typeof process<"u"&&Te!==void 0&&(Te.REACT_APP_SC_ATTR||Te.SC_ATTR)||"data-styled",ch="active",fh="data-styled-version",$a="6.1.13",ec=`/*!sc*/
`,la=typeof window<"u"&&"HTMLElement"in window,yy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==""?Te.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Te.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.SC_DISABLE_SPEEDY!==void 0&&Te.SC_DISABLE_SPEEDY!==""&&Te.SC_DISABLE_SPEEDY!=="false"&&Te.SC_DISABLE_SPEEDY),xy={},Da=Object.freeze([]),Cr=Object.freeze({});function dh(e,t,n){return n===void 0&&(n=Cr),e.theme!==n.theme&&e.theme||t||n.theme}var ph=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ky=/(^-|-$)/g;function Ff(e){return e.replace(wy,"-").replace(ky,"")}var Sy=/(a)(d)/gi,si=52,Mf=function(e){return String.fromCharCode(e+(e>25?39:97))};function As(e){var t,n="";for(t=Math.abs(e);t>si;t=t/si|0)n=Mf(t%si)+n;return(Mf(t%si)+n).replace(Sy,"$1-$2")}var Sl,mh=5381,tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hh=function(e){return tr(mh,e)};function tc(e){return As(hh(e)>>>0)}function Cy(e){return e.displayName||e.name||"Component"}function Cl(e){return typeof e=="string"&&!0}var gh=typeof Symbol=="function"&&Symbol.for,vh=gh?Symbol.for("react.memo"):60115,Ey=gh?Symbol.for("react.forward_ref"):60112,by={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Py={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_y=((Sl={})[Ey]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sl[vh]=yh,Sl);function $f(e){return("type"in(t=e)&&t.type.$$typeof)===vh?yh:"$$typeof"in e?_y[e.$$typeof]:by;var t}var jy=Object.defineProperty,Ny=Object.getOwnPropertyNames,Df=Object.getOwnPropertySymbols,Oy=Object.getOwnPropertyDescriptor,Ty=Object.getPrototypeOf,Uf=Object.prototype;function xh(e,t,n){if(typeof t!="string"){if(Uf){var r=Ty(t);r&&r!==Uf&&xh(e,r,n)}var o=Ny(t);Df&&(o=o.concat(Df(t)));for(var i=$f(e),a=$f(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Py||n&&n[s]||a&&s in a||i&&s in i)){var u=Oy(t,s);try{jy(e,s,u)}catch{}}}}return e}function Er(e){return typeof e=="function"}function nc(e){return typeof e=="object"&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function sa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function jo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Rs(e,t,n){if(n===void 0&&(n=!1),!n&&!jo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Rs(e[r],t[r]);else if(jo(t))for(var r in t)e[r]=Rs(e[r],t[r]);return e}function rc(e,t){Object.defineProperty(e,"toString",{value:t})}function Mo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Iy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Mo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(ec);return n},e}(),_i=new Map,ua=new Map,ji=1,ui=function(e){if(_i.has(e))return _i.get(e);for(;ua.has(ji);)ji++;var t=ji++;return _i.set(e,t),ua.set(t,e),t},zy=function(e,t){ji=t+1,_i.set(e,t),ua.set(t,e)},Ly="style[".concat(Sr,"][").concat(fh,'="').concat($a,'"]'),Ay=new RegExp("^".concat(Sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ry=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Fy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ec),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(Ay);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(zy(f,u),Ry(e,f,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},Bf=function(e){for(var t=document.querySelectorAll(Ly),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Sr)!==ch&&(Fy(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function My(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Sr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Sr,ch),r.setAttribute(fh,$a);var a=My();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},$y=function(){function e(t){this.element=wh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw Mo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Dy=function(){function e(t){this.element=wh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Uy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wf=la,By={isServer:!la,useCSSOMInjection:!yy},ca=function(){function e(t,n,r){t===void 0&&(t=Cr),n===void 0&&(n={});var o=this;this.options=ye(ye({},By),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&la&&Wf&&(Wf=!1,Bf(this)),rc(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",u=function(p){var h=function(d){return ua.get(d)}(p);if(h===void 0)return"continue";var y=i.names.get(h),x=a.getGroup(p);if(y===void 0||!y.size||x.length===0)return"continue";var w="".concat(Sr,".g").concat(p,'[id="').concat(h,'"]'),k="";y!==void 0&&y.forEach(function(d){d.length>0&&(k+="".concat(d,","))}),s+="".concat(x).concat(w,'{content:"').concat(k,'"}').concat(ec)},f=0;f<l;f++)u(f);return s}(o)})}return e.registerId=function(t){return ui(t)},e.prototype.rehydrate=function(){!this.server&&la&&Bf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Uy(o):r?new $y(o):new Dy(o)}(this.options),new Iy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ui(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ui(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ui(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wy=/&/g,Vy=/^\s*\/\/.*$/gm;function kh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=kh(n.children,t)),n})}function Hy(e){var t,n,r,o=Cr,i=o.options,a=i===void 0?Cr:i,l=o.plugins,s=l===void 0?Da:l,u=function(h,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):h},f=s.slice();f.push(function(h){h.type===Aa&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Wy,n).replace(r,u))}),a.prefix&&f.push(gy),f.push(py);var p=function(h,y,x,w){y===void 0&&(y=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=h.replace(Vy,""),d=fy(x||y?"".concat(x," ").concat(y," { ").concat(k," }"):k);a.namespace&&(d=kh(d,a.namespace));var c=[];return aa(d,my(f.concat(hy(function(m){return c.push(m)})))),c};return p.hash=s.length?s.reduce(function(h,y){return y.name||Mo(15),tr(h,y.name)},mh).toString():"",p}var Yy=new ca,Fs=Hy(),Sh=ie.createContext({shouldForwardProp:void 0,styleSheet:Yy,stylis:Fs});Sh.Consumer;ie.createContext(void 0);function Ms(){return E.useContext(Sh)}var Ch=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Fs);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,rc(this,function(){throw Mo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Fs),this.name+t.hash},e}(),Gy=function(e){return e>="A"&&e<="Z"};function Vf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Gy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Eh=function(e){return e==null||e===!1||e===""},bh=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Eh(i)&&(Array.isArray(i)&&i.isCss||Er(i)?r.push("".concat(Vf(o),":"),i,";"):jo(i)?r.push.apply(r,xr(xr(["".concat(o," {")],bh(i),!1),["}"],!1)):r.push("".concat(Vf(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in vy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function en(e,t,n,r){if(Eh(e))return[];if(nc(e))return[".".concat(e.styledComponentId)];if(Er(e)){if(!Er(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return en(o,t,n,r)}var i;return e instanceof Ch?n?(e.inject(n,r),[e.getName(r)]):[e]:jo(e)?bh(e):Array.isArray(e)?Array.prototype.concat.apply(Da,e.map(function(a){return en(a,t,n,r)})):[e.toString()]}function Ph(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Er(n)&&!nc(n))return!1}return!0}var Qy=hh($a),Ky=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ph(t),this.componentId=n,this.baseHash=tr(Qy,n),this.baseStyle=r,ca.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Sn(o,this.staticRulesId);else{var i=sa(en(this.rules,t,n,r)),a=As(tr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=Sn(o,a),this.staticRulesId=a}else{for(var s=tr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var h=sa(en(p,t,n,r));s=tr(s,h+f),u+=h}}if(u){var y=As(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=Sn(o,y)}}return o},e}(),oc=ie.createContext(void 0);oc.Consumer;var El={};function Xy(e,t,n){var r=nc(e),o=e,i=!Cl(e),a=t.attrs,l=a===void 0?Da:a,s=t.componentId,u=s===void 0?function(v,S){var b=typeof v!="string"?"sc":Ff(v);El[b]=(El[b]||0)+1;var C="".concat(b,"-").concat(tc($a+b+El[b]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):s,f=t.displayName,p=f===void 0?function(v){return Cl(v)?"styled.".concat(v):"Styled(".concat(Cy(v),")")}(e):f,h=t.displayName&&t.componentId?"".concat(Ff(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;x=function(v,S){return w(v,S)&&k(v,S)}}else x=w}var d=new Ky(n,h,r?o.componentStyle:void 0);function c(v,S){return function(b,C,N){var U=b.attrs,L=b.componentStyle,we=b.defaultProps,fn=b.foldedComponentIds,dn=b.styledComponentId,Wo=b.target,Ya=ie.useContext(oc),zr=Ms(),pn=b.shouldForwardProp||zr.shouldForwardProp,_=dh(C,Ya,we)||Cr,I=function(Tt,Oe,mt){for(var Lr,hn=ye(ye({},Oe),{className:void 0,theme:mt}),Ga=0;Ga<Tt.length;Ga+=1){var Vo=Er(Lr=Tt[Ga])?Lr(hn):Lr;for(var It in Vo)hn[It]=It==="className"?Sn(hn[It],Vo[It]):It==="style"?ye(ye({},hn[It]),Vo[It]):Vo[It]}return Oe.className&&(hn.className=Sn(hn.className,Oe.className)),hn}(U,C,_),z=I.as||Wo,B={};for(var W in I)I[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&I.theme===_||(W==="forwardedAs"?B.as=I.forwardedAs:pn&&!pn(W,z)||(B[W]=I[W]));var mn=function(Tt,Oe){var mt=Ms(),Lr=Tt.generateAndInjectStyles(Oe,mt.styleSheet,mt.stylis);return Lr}(L,I),Qe=Sn(fn,dn);return mn&&(Qe+=" "+mn),I.className&&(Qe+=" "+I.className),B[Cl(z)&&!ph.has(z)?"class":"className"]=Qe,B.ref=N,E.createElement(z,B)}(m,v,S)}c.displayName=p;var m=ie.forwardRef(c);return m.attrs=y,m.componentStyle=d,m.displayName=p,m.shouldForwardProp=x,m.foldedComponentIds=r?Sn(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=h,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(S){for(var b=[],C=1;C<arguments.length;C++)b[C-1]=arguments[C];for(var N=0,U=b;N<U.length;N++)Rs(S,U[N],!0);return S}({},o.defaultProps,v):v}}),rc(m,function(){return".".concat(m.styledComponentId)}),i&&xh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Hf(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Yf=function(e){return Object.assign(e,{isCss:!0})};function zn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Er(e)||jo(e))return Yf(en(Hf(Da,xr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?en(r):Yf(en(Hf(r,t)))}function $s(e,t,n){if(n===void 0&&(n=Cr),!t)throw Mo(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,zn.apply(void 0,xr([o],i,!1)))};return r.attrs=function(o){return $s(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return $s(e,t,ye(ye({},n),o))},r}var _h=function(e){return $s(Xy,e)},O=_h;ph.forEach(function(e){O[e]=_h(e)});var Zy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ph(t),ca.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(sa(en(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&ca.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function qy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zn.apply(void 0,xr([e],t,!1)),o="sc-global-".concat(tc(JSON.stringify(r))),i=new Zy(r,o),a=function(s){var u=Ms(),f=ie.useContext(oc),p=ie.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&l(p,s,u.styleSheet,f,u.stylis),ie.useLayoutEffect(function(){if(!u.styleSheet.server)return l(p,s,u.styleSheet,f,u.stylis),function(){return i.removeStyles(p,u.styleSheet)}},[p,s,u.styleSheet,f,u.stylis]),null};function l(s,u,f,p,h){if(i.isStatic)i.renderStyles(s,xy,f,h);else{var y=ye(ye({},u),{theme:dh(u,p,a.defaultProps)});i.renderStyles(s,y,f,h)}}return ie.memo(a)}function jt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=sa(zn.apply(void 0,xr([e],t,!1))),o=tc(r);return new Ch(o,r)}const Jy=O.div`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ex=({children:e})=>{const t=$n();return E.useEffect(()=>{window.scrollTo(0,0)},[t]),g.jsx(Jy,{children:e})},tx=jt`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,nx=O.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
  background-color: #0d0d0d;

  // @media (max-width: 768px) {
  //   height: 100vh;
  //     padding: 4em 0 0 0;

  // }
  // @media (max-width: 668px) {
  //     padding: 5em 0 0 0;

  // }
  // @media (max-width: 568px) {
  //     padding: 6em 0 2em 0;
  //     height: 100%;

  // }
`,rx=O.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${e=>e.$bckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
  animation: ${tx} 5s ease-in-out infinite;
  transition: background-image 1s ease-in-out;
  filter: brightness(0.5) grayscale(20%);
`,ox=O.div`
  opacity: ${({$isVisible:e})=>e?1:0};
  transition: opacity 0.5s ease;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f4f4f4;
  padding: 5em 0;
  button {
    margin-top: 2em;
  }
`,ix=O.img`
  width: 160px;
  height: auto;
  margin-bottom: 1em;
  z-index: 2;
  border-radius: 50%;
  box-shadow: 1px 1px 5px black;
`,ax=O.h2`
  font-size: 4rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  letter-spacing: 3px;
  font-family: "Dancing Script", cursive;
  color: var(--greenFull5);
  text-shadow: 1px 1px 4px black;
  filter: drop-shadow(1px 1px 5px black);
  text-align: right;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,lx=O.h2`
  font-size: 1.5rem;
  padding: 0 2em;
  font-family: "Roboto", sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  line-height: 1;
  font-weight: 300;
  
  h1 {
    display: inline-block;
    color: var(--greenFull4);
    font-weight: 400;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,sx=O.div`
  display: flex;
  gap: 1em;
`;O.div``;const ux=O.button`
  background: var(--greenFull1);
  color: var(--silverFull7);
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 1.1em;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 200px;

  @media (max-width: 568px) {
    width: 150px;
    padding: 9px 18px;
    font-size: .9em;
  }
  &:hover {
    transform: translateY(-3px);
    background: var(--greenFull3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`,Ua=({content:e,work:t})=>g.jsx(ux,{onClick:t,children:e||"Click Me!"}),cx="/assets/hero1-BjslUGoc.jpg",fx="/assets/hero2-BUqUPs1z.jpg",dx="/assets/hero3-yWOv8hwr.webp",px="/assets/hero4-CH3DYnTz.webp",mx="/assets/hero5-DZc9k53t.webp",hx="/assets/hero6-Bx92Y5_s.webp",gx="/assets/hero7-4Rsjg_oS.webp",$o="/assets/Logo-SUYjqgIA.png",Gf=[cx,fx,dx,px,mx,hx,gx],vx=()=>{const[e,t]=E.useState(!1),[n,r]=E.useState(0),o=Fo(),i=()=>{o("/disenos")};return E.useEffect(()=>{const a=setTimeout(()=>{t(!0)},1e3);return()=>clearTimeout(a)},[]),E.useEffect(()=>{const a=setInterval(()=>{r(l=>l===Gf.length-1?0:l+1)},5e3);return()=>clearInterval(a)},[]),g.jsxs(nx,{children:[g.jsx(rx,{onLoad:"lazy",$bckgImg:Gf[n]}),g.jsxs(ox,{$isVisible:e,children:[g.jsx(ix,{src:$o,alt:"Logo"}),g.jsx(ax,{children:"Transformá tus espacios"}),g.jsxs(lx,{children:["Combinando funcionalidad y elegancia con nuestros"," ",g.jsx("h1",{children:"divisores de madera"})]}),g.jsx(sx,{children:g.jsx(Ua,{content:"Ver diseños",work:i})})]})]})},yx=O.div`
display:flex;
flex-direction: column;
gap: 3em;
width: 100%; 
`;var jh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qf=ie.createContext&&ie.createContext(jh),xx=["attr","size","title"];function wx(e,t){if(e==null)return{};var n=kx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kx(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}function Kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function da(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kf(Object(n),!0).forEach(function(r){Sx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sx(e,t,n){return t=Cx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cx(e){var t=Ex(e,"string");return typeof t=="symbol"?t:t+""}function Ex(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nh(e){return e&&e.map((t,n)=>ie.createElement(t.tag,da({key:n},t.attr),Nh(t.child)))}function Nt(e){return t=>ie.createElement(bx,fa({attr:da({},e.attr)},t),Nh(e.child))}function bx(e){var t=n=>{var{attr:r,size:o,title:i}=e,a=wx(e,xx),l=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ie.createElement("svg",fa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:da(da({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&ie.createElement("title",null,i),e.children)};return Qf!==void 0?ie.createElement(Qf.Consumer,null,n=>t(n)):t(jh)}function Px(e){return Nt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function _x(e){return Nt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function jx(e){return Nt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(e)}function Nx(e){return Nt({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function Ox(e){return Nt({tag:"svg",attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"},child:[]}]})(e)}function Tx(e){return Nt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}const ic=jt`
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Ix=O.section`
  padding: 100px;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1em;
  }
`;O.div`
  font-size: 4em;
  text-align: left;
  font-weight: bold;
  background: linear-gradient(to bottom, var(--greenFull1), var(--greenFull3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${ic} 1s ease-in-out;

  @media (max-width: 568px) {
    font-size: 3em;
  }
`;O.div`
  width: 60%;
  height: 2px;
  background-color: #ccc;
  margin: 20px 0;
  animation: ${ic} 1s ease-in-out;
`;const zx=O.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  animation: ${ic} 1s ease-in-out;
  width: 90%;
  @media (max-width: 1096px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`,Ni=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  transition: transform 0.3s;
  backdrop-filter: blur(3px) saturate(200%);
  -webkit-backdrop-filter: blur(3px) saturate(200%);
  background-color: rgba(17, 25, 40, 0.58);
  &:hover {
    transform: translateY(-1px);
  }

  & p {
    color: var(--silverFull7);
    font-size: 1rem;
    text-align: center;
  }
`,bl=O.div`
  font-size: 4rem; 
  color: var(--greenFull1);
  margin-bottom: 1rem;
  transition: color 0.3s ease-in-out;

  ${Ni}:hover & {
    color: var(--greenFull5);
  }
`;O.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;

  a {
    font-size: 1.4em;
    text-decoration: none;
    font-family: "child", sans-serif;
    transition: 0.7s;
    font-weight: bold;
    color: var(--greenFull1);
  }
  a:hover {
    letter-spacing: 2px;
  }

  :last-child > img {
    width: 60px;
    transition: 0.4s;
  }

  :last-child > img:hover {
    transform: scale(1.2);
  }
`;const Lx=()=>g.jsx(Ix,{children:g.jsxs(zx,{children:[g.jsxs(Ni,{children:[g.jsx(bl,{children:g.jsx(Ox,{})}),g.jsx("p",{children:"Precio accesible y acorde"})]}),g.jsxs(Ni,{children:[g.jsx(bl,{children:g.jsx(Nx,{})}),g.jsx("p",{children:"Rapidez, eficacia y calidad"})]}),g.jsxs(Ni,{children:[g.jsx(bl,{children:g.jsx(Tx,{})}),g.jsx("p",{children:"Garantía"})]})]})}),Ax=O.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  padding: 80px 20px;
  min-height: 100vh;
  margin-top: 20px;
  @media (max-width: 768px) {
    padding: 50px 15px;
  }
`,Rx=O.h2`
  font-size: 42px;
  color: var(--greenFull1);
  margin-bottom: 40px;
  position: relative;
  text-align: center;
  width: 100%;
  &::after {
    content: "";
    display: block;
    width: 30%;
    right: 0;
    height: 3px;
    background-color: var(--greenFull6);
    margin: 10px auto 0;
  }
`,Fx=O.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 40px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`,Mx=O.div`
  flex: 1;
  padding-right: 20px;

  h3 {
    font-size: 28px;
    color: #555;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #666;
    line-height: 2;
    margin-bottom: 15px;
  }

  p > strong {
    font-family: "Dancing Script", cursive;
    background: #17202a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`,$x=O.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  overflow: hidden;
  margin: 0 auto;

  @media(max-width: 568px){
  width: 100%;
  }
`,Dx=O.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 1s ease, transform 1s ease;
  transform: scale(1.05);

  &:hover {
    transform: scale(1.08);
  }
`,Xf=O.span`
  color: var(--greenFull4);
  font-weight: 500;
`,Ux="/assets/aboutUsImg-CuTJWyMK.jpeg",Bx="/assets/aboutUsImg2-fAS0eEgn.jpeg",Wx="/assets/aboutUsImg3-D6AgMxTz.webp",Zf=[Ux,Bx,Wx],Oh=()=>{const[e,t]=E.useState(0);Fo(),E.useEffect(()=>{const r=setInterval(()=>{t(o=>o===Zf.length-1?0:o+1)},3e3);return()=>clearInterval(r)},[]);const n=()=>{window.open("https://wa.me/5491158227373","_blank")};return g.jsxs(Ax,{children:[g.jsx(Rx,{children:"Sobre Nosotros"}),g.jsxs(Fx,{children:[g.jsxs(Mx,{children:[g.jsxs("h3",{children:["Descubre ",g.jsx(Xf,{children:"quiénes somos"})," y nuestra pasión."]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Chulos design"})," nace a partir de la pasión por materializar y darle vida a proyectos que viven en nuestra imaginación. Somos una empresa familiar dedicada al diseño de interiores, trabajamos con una amplia diversidad de materiales como maderas enchapadas, maderas macizas, hierros estructurales, entre otros."," ",g.jsx(Xf,{children:"Realizamos diseños personalizados"})," ","acompañando a nuestros clientes a concretar sus proyectos."]})]}),g.jsx($x,{children:g.jsx(Dx,{src:Zf[e],alt:`Imagen ${e+1}`})})]}),g.jsx(Ua,{content:"Info",work:n})]})};class Do{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const Vx=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},de={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Vx()},ac=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Hx=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=ac(e);de.publicKey=n.publicKey,de.blockHeadless=n.blockHeadless,de.storageProvider=n.storageProvider,de.blockList=n.blockList,de.limitRate=n.limitRate,de.origin=n.origin||t},Th=async(e,t,n={})=>{const r=await fetch(de.origin+e,{method:"POST",headers:n,body:t}),o=await r.text(),i=new Do(r.status,o);if(r.ok)return i;throw i},Ih=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Yx=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},zh=e=>e.webdriver||!e.languages||e.languages.length===0,Lh=()=>new Do(451,"Unavailable For Headless Browser"),Gx=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Qx=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Kx=(e,t)=>e instanceof FormData?e.get(t):e[t],Ah=(e,t)=>{if(Qx(e))return!1;Gx(e.list,e.watchVariable);const n=Kx(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},Rh=()=>new Do(403,"Forbidden"),Xx=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Zx=async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r},Fh=async(e,t,n)=>{if(!t.throttle||!n)return!1;Xx(t.throttle,t.id);const r=t.id||e;return await Zx(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},Mh=()=>new Do(429,"Too Many Requests"),qx=async(e,t,n,r)=>{const o=ac(r),i=o.publicKey||de.publicKey,a=o.blockHeadless||de.blockHeadless,l=o.storageProvider||de.storageProvider,s={...de.blockList,...o.blockList},u={...de.limitRate,...o.limitRate};return a&&zh(navigator)?Promise.reject(Lh()):(Ih(i,e,t),Yx(n),n&&Ah(s,n)?Promise.reject(Rh()):await Fh(location.pathname,u,l)?Promise.reject(Mh()):Th("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},Jx=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},e2=e=>typeof e=="string"?document.querySelector(e):e,t2=async(e,t,n,r)=>{const o=ac(r),i=o.publicKey||de.publicKey,a=o.blockHeadless||de.blockHeadless,l=de.storageProvider||o.storageProvider,s={...de.blockList,...o.blockList},u={...de.limitRate,...o.limitRate};if(a&&zh(navigator))return Promise.reject(Lh());const f=e2(n);Ih(i,e,t),Jx(f);const p=new FormData(f);return Ah(s,p)?Promise.reject(Rh()):await Fh(location.pathname,u,l)?Promise.reject(Mh()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",i),Th("/api/v1.0/email/send-form",p))},n2={init:Hx,send:qx,sendForm:t2,EmailJSResponseStatus:Do},r2=O.div`
  margin-top: 100px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;

`,o2=O.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 300px;
  border-radius: 5px;
  background-image: url(${e=>e.$bckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-attachment: center;
    width: 100%;
    paddign: 1em;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  h2 {
    color: var(--greenFull5);
    position: relative;
    z-index: 2;
  }
`,i2=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  z-index: 2;

  a,
  p {
    margin: 0;
    color: white;
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    color: var(--greenFull3);
  }

  svg {
    margin-right: .4em;
    color: var(--greenFull7);
  }
`,a2=O.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  z-index: 2;
  a {
    text-decoration: none;
    color: var(--greenFull5);
    font-size: 1.5rem;
    text-shadow: 0 0 3px black;

    &:hover {
      color: var(--silverFull7);
      text-shadow: 0 0 3px black;
    }
  }
`,Pl=O.div`
  margin-bottom: 15px;
  width: 350px;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 668px) {
    width: 100%;
  }

  div {
    position: relative;

    input {
      width: 100%;
      color: black;
      font-size: inherit;
      font-family: inherit;
      background-color: transparent;
      padding: 0.35em 0.45em;
      border: 1px solid var(--silverFull3);
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: black;
      font-weight: 300;
    }

    span {
      position: absolute;
      background-color: var(--greenFull4);
      transition: transform 0.5s ease;
    }

    .bottom,
    .top {
      height: 2px;
      left: 0;
      right: 0;
      transform: scaleX(0);
    }

    .left,
    .right {
      width: 2px;
      top: 0;
      bottom: 0;
      transform: scaleY(0);
    }

    .bottom {
      bottom: 0;
      transform-origin: bottom right;
    }

    input:focus ~ .bottom {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    .right {
      right: 0;
      transform-origin: top right;
    }

    input:focus ~ .right {
      transform-origin: bottom right;
      transform: scaleY(1);
    }

    .top {
      top: 0;
      transform-origin: top left;
    }

    input:focus ~ .top {
      transform-origin: top right;
      transform: scaleX(1);
    }

    .left {
      left: 0;
      transform-origin: bottom left;
    }

    input:focus ~ .left {
      transform-origin: top left;
      transform: scaleY(1);
    }
  }
`,_l=O.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--greenFull1);
`,qf=()=>{};let lc={},$h={},Dh=null,Uh={mark:qf,measure:qf};try{typeof window<"u"&&(lc=window),typeof document<"u"&&($h=document),typeof MutationObserver<"u"&&(Dh=MutationObserver),typeof performance<"u"&&(Uh=performance)}catch{}const{userAgent:Jf=""}=lc.navigator||{},rn=lc,Q=$h,ed=Dh,ci=Uh;rn.document;const Ot=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Bh=~Jf.indexOf("MSIE")||~Jf.indexOf("Trident/");var X="classic",Wh="duotone",Ae="sharp",Re="sharp-duotone",l2=[X,Wh,Ae,Re],s2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},td={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},u2=["kit"],c2=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,f2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,d2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},p2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},m2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},h2={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},g2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},v2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Vh={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},y2=["solid","regular","light","thin","duotone","brands"],Hh=[1,2,3,4,5,6,7,8,9,10],x2=Hh.concat([11,12,13,14,15,16,17,18,19,20]),Qr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w2=[...Object.keys(h2),...y2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qr.GROUP,Qr.SWAP_OPACITY,Qr.PRIMARY,Qr.SECONDARY].concat(Hh.map(e=>"".concat(e,"x"))).concat(x2.map(e=>"w-".concat(e))),k2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},S2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},C2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},nd={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const bt="___FONT_AWESOME___",Ds=16,Yh="fa",Gh="svg-inline--fa",Ln="data-fa-i2svg",Us="data-fa-pseudo-element",E2="data-fa-pseudo-element-pending",sc="data-prefix",uc="data-icon",rd="fontawesome-i2svg",b2="async",P2=["HTML","HEAD","STYLE","SCRIPT"],Qh=(()=>{try{return!0}catch{return!1}})(),Kh=[X,Ae,Re];function Uo(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[X]}})}const Xh={...Vh};Xh[X]={...Vh[X],...td.kit,...td["kit-duotone"]};const Pn=Uo(Xh),Bs={...v2};Bs[X]={...Bs[X],...nd.kit,...nd["kit-duotone"]};const No=Uo(Bs),Ws={...g2};Ws[X]={...Ws[X],...C2.kit};const _n=Uo(Ws),Vs={...m2};Vs[X]={...Vs[X],...S2.kit};const _2=Uo(Vs),j2=c2,Zh="fa-layers-text",N2=f2,O2={...s2};Uo(O2);const T2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jl=Qr,br=new Set;Object.keys(No[X]).map(br.add.bind(br));Object.keys(No[Ae]).map(br.add.bind(br));Object.keys(No[Re]).map(br.add.bind(br));const I2=[...u2,...w2],ao=rn.FontAwesomeConfig||{};function z2(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function L2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}Q&&typeof Q.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const o=L2(z2(n));o!=null&&(ao[r]=o)});const qh={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yh,replacementClass:Gh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ao.familyPrefix&&(ao.cssPrefix=ao.familyPrefix);const Pr={...qh,...ao};Pr.autoReplaceSvg||(Pr.observeMutations=!1);const T={};Object.keys(qh).forEach(e=>{Object.defineProperty(T,e,{enumerable:!0,set:function(t){Pr[e]=t,lo.forEach(n=>n(T))},get:function(){return Pr[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(e){Pr.cssPrefix=e,lo.forEach(t=>t(T))},get:function(){return Pr.cssPrefix}});rn.FontAwesomeConfig=T;const lo=[];function A2(e){return lo.push(e),()=>{lo.splice(lo.indexOf(e),1)}}const Lt=Ds,ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function R2(e){if(!e||!Ot)return;const t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=Q.head.childNodes;let r=null;for(let o=n.length-1;o>-1;o--){const i=n[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return Q.head.insertBefore(t,r),e}const F2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oo(){let e=12,t="";for(;e-- >0;)t+=F2[Math.random()*62|0];return t}function Ir(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function cc(e){return e.classList?Ir(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Jh(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M2(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Jh(e[n]),'" '),"").trim()}function Ba(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function fc(e){return e.size!==ut.size||e.x!==ut.x||e.y!==ut.y||e.rotate!==ut.rotate||e.flipX||e.flipY}function $2(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(a," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:s,path:u}}function D2(e){let{transform:t,width:n=Ds,height:r=Ds,startCentered:o=!1}=e,i="";return o&&Bh?i+="translate(".concat(t.x/Lt-n/2,"em, ").concat(t.y/Lt-r/2,"em) "):o?i+="translate(calc(-50% + ".concat(t.x/Lt,"em), calc(-50% + ").concat(t.y/Lt,"em)) "):i+="translate(".concat(t.x/Lt,"em, ").concat(t.y/Lt,"em) "),i+="scale(".concat(t.size/Lt*(t.flipX?-1:1),", ").concat(t.size/Lt*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var U2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function e1(){const e=Yh,t=Gh,n=T.cssPrefix,r=T.replacementClass;let o=U2;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return o}let od=!1;function Nl(){T.autoAddCss&&!od&&(R2(e1()),od=!0)}var B2={mixout(){return{dom:{css:e1,insertCss:Nl}}},hooks(){return{beforeDOMElementCreation(){Nl()},beforeI2svg(){Nl()}}}};const Pt=rn||{};Pt[bt]||(Pt[bt]={});Pt[bt].styles||(Pt[bt].styles={});Pt[bt].hooks||(Pt[bt].hooks={});Pt[bt].shims||(Pt[bt].shims=[]);var ct=Pt[bt];const t1=[],n1=function(){Q.removeEventListener("DOMContentLoaded",n1),pa=1,t1.map(e=>e())};let pa=!1;Ot&&(pa=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),pa||Q.addEventListener("DOMContentLoaded",n1));function W2(e){Ot&&(pa?setTimeout(e,0):t1.push(e))}function Bo(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Jh(e):"<".concat(t," ").concat(M2(n),">").concat(r.map(Bo).join(""),"</").concat(t,">")}function id(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ol=function(t,n,r,o){var i=Object.keys(t),a=i.length,l=n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<a;s++)u=i[s],f=l(f,t[u],u,t);return f};function V2(e){const t=[];let n=0;const r=e.length;for(;n<r;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function Hs(e){const t=V2(e);return t.length===1?t[0].toString(16):null}function H2(e,t){const n=e.length;let r=e.charCodeAt(t),o;return r>=55296&&r<=56319&&n>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function ad(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ys(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,o=ad(t);typeof ct.hooks.addPack=="function"&&!r?ct.hooks.addPack(e,ad(t)):ct.styles[e]={...ct.styles[e]||{},...o},e==="fas"&&Ys("fa",t)}const{styles:yn,shims:Y2}=ct,G2={[X]:Object.values(_n[X]),[Ae]:Object.values(_n[Ae]),[Re]:Object.values(_n[Re])};let dc=null,r1={},o1={},i1={},a1={},l1={};const Q2={[X]:Object.keys(Pn[X]),[Ae]:Object.keys(Pn[Ae]),[Re]:Object.keys(Pn[Re])};function K2(e){return~I2.indexOf(e)}function X2(e,t){const n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r===e&&o!==""&&!K2(o)?o:null}const s1=()=>{const e=r=>Ol(yn,(o,i,a)=>(o[a]=Ol(i,r,{}),o),{});r1=e((r,o,i)=>(o[3]&&(r[o[3]]=i),o[2]&&o[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),o1=e((r,o,i)=>(r[i]=i,o[2]&&o[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),l1=e((r,o,i)=>{const a=o[2];return r[i]=i,a.forEach(l=>{r[l]=i}),r});const t="far"in yn||T.autoFetchSvg,n=Ol(Y2,(r,o)=>{const i=o[0];let a=o[1];const l=o[2];return a==="far"&&!t&&(a="fas"),typeof i=="string"&&(r.names[i]={prefix:a,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});i1=n.names,a1=n.unicodes,dc=Wa(T.styleDefault,{family:T.familyDefault})};A2(e=>{dc=Wa(e.styleDefault,{family:T.familyDefault})});s1();function pc(e,t){return(r1[e]||{})[t]}function Z2(e,t){return(o1[e]||{})[t]}function Vt(e,t){return(l1[e]||{})[t]}function u1(e){return i1[e]||{prefix:null,iconName:null}}function q2(e){const t=a1[e],n=pc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function on(){return dc}const mc=()=>({prefix:null,iconName:null,rest:[]});function Wa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=X}=t,r=Pn[n][e],o=No[n][e]||No[n][r],i=e in ct.styles?e:null;return o||i||null}const J2={[X]:Object.keys(_n[X]),[Ae]:Object.keys(_n[Ae]),[Re]:Object.keys(_n[Re])};function Va(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[X]:"".concat(T.cssPrefix,"-").concat(X),[Ae]:"".concat(T.cssPrefix,"-").concat(Ae),[Re]:"".concat(T.cssPrefix,"-").concat(Re)};let o=null,i=X;const a=l2.filter(s=>s!==Wh);a.forEach(s=>{(e.includes(r[s])||e.some(u=>J2[s].includes(u)))&&(i=s)});const l=e.reduce((s,u)=>{const f=X2(T.cssPrefix,u);if(yn[u]?(u=G2[i].includes(u)?_2[i][u]:u,o=u,s.prefix=u):Q2[i].indexOf(u)>-1?(o=u,s.prefix=Wa(u,{family:i})):f?s.iconName=f:u!==T.replacementClass&&!a.some(p=>u===r[p])&&s.rest.push(u),!n&&s.prefix&&s.iconName){const p=o==="fa"?u1(s.iconName):{},h=Vt(s.prefix,s.iconName);p.prefix&&(o=null),s.iconName=p.iconName||h||s.iconName,s.prefix=p.prefix||s.prefix,s.prefix==="far"&&!yn.far&&yn.fas&&!T.autoFetchSvg&&(s.prefix="fas")}return s},mc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===Ae&&(yn.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=Vt(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===Re&&(yn.fasds||T.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Vt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=on()||"fas"),l}class ew{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...o[i]},Ys(i,o[i]);const a=_n[X][i];a&&Ys(a,o[i]),s1()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(o=>{const{prefix:i,iconName:a,icon:l}=r[o],s=l[2];t[i]||(t[i]={}),s.length>0&&s.forEach(u=>{typeof u=="string"&&(t[i][u]=l)}),t[i][a]=l}),t}}let ld=[],nr={};const cr={},tw=Object.keys(cr);function nw(e,t){let{mixoutsTo:n}=t;return ld=e,nr={},Object.keys(cr).forEach(r=>{tw.indexOf(r)===-1&&delete cr[r]}),ld.forEach(r=>{const o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(i=>{typeof o[i]=="function"&&(n[i]=o[i]),typeof o[i]=="object"&&Object.keys(o[i]).forEach(a=>{n[i]||(n[i]={}),n[i][a]=o[i][a]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(a=>{nr[a]||(nr[a]=[]),nr[a].push(i[a])})}r.provides&&r.provides(cr)}),n}function Gs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return(nr[e]||[]).forEach(a=>{t=a.apply(null,[t,...r])}),t}function An(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(nr[e]||[]).forEach(i=>{i.apply(null,n)})}function an(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return cr[e]?cr[e].apply(null,t):void 0}function Qs(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||on();if(t)return t=Vt(n,t)||t,id(c1.definitions,n,t)||id(ct.styles,n,t)}const c1=new ew,rw=()=>{T.autoReplaceSvg=!1,T.observeMutations=!1,An("noAuto")},ow={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ot?(An("beforeI2svg",e),an("pseudoElements2svg",e),an("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,W2(()=>{aw({autoReplaceSvgRoot:t}),An("watch",e)})}},iw={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Vt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Wa(e[0]);return{prefix:n,iconName:Vt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(T.cssPrefix,"-"))>-1||e.match(j2))){const t=Va(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||on(),iconName:Vt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=on();return{prefix:t,iconName:Vt(t,e)||e}}}},De={noAuto:rw,config:T,dom:ow,parse:iw,library:c1,findIconDefinition:Qs,toHtml:Bo},aw=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=Q}=e;(Object.keys(ct.styles).length>0||T.autoFetchSvg)&&Ot&&T.autoReplaceSvg&&De.dom.i2svg({node:t})};function Ha(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Bo(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ot)return;const n=Q.createElement("div");return n.innerHTML=e.html,n.children}}),e}function lw(e){let{children:t,main:n,mask:r,attributes:o,styles:i,transform:a}=e;if(fc(a)&&n.found&&!r.found){const{width:l,height:s}=n,u={x:l/s/2,y:.5};o.style=Ba({...i,"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")})}return[{tag:"svg",attributes:o,children:t}]}function sw(e){let{prefix:t,iconName:n,children:r,attributes:o,symbol:i}=e;const a=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...o,id:a},children:r}]}]}function hc(e){const{icons:{main:t,mask:n},prefix:r,iconName:o,transform:i,symbol:a,title:l,maskId:s,titleId:u,extra:f,watchable:p=!1}=e,{width:h,height:y}=n.found?n:t,x=r==="fak",w=[T.replacementClass,o?"".concat(T.cssPrefix,"-").concat(o):""].filter(S=>f.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(f.classes).join(" ");let k={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":o,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(y)}};const d=x&&!~f.classes.indexOf("fa-fw")?{width:"".concat(h/y*16*.0625,"em")}:{};p&&(k.attributes[Ln]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||Oo())},children:[l]}),delete k.attributes.title);const c={...k,prefix:r,iconName:o,main:t,mask:n,maskId:s,transform:i,symbol:a,styles:{...d,...f.styles}},{children:m,attributes:v}=n.found&&t.found?an("generateAbstractMask",c)||{children:[],attributes:{}}:an("generateAbstractIcon",c)||{children:[],attributes:{}};return c.children=m,c.attributes=v,a?sw(c):lw(c)}function sd(e){const{content:t,width:n,height:r,transform:o,title:i,extra:a,watchable:l=!1}=e,s={...a.attributes,...i?{title:i}:{},class:a.classes.join(" ")};l&&(s[Ln]="");const u={...a.styles};fc(o)&&(u.transform=D2({transform:o,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=Ba(u);f.length>0&&(s.style=f);const p=[];return p.push({tag:"span",attributes:s,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function uw(e){const{content:t,title:n,extra:r}=e,o={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Ba(r.styles);i.length>0&&(o.style=i);const a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:Tl}=ct;function Ks(e){const t=e[0],n=e[1],[r]=e.slice(4);let o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(jl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(jl.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(jl.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:o}}const cw={found:!1,width:512,height:512};function fw(e,t){!Qh&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xs(e,t){let n=t;return t==="fa"&&T.styleDefault!==null&&(t=on()),new Promise((r,o)=>{if(n==="fa"){const i=u1(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Tl[t]&&Tl[t][e]){const i=Tl[t][e];return r(Ks(i))}fw(e,t),r({...cw,icon:T.showMissingIcons&&e?an("missingIconAbstract")||{}:{}})})}const ud=()=>{},Zs=T.measurePerformance&&ci&&ci.mark&&ci.measure?ci:{mark:ud,measure:ud},Kr='FA "6.6.0"',dw=e=>(Zs.mark("".concat(Kr," ").concat(e," begins")),()=>f1(e)),f1=e=>{Zs.mark("".concat(Kr," ").concat(e," ends")),Zs.measure("".concat(Kr," ").concat(e),"".concat(Kr," ").concat(e," begins"),"".concat(Kr," ").concat(e," ends"))};var gc={begin:dw,end:f1};const Oi=()=>{};function cd(e){return typeof(e.getAttribute?e.getAttribute(Ln):null)=="string"}function pw(e){const t=e.getAttribute?e.getAttribute(sc):null,n=e.getAttribute?e.getAttribute(uc):null;return t&&n}function mw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function hw(){return T.autoReplaceSvg===!0?Ti.replace:Ti[T.autoReplaceSvg]||Ti.replace}function gw(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function vw(e){return Q.createElement(e)}function d1(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?gw:vw}=t;if(typeof e=="string")return Q.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(d1(i,{ceFn:n}))}),r}function yw(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ti={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(d1(n),t)}),t.getAttribute(Ln)===null&&T.keepOriginalSource){let n=Q.createComment(yw(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~cc(t).indexOf(T.replacementClass))return Ti.replace(e);const r=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((a,l)=>(l===T.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const o=n.map(i=>Bo(i)).join(`
`);t.setAttribute(Ln,""),t.innerHTML=o}};function fd(e){e()}function p1(e,t){const n=typeof t=="function"?t:Oi;if(e.length===0)n();else{let r=fd;T.mutateApproach===b2&&(r=rn.requestAnimationFrame||fd),r(()=>{const o=hw(),i=gc.begin("mutate");e.map(o),i(),n()})}}let vc=!1;function m1(){vc=!0}function qs(){vc=!1}let ma=null;function dd(e){if(!ed||!T.observeMutations)return;const{treeCallback:t=Oi,nodeCallback:n=Oi,pseudoElementsCallback:r=Oi,observeMutationsRoot:o=Q}=e;ma=new ed(i=>{if(vc)return;const a=on();Ir(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!cd(l.addedNodes[0])&&(T.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&T.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&cd(l.target)&&~T2.indexOf(l.attributeName))if(l.attributeName==="class"&&pw(l.target)){const{prefix:s,iconName:u}=Va(cc(l.target));l.target.setAttribute(sc,s||a),u&&l.target.setAttribute(uc,u)}else mw(l.target)&&n(l.target)})}),Ot&&ma.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function xw(){ma&&ma.disconnect()}function ww(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,o)=>{const i=o.split(":"),a=i[0],l=i.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function kw(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let o=Va(cc(e));return o.prefix||(o.prefix=on()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=Z2(o.prefix,e.innerText)||pc(o.prefix,Hs(e.innerText))),!o.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function Sw(e){const t=Ir(e.attributes).reduce((o,i)=>(o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Oo()):(t["aria-hidden"]="true",t.focusable="false")),t}function Cw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pd(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:o}=kw(e),i=Sw(e),a=Gs("parseNodeAttributes",{},e);let l=t.styleParser?ww(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i},...a}}const{styles:Ew}=ct;function h1(e){const t=T.autoReplaceSvg==="nest"?pd(e,{styleParser:!1}):pd(e);return~t.extra.classes.indexOf(Zh)?an("generateLayersText",e,t):an("generateSvgReplacementMutation",e,t)}let pt=new Set;Kh.map(e=>{pt.add("fa-".concat(e))});Object.keys(Pn[X]).map(pt.add.bind(pt));Object.keys(Pn[Ae]).map(pt.add.bind(pt));Object.keys(Pn[Re]).map(pt.add.bind(pt));pt=[...pt];function md(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ot)return Promise.resolve();const n=Q.documentElement.classList,r=f=>n.add("".concat(rd,"-").concat(f)),o=f=>n.remove("".concat(rd,"-").concat(f)),i=T.autoFetchSvg?pt:Kh.map(f=>"fa-".concat(f)).concat(Object.keys(Ew));i.includes("fa")||i.push("fa");const a=[".".concat(Zh,":not([").concat(Ln,"])")].concat(i.map(f=>".".concat(f,":not([").concat(Ln,"])"))).join(", ");if(a.length===0)return Promise.resolve();let l=[];try{l=Ir(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),o("complete");else return Promise.resolve();const s=gc.begin("onTree"),u=l.reduce((f,p)=>{try{const h=h1(p);h&&f.push(h)}catch(h){Qh||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise((f,p)=>{Promise.all(u).then(h=>{p1(h,()=>{r("active"),r("complete"),o("pending"),typeof t=="function"&&t(),s(),f()})}).catch(h=>{s(),p(h)})})}function bw(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;h1(e).then(n=>{n&&p1([n],t)})}function Pw(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Qs(t||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:Qs(o||{})),e(r,{...n,mask:o})}}const _w=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ut,symbol:r=!1,mask:o=null,maskId:i=null,title:a=null,titleId:l=null,classes:s=[],attributes:u={},styles:f={}}=t;if(!e)return;const{prefix:p,iconName:h,icon:y}=e;return Ha({type:"icon",...e},()=>(An("beforeDOMElementCreation",{iconDefinition:e,params:t}),T.autoA11y&&(a?u["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(l||Oo()):(u["aria-hidden"]="true",u.focusable="false")),hc({icons:{main:Ks(y),mask:o?Ks(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:{...ut,...n},symbol:r,title:a,maskId:i,titleId:l,extra:{attributes:u,styles:f,classes:s}})))};var jw={mixout(){return{icon:Pw(_w)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=md,e.nodeCallback=bw,e}}},provides(e){e.i2svg=function(t){const{node:n=Q,callback:r=()=>{}}=t;return md(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:o,titleId:i,prefix:a,transform:l,symbol:s,mask:u,maskId:f,extra:p}=n;return new Promise((h,y)=>{Promise.all([Xs(r,a),u.iconName?Xs(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[w,k]=x;h([t,hc({icons:{main:w,mask:k},prefix:a,iconName:r,transform:l,symbol:s,maskId:f,title:o,titleId:i,extra:p,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:o,transform:i,styles:a}=t;const l=Ba(a);l.length>0&&(r.style=l);let s;return fc(i)&&(s=an("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),n.push(s||o.icon),{children:n,attributes:r}}}},Nw={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ha({type:"layer"},()=>{An("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(o=>{Array.isArray(o)?o.map(i=>{r=r.concat(i.abstract)}):r=r.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ow={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:o={},styles:i={}}=t;return Ha({type:"counter",content:e},()=>(An("beforeDOMElementCreation",{content:e,params:t}),uw({content:e.toString(),title:n,extra:{attributes:o,styles:i,classes:["".concat(T.cssPrefix,"-layers-counter"),...r]}})))}}}},Tw={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ut,title:r=null,classes:o=[],attributes:i={},styles:a={}}=t;return Ha({type:"text",content:e},()=>(An("beforeDOMElementCreation",{content:e,params:t}),sd({content:e,transform:{...ut,...n},title:r,extra:{attributes:i,styles:a,classes:["".concat(T.cssPrefix,"-layers-text"),...o]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:o,extra:i}=n;let a=null,l=null;if(Bh){const s=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();a=u.width/s,l=u.height/s}return T.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,sd({content:t.innerHTML,width:a,height:l,transform:o,title:r,extra:i,watchable:!0})])}}};const Iw=new RegExp('"',"ug"),hd=[1105920,1112319],gd={FontAwesome:{normal:"fas",400:"fas"},...p2,...d2,...k2},Js=Object.keys(gd).reduce((e,t)=>(e[t.toLowerCase()]=gd[t],e),{}),zw=Object.keys(Js).reduce((e,t)=>{const n=Js[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Lw(e){const t=e.replace(Iw,""),n=H2(t,0),r=n>=hd[0]&&n<=hd[1],o=t.length===2?t[0]===t[1]:!1;return{value:Hs(o?t[0]:t),isSecondary:r||o}}function Aw(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),o=isNaN(r)?"normal":r;return(Js[n]||{})[o]||zw[n]}function vd(e,t){const n="".concat(E2).concat(t.replace(":","-"));return new Promise((r,o)=>{if(e.getAttribute(n)!==null)return r();const a=Ir(e.children).filter(h=>h.getAttribute(Us)===t)[0],l=rn.getComputedStyle(e,t),s=l.getPropertyValue("font-family"),u=s.match(N2),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(a&&!u)return e.removeChild(a),r();if(u&&p!=="none"&&p!==""){const h=l.getPropertyValue("content");let y=Aw(s,f);const{value:x,isSecondary:w}=Lw(h),k=u[0].startsWith("FontAwesome");let d=pc(y,x),c=d;if(k){const m=q2(x);m.iconName&&m.prefix&&(d=m.iconName,y=m.prefix)}if(d&&!w&&(!a||a.getAttribute(sc)!==y||a.getAttribute(uc)!==c)){e.setAttribute(n,c),a&&e.removeChild(a);const m=Cw(),{extra:v}=m;v.attributes[Us]=t,Xs(d,y).then(S=>{const b=hc({...m,icons:{main:S,mask:mc()},prefix:y,iconName:c,extra:v,watchable:!0}),C=Q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=b.map(N=>Bo(N)).join(`
`),e.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function Rw(e){return Promise.all([vd(e,"::before"),vd(e,"::after")])}function Fw(e){return e.parentNode!==document.head&&!~P2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Us)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function yd(e){if(Ot)return new Promise((t,n)=>{const r=Ir(e.querySelectorAll("*")).filter(Fw).map(Rw),o=gc.begin("searchPseudoElements");m1(),Promise.all(r).then(()=>{o(),qs(),t()}).catch(()=>{o(),qs(),n()})})}var Mw={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=yd,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=Q}=t;T.searchPseudoElements&&yd(n)}}};let xd=!1;var $w={mixout(){return{dom:{unwatch(){m1(),xd=!0}}}},hooks(){return{bootstrap(){dd(Gs("mutationObserverCallbacks",{}))},noAuto(){xw()},watch(e){const{observeMutationsRoot:t}=e;xd?qs():dd(Gs("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const wd=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const o=r.toLowerCase().split("-"),i=o[0];let a=o.slice(1).join("-");if(i&&a==="h")return n.flipX=!0,n;if(i&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(i){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},t)};var Dw={mixout(){return{parse:{transform:e=>wd(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=wd(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:o,iconWidth:i}=t;const a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(s," ").concat(u)},p={transform:"translate(".concat(i/2*-1," -256)")},h={outer:a,inner:f,path:p};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const Il={x:0,y:0,width:"100%",height:"100%"};function kd(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Uw(e){return e.tag==="g"?e.children:[e]}var Bw={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Va(n.split(" ").map(o=>o.trim())):mc();return r.prefix||(r.prefix=on()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:o,mask:i,maskId:a,transform:l}=t;const{width:s,icon:u}=o,{width:f,icon:p}=i,h=$2({transform:l,containerWidth:f,iconWidth:s}),y={tag:"rect",attributes:{...Il,fill:"white"}},x=u.children?{children:u.children.map(kd)}:{},w={tag:"g",attributes:{...h.inner},children:[kd({tag:u.tag,attributes:{...u.attributes,...h.path},...x})]},k={tag:"g",attributes:{...h.outer},children:[w]},d="mask-".concat(a||Oo()),c="clip-".concat(a||Oo()),m={tag:"mask",attributes:{...Il,id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[y,k]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:c},children:Uw(p)},m]};return n.push(v,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(c,")"),mask:"url(#".concat(d,")"),...Il}}),{children:n,attributes:r}}}},Ww={provides(e){let t=!1;rn.matchMedia&&(t=rn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...o,attributeName:"opacity"},a={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||a.children.push({tag:"animate",attributes:{...o,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(a),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Vw={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Hw=[B2,jw,Nw,Ow,Tw,Mw,$w,Dw,Bw,Ww,Vw];nw(Hw,{mixoutsTo:De});De.noAuto;De.config;De.library;De.dom;const eu=De.parse;De.findIconDefinition;De.toHtml;const Yw=De.icon;De.layer;De.text;De.counter;var g1={exports:{}},Gw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qw=Gw,Kw=Qw;function v1(){}function y1(){}y1.resetWarningCache=v1;var Xw=function(){function e(r,o,i,a,l,s){if(s!==Kw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y1,resetWarningCache:v1};return n.PropTypes=n,n};g1.exports=Xw();var Zw=g1.exports;const R=Td(Zw);function Sd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sd(Object(n),!0).forEach(function(r){rr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ha(e){"@babel/helpers - typeof";return ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ha(e)}function rr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Jw(e,t){if(e==null)return{};var n=qw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tu(e){return ek(e)||tk(e)||nk(e)||rk()}function ek(e){if(Array.isArray(e))return nu(e)}function tk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nk(e,t){if(e){if(typeof e=="string")return nu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nu(e,t)}}function nu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ok(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,p=e.pulse,h=e.fixedWidth,y=e.inverse,x=e.border,w=e.listItem,k=e.flip,d=e.size,c=e.rotation,m=e.pull,v=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":h,"fa-inverse":y,"fa-border":x,"fa-li":w,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},rr(t,"fa-".concat(d),typeof d<"u"&&d!==null),rr(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),rr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),rr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map(function(S){return v[S]?S:null}).filter(function(S){return S})}function ik(e){return e=e-0,e===e}function x1(e){return ik(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ak=["style"];function lk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function sk(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),o=x1(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?t[lk(o)]=i:t[o]=i,t},{})}function w1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return w1(e,s)}),o=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=sk(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[x1(u)]=f}return s},{attrs:{}}),i=n.style,a=i===void 0?{}:i,l=Jw(n,ak);return o.attrs.style=lt(lt({},o.attrs.style),a),e.apply(void 0,[t.tag,lt(lt({},o.attrs),l)].concat(tu(r)))}var k1=!1;try{k1=!0}catch{}function uk(){if(!k1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Cd(e){if(e&&ha(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(eu.icon)return eu.icon(e);if(e===null)return null;if(e&&ha(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function zl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?rr({},e,t):{}}var Ed={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Dt=ie.forwardRef(function(e,t){var n=lt(lt({},Ed),e),r=n.icon,o=n.mask,i=n.symbol,a=n.className,l=n.title,s=n.titleId,u=n.maskId,f=Cd(r),p=zl("classes",[].concat(tu(ok(n)),tu((a||"").split(" ")))),h=zl("transform",typeof n.transform=="string"?eu.transform(n.transform):n.transform),y=zl("mask",Cd(o)),x=Yw(f,lt(lt(lt(lt({},p),h),y),{},{symbol:i,title:l,titleId:s,maskId:u}));if(!x)return uk("Could not find icon",f),null;var w=x.abstract,k={ref:t};return Object.keys(n).forEach(function(d){Ed.hasOwnProperty(d)||(k[d]=n[d])}),ck(w[0],k)});Dt.displayName="FontAwesomeIcon";Dt.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};var ck=w1.bind(null,ie.createElement);const fk={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},dk={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},pk=dk,mk={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},hk={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},gk={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},vk={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},yk=O.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(17, 25, 40, 0);

  div {
    background-color: transparent;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    // border: 3px solid var(--greenFull1);
    display: flex;
    flex-direction: column;
    gap: 20px;
    widht: 500px;
  }

  div > p {
    color: var(--greenFull1);
    font-weight: 700;
    font-size: 1.4em;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  div > span {
    padding: 0;
    margin: 0;
    color: black;
    border: none;
    box-shadow: none;

    font-size: 4rem;
    font-family: "Dancing Script", cursive;
    background: #17202a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  div > button {
    border: none;
    width: 200px;
    margin: 0 auto;
    font-weight: 500;
    padding: 1em;
    border-radius: 2px;
    background: var(--greenFull1);
    color: var(--silverFull7);
    font-family: "Poppins", sans-serif;
  }

  div > img {
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
  }
`;function xk({updateModalOpen:e}){const t=Fo(),n=()=>{t("/"),e(!1)};return g.jsx(yk,{children:g.jsxs("div",{children:[g.jsx("img",{src:$o,alt:"Logo chulos"}),g.jsx("p",{children:"¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo lo antes posible. Gracias por tu interés."}),g.jsx(Ua,{content:"Volver al home",work:n})]})})}const wk="/assets/ContactBckg2-BrTny4o8.jpg",kk=()=>{const e=E.useRef(),[t,n]=E.useState(!1),r=$n(),o=l=>{n(l)},i=l=>{l.preventDefault(),n2.sendForm("service_3fmshao","template_saxokl9",e.current,"UShoZK6u2XqjK0Lgf").then(()=>{console.log("Mensaje enviado con éxito!"),e.current.reset(),n(!0)},s=>{console.log("Ocurrió un error: ",s.text)})},a=r.pathname;return g.jsxs(r2,{children:[a!=="/write-message"&&g.jsxs(o2,{$bckgImg:wk,children:[g.jsx("h2",{children:"Contactanos"}),g.jsxs(i2,{children:[g.jsxs("a",{href:"https://wa.me/5491158227373",target:"_blank",rel:"noopener noreferrer",children:[g.jsx(Dt,{icon:fk})," +54 9 11 5822-7373"]}),g.jsxs("a",{href:"https://maps.app.goo.gl/JYwkki5PhBccy8Vi8",target:"_blank",children:[g.jsx(Dt,{icon:pk}),"Guamini 4742, Ciudad Autonoma de Buenos Aires, Villa Lugano."]})]}),g.jsxs(a2,{children:[g.jsx("a",{href:"https://www.instagram.com/chulos.design/",target:"_blank",rel:"noopener noreferrer",children:g.jsx(Dt,{icon:gk})}),g.jsx("a",{href:"https://www.facebook.com/profile.php?id=100070733544658",target:"_blank",rel:"noopener noreferrer",children:g.jsx(Dt,{icon:vk})}),g.jsx("a",{href:"https://www.tiktok.com/@chuloswood?_t=8qA2TwKLLnx&_r=1",target:"_blank",rel:"noopener noreferrer",children:g.jsx(Dt,{icon:hk})})]})]}),g.jsxs("form",{className:"form-contact",ref:e,onSubmit:i,children:[g.jsx("p",{children:"Escribe un mensaje"}),g.jsxs(Pl,{children:[g.jsx(_l,{children:"Nombre"}),g.jsxs("div",{children:[g.jsx("input",{type:"text",name:"from_name",placeholder:"Ingrese su nombre",required:!0}),g.jsx("span",{className:"bottom"}),g.jsx("span",{className:"right"}),g.jsx("span",{className:"top"}),g.jsx("span",{className:"left"})]})]}),g.jsxs(Pl,{children:[g.jsx(_l,{children:"Email"}),g.jsxs("div",{children:[g.jsx("input",{type:"email",name:"email_id",placeholder:"Ingrese su correo",required:!0}),g.jsx("span",{className:"bottom"}),g.jsx("span",{className:"right"}),g.jsx("span",{className:"top"}),g.jsx("span",{className:"left"})]})]}),g.jsxs(Pl,{children:[g.jsx(_l,{htmlFor:"mensaje",children:"Mensaje"}),g.jsx("textarea",{placeholder:"Escriba su mensaje",name:"mensaje",required:!0})]}),g.jsx("input",{type:"submit",value:"Enviar"})]}),t&&g.jsx(xk,{updateModalOpen:o})]})},Sk=O.div`
  width: 100%;
`;function ru(){return g.jsx(Sk,{children:g.jsx(kk,{})})}function Ck(){return g.jsxs(yx,{children:[g.jsx(vx,{}),g.jsx(Oh,{}),g.jsx(Lx,{}),g.jsx(ru,{})]})}const Ek=jt`
  0% {
    transform: translateX(100%); 
    }
    
    50%{
      transform: translateX(150%); 
      
  }
  to {
    transform: translateX(0); 
  }
`,bk=jt`
  from {
    transform: translateX(-100%); 
  }
  to {
    transform: translateX(0); 
  }
`;jt`
  from {
    transform: translateX(0); 
  }
  to {
    transform: translateX(-100%);
  }
`;jt`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%); 
  }
`;const Ll=jt`
  from {
    opacity: 0;
   transform: translateY(-30%);
   
   }
   to {
    opacity: 1; 
    transform: translateY(0);
  }
`,Pk=O.div`
  // * {
  //   border: 1px solid gold;
  // }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  background-color: transparent;
  min-height: 100vh;

  h2 {
    font-size: 2.5em;
    color: var(--greenFull1);
    animation: ${Ll} 1s ease-in-out;
    font-weight: bold;
    text-align: center;
    padding: 0.2em 1em;
    @media (max-width: 568px) {
      font-size: 2em;
    }
  }

  p {
    color: var(--silverFull1);
    font-weight: 600;
    font-size: 1.2em;
    padding: 0 3em;
    text-align: left;
    animation: ${Ll} 1s ease-in-out;

    @media (max-width: 568px) {
      font-size: 1em;
    }
  }

  h3 {
    font-size: 2em;
    color: var(--greenFull2);
    margin-top: 70px;
    font-weight: 500;
  }

  button {
    animation: ${Ll} 0.5s ease-in-out;
  }
`,_k=O.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 50px;
  width: 100%;
  height: 350px;
  border-top: 10px solid var(--greenFull1);
  box-shadow: 1px 1px 10px black;
  font-weight: 400;
`,jk=O.div`
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 200px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 5px black;
  }

  &:hover img {
    opacity: 0.8;
  }
`,Nk=O.img`
  width: 250px;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  border-radius: 3px;
`,Ok=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  gap: 10px;
  margin: 20px auto;
  width: 100%;

  span {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: var(--greenFull2);
    font-weight: 500;
  }

  video {
    width: auto;
    max-width: 100%;
    height: 500px;
    margin: 0 auto;
    box-shadow: 1px 1px 10px var(--greenFull1);
  }

  @media (max-width: 568px) {
    span {
      font-size: 1.5em;
    }
  }
`,Tk=O.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--greenFull3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Ik=O.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.7);
  transition: transform 0.4s ease, filter 0.4s ease;

  animation: ${({direction:e})=>e==="left"?zn`
          ${bk} 0.5s forwards
        `:e==="right"?zn`
          ${Ek} 0.5s forwards
        `:"none"};
`,zk=O.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: var(--greenFull1);
    transform: scale(1.2);
  }
`,bd=O.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  transition: 0.5s;
  ${e=>e.left&&zn`
      left: 30px;
    `}

  ${e=>e.right&&zn`
      right: 30px;
    `}

  &:hover {
    color: var(--greenFull1);
  }
`;O.a`
  display: inline-block;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;function Lk(e){return Nt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function Ak(e){return Nt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"},child:[]}]})(e)}function Rk(e){return Nt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"},child:[]}]})(e)}const Fk="/assets/DivisoresImg1-8GU4Aj2X.webp",Mk="/assets/DivisoresImg2-BEZAonR6.webp",$k="/assets/DivisoresImg3-BPURU74I.webp",Dk="/assets/DivisoresImg4-DOYSEkPV.webp",Uk="/assets/DivisoresImg5-B8fwG23R.webp",Bk="/assets/DivisoresImg6-C2OxaNHs.webp",Wk="/assets/DivisoresImg7-BxfxL0xZ.webp",Vk="/assets/DivisoresImg8-DMZ1BBNC.webp",Hk="/assets/DivisoresImg9-CHxBrWwW.webp",Yk="/assets/DivisoresImg10-Bw_YSslp.webp",Gk="/assets/DivisoresImg11-Dh1GYpBs.webp",Qk="/assets/DivisoresImg12-iDbvQcga.webp",Kk="/assets/DivisoresImg14-CptqRjBF.webp",Xk="/assets/DivisoresImg15-4aV4PHTj.webp",Zk="/assets/DivisoresImg16-NPCqhKMz.webp",qk="/assets/DivisoresImg18-DPOk_3td.webp",Jk="/assets/DivisoresImg12-iDbvQcga.webp",e4="/assets/DivisoresImg20-DF4FAyy7.webp",t4="/assets/divisoresVideo1-DUGzOwCn.mp4";function n4(){const e=[Fk,Mk,$k,Dk,Uk,Bk,Wk,Vk,Hk,Yk,Gk,Qk,Kk,Xk,Zk,qk,Jk,e4],[t,n]=E.useState(!1),[r,o]=E.useState(0);let i=0,a=0;const l=k=>{o(k),n(!0)},s=()=>{n(!1)},u=()=>{o(k=>(k+1)%e.length)},f=()=>{o(k=>(k-1+e.length)%e.length)};E.useEffect(()=>{const k=d=>{switch(d.key){case"Escape":s();break;case"ArrowRight":u();break;case"ArrowLeft":f();break}};return document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}},[]);const p=k=>{k.target===k.currentTarget&&s()},h=()=>{window.open("https://wa.me/5491158227373","_blank")},y=k=>{i=k.touches[0].clientX},x=k=>{a=k.touches[0].clientX},w=()=>{i-a>50&&u(),a-i>50&&f()};return g.jsxs(Pk,{children:[g.jsx("h2",{children:"Divisores de Madera"}),g.jsx("p",{children:"Fabricamos divisores de ambiente elaborados en madera enchapada de primera calidad de la linea Faplac con cantos de abs y varillas movibles que regulan la entrada de luz. Realizamos diseños personalizados buscando funcionalidad y estética."}),g.jsx(Ua,{content:"Pedir cotizacion",work:h}),g.jsx("h3",{children:"Galería"}),g.jsx(_k,{children:e.map((k,d)=>g.jsx(jk,{onClick:()=>l(d),children:g.jsx(Nk,{loading:"lazy",src:k,alt:`Divisor ${d+1}`})},d))}),g.jsxs(Ok,{children:[g.jsx("span",{children:"Trabajo hecho a medida "}),g.jsxs("video",{id:"myVideo",controls:!0,muted:!0,children:[g.jsx("source",{src:t4,type:"video/mp4"}),"Tu navegador no soporta la etiqueta de video."]})]}),t&&g.jsxs(Tk,{onClick:p,onTouchStart:y,onTouchMove:x,onTouchEnd:w,children:[g.jsx(zk,{onClick:s,children:g.jsx(Rk,{})}),g.jsx(bd,{left:!0,onClick:f,children:g.jsx(Lk,{})}),g.jsx(Ik,{loading:"lazy",src:e[r],alt:`Divisor ${r+1}`}),g.jsx(bd,{right:!0,onClick:u,children:g.jsx(Ak,{})})]})]})}const r4=()=>g.jsxs(Mv,{children:[g.jsx(Bn,{index:!0,path:"/",element:g.jsx(Ck,{})}),g.jsx(Bn,{path:"/disenos",element:g.jsx(n4,{})}),g.jsx(Bn,{path:"/about-us",element:g.jsx(Oh,{})}),g.jsx(Bn,{path:"/contact",element:g.jsx(ru,{})}),g.jsx(Bn,{path:"/write-message",element:g.jsx(ru,{})})]}),o4=O.a`
  position: fixed;
  bottom: 0px;
  right: 10px;
  text-decoration: none;
  z-index: 2;
    transition: transform 0.2s ease;

  
`,i4=O.img`
  width: 80px;
  border-radius: 50%;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }
`,a4="/assets/logoWsp1-Cfh4-WU8.png",l4=()=>{const[e,t]=E.useState(!1),n=()=>{t(r=>!r)};return E.useEffect(()=>{const r=setInterval(n,1e4);return()=>clearInterval(r)},[]),g.jsx(o4,{className:e?"shake":"",href:"https://wa.me/5491158227373",target:"_blank",children:g.jsx(i4,{src:a4,alt:"WhatsApp"})})},s4=jt`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`,u4=jt`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`,c4=O.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateY(-200%);
  opacity: 0;
  transition: opacity 1s;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid var(--greenFull1);
  backdrop-filter: blur(25px) saturate(0%);
  -webkit-backdrop-filter: blur(25px) saturate(0%);
  background-color: rgba(0, 0, 0, 0);
  background-color: var(--greenFull1);

  &.open {
    animation: ${s4} 0.5s forwards;
    opacity: 1;
  }

  &.closed {
    animation: ${u4} 0.5s forwards;
  }

  button {
    color: var(--silverFull5);
    background: transparent;
    border: none;
    position: absolute;
    right: 20px;
    top: 15px;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.4em;
  }
`,f4=O.div`
  display: block;
  color: var(--silverFull5);
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s;
  background: transparent;
  padding-bottom: 5px;
  width: 100px;
  font-size: 2rem;

  &.active {
  border-bottom: 2px solid var(--silverFull5);
  }

  &:hover {
    color: var(--silverFull4);
    letter-spacing: 2px;
  }
`;function d4({toggleMenu:e,isMenuOpen:t,closeMenu:n}){const[r,o]=E.useState(!1),i=()=>{o(!0),setTimeout(()=>{n(),o(!1)},500)};return g.jsxs(c4,{onLoad:E.lazy,className:r?"closing":t?"open":"closed",children:[g.jsx("button",{onClick:i,children:"X"}),[{to:"/",label:"Inicio"},{to:"/contact",label:"Contacto"},{to:"/about-us",label:"Sobre Nosotros"},{to:"/disenos",label:"Nuestros Diseños"}].map(({to:a,label:l})=>g.jsx(f4,{as:Kv,to:a,onClick:i,className:({isActive:s})=>s?"active":"",children:l}))]})}const p4=O.div`
  position: fixed;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 998;
  background-color: var(--greenFull1);
  
`,m4=O.div`
  font-size: 2rem;
  cursor: pointer;
  display: none;
  color: var(--silverFull7);
  margin-right: 30px;
  @media (max-width: 768px) {
    display: flex;  
  }
`,h4=O.img`
  height: 40px;
  border-radius: 50%;
`,g4=O.div`
  display: flex;
  gap: 1.5rem;
  margin-right: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`,fi=O(nh)`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2em;
  transition: color 0.1s ease;
  color: white;
    color: var(--silverFull7);

  &:hover {
    color: var(--greenFull7);
    // text-shadow: 0 0 3px white;

  }
`,v4="/assets/menuBckg-Du0GUeAZ.jpg",y4=()=>{const[e,t]=E.useState(!1),n=()=>t(!e),r=()=>t(!1);return g.jsxs(p4,{children:[g.jsx(h4,{src:$o,alt:"Logo"}),g.jsx(m4,{onClick:n,children:"☰"}),g.jsxs(g4,{children:[g.jsx(fi,{to:"/",onClick:r,children:"Inicio"}),g.jsx(fi,{to:"/contact",onClick:r,children:"Contacto"}),g.jsx(fi,{to:"/about-us",onClick:r,children:"Nosotros"}),g.jsx(fi,{to:"/disenos",onClick:r,children:"Diseños"})]}),e&&g.jsx(d4,{toggleMenu:n,isMenuOpen:e,closeMenu:r})]})},x4=O.footer`
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.5);

  background-image: url(${e=>e.$bckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`,w4=O.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`,Pd=O.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  min-width: 180px;
`,_d=O.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: var(--greenFull1);
`,jd=O.a`
  color: var(--greenFull2);
  margin: 5px 0;
  text-decoration: none;
  transition: 0s ease-in-out;
  font-size: 0.95em;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: var(--silverFull1);
    text-decoration: underline;
  }
`,k4=O.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  font-weight: bold;
`,Al=O.a`
  color: white;
  font-weight: bold;
  font-size: 1.8em;
  transition: 1s ease-in-out;

  &:hover {
    color: var(--greenFull3);
    transform: scale(1.2);
  }
`,S4=O.div`
  font-size: 0.9em;
  margin-top: 20px;
  color: white;
  text-align: center;
`,C4=O.img`
  width: 60px;
  border-radius: 50%;
  box-shadow: 1px 1px 10px black;
`;O.a`
  margin-top: 25px;
  color: white;
  text-decoration: none;
  &:hover {
    color: var(--greenFull3);
  }
`;const E4=()=>{const e=Fo();return g.jsxs(x4,{$bckgImg:v4,children:[g.jsxs(w4,{children:[g.jsxs(Pd,{children:[g.jsx(_d,{children:"Contáctanos"}),g.jsx(jd,{href:"https://wa.me/5491158227373",children:"Soporte"}),g.jsx(jd,{onClick:()=>{e("/write-message")},children:"Envía tu Consulta"})]}),g.jsxs(Pd,{children:[g.jsx(_d,{children:"Seguinos"}),g.jsxs(k4,{children:[g.jsx(Al,{target:"blank",href:"https://www.facebook.com/search/top?q=chulos%20wood",children:g.jsx(Px,{})}),g.jsx(Al,{target:"blank",href:"https://www.instagram.com/chulos.design/",children:g.jsx(_x,{})}),g.jsx(Al,{target:"blank",href:"https://www.tiktok.com/@chuloswood?_t=8qA2TwKLLnx&_r=1",children:g.jsx(jx,{})})]})]})]}),g.jsxs("a",{href:"/",children:[" ",g.jsx(C4,{src:$o,alt:"Logo Chulos Design"})]}),g.jsx(S4,{children:"© 2024 Todos los derechos reservados."})]})},b4=O.section`
  position: fixed;
  bottom: 80px;
  right: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  z-index: 999;

  .chat-icon {
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
    z-index: 999;
  }

  .chat-icon img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .chat-icon:hover {
    transform: scale(1.1);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .chat-window {
    background: #fff;
    border-radius: 12px;
    width: 360px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    bottom: 10px;
    right: 10px;

    @media(max-width: 468px){
    width: 95%;
    }
  }

  .chat-header {
    background: var(--greenFull1);
    color: #fff;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chat-header img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: 1px 1px 5px 1px black;
  }

 .chat-header > strong {
    font-family: "Dancing Script", cursive;
    background: #17202a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 30px;
  }

  .close-btn {
    background: transparent;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }

  .close-btn:hover{
    color: var(--greenFull6);
  }

  .chat-messages {
    flex: 1;
    padding: 10px;
    background: var(--silverFull5);
    overflow-y: auto;
  }

  .message {
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 16px;
    max-width: 80%;
    word-wrap: break-word;
    line-height: 1.4;
  }

  .message.user {
    background: var(--greenFull4);
    color: #fff;
    align-self: flex-end;
  }

  .message.bot {
    background: var(--silverFull2);
    color: #333;
    align-self: flex-start;
  }

  .message.loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quick-replies {
    display: flex;
    gap: 8px;
    padding: 8px;
    background: var(--silverFull6);
    flex-wrap: wrap;
  }

  .quick-replies button {
    background: var(--greenFull2);
    border: none;
    border-radius: 16px;
    padding: 6px 12px;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .quick-replies button:hover {
    background: var(--greenFull3);
  }

  .chat-input-area {
    display: flex;
    padding: 8px;
    border-top: 1px solid var(--silverFull4);
    background: #fff;
  }

  .chat-input-area input {
    flex: 1;
    border: 1px solid var(--silverFull3);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 14px;
    outline: none;
  }

  .chat-input-area button {
    background: var(--greenFull1);
    border: none;
    margin-left: 8px;
    padding: 8px 12px;
    width: 40px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;
    color: white;
  }

  .chat-input-area button:hover {
    background: var(--greenFull6);
  }
`,P4="https://2j5uuy7hcg.execute-api.us-east-1.amazonaws.com";async function _4(e,t=[],n=""){const r={message:e,history:t,context:n},o=await fetch(`${P4}/api/chat/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!o.ok){const a=await o.text();throw new Error(`API error ${o.status}: ${a}`)}const{response:i}=await o.json();return i}let j4=class extends HTMLElement{constructor(){super();rt(this,"_propsToUpgrade",{});rt(this,"shadow");rt(this,"template");rt(this,"defaultProps");rt(this,"isAttached",!1);this.shadow=this.attachShadow({mode:"open"}),this.template=document.createElement("template")}storePropsToUpgrade(n){n.forEach(r=>{this.hasOwnProperty(r)&&this[r]!==void 0&&(this._propsToUpgrade[r]=this[r],delete this[r])})}upgradeStoredProps(){Object.entries(this._propsToUpgrade).forEach(([n,r])=>{this.setAttribute(n,r)})}reflect(n){n.forEach(r=>{Object.defineProperty(this,r,{set(o){"string,number".includes(typeof o)?this.setAttribute(r,o.toString()):this.removeAttribute(r)},get(){return this.getAttribute(r)}})})}applyDefaultProps(n){this.defaultProps=n,Object.entries(n).forEach(([r,o])=>{this[r]=this[r]||o.toString()})}};var Nd=":host{--uib-dot-size:calc(var(--uib-size)*0.23);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-dot-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:var(--uib-dot-size);justify-content:space-between;position:relative;width:var(--uib-size)}.svg{filter:url(#uib-jelly-ooze);overflow:visible}.dot{cy:50%;cx:0;r:calc(var(--uib-dot-size)/2);fill:var(--uib-color);animation:stream var(--uib-speed) linear infinite both;display:block;height:var(--uib-dot-size);transform-box:fill-box;transform-origin:center;transition:fill .3s ease;width:var(--uib-dot-size)}.dot:nth-child(2){animation-delay:calc(var(--uib-speed)*-.2)}.dot:nth-child(3){animation-delay:calc(var(--uib-speed)*-.4)}.dot:nth-child(4){animation-delay:calc(var(--uib-speed)*-.6)}.dot:nth-child(5){animation-delay:calc(var(--uib-speed)*-.8)}@keyframes stream{0%,to{transform:translateX(0) scale(0)}50%{transform:translateX(calc(var(--uib-size)*.5)) scale(1)}99.999%{transform:translateX(calc(var(--uib-size))) scale(0)}}";class Od extends j4{constructor(){super();rt(this,"_attributes",["size","color","speed"]);rt(this,"size");rt(this,"color");rt(this,"speed");this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}static get observedAttributes(){return["size","color","speed"]}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:60,color:"black",speed:2.5});const n=.23*parseInt(this.size);this.template.innerHTML=`
      <div class="container">
        <svg 
          class="svg"         
          x="0px" 
          y="0px"
          viewBox="0 0 ${this.size} ${n}"
          height="${n}"
          width="${this.size}"
          preserveAspectRatio='xMidYMid meet'
        >
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
          <circle class="dot" />
          <defs>
            <filter id="uib-jelly-ooze">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation=${parseInt(this.size)/20}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="ooze"
              />
              <feBlend in="SourceGraphic" in2="ooze" />
            </filter>
          </defs>
        </svg>
      </div>

      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${Nd}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){const n=this.shadow.querySelector("style"),r=this.shadow.querySelector("svg");if(r){const o=r.querySelector("feGaussianBlur"),i=parseInt(this.size),a=.23*i;o.setAttribute("stdDeviation",String(i/20)),r.setAttribute("height",String(a)),r.setAttribute("width",this.size),r.setAttribute("viewBox",`0 0 ${this.size} ${a}`)}n&&(n.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${Nd}
    `)}}var N4={register:(e="l-mirage")=>{customElements.get(e)||customElements.define(e,class extends Od{})},element:Od};N4.register();const O4=({context:e=""})=>{const[t,n]=E.useState(!1),[r,o]=E.useState([{from:"bot",text:`¡Hola! Soy ChulosAI, el asistente de Chulos Design 💻
¿En qué puedo ayudarte hoy?`}]),[i,a]=E.useState([]),[l,s]=E.useState(""),[u,f]=E.useState(!1),p=E.useRef(null),h=[{label:"¿Cómo puedo pedir un presupuesto?",value:"¿Cómo puedo pedir un presupuesto?"},{label:"¿Dónde los encuentro?",value:"¿Dónde los encuentro?"},{label:"Redes sociales",value:"Redes sociales"}],y=()=>n(!t),x=E.useCallback(()=>{var d;(d=p.current)==null||d.scrollIntoView({behavior:"smooth"})},[]);E.useEffect(x,[r,x]),E.useEffect(()=>{const d=c=>c.key==="Escape"&&n(!1);return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]);const w=async d=>{const c={from:"user",text:d};o(b=>[...b,c]);const m=[...i,{role:"user",content:d}];a(m),f(!0);let v;switch(d){case"¿Cómo puedo pedir un presupuesto?":v="¡Genial! Podés pedirme un presupuesto haciendo click aquí: https://wa.me/541158227373";break;case"¿Dónde los encuentro?":v="Tenemos nuestro local en Lugano. Podemos coordinar una reunión para charlar de tu proyecto.";break;case"Redes sociales":v="¡Seguinos en redes! Instagram: https://www.instagram.com/chulos.design/, https://www.facebook.com/profile.php?id=100070733544658";break;default:try{v=await _4(d,m,e)}catch{v="Lo siento, ocurrió un error. ¿Podés intentar nuevamente?"}}const S={from:"bot",text:v};o(b=>[...b,S]),a(b=>[...b,{role:"model",content:v}]),f(!1)},k=d=>{d.preventDefault(),l.trim()&&w(l.trim())&&s("")};return g.jsx(b4,{children:t?g.jsx("div",{className:"overlay",onClick:y,children:g.jsxs("div",{className:"chat-window animate__animated animate__backInUp",onClick:d=>d.stopPropagation(),children:[g.jsxs("header",{className:"chat-header",children:[g.jsx("img",{src:$o,alt:"Logo"}),g.jsx("strong",{children:"Chulos design"}),g.jsx("button",{className:"close-btn",onClick:y,children:"×"})]}),g.jsxs("div",{className:"chat-messages",children:[r.map((d,c)=>g.jsx("div",{className:`message ${d.from}`,children:d.text},c)),u&&g.jsx("div",{className:"message bot loading",children:g.jsx("l-mirage",{size:"40"})}),g.jsx("div",{ref:p})]}),g.jsx("div",{className:"quick-replies",children:h.map((d,c)=>g.jsx("button",{onClick:()=>w(d.value),children:d.label},c))}),g.jsxs("form",{className:"chat-input-area",onSubmit:k,children:[g.jsx("input",{type:"text",placeholder:"Escribí tu consulta...",value:l,onChange:d=>s(d.target.value)}),g.jsx("button",{type:"submit",children:g.jsx(Dt,{icon:mk})})]})]})}):g.jsx("button",{className:"chat-icon",onClick:y,"aria-label":"Abrir chat",children:g.jsx("img",{src:"https://img.icons8.com/fluency/48/speech-bubble.png",alt:"Chat icon"})})})},T4=`
## Sos asistente personal de Chulos Design.

# Chulos design es una empresa que se dedica al diseño de interiores.

# Su producto estrella son los divisores de ambiente plegables:
abricamos divisores de ambiente elaborados en madera enchapada de 
primera calidad de la linea Faplac con cantos de abs y varillas 
movibles que regulan la entrada de luz. Realizamos diseños personalizados 
buscando funcionalidad y estética.

# Instagram: @chulos.design
# Whatsapp: 5491158227373

# Si te piden un presupuesto reenviale el contacto de whatsapp.

# Se siempre amable y solamente limitate a contestar cosas referidas a la empresa. 
`;function I4(){return g.jsxs(ex,{children:[g.jsx(y4,{}),g.jsx(r4,{}),g.jsx(E4,{}),g.jsx(O4,{context:T4}),g.jsx(l4,{})]})}const z4=qy`

    :root {
    // PALETA DE VERDE
    --greenFull1: #0e6251;
    --greenFull2: #117864;
    --greenFull3: #148f77;
    --greenFull4: #17a589;
    --greenFull5: #1abc9c;
    --greenFull6: #48c9b0;
    --greenFull7: #76d7c4;

    // PALETA SILVER
    --silverFull1: #7b7d7d;
    --silverFull2: #979a9a;
    --silverFull3: #b3b6b7;
    --silverFull4: #d0d3d4;
    --silverFull5: #cacfd2;
    --silverFull6: #d7dbdd;
    --silverFull7: #e5e7e9;

  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    }

 /* Scrollbar Styles */
    ::-webkit-scrollbar {
      width: 12px;
      height: 12px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgb(205, 205, 205);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--silverFull2);
          border-radius: 1px;
          }
          
      ::-webkit-scrollbar-thumb:hover {
         background: var(--silverFull1);;
      }
    /* Scrollbar Styles */
    
    @font-face {
    font-family: 'Billabong'; 
    src: url('./Fonts/Billabong.ttf') format('truetype'); 
    }
`;Rl.createRoot(document.getElementById("root")).render(g.jsxs(ie.StrictMode,{children:[g.jsx(z4,{}),g.jsx(Yv,{children:g.jsx(I4,{})})]}));
