function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");e(r).Notify.init({}),e(r).Notify.merge({width:"310px",timeout:1e4});function l(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>o?n({position:e,delay:t}):i({position:e,delay:t})),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:o,step:n,amount:i}}=t.currentTarget;let u=Number(o.value),a=Number(n.value),d=Number(i.value);e(r).Notify.info(`delay: ${u}, step: ${a}, amount: ${d}`);for(let t=1;t<=d;t+=1)l(t,u).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),u+=a}));
//# sourceMappingURL=03-promises.d465fe65.js.map