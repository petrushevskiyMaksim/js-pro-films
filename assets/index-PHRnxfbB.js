var yc=Object.defineProperty;var Ec=(n,t,e)=>t in n?yc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ft=(n,t,e)=>(Ec(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const vc="films";var bs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Tc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},jo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;u||(p=64,o||(d=64)),r.push(e[l],e[h],e[d],e[p])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(qo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Tc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const c=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Ic;const d=s<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const R=c<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ic extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wc=function(n){const t=qo(n);return jo.encodeByteArray(t,!0)},Ln=function(n){return wc(n).replace(/\./g,"")},Ac=function(n){try{return jo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=()=>Rc().__FIREBASE_DEFAULTS__,Pc=()=>{if(typeof process>"u"||typeof bs>"u")return;const n=bs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ac(n[1]);return t&&JSON.parse(t)},Ai=()=>{try{return Sc()||Pc()||Cc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vc=n=>{var t,e;return(e=(t=Ai())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Dc=n=>{const t=Vc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},$o=()=>{var n;return(n=Ai())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ln(JSON.stringify(e)),Ln(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kc(){var n;const t=(n=Ai())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xc(){return!kc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zo(){try{return typeof indexedDB=="object"}catch{return!1}}function Oc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="FirebaseError";class ye extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Mc,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Lc(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ye(i,a,r)}}function Lc(n,t){return n.replace(Fc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Fc=/\{\$([^}]+)}/g;function Kr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Ns(s)&&Ns(o)){if(!Kr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ns(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){return n&&n._delegate?n._delegate:n}class Fe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new bc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qc(t))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ut){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ut){return this.instances.has(t)}getOptions(t=Ut){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ut){return this.component?this.component.multipleInstances?t:Ut:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bc(n){return n===Ut?void 0:n}function qc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Uc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const $c={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},zc=V.INFO,Gc={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Kc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Gc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ko{constructor(t){this.name=t,this._logLevel=zc,this._logHandler=Kc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$c[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Qc=(n,t)=>t.some(e=>n instanceof e);let ks,xs;function Hc(){return ks||(ks=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wc(){return xs||(xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qo=new WeakMap,Qr=new WeakMap,Ho=new WeakMap,Vr=new WeakMap,Ri=new WeakMap;function Yc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(Ct(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Qo.set(e,n)}).catch(()=>{}),Ri.set(t,n),t}function Xc(n){if(Qr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Qr.set(n,t)}let Hr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Qr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ho.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ct(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jc(n){Hr=n(Hr)}function Zc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Dr(this),t,...e);return Ho.set(r,t.sort?t.sort():[t]),Ct(r)}:Wc().includes(n)?function(...t){return n.apply(Dr(this),t),Ct(Qo.get(this))}:function(...t){return Ct(n.apply(Dr(this),t))}}function tl(n){return typeof n=="function"?Zc(n):(n instanceof IDBTransaction&&Xc(n),Qc(n,Hc())?new Proxy(n,Hr):n)}function Ct(n){if(n instanceof IDBRequest)return Yc(n);if(Vr.has(n))return Vr.get(n);const t=tl(n);return t!==n&&(Vr.set(n,t),Ri.set(t,n)),t}const Dr=n=>Ri.get(n);function el(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=Ct(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ct(o.result),u.oldVersion,u.newVersion,Ct(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const nl=["get","getKey","getAll","getAllKeys","count"],rl=["put","add","delete","clear"],br=new Map;function Os(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(br.get(t))return br.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=rl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nl.includes(e)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),i&&u.done]))[0]};return br.set(t,s),s}Jc(n=>({...n,get:(t,e,r)=>Os(t,e)||n.get(t,e,r),has:(t,e)=>!!Os(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(sl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function sl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wr="@firebase/app",Ms="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Ko("@firebase/app"),ol="@firebase/app-compat",al="@firebase/analytics-compat",ul="@firebase/analytics",cl="@firebase/app-check-compat",ll="@firebase/app-check",hl="@firebase/auth",dl="@firebase/auth-compat",fl="@firebase/database",ml="@firebase/database-compat",pl="@firebase/functions",gl="@firebase/functions-compat",_l="@firebase/installations",yl="@firebase/installations-compat",El="@firebase/messaging",vl="@firebase/messaging-compat",Tl="@firebase/performance",Il="@firebase/performance-compat",wl="@firebase/remote-config",Al="@firebase/remote-config-compat",Rl="@firebase/storage",Sl="@firebase/storage-compat",Pl="@firebase/firestore",Cl="@firebase/firestore-compat",Vl="firebase",Dl="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]",bl={[Wr]:"fire-core",[ol]:"fire-core-compat",[ul]:"fire-analytics",[al]:"fire-analytics-compat",[ll]:"fire-app-check",[cl]:"fire-app-check-compat",[hl]:"fire-auth",[dl]:"fire-auth-compat",[fl]:"fire-rtdb",[ml]:"fire-rtdb-compat",[pl]:"fire-fn",[gl]:"fire-fn-compat",[_l]:"fire-iid",[yl]:"fire-iid-compat",[El]:"fire-fcm",[vl]:"fire-fcm-compat",[Tl]:"fire-perf",[Il]:"fire-perf-compat",[wl]:"fire-rc",[Al]:"fire-rc-compat",[Rl]:"fire-gcs",[Sl]:"fire-gcs-compat",[Pl]:"fire-fst",[Cl]:"fire-fst-compat","fire-js":"fire-js",[Vl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Map,Xr=new Map;function Nl(n,t){try{n.container.addComponent(t)}catch(e){Kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Bn(n){const t=n.name;if(Xr.has(t))return Kt.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,n);for(const e of Un.values())Nl(e,n);return!0}function kl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new Go("app","Firebase",xl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=Dl;function Wo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Yr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(e||(e=$o()),!e)throw Vt.create("no-options");const s=Un.get(i);if(s){if(Kr(e,s.options)&&Kr(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const o=new jc(i);for(const u of Xr.values())o.addComponent(u);const a=new Ol(e,r,o);return Un.set(i,a),a}function Ll(n=Yr){const t=Un.get(n);if(!t&&n===Yr&&$o())return Wo();if(!t)throw Vt.create("no-app",{appName:n});return t}function oe(n,t,e){var r;let i=(r=bl[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}Bn(new Fe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="firebase-heartbeat-database",Ul=1,Ue="firebase-heartbeat-store";let Nr=null;function Yo(){return Nr||(Nr=el(Fl,Ul,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ue)}catch(e){console.warn(e)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),Nr}async function Bl(n){try{const e=(await Yo()).transaction(Ue),r=await e.objectStore(Ue).get(Xo(n));return await e.done,r}catch(t){if(t instanceof ye)Kt.warn(t.message);else{const e=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Kt.warn(e.message)}}}async function Ls(n,t){try{const r=(await Yo()).transaction(Ue,"readwrite");await r.objectStore(Ue).put(t,Xo(n)),await r.done}catch(e){if(e instanceof ye)Kt.warn(e.message);else{const r=Vt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(r.message)}}}function Xo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=1024,jl=30*24*60*60*1e3;class $l{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gl(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fs();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fs(),{heartbeatsToSend:r,unsentEntries:i}=zl(this._heartbeatsCache.heartbeats),s=Ln(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fs(){return new Date().toISOString().substring(0,10)}function zl(n,t=ql){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Us(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Us(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zo()?Oc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ls(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ls(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Us(n){return Ln(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n){Bn(new Fe("platform-logger",t=>new il(t),"PRIVATE")),Bn(new Fe("heartbeat",t=>new $l(t),"PRIVATE")),oe(Wr,Ms,n),oe(Wr,Ms,"esm2017"),oe("fire-js","")}Kl("");var Ql="firebase",Hl="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe(Ql,Hl,"app");var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,Si=Si||{},I=Wl||self;function Zn(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function nn(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Yl(n){return Object.prototype.hasOwnProperty.call(n,kr)&&n[kr]||(n[kr]=++Xl)}var kr="closure_uid_"+(1e9*Math.random()>>>0),Xl=0;function Jl(n,t,e){return n.call.apply(n.bind,arguments)}function Zl(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function et(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=Jl:et=Zl,et.apply(null,arguments)}function In(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function z(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ot(){this.s=this.s,this.o=this.o}var th=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),th!=0)&&Yl(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jo=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Pi(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Bs(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Zn(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function nt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var eh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};I.addEventListener("test",e,t),I.removeEventListener("test",e,t)}catch{}return n}();function Be(n){return/^[\s\xa0]*$/.test(n)}function tr(){var n=I.navigator;return n&&(n=n.userAgent)?n:""}function pt(n){return tr().indexOf(n)!=-1}function Ci(n){return Ci[" "](n),n}Ci[" "]=function(){};function nh(n,t){var e=Hh;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var rh=pt("Opera"),le=pt("Trident")||pt("MSIE"),Zo=pt("Edge"),Jr=Zo||le,ta=pt("Gecko")&&!(tr().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),ih=tr().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function ea(){var n=I.document;return n?n.documentMode:void 0}var Zr;t:{var xr="",Or=function(){var n=tr();if(ta)return/rv:([^\);]+)(\)|;)/.exec(n);if(Zo)return/Edge\/([\d\.]+)/.exec(n);if(le)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ih)return/WebKit\/(\S+)/.exec(n);if(rh)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Or&&(xr=Or?Or[1]:""),le){var Mr=ea();if(Mr!=null&&Mr>parseFloat(xr)){Zr=String(Mr);break t}}Zr=xr}var ti;if(I.document&&le){var qs=ea();ti=qs||parseInt(Zr,10)||void 0}else ti=void 0;var sh=ti;function qe(n,t){if(nt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(ta){t:{try{Ci(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:oh[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&qe.$.h.call(this)}}z(qe,nt);var oh={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),ah=0;function uh(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++ah,this.fa=this.ia=!1}function er(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Vi(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function ch(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function na(n){const t={};for(const e in n)t[e]=n[e];return t}const js="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ra(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<js.length;s++)e=js[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function nr(n){this.src=n,this.g={},this.h=0}nr.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ni(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new uh(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function ei(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Jo(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(er(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function ni(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Lr={};function ia(n,t,e,r,i){if(r&&r.once)return oa(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ia(n,t[s],e,r,i);return null}return e=ki(e),n&&n[rn]?n.O(t,e,nn(r)?!!r.capture:!!r,i):sa(n,t,e,!1,r,i)}function sa(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=nn(i)?!!i.capture:!!i,a=Ni(n);if(a||(n[Di]=a=new nr(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=lh(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)eh||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(ua(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function lh(){function n(e){return t.call(n.src,n.listener,e)}const t=hh;return n}function oa(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)oa(n,t[s],e,r,i);return null}return e=ki(e),n&&n[rn]?n.P(t,e,nn(r)?!!r.capture:!!r,i):sa(n,t,e,!0,r,i)}function aa(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)aa(n,t[s],e,r,i);else r=nn(r)?!!r.capture:!!r,e=ki(e),n&&n[rn]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=ni(s,e,r,i),-1<e&&(er(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Ni(n))&&(t=n.g[t.toString()],n=-1,t&&(n=ni(t,e,r,i)),(e=-1<n?t[n]:null)&&bi(e))}function bi(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[rn])ei(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(ua(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Ni(t))?(ei(e,n),e.h==0&&(e.src=null,t[Di]=null)):er(n)}}}function ua(n){return n in Lr?Lr[n]:Lr[n]="on"+n}function hh(n,t){if(n.fa)n=!0;else{t=new qe(t,this);var e=n.listener,r=n.la||n.src;n.ia&&bi(n),n=e.call(r,t)}return n}function Ni(n){return n=n[Di],n instanceof nr?n:null}var Fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ki(n){return typeof n=="function"?n:(n[Fr]||(n[Fr]=function(t){return n.handleEvent(t)}),n[Fr])}function $(){Ot.call(this),this.i=new nr(this),this.S=this,this.J=null}z($,Ot);$.prototype[rn]=!0;$.prototype.removeEventListener=function(n,t,e,r){aa(this,n,t,e,r)};function Y(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new nt(t,n);else if(t instanceof nt)t.target=t.target||n;else{var i=t;t=new nt(r,n),ra(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=wn(o,r,!0,t)&&i}if(o=t.g=n,i=wn(o,r,!0,t)&&i,i=wn(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=wn(o,r,!1,t)&&i}$.prototype.N=function(){if($.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)er(e[r]);delete n.g[t],n.h--}}this.J=null};$.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};$.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function wn(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&ei(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var xi=I.JSON.stringify;class dh{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function fh(){var n=Oi;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class mh{constructor(){this.h=this.g=null}add(t,e){const r=ca.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var ca=new dh(()=>new ph,n=>n.reset());class ph{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function gh(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function _h(n){I.setTimeout(()=>{throw n},0)}let je,$e=!1,Oi=new mh,la=()=>{const n=I.Promise.resolve(void 0);je=()=>{n.then(yh)}};var yh=()=>{for(var n;n=fh();){try{n.h.call(n.g)}catch(e){_h(e)}var t=ca;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}$e=!1};function rr(n,t){$.call(this),this.h=n||1,this.g=t||I,this.j=et(this.qb,this),this.l=Date.now()}z(rr,$);_=rr.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Y(this,"tick"),this.ga&&(Mi(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mi(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}_.N=function(){rr.$.N.call(this),Mi(this),delete this.g};function Li(n,t,e){if(typeof n=="function")e&&(n=et(n,e));else if(n&&typeof n.handleEvent=="function")n=et(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(n,t||0)}function ha(n){n.g=Li(()=>{n.g=null,n.i&&(n.i=!1,ha(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Eh extends Ot{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ha(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(n){Ot.call(this),this.h=n,this.g={}}z(ze,Ot);var $s=[];function da(n,t,e,r){Array.isArray(e)||(e&&($s[0]=e.toString()),e=$s);for(var i=0;i<e.length;i++){var s=ia(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function fa(n){Vi(n.g,function(t,e){this.g.hasOwnProperty(e)&&bi(t)},n),n.g={}}ze.prototype.N=function(){ze.$.N.call(this),fa(this)};ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ir(){this.g=!0}ir.prototype.Ea=function(){this.g=!1};function vh(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Th(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function se(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+wh(n,e)+(r?" "+r:"")})}function Ih(n,t){n.info(function(){return"TIMEOUT: "+t})}ir.prototype.info=function(){};function wh(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xi(e)}catch{return t}}var Yt={},zs=null;function sr(){return zs=zs||new $}Yt.Ta="serverreachability";function ma(n){nt.call(this,Yt.Ta,n)}z(ma,nt);function Ge(n){const t=sr();Y(t,new ma(t))}Yt.STAT_EVENT="statevent";function pa(n,t){nt.call(this,Yt.STAT_EVENT,n),this.stat=t}z(pa,nt);function it(n){const t=sr();Y(t,new pa(t,n))}Yt.Ua="timingevent";function ga(n,t){nt.call(this,Yt.Ua,n),this.size=t}z(ga,nt);function sn(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){n()},t)}var or={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_a={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fi(){}Fi.prototype.h=null;function Gs(n){return n.h||(n.h=n.i())}function ya(){}var on={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ui(){nt.call(this,"d")}z(Ui,nt);function Bi(){nt.call(this,"c")}z(Bi,nt);var ri;function ar(){}z(ar,Fi);ar.prototype.g=function(){return new XMLHttpRequest};ar.prototype.i=function(){return{}};ri=new ar;function an(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new ze(this),this.P=Ah,n=Jr?125:void 0,this.V=new rr(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ea}function Ea(){this.i=null,this.g="",this.h=!1}var Ah=45e3,va={},ii={};_=an.prototype;_.setTimeout=function(n){this.P=n};function si(n,t,e){n.L=1,n.A=cr(Rt(t)),n.u=e,n.S=!0,Ta(n,null)}function Ta(n,t){n.G=Date.now(),un(n),n.B=Rt(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Va(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Ea,n.g=Ya(n.l,e?t:null,!n.u),0<n.O&&(n.M=new Eh(et(n.Pa,n,n.g),n.O)),da(n.U,n.g,"readystatechange",n.nb),t=n.I?na(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Ge(),vh(n.j,n.v,n.B,n.m,n.W,n.u)}_.nb=function(n){n=n.target;const t=this.M;t&&gt(n)==3?t.l():this.Pa(n)};_.Pa=function(n){try{if(n==this.g)t:{const l=gt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Jr||this.g&&(this.h.h||this.g.ja()||Ws(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Ge(3):Ge(2)),ur(this);var e=this.g.da();this.ca=e;e:if(Ia(this)){var r=Ws(this.g);n="";var i=r.length,s=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),Ne(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Th(this.j,this.v,this.B,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Be(a)){var c=a;break e}}c=null}if(e=c)se(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oi(this,e);else{this.i=!1,this.s=3,it(12),qt(this),Ne(this);break t}}this.S?(wa(this,l,o),Jr&&this.i&&l==3&&(da(this.U,this.V,"tick",this.mb),this.V.start())):(se(this.j,this.m,o,null),oi(this,o)),l==4&&qt(this),this.i&&!this.J&&(l==4?Ka(this.l,this):(this.i=!1,un(this)))}else Gh(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),qt(this),Ne(this)}}}catch{}finally{}};function Ia(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function wa(n,t,e){let r=!0,i;for(;!n.J&&n.o<e.length;)if(i=Rh(n,e),i==ii){t==4&&(n.s=4,it(14),r=!1),se(n.j,n.m,null,"[Incomplete Response]");break}else if(i==va){n.s=4,it(15),se(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else se(n.j,n.m,i,null),oi(n,i);Ia(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,it(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ki(t),t.M=!0,it(11))):(se(n.j,n.m,e,"[Invalid Chunked Response]"),qt(n),Ne(n))}_.mb=function(){if(this.g){var n=gt(this.g),t=this.g.ja();this.o<t.length&&(ur(this),wa(this,n,t),this.i&&n!=4&&un(this))}};function Rh(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?ii:(e=Number(t.substring(e,r)),isNaN(e)?va:(r+=1,r+e>t.length?ii:(t=t.slice(r,r+e),n.o=r+e,t)))}_.cancel=function(){this.J=!0,qt(this)};function un(n){n.Y=Date.now()+n.P,Aa(n,n.P)}function Aa(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=sn(et(n.lb,n),t)}function ur(n){n.C&&(I.clearTimeout(n.C),n.C=null)}_.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(Ih(this.j,this.B),this.L!=2&&(Ge(),it(17)),qt(this),this.s=2,Ne(this)):Aa(this,this.Y-n)};function Ne(n){n.l.H==0||n.J||Ka(n.l,n)}function qt(n){ur(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Mi(n.V),fa(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function oi(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||ai(e.i,n))){if(!n.K&&ai(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)$n(e),fr(e);else break t;Gi(e),it(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=sn(et(e.ib,e),6e3));if(1>=Na(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else jt(e,11)}else if((n.K||e.g==n)&&$n(e),!Be(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const l=c[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const p=n.g;if(p){const R=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var s=r.i;s.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(qi(s,s.h),s.h=null))}if(r.F){const S=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,k(r.I,r.F,S))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Wa(r,r.J?r.pa:null,r.Y),o.K){ka(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(ur(a),un(a)),r.g=o}else za(r);0<e.j.length&&mr(e)}else c[0]!="stop"&&c[0]!="close"||jt(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?jt(e,7):zi(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}Ge(4)}catch{}}function Sh(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Zn(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Ph(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Zn(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Ra(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Zn(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Ph(n),r=Sh(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ch(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Gt){this.h=n.h,qn(this,n.j),this.s=n.s,this.g=n.g,jn(this,n.m),this.l=n.l;var t=n.i,e=new Ke;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Ks(this,e),this.o=n.o}else n&&(t=String(n).match(Sa))?(this.h=!1,qn(this,t[1]||"",!0),this.s=Ce(t[2]||""),this.g=Ce(t[3]||"",!0),jn(this,t[4]),this.l=Ce(t[5]||"",!0),Ks(this,t[6]||"",!0),this.o=Ce(t[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}Gt.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Ve(t,Qs,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Ve(t,Qs,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Ve(e,e.charAt(0)=="/"?bh:Dh,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Ve(e,kh)),n.join("")};function Rt(n){return new Gt(n)}function qn(n,t,e){n.j=e?Ce(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function jn(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Ks(n,t,e){t instanceof Ke?(n.i=t,xh(n.i,n.h)):(e||(t=Ve(t,Nh)),n.i=new Ke(t,n.h))}function k(n,t,e){n.i.set(t,e)}function cr(n){return k(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ce(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ve(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Vh),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Vh(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Qs=/[#\/\?@]/g,Dh=/[#\?:]/g,bh=/[#\?]/g,Nh=/[#\?@]/g,kh=/#/g;function Ke(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Mt(n){n.g||(n.g=new Map,n.h=0,n.i&&Ch(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}_=Ke.prototype;_.add=function(n,t){Mt(this),this.i=null,n=Ee(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Pa(n,t){Mt(n),t=Ee(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Ca(n,t){return Mt(n),t=Ee(n,t),n.g.has(t)}_.forEach=function(n,t){Mt(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};_.ta=function(){Mt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};_.Z=function(n){Mt(this);let t=[];if(typeof n=="string")Ca(this,n)&&(t=t.concat(this.g.get(Ee(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};_.set=function(n,t){return Mt(this),this.i=null,n=Ee(this,n),Ca(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};_.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Va(n,t,e){Pa(n,t),0<e.length&&(n.i=null,n.g.set(Ee(n,t),Pi(e)),n.h+=e.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Ee(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function xh(n,t){t&&!n.j&&(Mt(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Pa(this,r),Va(this,i,e))},n)),n.j=t}var Oh=class{constructor(n,t){this.g=n,this.map=t}};function Da(n){this.l=n||Mh,I.PerformanceNavigationTiming?(n=I.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mh=10;function ba(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Na(n){return n.h?1:n.g?n.g.size:0}function ai(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function qi(n,t){n.g?n.g.add(t):n.h=t}function ka(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Da.prototype.cancel=function(){if(this.i=xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function xa(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Pi(n.i)}var Lh=class{stringify(n){return I.JSON.stringify(n,void 0)}parse(n){return I.JSON.parse(n,void 0)}};function Fh(){this.g=new Lh}function Uh(n,t,e){const r=e||"";try{Ra(n,function(i,s){let o=i;nn(i)&&(o=xi(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Bh(n,t){const e=new ir;if(I.Image){const r=new Image;r.onload=In(An,e,r,"TestLoadImage: loaded",!0,t),r.onerror=In(An,e,r,"TestLoadImage: error",!1,t),r.onabort=In(An,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=In(An,e,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function An(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function lr(n){this.l=n.ec||null,this.j=n.ob||!1}z(lr,Fi);lr.prototype.g=function(){return new hr(this.l,this.j)};lr.prototype.i=function(n){return function(){return n}}({});function hr(n,t){$.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=ji,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(hr,$);var ji=0;_=hr.prototype;_.open=function(n,t){if(this.readyState!=ji)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,Qe(this)};_.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=ji};_.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Oa(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Oa(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}_.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?cn(this):Qe(this),this.readyState==3&&Oa(this)}};_.Za=function(n){this.g&&(this.response=this.responseText=n,cn(this))};_.Ya=function(n){this.g&&(this.response=n,cn(this))};_.ka=function(){this.g&&cn(this)};function cn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Qe(n)}_.setRequestHeader=function(n,t){this.v.append(n,t)};_.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function Qe(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var qh=I.JSON.parse;function M(n){$.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ma,this.L=this.M=!1}z(M,$);var Ma="",jh=/^https?$/i,$h=["POST","PUT"];_=M.prototype;_.Oa=function(n){this.M=n};_.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ri.g(),this.C=this.u?Gs(this.u):Gs(ri),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Hs(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=I.FormData&&n instanceof I.FormData,!(0<=Jo($h,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ua(this),0<this.B&&((this.L=zh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Li(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Hs(this,s)}};function zh(n){return le&&typeof n.timeout=="number"&&n.ontimeout!==void 0}_.ua=function(){typeof Si<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function Hs(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,La(n),dr(n)}function La(n){n.F||(n.F=!0,Y(n,"complete"),Y(n,"error"))}_.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Y(this,"complete"),Y(this,"abort"),dr(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dr(this,!0)),M.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?Fa(this):this.kb())};_.kb=function(){Fa(this)};function Fa(n){if(n.h&&typeof Si<"u"&&(!n.C[1]||gt(n)!=4||n.da()!=2)){if(n.v&&gt(n)==4)Li(n.La,0,n);else if(Y(n,"readystatechange"),gt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Sa)[1]||null;!i&&I.self&&I.self.location&&(i=I.self.location.protocol.slice(0,-1)),r=!jh.test(i?i.toLowerCase():"")}e=r}if(e)Y(n,"complete"),Y(n,"success");else{n.m=6;try{var s=2<gt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",La(n)}}finally{dr(n)}}}}function dr(n,t){if(n.g){Ua(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Y(n,"ready");try{e.onreadystatechange=r}catch{}}}function Ua(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(I.clearTimeout(n.A),n.A=null)}_.isActive=function(){return!!this.g};function gt(n){return n.g?n.g.readyState:0}_.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),qh(t)}};function Ws(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Ma:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Gh(n){const t={};n=(n.g&&2<=gt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Be(n[r]))continue;var e=gh(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}ch(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ba(n){let t="";return Vi(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function $i(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Ba(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):k(n,t,e))}function Re(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function qa(n){this.Ga=0,this.j=[],this.l=new ir,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Re("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Re("baseRetryDelayMs",5e3,n),this.hb=Re("retryDelaySeedMs",1e4,n),this.eb=Re("forwardChannelMaxRetries",2,n),this.xa=Re("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Da(n&&n.concurrentRequestLimit),this.Ja=new Fh,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=qa.prototype;_.ra=8;_.H=1;function zi(n){if(ja(n),n.H==3){var t=n.W++,e=Rt(n.I);if(k(e,"SID",n.K),k(e,"RID",t),k(e,"TYPE","terminate"),ln(n,e),t=new an(n,n.l,t),t.L=2,t.A=cr(Rt(e)),e=!1,I.navigator&&I.navigator.sendBeacon)try{e=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&I.Image&&(new Image().src=t.A,e=!0),e||(t.g=Ya(t.l,null),t.g.ha(t.A)),t.G=Date.now(),un(t)}Ha(n)}function fr(n){n.g&&(Ki(n),n.g.cancel(),n.g=null)}function ja(n){fr(n),n.u&&(I.clearTimeout(n.u),n.u=null),$n(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&I.clearTimeout(n.m),n.m=null)}function mr(n){if(!ba(n.i)&&!n.m){n.m=!0;var t=n.Na;je||la(),$e||(je(),$e=!0),Oi.add(t,n),n.C=0}}function Kh(n,t){return Na(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=sn(et(n.Na,n,t),Qa(n,n.C)),n.C++,!0)}_.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new an(this,this.l,n);let s=this.s;if(this.U&&(s?(s=na(s),ra(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=$a(this,i,t),e=Rt(this.I),k(e,"RID",n),k(e,"CVER",22),this.F&&k(e,"X-HTTP-Session-Id",this.F),ln(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Ba(s)))+"&"+t:this.o&&$i(e,this.o,s)),qi(this.i,i),this.bb&&k(e,"TYPE","init"),this.P?(k(e,"$req",t),k(e,"SID","null"),i.aa=!0,si(i,e,null)):si(i,e,t),this.H=2}}else this.H==3&&(n?Ys(this,n):this.j.length==0||ba(this.i)||Ys(this))};function Ys(n,t){var e;t?e=t.m:e=n.W++;const r=Rt(n.I);k(r,"SID",n.K),k(r,"RID",e),k(r,"AID",n.V),ln(n,r),n.o&&n.s&&$i(r,n.o,n.s),e=new an(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=$a(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),qi(n.i,e),si(e,r,t)}function ln(n,t){n.na&&Vi(n.na,function(e,r){k(t,r,e)}),n.h&&Ra({},function(e,r){k(t,r,e)})}function $a(n,t,e){e=Math.min(n.j.length,e);var r=n.h?et(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{Uh(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function za(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;je||la(),$e||(je(),$e=!0),Oi.add(t,n),n.A=0}}function Gi(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=sn(et(n.Ma,n),Qa(n,n.A)),n.A++,!0)}_.Ma=function(){if(this.u=null,Ga(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=sn(et(this.jb,this),n)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),fr(this),Ga(this))};function Ki(n){n.B!=null&&(I.clearTimeout(n.B),n.B=null)}function Ga(n){n.g=new an(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Rt(n.wa);k(t,"RID","rpc"),k(t,"SID",n.K),k(t,"AID",n.V),k(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&k(t,"TO",n.qa),k(t,"TYPE","xmlhttp"),ln(n,t),n.o&&n.s&&$i(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=cr(Rt(t)),e.u=null,e.S=!0,Ta(e,n)}_.ib=function(){this.v!=null&&(this.v=null,fr(this),Gi(this),it(19))};function $n(n){n.v!=null&&(I.clearTimeout(n.v),n.v=null)}function Ka(n,t){var e=null;if(n.g==t){$n(n),Ki(n),n.g=null;var r=2}else if(ai(n.i,t))e=t.F,ka(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;r=sr(),Y(r,new ga(r,e)),mr(n)}else za(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Kh(n,t)||r==2&&Gi(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:jt(n,5);break;case 4:jt(n,10);break;case 3:jt(n,6);break;default:jt(n,2)}}}function Qa(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function jt(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=et(n.pb,n);e||(e=new Gt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||qn(e,"https"),cr(e)),Bh(e.toString(),r)}else it(2);n.H=0,n.h&&n.h.za(t),Ha(n),ja(n)}_.pb=function(n){n?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function Ha(n){if(n.H=0,n.ma=[],n.h){const t=xa(n.i);(t.length!=0||n.j.length!=0)&&(Bs(n.ma,t),Bs(n.ma,n.j),n.i.i.length=0,Pi(n.j),n.j.length=0),n.h.ya()}}function Wa(n,t,e){var r=e instanceof Gt?Rt(e):new Gt(e);if(r.g!="")t&&(r.g=t+"."+r.g),jn(r,r.m);else{var i=I.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Gt(null);r&&qn(s,r),t&&(s.g=t),i&&jn(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&k(r,e,t),k(r,"VER",n.ra),ln(n,r),r}function Ya(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new M(new lr({ob:e})):new M(n.va),t.Oa(n.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function Xa(){}_=Xa.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function zn(){if(le&&!(10<=Number(sh)))throw Error("Environmental error: no available transport.")}zn.prototype.g=function(n,t){return new lt(n,t)};function lt(n,t){$.call(this),this.g=new qa(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Be(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Be(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new ve(this)}z(lt,$);lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;it(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Wa(n,null,n.Y),mr(n)};lt.prototype.close=function(){zi(this.g)};lt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=xi(n),n=e);t.j.push(new Oh(t.fb++,n)),t.H==3&&mr(t)};lt.prototype.N=function(){this.g.h=null,delete this.j,zi(this.g),delete this.g,lt.$.N.call(this)};function Ja(n){Ui.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}z(Ja,Ui);function Za(){Bi.call(this),this.status=1}z(Za,Bi);function ve(n){this.g=n}z(ve,Xa);ve.prototype.Ba=function(){Y(this.g,"a")};ve.prototype.Aa=function(n){Y(this.g,new Ja(n))};ve.prototype.za=function(n){Y(this.g,new Za)};ve.prototype.ya=function(){Y(this.g,"b")};function Qh(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ft,Qh);ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ur(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}ft.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Ur(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ur(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Ur(this,r),i=0;break}}this.h=i,this.i+=t};ft.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function b(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Hh={};function Qi(n){return-128<=n&&128>n?nh(n,function(t){return new b([t|0],0>t?-1:0)}):new b([n|0],0>n?-1:0)}function _t(n){if(isNaN(n)||!isFinite(n))return ae;if(0>n)return H(_t(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=ui;return new b(t,0)}function tu(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return H(tu(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=_t(Math.pow(t,8)),r=ae,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=_t(Math.pow(t,s)),r=r.R(s).add(_t(o))):(r=r.R(e),r=r.add(_t(o)))}return r}var ui=4294967296,ae=Qi(0),ci=Qi(1),Xs=Qi(16777216);_=b.prototype;_.ea=function(){if(ht(this))return-H(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:ui+r)*t,t*=ui}return n};_.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(wt(this))return"0";if(ht(this))return"-"+H(this).toString(n);for(var t=_t(Math.pow(n,6)),e=this,r="";;){var i=Kn(e,t).g;e=Gn(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,wt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};_.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function wt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ht(n){return n.h==-1}_.X=function(n){return n=Gn(this,n),ht(n)?-1:wt(n)?0:1};function H(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new b(e,~n.h).add(ci)}_.abs=function(){return ht(this)?H(this):this};_.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new b(e,e[e.length-1]&-2147483648?-1:0)};function Gn(n,t){return n.add(H(t))}_.R=function(n){if(wt(this)||wt(n))return ae;if(ht(this))return ht(n)?H(this).R(H(n)):H(H(this).R(n));if(ht(n))return H(this.R(H(n)));if(0>this.X(Xs)&&0>n.X(Xs))return _t(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,Rn(e,2*r+2*i),e[2*r+2*i+1]+=s*u,Rn(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Rn(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Rn(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new b(e,0)};function Rn(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Se(n,t){this.g=n,this.h=t}function Kn(n,t){if(wt(t))throw Error("division by zero");if(wt(n))return new Se(ae,ae);if(ht(n))return t=Kn(H(n),t),new Se(H(t.g),H(t.h));if(ht(t))return t=Kn(n,H(t)),new Se(H(t.g),t.h);if(30<n.g.length){if(ht(n)||ht(t))throw Error("slowDivide_ only works with positive integers.");for(var e=ci,r=t;0>=r.X(n);)e=Js(e),r=Js(r);var i=ee(e,1),s=ee(r,1);for(r=ee(r,2),e=ee(e,2);!wt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=ee(r,1),e=ee(e,1)}return t=Gn(n,i.R(t)),new Se(i,t)}for(i=ae;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=_t(e),o=s.R(t);ht(o)||0<o.X(n);)e-=r,s=_t(e),o=s.R(t);wt(s)&&(s=ci),i=i.add(s),n=Gn(n,o)}return new Se(i,n)}_.gb=function(n){return Kn(this,n).h};_.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new b(e,this.h&n.h)};_.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new b(e,this.h|n.h)};_.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new b(e,this.h^n.h)};function Js(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new b(e,n.h)}function ee(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new b(i,n.h)}zn.prototype.createWebChannel=zn.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;or.NO_ERROR=0;or.TIMEOUT=8;or.HTTP_ERROR=6;_a.COMPLETE="complete";ya.EventType=on;on.OPEN="a";on.CLOSE="b";on.ERROR="c";on.MESSAGE="d";$.prototype.listen=$.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;ft.prototype.digest=ft.prototype.l;ft.prototype.reset=ft.prototype.reset;ft.prototype.update=ft.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=_t;b.fromString=tu;var Wh=function(){return new zn},Yh=function(){return sr()},Br=or,Xh=_a,Jh=Yt,Zs={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Sn=ya,Zh=M,td=ft,ue=b;const to="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Te="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Ko("@firebase/firestore");function Pe(){return Qt.logLevel}function g(n,...t){if(Qt.logLevel<=V.DEBUG){const e=t.map(Hi);Qt.debug(`Firestore (${Te}): ${n}`,...e)}}function vt(n,...t){if(Qt.logLevel<=V.ERROR){const e=t.map(Hi);Qt.error(`Firestore (${Te}): ${n}`,...e)}}function he(n,...t){if(Qt.logLevel<=V.WARN){const e=t.map(Hi);Qt.warn(`Firestore (${Te}): ${n}`,...e)}}function Hi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(n="Unexpected state"){const t=`FIRESTORE (${Te}) INTERNAL ASSERTION FAILED: `+n;throw vt(t),new Error(t)}function N(n,t){n||T()}function A(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Z.UNAUTHENTICATED))}shutdown(){}}class nd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new At;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new At,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new At)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(N(typeof r.accessToken=="string"),new eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return N(t===null||typeof t=="string"),new Z(t)}}class id{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new id(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class od{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ad{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(N(typeof e.token=="string"),this.R=e.token,new od(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ud(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function D(n,t){return n<t?-1:n>t?1:0}function de(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new q(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new q(0,0))}static max(){return new w(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e,r){e===void 0?e=0:e>t.length&&T(),r===void 0?r=t.length-e:r>t.length-e&&T(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class x extends He{construct(t,e,r){return new x(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new x(e)}static emptyPath(){return new x([])}}const cd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends He{construct(t,e,r){return new W(t,e,r)}static isValidIdentifier(t){return cd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(e)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(x.fromString(t))}static fromName(t){return new E(x.fromString(t).popFirst(5))}static empty(){return new E(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return x.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new x(t.slice()))}}function ld(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=w.fromTimestamp(r===1e9?new q(e+1,0):new q(e,r));return new bt(i,E.empty(),t)}function hd(n){return new bt(n.readTime,n.key,-1)}class bt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new bt(w.min(),E.empty(),-1)}static max(){return new bt(w.max(),E.empty(),-1)}}function dd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=E.comparator(n.documentKey,t.documentKey),e!==0?e:D(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class md{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==fd)throw n;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(i=>i?m.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new m((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;e(t[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new m((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new At,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new ke(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Yi(r.target.error);this.V.reject(new ke(t,i))}}static open(t,e,r,i){try{return new Wi(e,t.transaction(i,r))}catch(s){throw new ke(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(g("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new gd(e)}}class $t{constructor(t,e,r){this.name=t,this.version=e,this.p=r,$t.S(Fn())===12.2&&vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return g("SimpleDb","Removing database:",t),Bt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!zo())return!1;if($t.C())return!0;const t=Fn(),e=$t.S(t),r=0<e&&e<10,i=$t.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new ke(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ke(t,o))},i.onupgradeneeded=s=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Wi.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),m.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(g("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class pd{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Bt(this.k.delete())}}class ke extends y{constructor(t,e){super(f.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function dn(n){return n.name==="IndexedDbTransactionError"}class gd{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(g("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Bt(r)}add(t){return g("SimpleDb","ADD",this.store.name,t,t),Bt(this.store.add(t))}get(t){return Bt(this.store.get(t)).next(e=>(e===void 0&&(e=null),g("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return g("SimpleDb","DELETE",this.store.name,t),Bt(this.store.delete(t))}count(){return g("SimpleDb","COUNT",this.store.name),Bt(this.store.count())}W(t,e){const r=this.options(t,e),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new m((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){g("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new m((r,i)=>{e.onerror=s=>{const o=Yi(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new m((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new pd(a),c=e(a.primaryKey,a.value,u);if(c instanceof m){const l=c.catch(h=>(u.done(),m.reject(h)));r.push(l)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>m.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Bt(n){return new m((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Yi(r.target.error);e(i)}})}let eo=!1;function Yi(n){const t=$t.S(Fn());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eo||(eo=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Xi._e=-1;function pr(n){return n==null}function Qn(n){return n===0&&1/n==-1/0}function _d(n){return typeof n=="number"&&Number.isInteger(n)&&!Qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Xt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ru(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.comparator=t,this.root=e||Q.EMPTY}insert(t,e){return new O(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Q.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Q.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pn(this.root,t,this.comparator,!0)}}class Pn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Q{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Q.RED,this.left=i??Q.EMPTY,this.right=s??Q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Q(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Q.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}Q.EMPTY=null,Q.RED=!0,Q.BLACK=!1;Q.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Q(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(t){return new ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new X(this.comparator);return e.data=t,e}}class ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new ut([])}unionWith(t){let e=new X(W.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iu("Invalid base64 string: "+s):s}}(t);return new rt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const yd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(N(!!n),typeof n=="string"){let t=0;const e=yd.exec(n);if(N(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(n.seconds),nanos:U(n.nanos)}}function U(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?rt.fromBase64String(n):rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Zi(n){const t=n.mapValue.fields.__previous_value__;return Ji(t)?Zi(t):t}function We(n){const t=Nt(n.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,e,r,i,s,o,a,u,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ye{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ye("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ye&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ji(n)?4:vd(n)?9007199254740991:10:T()}function Tt(n,t){if(n===t)return!0;const e=Wt(n);if(e!==Wt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return We(n).isEqual(We(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nt(i.timestampValue),a=Nt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Ht(i.bytesValue).isEqual(Ht(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return U(i.geoPointValue.latitude)===U(s.geoPointValue.latitude)&&U(i.geoPointValue.longitude)===U(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return U(i.integerValue)===U(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=U(i.doubleValue),a=U(s.doubleValue);return o===a?Qn(o)===Qn(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return de(n.arrayValue.values||[],t.arrayValue.values||[],Tt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(no(o)!==no(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Tt(o[u],a[u])))return!1;return!0}(n,t);default:return T()}}function Xe(n,t){return(n.values||[]).find(e=>Tt(e,t))!==void 0}function fe(n,t){if(n===t)return 0;const e=Wt(n),r=Wt(t);if(e!==r)return D(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=U(s.integerValue||s.doubleValue),u=U(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return io(n.timestampValue,t.timestampValue);case 4:return io(We(n),We(t));case 5:return D(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Ht(s),u=Ht(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=D(a[c],u[c]);if(l!==0)return l}return D(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=D(U(s.latitude),U(o.latitude));return a!==0?a:D(U(s.longitude),U(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=fe(a[c],u[c]);if(l)return l}return D(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Cn.mapValue&&o===Cn.mapValue)return 0;if(s===Cn.mapValue)return 1;if(o===Cn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=D(u[h],l[h]);if(d!==0)return d;const p=fe(a[u[h]],c[l[h]]);if(p!==0)return p}return D(u.length,l.length)}(n.mapValue,t.mapValue);default:throw T()}}function io(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return D(n,t);const e=Nt(n),r=Nt(t),i=D(e.seconds,r.seconds);return i!==0?i:D(e.nanos,r.nanos)}function me(n){return li(n)}function li(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Nt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ht(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return E.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=li(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${li(e.fields[o])}`;return i+"}"}(n.mapValue):T()}function so(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function hi(n){return!!n&&"integerValue"in n}function ts(n){return!!n&&"arrayValue"in n}function oo(n){return!!n&&"nullValue"in n}function ao(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kn(n){return!!n&&"mapValue"in n}function xe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Xt(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=xe(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function vd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!kn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xe(e)}setAll(t){let e=W.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=xe(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());kn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Tt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Xt(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new st(xe(this.value))}}function su(n){const t=[];return Xt(n.fields,(e,r)=>{const i=new W([e]);if(kn(r)){const s=su(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new tt(t,0,w.min(),w.min(),w.min(),st.empty(),0)}static newFoundDocument(t,e,r,i){return new tt(t,1,e,w.min(),r,i,0)}static newNoDocument(t,e){return new tt(t,2,e,w.min(),w.min(),st.empty(),0)}static newUnknownDocument(t,e){return new tt(t,3,e,w.min(),w.min(),st.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function uo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),e.key):r=fe(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function co(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Tt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e="asc"){this.field=t,this.dir=e}}function Td(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{}class B extends ou{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new wd(t,e,r):e==="array-contains"?new Sd(t,r):e==="in"?new Pd(t,r):e==="not-in"?new Cd(t,r):e==="array-contains-any"?new Vd(t,r):new B(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ad(t,r):new Rd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(fe(e,this.value)):e!==null&&Wt(this.value)===Wt(e)&&this.matchesComparison(fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mt extends ou{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new mt(t,e)}matches(t){return au(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function au(n){return n.op==="and"}function uu(n){return Id(n)&&au(n)}function Id(n){for(const t of n.filters)if(t instanceof mt)return!1;return!0}function di(n){if(n instanceof B)return n.field.canonicalString()+n.op.toString()+me(n.value);if(uu(n))return n.filters.map(t=>di(t)).join(",");{const t=n.filters.map(e=>di(e)).join(",");return`${n.op}(${t})`}}function cu(n,t){return n instanceof B?function(r,i){return i instanceof B&&r.op===i.op&&r.field.isEqual(i.field)&&Tt(r.value,i.value)}(n,t):n instanceof mt?function(r,i){return i instanceof mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&cu(o,i.filters[a]),!0):!1}(n,t):void T()}function lu(n){return n instanceof B?function(e){return`${e.field.canonicalString()} ${e.op} ${me(e.value)}`}(n):n instanceof mt?function(e){return e.op.toString()+" {"+e.getFilters().map(lu).join(" ,")+"}"}(n):"Filter"}class wd extends B{constructor(t,e,r){super(t,e,r),this.key=E.fromName(r.referenceValue)}matches(t){const e=E.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ad extends B{constructor(t,e){super(t,"in",e),this.keys=hu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Rd extends B{constructor(t,e){super(t,"not-in",e),this.keys=hu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function hu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>E.fromName(r.referenceValue))}class Sd extends B{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ts(e)&&Xe(e.arrayValue,this.value)}}class Pd extends B{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Xe(this.value.arrayValue,e)}}class Cd extends B{constructor(t,e){super(t,"not-in",e)}matches(t){if(Xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Xe(this.value.arrayValue,e)}}class Vd extends B{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ts(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Xe(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function lo(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Dd(n,t,e,r,i,s,o)}function es(n){const t=A(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>di(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>me(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>me(r)).join(",")),t.ce=e}return t.ce}function ns(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Td(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!cu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!co(n.startAt,t.startAt)&&co(n.endAt,t.endAt)}function fi(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function bd(n,t,e,r,i,s,o,a){return new Ie(n,t,e,r,i,s,o,a)}function du(n){return new Ie(n)}function ho(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fu(n){return n.collectionGroup!==null}function Oe(n){const t=A(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new X(W.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Je(s,r))}),e.has(W.keyField().canonicalString())||t.le.push(new Je(W.keyField(),r))}return t.le}function yt(n){const t=A(n);return t.he||(t.he=Nd(t,Oe(n))),t.he}function Nd(n,t){if(n.limitType==="F")return lo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Je(i.field,s)});const e=n.endAt?new Hn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hn(n.startAt.position,n.startAt.inclusive):null;return lo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function mi(n,t){const e=n.filters.concat([t]);return new Ie(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function pi(n,t,e){return new Ie(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function gr(n,t){return ns(yt(n),yt(t))&&n.limitType===t.limitType}function mu(n){return`${es(yt(n))}|lt:${n.limitType}`}function ne(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>lu(i)).join(", ")}]`),pr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>me(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>me(i)).join(",")),`Target(${r})`}(yt(n))}; limitType=${n.limitType})`}function _r(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Oe(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=uo(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Oe(r),i)||r.endAt&&!function(o,a,u){const c=uo(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Oe(r),i))}(n,t)}function kd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pu(n){return(t,e)=>{let r=!1;for(const i of Oe(n)){const s=xd(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xd(n,t,e){const r=n.field.isKeyField()?E.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?fe(u,c):T()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Xt(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return ru(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new O(E.comparator);function St(){return Od}const gu=new O(E.comparator);function De(...n){let t=gu;for(const e of n)t=t.insert(e.key,e);return t}function _u(n){let t=gu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function zt(){return Me()}function yu(){return Me()}function Me(){return new we(n=>n.toString(),(n,t)=>n.isEqual(t))}const Md=new O(E.comparator),Ld=new X(E.comparator);function P(...n){let t=Ld;for(const e of n)t=t.add(e);return t}const Fd=new X(D);function Ud(){return Fd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qn(t)?"-0":t}}function vu(n){return{integerValue:""+n}}function Bd(n,t){return _d(t)?vu(t):Eu(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this._=void 0}}function qd(n,t,e){return n instanceof Ze?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ji(s)&&(s=Zi(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof tn?Iu(n,t):n instanceof en?wu(n,t):function(i,s){const o=Tu(i,s),a=fo(o)+fo(i.Ie);return hi(o)&&hi(i.Ie)?vu(a):Eu(i.serializer,a)}(n,t)}function jd(n,t,e){return n instanceof tn?Iu(n,t):n instanceof en?wu(n,t):e}function Tu(n,t){return n instanceof Wn?function(r){return hi(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Ze extends yr{}class tn extends yr{constructor(t){super(),this.elements=t}}function Iu(n,t){const e=Au(t);for(const r of n.elements)e.some(i=>Tt(i,r))||e.push(r);return{arrayValue:{values:e}}}class en extends yr{constructor(t){super(),this.elements=t}}function wu(n,t){let e=Au(t);for(const r of n.elements)e=e.filter(i=>!Tt(i,r));return{arrayValue:{values:e}}}class Wn extends yr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function fo(n){return U(n.integerValue||n.doubleValue)}function Au(n){return ts(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e){this.field=t,this.transform=e}}function zd(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof tn&&i instanceof tn||r instanceof en&&i instanceof en?de(r.elements,i.elements,Tt):r instanceof Wn&&i instanceof Wn?Tt(r.Ie,i.Ie):r instanceof Ze&&i instanceof Ze}(n.transform,t.transform)}class Gd{constructor(t,e){this.version=t,this.transformResults=e}}class ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ct}static exists(t){return new ct(void 0,t)}static updateTime(t){return new ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Er{}function Ru(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new rs(n.key,ct.none()):new fn(n.key,n.data,ct.none());{const e=n.data,r=st.empty();let i=new X(W.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Lt(n.key,r,new ut(i.toArray()),ct.none())}}function Kd(n,t,e){n instanceof fn?function(i,s,o){const a=i.value.clone(),u=po(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Lt?function(i,s,o){if(!xn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=po(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Su(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Le(n,t,e,r){return n instanceof fn?function(s,o,a,u){if(!xn(s.precondition,o))return a;const c=s.value.clone(),l=go(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Lt?function(s,o,a,u){if(!xn(s.precondition,o))return a;const c=go(s.fieldTransforms,u,o),l=o.data;return l.setAll(Su(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return xn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Qd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Tu(r.transform,i||null);s!=null&&(e===null&&(e=st.empty()),e.set(r.field,s))}return e||null}function mo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&de(r,i,(s,o)=>zd(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class fn extends Er{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lt extends Er{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Su(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function po(n,t,e){const r=new Map;N(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,jd(o,a,e[i]))}return r}function go(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,qd(s,o,t))}return r}class rs extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hd extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Kd(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Le(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Le(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=yu();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=Ru(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),P())}isEqual(t){return this.batchId===t.batchId&&de(this.mutations,t.mutations,(e,r)=>mo(e,r))&&de(this.baseMutations,t.baseMutations,(e,r)=>mo(e,r))}}class is{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){N(t.mutations.length===r.length);let i=function(){return Md}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new is(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function Jd(n){switch(n){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Pu(n){if(n===void 0)return vt("GRPC error has no .code"),f.UNKNOWN;switch(n){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new ue([4294967295,4294967295],0);function _o(n){const t=Zd().encode(n),e=new td;return e.update(t),new Uint8Array(e.digest())}function yo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ue([e,r],0),new ue([i,s],0)]}class ss{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new be(`Invalid padding: ${e}`);if(r<0)throw new be(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new be(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new be(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=ue.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(ue.fromNumber(r)));return i.compare(tf)===1&&(i=new ue([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=_o(t),[r,i]=yo(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new ss(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=_o(t),[r,i]=yo(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class be extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,mn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new vr(w.min(),i,new O(D),St(),P())}}class mn{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new mn(r,e,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class Cu{constructor(t,e){this.targetId=t,this.fe=e}}class Vu{constructor(t,e,r=rt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Eo{constructor(){this.ge=0,this.pe=To(),this.ye=rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),e=P(),r=P();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:T()}}),new mn(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=To()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,N(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class ef{constructor(t){this.Be=t,this.ke=new Map,this.qe=St(),this.Qe=vo(),this.Ke=new O(D)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:T()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(fi(s))if(r===0){const o=new E(s.path);this.We(e,o,tt.newNoDocument(o,w.min()))}else N(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=Ht(r).toUint8Array()}catch(u){if(u instanceof iu)return he("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ss(o,i,s)}catch(u){return he(u instanceof be?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Be.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&fi(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,tt.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=P();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new vr(t,e,this.Ke,this.qe,r);return this.qe=St(),this.Qe=vo(),this.Ke=new O(D),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Eo,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new X(D),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||g("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Be._t(t)}He(t){this.ke.set(t,new Eo),this.Be.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Be.getRemoteKeysForTarget(t).has(e)}}function vo(){return new O(E.comparator)}function To(){return new O(E.comparator)}const nf={asc:"ASCENDING",desc:"DESCENDING"},rf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sf={and:"AND",or:"OR"};class of{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gi(n,t){return n.useProto3Json||pr(t)?t:{value:t}}function Yn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Du(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function af(n,t){return Yn(n,t.toTimestamp())}function Et(n){return N(!!n),w.fromTimestamp(function(e){const r=Nt(e);return new q(r.seconds,r.nanos)}(n))}function os(n,t){return _i(n,t).canonicalString()}function _i(n,t){const e=function(i){return new x(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function bu(n){const t=x.fromString(n);return N(Mu(t)),t}function yi(n,t){return os(n.databaseId,t.path)}function qr(n,t){const e=bu(t);if(e.get(1)!==n.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new E(ku(e))}function Nu(n,t){return os(n.databaseId,t)}function uf(n){const t=bu(n);return t.length===4?x.emptyPath():ku(t)}function Ei(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ku(n){return N(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Io(n,t,e){return{name:yi(n,t),fields:e.value.mapValue.fields}}function cf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(N(l===void 0||typeof l=="string"),rt.fromBase64String(l||"")):(N(l===void 0||l instanceof Uint8Array),rt.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?f.UNKNOWN:Pu(c.code);return new y(l,c.message||"")}(o);e=new Vu(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=qr(n,r.document.name),s=Et(r.document.updateTime),o=r.document.createTime?Et(r.document.createTime):w.min(),a=new st({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];e=new On(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=qr(n,r.document),s=r.readTime?Et(r.readTime):w.min(),o=tt.newNoDocument(i,s),a=r.removedTargetIds||[];e=new On([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=qr(n,r.document),s=r.removedTargetIds||[];e=new On([],s,i,null)}else{if(!("filter"in t))return T();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Xd(i,s),a=r.targetId;e=new Cu(a,o)}}return e}function lf(n,t){let e;if(t instanceof fn)e={update:Io(n,t.key,t.value)};else if(t instanceof rs)e={delete:yi(n,t.key)};else if(t instanceof Lt)e={update:Io(n,t.key,t.data),updateMask:Ef(t.fieldMask)};else{if(!(t instanceof Hd))return T();e={verify:yi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ze)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof tn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof en)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Wn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:af(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(n,t.precondition)),e}function hf(n,t){return n&&n.length>0?(N(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?Et(i.updateTime):Et(s);return o.isEqual(w.min())&&(o=Et(s)),new Gd(o,i.transformResults||[])}(e,t))):[]}function df(n,t){return{documents:[Nu(n,t.path)]}}function ff(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Nu(n,i);const s=function(c){if(c.length!==0)return Ou(mt.create(c,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(l=>function(d){return{field:re(d.field),direction:gf(d.dir)}}(l))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=gi(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:e,parent:i}}function mf(n){let t=uf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){N(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=xu(h);return d instanceof mt&&uu(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(R){return new Je(ie(R.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,pr(d)?null:d}(e.limit));let u=null;e.startAt&&(u=function(h){const d=!!h.before,p=h.values||[];return new Hn(p,d)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Hn(p,d)}(e.endAt)),bd(t,i,o,s,a,"F",u,c)}function pf(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ie(e.unaryFilter.field);return B.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ie(e.unaryFilter.field);return B.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ie(e.unaryFilter.field);return B.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ie(e.unaryFilter.field);return B.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(n):n.fieldFilter!==void 0?function(e){return B.create(ie(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return mt.create(e.compositeFilter.filters.map(r=>xu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(n):T()}function gf(n){return nf[n]}function _f(n){return rf[n]}function yf(n){return sf[n]}function re(n){return{fieldPath:n.canonicalString()}}function ie(n){return W.fromServerFormat(n.fieldPath)}function Ou(n){return n instanceof B?function(e){if(e.op==="=="){if(ao(e.value))return{unaryFilter:{field:re(e.field),op:"IS_NAN"}};if(oo(e.value))return{unaryFilter:{field:re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ao(e.value))return{unaryFilter:{field:re(e.field),op:"IS_NOT_NAN"}};if(oo(e.value))return{unaryFilter:{field:re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:re(e.field),op:_f(e.op),value:e.value}}}(n):n instanceof mt?function(e){const r=e.getFilters().map(i=>Ou(i));return r.length===1?r[0]:{compositeFilter:{op:yf(e.op),filters:r}}}(n):T()}function Ef(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e,r,i,s=w.min(),o=w.min(),a=rt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Pt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t){this.ct=t}}function Tf(n){const t=mf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this._n=new wf}addToCollectionParentIndex(t,e){return this._n.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(bt.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class wf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new X(x.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new X(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new pe(0)}static Ln(){return new pe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.changes=new we(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Le(r.mutation,i,ut.empty(),q.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,e,r=P()){const i=zt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=De();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=zt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,P()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=St();const o=Me(),a=function(){return Me()}();return e.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Lt)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Le(l.mutation,c,l.mutation.getFieldMask(),q.now())):o.set(c.key,ut.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),e.forEach((c,l)=>{var h;return a.set(c,new Rf(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Me();let i=new O((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let l=r.get(u)||ut.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||P()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=yu();l.forEach(d=>{if(!s.has(d)){const p=Ru(e.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):m.resolve(zt());let a=-1,u=s;return o.next(c=>m.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,P())).next(l=>({batchId:a,changes:_u(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new E(e)).next(r=>{let i=De();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=De();return this.indexManager.getCollectionParents(t,s).next(a=>m.forEach(a,u=>{const c=function(h,d){return new Ie(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,tt.newInvalidDocument(l)))});let a=De();return o.forEach((u,c)=>{const l=s.get(u);l!==void 0&&Le(l.mutation,c,ut.empty(),q.now()),_r(e,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return m.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Et(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:Tf(i.bundledQuery),readTime:Et(i.readTime)}}(e)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.overlays=new O(E.comparator),this.hr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=zt();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const i=zt(),s=e.length+1,o=new E(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new O((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=zt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=zt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return m.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Yd(e,r));let s=this.hr.get(e);s===void 0&&(s=P(),this.hr.set(e,s)),this.hr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.Pr=new X(j.Ir),this.Tr=new X(j.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new j(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new j(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new E(new x([])),r=new j(e,t),i=new j(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new E(new x([])),r=new j(e,t),i=new j(e,t+1);let s=P();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new j(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class j{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return E.comparator(t.key,e.key)||D(t.pr,e.pr)}static Er(t,e){return D(t.pr,e.pr)||E.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new X(j.Ir)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wd(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new j(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new j(e,0),i=new j(e,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new X(D);return e.forEach(i=>{const s=new j(i,0),o=new j(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),m.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new j(new E(s),0);let a=new X(D);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),m.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){N(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return m.forEach(e.mutations,i=>{const s=new j(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new j(e,0),i=this.wr.firstAfterOrEqual(r);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){this.vr=t,this.docs=function(){return new O(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(e))}getEntries(t,e){let r=St();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=St();const o=e.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||dd(hd(l),r)<=0||(i.has(l.key)||_r(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,e,r,i){T()}Fr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new bf(this)}getSize(t){return m.resolve(this.size)}}class bf extends Af{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){this.persistence=t,this.Mr=new we(e=>es(e),ns),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Or=0,this.Nr=new as,this.targetCount=0,this.Lr=pe.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),m.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new pe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.qn(e),m.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e){this.Br={},this.overlays={},this.kr=new Xi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Nf(this),this.indexManager=new If,this.remoteDocumentCache=function(i){return new Df(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new vf(e),this.$r=new Pf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Cf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Vf(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){g("MemoryPersistence","Starting transaction:",t);const i=new xf(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,e){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class xf extends md{constructor(t){super(),this.currentSequenceNumber=t}}class us{constructor(t){this.persistence=t,this.zr=new as,this.jr=null}static Hr(t){return new us(t)}get Jr(){if(this.jr)return this.jr;throw T()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),m.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Jr,r=>{const i=E.fromPath(r);return this.Yr(t,i).next(s=>{s||e.removeEntry(i,w.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return m.or([()=>m.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=P(),i=P();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return xc()?8:$t.v(Fn())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Of;return this.Ji(t,e,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>s.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(Pe()<=V.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",ne(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),m.resolve()):(Pe()<=V.DEBUG&&g("QueryEngine","Query:",ne(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Pe()<=V.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",ne(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,yt(e))):m.resolve())}ji(t,e){if(ho(e))return m.resolve(null);let r=yt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=pi(e,null,"F"),r=yt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=P(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(e,a);return this.Xi(e,c,o,u.readTime)?this.ji(t,pi(e,null,"F")):this.es(t,c,e,u)}))})))}Hi(t,e,r,i){return ho(e)||i.isEqual(w.min())?m.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(e,s);return this.Xi(e,o,r,i)?m.resolve(null):(Pe()<=V.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ne(e)),this.es(t,o,e,ld(i,-1)).next(a=>a))})}Zi(t,e){let r=new X(pu(t));return e.forEach((i,s)=>{_r(t,s)&&(r=r.add(s))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,e,r){return Pe()<=V.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",ne(e)),this.zi.getDocumentsMatchingQuery(t,e,bt.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new O(D),this.rs=new we(s=>es(s),ns),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Ff(n,t,e,r){return new Lf(n,t,e,r)}async function Lu(n,t){const e=A(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=P();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Uf(n,t){const e=A(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,d=h.keys();let p=m.resolve();return d.forEach(R=>{p=p.next(()=>l.getEntry(u,R)).next(S=>{const v=c.docVersions.get(R);N(v!==null),S.version.compareTo(v)<0&&(h.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),l.addEntry(S)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=P();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Fu(n){const t=A(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Bf(n,t){const e=A(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.Qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(S,v,L){return S.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(d,p,l)&&a.push(e.Qr.updateTargetData(s,p))});let u=St(),c=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(qf(s,o,t.documentUpdates).next(l=>{u=l.cs,c=l.ls})),!r.isEqual(w.min())){const l=e.Qr.getLastRemoteSnapshotVersion(s).next(h=>e.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(e.ns=i,s))}function qf(n,t,e){let r=P(),i=P();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=St();return e.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(w.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):g("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function jf(n,t){const e=A(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function $f(n,t){const e=A(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):e.Qr.allocateTargetId(r).next(o=>(i=new Pt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function vi(n,t,e){const r=A(n),i=r.ns.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!dn(o))throw o;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function wo(n,t,e){const r=A(n);let i=w.min(),s=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=A(u),d=h.rs.get(l);return d!==void 0?m.resolve(h.ns.get(d)):h.Qr.getTargetData(c,l)}(r,o,yt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?i:w.min(),e?s:P())).next(a=>(zf(r,kd(t),a),{documents:a,hs:s})))}function zf(n,t,e){let r=n.ss.get(t)||w.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(t,r)}class Ao{constructor(){this.activeTargetIds=Ud()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gf{constructor(){this.no=new Ao,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ao,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn=null;function jr(){return Vn===null?Vn=function(){return 268435456+Math.round(2147483648*Math.random())}():Vn++,"0x"+Vn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="WebChannelConnection";class Wf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(e,r,i,s,o){const a=jr(),u=this.bo(e,r.toUriEncodedString());g("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(e,u,c,i).then(l=>(g("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw he("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}vo(e,r,i,s,o,a){return this.So(e,r,i,s,o)}Do(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Te}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}bo(e,r){const i=Qf[e];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,i){const s=jr();return new Promise((o,a)=>{const u=new Zh;u.setWithCredentials(!0),u.listenOnce(Xh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Br.NO_ERROR:const l=u.getResponseJson();g(J,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Br.TIMEOUT:g(J,`RPC '${t}' ${s} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const h=u.getStatus();if(g(J,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const R=function(v){const L=v.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(L)>=0?L:f.UNKNOWN}(p.status);a(new y(R,p.message))}else a(new y(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{g(J,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);g(J,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",c,r,15)})}Fo(t,e,r){const i=jr(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Wh(),a=Yh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const l=s.join("");g(J,`Creating RPC '${t}' stream ${i}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,p=!1;const R=new Hf({lo:v=>{p?g(J,`Not sending because RPC '${t}' stream ${i} is closed:`,v):(d||(g(J,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),g(J,`RPC '${t}' stream ${i} sending:`,v),h.send(v))},ho:()=>h.close()}),S=(v,L,G)=>{v.listen(L,at=>{try{G(at)}catch(It){setTimeout(()=>{throw It},0)}})};return S(h,Sn.EventType.OPEN,()=>{p||g(J,`RPC '${t}' stream ${i} transport opened.`)}),S(h,Sn.EventType.CLOSE,()=>{p||(p=!0,g(J,`RPC '${t}' stream ${i} transport closed`),R.Vo())}),S(h,Sn.EventType.ERROR,v=>{p||(p=!0,he(J,`RPC '${t}' stream ${i} transport errored:`,v),R.Vo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),S(h,Sn.EventType.MESSAGE,v=>{var L;if(!p){const G=v.data[0];N(!!G);const at=G,It=at.error||((L=at[0])===null||L===void 0?void 0:L.error);if(It){g(J,`RPC '${t}' stream ${i} received error:`,It);const vn=It.status;let te=function(_c){const Ds=F[_c];if(Ds!==void 0)return Pu(Ds)}(vn),Tn=It.message;te===void 0&&(te=f.INTERNAL,Tn="Unknown error status: "+vn+" with message "+It.message),p=!0,R.Vo(new y(te,Tn)),h.close()}else g(J,`RPC '${t}' stream ${i} received:`,G),R.mo(G)}}),S(a,Jh.STAT_EVENT,v=>{v.stat===Zs.PROXY?g(J,`RPC '${t}' stream ${i} detected buffering proxy`):v.stat===Zs.NOPROXY&&g(J,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.Ro()},0),R}}function $r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){return new of(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t,e,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&g("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,e,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Uu(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===f.RESOURCE_EXHAUSTED?(vt(e.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===e&&this.o_(r,i)},r=>{t(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return g("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yf extends Bu{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=cf(this.serializer,t),r=function(s){if(!("targetChange"in s))return w.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?Et(o.readTime):w.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Ei(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=fi(u)?{documents:df(s,u)}:{query:ff(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Du(s,o.resumeToken);const c=gi(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=Yn(s,o.snapshotVersion.toTimestamp());const c=gi(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=pf(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Ei(this.serializer),e.removeTarget=t,this.t_(e)}}class Xf extends Bu{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(N(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=hf(t.writeResults,t.commitTime),r=Et(t.commitTime);return this.listener.T_(r,e)}return N(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Ei(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>lf(this.serializer,r))};this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,_i(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}vo(t,e,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,_i(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(f.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Zf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(vt(e),this.g_=!1):g("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Jt(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=A(u);c.v_.add(4),await pn(c),c.x_.set("Unknown"),c.v_.delete(4),await Ir(c)}(this))})}),this.x_=new Zf(r,i)}}async function Ir(n){if(Jt(n))for(const t of n.F_)await t(!0)}async function pn(n){for(const t of n.F_)await t(!1)}function qu(n,t){const e=A(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),fs(e)?ds(e):Ae(e).Jo()&&hs(e,t))}function ls(n,t){const e=A(n),r=Ae(e);e.C_.delete(t),r.Jo()&&ju(e,t),e.C_.size===0&&(r.Jo()?r.Xo():Jt(e)&&e.x_.set("Unknown"))}function hs(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ae(n).c_(t)}function ju(n,t){n.O_.Oe(t),Ae(n).l_(t)}function ds(n){n.O_=new ef({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Ae(n).start(),n.x_.p_()}function fs(n){return Jt(n)&&!Ae(n).Ho()&&n.C_.size>0}function Jt(n){return A(n).v_.size===0}function $u(n){n.O_=void 0}async function em(n){n.C_.forEach((t,e)=>{hs(n,t)})}async function nm(n,t){$u(n),fs(n)?(n.x_.S_(t),ds(n)):n.x_.set("Unknown")}async function rm(n,t,e){if(n.x_.set("Online"),t instanceof Vu&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Xn(n,r)}else if(t instanceof On?n.O_.$e(t):t instanceof Cu?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(w.min()))try{const r=await Fu(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.C_.get(c);l&&s.C_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.C_.get(u);if(!l)return;s.C_.set(u,l.withResumeToken(rt.EMPTY_BYTE_STRING,l.snapshotVersion)),ju(s,u);const h=new Pt(l.target,u,c,l.sequenceNumber);hs(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){g("RemoteStore","Failed to raise snapshot:",r),await Xn(n,r)}}async function Xn(n,t,e){if(!dn(t))throw t;n.v_.add(1),await pn(n),n.x_.set("Offline"),e||(e=()=>Fu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await Ir(n)})}function zu(n,t){return t().catch(e=>Xn(n,e,t))}async function wr(n){const t=A(n),e=kt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;im(t);)try{const i=await jf(t.localStore,r);if(i===null){t.D_.length===0&&e.Xo();break}r=i.batchId,sm(t,i)}catch(i){await Xn(t,i)}Gu(t)&&Ku(t)}function im(n){return Jt(n)&&n.D_.length<10}function sm(n,t){n.D_.push(t);const e=kt(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function Gu(n){return Jt(n)&&!kt(n).Ho()&&n.D_.length>0}function Ku(n){kt(n).start()}async function om(n){kt(n).d_()}async function am(n){const t=kt(n);for(const e of n.D_)t.I_(e.mutations)}async function um(n,t,e){const r=n.D_.shift(),i=is.from(r,t,e);await zu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await wr(n)}async function cm(n,t){t&&kt(n).P_&&await async function(r,i){if(function(o){return Jd(o)&&o!==f.ABORTED}(i.code)){const s=r.D_.shift();kt(r).Zo(),await zu(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wr(r)}}(n,t),Gu(n)&&Ku(n)}async function So(n,t){const e=A(n);e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=Jt(e);e.v_.add(3),await pn(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await Ir(e)}async function lm(n,t){const e=A(n);t?(e.v_.delete(2),await Ir(e)):t||(e.v_.add(2),await pn(e),e.x_.set("Unknown"))}function Ae(n){return n.N_||(n.N_=function(e,r,i){const s=A(e);return s.R_(),new Yf(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:em.bind(null,n),To:nm.bind(null,n),u_:rm.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),fs(n)?ds(n):n.x_.set("Unknown")):(await n.N_.stop(),$u(n))})),n.N_}function kt(n){return n.L_||(n.L_=function(e,r,i){const s=A(e);return s.R_(),new Xf(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:om.bind(null,n),To:cm.bind(null,n),E_:am.bind(null,n),T_:um.bind(null,n)}),n.F_.push(async t=>{t?(n.L_.Zo(),await wr(n)):(await n.L_.stop(),n.D_.length>0&&(g("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new ms(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ps(n,t){if(vt("AsyncQueue",`${t}: ${n}`),dn(n))return new y(f.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.comparator=t?(e,r)=>t(e,r)||E.comparator(e.key,r.key):(e,r)=>E.comparator(e.key,r.key),this.keyedMap=De(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.B_=new O(E.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):T():this.B_=this.B_.insert(e,t)}k_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ge{constructor(t,e,r,i,s,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new ge(t,e,ce.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class dm{constructor(){this.queries=new we(t=>mu(t),gr),this.onlineState="Unknown",this.W_=new Set}}async function fm(n,t){const e=A(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.K_()&&t.U_()&&(r=2):(s=new hm,r=t.U_()?0:1);try{switch(r){case 0:s.q_=await e.onListen(i,!0);break;case 1:s.q_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=ps(o,`Initialization of query '${ne(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,s),s.Q_.push(t),t.G_(e.onlineState),s.q_&&t.z_(s.q_)&&gs(e)}async function mm(n,t){const e=A(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=t.U_()?0:1:!s.K_()&&t.U_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function pm(n,t){const e=A(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&gs(e)}function gm(n,t,e){const r=A(n),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(e);r.queries.delete(t)}function gs(n){n.W_.forEach(t=>{t.next()})}var Ti,Co;(Co=Ti||(Ti={})).j_="default",Co.Cache="cache";class _m{constructor(t,e,r){this.query=t,this.H_=e,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ge(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),e=!0):this.X_(t,this.onlineState)&&(this.ea(t),e=!0),this.Y_=t,e}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let e=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),e=!0),e}X_(t,e){if(!t.fromCache||!this.U_())return!0;const r=e!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const e=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ea(t){t=ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Ti.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t){this.key=t}}class Hu{constructor(t){this.key=t}}class ym{constructor(t,e){this.query=t,this.ua=e,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=P(),this.mutatedKeys=P(),this.ha=pu(t),this.Pa=new ce(this.ha)}get Ia(){return this.ua}Ta(t,e){const r=e?e.Ea:new Po,i=e?e.Pa:this.Pa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),p=_r(this.query,h)?h:null,R=!!d&&this.mutatedKeys.has(d.key),S=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?R!==S&&(r.track({type:3,doc:p}),v=!0):this.da(d,p)||(r.track({type:2,doc:p}),v=!0,(u&&this.ha(p,u)>0||c&&this.ha(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(u||c)&&(a=!0)),v&&(p?(o=o.add(p),s=S?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((l,h)=>function(p,R){const S=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return S(p)-S(R)}(l.type,h.type)||this.ha(l.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=e&&!i?this.Ra():[],u=this.la.size===0&&this.current&&!i?1:0,c=u!==this.ca;return this.ca=u,o.length!==0||c?{snapshot:new ge(this.query,t.Pa,s,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Po,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=P(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const e=[];return t.forEach(r=>{this.la.has(r)||e.push(new Hu(r))}),this.la.forEach(r=>{t.has(r)||e.push(new Qu(r))}),e}fa(t){this.ua=t.hs,this.la=P();const e=this.Ta(t.documents);return this.applyChanges(e,!0)}ga(){return ge.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Em{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class vm{constructor(t){this.key=t,this.pa=!1}}class Tm{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new we(a=>mu(a),gr),this.Sa=new Map,this.ba=new Set,this.Da=new O(E.comparator),this.Ca=new Map,this.va=new as,this.Fa={},this.Ma=new Map,this.xa=pe.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function Im(n,t,e=!0){const r=tc(n);let i;const s=r.wa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await Wu(r,t,e,!0),i}async function wm(n,t){const e=tc(n);await Wu(e,t,!0,!1)}async function Wu(n,t,e,r){const i=await $f(n.localStore,yt(t)),s=i.targetId,o=e?n.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await Am(n,t,s,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&qu(n.remoteStore,i),a}async function Am(n,t,e,r,i){n.Na=(h,d,p)=>async function(S,v,L,G){let at=v.view.Ta(L);at.Xi&&(at=await wo(S.localStore,v.query,!1).then(({documents:Tn})=>v.view.Ta(Tn,at)));const It=G&&G.targetChanges.get(v.targetId),vn=G&&G.targetMismatches.get(v.targetId)!=null,te=v.view.applyChanges(at,S.isPrimaryClient,It,vn);return Do(S,v.targetId,te.Va),te.snapshot}(n,h,d,p);const s=await wo(n.localStore,t,!0),o=new ym(t,s.hs),a=o.Ta(s.documents),u=mn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Do(n,e,c.Va);const l=new Em(t,e,o);return n.wa.set(t,l),n.Sa.has(e)?n.Sa.get(e).push(t):n.Sa.set(e,[t]),c.snapshot}async function Rm(n,t,e){const r=A(n),i=r.wa.get(t),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!gr(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ls(r.remoteStore,i.targetId),Ii(r,i.targetId)}).catch(hn)):(Ii(r,i.targetId),await vi(r.localStore,i.targetId,!0))}async function Sm(n,t){const e=A(n),r=e.wa.get(t),i=e.Sa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ls(e.remoteStore,r.targetId))}async function Pm(n,t,e){const r=xm(n);try{const i=await function(o,a){const u=A(o),c=q.now(),l=a.reduce((p,R)=>p.add(R.key),P());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",p=>{let R=St(),S=P();return u.os.getEntries(p,l).next(v=>{R=v,R.forEach((L,G)=>{G.isValidDocument()||(S=S.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(p,R)).next(v=>{h=v;const L=[];for(const G of a){const at=Qd(G,h.get(G.key).overlayedDocument);at!=null&&L.push(new Lt(G.key,at,su(at.value.mapValue),ct.exists(!0)))}return u.mutationQueue.addMutationBatch(p,c,L,a)}).next(v=>{d=v;const L=v.applyToLocalDocumentSet(h,S);return u.documentOverlayCache.saveOverlays(p,v.batchId,L)})}).then(()=>({batchId:d.batchId,changes:_u(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Fa[o.currentUser.toKey()];c||(c=new O(D)),c=c.insert(a,u),o.Fa[o.currentUser.toKey()]=c}(r,i.batchId,e),await gn(r,i.changes),await wr(r.remoteStore)}catch(i){const s=ps(i,"Failed to persist write");e.reject(s)}}async function Yu(n,t){const e=A(n);try{const r=await Bf(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Ca.get(s);o&&(N(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?N(o.pa):i.removedDocuments.size>0&&(N(o.pa),o.pa=!1))}),await gn(e,r,t)}catch(r){await hn(r)}}function Vo(n,t,e){const r=A(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=A(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&gs(u)}(r.eventManager,t),i.length&&r.ya.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Cm(n,t,e){const r=A(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ca.get(t),s=i&&i.key;if(s){let o=new O(E.comparator);o=o.insert(s,tt.newNoDocument(s,w.min()));const a=P().add(s),u=new vr(w.min(),new Map,new O(D),o,a);await Yu(r,u),r.Da=r.Da.remove(s),r.Ca.delete(t),_s(r)}else await vi(r.localStore,t,!1).then(()=>Ii(r,t,e)).catch(hn)}async function Vm(n,t){const e=A(n),r=t.batch.batchId;try{const i=await Uf(e.localStore,t);Ju(e,r,null),Xu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await gn(e,i)}catch(i){await hn(i)}}async function Dm(n,t,e){const r=A(n);try{const i=await function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(N(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,t);Ju(r,t,e),Xu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await gn(r,i)}catch(i){await hn(i)}}function Xu(n,t){(n.Ma.get(t)||[]).forEach(e=>{e.resolve()}),n.Ma.delete(t)}function Ju(n,t,e){const r=A(n);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Fa[r.currentUser.toKey()]=i}}function Ii(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Sa.get(t))n.wa.delete(r),e&&n.ya.La(r,e);n.Sa.delete(t),n.isPrimaryClient&&n.va.Vr(t).forEach(r=>{n.va.containsKey(r)||Zu(n,r)})}function Zu(n,t){n.ba.delete(t.path.canonicalString());const e=n.Da.get(t);e!==null&&(ls(n.remoteStore,e),n.Da=n.Da.remove(t),n.Ca.delete(e),_s(n))}function Do(n,t,e){for(const r of e)r instanceof Qu?(n.va.addReference(r.key,t),bm(n,r)):r instanceof Hu?(g("SyncEngine","Document no longer in limbo: "+r.key),n.va.removeReference(r.key,t),n.va.containsKey(r.key)||Zu(n,r.key)):T()}function bm(n,t){const e=t.key,r=e.path.canonicalString();n.Da.get(e)||n.ba.has(r)||(g("SyncEngine","New document in limbo: "+e),n.ba.add(r),_s(n))}function _s(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const t=n.ba.values().next().value;n.ba.delete(t);const e=new E(x.fromString(t)),r=n.xa.next();n.Ca.set(r,new vm(e)),n.Da=n.Da.insert(e,r),qu(n.remoteStore,new Pt(yt(du(e.path)),r,"TargetPurposeLimboResolution",Xi._e))}}async function gn(n,t,e){const r=A(n),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=cs.Ki(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.ya.u_(i),await async function(u,c){const l=A(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(c,d=>m.forEach(d.qi,p=>l.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>m.forEach(d.Qi,p=>l.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!dn(h))throw h;g("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=l.ns.get(d),R=p.snapshotVersion,S=p.withLastLimboFreeSnapshotVersion(R);l.ns=l.ns.insert(d,S)}}}(r.localStore,s))}async function Nm(n,t){const e=A(n);if(!e.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const r=await Lu(e.localStore,t);e.currentUser=t,function(s,o){s.Ma.forEach(a=>{a.forEach(u=>{u.reject(new y(f.CANCELLED,o))})}),s.Ma.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await gn(e,r.us)}}function km(n,t){const e=A(n),r=e.Ca.get(t);if(r&&r.pa)return P().add(r.key);{let i=P();const s=e.Sa.get(t);if(!s)return i;for(const o of s){const a=e.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function tc(n){const t=A(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=km.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cm.bind(null,t),t.ya.u_=pm.bind(null,t.eventManager),t.ya.La=gm.bind(null,t.eventManager),t}function xm(n){const t=A(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dm.bind(null,t),t}class bo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ff(this.persistence,new Mf,t.initialUser,this.serializer)}createPersistence(t){return new kf(us.Hr,this.serializer)}createSharedClientState(t){return new Gf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Om{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nm.bind(null,this.syncEngine),await lm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new dm}()}createDatastore(t){const e=Tr(t.databaseInfo.databaseId),r=function(s){return new Wf(s)}(t.databaseInfo);return function(s,o,a,u){return new Jf(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new tm(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Vo(this.syncEngine,e,0),function(){return Ro.D()?new Ro:new Kf}())}createSyncEngine(t,e){return function(i,s,o,a,u,c,l){const h=new Tm(i,s,o,a,u,c);return l&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=A(r);g("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await pn(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):vt("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{g("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(g("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ps(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function zr(n,t){n.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function No(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Um(n);g("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>So(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>So(t.remoteStore,i)),n._onlineComponents=t}function Fm(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Um(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await zr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Fm(e))throw e;he("Error using user provided cache. Falling back to memory cache: "+e),await zr(n,new bo)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await zr(n,new bo);return n._offlineComponents}async function ec(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await No(n,n._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await No(n,new Om))),n._onlineComponents}function Bm(n){return ec(n).then(t=>t.syncEngine)}async function qm(n){const t=await ec(n),e=t.eventManager;return e.onListen=Im.bind(null,t.syncEngine),e.onUnlisten=Rm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=wm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Sm.bind(null,t.syncEngine),e}function jm(n,t,e={}){const r=new At;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Mm({next:d=>{o.enqueueAndForget(()=>mm(s,h)),d.fromCache&&u.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new _m(a,l,{includeMetadataChanges:!0,ta:!0});return fm(s,h)}(await qm(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n,t,e){if(!e)throw new y(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function $m(n,t,e,r){if(t===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function xo(n){if(!E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oo(n){if(E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ar(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":T()}function xt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ar(n);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$m("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ed;switch(r.type){case"firstParty":return new sd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ko.get(e);r&&(g("ComponentProvider","Removing Datastore"),ko.delete(e),r.terminate())}(this),Promise.resolve()}}function zm(n,t,e,r={}){var i;const s=(n=xt(n,Rr))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&he("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Z.MOCK_USER;else{a=Nc(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Z(c)}n._authCredentials=new nd(new eu(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Zt(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}}class Dt extends Zt{constructor(t,e,r){super(t,e,du(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new E(t))}withConverter(t){return new Dt(this.firestore,t,this._path)}}function Gm(n,t,...e){if(n=dt(n),rc("collection","path",t),n instanceof Rr){const r=x.fromString(t,...e);return Oo(r),new Dt(n,null,r)}{if(!(n instanceof ot||n instanceof Dt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(t,...e));return Oo(r),new Dt(n.firestore,null,r)}}function Dn(n,t,...e){if(n=dt(n),arguments.length===1&&(t=nu.newId()),rc("doc","path",t),n instanceof Rr){const r=x.fromString(t,...e);return xo(r),new ot(n,null,new E(r))}{if(!(n instanceof ot||n instanceof Dt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(t,...e));return xo(r),new ot(n.firestore,n instanceof Dt?n.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Uu(this,"async_queue_retry"),this.cu=()=>{const e=$r();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=$r();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const e=$r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const e=new At;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!dn(t))throw t;g("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const e=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=e,e}enqueueAfterDelay(t,e,r){this.lu(),this.uu.indexOf(t)>-1&&(e=0);const i=ms.createAndSchedule(this,t,e,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&T()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const e of this.su)if(e.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.su)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const e=this.su.indexOf(t);this.su.splice(e,1)}}class _n extends Rr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Km}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ic(this),this._firestoreClient.terminate()}}function Qm(n,t){const e=typeof n=="object"?n:Ll(),r=typeof n=="string"?n:t||"(default)",i=kl(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Dc("firestore");s&&zm(i,...s)}return i}function ys(n){return n._firestoreClient||ic(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ic(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,c,l){return new Ed(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,nc(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Lm(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new _e(rt.fromBase64String(t))}catch(e){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new _e(rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=/^__.*__$/;class Wm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Lt(t,this.data,this.fieldMask,e,this.fieldTransforms):new fn(t,this.data,e,this.fieldTransforms)}}class sc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Lt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function oc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class vs{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new vs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.mu({path:r,gu:!1});return i.pu(t),i}yu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return Jn(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(oc(this.Vu)&&Hm.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Ym{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Tr(t)}Cu(t,e,r,i=!1){return new vs({Vu:t,methodName:e,Du:r,path:W.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pr(n){const t=n._freezeSettings(),e=Tr(n._databaseId);return new Ym(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ac(n,t,e,r,i,s={}){const o=n.Cu(s.merge||s.mergeFields?2:0,t,e,i);Is("Data must be an object, but it was:",o,r);const a=lc(r,o);let u,c;if(s.merge)u=new ut(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=wi(t,h,e);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);dc(l,d)||l.push(d)}u=new ut(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Wm(new st(a),u,c)}class Cr extends Sr{_toFieldTransform(t){if(t.Vu!==2)throw t.Vu===1?t.Su(`${this._methodName}() can only appear at the top level of your update data`):t.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Cr}}class Ts extends Sr{_toFieldTransform(t){return new $d(t.path,new Ze)}isEqual(t){return t instanceof Ts}}function uc(n,t,e,r){const i=n.Cu(1,t,e);Is("Data must be an object, but it was:",i,r);const s=[],o=st.empty();Xt(r,(u,c)=>{const l=ws(t,u,e);c=dt(c);const h=i.yu(l);if(c instanceof Cr)s.push(l);else{const d=En(c,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new ut(s);return new sc(o,a,i.fieldTransforms)}function cc(n,t,e,r,i,s){const o=n.Cu(1,t,e),a=[wi(t,r,e)],u=[i];if(s.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(wi(t,s[d])),u.push(s[d+1]);const c=[],l=st.empty();for(let d=a.length-1;d>=0;--d)if(!dc(c,a[d])){const p=a[d];let R=u[d];R=dt(R);const S=o.yu(p);if(R instanceof Cr)c.push(p);else{const v=En(R,S);v!=null&&(c.push(p),l.set(p,v))}}const h=new ut(c);return new sc(l,h,o.fieldTransforms)}function Xm(n,t,e,r=!1){return En(e,n.Cu(r?4:3,t))}function En(n,t){if(hc(n=dt(n)))return Is("Unsupported field value:",t,n),lc(n,t);if(n instanceof Sr)return function(r,i){if(!oc(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=En(a,i.wu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Bd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=q.fromDate(r);return{timestampValue:Yn(i.serializer,s)}}if(r instanceof q){const s=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yn(i.serializer,s)}}if(r instanceof Es)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _e)return{bytesValue:Du(i.serializer,r._byteString)};if(r instanceof ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:os(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${Ar(r)}`)}(n,t)}function lc(n,t){const e={};return ru(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xt(n,(r,i)=>{const s=En(i,t.fu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function hc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof q||n instanceof Es||n instanceof _e||n instanceof ot||n instanceof Sr)}function Is(n,t,e){if(!hc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ar(e);throw r==="an object"?t.Su(n+" a custom object"):t.Su(n+" "+r)}}function wi(n,t,e){if((t=dt(t))instanceof yn)return t._internalPath;if(typeof t=="string")return ws(n,t);throw Jn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Jm=new RegExp("[~\\*/\\[\\]]");function ws(n,t,e){if(t.search(Jm)>=0)throw Jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new yn(...t.split("."))._internalPath}catch{throw Jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Jn(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new y(f.INVALID_ARGUMENT,a+n+u)}function dc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Zm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(As("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Zm extends fc{data(){return super.data()}}function As(n,t){return typeof t=="string"?ws(n,t):t instanceof yn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rs{}class mc extends Rs{}function ep(n,t,...e){let r=[];t instanceof Rs&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof Ps).length,a=s.filter(u=>u instanceof Ss).length;if(o>1||o>0&&a>0)throw new y(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ss extends mc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ss(t,e,r)}_apply(t){const e=this._parse(t);return pc(t._query,e),new Zt(t.firestore,t.converter,mi(t._query,e))}_parse(t){const e=Pr(t.firestore);return function(s,o,a,u,c,l,h){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Fo(h,l);const p=[];for(const R of h)p.push(Lo(u,s,R));d={arrayValue:{values:p}}}else d=Lo(u,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Fo(h,l),d=Xm(a,o,h,l==="in"||l==="not-in");return B.create(c,l,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ps extends Rs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ps(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:mt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)pc(o,u),o=mi(o,u)}(t._query,e),new Zt(t.firestore,t.converter,mi(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cs extends mc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Cs(t,e)}_apply(t){const e=function(i,s,o){if(i.startAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Je(s,o)}(t._query,this._field,this._direction);return new Zt(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ie(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function np(n,t="asc"){const e=t,r=As("orderBy",n);return Cs._create(r,e)}function Lo(n,t,e){if(typeof(e=dt(e))=="string"){if(e==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fu(t)&&e.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(x.fromString(e));if(!E.isDocumentKey(r))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return so(n,new E(r))}if(e instanceof ot)return so(n,e._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ar(e)}.`)}function Fo(n,t){if(!Array.isArray(n)||n.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function pc(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class rp{convertValue(t,e="none"){switch(Wt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw T()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Xt(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Es(U(t.latitude),U(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Zi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(We(t));default:return null}}convertTimestamp(t){const e=Nt(t);return new q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=x.fromString(t);N(Mu(r));const i=new Ye(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(e)||vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ip extends fc{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(As("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Mn extends ip{data(t={}){return super.data(t)}}class sp{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new bn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Mn(this._firestore,this._userDataWriter,r.key,r,new bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Mn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Mn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:op(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function op(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class ap extends rp{constructor(t){super(),this.firestore=t}convertBytes(t){return new _e(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}function up(n){n=xt(n,Zt);const t=xt(n.firestore,_n),e=ys(t),r=new ap(t);return tp(n._query),jm(e,n._query).then(i=>new sp(t,r,n,i))}function cp(n,t,e){n=xt(n,ot);const r=xt(n.firestore,_n),i=gc(n.converter,t,e);return Vs(r,[ac(Pr(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,ct.none())])}function lp(n,t,e,...r){n=xt(n,ot);const i=xt(n.firestore,_n),s=Pr(i);let o;return o=typeof(t=dt(t))=="string"||t instanceof yn?cc(s,"updateDoc",n._key,t,e,r):uc(s,"updateDoc",n._key,t),Vs(i,[o.toMutation(n._key,ct.exists(!0))])}function Vs(n,t){return function(r,i){const s=new At;return r.asyncQueue.enqueueAndForget(async()=>Pm(await Bm(r),i,s)),s.promise}(ys(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Pr(t)}set(t,e,r){this._verifyNotCommitted();const i=Gr(t,this._firestore),s=gc(i.converter,e,r),o=ac(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ct.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=Gr(t,this._firestore);let o;return o=typeof(e=dt(e))=="string"||e instanceof yn?cc(this._dataReader,"WriteBatch.update",s._key,e,r,i):uc(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(o.toMutation(s._key,ct.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Gr(t,this._firestore);return this._mutations=this._mutations.concat(new rs(e._key,ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Gr(n,t){if((n=dt(n)).firestore!==t)throw new y(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function dp(){return new Ts("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){return ys(n=xt(n,_n)),new hp(n,t=>Vs(n,t))}(function(t,e=!0){(function(i){Te=i})(Ml),Bn(new Fe("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _n(new rd(r.getProvider("auth-internal")),new ad(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ye(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),oe(to,"4.5.0",t),oe(to,"4.5.0","esm2017")})();const fp={apiKey:"AIzaSyA1IxvImFlN4Lv37j2xivAtywQG73oT6TU",authDomain:"films-ff73e.firebaseapp.com",projectId:"films-ff73e",storageBucket:"films-ff73e.appspot.com",messagingSenderId:"688364422913",appId:"1:688364422913:web:29467ef5a0e4fb12ec3d00"},mp=Wo(fp);class pp{constructor(){this.db=Qm(mp),this.key=vc}async pull(){const t=Gm(this.db,this.key),e=ep(t,np("createdAt")),r=await up(e),i=[];return r.forEach(s=>{i.push({id:s.id,title:s.data().title,done:s.data().done}),console.log(`${s.id} => ${s.data().title}`)}),i}async push(t){try{await cp(Dn(this.db,this.key,t.id),{title:t.title,done:t.done,createdAt:dp()})}catch(e){console.error("Error adding document: ",e)}}async delete(t){const e=Uo(this.db);t.forEach(r=>{const i=Dn(this.db,this.key,r.id);e.delete(i)}),await e.commit()}async deleteFilm(t){const e=Uo(this.db),r=Dn(this.db,this.key,t.id);e.delete(r),await e.commit()}async update(t){const e=Dn(this.db,this.key,t.id);console.log(t),await lp(e,{done:t.done})}}let Nn;const gp=new Uint8Array(16);function _p(){if(!Nn&&(Nn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Nn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Nn(gp)}const K=[];for(let n=0;n<256;++n)K.push((n+256).toString(16).slice(1));function yp(n,t=0){return K[n[t+0]]+K[n[t+1]]+K[n[t+2]]+K[n[t+3]]+"-"+K[n[t+4]]+K[n[t+5]]+"-"+K[n[t+6]]+K[n[t+7]]+"-"+K[n[t+8]]+K[n[t+9]]+"-"+K[n[t+10]]+K[n[t+11]]+K[n[t+12]]+K[n[t+13]]+K[n[t+14]]+K[n[t+15]]}const Ep=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Bo={randomUUID:Ep};function vp(n,t,e){if(Bo.randomUUID&&!t&&!n)return Bo.randomUUID();n=n||{};const r=n.random||(n.rng||_p)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){e=e||0;for(let i=0;i<16;++i)t[e+i]=r[i];return t}return yp(r)}class Tp{constructor({}){this.films=[]}update(t){this.films=t}add(t){const e={title:t,done:!1,id:vp()};return console.log(e.title),this.films.push(e),e}get(){return this.films}clear(){this.films=[]}toggleFilm(t){this.get().forEach(e=>{t===e.id&&(e.done=!e.done)})}getFilm(t){let e=null;return this.get().forEach(r=>{t===r.id&&(e=r)}),e}}class Ip{constructor({onNewFilm:t,onClearList:e,onClickFilm:r,onUpdateData:i,onDeleteFilm:s}){Ft(this,"_handleAddBtn",()=>{const t=this.inputNameFilmNode.value;t.trim()&&(this.onNewFilm(t),this.inputClear(this.inputNameFilmNode))});Ft(this,"_handleDeleteBtn",()=>{this.onClearList()});this.inputNameFilmNode=document.getElementById("inputNameFilm"),this.addFilmBtnNode=document.getElementById("addFilmButton"),this.deleteFilmsBtnNode=document.getElementById("deleteFilmsBtn"),this.filmListNode=document.getElementById("filmListHtml"),this.window=document.defaultView,this.onNewFilm=t,this.onClearList=e,this.onClickFilm=r,this.onUpdateData=i,this.onDeleteFilm=s,this.addFilmBtnNode.addEventListener("click",this._handleAddBtn),this.deleteFilmsBtnNode.addEventListener("click",this._handleDeleteBtn),this.filmListNode.addEventListener("click",this._handleRemoveFilm)}render(t){t.forEach(e=>{this.addFilm(e)})}clear(){this.filmListNode.innerHTML=""}addFilm(t){const e=document.createElement("li"),r=document.createElement("input"),i=document.createElement("lable"),s=document.createElement("p"),o=document.createElement("div"),a=document.createElement("img");e.classList.add("list-films__item"),r.classList.add("list-films__input"),r.setAttribute("type","checkbox"),r.setAttribute("id",t.id),i.setAttribute("for",t.id),i.classList.add("label-class"),s.classList.add("list-films__text"),s.innerText=t.title,o.classList.add("list-films__image-close"),o.setAttribute("data-id",t.id),a.classList.add("list-films__icon-close"),a.src="./images/close.svg",a.alt="кнопка удалить из списка",a.setAttribute("data-id",t.id),i.onclick=()=>{this.onClickFilm(t.id),t.done?(e.classList.toggle("list-films__item--bg"),i.classList.toggle("label--checked"),s.classList.toggle("list-films--line-throgh")):(e.classList.remove("list-films__item--bg"),i.classList.remove("label--checked"),s.classList.remove("list-films--line-throgh"))},t.done?(e.classList.toggle("list-films__item--bg"),i.classList.toggle("label--checked"),s.classList.toggle("list-films--line-throgh")):(e.classList.remove("list-films__item--bg"),i.classList.remove("label--checked"),s.classList.remove("list-films--line-throgh")),o.onclick=u=>{const c=u.target.closest(".list-films__item");c&&(c.remove(),this.onDeleteFilm(t.id))},o.append(a),e.append(r,i,s,o),this.filmListNode.append(e)}inputClear(t){t.value=""}}class wp{constructor(){Ft(this,"handleNewFilm",t=>{const e=this.model.add(t);this.view.addFilm(e),this.storage.push(e)});Ft(this,"handleClearList",()=>{this.storage.delete(this.model.get()),this.model.clear(),this.view.clear()});Ft(this,"handleClickFilm",t=>{this.model.toggleFilm(t);const e=this.model.getFilm(t);this.storage.update(e)});Ft(this,"handleDeleteFilm",t=>{this.storage.deleteFilm(this.model.getFilm(t)),console.log(this.model.get())});this.model=new Tp({}),this.view=new Ip({onNewFilm:this.handleNewFilm,onClearList:this.handleClearList,onClickFilm:this.handleClickFilm,onDeleteFilm:this.handleDeleteFilm}),this.storage=new pp}init(){this.storage.pull().then(t=>{this.model.update(t),this.view.render(this.model.get())})}}const Ap=new wp;Ap.init();
