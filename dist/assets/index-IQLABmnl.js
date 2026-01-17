(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var ae;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(ae||(ae={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var oe;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(oe||(oe={}));var re;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(re||(re={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const se=["user","model","function","system"];var ce;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(ce||(ce={}));var le;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(le||(le={}));var de;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(de||(de={}));var he;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(he||(he={}));var ft;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(ft||(ft={}));var ue;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(ue||(ue={}));var fe;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(fe||(fe={}));var pe;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(pe||(pe={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class N extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class it extends N{constructor(t,n){super(t),this.response=n}}class Ge extends N{constructor(t,n,i,a){super(t),this.status=n,this.statusText=i,this.errorDetails=a}}class W extends N{}class je extends N{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const mi="https://generativelanguage.googleapis.com",vi="v1beta",bi="0.24.1",yi="genai-js";var Q;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Q||(Q={}));class Ei{constructor(t,n,i,a,o){this.model=t,this.task=n,this.apiKey=i,this.stream=a,this.requestOptions=o}toString(){var t,n;const i=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||vi;let o=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||mi}/${i}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}function wi(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${yi}/${bi}`),t.join(" ")}async function xi(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",wi(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let i=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(i){if(!(i instanceof Headers))try{i=new Headers(i)}catch(a){throw new W(`unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${a.message}`)}for(const[a,o]of i.entries()){if(a==="x-goog-api-key")throw new W(`Cannot set reserved header name ${a}`);if(a==="x-goog-api-client")throw new W(`Header name ${a} can only be set using the apiClient field`);n.append(a,o)}}return n}async function Ci(e,t,n,i,a,o){const r=new Ei(e,t,n,i,o);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},_i(o)),{method:"POST",headers:await xi(r),body:a})}}async function Et(e,t,n,i,a,o={},r=fetch){const{url:s,fetchOptions:h}=await Ci(e,t,n,i,a,o);return Ii(s,h,r)}async function Ii(e,t,n=fetch){let i;try{i=await n(e,t)}catch(a){Oi(a,e)}return i.ok||await Ti(i,e),i}function Oi(e,t){let n=e;throw n.name==="AbortError"?(n=new je(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof Ge||e instanceof W||(n=new N(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Ti(e,t){let n="",i;try{const a=await e.json();n=a.error.message,a.error.details&&(n+=` ${JSON.stringify(a.error.details)}`,i=a.error.details)}catch{}throw new Ge(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,i)}function _i(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function zt(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Ot(e.candidates[0]))throw new it(`${z(e)}`,e);return Si(e)}else if(e.promptFeedback)throw new it(`Text not available. ${z(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Ot(e.candidates[0]))throw new it(`${z(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),ge(e)[0]}else if(e.promptFeedback)throw new it(`Function call not available. ${z(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Ot(e.candidates[0]))throw new it(`${z(e)}`,e);return ge(e)}else if(e.promptFeedback)throw new it(`Function call not available. ${z(e)}`,e)},e}function Si(e){var t,n,i,a;const o=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(a=(i=e.candidates)===null||i===void 0?void 0:i[0].content)===null||a===void 0?void 0:a.parts)r.text&&o.push(r.text),r.executableCode&&o.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&o.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return o.length>0?o.join(""):""}function ge(e){var t,n,i,a;const o=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(a=(i=e.candidates)===null||i===void 0?void 0:i[0].content)===null||a===void 0?void 0:a.parts)r.functionCall&&o.push(r.functionCall);if(o.length>0)return o}const Ni=[ft.RECITATION,ft.SAFETY,ft.LANGUAGE];function Ot(e){return!!e.finishReason&&Ni.includes(e.finishReason)}function z(e){var t,n,i;let a="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)a+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(a+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(a+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((i=e.candidates)===null||i===void 0)&&i[0]){const o=e.candidates[0];Ot(o)&&(a+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(a+=`: ${o.finishMessage}`))}return a}function gt(e){return this instanceof gt?(this.v=e,this):new gt(e)}function Di(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(e,t||[]),a,o=[];return a={},r("next"),r("throw"),r("return"),a[Symbol.asyncIterator]=function(){return this},a;function r(u){i[u]&&(a[u]=function(p){return new Promise(function(m,b){o.push([u,p,m,b])>1||s(u,p)})})}function s(u,p){try{h(i[u](p))}catch(m){l(o[0][3],m)}}function h(u){u.value instanceof gt?Promise.resolve(u.value.v).then(d,c):l(o[0][2],u)}function d(u){s("next",u)}function c(u){s("throw",u)}function l(u,p){u(p),o.shift(),o.length&&s(o[0][0],o[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const me=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Mi(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Li(t),[i,a]=n.tee();return{stream:Ri(i),response:Ai(a)}}async function Ai(e){const t=[],n=e.getReader();for(;;){const{done:i,value:a}=await n.read();if(i)return zt(Bi(t));t.push(a)}}function Ri(e){return Di(this,arguments,function*(){const n=e.getReader();for(;;){const{value:i,done:a}=yield gt(n.read());if(a)break;yield yield gt(zt(i))}})}function Li(e){const t=e.getReader();return new ReadableStream({start(i){let a="";return o();function o(){return t.read().then(({value:r,done:s})=>{if(s){if(a.trim()){i.error(new N("Failed to parse stream"));return}i.close();return}a+=r;let h=a.match(me),d;for(;h;){try{d=JSON.parse(h[1])}catch{i.error(new N(`Error parsing JSON response: "${h[1]}"`));return}i.enqueue(d),a=a.substring(h[0].length),h=a.match(me)}return o()}).catch(r=>{let s=r;throw s.stack=r.stack,s.name==="AbortError"?s=new je("Request aborted when reading from the stream"):s=new N("Error reading from the stream"),s})}}})}function Bi(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const i of e){if(i.candidates){let a=0;for(const o of i.candidates)if(n.candidates||(n.candidates=[]),n.candidates[a]||(n.candidates[a]={index:a}),n.candidates[a].citationMetadata=o.citationMetadata,n.candidates[a].groundingMetadata=o.groundingMetadata,n.candidates[a].finishReason=o.finishReason,n.candidates[a].finishMessage=o.finishMessage,n.candidates[a].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[a].content||(n.candidates[a].content={role:o.content.role||"user",parts:[]});const r={};for(const s of o.content.parts)s.text&&(r.text=s.text),s.functionCall&&(r.functionCall=s.functionCall),s.executableCode&&(r.executableCode=s.executableCode),s.codeExecutionResult&&(r.codeExecutionResult=s.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[a].content.parts.push(r)}a++}i.usageMetadata&&(n.usageMetadata=i.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function ze(e,t,n,i){const a=await Et(t,Q.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),i);return Mi(a)}async function Fe(e,t,n,i){const o=await(await Et(t,Q.GENERATE_CONTENT,e,!1,JSON.stringify(n),i)).json();return{response:zt(o)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function Xe(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function mt(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return ki(t)}function ki(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let i=!1,a=!1;for(const o of e)"functionResponse"in o?(n.parts.push(o),a=!0):(t.parts.push(o),i=!0);if(i&&a)throw new N("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!a)throw new N("No content is provided for sending chat message.");return i?t:n}function Hi(e,t){var n;let i={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const a=e.generateContentRequest!=null;if(e.contents){if(a)throw new W("CountTokensRequest must have one of contents or generateContentRequest, not both.");i.contents=e.contents}else if(a)i=Object.assign(Object.assign({},i),e.generateContentRequest);else{const o=mt(e);i.contents=[o]}return{generateContentRequest:i}}function ve(e){let t;return e.contents?t=e:t={contents:[mt(e)]},e.systemInstruction&&(t.systemInstruction=Xe(e.systemInstruction)),t}function Pi(e){return typeof e=="string"||Array.isArray(e)?{content:mt(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const be=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Yi={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ui(e){let t=!1;for(const n of e){const{role:i,parts:a}=n;if(!t&&i!=="user")throw new N(`First content should be with role 'user', got ${i}`);if(!se.includes(i))throw new N(`Each item should include role field. Got ${i} but valid roles are: ${JSON.stringify(se)}`);if(!Array.isArray(a))throw new N("Content should have 'parts' property with an array of Parts");if(a.length===0)throw new N("Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const s of a)for(const h of be)h in s&&(o[h]+=1);const r=Yi[i];for(const s of be)if(!r.includes(s)&&o[s]>0)throw new N(`Content with role '${i}' can't contain '${s}' part`);t=!0}}function ye(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const i of n.parts)if(i===void 0||Object.keys(i).length===0||i.text!==void 0&&i.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Ee="SILENT_ERROR";class $i{constructor(t,n,i,a={}){this.model=n,this.params=i,this._requestOptions=a,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,i!=null&&i.history&&(Ui(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var i,a,o,r,s,h;await this._sendPromise;const d=mt(t),c={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(a=this.params)===null||a===void 0?void 0:a.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(s=this.params)===null||s===void 0?void 0:s.systemInstruction,cachedContent:(h=this.params)===null||h===void 0?void 0:h.cachedContent,contents:[...this._history,d]},l=Object.assign(Object.assign({},this._requestOptions),n);let u;return this._sendPromise=this._sendPromise.then(()=>Fe(this._apiKey,this.model,c,l)).then(p=>{var m;if(ye(p.response)){this._history.push(d);const b=Object.assign({parts:[],role:"model"},(m=p.response.candidates)===null||m===void 0?void 0:m[0].content);this._history.push(b)}else{const b=z(p.response);b&&console.warn(`sendMessage() was unsuccessful. ${b}. Inspect response object for details.`)}u=p}).catch(p=>{throw this._sendPromise=Promise.resolve(),p}),await this._sendPromise,u}async sendMessageStream(t,n={}){var i,a,o,r,s,h;await this._sendPromise;const d=mt(t),c={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(a=this.params)===null||a===void 0?void 0:a.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(s=this.params)===null||s===void 0?void 0:s.systemInstruction,cachedContent:(h=this.params)===null||h===void 0?void 0:h.cachedContent,contents:[...this._history,d]},l=Object.assign(Object.assign({},this._requestOptions),n),u=ze(this._apiKey,this.model,c,l);return this._sendPromise=this._sendPromise.then(()=>u).catch(p=>{throw new Error(Ee)}).then(p=>p.response).then(p=>{if(ye(p)){this._history.push(d);const m=Object.assign({},p.candidates[0].content);m.role||(m.role="model"),this._history.push(m)}else{const m=z(p);m&&console.warn(`sendMessageStream() was unsuccessful. ${m}. Inspect response object for details.`)}}).catch(p=>{p.message!==Ee&&console.error(p)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function Gi(e,t,n,i){return(await Et(t,Q.COUNT_TOKENS,e,!1,JSON.stringify(n),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function ji(e,t,n,i){return(await Et(t,Q.EMBED_CONTENT,e,!1,JSON.stringify(n),i)).json()}async function zi(e,t,n,i){const a=n.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await Et(t,Q.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:a}),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class we{constructor(t,n,i={}){this.apiKey=t,this._requestOptions=i,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Xe(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var i;const a=ve(t),o=Object.assign(Object.assign({},this._requestOptions),n);return Fe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},a),o)}async generateContentStream(t,n={}){var i;const a=ve(t),o=Object.assign(Object.assign({},this._requestOptions),n);return ze(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},a),o)}startChat(t){var n;return new $i(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const i=Hi(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),a=Object.assign(Object.assign({},this._requestOptions),n);return Gi(this.apiKey,this.model,i,a)}async embedContent(t,n={}){const i=Pi(t),a=Object.assign(Object.assign({},this._requestOptions),n);return ji(this.apiKey,this.model,i,a)}async batchEmbedContents(t,n={}){const i=Object.assign(Object.assign({},this._requestOptions),n);return zi(this.apiKey,this.model,t,i)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Fi{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new N("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new we(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,i){if(!t.name)throw new W("Cached content must contain a `name` field.");if(!t.model)throw new W("Cached content must contain a `model` field.");const a=["model","systemInstruction"];for(const r of a)if(n!=null&&n[r]&&t[r]&&(n==null?void 0:n[r])!==t[r]){if(r==="model"){const s=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,h=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(s===h)continue}throw new W(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${t[r]})`)}const o=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new we(this.apiKey,o,i)}}/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,i)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xe(Object(n),!0).forEach(function(i){qi(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Xi(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Ke(e){var t=Xi(e,"string");return typeof t=="symbol"?t:t+""}function Rt(e){"@babel/helpers - typeof";return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rt(e)}function Wi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ce(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Ke(i.key),i)}}function Ki(e,t,n){return t&&Ce(e.prototype,t),n&&Ce(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function qi(e,t,n){return t=Ke(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qe(e){return Vi(e)||Ji(e)||Zi(e)||Qi()}function Vi(e){if(Array.isArray(e))return Lt(e)}function Ji(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zi(e,t){if(e){if(typeof e=="string")return Lt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lt(e,t)}}function Lt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Qi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var St=typeof window<"u"&&typeof window.document<"u",Y=St?window:{},Ft=St&&Y.document.documentElement?"ontouchstart"in Y.document.documentElement:!1,Xt=St?"PointerEvent"in Y:!1,w="cropper",Wt="all",Ve="crop",Je="move",Ze="zoom",J="e",Z="w",nt="s",j="n",lt="ne",dt="nw",ht="se",ut="sw",Bt="".concat(w,"-crop"),Ie="".concat(w,"-disabled"),A="".concat(w,"-hidden"),Oe="".concat(w,"-hide"),tn="".concat(w,"-invisible"),Tt="".concat(w,"-modal"),kt="".concat(w,"-move"),vt="".concat(w,"Action"),xt="".concat(w,"Preview"),Kt="crop",Qe="move",ti="none",Ht="crop",Pt="cropend",Yt="cropmove",Ut="cropstart",Te="dblclick",en=Ft?"touchstart":"mousedown",nn=Ft?"touchmove":"mousemove",an=Ft?"touchend touchcancel":"mouseup",_e=Xt?"pointerdown":en,Se=Xt?"pointermove":nn,Ne=Xt?"pointerup pointercancel":an,De="ready",Me="resize",Ae="wheel",$t="zoom",Re="image/jpeg",on=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,rn=/^data:/,sn=/^data:image\/jpeg;base64,/,cn=/^img|canvas$/i,ei=200,ii=100,Le={viewMode:0,dragMode:Kt,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:ei,minContainerHeight:ii,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},ln='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',dn=Number.isNaN||Y.isNaN;function v(e){return typeof e=="number"&&!dn(e)}var Be=function(t){return t>0&&t<1/0};function Mt(e){return typeof e>"u"}function tt(e){return Rt(e)==="object"&&e!==null}var hn=Object.prototype.hasOwnProperty;function at(e){if(!tt(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&hn.call(n,"isPrototypeOf")}catch{return!1}}function M(e){return typeof e=="function"}var un=Array.prototype.slice;function ni(e){return Array.from?Array.from(e):un.call(e)}function I(e,t){return e&&M(t)&&(Array.isArray(e)||v(e.length)?ni(e).forEach(function(n,i){t.call(e,n,i,e)}):tt(e)&&Object.keys(e).forEach(function(n){t.call(e,e[n],n,e)})),e}var x=Object.assign||function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return tt(t)&&i.length>0&&i.forEach(function(o){tt(o)&&Object.keys(o).forEach(function(r){t[r]=o[r]})}),t},fn=/\.\d*(?:0|9){12}\d*$/;function rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return fn.test(e)?Math.round(e*t)/t:e}var pn=/^width|height|left|top|marginLeft|marginTop$/;function F(e,t){var n=e.style;I(t,function(i,a){pn.test(a)&&v(i)&&(i="".concat(i,"px")),n[a]=i})}function gn(e,t){return e.classList?e.classList.contains(t):e.className.indexOf(t)>-1}function S(e,t){if(t){if(v(e.length)){I(e,function(i){S(i,t)});return}if(e.classList){e.classList.add(t);return}var n=e.className.trim();n?n.indexOf(t)<0&&(e.className="".concat(n," ").concat(t)):e.className=t}}function P(e,t){if(t){if(v(e.length)){I(e,function(n){P(n,t)});return}if(e.classList){e.classList.remove(t);return}e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,""))}}function ot(e,t,n){if(t){if(v(e.length)){I(e,function(i){ot(i,t,n)});return}n?S(e,t):P(e,t)}}var mn=/([a-z\d])([A-Z])/g;function qt(e){return e.replace(mn,"$1-$2").toLowerCase()}function Gt(e,t){return tt(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(qt(t)))}function bt(e,t,n){tt(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(qt(t)),n)}function vn(e,t){if(tt(e[t]))try{delete e[t]}catch{e[t]=void 0}else if(e.dataset)try{delete e.dataset[t]}catch{e.dataset[t]=void 0}else e.removeAttribute("data-".concat(qt(t)))}var ai=/\s\s*/,oi=function(){var e=!1;if(St){var t=!1,n=function(){},i=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(o){t=o}});Y.addEventListener("test",n,i),Y.removeEventListener("test",n,i)}return e}();function k(e,t,n){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=n;t.trim().split(ai).forEach(function(o){if(!oi){var r=e.listeners;r&&r[o]&&r[o][n]&&(a=r[o][n],delete r[o][n],Object.keys(r[o]).length===0&&delete r[o],Object.keys(r).length===0&&delete e.listeners)}e.removeEventListener(o,a,i)})}function B(e,t,n){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=n;t.trim().split(ai).forEach(function(o){if(i.once&&!oi){var r=e.listeners,s=r===void 0?{}:r;a=function(){delete s[o][n],e.removeEventListener(o,a,i);for(var d=arguments.length,c=new Array(d),l=0;l<d;l++)c[l]=arguments[l];n.apply(e,c)},s[o]||(s[o]={}),s[o][n]&&e.removeEventListener(o,s[o][n],i),s[o][n]=a,e.listeners=s}e.addEventListener(o,a,i)})}function st(e,t,n){var i;return M(Event)&&M(CustomEvent)?i=new CustomEvent(t,{detail:n,bubbles:!0,cancelable:!0}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,!0,!0,n)),e.dispatchEvent(i)}function ri(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var At=Y.location,bn=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ke(e){var t=e.match(bn);return t!==null&&(t[1]!==At.protocol||t[2]!==At.hostname||t[3]!==At.port)}function He(e){var t="timestamp=".concat(new Date().getTime());return e+(e.indexOf("?")===-1?"?":"&")+t}function pt(e){var t=e.rotate,n=e.scaleX,i=e.scaleY,a=e.translateX,o=e.translateY,r=[];v(a)&&a!==0&&r.push("translateX(".concat(a,"px)")),v(o)&&o!==0&&r.push("translateY(".concat(o,"px)")),v(t)&&t!==0&&r.push("rotate(".concat(t,"deg)")),v(n)&&n!==1&&r.push("scaleX(".concat(n,")")),v(i)&&i!==1&&r.push("scaleY(".concat(i,")"));var s=r.length?r.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function yn(e){var t=We({},e),n=0;return I(e,function(i,a){delete t[a],I(t,function(o){var r=Math.abs(i.startX-o.startX),s=Math.abs(i.startY-o.startY),h=Math.abs(i.endX-o.endX),d=Math.abs(i.endY-o.endY),c=Math.sqrt(r*r+s*s),l=Math.sqrt(h*h+d*d),u=(l-c)/c;Math.abs(u)>Math.abs(n)&&(n=u)})}),n}function Ct(e,t){var n=e.pageX,i=e.pageY,a={endX:n,endY:i};return t?a:We({startX:n,startY:i},a)}function En(e){var t=0,n=0,i=0;return I(e,function(a){var o=a.startX,r=a.startY;t+=o,n+=r,i+=1}),t/=i,n/=i,{pageX:t,pageY:n}}function X(e){var t=e.aspectRatio,n=e.height,i=e.width,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",o=Be(i),r=Be(n);if(o&&r){var s=n*t;a==="contain"&&s>i||a==="cover"&&s<i?n=i/t:i=n*t}else o?n=i/t:r&&(i=n*t);return{width:i,height:n}}function wn(e){var t=e.width,n=e.height,i=e.degree;if(i=Math.abs(i)%180,i===90)return{width:n,height:t};var a=i%90*Math.PI/180,o=Math.sin(a),r=Math.cos(a),s=t*r+n*o,h=t*o+n*r;return i>90?{width:h,height:s}:{width:s,height:h}}function xn(e,t,n,i){var a=t.aspectRatio,o=t.naturalWidth,r=t.naturalHeight,s=t.rotate,h=s===void 0?0:s,d=t.scaleX,c=d===void 0?1:d,l=t.scaleY,u=l===void 0?1:l,p=n.aspectRatio,m=n.naturalWidth,b=n.naturalHeight,y=i.fillColor,O=y===void 0?"transparent":y,_=i.imageSmoothingEnabled,C=_===void 0?!0:_,U=i.imageSmoothingQuality,R=U===void 0?"low":U,f=i.maxWidth,E=f===void 0?1/0:f,T=i.maxHeight,L=T===void 0?1/0:T,$=i.minWidth,K=$===void 0?0:$,q=i.minHeight,G=q===void 0?0:q,H=document.createElement("canvas"),D=H.getContext("2d"),V=X({aspectRatio:p,width:E,height:L}),wt=X({aspectRatio:p,width:K,height:G},"cover"),Nt=Math.min(V.width,Math.max(wt.width,m)),Dt=Math.min(V.height,Math.max(wt.height,b)),te=X({aspectRatio:a,width:E,height:L}),ee=X({aspectRatio:a,width:K,height:G},"cover"),ie=Math.min(te.width,Math.max(ee.width,o)),ne=Math.min(te.height,Math.max(ee.height,r)),pi=[-ie/2,-ne/2,ie,ne];return H.width=rt(Nt),H.height=rt(Dt),D.fillStyle=O,D.fillRect(0,0,Nt,Dt),D.save(),D.translate(Nt/2,Dt/2),D.rotate(h*Math.PI/180),D.scale(c,u),D.imageSmoothingEnabled=C,D.imageSmoothingQuality=R,D.drawImage.apply(D,[e].concat(qe(pi.map(function(gi){return Math.floor(rt(gi))})))),D.restore(),H}var si=String.fromCharCode;function Cn(e,t,n){var i="";n+=t;for(var a=t;a<n;a+=1)i+=si(e.getUint8(a));return i}var In=/^data:.*,/;function On(e){var t=e.replace(In,""),n=atob(t),i=new ArrayBuffer(n.length),a=new Uint8Array(i);return I(a,function(o,r){a[r]=n.charCodeAt(r)}),i}function Tn(e,t){for(var n=[],i=8192,a=new Uint8Array(e);a.length>0;)n.push(si.apply(null,ni(a.subarray(0,i)))),a=a.subarray(i);return"data:".concat(t,";base64,").concat(btoa(n.join("")))}function _n(e){var t=new DataView(e),n;try{var i,a,o;if(t.getUint8(0)===255&&t.getUint8(1)===216)for(var r=t.byteLength,s=2;s+1<r;){if(t.getUint8(s)===255&&t.getUint8(s+1)===225){a=s;break}s+=1}if(a){var h=a+4,d=a+10;if(Cn(t,h,4)==="Exif"){var c=t.getUint16(d);if(i=c===18761,(i||c===19789)&&t.getUint16(d+2,i)===42){var l=t.getUint32(d+4,i);l>=8&&(o=d+l)}}}if(o){var u=t.getUint16(o,i),p,m;for(m=0;m<u;m+=1)if(p=o+m*12+2,t.getUint16(p,i)===274){p+=8,n=t.getUint16(p,i),t.setUint16(p,1,i);break}}}catch{n=1}return n}function Sn(e){var t=0,n=1,i=1;switch(e){case 2:n=-1;break;case 3:t=-180;break;case 4:i=-1;break;case 5:t=90,i=-1;break;case 6:t=90;break;case 7:t=90,n=-1;break;case 8:t=-90;break}return{rotate:t,scaleX:n,scaleY:i}}var Nn={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,n=this.options,i=this.container,a=this.cropper,o=Number(n.minContainerWidth),r=Number(n.minContainerHeight);S(a,A),P(t,A);var s={width:Math.max(i.offsetWidth,o>=0?o:ei),height:Math.max(i.offsetHeight,r>=0?r:ii)};this.containerData=s,F(a,{width:s.width,height:s.height}),S(t,A),P(a,A)},initCanvas:function(){var t=this.containerData,n=this.imageData,i=this.options.viewMode,a=Math.abs(n.rotate)%180===90,o=a?n.naturalHeight:n.naturalWidth,r=a?n.naturalWidth:n.naturalHeight,s=o/r,h=t.width,d=t.height;t.height*s>t.width?i===3?h=t.height*s:d=t.width/s:i===3?d=t.width/s:h=t.height*s;var c={aspectRatio:s,naturalWidth:o,naturalHeight:r,width:h,height:d};this.canvasData=c,this.limited=i===1||i===2,this.limitCanvas(!0,!0),c.width=Math.min(Math.max(c.width,c.minWidth),c.maxWidth),c.height=Math.min(Math.max(c.height,c.minHeight),c.maxHeight),c.left=(t.width-c.width)/2,c.top=(t.height-c.height)/2,c.oldLeft=c.left,c.oldTop=c.top,this.initialCanvasData=x({},c)},limitCanvas:function(t,n){var i=this.options,a=this.containerData,o=this.canvasData,r=this.cropBoxData,s=i.viewMode,h=o.aspectRatio,d=this.cropped&&r;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;s>1?(c=Math.max(c,a.width),l=Math.max(l,a.height),s===3&&(l*h>c?c=l*h:l=c/h)):s>0&&(c?c=Math.max(c,d?r.width:0):l?l=Math.max(l,d?r.height:0):d&&(c=r.width,l=r.height,l*h>c?c=l*h:l=c/h));var u=X({aspectRatio:h,width:c,height:l});c=u.width,l=u.height,o.minWidth=c,o.minHeight=l,o.maxWidth=1/0,o.maxHeight=1/0}if(n)if(s>(d?0:1)){var p=a.width-o.width,m=a.height-o.height;o.minLeft=Math.min(0,p),o.minTop=Math.min(0,m),o.maxLeft=Math.max(0,p),o.maxTop=Math.max(0,m),d&&this.limited&&(o.minLeft=Math.min(r.left,r.left+(r.width-o.width)),o.minTop=Math.min(r.top,r.top+(r.height-o.height)),o.maxLeft=r.left,o.maxTop=r.top,s===2&&(o.width>=a.width&&(o.minLeft=Math.min(0,p),o.maxLeft=Math.max(0,p)),o.height>=a.height&&(o.minTop=Math.min(0,m),o.maxTop=Math.max(0,m))))}else o.minLeft=-o.width,o.minTop=-o.height,o.maxLeft=a.width,o.maxTop=a.height},renderCanvas:function(t,n){var i=this.canvasData,a=this.imageData;if(n){var o=wn({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),r=o.width,s=o.height,h=i.width*(r/i.naturalWidth),d=i.height*(s/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(d-i.height)/2,i.width=h,i.height=d,i.aspectRatio=r/s,i.naturalWidth=r,i.naturalHeight=s,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,F(this.canvas,x({width:i.width,height:i.height},pt({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var n=this.canvasData,i=this.imageData,a=i.naturalWidth*(n.width/n.naturalWidth),o=i.naturalHeight*(n.height/n.naturalHeight);x(i,{width:a,height:o,left:(n.width-a)/2,top:(n.height-o)/2}),F(this.image,x({width:i.width,height:i.height},pt(x({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,n=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,o={width:n.width,height:n.height};i&&(n.height*i>n.width?o.height=o.width/i:o.width=o.height*i),this.cropBoxData=o,this.limitCropBox(!0,!0),o.width=Math.min(Math.max(o.width,o.minWidth),o.maxWidth),o.height=Math.min(Math.max(o.height,o.minHeight),o.maxHeight),o.width=Math.max(o.minWidth,o.width*a),o.height=Math.max(o.minHeight,o.height*a),o.left=n.left+(n.width-o.width)/2,o.top=n.top+(n.height-o.height)/2,o.oldLeft=o.left,o.oldTop=o.top,this.initialCropBoxData=x({},o)},limitCropBox:function(t,n){var i=this.options,a=this.containerData,o=this.canvasData,r=this.cropBoxData,s=this.limited,h=i.aspectRatio;if(t){var d=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=s?Math.min(a.width,o.width,o.width+o.left,a.width-o.left):a.width,u=s?Math.min(a.height,o.height,o.height+o.top,a.height-o.top):a.height;d=Math.min(d,a.width),c=Math.min(c,a.height),h&&(d&&c?c*h>d?c=d/h:d=c*h:d?c=d/h:c&&(d=c*h),u*h>l?u=l/h:l=u*h),r.minWidth=Math.min(d,l),r.minHeight=Math.min(c,u),r.maxWidth=l,r.maxHeight=u}n&&(s?(r.minLeft=Math.max(0,o.left),r.minTop=Math.max(0,o.top),r.maxLeft=Math.min(a.width,o.left+o.width)-r.width,r.maxTop=Math.min(a.height,o.top+o.height)-r.height):(r.minLeft=0,r.minTop=0,r.maxLeft=a.width-r.width,r.maxTop=a.height-r.height))},renderCropBox:function(){var t=this.options,n=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&bt(this.face,vt,i.width>=n.width&&i.height>=n.height?Je:Wt),F(this.cropBox,x({width:i.width,height:i.height},pt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),st(this.element,Ht,this.getData())}},Dn={initPreview:function(){var t=this.element,n=this.crossOrigin,i=this.options.preview,a=n?this.crossOriginUrl:this.url,o=t.alt||"The image to preview",r=document.createElement("img");if(n&&(r.crossOrigin=n),r.src=a,r.alt=o,this.viewBox.appendChild(r),this.viewBoxImage=r,!!i){var s=i;typeof i=="string"?s=t.ownerDocument.querySelectorAll(i):i.querySelector&&(s=[i]),this.previews=s,I(s,function(h){var d=document.createElement("img");bt(h,xt,{width:h.offsetWidth,height:h.offsetHeight,html:h.innerHTML}),n&&(d.crossOrigin=n),d.src=a,d.alt=o,d.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',h.innerHTML="",h.appendChild(d)})}},resetPreview:function(){I(this.previews,function(t){var n=Gt(t,xt);F(t,{width:n.width,height:n.height}),t.innerHTML=n.html,vn(t,xt)})},preview:function(){var t=this.imageData,n=this.canvasData,i=this.cropBoxData,a=i.width,o=i.height,r=t.width,s=t.height,h=i.left-n.left-t.left,d=i.top-n.top-t.top;!this.cropped||this.disabled||(F(this.viewBoxImage,x({width:r,height:s},pt(x({translateX:-h,translateY:-d},t)))),I(this.previews,function(c){var l=Gt(c,xt),u=l.width,p=l.height,m=u,b=p,y=1;a&&(y=u/a,b=o*y),o&&b>p&&(y=p/o,m=a*y,b=p),F(c,{width:m,height:b}),F(c.getElementsByTagName("img")[0],x({width:r*y,height:s*y},pt(x({translateX:-h*y,translateY:-d*y},t))))}))}},Mn={bind:function(){var t=this.element,n=this.options,i=this.cropper;M(n.cropstart)&&B(t,Ut,n.cropstart),M(n.cropmove)&&B(t,Yt,n.cropmove),M(n.cropend)&&B(t,Pt,n.cropend),M(n.crop)&&B(t,Ht,n.crop),M(n.zoom)&&B(t,$t,n.zoom),B(i,_e,this.onCropStart=this.cropStart.bind(this)),n.zoomable&&n.zoomOnWheel&&B(i,Ae,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),n.toggleDragModeOnDblclick&&B(i,Te,this.onDblclick=this.dblclick.bind(this)),B(t.ownerDocument,Se,this.onCropMove=this.cropMove.bind(this)),B(t.ownerDocument,Ne,this.onCropEnd=this.cropEnd.bind(this)),n.responsive&&B(window,Me,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,n=this.options,i=this.cropper;M(n.cropstart)&&k(t,Ut,n.cropstart),M(n.cropmove)&&k(t,Yt,n.cropmove),M(n.cropend)&&k(t,Pt,n.cropend),M(n.crop)&&k(t,Ht,n.crop),M(n.zoom)&&k(t,$t,n.zoom),k(i,_e,this.onCropStart),n.zoomable&&n.zoomOnWheel&&k(i,Ae,this.onWheel,{passive:!1,capture:!0}),n.toggleDragModeOnDblclick&&k(i,Te,this.onDblclick),k(t.ownerDocument,Se,this.onCropMove),k(t.ownerDocument,Ne,this.onCropEnd),n.responsive&&k(window,Me,this.onResize)}},An={resize:function(){if(!this.disabled){var t=this.options,n=this.container,i=this.containerData,a=n.offsetWidth/i.width,o=n.offsetHeight/i.height,r=Math.abs(a-1)>Math.abs(o-1)?a:o;if(r!==1){var s,h;t.restore&&(s=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(I(s,function(d,c){s[c]=d*r})),this.setCropBoxData(I(h,function(d,c){h[c]=d*r})))}}},dblclick:function(){this.disabled||this.options.dragMode===ti||this.setDragMode(gn(this.dragBox,Bt)?Qe:Kt)},wheel:function(t){var n=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){n.wheeling=!1},50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var n=t.buttons,i=t.button;if(!(this.disabled||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(v(n)&&n!==1||v(i)&&i!==0||t.ctrlKey))){var a=this.options,o=this.pointers,r;t.changedTouches?I(t.changedTouches,function(s){o[s.identifier]=Ct(s)}):o[t.pointerId||0]=Ct(t),Object.keys(o).length>1&&a.zoomable&&a.zoomOnTouch?r=Ze:r=Gt(t.target,vt),on.test(r)&&st(this.element,Ut,{originalEvent:t,action:r})!==!1&&(t.preventDefault(),this.action=r,this.cropping=!1,r===Ve&&(this.cropping=!0,S(this.dragBox,Tt)))}},cropMove:function(t){var n=this.action;if(!(this.disabled||!n)){var i=this.pointers;t.preventDefault(),st(this.element,Yt,{originalEvent:t,action:n})!==!1&&(t.changedTouches?I(t.changedTouches,function(a){x(i[a.identifier]||{},Ct(a,!0))}):x(i[t.pointerId||0]||{},Ct(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var n=this.action,i=this.pointers;t.changedTouches?I(t.changedTouches,function(a){delete i[a.identifier]}):delete i[t.pointerId||0],n&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,ot(this.dragBox,Tt,this.cropped&&this.options.modal)),st(this.element,Pt,{originalEvent:t,action:n}))}}},Rn={change:function(t){var n=this.options,i=this.canvasData,a=this.containerData,o=this.cropBoxData,r=this.pointers,s=this.action,h=n.aspectRatio,d=o.left,c=o.top,l=o.width,u=o.height,p=d+l,m=c+u,b=0,y=0,O=a.width,_=a.height,C=!0,U;!h&&t.shiftKey&&(h=l&&u?l/u:1),this.limited&&(b=o.minLeft,y=o.minTop,O=b+Math.min(a.width,i.width,i.left+i.width),_=y+Math.min(a.height,i.height,i.top+i.height));var R=r[Object.keys(r)[0]],f={x:R.endX-R.startX,y:R.endY-R.startY},E=function(L){switch(L){case J:p+f.x>O&&(f.x=O-p);break;case Z:d+f.x<b&&(f.x=b-d);break;case j:c+f.y<y&&(f.y=y-c);break;case nt:m+f.y>_&&(f.y=_-m);break}};switch(s){case Wt:d+=f.x,c+=f.y;break;case J:if(f.x>=0&&(p>=O||h&&(c<=y||m>=_))){C=!1;break}E(J),l+=f.x,l<0&&(s=Z,l=-l,d-=l),h&&(u=l/h,c+=(o.height-u)/2);break;case j:if(f.y<=0&&(c<=y||h&&(d<=b||p>=O))){C=!1;break}E(j),u-=f.y,c+=f.y,u<0&&(s=nt,u=-u,c-=u),h&&(l=u*h,d+=(o.width-l)/2);break;case Z:if(f.x<=0&&(d<=b||h&&(c<=y||m>=_))){C=!1;break}E(Z),l-=f.x,d+=f.x,l<0&&(s=J,l=-l,d-=l),h&&(u=l/h,c+=(o.height-u)/2);break;case nt:if(f.y>=0&&(m>=_||h&&(d<=b||p>=O))){C=!1;break}E(nt),u+=f.y,u<0&&(s=j,u=-u,c-=u),h&&(l=u*h,d+=(o.width-l)/2);break;case lt:if(h){if(f.y<=0&&(c<=y||p>=O)){C=!1;break}E(j),u-=f.y,c+=f.y,l=u*h}else E(j),E(J),f.x>=0?p<O?l+=f.x:f.y<=0&&c<=y&&(C=!1):l+=f.x,f.y<=0?c>y&&(u-=f.y,c+=f.y):(u-=f.y,c+=f.y);l<0&&u<0?(s=ut,u=-u,l=-l,c-=u,d-=l):l<0?(s=dt,l=-l,d-=l):u<0&&(s=ht,u=-u,c-=u);break;case dt:if(h){if(f.y<=0&&(c<=y||d<=b)){C=!1;break}E(j),u-=f.y,c+=f.y,l=u*h,d+=o.width-l}else E(j),E(Z),f.x<=0?d>b?(l-=f.x,d+=f.x):f.y<=0&&c<=y&&(C=!1):(l-=f.x,d+=f.x),f.y<=0?c>y&&(u-=f.y,c+=f.y):(u-=f.y,c+=f.y);l<0&&u<0?(s=ht,u=-u,l=-l,c-=u,d-=l):l<0?(s=lt,l=-l,d-=l):u<0&&(s=ut,u=-u,c-=u);break;case ut:if(h){if(f.x<=0&&(d<=b||m>=_)){C=!1;break}E(Z),l-=f.x,d+=f.x,u=l/h}else E(nt),E(Z),f.x<=0?d>b?(l-=f.x,d+=f.x):f.y>=0&&m>=_&&(C=!1):(l-=f.x,d+=f.x),f.y>=0?m<_&&(u+=f.y):u+=f.y;l<0&&u<0?(s=lt,u=-u,l=-l,c-=u,d-=l):l<0?(s=ht,l=-l,d-=l):u<0&&(s=dt,u=-u,c-=u);break;case ht:if(h){if(f.x>=0&&(p>=O||m>=_)){C=!1;break}E(J),l+=f.x,u=l/h}else E(nt),E(J),f.x>=0?p<O?l+=f.x:f.y>=0&&m>=_&&(C=!1):l+=f.x,f.y>=0?m<_&&(u+=f.y):u+=f.y;l<0&&u<0?(s=dt,u=-u,l=-l,c-=u,d-=l):l<0?(s=ut,l=-l,d-=l):u<0&&(s=lt,u=-u,c-=u);break;case Je:this.move(f.x,f.y),C=!1;break;case Ze:this.zoom(yn(r),t),C=!1;break;case Ve:if(!f.x||!f.y){C=!1;break}U=ri(this.cropper),d=R.startX-U.left,c=R.startY-U.top,l=o.minWidth,u=o.minHeight,f.x>0?s=f.y>0?ht:lt:f.x<0&&(d-=l,s=f.y>0?ut:dt),f.y<0&&(c-=u),this.cropped||(P(this.cropBox,A),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}C&&(o.width=l,o.height=u,o.left=d,o.top=c,this.action=s,this.renderCropBox()),I(r,function(T){T.startX=T.endX,T.startY=T.endY})}},Ln={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&S(this.dragBox,Tt),P(this.cropBox,A),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=x({},this.initialImageData),this.canvasData=x({},this.initialCanvasData),this.cropBoxData=x({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(x(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),P(this.dragBox,Tt),S(this.cropBox,A)),this},replace:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&t&&(this.isImg&&(this.element.src=t),n?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,I(this.previews,function(i){i.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,P(this.cropper,Ie)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,S(this.cropper,Ie)),this},destroy:function(){var t=this.element;return t[w]?(t[w]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=this.canvasData,a=i.left,o=i.top;return this.moveTo(Mt(t)?t:a+Number(t),Mt(n)?n:o+Number(n))},moveTo:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),n=Number(n),this.ready&&!this.disabled&&this.options.movable&&(v(t)&&(i.left=t,a=!0),v(n)&&(i.top=n,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,n){var i=this.canvasData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(i.width*t/i.naturalWidth,null,n)},zoomTo:function(t,n,i){var a=this.options,o=this.canvasData,r=o.width,s=o.height,h=o.naturalWidth,d=o.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,l=d*t;if(st(this.element,$t,{ratio:t,oldRatio:r/h,originalEvent:i})===!1)return this;if(i){var u=this.pointers,p=ri(this.cropper),m=u&&Object.keys(u).length?En(u):{pageX:i.pageX,pageY:i.pageY};o.left-=(c-r)*((m.pageX-p.left-o.left)/r),o.top-=(l-s)*((m.pageY-p.top-o.top)/s)}else at(n)&&v(n.x)&&v(n.y)?(o.left-=(c-r)*((n.x-o.left)/r),o.top-=(l-s)*((n.y-o.top)/s)):(o.left-=(c-r)/2,o.top-=(l-s)/2);o.width=c,o.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),v(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var n=this.imageData.scaleY;return this.scale(t,v(n)?n:1)},scaleY:function(t){var n=this.imageData.scaleX;return this.scale(v(n)?n:1,t)},scale:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),n=Number(n),this.ready&&!this.disabled&&this.options.scalable&&(v(t)&&(i.scaleX=t,a=!0),v(n)&&(i.scaleY=n,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.options,i=this.imageData,a=this.canvasData,o=this.cropBoxData,r;if(this.ready&&this.cropped){r={x:o.left-a.left,y:o.top-a.top,width:o.width,height:o.height};var s=i.width/i.naturalWidth;if(I(r,function(c,l){r[l]=c/s}),t){var h=Math.round(r.y+r.height),d=Math.round(r.x+r.width);r.x=Math.round(r.x),r.y=Math.round(r.y),r.width=d-r.x,r.height=h-r.y}}else r={x:0,y:0,width:0,height:0};return n.rotatable&&(r.rotate=i.rotate||0),n.scalable&&(r.scaleX=i.scaleX||1,r.scaleY=i.scaleY||1),r},setData:function(t){var n=this.options,i=this.imageData,a=this.canvasData,o={};if(this.ready&&!this.disabled&&at(t)){var r=!1;n.rotatable&&v(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,r=!0),n.scalable&&(v(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,r=!0),v(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,r=!0)),r&&this.renderCanvas(!0,!0);var s=i.width/i.naturalWidth;v(t.x)&&(o.left=t.x*s+a.left),v(t.y)&&(o.top=t.y*s+a.top),v(t.width)&&(o.width=t.width*s),v(t.height)&&(o.height=t.height*s),this.setCropBoxData(o)}return this},getContainerData:function(){return this.ready?x({},this.containerData):{}},getImageData:function(){return this.sized?x({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,n={};return this.ready&&I(["left","top","width","height","naturalWidth","naturalHeight"],function(i){n[i]=t[i]}),n},setCanvasData:function(t){var n=this.canvasData,i=n.aspectRatio;return this.ready&&!this.disabled&&at(t)&&(v(t.left)&&(n.left=t.left),v(t.top)&&(n.top=t.top),v(t.width)?(n.width=t.width,n.height=t.width/i):v(t.height)&&(n.height=t.height,n.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,n;return this.ready&&this.cropped&&(n={left:t.left,top:t.top,width:t.width,height:t.height}),n||{}},setCropBoxData:function(t){var n=this.cropBoxData,i=this.options.aspectRatio,a,o;return this.ready&&this.cropped&&!this.disabled&&at(t)&&(v(t.left)&&(n.left=t.left),v(t.top)&&(n.top=t.top),v(t.width)&&t.width!==n.width&&(a=!0,n.width=t.width),v(t.height)&&t.height!==n.height&&(o=!0,n.height=t.height),i&&(a?n.height=n.width/i:o&&(n.width=n.height*i)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var n=this.canvasData,i=xn(this.image,this.imageData,n,t);if(!this.cropped)return i;var a=this.getData(t.rounded),o=a.x,r=a.y,s=a.width,h=a.height,d=i.width/Math.floor(n.naturalWidth);d!==1&&(o*=d,r*=d,s*=d,h*=d);var c=s/h,l=X({aspectRatio:c,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),u=X({aspectRatio:c,width:t.minWidth||0,height:t.minHeight||0},"cover"),p=X({aspectRatio:c,width:t.width||(d!==1?i.width:s),height:t.height||(d!==1?i.height:h)}),m=p.width,b=p.height;m=Math.min(l.width,Math.max(u.width,m)),b=Math.min(l.height,Math.max(u.height,b));var y=document.createElement("canvas"),O=y.getContext("2d");y.width=rt(m),y.height=rt(b),O.fillStyle=t.fillColor||"transparent",O.fillRect(0,0,m,b);var _=t.imageSmoothingEnabled,C=_===void 0?!0:_,U=t.imageSmoothingQuality;O.imageSmoothingEnabled=C,U&&(O.imageSmoothingQuality=U);var R=i.width,f=i.height,E=o,T=r,L,$,K,q,G,H;E<=-s||E>R?(E=0,L=0,K=0,G=0):E<=0?(K=-E,E=0,L=Math.min(R,s+E),G=L):E<=R&&(K=0,L=Math.min(s,R-E),G=L),L<=0||T<=-h||T>f?(T=0,$=0,q=0,H=0):T<=0?(q=-T,T=0,$=Math.min(f,h+T),H=$):T<=f&&(q=0,$=Math.min(h,f-T),H=$);var D=[E,T,L,$];if(G>0&&H>0){var V=m/s;D.push(K*V,q*V,G*V,H*V)}return O.drawImage.apply(O,[i].concat(qe(D.map(function(wt){return Math.floor(rt(wt))})))),y},setAspectRatio:function(t){var n=this.options;return!this.disabled&&!Mt(t)&&(n.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var n=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var o=t===Kt,r=n.movable&&t===Qe;t=o||r?t:ti,n.dragMode=t,bt(i,vt,t),ot(i,Bt,o),ot(i,kt,r),n.cropBoxMovable||(bt(a,vt,t),ot(a,Bt,o),ot(a,kt,r))}return this}},Bn=Y.Cropper,kn=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Wi(this,e),!t||!cn.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=x({},Le,at(n)&&n),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return Ki(e,[{key:"init",value:function(){var n=this.element,i=n.tagName.toLowerCase(),a;if(!n[w]){if(n[w]=this,i==="img"){if(this.isImg=!0,a=n.getAttribute("src")||"",this.originalUrl=a,!a)return;a=n.src}else i==="canvas"&&window.HTMLCanvasElement&&(a=n.toDataURL());this.load(a)}}},{key:"load",value:function(n){var i=this;if(n){this.url=n,this.imageData={};var a=this.element,o=this.options;if(!o.rotatable&&!o.scalable&&(o.checkOrientation=!1),!o.checkOrientation||!window.ArrayBuffer){this.clone();return}if(rn.test(n)){sn.test(n)?this.read(On(n)):this.clone();return}var r=new XMLHttpRequest,s=this.clone.bind(this);this.reloading=!0,this.xhr=r,r.onabort=s,r.onerror=s,r.ontimeout=s,r.onprogress=function(){r.getResponseHeader("content-type")!==Re&&r.abort()},r.onload=function(){i.read(r.response)},r.onloadend=function(){i.reloading=!1,i.xhr=null},o.checkCrossOrigin&&ke(n)&&a.crossOrigin&&(n=He(n)),r.open("GET",n,!0),r.responseType="arraybuffer",r.withCredentials=a.crossOrigin==="use-credentials",r.send()}}},{key:"read",value:function(n){var i=this.options,a=this.imageData,o=_n(n),r=0,s=1,h=1;if(o>1){this.url=Tn(n,Re);var d=Sn(o);r=d.rotate,s=d.scaleX,h=d.scaleY}i.rotatable&&(a.rotate=r),i.scalable&&(a.scaleX=s,a.scaleY=h),this.clone()}},{key:"clone",value:function(){var n=this.element,i=this.url,a=n.crossOrigin,o=i;this.options.checkCrossOrigin&&ke(i)&&(a||(a="anonymous"),o=He(i)),this.crossOrigin=a,this.crossOriginUrl=o;var r=document.createElement("img");a&&(r.crossOrigin=a),r.src=o||i,r.alt=n.alt||"The image to crop",this.image=r,r.onload=this.start.bind(this),r.onerror=this.stop.bind(this),S(r,Oe),n.parentNode.insertBefore(r,n.nextSibling)}},{key:"start",value:function(){var n=this,i=this.image;i.onload=null,i.onerror=null,this.sizing=!0;var a=Y.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Y.navigator.userAgent),o=function(d,c){x(n.imageData,{naturalWidth:d,naturalHeight:c,aspectRatio:d/c}),n.initialImageData=x({},n.imageData),n.sizing=!1,n.sized=!0,n.build()};if(i.naturalWidth&&!a){o(i.naturalWidth,i.naturalHeight);return}var r=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=r,r.onload=function(){o(r.width,r.height),a||s.removeChild(r)},r.src=i.src,a||(r.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(r))}},{key:"stop",value:function(){var n=this.image;n.onload=null,n.onerror=null,n.parentNode.removeChild(n),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var n=this.element,i=this.options,a=this.image,o=n.parentNode,r=document.createElement("div");r.innerHTML=ln;var s=r.querySelector(".".concat(w,"-container")),h=s.querySelector(".".concat(w,"-canvas")),d=s.querySelector(".".concat(w,"-drag-box")),c=s.querySelector(".".concat(w,"-crop-box")),l=c.querySelector(".".concat(w,"-face"));this.container=o,this.cropper=s,this.canvas=h,this.dragBox=d,this.cropBox=c,this.viewBox=s.querySelector(".".concat(w,"-view-box")),this.face=l,h.appendChild(a),S(n,A),o.insertBefore(s,n.nextSibling),P(a,Oe),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,S(c,A),i.guides||S(c.getElementsByClassName("".concat(w,"-dashed")),A),i.center||S(c.getElementsByClassName("".concat(w,"-center")),A),i.background&&S(s,"".concat(w,"-bg")),i.highlight||S(l,tn),i.cropBoxMovable&&(S(l,kt),bt(l,vt,Wt)),i.cropBoxResizable||(S(c.getElementsByClassName("".concat(w,"-line")),A),S(c.getElementsByClassName("".concat(w,"-point")),A)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),M(i.ready)&&B(n,De,i.ready,{once:!0}),st(n,De)}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var n=this.cropper.parentNode;n&&n.removeChild(this.cropper),P(this.element,A)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=Bn,e}},{key:"setDefaults",value:function(n){x(Le,at(n)&&n)}}])}();x(kn.prototype,Nn,Dn,Mn,An,Rn,Ln);const ci="ruidai_api_key",li="ruidai_model",di="ruidai_images";let ct=localStorage.getItem(ci)||"",et=[];function _t(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(`Error parsing ${e}:`,n),t}}function hi(){try{localStorage.setItem(di,JSON.stringify(et))}catch(e){console.error("Failed to save images:",e),e.name==="QuotaExceededError"&&alert("保存容量を超えたため、画像の自動保存ができませんでした。")}}let g={};function Hn(){g={dropZone:document.getElementById("dropZone"),fileInput:document.getElementById("fileInput"),uploadBtn:document.getElementById("uploadBtn"),previewArea:document.getElementById("previewArea"),generateBtn:document.getElementById("generateBtn"),questionCount:document.getElementById("questionCount"),modelSelect:document.getElementById("modelSelect"),customInstructions:document.getElementById("customInstructions"),printDate:document.getElementById("printDate"),studentName:document.getElementById("studentName"),instructorName:document.getElementById("instructorName"),resultSection:document.getElementById("resultSection"),resultContent:document.getElementById("resultContent"),apiKeyModal:document.getElementById("apiKeyModal"),apiKeyInput:document.getElementById("apiKeyInput"),saveApiKeyBtn:document.getElementById("saveApiKeyBtn"),settingsBtn:document.getElementById("settingsBtn"),toggleApiKey:document.getElementById("toggleApiKey"),printProblemBtn:document.getElementById("printProblemBtn"),printSolutionBtn:document.getElementById("printSolutionBtn"),printFullBtn:document.getElementById("printFullBtn"),printInstructorBtn:document.getElementById("printInstructorBtn"),progressContainer:document.getElementById("progressContainer")};for(const[o,r]of Object.entries(g))r||console.error(`Missing DOM element: ${o}`);ct?g.apiKeyInput.value=ct:Vt();const e=localStorage.getItem(li);e&&(g.modelSelect.value=e);const t=localStorage.getItem("ruidai_print_date");t&&(g.printDate.value=t);const n=localStorage.getItem("ruidai_current_student");n&&(g.studentName.value=n);const i=localStorage.getItem("ruidai_current_instructor");i&&(g.instructorName.value=i);const a=_t(di,[]);a.length>0&&(et=a,Zt()),Qt(),Yn()}function Vt(){g.apiKeyModal.classList.add("active"),g.apiKeyInput.focus()}function Pn(){g.apiKeyModal.classList.remove("active")}function Yn(){g.modelSelect.addEventListener("change",()=>{localStorage.setItem(li,g.modelSelect.value),Qt()}),g.saveApiKeyBtn.addEventListener("click",()=>{const e=g.apiKeyInput.value.trim();e&&(ct=e,localStorage.setItem(ci,ct),Pn())}),g.settingsBtn.addEventListener("click",Vt),g.toggleApiKey.addEventListener("click",()=>{g.apiKeyInput.type=g.apiKeyInput.type==="password"?"text":"password"}),g.printDate.addEventListener("input",()=>localStorage.setItem("ruidai_print_date",g.printDate.value)),g.studentName.addEventListener("input",()=>localStorage.setItem("ruidai_current_student",g.studentName.value)),g.instructorName.addEventListener("input",()=>localStorage.setItem("ruidai_current_instructor",g.instructorName.value)),g.uploadBtn.addEventListener("click",()=>g.fileInput.click()),g.fileInput.addEventListener("change",e=>jt(e.target.files)),g.dropZone.addEventListener("dragover",e=>{e.preventDefault(),g.dropZone.classList.add("dragover")}),g.dropZone.addEventListener("dragleave",()=>{g.dropZone.classList.remove("dragover")}),g.dropZone.addEventListener("drop",e=>{e.preventDefault(),g.dropZone.classList.remove("dragover"),jt(e.dataTransfer.files)}),document.addEventListener("paste",Un),g.generateBtn.addEventListener("click",Xn),Jt(),jn(),document.getElementById("addPresetBtn").addEventListener("click",Ue),document.getElementById("newPresetInput").addEventListener("keypress",e=>{e.key==="Enter"&&Ue()}),Pe("studentName","studentNameList","ruidai_student_names"),Pe("instructorName","instructorNameList","ruidai_instructor_names")}function Un(e){try{const t=e.clipboardData||window.clipboardData;if(!t){console.log("No clipboard data available");return}const n=t.items,i=[];if(n&&n.length>0)for(let a=0;a<n.length;a++){const o=n[a];if(o.kind==="file"&&o.type.startsWith("image/")){const r=o.getAsFile();r&&i.push(r)}}if(i.length===0&&t.files&&t.files.length>0)for(let a=0;a<t.files.length;a++){const o=t.files[a];o.type.startsWith("image/")&&i.push(o)}if(i.length===0&&n){for(let a=0;a<n.length;a++)if(n[a].type.indexOf("image")!==-1){const o=n[a].getAsFile();o&&i.push(o)}}i.length>0&&(e.preventDefault(),console.log(`Pasted ${i.length} image(s)`),jt(i))}catch(t){console.error("Paste error:",t)}}function Pe(e,t,n){const i=document.getElementById(e),a=document.getElementById(t),o=()=>{a.innerHTML="";const r=_t(n,[]);if(r.length===0){a.classList.add("hidden");return}r.forEach((s,h)=>{const d=document.createElement("li");d.className="dropdown-item",d.innerHTML=`
        <span class="content">${s}</span>
        <span class="delete-btn" title="削除">×</span>
      `,d.addEventListener("mousedown",c=>{c.target.classList.contains("delete-btn")||(i.value=s,a.classList.add("hidden"))}),d.querySelector(".delete-btn").addEventListener("mousedown",c=>{if(c.stopPropagation(),confirm(`${s} を履歴から削除しますか？`)){const l=_t(n,[]);l.splice(h,1),localStorage.setItem(n,JSON.stringify(l)),o(),l.length===0&&a.classList.add("hidden")}}),a.appendChild(d)})};i.addEventListener("focus",()=>{o(),a.children.length>0&&a.classList.remove("hidden")}),i.addEventListener("blur",()=>{setTimeout(()=>{a.classList.add("hidden")},200)})}function Ye(e,t){const n=document.getElementById(e).value.trim();if(!n)return;const i=JSON.parse(localStorage.getItem(t)||"[]"),a=i.indexOf(n);a!==-1&&i.splice(a,1),i.unshift(n),i.length>10&&i.pop(),localStorage.setItem(t,JSON.stringify(i))}const ui="ruidai_custom_presets";let yt=_t(ui,[]);function Jt(){const e=document.getElementById("userPresets");e.innerHTML="",yt.forEach((t,n)=>{$n(t,n,e)})}function $n(e,t,n){const i=document.createElement("button");i.type="button",i.className="preset-btn",i.dataset.preset=e,i.innerHTML=`${e} <span class="remove-tag" data-index="${t}" title="削除">×</span>`,i.addEventListener("click",a=>{a.target.classList.contains("remove-tag")||i.classList.toggle("active")}),i.querySelector(".remove-tag").addEventListener("click",a=>{a.stopPropagation(),Gn(t)}),n.appendChild(i)}function Ue(){const e=document.getElementById("newPresetInput"),t=e.value.trim();if(t){if(yt.includes(t)){alert("このタグは既に追加されています");return}yt.push(t),fi(),Jt(),e.value=""}}function Gn(e){confirm("このタグを削除しますか？")&&(yt.splice(e,1),fi(),Jt())}function fi(){localStorage.setItem(ui,JSON.stringify(yt))}function jn(){document.getElementById("defaultPresets").querySelectorAll(".preset-btn").forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("active")})}),g.printProblemBtn.addEventListener("click",()=>It("problem")),g.printSolutionBtn.addEventListener("click",()=>It("solution")),g.printFullBtn.addEventListener("click",()=>It("full")),g.printInstructorBtn.addEventListener("click",()=>It("instructor"))}function jt(e){if(e.length===0)return;const t=Array.from(e).filter(i=>i.type.startsWith("image/"));if(t.length===0){alert("画像ファイルを選択してください");return}let n=0;t.forEach(i=>{const a=new FileReader;a.onload=o=>{et.push(o.target.result),n++,n===t.length&&(hi(),Zt(),g.fileInput.value="")},a.readAsDataURL(i)})}function Zt(){const e=g.previewArea;if(e.innerHTML="",et.length===0){e.classList.add("hidden"),g.generateBtn.disabled=!0;return}e.classList.remove("hidden"),g.generateBtn.disabled=!1,et.forEach((o,r)=>{const s=document.createElement("img");s.src=o,s.alt=`Page ${r+1}`,s.addEventListener("click",()=>{const d=document.getElementById("imageModal"),c=document.getElementById("modalImage");c.src=o,d.classList.add("active")});const h=document.createElement("div");h.className="preview-item",h.innerHTML=`
      <span class="page-number">P.${r+1}</span>
      <button class="remove-btn" data-index="${r}" title="削除">×</button>
    `,h.insertBefore(s,h.firstChild),h.querySelector(".remove-btn").addEventListener("click",d=>{d.stopPropagation(),zn(r)}),e.appendChild(h)});const t=document.getElementById("imageModal"),n=t.querySelector(".close-modal"),i=n.cloneNode(!0);n.parentNode.replaceChild(i,n);const a=()=>{t.classList.remove("active"),setTimeout(()=>{const o=document.getElementById("modalImage");o&&(o.src="")},300)};i.addEventListener("click",a),t.onclick=o=>{o.target===t&&a()}}function zn(e){confirm(`P.${e+1} を削除しますか？`)&&(et.splice(e,1),hi(),Zt())}img.addEventListener("click",()=>{Fn(index,imgSrc)});function Fn(e,t){const n=document.getElementById("imageModal"),i=document.getElementById("modalImage"),a=document.getElementById("cropBtn"),o=document.getElementById("saveCropBtn"),r=document.getElementById("cancelCropBtn");i.src=t,n.classList.add("active"),a.classList.remove("hidden"),o.classList.add("hidden"),r.classList.add("hidden")}async function Xn(){if(!ct){Vt();return}$e(!0);try{const e=new Fi(ct.trim()),t=g.modelSelect.value,n=e.getGenerativeModel({model:t}),i=et.map(p=>({inlineData:{data:p.split(",")[1],mimeType:"image/jpeg"}})),a=g.questionCount.value,o=Array.from(document.querySelectorAll(".preset-btn.active")).map(p=>p.dataset.preset).join(`
`),r=g.customInstructions.value,s=`${o}
${r}`.trim();Ye("studentName","ruidai_student_names"),Ye("instructorName","ruidai_instructor_names");const h=`
    # System Role
    You are an expert tutor preparing supplementary materials.

    # Task
    Create ${a} similar problems based on the provided image.
    The output must be a self-contained HTML document suitable for printing.

    # Requirements
    1. **Target Audience**: Same academic level as the problem in the image.
    2. **Topic**: Exactly the same mathematical/scientific concept.
    3. **Format**: OUTPUT RAW HTML ONLY. No markdown delimiters.
    4. **Math Notation**:
        - DO NOT use LaTeX delimiters ($ or \\[ \\]).
        - Use standard HTML tags for variables (e.g., <i>x</i>, <i>y</i>).
        - **Layout**:
          - **CRITICAL**: Do NOT add unnecessary line breaks or <br> tags within a single sentence or question text.
          - Keep mathematical variables (like <i>x</i>, <i>y</i>, <i>a</i>) INLINE with the text. Never break a line before or after a variable unless it's a new paragraph.
          - Write questions as continuous text.
        - **Fractions**: Use a vertical fraction layout with the following HTML structure:
          \`<span class="fraction"><span class="num">numerator</span><span class="den">denominator</span></span>\`
        - **Square Roots**: Use the following HTML structure:
          \`<span class="sqrt"><span class="radical">&radic;</span><span class="radicand">content</span></span>\`
        - Do NOT use slanted fractions like \`a/5\` or \`<sup>a</sup>/<sub>5</sub>\`.

    # Custom Instructions
    ${s}

    # HTML Structure
    The output HTML must contain exactly three main sections within the body:

    1. \`<div class="problems">...</div>\`
       - Contains the ${a} problems.
       - Each problem inside a \`<div class="problem-item">...</div>\`.

    2. \`<div class="solutions">...</div>\`
       - Contains the solutions AND explanations for the student.
       - Each item should be \`<div><strong>(1) Answer</strong><div class="explanation">Brief student-friendly explanation...</div></div>\`
       - **CRITICAL**: Do NOT include the "Instructor Guide" or "Teaching Points" here. Only what the student needs to understand the answer.

    3. \`<div class="instructor-guide">...</div>\`
       - **MUST** be included.
       - **CRITICAL**: This section is ONLY for the teacher/parent.
       - Contains:
         - \`<h2>作問意図と到達目標</h2>\`: Bullet points explaining why these problems were chosen and what the student should learn.
         - \`<h2>指導のポイント</h2>\`: Specific advice for teaching these concepts (e.g., common pitfalls, key steps).
         - \`<h2>解説の順序・フロー</h2>\`: Recommended step-by-step explanation flow for the instructor.
         - Content should be professional, encouraging, and helpful for a tutor.
    `,u=(await(await n.generateContent([h,...i])).response).text().replace(/```html|```/g,"");g.resultContent.innerHTML=u,g.resultSection.classList.remove("hidden"),document.querySelector(".left-panel").classList.add("collapsed"),document.querySelector(".app-layout").classList.add("full-width"),document.getElementById("fabBack").classList.remove("hidden"),g.generateBtn.parentElement.classList.add("hidden"),g.resultSection.scrollIntoView({behavior:"smooth"})}catch(e){console.error(e),alert(`エラーが発生しました: ${e.message}`)}finally{$e(!1)}}function Qt(){g.modelSelect.options[g.modelSelect.selectedIndex].text,g.generateBtn}function $e(e){const t=g.generateBtn,n=g.progressContainer;e?(t.disabled=!0,t.classList.add("loading"),n.classList.remove("hidden")):(t.disabled=!1,t.classList.remove("loading"),Qt(),n.classList.add("hidden"))}function It(e){const t=g.resultContent.innerHTML,n=window.open("","_blank"),i=g.printDate.value||"",a=g.studentName.value||"",o=g.instructorName.value||"";let r="";if(i){const p=new Date(i);r=`${p.getFullYear()}年${p.getMonth()+1}月${p.getDate()}日`}const s=`
    <div class="print-header">
      <div class="header-left">
        ${r?`<span class="date">${r}</span>`:""}
        <div class="names">
            ${a?`<span class="student">生徒: ${a}</span>`:""}
            ${o?`<span class="instructor">講師: ${o}</span>`:""}
        </div>
      </div>
      
      <div class="header-right">
        <div class="score-box">
             <div class="score-item">目標時間<div class="score-line"></div>分</div>
             <div class="score-item">得点<div class="score-line"></div>/100</div>
        </div>
      </div>
    </div>
  `;let h="",d="";const c=`
    @import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap');

    body {
      font-family: 'Zen Maru Gothic', sans-serif;
      color: #333;
      padding: 20px;
      line-height: 1.6;
    }

    .print-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 10px;
      border-bottom: 2px solid #333;
      padding-bottom: 5px;
    }

    .header-left .date {
      font-weight: 500;
    }

    .header-right {
      text-align: right;
      display: flex;
      gap: 15px;
    }

    .header-right h1 {
      margin: 0;
      font-size: 24px;
      letter-spacing: 2px;
    }

    .score-box {
      border: 2px solid #333;
      border-radius: 8px;
      padding: 5px 15px;
      display: flex;
      gap: 20px;
      background: #fff;
    }
    
    .score-item {
      font-size: 14px;
      display: flex;
      align-items: flex-end;
    }

    .score-line {
      border-bottom: 1px solid #333;
      width: 60px;
      margin-left: 5px;
    }

    .problems, .solutions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .problem-item {
      border: 2px dashed #bbb;
      border-radius: 12px;
      padding: 15px;
      background-color: #fff;
      page-break-inside: avoid;
      position: relative;
    }

    h1 {
      font-size: 1.4rem;
      margin: 10px 0 15px;
      border-left: 6px solid #666;
      padding-left: 10px;
      color: #333;
    }
    
    .page-break { page-break-after: always; }
  `,l=`
    .fraction { display: inline-flex; flex-direction: column; vertical-align: middle; font-size: 0.9em; text-align: center; }
    .num { border-bottom: 1px solid black; padding: 0 2px; display: block; }
    .den { padding: 0 2px; display: block; }
  `,u=`
    .fraction { display: inline-flex; flex-direction: column; vertical-align: middle; font-size: 0.9em; text-align: center; margin: 0 2px; }
    .num { border-bottom: 1px solid #333; padding: 0 2px; display: block; }
    .den { padding: 0 2px; display: block; }

    .sqrt { display: inline-flex; align-items: baseline; margin: 0 2px; }
    .radical { font-size: 1.2em; margin-right: 0px; line-height: 1; }
    .radicand { border-top: 1px solid #333; padding-top: 2px; padding-left: 1px; display: inline-block; line-height: 1.1; }
  `;e==="problem"?(h=`
      ${c}
      
      .solutions, .instructor-guide, h2 { 
        display: none !important; 
      }
      
      body {
        padding: 10mm !important;
        margin: 0 !important;
        font-size: 14px;
        width: 100% !important;
        box-sizing: border-box;
      }
      
      .print-header {
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #333;
        height: 35px; /* Fixed header height */
      }
      
      /* Fixed height container to force equal spacing on A4 */
      .problems {
        display: flex;
        flex-direction: column;
        /* A4 Height (297mm) - Padding (20mm) - Header (~15mm) = ~260mm */
        height: 260mm; 
        width: 100%;
      }
      
      .problem-item {
        flex: 1; /* Distribute available height equally */
        width: 100%; /* Force full width */
        padding: 5px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* Align to top, no forced spacing */
        page-break-inside: avoid;
        /* No border or extra line */
      }
      
      .problem-item:last-child {
        border-bottom: none;
      }
      
      .problem-item::before {
        content: '(' counter(problem) ')';
        counter-increment: problem;
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
      }
      
      .problems {
        counter-reset: problem;
      }
      
      /* Removed answer line '::after' block entirely */
      
      h1 {
        font-size: 1.1rem;
        margin: 0 0 5px;
        border-left: 4px solid #333;
        padding-left: 8px;
        color: #333;
      }
      
      .math, .fraction { font-size: 1.1em; }
      ${u}
    `,d=`
      <script>
      window.onload = function() {
        document.querySelectorAll('.solutions, .instructor-guide').forEach(el => el.remove());
      }
      <\/script>
    `):e==="solution"?(h=`
      ${c}
      
      /* Hide problems and INSTRUCTOR guide */
      .problems, .instructor-guide { 
        display: none !important; 
      }
      
      /* Show solutions (now includes learner explanation) */
      .solutions {
        display: grid;
        grid-template-columns: 1fr 1fr; /* 2 Columns for readability of explanation */
        gap: 15px;
        margin-bottom: 20px;
        border-bottom: 2px solid #333;
        padding-bottom: 20px;
      }
      
      .solutions > div {
        border: 1px solid #ccc; /* Box style for clear separation */
        border-radius: 8px;
        padding: 10px;
        background: transparent !important; 
        font-size: 13px;
        page-break-inside: avoid;
      }
      
      .explanation {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dashed #ccc;
        font-size: 12px;
        color: #444;
      }

      h1 { display: none; }
      
      ${u}
    `,d=`
      <script>
      window.onload = function() {
        // Remove problem and instructor guide elements
        document.querySelectorAll('.problems, .instructor-guide').forEach(el => el.remove());
        
        // Auto-scale to fit A4 page
        const body = document.body;
        let scale = 1;
        const pageHeight = 287 * 3.78;
        
        while (body.scrollHeight > pageHeight && scale > 0.6) {
          scale -= 0.02;
          body.style.transform = 'scale(' + scale + ')';
          body.style.transformOrigin = 'top left';
          body.style.width = (100 / scale) + '%';
        }
      }
      <\/script>
    `):e==="instructor"?(h=`
      ${c}
      .problems, .solutions { display: none !important; }
      
      /* Ensure guide is visible and layout is optimized for single page */
      .instructor-guide { 
        display: block; 
        page-break-inside: avoid; 
      }
      
      .instructor-guide h2 {
        border-left: 6px solid #4f46e5;
        padding-left: 10px;
        margin-top: 15px; /* Reduced top margin */
        margin-bottom: 10px;
        color: #333;
        font-size: 1.2rem;
      }
      
      .instructor-guide ul, .instructor-guide ol {
        margin-left: 20px;
        line-height: 1.5; /* Slightly tighter line height */
        margin-bottom: 10px;
      }
      
      .instructor-guide li {
        margin-bottom: 4px;
      }
      
      h1 { 
        text-align: center; 
        margin-bottom: 1.5rem; 
        font-size: 1.5rem;
      }
      ${u}
    `,d=`
      <script>
      window.onload = function() {
        // Remove incompatible elements
        document.querySelectorAll('.problems, .solutions').forEach(el => el.remove());
        
        // Auto-scale to fit A4 page
        const body = document.body;
        let scale = 1;
        const pageHeight = 287 * 3.78; // A4 height approx
        
        while (body.scrollHeight > pageHeight && scale > 0.6) {
          scale -= 0.02;
          body.style.transform = 'scale(' + scale + ')';
          body.style.transformOrigin = 'top left';
          body.style.width = (100 / scale) + '%';
        }
      }
      <\/script>
    `):(h=`
      ${c}
      ${u}
      /* In full mode, show everything but structured */
    `,d=""),n.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>類題プリント</title>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap" rel="stylesheet">
        <style>
          @page { size: A4; margin: 5mm; }
          body { font-family: 'Zen Kaku Gothic New', sans-serif; margin: 0; padding: 5mm; width: 100%; box-sizing: border-box; }
          h1 { font-size: 1.4rem; border-bottom: 2px solid #333; padding-bottom: 0.5rem; margin-bottom: 1rem; }
          .page-break { page-break-before: always; height: 0; margin: 0; border: none; }

          ${l}

          .print-controls {
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 9999;
            display: flex;
            gap: 10px;
          }
          .print-controls button {
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
          }
          .print-btn { background: #4f46e5; color: white; }
          .close-btn { background: #6b7280; color: white; }

          @media print {
            .print-controls { display: none !important; }
            ${h}
          }
          ${h}
        </style>
      </head>
      <body>
        <div class="print-controls">
          <button class="print-btn" onclick="window.print()">🖨️ 印刷 / PDF保存</button>
          <button class="close-btn" onclick="window.close()">✕ 閉じる</button>
        </div>
        ${s}
        ${t}
        ${d}
      </body>
    </html>
  `),n.document.close()}document.addEventListener("DOMContentLoaded",()=>{try{Hn()}catch(e){console.error("Initialization error:",e),alert("アプリの初期化に失敗しました: "+e.message)}});
