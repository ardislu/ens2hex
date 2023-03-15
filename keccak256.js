function k(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function v(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function A(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function $(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");k(t.outputLen),k(t.blockLen)}function F(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function X(t,e){A(t);let n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}var M={number:k,bool:v,bytes:A,hash:$,exists:F,output:X},p=M;var w=BigInt(4294967295),L=BigInt(32);function m(t,e=!1){return e?{h:Number(t&w),l:Number(t>>L&w)}:{h:Number(t>>L&w)|0,l:Number(t&w)|0}}function P(t,e=!1){let n=new Uint32Array(t.length),o=new Uint32Array(t.length);for(let r=0;r<t.length;r++){let{h:i,l:s}=m(t[r],e);[n[r],o[r]]=[i,s]}return[n,o]}var C=(t,e)=>BigInt(t>>>0)<<L|BigInt(e>>>0),D=(t,e,n)=>t>>>n,R=(t,e,n)=>t<<32-n|e>>>n,V=(t,e,n)=>t>>>n|e<<32-n,W=(t,e,n)=>t<<32-n|e>>>n,q=(t,e,n)=>t<<64-n|e>>>n-32,z=(t,e,n)=>t>>>n-32|e<<64-n,G=(t,e)=>e,J=(t,e)=>t,Q=(t,e,n)=>t<<n|e>>>32-n,Y=(t,e,n)=>e<<n|t>>>32-n,Z=(t,e,n)=>e<<n-32|t>>>64-n,K=(t,e,n)=>t<<n-32|e>>>64-n;function tt(t,e,n,o){let r=(e>>>0)+(o>>>0);return{h:t+n+(r/2**32|0)|0,l:r|0}}var et=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),nt=(t,e,n,o)=>e+n+o+(t/2**32|0)|0,ot=(t,e,n,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(o>>>0),rt=(t,e,n,o,r)=>e+n+o+r+(t/2**32|0)|0,st=(t,e,n,o,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(o>>>0)+(r>>>0),it=(t,e,n,o,r,i)=>e+n+o+r+i+(t/2**32|0)|0,ct={fromBig:m,split:P,toBig:C,shrSH:D,shrSL:R,rotrSH:V,rotrSL:W,rotrBH:q,rotrBL:z,rotr32H:G,rotr32L:J,rotlSH:Q,rotlSL:Y,rotlBH:Z,rotlBL:K,add:tt,add3L:et,add3H:nt,add4L:ot,add4H:rt,add5H:it,add5L:st},h=ct;var ft={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};var B=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4));var ut=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!ut)throw new Error("Non little-endian hardware is not supported");var Bt=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function pt(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function b(t){if(typeof t=="string"&&(t=pt(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}var g=class{clone(){return this._cloneInto()}};function O(t){let e=o=>t().update(b(o)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function I(t){let e=(o,r)=>t(r).update(b(o)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=o=>t(o),e}var[U,H,T]=[[],[],[]],ht=BigInt(0),a=BigInt(1),lt=BigInt(2),at=BigInt(7),dt=BigInt(256),xt=BigInt(113);for(let t=0,e=a,n=1,o=0;t<24;t++){[n,o]=[o,(2*n+3*o)%5],U.push(2*(5*o+n)),H.push((t+1)*(t+2)/2%64);let r=ht;for(let i=0;i<7;i++)e=(e<<a^(e>>at)*xt)%dt,e&lt&&(r^=a<<(a<<BigInt(i))-a);T.push(r)}var[yt,wt]=h.split(T,!0),E=(t,e,n)=>n>32?h.rotlBH(t,e,n):h.rotlSH(t,e,n),_=(t,e,n)=>n>32?h.rotlBL(t,e,n):h.rotlSL(t,e,n);function gt(t,e=24){let n=new Uint32Array(10);for(let o=24-e;o<24;o++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){let c=(s+8)%10,d=(s+2)%10,x=n[d],u=n[d+1],j=E(x,u,1)^n[c],N=_(x,u,1)^n[c+1];for(let y=0;y<50;y+=10)t[s+y]^=j,t[s+y+1]^=N}let r=t[2],i=t[3];for(let s=0;s<24;s++){let c=H[s],d=E(r,i,c),x=_(r,i,c),u=U[s];r=t[u],i=t[u+1],t[u]=d,t[u+1]=x}for(let s=0;s<50;s+=10){for(let c=0;c<10;c++)n[c]=t[s+c];for(let c=0;c<10;c++)t[s+c]^=~n[(c+2)%10]&n[(c+4)%10]}t[0]^=yt[o],t[1]^=wt[o]}n.fill(0)}var l=class extends g{constructor(e,n,o,r=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=o,this.enableXOF=r,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,p.number(o),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=B(this.state)}keccak(){gt(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){p.exists(this);let{blockLen:n,state:o}=this;e=b(e);let r=e.length;for(let i=0;i<r;){let s=Math.min(n-this.pos,r-i);for(let c=0;c<s;c++)o[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:n,pos:o,blockLen:r}=this;e[o]^=n,n&128&&o===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){p.exists(this,!1),p.bytes(e),this.finish();let n=this.state,{blockLen:o}=this;for(let r=0,i=e.length;r<i;){this.posOut>=o&&this.keccak();let s=Math.min(o-this.posOut,i-r);e.set(n.subarray(this.posOut,this.posOut+s),r),this.posOut+=s,r+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return p.number(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(p.output(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:n,suffix:o,outputLen:r,rounds:i,enableXOF:s}=this;return e||(e=new l(n,o,r,s,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=o,e.outputLen=r,e.enableXOF=s,e.destroyed=this.destroyed,e}},f=(t,e,n)=>O(()=>new l(e,t,n)),Ut=f(6,144,224/8),Ht=f(6,136,256/8),Tt=f(6,104,384/8),St=f(6,72,512/8),jt=f(1,144,224/8),bt=f(1,136,256/8),Nt=f(1,104,384/8),vt=f(1,72,512/8),S=(t,e,n)=>I((o={})=>new l(e,t,o.dkLen===void 0?n:o.dkLen,!0)),$t=S(31,168,128/8),Ft=S(31,136,256/8);export{bt as keccak_256};
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
