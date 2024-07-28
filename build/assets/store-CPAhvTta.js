import{d as Z}from"./currentDevice-CJpxQO6Z.js";var ee={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const P=e=>{let t;const r=new Set,o=(p,S)=>{const y=typeof p=="function"?p(t):p;if(!Object.is(y,t)){const d=t;t=S??(typeof y!="object"||y===null)?y:Object.assign({},t,y),r.forEach(v=>v(t,d))}},n=()=>t,c={setState:o,getState:n,getInitialState:()=>l,subscribe:p=>(r.add(p),()=>r.delete(p)),destroy:()=>{(ee?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},l=t=e(o,n,c);return c},te=e=>e?P(e):P;function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=Symbol.for("react.element"),re=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),se=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),le=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),I=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,W={};function m(e,t,r){this.props=e,this.context=t,this.refs=W,this.updater=r||L}m.prototype.isReactComponent={};m.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function z(){}z.prototype=m.prototype;function x(e,t,r){this.props=e,this.context=t,this.refs=W,this.updater=r||L}var O=x.prototype=new z;O.constructor=x;M(O,m.prototype);O.isPureReactComponent=!0;var V=Array.isArray,B=Object.prototype.hasOwnProperty,j={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function H(e,t,r){var o,n={},i=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)B.call(t,o)&&!N.hasOwnProperty(o)&&(n[o]=t[o]);var f=arguments.length-2;if(f===1)n.children=r;else if(1<f){for(var c=Array(f),l=0;l<f;l++)c[l]=arguments[l+2];n.children=c}if(e&&e.defaultProps)for(o in f=e.defaultProps,f)n[o]===void 0&&(n[o]=f[o]);return{$$typeof:_,type:e,key:i,ref:s,props:n,_owner:j.current}}function de(e,t){return{$$typeof:_,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===_}function ye(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var A=/\/+/g;function R(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ye(""+e.key):t.toString(36)}function w(e,t,r,o,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case _:case re:s=!0}}if(s)return s=e,n=n(s),e=o===""?"."+R(s,0):o,V(n)?(r="",e!=null&&(r=e.replace(A,"$&/")+"/"),w(n,t,r,"",function(l){return l})):n!=null&&(k(n)&&(n=de(n,r+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(A,"$&/")+"/")+e)),t.push(n)),1;if(s=0,o=o===""?".":o+":",V(e))for(var f=0;f<e.length;f++){i=e[f];var c=o+R(i,f);s+=w(i,t,r,c,n)}else if(c=pe(e),typeof c=="function")for(e=c.call(e),f=0;!(i=e.next()).done;)i=i.value,c=o+R(i,f++),s+=w(i,t,r,c,n);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function E(e,t,r){if(e==null)return e;var o=[],n=0;return w(e,o,"","",function(i){return t.call(r,i,n++)}),o}function ve(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var a={current:null},$={transition:null},Se={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};function G(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:E,forEach:function(e,t,r){E(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return E(e,function(){t++}),t},toArray:function(e){return E(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=m;u.Fragment=ne;u.Profiler=ue;u.PureComponent=x;u.StrictMode=oe;u.Suspense=fe;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Se;u.act=G;u.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=M({},e.props),n=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=j.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(c in t)B.call(t,c)&&!N.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&f!==void 0?f[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){f=Array(c);for(var l=0;l<c;l++)f[l]=arguments[l+2];o.children=f}return{$$typeof:_,type:e.type,key:n,ref:i,props:o,_owner:s}};u.createContext=function(e){return e={$$typeof:se,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ie,_context:e},e.Consumer=e};u.createElement=H;u.createFactory=function(e){var t=H.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:ce,render:e}};u.isValidElement=k;u.lazy=function(e){return{$$typeof:ae,_payload:{_status:-1,_result:e},_init:ve}};u.memo=function(e,t){return{$$typeof:le,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}};u.unstable_act=G;u.useCallback=function(e,t){return a.current.useCallback(e,t)};u.useContext=function(e){return a.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return a.current.useDeferredValue(e)};u.useEffect=function(e,t){return a.current.useEffect(e,t)};u.useId=function(){return a.current.useId()};u.useImperativeHandle=function(e,t,r){return a.current.useImperativeHandle(e,t,r)};u.useInsertionEffect=function(e,t){return a.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return a.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return a.current.useMemo(e,t)};u.useReducer=function(e,t,r){return a.current.useReducer(e,t,r)};u.useRef=function(e){return a.current.useRef(e)};u.useState=function(e){return a.current.useState(e)};u.useSyncExternalStore=function(e,t,r){return a.current.useSyncExternalStore(e,t,r)};u.useTransition=function(){return a.current.useTransition()};u.version="18.3.1";F.exports=u;var C=F.exports;const he=U(C);var J={exports:{}},K={},Q={exports:{}},X={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=C;function me(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:me,Ee=h.useState,we=h.useEffect,$e=h.useLayoutEffect,be=h.useDebugValue;function Re(e,t){var r=t(),o=Ee({inst:{value:r,getSnapshot:t}}),n=o[0].inst,i=o[1];return $e(function(){n.value=r,n.getSnapshot=t,g(n)&&i({inst:n})},[e,r,t]),we(function(){return g(n)&&i({inst:n}),e(function(){g(n)&&i({inst:n})})},[e]),be(r),r}function g(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_e(e,r)}catch{return!0}}function ge(e,t){return t()}var xe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ge:Re;X.useSyncExternalStore=h.useSyncExternalStore!==void 0?h.useSyncExternalStore:xe;Q.exports=X;var Oe=Q.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=C,je=Oe;function ke(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ce=typeof Object.is=="function"?Object.is:ke,De=je.useSyncExternalStore,Pe=b.useRef,Ie=b.useEffect,Ve=b.useMemo,Ae=b.useDebugValue;K.useSyncExternalStoreWithSelector=function(e,t,r,o,n){var i=Pe(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=Ve(function(){function c(d){if(!l){if(l=!0,p=d,d=o(d),n!==void 0&&s.hasValue){var v=s.value;if(n(v,d))return S=v}return S=d}if(v=S,Ce(p,d))return v;var D=o(d);return n!==void 0&&n(v,D)?v:(p=d,S=D)}var l=!1,p,S,y=r===void 0?null:r;return[function(){return c(t())},y===null?void 0:function(){return c(y())}]},[t,r,o,n]);var f=De(e,i[0],i[1]);return Ie(function(){s.hasValue=!0,s.value=f},[f]),Ae(f),f};J.exports=K;var Te=J.exports;const qe=U(Te);var Y={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:Ue}=he,{useSyncExternalStoreWithSelector:Fe}=qe;let T=!1;const Le=e=>e;function Me(e,t=Le,r){(Y?"production":void 0)!=="production"&&r&&!T&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),T=!0);const o=Fe(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return Ue(o),o}const q=e=>{(Y?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?te(e):e,r=(o,n)=>Me(t,o,n);return Object.assign(r,t),r},We=e=>e?q(e):q;We<Store>(e=>({device:Z,setDevice:t=>e({device:t})}));
