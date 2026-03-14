(()=>{var fm=Object.create;var Ws=Object.defineProperty;var hm=Object.getOwnPropertyDescriptor;var pm=Object.getOwnPropertyNames;var mm=Object.getPrototypeOf,gm=Object.prototype.hasOwnProperty;var jt=(r,e)=>()=>(r&&(e=r(r=0)),e);var Yt=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ym=(r,e)=>{for(var t in e)Ws(r,t,{get:e[t],enumerable:!0})},Nu=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of pm(e))!gm.call(r,i)&&i!==t&&Ws(r,i,{get:()=>e[i],enumerable:!(n=hm(e,i))||n.enumerable});return r};var kt=(r,e,t)=>(t=r!=null?fm(mm(r)):{},Nu(e||!r||!r.__esModule?Ws(t,"default",{value:r,enumerable:!0}):t,r)),Lu=r=>Nu(Ws({},"__esModule",{value:!0}),r);var Du=Yt(qs=>{"use strict";qs.byteLength=wm;qs.toByteArray=_m;qs.fromByteArray=Am;var Or=[],dr=[],bm=typeof Uint8Array<"u"?Uint8Array:Array,ja="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(zn=0,Mu=ja.length;zn<Mu;++zn)Or[zn]=ja[zn],dr[ja.charCodeAt(zn)]=zn;var zn,Mu;dr[45]=62;dr[95]=63;function $u(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}function wm(r){var e=$u(r),t=e[0],n=e[1];return(t+n)*3/4-n}function vm(r,e,t){return(e+t)*3/4-t}function _m(r){var e,t=$u(r),n=t[0],i=t[1],s=new bm(vm(r,n,i)),o=0,l=i>0?n-4:n,u;for(u=0;u<l;u+=4)e=dr[r.charCodeAt(u)]<<18|dr[r.charCodeAt(u+1)]<<12|dr[r.charCodeAt(u+2)]<<6|dr[r.charCodeAt(u+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=dr[r.charCodeAt(u)]<<2|dr[r.charCodeAt(u+1)]>>4,s[o++]=e&255),i===1&&(e=dr[r.charCodeAt(u)]<<10|dr[r.charCodeAt(u+1)]<<4|dr[r.charCodeAt(u+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}function Sm(r){return Or[r>>18&63]+Or[r>>12&63]+Or[r>>6&63]+Or[r&63]}function Rm(r,e,t){for(var n,i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Sm(n));return i.join("")}function Am(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,l=t-n;o<l;o+=s)i.push(Rm(r,o,o+s>l?l:o+s));return n===1?(e=r[t-1],i.push(Or[e>>2]+Or[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(Or[e>>10]+Or[e>>4&63]+Or[e<<2&63]+"=")),i.join("")}});var Uu=Yt(Ya=>{Ya.read=function(r,e,t,n,i){var s,o,l=i*8-n-1,u=(1<<l)-1,y=u>>1,S=-7,R=t?i-1:0,I=t?-1:1,k=r[e+R];for(R+=I,s=k&(1<<-S)-1,k>>=-S,S+=l;S>0;s=s*256+r[e+R],R+=I,S-=8);for(o=s&(1<<-S)-1,s>>=-S,S+=n;S>0;o=o*256+r[e+R],R+=I,S-=8);if(s===0)s=1-y;else{if(s===u)return o?NaN:(k?-1:1)*(1/0);o=o+Math.pow(2,n),s=s-y}return(k?-1:1)*o*Math.pow(2,s-n)};Ya.write=function(r,e,t,n,i,s){var o,l,u,y=s*8-i-1,S=(1<<y)-1,R=S>>1,I=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=n?0:s-1,B=n?1:-1,N=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,o=S):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),o+R>=1?e+=I/u:e+=I*Math.pow(2,1-R),e*u>=2&&(o++,u/=2),o+R>=S?(l=0,o=S):o+R>=1?(l=(e*u-1)*Math.pow(2,i),o=o+R):(l=e*Math.pow(2,R-1)*Math.pow(2,i),o=0));i>=8;r[t+k]=l&255,k+=B,l/=256,i-=8);for(o=o<<i|l,y+=i;y>0;r[t+k]=o&255,k+=B,o/=256,y-=8);r[t+k-B]|=N*128}});var un=Yt(bi=>{"use strict";var Za=Du(),gi=Uu(),zu=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;bi.Buffer=z;bi.SlowBuffer=Om;bi.INSPECT_MAX_BYTES=50;var Vs=2147483647;bi.kMaxLength=Vs;z.TYPED_ARRAY_SUPPORT=Em();!z.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Em(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(z.prototype,"parent",{enumerable:!0,get:function(){if(z.isBuffer(this))return this.buffer}});Object.defineProperty(z.prototype,"offset",{enumerable:!0,get:function(){if(z.isBuffer(this))return this.byteOffset}});function zr(r){if(r>Vs)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,z.prototype),e}function z(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ec(r)}return Wu(r,e,t)}z.poolSize=8192;function Wu(r,e,t){if(typeof r=="string")return Im(r,e);if(ArrayBuffer.isView(r))return xm(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Br(r,ArrayBuffer)||r&&Br(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Br(r,SharedArrayBuffer)||r&&Br(r.buffer,SharedArrayBuffer)))return Ja(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return z.from(n,e,t);let i=Tm(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return z.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}z.from=function(r,e,t){return Wu(r,e,t)};Object.setPrototypeOf(z.prototype,Uint8Array.prototype);Object.setPrototypeOf(z,Uint8Array);function qu(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function km(r,e,t){return qu(r),r<=0?zr(r):e!==void 0?typeof t=="string"?zr(r).fill(e,t):zr(r).fill(e):zr(r)}z.alloc=function(r,e,t){return km(r,e,t)};function ec(r){return qu(r),zr(r<0?0:tc(r)|0)}z.allocUnsafe=function(r){return ec(r)};z.allocUnsafeSlow=function(r){return ec(r)};function Im(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!z.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Vu(r,e)|0,n=zr(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),n}function Xa(r){let e=r.length<0?0:tc(r.length)|0,t=zr(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}function xm(r){if(Br(r,Uint8Array)){let e=new Uint8Array(r);return Ja(e.buffer,e.byteOffset,e.byteLength)}return Xa(r)}function Ja(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(n,z.prototype),n}function Tm(r){if(z.isBuffer(r)){let e=tc(r.length)|0,t=zr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||nc(r.length)?zr(0):Xa(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Xa(r.data)}function tc(r){if(r>=Vs)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Vs.toString(16)+" bytes");return r|0}function Om(r){return+r!=r&&(r=0),z.alloc(+r)}z.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==z.prototype};z.compare=function(e,t){if(Br(e,Uint8Array)&&(e=z.from(e,e.offset,e.byteLength)),Br(t,Uint8Array)&&(t=z.from(t,t.offset,t.byteLength)),!z.isBuffer(e)||!z.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<i?-1:i<n?1:0};z.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};z.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return z.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=z.allocUnsafe(t),s=0;for(n=0;n<e.length;++n){let o=e[n];if(Br(o,Uint8Array))s+o.length>i.length?(z.isBuffer(o)||(o=z.from(o)),o.copy(i,s)):Uint8Array.prototype.set.call(i,o,s);else if(z.isBuffer(o))o.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=o.length}return i};function Vu(r,e){if(z.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Br(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Qa(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return td(r).length;default:if(i)return n?-1:Qa(r).length;e=(""+e).toLowerCase(),i=!0}}z.byteLength=Vu;function Bm(r,e,t){let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Fm(this,e,t);case"utf8":case"utf-8":return ju(this,e,t);case"ascii":return Um(this,e,t);case"latin1":case"binary":return zm(this,e,t);case"base64":return $m(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Km(this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}z.prototype._isBuffer=!0;function Fn(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}z.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Fn(this,t,t+1);return this};z.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Fn(this,t,t+3),Fn(this,t+1,t+2);return this};z.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Fn(this,t,t+7),Fn(this,t+1,t+6),Fn(this,t+2,t+5),Fn(this,t+3,t+4);return this};z.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?ju(this,0,e):Bm.apply(this,arguments)};z.prototype.toLocaleString=z.prototype.toString;z.prototype.equals=function(e){if(!z.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:z.compare(this,e)===0};z.prototype.inspect=function(){let e="",t=bi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};zu&&(z.prototype[zu]=z.prototype.inspect);z.prototype.compare=function(e,t,n,i,s){if(Br(e,Uint8Array)&&(e=z.from(e,e.offset,e.byteLength)),!z.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;let o=s-i,l=n-t,u=Math.min(o,l),y=this.slice(i,s),S=e.slice(t,n);for(let R=0;R<u;++R)if(y[R]!==S[R]){o=y[R],l=S[R];break}return o<l?-1:l<o?1:0};function Gu(r,e,t,n,i){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,nc(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=z.from(e,n)),z.isBuffer(e))return e.length===0?-1:Fu(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Fu(r,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}function Fu(r,e,t,n,i){let s=1,o=r.length,l=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,l/=2,t/=2}function u(S,R){return s===1?S[R]:S.readUInt16BE(R*s)}let y;if(i){let S=-1;for(y=t;y<o;y++)if(u(r,y)===u(e,S===-1?0:y-S)){if(S===-1&&(S=y),y-S+1===l)return S*s}else S!==-1&&(y-=y-S),S=-1}else for(t+l>o&&(t=o-l),y=t;y>=0;y--){let S=!0;for(let R=0;R<l;R++)if(u(r,y+R)!==u(e,R)){S=!1;break}if(S)return y}return-1}z.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1};z.prototype.indexOf=function(e,t,n){return Gu(this,e,t,n,!0)};z.prototype.lastIndexOf=function(e,t,n){return Gu(this,e,t,n,!1)};function Cm(r,e,t,n){t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>s/2&&(n=s/2);let o;for(o=0;o<n;++o){let l=parseInt(e.substr(o*2,2),16);if(nc(l))return o;r[t+o]=l}return o}function Pm(r,e,t,n){return Gs(Qa(e,r.length-t),r,t,n)}function Nm(r,e,t,n){return Gs(Vm(e),r,t,n)}function Lm(r,e,t,n){return Gs(td(e),r,t,n)}function Mm(r,e,t,n){return Gs(Gm(e,r.length-t),r,t,n)}z.prototype.write=function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return Cm(this,e,t,n);case"utf8":case"utf-8":return Pm(this,e,t,n);case"ascii":case"latin1":case"binary":return Nm(this,e,t,n);case"base64":return Lm(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Mm(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}};z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $m(r,e,t){return e===0&&t===r.length?Za.fromByteArray(r):Za.fromByteArray(r.slice(e,t))}function ju(r,e,t){t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,l=s>239?4:s>223?3:s>191?2:1;if(i+l<=t){let u,y,S,R;switch(l){case 1:s<128&&(o=s);break;case 2:u=r[i+1],(u&192)===128&&(R=(s&31)<<6|u&63,R>127&&(o=R));break;case 3:u=r[i+1],y=r[i+2],(u&192)===128&&(y&192)===128&&(R=(s&15)<<12|(u&63)<<6|y&63,R>2047&&(R<55296||R>57343)&&(o=R));break;case 4:u=r[i+1],y=r[i+2],S=r[i+3],(u&192)===128&&(y&192)===128&&(S&192)===128&&(R=(s&15)<<18|(u&63)<<12|(y&63)<<6|S&63,R>65535&&R<1114112&&(o=R))}}o===null?(o=65533,l=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|o&1023),n.push(o),i+=l}return Dm(n)}var Ku=4096;function Dm(r){let e=r.length;if(e<=Ku)return String.fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Ku));return t}function Um(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]&127);return n}function zm(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}function Fm(r,e,t){let n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=jm[r[s]];return i}function Km(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}z.prototype.slice=function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,z.prototype),i};function Tt(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}z.prototype.readUintLE=z.prototype.readUIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||Tt(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return i};z.prototype.readUintBE=z.prototype.readUIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||Tt(e,t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i};z.prototype.readUint8=z.prototype.readUInt8=function(e,t){return e=e>>>0,t||Tt(e,1,this.length),this[e]};z.prototype.readUint16LE=z.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||Tt(e,2,this.length),this[e]|this[e+1]<<8};z.prototype.readUint16BE=z.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||Tt(e,2,this.length),this[e]<<8|this[e+1]};z.prototype.readUint32LE=z.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||Tt(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};z.prototype.readUint32BE=z.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||Tt(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};z.prototype.readBigUInt64LE=ln(function(e){e=e>>>0,yi(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&es(e,this.length-8);let i=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))});z.prototype.readBigUInt64BE=ln(function(e){e=e>>>0,yi(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&es(e,this.length-8);let i=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(i)<<BigInt(32))+BigInt(s)});z.prototype.readIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||Tt(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i};z.prototype.readIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||Tt(e,t,this.length);let i=t,s=1,o=this[e+--i];for(;i>0&&(s*=256);)o+=this[e+--i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*t)),o};z.prototype.readInt8=function(e,t){return e=e>>>0,t||Tt(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};z.prototype.readInt16LE=function(e,t){e=e>>>0,t||Tt(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};z.prototype.readInt16BE=function(e,t){e=e>>>0,t||Tt(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};z.prototype.readInt32LE=function(e,t){return e=e>>>0,t||Tt(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};z.prototype.readInt32BE=function(e,t){return e=e>>>0,t||Tt(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};z.prototype.readBigInt64LE=ln(function(e){e=e>>>0,yi(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&es(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});z.prototype.readBigInt64BE=ln(function(e){e=e>>>0,yi(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&es(e,this.length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)});z.prototype.readFloatLE=function(e,t){return e=e>>>0,t||Tt(e,4,this.length),gi.read(this,e,!0,23,4)};z.prototype.readFloatBE=function(e,t){return e=e>>>0,t||Tt(e,4,this.length),gi.read(this,e,!1,23,4)};z.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||Tt(e,8,this.length),gi.read(this,e,!0,52,8)};z.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||Tt(e,8,this.length),gi.read(this,e,!1,52,8)};function er(r,e,t,n,i,s){if(!z.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError("Index out of range")}z.prototype.writeUintLE=z.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let l=Math.pow(2,8*n)-1;er(this,e,t,n,l,0)}let s=1,o=0;for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n};z.prototype.writeUintBE=z.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let l=Math.pow(2,8*n)-1;er(this,e,t,n,l,0)}let s=n-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+n};z.prototype.writeUint8=z.prototype.writeUInt8=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,1,255,0),this[t]=e&255,t+1};z.prototype.writeUint16LE=z.prototype.writeUInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};z.prototype.writeUint16BE=z.prototype.writeUInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};z.prototype.writeUint32LE=z.prototype.writeUInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};z.prototype.writeUint32BE=z.prototype.writeUInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Yu(r,e,t,n,i){ed(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,t}function Zu(r,e,t,n,i){ed(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}z.prototype.writeBigUInt64LE=ln(function(e,t=0){return Yu(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});z.prototype.writeBigUInt64BE=ln(function(e,t=0){return Zu(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});z.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t=t>>>0,!i){let u=Math.pow(2,8*n-1);er(this,e,t,n,u-1,-u)}let s=0,o=1,l=0;for(this[t]=e&255;++s<n&&(o*=256);)e<0&&l===0&&this[t+s-1]!==0&&(l=1),this[t+s]=(e/o>>0)-l&255;return t+n};z.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t=t>>>0,!i){let u=Math.pow(2,8*n-1);er(this,e,t,n,u-1,-u)}let s=n-1,o=1,l=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&l===0&&this[t+s+1]!==0&&(l=1),this[t+s]=(e/o>>0)-l&255;return t+n};z.prototype.writeInt8=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};z.prototype.writeInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};z.prototype.writeInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};z.prototype.writeInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};z.prototype.writeInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||er(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};z.prototype.writeBigInt64LE=ln(function(e,t=0){return Yu(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});z.prototype.writeBigInt64BE=ln(function(e,t=0){return Zu(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Xu(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ju(r,e,t,n,i){return e=+e,t=t>>>0,i||Xu(r,e,t,4,34028234663852886e22,-34028234663852886e22),gi.write(r,e,t,n,23,4),t+4}z.prototype.writeFloatLE=function(e,t,n){return Ju(this,e,t,!0,n)};z.prototype.writeFloatBE=function(e,t,n){return Ju(this,e,t,!1,n)};function Qu(r,e,t,n,i){return e=+e,t=t>>>0,i||Xu(r,e,t,8,17976931348623157e292,-17976931348623157e292),gi.write(r,e,t,n,52,8),t+8}z.prototype.writeDoubleLE=function(e,t,n){return Qu(this,e,t,!0,n)};z.prototype.writeDoubleBE=function(e,t,n){return Qu(this,e,t,!1,n)};z.prototype.copy=function(e,t,n,i){if(!z.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);let s=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),s};z.prototype.fill=function(e,t,n,i){if(typeof e=="string"){if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!z.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){let o=e.charCodeAt(0);(i==="utf8"&&o<128||i==="latin1")&&(e=o)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)this[s]=e;else{let o=z.isBuffer(e)?e:z.from(e,i),l=o.length;if(l===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=o[s%l]}return this};var mi={};function rc(r,e,t){mi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}rc("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);rc("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);rc("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=Hu(String(t)):typeof t=="bigint"&&(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Hu(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function Hu(r){let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Hm(r,e,t){yi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&es(e,r.length-(t+1))}function ed(r,e,t,n,i,s){if(r>t||r<e){let o=typeof e=="bigint"?"n":"",l;throw s>3?e===0||e===BigInt(0)?l=`>= 0${o} and < 2${o} ** ${(s+1)*8}${o}`:l=`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:l=`>= ${e}${o} and <= ${t}${o}`,new mi.ERR_OUT_OF_RANGE("value",l,r)}Hm(n,i,s)}function yi(r,e){if(typeof r!="number")throw new mi.ERR_INVALID_ARG_TYPE(e,"number",r)}function es(r,e,t){throw Math.floor(r)!==r?(yi(r,t),new mi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new mi.ERR_BUFFER_OUT_OF_BOUNDS:new mi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var Wm=/[^+/0-9A-Za-z-_]/g;function qm(r){if(r=r.split("=")[0],r=r.trim().replace(Wm,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Qa(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function Vm(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Gm(r,e){let t,n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<0);++o)t=r.charCodeAt(o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}function td(r){return Za.toByteArray(qm(r))}function Gs(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)e[i+t]=r[i];return i}function Br(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function nc(r){return r!==r}var jm=(function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e})();function ln(r){return typeof BigInt>"u"?Ym:r}function Ym(){throw new Error("BigInt not supported")}});var Wd=Yt(()=>{});var xc=Yt((qd,Ic)=>{(function(r,e){"use strict";function t(p,a){if(!p)throw new Error(a||"Assertion failed")}function n(p,a){p.super_=a;var c=function(){};c.prototype=a.prototype,p.prototype=new c,p.prototype.constructor=p}function i(p,a,c){if(i.isBN(p))return p;this.negative=0,this.words=null,this.length=0,this.red=null,p!==null&&((a==="le"||a==="be")&&(c=a,a=10),this._init(p||0,a||10,c||"be"))}typeof r=="object"?r.exports=i:e.BN=i,i.BN=i,i.wordSize=26;var s;try{typeof window<"u"&&typeof window.Buffer<"u"?s=window.Buffer:s=Wd().Buffer}catch{}i.isBN=function(a){return a instanceof i?!0:a!==null&&typeof a=="object"&&a.constructor.wordSize===i.wordSize&&Array.isArray(a.words)},i.max=function(a,c){return a.cmp(c)>0?a:c},i.min=function(a,c){return a.cmp(c)<0?a:c},i.prototype._init=function(a,c,d){if(typeof a=="number")return this._initNumber(a,c,d);if(typeof a=="object")return this._initArray(a,c,d);c==="hex"&&(c=16),t(c===(c|0)&&c>=2&&c<=36),a=a.toString().replace(/\s+/g,"");var h=0;a[0]==="-"&&(h++,this.negative=1),h<a.length&&(c===16?this._parseHex(a,h,d):(this._parseBase(a,c,h),d==="le"&&this._initArray(this.toArray(),c,d)))},i.prototype._initNumber=function(a,c,d){a<0&&(this.negative=1,a=-a),a<67108864?(this.words=[a&67108863],this.length=1):a<4503599627370496?(this.words=[a&67108863,a/67108864&67108863],this.length=2):(t(a<9007199254740992),this.words=[a&67108863,a/67108864&67108863,1],this.length=3),d==="le"&&this._initArray(this.toArray(),c,d)},i.prototype._initArray=function(a,c,d){if(t(typeof a.length=="number"),a.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(a.length/3),this.words=new Array(this.length);for(var h=0;h<this.length;h++)this.words[h]=0;var m,g,_=0;if(d==="be")for(h=a.length-1,m=0;h>=0;h-=3)g=a[h]|a[h-1]<<8|a[h-2]<<16,this.words[m]|=g<<_&67108863,this.words[m+1]=g>>>26-_&67108863,_+=24,_>=26&&(_-=26,m++);else if(d==="le")for(h=0,m=0;h<a.length;h+=3)g=a[h]|a[h+1]<<8|a[h+2]<<16,this.words[m]|=g<<_&67108863,this.words[m+1]=g>>>26-_&67108863,_+=24,_>=26&&(_-=26,m++);return this._strip()};function o(p,a){var c=p.charCodeAt(a);if(c>=48&&c<=57)return c-48;if(c>=65&&c<=70)return c-55;if(c>=97&&c<=102)return c-87;t(!1,"Invalid character in "+p)}function l(p,a,c){var d=o(p,c);return c-1>=a&&(d|=o(p,c-1)<<4),d}i.prototype._parseHex=function(a,c,d){this.length=Math.ceil((a.length-c)/6),this.words=new Array(this.length);for(var h=0;h<this.length;h++)this.words[h]=0;var m=0,g=0,_;if(d==="be")for(h=a.length-1;h>=c;h-=2)_=l(a,c,h)<<m,this.words[g]|=_&67108863,m>=18?(m-=18,g+=1,this.words[g]|=_>>>26):m+=8;else{var b=a.length-c;for(h=b%2===0?c+1:c;h<a.length;h+=2)_=l(a,c,h)<<m,this.words[g]|=_&67108863,m>=18?(m-=18,g+=1,this.words[g]|=_>>>26):m+=8}this._strip()};function u(p,a,c,d){for(var h=0,m=0,g=Math.min(p.length,c),_=a;_<g;_++){var b=p.charCodeAt(_)-48;h*=d,b>=49?m=b-49+10:b>=17?m=b-17+10:m=b,t(b>=0&&m<d,"Invalid character"),h+=m}return h}i.prototype._parseBase=function(a,c,d){this.words=[0],this.length=1;for(var h=0,m=1;m<=67108863;m*=c)h++;h--,m=m/c|0;for(var g=a.length-d,_=g%h,b=Math.min(g,g-_)+d,f=0,A=d;A<b;A+=h)f=u(a,A,A+h,c),this.imuln(m),this.words[0]+f<67108864?this.words[0]+=f:this._iaddn(f);if(_!==0){var H=1;for(f=u(a,A,a.length,c),A=0;A<_;A++)H*=c;this.imuln(H),this.words[0]+f<67108864?this.words[0]+=f:this._iaddn(f)}this._strip()},i.prototype.copy=function(a){a.words=new Array(this.length);for(var c=0;c<this.length;c++)a.words[c]=this.words[c];a.length=this.length,a.negative=this.negative,a.red=this.red};function y(p,a){p.words=a.words,p.length=a.length,p.negative=a.negative,p.red=a.red}if(i.prototype._move=function(a){y(a,this)},i.prototype.clone=function(){var a=new i(null);return this.copy(a),a},i.prototype._expand=function(a){for(;this.length<a;)this.words[this.length++]=0;return this},i.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},i.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<"u"&&typeof Symbol.for=="function")try{i.prototype[Symbol.for("nodejs.util.inspect.custom")]=S}catch{i.prototype.inspect=S}else i.prototype.inspect=S;function S(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var R=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],I=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],k=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];i.prototype.toString=function(a,c){a=a||10,c=c|0||1;var d;if(a===16||a==="hex"){d="";for(var h=0,m=0,g=0;g<this.length;g++){var _=this.words[g],b=((_<<h|m)&16777215).toString(16);m=_>>>24-h&16777215,h+=2,h>=26&&(h-=26,g--),m!==0||g!==this.length-1?d=R[6-b.length]+b+d:d=b+d}for(m!==0&&(d=m.toString(16)+d);d.length%c!==0;)d="0"+d;return this.negative!==0&&(d="-"+d),d}if(a===(a|0)&&a>=2&&a<=36){var f=I[a],A=k[a];d="";var H=this.clone();for(H.negative=0;!H.isZero();){var F=H.modrn(A).toString(a);H=H.idivn(A),H.isZero()?d=F+d:d=R[f-F.length]+F+d}for(this.isZero()&&(d="0"+d);d.length%c!==0;)d="0"+d;return this.negative!==0&&(d="-"+d),d}t(!1,"Base should be between 2 and 36")},i.prototype.toNumber=function(){var a=this.words[0];return this.length===2?a+=this.words[1]*67108864:this.length===3&&this.words[2]===1?a+=4503599627370496+this.words[1]*67108864:this.length>2&&t(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-a:a},i.prototype.toJSON=function(){return this.toString(16,2)},s&&(i.prototype.toBuffer=function(a,c){return this.toArrayLike(s,a,c)}),i.prototype.toArray=function(a,c){return this.toArrayLike(Array,a,c)};var B=function(a,c){return a.allocUnsafe?a.allocUnsafe(c):new a(c)};i.prototype.toArrayLike=function(a,c,d){this._strip();var h=this.byteLength(),m=d||Math.max(1,h);t(h<=m,"byte array longer than desired length"),t(m>0,"Requested array length <= 0");var g=B(a,m),_=c==="le"?"LE":"BE";return this["_toArrayLike"+_](g,h),g},i.prototype._toArrayLikeLE=function(a,c){for(var d=0,h=0,m=0,g=0;m<this.length;m++){var _=this.words[m]<<g|h;a[d++]=_&255,d<a.length&&(a[d++]=_>>8&255),d<a.length&&(a[d++]=_>>16&255),g===6?(d<a.length&&(a[d++]=_>>24&255),h=0,g=0):(h=_>>>24,g+=2)}if(d<a.length)for(a[d++]=h;d<a.length;)a[d++]=0},i.prototype._toArrayLikeBE=function(a,c){for(var d=a.length-1,h=0,m=0,g=0;m<this.length;m++){var _=this.words[m]<<g|h;a[d--]=_&255,d>=0&&(a[d--]=_>>8&255),d>=0&&(a[d--]=_>>16&255),g===6?(d>=0&&(a[d--]=_>>24&255),h=0,g=0):(h=_>>>24,g+=2)}if(d>=0)for(a[d--]=h;d>=0;)a[d--]=0},Math.clz32?i.prototype._countBits=function(a){return 32-Math.clz32(a)}:i.prototype._countBits=function(a){var c=a,d=0;return c>=4096&&(d+=13,c>>>=13),c>=64&&(d+=7,c>>>=7),c>=8&&(d+=4,c>>>=4),c>=2&&(d+=2,c>>>=2),d+c},i.prototype._zeroBits=function(a){if(a===0)return 26;var c=a,d=0;return(c&8191)===0&&(d+=13,c>>>=13),(c&127)===0&&(d+=7,c>>>=7),(c&15)===0&&(d+=4,c>>>=4),(c&3)===0&&(d+=2,c>>>=2),(c&1)===0&&d++,d},i.prototype.bitLength=function(){var a=this.words[this.length-1],c=this._countBits(a);return(this.length-1)*26+c};function N(p){for(var a=new Array(p.bitLength()),c=0;c<a.length;c++){var d=c/26|0,h=c%26;a[c]=p.words[d]>>>h&1}return a}i.prototype.zeroBits=function(){if(this.isZero())return 0;for(var a=0,c=0;c<this.length;c++){var d=this._zeroBits(this.words[c]);if(a+=d,d!==26)break}return a},i.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},i.prototype.toTwos=function(a){return this.negative!==0?this.abs().inotn(a).iaddn(1):this.clone()},i.prototype.fromTwos=function(a){return this.testn(a-1)?this.notn(a).iaddn(1).ineg():this.clone()},i.prototype.isNeg=function(){return this.negative!==0},i.prototype.neg=function(){return this.clone().ineg()},i.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},i.prototype.iuor=function(a){for(;this.length<a.length;)this.words[this.length++]=0;for(var c=0;c<a.length;c++)this.words[c]=this.words[c]|a.words[c];return this._strip()},i.prototype.ior=function(a){return t((this.negative|a.negative)===0),this.iuor(a)},i.prototype.or=function(a){return this.length>a.length?this.clone().ior(a):a.clone().ior(this)},i.prototype.uor=function(a){return this.length>a.length?this.clone().iuor(a):a.clone().iuor(this)},i.prototype.iuand=function(a){var c;this.length>a.length?c=a:c=this;for(var d=0;d<c.length;d++)this.words[d]=this.words[d]&a.words[d];return this.length=c.length,this._strip()},i.prototype.iand=function(a){return t((this.negative|a.negative)===0),this.iuand(a)},i.prototype.and=function(a){return this.length>a.length?this.clone().iand(a):a.clone().iand(this)},i.prototype.uand=function(a){return this.length>a.length?this.clone().iuand(a):a.clone().iuand(this)},i.prototype.iuxor=function(a){var c,d;this.length>a.length?(c=this,d=a):(c=a,d=this);for(var h=0;h<d.length;h++)this.words[h]=c.words[h]^d.words[h];if(this!==c)for(;h<c.length;h++)this.words[h]=c.words[h];return this.length=c.length,this._strip()},i.prototype.ixor=function(a){return t((this.negative|a.negative)===0),this.iuxor(a)},i.prototype.xor=function(a){return this.length>a.length?this.clone().ixor(a):a.clone().ixor(this)},i.prototype.uxor=function(a){return this.length>a.length?this.clone().iuxor(a):a.clone().iuxor(this)},i.prototype.inotn=function(a){t(typeof a=="number"&&a>=0);var c=Math.ceil(a/26)|0,d=a%26;this._expand(c),d>0&&c--;for(var h=0;h<c;h++)this.words[h]=~this.words[h]&67108863;return d>0&&(this.words[h]=~this.words[h]&67108863>>26-d),this._strip()},i.prototype.notn=function(a){return this.clone().inotn(a)},i.prototype.setn=function(a,c){t(typeof a=="number"&&a>=0);var d=a/26|0,h=a%26;return this._expand(d+1),c?this.words[d]=this.words[d]|1<<h:this.words[d]=this.words[d]&~(1<<h),this._strip()},i.prototype.iadd=function(a){var c;if(this.negative!==0&&a.negative===0)return this.negative=0,c=this.isub(a),this.negative^=1,this._normSign();if(this.negative===0&&a.negative!==0)return a.negative=0,c=this.isub(a),a.negative=1,c._normSign();var d,h;this.length>a.length?(d=this,h=a):(d=a,h=this);for(var m=0,g=0;g<h.length;g++)c=(d.words[g]|0)+(h.words[g]|0)+m,this.words[g]=c&67108863,m=c>>>26;for(;m!==0&&g<d.length;g++)c=(d.words[g]|0)+m,this.words[g]=c&67108863,m=c>>>26;if(this.length=d.length,m!==0)this.words[this.length]=m,this.length++;else if(d!==this)for(;g<d.length;g++)this.words[g]=d.words[g];return this},i.prototype.add=function(a){var c;return a.negative!==0&&this.negative===0?(a.negative=0,c=this.sub(a),a.negative^=1,c):a.negative===0&&this.negative!==0?(this.negative=0,c=a.sub(this),this.negative=1,c):this.length>a.length?this.clone().iadd(a):a.clone().iadd(this)},i.prototype.isub=function(a){if(a.negative!==0){a.negative=0;var c=this.iadd(a);return a.negative=1,c._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(a),this.negative=1,this._normSign();var d=this.cmp(a);if(d===0)return this.negative=0,this.length=1,this.words[0]=0,this;var h,m;d>0?(h=this,m=a):(h=a,m=this);for(var g=0,_=0;_<m.length;_++)c=(h.words[_]|0)-(m.words[_]|0)+g,g=c>>26,this.words[_]=c&67108863;for(;g!==0&&_<h.length;_++)c=(h.words[_]|0)+g,g=c>>26,this.words[_]=c&67108863;if(g===0&&_<h.length&&h!==this)for(;_<h.length;_++)this.words[_]=h.words[_];return this.length=Math.max(this.length,_),h!==this&&(this.negative=1),this._strip()},i.prototype.sub=function(a){return this.clone().isub(a)};function $(p,a,c){c.negative=a.negative^p.negative;var d=p.length+a.length|0;c.length=d,d=d-1|0;var h=p.words[0]|0,m=a.words[0]|0,g=h*m,_=g&67108863,b=g/67108864|0;c.words[0]=_;for(var f=1;f<d;f++){for(var A=b>>>26,H=b&67108863,F=Math.min(f,a.length-1),W=Math.max(0,f-p.length+1);W<=F;W++){var Z=f-W|0;h=p.words[Z]|0,m=a.words[W]|0,g=h*m+H,A+=g/67108864|0,H=g&67108863}c.words[f]=H|0,b=A|0}return b!==0?c.words[f]=b|0:c.length--,c._strip()}var D=function(a,c,d){var h=a.words,m=c.words,g=d.words,_=0,b,f,A,H=h[0]|0,F=H&8191,W=H>>>13,Z=h[1]|0,oe=Z&8191,se=Z>>>13,ke=h[2]|0,fe=ke&8191,Se=ke>>>13,xt=h[3]|0,be=xt&8191,ue=xt>>>13,bu=h[4]|0,Ve=bu&8191,Ge=bu>>>13,wu=h[5]|0,je=wu&8191,Ye=wu>>>13,vu=h[6]|0,Ze=vu&8191,Xe=vu>>>13,_u=h[7]|0,Je=_u&8191,Qe=_u>>>13,Su=h[8]|0,et=Su&8191,tt=Su>>>13,Ru=h[9]|0,rt=Ru&8191,nt=Ru>>>13,Au=m[0]|0,it=Au&8191,st=Au>>>13,Eu=m[1]|0,ot=Eu&8191,at=Eu>>>13,ku=m[2]|0,ct=ku&8191,lt=ku>>>13,Iu=m[3]|0,ut=Iu&8191,dt=Iu>>>13,xu=m[4]|0,ft=xu&8191,ht=xu>>>13,Tu=m[5]|0,pt=Tu&8191,mt=Tu>>>13,Ou=m[6]|0,gt=Ou&8191,yt=Ou>>>13,Bu=m[7]|0,bt=Bu&8191,wt=Bu>>>13,Cu=m[8]|0,vt=Cu&8191,_t=Cu>>>13,Pu=m[9]|0,St=Pu&8191,Rt=Pu>>>13;d.negative=a.negative^c.negative,d.length=19,b=Math.imul(F,it),f=Math.imul(F,st),f=f+Math.imul(W,it)|0,A=Math.imul(W,st);var Ta=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Ta>>>26)|0,Ta&=67108863,b=Math.imul(oe,it),f=Math.imul(oe,st),f=f+Math.imul(se,it)|0,A=Math.imul(se,st),b=b+Math.imul(F,ot)|0,f=f+Math.imul(F,at)|0,f=f+Math.imul(W,ot)|0,A=A+Math.imul(W,at)|0;var Oa=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Oa>>>26)|0,Oa&=67108863,b=Math.imul(fe,it),f=Math.imul(fe,st),f=f+Math.imul(Se,it)|0,A=Math.imul(Se,st),b=b+Math.imul(oe,ot)|0,f=f+Math.imul(oe,at)|0,f=f+Math.imul(se,ot)|0,A=A+Math.imul(se,at)|0,b=b+Math.imul(F,ct)|0,f=f+Math.imul(F,lt)|0,f=f+Math.imul(W,ct)|0,A=A+Math.imul(W,lt)|0;var Ba=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Ba>>>26)|0,Ba&=67108863,b=Math.imul(be,it),f=Math.imul(be,st),f=f+Math.imul(ue,it)|0,A=Math.imul(ue,st),b=b+Math.imul(fe,ot)|0,f=f+Math.imul(fe,at)|0,f=f+Math.imul(Se,ot)|0,A=A+Math.imul(Se,at)|0,b=b+Math.imul(oe,ct)|0,f=f+Math.imul(oe,lt)|0,f=f+Math.imul(se,ct)|0,A=A+Math.imul(se,lt)|0,b=b+Math.imul(F,ut)|0,f=f+Math.imul(F,dt)|0,f=f+Math.imul(W,ut)|0,A=A+Math.imul(W,dt)|0;var Ca=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Ca>>>26)|0,Ca&=67108863,b=Math.imul(Ve,it),f=Math.imul(Ve,st),f=f+Math.imul(Ge,it)|0,A=Math.imul(Ge,st),b=b+Math.imul(be,ot)|0,f=f+Math.imul(be,at)|0,f=f+Math.imul(ue,ot)|0,A=A+Math.imul(ue,at)|0,b=b+Math.imul(fe,ct)|0,f=f+Math.imul(fe,lt)|0,f=f+Math.imul(Se,ct)|0,A=A+Math.imul(Se,lt)|0,b=b+Math.imul(oe,ut)|0,f=f+Math.imul(oe,dt)|0,f=f+Math.imul(se,ut)|0,A=A+Math.imul(se,dt)|0,b=b+Math.imul(F,ft)|0,f=f+Math.imul(F,ht)|0,f=f+Math.imul(W,ft)|0,A=A+Math.imul(W,ht)|0;var Pa=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Pa>>>26)|0,Pa&=67108863,b=Math.imul(je,it),f=Math.imul(je,st),f=f+Math.imul(Ye,it)|0,A=Math.imul(Ye,st),b=b+Math.imul(Ve,ot)|0,f=f+Math.imul(Ve,at)|0,f=f+Math.imul(Ge,ot)|0,A=A+Math.imul(Ge,at)|0,b=b+Math.imul(be,ct)|0,f=f+Math.imul(be,lt)|0,f=f+Math.imul(ue,ct)|0,A=A+Math.imul(ue,lt)|0,b=b+Math.imul(fe,ut)|0,f=f+Math.imul(fe,dt)|0,f=f+Math.imul(Se,ut)|0,A=A+Math.imul(Se,dt)|0,b=b+Math.imul(oe,ft)|0,f=f+Math.imul(oe,ht)|0,f=f+Math.imul(se,ft)|0,A=A+Math.imul(se,ht)|0,b=b+Math.imul(F,pt)|0,f=f+Math.imul(F,mt)|0,f=f+Math.imul(W,pt)|0,A=A+Math.imul(W,mt)|0;var Na=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Na>>>26)|0,Na&=67108863,b=Math.imul(Ze,it),f=Math.imul(Ze,st),f=f+Math.imul(Xe,it)|0,A=Math.imul(Xe,st),b=b+Math.imul(je,ot)|0,f=f+Math.imul(je,at)|0,f=f+Math.imul(Ye,ot)|0,A=A+Math.imul(Ye,at)|0,b=b+Math.imul(Ve,ct)|0,f=f+Math.imul(Ve,lt)|0,f=f+Math.imul(Ge,ct)|0,A=A+Math.imul(Ge,lt)|0,b=b+Math.imul(be,ut)|0,f=f+Math.imul(be,dt)|0,f=f+Math.imul(ue,ut)|0,A=A+Math.imul(ue,dt)|0,b=b+Math.imul(fe,ft)|0,f=f+Math.imul(fe,ht)|0,f=f+Math.imul(Se,ft)|0,A=A+Math.imul(Se,ht)|0,b=b+Math.imul(oe,pt)|0,f=f+Math.imul(oe,mt)|0,f=f+Math.imul(se,pt)|0,A=A+Math.imul(se,mt)|0,b=b+Math.imul(F,gt)|0,f=f+Math.imul(F,yt)|0,f=f+Math.imul(W,gt)|0,A=A+Math.imul(W,yt)|0;var La=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(La>>>26)|0,La&=67108863,b=Math.imul(Je,it),f=Math.imul(Je,st),f=f+Math.imul(Qe,it)|0,A=Math.imul(Qe,st),b=b+Math.imul(Ze,ot)|0,f=f+Math.imul(Ze,at)|0,f=f+Math.imul(Xe,ot)|0,A=A+Math.imul(Xe,at)|0,b=b+Math.imul(je,ct)|0,f=f+Math.imul(je,lt)|0,f=f+Math.imul(Ye,ct)|0,A=A+Math.imul(Ye,lt)|0,b=b+Math.imul(Ve,ut)|0,f=f+Math.imul(Ve,dt)|0,f=f+Math.imul(Ge,ut)|0,A=A+Math.imul(Ge,dt)|0,b=b+Math.imul(be,ft)|0,f=f+Math.imul(be,ht)|0,f=f+Math.imul(ue,ft)|0,A=A+Math.imul(ue,ht)|0,b=b+Math.imul(fe,pt)|0,f=f+Math.imul(fe,mt)|0,f=f+Math.imul(Se,pt)|0,A=A+Math.imul(Se,mt)|0,b=b+Math.imul(oe,gt)|0,f=f+Math.imul(oe,yt)|0,f=f+Math.imul(se,gt)|0,A=A+Math.imul(se,yt)|0,b=b+Math.imul(F,bt)|0,f=f+Math.imul(F,wt)|0,f=f+Math.imul(W,bt)|0,A=A+Math.imul(W,wt)|0;var Ma=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Ma>>>26)|0,Ma&=67108863,b=Math.imul(et,it),f=Math.imul(et,st),f=f+Math.imul(tt,it)|0,A=Math.imul(tt,st),b=b+Math.imul(Je,ot)|0,f=f+Math.imul(Je,at)|0,f=f+Math.imul(Qe,ot)|0,A=A+Math.imul(Qe,at)|0,b=b+Math.imul(Ze,ct)|0,f=f+Math.imul(Ze,lt)|0,f=f+Math.imul(Xe,ct)|0,A=A+Math.imul(Xe,lt)|0,b=b+Math.imul(je,ut)|0,f=f+Math.imul(je,dt)|0,f=f+Math.imul(Ye,ut)|0,A=A+Math.imul(Ye,dt)|0,b=b+Math.imul(Ve,ft)|0,f=f+Math.imul(Ve,ht)|0,f=f+Math.imul(Ge,ft)|0,A=A+Math.imul(Ge,ht)|0,b=b+Math.imul(be,pt)|0,f=f+Math.imul(be,mt)|0,f=f+Math.imul(ue,pt)|0,A=A+Math.imul(ue,mt)|0,b=b+Math.imul(fe,gt)|0,f=f+Math.imul(fe,yt)|0,f=f+Math.imul(Se,gt)|0,A=A+Math.imul(Se,yt)|0,b=b+Math.imul(oe,bt)|0,f=f+Math.imul(oe,wt)|0,f=f+Math.imul(se,bt)|0,A=A+Math.imul(se,wt)|0,b=b+Math.imul(F,vt)|0,f=f+Math.imul(F,_t)|0,f=f+Math.imul(W,vt)|0,A=A+Math.imul(W,_t)|0;var $a=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+($a>>>26)|0,$a&=67108863,b=Math.imul(rt,it),f=Math.imul(rt,st),f=f+Math.imul(nt,it)|0,A=Math.imul(nt,st),b=b+Math.imul(et,ot)|0,f=f+Math.imul(et,at)|0,f=f+Math.imul(tt,ot)|0,A=A+Math.imul(tt,at)|0,b=b+Math.imul(Je,ct)|0,f=f+Math.imul(Je,lt)|0,f=f+Math.imul(Qe,ct)|0,A=A+Math.imul(Qe,lt)|0,b=b+Math.imul(Ze,ut)|0,f=f+Math.imul(Ze,dt)|0,f=f+Math.imul(Xe,ut)|0,A=A+Math.imul(Xe,dt)|0,b=b+Math.imul(je,ft)|0,f=f+Math.imul(je,ht)|0,f=f+Math.imul(Ye,ft)|0,A=A+Math.imul(Ye,ht)|0,b=b+Math.imul(Ve,pt)|0,f=f+Math.imul(Ve,mt)|0,f=f+Math.imul(Ge,pt)|0,A=A+Math.imul(Ge,mt)|0,b=b+Math.imul(be,gt)|0,f=f+Math.imul(be,yt)|0,f=f+Math.imul(ue,gt)|0,A=A+Math.imul(ue,yt)|0,b=b+Math.imul(fe,bt)|0,f=f+Math.imul(fe,wt)|0,f=f+Math.imul(Se,bt)|0,A=A+Math.imul(Se,wt)|0,b=b+Math.imul(oe,vt)|0,f=f+Math.imul(oe,_t)|0,f=f+Math.imul(se,vt)|0,A=A+Math.imul(se,_t)|0,b=b+Math.imul(F,St)|0,f=f+Math.imul(F,Rt)|0,f=f+Math.imul(W,St)|0,A=A+Math.imul(W,Rt)|0;var Da=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Da>>>26)|0,Da&=67108863,b=Math.imul(rt,ot),f=Math.imul(rt,at),f=f+Math.imul(nt,ot)|0,A=Math.imul(nt,at),b=b+Math.imul(et,ct)|0,f=f+Math.imul(et,lt)|0,f=f+Math.imul(tt,ct)|0,A=A+Math.imul(tt,lt)|0,b=b+Math.imul(Je,ut)|0,f=f+Math.imul(Je,dt)|0,f=f+Math.imul(Qe,ut)|0,A=A+Math.imul(Qe,dt)|0,b=b+Math.imul(Ze,ft)|0,f=f+Math.imul(Ze,ht)|0,f=f+Math.imul(Xe,ft)|0,A=A+Math.imul(Xe,ht)|0,b=b+Math.imul(je,pt)|0,f=f+Math.imul(je,mt)|0,f=f+Math.imul(Ye,pt)|0,A=A+Math.imul(Ye,mt)|0,b=b+Math.imul(Ve,gt)|0,f=f+Math.imul(Ve,yt)|0,f=f+Math.imul(Ge,gt)|0,A=A+Math.imul(Ge,yt)|0,b=b+Math.imul(be,bt)|0,f=f+Math.imul(be,wt)|0,f=f+Math.imul(ue,bt)|0,A=A+Math.imul(ue,wt)|0,b=b+Math.imul(fe,vt)|0,f=f+Math.imul(fe,_t)|0,f=f+Math.imul(Se,vt)|0,A=A+Math.imul(Se,_t)|0,b=b+Math.imul(oe,St)|0,f=f+Math.imul(oe,Rt)|0,f=f+Math.imul(se,St)|0,A=A+Math.imul(se,Rt)|0;var Ua=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Ua>>>26)|0,Ua&=67108863,b=Math.imul(rt,ct),f=Math.imul(rt,lt),f=f+Math.imul(nt,ct)|0,A=Math.imul(nt,lt),b=b+Math.imul(et,ut)|0,f=f+Math.imul(et,dt)|0,f=f+Math.imul(tt,ut)|0,A=A+Math.imul(tt,dt)|0,b=b+Math.imul(Je,ft)|0,f=f+Math.imul(Je,ht)|0,f=f+Math.imul(Qe,ft)|0,A=A+Math.imul(Qe,ht)|0,b=b+Math.imul(Ze,pt)|0,f=f+Math.imul(Ze,mt)|0,f=f+Math.imul(Xe,pt)|0,A=A+Math.imul(Xe,mt)|0,b=b+Math.imul(je,gt)|0,f=f+Math.imul(je,yt)|0,f=f+Math.imul(Ye,gt)|0,A=A+Math.imul(Ye,yt)|0,b=b+Math.imul(Ve,bt)|0,f=f+Math.imul(Ve,wt)|0,f=f+Math.imul(Ge,bt)|0,A=A+Math.imul(Ge,wt)|0,b=b+Math.imul(be,vt)|0,f=f+Math.imul(be,_t)|0,f=f+Math.imul(ue,vt)|0,A=A+Math.imul(ue,_t)|0,b=b+Math.imul(fe,St)|0,f=f+Math.imul(fe,Rt)|0,f=f+Math.imul(Se,St)|0,A=A+Math.imul(Se,Rt)|0;var za=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(za>>>26)|0,za&=67108863,b=Math.imul(rt,ut),f=Math.imul(rt,dt),f=f+Math.imul(nt,ut)|0,A=Math.imul(nt,dt),b=b+Math.imul(et,ft)|0,f=f+Math.imul(et,ht)|0,f=f+Math.imul(tt,ft)|0,A=A+Math.imul(tt,ht)|0,b=b+Math.imul(Je,pt)|0,f=f+Math.imul(Je,mt)|0,f=f+Math.imul(Qe,pt)|0,A=A+Math.imul(Qe,mt)|0,b=b+Math.imul(Ze,gt)|0,f=f+Math.imul(Ze,yt)|0,f=f+Math.imul(Xe,gt)|0,A=A+Math.imul(Xe,yt)|0,b=b+Math.imul(je,bt)|0,f=f+Math.imul(je,wt)|0,f=f+Math.imul(Ye,bt)|0,A=A+Math.imul(Ye,wt)|0,b=b+Math.imul(Ve,vt)|0,f=f+Math.imul(Ve,_t)|0,f=f+Math.imul(Ge,vt)|0,A=A+Math.imul(Ge,_t)|0,b=b+Math.imul(be,St)|0,f=f+Math.imul(be,Rt)|0,f=f+Math.imul(ue,St)|0,A=A+Math.imul(ue,Rt)|0;var Fa=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Fa>>>26)|0,Fa&=67108863,b=Math.imul(rt,ft),f=Math.imul(rt,ht),f=f+Math.imul(nt,ft)|0,A=Math.imul(nt,ht),b=b+Math.imul(et,pt)|0,f=f+Math.imul(et,mt)|0,f=f+Math.imul(tt,pt)|0,A=A+Math.imul(tt,mt)|0,b=b+Math.imul(Je,gt)|0,f=f+Math.imul(Je,yt)|0,f=f+Math.imul(Qe,gt)|0,A=A+Math.imul(Qe,yt)|0,b=b+Math.imul(Ze,bt)|0,f=f+Math.imul(Ze,wt)|0,f=f+Math.imul(Xe,bt)|0,A=A+Math.imul(Xe,wt)|0,b=b+Math.imul(je,vt)|0,f=f+Math.imul(je,_t)|0,f=f+Math.imul(Ye,vt)|0,A=A+Math.imul(Ye,_t)|0,b=b+Math.imul(Ve,St)|0,f=f+Math.imul(Ve,Rt)|0,f=f+Math.imul(Ge,St)|0,A=A+Math.imul(Ge,Rt)|0;var Ka=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Ka>>>26)|0,Ka&=67108863,b=Math.imul(rt,pt),f=Math.imul(rt,mt),f=f+Math.imul(nt,pt)|0,A=Math.imul(nt,mt),b=b+Math.imul(et,gt)|0,f=f+Math.imul(et,yt)|0,f=f+Math.imul(tt,gt)|0,A=A+Math.imul(tt,yt)|0,b=b+Math.imul(Je,bt)|0,f=f+Math.imul(Je,wt)|0,f=f+Math.imul(Qe,bt)|0,A=A+Math.imul(Qe,wt)|0,b=b+Math.imul(Ze,vt)|0,f=f+Math.imul(Ze,_t)|0,f=f+Math.imul(Xe,vt)|0,A=A+Math.imul(Xe,_t)|0,b=b+Math.imul(je,St)|0,f=f+Math.imul(je,Rt)|0,f=f+Math.imul(Ye,St)|0,A=A+Math.imul(Ye,Rt)|0;var Ha=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Ha>>>26)|0,Ha&=67108863,b=Math.imul(rt,gt),f=Math.imul(rt,yt),f=f+Math.imul(nt,gt)|0,A=Math.imul(nt,yt),b=b+Math.imul(et,bt)|0,f=f+Math.imul(et,wt)|0,f=f+Math.imul(tt,bt)|0,A=A+Math.imul(tt,wt)|0,b=b+Math.imul(Je,vt)|0,f=f+Math.imul(Je,_t)|0,f=f+Math.imul(Qe,vt)|0,A=A+Math.imul(Qe,_t)|0,b=b+Math.imul(Ze,St)|0,f=f+Math.imul(Ze,Rt)|0,f=f+Math.imul(Xe,St)|0,A=A+Math.imul(Xe,Rt)|0;var Wa=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Wa>>>26)|0,Wa&=67108863,b=Math.imul(rt,bt),f=Math.imul(rt,wt),f=f+Math.imul(nt,bt)|0,A=Math.imul(nt,wt),b=b+Math.imul(et,vt)|0,f=f+Math.imul(et,_t)|0,f=f+Math.imul(tt,vt)|0,A=A+Math.imul(tt,_t)|0,b=b+Math.imul(Je,St)|0,f=f+Math.imul(Je,Rt)|0,f=f+Math.imul(Qe,St)|0,A=A+Math.imul(Qe,Rt)|0;var qa=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(qa>>>26)|0,qa&=67108863,b=Math.imul(rt,vt),f=Math.imul(rt,_t),f=f+Math.imul(nt,vt)|0,A=Math.imul(nt,_t),b=b+Math.imul(et,St)|0,f=f+Math.imul(et,Rt)|0,f=f+Math.imul(tt,St)|0,A=A+Math.imul(tt,Rt)|0;var Va=(_+b|0)+((f&8191)<<13)|0;_=(A+(f>>>13)|0)+(Va>>>26)|0,Va&=67108863,b=Math.imul(rt,St),f=Math.imul(rt,Rt),f=f+Math.imul(nt,St)|0,A=Math.imul(nt,Rt);var Ga=(_+b|0)+((f&8191)<<13)|0;return _=(A+(f>>>13)|0)+(Ga>>>26)|0,Ga&=67108863,g[0]=Ta,g[1]=Oa,g[2]=Ba,g[3]=Ca,g[4]=Pa,g[5]=Na,g[6]=La,g[7]=Ma,g[8]=$a,g[9]=Da,g[10]=Ua,g[11]=za,g[12]=Fa,g[13]=Ka,g[14]=Ha,g[15]=Wa,g[16]=qa,g[17]=Va,g[18]=Ga,_!==0&&(g[19]=_,d.length++),d};Math.imul||(D=$);function L(p,a,c){c.negative=a.negative^p.negative,c.length=p.length+a.length;for(var d=0,h=0,m=0;m<c.length-1;m++){var g=h;h=0;for(var _=d&67108863,b=Math.min(m,a.length-1),f=Math.max(0,m-p.length+1);f<=b;f++){var A=m-f,H=p.words[A]|0,F=a.words[f]|0,W=H*F,Z=W&67108863;g=g+(W/67108864|0)|0,Z=Z+_|0,_=Z&67108863,g=g+(Z>>>26)|0,h+=g>>>26,g&=67108863}c.words[m]=_,d=g,g=h}return d!==0?c.words[m]=d:c.length--,c._strip()}function K(p,a,c){return L(p,a,c)}i.prototype.mulTo=function(a,c){var d,h=this.length+a.length;return this.length===10&&a.length===10?d=D(this,a,c):h<63?d=$(this,a,c):h<1024?d=L(this,a,c):d=K(this,a,c),d};function G(p,a){this.x=p,this.y=a}G.prototype.makeRBT=function(a){for(var c=new Array(a),d=i.prototype._countBits(a)-1,h=0;h<a;h++)c[h]=this.revBin(h,d,a);return c},G.prototype.revBin=function(a,c,d){if(a===0||a===d-1)return a;for(var h=0,m=0;m<c;m++)h|=(a&1)<<c-m-1,a>>=1;return h},G.prototype.permute=function(a,c,d,h,m,g){for(var _=0;_<g;_++)h[_]=c[a[_]],m[_]=d[a[_]]},G.prototype.transform=function(a,c,d,h,m,g){this.permute(g,a,c,d,h,m);for(var _=1;_<m;_<<=1)for(var b=_<<1,f=Math.cos(2*Math.PI/b),A=Math.sin(2*Math.PI/b),H=0;H<m;H+=b)for(var F=f,W=A,Z=0;Z<_;Z++){var oe=d[H+Z],se=h[H+Z],ke=d[H+Z+_],fe=h[H+Z+_],Se=F*ke-W*fe;fe=F*fe+W*ke,ke=Se,d[H+Z]=oe+ke,h[H+Z]=se+fe,d[H+Z+_]=oe-ke,h[H+Z+_]=se-fe,Z!==b&&(Se=f*F-A*W,W=f*W+A*F,F=Se)}},G.prototype.guessLen13b=function(a,c){var d=Math.max(c,a)|1,h=d&1,m=0;for(d=d/2|0;d;d=d>>>1)m++;return 1<<m+1+h},G.prototype.conjugate=function(a,c,d){if(!(d<=1))for(var h=0;h<d/2;h++){var m=a[h];a[h]=a[d-h-1],a[d-h-1]=m,m=c[h],c[h]=-c[d-h-1],c[d-h-1]=-m}},G.prototype.normalize13b=function(a,c){for(var d=0,h=0;h<c/2;h++){var m=Math.round(a[2*h+1]/c)*8192+Math.round(a[2*h]/c)+d;a[h]=m&67108863,m<67108864?d=0:d=m/67108864|0}return a},G.prototype.convert13b=function(a,c,d,h){for(var m=0,g=0;g<c;g++)m=m+(a[g]|0),d[2*g]=m&8191,m=m>>>13,d[2*g+1]=m&8191,m=m>>>13;for(g=2*c;g<h;++g)d[g]=0;t(m===0),t((m&-8192)===0)},G.prototype.stub=function(a){for(var c=new Array(a),d=0;d<a;d++)c[d]=0;return c},G.prototype.mulp=function(a,c,d){var h=2*this.guessLen13b(a.length,c.length),m=this.makeRBT(h),g=this.stub(h),_=new Array(h),b=new Array(h),f=new Array(h),A=new Array(h),H=new Array(h),F=new Array(h),W=d.words;W.length=h,this.convert13b(a.words,a.length,_,h),this.convert13b(c.words,c.length,A,h),this.transform(_,g,b,f,h,m),this.transform(A,g,H,F,h,m);for(var Z=0;Z<h;Z++){var oe=b[Z]*H[Z]-f[Z]*F[Z];f[Z]=b[Z]*F[Z]+f[Z]*H[Z],b[Z]=oe}return this.conjugate(b,f,h),this.transform(b,f,W,g,h,m),this.conjugate(W,g,h),this.normalize13b(W,h),d.negative=a.negative^c.negative,d.length=a.length+c.length,d._strip()},i.prototype.mul=function(a){var c=new i(null);return c.words=new Array(this.length+a.length),this.mulTo(a,c)},i.prototype.mulf=function(a){var c=new i(null);return c.words=new Array(this.length+a.length),K(this,a,c)},i.prototype.imul=function(a){return this.clone().mulTo(a,this)},i.prototype.imuln=function(a){var c=a<0;c&&(a=-a),t(typeof a=="number"),t(a<67108864);for(var d=0,h=0;h<this.length;h++){var m=(this.words[h]|0)*a,g=(m&67108863)+(d&67108863);d>>=26,d+=m/67108864|0,d+=g>>>26,this.words[h]=g&67108863}return d!==0&&(this.words[h]=d,this.length++),this.length=a===0?1:this.length,c?this.ineg():this},i.prototype.muln=function(a){return this.clone().imuln(a)},i.prototype.sqr=function(){return this.mul(this)},i.prototype.isqr=function(){return this.imul(this.clone())},i.prototype.pow=function(a){var c=N(a);if(c.length===0)return new i(1);for(var d=this,h=0;h<c.length&&c[h]===0;h++,d=d.sqr());if(++h<c.length)for(var m=d.sqr();h<c.length;h++,m=m.sqr())c[h]!==0&&(d=d.mul(m));return d},i.prototype.iushln=function(a){t(typeof a=="number"&&a>=0);var c=a%26,d=(a-c)/26,h=67108863>>>26-c<<26-c,m;if(c!==0){var g=0;for(m=0;m<this.length;m++){var _=this.words[m]&h,b=(this.words[m]|0)-_<<c;this.words[m]=b|g,g=_>>>26-c}g&&(this.words[m]=g,this.length++)}if(d!==0){for(m=this.length-1;m>=0;m--)this.words[m+d]=this.words[m];for(m=0;m<d;m++)this.words[m]=0;this.length+=d}return this._strip()},i.prototype.ishln=function(a){return t(this.negative===0),this.iushln(a)},i.prototype.iushrn=function(a,c,d){t(typeof a=="number"&&a>=0);var h;c?h=(c-c%26)/26:h=0;var m=a%26,g=Math.min((a-m)/26,this.length),_=67108863^67108863>>>m<<m,b=d;if(h-=g,h=Math.max(0,h),b){for(var f=0;f<g;f++)b.words[f]=this.words[f];b.length=g}if(g!==0)if(this.length>g)for(this.length-=g,f=0;f<this.length;f++)this.words[f]=this.words[f+g];else this.words[0]=0,this.length=1;var A=0;for(f=this.length-1;f>=0&&(A!==0||f>=h);f--){var H=this.words[f]|0;this.words[f]=A<<26-m|H>>>m,A=H&_}return b&&A!==0&&(b.words[b.length++]=A),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},i.prototype.ishrn=function(a,c,d){return t(this.negative===0),this.iushrn(a,c,d)},i.prototype.shln=function(a){return this.clone().ishln(a)},i.prototype.ushln=function(a){return this.clone().iushln(a)},i.prototype.shrn=function(a){return this.clone().ishrn(a)},i.prototype.ushrn=function(a){return this.clone().iushrn(a)},i.prototype.testn=function(a){t(typeof a=="number"&&a>=0);var c=a%26,d=(a-c)/26,h=1<<c;if(this.length<=d)return!1;var m=this.words[d];return!!(m&h)},i.prototype.imaskn=function(a){t(typeof a=="number"&&a>=0);var c=a%26,d=(a-c)/26;if(t(this.negative===0,"imaskn works only with positive numbers"),this.length<=d)return this;if(c!==0&&d++,this.length=Math.min(d,this.length),c!==0){var h=67108863^67108863>>>c<<c;this.words[this.length-1]&=h}return this.length===0&&(this.words[0]=0,this.length=1),this._strip()},i.prototype.maskn=function(a){return this.clone().imaskn(a)},i.prototype.iaddn=function(a){return t(typeof a=="number"),t(a<67108864),a<0?this.isubn(-a):this.negative!==0?this.length===1&&(this.words[0]|0)<=a?(this.words[0]=a-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(a),this.negative=1,this):this._iaddn(a)},i.prototype._iaddn=function(a){this.words[0]+=a;for(var c=0;c<this.length&&this.words[c]>=67108864;c++)this.words[c]-=67108864,c===this.length-1?this.words[c+1]=1:this.words[c+1]++;return this.length=Math.max(this.length,c+1),this},i.prototype.isubn=function(a){if(t(typeof a=="number"),t(a<67108864),a<0)return this.iaddn(-a);if(this.negative!==0)return this.negative=0,this.iaddn(a),this.negative=1,this;if(this.words[0]-=a,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var c=0;c<this.length&&this.words[c]<0;c++)this.words[c]+=67108864,this.words[c+1]-=1;return this._strip()},i.prototype.addn=function(a){return this.clone().iaddn(a)},i.prototype.subn=function(a){return this.clone().isubn(a)},i.prototype.iabs=function(){return this.negative=0,this},i.prototype.abs=function(){return this.clone().iabs()},i.prototype._ishlnsubmul=function(a,c,d){var h=a.length+d,m;this._expand(h);var g,_=0;for(m=0;m<a.length;m++){g=(this.words[m+d]|0)+_;var b=(a.words[m]|0)*c;g-=b&67108863,_=(g>>26)-(b/67108864|0),this.words[m+d]=g&67108863}for(;m<this.length-d;m++)g=(this.words[m+d]|0)+_,_=g>>26,this.words[m+d]=g&67108863;if(_===0)return this._strip();for(t(_===-1),_=0,m=0;m<this.length;m++)g=-(this.words[m]|0)+_,_=g>>26,this.words[m]=g&67108863;return this.negative=1,this._strip()},i.prototype._wordDiv=function(a,c){var d=this.length-a.length,h=this.clone(),m=a,g=m.words[m.length-1]|0,_=this._countBits(g);d=26-_,d!==0&&(m=m.ushln(d),h.iushln(d),g=m.words[m.length-1]|0);var b=h.length-m.length,f;if(c!=="mod"){f=new i(null),f.length=b+1,f.words=new Array(f.length);for(var A=0;A<f.length;A++)f.words[A]=0}var H=h.clone()._ishlnsubmul(m,1,b);H.negative===0&&(h=H,f&&(f.words[b]=1));for(var F=b-1;F>=0;F--){var W=(h.words[m.length+F]|0)*67108864+(h.words[m.length+F-1]|0);for(W=Math.min(W/g|0,67108863),h._ishlnsubmul(m,W,F);h.negative!==0;)W--,h.negative=0,h._ishlnsubmul(m,1,F),h.isZero()||(h.negative^=1);f&&(f.words[F]=W)}return f&&f._strip(),h._strip(),c!=="div"&&d!==0&&h.iushrn(d),{div:f||null,mod:h}},i.prototype.divmod=function(a,c,d){if(t(!a.isZero()),this.isZero())return{div:new i(0),mod:new i(0)};var h,m,g;return this.negative!==0&&a.negative===0?(g=this.neg().divmod(a,c),c!=="mod"&&(h=g.div.neg()),c!=="div"&&(m=g.mod.neg(),d&&m.negative!==0&&m.iadd(a)),{div:h,mod:m}):this.negative===0&&a.negative!==0?(g=this.divmod(a.neg(),c),c!=="mod"&&(h=g.div.neg()),{div:h,mod:g.mod}):(this.negative&a.negative)!==0?(g=this.neg().divmod(a.neg(),c),c!=="div"&&(m=g.mod.neg(),d&&m.negative!==0&&m.isub(a)),{div:g.div,mod:m}):a.length>this.length||this.cmp(a)<0?{div:new i(0),mod:this}:a.length===1?c==="div"?{div:this.divn(a.words[0]),mod:null}:c==="mod"?{div:null,mod:new i(this.modrn(a.words[0]))}:{div:this.divn(a.words[0]),mod:new i(this.modrn(a.words[0]))}:this._wordDiv(a,c)},i.prototype.div=function(a){return this.divmod(a,"div",!1).div},i.prototype.mod=function(a){return this.divmod(a,"mod",!1).mod},i.prototype.umod=function(a){return this.divmod(a,"mod",!0).mod},i.prototype.divRound=function(a){var c=this.divmod(a);if(c.mod.isZero())return c.div;var d=c.div.negative!==0?c.mod.isub(a):c.mod,h=a.ushrn(1),m=a.andln(1),g=d.cmp(h);return g<0||m===1&&g===0?c.div:c.div.negative!==0?c.div.isubn(1):c.div.iaddn(1)},i.prototype.modrn=function(a){var c=a<0;c&&(a=-a),t(a<=67108863);for(var d=(1<<26)%a,h=0,m=this.length-1;m>=0;m--)h=(d*h+(this.words[m]|0))%a;return c?-h:h},i.prototype.modn=function(a){return this.modrn(a)},i.prototype.idivn=function(a){var c=a<0;c&&(a=-a),t(a<=67108863);for(var d=0,h=this.length-1;h>=0;h--){var m=(this.words[h]|0)+d*67108864;this.words[h]=m/a|0,d=m%a}return this._strip(),c?this.ineg():this},i.prototype.divn=function(a){return this.clone().idivn(a)},i.prototype.egcd=function(a){t(a.negative===0),t(!a.isZero());var c=this,d=a.clone();c.negative!==0?c=c.umod(a):c=c.clone();for(var h=new i(1),m=new i(0),g=new i(0),_=new i(1),b=0;c.isEven()&&d.isEven();)c.iushrn(1),d.iushrn(1),++b;for(var f=d.clone(),A=c.clone();!c.isZero();){for(var H=0,F=1;(c.words[0]&F)===0&&H<26;++H,F<<=1);if(H>0)for(c.iushrn(H);H-- >0;)(h.isOdd()||m.isOdd())&&(h.iadd(f),m.isub(A)),h.iushrn(1),m.iushrn(1);for(var W=0,Z=1;(d.words[0]&Z)===0&&W<26;++W,Z<<=1);if(W>0)for(d.iushrn(W);W-- >0;)(g.isOdd()||_.isOdd())&&(g.iadd(f),_.isub(A)),g.iushrn(1),_.iushrn(1);c.cmp(d)>=0?(c.isub(d),h.isub(g),m.isub(_)):(d.isub(c),g.isub(h),_.isub(m))}return{a:g,b:_,gcd:d.iushln(b)}},i.prototype._invmp=function(a){t(a.negative===0),t(!a.isZero());var c=this,d=a.clone();c.negative!==0?c=c.umod(a):c=c.clone();for(var h=new i(1),m=new i(0),g=d.clone();c.cmpn(1)>0&&d.cmpn(1)>0;){for(var _=0,b=1;(c.words[0]&b)===0&&_<26;++_,b<<=1);if(_>0)for(c.iushrn(_);_-- >0;)h.isOdd()&&h.iadd(g),h.iushrn(1);for(var f=0,A=1;(d.words[0]&A)===0&&f<26;++f,A<<=1);if(f>0)for(d.iushrn(f);f-- >0;)m.isOdd()&&m.iadd(g),m.iushrn(1);c.cmp(d)>=0?(c.isub(d),h.isub(m)):(d.isub(c),m.isub(h))}var H;return c.cmpn(1)===0?H=h:H=m,H.cmpn(0)<0&&H.iadd(a),H},i.prototype.gcd=function(a){if(this.isZero())return a.abs();if(a.isZero())return this.abs();var c=this.clone(),d=a.clone();c.negative=0,d.negative=0;for(var h=0;c.isEven()&&d.isEven();h++)c.iushrn(1),d.iushrn(1);do{for(;c.isEven();)c.iushrn(1);for(;d.isEven();)d.iushrn(1);var m=c.cmp(d);if(m<0){var g=c;c=d,d=g}else if(m===0||d.cmpn(1)===0)break;c.isub(d)}while(!0);return d.iushln(h)},i.prototype.invm=function(a){return this.egcd(a).a.umod(a)},i.prototype.isEven=function(){return(this.words[0]&1)===0},i.prototype.isOdd=function(){return(this.words[0]&1)===1},i.prototype.andln=function(a){return this.words[0]&a},i.prototype.bincn=function(a){t(typeof a=="number");var c=a%26,d=(a-c)/26,h=1<<c;if(this.length<=d)return this._expand(d+1),this.words[d]|=h,this;for(var m=h,g=d;m!==0&&g<this.length;g++){var _=this.words[g]|0;_+=m,m=_>>>26,_&=67108863,this.words[g]=_}return m!==0&&(this.words[g]=m,this.length++),this},i.prototype.isZero=function(){return this.length===1&&this.words[0]===0},i.prototype.cmpn=function(a){var c=a<0;if(this.negative!==0&&!c)return-1;if(this.negative===0&&c)return 1;this._strip();var d;if(this.length>1)d=1;else{c&&(a=-a),t(a<=67108863,"Number is too big");var h=this.words[0]|0;d=h===a?0:h<a?-1:1}return this.negative!==0?-d|0:d},i.prototype.cmp=function(a){if(this.negative!==0&&a.negative===0)return-1;if(this.negative===0&&a.negative!==0)return 1;var c=this.ucmp(a);return this.negative!==0?-c|0:c},i.prototype.ucmp=function(a){if(this.length>a.length)return 1;if(this.length<a.length)return-1;for(var c=0,d=this.length-1;d>=0;d--){var h=this.words[d]|0,m=a.words[d]|0;if(h!==m){h<m?c=-1:h>m&&(c=1);break}}return c},i.prototype.gtn=function(a){return this.cmpn(a)===1},i.prototype.gt=function(a){return this.cmp(a)===1},i.prototype.gten=function(a){return this.cmpn(a)>=0},i.prototype.gte=function(a){return this.cmp(a)>=0},i.prototype.ltn=function(a){return this.cmpn(a)===-1},i.prototype.lt=function(a){return this.cmp(a)===-1},i.prototype.lten=function(a){return this.cmpn(a)<=0},i.prototype.lte=function(a){return this.cmp(a)<=0},i.prototype.eqn=function(a){return this.cmpn(a)===0},i.prototype.eq=function(a){return this.cmp(a)===0},i.red=function(a){return new P(a)},i.prototype.toRed=function(a){return t(!this.red,"Already a number in reduction context"),t(this.negative===0,"red works only with positives"),a.convertTo(this)._forceRed(a)},i.prototype.fromRed=function(){return t(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},i.prototype._forceRed=function(a){return this.red=a,this},i.prototype.forceRed=function(a){return t(!this.red,"Already a number in reduction context"),this._forceRed(a)},i.prototype.redAdd=function(a){return t(this.red,"redAdd works only with red numbers"),this.red.add(this,a)},i.prototype.redIAdd=function(a){return t(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,a)},i.prototype.redSub=function(a){return t(this.red,"redSub works only with red numbers"),this.red.sub(this,a)},i.prototype.redISub=function(a){return t(this.red,"redISub works only with red numbers"),this.red.isub(this,a)},i.prototype.redShl=function(a){return t(this.red,"redShl works only with red numbers"),this.red.shl(this,a)},i.prototype.redMul=function(a){return t(this.red,"redMul works only with red numbers"),this.red._verify2(this,a),this.red.mul(this,a)},i.prototype.redIMul=function(a){return t(this.red,"redMul works only with red numbers"),this.red._verify2(this,a),this.red.imul(this,a)},i.prototype.redSqr=function(){return t(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},i.prototype.redISqr=function(){return t(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},i.prototype.redSqrt=function(){return t(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},i.prototype.redInvm=function(){return t(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},i.prototype.redNeg=function(){return t(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},i.prototype.redPow=function(a){return t(this.red&&!a.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,a)};var ee={k256:null,p224:null,p192:null,p25519:null};function Q(p,a){this.name=p,this.p=new i(a,16),this.n=this.p.bitLength(),this.k=new i(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}Q.prototype._tmp=function(){var a=new i(null);return a.words=new Array(Math.ceil(this.n/13)),a},Q.prototype.ireduce=function(a){var c=a,d;do this.split(c,this.tmp),c=this.imulK(c),c=c.iadd(this.tmp),d=c.bitLength();while(d>this.n);var h=d<this.n?-1:c.ucmp(this.p);return h===0?(c.words[0]=0,c.length=1):h>0?c.isub(this.p):c.strip!==void 0?c.strip():c._strip(),c},Q.prototype.split=function(a,c){a.iushrn(this.n,0,c)},Q.prototype.imulK=function(a){return a.imul(this.k)};function te(){Q.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}n(te,Q),te.prototype.split=function(a,c){for(var d=4194303,h=Math.min(a.length,9),m=0;m<h;m++)c.words[m]=a.words[m];if(c.length=h,a.length<=9){a.words[0]=0,a.length=1;return}var g=a.words[9];for(c.words[c.length++]=g&d,m=10;m<a.length;m++){var _=a.words[m]|0;a.words[m-10]=(_&d)<<4|g>>>22,g=_}g>>>=22,a.words[m-10]=g,g===0&&a.length>10?a.length-=10:a.length-=9},te.prototype.imulK=function(a){a.words[a.length]=0,a.words[a.length+1]=0,a.length+=2;for(var c=0,d=0;d<a.length;d++){var h=a.words[d]|0;c+=h*977,a.words[d]=c&67108863,c=h*64+(c/67108864|0)}return a.words[a.length-1]===0&&(a.length--,a.words[a.length-1]===0&&a.length--),a};function v(){Q.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}n(v,Q);function w(){Q.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}n(w,Q);function E(){Q.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}n(E,Q),E.prototype.imulK=function(a){for(var c=0,d=0;d<a.length;d++){var h=(a.words[d]|0)*19+c,m=h&67108863;h>>>=26,a.words[d]=m,c=h}return c!==0&&(a.words[a.length++]=c),a},i._prime=function(a){if(ee[a])return ee[a];var c;if(a==="k256")c=new te;else if(a==="p224")c=new v;else if(a==="p192")c=new w;else if(a==="p25519")c=new E;else throw new Error("Unknown prime "+a);return ee[a]=c,c};function P(p){if(typeof p=="string"){var a=i._prime(p);this.m=a.p,this.prime=a}else t(p.gtn(1),"modulus must be greater than 1"),this.m=p,this.prime=null}P.prototype._verify1=function(a){t(a.negative===0,"red works only with positives"),t(a.red,"red works only with red numbers")},P.prototype._verify2=function(a,c){t((a.negative|c.negative)===0,"red works only with positives"),t(a.red&&a.red===c.red,"red works only with red numbers")},P.prototype.imod=function(a){return this.prime?this.prime.ireduce(a)._forceRed(this):(y(a,a.umod(this.m)._forceRed(this)),a)},P.prototype.neg=function(a){return a.isZero()?a.clone():this.m.sub(a)._forceRed(this)},P.prototype.add=function(a,c){this._verify2(a,c);var d=a.add(c);return d.cmp(this.m)>=0&&d.isub(this.m),d._forceRed(this)},P.prototype.iadd=function(a,c){this._verify2(a,c);var d=a.iadd(c);return d.cmp(this.m)>=0&&d.isub(this.m),d},P.prototype.sub=function(a,c){this._verify2(a,c);var d=a.sub(c);return d.cmpn(0)<0&&d.iadd(this.m),d._forceRed(this)},P.prototype.isub=function(a,c){this._verify2(a,c);var d=a.isub(c);return d.cmpn(0)<0&&d.iadd(this.m),d},P.prototype.shl=function(a,c){return this._verify1(a),this.imod(a.ushln(c))},P.prototype.imul=function(a,c){return this._verify2(a,c),this.imod(a.imul(c))},P.prototype.mul=function(a,c){return this._verify2(a,c),this.imod(a.mul(c))},P.prototype.isqr=function(a){return this.imul(a,a.clone())},P.prototype.sqr=function(a){return this.mul(a,a)},P.prototype.sqrt=function(a){if(a.isZero())return a.clone();var c=this.m.andln(3);if(t(c%2===1),c===3){var d=this.m.add(new i(1)).iushrn(2);return this.pow(a,d)}for(var h=this.m.subn(1),m=0;!h.isZero()&&h.andln(1)===0;)m++,h.iushrn(1);t(!h.isZero());var g=new i(1).toRed(this),_=g.redNeg(),b=this.m.subn(1).iushrn(1),f=this.m.bitLength();for(f=new i(2*f*f).toRed(this);this.pow(f,b).cmp(_)!==0;)f.redIAdd(_);for(var A=this.pow(f,h),H=this.pow(a,h.addn(1).iushrn(1)),F=this.pow(a,h),W=m;F.cmp(g)!==0;){for(var Z=F,oe=0;Z.cmp(g)!==0;oe++)Z=Z.redSqr();t(oe<W);var se=this.pow(A,new i(1).iushln(W-oe-1));H=H.redMul(se),A=se.redSqr(),F=F.redMul(A),W=oe}return H},P.prototype.invm=function(a){var c=a._invmp(this.m);return c.negative!==0?(c.negative=0,this.imod(c).redNeg()):this.imod(c)},P.prototype.pow=function(a,c){if(c.isZero())return new i(1).toRed(this);if(c.cmpn(1)===0)return a.clone();var d=4,h=new Array(1<<d);h[0]=new i(1).toRed(this),h[1]=a;for(var m=2;m<h.length;m++)h[m]=this.mul(h[m-1],a);var g=h[0],_=0,b=0,f=c.bitLength()%26;for(f===0&&(f=26),m=c.length-1;m>=0;m--){for(var A=c.words[m],H=f-1;H>=0;H--){var F=A>>H&1;if(g!==h[0]&&(g=this.sqr(g)),F===0&&_===0){b=0;continue}_<<=1,_|=F,b++,!(b!==d&&(m!==0||H!==0))&&(g=this.mul(g,h[_]),b=0,_=0)}f=26}return g},P.prototype.convertTo=function(a){var c=a.umod(this.m);return c===a?c.clone():c},P.prototype.convertFrom=function(a){var c=a.clone();return c.red=null,c},i.mont=function(a){return new T(a)};function T(p){P.call(this,p),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new i(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}n(T,P),T.prototype.convertTo=function(a){return this.imod(a.ushln(this.shift))},T.prototype.convertFrom=function(a){var c=this.imod(a.mul(this.rinv));return c.red=null,c},T.prototype.imul=function(a,c){if(a.isZero()||c.isZero())return a.words[0]=0,a.length=1,a;var d=a.imul(c),h=d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),m=d.isub(h).iushrn(this.shift),g=m;return m.cmp(this.m)>=0?g=m.isub(this.m):m.cmpn(0)<0&&(g=m.iadd(this.m)),g._forceRed(this)},T.prototype.mul=function(a,c){if(a.isZero()||c.isZero())return new i(0)._forceRed(this);var d=a.mul(c),h=d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),m=d.isub(h).iushrn(this.shift),g=m;return m.cmp(this.m)>=0?g=m.isub(this.m):m.cmpn(0)<0&&(g=m.iadd(this.m)),g._forceRed(this)},T.prototype.invm=function(a){var c=this.imod(a._invmp(this.m).mul(this.r2));return c._forceRed(this)}})(typeof Ic>"u"||Ic,qd)});var jd=Yt((Tc,Gd)=>{var oo=un(),Pr=oo.Buffer;function Vd(r,e){for(var t in r)e[t]=r[t]}Pr.from&&Pr.alloc&&Pr.allocUnsafe&&Pr.allocUnsafeSlow?Gd.exports=oo:(Vd(oo,Tc),Tc.Buffer=Yn);function Yn(r,e,t){return Pr(r,e,t)}Yn.prototype=Object.create(Pr.prototype);Vd(Pr,Yn);Yn.from=function(r,e,t){if(typeof r=="number")throw new TypeError("Argument must not be a number");return Pr(r,e,t)};Yn.alloc=function(r,e,t){if(typeof r!="number")throw new TypeError("Argument must be a number");var n=Pr(r);return e!==void 0?typeof t=="string"?n.fill(e,t):n.fill(e):n.fill(0),n};Yn.allocUnsafe=function(r){if(typeof r!="number")throw new TypeError("Argument must be a number");return Pr(r)};Yn.allocUnsafeSlow=function(r){if(typeof r!="number")throw new TypeError("Argument must be a number");return oo.SlowBuffer(r)}});var Zd=Yt((MA,Yd)=>{"use strict";var ao=jd().Buffer;function N0(r){if(r.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),t=0;t<e.length;t++)e[t]=255;for(var n=0;n<r.length;n++){var i=r.charAt(n),s=i.charCodeAt(0);if(e[s]!==255)throw new TypeError(i+" is ambiguous");e[s]=n}var o=r.length,l=r.charAt(0),u=Math.log(o)/Math.log(256),y=Math.log(256)/Math.log(o);function S(k){if((Array.isArray(k)||k instanceof Uint8Array)&&(k=ao.from(k)),!ao.isBuffer(k))throw new TypeError("Expected Buffer");if(k.length===0)return"";for(var B=0,N=0,$=0,D=k.length;$!==D&&k[$]===0;)$++,B++;for(var L=(D-$)*y+1>>>0,K=new Uint8Array(L);$!==D;){for(var G=k[$],ee=0,Q=L-1;(G!==0||ee<N)&&Q!==-1;Q--,ee++)G+=256*K[Q]>>>0,K[Q]=G%o>>>0,G=G/o>>>0;if(G!==0)throw new Error("Non-zero carry");N=ee,$++}for(var te=L-N;te!==L&&K[te]===0;)te++;for(var v=l.repeat(B);te<L;++te)v+=r.charAt(K[te]);return v}function R(k){if(typeof k!="string")throw new TypeError("Expected String");if(k.length===0)return ao.alloc(0);for(var B=0,N=0,$=0;k[B]===l;)N++,B++;for(var D=(k.length-B)*u+1>>>0,L=new Uint8Array(D);B<k.length;){var K=k.charCodeAt(B);if(K>255)return;var G=e[K];if(G===255)return;for(var ee=0,Q=D-1;(G!==0||ee<$)&&Q!==-1;Q--,ee++)G+=o*L[Q]>>>0,L[Q]=G%256>>>0,G=G/256>>>0;if(G!==0)throw new Error("Non-zero carry");$=ee,B++}for(var te=D-$;te!==D&&L[te]===0;)te++;var v=ao.allocUnsafe(N+(D-te));v.fill(0,0,N);for(var w=N;te!==D;)v[w++]=L[te++];return v}function I(k){var B=R(k);if(B)return B;throw new Error("Non-base"+o+" character")}return{encode:S,decodeUnsafe:R,decode:I}}Yd.exports=N0});var Oc=Yt(($A,Xd)=>{var L0=Zd(),M0="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";Xd.exports=L0(M0)});var Jd=Yt(Pc=>{"use strict";function Xr(r,e,t){return e<=r&&r<=t}function ho(r){if(r===void 0)return{};if(r===Object(r))return r;throw TypeError("Could not convert argument to dictionary")}function $0(r){for(var e=String(r),t=e.length,n=0,i=[];n<t;){var s=e.charCodeAt(n);if(s<55296||s>57343)i.push(s);else if(56320<=s&&s<=57343)i.push(65533);else if(55296<=s&&s<=56319)if(n===t-1)i.push(65533);else{var o=r.charCodeAt(n+1);if(56320<=o&&o<=57343){var l=s&1023,u=o&1023;i.push(65536+(l<<10)+u),n+=1}else i.push(65533)}n+=1}return i}function D0(r){for(var e="",t=0;t<r.length;++t){var n=r[t];n<=65535?e+=String.fromCharCode(n):(n-=65536,e+=String.fromCharCode((n>>10)+55296,(n&1023)+56320))}return e}var co=-1;function Cc(r){this.tokens=[].slice.call(r)}Cc.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.shift():co},prepend:function(r){if(Array.isArray(r))for(var e=r;e.length;)this.tokens.unshift(e.pop());else this.tokens.unshift(r)},push:function(r){if(Array.isArray(r))for(var e=r;e.length;)this.tokens.push(e.shift());else this.tokens.push(r)}};var ki=-1;function Bc(r,e){if(r)throw TypeError("Decoder error");return e||65533}var lo="utf-8";function uo(r,e){if(!(this instanceof uo))return new uo(r,e);if(r=r!==void 0?String(r).toLowerCase():lo,r!==lo)throw new Error("Encoding not supported. Only utf-8 is supported");e=ho(e),this._streaming=!1,this._BOMseen=!1,this._decoder=null,this._fatal=!!e.fatal,this._ignoreBOM=!!e.ignoreBOM,Object.defineProperty(this,"encoding",{value:"utf-8"}),Object.defineProperty(this,"fatal",{value:this._fatal}),Object.defineProperty(this,"ignoreBOM",{value:this._ignoreBOM})}uo.prototype={decode:function(e,t){var n;typeof e=="object"&&e instanceof ArrayBuffer?n=new Uint8Array(e):typeof e=="object"&&"buffer"in e&&e.buffer instanceof ArrayBuffer?n=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):n=new Uint8Array(0),t=ho(t),this._streaming||(this._decoder=new U0({fatal:this._fatal}),this._BOMseen=!1),this._streaming=!!t.stream;for(var i=new Cc(n),s=[],o;!i.endOfStream()&&(o=this._decoder.handler(i,i.read()),o!==ki);)o!==null&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));if(!this._streaming){do{if(o=this._decoder.handler(i,i.read()),o===ki)break;o!==null&&(Array.isArray(o)?s.push.apply(s,o):s.push(o))}while(!i.endOfStream());this._decoder=null}return s.length&&["utf-8"].indexOf(this.encoding)!==-1&&!this._ignoreBOM&&!this._BOMseen&&(s[0]===65279?(this._BOMseen=!0,s.shift()):this._BOMseen=!0),D0(s)}};function fo(r,e){if(!(this instanceof fo))return new fo(r,e);if(r=r!==void 0?String(r).toLowerCase():lo,r!==lo)throw new Error("Encoding not supported. Only utf-8 is supported");e=ho(e),this._streaming=!1,this._encoder=null,this._options={fatal:!!e.fatal},Object.defineProperty(this,"encoding",{value:"utf-8"})}fo.prototype={encode:function(e,t){e=e?String(e):"",t=ho(t),this._streaming||(this._encoder=new z0(this._options)),this._streaming=!!t.stream;for(var n=[],i=new Cc($0(e)),s;!i.endOfStream()&&(s=this._encoder.handler(i,i.read()),s!==ki);)Array.isArray(s)?n.push.apply(n,s):n.push(s);if(!this._streaming){for(;s=this._encoder.handler(i,i.read()),s!==ki;)Array.isArray(s)?n.push.apply(n,s):n.push(s);this._encoder=null}return new Uint8Array(n)}};function U0(r){var e=r.fatal,t=0,n=0,i=0,s=128,o=191;this.handler=function(l,u){if(u===co&&i!==0)return i=0,Bc(e);if(u===co)return ki;if(i===0){if(Xr(u,0,127))return u;if(Xr(u,194,223))i=1,t=u-192;else if(Xr(u,224,239))u===224&&(s=160),u===237&&(o=159),i=2,t=u-224;else if(Xr(u,240,244))u===240&&(s=144),u===244&&(o=143),i=3,t=u-240;else return Bc(e);return t=t<<6*i,null}if(!Xr(u,s,o))return t=i=n=0,s=128,o=191,l.prepend(u),Bc(e);if(s=128,o=191,n+=1,t+=u-128<<6*(i-n),n!==i)return null;var y=t;return t=i=n=0,y}}function z0(r){var e=r.fatal;this.handler=function(t,n){if(n===co)return ki;if(Xr(n,0,127))return n;var i,s;Xr(n,128,2047)?(i=1,s=192):Xr(n,2048,65535)?(i=2,s=224):Xr(n,65536,1114111)&&(i=3,s=240);for(var o=[(n>>6*i)+s];i>0;){var l=n>>6*(i-1);o.push(128|l&63),i-=1}return o}}Pc.TextEncoder=fo;Pc.TextDecoder=uo});var nf=Yt(xe=>{"use strict";var F0=xe&&xe.__createBinding||(Object.create?(function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}):(function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]})),K0=xe&&xe.__setModuleDefault||(Object.create?(function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}):function(r,e){r.default=e}),Nr=xe&&xe.__decorate||function(r,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,n);else for(var l=r.length-1;l>=0;l--)(o=r[l])&&(s=(i<3?o(s):i>3?o(e,t,s):o(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},H0=xe&&xe.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.hasOwnProperty.call(r,t)&&F0(e,r,t);return K0(e,r),e},Qd=xe&&xe.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(xe,"__esModule",{value:!0});xe.deserializeUnchecked=xe.deserialize=xe.serialize=xe.BinaryReader=xe.BinaryWriter=xe.BorshError=xe.baseDecode=xe.baseEncode=void 0;var vn=Qd(xc()),ef=Qd(Oc()),W0=H0(Jd()),q0=typeof TextDecoder!="function"?W0.TextDecoder:TextDecoder,V0=new q0("utf-8",{fatal:!0});function G0(r){return typeof r=="string"&&(r=Buffer.from(r,"utf8")),ef.default.encode(Buffer.from(r))}xe.baseEncode=G0;function j0(r){return Buffer.from(ef.default.decode(r))}xe.baseDecode=j0;var Nc=1024,Mt=class extends Error{constructor(e){super(e),this.fieldPath=[],this.originalMessage=e}addToFieldPath(e){this.fieldPath.splice(0,0,e),this.message=this.originalMessage+": "+this.fieldPath.join(".")}};xe.BorshError=Mt;var po=class{constructor(){this.buf=Buffer.alloc(Nc),this.length=0}maybeResize(){this.buf.length<16+this.length&&(this.buf=Buffer.concat([this.buf,Buffer.alloc(Nc)]))}writeU8(e){this.maybeResize(),this.buf.writeUInt8(e,this.length),this.length+=1}writeU16(e){this.maybeResize(),this.buf.writeUInt16LE(e,this.length),this.length+=2}writeU32(e){this.maybeResize(),this.buf.writeUInt32LE(e,this.length),this.length+=4}writeU64(e){this.maybeResize(),this.writeBuffer(Buffer.from(new vn.default(e).toArray("le",8)))}writeU128(e){this.maybeResize(),this.writeBuffer(Buffer.from(new vn.default(e).toArray("le",16)))}writeU256(e){this.maybeResize(),this.writeBuffer(Buffer.from(new vn.default(e).toArray("le",32)))}writeU512(e){this.maybeResize(),this.writeBuffer(Buffer.from(new vn.default(e).toArray("le",64)))}writeBuffer(e){this.buf=Buffer.concat([Buffer.from(this.buf.subarray(0,this.length)),e,Buffer.alloc(Nc)]),this.length+=e.length}writeString(e){this.maybeResize();let t=Buffer.from(e,"utf8");this.writeU32(t.length),this.writeBuffer(t)}writeFixedArray(e){this.writeBuffer(Buffer.from(e))}writeArray(e,t){this.maybeResize(),this.writeU32(e.length);for(let n of e)this.maybeResize(),t(n)}toArray(){return this.buf.subarray(0,this.length)}};xe.BinaryWriter=po;function Lr(r,e,t){let n=t.value;t.value=function(...i){try{return n.apply(this,i)}catch(s){if(s instanceof RangeError){let o=s.code;if(["ERR_BUFFER_OUT_OF_BOUNDS","ERR_OUT_OF_RANGE"].indexOf(o)>=0)throw new Mt("Reached the end of buffer when deserializing")}throw s}}}var Jt=class{constructor(e){this.buf=e,this.offset=0}readU8(){let e=this.buf.readUInt8(this.offset);return this.offset+=1,e}readU16(){let e=this.buf.readUInt16LE(this.offset);return this.offset+=2,e}readU32(){let e=this.buf.readUInt32LE(this.offset);return this.offset+=4,e}readU64(){let e=this.readBuffer(8);return new vn.default(e,"le")}readU128(){let e=this.readBuffer(16);return new vn.default(e,"le")}readU256(){let e=this.readBuffer(32);return new vn.default(e,"le")}readU512(){let e=this.readBuffer(64);return new vn.default(e,"le")}readBuffer(e){if(this.offset+e>this.buf.length)throw new Mt(`Expected buffer length ${e} isn't within bounds`);let t=this.buf.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){let e=this.readU32(),t=this.readBuffer(e);try{return V0.decode(t)}catch(n){throw new Mt(`Error decoding UTF-8 string: ${n}`)}}readFixedArray(e){return new Uint8Array(this.readBuffer(e))}readArray(e){let t=this.readU32(),n=Array();for(let i=0;i<t;++i)n.push(e());return n}};Nr([Lr],Jt.prototype,"readU8",null);Nr([Lr],Jt.prototype,"readU16",null);Nr([Lr],Jt.prototype,"readU32",null);Nr([Lr],Jt.prototype,"readU64",null);Nr([Lr],Jt.prototype,"readU128",null);Nr([Lr],Jt.prototype,"readU256",null);Nr([Lr],Jt.prototype,"readU512",null);Nr([Lr],Jt.prototype,"readString",null);Nr([Lr],Jt.prototype,"readFixedArray",null);Nr([Lr],Jt.prototype,"readArray",null);xe.BinaryReader=Jt;function tf(r){return r.charAt(0).toUpperCase()+r.slice(1)}function Zn(r,e,t,n,i){try{if(typeof n=="string")i[`write${tf(n)}`](t);else if(n instanceof Array)if(typeof n[0]=="number"){if(t.length!==n[0])throw new Mt(`Expecting byte array of length ${n[0]}, but got ${t.length} bytes`);i.writeFixedArray(t)}else if(n.length===2&&typeof n[1]=="number"){if(t.length!==n[1])throw new Mt(`Expecting byte array of length ${n[1]}, but got ${t.length} bytes`);for(let s=0;s<n[1];s++)Zn(r,null,t[s],n[0],i)}else i.writeArray(t,s=>{Zn(r,e,s,n[0],i)});else if(n.kind!==void 0)switch(n.kind){case"option":{t==null?i.writeU8(0):(i.writeU8(1),Zn(r,e,t,n.type,i));break}case"map":{i.writeU32(t.size),t.forEach((s,o)=>{Zn(r,e,o,n.key,i),Zn(r,e,s,n.value,i)});break}default:throw new Mt(`FieldType ${n} unrecognized`)}else rf(r,t,i)}catch(s){throw s instanceof Mt&&s.addToFieldPath(e),s}}function rf(r,e,t){if(typeof e.borshSerialize=="function"){e.borshSerialize(t);return}let n=r.get(e.constructor);if(!n)throw new Mt(`Class ${e.constructor.name} is missing in schema`);if(n.kind==="struct")n.fields.map(([i,s])=>{Zn(r,i,e[i],s,t)});else if(n.kind==="enum"){let i=e[n.field];for(let s=0;s<n.values.length;++s){let[o,l]=n.values[s];if(o===i){t.writeU8(s),Zn(r,o,e[o],l,t);break}}}else throw new Mt(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)}function Y0(r,e,t=po){let n=new t;return rf(r,e,n),n.toArray()}xe.serialize=Y0;function Xn(r,e,t,n){try{if(typeof t=="string")return n[`read${tf(t)}`]();if(t instanceof Array){if(typeof t[0]=="number")return n.readFixedArray(t[0]);if(typeof t[1]=="number"){let i=[];for(let s=0;s<t[1];s++)i.push(Xn(r,null,t[0],n));return i}else return n.readArray(()=>Xn(r,e,t[0],n))}if(t.kind==="option")return n.readU8()?Xn(r,e,t.type,n):void 0;if(t.kind==="map"){let i=new Map,s=n.readU32();for(let o=0;o<s;o++){let l=Xn(r,e,t.key,n),u=Xn(r,e,t.value,n);i.set(l,u)}return i}return Lc(r,t,n)}catch(i){throw i instanceof Mt&&i.addToFieldPath(e),i}}function Lc(r,e,t){if(typeof e.borshDeserialize=="function")return e.borshDeserialize(t);let n=r.get(e);if(!n)throw new Mt(`Class ${e.name} is missing in schema`);if(n.kind==="struct"){let i={};for(let[s,o]of r.get(e).fields)i[s]=Xn(r,s,o,t);return new e(i)}if(n.kind==="enum"){let i=t.readU8();if(i>=n.values.length)throw new Mt(`Enum index: ${i} is out of range`);let[s,o]=n.values[i],l=Xn(r,s,o,t);return new e({[s]:l})}throw new Mt(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)}function Z0(r,e,t,n=Jt){let i=new n(t),s=Lc(r,e,i);if(i.offset<t.length)throw new Mt(`Unexpected ${t.length-i.offset} bytes after deserialized data`);return s}xe.deserialize=Z0;function X0(r,e,t,n=Jt){let i=new n(t);return Lc(r,e,i)}xe.deserializeUnchecked=X0});var Qr=Yt(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.s16=U.s8=U.nu64be=U.u48be=U.u40be=U.u32be=U.u24be=U.u16be=U.nu64=U.u48=U.u40=U.u32=U.u24=U.u16=U.u8=U.offset=U.greedy=U.Constant=U.UTF8=U.CString=U.Blob=U.Boolean=U.BitField=U.BitStructure=U.VariantLayout=U.Union=U.UnionLayoutDiscriminator=U.UnionDiscriminator=U.Structure=U.Sequence=U.DoubleBE=U.Double=U.FloatBE=U.Float=U.NearInt64BE=U.NearInt64=U.NearUInt64BE=U.NearUInt64=U.IntBE=U.Int=U.UIntBE=U.UInt=U.OffsetLayout=U.GreedyCount=U.ExternalLayout=U.bindConstructorLayout=U.nameWithProperty=U.Layout=U.uint8ArrayToBuffer=U.checkUint8Array=void 0;U.constant=U.utf8=U.cstr=U.blob=U.unionLayoutDiscriminator=U.union=U.seq=U.bits=U.struct=U.f64be=U.f64=U.f32be=U.f32=U.ns64be=U.s48be=U.s40be=U.s32be=U.s24be=U.s16be=U.ns64=U.s48=U.s40=U.s32=U.s24=void 0;var $c=un();function Ti(r){if(!(r instanceof Uint8Array))throw new TypeError("b must be a Uint8Array")}U.checkUint8Array=Ti;function Re(r){return Ti(r),$c.Buffer.from(r.buffer,r.byteOffset,r.length)}U.uint8ArrayToBuffer=Re;var Ee=class{constructor(e,t){if(!Number.isInteger(e))throw new TypeError("span must be an integer");this.span=e,this.property=t}makeDestinationObject(){return{}}getSpan(e,t){if(0>this.span)throw new RangeError("indeterminate span");return this.span}replicate(e){let t=Object.create(this.constructor.prototype);return Object.assign(t,this),t.property=e,t}fromArray(e){}};U.Layout=Ee;function Dc(r,e){return e.property?r+"["+e.property+"]":r}U.nameWithProperty=Dc;function J0(r,e){if(typeof r!="function")throw new TypeError("Class must be constructor");if(Object.prototype.hasOwnProperty.call(r,"layout_"))throw new Error("Class is already bound to a layout");if(!(e&&e instanceof Ee))throw new TypeError("layout must be a Layout");if(Object.prototype.hasOwnProperty.call(e,"boundConstructor_"))throw new Error("layout is already bound to a constructor");r.layout_=e,e.boundConstructor_=r,e.makeDestinationObject=(()=>new r),Object.defineProperty(r.prototype,"encode",{value(t,n){return e.encode(this,t,n)},writable:!0}),Object.defineProperty(r,"decode",{value(t,n){return e.decode(t,n)},writable:!0})}U.bindConstructorLayout=J0;var Dt=class extends Ee{isCount(){throw new Error("ExternalLayout is abstract")}};U.ExternalLayout=Dt;var mo=class extends Dt{constructor(e=1,t){if(!Number.isInteger(e)||0>=e)throw new TypeError("elementSpan must be a (positive) integer");super(-1,t),this.elementSpan=e}isCount(){return!0}decode(e,t=0){Ti(e);let n=e.length-t;return Math.floor(n/this.elementSpan)}encode(e,t,n){return 0}};U.GreedyCount=mo;var ds=class extends Dt{constructor(e,t=0,n){if(!(e instanceof Ee))throw new TypeError("layout must be a Layout");if(!Number.isInteger(t))throw new TypeError("offset must be integer or undefined");super(e.span,n||e.property),this.layout=e,this.offset=t}isCount(){return this.layout instanceof rr||this.layout instanceof ur}decode(e,t=0){return this.layout.decode(e,t+this.offset)}encode(e,t,n=0){return this.layout.encode(e,t,n+this.offset)}};U.OffsetLayout=ds;var rr=class extends Ee{constructor(e,t){if(super(e,t),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(e,t=0){return Re(e).readUIntLE(t,this.span)}encode(e,t,n=0){return Re(t).writeUIntLE(e,n,this.span),this.span}};U.UInt=rr;var ur=class extends Ee{constructor(e,t){if(super(e,t),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(e,t=0){return Re(e).readUIntBE(t,this.span)}encode(e,t,n=0){return Re(t).writeUIntBE(e,n,this.span),this.span}};U.UIntBE=ur;var Jr=class extends Ee{constructor(e,t){if(super(e,t),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(e,t=0){return Re(e).readIntLE(t,this.span)}encode(e,t,n=0){return Re(t).writeIntLE(e,n,this.span),this.span}};U.Int=Jr;var _n=class extends Ee{constructor(e,t){if(super(e,t),6<this.span)throw new RangeError("span must not exceed 6 bytes")}decode(e,t=0){return Re(e).readIntBE(t,this.span)}encode(e,t,n=0){return Re(t).writeIntBE(e,n,this.span),this.span}};U.IntBE=_n;var Mc=Math.pow(2,32);function Co(r){let e=Math.floor(r/Mc),t=r-e*Mc;return{hi32:e,lo32:t}}function Po(r,e){return r*Mc+e}var go=class extends Ee{constructor(e){super(8,e)}decode(e,t=0){let n=Re(e),i=n.readUInt32LE(t),s=n.readUInt32LE(t+4);return Po(s,i)}encode(e,t,n=0){let i=Co(e),s=Re(t);return s.writeUInt32LE(i.lo32,n),s.writeUInt32LE(i.hi32,n+4),8}};U.NearUInt64=go;var yo=class extends Ee{constructor(e){super(8,e)}decode(e,t=0){let n=Re(e),i=n.readUInt32BE(t),s=n.readUInt32BE(t+4);return Po(i,s)}encode(e,t,n=0){let i=Co(e),s=Re(t);return s.writeUInt32BE(i.hi32,n),s.writeUInt32BE(i.lo32,n+4),8}};U.NearUInt64BE=yo;var bo=class extends Ee{constructor(e){super(8,e)}decode(e,t=0){let n=Re(e),i=n.readUInt32LE(t),s=n.readInt32LE(t+4);return Po(s,i)}encode(e,t,n=0){let i=Co(e),s=Re(t);return s.writeUInt32LE(i.lo32,n),s.writeInt32LE(i.hi32,n+4),8}};U.NearInt64=bo;var wo=class extends Ee{constructor(e){super(8,e)}decode(e,t=0){let n=Re(e),i=n.readInt32BE(t),s=n.readUInt32BE(t+4);return Po(i,s)}encode(e,t,n=0){let i=Co(e),s=Re(t);return s.writeInt32BE(i.hi32,n),s.writeUInt32BE(i.lo32,n+4),8}};U.NearInt64BE=wo;var vo=class extends Ee{constructor(e){super(4,e)}decode(e,t=0){return Re(e).readFloatLE(t)}encode(e,t,n=0){return Re(t).writeFloatLE(e,n),4}};U.Float=vo;var _o=class extends Ee{constructor(e){super(4,e)}decode(e,t=0){return Re(e).readFloatBE(t)}encode(e,t,n=0){return Re(t).writeFloatBE(e,n),4}};U.FloatBE=_o;var So=class extends Ee{constructor(e){super(8,e)}decode(e,t=0){return Re(e).readDoubleLE(t)}encode(e,t,n=0){return Re(t).writeDoubleLE(e,n),8}};U.Double=So;var Ro=class extends Ee{constructor(e){super(8,e)}decode(e,t=0){return Re(e).readDoubleBE(t)}encode(e,t,n=0){return Re(t).writeDoubleBE(e,n),8}};U.DoubleBE=Ro;var Ao=class extends Ee{constructor(e,t,n){if(!(e instanceof Ee))throw new TypeError("elementLayout must be a Layout");if(!(t instanceof Dt&&t.isCount()||Number.isInteger(t)&&0<=t))throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");let i=-1;!(t instanceof Dt)&&0<e.span&&(i=t*e.span),super(i,n),this.elementLayout=e,this.count=t}getSpan(e,t=0){if(0<=this.span)return this.span;let n=0,i=this.count;if(i instanceof Dt&&(i=i.decode(e,t)),0<this.elementLayout.span)n=i*this.elementLayout.span;else{let s=0;for(;s<i;)n+=this.elementLayout.getSpan(e,t+n),++s}return n}decode(e,t=0){let n=[],i=0,s=this.count;for(s instanceof Dt&&(s=s.decode(e,t));i<s;)n.push(this.elementLayout.decode(e,t)),t+=this.elementLayout.getSpan(e,t),i+=1;return n}encode(e,t,n=0){let i=this.elementLayout,s=e.reduce((o,l)=>o+i.encode(l,t,n+o),0);return this.count instanceof Dt&&this.count.encode(e.length,t,n),s}};U.Sequence=Ao;var Eo=class extends Ee{constructor(e,t,n){if(!(Array.isArray(e)&&e.reduce((s,o)=>s&&o instanceof Ee,!0)))throw new TypeError("fields must be array of Layout instances");typeof t=="boolean"&&n===void 0&&(n=t,t=void 0);for(let s of e)if(0>s.span&&s.property===void 0)throw new Error("fields cannot contain unnamed variable-length layout");let i=-1;try{i=e.reduce((s,o)=>s+o.getSpan(),0)}catch{}super(i,t),this.fields=e,this.decodePrefixes=!!n}getSpan(e,t=0){if(0<=this.span)return this.span;let n=0;try{n=this.fields.reduce((i,s)=>{let o=s.getSpan(e,t);return t+=o,i+o},0)}catch{throw new RangeError("indeterminate span")}return n}decode(e,t=0){Ti(e);let n=this.makeDestinationObject();for(let i of this.fields)if(i.property!==void 0&&(n[i.property]=i.decode(e,t)),t+=i.getSpan(e,t),this.decodePrefixes&&e.length===t)break;return n}encode(e,t,n=0){let i=n,s=0,o=0;for(let l of this.fields){let u=l.span;if(o=0<u?u:0,l.property!==void 0){let y=e[l.property];y!==void 0&&(o=l.encode(y,t,n),0>u&&(u=l.getSpan(t,n)))}s=n,n+=u}return s+o-i}fromArray(e){let t=this.makeDestinationObject();for(let n of this.fields)n.property!==void 0&&0<e.length&&(t[n.property]=e.shift());return t}layoutFor(e){if(typeof e!="string")throw new TypeError("property must be string");for(let t of this.fields)if(t.property===e)return t}offsetOf(e){if(typeof e!="string")throw new TypeError("property must be string");let t=0;for(let n of this.fields){if(n.property===e)return t;0>n.span?t=-1:0<=t&&(t+=n.span)}}};U.Structure=Eo;var fs=class{constructor(e){this.property=e}decode(e,t){throw new Error("UnionDiscriminator is abstract")}encode(e,t,n){throw new Error("UnionDiscriminator is abstract")}};U.UnionDiscriminator=fs;var xi=class extends fs{constructor(e,t){if(!(e instanceof Dt&&e.isCount()))throw new TypeError("layout must be an unsigned integer ExternalLayout");super(t||e.property||"variant"),this.layout=e}decode(e,t){return this.layout.decode(e,t)}encode(e,t,n){return this.layout.encode(e,t,n)}};U.UnionLayoutDiscriminator=xi;var hs=class extends Ee{constructor(e,t,n){let i;if(e instanceof rr||e instanceof ur)i=new xi(new ds(e));else if(e instanceof Dt&&e.isCount())i=new xi(e);else if(e instanceof fs)i=e;else throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");if(t===void 0&&(t=null),!(t===null||t instanceof Ee))throw new TypeError("defaultLayout must be null or a Layout");if(t!==null){if(0>t.span)throw new Error("defaultLayout must have constant span");t.property===void 0&&(t=t.replicate("content"))}let s=-1;t&&(s=t.span,0<=s&&(e instanceof rr||e instanceof ur)&&(s+=i.layout.span)),super(s,n),this.discriminator=i,this.usesPrefixDiscriminator=e instanceof rr||e instanceof ur,this.defaultLayout=t,this.registry={};let o=this.defaultGetSourceVariant.bind(this);this.getSourceVariant=function(l){return o(l)},this.configGetSourceVariant=function(l){o=l.bind(this)}}getSpan(e,t=0){if(0<=this.span)return this.span;let n=this.getVariant(e,t);if(!n)throw new Error("unable to determine span for unrecognized variant");return n.getSpan(e,t)}defaultGetSourceVariant(e){if(Object.prototype.hasOwnProperty.call(e,this.discriminator.property)){if(this.defaultLayout&&this.defaultLayout.property&&Object.prototype.hasOwnProperty.call(e,this.defaultLayout.property))return;let t=this.registry[e[this.discriminator.property]];if(t&&(!t.layout||t.property&&Object.prototype.hasOwnProperty.call(e,t.property)))return t}else for(let t in this.registry){let n=this.registry[t];if(n.property&&Object.prototype.hasOwnProperty.call(e,n.property))return n}throw new Error("unable to infer src variant")}decode(e,t=0){let n,i=this.discriminator,s=i.decode(e,t),o=this.registry[s];if(o===void 0){let l=this.defaultLayout,u=0;this.usesPrefixDiscriminator&&(u=i.layout.span),n=this.makeDestinationObject(),n[i.property]=s,n[l.property]=l.decode(e,t+u)}else n=o.decode(e,t);return n}encode(e,t,n=0){let i=this.getSourceVariant(e);if(i===void 0){let s=this.discriminator,o=this.defaultLayout,l=0;return this.usesPrefixDiscriminator&&(l=s.layout.span),s.encode(e[s.property],t,n),l+o.encode(e[o.property],t,n+l)}return i.encode(e,t,n)}addVariant(e,t,n){let i=new ko(this,e,t,n);return this.registry[e]=i,i}getVariant(e,t=0){let n;return e instanceof Uint8Array?n=this.discriminator.decode(e,t):n=e,this.registry[n]}};U.Union=hs;var ko=class extends Ee{constructor(e,t,n,i){if(!(e instanceof hs))throw new TypeError("union must be a Union");if(!Number.isInteger(t)||0>t)throw new TypeError("variant must be a (non-negative) integer");if(typeof n=="string"&&i===void 0&&(i=n,n=null),n){if(!(n instanceof Ee))throw new TypeError("layout must be a Layout");if(e.defaultLayout!==null&&0<=n.span&&n.span>e.defaultLayout.span)throw new Error("variant span exceeds span of containing union");if(typeof i!="string")throw new TypeError("variant must have a String property")}let s=e.span;0>e.span&&(s=n?n.span:0,0<=s&&e.usesPrefixDiscriminator&&(s+=e.discriminator.layout.span)),super(s,i),this.union=e,this.variant=t,this.layout=n||null}getSpan(e,t=0){if(0<=this.span)return this.span;let n=0;this.union.usesPrefixDiscriminator&&(n=this.union.discriminator.layout.span);let i=0;return this.layout&&(i=this.layout.getSpan(e,t+n)),n+i}decode(e,t=0){let n=this.makeDestinationObject();if(this!==this.union.getVariant(e,t))throw new Error("variant mismatch");let i=0;return this.union.usesPrefixDiscriminator&&(i=this.union.discriminator.layout.span),this.layout?n[this.property]=this.layout.decode(e,t+i):this.property?n[this.property]=!0:this.union.usesPrefixDiscriminator&&(n[this.union.discriminator.property]=this.variant),n}encode(e,t,n=0){let i=0;if(this.union.usesPrefixDiscriminator&&(i=this.union.discriminator.layout.span),this.layout&&!Object.prototype.hasOwnProperty.call(e,this.property))throw new TypeError("variant lacks property "+this.property);this.union.discriminator.encode(this.variant,t,n);let s=i;if(this.layout&&(this.layout.encode(e[this.property],t,n+i),s+=this.layout.getSpan(t,n+i),0<=this.union.span&&s>this.union.span))throw new Error("encoded variant overruns containing union");return s}fromArray(e){if(this.layout)return this.layout.fromArray(e)}};U.VariantLayout=ko;function Ii(r){return 0>r&&(r+=4294967296),r}var ps=class extends Ee{constructor(e,t,n){if(!(e instanceof rr||e instanceof ur))throw new TypeError("word must be a UInt or UIntBE layout");if(typeof t=="string"&&n===void 0&&(n=t,t=!1),4<e.span)throw new RangeError("word cannot exceed 32 bits");super(e.span,n),this.word=e,this.msb=!!t,this.fields=[];let i=0;this._packedSetValue=function(s){return i=Ii(s),this},this._packedGetValue=function(){return i}}decode(e,t=0){let n=this.makeDestinationObject(),i=this.word.decode(e,t);this._packedSetValue(i);for(let s of this.fields)s.property!==void 0&&(n[s.property]=s.decode(e));return n}encode(e,t,n=0){let i=this.word.decode(t,n);this._packedSetValue(i);for(let s of this.fields)if(s.property!==void 0){let o=e[s.property];o!==void 0&&s.encode(o)}return this.word.encode(this._packedGetValue(),t,n)}addField(e,t){let n=new ms(this,e,t);return this.fields.push(n),n}addBoolean(e){let t=new Io(this,e);return this.fields.push(t),t}fieldFor(e){if(typeof e!="string")throw new TypeError("property must be string");for(let t of this.fields)if(t.property===e)return t}};U.BitStructure=ps;var ms=class{constructor(e,t,n){if(!(e instanceof ps))throw new TypeError("container must be a BitStructure");if(!Number.isInteger(t)||0>=t)throw new TypeError("bits must be positive integer");let i=8*e.span,s=e.fields.reduce((o,l)=>o+l.bits,0);if(t+s>i)throw new Error("bits too long for span remainder ("+(i-s)+" of "+i+" remain)");this.container=e,this.bits=t,this.valueMask=(1<<t)-1,t===32&&(this.valueMask=4294967295),this.start=s,this.container.msb&&(this.start=i-s-t),this.wordMask=Ii(this.valueMask<<this.start),this.property=n}decode(e,t){let n=this.container._packedGetValue();return Ii(n&this.wordMask)>>>this.start}encode(e){if(typeof e!="number"||!Number.isInteger(e)||e!==Ii(e&this.valueMask))throw new TypeError(Dc("BitField.encode",this)+" value must be integer not exceeding "+this.valueMask);let t=this.container._packedGetValue(),n=Ii(e<<this.start);this.container._packedSetValue(Ii(t&~this.wordMask)|n)}};U.BitField=ms;var Io=class extends ms{constructor(e,t){super(e,1,t)}decode(e,t){return!!super.decode(e,t)}encode(e){typeof e=="boolean"&&(e=+e),super.encode(e)}};U.Boolean=Io;var xo=class extends Ee{constructor(e,t){if(!(e instanceof Dt&&e.isCount()||Number.isInteger(e)&&0<=e))throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");let n=-1;e instanceof Dt||(n=e),super(n,t),this.length=e}getSpan(e,t){let n=this.span;return 0>n&&(n=this.length.decode(e,t)),n}decode(e,t=0){let n=this.span;return 0>n&&(n=this.length.decode(e,t)),Re(e).slice(t,t+n)}encode(e,t,n){let i=this.length;if(this.length instanceof Dt&&(i=e.length),!(e instanceof Uint8Array&&i===e.length))throw new TypeError(Dc("Blob.encode",this)+" requires (length "+i+") Uint8Array as src");if(n+i>t.length)throw new RangeError("encoding overruns Uint8Array");let s=Re(e);return Re(t).write(s.toString("hex"),n,i,"hex"),this.length instanceof Dt&&this.length.encode(i,t,n),i}};U.Blob=xo;var To=class extends Ee{constructor(e){super(-1,e)}getSpan(e,t=0){Ti(e);let n=t;for(;n<e.length&&e[n]!==0;)n+=1;return 1+n-t}decode(e,t=0){let n=this.getSpan(e,t);return Re(e).slice(t,t+n-1).toString("utf-8")}encode(e,t,n=0){typeof e!="string"&&(e=String(e));let i=$c.Buffer.from(e,"utf8"),s=i.length;if(n+s>t.length)throw new RangeError("encoding overruns Buffer");let o=Re(t);return i.copy(o,n),o[n+s]=0,s+1}};U.CString=To;var Oo=class extends Ee{constructor(e,t){if(typeof e=="string"&&t===void 0&&(t=e,e=void 0),e===void 0)e=-1;else if(!Number.isInteger(e))throw new TypeError("maxSpan must be an integer");super(-1,t),this.maxSpan=e}getSpan(e,t=0){return Ti(e),e.length-t}decode(e,t=0){let n=this.getSpan(e,t);if(0<=this.maxSpan&&this.maxSpan<n)throw new RangeError("text length exceeds maxSpan");return Re(e).slice(t,t+n).toString("utf-8")}encode(e,t,n=0){typeof e!="string"&&(e=String(e));let i=$c.Buffer.from(e,"utf8"),s=i.length;if(0<=this.maxSpan&&this.maxSpan<s)throw new RangeError("text length exceeds maxSpan");if(n+s>t.length)throw new RangeError("encoding overruns Buffer");return i.copy(Re(t),n),s}};U.UTF8=Oo;var Bo=class extends Ee{constructor(e,t){super(0,t),this.value=e}decode(e,t){return this.value}encode(e,t,n){return 0}};U.Constant=Bo;U.greedy=((r,e)=>new mo(r,e));U.offset=((r,e,t)=>new ds(r,e,t));U.u8=(r=>new rr(1,r));U.u16=(r=>new rr(2,r));U.u24=(r=>new rr(3,r));U.u32=(r=>new rr(4,r));U.u40=(r=>new rr(5,r));U.u48=(r=>new rr(6,r));U.nu64=(r=>new go(r));U.u16be=(r=>new ur(2,r));U.u24be=(r=>new ur(3,r));U.u32be=(r=>new ur(4,r));U.u40be=(r=>new ur(5,r));U.u48be=(r=>new ur(6,r));U.nu64be=(r=>new yo(r));U.s8=(r=>new Jr(1,r));U.s16=(r=>new Jr(2,r));U.s24=(r=>new Jr(3,r));U.s32=(r=>new Jr(4,r));U.s40=(r=>new Jr(5,r));U.s48=(r=>new Jr(6,r));U.ns64=(r=>new bo(r));U.s16be=(r=>new _n(2,r));U.s24be=(r=>new _n(3,r));U.s32be=(r=>new _n(4,r));U.s40be=(r=>new _n(5,r));U.s48be=(r=>new _n(6,r));U.ns64be=(r=>new wo(r));U.f32=(r=>new vo(r));U.f32be=(r=>new _o(r));U.f64=(r=>new So(r));U.f64be=(r=>new Ro(r));U.struct=((r,e,t)=>new Eo(r,e,t));U.bits=((r,e,t)=>new ps(r,e,t));U.seq=((r,e,t)=>new Ao(r,e,t));U.union=((r,e,t)=>new hs(r,e,t));U.unionLayoutDiscriminator=((r,e)=>new xi(r,e));U.blob=((r,e)=>new xo(r,e));U.cstr=(r=>new To(r));U.utf8=((r,e)=>new Oo(r,e));U.constant=((r,e)=>new Bo(r,e))});function bs(){if(!$o&&($o=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!$o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $o(fv)}var $o,fv,Yc=jt(()=>{fv=new Uint8Array(16)});var Rf,Af=jt(()=>{Rf=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i});function hv(r){return typeof r=="string"&&Rf.test(r)}var Rn,ws=jt(()=>{Af();Rn=hv});function pv(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=($t[r[e+0]]+$t[r[e+1]]+$t[r[e+2]]+$t[r[e+3]]+"-"+$t[r[e+4]]+$t[r[e+5]]+"-"+$t[r[e+6]]+$t[r[e+7]]+"-"+$t[r[e+8]]+$t[r[e+9]]+"-"+$t[r[e+10]]+$t[r[e+11]]+$t[r[e+12]]+$t[r[e+13]]+$t[r[e+14]]+$t[r[e+15]]).toLowerCase();if(!Rn(t))throw TypeError("Stringified UUID is invalid");return t}var $t,Do,An,vs=jt(()=>{ws();$t=[];for(Do=0;Do<256;++Do)$t.push((Do+256).toString(16).substr(1));An=pv});function mv(r,e,t){var n=e&&t||0,i=e||new Array(16);r=r||{};var s=r.node||Ef,o=r.clockseq!==void 0?r.clockseq:Zc;if(s==null||o==null){var l=r.random||(r.rng||bs)();s==null&&(s=Ef=[l[0]|1,l[1],l[2],l[3],l[4],l[5]]),o==null&&(o=Zc=(l[6]<<8|l[7])&16383)}var u=r.msecs!==void 0?r.msecs:Date.now(),y=r.nsecs!==void 0?r.nsecs:Jc+1,S=u-Xc+(y-Jc)/1e4;if(S<0&&r.clockseq===void 0&&(o=o+1&16383),(S<0||u>Xc)&&r.nsecs===void 0&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Xc=u,Jc=y,Zc=o,u+=122192928e5;var R=((u&268435455)*1e4+y)%4294967296;i[n++]=R>>>24&255,i[n++]=R>>>16&255,i[n++]=R>>>8&255,i[n++]=R&255;var I=u/4294967296*1e4&268435455;i[n++]=I>>>8&255,i[n++]=I&255,i[n++]=I>>>24&15|16,i[n++]=I>>>16&255,i[n++]=o>>>8|128,i[n++]=o&255;for(var k=0;k<6;++k)i[n+k]=s[k];return e||An(i)}var Ef,Zc,Xc,Jc,kf,If=jt(()=>{Yc();vs();Xc=0,Jc=0;kf=mv});function gv(r){if(!Rn(r))throw TypeError("Invalid UUID");var e,t=new Uint8Array(16);return t[0]=(e=parseInt(r.slice(0,8),16))>>>24,t[1]=e>>>16&255,t[2]=e>>>8&255,t[3]=e&255,t[4]=(e=parseInt(r.slice(9,13),16))>>>8,t[5]=e&255,t[6]=(e=parseInt(r.slice(14,18),16))>>>8,t[7]=e&255,t[8]=(e=parseInt(r.slice(19,23),16))>>>8,t[9]=e&255,t[10]=(e=parseInt(r.slice(24,36),16))/1099511627776&255,t[11]=e/4294967296&255,t[12]=e>>>24&255,t[13]=e>>>16&255,t[14]=e>>>8&255,t[15]=e&255,t}var Uo,Qc=jt(()=>{ws();Uo=gv});function yv(r){r=unescape(encodeURIComponent(r));for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t));return e}function zo(r,e,t){function n(i,s,o,l){if(typeof i=="string"&&(i=yv(i)),typeof s=="string"&&(s=Uo(s)),s.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+i.length);if(u.set(s),u.set(i,s.length),u=t(u),u[6]=u[6]&15|e,u[8]=u[8]&63|128,o){l=l||0;for(var y=0;y<16;++y)o[l+y]=u[y];return o}return An(u)}try{n.name=r}catch{}return n.DNS=bv,n.URL=wv,n}var bv,wv,el=jt(()=>{vs();Qc();bv="6ba7b810-9dad-11d1-80b4-00c04fd430c8",wv="6ba7b811-9dad-11d1-80b4-00c04fd430c8"});function vv(r){if(typeof r=="string"){var e=unescape(encodeURIComponent(r));r=new Uint8Array(e.length);for(var t=0;t<e.length;++t)r[t]=e.charCodeAt(t)}return _v(Sv(Rv(r),r.length*8))}function _v(r){for(var e=[],t=r.length*32,n="0123456789abcdef",i=0;i<t;i+=8){var s=r[i>>5]>>>i%32&255,o=parseInt(n.charAt(s>>>4&15)+n.charAt(s&15),16);e.push(o)}return e}function xf(r){return(r+64>>>9<<4)+14+1}function Sv(r,e){r[e>>5]|=128<<e%32,r[xf(e)-1]=e;for(var t=1732584193,n=-271733879,i=-1732584194,s=271733878,o=0;o<r.length;o+=16){var l=t,u=n,y=i,S=s;t=zt(t,n,i,s,r[o],7,-680876936),s=zt(s,t,n,i,r[o+1],12,-389564586),i=zt(i,s,t,n,r[o+2],17,606105819),n=zt(n,i,s,t,r[o+3],22,-1044525330),t=zt(t,n,i,s,r[o+4],7,-176418897),s=zt(s,t,n,i,r[o+5],12,1200080426),i=zt(i,s,t,n,r[o+6],17,-1473231341),n=zt(n,i,s,t,r[o+7],22,-45705983),t=zt(t,n,i,s,r[o+8],7,1770035416),s=zt(s,t,n,i,r[o+9],12,-1958414417),i=zt(i,s,t,n,r[o+10],17,-42063),n=zt(n,i,s,t,r[o+11],22,-1990404162),t=zt(t,n,i,s,r[o+12],7,1804603682),s=zt(s,t,n,i,r[o+13],12,-40341101),i=zt(i,s,t,n,r[o+14],17,-1502002290),n=zt(n,i,s,t,r[o+15],22,1236535329),t=Ft(t,n,i,s,r[o+1],5,-165796510),s=Ft(s,t,n,i,r[o+6],9,-1069501632),i=Ft(i,s,t,n,r[o+11],14,643717713),n=Ft(n,i,s,t,r[o],20,-373897302),t=Ft(t,n,i,s,r[o+5],5,-701558691),s=Ft(s,t,n,i,r[o+10],9,38016083),i=Ft(i,s,t,n,r[o+15],14,-660478335),n=Ft(n,i,s,t,r[o+4],20,-405537848),t=Ft(t,n,i,s,r[o+9],5,568446438),s=Ft(s,t,n,i,r[o+14],9,-1019803690),i=Ft(i,s,t,n,r[o+3],14,-187363961),n=Ft(n,i,s,t,r[o+8],20,1163531501),t=Ft(t,n,i,s,r[o+13],5,-1444681467),s=Ft(s,t,n,i,r[o+2],9,-51403784),i=Ft(i,s,t,n,r[o+7],14,1735328473),n=Ft(n,i,s,t,r[o+12],20,-1926607734),t=Kt(t,n,i,s,r[o+5],4,-378558),s=Kt(s,t,n,i,r[o+8],11,-2022574463),i=Kt(i,s,t,n,r[o+11],16,1839030562),n=Kt(n,i,s,t,r[o+14],23,-35309556),t=Kt(t,n,i,s,r[o+1],4,-1530992060),s=Kt(s,t,n,i,r[o+4],11,1272893353),i=Kt(i,s,t,n,r[o+7],16,-155497632),n=Kt(n,i,s,t,r[o+10],23,-1094730640),t=Kt(t,n,i,s,r[o+13],4,681279174),s=Kt(s,t,n,i,r[o],11,-358537222),i=Kt(i,s,t,n,r[o+3],16,-722521979),n=Kt(n,i,s,t,r[o+6],23,76029189),t=Kt(t,n,i,s,r[o+9],4,-640364487),s=Kt(s,t,n,i,r[o+12],11,-421815835),i=Kt(i,s,t,n,r[o+15],16,530742520),n=Kt(n,i,s,t,r[o+2],23,-995338651),t=Ht(t,n,i,s,r[o],6,-198630844),s=Ht(s,t,n,i,r[o+7],10,1126891415),i=Ht(i,s,t,n,r[o+14],15,-1416354905),n=Ht(n,i,s,t,r[o+5],21,-57434055),t=Ht(t,n,i,s,r[o+12],6,1700485571),s=Ht(s,t,n,i,r[o+3],10,-1894986606),i=Ht(i,s,t,n,r[o+10],15,-1051523),n=Ht(n,i,s,t,r[o+1],21,-2054922799),t=Ht(t,n,i,s,r[o+8],6,1873313359),s=Ht(s,t,n,i,r[o+15],10,-30611744),i=Ht(i,s,t,n,r[o+6],15,-1560198380),n=Ht(n,i,s,t,r[o+13],21,1309151649),t=Ht(t,n,i,s,r[o+4],6,-145523070),s=Ht(s,t,n,i,r[o+11],10,-1120210379),i=Ht(i,s,t,n,r[o+2],15,718787259),n=Ht(n,i,s,t,r[o+9],21,-343485551),t=En(t,l),n=En(n,u),i=En(i,y),s=En(s,S)}return[t,n,i,s]}function Rv(r){if(r.length===0)return[];for(var e=r.length*8,t=new Uint32Array(xf(e)),n=0;n<e;n+=8)t[n>>5]|=(r[n/8]&255)<<n%32;return t}function En(r,e){var t=(r&65535)+(e&65535),n=(r>>16)+(e>>16)+(t>>16);return n<<16|t&65535}function Av(r,e){return r<<e|r>>>32-e}function Fo(r,e,t,n,i,s){return En(Av(En(En(e,r),En(n,s)),i),t)}function zt(r,e,t,n,i,s,o){return Fo(e&t|~e&n,r,e,i,s,o)}function Ft(r,e,t,n,i,s,o){return Fo(e&n|t&~n,r,e,i,s,o)}function Kt(r,e,t,n,i,s,o){return Fo(e^t^n,r,e,i,s,o)}function Ht(r,e,t,n,i,s,o){return Fo(t^(e|~n),r,e,i,s,o)}var Tf,Of=jt(()=>{Tf=vv});var Ev,Bf,Cf=jt(()=>{el();Of();Ev=zo("v3",48,Tf),Bf=Ev});function kv(r,e,t){r=r||{};var n=r.random||(r.rng||bs)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(var i=0;i<16;++i)e[t+i]=n[i];return e}return An(n)}var Pf,Nf=jt(()=>{Yc();vs();Pf=kv});function Iv(r,e,t,n){switch(r){case 0:return e&t^~e&n;case 1:return e^t^n;case 2:return e&t^e&n^t&n;case 3:return e^t^n}}function tl(r,e){return r<<e|r>>>32-e}function xv(r){var e=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof r=="string"){var n=unescape(encodeURIComponent(r));r=[];for(var i=0;i<n.length;++i)r.push(n.charCodeAt(i))}else Array.isArray(r)||(r=Array.prototype.slice.call(r));r.push(128);for(var s=r.length/4+2,o=Math.ceil(s/16),l=new Array(o),u=0;u<o;++u){for(var y=new Uint32Array(16),S=0;S<16;++S)y[S]=r[u*64+S*4]<<24|r[u*64+S*4+1]<<16|r[u*64+S*4+2]<<8|r[u*64+S*4+3];l[u]=y}l[o-1][14]=(r.length-1)*8/Math.pow(2,32),l[o-1][14]=Math.floor(l[o-1][14]),l[o-1][15]=(r.length-1)*8&4294967295;for(var R=0;R<o;++R){for(var I=new Uint32Array(80),k=0;k<16;++k)I[k]=l[R][k];for(var B=16;B<80;++B)I[B]=tl(I[B-3]^I[B-8]^I[B-14]^I[B-16],1);for(var N=t[0],$=t[1],D=t[2],L=t[3],K=t[4],G=0;G<80;++G){var ee=Math.floor(G/20),Q=tl(N,5)+Iv(ee,$,D,L)+K+e[ee]+I[G]>>>0;K=L,L=D,D=tl($,30)>>>0,$=N,N=Q}t[0]=t[0]+N>>>0,t[1]=t[1]+$>>>0,t[2]=t[2]+D>>>0,t[3]=t[3]+L>>>0,t[4]=t[4]+K>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,t[0]&255,t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,t[1]&255,t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,t[2]&255,t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,t[3]&255,t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,t[4]&255]}var Lf,Mf=jt(()=>{Lf=xv});var Tv,$f,Df=jt(()=>{el();Mf();Tv=zo("v5",80,Lf),$f=Tv});var Uf,zf=jt(()=>{Uf="00000000-0000-0000-0000-000000000000"});function Ov(r){if(!Rn(r))throw TypeError("Invalid UUID");return parseInt(r.substr(14,1),16)}var Ff,Kf=jt(()=>{ws();Ff=Ov});var rl={};ym(rl,{NIL:()=>Uf,parse:()=>Uo,stringify:()=>An,v1:()=>kf,v3:()=>Bf,v4:()=>Pf,v5:()=>$f,validate:()=>Rn,version:()=>Ff});var nl=jt(()=>{If();Cf();Nf();Df();zf();Kf();ws();vs();Qc()});var Wf=Yt(($E,Hf)=>{"use strict";var Bv=(nl(),Lu(rl)).v4,Cv=function(r,e,t,n){if(typeof r!="string")throw new TypeError(r+" must be a string");n=n||{};let i=typeof n.version=="number"?n.version:2;if(i!==1&&i!==2)throw new TypeError(i+" must be 1 or 2");let s={method:r};if(i===2&&(s.jsonrpc="2.0"),e){if(typeof e!="object"&&!Array.isArray(e))throw new TypeError(e+" must be an object, array or omitted");s.params=e}if(typeof t>"u"){let o=typeof n.generator=="function"?n.generator:function(){return Bv()};s.id=o(s,n)}else i===2&&t===null?n.notificationIdNull&&(s.id=null):s.id=t;return s};Hf.exports=Cv});var Vf=Yt((DE,qf)=>{"use strict";var Pv=(nl(),Lu(rl)).v4,Nv=Wf(),_s=function(r,e){if(!(this instanceof _s))return new _s(r,e);e||(e={}),this.options={reviver:typeof e.reviver<"u"?e.reviver:null,replacer:typeof e.replacer<"u"?e.replacer:null,generator:typeof e.generator<"u"?e.generator:function(){return Pv()},version:typeof e.version<"u"?e.version:2,notificationIdNull:typeof e.notificationIdNull=="boolean"?e.notificationIdNull:!1},this.callServer=r};qf.exports=_s;_s.prototype.request=function(r,e,t,n){let i=this,s=null,o=Array.isArray(r)&&typeof e=="function";if(this.options.version===1&&o)throw new TypeError("JSON-RPC 1.0 does not support batching");if(o||!o&&r&&typeof r=="object"&&typeof e=="function")n=e,s=r;else{typeof t=="function"&&(n=t,t=void 0);let y=typeof n=="function";try{s=Nv(r,e,t,{generator:this.options.generator,version:this.options.version,notificationIdNull:this.options.notificationIdNull})}catch(S){if(y){n(S);return}throw S}if(!y)return s}let u;try{u=JSON.stringify(s,this.options.replacer)}catch(y){n(y);return}return this.callServer(u,function(y,S){i._parseResponse(y,S,n)}),s};_s.prototype._parseResponse=function(r,e,t){if(r){t(r);return}if(!e){t();return}let n;try{n=JSON.parse(e,this.options.reviver)}catch(i){t(i);return}if(t.length===3)if(Array.isArray(n)){let i=function(o){return typeof o.error<"u"},s=function(o){return!i(o)};t(null,n.filter(i),n.filter(s));return}else{t(null,n.error,n.result);return}t(null,n)}});var jf=Yt((UE,il)=>{"use strict";var Lv=Object.prototype.hasOwnProperty,Qt="~";function Ss(){}Object.create&&(Ss.prototype=Object.create(null),new Ss().__proto__||(Qt=!1));function Mv(r,e,t){this.fn=r,this.context=e,this.once=t||!1}function Gf(r,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new Mv(t,n||r,i),o=Qt?Qt+e:e;return r._events[o]?r._events[o].fn?r._events[o]=[r._events[o],s]:r._events[o].push(s):(r._events[o]=s,r._eventsCount++),r}function Ko(r,e){--r._eventsCount===0?r._events=new Ss:delete r._events[e]}function Wt(){this._events=new Ss,this._eventsCount=0}Wt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Lv.call(t,n)&&e.push(Qt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Wt.prototype.listeners=function(e){var t=Qt?Qt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,s=n.length,o=new Array(s);i<s;i++)o[i]=n[i].fn;return o};Wt.prototype.listenerCount=function(e){var t=Qt?Qt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Wt.prototype.emit=function(e,t,n,i,s,o){var l=Qt?Qt+e:e;if(!this._events[l])return!1;var u=this._events[l],y=arguments.length,S,R;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),y){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.context,t,n,i,s),!0;case 6:return u.fn.call(u.context,t,n,i,s,o),!0}for(R=1,S=new Array(y-1);R<y;R++)S[R-1]=arguments[R];u.fn.apply(u.context,S)}else{var I=u.length,k;for(R=0;R<I;R++)switch(u[R].once&&this.removeListener(e,u[R].fn,void 0,!0),y){case 1:u[R].fn.call(u[R].context);break;case 2:u[R].fn.call(u[R].context,t);break;case 3:u[R].fn.call(u[R].context,t,n);break;case 4:u[R].fn.call(u[R].context,t,n,i);break;default:if(!S)for(k=1,S=new Array(y-1);k<y;k++)S[k-1]=arguments[k];u[R].fn.apply(u[R].context,S)}}return!0};Wt.prototype.on=function(e,t,n){return Gf(this,e,t,n,!1)};Wt.prototype.once=function(e,t,n){return Gf(this,e,t,n,!0)};Wt.prototype.removeListener=function(e,t,n,i){var s=Qt?Qt+e:e;if(!this._events[s])return this;if(!t)return Ko(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&Ko(this,s);else{for(var l=0,u=[],y=o.length;l<y;l++)(o[l].fn!==t||i&&!o[l].once||n&&o[l].context!==n)&&u.push(o[l]);u.length?this._events[s]=u.length===1?u[0]:u:Ko(this,s)}return this};Wt.prototype.removeAllListeners=function(e){var t;return e?(t=Qt?Qt+e:e,this._events[t]&&Ko(this,t)):(this._events=new Ss,this._eventsCount=0),this};Wt.prototype.off=Wt.prototype.removeListener;Wt.prototype.addListener=Wt.prototype.on;Wt.prefixed=Qt;Wt.EventEmitter=Wt;typeof il<"u"&&(il.exports=Wt)});var Zh=Yt(zi=>{"use strict";Object.defineProperty(zi,"__esModule",{value:!0});var oa;function GS(r){{let e=Buffer.from(r);e.reverse();let t=e.toString("hex");return t.length===0?BigInt(0):BigInt(`0x${t}`)}return oa.toBigInt(r,!1)}zi.toBigIntLE=GS;function jS(r){{let e=r.toString("hex");return e.length===0?BigInt(0):BigInt(`0x${e}`)}return oa.toBigInt(r,!0)}zi.toBigIntBE=jS;function YS(r,e){{let t=r.toString(16),n=Buffer.from(t.padStart(e*2,"0").slice(0,e*2),"hex");return n.reverse(),n}return oa.fromBigInt(r,Buffer.allocUnsafe(e),!1)}zi.toBufferLE=YS;function ZS(r,e){{let t=r.toString(16);return Buffer.from(t.padStart(e*2,"0").slice(0,e*2),"hex")}return oa.fromBigInt(r,Buffer.allocUnsafe(e),!0)}zi.toBufferBE=ZS});var ae=kt(un());var Kn=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function Kr(r){return r instanceof Uint8Array||ArrayBuffer.isView(r)&&r.constructor.name==="Uint8Array"}function dn(r){if(!Number.isSafeInteger(r)||r<0)throw new Error("positive integer expected, got "+r)}function Nt(r,...e){if(!Kr(r))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(r.length))throw new Error("Uint8Array expected of length "+e+", got length="+r.length)}function js(r){if(typeof r!="function"||typeof r.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");dn(r.outputLen),dn(r.blockLen)}function Hr(r,e=!0){if(r.destroyed)throw new Error("Hash instance has been destroyed");if(e&&r.finished)throw new Error("Hash#digest() has already been called")}function Ys(r,e){Nt(r);let t=e.outputLen;if(r.length<t)throw new Error("digestInto() expects output buffer of length at least "+t)}function nd(r){return new Uint32Array(r.buffer,r.byteOffset,Math.floor(r.byteLength/4))}function fr(...r){for(let e=0;e<r.length;e++)r[e].fill(0)}function Zs(r){return new DataView(r.buffer,r.byteOffset,r.byteLength)}function Ar(r,e){return r<<32-e|r>>>e}var Zm=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Xm(r){return r<<24&4278190080|r<<8&16711680|r>>>8&65280|r>>>24&255}function Jm(r){for(let e=0;e<r.length;e++)r[e]=Xm(r[e]);return r}var ic=Zm?r=>r:Jm,id=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Qm=Array.from({length:256},(r,e)=>e.toString(16).padStart(2,"0"));function hr(r){if(Nt(r),id)return r.toHex();let e="";for(let t=0;t<r.length;t++)e+=Qm[r[t]];return e}var Fr={_0:48,_9:57,A:65,F:70,a:97,f:102};function rd(r){if(r>=Fr._0&&r<=Fr._9)return r-Fr._0;if(r>=Fr.A&&r<=Fr.F)return r-(Fr.A-10);if(r>=Fr.a&&r<=Fr.f)return r-(Fr.a-10)}function Hn(r){if(typeof r!="string")throw new Error("hex string expected, got "+typeof r);if(id)return Uint8Array.fromHex(r);let e=r.length,t=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);let n=new Uint8Array(t);for(let i=0,s=0;i<t;i++,s+=2){let o=rd(r.charCodeAt(s)),l=rd(r.charCodeAt(s+1));if(o===void 0||l===void 0){let u=r[s]+r[s+1];throw new Error('hex string expected, got non-hex character "'+u+'" at index '+s)}n[i]=o*16+l}return n}function sc(r){if(typeof r!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(r))}function Wn(r){return typeof r=="string"&&(r=sc(r)),Nt(r),r}function Zt(...r){let e=0;for(let n=0;n<r.length;n++){let i=r[n];Nt(i),e+=i.length}let t=new Uint8Array(e);for(let n=0,i=0;n<r.length;n++){let s=r[n];t.set(s,i),i+=s.length}return t}var fn=class{};function ts(r){let e=n=>r().update(Wn(n)).digest(),t=r();return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=()=>r(),e}function wi(r=32){if(Kn&&typeof Kn.getRandomValues=="function")return Kn.getRandomValues(new Uint8Array(r));if(Kn&&typeof Kn.randomBytes=="function")return Uint8Array.from(Kn.randomBytes(r));throw new Error("crypto.getRandomValues must be defined")}function e0(r,e,t,n){if(typeof r.setBigUint64=="function")return r.setBigUint64(e,t,n);let i=BigInt(32),s=BigInt(4294967295),o=Number(t>>i&s),l=Number(t&s),u=n?4:0,y=n?0:4;r.setUint32(e+u,o,n),r.setUint32(e+y,l,n)}function sd(r,e,t){return r&e^~r&t}function od(r,e,t){return r&e^r&t^e&t}var rs=class extends fn{constructor(e,t,n,i){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=i,this.buffer=new Uint8Array(e),this.view=Zs(this.buffer)}update(e){Hr(this),e=Wn(e),Nt(e);let{view:t,buffer:n,blockLen:i}=this,s=e.length;for(let o=0;o<s;){let l=Math.min(i-this.pos,s-o);if(l===i){let u=Zs(e);for(;i<=s-o;o+=i)this.process(u,o);continue}n.set(e.subarray(o,o+l),this.pos),this.pos+=l,o+=l,this.pos===i&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Hr(this),Ys(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:i,isLE:s}=this,{pos:o}=this;t[o++]=128,fr(this.buffer.subarray(o)),this.padOffset>i-o&&(this.process(n,0),o=0);for(let R=o;R<i;R++)t[R]=0;e0(n,i-8,BigInt(this.length*8),s),this.process(n,0);let l=Zs(e),u=this.outputLen;if(u%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let y=u/4,S=this.get();if(y>S.length)throw new Error("_sha2: outputLen bigger than state");for(let R=0;R<y;R++)l.setUint32(4*R,S[R],s)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:t,buffer:n,length:i,finished:s,destroyed:o,pos:l}=this;return e.destroyed=o,e.finished=s,e.length=i,e.pos=l,i%t&&e.buffer.set(n),e}clone(){return this._cloneInto()}},Wr=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);var Lt=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]);var Xs=BigInt(4294967295),ad=BigInt(32);function t0(r,e=!1){return e?{h:Number(r&Xs),l:Number(r>>ad&Xs)}:{h:Number(r>>ad&Xs)|0,l:Number(r&Xs)|0}}function Js(r,e=!1){let t=r.length,n=new Uint32Array(t),i=new Uint32Array(t);for(let s=0;s<t;s++){let{h:o,l}=t0(r[s],e);[n[s],i[s]]=[o,l]}return[n,i]}var oc=(r,e,t)=>r>>>t,ac=(r,e,t)=>r<<32-t|e>>>t,qn=(r,e,t)=>r>>>t|e<<32-t,Vn=(r,e,t)=>r<<32-t|e>>>t,ns=(r,e,t)=>r<<64-t|e>>>t-32,is=(r,e,t)=>r>>>t-32|e<<64-t;var cd=(r,e,t)=>r<<t|e>>>32-t,ld=(r,e,t)=>e<<t|r>>>32-t,ud=(r,e,t)=>e<<t-32|r>>>64-t,dd=(r,e,t)=>r<<t-32|e>>>64-t;function Cr(r,e,t,n){let i=(e>>>0)+(n>>>0);return{h:r+t+(i/2**32|0)|0,l:i|0}}var fd=(r,e,t)=>(r>>>0)+(e>>>0)+(t>>>0),hd=(r,e,t,n)=>e+t+n+(r/2**32|0)|0,pd=(r,e,t,n)=>(r>>>0)+(e>>>0)+(t>>>0)+(n>>>0),md=(r,e,t,n,i)=>e+t+n+i+(r/2**32|0)|0,gd=(r,e,t,n,i)=>(r>>>0)+(e>>>0)+(t>>>0)+(n>>>0)+(i>>>0),yd=(r,e,t,n,i,s)=>e+t+n+i+s+(r/2**32|0)|0;var n0=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),hn=new Uint32Array(64),Qs=class extends rs{constructor(e=32){super(64,e,8,!1),this.A=Wr[0]|0,this.B=Wr[1]|0,this.C=Wr[2]|0,this.D=Wr[3]|0,this.E=Wr[4]|0,this.F=Wr[5]|0,this.G=Wr[6]|0,this.H=Wr[7]|0}get(){let{A:e,B:t,C:n,D:i,E:s,F:o,G:l,H:u}=this;return[e,t,n,i,s,o,l,u]}set(e,t,n,i,s,o,l,u){this.A=e|0,this.B=t|0,this.C=n|0,this.D=i|0,this.E=s|0,this.F=o|0,this.G=l|0,this.H=u|0}process(e,t){for(let R=0;R<16;R++,t+=4)hn[R]=e.getUint32(t,!1);for(let R=16;R<64;R++){let I=hn[R-15],k=hn[R-2],B=Ar(I,7)^Ar(I,18)^I>>>3,N=Ar(k,17)^Ar(k,19)^k>>>10;hn[R]=N+hn[R-7]+B+hn[R-16]|0}let{A:n,B:i,C:s,D:o,E:l,F:u,G:y,H:S}=this;for(let R=0;R<64;R++){let I=Ar(l,6)^Ar(l,11)^Ar(l,25),k=S+I+sd(l,u,y)+n0[R]+hn[R]|0,N=(Ar(n,2)^Ar(n,13)^Ar(n,22))+od(n,i,s)|0;S=y,y=u,u=l,l=o+k|0,o=s,s=i,i=n,n=k+N|0}n=n+this.A|0,i=i+this.B|0,s=s+this.C|0,o=o+this.D|0,l=l+this.E|0,u=u+this.F|0,y=y+this.G|0,S=S+this.H|0,this.set(n,i,s,o,l,u,y,S)}roundClean(){fr(hn)}destroy(){this.set(0,0,0,0,0,0,0,0),fr(this.buffer)}};var bd=Js(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(r=>BigInt(r))),i0=bd[0],s0=bd[1],pn=new Uint32Array(80),mn=new Uint32Array(80),cc=class extends rs{constructor(e=64){super(128,e,16,!1),this.Ah=Lt[0]|0,this.Al=Lt[1]|0,this.Bh=Lt[2]|0,this.Bl=Lt[3]|0,this.Ch=Lt[4]|0,this.Cl=Lt[5]|0,this.Dh=Lt[6]|0,this.Dl=Lt[7]|0,this.Eh=Lt[8]|0,this.El=Lt[9]|0,this.Fh=Lt[10]|0,this.Fl=Lt[11]|0,this.Gh=Lt[12]|0,this.Gl=Lt[13]|0,this.Hh=Lt[14]|0,this.Hl=Lt[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:i,Ch:s,Cl:o,Dh:l,Dl:u,Eh:y,El:S,Fh:R,Fl:I,Gh:k,Gl:B,Hh:N,Hl:$}=this;return[e,t,n,i,s,o,l,u,y,S,R,I,k,B,N,$]}set(e,t,n,i,s,o,l,u,y,S,R,I,k,B,N,$){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=i|0,this.Ch=s|0,this.Cl=o|0,this.Dh=l|0,this.Dl=u|0,this.Eh=y|0,this.El=S|0,this.Fh=R|0,this.Fl=I|0,this.Gh=k|0,this.Gl=B|0,this.Hh=N|0,this.Hl=$|0}process(e,t){for(let K=0;K<16;K++,t+=4)pn[K]=e.getUint32(t),mn[K]=e.getUint32(t+=4);for(let K=16;K<80;K++){let G=pn[K-15]|0,ee=mn[K-15]|0,Q=qn(G,ee,1)^qn(G,ee,8)^oc(G,ee,7),te=Vn(G,ee,1)^Vn(G,ee,8)^ac(G,ee,7),v=pn[K-2]|0,w=mn[K-2]|0,E=qn(v,w,19)^ns(v,w,61)^oc(v,w,6),P=Vn(v,w,19)^is(v,w,61)^ac(v,w,6),T=pd(te,P,mn[K-7],mn[K-16]),p=md(T,Q,E,pn[K-7],pn[K-16]);pn[K]=p|0,mn[K]=T|0}let{Ah:n,Al:i,Bh:s,Bl:o,Ch:l,Cl:u,Dh:y,Dl:S,Eh:R,El:I,Fh:k,Fl:B,Gh:N,Gl:$,Hh:D,Hl:L}=this;for(let K=0;K<80;K++){let G=qn(R,I,14)^qn(R,I,18)^ns(R,I,41),ee=Vn(R,I,14)^Vn(R,I,18)^is(R,I,41),Q=R&k^~R&N,te=I&B^~I&$,v=gd(L,ee,te,s0[K],mn[K]),w=yd(v,D,G,Q,i0[K],pn[K]),E=v|0,P=qn(n,i,28)^ns(n,i,34)^ns(n,i,39),T=Vn(n,i,28)^is(n,i,34)^is(n,i,39),p=n&s^n&l^s&l,a=i&o^i&u^o&u;D=N|0,L=$|0,N=k|0,$=B|0,k=R|0,B=I|0,{h:R,l:I}=Cr(y|0,S|0,w|0,E|0),y=l|0,S=u|0,l=s|0,u=o|0,s=n|0,o=i|0;let c=fd(E,T,a);n=hd(c,w,P,p),i=c|0}({h:n,l:i}=Cr(this.Ah|0,this.Al|0,n|0,i|0)),{h:s,l:o}=Cr(this.Bh|0,this.Bl|0,s|0,o|0),{h:l,l:u}=Cr(this.Ch|0,this.Cl|0,l|0,u|0),{h:y,l:S}=Cr(this.Dh|0,this.Dl|0,y|0,S|0),{h:R,l:I}=Cr(this.Eh|0,this.El|0,R|0,I|0),{h:k,l:B}=Cr(this.Fh|0,this.Fl|0,k|0,B|0),{h:N,l:$}=Cr(this.Gh|0,this.Gl|0,N|0,$|0),{h:D,l:L}=Cr(this.Hh|0,this.Hl|0,D|0,L|0),this.set(n,i,s,o,l,u,y,S,R,I,k,B,N,$,D,L)}roundClean(){fr(pn,mn)}destroy(){fr(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}};var eo=ts(()=>new Qs);var wd=ts(()=>new cc);var dc=BigInt(0),uc=BigInt(1);function qr(r,e=""){if(typeof r!="boolean"){let t=e&&`"${e}"`;throw new Error(t+"expected boolean, got type="+typeof r)}return r}function cr(r,e,t=""){let n=Kr(r),i=r?.length,s=e!==void 0;if(!n||s&&i!==e){let o=t&&`"${t}" `,l=s?` of length ${e}`:"",u=n?`length=${i}`:`type=${typeof r}`;throw new Error(o+"expected Uint8Array"+l+", got "+u)}return r}function ss(r){let e=r.toString(16);return e.length&1?"0"+e:e}function vd(r){if(typeof r!="string")throw new Error("hex string expected, got "+typeof r);return r===""?dc:BigInt("0x"+r)}function vi(r){return vd(hr(r))}function Vr(r){return Nt(r),vd(hr(Uint8Array.from(r).reverse()))}function to(r,e){return Hn(r.toString(16).padStart(e*2,"0"))}function fc(r,e){return to(r,e).reverse()}function Ie(r,e,t){let n;if(typeof e=="string")try{n=Hn(e)}catch(s){throw new Error(r+" must be hex string or Uint8Array, cause: "+s)}else if(Kr(e))n=Uint8Array.from(e);else throw new Error(r+" must be hex string or Uint8Array");let i=n.length;if(typeof t=="number"&&i!==t)throw new Error(r+" of length "+t+" expected, got "+i);return n}function _d(r,e){if(r.length!==e.length)return!1;let t=0;for(let n=0;n<r.length;n++)t|=r[n]^e[n];return t===0}function hc(r){return Uint8Array.from(r)}var lc=r=>typeof r=="bigint"&&dc<=r;function Sd(r,e,t){return lc(r)&&lc(e)&&lc(t)&&e<=r&&r<t}function os(r,e,t,n){if(!Sd(e,t,n))throw new Error("expected valid "+r+": "+t+" <= n < "+n+", got "+e)}function ro(r){let e;for(e=0;r>dc;r>>=uc,e+=1);return e}var gn=r=>(uc<<BigInt(r))-uc;function Rd(r,e,t){if(typeof r!="number"||r<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof t!="function")throw new Error("hmacFn must be a function");let n=k=>new Uint8Array(k),i=k=>Uint8Array.of(k),s=n(r),o=n(r),l=0,u=()=>{s.fill(1),o.fill(0),l=0},y=(...k)=>t(o,s,...k),S=(k=n(0))=>{o=y(i(0),k),s=y(),k.length!==0&&(o=y(i(1),k),s=y())},R=()=>{if(l++>=1e3)throw new Error("drbg: tried 1000 values");let k=0,B=[];for(;k<e;){s=y();let N=s.slice();B.push(N),k+=s.length}return Zt(...B)};return(k,B)=>{u(),S(k);let N;for(;!(N=B(R()));)S();return u(),N}}function yn(r,e,t={}){if(!r||typeof r!="object")throw new Error("expected valid options object");function n(i,s,o){let l=r[i];if(o&&l===void 0)return;let u=typeof l;if(u!==s||l===null)throw new Error(`param "${i}" is invalid: expected ${s}, got ${u}`)}Object.entries(e).forEach(([i,s])=>n(i,s,!1)),Object.entries(t).forEach(([i,s])=>n(i,s,!0))}var pc=()=>{throw new Error("not implemented")};function _i(r){let e=new WeakMap;return(t,...n)=>{let i=e.get(t);if(i!==void 0)return i;let s=r(t,...n);return e.set(t,s),s}}var Xt=BigInt(0),Ot=BigInt(1),Gn=BigInt(2),kd=BigInt(3),Id=BigInt(4),xd=BigInt(5),o0=BigInt(7),Td=BigInt(8),a0=BigInt(9),Od=BigInt(16);function Ke(r,e){let t=r%e;return t>=Xt?t:e+t}function Le(r,e,t){let n=r;for(;e-- >Xt;)n*=n,n%=t;return n}function Ad(r,e){if(r===Xt)throw new Error("invert: expected non-zero number");if(e<=Xt)throw new Error("invert: expected positive modulus, got "+e);let t=Ke(r,e),n=e,i=Xt,s=Ot,o=Ot,l=Xt;for(;t!==Xt;){let y=n/t,S=n%t,R=i-o*y,I=s-l*y;n=t,t=S,i=o,s=l,o=R,l=I}if(n!==Ot)throw new Error("invert: does not exist");return Ke(i,e)}function mc(r,e,t){if(!r.eql(r.sqr(e),t))throw new Error("Cannot find square root")}function Bd(r,e){let t=(r.ORDER+Ot)/Id,n=r.pow(e,t);return mc(r,n,e),n}function c0(r,e){let t=(r.ORDER-xd)/Td,n=r.mul(e,Gn),i=r.pow(n,t),s=r.mul(e,i),o=r.mul(r.mul(s,Gn),i),l=r.mul(s,r.sub(o,r.ONE));return mc(r,l,e),l}function l0(r){let e=lr(r),t=Cd(r),n=t(e,e.neg(e.ONE)),i=t(e,n),s=t(e,e.neg(n)),o=(r+o0)/Od;return(l,u)=>{let y=l.pow(u,o),S=l.mul(y,n),R=l.mul(y,i),I=l.mul(y,s),k=l.eql(l.sqr(S),u),B=l.eql(l.sqr(R),u);y=l.cmov(y,S,k),S=l.cmov(I,R,B);let N=l.eql(l.sqr(S),u),$=l.cmov(y,S,N);return mc(l,$,u),$}}function Cd(r){if(r<kd)throw new Error("sqrt is not defined for small field");let e=r-Ot,t=0;for(;e%Gn===Xt;)e/=Gn,t++;let n=Gn,i=lr(r);for(;Ed(i,n)===1;)if(n++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(t===1)return Bd;let s=i.pow(n,e),o=(e+Ot)/Gn;return function(u,y){if(u.is0(y))return y;if(Ed(u,y)!==1)throw new Error("Cannot find square root");let S=t,R=u.mul(u.ONE,s),I=u.pow(y,e),k=u.pow(y,o);for(;!u.eql(I,u.ONE);){if(u.is0(I))return u.ZERO;let B=1,N=u.sqr(I);for(;!u.eql(N,u.ONE);)if(B++,N=u.sqr(N),B===S)throw new Error("Cannot find square root");let $=Ot<<BigInt(S-B-1),D=u.pow(R,$);S=B,R=u.sqr(D),I=u.mul(I,R),k=u.mul(k,D)}return k}}function u0(r){return r%Id===kd?Bd:r%Td===xd?c0:r%Od===a0?l0(r):Cd(r)}var Gr=(r,e)=>(Ke(r,e)&Ot)===Ot,d0=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function gc(r){let e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},t=d0.reduce((n,i)=>(n[i]="function",n),e);return yn(r,t),r}function f0(r,e,t){if(t<Xt)throw new Error("invalid exponent, negatives unsupported");if(t===Xt)return r.ONE;if(t===Ot)return e;let n=r.ONE,i=e;for(;t>Xt;)t&Ot&&(n=r.mul(n,i)),i=r.sqr(i),t>>=Ot;return n}function as(r,e,t=!1){let n=new Array(e.length).fill(t?r.ZERO:void 0),i=e.reduce((o,l,u)=>r.is0(l)?o:(n[u]=o,r.mul(o,l)),r.ONE),s=r.inv(i);return e.reduceRight((o,l,u)=>r.is0(l)?o:(n[u]=r.mul(o,n[u]),r.mul(o,l)),s),n}function Ed(r,e){let t=(r.ORDER-Ot)/Gn,n=r.pow(e,t),i=r.eql(n,r.ONE),s=r.eql(n,r.ZERO),o=r.eql(n,r.neg(r.ONE));if(!i&&!s&&!o)throw new Error("invalid Legendre symbol result");return i?1:s?0:-1}function no(r,e){e!==void 0&&dn(e);let t=e!==void 0?e:r.toString(2).length,n=Math.ceil(t/8);return{nBitLength:t,nByteLength:n}}function lr(r,e,t=!1,n={}){if(r<=Xt)throw new Error("invalid field: expected ORDER > 0, got "+r);let i,s,o=!1,l;if(typeof e=="object"&&e!=null){if(n.sqrt||t)throw new Error("cannot specify opts in two arguments");let I=e;I.BITS&&(i=I.BITS),I.sqrt&&(s=I.sqrt),typeof I.isLE=="boolean"&&(t=I.isLE),typeof I.modFromBytes=="boolean"&&(o=I.modFromBytes),l=I.allowedLengths}else typeof e=="number"&&(i=e),n.sqrt&&(s=n.sqrt);let{nBitLength:u,nByteLength:y}=no(r,i);if(y>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let S,R=Object.freeze({ORDER:r,isLE:t,BITS:u,BYTES:y,MASK:gn(u),ZERO:Xt,ONE:Ot,allowedLengths:l,create:I=>Ke(I,r),isValid:I=>{if(typeof I!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof I);return Xt<=I&&I<r},is0:I=>I===Xt,isValidNot0:I=>!R.is0(I)&&R.isValid(I),isOdd:I=>(I&Ot)===Ot,neg:I=>Ke(-I,r),eql:(I,k)=>I===k,sqr:I=>Ke(I*I,r),add:(I,k)=>Ke(I+k,r),sub:(I,k)=>Ke(I-k,r),mul:(I,k)=>Ke(I*k,r),pow:(I,k)=>f0(R,I,k),div:(I,k)=>Ke(I*Ad(k,r),r),sqrN:I=>I*I,addN:(I,k)=>I+k,subN:(I,k)=>I-k,mulN:(I,k)=>I*k,inv:I=>Ad(I,r),sqrt:s||(I=>(S||(S=u0(r)),S(R,I))),toBytes:I=>t?fc(I,y):to(I,y),fromBytes:(I,k=!0)=>{if(l){if(!l.includes(I.length)||I.length>y)throw new Error("Field.fromBytes: expected "+l+" bytes, got "+I.length);let N=new Uint8Array(y);N.set(I,t?0:N.length-I.length),I=N}if(I.length!==y)throw new Error("Field.fromBytes: expected "+y+" bytes, got "+I.length);let B=t?Vr(I):vi(I);if(o&&(B=Ke(B,r)),!k&&!R.isValid(B))throw new Error("invalid field element: outside of range 0..ORDER");return B},invertBatch:I=>as(R,I),cmov:(I,k,B)=>B?k:I});return Object.freeze(R)}function Pd(r){if(typeof r!="bigint")throw new Error("field order must be bigint");let e=r.toString(2).length;return Math.ceil(e/8)}function yc(r){let e=Pd(r);return e+Math.ceil(e/2)}function bc(r,e,t=!1){let n=r.length,i=Pd(e),s=yc(e);if(n<16||n<s||n>1024)throw new Error("expected "+s+"-1024 bytes of input, got "+n);let o=t?Vr(r):vi(r),l=Ke(o,e-Ot)+Ot;return t?fc(l,i):to(l,i)}var Si=BigInt(0),jn=BigInt(1);function cs(r,e){let t=e.negate();return r?t:e}function jr(r,e){let t=as(r.Fp,e.map(n=>n.Z));return e.map((n,i)=>r.fromAffine(n.toAffine(t[i])))}function $d(r,e){if(!Number.isSafeInteger(r)||r<=0||r>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+r)}function wc(r,e){$d(r,e);let t=Math.ceil(e/r)+1,n=2**(r-1),i=2**r,s=gn(r),o=BigInt(r);return{windows:t,windowSize:n,mask:s,maxNumber:i,shiftBy:o}}function Nd(r,e,t){let{windowSize:n,mask:i,maxNumber:s,shiftBy:o}=t,l=Number(r&i),u=r>>o;l>n&&(l-=s,u+=jn);let y=e*n,S=y+Math.abs(l)-1,R=l===0,I=l<0,k=e%2!==0;return{nextN:u,offset:S,isZero:R,isNeg:I,isNegF:k,offsetF:y}}function h0(r,e){if(!Array.isArray(r))throw new Error("array expected");r.forEach((t,n)=>{if(!(t instanceof e))throw new Error("invalid point at index "+n)})}function p0(r,e){if(!Array.isArray(r))throw new Error("array of scalars expected");r.forEach((t,n)=>{if(!e.isValid(t))throw new Error("invalid scalar at index "+n)})}var vc=new WeakMap,Dd=new WeakMap;function _c(r){return Dd.get(r)||1}function Ld(r){if(r!==Si)throw new Error("invalid wNAF")}var Ri=class{constructor(e,t){this.BASE=e.BASE,this.ZERO=e.ZERO,this.Fn=e.Fn,this.bits=t}_unsafeLadder(e,t,n=this.ZERO){let i=e;for(;t>Si;)t&jn&&(n=n.add(i)),i=i.double(),t>>=jn;return n}precomputeWindow(e,t){let{windows:n,windowSize:i}=wc(t,this.bits),s=[],o=e,l=o;for(let u=0;u<n;u++){l=o,s.push(l);for(let y=1;y<i;y++)l=l.add(o),s.push(l);o=l.double()}return s}wNAF(e,t,n){if(!this.Fn.isValid(n))throw new Error("invalid scalar");let i=this.ZERO,s=this.BASE,o=wc(e,this.bits);for(let l=0;l<o.windows;l++){let{nextN:u,offset:y,isZero:S,isNeg:R,isNegF:I,offsetF:k}=Nd(n,l,o);n=u,S?s=s.add(cs(I,t[k])):i=i.add(cs(R,t[y]))}return Ld(n),{p:i,f:s}}wNAFUnsafe(e,t,n,i=this.ZERO){let s=wc(e,this.bits);for(let o=0;o<s.windows&&n!==Si;o++){let{nextN:l,offset:u,isZero:y,isNeg:S}=Nd(n,o,s);if(n=l,!y){let R=t[u];i=i.add(S?R.negate():R)}}return Ld(n),i}getPrecomputes(e,t,n){let i=vc.get(t);return i||(i=this.precomputeWindow(t,e),e!==1&&(typeof n=="function"&&(i=n(i)),vc.set(t,i))),i}cached(e,t,n){let i=_c(e);return this.wNAF(i,this.getPrecomputes(i,e,n),t)}unsafe(e,t,n,i){let s=_c(e);return s===1?this._unsafeLadder(e,t,i):this.wNAFUnsafe(s,this.getPrecomputes(s,e,n),t,i)}createCache(e,t){$d(t,this.bits),Dd.set(e,t),vc.delete(e)}hasCache(e){return _c(e)!==1}};function Ud(r,e,t,n){let i=e,s=r.ZERO,o=r.ZERO;for(;t>Si||n>Si;)t&jn&&(s=s.add(i)),n&jn&&(o=o.add(i)),i=i.double(),t>>=jn,n>>=jn;return{p1:s,p2:o}}function Ai(r,e,t,n){h0(t,r),p0(n,e);let i=t.length,s=n.length;if(i!==s)throw new Error("arrays of points and scalars must have equal length");let o=r.ZERO,l=ro(BigInt(i)),u=1;l>12?u=l-3:l>4?u=l-2:l>0&&(u=2);let y=gn(u),S=new Array(Number(y)+1).fill(o),R=Math.floor((e.BITS-1)/u)*u,I=o;for(let k=R;k>=0;k-=u){S.fill(o);for(let N=0;N<s;N++){let $=n[N],D=Number($>>BigInt(k)&y);S[D]=S[D].add(t[N])}let B=o;for(let N=S.length-1,$=o;N>0;N--)$=$.add(S[N]),B=B.add($);if(I=I.add(B),k!==0)for(let N=0;N<u;N++)I=I.double()}return I}function Md(r,e,t){if(e){if(e.ORDER!==r)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return gc(e),e}else return lr(r,{isLE:t})}function io(r,e,t={},n){if(n===void 0&&(n=r==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${r} CURVE object`);for(let u of["p","n","h"]){let y=e[u];if(!(typeof y=="bigint"&&y>Si))throw new Error(`CURVE.${u} must be positive bigint`)}let i=Md(e.p,t.Fp,n),s=Md(e.n,t.Fn,n),l=["Gx","Gy","a",r==="weierstrass"?"b":"d"];for(let u of l)if(!i.isValid(e[u]))throw new Error(`CURVE.${u} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:i,Fn:s}}var bn=BigInt(0),Bt=BigInt(1),Sc=BigInt(2),m0=BigInt(8);function g0(r,e,t,n){let i=r.sqr(t),s=r.sqr(n),o=r.add(r.mul(e.a,i),s),l=r.add(r.ONE,r.mul(e.d,r.mul(i,s)));return r.eql(o,l)}function y0(r,e={}){let t=io("edwards",r,e,e.FpFnLE),{Fp:n,Fn:i}=t,s=t.CURVE,{h:o}=s;yn(e,{},{uvRatio:"function"});let l=Sc<<BigInt(i.BYTES*8)-Bt,u=$=>n.create($),y=e.uvRatio||(($,D)=>{try{return{isValid:!0,value:n.sqrt(n.div($,D))}}catch{return{isValid:!1,value:bn}}});if(!g0(n,s,s.Gx,s.Gy))throw new Error("bad curve params: generator point");function S($,D,L=!1){let K=L?Bt:bn;return os("coordinate "+$,D,K,l),D}function R($){if(!($ instanceof B))throw new Error("ExtendedPoint expected")}let I=_i(($,D)=>{let{X:L,Y:K,Z:G}=$,ee=$.is0();D==null&&(D=ee?m0:n.inv(G));let Q=u(L*D),te=u(K*D),v=n.mul(G,D);if(ee)return{x:bn,y:Bt};if(v!==Bt)throw new Error("invZ was invalid");return{x:Q,y:te}}),k=_i($=>{let{a:D,d:L}=s;if($.is0())throw new Error("bad point: ZERO");let{X:K,Y:G,Z:ee,T:Q}=$,te=u(K*K),v=u(G*G),w=u(ee*ee),E=u(w*w),P=u(te*D),T=u(w*u(P+v)),p=u(E+u(L*u(te*v)));if(T!==p)throw new Error("bad point: equation left != right (1)");let a=u(K*G),c=u(ee*Q);if(a!==c)throw new Error("bad point: equation left != right (2)");return!0});class B{constructor(D,L,K,G){this.X=S("x",D),this.Y=S("y",L),this.Z=S("z",K,!0),this.T=S("t",G),Object.freeze(this)}static CURVE(){return s}static fromAffine(D){if(D instanceof B)throw new Error("extended point not allowed");let{x:L,y:K}=D||{};return S("x",L),S("y",K),new B(L,K,Bt,u(L*K))}static fromBytes(D,L=!1){let K=n.BYTES,{a:G,d:ee}=s;D=hc(cr(D,K,"point")),qr(L,"zip215");let Q=hc(D),te=D[K-1];Q[K-1]=te&-129;let v=Vr(Q),w=L?l:n.ORDER;os("point.y",v,bn,w);let E=u(v*v),P=u(E-Bt),T=u(ee*E-G),{isValid:p,value:a}=y(P,T);if(!p)throw new Error("bad point: invalid y coordinate");let c=(a&Bt)===Bt,d=(te&128)!==0;if(!L&&a===bn&&d)throw new Error("bad point: x=0 and x_0=1");return d!==c&&(a=u(-a)),B.fromAffine({x:a,y:v})}static fromHex(D,L=!1){return B.fromBytes(Ie("point",D),L)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(D=8,L=!0){return N.createCache(this,D),L||this.multiply(Sc),this}assertValidity(){k(this)}equals(D){R(D);let{X:L,Y:K,Z:G}=this,{X:ee,Y:Q,Z:te}=D,v=u(L*te),w=u(ee*G),E=u(K*te),P=u(Q*G);return v===w&&E===P}is0(){return this.equals(B.ZERO)}negate(){return new B(u(-this.X),this.Y,this.Z,u(-this.T))}double(){let{a:D}=s,{X:L,Y:K,Z:G}=this,ee=u(L*L),Q=u(K*K),te=u(Sc*u(G*G)),v=u(D*ee),w=L+K,E=u(u(w*w)-ee-Q),P=v+Q,T=P-te,p=v-Q,a=u(E*T),c=u(P*p),d=u(E*p),h=u(T*P);return new B(a,c,h,d)}add(D){R(D);let{a:L,d:K}=s,{X:G,Y:ee,Z:Q,T:te}=this,{X:v,Y:w,Z:E,T:P}=D,T=u(G*v),p=u(ee*w),a=u(te*K*P),c=u(Q*E),d=u((G+ee)*(v+w)-T-p),h=c-a,m=c+a,g=u(p-L*T),_=u(d*h),b=u(m*g),f=u(d*g),A=u(h*m);return new B(_,b,A,f)}subtract(D){return this.add(D.negate())}multiply(D){if(!i.isValidNot0(D))throw new Error("invalid scalar: expected 1 <= sc < curve.n");let{p:L,f:K}=N.cached(this,D,G=>jr(B,G));return jr(B,[L,K])[0]}multiplyUnsafe(D,L=B.ZERO){if(!i.isValid(D))throw new Error("invalid scalar: expected 0 <= sc < curve.n");return D===bn?B.ZERO:this.is0()||D===Bt?this:N.unsafe(this,D,K=>jr(B,K),L)}isSmallOrder(){return this.multiplyUnsafe(o).is0()}isTorsionFree(){return N.unsafe(this,s.n).is0()}toAffine(D){return I(this,D)}clearCofactor(){return o===Bt?this:this.multiplyUnsafe(o)}toBytes(){let{x:D,y:L}=this.toAffine(),K=n.toBytes(L);return K[K.length-1]|=D&Bt?128:0,K}toHex(){return hr(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get ex(){return this.X}get ey(){return this.Y}get ez(){return this.Z}get et(){return this.T}static normalizeZ(D){return jr(B,D)}static msm(D,L){return Ai(B,i,D,L)}_setWindowSize(D){this.precompute(D)}toRawBytes(){return this.toBytes()}}B.BASE=new B(s.Gx,s.Gy,Bt,u(s.Gx*s.Gy)),B.ZERO=new B(bn,Bt,Bt,bn),B.Fp=n,B.Fn=i;let N=new Ri(B,i.BITS);return B.BASE.precompute(8),B}var so=class{constructor(e){this.ep=e}static fromBytes(e){pc()}static fromHex(e){pc()}get x(){return this.toAffine().x}get y(){return this.toAffine().y}clearCofactor(){return this}assertValidity(){this.ep.assertValidity()}toAffine(e){return this.ep.toAffine(e)}toHex(){return hr(this.toBytes())}toString(){return this.toHex()}isTorsionFree(){return!0}isSmallOrder(){return!1}add(e){return this.assertSame(e),this.init(this.ep.add(e.ep))}subtract(e){return this.assertSame(e),this.init(this.ep.subtract(e.ep))}multiply(e){return this.init(this.ep.multiply(e))}multiplyUnsafe(e){return this.init(this.ep.multiplyUnsafe(e))}double(){return this.init(this.ep.double())}negate(){return this.init(this.ep.negate())}precompute(e,t){return this.init(this.ep.precompute(e,t))}toRawBytes(){return this.toBytes()}};function b0(r,e,t={}){if(typeof e!="function")throw new Error('"hash" function param is required');yn(t,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",mapToCurve:"function"});let{prehash:n}=t,{BASE:i,Fp:s,Fn:o}=r,l=t.randomBytes||wi,u=t.adjustScalarBytes||(w=>w),y=t.domain||((w,E,P)=>{if(qr(P,"phflag"),E.length||P)throw new Error("Contexts/pre-hash are not supported");return w});function S(w){return o.create(Vr(w))}function R(w){let E=K.secretKey;w=Ie("private key",w,E);let P=Ie("hashed private key",e(w),2*E),T=u(P.slice(0,E)),p=P.slice(E,2*E),a=S(T);return{head:T,prefix:p,scalar:a}}function I(w){let{head:E,prefix:P,scalar:T}=R(w),p=i.multiply(T),a=p.toBytes();return{head:E,prefix:P,scalar:T,point:p,pointBytes:a}}function k(w){return I(w).pointBytes}function B(w=Uint8Array.of(),...E){let P=Zt(...E);return S(e(y(P,Ie("context",w),!!n)))}function N(w,E,P={}){w=Ie("message",w),n&&(w=n(w));let{prefix:T,scalar:p,pointBytes:a}=I(E),c=B(P.context,T,w),d=i.multiply(c).toBytes(),h=B(P.context,d,a,w),m=o.create(c+h*p);if(!o.isValid(m))throw new Error("sign failed: invalid s");let g=Zt(d,o.toBytes(m));return cr(g,K.signature,"result")}let $={zip215:!0};function D(w,E,P,T=$){let{context:p,zip215:a}=T,c=K.signature;w=Ie("signature",w,c),E=Ie("message",E),P=Ie("publicKey",P,K.publicKey),a!==void 0&&qr(a,"zip215"),n&&(E=n(E));let d=c/2,h=w.subarray(0,d),m=Vr(w.subarray(d,c)),g,_,b;try{g=r.fromBytes(P,a),_=r.fromBytes(h,a),b=i.multiplyUnsafe(m)}catch{return!1}if(!a&&g.isSmallOrder())return!1;let f=B(p,_.toBytes(),g.toBytes(),E);return _.add(g.multiplyUnsafe(f)).subtract(b).clearCofactor().is0()}let L=s.BYTES,K={secretKey:L,publicKey:L,signature:2*L,seed:L};function G(w=l(K.seed)){return cr(w,K.seed,"seed")}function ee(w){let E=v.randomSecretKey(w);return{secretKey:E,publicKey:k(E)}}function Q(w){return Kr(w)&&w.length===o.BYTES}function te(w,E){try{return!!r.fromBytes(w,E)}catch{return!1}}let v={getExtendedPublicKey:I,randomSecretKey:G,isValidSecretKey:Q,isValidPublicKey:te,toMontgomery(w){let{y:E}=r.fromBytes(w),P=K.publicKey,T=P===32;if(!T&&P!==57)throw new Error("only defined for 25519 and 448");let p=T?s.div(Bt+E,Bt-E):s.div(E-Bt,E+Bt);return s.toBytes(p)},toMontgomerySecret(w){let E=K.secretKey;cr(w,E);let P=e(w.subarray(0,E));return u(P).subarray(0,E)},randomPrivateKey:G,precompute(w=8,E=r.BASE){return E.precompute(w,!1)}};return Object.freeze({keygen:ee,getPublicKey:k,sign:N,verify:D,utils:v,Point:r,lengths:K})}function w0(r){let e={a:r.a,d:r.d,p:r.Fp.ORDER,n:r.n,h:r.h,Gx:r.Gx,Gy:r.Gy},t=r.Fp,n=lr(e.n,r.nBitLength,!0),i={Fp:t,Fn:n,uvRatio:r.uvRatio},s={randomBytes:r.randomBytes,adjustScalarBytes:r.adjustScalarBytes,domain:r.domain,prehash:r.prehash,mapToCurve:r.mapToCurve};return{CURVE:e,curveOpts:i,hash:r.hash,eddsaOpts:s}}function v0(r,e){let t=e.Point;return Object.assign({},e,{ExtendedPoint:t,CURVE:r,nBitLength:t.Fn.BITS,nByteLength:t.Fn.BYTES})}function zd(r){let{CURVE:e,curveOpts:t,hash:n,eddsaOpts:i}=w0(r),s=y0(e,t),o=b0(s,n,i);return v0(r,o)}var _0=BigInt(0),Yr=BigInt(1),Fd=BigInt(2),CA=BigInt(3),S0=BigInt(5),R0=BigInt(8),Ei=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),ls={p:Ei,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:R0,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function A0(r){let e=BigInt(10),t=BigInt(20),n=BigInt(40),i=BigInt(80),s=Ei,l=r*r%s*r%s,u=Le(l,Fd,s)*l%s,y=Le(u,Yr,s)*r%s,S=Le(y,S0,s)*y%s,R=Le(S,e,s)*S%s,I=Le(R,t,s)*R%s,k=Le(I,n,s)*I%s,B=Le(k,i,s)*k%s,N=Le(B,i,s)*k%s,$=Le(N,e,s)*S%s;return{pow_p_5_8:Le($,Fd,s)*r%s,b2:l}}function E0(r){return r[0]&=248,r[31]&=127,r[31]|=64,r}var Rc=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function kc(r,e){let t=Ei,n=Ke(e*e*e,t),i=Ke(n*n*e,t),s=A0(r*i).pow_p_5_8,o=Ke(r*n*s,t),l=Ke(e*o*o,t),u=o,y=Ke(o*Rc,t),S=l===r,R=l===Ke(-r,t),I=l===Ke(-r*Rc,t);return S&&(o=u),(R||I)&&(o=y),Gr(o,t)&&(o=Ke(-o,t)),{isValid:S||R,value:o}}var wn=lr(ls.p,{isLE:!0}),k0=lr(ls.n,{isLE:!0}),I0={...ls,Fp:wn,hash:wd,adjustScalarBytes:E0,uvRatio:kc},tr=zd(I0);var Ac=Rc,x0=BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"),T0=BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"),O0=BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"),B0=BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"),Kd=r=>kc(Yr,r),C0=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),Ec=r=>tr.Point.Fp.create(Vr(r)&C0);function Hd(r){let{d:e}=ls,t=Ei,n=D=>wn.create(D),i=n(Ac*r*r),s=n((i+Yr)*O0),o=BigInt(-1),l=n((o-e*i)*n(i+e)),{isValid:u,value:y}=kc(s,l),S=n(y*r);Gr(S,t)||(S=n(-S)),u||(y=S),u||(o=i);let R=n(o*(i-Yr)*B0-l),I=y*y,k=n((y+y)*l),B=n(R*x0),N=n(Yr-I),$=n(Yr+I);return new tr.Point(n(k*$),n(N*B),n(B*$),n(k*N))}function P0(r){Nt(r,64);let e=Ec(r.subarray(0,32)),t=Hd(e),n=Ec(r.subarray(32,64)),i=Hd(n);return new Zr(t.add(i))}var Zr=class r extends so{constructor(e){super(e)}static fromAffine(e){return new r(tr.Point.fromAffine(e))}assertSame(e){if(!(e instanceof r))throw new Error("RistrettoPoint expected")}init(e){return new r(e)}static hashToCurve(e){return P0(Ie("ristrettoHash",e,64))}static fromBytes(e){Nt(e,32);let{a:t,d:n}=ls,i=Ei,s=G=>wn.create(G),o=Ec(e);if(!_d(wn.toBytes(o),e)||Gr(o,i))throw new Error("invalid ristretto255 encoding 1");let l=s(o*o),u=s(Yr+t*l),y=s(Yr-t*l),S=s(u*u),R=s(y*y),I=s(t*n*S-R),{isValid:k,value:B}=Kd(s(I*R)),N=s(B*y),$=s(B*N*I),D=s((o+o)*N);Gr(D,i)&&(D=s(-D));let L=s(u*$),K=s(D*L);if(!k||Gr(K,i)||L===_0)throw new Error("invalid ristretto255 encoding 2");return new r(new tr.Point(D,L,Yr,K))}static fromHex(e){return r.fromBytes(Ie("ristrettoHex",e,32))}static msm(e,t){return Ai(r,tr.Point.Fn,e,t)}toBytes(){let{X:e,Y:t,Z:n,T:i}=this.ep,s=Ei,o=$=>wn.create($),l=o(o(n+t)*o(n-t)),u=o(e*t),y=o(u*u),{value:S}=Kd(o(l*y)),R=o(S*l),I=o(S*u),k=o(R*I*i),B;if(Gr(i*k,s)){let $=o(t*Ac),D=o(e*Ac);e=$,t=D,B=o(R*T0)}else B=I;Gr(e*k,s)&&(t=o(-t));let N=o((n-t)*B);return Gr(N,s)&&(N=o(-N)),wn.toBytes(N)}equals(e){this.assertSame(e);let{X:t,Y:n}=this.ep,{X:i,Y:s}=e.ep,o=y=>wn.create(y),l=o(t*s)===o(n*i),u=o(n*s)===o(t*i);return l||u}is0(){return this.equals(r.ZERO)}};Zr.BASE=new Zr(tr.Point.BASE);Zr.ZERO=new Zr(tr.Point.ZERO);Zr.Fp=wn;Zr.Fn=k0;var _l=kt(xc()),Ct=kt(Oc());var us=eo;var $i=kt(nf()),O=kt(Qr()),Th=kt(Qr());var Q0=1,eg=2,tg=3,rg=4,ng=5,ig=6,sg=7,og=8,ag=9,cg=10,lg=-32700,ug=-32603,dg=-32602,fg=-32601,hg=-32600,pg=-32016,mg=-32015,gg=-32014,yg=-32013,bg=-32012,wg=-32011,vg=-32010,_g=-32009,Sg=-32008,Rg=-32007,Ag=-32006,Eg=-32005,kg=-32004,Ig=-32003,xg=-32002,Tg=-32001,Og=28e5,Bg=2800001,Cg=2800002,Pg=2800003,Ng=2800004,Lg=2800005,Mg=2800006,$g=2800007,Dg=2800008,Ug=2800009,zg=2800010,Fg=2800011,Kg=323e4,Hg=32300001,Wg=3230002,qg=3230003,Vg=3230004,Gg=361e4,jg=3610001,Yg=3610002,Zg=3610003,Xg=3610004,Jg=3610005,Qg=3610006,ey=3610007,ty=3611e3,ry=3704e3,ny=3704001,iy=3704002,sy=3704003,oy=3704004,ay=4128e3,cy=4128001,ly=4128002,uy=4615e3,dy=4615001,fy=4615002,hy=4615003,py=4615004,my=4615005,gy=4615006,yy=4615007,by=4615008,wy=4615009,vy=4615010,_y=4615011,Sy=4615012,Ry=4615013,Ay=4615014,Ey=4615015,ky=4615016,Iy=4615017,xy=4615018,Ty=4615019,Oy=4615020,By=4615021,Cy=4615022,Py=4615023,Ny=4615024,Ly=4615025,My=4615026,$y=4615027,Dy=4615028,Uy=4615029,zy=4615030,Fy=4615031,Ky=4615032,Hy=4615033,Wy=4615034,qy=4615035,Vy=4615036,Gy=4615037,jy=4615038,Yy=4615039,Zy=4615040,Xy=4615041,Jy=4615042,Qy=4615043,eb=4615044,tb=4615045,rb=4615046,nb=4615047,ib=4615048,sb=4615049,ob=4615050,ab=4615051,cb=4615052,lb=4615053,ub=4615054,db=5508e3,fb=5508001,hb=5508002,pb=5508003,mb=5508004,gb=5508005,yb=5508006,bb=5508007,wb=5508008,vb=5508009,_b=5508010,Sb=5508011,Rb=5663e3,Ab=5663001,Eb=5663002,kb=5663003,Ib=5663004,xb=5663005,Tb=5663006,Ob=5663007,Bb=5663008,Cb=5663009,Pb=5663010,Nb=5663011,Lb=5663012,Mb=5663013,$b=5663014,Db=5663015,Ub=5663016,zb=5663017,Fb=5663018,Kb=5663019,Hb=5663020,Wb=705e4,qb=7050001,Vb=7050002,Gb=7050003,jb=7050004,Yb=7050005,Zb=7050006,Xb=7050007,Jb=7050008,Qb=7050009,ew=7050010,tw=7050011,rw=7050012,nw=7050013,iw=7050014,sw=7050015,ow=7050016,aw=7050017,cw=7050018,lw=7050019,uw=7050020,dw=7050021,fw=7050022,hw=7050023,pw=7050024,mw=7050025,gw=7050026,yw=7050027,bw=7050028,ww=7050029,vw=7050030,_w=7050031,Sw=7050032,Rw=7050033,Aw=7050034,Ew=7050035,kw=7050036,Uc=8078e3,zc=8078001,sf=8078002,of=8078003,Fc=8078004,Kc=8078005,Hc=8078006,Iw=8078007,xw=8078008,Tw=8078009,Ow=8078010,Wc=8078011,Bw=8078012,af=8078013,cf=8078014,Cw=8078015,Pw=8078016,Nw=8078017,Lw=8078018,Mw=8078019,lf=8078020,uf=8078021,$w=8078022,Dw=81e5,Uw=8100001,zw=8100002,Fw=8100003,Kw=819e4,Hw=8190001,Ww=8190002,qw=8190003,Vw=8190004,Gw=99e5,jw=9900001,Yw=9900002,Zw=9900003,Xw=9900004;function df(r){return Array.isArray(r)?"%5B"+r.map(df).join("%2C%20")+"%5D":typeof r=="bigint"?`${r}n`:encodeURIComponent(String(r!=null&&Object.getPrototypeOf(r)===null?{...r}:r))}function Jw([r,e]){return`${r}=${df(e)}`}function Qw(r){let e=Object.entries(r).map(Jw).join("&");return btoa(e)}var qA={[Kg]:"Account not found at address: $address",[Vg]:"Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",[qg]:"Expected decoded account at address: $address",[Wg]:"Failed to decode account data at address: $address",[Hg]:"Accounts not found at addresses: $addresses",[Ug]:"Unable to find a viable program address bump seed.",[Cg]:"$putativeAddress is not a base58-encoded address.",[Og]:"Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",[Pg]:"The `CryptoKey` must be an `Ed25519` public key.",[Fg]:"$putativeOffCurveAddress is not a base58-encoded off-curve address.",[Dg]:"Invalid seeds; point must fall off the Ed25519 curve.",[Ng]:"Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",[Mg]:"A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",[$g]:"The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",[Lg]:"Expected program derived address bump to be in the range [0, 255], got: $bump.",[zg]:"Program address cannot end with PDA marker.",[Bg]:"Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",[rg]:"Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",[Q0]:"The network has progressed past the last block for which this transaction could have been committed.",[Uc]:"Codec [$codecDescription] cannot decode empty byte arrays.",[$w]:"Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",[lf]:"Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",[Kc]:"Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",[Hc]:"Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",[Fc]:"Encoder and decoder must either both be fixed-size or variable-size.",[xw]:"Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",[sf]:"Expected a fixed-size codec, got a variable-size one.",[af]:"Codec [$codecDescription] expected a positive byte length, got $bytesLength.",[of]:"Expected a variable-size codec, got a fixed-size one.",[Mw]:"Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",[zc]:"Codec [$codecDescription] expected $expected bytes, got $bytesLength.",[Lw]:"Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",[Tw]:"Invalid discriminated union variant. Expected one of [$variants], got $value.",[Ow]:"Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",[Cw]:"Invalid literal union variant. Expected one of [$variants], got $value.",[Iw]:"Expected [$codecDescription] to have $expected items, got $actual.",[Bw]:"Invalid value $value for base $base with alphabet $alphabet.",[Pw]:"Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",[Wc]:"Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",[cf]:"Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",[uf]:"Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",[Nw]:"Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",[ty]:"No random values implementation could be found.",[wy]:"instruction requires an uninitialized account",[Py]:"instruction tries to borrow reference for an account which is already borrowed",[Ny]:"instruction left account with an outstanding borrowed reference",[By]:"program other than the account's owner changed the size of the account data",[my]:"account data too small for instruction",[Cy]:"instruction expected an executable account",[rb]:"An account does not have enough lamports to be rent-exempt",[ib]:"Program arithmetic overflowed",[tb]:"Failed to serialize or deserialize account data: $encodedData",[ub]:"Builtin programs must consume compute units",[Ky]:"Cross-program invocation call depth too deep",[jy]:"Computational budget exceeded",[My]:"custom program error: #$code",[Iy]:"instruction contains duplicate accounts",[Ly]:"instruction modifications of multiply-passed account differ",[zy]:"executable accounts must be rent exempt",[Dy]:"instruction changed executable accounts data",[Uy]:"instruction changed the balance of an executable account",[xy]:"instruction changed executable bit of an account",[Ay]:"instruction modified data of an account it does not own",[Ry]:"instruction spent from the balance of an account it does not own",[dy]:"generic instruction error",[ob]:"Provided owner is not allowed",[Qy]:"Account is immutable",[eb]:"Incorrect authority provided",[yy]:"incorrect program id for instruction",[gy]:"insufficient funds for instruction",[py]:"invalid account data for instruction",[nb]:"Invalid account owner",[fy]:"invalid program argument",[$y]:"program returned invalid error code",[hy]:"invalid instruction data",[Gy]:"Failed to reallocate account data",[Vy]:"Provided seeds do not result in a valid address",[ab]:"Accounts data allocations exceeded the maximum allowed per transaction",[cb]:"Max accounts exceeded",[lb]:"Max instruction trace length exceeded",[qy]:"Length of the seed is too long for address generation",[Hy]:"An account required by the instruction is missing",[by]:"missing required signature for instruction",[Sy]:"instruction illegally modified the program id of an account",[Oy]:"insufficient account keys for instruction",[Yy]:"Cross-program invocation with unauthorized signer or writable account",[Zy]:"Failed to create program execution environment",[Jy]:"Program failed to compile",[Xy]:"Program failed to complete",[ky]:"instruction modified data of a read-only account",[Ey]:"instruction changed the balance of a read-only account",[Wy]:"Cross-program invocation reentrancy not allowed for this instruction",[Ty]:"instruction modified rent epoch of an account",[_y]:"sum of account balances before and after instruction do not match",[vy]:"instruction requires an initialized account",[uy]:"",[Fy]:"Unsupported program id",[sb]:"Unsupported sysvar",[ay]:"The instruction does not have any accounts.",[cy]:"The instruction does not have any data.",[ly]:"Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",[ng]:"Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",[eg]:"The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",[Yw]:"Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",[Xw]:"Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",[jw]:"Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",[Gw]:"Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",[Zw]:"Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",[ug]:"JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",[dg]:"JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",[hg]:"JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",[fg]:"JSON-RPC error: The method does not exist / is not available ($__serverMessage)",[lg]:"JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",[bg]:"$__serverMessage",[Tg]:"$__serverMessage",[kg]:"$__serverMessage",[gg]:"$__serverMessage",[vg]:"$__serverMessage",[_g]:"$__serverMessage",[pg]:"Minimum context slot has not been reached",[Eg]:"Node is unhealthy; behind by $numSlotsBehind slots",[Sg]:"No snapshot",[xg]:"Transaction simulation failed",[Rg]:"$__serverMessage",[wg]:"Transaction history is not available from this node",[Ag]:"$__serverMessage",[yg]:"Transaction signature length mismatch",[Ig]:"Transaction signature verification failure",[mg]:"$__serverMessage",[ry]:"Key pair bytes must be of length 64, got $byteLength.",[ny]:"Expected private key bytes with length 32. Actual length: $actualLength.",[iy]:"Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",[oy]:"The provided private key does not match the provided public key.",[sy]:"Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",[ig]:"Lamports value must be in the range [0, 2e64-1]",[sg]:"`$value` cannot be parsed as a `BigInt`",[cg]:"$message",[og]:"`$value` cannot be parsed as a `Number`",[tg]:"No nonce account could be found at address `$nonceAccountAddress`",[Kw]:"The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",[Ww]:"WebSocket was closed before payload could be added to the send buffer",[qw]:"WebSocket connection closed",[Vw]:"WebSocket failed to connect",[Hw]:"Failed to obtain a subscription id from the server",[Fw]:"Could not find an API plan for RPC method: `$method`",[Dw]:"The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",[zw]:"HTTP error ($statusCode): $message",[Uw]:"HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",[db]:"Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",[fb]:"The provided value does not implement the `KeyPairSigner` interface",[pb]:"The provided value does not implement the `MessageModifyingSigner` interface",[mb]:"The provided value does not implement the `MessagePartialSigner` interface",[hb]:"The provided value does not implement any of the `MessageSigner` interfaces",[yb]:"The provided value does not implement the `TransactionModifyingSigner` interface",[bb]:"The provided value does not implement the `TransactionPartialSigner` interface",[wb]:"The provided value does not implement the `TransactionSendingSigner` interface",[gb]:"The provided value does not implement any of the `TransactionSigner` interfaces",[vb]:"More than one `TransactionSendingSigner` was identified.",[_b]:"No `TransactionSendingSigner` was identified. Please provide a valid `TransactionWithSingleSendingSigner` transaction.",[Sb]:"Wallet account signers do not support signing multiple messages/transactions in a single operation",[ey]:"Cannot export a non-extractable key.",[jg]:"No digest implementation could be found.",[Gg]:"Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",[Yg]:`This runtime does not support the generation of Ed25519 key pairs.

Install @solana/webcrypto-ed25519-polyfill and call its \`install\` function before generating keys in environments that do not support Ed25519.

For a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.`,[Zg]:"No signature verification implementation could be found.",[Xg]:"No key generation implementation could be found.",[Jg]:"No signing implementation could be found.",[Qg]:"No key export implementation could be found.",[ag]:"Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",[ow]:"Transaction processing left an account with an outstanding borrowed reference",[qb]:"Account in use",[Vb]:"Account loaded twice",[Gb]:"Attempt to debit an account but found no record of a prior credit.",[hw]:"Transaction loads an address table account that doesn't exist",[Xb]:"This transaction has already been processed",[Jb]:"Blockhash not found",[Qb]:"Loader call chain is too deep",[sw]:"Transactions are currently disabled due to cluster maintenance",[vw]:"Transaction contains a duplicate instruction ($index) that is not allowed",[Yb]:"Insufficient funds for fee",[_w]:"Transaction results in an account ($accountIndex) with insufficient funds for rent",[Zb]:"This account may not be used to pay transaction fees",[tw]:"Transaction contains an invalid account reference",[mw]:"Transaction loads an address table account with invalid data",[gw]:"Transaction address table lookup uses an invalid index",[pw]:"Transaction loads an address table account with an invalid owner",[Rw]:"LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",[nw]:"This program may not be used for executing instructions",[yw]:"Transaction leaves an account with a lower balance than rent-exempt minimum",[lw]:"Transaction loads a writable account that cannot be written",[Sw]:"Transaction exceeded max loaded accounts data size cap",[ew]:"Transaction requires a fee but has no signature present",[jb]:"Attempt to load a program that does not exist",[Ew]:"Execution of the program referenced by account at index $accountIndex is temporarily restricted.",[Aw]:"ResanitizationNeeded",[iw]:"Transaction failed to sanitize accounts offsets correctly",[rw]:"Transaction did not pass signature verification",[fw]:"Transaction locked too many accounts",[kw]:"Sum of account balances before and after transaction do not match",[Wb]:"The transaction failed with the error `$errorName`",[cw]:"Transaction version is unsupported",[dw]:"Transaction would exceed account data limit within the block",[ww]:"Transaction would exceed total account data limit",[uw]:"Transaction would exceed max account limit within the block",[aw]:"Transaction would exceed max Block Cost Limit",[bw]:"Transaction would exceed max Vote Cost Limit",[Db]:"Attempted to sign a transaction with an address that is not a signer for it",[Pb]:"Transaction is missing an address at index: $index.",[Ub]:"Transaction has no expected signers therefore it cannot be encoded",[Hb]:"Transaction size $transactionSize exceeds limit of $transactionSizeLimit bytes",[Eb]:"Transaction does not have a blockhash lifetime",[kb]:"Transaction is not a durable nonce transaction",[xb]:"Contents of these address lookup tables unknown: $lookupTableAddresses",[Tb]:"Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",[Bb]:"No fee payer set in CompiledTransaction",[Ob]:"Could not find program address at index $index",[Fb]:"Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",[Kb]:"Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",[Nb]:"Transaction is missing a fee payer.",[Lb]:"Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",[$b]:"Transaction first instruction is not advance nonce account instruction.",[Mb]:"Transaction with no instructions cannot be durable nonce transaction.",[Rb]:"This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",[Ab]:"This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",[zb]:"The transaction message expected the transaction to have $signerAddressesLength signatures, got $signaturesLength.",[Cb]:"Transaction is missing signatures for addresses: $addresses.",[Ib]:"Transaction version must be in the range [0, 127]. `$actualVersion` given"};function ev(r,e={}){{let t=`Solana error #${r}; Decode this error by running \`npx @solana/errors decode -- ${r}`;return Object.keys(e).length&&(t+=` '${Qw(e)}'`),`${t}\``}}var Sn=class extends Error{cause=this.cause;context;constructor(...[r,e]){let t,n;if(e){let{cause:s,...o}=e;s&&(n={cause:s}),Object.keys(o).length>0&&(t=o)}let i=ev(r,t);super(i,n),this.context={__code:r,...t},this.name="SolanaError"}};function tv(r,e){return"fixedSize"in e?e.fixedSize:e.getSizeFromValue(r)}function ff(r){return Object.freeze({...r,encode:e=>{let t=new Uint8Array(tv(e,r));return r.write(e,t,0),t}})}function hf(r){return Object.freeze({...r,decode:(e,t=0)=>r.read(e,t)[0]})}function Oi(r){return"fixedSize"in r&&typeof r.fixedSize=="number"}function pf(r,e){if(Oi(r)!==Oi(e))throw new Sn(Fc);if(Oi(r)&&Oi(e)&&r.fixedSize!==e.fixedSize)throw new Sn(Kc,{decoderFixedSize:e.fixedSize,encoderFixedSize:r.fixedSize});if(!Oi(r)&&!Oi(e)&&r.maxSize!==e.maxSize)throw new Sn(Hc,{decoderMaxSize:e.maxSize,encoderMaxSize:r.maxSize});return{...e,...r,decode:e.decode,encode:r.encode,read:e.read,write:r.write}}function mf(r,e,t=0){if(e.length-t<=0)throw new Sn(Uc,{codecDescription:r})}function gf(r,e,t,n=0){let i=t.length-n;if(i<e)throw new Sn(zc,{bytesLength:i,codecDescription:r,expected:e})}function rv(r,e,t,n){if(n<e||n>t)throw new Sn(Wc,{codecDescription:r,max:t,min:e,value:n})}function yf(r){return r?.endian!==1}function nv(r){return ff({fixedSize:r.size,write(e,t,n){r.range&&rv(r.name,r.range[0],r.range[1],e);let i=new ArrayBuffer(r.size);return r.set(new DataView(i),e,yf(r.config)),t.set(new Uint8Array(i),n),n+r.size}})}function iv(r){return hf({fixedSize:r.size,read(e,t=0){mf(r.name,e,t),gf(r.name,r.size,e,t);let n=new DataView(sv(e,t,r.size));return[r.get(n,yf(r.config)),t+r.size]}})}function sv(r,e,t){let n=r.byteOffset+(e??0),i=t??r.byteLength;return r.buffer.slice(n,n+i)}var qc=(r={})=>nv({config:r,name:"u64",range:[0n,BigInt("0xffffffffffffffff")],set:(e,t,n)=>e.setBigUint64(0,BigInt(t),n),size:8}),ov=(r={})=>iv({config:r,get:(e,t)=>e.getBigUint64(0,t),name:"u64",size:8}),bf=(r={})=>pf(qc(r),ov(r));var Vc=class extends TypeError{constructor(e,t){let n,{message:i,explanation:s,...o}=e,{path:l}=e,u=l.length===0?i:`At path: ${l.join(".")} -- ${i}`;super(s??u),s!=null&&(this.cause=u),Object.assign(this,o),this.name=this.constructor.name,this.failures=()=>n??(n=[e,...t()])}};function av(r){return gs(r)&&typeof r[Symbol.iterator]=="function"}function gs(r){return typeof r=="object"&&r!=null}function No(r){return gs(r)&&!Array.isArray(r)}function Er(r){return typeof r=="symbol"?r.toString():typeof r=="string"?JSON.stringify(r):`${r}`}function cv(r){let{done:e,value:t}=r.next();return e?void 0:t}function lv(r,e,t,n){if(r===!0)return;r===!1?r={}:typeof r=="string"&&(r={message:r});let{path:i,branch:s}=e,{type:o}=t,{refinement:l,message:u=`Expected a value of type \`${o}\`${l?` with refinement \`${l}\``:""}, but received: \`${Er(n)}\``}=r;return{value:n,type:o,refinement:l,key:i[i.length-1],path:i,branch:s,...r,message:u}}function*wf(r,e,t,n){av(r)||(r=[r]);for(let i of r){let s=lv(i,e,t,n);s&&(yield s)}}function*Gc(r,e,t={}){let{path:n=[],branch:i=[r],coerce:s=!1,mask:o=!1}=t,l={path:n,branch:i,mask:o};s&&(r=e.coercer(r,l));let u="valid";for(let y of e.validator(r,l))y.explanation=t.message,u="not_valid",yield[y,void 0];for(let[y,S,R]of e.entries(r,l)){let I=Gc(S,R,{path:y===void 0?n:[...n,y],branch:y===void 0?i:[...i,S],coerce:s,mask:o,message:t.message});for(let k of I)k[0]?(u=k[0].refinement!=null?"not_refined":"not_valid",yield[k[0],void 0]):s&&(S=k[1],y===void 0?r=S:r instanceof Map?r.set(y,S):r instanceof Set?r.add(S):gs(r)&&(S!==void 0||y in r)&&(r[y]=S))}if(u!=="not_valid")for(let y of e.refiner(r,l))y.explanation=t.message,u="not_refined",yield[y,void 0];u==="valid"&&(yield[void 0,r])}var pr=class{constructor(e){let{type:t,schema:n,validator:i,refiner:s,coercer:o=u=>u,entries:l=function*(){}}=e;this.type=t,this.schema=n,this.entries=l,this.coercer=o,i?this.validator=(u,y)=>{let S=i(u,y);return wf(S,y,this,u)}:this.validator=()=>[],s?this.refiner=(u,y)=>{let S=s(u,y);return wf(S,y,this,u)}:this.refiner=()=>[]}assert(e,t){return vf(e,this,t)}create(e,t){return Y(e,this,t)}is(e){return _f(e,this)}mask(e,t){return uv(e,this,t)}validate(e,t={}){return ys(e,this,t)}};function vf(r,e,t){let n=ys(r,e,{message:t});if(n[0])throw n[0]}function Y(r,e,t){let n=ys(r,e,{coerce:!0,message:t});if(n[0])throw n[0];return n[1]}function uv(r,e,t){let n=ys(r,e,{coerce:!0,mask:!0,message:t});if(n[0])throw n[0];return n[1]}function _f(r,e){return!ys(r,e)[0]}function ys(r,e,t={}){let n=Gc(r,e,t),i=cv(n);return i[0]?[new Vc(i[0],function*(){for(let o of n)o[0]&&(yield o[0])}),void 0]:[void 0,i[1]]}function Jn(r,e){return new pr({type:r,schema:null,validator:e})}function Sf(){return Jn("any",()=>!0)}function X(r){return new pr({type:"array",schema:r,*entries(e){if(r&&Array.isArray(e))for(let[t,n]of e.entries())yield[t,n,r]},coercer(e){return Array.isArray(e)?e.slice():e},validator(e){return Array.isArray(e)||`Expected an array value, but received: ${Er(e)}`}})}function kr(){return Jn("boolean",r=>typeof r=="boolean")}function Lo(r){return Jn("instance",e=>e instanceof r||`Expected a \`${r.name}\` instance, but received: ${Er(e)}`)}function Me(r){let e=Er(r),t=typeof r;return new pr({type:"literal",schema:t==="string"||t==="number"||t==="boolean"?r:null,validator(n){return n===r||`Expected the literal \`${e}\`, but received: ${Er(n)}`}})}function dv(){return Jn("never",()=>!1)}function J(r){return new pr({...r,validator:(e,t)=>e===null||r.validator(e,t),refiner:(e,t)=>e===null||r.refiner(e,t)})}function M(){return Jn("number",r=>typeof r=="number"&&!isNaN(r)||`Expected a number, but received: ${Er(r)}`)}function ie(r){return new pr({...r,validator:(e,t)=>e===void 0||r.validator(e,t),refiner:(e,t)=>e===void 0||r.refiner(e,t)})}function jc(r,e){return new pr({type:"record",schema:null,*entries(t){if(gs(t))for(let n in t){let i=t[n];yield[n,n,r],yield[n,i,e]}},validator(t){return No(t)||`Expected an object, but received: ${Er(t)}`},coercer(t){return No(t)?{...t}:t}})}function j(){return Jn("string",r=>typeof r=="string"||`Expected a string, but received: ${Er(r)}`)}function Mo(r){let e=dv();return new pr({type:"tuple",schema:null,*entries(t){if(Array.isArray(t)){let n=Math.max(r.length,t.length);for(let i=0;i<n;i++)yield[i,t[i],r[i]||e]}},validator(t){return Array.isArray(t)||`Expected an array, but received: ${Er(t)}`},coercer(t){return Array.isArray(t)?t.slice():t}})}function q(r){let e=Object.keys(r);return new pr({type:"type",schema:r,*entries(t){if(gs(t))for(let n of e)yield[n,t[n],r[n]]},validator(t){return No(t)||`Expected an object, but received: ${Er(t)}`},coercer(t){return No(t)?{...t}:t}})}function Ut(r){let e=r.map(t=>t.type).join(" | ");return new pr({type:"union",schema:null,coercer(t,n){for(let i of r){let[s,o]=i.validate(t,{coerce:!0,mask:n.mask});if(!s)return o}return t},validator(t,n){let i=[];for(let s of r){let[...o]=Gc(t,s,n),[l]=o;if(l[0])for(let[u]of o)u&&i.push(u);else return[]}return[`Expected the value to satisfy a union of \`${e}\`, but received: ${Er(t)}`,...i]}})}function Qn(){return Jn("unknown",()=>!0)}function Bi(r,e,t){return new pr({...r,coercer:(n,i)=>_f(n,e)?r.coercer(t(n,i),i):r.coercer(n,i)})}var Oh=kt(Vf());var Yf=kt(un(),1);var Ho=kt(jf(),1);var $v=class extends Ho.default{socket;constructor(r,e){super(),this.socket=new window.WebSocket(r,e.protocols),this.socket.onopen=()=>this.emit("open"),this.socket.onmessage=t=>this.emit("message",t.data),this.socket.onerror=t=>this.emit("error",t),this.socket.onclose=t=>{this.emit("close",t.code,t.reason)}}send(r,e,t){let n=t||e;try{this.socket.send(r),n()}catch(i){n(i)}}close(r,e){this.socket.close(r,e)}addEventListener(r,e,t){this.socket.addEventListener(r,e,t)}};function Zf(r,e){return new $v(r,e)}var Dv=class{encode(r){return JSON.stringify(r)}decode(r){return JSON.parse(r)}},Xf=class extends Ho.default{address;rpc_id;queue;options;autoconnect;ready;reconnect;reconnect_timer_id;reconnect_interval;max_reconnects;rest_options;current_reconnects;generate_request_id;socket;webSocketFactory;dataPack;constructor(r,e="ws://localhost:8080",{autoconnect:t=!0,reconnect:n=!0,reconnect_interval:i=1e3,max_reconnects:s=5,...o}={},l,u){super(),this.webSocketFactory=r,this.queue={},this.rpc_id=0,this.address=e,this.autoconnect=t,this.ready=!1,this.reconnect=n,this.reconnect_timer_id=void 0,this.reconnect_interval=i,this.max_reconnects=s,this.rest_options=o,this.current_reconnects=0,this.generate_request_id=l||(()=>typeof this.rpc_id=="number"?++this.rpc_id:Number(this.rpc_id)+1),u?this.dataPack=u:this.dataPack=new Dv,this.autoconnect&&this._connect(this.address,{autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects,...this.rest_options})}connect(){this.socket||this._connect(this.address,{autoconnect:this.autoconnect,reconnect:this.reconnect,reconnect_interval:this.reconnect_interval,max_reconnects:this.max_reconnects,...this.rest_options})}call(r,e,t,n){return!n&&typeof t=="object"&&(n=t,t=null),new Promise((i,s)=>{if(!this.ready)return s(new Error("socket not ready"));let o=this.generate_request_id(r,e),l={jsonrpc:"2.0",method:r,params:e||void 0,id:o};this.socket.send(this.dataPack.encode(l),n,u=>{if(u)return s(u);this.queue[o]={promise:[i,s]},t&&(this.queue[o].timeout=setTimeout(()=>{delete this.queue[o],s(new Error("reply timeout"))},t))})})}async login(r){let e=await this.call("rpc.login",r);if(!e)throw new Error("authentication failed");return e}async listMethods(){return await this.call("__listMethods")}notify(r,e){return new Promise((t,n)=>{if(!this.ready)return n(new Error("socket not ready"));let i={jsonrpc:"2.0",method:r,params:e};this.socket.send(this.dataPack.encode(i),s=>{if(s)return n(s);t()})})}async subscribe(r){typeof r=="string"&&(r=[r]);let e=await this.call("rpc.on",r);if(typeof r=="string"&&e[r]!=="ok")throw new Error("Failed subscribing to an event '"+r+"' with: "+e[r]);return e}async unsubscribe(r){typeof r=="string"&&(r=[r]);let e=await this.call("rpc.off",r);if(typeof r=="string"&&e[r]!=="ok")throw new Error("Failed unsubscribing from an event with: "+e);return e}close(r,e){this.socket&&this.socket.close(r||1e3,e)}setAutoReconnect(r){this.reconnect=r}setReconnectInterval(r){this.reconnect_interval=r}setMaxReconnects(r){this.max_reconnects=r}getCurrentReconnects(){return this.current_reconnects}getMaxReconnects(){return this.max_reconnects}isReconnecting(){return this.reconnect_timer_id!==void 0}willReconnect(){return this.reconnect&&(this.max_reconnects===0||this.current_reconnects<this.max_reconnects)}_connect(r,e){clearTimeout(this.reconnect_timer_id),this.socket=this.webSocketFactory(r,e),this.socket.addEventListener("open",()=>{this.ready=!0,this.emit("open"),this.current_reconnects=0}),this.socket.addEventListener("message",({data:t})=>{t instanceof ArrayBuffer&&(t=Yf.Buffer.from(t).toString());try{t=this.dataPack.decode(t)}catch{return}if(t.notification&&this.listeners(t.notification).length){if(!Object.keys(t.params).length)return this.emit(t.notification);let n=[t.notification];if(t.params.constructor===Object)n.push(t.params);else for(let i=0;i<t.params.length;i++)n.push(t.params[i]);return Promise.resolve().then(()=>{this.emit.apply(this,n)})}if(!this.queue[t.id])return t.method?Promise.resolve().then(()=>{this.emit(t.method,t?.params)}):void 0;"error"in t=="result"in t&&this.queue[t.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),this.queue[t.id].timeout&&clearTimeout(this.queue[t.id].timeout),t.error?this.queue[t.id].promise[1](t.error):this.queue[t.id].promise[0](t.result),delete this.queue[t.id]}),this.socket.addEventListener("error",t=>this.emit("error",t)),this.socket.addEventListener("close",({code:t,reason:n})=>{this.ready&&setTimeout(()=>this.emit("close",t,n),0),this.ready=!1,this.socket=void 0,t!==1e3&&(this.current_reconnects++,this.reconnect&&(this.max_reconnects>this.current_reconnects||this.max_reconnects===0)?this.reconnect_timer_id=setTimeout(()=>this._connect(r,e),this.reconnect_interval):this.reconnect&&this.max_reconnects>0&&this.current_reconnects>=this.max_reconnects&&setTimeout(()=>this.emit("max_reconnects_reached",t,n),1))})}};var Uv=BigInt(0),Rs=BigInt(1),zv=BigInt(2),Fv=BigInt(7),Kv=BigInt(256),Hv=BigInt(113),eh=[],th=[],rh=[];for(let r=0,e=Rs,t=1,n=0;r<24;r++){[t,n]=[n,(2*t+3*n)%5],eh.push(2*(5*n+t)),th.push((r+1)*(r+2)/2%64);let i=Uv;for(let s=0;s<7;s++)e=(e<<Rs^(e>>Fv)*Hv)%Kv,e&zv&&(i^=Rs<<(Rs<<BigInt(s))-Rs);rh.push(i)}var nh=Js(rh,!0),Wv=nh[0],qv=nh[1],Jf=(r,e,t)=>t>32?ud(r,e,t):cd(r,e,t),Qf=(r,e,t)=>t>32?dd(r,e,t):ld(r,e,t);function Vv(r,e=24){let t=new Uint32Array(10);for(let n=24-e;n<24;n++){for(let o=0;o<10;o++)t[o]=r[o]^r[o+10]^r[o+20]^r[o+30]^r[o+40];for(let o=0;o<10;o+=2){let l=(o+8)%10,u=(o+2)%10,y=t[u],S=t[u+1],R=Jf(y,S,1)^t[l],I=Qf(y,S,1)^t[l+1];for(let k=0;k<50;k+=10)r[o+k]^=R,r[o+k+1]^=I}let i=r[2],s=r[3];for(let o=0;o<24;o++){let l=th[o],u=Jf(i,s,l),y=Qf(i,s,l),S=eh[o];i=r[S],s=r[S+1],r[S]=u,r[S+1]=y}for(let o=0;o<50;o+=10){for(let l=0;l<10;l++)t[l]=r[o+l];for(let l=0;l<10;l++)r[o+l]^=~t[(l+2)%10]&t[(l+4)%10]}r[0]^=Wv[n],r[1]^=qv[n]}fr(t)}var sl=class r extends fn{constructor(e,t,n,i=!1,s=24){if(super(),this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,this.enableXOF=!1,this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=i,this.rounds=s,dn(n),!(0<e&&e<200))throw new Error("only keccak-f1600 function is supported");this.state=new Uint8Array(200),this.state32=nd(this.state)}clone(){return this._cloneInto()}keccak(){ic(this.state32),Vv(this.state32,this.rounds),ic(this.state32),this.posOut=0,this.pos=0}update(e){Hr(this),e=Wn(e),Nt(e);let{blockLen:t,state:n}=this,i=e.length;for(let s=0;s<i;){let o=Math.min(t-this.pos,i-s);for(let l=0;l<o;l++)n[this.pos++]^=e[s++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:n,blockLen:i}=this;e[n]^=t,(t&128)!==0&&n===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){Hr(this,!1),Nt(e),this.finish();let t=this.state,{blockLen:n}=this;for(let i=0,s=e.length;i<s;){this.posOut>=n&&this.keccak();let o=Math.min(n-this.posOut,s-i);e.set(t.subarray(this.posOut,this.posOut+o),i),this.posOut+=o,i+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return dn(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Ys(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,fr(this.state)}_cloneInto(e){let{blockLen:t,suffix:n,outputLen:i,rounds:s,enableXOF:o}=this;return e||(e=new r(t,n,i,o,s)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=s,e.suffix=n,e.outputLen=i,e.enableXOF=o,e.destroyed=this.destroyed,e}},Gv=(r,e,t)=>ts(()=>new sl(e,r,t));var ol=Gv(1,136,256/8);var Wo=class extends fn{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,js(e);let n=Wn(t);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let i=this.blockLen,s=new Uint8Array(i);s.set(n.length>i?e.create().update(n).digest():n);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=e.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),fr(s)}update(e){return Hr(this),this.iHash.update(e),this}digestInto(e){Hr(this),Nt(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:t,iHash:n,finished:i,destroyed:s,blockLen:o,outputLen:l}=this;return e=e,e.finished=i,e.destroyed=s,e.blockLen=o,e.outputLen=l,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},al=(r,e,t)=>new Wo(r,e).update(t).digest();al.create=(r,e)=>new Wo(r,e);var ih=(r,e)=>(r+(r>=0?e:-e)/sh)/e;function jv(r,e,t){let[[n,i],[s,o]]=e,l=ih(o*r,t),u=ih(-i*r,t),y=r-l*n-u*s,S=-l*i-u*o,R=y<tn,I=S<tn;R&&(y=-y),I&&(S=-S);let k=gn(Math.ceil(ro(t)/2))+Pi;if(y<tn||y>=k||S<tn||S>=k)throw new Error("splitScalar (endomorphism): failed, k="+r);return{k1neg:R,k1:y,k2neg:I,k2:S}}function ll(r){if(!["compact","recovered","der"].includes(r))throw new Error('Signature format must be "compact", "recovered", or "der"');return r}function cl(r,e){let t={};for(let n of Object.keys(e))t[n]=r[n]===void 0?e[n]:r[n];return qr(t.lowS,"lowS"),qr(t.prehash,"prehash"),t.format!==void 0&&ll(t.format),t}var ul=class extends Error{constructor(e=""){super(e)}},en={Err:ul,_tlv:{encode:(r,e)=>{let{Err:t}=en;if(r<0||r>256)throw new t("tlv.encode: wrong tag");if(e.length&1)throw new t("tlv.encode: unpadded data");let n=e.length/2,i=ss(n);if(i.length/2&128)throw new t("tlv.encode: long form length too big");let s=n>127?ss(i.length/2|128):"";return ss(r)+s+i+e},decode(r,e){let{Err:t}=en,n=0;if(r<0||r>256)throw new t("tlv.encode: wrong tag");if(e.length<2||e[n++]!==r)throw new t("tlv.decode: wrong tlv");let i=e[n++],s=!!(i&128),o=0;if(!s)o=i;else{let u=i&127;if(!u)throw new t("tlv.decode(long): indefinite length not supported");if(u>4)throw new t("tlv.decode(long): byte length is too big");let y=e.subarray(n,n+u);if(y.length!==u)throw new t("tlv.decode: length bytes not complete");if(y[0]===0)throw new t("tlv.decode(long): zero leftmost byte");for(let S of y)o=o<<8|S;if(n+=u,o<128)throw new t("tlv.decode(long): not minimal encoding")}let l=e.subarray(n,n+o);if(l.length!==o)throw new t("tlv.decode: wrong value length");return{v:l,l:e.subarray(n+o)}}},_int:{encode(r){let{Err:e}=en;if(r<tn)throw new e("integer: negative integers are not allowed");let t=ss(r);if(Number.parseInt(t[0],16)&8&&(t="00"+t),t.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return t},decode(r){let{Err:e}=en;if(r[0]&128)throw new e("invalid signature integer: negative");if(r[0]===0&&!(r[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return vi(r)}},toSig(r){let{Err:e,_int:t,_tlv:n}=en,i=Ie("signature",r),{v:s,l:o}=n.decode(48,i);if(o.length)throw new e("invalid signature: left bytes after parsing");let{v:l,l:u}=n.decode(2,s),{v:y,l:S}=n.decode(2,u);if(S.length)throw new e("invalid signature: left bytes after parsing");return{r:t.decode(l),s:t.decode(y)}},hexFromSig(r){let{_tlv:e,_int:t}=en,n=e.encode(2,t.encode(r.r)),i=e.encode(2,t.encode(r.s)),s=n+i;return e.encode(48,s)}},tn=BigInt(0),Pi=BigInt(1),sh=BigInt(2),qo=BigInt(3),Yv=BigInt(4);function Ci(r,e){let{BYTES:t}=r,n;if(typeof e=="bigint")n=e;else{let i=Ie("private key",e);try{n=r.fromBytes(i)}catch{throw new Error(`invalid private key: expected ui8a of size ${t}, got ${typeof e}`)}}if(!r.isValidNot0(n))throw new Error("invalid private key: out of range [1..N-1]");return n}function Zv(r,e={}){let t=io("weierstrass",r,e),{Fp:n,Fn:i}=t,s=t.CURVE,{h:o,n:l}=s;yn(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});let{endo:u}=e;if(u&&(!n.is0(s.a)||typeof u.beta!="bigint"||!Array.isArray(u.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');let y=ah(n,i);function S(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function R(T,p,a){let{x:c,y:d}=p.toAffine(),h=n.toBytes(c);if(qr(a,"isCompressed"),a){S();let m=!n.isOdd(d);return Zt(oh(m),h)}else return Zt(Uint8Array.of(4),h,n.toBytes(d))}function I(T){cr(T,void 0,"Point");let{publicKey:p,publicKeyUncompressed:a}=y,c=T.length,d=T[0],h=T.subarray(1);if(c===p&&(d===2||d===3)){let m=n.fromBytes(h);if(!n.isValid(m))throw new Error("bad point: is not on curve, wrong x");let g=N(m),_;try{_=n.sqrt(g)}catch(A){let H=A instanceof Error?": "+A.message:"";throw new Error("bad point: is not on curve, sqrt error"+H)}S();let b=n.isOdd(_);return(d&1)===1!==b&&(_=n.neg(_)),{x:m,y:_}}else if(c===a&&d===4){let m=n.BYTES,g=n.fromBytes(h.subarray(0,m)),_=n.fromBytes(h.subarray(m,m*2));if(!$(g,_))throw new Error("bad point: is not on curve");return{x:g,y:_}}else throw new Error(`bad point: got length ${c}, expected compressed=${p} or uncompressed=${a}`)}let k=e.toBytes||R,B=e.fromBytes||I;function N(T){let p=n.sqr(T),a=n.mul(p,T);return n.add(n.add(a,n.mul(T,s.a)),s.b)}function $(T,p){let a=n.sqr(p),c=N(T);return n.eql(a,c)}if(!$(s.Gx,s.Gy))throw new Error("bad curve params: generator point");let D=n.mul(n.pow(s.a,qo),Yv),L=n.mul(n.sqr(s.b),BigInt(27));if(n.is0(n.add(D,L)))throw new Error("bad curve params: a or b");function K(T,p,a=!1){if(!n.isValid(p)||a&&n.is0(p))throw new Error(`bad point coordinate ${T}`);return p}function G(T){if(!(T instanceof w))throw new Error("ProjectivePoint expected")}function ee(T){if(!u||!u.basises)throw new Error("no endo");return jv(T,u.basises,i.ORDER)}let Q=_i((T,p)=>{let{X:a,Y:c,Z:d}=T;if(n.eql(d,n.ONE))return{x:a,y:c};let h=T.is0();p==null&&(p=h?n.ONE:n.inv(d));let m=n.mul(a,p),g=n.mul(c,p),_=n.mul(d,p);if(h)return{x:n.ZERO,y:n.ZERO};if(!n.eql(_,n.ONE))throw new Error("invZ was invalid");return{x:m,y:g}}),te=_i(T=>{if(T.is0()){if(e.allowInfinityPoint&&!n.is0(T.Y))return;throw new Error("bad point: ZERO")}let{x:p,y:a}=T.toAffine();if(!n.isValid(p)||!n.isValid(a))throw new Error("bad point: x or y not field elements");if(!$(p,a))throw new Error("bad point: equation left != right");if(!T.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function v(T,p,a,c,d){return a=new w(n.mul(a.X,T),a.Y,a.Z),p=cs(c,p),a=cs(d,a),p.add(a)}class w{constructor(p,a,c){this.X=K("x",p),this.Y=K("y",a,!0),this.Z=K("z",c),Object.freeze(this)}static CURVE(){return s}static fromAffine(p){let{x:a,y:c}=p||{};if(!p||!n.isValid(a)||!n.isValid(c))throw new Error("invalid affine point");if(p instanceof w)throw new Error("projective point not allowed");return n.is0(a)&&n.is0(c)?w.ZERO:new w(a,c,n.ONE)}static fromBytes(p){let a=w.fromAffine(B(cr(p,void 0,"point")));return a.assertValidity(),a}static fromHex(p){return w.fromBytes(Ie("pointHex",p))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(p=8,a=!0){return P.createCache(this,p),a||this.multiply(qo),this}assertValidity(){te(this)}hasEvenY(){let{y:p}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(p)}equals(p){G(p);let{X:a,Y:c,Z:d}=this,{X:h,Y:m,Z:g}=p,_=n.eql(n.mul(a,g),n.mul(h,d)),b=n.eql(n.mul(c,g),n.mul(m,d));return _&&b}negate(){return new w(this.X,n.neg(this.Y),this.Z)}double(){let{a:p,b:a}=s,c=n.mul(a,qo),{X:d,Y:h,Z:m}=this,g=n.ZERO,_=n.ZERO,b=n.ZERO,f=n.mul(d,d),A=n.mul(h,h),H=n.mul(m,m),F=n.mul(d,h);return F=n.add(F,F),b=n.mul(d,m),b=n.add(b,b),g=n.mul(p,b),_=n.mul(c,H),_=n.add(g,_),g=n.sub(A,_),_=n.add(A,_),_=n.mul(g,_),g=n.mul(F,g),b=n.mul(c,b),H=n.mul(p,H),F=n.sub(f,H),F=n.mul(p,F),F=n.add(F,b),b=n.add(f,f),f=n.add(b,f),f=n.add(f,H),f=n.mul(f,F),_=n.add(_,f),H=n.mul(h,m),H=n.add(H,H),f=n.mul(H,F),g=n.sub(g,f),b=n.mul(H,A),b=n.add(b,b),b=n.add(b,b),new w(g,_,b)}add(p){G(p);let{X:a,Y:c,Z:d}=this,{X:h,Y:m,Z:g}=p,_=n.ZERO,b=n.ZERO,f=n.ZERO,A=s.a,H=n.mul(s.b,qo),F=n.mul(a,h),W=n.mul(c,m),Z=n.mul(d,g),oe=n.add(a,c),se=n.add(h,m);oe=n.mul(oe,se),se=n.add(F,W),oe=n.sub(oe,se),se=n.add(a,d);let ke=n.add(h,g);return se=n.mul(se,ke),ke=n.add(F,Z),se=n.sub(se,ke),ke=n.add(c,d),_=n.add(m,g),ke=n.mul(ke,_),_=n.add(W,Z),ke=n.sub(ke,_),f=n.mul(A,se),_=n.mul(H,Z),f=n.add(_,f),_=n.sub(W,f),f=n.add(W,f),b=n.mul(_,f),W=n.add(F,F),W=n.add(W,F),Z=n.mul(A,Z),se=n.mul(H,se),W=n.add(W,Z),Z=n.sub(F,Z),Z=n.mul(A,Z),se=n.add(se,Z),F=n.mul(W,se),b=n.add(b,F),F=n.mul(ke,se),_=n.mul(oe,_),_=n.sub(_,F),F=n.mul(oe,W),f=n.mul(ke,f),f=n.add(f,F),new w(_,b,f)}subtract(p){return this.add(p.negate())}is0(){return this.equals(w.ZERO)}multiply(p){let{endo:a}=e;if(!i.isValidNot0(p))throw new Error("invalid scalar: out of range");let c,d,h=m=>P.cached(this,m,g=>jr(w,g));if(a){let{k1neg:m,k1:g,k2neg:_,k2:b}=ee(p),{p:f,f:A}=h(g),{p:H,f:F}=h(b);d=A.add(F),c=v(a.beta,f,H,m,_)}else{let{p:m,f:g}=h(p);c=m,d=g}return jr(w,[c,d])[0]}multiplyUnsafe(p){let{endo:a}=e,c=this;if(!i.isValid(p))throw new Error("invalid scalar: out of range");if(p===tn||c.is0())return w.ZERO;if(p===Pi)return c;if(P.hasCache(this))return this.multiply(p);if(a){let{k1neg:d,k1:h,k2neg:m,k2:g}=ee(p),{p1:_,p2:b}=Ud(w,c,h,g);return v(a.beta,_,b,d,m)}else return P.unsafe(c,p)}multiplyAndAddUnsafe(p,a,c){let d=this.multiplyUnsafe(a).add(p.multiplyUnsafe(c));return d.is0()?void 0:d}toAffine(p){return Q(this,p)}isTorsionFree(){let{isTorsionFree:p}=e;return o===Pi?!0:p?p(w,this):P.unsafe(this,l).is0()}clearCofactor(){let{clearCofactor:p}=e;return o===Pi?this:p?p(w,this):this.multiplyUnsafe(o)}isSmallOrder(){return this.multiplyUnsafe(o).is0()}toBytes(p=!0){return qr(p,"isCompressed"),this.assertValidity(),k(w,this,p)}toHex(p=!0){return hr(this.toBytes(p))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}toRawBytes(p=!0){return this.toBytes(p)}_setWindowSize(p){this.precompute(p)}static normalizeZ(p){return jr(w,p)}static msm(p,a){return Ai(w,i,p,a)}static fromPrivateKey(p){return w.BASE.multiply(Ci(i,p))}}w.BASE=new w(s.Gx,s.Gy,n.ONE),w.ZERO=new w(n.ZERO,n.ONE,n.ZERO),w.Fp=n,w.Fn=i;let E=i.BITS,P=new Ri(w,e.endo?Math.ceil(E/2):E);return w.BASE.precompute(8),w}function oh(r){return Uint8Array.of(r?2:3)}function ah(r,e){return{secretKey:e.BYTES,publicKey:1+r.BYTES,publicKeyUncompressed:1+2*r.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}function Xv(r,e={}){let{Fn:t}=r,n=e.randomBytes||wi,i=Object.assign(ah(r.Fp,t),{seed:yc(t.ORDER)});function s(k){try{return!!Ci(t,k)}catch{return!1}}function o(k,B){let{publicKey:N,publicKeyUncompressed:$}=i;try{let D=k.length;return B===!0&&D!==N||B===!1&&D!==$?!1:!!r.fromBytes(k)}catch{return!1}}function l(k=n(i.seed)){return bc(cr(k,i.seed,"seed"),t.ORDER)}function u(k,B=!0){return r.BASE.multiply(Ci(t,k)).toBytes(B)}function y(k){let B=l(k);return{secretKey:B,publicKey:u(B)}}function S(k){if(typeof k=="bigint")return!1;if(k instanceof r)return!0;let{secretKey:B,publicKey:N,publicKeyUncompressed:$}=i;if(t.allowedLengths||B===N)return;let D=Ie("key",k).length;return D===N||D===$}function R(k,B,N=!0){if(S(k)===!0)throw new Error("first arg must be private key");if(S(B)===!1)throw new Error("second arg must be public key");let $=Ci(t,k);return r.fromHex(B).multiply($).toBytes(N)}return Object.freeze({getPublicKey:u,getSharedSecret:R,keygen:y,Point:r,utils:{isValidSecretKey:s,isValidPublicKey:o,randomSecretKey:l,isValidPrivateKey:s,randomPrivateKey:l,normPrivateKeyToScalar:k=>Ci(t,k),precompute(k=8,B=r.BASE){return B.precompute(k,!1)}},lengths:i})}function Jv(r,e,t={}){js(e),yn(t,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});let n=t.randomBytes||wi,i=t.hmac||((a,...c)=>al(e,a,Zt(...c))),{Fp:s,Fn:o}=r,{ORDER:l,BITS:u}=o,{keygen:y,getPublicKey:S,getSharedSecret:R,utils:I,lengths:k}=Xv(r,t),B={prehash:!1,lowS:typeof t.lowS=="boolean"?t.lowS:!1,format:void 0,extraEntropy:!1},N="compact";function $(a){let c=l>>Pi;return a>c}function D(a,c){if(!o.isValidNot0(c))throw new Error(`invalid signature ${a}: out of range 1..Point.Fn.ORDER`);return c}function L(a,c){ll(c);let d=k.signature,h=c==="compact"?d:c==="recovered"?d+1:void 0;return cr(a,h,`${c} signature`)}class K{constructor(c,d,h){this.r=D("r",c),this.s=D("s",d),h!=null&&(this.recovery=h),Object.freeze(this)}static fromBytes(c,d=N){L(c,d);let h;if(d==="der"){let{r:b,s:f}=en.toSig(cr(c));return new K(b,f)}d==="recovered"&&(h=c[0],d="compact",c=c.subarray(1));let m=o.BYTES,g=c.subarray(0,m),_=c.subarray(m,m*2);return new K(o.fromBytes(g),o.fromBytes(_),h)}static fromHex(c,d){return this.fromBytes(Hn(c),d)}addRecoveryBit(c){return new K(this.r,this.s,c)}recoverPublicKey(c){let d=s.ORDER,{r:h,s:m,recovery:g}=this;if(g==null||![0,1,2,3].includes(g))throw new Error("recovery id invalid");if(l*sh<d&&g>1)throw new Error("recovery id is ambiguous for h>1 curve");let b=g===2||g===3?h+l:h;if(!s.isValid(b))throw new Error("recovery id 2 or 3 invalid");let f=s.toBytes(b),A=r.fromBytes(Zt(oh((g&1)===0),f)),H=o.inv(b),F=ee(Ie("msgHash",c)),W=o.create(-F*H),Z=o.create(m*H),oe=r.BASE.multiplyUnsafe(W).add(A.multiplyUnsafe(Z));if(oe.is0())throw new Error("point at infinify");return oe.assertValidity(),oe}hasHighS(){return $(this.s)}toBytes(c=N){if(ll(c),c==="der")return Hn(en.hexFromSig(this));let d=o.toBytes(this.r),h=o.toBytes(this.s);if(c==="recovered"){if(this.recovery==null)throw new Error("recovery bit must be present");return Zt(Uint8Array.of(this.recovery),d,h)}return Zt(d,h)}toHex(c){return hr(this.toBytes(c))}assertValidity(){}static fromCompact(c){return K.fromBytes(Ie("sig",c),"compact")}static fromDER(c){return K.fromBytes(Ie("sig",c),"der")}normalizeS(){return this.hasHighS()?new K(this.r,o.neg(this.s),this.recovery):this}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return hr(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return hr(this.toBytes("compact"))}}let G=t.bits2int||function(c){if(c.length>8192)throw new Error("input is too large");let d=vi(c),h=c.length*8-u;return h>0?d>>BigInt(h):d},ee=t.bits2int_modN||function(c){return o.create(G(c))},Q=gn(u);function te(a){return os("num < 2^"+u,a,tn,Q),o.toBytes(a)}function v(a,c){return cr(a,void 0,"message"),c?cr(e(a),void 0,"prehashed message"):a}function w(a,c,d){if(["recovered","canonical"].some(W=>W in d))throw new Error("sign() legacy options not supported");let{lowS:h,prehash:m,extraEntropy:g}=cl(d,B);a=v(a,m);let _=ee(a),b=Ci(o,c),f=[te(b),te(_)];if(g!=null&&g!==!1){let W=g===!0?n(k.secretKey):g;f.push(Ie("extraEntropy",W))}let A=Zt(...f),H=_;function F(W){let Z=G(W);if(!o.isValidNot0(Z))return;let oe=o.inv(Z),se=r.BASE.multiply(Z).toAffine(),ke=o.create(se.x);if(ke===tn)return;let fe=o.create(oe*o.create(H+ke*b));if(fe===tn)return;let Se=(se.x===ke?0:2)|Number(se.y&Pi),xt=fe;return h&&$(fe)&&(xt=o.neg(fe),Se^=1),new K(ke,xt,Se)}return{seed:A,k2sig:F}}function E(a,c,d={}){a=Ie("message",a);let{seed:h,k2sig:m}=w(a,c,d);return Rd(e.outputLen,o.BYTES,i)(h,m)}function P(a){let c,d=typeof a=="string"||Kr(a),h=!d&&a!==null&&typeof a=="object"&&typeof a.r=="bigint"&&typeof a.s=="bigint";if(!d&&!h)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(h)c=new K(a.r,a.s);else if(d){try{c=K.fromBytes(Ie("sig",a),"der")}catch(m){if(!(m instanceof en.Err))throw m}if(!c)try{c=K.fromBytes(Ie("sig",a),"compact")}catch{return!1}}return c||!1}function T(a,c,d,h={}){let{lowS:m,prehash:g,format:_}=cl(h,B);if(d=Ie("publicKey",d),c=v(Ie("message",c),g),"strict"in h)throw new Error("options.strict was renamed to lowS");let b=_===void 0?P(a):K.fromBytes(Ie("sig",a),_);if(b===!1)return!1;try{let f=r.fromBytes(d);if(m&&b.hasHighS())return!1;let{r:A,s:H}=b,F=ee(c),W=o.inv(H),Z=o.create(F*W),oe=o.create(A*W),se=r.BASE.multiplyUnsafe(Z).add(f.multiplyUnsafe(oe));return se.is0()?!1:o.create(se.x)===A}catch{return!1}}function p(a,c,d={}){let{prehash:h}=cl(d,B);return c=v(c,h),K.fromBytes(a,"recovered").recoverPublicKey(c).toBytes()}return Object.freeze({keygen:y,getPublicKey:S,getSharedSecret:R,utils:I,lengths:k,Point:r,sign:E,verify:T,recoverPublicKey:p,Signature:K,hash:e})}function Qv(r){let e={a:r.a,b:r.b,p:r.Fp.ORDER,n:r.n,h:r.h,Gx:r.Gx,Gy:r.Gy},t=r.Fp,n=r.allowedPrivateKeyLengths?Array.from(new Set(r.allowedPrivateKeyLengths.map(o=>Math.ceil(o/2)))):void 0,i=lr(e.n,{BITS:r.nBitLength,allowedLengths:n,modFromBytes:r.wrapPrivateKey}),s={Fp:t,Fn:i,allowInfinityPoint:r.allowInfinityPoint,endo:r.endo,isTorsionFree:r.isTorsionFree,clearCofactor:r.clearCofactor,fromBytes:r.fromBytes,toBytes:r.toBytes};return{CURVE:e,curveOpts:s}}function e_(r){let{CURVE:e,curveOpts:t}=Qv(r),n={hmac:r.hmac,randomBytes:r.randomBytes,lowS:r.lowS,bits2int:r.bits2int,bits2int_modN:r.bits2int_modN};return{CURVE:e,curveOpts:t,hash:r.hash,ecdsaOpts:n}}function t_(r,e){let t=e.Point;return Object.assign({},e,{ProjectivePoint:t,CURVE:Object.assign({},r,no(t.Fn.ORDER,t.Fn.BITS))})}function ch(r){let{CURVE:e,curveOpts:t,hash:n,ecdsaOpts:i}=e_(r),s=Zv(e,t),o=Jv(s,n,i);return t_(r,o)}function lh(r,e){let t=n=>ch({...r,hash:n});return{...t(e),create:t}}var fl={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},r_={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]};var uh=BigInt(2);function n_(r){let e=fl.p,t=BigInt(3),n=BigInt(6),i=BigInt(11),s=BigInt(22),o=BigInt(23),l=BigInt(44),u=BigInt(88),y=r*r*r%e,S=y*y*r%e,R=Le(S,t,e)*S%e,I=Le(R,t,e)*S%e,k=Le(I,uh,e)*y%e,B=Le(k,i,e)*k%e,N=Le(B,s,e)*B%e,$=Le(N,l,e)*N%e,D=Le($,u,e)*$%e,L=Le(D,l,e)*N%e,K=Le(L,t,e)*S%e,G=Le(K,o,e)*B%e,ee=Le(G,n,e)*y%e,Q=Le(ee,uh,e);if(!dl.eql(dl.sqr(Q),r))throw new Error("Cannot find square root");return Q}var dl=lr(fl.p,{sqrt:n_}),Vo=lh({...fl,Fp:dl,lowS:!0,endo:r_},eo);var yk=tr.utils.randomPrivateKey,dh=()=>{let r=tr.utils.randomPrivateKey(),e=Sl(r),t=new Uint8Array(64);return t.set(r),t.set(e,32),{publicKey:e,secretKey:t}},Sl=tr.getPublicKey;function fh(r){try{return tr.ExtendedPoint.fromHex(r),!0}catch{return!1}}var Bh=(r,e)=>tr.sign(r,e.slice(0,32)),i_=tr.verify,we=r=>ae.Buffer.isBuffer(r)?r:r instanceof Uint8Array?ae.Buffer.from(r.buffer,r.byteOffset,r.byteLength):ae.Buffer.from(r),Rl=class{constructor(e){Object.assign(this,e)}encode(){return ae.Buffer.from((0,$i.serialize)(Yo,this))}static decode(e){return(0,$i.deserialize)(Yo,this,e)}static decodeUnchecked(e){return(0,$i.deserializeUnchecked)(Yo,this,e)}};var Yo=new Map,Ch,s_=32,xn=32;function o_(r){return r._bn!==void 0}var hh=1,V=class r extends Rl{constructor(e){if(super({}),this._bn=void 0,o_(e))this._bn=e._bn;else{if(typeof e=="string"){let t=Ct.default.decode(e);if(t.length!=xn)throw new Error("Invalid public key input");this._bn=new _l.default(t)}else this._bn=new _l.default(e);if(this._bn.byteLength()>xn)throw new Error("Invalid public key input")}}static unique(){let e=new r(hh);return hh+=1,new r(e.toBuffer())}equals(e){return this._bn.eq(e._bn)}toBase58(){return Ct.default.encode(this.toBytes())}toJSON(){return this.toBase58()}toBytes(){let e=this.toBuffer();return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}toBuffer(){let e=this._bn.toArrayLike(ae.Buffer);if(e.length===xn)return e;let t=ae.Buffer.alloc(32);return e.copy(t,32-e.length),t}get[Symbol.toStringTag](){return`PublicKey(${this.toString()})`}toString(){return this.toBase58()}static async createWithSeed(e,t,n){let i=ae.Buffer.concat([e.toBuffer(),ae.Buffer.from(t),n.toBuffer()]),s=us(i);return new r(s)}static createProgramAddressSync(e,t){let n=ae.Buffer.alloc(0);e.forEach(function(s){if(s.length>s_)throw new TypeError("Max seed length exceeded");n=ae.Buffer.concat([n,we(s)])}),n=ae.Buffer.concat([n,t.toBuffer(),ae.Buffer.from("ProgramDerivedAddress")]);let i=us(n);if(fh(i))throw new Error("Invalid seeds, address must fall off the curve");return new r(i)}static async createProgramAddress(e,t){return this.createProgramAddressSync(e,t)}static findProgramAddressSync(e,t){let n=255,i;for(;n!=0;){try{let s=e.concat(ae.Buffer.from([n]));i=this.createProgramAddressSync(s,t)}catch(s){if(s instanceof TypeError)throw s;n--;continue}return[i,n]}throw new Error("Unable to find a viable program address nonce")}static async findProgramAddress(e,t){return this.findProgramAddressSync(e,t)}static isOnCurve(e){let t=new r(e);return fh(t.toBytes())}};Ch=V;V.default=new Ch("11111111111111111111111111111111");Yo.set(V,{kind:"struct",fields:[["_bn","u256"]]});var bk=new V("BPFLoader1111111111111111111111111111111111"),ri=1232,Ph=127,Nh=64,Zo=class extends Error{constructor(e){super(`Signature ${e} has expired: block height exceeded.`),this.signature=void 0,this.signature=e}};Object.defineProperty(Zo.prototype,"name",{value:"TransactionExpiredBlockheightExceededError"});var Xo=class extends Error{constructor(e,t){super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`),this.signature=void 0,this.signature=e}};Object.defineProperty(Xo.prototype,"name",{value:"TransactionExpiredTimeoutError"});var ti=class extends Error{constructor(e){super(`Signature ${e} has expired: the nonce is no longer valid.`),this.signature=void 0,this.signature=e}};Object.defineProperty(ti.prototype,"name",{value:"TransactionExpiredNonceInvalidError"});var Li=class{constructor(e,t){this.staticAccountKeys=void 0,this.accountKeysFromLookups=void 0,this.staticAccountKeys=e,this.accountKeysFromLookups=t}keySegments(){let e=[this.staticAccountKeys];return this.accountKeysFromLookups&&(e.push(this.accountKeysFromLookups.writable),e.push(this.accountKeysFromLookups.readonly)),e}get(e){for(let t of this.keySegments()){if(e<t.length)return t[e];e-=t.length}}get length(){return this.keySegments().flat().length}compileInstructions(e){if(this.length>256)throw new Error("Account index overflow encountered during compilation");let n=new Map;this.keySegments().flat().forEach((s,o)=>{n.set(s.toBase58(),o)});let i=s=>{let o=n.get(s.toBase58());if(o===void 0)throw new Error("Encountered an unknown instruction account key during compilation");return o};return e.map(s=>({programIdIndex:i(s.programId),accountKeyIndexes:s.keys.map(o=>i(o.pubkey)),data:s.data}))}},me=(r="publicKey")=>O.blob(32,r);var Ni=(r="string")=>{let e=O.struct([O.u32("length"),O.u32("lengthPadding"),O.blob(O.offset(O.u32(),-8),"chars")],r),t=e.decode.bind(e),n=e.encode.bind(e),i=e;return i.decode=(s,o)=>t(s,o).chars.toString(),i.encode=(s,o,l)=>{let u={chars:ae.Buffer.from(s,"utf8")};return n(u,o,l)},i.alloc=s=>O.u32().span+O.u32().span+ae.Buffer.from(s,"utf8").length,i},a_=(r="authorized")=>O.struct([me("staker"),me("withdrawer")],r),c_=(r="lockup")=>O.struct([O.ns64("unixTimestamp"),O.ns64("epoch"),me("custodian")],r),l_=(r="voteInit")=>O.struct([me("nodePubkey"),me("authorizedVoter"),me("authorizedWithdrawer"),O.u8("commission")],r),u_=(r="voteAuthorizeWithSeedArgs")=>O.struct([O.u32("voteAuthorizationType"),me("currentAuthorityDerivedKeyOwnerPubkey"),Ni("currentAuthorityDerivedKeySeed"),me("newAuthorized")],r);function Lh(r,e){let t=i=>{if(i.span>=0)return i.span;if(typeof i.alloc=="function")return i.alloc(e[i.property]);if("count"in i&&"elementLayout"in i){let s=e[i.property];if(Array.isArray(s))return s.length*t(i.elementLayout)}else if("fields"in i)return Lh({layout:i},e[i.property]);return 0},n=0;return r.layout.fields.forEach(i=>{n+=t(i)}),n}function gr(r){let e=0,t=0;for(;;){let n=r.shift();if(e|=(n&127)<<t*7,t+=1,(n&128)===0)break}return e}function yr(r,e){let t=e;for(;;){let n=t&127;if(t>>=7,t==0){r.push(n);break}else n|=128,r.push(n)}}function Ce(r,e){if(!r)throw new Error(e||"Assertion failed")}var Jo=class r{constructor(e,t){this.payer=void 0,this.keyMetaMap=void 0,this.payer=e,this.keyMetaMap=t}static compile(e,t){let n=new Map,i=o=>{let l=o.toBase58(),u=n.get(l);return u===void 0&&(u={isSigner:!1,isWritable:!1,isInvoked:!1},n.set(l,u)),u},s=i(t);s.isSigner=!0,s.isWritable=!0;for(let o of e){i(o.programId).isInvoked=!0;for(let l of o.keys){let u=i(l.pubkey);u.isSigner||=l.isSigner,u.isWritable||=l.isWritable}}return new r(t,n)}getMessageComponents(){let e=[...this.keyMetaMap.entries()];Ce(e.length<=256,"Max static account keys length exceeded");let t=e.filter(([,u])=>u.isSigner&&u.isWritable),n=e.filter(([,u])=>u.isSigner&&!u.isWritable),i=e.filter(([,u])=>!u.isSigner&&u.isWritable),s=e.filter(([,u])=>!u.isSigner&&!u.isWritable),o={numRequiredSignatures:t.length+n.length,numReadonlySignedAccounts:n.length,numReadonlyUnsignedAccounts:s.length};{Ce(t.length>0,"Expected at least one writable signer key");let[u]=t[0];Ce(u===this.payer.toBase58(),"Expected first writable signer key to be the fee payer")}let l=[...t.map(([u])=>new V(u)),...n.map(([u])=>new V(u)),...i.map(([u])=>new V(u)),...s.map(([u])=>new V(u))];return[o,l]}extractTableLookup(e){let[t,n]=this.drainKeysFoundInLookupTable(e.state.addresses,o=>!o.isSigner&&!o.isInvoked&&o.isWritable),[i,s]=this.drainKeysFoundInLookupTable(e.state.addresses,o=>!o.isSigner&&!o.isInvoked&&!o.isWritable);if(!(t.length===0&&i.length===0))return[{accountKey:e.key,writableIndexes:t,readonlyIndexes:i},{writable:n,readonly:s}]}drainKeysFoundInLookupTable(e,t){let n=new Array,i=new Array;for(let[s,o]of this.keyMetaMap.entries())if(t(o)){let l=new V(s),u=e.findIndex(y=>y.equals(l));u>=0&&(Ce(u<256,"Max lookup table index exceeded"),n.push(u),i.push(l),this.keyMetaMap.delete(s))}return[n,i]}},Mh="Reached end of buffer unexpectedly";function nn(r){if(r.length===0)throw new Error(Mh);return r.shift()}function br(r,...e){let[t]=e;if(e.length===2?t+(e[1]??0)>r.length:t>=r.length)throw new Error(Mh);return r.splice(...e)}var ni=class r{constructor(e){this.header=void 0,this.accountKeys=void 0,this.recentBlockhash=void 0,this.instructions=void 0,this.indexToProgramIds=new Map,this.header=e.header,this.accountKeys=e.accountKeys.map(t=>new V(t)),this.recentBlockhash=e.recentBlockhash,this.instructions=e.instructions,this.instructions.forEach(t=>this.indexToProgramIds.set(t.programIdIndex,this.accountKeys[t.programIdIndex]))}get version(){return"legacy"}get staticAccountKeys(){return this.accountKeys}get compiledInstructions(){return this.instructions.map(e=>({programIdIndex:e.programIdIndex,accountKeyIndexes:e.accounts,data:Ct.default.decode(e.data)}))}get addressTableLookups(){return[]}getAccountKeys(){return new Li(this.staticAccountKeys)}static compile(e){let t=Jo.compile(e.instructions,e.payerKey),[n,i]=t.getMessageComponents(),o=new Li(i).compileInstructions(e.instructions).map(l=>({programIdIndex:l.programIdIndex,accounts:l.accountKeyIndexes,data:Ct.default.encode(l.data)}));return new r({header:n,accountKeys:i,recentBlockhash:e.recentBlockhash,instructions:o})}isAccountSigner(e){return e<this.header.numRequiredSignatures}isAccountWritable(e){let t=this.header.numRequiredSignatures;if(e>=this.header.numRequiredSignatures){let n=e-t,s=this.accountKeys.length-t-this.header.numReadonlyUnsignedAccounts;return n<s}else{let n=t-this.header.numReadonlySignedAccounts;return e<n}}isProgramId(e){return this.indexToProgramIds.has(e)}programIds(){return[...this.indexToProgramIds.values()]}nonProgramIds(){return this.accountKeys.filter((e,t)=>!this.isProgramId(t))}serialize(){let e=this.accountKeys.length,t=[];yr(t,e);let n=this.instructions.map(R=>{let{accounts:I,programIdIndex:k}=R,B=Array.from(Ct.default.decode(R.data)),N=[];yr(N,I.length);let $=[];return yr($,B.length),{programIdIndex:k,keyIndicesCount:ae.Buffer.from(N),keyIndices:I,dataLength:ae.Buffer.from($),data:B}}),i=[];yr(i,n.length);let s=ae.Buffer.alloc(ri);ae.Buffer.from(i).copy(s);let o=i.length;n.forEach(R=>{let k=O.struct([O.u8("programIdIndex"),O.blob(R.keyIndicesCount.length,"keyIndicesCount"),O.seq(O.u8("keyIndex"),R.keyIndices.length,"keyIndices"),O.blob(R.dataLength.length,"dataLength"),O.seq(O.u8("userdatum"),R.data.length,"data")]).encode(R,s,o);o+=k}),s=s.slice(0,o);let l=O.struct([O.blob(1,"numRequiredSignatures"),O.blob(1,"numReadonlySignedAccounts"),O.blob(1,"numReadonlyUnsignedAccounts"),O.blob(t.length,"keyCount"),O.seq(me("key"),e,"keys"),me("recentBlockhash")]),u={numRequiredSignatures:ae.Buffer.from([this.header.numRequiredSignatures]),numReadonlySignedAccounts:ae.Buffer.from([this.header.numReadonlySignedAccounts]),numReadonlyUnsignedAccounts:ae.Buffer.from([this.header.numReadonlyUnsignedAccounts]),keyCount:ae.Buffer.from(t),keys:this.accountKeys.map(R=>we(R.toBytes())),recentBlockhash:Ct.default.decode(this.recentBlockhash)},y=ae.Buffer.alloc(2048),S=l.encode(u,y);return s.copy(y,S),y.slice(0,S+s.length)}static from(e){let t=[...e],n=nn(t);if(n!==(n&Ph))throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");let i=nn(t),s=nn(t),o=gr(t),l=[];for(let I=0;I<o;I++){let k=br(t,0,xn);l.push(new V(ae.Buffer.from(k)))}let u=br(t,0,xn),y=gr(t),S=[];for(let I=0;I<y;I++){let k=nn(t),B=gr(t),N=br(t,0,B),$=gr(t),D=br(t,0,$),L=Ct.default.encode(ae.Buffer.from(D));S.push({programIdIndex:k,accounts:N,data:L})}let R={header:{numRequiredSignatures:n,numReadonlySignedAccounts:i,numReadonlyUnsignedAccounts:s},recentBlockhash:Ct.default.encode(ae.Buffer.from(u)),accountKeys:l,instructions:S};return new r(R)}},Al=class r{constructor(e){this.header=void 0,this.staticAccountKeys=void 0,this.recentBlockhash=void 0,this.compiledInstructions=void 0,this.addressTableLookups=void 0,this.header=e.header,this.staticAccountKeys=e.staticAccountKeys,this.recentBlockhash=e.recentBlockhash,this.compiledInstructions=e.compiledInstructions,this.addressTableLookups=e.addressTableLookups}get version(){return 0}get numAccountKeysFromLookups(){let e=0;for(let t of this.addressTableLookups)e+=t.readonlyIndexes.length+t.writableIndexes.length;return e}getAccountKeys(e){let t;if(e&&"accountKeysFromLookups"in e&&e.accountKeysFromLookups){if(this.numAccountKeysFromLookups!=e.accountKeysFromLookups.writable.length+e.accountKeysFromLookups.readonly.length)throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");t=e.accountKeysFromLookups}else if(e&&"addressLookupTableAccounts"in e&&e.addressLookupTableAccounts)t=this.resolveAddressTableLookups(e.addressLookupTableAccounts);else if(this.addressTableLookups.length>0)throw new Error("Failed to get account keys because address table lookups were not resolved");return new Li(this.staticAccountKeys,t)}isAccountSigner(e){return e<this.header.numRequiredSignatures}isAccountWritable(e){let t=this.header.numRequiredSignatures,n=this.staticAccountKeys.length;if(e>=n){let i=e-n,s=this.addressTableLookups.reduce((o,l)=>o+l.writableIndexes.length,0);return i<s}else if(e>=this.header.numRequiredSignatures){let i=e-t,o=n-t-this.header.numReadonlyUnsignedAccounts;return i<o}else{let i=t-this.header.numReadonlySignedAccounts;return e<i}}resolveAddressTableLookups(e){let t={writable:[],readonly:[]};for(let n of this.addressTableLookups){let i=e.find(s=>s.key.equals(n.accountKey));if(!i)throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);for(let s of n.writableIndexes)if(s<i.state.addresses.length)t.writable.push(i.state.addresses[s]);else throw new Error(`Failed to find address for index ${s} in address lookup table ${n.accountKey.toBase58()}`);for(let s of n.readonlyIndexes)if(s<i.state.addresses.length)t.readonly.push(i.state.addresses[s]);else throw new Error(`Failed to find address for index ${s} in address lookup table ${n.accountKey.toBase58()}`)}return t}static compile(e){let t=Jo.compile(e.instructions,e.payerKey),n=new Array,i={writable:new Array,readonly:new Array},s=e.addressLookupTableAccounts||[];for(let S of s){let R=t.extractTableLookup(S);if(R!==void 0){let[I,{writable:k,readonly:B}]=R;n.push(I),i.writable.push(...k),i.readonly.push(...B)}}let[o,l]=t.getMessageComponents(),y=new Li(l,i).compileInstructions(e.instructions);return new r({header:o,staticAccountKeys:l,recentBlockhash:e.recentBlockhash,compiledInstructions:y,addressTableLookups:n})}serialize(){let e=Array();yr(e,this.staticAccountKeys.length);let t=this.serializeInstructions(),n=Array();yr(n,this.compiledInstructions.length);let i=this.serializeAddressTableLookups(),s=Array();yr(s,this.addressTableLookups.length);let o=O.struct([O.u8("prefix"),O.struct([O.u8("numRequiredSignatures"),O.u8("numReadonlySignedAccounts"),O.u8("numReadonlyUnsignedAccounts")],"header"),O.blob(e.length,"staticAccountKeysLength"),O.seq(me(),this.staticAccountKeys.length,"staticAccountKeys"),me("recentBlockhash"),O.blob(n.length,"instructionsLength"),O.blob(t.length,"serializedInstructions"),O.blob(s.length,"addressTableLookupsLength"),O.blob(i.length,"serializedAddressTableLookups")]),l=new Uint8Array(ri),y=o.encode({prefix:128,header:this.header,staticAccountKeysLength:new Uint8Array(e),staticAccountKeys:this.staticAccountKeys.map(S=>S.toBytes()),recentBlockhash:Ct.default.decode(this.recentBlockhash),instructionsLength:new Uint8Array(n),serializedInstructions:t,addressTableLookupsLength:new Uint8Array(s),serializedAddressTableLookups:i},l);return l.slice(0,y)}serializeInstructions(){let e=0,t=new Uint8Array(ri);for(let n of this.compiledInstructions){let i=Array();yr(i,n.accountKeyIndexes.length);let s=Array();yr(s,n.data.length);let o=O.struct([O.u8("programIdIndex"),O.blob(i.length,"encodedAccountKeyIndexesLength"),O.seq(O.u8(),n.accountKeyIndexes.length,"accountKeyIndexes"),O.blob(s.length,"encodedDataLength"),O.blob(n.data.length,"data")]);e+=o.encode({programIdIndex:n.programIdIndex,encodedAccountKeyIndexesLength:new Uint8Array(i),accountKeyIndexes:n.accountKeyIndexes,encodedDataLength:new Uint8Array(s),data:n.data},t,e)}return t.slice(0,e)}serializeAddressTableLookups(){let e=0,t=new Uint8Array(ri);for(let n of this.addressTableLookups){let i=Array();yr(i,n.writableIndexes.length);let s=Array();yr(s,n.readonlyIndexes.length);let o=O.struct([me("accountKey"),O.blob(i.length,"encodedWritableIndexesLength"),O.seq(O.u8(),n.writableIndexes.length,"writableIndexes"),O.blob(s.length,"encodedReadonlyIndexesLength"),O.seq(O.u8(),n.readonlyIndexes.length,"readonlyIndexes")]);e+=o.encode({accountKey:n.accountKey.toBytes(),encodedWritableIndexesLength:new Uint8Array(i),writableIndexes:n.writableIndexes,encodedReadonlyIndexesLength:new Uint8Array(s),readonlyIndexes:n.readonlyIndexes},t,e)}return t.slice(0,e)}static deserialize(e){let t=[...e],n=nn(t),i=n&Ph;Ce(n!==i,"Expected versioned message but received legacy message");let s=i;Ce(s===0,`Expected versioned message with version 0 but found version ${s}`);let o={numRequiredSignatures:nn(t),numReadonlySignedAccounts:nn(t),numReadonlyUnsignedAccounts:nn(t)},l=[],u=gr(t);for(let B=0;B<u;B++)l.push(new V(br(t,0,xn)));let y=Ct.default.encode(br(t,0,xn)),S=gr(t),R=[];for(let B=0;B<S;B++){let N=nn(t),$=gr(t),D=br(t,0,$),L=gr(t),K=new Uint8Array(br(t,0,L));R.push({programIdIndex:N,accountKeyIndexes:D,data:K})}let I=gr(t),k=[];for(let B=0;B<I;B++){let N=new V(br(t,0,xn)),$=gr(t),D=br(t,0,$),L=gr(t),K=br(t,0,L);k.push({accountKey:N,writableIndexes:D,readonlyIndexes:K})}return new r({header:o,staticAccountKeys:l,recentBlockhash:y,compiledInstructions:R,addressTableLookups:k})}};var kn=(function(r){return r[r.BLOCKHEIGHT_EXCEEDED=0]="BLOCKHEIGHT_EXCEEDED",r[r.PROCESSED=1]="PROCESSED",r[r.TIMED_OUT=2]="TIMED_OUT",r[r.NONCE_INVALID=3]="NONCE_INVALID",r})({}),d_=ae.Buffer.alloc(Nh).fill(0),ve=class{constructor(e){this.keys=void 0,this.programId=void 0,this.data=ae.Buffer.alloc(0),this.programId=e.programId,this.keys=e.keys,e.data&&(this.data=e.data)}toJSON(){return{keys:this.keys.map(({pubkey:e,isSigner:t,isWritable:n})=>({pubkey:e.toJSON(),isSigner:t,isWritable:n})),programId:this.programId.toJSON(),data:[...this.data]}}},ge=class r{get signature(){return this.signatures.length>0?this.signatures[0].signature:null}constructor(e){if(this.signatures=[],this.feePayer=void 0,this.instructions=[],this.recentBlockhash=void 0,this.lastValidBlockHeight=void 0,this.nonceInfo=void 0,this.minNonceContextSlot=void 0,this._message=void 0,this._json=void 0,!!e)if(e.feePayer&&(this.feePayer=e.feePayer),e.signatures&&(this.signatures=e.signatures),Object.prototype.hasOwnProperty.call(e,"nonceInfo")){let{minContextSlot:t,nonceInfo:n}=e;this.minNonceContextSlot=t,this.nonceInfo=n}else if(Object.prototype.hasOwnProperty.call(e,"lastValidBlockHeight")){let{blockhash:t,lastValidBlockHeight:n}=e;this.recentBlockhash=t,this.lastValidBlockHeight=n}else{let{recentBlockhash:t,nonceInfo:n}=e;n&&(this.nonceInfo=n),this.recentBlockhash=t}}toJSON(){return{recentBlockhash:this.recentBlockhash||null,feePayer:this.feePayer?this.feePayer.toJSON():null,nonceInfo:this.nonceInfo?{nonce:this.nonceInfo.nonce,nonceInstruction:this.nonceInfo.nonceInstruction.toJSON()}:null,instructions:this.instructions.map(e=>e.toJSON()),signers:this.signatures.map(({publicKey:e})=>e.toJSON())}}add(...e){if(e.length===0)throw new Error("No instructions");return e.forEach(t=>{"instructions"in t?this.instructions=this.instructions.concat(t.instructions):"data"in t&&"programId"in t&&"keys"in t?this.instructions.push(t):this.instructions.push(new ve(t))}),this}compileMessage(){if(this._message&&JSON.stringify(this.toJSON())===JSON.stringify(this._json))return this._message;let e,t;if(this.nonceInfo?(e=this.nonceInfo.nonce,this.instructions[0]!=this.nonceInfo.nonceInstruction?t=[this.nonceInfo.nonceInstruction,...this.instructions]:t=this.instructions):(e=this.recentBlockhash,t=this.instructions),!e)throw new Error("Transaction recentBlockhash required");t.length<1&&console.warn("No instructions provided");let n;if(this.feePayer)n=this.feePayer;else if(this.signatures.length>0&&this.signatures[0].publicKey)n=this.signatures[0].publicKey;else throw new Error("Transaction fee payer required");for(let N=0;N<t.length;N++)if(t[N].programId===void 0)throw new Error(`Transaction instruction index ${N} has undefined program id`);let i=[],s=[];t.forEach(N=>{N.keys.forEach(D=>{s.push({...D})});let $=N.programId.toString();i.includes($)||i.push($)}),i.forEach(N=>{s.push({pubkey:new V(N),isSigner:!1,isWritable:!1})});let o=[];s.forEach(N=>{let $=N.pubkey.toString(),D=o.findIndex(L=>L.pubkey.toString()===$);D>-1?(o[D].isWritable=o[D].isWritable||N.isWritable,o[D].isSigner=o[D].isSigner||N.isSigner):o.push(N)}),o.sort(function(N,$){if(N.isSigner!==$.isSigner)return N.isSigner?-1:1;if(N.isWritable!==$.isWritable)return N.isWritable?-1:1;let D={localeMatcher:"best fit",usage:"sort",sensitivity:"variant",ignorePunctuation:!1,numeric:!1,caseFirst:"lower"};return N.pubkey.toBase58().localeCompare($.pubkey.toBase58(),"en",D)});let l=o.findIndex(N=>N.pubkey.equals(n));if(l>-1){let[N]=o.splice(l,1);N.isSigner=!0,N.isWritable=!0,o.unshift(N)}else o.unshift({pubkey:n,isSigner:!0,isWritable:!0});for(let N of this.signatures){let $=o.findIndex(D=>D.pubkey.equals(N.publicKey));if($>-1)o[$].isSigner||(o[$].isSigner=!0,console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));else throw new Error(`unknown signer: ${N.publicKey.toString()}`)}let u=0,y=0,S=0,R=[],I=[];o.forEach(({pubkey:N,isSigner:$,isWritable:D})=>{$?(R.push(N.toString()),u+=1,D||(y+=1)):(I.push(N.toString()),D||(S+=1))});let k=R.concat(I),B=t.map(N=>{let{data:$,programId:D}=N;return{programIdIndex:k.indexOf(D.toString()),accounts:N.keys.map(L=>k.indexOf(L.pubkey.toString())),data:Ct.default.encode($)}});return B.forEach(N=>{Ce(N.programIdIndex>=0),N.accounts.forEach($=>Ce($>=0))}),new ni({header:{numRequiredSignatures:u,numReadonlySignedAccounts:y,numReadonlyUnsignedAccounts:S},accountKeys:k,recentBlockhash:e,instructions:B})}_compile(){let e=this.compileMessage(),t=e.accountKeys.slice(0,e.header.numRequiredSignatures);return this.signatures.length===t.length&&this.signatures.every((i,s)=>t[s].equals(i.publicKey))||(this.signatures=t.map(n=>({signature:null,publicKey:n}))),e}serializeMessage(){return this._compile().serialize()}async getEstimatedFee(e){return(await e.getFeeForMessage(this.compileMessage())).value}setSigners(...e){if(e.length===0)throw new Error("No signers");let t=new Set;this.signatures=e.filter(n=>{let i=n.toString();return t.has(i)?!1:(t.add(i),!0)}).map(n=>({signature:null,publicKey:n}))}sign(...e){if(e.length===0)throw new Error("No signers");let t=new Set,n=[];for(let s of e){let o=s.publicKey.toString();t.has(o)||(t.add(o),n.push(s))}this.signatures=n.map(s=>({signature:null,publicKey:s.publicKey}));let i=this._compile();this._partialSign(i,...n)}partialSign(...e){if(e.length===0)throw new Error("No signers");let t=new Set,n=[];for(let s of e){let o=s.publicKey.toString();t.has(o)||(t.add(o),n.push(s))}let i=this._compile();this._partialSign(i,...n)}_partialSign(e,...t){let n=e.serialize();t.forEach(i=>{let s=Bh(n,i.secretKey);this._addSignature(i.publicKey,we(s))})}addSignature(e,t){this._compile(),this._addSignature(e,t)}_addSignature(e,t){Ce(t.length===64);let n=this.signatures.findIndex(i=>e.equals(i.publicKey));if(n<0)throw new Error(`unknown signer: ${e.toString()}`);this.signatures[n].signature=ae.Buffer.from(t)}verifySignatures(e=!0){return!this._getMessageSignednessErrors(this.serializeMessage(),e)}_getMessageSignednessErrors(e,t){let n={};for(let{signature:i,publicKey:s}of this.signatures)i===null?t&&(n.missing||=[]).push(s):i_(i,e,s.toBytes())||(n.invalid||=[]).push(s);return n.invalid||n.missing?n:void 0}serialize(e){let{requireAllSignatures:t,verifySignatures:n}=Object.assign({requireAllSignatures:!0,verifySignatures:!0},e),i=this.serializeMessage();if(n){let s=this._getMessageSignednessErrors(i,t);if(s){let o="Signature verification failed.";throw s.invalid&&(o+=`
Invalid signature for public key${s.invalid.length===1?"":"(s)"} [\`${s.invalid.map(l=>l.toBase58()).join("`, `")}\`].`),s.missing&&(o+=`
Missing signature for public key${s.missing.length===1?"":"(s)"} [\`${s.missing.map(l=>l.toBase58()).join("`, `")}\`].`),new Error(o)}}return this._serialize(i)}_serialize(e){let{signatures:t}=this,n=[];yr(n,t.length);let i=n.length+t.length*64+e.length,s=ae.Buffer.alloc(i);return Ce(t.length<256),ae.Buffer.from(n).copy(s,0),t.forEach(({signature:o},l)=>{o!==null&&(Ce(o.length===64,"signature has invalid length"),ae.Buffer.from(o).copy(s,n.length+l*64))}),e.copy(s,n.length+t.length*64),Ce(s.length<=ri,`Transaction too large: ${s.length} > ${ri}`),s}get keys(){return Ce(this.instructions.length===1),this.instructions[0].keys.map(e=>e.pubkey)}get programId(){return Ce(this.instructions.length===1),this.instructions[0].programId}get data(){return Ce(this.instructions.length===1),this.instructions[0].data}static from(e){let t=[...e],n=gr(t),i=[];for(let s=0;s<n;s++){let o=br(t,0,Nh);i.push(Ct.default.encode(ae.Buffer.from(o)))}return r.populate(ni.from(t),i)}static populate(e,t=[]){let n=new r;return n.recentBlockhash=e.recentBlockhash,e.header.numRequiredSignatures>0&&(n.feePayer=e.accountKeys[0]),t.forEach((i,s)=>{let o={signature:i==Ct.default.encode(d_)?null:Ct.default.decode(i),publicKey:e.accountKeys[s]};n.signatures.push(o)}),e.instructions.forEach(i=>{let s=i.accounts.map(o=>{let l=e.accountKeys[o];return{pubkey:l,isSigner:n.signatures.some(u=>u.publicKey.toString()===l.toString())||e.isAccountSigner(o),isWritable:e.isAccountWritable(o)}});n.instructions.push(new ve({keys:s,programId:e.accountKeys[i.programIdIndex],data:Ct.default.decode(i.data)}))}),n._message=e,n._json=n.toJSON(),n}};var f_=160,h_=64,p_=f_/h_,$h=1e3/p_,rn=new V("SysvarC1ock11111111111111111111111111111111"),wk=new V("SysvarEpochSchedu1e111111111111111111111111"),vk=new V("Sysvar1nstructions1111111111111111111111111"),hl=new V("SysvarRecentB1ockHashes11111111111111111111"),ii=new V("SysvarRent111111111111111111111111111111111"),_k=new V("SysvarRewards111111111111111111111111111111"),Sk=new V("SysvarS1otHashes111111111111111111111111111"),Rk=new V("SysvarS1otHistory11111111111111111111111111"),pl=new V("SysvarStakeHistory1111111111111111111111111"),Is=class extends Error{constructor({action:e,signature:t,transactionMessage:n,logs:i}){let s=i?`Logs: 
${JSON.stringify(i.slice(-10),null,2)}. `:"",o="\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.",l;switch(e){case"send":l=`Transaction ${t} resulted in an error. 
${n}. `+s+o;break;case"simulate":l=`Simulation failed. 
Message: ${n}. 
`+s+o;break;default:l=`Unknown action '${(u=>u)(e)}'`}super(l),this.signature=void 0,this.transactionMessage=void 0,this.transactionLogs=void 0,this.signature=t,this.transactionMessage=n,this.transactionLogs=i||void 0}get transactionError(){return{message:this.transactionMessage,logs:Array.isArray(this.transactionLogs)?this.transactionLogs:void 0}}get logs(){let e=this.transactionLogs;if(!(e!=null&&typeof e=="object"&&"then"in e))return e}async getLogs(e){return Array.isArray(this.transactionLogs)||(this.transactionLogs=new Promise((t,n)=>{e.getTransaction(this.signature).then(i=>{if(i&&i.meta&&i.meta.logMessages){let s=i.meta.logMessages;this.transactionLogs=s,t(s)}else n(new Error("Log messages not found"))}).catch(n)})),await this.transactionLogs}};var re=class extends Error{constructor({code:e,message:t,data:n},i){super(i!=null?`${i}: ${t}`:t),this.code=void 0,this.data=void 0,this.code=e,this.data=n,this.name="SolanaJSONRPCError"}};async function ph(r,e,t,n){let i=n&&{skipPreflight:n.skipPreflight,preflightCommitment:n.preflightCommitment||n.commitment,maxRetries:n.maxRetries,minContextSlot:n.minContextSlot},s=await r.sendTransaction(e,t,i),o;if(e.recentBlockhash!=null&&e.lastValidBlockHeight!=null)o=(await r.confirmTransaction({abortSignal:n?.abortSignal,signature:s,blockhash:e.recentBlockhash,lastValidBlockHeight:e.lastValidBlockHeight},n&&n.commitment)).value;else if(e.minNonceContextSlot!=null&&e.nonceInfo!=null){let{nonceInstruction:l}=e.nonceInfo,u=l.keys[0].pubkey;o=(await r.confirmTransaction({abortSignal:n?.abortSignal,minContextSlot:e.minNonceContextSlot,nonceAccountPubkey:u,nonceValue:e.nonceInfo.nonce,signature:s},n&&n.commitment)).value}else n?.abortSignal!=null&&console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."),o=(await r.confirmTransaction(s,n&&n.commitment)).value;if(o.err)throw s!=null?new Is({action:"send",signature:s,transactionMessage:`Status: (${JSON.stringify(o)})`}):new Error(`Transaction ${s} failed (${JSON.stringify(o)})`);return s}function ei(r){return new Promise(e=>setTimeout(e,r))}function _e(r,e){let t=r.layout.span>=0?r.layout.span:Lh(r,e),n=ae.Buffer.alloc(t),i=Object.assign({instruction:r.index},e);return r.layout.encode(i,n),n}var m_=O.nu64("lamportsPerSignature"),Dh=O.struct([O.u32("version"),O.u32("state"),me("authorizedPubkey"),me("nonce"),O.struct([m_],"feeCalculator")]),mh=Dh.span,El=class r{constructor(e){this.authorizedPubkey=void 0,this.nonce=void 0,this.feeCalculator=void 0,this.authorizedPubkey=e.authorizedPubkey,this.nonce=e.nonce,this.feeCalculator=e.feeCalculator}static fromAccountData(e){let t=Dh.decode(we(e),0);return new r({authorizedPubkey:new V(t.authorizedPubkey),nonce:new V(t.nonce).toString(),feeCalculator:t.feeCalculator})}};function Mi(r){let e=(0,Th.blob)(8,r),t=e.decode.bind(e),n=e.encode.bind(e),i=e,s=bf();return i.decode=(o,l)=>{let u=t(o,l);return s.decode(u)},i.encode=(o,l,u)=>{let y=s.encode(o);return n(y,l,u)},i}var mr=Object.freeze({Create:{index:0,layout:O.struct([O.u32("instruction"),O.ns64("lamports"),O.ns64("space"),me("programId")])},Assign:{index:1,layout:O.struct([O.u32("instruction"),me("programId")])},Transfer:{index:2,layout:O.struct([O.u32("instruction"),Mi("lamports")])},CreateWithSeed:{index:3,layout:O.struct([O.u32("instruction"),me("base"),Ni("seed"),O.ns64("lamports"),O.ns64("space"),me("programId")])},AdvanceNonceAccount:{index:4,layout:O.struct([O.u32("instruction")])},WithdrawNonceAccount:{index:5,layout:O.struct([O.u32("instruction"),O.ns64("lamports")])},InitializeNonceAccount:{index:6,layout:O.struct([O.u32("instruction"),me("authorized")])},AuthorizeNonceAccount:{index:7,layout:O.struct([O.u32("instruction"),me("authorized")])},Allocate:{index:8,layout:O.struct([O.u32("instruction"),O.ns64("space")])},AllocateWithSeed:{index:9,layout:O.struct([O.u32("instruction"),me("base"),Ni("seed"),O.ns64("space"),me("programId")])},AssignWithSeed:{index:10,layout:O.struct([O.u32("instruction"),me("base"),Ni("seed"),me("programId")])},TransferWithSeed:{index:11,layout:O.struct([O.u32("instruction"),Mi("lamports"),Ni("seed"),me("programId")])},UpgradeNonceAccount:{index:12,layout:O.struct([O.u32("instruction")])}}),Te=class r{constructor(){}static createAccount(e){let t=mr.Create,n=_e(t,{lamports:e.lamports,space:e.space,programId:we(e.programId.toBuffer())});return new ve({keys:[{pubkey:e.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:e.newAccountPubkey,isSigner:!0,isWritable:!0}],programId:this.programId,data:n})}static transfer(e){let t,n;if("basePubkey"in e){let i=mr.TransferWithSeed;t=_e(i,{lamports:BigInt(e.lamports),seed:e.seed,programId:we(e.programId.toBuffer())}),n=[{pubkey:e.fromPubkey,isSigner:!1,isWritable:!0},{pubkey:e.basePubkey,isSigner:!0,isWritable:!1},{pubkey:e.toPubkey,isSigner:!1,isWritable:!0}]}else{let i=mr.Transfer;t=_e(i,{lamports:BigInt(e.lamports)}),n=[{pubkey:e.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:e.toPubkey,isSigner:!1,isWritable:!0}]}return new ve({keys:n,programId:this.programId,data:t})}static assign(e){let t,n;if("basePubkey"in e){let i=mr.AssignWithSeed;t=_e(i,{base:we(e.basePubkey.toBuffer()),seed:e.seed,programId:we(e.programId.toBuffer())}),n=[{pubkey:e.accountPubkey,isSigner:!1,isWritable:!0},{pubkey:e.basePubkey,isSigner:!0,isWritable:!1}]}else{let i=mr.Assign;t=_e(i,{programId:we(e.programId.toBuffer())}),n=[{pubkey:e.accountPubkey,isSigner:!0,isWritable:!0}]}return new ve({keys:n,programId:this.programId,data:t})}static createAccountWithSeed(e){let t=mr.CreateWithSeed,n=_e(t,{base:we(e.basePubkey.toBuffer()),seed:e.seed,lamports:e.lamports,space:e.space,programId:we(e.programId.toBuffer())}),i=[{pubkey:e.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:e.newAccountPubkey,isSigner:!1,isWritable:!0}];return e.basePubkey.equals(e.fromPubkey)||i.push({pubkey:e.basePubkey,isSigner:!0,isWritable:!1}),new ve({keys:i,programId:this.programId,data:n})}static createNonceAccount(e){let t=new ge;"basePubkey"in e&&"seed"in e?t.add(r.createAccountWithSeed({fromPubkey:e.fromPubkey,newAccountPubkey:e.noncePubkey,basePubkey:e.basePubkey,seed:e.seed,lamports:e.lamports,space:mh,programId:this.programId})):t.add(r.createAccount({fromPubkey:e.fromPubkey,newAccountPubkey:e.noncePubkey,lamports:e.lamports,space:mh,programId:this.programId}));let n={noncePubkey:e.noncePubkey,authorizedPubkey:e.authorizedPubkey};return t.add(this.nonceInitialize(n)),t}static nonceInitialize(e){let t=mr.InitializeNonceAccount,n=_e(t,{authorized:we(e.authorizedPubkey.toBuffer())}),i={keys:[{pubkey:e.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:hl,isSigner:!1,isWritable:!1},{pubkey:ii,isSigner:!1,isWritable:!1}],programId:this.programId,data:n};return new ve(i)}static nonceAdvance(e){let t=mr.AdvanceNonceAccount,n=_e(t),i={keys:[{pubkey:e.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:hl,isSigner:!1,isWritable:!1},{pubkey:e.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:n};return new ve(i)}static nonceWithdraw(e){let t=mr.WithdrawNonceAccount,n=_e(t,{lamports:e.lamports});return new ve({keys:[{pubkey:e.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:e.toPubkey,isSigner:!1,isWritable:!0},{pubkey:hl,isSigner:!1,isWritable:!1},{pubkey:ii,isSigner:!1,isWritable:!1},{pubkey:e.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:n})}static nonceAuthorize(e){let t=mr.AuthorizeNonceAccount,n=_e(t,{authorized:we(e.newAuthorizedPubkey.toBuffer())});return new ve({keys:[{pubkey:e.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:e.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:n})}static allocate(e){let t,n;if("basePubkey"in e){let i=mr.AllocateWithSeed;t=_e(i,{base:we(e.basePubkey.toBuffer()),seed:e.seed,space:e.space,programId:we(e.programId.toBuffer())}),n=[{pubkey:e.accountPubkey,isSigner:!1,isWritable:!0},{pubkey:e.basePubkey,isSigner:!0,isWritable:!1}]}else{let i=mr.Allocate;t=_e(i,{space:e.space}),n=[{pubkey:e.accountPubkey,isSigner:!0,isWritable:!0}]}return new ve({keys:n,programId:this.programId,data:t})}};Te.programId=new V("11111111111111111111111111111111");var g_=ri-300,kl=class r{constructor(){}static getMinNumSignatures(e){return 2*(Math.ceil(e/r.chunkSize)+1+1)}static async load(e,t,n,i,s){{let R=await e.getMinimumBalanceForRentExemption(s.length),I=await e.getAccountInfo(n.publicKey,"confirmed"),k=null;if(I!==null){if(I.executable)return console.error("Program load failed, account is already executable"),!1;I.data.length!==s.length&&(k=k||new ge,k.add(Te.allocate({accountPubkey:n.publicKey,space:s.length}))),I.owner.equals(i)||(k=k||new ge,k.add(Te.assign({accountPubkey:n.publicKey,programId:i}))),I.lamports<R&&(k=k||new ge,k.add(Te.transfer({fromPubkey:t.publicKey,toPubkey:n.publicKey,lamports:R-I.lamports})))}else k=new ge().add(Te.createAccount({fromPubkey:t.publicKey,newAccountPubkey:n.publicKey,lamports:R>0?R:1,space:s.length,programId:i}));k!==null&&await ph(e,k,[t,n],{commitment:"confirmed"})}let o=O.struct([O.u32("instruction"),O.u32("offset"),O.u32("bytesLength"),O.u32("bytesLengthPadding"),O.seq(O.u8("byte"),O.offset(O.u32(),-8),"bytes")]),l=r.chunkSize,u=0,y=s,S=[];for(;y.length>0;){let R=y.slice(0,l),I=ae.Buffer.alloc(l+16);o.encode({instruction:0,offset:u,bytes:R,bytesLength:0,bytesLengthPadding:0},I);let k=new ge().add({keys:[{pubkey:n.publicKey,isSigner:!0,isWritable:!0}],programId:i,data:I});S.push(ph(e,k,[t,n],{commitment:"confirmed"})),e._rpcEndpoint.includes("solana.com")&&await ei(1e3/4),u+=l,y=y.slice(l)}await Promise.all(S);{let R=O.struct([O.u32("instruction")]),I=ae.Buffer.alloc(R.span);R.encode({instruction:1},I);let k=new ge().add({keys:[{pubkey:n.publicKey,isSigner:!0,isWritable:!0},{pubkey:ii,isSigner:!1,isWritable:!1}],programId:i,data:I}),B="processed",N=await e.sendTransaction(k,[t,n],{preflightCommitment:B}),{context:$,value:D}=await e.confirmTransaction({signature:N,lastValidBlockHeight:k.lastValidBlockHeight,blockhash:k.recentBlockhash},B);if(D.err)throw new Error(`Transaction ${N} failed (${JSON.stringify(D)})`);for(;;){try{if(await e.getSlot({commitment:B})>$.slot)break}catch{}await new Promise(L=>setTimeout(L,Math.round($h/2)))}}return!0}};kl.chunkSize=g_;var Ak=new V("BPFLoader2111111111111111111111111111111111");function y_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ml,gh;function b_(){if(gh)return ml;gh=1;var r=Object.prototype.toString,e=Object.keys||function(n){var i=[];for(var s in n)i.push(s);return i};function t(n,i){var s,o,l,u,y,S,R;if(n===!0)return"true";if(n===!1)return"false";switch(typeof n){case"object":if(n===null)return null;if(n.toJSON&&typeof n.toJSON=="function")return t(n.toJSON(),i);if(R=r.call(n),R==="[object Array]"){for(l="[",o=n.length-1,s=0;s<o;s++)l+=t(n[s],!0)+",";return o>-1&&(l+=t(n[s],!0)),l+"]"}else if(R==="[object Object]"){for(u=e(n).sort(),o=u.length,l="",s=0;s<o;)y=u[s],S=t(n[y],!1),S!==void 0&&(l&&(l+=","),l+=JSON.stringify(y)+":"+S),s++;return"{"+l+"}"}else return JSON.stringify(n);case"function":case"undefined":return i?null:void 0;case"string":return JSON.stringify(n);default:return isFinite(n)?n:null}}return ml=function(n){var i=t(n,!1);if(i!==void 0)return""+i},ml}var w_=b_(),yh=y_(w_),As=32;function gl(r){let e=0;for(;r>1;)r/=2,e++;return e}function v_(r){return r===0?1:(r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,r|=r>>32,r+1)}var Il=class{constructor(e,t,n,i,s){this.slotsPerEpoch=void 0,this.leaderScheduleSlotOffset=void 0,this.warmup=void 0,this.firstNormalEpoch=void 0,this.firstNormalSlot=void 0,this.slotsPerEpoch=e,this.leaderScheduleSlotOffset=t,this.warmup=n,this.firstNormalEpoch=i,this.firstNormalSlot=s}getEpoch(e){return this.getEpochAndSlotIndex(e)[0]}getEpochAndSlotIndex(e){if(e<this.firstNormalSlot){let t=gl(v_(e+As+1))-gl(As)-1,n=this.getSlotsInEpoch(t),i=e-(n-As);return[t,i]}else{let t=e-this.firstNormalSlot,n=Math.floor(t/this.slotsPerEpoch),i=this.firstNormalEpoch+n,s=t%this.slotsPerEpoch;return[i,s]}}getFirstSlotInEpoch(e){return e<=this.firstNormalEpoch?(Math.pow(2,e)-1)*As:(e-this.firstNormalEpoch)*this.slotsPerEpoch+this.firstNormalSlot}getLastSlotInEpoch(e){return this.getFirstSlotInEpoch(e)+this.getSlotsInEpoch(e)-1}getSlotsInEpoch(e){return e<this.firstNormalEpoch?Math.pow(2,e+gl(As)):this.slotsPerEpoch}},__=globalThis.fetch,xl=class extends Xf{constructor(e,t,n){let i=s=>{let o=Zf(s,{autoconnect:!0,max_reconnects:5,reconnect:!0,reconnect_interval:1e3,...t});return"socket"in o?this.underlyingSocket=o.socket:this.underlyingSocket=o,o};super(i,e,t,n),this.underlyingSocket=void 0}call(...e){let t=this.underlyingSocket?.readyState;return t===1?super.call(...e):Promise.reject(new Error("Tried to call a JSON-RPC method `"+e[0]+"` but the socket was not `CONNECTING` or `OPEN` (`readyState` was "+t+")"))}notify(...e){let t=this.underlyingSocket?.readyState;return t===1?super.notify(...e):Promise.reject(new Error("Tried to send a JSON-RPC notification `"+e[0]+"` but the socket was not `CONNECTING` or `OPEN` (`readyState` was "+t+")"))}};function S_(r,e){let t;try{t=r.layout.decode(e)}catch(n){throw new Error("invalid instruction; "+n)}if(t.typeIndex!==r.index)throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${r.index}`);return t}var bh=56,Qo=class{constructor(e){this.key=void 0,this.state=void 0,this.key=e.key,this.state=e.state}isActive(){let e=BigInt("0xffffffffffffffff");return this.state.deactivationSlot===e}static deserialize(e){let t=S_(R_,e),n=e.length-bh;Ce(n>=0,"lookup table is invalid"),Ce(n%32===0,"lookup table is invalid");let i=n/32,{addresses:s}=O.struct([O.seq(me(),i,"addresses")]).decode(e.slice(bh));return{deactivationSlot:t.deactivationSlot,lastExtendedSlot:t.lastExtendedSlot,lastExtendedSlotStartIndex:t.lastExtendedStartIndex,authority:t.authority.length!==0?new V(t.authority[0]):void 0,addresses:s.map(o=>new V(o))}}},R_={index:1,layout:O.struct([O.u32("typeIndex"),Mi("deactivationSlot"),O.nu64("lastExtendedSlot"),O.u8("lastExtendedStartIndex"),O.u8(),O.seq(me(),O.offset(O.u8(),-1),"authority")])},A_=/^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;function E_(r){let e=r.match(A_);if(e==null)throw TypeError(`Failed to validate endpoint URL \`${r}\``);let[t,n,i,s]=e,o=r.startsWith("https:")?"wss:":"ws:",l=i==null?null:parseInt(i.slice(1),10),u=l==null?"":`:${l+1}`;return`${o}//${n}${u}${s}`}var De=Bi(Lo(V),j(),r=>new V(r)),Uh=Mo([j(),Me("base64")]),Ll=Bi(Lo(ae.Buffer),Uh,r=>ae.Buffer.from(r[0],"base64")),k_=30*1e3;function I_(r){if(/^https?:/.test(r)===!1)throw new TypeError("Endpoint URL must start with `http:` or `https:`.");return r}function Be(r){let e,t;if(typeof r=="string")e=r;else if(r){let{commitment:n,...i}=r;e=n,t=i}return{commitment:e,config:t}}function wh(r){return r.map(e=>"memcmp"in e?{...e,memcmp:{...e.memcmp,encoding:e.memcmp.encoding??"base58"}}:e)}function zh(r){return Ut([q({jsonrpc:Me("2.0"),id:j(),result:r}),q({jsonrpc:Me("2.0"),id:j(),error:q({code:Qn(),message:j(),data:ie(Sf())})})])}var x_=zh(Qn());function he(r){return Bi(zh(r),x_,e=>"error"in e?e:{...e,result:Y(e.result,r)})}function We(r){return he(q({context:q({slot:M()}),value:r}))}function ia(r){return q({context:q({slot:M()}),value:r})}function yl(r,e){return r===0?new Al({header:e.header,staticAccountKeys:e.accountKeys.map(t=>new V(t)),recentBlockhash:e.recentBlockhash,compiledInstructions:e.instructions.map(t=>({programIdIndex:t.programIdIndex,accountKeyIndexes:t.accounts,data:Ct.default.decode(t.data)})),addressTableLookups:e.addressTableLookups}):new ni(e)}var T_=q({foundation:M(),foundationTerm:M(),initial:M(),taper:M(),terminal:M()}),O_=he(X(J(q({epoch:M(),effectiveSlot:M(),amount:M(),postBalance:M(),commission:ie(J(M()))})))),B_=X(q({slot:M(),prioritizationFee:M()})),C_=q({total:M(),validator:M(),foundation:M(),epoch:M()}),P_=q({epoch:M(),slotIndex:M(),slotsInEpoch:M(),absoluteSlot:M(),blockHeight:ie(M()),transactionCount:ie(M())}),N_=q({slotsPerEpoch:M(),leaderScheduleSlotOffset:M(),warmup:kr(),firstNormalEpoch:M(),firstNormalSlot:M()}),L_=jc(j(),X(M())),si=J(Ut([q({}),j()])),M_=q({err:si}),$_=Me("receivedSignature"),D_=q({"solana-core":j(),"feature-set":ie(M())}),U_=q({program:j(),programId:De,parsed:Qn()}),z_=q({programId:De,accounts:X(De),data:j()}),vh=We(q({err:J(Ut([q({}),j()])),logs:J(X(j())),accounts:ie(J(X(J(q({executable:kr(),owner:j(),lamports:M(),data:X(j()),rentEpoch:ie(M())}))))),unitsConsumed:ie(M()),returnData:ie(J(q({programId:j(),data:Mo([j(),Me("base64")])}))),innerInstructions:ie(J(X(q({index:M(),instructions:X(Ut([U_,z_]))}))))})),F_=We(q({byIdentity:jc(j(),X(M())),range:q({firstSlot:M(),lastSlot:M()})}));function K_(r,e,t,n,i,s){let o=t||__,l;s!=null&&console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");let u;return n&&(u=async(S,R)=>{let I=await new Promise((k,B)=>{try{n(S,R,(N,$)=>k([N,$]))}catch(N){B(N)}});return await o(...I)}),new Oh.default(async(S,R)=>{let I={method:"POST",body:S,agent:l,headers:Object.assign({"Content-Type":"application/json"},e||{},KS)};try{let k=5,B,N=500;for(;u?B=await u(r,I):B=await o(r,I),!(B.status!==429||i===!0||(k-=1,k===0));)console.error(`Server responded with ${B.status} ${B.statusText}.  Retrying after ${N}ms delay...`),await ei(N),N*=2;let $=await B.text();B.ok?R(null,$):R(new Error(`${B.status} ${B.statusText}: ${$}`))}catch(k){k instanceof Error&&R(k)}},{})}function H_(r){return(e,t)=>new Promise((n,i)=>{r.request(e,t,(s,o)=>{if(s){i(s);return}n(o)})})}function W_(r){return e=>new Promise((t,n)=>{e.length===0&&t([]);let i=e.map(s=>r.request(s.methodName,s.args));r.request(i,(s,o)=>{if(s){n(s);return}t(o)})})}var q_=he(T_),V_=he(C_),G_=he(B_),j_=he(P_),Y_=he(N_),Z_=he(L_),X_=he(M()),J_=We(q({total:M(),circulating:M(),nonCirculating:M(),nonCirculatingAccounts:X(De)})),Tl=q({amount:j(),uiAmount:J(M()),decimals:M(),uiAmountString:ie(j())}),Q_=We(X(q({address:De,amount:j(),uiAmount:J(M()),decimals:M(),uiAmountString:ie(j())}))),eS=We(X(q({pubkey:De,account:q({executable:kr(),owner:De,lamports:M(),data:Ll,rentEpoch:M()})}))),Ol=q({program:j(),parsed:Qn(),space:M()}),tS=We(X(q({pubkey:De,account:q({executable:kr(),owner:De,lamports:M(),data:Ol,rentEpoch:M()})}))),rS=We(X(q({lamports:M(),address:De}))),xs=q({executable:kr(),owner:De,lamports:M(),data:Ll,rentEpoch:M()}),nS=q({pubkey:De,account:xs}),iS=Bi(Ut([Lo(ae.Buffer),Ol]),Ut([Uh,Ol]),r=>Array.isArray(r)?Y(r,Ll):r),Bl=q({executable:kr(),owner:De,lamports:M(),data:iS,rentEpoch:M()}),sS=q({pubkey:De,account:Bl}),oS=q({state:Ut([Me("active"),Me("inactive"),Me("activating"),Me("deactivating")]),active:M(),inactive:M()}),aS=he(X(q({signature:j(),slot:M(),err:si,memo:J(j()),blockTime:ie(J(M()))}))),cS=he(X(q({signature:j(),slot:M(),err:si,memo:J(j()),blockTime:ie(J(M()))}))),lS=q({subscription:M(),result:ia(xs)}),uS=q({pubkey:De,account:xs}),dS=q({subscription:M(),result:ia(uS)}),fS=q({parent:M(),slot:M(),root:M()}),hS=q({subscription:M(),result:fS}),pS=Ut([q({type:Ut([Me("firstShredReceived"),Me("completed"),Me("optimisticConfirmation"),Me("root")]),slot:M(),timestamp:M()}),q({type:Me("createdBank"),parent:M(),slot:M(),timestamp:M()}),q({type:Me("frozen"),slot:M(),timestamp:M(),stats:q({numTransactionEntries:M(),numSuccessfulTransactions:M(),numFailedTransactions:M(),maxTransactionsPerEntry:M()})}),q({type:Me("dead"),slot:M(),timestamp:M(),err:j()})]),mS=q({subscription:M(),result:pS}),gS=q({subscription:M(),result:ia(Ut([M_,$_]))}),yS=q({subscription:M(),result:M()}),bS=q({pubkey:j(),gossip:J(j()),tpu:J(j()),rpc:J(j()),version:J(j())}),_h=q({votePubkey:j(),nodePubkey:j(),activatedStake:M(),epochVoteAccount:kr(),epochCredits:X(Mo([M(),M(),M()])),commission:M(),lastVote:M(),rootSlot:J(M())}),wS=he(q({current:X(_h),delinquent:X(_h)})),vS=Ut([Me("processed"),Me("confirmed"),Me("finalized")]),_S=q({slot:M(),confirmations:J(M()),err:si,confirmationStatus:ie(vS)}),SS=We(X(J(_S))),RS=he(M()),Fh=q({accountKey:De,writableIndexes:X(M()),readonlyIndexes:X(M())}),Ml=q({signatures:X(j()),message:q({accountKeys:X(j()),header:q({numRequiredSignatures:M(),numReadonlySignedAccounts:M(),numReadonlyUnsignedAccounts:M()}),instructions:X(q({accounts:X(M()),data:j(),programIdIndex:M()})),recentBlockhash:j(),addressTableLookups:ie(X(Fh))})}),Kh=q({pubkey:De,signer:kr(),writable:kr(),source:ie(Ut([Me("transaction"),Me("lookupTable")]))}),Hh=q({accountKeys:X(Kh),signatures:X(j())}),Wh=q({parsed:Qn(),program:j(),programId:De}),qh=q({accounts:X(De),data:j(),programId:De}),AS=Ut([qh,Wh]),ES=Ut([q({parsed:Qn(),program:j(),programId:j()}),q({accounts:X(j()),data:j(),programId:j()})]),Vh=Bi(AS,ES,r=>"accounts"in r?Y(r,qh):Y(r,Wh)),Gh=q({signatures:X(j()),message:q({accountKeys:X(Kh),instructions:X(Vh),recentBlockhash:j(),addressTableLookups:ie(J(X(Fh)))})}),ea=q({accountIndex:M(),mint:j(),owner:ie(j()),programId:ie(j()),uiTokenAmount:Tl}),jh=q({writable:X(De),readonly:X(De)}),sa=q({err:si,fee:M(),innerInstructions:ie(J(X(q({index:M(),instructions:X(q({accounts:X(M()),data:j(),programIdIndex:M()}))})))),preBalances:X(M()),postBalances:X(M()),logMessages:ie(J(X(j()))),preTokenBalances:ie(J(X(ea))),postTokenBalances:ie(J(X(ea))),loadedAddresses:ie(jh),computeUnitsConsumed:ie(M()),costUnits:ie(M())}),$l=q({err:si,fee:M(),innerInstructions:ie(J(X(q({index:M(),instructions:X(Vh)})))),preBalances:X(M()),postBalances:X(M()),logMessages:ie(J(X(j()))),preTokenBalances:ie(J(X(ea))),postTokenBalances:ie(J(X(ea))),loadedAddresses:ie(jh),computeUnitsConsumed:ie(M()),costUnits:ie(M())}),Di=Ut([Me(0),Me("legacy")]),oi=q({pubkey:j(),lamports:M(),postBalance:J(M()),rewardType:J(j()),commission:ie(J(M()))}),kS=he(J(q({blockhash:j(),previousBlockhash:j(),parentSlot:M(),transactions:X(q({transaction:Ml,meta:J(sa),version:ie(Di)})),rewards:ie(X(oi)),blockTime:J(M()),blockHeight:J(M())}))),IS=he(J(q({blockhash:j(),previousBlockhash:j(),parentSlot:M(),rewards:ie(X(oi)),blockTime:J(M()),blockHeight:J(M())}))),xS=he(J(q({blockhash:j(),previousBlockhash:j(),parentSlot:M(),transactions:X(q({transaction:Hh,meta:J(sa),version:ie(Di)})),rewards:ie(X(oi)),blockTime:J(M()),blockHeight:J(M())}))),TS=he(J(q({blockhash:j(),previousBlockhash:j(),parentSlot:M(),transactions:X(q({transaction:Gh,meta:J($l),version:ie(Di)})),rewards:ie(X(oi)),blockTime:J(M()),blockHeight:J(M())}))),OS=he(J(q({blockhash:j(),previousBlockhash:j(),parentSlot:M(),transactions:X(q({transaction:Hh,meta:J($l),version:ie(Di)})),rewards:ie(X(oi)),blockTime:J(M()),blockHeight:J(M())}))),BS=he(J(q({blockhash:j(),previousBlockhash:j(),parentSlot:M(),rewards:ie(X(oi)),blockTime:J(M()),blockHeight:J(M())}))),CS=he(J(q({blockhash:j(),previousBlockhash:j(),parentSlot:M(),transactions:X(q({transaction:Ml,meta:J(sa)})),rewards:ie(X(oi)),blockTime:J(M())}))),Sh=he(J(q({blockhash:j(),previousBlockhash:j(),parentSlot:M(),signatures:X(j()),blockTime:J(M())}))),bl=he(J(q({slot:M(),meta:J(sa),blockTime:ie(J(M())),transaction:Ml,version:ie(Di)}))),Go=he(J(q({slot:M(),transaction:Gh,meta:J($l),blockTime:ie(J(M())),version:ie(Di)}))),PS=We(q({blockhash:j(),lastValidBlockHeight:M()})),NS=We(kr()),LS=q({slot:M(),numTransactions:M(),numSlots:M(),samplePeriodSecs:M()}),MS=he(X(LS)),$S=We(J(q({feeCalculator:q({lamportsPerSignature:M()})}))),DS=he(j()),US=he(j()),zS=q({err:si,logs:X(j()),signature:j()}),FS=q({result:ia(zS),subscription:M()}),KS={"solana-client":"js/1.0.0-maintenance"},ta=class{constructor(e,t){this._commitment=void 0,this._confirmTransactionInitialTimeout=void 0,this._rpcEndpoint=void 0,this._rpcWsEndpoint=void 0,this._rpcClient=void 0,this._rpcRequest=void 0,this._rpcBatchRequest=void 0,this._rpcWebSocket=void 0,this._rpcWebSocketConnected=!1,this._rpcWebSocketHeartbeat=null,this._rpcWebSocketIdleTimeout=null,this._rpcWebSocketGeneration=0,this._disableBlockhashCaching=!1,this._pollingBlockhash=!1,this._blockhashInfo={latestBlockhash:null,lastFetch:0,transactionSignatures:[],simulatedSignatures:[]},this._nextClientSubscriptionId=0,this._subscriptionDisposeFunctionsByClientSubscriptionId={},this._subscriptionHashByClientSubscriptionId={},this._subscriptionStateChangeCallbacksByHash={},this._subscriptionCallbacksByServerSubscriptionId={},this._subscriptionsByHash={},this._subscriptionsAutoDisposedByRpc=new Set,this.getBlockHeight=(()=>{let y={};return async S=>{let{commitment:R,config:I}=Be(S),k=this._buildArgs([],R,void 0,I),B=yh(k);return y[B]=y[B]??(async()=>{try{let N=await this._rpcRequest("getBlockHeight",k),$=Y(N,he(M()));if("error"in $)throw new re($.error,"failed to get block height information");return $.result}finally{delete y[B]}})(),await y[B]}})();let n,i,s,o,l,u;t&&typeof t=="string"?this._commitment=t:t&&(this._commitment=t.commitment,this._confirmTransactionInitialTimeout=t.confirmTransactionInitialTimeout,n=t.wsEndpoint,i=t.httpHeaders,s=t.fetch,o=t.fetchMiddleware,l=t.disableRetryOnRateLimit,u=t.httpAgent),this._rpcEndpoint=I_(e),this._rpcWsEndpoint=n||E_(e),this._rpcClient=K_(e,i,s,o,l,u),this._rpcRequest=H_(this._rpcClient),this._rpcBatchRequest=W_(this._rpcClient),this._rpcWebSocket=new xl(this._rpcWsEndpoint,{autoconnect:!1,max_reconnects:1/0}),this._rpcWebSocket.on("open",this._wsOnOpen.bind(this)),this._rpcWebSocket.on("error",this._wsOnError.bind(this)),this._rpcWebSocket.on("close",this._wsOnClose.bind(this)),this._rpcWebSocket.on("accountNotification",this._wsOnAccountNotification.bind(this)),this._rpcWebSocket.on("programNotification",this._wsOnProgramAccountNotification.bind(this)),this._rpcWebSocket.on("slotNotification",this._wsOnSlotNotification.bind(this)),this._rpcWebSocket.on("slotsUpdatesNotification",this._wsOnSlotUpdatesNotification.bind(this)),this._rpcWebSocket.on("signatureNotification",this._wsOnSignatureNotification.bind(this)),this._rpcWebSocket.on("rootNotification",this._wsOnRootNotification.bind(this)),this._rpcWebSocket.on("logsNotification",this._wsOnLogsNotification.bind(this))}get commitment(){return this._commitment}get rpcEndpoint(){return this._rpcEndpoint}async getBalanceAndContext(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgs([e.toBase58()],n,void 0,i),o=await this._rpcRequest("getBalance",s),l=Y(o,We(M()));if("error"in l)throw new re(l.error,`failed to get balance for ${e.toBase58()}`);return l.result}async getBalance(e,t){return await this.getBalanceAndContext(e,t).then(n=>n.value).catch(n=>{throw new Error("failed to get balance of account "+e.toBase58()+": "+n)})}async getBlockTime(e){let t=await this._rpcRequest("getBlockTime",[e]),n=Y(t,he(J(M())));if("error"in n)throw new re(n.error,`failed to get block time for slot ${e}`);return n.result}async getMinimumLedgerSlot(){let e=await this._rpcRequest("minimumLedgerSlot",[]),t=Y(e,he(M()));if("error"in t)throw new re(t.error,"failed to get minimum ledger slot");return t.result}async getFirstAvailableBlock(){let e=await this._rpcRequest("getFirstAvailableBlock",[]),t=Y(e,X_);if("error"in t)throw new re(t.error,"failed to get first available block");return t.result}async getSupply(e){let t={};typeof e=="string"?t={commitment:e}:e?t={...e,commitment:e&&e.commitment||this.commitment}:t={commitment:this.commitment};let n=await this._rpcRequest("getSupply",[t]),i=Y(n,J_);if("error"in i)throw new re(i.error,"failed to get supply");return i.result}async getTokenSupply(e,t){let n=this._buildArgs([e.toBase58()],t),i=await this._rpcRequest("getTokenSupply",n),s=Y(i,We(Tl));if("error"in s)throw new re(s.error,"failed to get token supply");return s.result}async getTokenAccountBalance(e,t){let n=this._buildArgs([e.toBase58()],t),i=await this._rpcRequest("getTokenAccountBalance",n),s=Y(i,We(Tl));if("error"in s)throw new re(s.error,"failed to get token account balance");return s.result}async getTokenAccountsByOwner(e,t,n){let{commitment:i,config:s}=Be(n),o=[e.toBase58()];"mint"in t?o.push({mint:t.mint.toBase58()}):o.push({programId:t.programId.toBase58()});let l=this._buildArgs(o,i,"base64",s),u=await this._rpcRequest("getTokenAccountsByOwner",l),y=Y(u,eS);if("error"in y)throw new re(y.error,`failed to get token accounts owned by account ${e.toBase58()}`);return y.result}async getParsedTokenAccountsByOwner(e,t,n){let i=[e.toBase58()];"mint"in t?i.push({mint:t.mint.toBase58()}):i.push({programId:t.programId.toBase58()});let s=this._buildArgs(i,n,"jsonParsed"),o=await this._rpcRequest("getTokenAccountsByOwner",s),l=Y(o,tS);if("error"in l)throw new re(l.error,`failed to get token accounts owned by account ${e.toBase58()}`);return l.result}async getLargestAccounts(e){let t={...e,commitment:e&&e.commitment||this.commitment},n=t.filter||t.commitment?[t]:[],i=await this._rpcRequest("getLargestAccounts",n),s=Y(i,rS);if("error"in s)throw new re(s.error,"failed to get largest accounts");return s.result}async getTokenLargestAccounts(e,t){let n=this._buildArgs([e.toBase58()],t),i=await this._rpcRequest("getTokenLargestAccounts",n),s=Y(i,Q_);if("error"in s)throw new re(s.error,"failed to get token largest accounts");return s.result}async getAccountInfoAndContext(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgs([e.toBase58()],n,"base64",i),o=await this._rpcRequest("getAccountInfo",s),l=Y(o,We(J(xs)));if("error"in l)throw new re(l.error,`failed to get info about account ${e.toBase58()}`);return l.result}async getParsedAccountInfo(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgs([e.toBase58()],n,"jsonParsed",i),o=await this._rpcRequest("getAccountInfo",s),l=Y(o,We(J(Bl)));if("error"in l)throw new re(l.error,`failed to get info about account ${e.toBase58()}`);return l.result}async getAccountInfo(e,t){try{return(await this.getAccountInfoAndContext(e,t)).value}catch(n){throw new Error("failed to get info about account "+e.toBase58()+": "+n)}}async getMultipleParsedAccounts(e,t){let{commitment:n,config:i}=Be(t),s=e.map(y=>y.toBase58()),o=this._buildArgs([s],n,"jsonParsed",i),l=await this._rpcRequest("getMultipleAccounts",o),u=Y(l,We(X(J(Bl))));if("error"in u)throw new re(u.error,`failed to get info for accounts ${s}`);return u.result}async getMultipleAccountsInfoAndContext(e,t){let{commitment:n,config:i}=Be(t),s=e.map(y=>y.toBase58()),o=this._buildArgs([s],n,"base64",i),l=await this._rpcRequest("getMultipleAccounts",o),u=Y(l,We(X(J(xs))));if("error"in u)throw new re(u.error,`failed to get info for accounts ${s}`);return u.result}async getMultipleAccountsInfo(e,t){return(await this.getMultipleAccountsInfoAndContext(e,t)).value}async getStakeActivation(e,t,n){let{commitment:i,config:s}=Be(t),o=this._buildArgs([e.toBase58()],i,void 0,{...s,epoch:n??s?.epoch}),l=await this._rpcRequest("getStakeActivation",o),u=Y(l,he(oS));if("error"in u)throw new re(u.error,`failed to get Stake Activation ${e.toBase58()}`);return u.result}async getProgramAccounts(e,t){let{commitment:n,config:i}=Be(t),{encoding:s,...o}=i||{},l=this._buildArgs([e.toBase58()],n,s||"base64",{...o,...o.filters?{filters:wh(o.filters)}:null}),u=await this._rpcRequest("getProgramAccounts",l),y=X(nS),S=o.withContext===!0?Y(u,We(y)):Y(u,he(y));if("error"in S)throw new re(S.error,`failed to get accounts owned by program ${e.toBase58()}`);return S.result}async getParsedProgramAccounts(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgs([e.toBase58()],n,"jsonParsed",i),o=await this._rpcRequest("getProgramAccounts",s),l=Y(o,he(X(sS)));if("error"in l)throw new re(l.error,`failed to get accounts owned by program ${e.toBase58()}`);return l.result}async confirmTransaction(e,t){let n;if(typeof e=="string")n=e;else{let s=e;if(s.abortSignal?.aborted)return Promise.reject(s.abortSignal.reason);n=s.signature}let i;try{i=Ct.default.decode(n)}catch{throw new Error("signature must be base58 encoded: "+n)}return Ce(i.length===64,"signature has invalid length"),typeof e=="string"?await this.confirmTransactionUsingLegacyTimeoutStrategy({commitment:t||this.commitment,signature:n}):"lastValidBlockHeight"in e?await this.confirmTransactionUsingBlockHeightExceedanceStrategy({commitment:t||this.commitment,strategy:e}):await this.confirmTransactionUsingDurableNonceStrategy({commitment:t||this.commitment,strategy:e})}getCancellationPromise(e){return new Promise((t,n)=>{e!=null&&(e.aborted?n(e.reason):e.addEventListener("abort",()=>{n(e.reason)}))})}getTransactionConfirmationPromise({commitment:e,signature:t}){let n,i,s=!1,o=new Promise((u,y)=>{try{n=this.onSignature(t,(R,I)=>{n=void 0;let k={context:I,value:R};u({__type:kn.PROCESSED,response:k})},e);let S=new Promise(R=>{n==null?R():i=this._onSubscriptionStateChange(n,I=>{I==="subscribed"&&R()})});(async()=>{if(await S,s)return;let R=await this.getSignatureStatus(t);if(s||R==null)return;let{context:I,value:k}=R;if(k!=null)if(k?.err)y(k.err);else{switch(e){case"confirmed":case"single":case"singleGossip":{if(k.confirmationStatus==="processed")return;break}case"finalized":case"max":case"root":{if(k.confirmationStatus==="processed"||k.confirmationStatus==="confirmed")return;break}case"processed":case"recent":}s=!0,u({__type:kn.PROCESSED,response:{context:I,value:k}})}})()}catch(S){y(S)}});return{abortConfirmation:()=>{i&&(i(),i=void 0),n!=null&&(this.removeSignatureListener(n),n=void 0)},confirmationPromise:o}}async confirmTransactionUsingBlockHeightExceedanceStrategy({commitment:e,strategy:{abortSignal:t,lastValidBlockHeight:n,signature:i}}){let s=!1,o=new Promise(R=>{let I=async()=>{try{return await this.getBlockHeight(e)}catch{return-1}};(async()=>{let k=await I();if(!s){for(;k<=n;)if(await ei(1e3),s||(k=await I(),s))return;R({__type:kn.BLOCKHEIGHT_EXCEEDED})}})()}),{abortConfirmation:l,confirmationPromise:u}=this.getTransactionConfirmationPromise({commitment:e,signature:i}),y=this.getCancellationPromise(t),S;try{let R=await Promise.race([y,u,o]);if(R.__type===kn.PROCESSED)S=R.response;else throw new Zo(i)}finally{s=!0,l()}return S}async confirmTransactionUsingDurableNonceStrategy({commitment:e,strategy:{abortSignal:t,minContextSlot:n,nonceAccountPubkey:i,nonceValue:s,signature:o}}){let l=!1,u=new Promise(k=>{let B=s,N=null,$=async()=>{try{let{context:D,value:L}=await this.getNonceAndContext(i,{commitment:e,minContextSlot:n});return N=D.slot,L?.nonce}catch{return B}};(async()=>{if(B=await $(),!l)for(;;){if(s!==B){k({__type:kn.NONCE_INVALID,slotInWhichNonceDidAdvance:N});return}if(await ei(2e3),l||(B=await $(),l))return}})()}),{abortConfirmation:y,confirmationPromise:S}=this.getTransactionConfirmationPromise({commitment:e,signature:o}),R=this.getCancellationPromise(t),I;try{let k=await Promise.race([R,S,u]);if(k.__type===kn.PROCESSED)I=k.response;else{let B;for(;;){let N=await this.getSignatureStatus(o);if(N==null)break;if(N.context.slot<(k.slotInWhichNonceDidAdvance??n)){await ei(400);continue}B=N;break}if(B?.value){let N=e||"finalized",{confirmationStatus:$}=B.value;switch(N){case"processed":case"recent":if($!=="processed"&&$!=="confirmed"&&$!=="finalized")throw new ti(o);break;case"confirmed":case"single":case"singleGossip":if($!=="confirmed"&&$!=="finalized")throw new ti(o);break;case"finalized":case"max":case"root":if($!=="finalized")throw new ti(o);break;default:}I={context:B.context,value:{err:B.value.err}}}else throw new ti(o)}}finally{l=!0,y()}return I}async confirmTransactionUsingLegacyTimeoutStrategy({commitment:e,signature:t}){let n,i=new Promise(u=>{let y=this._confirmTransactionInitialTimeout||6e4;switch(e){case"processed":case"recent":case"single":case"confirmed":case"singleGossip":{y=this._confirmTransactionInitialTimeout||3e4;break}}n=setTimeout(()=>u({__type:kn.TIMED_OUT,timeoutMs:y}),y)}),{abortConfirmation:s,confirmationPromise:o}=this.getTransactionConfirmationPromise({commitment:e,signature:t}),l;try{let u=await Promise.race([o,i]);if(u.__type===kn.PROCESSED)l=u.response;else throw new Xo(t,u.timeoutMs/1e3)}finally{clearTimeout(n),s()}return l}async getClusterNodes(){let e=await this._rpcRequest("getClusterNodes",[]),t=Y(e,he(X(bS)));if("error"in t)throw new re(t.error,"failed to get cluster nodes");return t.result}async getVoteAccounts(e){let t=this._buildArgs([],e),n=await this._rpcRequest("getVoteAccounts",t),i=Y(n,wS);if("error"in i)throw new re(i.error,"failed to get vote accounts");return i.result}async getSlot(e){let{commitment:t,config:n}=Be(e),i=this._buildArgs([],t,void 0,n),s=await this._rpcRequest("getSlot",i),o=Y(s,he(M()));if("error"in o)throw new re(o.error,"failed to get slot");return o.result}async getSlotLeader(e){let{commitment:t,config:n}=Be(e),i=this._buildArgs([],t,void 0,n),s=await this._rpcRequest("getSlotLeader",i),o=Y(s,he(j()));if("error"in o)throw new re(o.error,"failed to get slot leader");return o.result}async getSlotLeaders(e,t){let n=[e,t],i=await this._rpcRequest("getSlotLeaders",n),s=Y(i,he(X(De)));if("error"in s)throw new re(s.error,"failed to get slot leaders");return s.result}async getSignatureStatus(e,t){let{context:n,value:i}=await this.getSignatureStatuses([e],t);Ce(i.length===1);let s=i[0];return{context:n,value:s}}async getSignatureStatuses(e,t){let n=[e];t&&n.push(t);let i=await this._rpcRequest("getSignatureStatuses",n),s=Y(i,SS);if("error"in s)throw new re(s.error,"failed to get signature status");return s.result}async getTransactionCount(e){let{commitment:t,config:n}=Be(e),i=this._buildArgs([],t,void 0,n),s=await this._rpcRequest("getTransactionCount",i),o=Y(s,he(M()));if("error"in o)throw new re(o.error,"failed to get transaction count");return o.result}async getTotalSupply(e){return(await this.getSupply({commitment:e,excludeNonCirculatingAccountsList:!0})).value.total}async getInflationGovernor(e){let t=this._buildArgs([],e),n=await this._rpcRequest("getInflationGovernor",t),i=Y(n,q_);if("error"in i)throw new re(i.error,"failed to get inflation");return i.result}async getInflationReward(e,t,n){let{commitment:i,config:s}=Be(n),o=this._buildArgs([e.map(y=>y.toBase58())],i,void 0,{...s,epoch:t??s?.epoch}),l=await this._rpcRequest("getInflationReward",o),u=Y(l,O_);if("error"in u)throw new re(u.error,"failed to get inflation reward");return u.result}async getInflationRate(){let e=await this._rpcRequest("getInflationRate",[]),t=Y(e,V_);if("error"in t)throw new re(t.error,"failed to get inflation rate");return t.result}async getEpochInfo(e){let{commitment:t,config:n}=Be(e),i=this._buildArgs([],t,void 0,n),s=await this._rpcRequest("getEpochInfo",i),o=Y(s,j_);if("error"in o)throw new re(o.error,"failed to get epoch info");return o.result}async getEpochSchedule(){let e=await this._rpcRequest("getEpochSchedule",[]),t=Y(e,Y_);if("error"in t)throw new re(t.error,"failed to get epoch schedule");let n=t.result;return new Il(n.slotsPerEpoch,n.leaderScheduleSlotOffset,n.warmup,n.firstNormalEpoch,n.firstNormalSlot)}async getLeaderSchedule(){let e=await this._rpcRequest("getLeaderSchedule",[]),t=Y(e,Z_);if("error"in t)throw new re(t.error,"failed to get leader schedule");return t.result}async getMinimumBalanceForRentExemption(e,t){let n=this._buildArgs([e],t),i=await this._rpcRequest("getMinimumBalanceForRentExemption",n),s=Y(i,RS);return"error"in s?(console.warn("Unable to fetch minimum balance for rent exemption"),0):s.result}async getRecentBlockhashAndContext(e){let{context:t,value:{blockhash:n}}=await this.getLatestBlockhashAndContext(e);return{context:t,value:{blockhash:n,feeCalculator:{get lamportsPerSignature(){throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.")},toJSON(){return{}}}}}}async getRecentPerformanceSamples(e){let t=await this._rpcRequest("getRecentPerformanceSamples",e?[e]:[]),n=Y(t,MS);if("error"in n)throw new re(n.error,"failed to get recent performance samples");return n.result}async getFeeCalculatorForBlockhash(e,t){let n=this._buildArgs([e],t),i=await this._rpcRequest("getFeeCalculatorForBlockhash",n),s=Y(i,$S);if("error"in s)throw new re(s.error,"failed to get fee calculator");let{context:o,value:l}=s.result;return{context:o,value:l!==null?l.feeCalculator:null}}async getFeeForMessage(e,t){let n=we(e.serialize()).toString("base64"),i=this._buildArgs([n],t),s=await this._rpcRequest("getFeeForMessage",i),o=Y(s,We(J(M())));if("error"in o)throw new re(o.error,"failed to get fee for message");if(o.result===null)throw new Error("invalid blockhash");return o.result}async getRecentPrioritizationFees(e){let t=e?.lockedWritableAccounts?.map(o=>o.toBase58()),n=t?.length?[t]:[],i=await this._rpcRequest("getRecentPrioritizationFees",n),s=Y(i,G_);if("error"in s)throw new re(s.error,"failed to get recent prioritization fees");return s.result}async getRecentBlockhash(e){try{return(await this.getRecentBlockhashAndContext(e)).value}catch(t){throw new Error("failed to get recent blockhash: "+t)}}async getLatestBlockhash(e){try{return(await this.getLatestBlockhashAndContext(e)).value}catch(t){throw new Error("failed to get recent blockhash: "+t)}}async getLatestBlockhashAndContext(e){let{commitment:t,config:n}=Be(e),i=this._buildArgs([],t,void 0,n),s=await this._rpcRequest("getLatestBlockhash",i),o=Y(s,PS);if("error"in o)throw new re(o.error,"failed to get latest blockhash");return o.result}async isBlockhashValid(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgs([e],n,void 0,i),o=await this._rpcRequest("isBlockhashValid",s),l=Y(o,NS);if("error"in l)throw new re(l.error,"failed to determine if the blockhash `"+e+"`is valid");return l.result}async getVersion(){let e=await this._rpcRequest("getVersion",[]),t=Y(e,he(D_));if("error"in t)throw new re(t.error,"failed to get version");return t.result}async getGenesisHash(){let e=await this._rpcRequest("getGenesisHash",[]),t=Y(e,he(j()));if("error"in t)throw new re(t.error,"failed to get genesis hash");return t.result}async getBlock(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgsAtLeastConfirmed([e],n,void 0,i),o=await this._rpcRequest("getBlock",s);try{switch(i?.transactionDetails){case"accounts":{let l=Y(o,xS);if("error"in l)throw l.error;return l.result}case"none":{let l=Y(o,IS);if("error"in l)throw l.error;return l.result}default:{let l=Y(o,kS);if("error"in l)throw l.error;let{result:u}=l;return u?{...u,transactions:u.transactions.map(({transaction:y,meta:S,version:R})=>({meta:S,transaction:{...y,message:yl(R,y.message)},version:R}))}:null}}}catch(l){throw new re(l,"failed to get confirmed block")}}async getParsedBlock(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgsAtLeastConfirmed([e],n,"jsonParsed",i),o=await this._rpcRequest("getBlock",s);try{switch(i?.transactionDetails){case"accounts":{let l=Y(o,OS);if("error"in l)throw l.error;return l.result}case"none":{let l=Y(o,BS);if("error"in l)throw l.error;return l.result}default:{let l=Y(o,TS);if("error"in l)throw l.error;return l.result}}}catch(l){throw new re(l,"failed to get block")}}async getBlockProduction(e){let t,n;if(typeof e=="string")n=e;else if(e){let{commitment:l,...u}=e;n=l,t=u}let i=this._buildArgs([],n,"base64",t),s=await this._rpcRequest("getBlockProduction",i),o=Y(s,F_);if("error"in o)throw new re(o.error,"failed to get block production information");return o.result}async getTransaction(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgsAtLeastConfirmed([e],n,void 0,i),o=await this._rpcRequest("getTransaction",s),l=Y(o,bl);if("error"in l)throw new re(l.error,"failed to get transaction");let u=l.result;return u&&{...u,transaction:{...u.transaction,message:yl(u.version,u.transaction.message)}}}async getParsedTransaction(e,t){let{commitment:n,config:i}=Be(t),s=this._buildArgsAtLeastConfirmed([e],n,"jsonParsed",i),o=await this._rpcRequest("getTransaction",s),l=Y(o,Go);if("error"in l)throw new re(l.error,"failed to get transaction");return l.result}async getParsedTransactions(e,t){let{commitment:n,config:i}=Be(t),s=e.map(u=>({methodName:"getTransaction",args:this._buildArgsAtLeastConfirmed([u],n,"jsonParsed",i)}));return(await this._rpcBatchRequest(s)).map(u=>{let y=Y(u,Go);if("error"in y)throw new re(y.error,"failed to get transactions");return y.result})}async getTransactions(e,t){let{commitment:n,config:i}=Be(t),s=e.map(u=>({methodName:"getTransaction",args:this._buildArgsAtLeastConfirmed([u],n,void 0,i)}));return(await this._rpcBatchRequest(s)).map(u=>{let y=Y(u,bl);if("error"in y)throw new re(y.error,"failed to get transactions");let S=y.result;return S&&{...S,transaction:{...S.transaction,message:yl(S.version,S.transaction.message)}}})}async getConfirmedBlock(e,t){let n=this._buildArgsAtLeastConfirmed([e],t),i=await this._rpcRequest("getBlock",n),s=Y(i,CS);if("error"in s)throw new re(s.error,"failed to get confirmed block");let o=s.result;if(!o)throw new Error("Confirmed block "+e+" not found");let l={...o,transactions:o.transactions.map(({transaction:u,meta:y})=>{let S=new ni(u.message);return{meta:y,transaction:{...u,message:S}}})};return{...l,transactions:l.transactions.map(({transaction:u,meta:y})=>({meta:y,transaction:ge.populate(u.message,u.signatures)}))}}async getBlocks(e,t,n){let i=this._buildArgsAtLeastConfirmed(t!==void 0?[e,t]:[e],n),s=await this._rpcRequest("getBlocks",i),o=Y(s,he(X(M())));if("error"in o)throw new re(o.error,"failed to get blocks");return o.result}async getBlockSignatures(e,t){let n=this._buildArgsAtLeastConfirmed([e],t,void 0,{transactionDetails:"signatures",rewards:!1}),i=await this._rpcRequest("getBlock",n),s=Y(i,Sh);if("error"in s)throw new re(s.error,"failed to get block");let o=s.result;if(!o)throw new Error("Block "+e+" not found");return o}async getConfirmedBlockSignatures(e,t){let n=this._buildArgsAtLeastConfirmed([e],t,void 0,{transactionDetails:"signatures",rewards:!1}),i=await this._rpcRequest("getBlock",n),s=Y(i,Sh);if("error"in s)throw new re(s.error,"failed to get confirmed block");let o=s.result;if(!o)throw new Error("Confirmed block "+e+" not found");return o}async getConfirmedTransaction(e,t){let n=this._buildArgsAtLeastConfirmed([e],t),i=await this._rpcRequest("getTransaction",n),s=Y(i,bl);if("error"in s)throw new re(s.error,"failed to get transaction");let o=s.result;if(!o)return o;let l=new ni(o.transaction.message),u=o.transaction.signatures;return{...o,transaction:ge.populate(l,u)}}async getParsedConfirmedTransaction(e,t){let n=this._buildArgsAtLeastConfirmed([e],t,"jsonParsed"),i=await this._rpcRequest("getTransaction",n),s=Y(i,Go);if("error"in s)throw new re(s.error,"failed to get confirmed transaction");return s.result}async getParsedConfirmedTransactions(e,t){let n=e.map(o=>({methodName:"getTransaction",args:this._buildArgsAtLeastConfirmed([o],t,"jsonParsed")}));return(await this._rpcBatchRequest(n)).map(o=>{let l=Y(o,Go);if("error"in l)throw new re(l.error,"failed to get confirmed transactions");return l.result})}async getConfirmedSignaturesForAddress(e,t,n){let i={},s=await this.getFirstAvailableBlock();for(;!("until"in i)&&(t--,!(t<=0||t<s));)try{let u=await this.getConfirmedBlockSignatures(t,"finalized");u.signatures.length>0&&(i.until=u.signatures[u.signatures.length-1].toString())}catch(u){if(u instanceof Error&&u.message.includes("skipped"))continue;throw u}let o=await this.getSlot("finalized");for(;!("before"in i)&&(n++,!(n>o));)try{let u=await this.getConfirmedBlockSignatures(n);u.signatures.length>0&&(i.before=u.signatures[u.signatures.length-1].toString())}catch(u){if(u instanceof Error&&u.message.includes("skipped"))continue;throw u}return(await this.getConfirmedSignaturesForAddress2(e,i)).map(u=>u.signature)}async getConfirmedSignaturesForAddress2(e,t,n){let i=this._buildArgsAtLeastConfirmed([e.toBase58()],n,void 0,t),s=await this._rpcRequest("getConfirmedSignaturesForAddress2",i),o=Y(s,aS);if("error"in o)throw new re(o.error,"failed to get confirmed signatures for address");return o.result}async getSignaturesForAddress(e,t,n){let i=this._buildArgsAtLeastConfirmed([e.toBase58()],n,void 0,t),s=await this._rpcRequest("getSignaturesForAddress",i),o=Y(s,cS);if("error"in o)throw new re(o.error,"failed to get signatures for address");return o.result}async getAddressLookupTable(e,t){let{context:n,value:i}=await this.getAccountInfoAndContext(e,t),s=null;return i!==null&&(s=new Qo({key:e,state:Qo.deserialize(i.data)})),{context:n,value:s}}async getNonceAndContext(e,t){let{context:n,value:i}=await this.getAccountInfoAndContext(e,t),s=null;return i!==null&&(s=El.fromAccountData(i.data)),{context:n,value:s}}async getNonce(e,t){return await this.getNonceAndContext(e,t).then(n=>n.value).catch(n=>{throw new Error("failed to get nonce for account "+e.toBase58()+": "+n)})}async requestAirdrop(e,t){let n=await this._rpcRequest("requestAirdrop",[e.toBase58(),t]),i=Y(n,DS);if("error"in i)throw new re(i.error,`airdrop to ${e.toBase58()} failed`);return i.result}async _blockhashWithExpiryBlockHeight(e){if(!e){for(;this._pollingBlockhash;)await ei(100);let n=Date.now()-this._blockhashInfo.lastFetch>=k_;if(this._blockhashInfo.latestBlockhash!==null&&!n)return this._blockhashInfo.latestBlockhash}return await this._pollNewBlockhash()}async _pollNewBlockhash(){this._pollingBlockhash=!0;try{let e=Date.now(),t=this._blockhashInfo.latestBlockhash,n=t?t.blockhash:null;for(let i=0;i<50;i++){let s=await this.getLatestBlockhash("finalized");if(n!==s.blockhash)return this._blockhashInfo={latestBlockhash:s,lastFetch:Date.now(),transactionSignatures:[],simulatedSignatures:[]},s;await ei($h/2)}throw new Error(`Unable to obtain a new blockhash after ${Date.now()-e}ms`)}finally{this._pollingBlockhash=!1}}async getStakeMinimumDelegation(e){let{commitment:t,config:n}=Be(e),i=this._buildArgs([],t,"base64",n),s=await this._rpcRequest("getStakeMinimumDelegation",i),o=Y(s,We(M()));if("error"in o)throw new re(o.error,"failed to get stake minimum delegation");return o.result}async simulateTransaction(e,t,n){if("message"in e){let N=e.serialize(),$=ae.Buffer.from(N).toString("base64");if(Array.isArray(t)||n!==void 0)throw new Error("Invalid arguments");let D=t||{};D.encoding="base64","commitment"in D||(D.commitment=this.commitment),t&&typeof t=="object"&&"innerInstructions"in t&&(D.innerInstructions=t.innerInstructions);let L=[$,D],K=await this._rpcRequest("simulateTransaction",L),G=Y(K,vh);if("error"in G)throw new Error("failed to simulate transaction: "+G.error.message);return G.result}let i;if(e instanceof ge){let B=e;i=new ge,i.feePayer=B.feePayer,i.instructions=e.instructions,i.nonceInfo=B.nonceInfo,i.signatures=B.signatures}else i=ge.populate(e),i._message=i._json=void 0;if(t!==void 0&&!Array.isArray(t))throw new Error("Invalid arguments");let s=t;if(i.nonceInfo&&s)i.sign(...s);else{let B=this._disableBlockhashCaching;for(;;){let N=await this._blockhashWithExpiryBlockHeight(B);if(i.lastValidBlockHeight=N.lastValidBlockHeight,i.recentBlockhash=N.blockhash,!s)break;if(i.sign(...s),!i.signature)throw new Error("!signature");let $=i.signature.toString("base64");if(!this._blockhashInfo.simulatedSignatures.includes($)&&!this._blockhashInfo.transactionSignatures.includes($)){this._blockhashInfo.simulatedSignatures.push($);break}else B=!0}}let o=i._compile(),l=o.serialize(),y=i._serialize(l).toString("base64"),S={encoding:"base64",commitment:this.commitment};if(n){let B=(Array.isArray(n)?n:o.nonProgramIds()).map(N=>N.toBase58());S.accounts={encoding:"base64",addresses:B}}s&&(S.sigVerify=!0),t&&typeof t=="object"&&"innerInstructions"in t&&(S.innerInstructions=t.innerInstructions);let R=[y,S],I=await this._rpcRequest("simulateTransaction",R),k=Y(I,vh);if("error"in k){let B;if("data"in k.error&&(B=k.error.data.logs,B&&Array.isArray(B))){let N=`
    `,$=N+B.join(N);console.error(k.error.message,$)}throw new Is({action:"simulate",signature:"",transactionMessage:k.error.message,logs:B})}return k.result}async sendTransaction(e,t,n){if("version"in e){if(t&&Array.isArray(t))throw new Error("Invalid arguments");let o=e.serialize();return await this.sendRawTransaction(o,t)}if(t===void 0||!Array.isArray(t))throw new Error("Invalid arguments");let i=t;if(e.nonceInfo)e.sign(...i);else{let o=this._disableBlockhashCaching;for(;;){let l=await this._blockhashWithExpiryBlockHeight(o);if(e.lastValidBlockHeight=l.lastValidBlockHeight,e.recentBlockhash=l.blockhash,e.sign(...i),!e.signature)throw new Error("!signature");let u=e.signature.toString("base64");if(this._blockhashInfo.transactionSignatures.includes(u))o=!0;else{this._blockhashInfo.transactionSignatures.push(u);break}}}let s=e.serialize();return await this.sendRawTransaction(s,n)}async sendRawTransaction(e,t){let n=we(e).toString("base64");return await this.sendEncodedTransaction(n,t)}async sendEncodedTransaction(e,t){let n={encoding:"base64"},i=t&&t.skipPreflight,s=i===!0?"processed":t&&t.preflightCommitment||this.commitment;t&&t.maxRetries!=null&&(n.maxRetries=t.maxRetries),t&&t.minContextSlot!=null&&(n.minContextSlot=t.minContextSlot),i&&(n.skipPreflight=i),s&&(n.preflightCommitment=s);let o=[e,n],l=await this._rpcRequest("sendTransaction",o),u=Y(l,US);if("error"in u){let y;throw"data"in u.error&&(y=u.error.data.logs),new Is({action:i?"send":"simulate",signature:"",transactionMessage:u.error.message,logs:y})}return u.result}_wsOnOpen(){this._rpcWebSocketConnected=!0,this._rpcWebSocketHeartbeat=setInterval(()=>{(async()=>{try{await this._rpcWebSocket.notify("ping")}catch{}})()},5e3),this._updateSubscriptions()}_wsOnError(e){this._rpcWebSocketConnected=!1,console.error("ws error:",e.message)}_wsOnClose(e){if(this._rpcWebSocketConnected=!1,this._rpcWebSocketGeneration=(this._rpcWebSocketGeneration+1)%Number.MAX_SAFE_INTEGER,this._rpcWebSocketIdleTimeout&&(clearTimeout(this._rpcWebSocketIdleTimeout),this._rpcWebSocketIdleTimeout=null),this._rpcWebSocketHeartbeat&&(clearInterval(this._rpcWebSocketHeartbeat),this._rpcWebSocketHeartbeat=null),e===1e3){this._updateSubscriptions();return}this._subscriptionCallbacksByServerSubscriptionId={},Object.entries(this._subscriptionsByHash).forEach(([t,n])=>{this._setSubscription(t,{...n,state:"pending"})})}_setSubscription(e,t){let n=this._subscriptionsByHash[e]?.state;if(this._subscriptionsByHash[e]=t,n!==t.state){let i=this._subscriptionStateChangeCallbacksByHash[e];i&&i.forEach(s=>{try{s(t.state)}catch{}})}}_onSubscriptionStateChange(e,t){let n=this._subscriptionHashByClientSubscriptionId[e];if(n==null)return()=>{};let i=this._subscriptionStateChangeCallbacksByHash[n]||=new Set;return i.add(t),()=>{i.delete(t),i.size===0&&delete this._subscriptionStateChangeCallbacksByHash[n]}}async _updateSubscriptions(){if(Object.keys(this._subscriptionsByHash).length===0){this._rpcWebSocketConnected&&(this._rpcWebSocketConnected=!1,this._rpcWebSocketIdleTimeout=setTimeout(()=>{this._rpcWebSocketIdleTimeout=null;try{this._rpcWebSocket.close()}catch(n){n instanceof Error&&console.log(`Error when closing socket connection: ${n.message}`)}},500));return}if(this._rpcWebSocketIdleTimeout!==null&&(clearTimeout(this._rpcWebSocketIdleTimeout),this._rpcWebSocketIdleTimeout=null,this._rpcWebSocketConnected=!0),!this._rpcWebSocketConnected){this._rpcWebSocket.connect();return}let e=this._rpcWebSocketGeneration,t=()=>e===this._rpcWebSocketGeneration;await Promise.all(Object.keys(this._subscriptionsByHash).map(async n=>{let i=this._subscriptionsByHash[n];if(i!==void 0)switch(i.state){case"pending":case"unsubscribed":if(i.callbacks.size===0){delete this._subscriptionsByHash[n],i.state==="unsubscribed"&&delete this._subscriptionCallbacksByServerSubscriptionId[i.serverSubscriptionId],await this._updateSubscriptions();return}await(async()=>{let{args:s,method:o}=i;try{this._setSubscription(n,{...i,state:"subscribing"});let l=await this._rpcWebSocket.call(o,s);this._setSubscription(n,{...i,serverSubscriptionId:l,state:"subscribed"}),this._subscriptionCallbacksByServerSubscriptionId[l]=i.callbacks,await this._updateSubscriptions()}catch(l){if(console.error(`Received ${l instanceof Error?"":"JSON-RPC "}error calling \`${o}\``,{args:s,error:l}),!t())return;this._setSubscription(n,{...i,state:"pending"}),await this._updateSubscriptions()}})();break;case"subscribed":i.callbacks.size===0&&await(async()=>{let{serverSubscriptionId:s,unsubscribeMethod:o}=i;if(this._subscriptionsAutoDisposedByRpc.has(s))this._subscriptionsAutoDisposedByRpc.delete(s);else{this._setSubscription(n,{...i,state:"unsubscribing"}),this._setSubscription(n,{...i,state:"unsubscribing"});try{await this._rpcWebSocket.call(o,[s])}catch(l){if(l instanceof Error&&console.error(`${o} error:`,l.message),!t())return;this._setSubscription(n,{...i,state:"subscribed"}),await this._updateSubscriptions();return}}this._setSubscription(n,{...i,state:"unsubscribed"}),await this._updateSubscriptions()})();break}}))}_handleServerNotification(e,t){let n=this._subscriptionCallbacksByServerSubscriptionId[e];n!==void 0&&n.forEach(i=>{try{i(...t)}catch(s){console.error(s)}})}_wsOnAccountNotification(e){let{result:t,subscription:n}=Y(e,lS);this._handleServerNotification(n,[t.value,t.context])}_makeSubscription(e,t){let n=this._nextClientSubscriptionId++,i=yh([e.method,t]),s=this._subscriptionsByHash[i];return s===void 0?this._subscriptionsByHash[i]={...e,args:t,callbacks:new Set([e.callback]),state:"pending"}:s.callbacks.add(e.callback),this._subscriptionHashByClientSubscriptionId[n]=i,this._subscriptionDisposeFunctionsByClientSubscriptionId[n]=async()=>{delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n],delete this._subscriptionHashByClientSubscriptionId[n];let o=this._subscriptionsByHash[i];Ce(o!==void 0,`Could not find a \`Subscription\` when tearing down client subscription #${n}`),o.callbacks.delete(e.callback),await this._updateSubscriptions()},this._updateSubscriptions(),n}onAccountChange(e,t,n){let{commitment:i,config:s}=Be(n),o=this._buildArgs([e.toBase58()],i||this._commitment||"finalized","base64",s);return this._makeSubscription({callback:t,method:"accountSubscribe",unsubscribeMethod:"accountUnsubscribe"},o)}async removeAccountChangeListener(e){await this._unsubscribeClientSubscription(e,"account change")}_wsOnProgramAccountNotification(e){let{result:t,subscription:n}=Y(e,dS);this._handleServerNotification(n,[{accountId:t.value.pubkey,accountInfo:t.value.account},t.context])}onProgramAccountChange(e,t,n,i){let{commitment:s,config:o}=Be(n),l=this._buildArgs([e.toBase58()],s||this._commitment||"finalized","base64",o||(i?{filters:wh(i)}:void 0));return this._makeSubscription({callback:t,method:"programSubscribe",unsubscribeMethod:"programUnsubscribe"},l)}async removeProgramAccountChangeListener(e){await this._unsubscribeClientSubscription(e,"program account change")}onLogs(e,t,n){let i=this._buildArgs([typeof e=="object"?{mentions:[e.toString()]}:e],n||this._commitment||"finalized");return this._makeSubscription({callback:t,method:"logsSubscribe",unsubscribeMethod:"logsUnsubscribe"},i)}async removeOnLogsListener(e){await this._unsubscribeClientSubscription(e,"logs")}_wsOnLogsNotification(e){let{result:t,subscription:n}=Y(e,FS);this._handleServerNotification(n,[t.value,t.context])}_wsOnSlotNotification(e){let{result:t,subscription:n}=Y(e,hS);this._handleServerNotification(n,[t])}onSlotChange(e){return this._makeSubscription({callback:e,method:"slotSubscribe",unsubscribeMethod:"slotUnsubscribe"},[])}async removeSlotChangeListener(e){await this._unsubscribeClientSubscription(e,"slot change")}_wsOnSlotUpdatesNotification(e){let{result:t,subscription:n}=Y(e,mS);this._handleServerNotification(n,[t])}onSlotUpdate(e){return this._makeSubscription({callback:e,method:"slotsUpdatesSubscribe",unsubscribeMethod:"slotsUpdatesUnsubscribe"},[])}async removeSlotUpdateListener(e){await this._unsubscribeClientSubscription(e,"slot update")}async _unsubscribeClientSubscription(e,t){let n=this._subscriptionDisposeFunctionsByClientSubscriptionId[e];n?await n():console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)}_buildArgs(e,t,n,i){let s=t||this._commitment;if(s||n||i){let o={};n&&(o.encoding=n),s&&(o.commitment=s),i&&(o=Object.assign(o,i)),e.push(o)}return e}_buildArgsAtLeastConfirmed(e,t,n,i){let s=t||this._commitment;if(s&&!["confirmed","finalized"].includes(s))throw new Error("Using Connection with default commitment: `"+this._commitment+"`, but method requires at least `confirmed`");return this._buildArgs(e,t,n,i)}_wsOnSignatureNotification(e){let{result:t,subscription:n}=Y(e,gS);t.value!=="receivedSignature"&&this._subscriptionsAutoDisposedByRpc.add(n),this._handleServerNotification(n,t.value==="receivedSignature"?[{type:"received"},t.context]:[{type:"status",result:t.value},t.context])}onSignature(e,t,n){let i=this._buildArgs([e],n||this._commitment||"finalized"),s=this._makeSubscription({callback:(o,l)=>{if(o.type==="status"){t(o.result,l);try{this.removeSignatureListener(s)}catch{}}},method:"signatureSubscribe",unsubscribeMethod:"signatureUnsubscribe"},i);return s}onSignatureWithOptions(e,t,n){let{commitment:i,...s}={...n,commitment:n&&n.commitment||this._commitment||"finalized"},o=this._buildArgs([e],i,void 0,s),l=this._makeSubscription({callback:(u,y)=>{t(u,y);try{this.removeSignatureListener(l)}catch{}},method:"signatureSubscribe",unsubscribeMethod:"signatureUnsubscribe"},o);return l}async removeSignatureListener(e){await this._unsubscribeClientSubscription(e,"signature result")}_wsOnRootNotification(e){let{result:t,subscription:n}=Y(e,yS);this._handleServerNotification(n,[t])}onRootChange(e){return this._makeSubscription({callback:e,method:"rootSubscribe",unsubscribeMethod:"rootUnsubscribe"},[])}async removeRootChangeListener(e){await this._unsubscribeClientSubscription(e,"root change")}},qe=class r{constructor(e){this._keypair=void 0,this._keypair=e??dh()}static generate(){return new r(dh())}static fromSecretKey(e,t){if(e.byteLength!==64)throw new Error("bad secret key size");let n=e.slice(32,64);if(!t||!t.skipValidation){let i=e.slice(0,32),s=Sl(i);for(let o=0;o<32;o++)if(n[o]!==s[o])throw new Error("provided secretKey is invalid")}return new r({publicKey:n,secretKey:e})}static fromSeed(e){let t=Sl(e),n=new Uint8Array(64);return n.set(e),n.set(t,32),new r({publicKey:t,secretKey:n})}get publicKey(){return new V(this._keypair.publicKey)}get secretKey(){return new Uint8Array(this._keypair.secretKey)}},Es=Object.freeze({CreateLookupTable:{index:0,layout:O.struct([O.u32("instruction"),Mi("recentSlot"),O.u8("bumpSeed")])},FreezeLookupTable:{index:1,layout:O.struct([O.u32("instruction")])},ExtendLookupTable:{index:2,layout:O.struct([O.u32("instruction"),Mi(),O.seq(me(),O.offset(O.u32(),-8),"addresses")])},DeactivateLookupTable:{index:3,layout:O.struct([O.u32("instruction")])},CloseLookupTable:{index:4,layout:O.struct([O.u32("instruction")])}});var Cl=class{constructor(){}static createLookupTable(e){let[t,n]=V.findProgramAddressSync([e.authority.toBuffer(),qc().encode(e.recentSlot)],this.programId),i=Es.CreateLookupTable,s=_e(i,{recentSlot:BigInt(e.recentSlot),bumpSeed:n}),o=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1},{pubkey:e.payer,isSigner:!0,isWritable:!0},{pubkey:Te.programId,isSigner:!1,isWritable:!1}];return[new ve({programId:this.programId,keys:o,data:s}),t]}static freezeLookupTable(e){let t=Es.FreezeLookupTable,n=_e(t),i=[{pubkey:e.lookupTable,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1}];return new ve({programId:this.programId,keys:i,data:n})}static extendLookupTable(e){let t=Es.ExtendLookupTable,n=_e(t,{addresses:e.addresses.map(s=>s.toBytes())}),i=[{pubkey:e.lookupTable,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1}];return e.payer&&i.push({pubkey:e.payer,isSigner:!0,isWritable:!0},{pubkey:Te.programId,isSigner:!1,isWritable:!1}),new ve({programId:this.programId,keys:i,data:n})}static deactivateLookupTable(e){let t=Es.DeactivateLookupTable,n=_e(t),i=[{pubkey:e.lookupTable,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1}];return new ve({programId:this.programId,keys:i,data:n})}static closeLookupTable(e){let t=Es.CloseLookupTable,n=_e(t),i=[{pubkey:e.lookupTable,isSigner:!1,isWritable:!0},{pubkey:e.authority,isSigner:!0,isWritable:!1},{pubkey:e.recipient,isSigner:!1,isWritable:!0}];return new ve({programId:this.programId,keys:i,data:n})}};Cl.programId=new V("AddressLookupTab1e1111111111111111111111111");var jo=Object.freeze({RequestUnits:{index:0,layout:O.struct([O.u8("instruction"),O.u32("units"),O.u32("additionalFee")])},RequestHeapFrame:{index:1,layout:O.struct([O.u8("instruction"),O.u32("bytes")])},SetComputeUnitLimit:{index:2,layout:O.struct([O.u8("instruction"),O.u32("units")])},SetComputeUnitPrice:{index:3,layout:O.struct([O.u8("instruction"),Mi("microLamports")])}}),Ts=class{constructor(){}static requestUnits(e){let t=jo.RequestUnits,n=_e(t,e);return new ve({keys:[],programId:this.programId,data:n})}static requestHeapFrame(e){let t=jo.RequestHeapFrame,n=_e(t,e);return new ve({keys:[],programId:this.programId,data:n})}static setComputeUnitLimit(e){let t=jo.SetComputeUnitLimit,n=_e(t,e);return new ve({keys:[],programId:this.programId,data:n})}static setComputeUnitPrice(e){let t=jo.SetComputeUnitPrice,n=_e(t,{microLamports:BigInt(e.microLamports)});return new ve({keys:[],programId:this.programId,data:n})}};Ts.programId=new V("ComputeBudget111111111111111111111111111111");var Rh=64,Ah=32,Eh=64,kh=O.struct([O.u8("numSignatures"),O.u8("padding"),O.u16("signatureOffset"),O.u16("signatureInstructionIndex"),O.u16("publicKeyOffset"),O.u16("publicKeyInstructionIndex"),O.u16("messageDataOffset"),O.u16("messageDataSize"),O.u16("messageInstructionIndex")]),Pl=class r{constructor(){}static createInstructionWithPublicKey(e){let{publicKey:t,message:n,signature:i,instructionIndex:s}=e;Ce(t.length===Ah,`Public Key must be ${Ah} bytes but received ${t.length} bytes`),Ce(i.length===Eh,`Signature must be ${Eh} bytes but received ${i.length} bytes`);let o=kh.span,l=o+t.length,u=l+i.length,y=1,S=ae.Buffer.alloc(u+n.length),R=s??65535;return kh.encode({numSignatures:y,padding:0,signatureOffset:l,signatureInstructionIndex:R,publicKeyOffset:o,publicKeyInstructionIndex:R,messageDataOffset:u,messageDataSize:n.length,messageInstructionIndex:R},S),S.fill(t,o),S.fill(i,l),S.fill(n,u),new ve({keys:[],programId:r.programId,data:S})}static createInstructionWithPrivateKey(e){let{privateKey:t,message:n,instructionIndex:i}=e;Ce(t.length===Rh,`Private key must be ${Rh} bytes but received ${t.length} bytes`);try{let s=qe.fromSecretKey(t),o=s.publicKey.toBytes(),l=Bh(n,s.secretKey);return this.createInstructionWithPublicKey({publicKey:o,message:n,signature:l,instructionIndex:i})}catch(s){throw new Error(`Error creating instruction; ${s}`)}}};Pl.programId=new V("Ed25519SigVerify111111111111111111111111111");var HS=(r,e)=>{let t=Vo.sign(r,e);return[t.toCompactRawBytes(),t.recovery]};Vo.utils.isValidPrivateKey;var WS=Vo.getPublicKey,Ih=32,wl=20,xh=64,qS=11,vl=O.struct([O.u8("numSignatures"),O.u16("signatureOffset"),O.u8("signatureInstructionIndex"),O.u16("ethAddressOffset"),O.u8("ethAddressInstructionIndex"),O.u16("messageDataOffset"),O.u16("messageDataSize"),O.u8("messageInstructionIndex"),O.blob(20,"ethAddress"),O.blob(64,"signature"),O.u8("recoveryId")]),Nl=class r{constructor(){}static publicKeyToEthAddress(e){Ce(e.length===xh,`Public key must be ${xh} bytes but received ${e.length} bytes`);try{return ae.Buffer.from(ol(we(e))).slice(-wl)}catch(t){throw new Error(`Error constructing Ethereum address: ${t}`)}}static createInstructionWithPublicKey(e){let{publicKey:t,message:n,signature:i,recoveryId:s,instructionIndex:o}=e;return r.createInstructionWithEthAddress({ethAddress:r.publicKeyToEthAddress(t),message:n,signature:i,recoveryId:s,instructionIndex:o})}static createInstructionWithEthAddress(e){let{ethAddress:t,message:n,signature:i,recoveryId:s,instructionIndex:o=0}=e,l;typeof t=="string"?t.startsWith("0x")?l=ae.Buffer.from(t.substr(2),"hex"):l=ae.Buffer.from(t,"hex"):l=t,Ce(l.length===wl,`Address must be ${wl} bytes but received ${l.length} bytes`);let u=1+qS,y=u,S=u+l.length,R=S+i.length+1,I=1,k=ae.Buffer.alloc(vl.span+n.length);return vl.encode({numSignatures:I,signatureOffset:S,signatureInstructionIndex:o,ethAddressOffset:y,ethAddressInstructionIndex:o,messageDataOffset:R,messageDataSize:n.length,messageInstructionIndex:o,signature:we(i),ethAddress:we(l),recoveryId:s},k),k.fill(we(n),vl.span),new ve({keys:[],programId:r.programId,data:k})}static createInstructionWithPrivateKey(e){let{privateKey:t,message:n,instructionIndex:i}=e;Ce(t.length===Ih,`Private key must be ${Ih} bytes but received ${t.length} bytes`);try{let s=we(t),o=WS(s,!1).slice(1),l=ae.Buffer.from(ol(we(n))),[u,y]=HS(l,s);return this.createInstructionWithPublicKey({publicKey:o,message:n,signature:u,recoveryId:y,instructionIndex:i})}catch(s){throw new Error(`Error creating instruction; ${s}`)}}};Nl.programId=new V("KeccakSecp256k11111111111111111111111111111");var Yh,VS=new V("StakeConfig11111111111111111111111111111111");var Os=class{constructor(e,t,n){this.unixTimestamp=void 0,this.epoch=void 0,this.custodian=void 0,this.unixTimestamp=e,this.epoch=t,this.custodian=n}};Yh=Os;Os.default=new Yh(0,0,V.default);var In=Object.freeze({Initialize:{index:0,layout:O.struct([O.u32("instruction"),a_(),c_()])},Authorize:{index:1,layout:O.struct([O.u32("instruction"),me("newAuthorized"),O.u32("stakeAuthorizationType")])},Delegate:{index:2,layout:O.struct([O.u32("instruction")])},Split:{index:3,layout:O.struct([O.u32("instruction"),O.ns64("lamports")])},Withdraw:{index:4,layout:O.struct([O.u32("instruction"),O.ns64("lamports")])},Deactivate:{index:5,layout:O.struct([O.u32("instruction")])},Merge:{index:7,layout:O.struct([O.u32("instruction")])},AuthorizeWithSeed:{index:8,layout:O.struct([O.u32("instruction"),me("newAuthorized"),O.u32("stakeAuthorizationType"),Ni("authoritySeed"),me("authorityOwner")])}}),Ek=Object.freeze({Staker:{index:0},Withdrawer:{index:1}}),ra=class{constructor(){}static initialize(e){let{stakePubkey:t,authorized:n,lockup:i}=e,s=i||Os.default,o=In.Initialize,l=_e(o,{authorized:{staker:we(n.staker.toBuffer()),withdrawer:we(n.withdrawer.toBuffer())},lockup:{unixTimestamp:s.unixTimestamp,epoch:s.epoch,custodian:we(s.custodian.toBuffer())}}),u={keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:ii,isSigner:!1,isWritable:!1}],programId:this.programId,data:l};return new ve(u)}static createAccountWithSeed(e){let t=new ge;t.add(Te.createAccountWithSeed({fromPubkey:e.fromPubkey,newAccountPubkey:e.stakePubkey,basePubkey:e.basePubkey,seed:e.seed,lamports:e.lamports,space:this.space,programId:this.programId}));let{stakePubkey:n,authorized:i,lockup:s}=e;return t.add(this.initialize({stakePubkey:n,authorized:i,lockup:s}))}static createAccount(e){let t=new ge;t.add(Te.createAccount({fromPubkey:e.fromPubkey,newAccountPubkey:e.stakePubkey,lamports:e.lamports,space:this.space,programId:this.programId}));let{stakePubkey:n,authorized:i,lockup:s}=e;return t.add(this.initialize({stakePubkey:n,authorized:i,lockup:s}))}static delegate(e){let{stakePubkey:t,authorizedPubkey:n,votePubkey:i}=e,s=In.Delegate,o=_e(s);return new ge().add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:rn,isSigner:!1,isWritable:!1},{pubkey:pl,isSigner:!1,isWritable:!1},{pubkey:VS,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}],programId:this.programId,data:o})}static authorize(e){let{stakePubkey:t,authorizedPubkey:n,newAuthorizedPubkey:i,stakeAuthorizationType:s,custodianPubkey:o}=e,l=In.Authorize,u=_e(l,{newAuthorized:we(i.toBuffer()),stakeAuthorizationType:s.index}),y=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:rn,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}];return o&&y.push({pubkey:o,isSigner:!0,isWritable:!1}),new ge().add({keys:y,programId:this.programId,data:u})}static authorizeWithSeed(e){let{stakePubkey:t,authorityBase:n,authoritySeed:i,authorityOwner:s,newAuthorizedPubkey:o,stakeAuthorizationType:l,custodianPubkey:u}=e,y=In.AuthorizeWithSeed,S=_e(y,{newAuthorized:we(o.toBuffer()),stakeAuthorizationType:l.index,authoritySeed:i,authorityOwner:we(s.toBuffer())}),R=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1},{pubkey:rn,isSigner:!1,isWritable:!1}];return u&&R.push({pubkey:u,isSigner:!0,isWritable:!1}),new ge().add({keys:R,programId:this.programId,data:S})}static splitInstruction(e){let{stakePubkey:t,authorizedPubkey:n,splitStakePubkey:i,lamports:s}=e,o=In.Split,l=_e(o,{lamports:s});return new ve({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:i,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}],programId:this.programId,data:l})}static split(e,t){let n=new ge;return n.add(Te.createAccount({fromPubkey:e.authorizedPubkey,newAccountPubkey:e.splitStakePubkey,lamports:t,space:this.space,programId:this.programId})),n.add(this.splitInstruction(e))}static splitWithSeed(e,t){let{stakePubkey:n,authorizedPubkey:i,splitStakePubkey:s,basePubkey:o,seed:l,lamports:u}=e,y=new ge;return y.add(Te.allocate({accountPubkey:s,basePubkey:o,seed:l,space:this.space,programId:this.programId})),t&&t>0&&y.add(Te.transfer({fromPubkey:e.authorizedPubkey,toPubkey:s,lamports:t})),y.add(this.splitInstruction({stakePubkey:n,authorizedPubkey:i,splitStakePubkey:s,lamports:u}))}static merge(e){let{stakePubkey:t,sourceStakePubKey:n,authorizedPubkey:i}=e,s=In.Merge,o=_e(s);return new ge().add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:rn,isSigner:!1,isWritable:!1},{pubkey:pl,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!0,isWritable:!1}],programId:this.programId,data:o})}static withdraw(e){let{stakePubkey:t,authorizedPubkey:n,toPubkey:i,lamports:s,custodianPubkey:o}=e,l=In.Withdraw,u=_e(l,{lamports:s}),y=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:i,isSigner:!1,isWritable:!0},{pubkey:rn,isSigner:!1,isWritable:!1},{pubkey:pl,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}];return o&&y.push({pubkey:o,isSigner:!0,isWritable:!1}),new ge().add({keys:y,programId:this.programId,data:u})}static deactivate(e){let{stakePubkey:t,authorizedPubkey:n}=e,i=In.Deactivate,s=_e(i);return new ge().add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:rn,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}],programId:this.programId,data:s})}};ra.programId=new V("Stake11111111111111111111111111111111111111");ra.space=200;var ks=Object.freeze({InitializeAccount:{index:0,layout:O.struct([O.u32("instruction"),l_()])},Authorize:{index:1,layout:O.struct([O.u32("instruction"),me("newAuthorized"),O.u32("voteAuthorizationType")])},Withdraw:{index:3,layout:O.struct([O.u32("instruction"),O.ns64("lamports")])},UpdateValidatorIdentity:{index:4,layout:O.struct([O.u32("instruction")])},AuthorizeWithSeed:{index:10,layout:O.struct([O.u32("instruction"),u_()])}}),kk=Object.freeze({Voter:{index:0},Withdrawer:{index:1}}),na=class r{constructor(){}static initializeAccount(e){let{votePubkey:t,nodePubkey:n,voteInit:i}=e,s=ks.InitializeAccount,o=_e(s,{voteInit:{nodePubkey:we(i.nodePubkey.toBuffer()),authorizedVoter:we(i.authorizedVoter.toBuffer()),authorizedWithdrawer:we(i.authorizedWithdrawer.toBuffer()),commission:i.commission}}),l={keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:ii,isSigner:!1,isWritable:!1},{pubkey:rn,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}],programId:this.programId,data:o};return new ve(l)}static createAccount(e){let t=new ge;return t.add(Te.createAccount({fromPubkey:e.fromPubkey,newAccountPubkey:e.votePubkey,lamports:e.lamports,space:this.space,programId:this.programId})),t.add(this.initializeAccount({votePubkey:e.votePubkey,nodePubkey:e.voteInit.nodePubkey,voteInit:e.voteInit}))}static authorize(e){let{votePubkey:t,authorizedPubkey:n,newAuthorizedPubkey:i,voteAuthorizationType:s}=e,o=ks.Authorize,l=_e(o,{newAuthorized:we(i.toBuffer()),voteAuthorizationType:s.index}),u=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:rn,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}];return new ge().add({keys:u,programId:this.programId,data:l})}static authorizeWithSeed(e){let{currentAuthorityDerivedKeyBasePubkey:t,currentAuthorityDerivedKeyOwnerPubkey:n,currentAuthorityDerivedKeySeed:i,newAuthorizedPubkey:s,voteAuthorizationType:o,votePubkey:l}=e,u=ks.AuthorizeWithSeed,y=_e(u,{voteAuthorizeWithSeedArgs:{currentAuthorityDerivedKeyOwnerPubkey:we(n.toBuffer()),currentAuthorityDerivedKeySeed:i,newAuthorized:we(s.toBuffer()),voteAuthorizationType:o.index}}),S=[{pubkey:l,isSigner:!1,isWritable:!0},{pubkey:rn,isSigner:!1,isWritable:!1},{pubkey:t,isSigner:!0,isWritable:!1}];return new ge().add({keys:S,programId:this.programId,data:y})}static withdraw(e){let{votePubkey:t,authorizedWithdrawerPubkey:n,lamports:i,toPubkey:s}=e,o=ks.Withdraw,l=_e(o,{lamports:i}),u=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:s,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!0,isWritable:!1}];return new ge().add({keys:u,programId:this.programId,data:l})}static safeWithdraw(e,t,n){if(e.lamports>t-n)throw new Error("Withdraw will leave vote account with insufficient funds.");return r.withdraw(e)}static updateValidatorIdentity(e){let{votePubkey:t,authorizedWithdrawerPubkey:n,nodePubkey:i}=e,s=ks.UpdateValidatorIdentity,o=_e(s),l=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:i,isSigner:!0,isWritable:!1},{pubkey:n,isSigner:!0,isWritable:!1}];return new ge().add({keys:l,programId:this.programId,data:o})}};na.programId=new V("Vote111111111111111111111111111111111111111");na.space=3762;var Ik=new V("Va1idator1nfo111111111111111111111111111111"),xk=q({name:j(),website:ie(j()),details:ie(j()),iconUrl:ie(j()),keybaseUsername:ie(j())});var Tk=new V("Vote111111111111111111111111111111111111111"),Ok=O.struct([me("nodePubkey"),me("authorizedWithdrawer"),O.u8("commission"),O.nu64(),O.seq(O.struct([O.nu64("slot"),O.u32("confirmationCount")]),O.offset(O.u32(),-8),"votes"),O.u8("rootSlotValid"),O.nu64("rootSlot"),O.nu64(),O.seq(O.struct([O.nu64("epoch"),me("authorizedVoter")]),O.offset(O.u32(),-8),"authorizedVoters"),O.struct([O.seq(O.struct([me("authorizedPubkey"),O.nu64("epochOfLastAuthorizedSwitch"),O.nu64("targetEpoch")]),32,"buf"),O.nu64("idx"),O.u8("isEmpty")],"priorVoters"),O.nu64(),O.seq(O.struct([O.nu64("epoch"),O.nu64("credits"),O.nu64("prevCredits")]),O.offset(O.u32(),-8),"epochCredits"),O.struct([O.nu64("slot"),O.nu64("timestamp")],"lastTimestamp")]);var Mr=new V("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),Ui=new V("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"),Tn=new V("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),Pk=new V("So11111111111111111111111111111111111111112"),Nk=new V("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");var On=r=>{let e=r.decode.bind(r),t=r.encode.bind(r);return{decode:e,encode:t}};var Dl=kt(Qr(),1),Bn=kt(Zh(),1);var aa=r=>e=>{let t=(0,Dl.blob)(r,e),{encode:n,decode:i}=On(t),s=t;return s.decode=(o,l)=>{let u=i(o,l);return(0,Bn.toBigIntLE)(Buffer.from(u))},s.encode=(o,l,u)=>{let y=(0,Bn.toBufferLE)(o,r);return n(y,l,u)},s},ca=r=>e=>{let t=(0,Dl.blob)(r,e),{encode:n,decode:i}=On(t),s=t;return s.decode=(o,l)=>{let u=i(o,l);return(0,Bn.toBigIntBE)(Buffer.from(u))},s.encode=(o,l,u)=>{let y=(0,Bn.toBufferBE)(o,r);return n(y,l,u)},s},Fi=aa(8),Uk=ca(8),XS=aa(16),zk=ca(16),Fk=aa(24),Kk=ca(24),Hk=aa(32),Wk=ca(32);var JS=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Ul=Math.ceil,vr=Math.floor,nr="[BigNumber Error] ",Xh=nr+"Number primitive has more than 15 significant digits: ",Ir=1e14,de=14,zl=9007199254740991,Fl=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Cn=1e7,Pt=1e9;function Jh(r){var e,t,n,i=L.prototype={constructor:L,toString:null,valueOf:null},s=new L(1),o=20,l=4,u=-7,y=21,S=-1e7,R=1e7,I=!1,k=1,B=0,N={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},$="0123456789abcdefghijklmnopqrstuvwxyz",D=!0;function L(v,w){var E,P,T,p,a,c,d,h,m=this;if(!(m instanceof L))return new L(v,w);if(w==null){if(v&&v._isBigNumber===!0){m.s=v.s,!v.c||v.e>R?m.c=m.e=null:v.e<S?m.c=[m.e=0]:(m.e=v.e,m.c=v.c.slice());return}if((c=typeof v=="number")&&v*0==0){if(m.s=1/v<0?(v=-v,-1):1,v===~~v){for(p=0,a=v;a>=10;a/=10,p++);p>R?m.c=m.e=null:(m.e=p,m.c=[v]);return}h=String(v)}else{if(!JS.test(h=String(v)))return n(m,h,c);m.s=h.charCodeAt(0)==45?(h=h.slice(1),-1):1}(p=h.indexOf("."))>-1&&(h=h.replace(".","")),(a=h.search(/e/i))>0?(p<0&&(p=a),p+=+h.slice(a+1),h=h.substring(0,a)):p<0&&(p=h.length)}else{if(Ue(w,2,$.length,"Base"),w==10&&D)return m=new L(v),Q(m,o+m.e+1,l);if(h=String(v),c=typeof v=="number"){if(v*0!=0)return n(m,h,c,w);if(m.s=1/v<0?(h=h.slice(1),-1):1,L.DEBUG&&h.replace(/^0\.0*|\./,"").length>15)throw Error(Xh+v)}else m.s=h.charCodeAt(0)===45?(h=h.slice(1),-1):1;for(E=$.slice(0,w),p=a=0,d=h.length;a<d;a++)if(E.indexOf(P=h.charAt(a))<0){if(P=="."){if(a>p){p=d;continue}}else if(!T&&(h==h.toUpperCase()&&(h=h.toLowerCase())||h==h.toLowerCase()&&(h=h.toUpperCase()))){T=!0,a=-1,p=0;continue}return n(m,String(v),c,w)}c=!1,h=t(h,w,10,m.s),(p=h.indexOf("."))>-1?h=h.replace(".",""):p=h.length}for(a=0;h.charCodeAt(a)===48;a++);for(d=h.length;h.charCodeAt(--d)===48;);if(h=h.slice(a,++d)){if(d-=a,c&&L.DEBUG&&d>15&&(v>zl||v!==vr(v)))throw Error(Xh+m.s*v);if((p=p-a-1)>R)m.c=m.e=null;else if(p<S)m.c=[m.e=0];else{if(m.e=p,m.c=[],a=(p+1)%de,p<0&&(a+=de),a<d){for(a&&m.c.push(+h.slice(0,a)),d-=de;a<d;)m.c.push(+h.slice(a,a+=de));a=de-(h=h.slice(a)).length}else a-=d;for(;a--;h+="0");m.c.push(+h)}}else m.c=[m.e=0]}L.clone=Jh,L.ROUND_UP=0,L.ROUND_DOWN=1,L.ROUND_CEIL=2,L.ROUND_FLOOR=3,L.ROUND_HALF_UP=4,L.ROUND_HALF_DOWN=5,L.ROUND_HALF_EVEN=6,L.ROUND_HALF_CEIL=7,L.ROUND_HALF_FLOOR=8,L.EUCLID=9,L.config=L.set=function(v){var w,E;if(v!=null)if(typeof v=="object"){if(v.hasOwnProperty(w="DECIMAL_PLACES")&&(E=v[w],Ue(E,0,Pt,w),o=E),v.hasOwnProperty(w="ROUNDING_MODE")&&(E=v[w],Ue(E,0,8,w),l=E),v.hasOwnProperty(w="EXPONENTIAL_AT")&&(E=v[w],E&&E.pop?(Ue(E[0],-Pt,0,w),Ue(E[1],0,Pt,w),u=E[0],y=E[1]):(Ue(E,-Pt,Pt,w),u=-(y=E<0?-E:E))),v.hasOwnProperty(w="RANGE"))if(E=v[w],E&&E.pop)Ue(E[0],-Pt,-1,w),Ue(E[1],1,Pt,w),S=E[0],R=E[1];else if(Ue(E,-Pt,Pt,w),E)S=-(R=E<0?-E:E);else throw Error(nr+w+" cannot be zero: "+E);if(v.hasOwnProperty(w="CRYPTO"))if(E=v[w],E===!!E)if(E)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))I=E;else throw I=!E,Error(nr+"crypto unavailable");else I=E;else throw Error(nr+w+" not true or false: "+E);if(v.hasOwnProperty(w="MODULO_MODE")&&(E=v[w],Ue(E,0,9,w),k=E),v.hasOwnProperty(w="POW_PRECISION")&&(E=v[w],Ue(E,0,Pt,w),B=E),v.hasOwnProperty(w="FORMAT"))if(E=v[w],typeof E=="object")N=E;else throw Error(nr+w+" not an object: "+E);if(v.hasOwnProperty(w="ALPHABET"))if(E=v[w],typeof E=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(E))D=E.slice(0,10)=="0123456789",$=E;else throw Error(nr+w+" invalid: "+E)}else throw Error(nr+"Object expected: "+v);return{DECIMAL_PLACES:o,ROUNDING_MODE:l,EXPONENTIAL_AT:[u,y],RANGE:[S,R],CRYPTO:I,MODULO_MODE:k,POW_PRECISION:B,FORMAT:N,ALPHABET:$}},L.isBigNumber=function(v){if(!v||v._isBigNumber!==!0)return!1;if(!L.DEBUG)return!0;var w,E,P=v.c,T=v.e,p=v.s;e:if({}.toString.call(P)=="[object Array]"){if((p===1||p===-1)&&T>=-Pt&&T<=Pt&&T===vr(T)){if(P[0]===0){if(T===0&&P.length===1)return!0;break e}if(w=(T+1)%de,w<1&&(w+=de),String(P[0]).length==w){for(w=0;w<P.length;w++)if(E=P[w],E<0||E>=Ir||E!==vr(E))break e;if(E!==0)return!0}}}else if(P===null&&T===null&&(p===null||p===1||p===-1))return!0;throw Error(nr+"Invalid BigNumber: "+v)},L.maximum=L.max=function(){return G(arguments,-1)},L.minimum=L.min=function(){return G(arguments,1)},L.random=(function(){var v=9007199254740992,w=Math.random()*v&2097151?function(){return vr(Math.random()*v)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(E){var P,T,p,a,c,d=0,h=[],m=new L(s);if(E==null?E=o:Ue(E,0,Pt),a=Ul(E/de),I)if(crypto.getRandomValues){for(P=crypto.getRandomValues(new Uint32Array(a*=2));d<a;)c=P[d]*131072+(P[d+1]>>>11),c>=9e15?(T=crypto.getRandomValues(new Uint32Array(2)),P[d]=T[0],P[d+1]=T[1]):(h.push(c%1e14),d+=2);d=a/2}else if(crypto.randomBytes){for(P=crypto.randomBytes(a*=7);d<a;)c=(P[d]&31)*281474976710656+P[d+1]*1099511627776+P[d+2]*4294967296+P[d+3]*16777216+(P[d+4]<<16)+(P[d+5]<<8)+P[d+6],c>=9e15?crypto.randomBytes(7).copy(P,d):(h.push(c%1e14),d+=7);d=a/7}else throw I=!1,Error(nr+"crypto unavailable");if(!I)for(;d<a;)c=w(),c<9e15&&(h[d++]=c%1e14);for(a=h[--d],E%=de,a&&E&&(c=Fl[de-E],h[d]=vr(a/c)*c);h[d]===0;h.pop(),d--);if(d<0)h=[p=0];else{for(p=-1;h[0]===0;h.splice(0,1),p-=de);for(d=1,c=h[0];c>=10;c/=10,d++);d<de&&(p-=de-d)}return m.e=p,m.c=h,m}})(),L.sum=function(){for(var v=1,w=arguments,E=new L(w[0]);v<w.length;)E=E.plus(w[v++]);return E},t=(function(){var v="0123456789";function w(E,P,T,p){for(var a,c=[0],d,h=0,m=E.length;h<m;){for(d=c.length;d--;c[d]*=P);for(c[0]+=p.indexOf(E.charAt(h++)),a=0;a<c.length;a++)c[a]>T-1&&(c[a+1]==null&&(c[a+1]=0),c[a+1]+=c[a]/T|0,c[a]%=T)}return c.reverse()}return function(E,P,T,p,a){var c,d,h,m,g,_,b,f,A=E.indexOf("."),H=o,F=l;for(A>=0&&(m=B,B=0,E=E.replace(".",""),f=new L(P),_=f.pow(E.length-A),B=m,f.c=w(sn(wr(_.c),_.e,"0"),10,T,v),f.e=f.c.length),b=w(E,P,T,a?(c=$,v):(c=v,$)),h=m=b.length;b[--m]==0;b.pop());if(!b[0])return c.charAt(0);if(A<0?--h:(_.c=b,_.e=h,_.s=p,_=e(_,f,H,F,T),b=_.c,g=_.r,h=_.e),d=h+H+1,A=b[d],m=T/2,g=g||d<0||b[d+1]!=null,g=F<4?(A!=null||g)&&(F==0||F==(_.s<0?3:2)):A>m||A==m&&(F==4||g||F==6&&b[d-1]&1||F==(_.s<0?8:7)),d<1||!b[0])E=g?sn(c.charAt(1),-H,c.charAt(0)):c.charAt(0);else{if(b.length=d,g)for(--T;++b[--d]>T;)b[d]=0,d||(++h,b=[1].concat(b));for(m=b.length;!b[--m];);for(A=0,E="";A<=m;E+=c.charAt(b[A++]));E=sn(E,h,c.charAt(0))}return E}})(),e=(function(){function v(P,T,p){var a,c,d,h,m=0,g=P.length,_=T%Cn,b=T/Cn|0;for(P=P.slice();g--;)d=P[g]%Cn,h=P[g]/Cn|0,a=b*d+h*_,c=_*d+a%Cn*Cn+m,m=(c/p|0)+(a/Cn|0)+b*h,P[g]=c%p;return m&&(P=[m].concat(P)),P}function w(P,T,p,a){var c,d;if(p!=a)d=p>a?1:-1;else for(c=d=0;c<p;c++)if(P[c]!=T[c]){d=P[c]>T[c]?1:-1;break}return d}function E(P,T,p,a){for(var c=0;p--;)P[p]-=c,c=P[p]<T[p]?1:0,P[p]=c*a+P[p]-T[p];for(;!P[0]&&P.length>1;P.splice(0,1));}return function(P,T,p,a,c){var d,h,m,g,_,b,f,A,H,F,W,Z,oe,se,ke,fe,Se,xt=P.s==T.s?1:-1,be=P.c,ue=T.c;if(!be||!be[0]||!ue||!ue[0])return new L(!P.s||!T.s||(be?ue&&be[0]==ue[0]:!ue)?NaN:be&&be[0]==0||!ue?xt*0:xt/0);for(A=new L(xt),H=A.c=[],h=P.e-T.e,xt=p+h+1,c||(c=Ir,h=_r(P.e/de)-_r(T.e/de),xt=xt/de|0),m=0;ue[m]==(be[m]||0);m++);if(ue[m]>(be[m]||0)&&h--,xt<0)H.push(1),g=!0;else{for(se=be.length,fe=ue.length,m=0,xt+=2,_=vr(c/(ue[0]+1)),_>1&&(ue=v(ue,_,c),be=v(be,_,c),fe=ue.length,se=be.length),oe=fe,F=be.slice(0,fe),W=F.length;W<fe;F[W++]=0);Se=ue.slice(),Se=[0].concat(Se),ke=ue[0],ue[1]>=c/2&&ke++;do{if(_=0,d=w(ue,F,fe,W),d<0){if(Z=F[0],fe!=W&&(Z=Z*c+(F[1]||0)),_=vr(Z/ke),_>1)for(_>=c&&(_=c-1),b=v(ue,_,c),f=b.length,W=F.length;w(b,F,f,W)==1;)_--,E(b,fe<f?Se:ue,f,c),f=b.length,d=1;else _==0&&(d=_=1),b=ue.slice(),f=b.length;if(f<W&&(b=[0].concat(b)),E(F,b,W,c),W=F.length,d==-1)for(;w(ue,F,fe,W)<1;)_++,E(F,fe<W?Se:ue,W,c),W=F.length}else d===0&&(_++,F=[0]);H[m++]=_,F[0]?F[W++]=be[oe]||0:(F=[be[oe]],W=1)}while((oe++<se||F[0]!=null)&&xt--);g=F[0]!=null,H[0]||H.splice(0,1)}if(c==Ir){for(m=1,xt=H[0];xt>=10;xt/=10,m++);Q(A,p+(A.e=m+h*de-1)+1,a,g)}else A.e=h,A.r=+g;return A}})();function K(v,w,E,P){var T,p,a,c,d;if(E==null?E=l:Ue(E,0,8),!v.c)return v.toString();if(T=v.c[0],a=v.e,w==null)d=wr(v.c),d=P==1||P==2&&(a<=u||a>=y)?ua(d,a):sn(d,a,"0");else if(v=Q(new L(v),w,E),p=v.e,d=wr(v.c),c=d.length,P==1||P==2&&(w<=p||p<=u)){for(;c<w;d+="0",c++);d=ua(d,p)}else if(w-=a+(P===2&&p>a),d=sn(d,p,"0"),p+1>c){if(--w>0)for(d+=".";w--;d+="0");}else if(w+=p-c,w>0)for(p+1==c&&(d+=".");w--;d+="0");return v.s<0&&T?"-"+d:d}function G(v,w){for(var E,P,T=1,p=new L(v[0]);T<v.length;T++)P=new L(v[T]),(!P.s||(E=ai(p,P))===w||E===0&&p.s===w)&&(p=P);return p}function ee(v,w,E){for(var P=1,T=w.length;!w[--T];w.pop());for(T=w[0];T>=10;T/=10,P++);return(E=P+E*de-1)>R?v.c=v.e=null:E<S?v.c=[v.e=0]:(v.e=E,v.c=w),v}n=(function(){var v=/^(-?)0([xbo])(?=\w[\w.]*$)/i,w=/^([^.]+)\.$/,E=/^\.([^.]+)$/,P=/^-?(Infinity|NaN)$/,T=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(p,a,c,d){var h,m=c?a:a.replace(T,"");if(P.test(m))p.s=isNaN(m)?null:m<0?-1:1;else{if(!c&&(m=m.replace(v,function(g,_,b){return h=(b=b.toLowerCase())=="x"?16:b=="b"?2:8,!d||d==h?_:g}),d&&(h=d,m=m.replace(w,"$1").replace(E,"0.$1")),a!=m))return new L(m,h);if(L.DEBUG)throw Error(nr+"Not a"+(d?" base "+d:"")+" number: "+a);p.s=null}p.c=p.e=null}})();function Q(v,w,E,P){var T,p,a,c,d,h,m,g=v.c,_=Fl;if(g){e:{for(T=1,c=g[0];c>=10;c/=10,T++);if(p=w-T,p<0)p+=de,a=w,d=g[h=0],m=vr(d/_[T-a-1]%10);else if(h=Ul((p+1)/de),h>=g.length)if(P){for(;g.length<=h;g.push(0));d=m=0,T=1,p%=de,a=p-de+1}else break e;else{for(d=c=g[h],T=1;c>=10;c/=10,T++);p%=de,a=p-de+T,m=a<0?0:vr(d/_[T-a-1]%10)}if(P=P||w<0||g[h+1]!=null||(a<0?d:d%_[T-a-1]),P=E<4?(m||P)&&(E==0||E==(v.s<0?3:2)):m>5||m==5&&(E==4||P||E==6&&(p>0?a>0?d/_[T-a]:0:g[h-1])%10&1||E==(v.s<0?8:7)),w<1||!g[0])return g.length=0,P?(w-=v.e+1,g[0]=_[(de-w%de)%de],v.e=-w||0):g[0]=v.e=0,v;if(p==0?(g.length=h,c=1,h--):(g.length=h+1,c=_[de-p],g[h]=a>0?vr(d/_[T-a]%_[a])*c:0),P)for(;;)if(h==0){for(p=1,a=g[0];a>=10;a/=10,p++);for(a=g[0]+=c,c=1;a>=10;a/=10,c++);p!=c&&(v.e++,g[0]==Ir&&(g[0]=1));break}else{if(g[h]+=c,g[h]!=Ir)break;g[h--]=0,c=1}for(p=g.length;g[--p]===0;g.pop());}v.e>R?v.c=v.e=null:v.e<S&&(v.c=[v.e=0])}return v}function te(v){var w,E=v.e;return E===null?v.toString():(w=wr(v.c),w=E<=u||E>=y?ua(w,E):sn(w,E,"0"),v.s<0?"-"+w:w)}return i.absoluteValue=i.abs=function(){var v=new L(this);return v.s<0&&(v.s=1),v},i.comparedTo=function(v,w){return ai(this,new L(v,w))},i.decimalPlaces=i.dp=function(v,w){var E,P,T,p=this;if(v!=null)return Ue(v,0,Pt),w==null?w=l:Ue(w,0,8),Q(new L(p),v+p.e+1,w);if(!(E=p.c))return null;if(P=((T=E.length-1)-_r(this.e/de))*de,T=E[T])for(;T%10==0;T/=10,P--);return P<0&&(P=0),P},i.dividedBy=i.div=function(v,w){return e(this,new L(v,w),o,l)},i.dividedToIntegerBy=i.idiv=function(v,w){return e(this,new L(v,w),0,1)},i.exponentiatedBy=i.pow=function(v,w){var E,P,T,p,a,c,d,h,m,g=this;if(v=new L(v),v.c&&!v.isInteger())throw Error(nr+"Exponent not an integer: "+te(v));if(w!=null&&(w=new L(w)),c=v.e>14,!g.c||!g.c[0]||g.c[0]==1&&!g.e&&g.c.length==1||!v.c||!v.c[0])return m=new L(Math.pow(+te(g),c?v.s*(2-la(v)):+te(v))),w?m.mod(w):m;if(d=v.s<0,w){if(w.c?!w.c[0]:!w.s)return new L(NaN);P=!d&&g.isInteger()&&w.isInteger(),P&&(g=g.mod(w))}else{if(v.e>9&&(g.e>0||g.e<-1||(g.e==0?g.c[0]>1||c&&g.c[1]>=24e7:g.c[0]<8e13||c&&g.c[0]<=9999975e7)))return p=g.s<0&&la(v)?-0:0,g.e>-1&&(p=1/p),new L(d?1/p:p);B&&(p=Ul(B/de+2))}for(c?(E=new L(.5),d&&(v.s=1),h=la(v)):(T=Math.abs(+te(v)),h=T%2),m=new L(s);;){if(h){if(m=m.times(g),!m.c)break;p?m.c.length>p&&(m.c.length=p):P&&(m=m.mod(w))}if(T){if(T=vr(T/2),T===0)break;h=T%2}else if(v=v.times(E),Q(v,v.e+1,1),v.e>14)h=la(v);else{if(T=+te(v),T===0)break;h=T%2}g=g.times(g),p?g.c&&g.c.length>p&&(g.c.length=p):P&&(g=g.mod(w))}return P?m:(d&&(m=s.div(m)),w?m.mod(w):p?Q(m,B,l,a):m)},i.integerValue=function(v){var w=new L(this);return v==null?v=l:Ue(v,0,8),Q(w,w.e+1,v)},i.isEqualTo=i.eq=function(v,w){return ai(this,new L(v,w))===0},i.isFinite=function(){return!!this.c},i.isGreaterThan=i.gt=function(v,w){return ai(this,new L(v,w))>0},i.isGreaterThanOrEqualTo=i.gte=function(v,w){return(w=ai(this,new L(v,w)))===1||w===0},i.isInteger=function(){return!!this.c&&_r(this.e/de)>this.c.length-2},i.isLessThan=i.lt=function(v,w){return ai(this,new L(v,w))<0},i.isLessThanOrEqualTo=i.lte=function(v,w){return(w=ai(this,new L(v,w)))===-1||w===0},i.isNaN=function(){return!this.s},i.isNegative=function(){return this.s<0},i.isPositive=function(){return this.s>0},i.isZero=function(){return!!this.c&&this.c[0]==0},i.minus=function(v,w){var E,P,T,p,a=this,c=a.s;if(v=new L(v,w),w=v.s,!c||!w)return new L(NaN);if(c!=w)return v.s=-w,a.plus(v);var d=a.e/de,h=v.e/de,m=a.c,g=v.c;if(!d||!h){if(!m||!g)return m?(v.s=-w,v):new L(g?a:NaN);if(!m[0]||!g[0])return g[0]?(v.s=-w,v):new L(m[0]?a:l==3?-0:0)}if(d=_r(d),h=_r(h),m=m.slice(),c=d-h){for((p=c<0)?(c=-c,T=m):(h=d,T=g),T.reverse(),w=c;w--;T.push(0));T.reverse()}else for(P=(p=(c=m.length)<(w=g.length))?c:w,c=w=0;w<P;w++)if(m[w]!=g[w]){p=m[w]<g[w];break}if(p&&(T=m,m=g,g=T,v.s=-v.s),w=(P=g.length)-(E=m.length),w>0)for(;w--;m[E++]=0);for(w=Ir-1;P>c;){if(m[--P]<g[P]){for(E=P;E&&!m[--E];m[E]=w);--m[E],m[P]+=Ir}m[P]-=g[P]}for(;m[0]==0;m.splice(0,1),--h);return m[0]?ee(v,m,h):(v.s=l==3?-1:1,v.c=[v.e=0],v)},i.modulo=i.mod=function(v,w){var E,P,T=this;return v=new L(v,w),!T.c||!v.s||v.c&&!v.c[0]?new L(NaN):!v.c||T.c&&!T.c[0]?new L(T):(k==9?(P=v.s,v.s=1,E=e(T,v,0,3),v.s=P,E.s*=P):E=e(T,v,0,k),v=T.minus(E.times(v)),!v.c[0]&&k==1&&(v.s=T.s),v)},i.multipliedBy=i.times=function(v,w){var E,P,T,p,a,c,d,h,m,g,_,b,f,A,H,F=this,W=F.c,Z=(v=new L(v,w)).c;if(!W||!Z||!W[0]||!Z[0])return!F.s||!v.s||W&&!W[0]&&!Z||Z&&!Z[0]&&!W?v.c=v.e=v.s=null:(v.s*=F.s,!W||!Z?v.c=v.e=null:(v.c=[0],v.e=0)),v;for(P=_r(F.e/de)+_r(v.e/de),v.s*=F.s,d=W.length,g=Z.length,d<g&&(f=W,W=Z,Z=f,T=d,d=g,g=T),T=d+g,f=[];T--;f.push(0));for(A=Ir,H=Cn,T=g;--T>=0;){for(E=0,_=Z[T]%H,b=Z[T]/H|0,a=d,p=T+a;p>T;)h=W[--a]%H,m=W[a]/H|0,c=b*h+m*_,h=_*h+c%H*H+f[p]+E,E=(h/A|0)+(c/H|0)+b*m,f[p--]=h%A;f[p]=E}return E?++P:f.splice(0,1),ee(v,f,P)},i.negated=function(){var v=new L(this);return v.s=-v.s||null,v},i.plus=function(v,w){var E,P=this,T=P.s;if(v=new L(v,w),w=v.s,!T||!w)return new L(NaN);if(T!=w)return v.s=-w,P.minus(v);var p=P.e/de,a=v.e/de,c=P.c,d=v.c;if(!p||!a){if(!c||!d)return new L(T/0);if(!c[0]||!d[0])return d[0]?v:new L(c[0]?P:T*0)}if(p=_r(p),a=_r(a),c=c.slice(),T=p-a){for(T>0?(a=p,E=d):(T=-T,E=c),E.reverse();T--;E.push(0));E.reverse()}for(T=c.length,w=d.length,T-w<0&&(E=d,d=c,c=E,w=T),T=0;w;)T=(c[--w]=c[w]+d[w]+T)/Ir|0,c[w]=Ir===c[w]?0:c[w]%Ir;return T&&(c=[T].concat(c),++a),ee(v,c,a)},i.precision=i.sd=function(v,w){var E,P,T,p=this;if(v!=null&&v!==!!v)return Ue(v,1,Pt),w==null?w=l:Ue(w,0,8),Q(new L(p),v,w);if(!(E=p.c))return null;if(T=E.length-1,P=T*de+1,T=E[T]){for(;T%10==0;T/=10,P--);for(T=E[0];T>=10;T/=10,P++);}return v&&p.e+1>P&&(P=p.e+1),P},i.shiftedBy=function(v){return Ue(v,-zl,zl),this.times("1e"+v)},i.squareRoot=i.sqrt=function(){var v,w,E,P,T,p=this,a=p.c,c=p.s,d=p.e,h=o+4,m=new L("0.5");if(c!==1||!a||!a[0])return new L(!c||c<0&&(!a||a[0])?NaN:a?p:1/0);if(c=Math.sqrt(+te(p)),c==0||c==1/0?(w=wr(a),(w.length+d)%2==0&&(w+="0"),c=Math.sqrt(+w),d=_r((d+1)/2)-(d<0||d%2),c==1/0?w="5e"+d:(w=c.toExponential(),w=w.slice(0,w.indexOf("e")+1)+d),E=new L(w)):E=new L(c+""),E.c[0]){for(d=E.e,c=d+h,c<3&&(c=0);;)if(T=E,E=m.times(T.plus(e(p,T,h,1))),wr(T.c).slice(0,c)===(w=wr(E.c)).slice(0,c))if(E.e<d&&--c,w=w.slice(c-3,c+1),w=="9999"||!P&&w=="4999"){if(!P&&(Q(T,T.e+o+2,0),T.times(T).eq(p))){E=T;break}h+=4,c+=4,P=1}else{(!+w||!+w.slice(1)&&w.charAt(0)=="5")&&(Q(E,E.e+o+2,1),v=!E.times(E).eq(p));break}}return Q(E,E.e+o+1,l,v)},i.toExponential=function(v,w){return v!=null&&(Ue(v,0,Pt),v++),K(this,v,w,1)},i.toFixed=function(v,w){return v!=null&&(Ue(v,0,Pt),v=v+this.e+1),K(this,v,w)},i.toFormat=function(v,w,E){var P,T=this;if(E==null)v!=null&&w&&typeof w=="object"?(E=w,w=null):v&&typeof v=="object"?(E=v,v=w=null):E=N;else if(typeof E!="object")throw Error(nr+"Argument not an object: "+E);if(P=T.toFixed(v,w),T.c){var p,a=P.split("."),c=+E.groupSize,d=+E.secondaryGroupSize,h=E.groupSeparator||"",m=a[0],g=a[1],_=T.s<0,b=_?m.slice(1):m,f=b.length;if(d&&(p=c,c=d,d=p,f-=p),c>0&&f>0){for(p=f%c||c,m=b.substr(0,p);p<f;p+=c)m+=h+b.substr(p,c);d>0&&(m+=h+b.slice(p)),_&&(m="-"+m)}P=g?m+(E.decimalSeparator||"")+((d=+E.fractionGroupSize)?g.replace(new RegExp("\\d{"+d+"}\\B","g"),"$&"+(E.fractionGroupSeparator||"")):g):m}return(E.prefix||"")+P+(E.suffix||"")},i.toFraction=function(v){var w,E,P,T,p,a,c,d,h,m,g,_,b=this,f=b.c;if(v!=null&&(c=new L(v),!c.isInteger()&&(c.c||c.s!==1)||c.lt(s)))throw Error(nr+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+te(c));if(!f)return new L(b);for(w=new L(s),h=E=new L(s),P=d=new L(s),_=wr(f),p=w.e=_.length-b.e-1,w.c[0]=Fl[(a=p%de)<0?de+a:a],v=!v||c.comparedTo(w)>0?p>0?w:h:c,a=R,R=1/0,c=new L(_),d.c[0]=0;m=e(c,w,0,1),T=E.plus(m.times(P)),T.comparedTo(v)!=1;)E=P,P=T,h=d.plus(m.times(T=h)),d=T,w=c.minus(m.times(T=w)),c=T;return T=e(v.minus(E),P,0,1),d=d.plus(T.times(h)),E=E.plus(T.times(P)),d.s=h.s=b.s,p=p*2,g=e(h,P,p,l).minus(b).abs().comparedTo(e(d,E,p,l).minus(b).abs())<1?[h,P]:[d,E],R=a,g},i.toNumber=function(){return+te(this)},i.toPrecision=function(v,w){return v!=null&&Ue(v,1,Pt),K(this,v,w,2)},i.toString=function(v){var w,E=this,P=E.s,T=E.e;return T===null?P?(w="Infinity",P<0&&(w="-"+w)):w="NaN":(v==null?w=T<=u||T>=y?ua(wr(E.c),T):sn(wr(E.c),T,"0"):v===10&&D?(E=Q(new L(E),o+T+1,l),w=sn(wr(E.c),E.e,"0")):(Ue(v,2,$.length,"Base"),w=t(sn(wr(E.c),T,"0"),10,v,P,!0)),P<0&&E.c[0]&&(w="-"+w)),w},i.valueOf=i.toJSON=function(){return te(this)},i._isBigNumber=!0,i[Symbol.toStringTag]="BigNumber",i[Symbol.for("nodejs.util.inspect.custom")]=i.valueOf,r!=null&&L.set(r),L}function _r(r){var e=r|0;return r>0||r===e?e:e-1}function wr(r){for(var e,t,n=1,i=r.length,s=r[0]+"";n<i;){for(e=r[n++]+"",t=de-e.length;t--;e="0"+e);s+=e}for(i=s.length;s.charCodeAt(--i)===48;);return s.slice(0,i+1||1)}function ai(r,e){var t,n,i=r.c,s=e.c,o=r.s,l=e.s,u=r.e,y=e.e;if(!o||!l)return null;if(t=i&&!i[0],n=s&&!s[0],t||n)return t?n?0:-l:o;if(o!=l)return o;if(t=o<0,n=u==y,!i||!s)return n?0:!i^t?1:-1;if(!n)return u>y^t?1:-1;for(l=(u=i.length)<(y=s.length)?u:y,o=0;o<l;o++)if(i[o]!=s[o])return i[o]>s[o]^t?1:-1;return u==y?0:u>y^t?1:-1}function Ue(r,e,t,n){if(r<e||r>t||r!==vr(r))throw Error(nr+(n||"Argument")+(typeof r=="number"?r<e||r>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(r))}function la(r){var e=r.c.length-1;return _r(r.e/de)==e&&r.c[e]%2!=0}function ua(r,e){return(r.length>1?r.charAt(0)+"."+r.slice(1):r)+(e<0?"e":"e+")+e}function sn(r,e,t){var n,i;if(e<0){for(i=t+".";++e;i+=t);r=i+r}else if(n=r.length,++e>n){for(i=t,e-=n;--e;i+=t);r+=i}else e<n&&(r=r.slice(0,e)+"."+r.slice(e));return r}var QS=Jh(),Qh=QS;var Zk=new Qh("1e+18");var ep=kt(Qr(),1);var da=r=>{let e=(0,ep.u8)(r),{encode:t,decode:n}=On(e),i=e;return i.decode=(s,o)=>!!n(s,o),i.encode=(s,o,l)=>{let u=Number(s);return t(u,o,l)},i};var tp=kt(Qr(),1);var At=r=>{let e=(0,tp.blob)(32,r),{encode:t,decode:n}=On(e),i=e;return i.decode=(s,o)=>{let l=n(s,o);return new V(l)},i.encode=(s,o,l)=>{let u=s.toBuffer();return t(u,o,l)},i};var Pn=class extends Error{constructor(e){super(e)}},Ki=class extends Pn{constructor(){super(...arguments),this.name="TokenAccountNotFoundError"}},fa=class extends Pn{constructor(){super(...arguments),this.name="TokenInvalidAccountError"}};var Hi=class extends Pn{constructor(){super(...arguments),this.name="TokenInvalidAccountOwnerError"}},on=class extends Pn{constructor(){super(...arguments),this.name="TokenInvalidAccountSizeError"}},ha=class extends Pn{constructor(){super(...arguments),this.name="TokenInvalidMintError"}};var pa=class extends Pn{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}};var ci=kt(Qr(),1);var Wi;(function(r){r[r.Uninitialized=0]="Uninitialized",r[r.Mint=1]="Mint",r[r.Account=2]="Account"})(Wi||(Wi={}));var ma=1;var Nn=kt(Qr(),1);var Bs=kt(Qr(),1);var e1=(0,Bs.struct)([(0,Bs.u8)("m"),(0,Bs.u8)("n"),da("isInitialized"),At("signer1"),At("signer2"),At("signer3"),At("signer4"),At("signer5"),At("signer6"),At("signer7"),At("signer8"),At("signer9"),At("signer10"),At("signer11")]),ga=e1.span;var ya;(function(r){r[r.Uninitialized=0]="Uninitialized",r[r.Initialized=1]="Initialized",r[r.Frozen=2]="Frozen"})(ya||(ya={}));var rp=(0,Nn.struct)([At("mint"),At("owner"),Fi("amount"),(0,Nn.u32)("delegateOption"),At("delegate"),(0,Nn.u8)("state"),(0,Nn.u32)("isNativeOption"),Fi("isNative"),Fi("delegatedAmount"),(0,Nn.u32)("closeAuthorityOption"),At("closeAuthority")]),an=rp.span;async function Kl(r,e,t,n=Mr){let i=await r.getAccountInfo(e,t);return t1(e,i,n)}function t1(r,e,t=Mr){if(!e)throw new Ki;if(!e.owner.equals(t))throw new Hi;if(e.data.length<an)throw new on;let n=rp.decode(e.data.slice(0,an)),i=Buffer.alloc(0);if(e.data.length>an){if(e.data.length===ga)throw new on;if(e.data[an]!=Wi.Account)throw new fa;i=e.data.slice(an+ma)}return{address:r,mint:n.mint,owner:n.owner,amount:n.amount,delegate:n.delegateOption?n.delegate:null,delegatedAmount:n.delegatedAmount,isInitialized:n.state!==ya.Uninitialized,isFrozen:n.state===ya.Frozen,isNative:!!n.isNativeOption,rentExemptReserve:n.isNativeOption?n.isNative:null,closeAuthority:n.closeAuthorityOption?n.closeAuthority:null,tlvData:i}}var np=(0,ci.struct)([(0,ci.u32)("mintAuthorityOption"),At("mintAuthority"),Fi("supply"),(0,ci.u8)("decimals"),da("isInitialized"),(0,ci.u32)("freezeAuthorityOption"),At("freezeAuthority")]),Hl=np.span;async function Wl(r,e,t,n=Mr){let i=await r.getAccountInfo(e,t);return r1(e,i,n)}function r1(r,e,t=Mr){if(!e)throw new Ki;if(!e.owner.equals(t))throw new Hi;if(e.data.length<Hl)throw new on;let n=np.decode(e.data.slice(0,Hl)),i=Buffer.alloc(0);if(e.data.length>Hl){if(e.data.length<=an)throw new on;if(e.data.length===ga)throw new on;if(e.data[an]!=Wi.Mint)throw new ha;i=e.data.slice(an+ma)}return{address:r,mintAuthority:n.mintAuthorityOption?n.mintAuthority:null,supply:n.supply,decimals:n.decimals,isInitialized:n.isInitialized,freezeAuthority:n.freezeAuthorityOption?n.freezeAuthority:null,tlvData:i}}function ip(r,e,t=!1,n=Mr,i=Tn){if(!t&&!V.isOnCurve(e.toBuffer()))throw new pa;let[s]=V.findProgramAddressSync([e.toBuffer(),n.toBuffer(),r.toBuffer()],i);return s}function sp(r,e,t,n,i=Mr,s=Tn){return n1(r,e,t,n,Buffer.from([1]),i,s)}function n1(r,e,t,n,i,s=Mr,o=Tn){let l=[{pubkey:r,isSigner:!0,isWritable:!0},{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:Te.programId,isSigner:!1,isWritable:!1},{pubkey:s,isSigner:!1,isWritable:!1}];return new ve({keys:l,programId:o,data:i})}function op({button:r,pill:e,launchRoute:t,state:n,escapeHtml:i}){let s=[["3","Preset tiers","SSS-1, SSS-2, and SSS-3"],["4","Backend services","Mint, indexer, compliance, webhooks"],["On-chain","Registry","Release records plus stablecoin registrations"],["Token-2022","Base standard","Extensions-first mint architecture"]],o=[["docs-overview","Overview","How the repo is organized","home"],["docs-presets","Presets","SSS-1 through SSS-3","layers"],["docs-cli","CLI","Operational command surface","terminal"],["docs-sdk","SDK","Programmatic integration","deployed_code"],["docs-tech","Architecture","Programs, PDAs, security","account_tree"],["docs-registry","Registry","Discovery and release records","inventory_2"],["docs-api","Backend API","Services, ports, auth, limits","dns"],["docs-deploy","Deployment","Build, verify, devnet runbook","rocket_launch"],["docs-errors","Warnings","Common operator failures","warning"]],l=[["terminal","CLI","Issue, pause, freeze, blacklist, seize, inspect, and register deployments from the operator shell."],["deployed_code","SDK","Build transactions, create stablecoins on-chain, manage compliance roots, and submit proof receipts."],["account_tree","Architecture","Three-layer model spanning Anchor programs, SDK surfaces, optional modules, and named presets."],["inventory_2","Registry","Machine-readable SSS identity, versioning, deprecation checks, and stablecoin discovery."],["dns","Backend","Mint service, event indexer, compliance service, and webhook delivery under a shared auth model."],["verified","Operations","Local verification, localnet smoke tests, and a full devnet deployment path for submission evidence."]],u=[{tier:"SSS-1",tone:"primary",title:"Minimal Stablecoin",abstract:"Minimum issuance control surface for Solana deployments: mint authority, freeze authority, metadata, pause support, and role-based delegation.",spec:["Base mint metadata and authorities","Mint, burn, freeze, thaw, pause, and unpause","Role assignment for minters, burners, and pausers"],compliance:"Reactive compliance. Operators can freeze accounts when needed, but transfers are not proactively screened on-chain."},{tier:"SSS-2",tone:"primary",title:"Compliant Stablecoin",abstract:"Extends SSS-1 with proactive transfer screening and seizure-oriented controls for regulated issuers.",spec:["All SSS-1 capabilities","Permanent delegate enabled at mint creation","Transfer hook enabled for blacklist checks","Blacklist add/remove flows and seizure support"],compliance:"Transfers are intended to be checked on every move using the transfer-hook module. Blacklisted accounts can be frozen and balances redirected under authorized procedures."},{tier:"SSS-3",tone:"warning",title:"Confidential Compliant Stablecoin",abstract:"Adds a privacy-preserving compliance model with confidential transfers, proof receipts, and compressed compliance roots.",spec:["All SSS-2 capabilities","Confidential transfer capability in protocol config","ZK compliance proof receipt capability flag","Compressed compliance-state root support"],compliance:"The transfer gate stays intact while the evidence model changes. Eligibility is proven with a proof receipt rather than a plain per-address compliance check."}],y=[["Mint/Burn","Yes","Yes","Yes"],["Freeze/Thaw","Yes","Yes","Yes"],["Pause","Yes","Yes","Yes"],["Permanent Delegate","No","Yes","Yes"],["Transfer Hook","No","Yes","Yes"],["Blacklist","No","Yes","Yes"],["Token Seizure","No","Yes","Yes"],["Confidential Transfers","No","No","Yes"],["ZK Compliance Proofs","No","No","Yes"],["Compressed Compliance State","No","No","Yes"]],S=[["Common commands",["sss-token init --preset sss-1 --rpc https://api.devnet.solana.com --keypair ~/.config/solana/id.json","sss-token mint <destination_token_account> <amount> --mint <mint_address> --program-id <stablecoin_program_id>","sss-token burn <source_token_account> <amount> --mint <mint_address> --program-id <stablecoin_program_id>","sss-token freeze <token_account> --mint <mint_address> --program-id <stablecoin_program_id>","sss-token thaw <token_account> --mint <mint_address> --program-id <stablecoin_program_id>","sss-token status --mint <mint_address> --program-id <stablecoin_program_id>"]],["SSS-2 commands",['sss-token blacklist add <address> --reason "OFAC match" --mint <mint_address> --program-id <stablecoin_program_id>',"sss-token blacklist remove <address> --mint <mint_address> --program-id <stablecoin_program_id>","sss-token seize <from_token_account> --to <treasury_token_account> --mint <mint_address> --program-id <stablecoin_program_id>","sss-token minters grant <operator_pubkey> --mint <mint_address> --program-id <stablecoin_program_id> --quota 1000000000","sss-token registry-register --mint <mint_address> --program-id <stablecoin_program_id> --registry-program-id <registry_program_id>"]],["SSS-3 commands",["sss-token init --preset sss-3 --program-id <stablecoin_program_id> --transfer-hook-program-id <transfer_hook_program_id>","sss-token init-hook --mint <mint_address> --transfer-hook-program-id <transfer_hook_program_id>","sss-token registry-release --registry-program-id <registry_program_id> --standard-version sss/1.1.0"]]],R=["Use separate keys for master authority and operational roles.","Blacklist actions should be paired with an audit note and external case identifier.","The CLI fails fast on missing addresses, zero amounts, invalid decimals, oversize metadata, and empty blacklist reasons.","CLI config files can extend presets, local TOML files, and local JSON files recursively."],I=["config","accountState","constants","bytes","hash","idl","instructions","SolanaStablecoin","compliance","presets","registry","registryProgram","transferHook","types","validation","wallet"],k=[["Layer 1","Base SDK","Anchor programs, TypeScript SDK, CLI, and backend services."],["Layer 2","Optional modules","Compliance, registry, transfer-hook, and experimental confidential-compliance capabilities."],["Layer 3","Named presets","SSS-1, SSS-2, and SSS-3 as recognizable deployment profiles."]],B=[["Stablecoin program","Core mint configuration, authorities, roles, pause state, blacklist, seizure, and SSS-3 proof receipts."],["Transfer-hook program","Enforces blacklist or proof-receipt checks at transfer time for gated deployments."],["SSS Registry program","Stores release records and stablecoin registrations for discoverability and deprecation checks."],["ZK compliance crate","Generates proofs and powers the `sss-zk-prove` workflow used by SSS-3."],["TypeScript SDK","Builds transactions, validates config, and exposes a programmatic integration surface."],["Backend services","Operational APIs for mint requests, events, compliance workflows, and webhook fanout."]],N=[["StablecoinConfig",'[b"stablecoin_config", mint]',"Global token configuration"],["RoleAssignment",'[b"role", mint, role_byte, holder]',"Per-role assignment with optional minter quota"],["BlacklistEntry",'[b"blacklist", mint, address]',"Blacklist record for SSS-2"],["RegistryConfig",'[b"sss_registry_config"]',"Global authority/config for SSS Registry"],["ReleaseRecord",'[b"sss_release", standard_version]',"Published SSS release metadata"],["StablecoinRegistration",'[b"sss_stablecoin", mint]',"On-chain stablecoin discovery record"]],$=["Registry authority initializes the global config.","Registry authority publishes release metadata for each standard version.","Issuer registers a stablecoin with config hash, preset, and immutable feature flags.","Wallets and DeFi protocols compare stablecoin registrations against release records to detect deprecated versions."],D=[["Mint Service","3001",["POST /mint/request","POST /mint/execute/:requestId","GET /mint/status/:requestId","GET /mint/history","GET /health"]],["Event Indexer","3002",["GET /events","POST /webhooks/subscribe","GET /registry","POST /registry"]],["Compliance Service","3003",["GET /blacklist","POST /blacklist","DELETE /blacklist/:address","GET /audit-log","POST /sanctions-screen"]],["Webhook Service","3004",["POST /webhooks/subscribe","GET /webhooks","DELETE /webhooks/:id","GET /health"]]],L=[["E-AUTH-01","Connect a wallet to continue.","Verify browser extension injection and confirm the frontend is served over http://127.0.0.1 instead of file://."],["E-NET-04","Switch to the configured cluster.","Check the RPC endpoint in settings and confirm the selected wallet is pointed at the same cluster."],["E-PROG-09","Program ID missing or invalid.","Import the deployment manifest or verify the stablecoin, transfer-hook, and registry program IDs before running live actions."],["E-ROLE-02","Required role missing.","Grant the correct RoleAssignment PDA or rotate authority through the protocol rather than the raw token mint."],["E-STATE-11","Stablecoin paused.","Pause state must be cleared before mint, burn, or transfer flows can continue."],["E-COMP-07","Address blacklisted.","Review blacklist state, compliance notes, and whether the address should be frozen, released, or seized."],["E-ZK-03","No valid proof receipt.","Regenerate the SSS-3 witness, submit the proof receipt again, and verify it matches the active compliance root."],["E-ZK-05","Proof expired.","Proof receipts are slot-bound. Re-submit a fresh receipt before retrying the gated transfer."],["E-DATA-01","Registry missing fields.","Website, jurisdiction, and related registry metadata must be present before publication succeeds."]],K=[["Immutable SSS-2 flags","SSS-2 capability flags are immutable after initialization. Review multisig owners and extension choices before deployment."],["Token-2022 init order","Initialize mint extensions before initialize_mint2 to avoid Token-2022 setup footguns and locked-fund scenarios."],["Authority separation","Do not let one hot key hold issuance, pause, blacklist, and seizure responsibility at the same time."],["Backend auth","Every backend request except /health must include x-api-key: <SERVICE_API_KEY> or Authorization: Bearer <SERVICE_API_KEY>."],["SSS-3 is advanced","SSS-3 keeps the compliance boundary intact, but it adds circuit, proof, and receipt lifecycle complexity that operators must understand."],["Transfer gating","For SSS-2 and SSS-3, initialize the transfer-hook meta list before any gated transfer or proof-driven flow."]],G=["npm install","npm run build","npm run build:programs","npm run verify","npm run smoke:localnet:e2e","docker compose up --build","sss-token init --preset sss-1 --rpc https://api.devnet.solana.com --keypair ~/.config/solana/id.json"].join(`
`),ee=['import { Presets, SolanaStablecoin } from "@stbr/sss-token";',"","const stable = await SolanaStablecoin.create({","  connection,","  authority,","  preset: Presets.SSS_2,",'  name: "My Stablecoin",','  symbol: "MYUSD",',"  decimals: 6","});","","await stable.mint({ recipient, amount: 1_000_000n, minter: authority });",'await stable.compliance.blacklistAdd(address, "Sanctions match");'].join(`
`),Q=["await stable.updateComplianceRootOnChain(rootHex);","await stable.initializeTransferHookMetaListOnChain();","await stable.submitProofReceiptOnChain({","  subject,","  commitment,","  proofCommitment,","  response,","  merkleSiblings,","  merkleDirections,",'  circuit: "sss3-merkle-schnorr-v1",',"  expiresAtSlot","});","await stable.revokeProofReceiptOnChain(subject);"].join(`
`),te=["[preset]",'extends = ["./SAMPLE_ISSUER_BASE.toml"]',"","[overrides]",'name = "Example Regulated USD"','symbol = "rUSD"',"default_account_frozen = false",'standard_version = "sss/1.0.0"',"","[registry]",'homepage = "https://issuer.example.com"','jurisdiction = "US"'].join(`
`),v=["npm run devnet:preflight","npm run devnet:manifest","npm run build:programs",'solana program deploy target/deploy/transfer_hook.so --program-id <transfer_hook_program_id> --url "$SSS_RPC_URL"','solana program deploy target/deploy/stablecoin.so --program-id <stablecoin_program_id> --url "$SSS_RPC_URL"','solana program deploy target/deploy/sss_registry.so --program-id <registry_program_id> --url "$SSS_RPC_URL"',"sss-token registry-release --registry-program-id <registry_program_id> --standard-version sss/1.1.0 --preset sss-3 --notes-uri https://example.com/releases/sss-1-1-0","sss-token registry-register --mint <mint_address> --program-id <stablecoin_program_id> --registry-program-id <registry_program_id> --homepage https://issuer.example.com --jurisdiction US","npm run devnet:verify"].join(`
`),w=g=>`
    <div class="doc-list">
      ${g.map(_=>`
        <div class="inline-main">
          <span class="material-symbols-outlined">check_circle</span>
          <span>${i(_)}</span>
        </div>
      `).join("")}
    </div>
  `,E=`
    <section class="panel docs-section" id="docs-overview">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Overview</p>
          <h3 class="panel-title">Repository Orientation</h3>
          <p class="panel-subtitle">SSS is a modular open-source SDK and reference implementation for issuing Token-2022 stablecoins on Solana. It is intentionally structured as a layered system rather than a single hard-coded product template.</p>
        </div>
        ${e("Open-source","success")}
      </div>
      <div class="docs-card-grid">
        ${l.map(([g,_,b])=>`
          <article class="card">
            <div class="inline-main">
              <span class="icon-chip"><span class="material-symbols-outlined">${g}</span></span>
              <h3>${i(_)}</h3>
            </div>
            <p>${i(b)}</p>
          </article>
        `).join("")}
      </div>
      <div class="two-col">
        <article class="summary-card">
          <small class="eyebrow">Quick start</small>
          <pre class="code-block mono">${i(G)}</pre>
        </article>
        <article class="summary-card">
          <small class="eyebrow">Why this repo matters</small>
          ${w(["SSS-2 enforces blacklist checks through a dedicated transfer-hook path instead of passive metadata alone.","The registry makes stablecoin presets and release versions queryable by wallets, DeFi protocols, and auditors.","Role-based operations route through the stablecoin config PDA so issuers can delegate safely without sharing raw mint authority."])}
        </article>
      </div>
    </section>
  `,P=`
    <section class="panel docs-section" id="docs-presets">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Presets</p>
          <h3 class="panel-title">SSS-1, SSS-2, and SSS-3</h3>
          <p class="panel-subtitle">Three named standards map the most common issuance profiles into recognizable, auditable deployment tiers.</p>
        </div>
        ${e("Named standards","primary")}
      </div>
      <div class="docs-preset-grid">
        ${u.map(g=>`
          <article class="card docs-preset-card ${g.tone==="warning"?"is-warning":""}">
            <div class="row-split">
              ${e(g.tier,g.tone)}
              ${g.tier==="SSS-3"?e("Advanced","warning"):g.tier==="SSS-2"?e("Recommended","success"):""}
            </div>
            <h3 class="display">${i(g.title)}</h3>
            <p>${i(g.abstract)}</p>
            <small class="eyebrow">Specification</small>
            ${w(g.spec)}
            <small class="eyebrow">Compliance model</small>
            <p>${i(g.compliance)}</p>
          </article>
        `).join("")}
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>SSS-1</th>
              <th>SSS-2</th>
              <th>SSS-3</th>
            </tr>
          </thead>
          <tbody>
            ${y.map(([g,_,b,f])=>`
              <tr>
                <td>${i(g)}</td>
                <td>${i(_)}</td>
                <td>${i(b)}</td>
                <td>${i(f)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `,T=`
    <section class="panel docs-section" id="docs-cli">
      <div class="panel-header">
        <div>
          <p class="eyebrow">CLI</p>
          <h3 class="panel-title">Operational Command Surface</h3>
          <p class="panel-subtitle">The sss-token CLI covers initialization, supply operations, compliance actions, registry publishing, and devnet-ready deployment flows.</p>
        </div>
        ${e("sss-token","primary")}
      </div>
      <div class="docs-command-grid">
        ${S.map(([g,_])=>`
          <article class="summary-card">
            <small class="eyebrow">${i(g)}</small>
            <div class="doc-command-list">
              ${_.map(b=>`<code class="doc-command mono">${i(b)}</code>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      <div class="two-col">
        <article class="summary-card">
          <small class="eyebrow">Config inheritance</small>
          <pre class="code-block mono">${i(te)}</pre>
        </article>
        <article class="summary-card">
          <small class="eyebrow">Operator guidance</small>
          ${w(R)}
          <div class="doc-callout warning">
            <span class="material-symbols-outlined">warning</span>
            <p>Real on-chain creation happens when --dry-run is omitted, the signer is funded, the RPC is reachable, and the stablecoin program is deployed.</p>
          </div>
        </article>
      </div>
    </section>
  `,p=`
    <section class="panel docs-section" id="docs-sdk">
      <div class="panel-header">
        <div>
          <p class="eyebrow">SDK</p>
          <h3 class="panel-title">Programmatic Integration Surface</h3>
          <p class="panel-subtitle">Import from @stbr/sss-token to create deployments, mint assets, manage compliance, build registry instructions, and drive SSS-3 proof workflows from code.</p>
        </div>
        ${e("@stbr/sss-token","success")}
      </div>
      <div class="two-col">
        <article class="summary-card">
          <small class="eyebrow">Entry point</small>
          <pre class="code-block mono">${i(ee)}</pre>
        </article>
        <article class="summary-card">
          <small class="eyebrow">SSS-3 proof lifecycle</small>
          <pre class="code-block mono">${i(Q)}</pre>
        </article>
      </div>
      <div class="two-col">
        <article class="summary-card">
          <small class="eyebrow">Preset coverage</small>
          ${w(["Presets.SSS_1 for mint, burn, freeze, and pause baseline flows.","Presets.SSS_2 for permanent delegate, transfer hooks, blacklist enforcement, and registry metadata.","Presets.SSS_3 for confidential-transfer-ready config, proof receipts, and compressed compliance roots."])}
        </article>
        <article class="summary-card">
          <small class="eyebrow">Export surface</small>
          <div class="badge-cluster">
            ${I.map(g=>e(g,"primary")).join("")}
          </div>
        </article>
      </div>
      <article class="summary-card">
        <small class="eyebrow">Additional builders and helpers</small>
        ${w(["Registry builders: buildRegisterReleaseInstruction and buildRegisterStablecoinInstruction.","Operational builders: blacklist add/remove and authority transfer transaction helpers.","IDL loading via loadIdl(path) for generated Anchor metadata.","Validation helpers that reject invalid metadata, zero amounts, and empty blacklist reasons before instruction construction."])}
      </article>
    </section>
  `,a=`
    <section class="panel docs-section" id="docs-tech">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Architecture</p>
          <h3 class="panel-title">Layer Model, Programs, and Security</h3>
          <p class="panel-subtitle">The project separates reusable issuance tooling, optional modules, and named presets so standards adoption and issuer customization do not fight each other.</p>
        </div>
        ${e("Three-layer model","primary")}
      </div>
      <div class="docs-card-grid">
        ${k.map(([g,_,b])=>`
          <article class="card">
            <p class="eyebrow">${i(g)}</p>
            <h3>${i(_)}</h3>
            <p>${i(b)}</p>
          </article>
        `).join("")}
      </div>
      <div class="docs-card-grid">
        ${B.map(([g,_])=>`
          <article class="card">
            <h3>${i(g)}</h3>
            <p>${i(_)}</p>
          </article>
        `).join("")}
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Seeds</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            ${N.map(([g,_,b])=>`
              <tr>
                <td>${i(g)}</td>
                <td><code class="mono">${i(_)}</code></td>
                <td>${i(b)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="two-col">
        <article class="summary-card">
          <small class="eyebrow">Security model</small>
          ${w(["The master authority initializes the token and delegates operational permissions through RoleAssignment PDAs.","Mint, freeze, transfer-hook, and permanent-delegate powers are assigned to the stablecoin config PDA rather than directly to operators.","Role separation reduces the chance that one operator key becomes the entire risk boundary.","SSS-2 capability flags are immutable after initialization."])}
        </article>
        <article class="summary-card">
          <small class="eyebrow">SSS-3 verifier model</small>
          ${w(["Proofs are generated by the in-repo sss-zk-compliance crate and sss-zk-prove binary.","The stablecoin program verifies the compliance proof before writing a ProofReceipt PDA.","The transfer-hook program blocks transfers unless the sender has a matching, unexpired receipt for the current root.","The shipped circuit identifier is sss3-merkle-schnorr-v1."])}
        </article>
      </div>
    </section>
  `,c=`
    <section class="panel docs-section" id="docs-registry">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Registry</p>
          <h3 class="panel-title">Discovery, Release Metadata, and Verifiable Identity</h3>
          <p class="panel-subtitle">The registry turns SSS from a claimed standard into a machine-readable one. Integrators can query whether a mint is an SSS deployment, which preset it uses, and whether the release line is deprecated.</p>
        </div>
        ${e("On-chain registry","success")}
      </div>
      <div class="two-col">
        <article class="summary-card">
          <small class="eyebrow">Registry carries</small>
          ${w(["Preset class (sss-1, sss-2, or sss-3).","Standard version and deterministic config hash.","Immutable feature flags and issuer metadata.","Release records for deprecation and upgrade signaling."])}
        </article>
        <article class="summary-card">
          <small class="eyebrow">Program flow</small>
          ${w($)}
        </article>
      </div>
      <article class="summary-card">
        <small class="eyebrow">Strategic value</small>
        ${w(["Issuers get a portable standards identity that can be referenced outside their own infrastructure.","Wallets and DeFi protocols can query a canonical answer instead of trusting issuer PDFs or ad hoc allowlists.","Release records make upgrades and deprecations legible to auditors and integration partners."])}
      </article>
    </section>
  `,d=`
    <section class="panel docs-section" id="docs-api">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Backend API</p>
          <h3 class="panel-title">Service Endpoints, Auth, and Limits</h3>
          <p class="panel-subtitle">All backend services are Dockerized and share the same security model for authenticated requests, body limits, and rate limits.</p>
        </div>
        ${e("docker compose up --build","warning")}
      </div>
      <div class="docs-service-grid">
        ${D.map(([g,_,b])=>`
          <article class="summary-card">
            <div class="row-split">
              <div>
                <small class="eyebrow">${i(g)}</small>
                <h3>${i(g)}</h3>
              </div>
              ${e(`:${_}`,"primary")}
            </div>
            <div class="doc-command-list">
              ${b.map(f=>`<code class="doc-command mono">${i(f)}</code>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      <div class="two-col">
        <article class="summary-card">
          <small class="eyebrow">Auth model</small>
          ${w(["Every endpoint except GET /health requires authentication.","Use x-api-key: <SERVICE_API_KEY> or Authorization: Bearer <SERVICE_API_KEY>.","Default body limit is 65536 bytes.","Default rate limit is 120 authenticated requests per minute per client/IP key pair."])}
        </article>
        <article class="summary-card">
          <small class="eyebrow">Operator notes</small>
          ${w(["Event Indexer POST /registry returns 400 InvalidRegistryEntry when required registry fields are missing or malformed.","The backend stack can be run from the repo root without changing directories.","Health endpoints are the only unauthenticated surfaces and should be used for liveness checks only."])}
        </article>
      </div>
    </section>
  `,h=`
    <section class="panel docs-section" id="docs-deploy">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Deployment</p>
          <h3 class="panel-title">Build, Verify, and Devnet Runbook</h3>
          <p class="panel-subtitle">The repository includes a deterministic local verification pass, validator-backed smoke harnesses, and an explicit devnet deployment path for registry-backed example mints.</p>
        </div>
        ${e("Devnet runbook","warning")}
      </div>
      <div class="two-col">
        <article class="summary-card">
          <small class="eyebrow">Deployment path</small>
          <pre class="code-block mono">${i(v)}</pre>
        </article>
        <article class="summary-card">
          <small class="eyebrow">Validation ladder</small>
          ${w(["npm run verify for deterministic local validation of the SDK, CLI helpers, and backend shared primitives.","npm run smoke:localnet for RPC-backed SSS-1 and SSS-2 smoke coverage when a local validator is running.","npm run smoke:localnet:e2e for the full registry + SSS-1/2/3 local validator flow including proof receipts.","npm run devnet:preflight, devnet:manifest, and devnet:verify after deploying to devnet."])}
          <div class="doc-callout success">
            <span class="material-symbols-outlined">verified</span>
            <p>devnet:manifest writes artifacts/devnet-manifest.json with commit metadata, program IDs, binary hashes, and known mint env vars.</p>
          </div>
        </article>
      </div>
      <article class="summary-card">
        <small class="eyebrow">SSS-3 evidence checklist</small>
        ${w(["Capture the SSS-3 mint address.","Record the compliance root update signature.","Record the proof receipt submission signature.","Capture a successful gated transfer signature.","Capture a failed transfer after proof revoke."])}
      </article>
    </section>
  `,m=`
    <section class="panel docs-section" id="docs-errors">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Warnings</p>
          <h3 class="panel-title">Common Errors and Operational Cautions</h3>
          <p class="panel-subtitle">The frontend, CLI, and backend flows all assume correct authority setup, matching cluster config, deployed program IDs, and complete registry metadata.</p>
        </div>
        ${e("Operator critical path","danger")}
      </div>
      <div class="docs-error-grid">
        ${L.map(([g,_,b])=>`
          <article class="card docs-error-card">
            <p class="eyebrow">${i(g)}</p>
            <h3>${i(_)}</h3>
            <p>${i(b)}</p>
          </article>
        `).join("")}
      </div>
      <div class="docs-warning-stack">
        ${K.map(([g,_])=>`
          <article class="doc-callout warning">
            <span class="material-symbols-outlined">warning</span>
            <div>
              <strong>${i(g)}</strong>
              <p>${i(_)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;return`
    <section class="page-header docs-page-header">
      <div>
        <p class="eyebrow">Reference</p>
        <h1 class="headline">Protocol Documentation</h1>
        <p class="subline">Detailed operator, SDK, architecture, registry, API, and deployment guidance built from the current repository docs.</p>
      </div>
      <div class="button-row">
        ${r("landing","Back to Landing","ghost","west")}
        ${r(t(),n.connected?"Open Dashboard":"Connect Wallet","primary",n.connected?"north_east":"account_balance_wallet")}
      </div>
    </section>

    <section class="panel docs-hero">
      <div class="docs-hero-copy">
        <div class="badge-cluster">
          ${e("CLI","primary")}
          ${e("SDK","primary")}
          ${e("Registry","success")}
          ${e("Backend API","warning")}
        </div>
        <h2 class="panel-title">Everything needed to build, operate, and verify an SSS deployment.</h2>
        <p class="panel-subtitle">The page mirrors the current frontend aesthetic while consolidating the repo's architecture docs, preset specs, CLI flows, SDK entry points, backend services, registry model, and devnet deployment runbook into one operator-grade reference.</p>
        <div class="button-row">
          <button class="button secondary" data-doc-target="docs-cli">Jump to CLI <span class="material-symbols-outlined">south</span></button>
          <button class="button ghost" data-doc-target="docs-sdk">Jump to SDK <span class="material-symbols-outlined">south</span></button>
          <button class="button ghost" data-doc-target="docs-deploy">Jump to Deployment <span class="material-symbols-outlined">south</span></button>
        </div>
      </div>
      <div class="stat-grid">
        ${s.map(([g,_,b])=>`
          <article class="stat-card">
            <div class="eyebrow">${i(_)}</div>
            <span class="stat-value">${i(g)}</span>
            <div class="stat-foot">${i(b)}</div>
          </article>
        `).join("")}
      </div>
    </section>

    <div class="docs-layout">
      <aside class="panel docs-sidebar">
        <div class="docs-sidebar-block">
          <p class="eyebrow">Documentation map</p>
          <h3 class="panel-title">Sections</h3>
        </div>
        <div class="docs-nav-list">
          ${o.map(([g,_,b,f])=>`
            <button class="docs-nav-item" data-doc-target="${i(g)}">
              <span class="icon-chip"><span class="material-symbols-outlined">${f}</span></span>
              <span class="docs-nav-copy">
                <strong>${i(_)}</strong>
                <small>${i(b)}</small>
              </span>
            </button>
          `).join("")}
        </div>
      </aside>

      <div class="docs-content">
        ${E}
        ${P}
        ${T}
        ${p}
        ${a}
        ${c}
        ${d}
        ${h}
        ${m}
      </div>
    </div>
  `}var qi={SSS_1:"sss-1",SSS_2:"sss-2",SSS_3:"sss-3"};function ap(r){return r==="sss-3"?{permanentDelegate:!0,transferHook:!0,defaultAccountFrozen:!0,confidentialTransfers:!0,zkComplianceProofs:!0,compressedComplianceState:!0}:r==="sss-2"?{permanentDelegate:!0,transferHook:!0,defaultAccountFrozen:!0,confidentialTransfers:!1,zkComplianceProofs:!1,compressedComplianceState:!1}:{permanentDelegate:!1,transferHook:!1,defaultAccountFrozen:!1,confidentialTransfers:!1,zkComplianceProofs:!1,compressedComplianceState:!1}}var i1=new TextEncoder,s1=new TextDecoder;function xr(r){return i1.encode(r)}function cp(r){return s1.decode(r)}function It(r){let e=r.reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;for(let i of r)t.set(i,n),n+=i.length;return t}function ql(r){let e=new Uint8Array(4);return new DataView(e.buffer).setUint32(0,r,!0),e}function Vl(r){let e=new Uint8Array(8);return new DataView(e.buffer).setBigUint64(0,r,!0),e}function ir(r){let e=xr(r);return It([ql(e.length),e])}function lp(r){return Array.from(r,e=>e.toString(16).padStart(2,"0")).join("")}function up(r,e){return{value:new DataView(r.buffer,r.byteOffset,r.byteLength).getUint32(e,!0),offset:e+4}}function dp(r,e){return{value:new DataView(r.buffer,r.byteOffset,r.byteLength).getBigUint64(e,!0),offset:e+8}}function o1(r){return typeof r=="string"?xr(r):r}function fp(...r){return Uint8Array.from(us(It(r.map(o1))))}function hp(...r){return lp(fp(...r))}function Vi(r){return fp(`global:${r}`).slice(0,8)}function Gl(r){return{homepage:r?.homepage??"",jurisdiction:r?.jurisdiction??""}}function Gi(r){let e=JSON.stringify({preset:r.preset,name:r.name,symbol:r.symbol,uri:r.uri,decimals:r.decimals,enablePermanentDelegate:r.enablePermanentDelegate,enableTransferHook:r.enableTransferHook,defaultAccountFrozen:r.defaultAccountFrozen,enableConfidentialTransfers:r.enableConfidentialTransfers,enableZkComplianceProofs:r.enableZkComplianceProofs,enableCompressedComplianceState:r.enableCompressedComplianceState,transferHookProgramId:r.transferHookProgramId,proofVerifierProgramId:r.proofVerifierProgramId,compressedComplianceRoot:r.compressedComplianceRoot,complianceCircuit:r.complianceCircuit,standardVersion:r.standardVersion});return hp(e)}function pp(r){return{mint:r.mint.toBase58(),config:r.config.toBase58(),authority:r.authority.toBase58(),preset:r.view.preset,standardVersion:r.view.standardVersion,configHash:r.view.configHash,name:r.view.name,symbol:r.view.symbol,uri:r.view.uri,decimals:r.view.decimals,enablePermanentDelegate:r.view.enablePermanentDelegate,enableTransferHook:r.view.enableTransferHook,defaultAccountFrozen:r.view.defaultAccountFrozen,enableConfidentialTransfers:r.view.enableConfidentialTransfers,enableZkComplianceProofs:r.view.enableZkComplianceProofs,enableCompressedComplianceState:r.view.enableCompressedComplianceState,transferHookProgramId:r.view.transferHookProgramId,proofVerifierProgramId:r.view.proofVerifierProgramId,compressedComplianceRoot:r.view.compressedComplianceRoot,complianceCircuit:r.view.complianceCircuit,metadata:Gl(r.metadata)}}function mp(r,e){return{value:new V(r.subarray(e,e+32)).toBase58(),offset:e+32}}function li(r,e){return{value:r[e]===1,offset:e+1}}function gp(r,e){return dp(r,e)}function Cs(r,e){let t=up(r,e),n=t.offset,i=n+t.value;return{value:cp(r.subarray(n,i)),offset:i}}function jl(r,e){if(r[e]===0)return{value:null,offset:e+1};let n=e+1,i=n+32;return{value:new V(r.subarray(n,i)).toBase58(),offset:i}}function yp(r,e){if(r[e]===0)return{value:null,offset:e+1};let n=Cs(r,e+1);return{value:n.value,offset:n.offset}}function a1(r){return r.enableConfidentialTransfers||r.enableZkComplianceProofs||r.enableCompressedComplianceState?"sss-3":r.enablePermanentDelegate||r.enableTransferHook?"sss-2":"sss-1"}function c1(r){let e=8,t=mp(r,e);e=t.offset,e=jl(r,e).offset,e=mp(r,e).offset;let s=Cs(r,e);e=s.offset;let o=Cs(r,e);e=o.offset;let l=Cs(r,e);e=l.offset;let u=r[e];e+=1;let y=Cs(r,e);e=y.offset;let S=li(r,e);e=S.offset,e=gp(r,e).offset,e=gp(r,e).offset;let k=li(r,e);e=k.offset;let B=li(r,e);e=B.offset;let N=li(r,e);e=N.offset;let $=li(r,e);e=$.offset;let D=li(r,e);e=D.offset;let L=li(r,e);e=L.offset;let K=jl(r,e);e=K.offset;let G=jl(r,e);e=G.offset;let ee=yp(r,e);e=ee.offset;let Q=yp(r,e),te={name:s.value,symbol:o.value,uri:l.value,decimals:u,enablePermanentDelegate:k.value,enableTransferHook:B.value,defaultAccountFrozen:N.value,enableConfidentialTransfers:$.value,enableZkComplianceProofs:D.value,enableCompressedComplianceState:L.value,transferHookProgramId:K.value,proofVerifierProgramId:G.value,compressedComplianceRoot:ee.value,complianceCircuit:Q.value,standardVersion:y.value},v=a1(te);return{authority:t.value,preset:v,...te,configHash:Gi({preset:v,...te}),isPaused:S.value}}async function bp(r,e){let t=await r.getAccountInfo(e,"confirmed");if(!t)throw new Error(`MissingStablecoinConfig:${e.toBase58()}`);return c1(t.data)}var ba=class{constructor(e,t){this.enabled=e;this.backend=t}async blacklistAdd(e,t){return this.assertEnabled(),this.backend.blacklistAdd(e,t)}async blacklistRemove(e){return this.assertEnabled(),this.backend.blacklistRemove(e)}async seize(e,t){return this.assertEnabled(),this.backend.seize(e,t)}async submitProofReceipt(e){return this.assertEnabled(),this.backend.submitProofReceipt(e)}async setCompressedStateRoot(e){return this.assertEnabled(),this.backend.setCompressedStateRoot(e)}assertEnabled(){if(!this.enabled)throw new Error("ComplianceNotEnabled")}};var wa="stablecoin_config",ji="blacklist",wp="proof_receipt",vp="sss_registry_config",_p="sss_release",Sp="sss_stablecoin";var Rp=6,Ap="sss/1.0.0",Yl=new V("11111111111111111111111111111111"),ui=new V("11111111111111111111111111111111"),Ln=new V("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");function Ep(r,e,t,n){if(!r||r.length>32)throw new Error("InvalidName");if(!e||e.length>8)throw new Error("InvalidSymbol");if(t.length>200)throw new Error("InvalidUri");if(!Number.isInteger(n)||n<0||n>9)throw new Error("InvalidDecimals")}function Zl(r){if(r<=0n)throw new Error("InvalidAmount")}function kp(r){if(!r||r.length>100)throw new Error("InvalidReason")}function $r(r){return r instanceof V?r:r.publicKey}function qt(r){return r instanceof qe}async function l1(r){let e=r.commitment??"confirmed",t=await r.connection.getLatestBlockhash(e);return r.transaction.feePayer=r.feePayer,r.transaction.recentBlockhash=t.blockhash,{transaction:r.transaction,lastValidBlockHeight:t.lastValidBlockHeight}}async function Ps(r){let e=r.commitment??"confirmed",t=(qt(r.signer),r.signer.publicKey),n=await l1({connection:r.connection,transaction:r.transaction,feePayer:t,commitment:e}),i=n.transaction;r.extraSigners?.length&&i.partialSign(...r.extraSigners);let s;qt(r.signer)?(i.partialSign(r.signer),s=i.serialize()):s=(await r.signer.signTransaction(i)).serialize();let o=await r.connection.sendRawTransaction(s,r.sendOptions);return await r.connection.confirmTransaction({signature:o,blockhash:i.recentBlockhash,lastValidBlockHeight:n.lastValidBlockHeight},e),o}function u1(r){return{proofVerifierProgramId:r?.proofVerifierProgramId?.toBase58()??null,compressedComplianceRoot:r?.compressedComplianceRoot??null,complianceCircuit:r?.complianceCircuit??null}}function Ip(r){let e=r.preset??qi.SSS_1,t=r.name,n=r.symbol,i=r.uri??"",s=r.decimals??Rp,o={...ap(e),...r.extensions},l=u1(r.compliance);return Ep(t,n,i,s),{authority:$r(r.authority),preset:e,name:t,symbol:n,uri:i,decimals:s,enablePermanentDelegate:!!o.permanentDelegate,enableTransferHook:!!o.transferHook,defaultAccountFrozen:!!o.defaultAccountFrozen,enableConfidentialTransfers:!!o.confidentialTransfers,enableZkComplianceProofs:!!o.zkComplianceProofs,enableCompressedComplianceState:!!o.compressedComplianceState,transferHookProgramId:r.transferHookProgramId?.toBase58()??null,proofVerifierProgramId:l.proofVerifierProgramId,compressedComplianceRoot:l.compressedComplianceRoot,complianceCircuit:l.complianceCircuit,standardVersion:r.standardVersion??Ap,registryMetadata:Gl(r.registryMetadata)}}function xp(r){let e=Gi(r);return{authority:r.authority.toBase58(),preset:r.preset,name:r.name,symbol:r.symbol,uri:r.uri,decimals:r.decimals,enablePermanentDelegate:r.enablePermanentDelegate,enableTransferHook:r.enableTransferHook,defaultAccountFrozen:r.defaultAccountFrozen,enableConfidentialTransfers:r.enableConfidentialTransfers,enableZkComplianceProofs:r.enableZkComplianceProofs,enableCompressedComplianceState:r.enableCompressedComplianceState,transferHookProgramId:r.transferHookProgramId,proofVerifierProgramId:r.proofVerifierProgramId,compressedComplianceRoot:r.compressedComplianceRoot,complianceCircuit:r.complianceCircuit,standardVersion:r.standardVersion,configHash:e,isPaused:!1}}var Pp=kt(un(),1);function Xl(r){return Vl(r)}function Mn(r){return ir(r)}function va(r,e){if(e!==void 0&&r.length!==e)throw new Error(`InvalidByteLength:${r.length}:${e}`);return Uint8Array.from(r)}function Tp(r,e){return It([ql(r.length),...r.map(t=>e(t))])}function di(r){return Uint8Array.of(r?1:0)}function Ns(r){return r.toBytes()}function Op(r){return r===null?Uint8Array.of(0):It([Uint8Array.of(1),Ns(r)])}function Bp(r){return r===null?Uint8Array.of(0):It([Uint8Array.of(1),Mn(r)])}function d1(r){return r==null?Uint8Array.of(0):It([Uint8Array.of(1),Xl(r)])}function f1(r){switch(r){case"minter":return Uint8Array.of(0);case"burner":return Uint8Array.of(1);case"blacklister":return Uint8Array.of(2);case"pauser":return Uint8Array.of(3);case"seizer":return Uint8Array.of(4);default:throw new Error(`Unsupported role encoder: ${String(r)}`)}}function h1(r){return It([Mn(r.name),Mn(r.symbol),Mn(r.uri),Uint8Array.of(r.decimals),Mn(r.standardVersion),di(r.enablePermanentDelegate),di(r.enableTransferHook),di(r.defaultAccountFrozen),Op(r.transferHookProgramId),di(r.enableConfidentialTransfers),di(r.enableZkComplianceProofs),di(r.enableCompressedComplianceState),Op(r.proofVerifierProgramId),Bp(r.compressedComplianceRoot),Bp(r.complianceCircuit)])}function p1(r){return It([Ns(r.subject),va(r.commitment,32),va(r.proofCommitment,32),va(r.response,32),Tp(r.merkleSiblings,e=>va(e,32)),Tp(r.merkleDirections,e=>Uint8Array.of(e)),Mn(r.circuit),Xl(r.expiresAtSlot)])}function Cp(r){return Ns(r)}function m1(r){return It([Ns(r.holder),f1(r.role),di(r.isActive),d1(r.mintQuota)])}function g1(){return new Uint8Array}function sr(r,e){let t;switch(r){case"initialize":t=h1(e);break;case"mint":case"burn":t=Xl(e.amount);break;case"update_compliance_root":t=Mn(e.root);break;case"submit_proof_receipt":t=p1(e);break;case"propose_authority":t=Ns(e.pending);break;case"update_roles":t=m1(e);break;case"add_to_blacklist":{let n=e;t=It([Cp(n.address),Mn(n.reason)]);break}case"freeze_account":case"thaw_account":{t=Cp(e.address);break}case"pause":case"unpause":case"accept_authority":case"remove_from_blacklist":case"revoke_proof_receipt":case"seize":t=g1();break;default:throw new Error(`Unsupported instruction encoder: ${r}`)}return It([Vi(r),t])}function or(r,e,t,n){return new ve({programId:r,keys:n,data:Pp.Buffer.from(t)})}function ar(r){return new ge().add(r)}function ye(r,e=!1){return{pubkey:r,isSigner:e,isWritable:!1}}function Ae(r,e=!1){return{pubkey:r,isSigner:e,isWritable:!0}}function _a(r){return r?typeof r=="string"?new V(r):r:null}var Mp=kt(un(),1);function Np(r,e=!1){return{pubkey:r,isSigner:e,isWritable:!1}}function Lp(r,e=!1){return{pubkey:r,isSigner:e,isWritable:!0}}function Jl(r,e){return V.findProgramAddressSync([xr("extra-account-metas"),r.toBytes()],e)[0]}function Ls(r,e,t){return V.findProgramAddressSync([xr(wp),r.toBytes(),e.toBytes()],t)[0]}function $p(r){let e=Jl(r.mint,r.transferHookProgramId);return new ve({programId:r.transferHookProgramId,keys:[Lp(r.payer,!0),Np(r.mint),Lp(e),Np(Te.programId)],data:Mp.Buffer.from(Vi("initialize_extra_account_meta_list"))})}function y1(r){switch(r){case"minter":return 0;case"burner":return 1;case"blacklister":return 2;case"pauser":return 3;case"seizer":return 4;default:throw new Error(`UnsupportedRole:${String(r)}`)}}var Ql=class{blacklist=new Map;proofReceipts=new Map;compressedStateRoot=null;async blacklistAdd(e,t){return this.blacklist.set(e.toBase58(),t),"blacklist-added"}async blacklistRemove(e){return this.blacklist.delete(e.toBase58()),"blacklist-removed"}async seize(e,t){return`seize:${e.toBase58()}:${t.toBase58()}`}async submitProofReceipt(e){let t=`${e.subject.toBase58()}:${e.nullifier}`;return this.proofReceipts.set(t,e),`proof-receipt:${t}`}async setCompressedStateRoot(e){return this.compressedStateRoot=e,`compressed-root:${e}`}},fi=class r{constructor(e,t,n,i,s,o,l){this.connection=e;this.authority=t;let u=new Ql;this.programId=n,this.mintAddress=i,this.transferHookProgramId=s,this.authorityPublicKey=$r(t),this.configPda=V.findProgramAddressSync([new TextEncoder().encode(wa),i.toBytes()],n)[0],this.config=o,this.registryMetadata=l,this.compliance=new ba(o.enableTransferHook||o.enableZkComplianceProofs||o.enableCompressedComplianceState,u)}compliance;config;programId;mintAddress;configPda;transferHookProgramId;registryMetadata;authorityPublicKey;totalSupply=0n;balances=new Map;paused=!1;static async create(e){let t=Ip(e),n=xp(t),i=e.mint instanceof qe?e.mint.publicKey:e.mint??qe.generate().publicKey;return new r(e.connection,e.authority,e.programId??Yl,i,_a(e.transferHookProgramId??null),n,t.registryMetadata)}static async connect(e){let t=e.programId??Yl,n=V.findProgramAddressSync([new TextEncoder().encode(wa),e.mint.toBytes()],t)[0],i=await bp(e.connection,n);return new r(e.connection,e.authority,t,e.mint,_a(i.transferHookProgramId),i,e.registryMetadata??{})}static async createOnChain(e){if(!qt(e.authority))throw new Error("CreateOnChainRequiresAuthorityKeypair");let t=e.mint??qe.generate();if(!(t instanceof qe))throw new Error("CreateOnChainRequiresMintKeypair");let n=t instanceof qe?t.publicKey:t,i=await r.create({...e,mint:n}),s=await i.buildInitializeTransaction(),o=await Ps({connection:e.connection,transaction:s,signer:e.authority,extraSigners:t instanceof qe?[t]:[]});return{stablecoin:i,signature:o}}getConnection(){return this.connection}getAuthority(){return this.authority}getAuthorityPublicKey(){return this.authorityPublicKey}getProgramId(){return this.programId}getMintAddress(){return this.mintAddress}getConfigAddress(){return this.configPda}async getConfig(){return{...this.config,isPaused:this.paused}}async getRegistryEntry(){let e=await this.getConfig();return pp({mint:this.mintAddress,config:this.configPda,authority:new V(e.authority),view:e,metadata:this.registryMetadata})}async buildInitializeTransaction(){return ar(or(this.programId,"initialize",sr("initialize",{name:this.config.name,symbol:this.config.symbol,uri:this.config.uri,decimals:this.config.decimals,standardVersion:this.config.standardVersion,enablePermanentDelegate:this.config.enablePermanentDelegate,enableTransferHook:this.config.enableTransferHook,defaultAccountFrozen:this.config.defaultAccountFrozen,enableConfidentialTransfers:this.config.enableConfidentialTransfers,enableZkComplianceProofs:this.config.enableZkComplianceProofs,enableCompressedComplianceState:this.config.enableCompressedComplianceState,transferHookProgramId:this.transferHookProgramId,proofVerifierProgramId:_a(this.config.proofVerifierProgramId),compressedComplianceRoot:this.config.compressedComplianceRoot,complianceCircuit:this.config.complianceCircuit}),[Ae(this.authorityPublicKey,!0),Ae(this.configPda),Ae(this.mintAddress,!0),ye(Ln),ye(Te.programId),ye(ii)]))}async buildMintTransaction(e){Zl(e.amount);let t=[Ae(this.configPda),Ae(this.mintAddress),Ae(e.destination),ye($r(e.minter),!0),ye(Ln),this.optionalRoleAssignmentMeta($r(e.minter),"minter",!0)];return ar(or(this.programId,"mint",sr("mint",{amount:e.amount}),t))}async buildBurnTransaction(e){Zl(e.amount);let t=[Ae(this.configPda),Ae(this.mintAddress),Ae(e.source),ye($r(e.burner),!0),ye(Ln),this.optionalRoleAssignmentMeta($r(e.burner),"burner")];return ar(or(this.programId,"burn",sr("burn",{amount:e.amount}),t))}async buildPauseTransaction(e){let t=[Ae(this.configPda),ye(this.authorityPublicKey,!0),this.optionalRoleAssignmentMeta(this.authorityPublicKey,"pauser")];return ar(or(this.programId,e?"pause":"unpause",sr(e?"pause":"unpause",{}),t))}async buildFreezeTransaction(e,t=!1){let n=[Ae(this.configPda),Ae(this.mintAddress),Ae(e),ye(this.authorityPublicKey,!0),ye(Ln),this.optionalRoleAssignmentMeta(this.authorityPublicKey,"pauser")];return ar(or(this.programId,t?"thaw_account":"freeze_account",sr(t?"thaw_account":"freeze_account",{address:e}),n))}async buildSeizeTransaction(e){let t=[Ae(this.configPda),ye($r(e.seizer),!0),Ae(this.mintAddress),Ae(e.fromAccount),Ae(e.toAccount),ye(Ln),this.optionalRoleAssignmentMeta($r(e.seizer),"seizer")];return t.push(...await this.buildSeizeTransferHookMetas(e)),ar(or(this.programId,"seize",sr("seize",{}),t))}async buildBlacklistAddTransaction(e){kp(e.reason);let t=V.findProgramAddressSync([new TextEncoder().encode(ji),this.mintAddress.toBytes(),e.address.toBytes()],this.programId)[0],n=[Ae(this.configPda),ye(this.authorityPublicKey,!0),ye(this.mintAddress),Ae(t),ye(Te.programId),this.optionalRoleAssignmentMeta(this.authorityPublicKey,"blacklister")];return ar(or(this.programId,"add_to_blacklist",sr("add_to_blacklist",{address:e.address,reason:e.reason}),n))}async buildBlacklistRemoveTransaction(e){let t=V.findProgramAddressSync([new TextEncoder().encode(ji),this.mintAddress.toBytes(),e.toBytes()],this.programId)[0],n=[Ae(this.configPda),ye(this.authorityPublicKey,!0),ye(this.mintAddress),Ae(t),this.optionalRoleAssignmentMeta(this.authorityPublicKey,"blacklister")];return ar(or(this.programId,"remove_from_blacklist",sr("remove_from_blacklist",{}),n))}async buildUpdateRoleTransaction(e){let t=this.roleAssignmentPda(e.holder,e.role);return ar(or(this.programId,"update_roles",sr("update_roles",{holder:e.holder,role:e.role,isActive:e.isActive,mintQuota:e.mintQuota??null}),[Ae(this.configPda),ye(this.authorityPublicKey,!0),ye(this.mintAddress),Ae(t),ye(Te.programId)]))}async buildUpdateComplianceRootTransaction(e){return ar(or(this.programId,"update_compliance_root",sr("update_compliance_root",{root:e}),[Ae(this.configPda),ye(this.authorityPublicKey,!0)]))}async buildSubmitProofReceiptTransaction(e){let t=Ls(this.mintAddress,e.subject,this.programId);return new ge().add(Ts.setComputeUnitLimit({units:14e5}),or(this.programId,"submit_proof_receipt",sr("submit_proof_receipt",{subject:e.subject,commitment:e.commitment,proofCommitment:e.proofCommitment,response:e.response,merkleSiblings:e.merkleSiblings,merkleDirections:e.merkleDirections,circuit:e.circuit,expiresAtSlot:e.expiresAtSlot}),[Ae(this.configPda),Ae(this.authorityPublicKey,!0),ye(this.mintAddress),Ae(t),ye(Te.programId)]))}async buildRevokeProofReceiptTransaction(e){let t=Ls(this.mintAddress,e,this.programId);return ar(or(this.programId,"revoke_proof_receipt",sr("revoke_proof_receipt",{}),[Ae(this.configPda),ye(this.authorityPublicKey,!0),ye(this.mintAddress),Ae(t)]))}async buildInitializeTransferHookMetaListTransaction(e=this.transferHookProgramId){if(!e)throw new Error("MissingTransferHookProgramId");return ar($p({payer:this.authorityPublicKey,mint:this.mintAddress,transferHookProgramId:e}))}async buildAuthorityTransferTransaction(e){return ar(or(this.programId,"propose_authority",sr("propose_authority",{pending:e}),[Ae(this.configPda),ye(this.authorityPublicKey,!0)]))}async mint(e){this.assertNotPaused(),await this.buildMintTransaction(e);let t=e.destination.toBase58(),n=this.balances.get(t)??0n;return this.balances.set(t,n+e.amount),this.totalSupply+=e.amount,`mint:${t}:${e.amount.toString()}`}async burn(e){return this.assertNotPaused(),await this.buildBurnTransaction(e),this.totalSupply=this.totalSupply>=e.amount?this.totalSupply-e.amount:0n,`burn:${e.amount.toString()}`}async freeze(e){return this.assertNotPaused(),await this.buildFreezeTransaction(e,!1),"freeze"}async thaw(e){return this.assertNotPaused(),await this.buildFreezeTransaction(e,!0),"thaw"}async pause(){return await this.buildPauseTransaction(!0),this.paused=!0,"pause"}async unpause(){return await this.buildPauseTransaction(!1),this.paused=!1,"unpause"}async seize(e){return await this.buildSeizeTransaction(e),this.compliance.seize(e.fromAccount,e.toAccount)}async blacklistAdd(e){return await this.buildBlacklistAddTransaction(e),this.compliance.blacklistAdd(e.address,e.reason)}async blacklistRemove(e){return await this.buildBlacklistRemoveTransaction(e),this.compliance.blacklistRemove(e)}async getTotalSupply(){return this.totalSupply}async mintOnChain(e){if(!qt(e.minter))throw new Error("MintOnChainRequiresSignerKeypair");let t=await this.buildMintTransaction(e);return this.sendTransaction(t,[e.minter])}async burnOnChain(e){if(!qt(e.burner))throw new Error("BurnOnChainRequiresSignerKeypair");let t=await this.buildBurnTransaction(e);return this.sendTransaction(t,[e.burner])}async pauseOnChain(e){if(!qt(this.authority))throw new Error("PauseOnChainRequiresAuthorityKeypair");let t=await this.buildPauseTransaction(e);return this.sendTransaction(t,[this.authority])}async freezeOnChain(e,t=!1){if(!qt(this.authority))throw new Error("FreezeOnChainRequiresAuthorityKeypair");let n=await this.buildFreezeTransaction(e,t);return this.sendTransaction(n,[this.authority])}async seizeOnChain(e){if(!qt(e.seizer))throw new Error("SeizeOnChainRequiresSignerKeypair");let t=await this.buildSeizeTransaction(e);return this.sendTransaction(t,[e.seizer])}async blacklistAddOnChain(e){if(!qt(this.authority))throw new Error("BlacklistAddOnChainRequiresAuthorityKeypair");let t=await this.buildBlacklistAddTransaction(e);return this.sendTransaction(t,[this.authority])}async blacklistRemoveOnChain(e){if(!qt(this.authority))throw new Error("BlacklistRemoveOnChainRequiresAuthorityKeypair");let t=await this.buildBlacklistRemoveTransaction(e);return this.sendTransaction(t,[this.authority])}async updateRoleOnChain(e){if(!qt(this.authority))throw new Error("UpdateRoleOnChainRequiresAuthorityKeypair");let t=await this.buildUpdateRoleTransaction(e);return this.sendTransaction(t,[this.authority])}async updateComplianceRootOnChain(e){if(!qt(this.authority))throw new Error("UpdateComplianceRootOnChainRequiresAuthorityKeypair");let t=await this.buildUpdateComplianceRootTransaction(e),n=await this.sendTransaction(t,[this.authority]);return this.config.compressedComplianceRoot=e,this.config.configHash=Gi(this.config),n}async submitProofReceiptOnChain(e){if(!qt(this.authority))throw new Error("SubmitProofReceiptOnChainRequiresAuthorityKeypair");let t=await this.buildSubmitProofReceiptTransaction(e);return this.sendTransaction(t,[this.authority])}async revokeProofReceiptOnChain(e){if(!qt(this.authority))throw new Error("RevokeProofReceiptOnChainRequiresAuthorityKeypair");let t=await this.buildRevokeProofReceiptTransaction(e);return this.sendTransaction(t,[this.authority])}async initializeTransferHookMetaListOnChain(e=this.transferHookProgramId){if(!qt(this.authority))throw new Error("InitializeTransferHookMetaListOnChainRequiresAuthorityKeypair");let t=await this.buildInitializeTransferHookMetaListTransaction(e);return this.sendTransaction(t,[this.authority])}assertNotPaused(){if(this.paused)throw new Error("Paused")}roleAssignmentPda(e,t){return V.findProgramAddressSync([new TextEncoder().encode("role"),this.mintAddress.toBytes(),Uint8Array.from([y1(t)]),e.toBytes()],this.programId)[0]}roleAssignmentMeta(e,t,n=!1){if(e.toBase58()===this.config.authority)return[];let i=this.roleAssignmentPda(e,t);return[n?Ae(i):ye(i)]}optionalRoleAssignmentMeta(e,t,n=!1){return this.roleAssignmentMeta(e,t,n)[0]??ye(this.programId)}async buildSeizeTransferHookMetas(e){if(!this.transferHookProgramId)return[];try{let[t,n]=await Promise.all([Kl(this.connection,e.fromAccount,"confirmed",Ln),Kl(this.connection,e.toAccount,"confirmed",Ln)]),i=Jl(this.mintAddress,this.transferHookProgramId),s=V.findProgramAddressSync([new TextEncoder().encode(ji),this.mintAddress.toBytes(),t.owner.toBytes()],this.programId)[0],o=Ls(this.mintAddress,t.owner,this.programId),l=V.findProgramAddressSync([new TextEncoder().encode(ji),this.mintAddress.toBytes(),n.owner.toBytes()],this.programId)[0],u=Ls(this.mintAddress,n.owner,this.programId);return[ye(this.programId),ye(this.configPda),ye(s),ye(o),ye(l),ye(u),ye(this.transferHookProgramId),ye(i)]}catch{return[]}}async sendTransaction(e,t){return Ps({connection:this.connection,transaction:e,signer:t[0],extraSigners:t.slice(1),commitment:"confirmed"})}};var Dp=kt(un(),1);function hi(r){return Uint8Array.of(r?1:0)}function Yi(r){return r?It([Uint8Array.of(1),ir(r)]):Uint8Array.of(0)}function eu(r){return r.toBytes()}function Up(r){switch(r){case"sss-1":return 1;case"sss-2":return 2;case"sss-3":return 3;default:throw new Error(`Unsupported preset: ${String(r)}`)}}function Ms(r,e=!1){return{pubkey:r,isSigner:e,isWritable:!1}}function $n(r,e=!1){return{pubkey:r,isSigner:e,isWritable:!0}}function tu(r,e,t,n){return new ve({programId:r,keys:n,data:Dp.Buffer.from(It([Vi(e),t]))})}function $s(r=ui){return V.findProgramAddressSync([xr(vp)],r)[0]}function zp(r,e=ui){return V.findProgramAddressSync([xr(_p),xr(r)],e)[0]}function b1(r,e=ui){return V.findProgramAddressSync([xr(Sp),r.toBytes()],e)[0]}function Fp(r,e=ui){let t=It([ir(r.standardVersion),Uint8Array.of(Up(r.preset)),ir(r.schemaHash),ir(r.notesUri),hi(!!r.deprecated),Yi(r.replacementVersion)]);return tu(e,"register_release",t,[$n(r.authority,!0),$n($s(e)),$n(zp(r.standardVersion,e)),Ms(Te.programId)])}function Kp(r,e,t,n=ui){let i=Yi(t);return tu(n,"deprecate_release",i,[$n(r,!0),$n($s(n)),$n(zp(e,n))])}function ru(r,e=ui){let t=new V(r.entry.mint),n=new V(r.entry.config),i=new V(r.entry.authority),s=It([eu(t),eu(n),eu(r.stablecoinProgramId),ir(r.entry.standardVersion),Uint8Array.of(Up(r.entry.preset)),ir(r.entry.configHash),hi(r.entry.enablePermanentDelegate),hi(r.entry.enableTransferHook),hi(r.entry.defaultAccountFrozen),hi(r.entry.enableConfidentialTransfers),hi(r.entry.enableZkComplianceProofs),hi(r.entry.enableCompressedComplianceState),Uint8Array.of(r.entry.decimals),Yi(r.entry.transferHookProgramId),Yi(r.entry.proofVerifierProgramId),Yi(r.entry.compressedComplianceRoot),Yi(r.entry.complianceCircuit),ir(r.entry.name),ir(r.entry.symbol),ir(r.entry.uri),ir(r.entry.metadata.homepage??""),ir(r.entry.metadata.jurisdiction??"")]);return tu(e,"register_stablecoin",s,[$n(i,!0),Ms($s(e)),$n(b1(t,e)),Ms(t),Ms(n),Ms(Te.programId)])}function Ds(r){return new ge().add(r)}var Yp="sss-frontend-state-v1",Us={rpcUrl:"https://api.devnet.solana.com",stablecoinProgram:"Gm2SdmH1ydLKmPtjNE4W2ZLjW5kMvPrx784L7oUcw4w",transferHookProgram:"E24UT9RMiw9zBh51ZMzXRdmoiLQ2PkVZ1sYhBKqazYy8",registryProgram:"5vedffCtRhecm5sSXJCbgrwe7GYnGC9XK5vWLiMHLVXB",tokenProgram:Ui.toBase58()},ne={provider:null,busy:"",error:"",notice:"",lastSignature:"",modal:null,toasts:[]},w1=[{id:"usdr",name:"Regulated USD",symbol:"USDR",tier:"SSS-2",supply:"$4,750,000",status:"Paused",registry:"Registered",registryTone:"primary",statusTone:"warning",mint:"7xKz...f9Qa",configHash:"h29a...f82k",jurisdiction:"Cayman Islands",description:"Fiat-backed issuance with frozen-account controls and on-chain compliance hooks.",totalMinted:"5,000,000",totalBurned:"250,000",currentSupply:"4,750,000",frozenAccounts:"2",blacklisted:"4",featureFlags:["Transfer hook enabled","Default account frozen","Registry auto-register","Identity gating on mint"],authorities:[["Master authority","4fP2...nQd8"],["Mint authority","7xKz...f9Qa"],["Freeze authority","2aLk...D91m"],["Compliance signer","A8d2...LmE4"]],registryInfo:[["Record status","Published"],["Website","https://issuer.sss.dev"],["Compliance docs","https://docs.sss.dev/usdr"],["Jurisdiction","Cayman Islands"]]},{id:"usds",name:"Solana Dollar",symbol:"USDS",tier:"SSS-1",supply:"$1,250,000",status:"Active",registry:"Registered",registryTone:"primary",statusTone:"success",mint:"4sDf...o18P",configHash:"s81f...k32c",jurisdiction:"United States",description:"Lean stable asset for fast settlement with only the core mint and burn surfaces enabled.",totalMinted:"1,250,000",totalBurned:"0",currentSupply:"1,250,000",frozenAccounts:"0",blacklisted:"0",featureFlags:["Basic mint and burn","Transferable by default","Registry listed","No confidential transfers"],authorities:[["Mint authority","8N5a...vQ2p"],["Treasury vault","H1s8...aP91"],["Ops signer","Q4d8...eY55"],["Freeze authority","Disabled"]],registryInfo:[["Record status","Published"],["Website","https://solanadollar.dev"],["Compliance docs","n/a"],["Jurisdiction","United States"]]},{id:"usdp",name:"Private USD",symbol:"USDP",tier:"SSS-3",supply:"$9,800,000",status:"Preview",registry:"Deprecated",registryTone:"warning",statusTone:"warning",mint:"9P1q...Jb4n",configHash:"p99m...x1a2",jurisdiction:"Singapore",description:"Restricted deployment testing advanced privacy and proof surfaces before public release.",totalMinted:"10,000,000",totalBurned:"200,000",currentSupply:"9,800,000",frozenAccounts:"1",blacklisted:"9",featureFlags:["Confidential transfers","ZK compliance proofs","Compressed compliance state","Private registry payload"],authorities:[["Master authority","Q1u6...mN92"],["Mint authority","3Hg4...Lr5q"],["Privacy oracle","7Mq1...gA17"],["Compliance signer","B55d...kP1z"]],registryInfo:[["Record status","Deprecated"],["Website","https://privateusd.example"],["Compliance docs","https://privateusd.example/framework"],["Jurisdiction","Singapore"]]}],v1=[{name:"Regulated USD",symbol:"USDR",tier:"SSS-2",issuer:"Stable Studio",status:"Published",tone:"primary",jurisdiction:"Cayman Islands"},{name:"Solana Dollar",symbol:"USDS",tier:"SSS-1",issuer:"Northstar Treasury",status:"Published",tone:"primary",jurisdiction:"United States"},{name:"Private USD",symbol:"USDP",tier:"SSS-3",issuer:"Blue Meridian",status:"Deprecated",tone:"warning",jurisdiction:"Singapore"}],_1=[{type:"success",title:"Minted 50,000 USDR",detail:"Tx 4y1E...9pL2 completed under master authority.",when:"2 mins ago"},{type:"warning",title:"Registry payload queued",detail:"USDR disclosure package waiting for compliance signature.",when:"14 mins ago"},{type:"danger",title:"Freeze request opened",detail:"Account 91oP...9aWd flagged by monitoring pipeline.",when:"42 mins ago"},{type:"success",title:"Release v1.0.0 published",detail:"SSS registry release promoted to production.",when:"Today 08:16"}];var S1=[["Managed stablecoins","12","+2 this week"],["Total supply","$1.24B","+5.2%"],["Paused tokens","02","Action required"],["Blacklisted","45","+4 accounts"]],R1=[{id:"v1.0.0-sss-1",standardVersion:"v1.0.0",preset:"SSS-1",schemaHash:"schema-sss1-a4f9c0",notesUri:"https://docs.sss.dev/releases/v1.0.0-sss1",deprecated:!1,replacementVersion:"",tone:"success",status:"Published"},{id:"v1.0.0-sss-2",standardVersion:"v1.0.0",preset:"SSS-2",schemaHash:"schema-sss2-d94af1",notesUri:"https://docs.sss.dev/releases/v1.0.0-sss2",deprecated:!1,replacementVersion:"",tone:"success",status:"Published"},{id:"v0.9.4-sss-1",standardVersion:"v0.9.4",preset:"SSS-1",schemaHash:"schema-sss1-legacy",notesUri:"https://docs.sss.dev/releases/v0.9.4-sss1",deprecated:!0,replacementVersion:"v1.0.0",tone:"warning",status:"Deprecated"}],A1=[{id:"hook-blacklist-1",endpoint:"https://ops.stable-studio.io/hooks/compliance",eventType:"WALLET_BLACKLISTED",secretLabel:"comp-prod-01",status:"Healthy",tone:"success",retryPolicy:"3 retries",deliveryRate:"99.8%"},{id:"hook-mint-1",endpoint:"https://ops.stable-studio.io/hooks/minting",eventType:"MINT_COMPLETED",secretLabel:"mint-prod-02",status:"Healthy",tone:"success",retryPolicy:"5 retries",deliveryRate:"100%"}],zs={connected:!1,walletAddress:"",walletProvider:"Phantom",mobileMenuOpen:!1,stablecoinFilter:"ALL",customStablecoins:[],customRegistryEntries:[],customActivity:[],customReleases:[],customWebhooks:[],customMintRequests:[],lastDeployment:null,settings:{rpcUrl:Us.rpcUrl,stablecoinProgram:Us.stablecoinProgram,transferHookProgram:Us.transferHookProgram,registryProgram:Us.registryProgram,tokenProgram:Us.tokenProgram,autoRegister:!0,strictMode:!0,analytics:!0,issuerName:"Stable Studio",issuerWebsite:"https://stable-studio.io",displayDensity:"Comfortable"},wizard:{preset:"SSS-2",tokenName:"Regulated USD",symbol:"USDR",decimals:"6",metadataUri:"https://metadata.sss.dev/usdr.json",permanentDelegate:!0,transferHook:!0,defaultFrozen:!0,confidentialTransfers:!1,zkProofs:!1,compressedState:!1,masterAuthority:"",minter:"",minterQuota:"1000000",burner:"",freezeAuthority:"",autoRegister:!0,jurisdiction:"Cayman Islands",docsUri:"https://docs.sss.dev/usdr",issuerWebsite:"https://issuer.sss.dev",contactEmail:"compliance@issuer.sss.dev"}},x=E1();function E1(){try{let r=JSON.parse(localStorage.getItem(Yp)||"{}");return{...zs,...r,settings:{...zs.settings,...r.settings||{}},wizard:{...zs.wizard,...r.wizard||{}},customStablecoins:Array.isArray(r.customStablecoins)?r.customStablecoins:[],customRegistryEntries:Array.isArray(r.customRegistryEntries)?r.customRegistryEntries:[],customActivity:Array.isArray(r.customActivity)?r.customActivity:[],customReleases:Array.isArray(r.customReleases)?r.customReleases:[],customWebhooks:Array.isArray(r.customWebhooks)?r.customWebhooks:[],customMintRequests:Array.isArray(r.customMintRequests)?r.customMintRequests:[]}}catch{return JSON.parse(JSON.stringify(zs))}}function ze(){localStorage.setItem(Yp,JSON.stringify(x))}function Zp(r,e,t){let n=`${Date.now()}-${Math.random().toString(16).slice(2,8)}`;ne.toasts=[...ne.toasts.slice(-3),{id:n,tone:r,title:e,body:t}]}function Sa(r){ne.modal=r}function Ea(){ne.modal=null}function $e(r=""){ne.busy=r}function Sr(r=""){ne.error=r,r&&(ne.notice="",Zp("danger","Error",r))}function Pe(r=""){ne.notice=r,r&&(ne.error="",Zp("success","Success",r))}function Xp(){ne.busy="",ne.error="",ne.notice="",Ea()}function pi(){return new ta(x.settings.rpcUrl,"confirmed")}function Ks(){let r=x.settings.rpcUrl.toLowerCase();return r.includes("localhost")||r.includes("127.0.0.1")?"Localnet":r.includes("mainnet")?"Mainnet":"Devnet"}function k1(){let r=Ks();return r==="Mainnet"?"":r==="Localnet"?"custom":"devnet"}function I1(r){if(!r||String(r).startsWith("demo-"))return"";let e=k1();return e==="custom"?`https://explorer.solana.com/tx/${r}?cluster=custom&customUrl=${encodeURIComponent(x.settings.rpcUrl)}`:e?`https://explorer.solana.com/tx/${r}?cluster=${e}`:`https://explorer.solana.com/tx/${r}`}async function x1(r){let t=await pi().getAccountInfo($s(r),"confirmed");return!t?.data||t.data.length<40?null:new V(t.data.slice(8,40)).toBase58()}async function Jp(r){let e=await x1(r),t=Ji();return!e||!t||e===t?null:{registryAuthority:e,walletAuthority:t}}function Fs(){let r="sss-demo-wallet-address",e=localStorage.getItem(r);if(e)return e;let t=qe.generate().publicKey.toBase58();return localStorage.setItem(r,t),t}function T1(){let r=new V(Fs());return{isDemo:!0,publicKey:r,connect:async()=>({publicKey:r}),disconnect:async()=>{},signTransaction:async e=>e}}function nu(r){return[window.phantom?.solana,window.solflare,window.backpack?.solana,window.solana,...Array.isArray(window.solana?.providers)?window.solana.providers:[]].filter(Boolean).find(t=>r(t))||null}function cu(r){return r==="Demo Wallet"?T1():r==="Phantom"?nu(e=>e.isPhantom):r==="Solflare"?nu(e=>e.isSolflare):r==="Backpack"?nu(e=>e.isBackpack):null}function O1(r=ne.provider){return!!(r?.isDemo||x.walletProvider==="Demo Wallet")}function B1(){return hu()?"Wallet extensions usually do not inject on file:// pages. Serve the frontend on http://127.0.0.1:4173 or any HTTPS host before using Phantom, Solflare, or Backpack. Demo Wallet still works for offline preview.":""}async function Gt(r){return O1(r.signer)?(await new Promise(e=>window.setTimeout(e,320)),`demo-${Date.now().toString(16)}`):Ps(r)}function C1(){if(!ne.provider?.signTransaction)throw new Error("Connect a wallet to continue.");return ne.provider}function Xi(){let r=C1(),e=xa(r);if(!e)throw new Error("Connected wallet did not expose a usable public key.");return{publicKey:new V(e),signTransaction:n=>r.signTransaction(n),signAllTransactions:r.signAllTransactions?n=>r.signAllTransactions(n):void 0,isDemo:!!r.isDemo}}function He(r,e){let t=String(r||"").trim();if(!t)throw new Error(`${e} is required.`);return t}function Fe(r,e){let t=He(r,e);try{return new V(t)}catch{throw new Error(`${e} must be a valid Solana public key.`)}}function P1(r,e){let t=String(r||"").trim();if(t)return Fe(t,e)}function Ji(){return ne.provider?.publicKey?.toBase58()||x.walletAddress}function xa(r,e){let t=e?.publicKey?.toBase58?.(),n=r?.publicKey?.toBase58?.();return t||n||x.walletAddress||""}function Vt(r){let e=Number(r?.decimals??6);return Number.isFinite(e)&&e>=0?e:6}function cn(r,e){let t=10n**BigInt(e),n=r/t,i=(r%t).toString().padStart(e,"0").replace(/0+$/,"");return i?`${n}.${i}`:n.toString()}function lu(r,e,t){let n=He(r,e);if(!/^\d+(\.\d+)?$/.test(n))throw new Error(`${e} must be a positive number.`);let[i,s=""]=n.split(".");if(s.length>t)throw new Error(`${e} supports up to ${t} decimal places.`);let o=10n**BigInt(t),l=BigInt(i||"0")*o,u=BigInt((s||"").padEnd(t,"0")||"0"),y=l+u;if(y<=0n)throw new Error(`${e} must be greater than zero.`);return y}function N1(r,e){let t=He(r,e).replace(/^0x/i,"");if(!/^[0-9a-fA-F]{64}$/.test(t))throw new Error(`${e} must be exactly 32 bytes encoded as 64 hex characters.`);let n=new Uint8Array(32);for(let i=0;i<32;i+=1)n[i]=Number.parseInt(t.slice(i*2,i*2+2),16);return n}function uu(r,e){return`${cn(r,Vt(e))} ${e.symbol}`}function Ia(r){let e=String(r||"").match(/\d+/);return e?Number.parseInt(e[0],10):0}function Qp(r){let e=[];return r.enableTransferHook&&e.push("Transfer hook enabled"),r.defaultAccountFrozen&&e.push("Default account frozen"),r.enablePermanentDelegate&&e.push("Permanent delegate enabled"),r.enableConfidentialTransfers&&e.push("Confidential transfers enabled"),r.enableZkComplianceProofs&&e.push("ZK compliance proofs enabled"),r.enableCompressedComplianceState&&e.push("Compressed compliance state enabled"),e.length?e:["Basic mint and burn","Transferable by default"]}function em(r){return[["Master authority",r.authority],["Mint operator","Role-based / delegated"],["Burn operator","Role-based / delegated"],["Pause & freeze","Role-based / delegated"]]}function L1(r){return r.preset==="sss-3"?"Advanced privacy-forward stablecoin with proof-enforced transfer controls and compressed compliance state.":r.preset==="sss-2"?"Compliance-first stablecoin with transfer hooks, frozen-account controls, and registry-aligned operations.":"Minimal stablecoin with core issuance and burn semantics for straightforward settlement rails."}function M1(r){return r.preset.toUpperCase()}function Hp(r){let e=String(r||"").trim().toLowerCase();return e==="sss-1"?"sss-1":e==="sss-2"?"sss-2":"sss-3"}function $1(){x.customStablecoins.some(r=>r.id==="demo-usdx")||x.customStablecoins.unshift({id:"demo-usdx",name:"Demo USD Experience",symbol:"USDX",tier:"SSS-2",supply:"1250000 USDX",status:"Active",registry:"Registered",registryTone:"primary",statusTone:"success",mint:qe.generate().publicKey.toBase58(),configHash:"cfg-demo-42a1e8f3",configAddress:qe.generate().publicKey.toBase58(),programId:x.settings.stablecoinProgram,signature:"demo-init",registrySignature:"demo-registry",live:!1,demo:!0,jurisdiction:"United States",description:"Demo-mode stablecoin seeded for presentation clickthroughs when a browser wallet is unavailable.",decimals:6,totalMinted:"1,500,000",totalBurned:"250,000",currentSupply:"1,250,000",supplyAtomic:"1250000000000",mintedAtomic:"1500000000000",burnedAtomic:"250000000000",frozenAccounts:"1",blacklisted:"2",complianceRoot:"demo-root-9931",proofReceipts:[{subject:qe.generate().publicKey.toBase58(),status:"Valid",complianceRoot:"demo-root-9931",submittedAt:"Today 09:18"}],roleAssignments:[{holder:qe.generate().publicKey.toBase58(),role:"minter",active:!0,mintQuota:"500000"}],featureFlags:["Transfer hook enabled","Default account frozen","Registry registration confirmed","Demo workspace seeded"],authorities:[["Master authority",Fs()],["Mint authority",Fs()],["Burner",Fs()],["Freeze authority",Fs()]],registryInfo:[["Record status","Published"],["Website","https://demo.stable-studio.local"],["Compliance docs","https://demo.stable-studio.local/docs"],["Jurisdiction","United States"]]}),x.customWebhooks.length||(x.customWebhooks=[{id:"demo-webhook-1",endpoint:"https://demo.stable-studio.local/webhooks/compliance",eventType:"WALLET_BLACKLISTED",secretLabel:"demo-ops",status:"Healthy",tone:"success",retryPolicy:"3 retries",deliveryRate:"99.9%",coinId:"demo-usdx"}]),x.customMintRequests.length||(x.customMintRequests=[{id:"demo-request-1",coinId:"demo-usdx",symbol:"USDX",destinationOwner:qe.generate().publicKey.toBase58(),amount:"50000",requestedBy:"Treasury Desk",reason:"Market maker inventory",status:"Pending",simulated:!0},{id:"demo-request-2",coinId:"demo-usdx",symbol:"USDX",destinationOwner:qe.generate().publicKey.toBase58(),amount:"120000",requestedBy:"Operations",reason:"Settlement window",status:"Approved",simulated:!0}]),ze()}function Ra(r){let e=r.closest("[data-operation-panel]");if(!e)return{};let t={};return e.querySelectorAll("[data-operation-field]").forEach(n=>{t[n.dataset.operationField]=n.type==="checkbox"?n.checked:n.value}),t}function D1(){let r={};return document.querySelectorAll("[data-modal-field]").forEach(e=>{r[e.dataset.modalField]=e.type==="checkbox"?e.checked:e.value}),r}function tm(r){return Hs().filter(t=>t.title.includes(r.symbol)||t.detail.includes(r.symbol)||t.detail.includes(r.mint)).slice(0,6)}function U1(r){return r==="SSS-3"?qi.SSS_3:r==="SSS-2"?qi.SSS_2:qi.SSS_1}function z1(){return{permanentDelegate:x.wizard.permanentDelegate,transferHook:x.wizard.transferHook,defaultAccountFrozen:x.wizard.defaultFrozen,confidentialTransfers:x.wizard.confidentialTransfers,zkComplianceProofs:x.wizard.zkProofs,compressedComplianceState:x.wizard.compressedState}}function Qi(r){return!!(r?.live&&r?.programId&&r?.mint)}function Un(r,e){x.customStablecoins=x.customStablecoins.map(t=>t.id===r?e({...t}):t),ze()}function rm(r){x.customReleases=[r,...x.customReleases.filter(e=>e.id!==r.id)],ze()}function F1(r){x.customWebhooks=[r,...x.customWebhooks.filter(e=>e.id!==r.id)],ze()}function ou(r,e){x.customMintRequests=x.customMintRequests.map(t=>t.id===r?e({...t}):t),ze()}function Et(r){x.customActivity=[r,...x.customActivity],ze()}function du(r,e){Un(r,t=>e(t))}function nm(r,e){du(r,t=>{let n=BigInt(t.mintedAtomic||"0"),i=BigInt(t.burnedAtomic||"0"),s=BigInt(t.supplyAtomic||"0"),o=n+(e.mintedDelta||0n),l=i+(e.burnedDelta||0n),u=s+(e.mintedDelta||0n)-(e.burnedDelta||0n);return t.mintedAtomic=o.toString(),t.burnedAtomic=l.toString(),t.supplyAtomic=u.toString(),t.totalMinted=cn(o,Vt(t)),t.totalBurned=cn(l,Vt(t)),t.currentSupply=cn(u,Vt(t)),t.supply=uu(u,t),t})}async function Rr(r){let e=Xi(),t=Dn(r),n=pi(),i=await fi.connect({connection:n,authority:e,programId:Fe(t.programId,"Stablecoin program"),mint:Fe(t.mint,"Mint"),registryMetadata:{homepage:x.settings.issuerWebsite,jurisdiction:t.jurisdiction}});return{provider:e,coin:t,connection:n,stable:i}}function K1(){let r=[];return ne.busy&&r.push({tone:"primary",title:"Processing",body:ne.busy}),ne.error&&r.push({tone:"danger",title:"Action failed",body:ne.error}),ne.notice&&r.push({tone:"success",title:"Ready",body:ne.notice}),r.length?`
    <section class="alert-stack">
      ${r.map(e=>`
        <article class="summary-card alert-card ${e.tone}">
          <div class="row-split">
            ${pe(e.title,e.tone)}
            ${ne.lastSignature?`<a class="text-link mono" href="${C(I1(ne.lastSignature))}" target="_blank" rel="noreferrer">Explorer</a>`:""}
          </div>
          <p>${C(e.body)}</p>
        </article>
      `).join("")}
    </section>
  `:""}function iu(){return ne.toasts.length?`
    <section class="toast-stack" aria-live="polite">
      ${ne.toasts.map(r=>`
        <article class="toast-card ${r.tone}">
          <div class="row-split">
            ${pe(r.title,r.tone)}
            <button class="button quiet" data-action="dismiss-toast" data-id="${C(r.id)}">Dismiss</button>
          </div>
          <p>${C(r.body)}</p>
        </article>
      `).join("")}
    </section>
  `:""}function su(){if(!ne.modal)return"";let r=ne.modal,e=!!r.confirmPhrase;return`
    <section class="modal-backdrop" data-action="close-modal">
      <article class="modal-card ${r.tone||"primary"}" onclick="event.stopPropagation()">
        <div class="panel-header">
          <div>
            <p class="eyebrow">${C(r.eyebrow||"Confirm Action")}</p>
            <h3 class="panel-title">${C(r.title)}</h3>
            <p class="panel-subtitle">${C(r.body||"")}</p>
          </div>
          <button class="button ghost" data-action="close-modal">Close</button>
        </div>
        ${r.code?`<pre class="code-block mono">${C(r.code)}</pre>`:""}
        ${Array.isArray(r.rows)&&r.rows.length?`
          <div class="data-list">
            ${r.rows.map(([t,n])=>`
              <div class="data-row">
                <span>${C(t)}</span>
                <strong class="${String(n).includes(" ")?"":"mono"}">${C(n)}</strong>
              </div>
            `).join("")}
          </div>
        `:""}
        ${e?`
          <div class="field">
            <label>Type ${C(r.confirmPhrase)} to proceed</label>
            <input data-modal-field="confirmPhrase" type="text" placeholder="${C(r.confirmPhrase)}">
          </div>
        `:""}
        <div class="button-row">
          <button class="button ghost" data-action="close-modal">Cancel</button>
          <button class="button ${r.tone==="danger"?"danger":"primary"}" data-action="confirm-modal">${C(r.confirmLabel||"Continue")}</button>
        </div>
      </article>
    </section>
  `}function C(r){return String(r??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function fu(){return window.location.hash.replace(/^#/,"")||"landing"}function Ur(r){if(fu()===r){ce();return}window.location.hash=r}function H1(r){return!["landing","connect","help"].includes(r)}function hu(){return window.location.protocol==="file:"}function Zi(){return[...x.customStablecoins,...w1]}function W1(){return[...x.customRegistryEntries,...v1]}function Hs(){return[...x.customActivity,..._1]}function pu(){return[...x.customReleases,...R1.filter(r=>!x.customReleases.some(e=>e.id===r.id))]}function mu(){return[...x.customWebhooks,...A1.filter(r=>!x.customWebhooks.some(e=>e.id===r.id))]}function im(){return[...x.customMintRequests]}function Dn(r){return Zi().find(e=>e.id===r)||Zi()[0]}function sm(r){return pu().find(e=>e.id===r)}function om(r){return mu().find(e=>e.id===r)}function q1(r){return im().find(e=>e.id===r)}function gu(r){if(!r.startsWith("create/"))return 1;let e=Number(r.split("/")[1]);return Number.isFinite(e)&&e>=1&&e<=7?e:1}function ka(){return x.connected?"dashboard":"connect"}function Tr(r){return r?r.length<=10?r:`${r.slice(0,4)}...${r.slice(-4)}`:"Pending"}function au(r){return r||"primary"}function Ne(r,e,t="secondary",n=""){return`<button class="button ${t}" data-route="${C(r)}">${C(e)}${n?` <span class="material-symbols-outlined">${n}</span>`:""}</button>`}function le(r,e,t="secondary",n="",i=""){return`<button class="button ${t}" data-action="${C(r)}" ${i}>${C(e)}${n?` <span class="material-symbols-outlined">${n}</span>`:""}</button>`}function pe(r,e="primary"){return`<span class="pill ${au(e)}">${C(r)}</span>`}function am(r){if(r==="dashboard")return{title:"Dashboard",subtitle:"Protocol operations / overview"};if(r==="stablecoins")return{title:"My Stablecoins",subtitle:"Assets / managed issuance"};if(r==="mint-requests")return{title:"Mint Request Queue",subtitle:"Operations / issuance approvals"};if(r==="compliance-queue")return{title:"Compliance Queue",subtitle:"Operations / blacklist and proof review"};if(r==="webhooks")return{title:"Webhook Subscriptions",subtitle:"Integrations / downstream notifications"};if(r==="service-health")return{title:"Service Health",subtitle:"Systems / infrastructure visibility"};if(r==="release-registry")return{title:"Release Registry",subtitle:"Registry / standard versions"};if(r==="publish-release")return{title:"Publish Release",subtitle:"Registry / new standard record"};if(r.startsWith("stablecoin/")){let[,e,t]=r.split("/"),n=Dn(e);return{title:n.name,subtitle:`Stablecoins / ${n.symbol} / ${t||"overview"}`}}return r==="registry"?{title:"Registry Explorer",subtitle:"Discovery / on-chain metadata"}:r==="activity"?{title:"Activity Log",subtitle:"Audit / operations timeline"}:r==="help"?{title:"Documentation",subtitle:"Reference / CLI / SDK / architecture"}:r==="settings"?{title:"Settings",subtitle:"System / environment controls"}:r.startsWith("create/")?{title:"Stablecoin Studio",subtitle:`Create flow / step ${gu(r)} of 7`}:{title:"SSS",subtitle:"Solana Stablecoin Standard"}}function ce(){let r=fu();if(H1(r)&&!x.connected){Ur("connect");return}let e=document.getElementById("app");if(document.title=`${am(r).title} | SSS Frontend`,r==="landing"){e.innerHTML=`${V1()}${iu()}${su()}`;return}if(r==="connect"){e.innerHTML=`${G1()}${iu()}${su()}`;return}e.innerHTML=`
    <div class="app-shell">
      <aside class="sidebar ${x.mobileMenuOpen?"is-open":""}">
        ${j1(r)}
      </aside>
      <div class="sidebar-backdrop ${x.mobileMenuOpen?"is-open":""}" data-action="close-menu"></div>
      <div class="main-pane">
        ${Y1(r)}
        <main class="page">
          ${K1()}
          ${Z1(r)}
        </main>
      </div>
    </div>
    ${iu()}
    ${su()}
  `}function V1(){let r=[{tier:"SSS-1",title:"Minimal Tier",kicker:"SSS-1",copy:"Basic stablecoin primitives for developers who need standard functionality with minimum overhead.",features:["Basic Mint/Burn","Transferable"],footer:"Entry Level"},{tier:"SSS-2",title:"Full Compliance",kicker:"SSS-2 Compliant Stablecoin",copy:"Built-in transfer hooks and identity verification layers for institutional regulatory requirements.",features:["On-chain Compliance","Identity Hooks","Role Separation"],footer:"Institutional Standard",badge:"Recommended",tone:"primary"},{tier:"SSS-3",title:"Privacy Framework",kicker:"SSS-3 Confidential",copy:"Confidential computing and ZK-ready extensions for high-privacy financial transactions.",features:["ZK-Proof Transfers","Encrypted Balances","Advanced Privacy"],footer:"Next-Gen Privacy",badge:"Bonus",tone:"warning"}],e=[["Transfer Hooks","&mdash;",!0,!0],["Confidential Transfers","&mdash;","&mdash;",!0],["On-chain KYC/AML","&mdash;",!0,!0],["Multi-Role Admin",!0,!0,!0]],t=[["extension","SSS-1 Simple","Basic stablecoin primitives for developers who need standard functionality with minimum overhead."],["gavel","SSS-2 Compliant","Built-in transfer hooks and identity verification layers for institutional regulatory requirements."],["visibility_off","SSS-3 Bonus","Confidential computing and ZK-ready extensions for high-privacy financial transactions."],["list_alt","On-Chain Registry","Unified discovery and verification registry for all SSS-compliant tokens on the Solana network."],["account_tree","Config Inheritance","Seamlessly extend existing stablecoin configurations with inherited security and permission models."],["manage_accounts","Role Separation","Granular access control for issuers, auditors, mints, and freeze authorities to ensure security."]],n=[["Choose a Preset","Select from SSS-1, SSS-2, or SSS-3 based on your compliance and feature requirements."],["Configure & Deploy","Set your mint authority, compliance hooks, and registry metadata using our simple CLI or App."],["Operate & Audit","Manage supply, monitor compliance in real-time, and allow transparent auditing of reserves."]],i=[{title:"Protocol",links:[["Registry","landing"],["Governance","landing"],["Technical Docs","help"],["Architecture","landing"]]},{title:"Connect",links:[["GitHub","landing"],["Twitter / X","landing"],["Discord","landing"],["Newsletter","landing"]]}],s=(u,y="primary")=>u===!0?`<span class="material-symbols-outlined landing-check ${y}">check</span>`:`<span class="mono">${u}</span>`,o=([u,y])=>`<a class="footer-link" href="#${C(y)}">${C(u)}</a>`,l=(u,y="primary")=>`
    <div class="feature-check">
      <span class="material-symbols-outlined ${au(y)}">check_circle</span>
      <span>${C(u)}</span>
    </div>
  `;return`
    <div class="hero-shell">
      <nav class="landing-nav">
        <div class="brand">
          <div class="brand-mark mono">SSS</div>
          <div class="brand-copy">
            <h1 class="mono">Solana Stablecoin Standard</h1>
            <p>Solana stablecoin standard</p>
          </div>
        </div>
        <div class="nav-links">
          <a href="#landing">Presets</a>
          <a href="#landing">Architecture</a>
          <a href="#landing">Registry</a>
          <a href="#help">Docs</a>
        </div>
        <div class="button-row">
          ${Ne("help","Read Docs","ghost")}
          ${Ne(ka(),"Launch App","primary","arrow_forward")}
        </div>
      </nav>
      <div class="landing-main">
        <section class="hero">
          <div class="hero-grid">
            <div class="hero-copy">
              <span class="pill primary">Open standard &middot; Token-2022 &middot; Solana</span>
              <h2>Open Stablecoin Infrastructure for <span class="gradient-text">Solana</span></h2>
              <p>A modular framework for building compliant, enterprise-grade stablecoins using Solana's Token-2022 extensions. Built for scalability and security.</p>
              <div class="button-row">
                ${Ne(ka(),"Launch App","primary","arrow_forward")}
                ${Ne("help","Read Docs","ghost")}
              </div>
              <div class="hero-metrics">
                <div class="metric">
                  <strong class="mono">3</strong>
                  <span class="eyebrow">Presets</span>
                </div>
                <div class="metric">
                  <strong class="mono">Token-2022</strong>
                  <span class="eyebrow">Standard</span>
                </div>
                <div class="metric">
                  <strong class="mono">ZK-ready</strong>
                  <span class="eyebrow">Security</span>
                </div>
              </div>
            </div>
            <div class="diagram-panel">
              <div class="node-field">
                <div class="node-card">
                  <span class="material-symbols-outlined">account_balance</span>
                  <small>ISSUER</small>
                </div>
                <div class="node-card">
                  <span class="material-symbols-outlined">verified_user</span>
                  <small>COMPLIANCE</small>
                </div>
                <div class="node-card">
                  <span class="material-symbols-outlined">account_balance_wallet</span>
                  <small>WALLET</small>
                </div>
                <div class="node-card">
                  <span class="material-symbols-outlined">menu_book</span>
                  <small>REGISTRY</small>
                </div>
                <div class="node-card central">
                  <span class="material-symbols-outlined">token</span>
                  <small>MINT_HOOK</small>
                </div>
                <div class="signal-line one"></div>
                <div class="signal-line two"></div>
                <div class="signal-line three"></div>
                <div class="signal-line four"></div>
                <div class="floating-dot one"></div>
                <div class="floating-dot two"></div>
                <div class="floating-dot three"></div>
                <div class="floating-dot four"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="panel landing-section">
          <div class="landing-heading">
            <p class="eyebrow">Standards</p>
            <h3 class="panel-title">Three tiers. One framework.</h3>
          </div>
          <div class="preset-grid">
            ${r.map(u=>`
              <article class="card preset-card ${u.tier==="SSS-2"?"featured":""} ${u.tier==="SSS-3"?"bonus":""}">
                ${u.badge?`<span class="preset-tag ${au(u.tone||"primary")}">${C(u.badge)}</span>`:""}
                <p class="preset-kicker">${C(u.kicker)}</p>
                <h3 class="display">${C(u.title)}</h3>
                <p>${C(u.copy)}</p>
                <div class="feature-checklist">
                  ${u.features.map(y=>l(y,u.tier==="SSS-3"?"warning":"primary")).join("")}
                </div>
                <div class="preset-footer">${C(u.footer)}</div>
              </article>
            `).join("")}
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SSS-1</th>
                  <th>SSS-2</th>
                  <th>SSS-3</th>
                </tr>
              </thead>
              <tbody>
                ${e.map(([u,y,S,R])=>`
                  <tr>
                    <td>${u}</td>
                    <td>${s(y,"primary")}</td>
                    <td>${s(S,"primary")}</td>
                    <td>${s(R,"warning")}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </section>

        <section class="panel landing-section landing-section-alt">
          <div class="landing-heading landing-heading-center">
            <p class="eyebrow">Why SSS</p>
            <h3 class="panel-title">Built for regulated issuers.</h3>
          </div>
          <div class="differentiator-grid">
            ${t.map(([u,y,S])=>`
              <article class="differentiator-card">
                <span class="material-symbols-outlined landing-feature-icon">${u}</span>
                <h3>${C(y)}</h3>
                <p>${C(S)}</p>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="panel landing-section">
          <div class="row-split landing-steps-header">
            <h3 class="panel-title">Get started in minutes</h3>
            <div class="landing-divider"></div>
          </div>
          <div class="steps-grid">
            ${n.map(([u,y],S)=>`
              <article class="step-card">
                <div class="step-index mono">0${S+1}</div>
                <div class="summary-card">
                  <h3>${C(u)}</h3>
                  <p>${C(y)}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="landing-section cta-wrap">
          <div class="cta-banner">
            <h3 class="display">Deploy in minutes.</h3>
            <p>Join the new era of compliant stablecoins on Solana. Secure, scalable, and open-source infrastructure for global finance.</p>
            ${Ne(ka(),"Launch Dashboard","primary","rocket_launch")}
          </div>
          <footer class="landing-footer">
            <div class="footer-grid">
              <div class="footer-brand">
                <div class="brand">
                  <div class="brand-mark mono">SSS</div>
                  <div class="brand-copy">
                    <h1 class="mono">Solana Stablecoin Standard</h1>
                    <p>Solana stablecoin standard</p>
                  </div>
                </div>
                <p class="footer-copy">The open infrastructure layer for the next generation of stable assets on the Solana blockchain.</p>
                <div class="footer-meta-row mono">
                  <span>Open-source</span>
                  <span>&middot;</span>
                  <span>Token-2022</span>
                  <span>&middot;</span>
                  <span>Solana</span>
                </div>
              </div>
              ${i.map(u=>`
                <div>
                  <p class="footer-title">${C(u.title)}</p>
                  <div class="footer-links">
                    ${u.links.map(o).join("")}
                  </div>
                </div>
              `).join("")}
            </div>
            <div class="footer-legal">
              <span>&copy; 2024 SOLANA STABLECOIN STANDARD. NO RIGHTS RESERVED.</span>
              <div class="footer-links-inline">
                <a class="footer-link" href="#landing">Privacy Policy</a>
                <a class="footer-link" href="#landing">Terms of Service</a>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  `}function G1(){let r=[["Phantom","Fastest route for Solana-native operators.","flash_on"],["Solflare","Strong multisig and treasury workflows.","shield_lock"],["Backpack","Useful when you need app contexts and wallet separation.","wallet"],["Demo Wallet","Simulation mode for presentations and route clickthroughs without extension injection.","smart_toy"]],e=B1(),t=hu();return`
    <div class="hero-shell">
      <nav class="landing-nav">
        <div class="brand">
          <div class="brand-mark mono">SSS</div>
          <div class="brand-copy">
            <h1 class="display">Connect a wallet to continue</h1>
            <p>Secure entry point into the control plane</p>
          </div>
        </div>
        <div class="button-row">
          ${Ne("landing","Back to Landing","ghost","west")}
        </div>
      </nav>
      <div class="landing-main">
        <section class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Wallet access</p>
              <h3 class="panel-title">Choose an operator wallet</h3>
              <p class="panel-subtitle">The connected wallet gates the dashboard, create flow, and registry actions.</p>
            </div>
          </div>
          <div class="providers">
            ${r.map(([n,i,s])=>`
              <article class="provider-card">
                <div class="inline-main">
                  <div class="token-icon"><span class="material-symbols-outlined">${s}</span></div>
                  <div>
                    <h3>${C(n)}</h3>
                    <p>${C(i)}</p>
                  </div>
                </div>
                ${t&&n!=="Demo Wallet"?'<button class="button secondary" disabled>Serve over HTTP first</button>':cu(n)?`<button class="button primary" data-action="connect-wallet" data-provider="${C(n)}">Connect ${C(n)}</button>`:`<button class="button secondary" disabled>${C(n)} not detected</button>`}
              </article>
            `).join("")}
          </div>
          <div class="two-col">
            <div class="summary-card">
              <small class="eyebrow">Why connect</small>
              <p>The app shell displays live wallet context, network state, and scoped stablecoin actions after connection.</p>
            </div>
            <div class="summary-card">
              <small class="eyebrow">Runtime</small>
              <p>Current RPC: <span class="mono">${C(x.settings.rpcUrl)}</span>. Configure program IDs in Settings before submitting live transactions.</p>
            </div>
          </div>
          ${e?`
            <div class="summary-card">
              <small class="eyebrow">Wallet Injection Hint</small>
              <p>${C(e)}</p>
            </div>
          `:""}
          ${t?`
            <div class="summary-card">
              <small class="eyebrow">Serve or deploy this frontend</small>
              <p>Use <span class="mono">npm.cmd run frontend:deploy</span> to build a static export in <span class="mono">artifacts/frontend-static</span>, then host that folder over HTTP or HTTPS. For local preview, run <span class="mono">npm.cmd run frontend:serve</span> and open <span class="mono">http://127.0.0.1:4173</span>.</p>
            </div>
          `:""}
        </section>
      </div>
    </div>
  `}function j1(r){return`
    <div class="sidebar-header">
      <div class="brand-mark mono">SSS</div>
      <div>
        <h1 class="display">Stablecoin Studio</h1>
        <p class="mono muted">Token-2022 control plane</p>
      </div>
    </div>
    <nav class="sidebar-nav">
      ${[["dashboard","dashboard","Dashboard","Protocol status"],["stablecoins","toll","Stablecoins","Managed assets"],["mint-requests","queue","Mint Requests","Queue"],["compliance-queue","policy","Compliance","Queue"],["webhooks","webhook","Webhooks","Integrations"],["registry","menu_book","Registry","Discovery layer"],["release-registry","deployed_code","Releases","Registry versions"],["activity","query_stats","Activity","Audit events"],["service-health","monitor_heart","Service Health","Infrastructure"],["help","help_center","Help","Reference"],["settings","settings","Settings","Environment"],["create/1","add_circle","Create New","Wizard"]].map(([t,n,i,s])=>`
        <button class="nav-item ${YR(r,t)?"active":""}" data-route="${t}">
          <span class="material-symbols-outlined">${n}</span>
          <span class="nav-label">
            <strong>${C(i)}</strong>
            <small>${C(s)}</small>
          </span>
        </button>
      `).join("")}
    </nav>
    <div class="wallet-panel mt-auto">
      <div class="wallet-row">
        <div class="inline-main">
          <div class="wallet-avatar"><span class="material-symbols-outlined">account_balance_wallet</span></div>
          <div>
            <div class="eyebrow">Active wallet</div>
            <strong class="mono">${C(x.connected?Ji():"Not connected")}</strong>
          </div>
        </div>
        <span class="status-dot ${x.connected?"":"warning"}"></span>
      </div>
      <div class="wallet-row">
        <span class="pill warning">${C(x.walletProvider)}</span>
        ${x.connected?'<button class="button ghost" data-action="disconnect-wallet">Disconnect</button>':'<button class="button ghost" data-route="connect">Connect</button>'}
      </div>
    </div>
  `}function Y1(r){let e=am(r);return`
    <header class="topbar">
      <div class="inline-main">
        <button class="mobile-toggle" data-action="toggle-menu">
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div class="topbar-title">
          <h2 class="display">${C(e.title)}</h2>
          <p>${C(e.subtitle)}</p>
        </div>
      </div>
      <div class="topbar-actions">
        <div class="search">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search protocol, mints, or registry...">
        </div>
        ${pe(Ks(),Ks()==="Mainnet"?"danger":"warning")}
        ${pe(x.connected?Tr(Ji()):"Guest mode","primary")}
      </div>
    </header>
  `}function Z1(r){return r==="dashboard"?Wp():r==="stablecoins"?X1():r==="mint-requests"?J1():r==="compliance-queue"?Q1():r==="webhooks"?eR():r==="service-health"?tR():r.startsWith("stablecoin/")?iR(r):r==="registry"?hR():r==="release-registry"?rR():r==="publish-release"?nR():r==="activity"?pR():r==="help"?mR():r==="settings"?gR():r.startsWith("create/")?yR(gu(r)):Wp()}function Wp(){let r=Hs().slice(0,4);return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Control plane</p>
        <h1 class="headline">Operate issuance, registry, and compliance from one frontend.</h1>
        <p class="subline">The original screens are now consolidated into reusable cards, tables, and workflows.</p>
      </div>
      <div class="button-row">
        ${Ne("create/1","Create Stablecoin","primary","arrow_forward")}
        ${Ne("registry","Open Registry","secondary","north_east")}
      </div>
    </section>

    <section class="stat-grid">
      ${S1.map(([e,t,n])=>`
        <article class="stat-card">
          <div class="eyebrow">${C(e)}</div>
          <span class="stat-value">${C(t)}</span>
          <div class="stat-foot">${C(n)}</div>
        </article>
      `).join("")}
    </section>

    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Recent Activity</h3>
            <p class="panel-subtitle">Mints, registry updates, and compliance actions.</p>
          </div>
          ${Ne("activity","View All","quiet","east")}
        </div>
        <div class="timeline">
          ${r.map(e=>`
            <div class="timeline-item">
              <span class="timeline-marker ${e.type}"></span>
              <div>
                <h4>${C(e.title)}</h4>
                <p>${C(e.detail)}</p>
              </div>
              <div class="timeline-time">${C(e.when)}</div>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Service Health</h3>
            <p class="panel-subtitle">A productized version of the infrastructure and release screens.</p>
          </div>
          ${pe("Healthy","success")}
        </div>
        <div class="data-list">
          ${[["Registry program","99.98% availability"],["Webhook relayer","14 active handlers"],["Compliance queue","03 pending reviews"],["Release channel","v1.0.0 production"]].map(([e,t])=>`
            <div class="data-row">
              <span>${C(e)}</span>
              <strong>${C(t)}</strong>
            </div>
          `).join("")}
        </div>
        <div class="progress-card">
          <div class="row-split">
            <div>
              <div class="eyebrow">Quota usage</div>
              <strong>42 / 100 stablecoins created</strong>
            </div>
            <strong class="mono">42%</strong>
          </div>
          <div class="progress-rail">
            <div class="progress-fill" style="width:42%"></div>
          </div>
        </div>
      </article>
    </section>

    <section class="action-grid">
      <article class="action-card">
        <div class="icon-chip"><span class="material-symbols-outlined">add_circle</span></div>
        <div>
          <h3>Create with preset wizard</h3>
          <p>Walk through protocol selection, metadata, extensions, roles, registry, and review.</p>
        </div>
        ${Ne("create/1","Open Wizard","primary","arrow_forward")}
      </article>
      <article class="action-card">
        <div class="icon-chip"><span class="material-symbols-outlined">verified_user</span></div>
        <div>
          <h3>Review compliance events</h3>
          <p>Handle freezes, blacklists, and pending registry approvals in one queue.</p>
        </div>
        ${Ne("activity","Open Activity","secondary","north_east")}
      </article>
      <article class="action-card">
        <div class="icon-chip"><span class="material-symbols-outlined">menu_book</span></div>
        <div>
          <h3>Publish registry metadata</h3>
          <p>Inspect public records, issuer links, and release payloads before publication.</p>
        </div>
        ${Ne("registry","Inspect Registry","secondary","north_east")}
      </article>
    </section>
  `}function X1(){let r=x.stablecoinFilter,e=Zi().filter(t=>r==="ALL"||t.tier===r);return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Tokens</p>
        <h1 class="headline">My Stablecoins</h1>
        <p class="subline">Table and card views unified from the prototype's token management screens.</p>
      </div>
      <div class="button-row">
        ${Ne("create/1","Create Stablecoin","primary","arrow_forward")}
      </div>
    </section>

    <section class="four-col">
      <article class="stat-card"><div class="eyebrow">Assets</div><span class="stat-value">${Zi().length}</span></article>
      <article class="stat-card"><div class="eyebrow">Registered</div><span class="stat-value">${Zi().filter(t=>t.registry==="Registered").length}</span></article>
      <article class="stat-card"><div class="eyebrow">Paused</div><span class="stat-value">${Zi().filter(t=>t.status==="Paused").length}</span></article>
      <article class="stat-card"><div class="eyebrow">Custom deployments</div><span class="stat-value">${x.customStablecoins.length}</span></article>
    </section>

    <section class="two-col">
      <article class="panel" data-operation-panel="import-live-coin">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Attach Existing Stablecoin</h3>
            <p class="panel-subtitle">Import a live mint into this frontend without changing your current design system or route structure.</p>
          </div>
          ${pe(Ks(),"primary")}
        </div>
        <div class="field-grid">
          <div class="field">
            <label>Mint address</label>
            <input data-operation-field="mint" type="text" placeholder="Existing stablecoin mint on the configured program">
          </div>
          <div class="field">
            <label>Jurisdiction label</label>
            <input data-operation-field="jurisdiction" type="text" placeholder="Optional display label">
          </div>
        </div>
        <div class="button-row">
          ${le("import-live-coin","Import Live Stablecoin","primary","north_east")}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Frontend Wiring</h3>
            <p class="panel-subtitle">Current browser-side protocol configuration that powers deploys and live management actions.</p>
          </div>
        </div>
        <div class="data-list">
          <div class="data-row"><span>RPC</span><strong class="mono">${C(x.settings.rpcUrl)}</strong></div>
          <div class="data-row"><span>Stablecoin program</span><strong class="mono">${C(x.settings.stablecoinProgram)}</strong></div>
          <div class="data-row"><span>Transfer hook program</span><strong class="mono">${C(x.settings.transferHookProgram)}</strong></div>
          <div class="data-row"><span>Registry program</span><strong class="mono">${C(x.settings.registryProgram)}</strong></div>
        </div>
      </article>
    </section>

    <section class="panel">
      <div class="row-split">
        <div class="segmented">
          ${["ALL","SSS-1","SSS-2","SSS-3"].map(t=>`<button class="${r===t?"active":""}" data-action="set-filter" data-filter="${t}">${t}</button>`).join("")}
        </div>
        ${pe(`${e.length} shown`,"primary")}
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Tier</th>
              <th>Supply</th>
              <th>Status</th>
              <th>Registry</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(t=>`
              <tr>
                <td>
                  <div class="token-main">
                    <div class="token-icon"><span class="material-symbols-outlined">attach_money</span></div>
                    <div>
                      <strong>${C(t.name)}</strong>
                      <div class="token-symbol">${C(t.symbol)}</div>
                    </div>
                  </div>
                </td>
                <td>${pe(t.tier,"primary")}</td>
                <td>${C(t.supply)}</td>
                <td>${pe(t.status,t.statusTone)}</td>
                <td>${pe(t.registry,t.registryTone)}</td>
                <td>${Ne(`stablecoin/${t.id}/overview`,"View","secondary","north_east")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `}function J1(){let r=im(),e=x.customStablecoins.filter(t=>t.live||t.demo);return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Operations</p>
        <h1 class="headline">Mint Request Queue</h1>
        <p class="subline">Approve, reject, and execute queued issuance requests before live mint transactions are submitted.</p>
      </div>
      <div class="button-row">
        ${pe(`${r.length} queued`,"primary")}
      </div>
    </section>

    <section class="two-col">
      <article class="panel" data-operation-panel="mint-request-create">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Create Request</h3>
            <p class="panel-subtitle">Queue a mint approval before executing the on-chain mint transaction.</p>
          </div>
        </div>
        <div class="field-grid">
          <div class="field">
            <label>Stablecoin</label>
            <select data-operation-field="coinId">
              ${e.map(t=>`<option value="${C(t.id)}">${C(t.symbol)} \xB7 ${C(t.name)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>Destination owner</label>
            <input data-operation-field="destinationOwner" type="text" placeholder="Wallet public key">
          </div>
        </div>
        <div class="field-grid triple">
          <div class="field">
            <label>Amount</label>
            <input data-operation-field="amount" type="text" placeholder="25000">
          </div>
          <div class="field">
            <label>Requested by</label>
            <input data-operation-field="requestedBy" type="text" placeholder="Treasury desk">
          </div>
          <div class="field">
            <label>Reason</label>
            <input data-operation-field="reason" type="text" placeholder="Primary issuance">
          </div>
        </div>
        ${le("create-mint-request","Queue Mint Request","primary","queue")}
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Queue Summary</h3>
            <p class="panel-subtitle">Workflow stages inspired by the stitched mint queue screen.</p>
          </div>
        </div>
        <div class="stat-grid">
          <article class="stat-card"><div class="eyebrow">Pending</div><span class="stat-value">${r.filter(t=>t.status==="Pending").length}</span></article>
          <article class="stat-card"><div class="eyebrow">Approved</div><span class="stat-value">${r.filter(t=>t.status==="Approved").length}</span></article>
          <article class="stat-card"><div class="eyebrow">Executed</div><span class="stat-value">${r.filter(t=>t.status==="Complete").length}</span></article>
          <article class="stat-card"><div class="eyebrow">Rejected</div><span class="stat-value">${r.filter(t=>t.status==="Rejected").length}</span></article>
        </div>
      </article>
    </section>

    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Stablecoin</th>
              <th>Destination</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${r.length?r.map(t=>`
              <tr>
                <td>${C(t.symbol)}</td>
                <td class="mono">${C(Tr(t.destinationOwner))}</td>
                <td>${C(t.amount)}</td>
                <td>${pe(t.status,t.status==="Rejected"?"danger":t.status==="Approved"?"primary":t.status==="Complete"?"success":"warning")}</td>
                <td>${C(t.reason)}</td>
                <td>
                  <div class="button-row">
                    ${t.status==="Pending"?le("approve-mint-request","Approve","secondary","check_circle",`data-id="${C(t.id)}"`):""}
                    ${t.status==="Approved"?le("execute-mint-request","Execute","primary","arrow_forward",`data-id="${C(t.id)}"`):""}
                    ${t.status!=="Complete"&&t.status!=="Rejected"?le("reject-mint-request","Reject","danger","block",`data-id="${C(t.id)}"`):""}
                  </div>
                </td>
              </tr>
            `).join(""):`
              <tr><td colspan="6" class="muted">No mint requests have been queued from the frontend yet.</td></tr>
            `}
          </tbody>
        </table>
      </div>
    </section>
  `}function Q1(){let r=x.customStablecoins.filter(t=>t.live),e=r.flatMap(t=>(t.proofReceipts||[]).map(n=>({...n,symbol:t.symbol,coinId:t.id})));return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Operations</p>
        <h1 class="headline">Compliance Queue</h1>
        <p class="subline">Global enforcement review across blacklists, seizure actions, proof receipts, and screening tasks.</p>
      </div>
      <div class="button-row">
        ${pe(`${r.length} live assets`,"primary")}
      </div>
    </section>

    <section class="stat-grid">
      <article class="stat-card"><div class="eyebrow">Blacklisted</div><span class="stat-value">${r.reduce((t,n)=>t+Ia(n.blacklisted),0)}</span></article>
      <article class="stat-card"><div class="eyebrow">Frozen Accounts</div><span class="stat-value">${r.reduce((t,n)=>t+Ia(n.frozenAccounts),0)}</span></article>
      <article class="stat-card"><div class="eyebrow">Proof Receipts</div><span class="stat-value">${e.length}</span></article>
      <article class="stat-card"><div class="eyebrow">Seizure Events</div><span class="stat-value">${Hs().filter(t=>t.title.includes("Seized")).length}</span></article>
    </section>

    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Recent Blacklist Actions</h3>
            <p class="panel-subtitle">Tracked from live stablecoin management actions in this frontend session.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Event</th><th>Detail</th><th>When</th></tr></thead>
            <tbody>
              ${Hs().filter(t=>t.title.includes("Blacklisted")||t.title.includes("Removed blacklist")).slice(0,8).map(t=>`
                <tr><td>${C(t.title)}</td><td>${C(t.detail)}</td><td>${C(t.when)}</td></tr>
              `).join("")||'<tr><td colspan="3" class="muted">No blacklist actions recorded yet.</td></tr>'}
            </tbody>
          </table>
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Proof Receipt Activity</h3>
            <p class="panel-subtitle">SSS-3 proof state and compliance receipt submissions.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Stablecoin</th><th>Subject</th><th>Status</th><th>Submitted</th></tr></thead>
            <tbody>
              ${e.map(t=>`
                <tr>
                  <td>${C(t.symbol)}</td>
                  <td class="mono">${C(Tr(t.subject))}</td>
                  <td>${pe(t.status||"Valid",t.status==="Revoked"?"danger":"success")}</td>
                  <td>${C(t.submittedAt||"Just now")}</td>
                </tr>
              `).join("")||'<tr><td colspan="4" class="muted">No proof receipts recorded yet.</td></tr>'}
            </tbody>
          </table>
        </div>
      </article>
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Enforcement Shortcuts</h3>
          <p class="panel-subtitle">Jump directly into the asset-specific compliance views.</p>
        </div>
      </div>
      <div class="three-col">
        ${r.map(t=>`
          <article class="action-card">
            <div class="icon-chip"><span class="material-symbols-outlined">policy</span></div>
            <h3>${C(t.symbol)}</h3>
            <p>${C(t.description)}</p>
            ${Ne(`stablecoin/${t.id}/compliance`,"Open Compliance","secondary","north_east")}
          </article>
        `).join("")||'<div class="empty-state muted">Deploy or import a live stablecoin to open compliance controls.</div>'}
      </div>
    </section>
  `}function eR(){let r=mu();return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Integrations</p>
        <h1 class="headline">Webhook Subscriptions</h1>
        <p class="subline">Configure downstream notifications for mints, registry updates, blacklists, and compliance events.</p>
      </div>
      <div class="button-row">
        ${pe(`${r.length} subscriptions`,"primary")}
      </div>
    </section>

    <section class="two-col">
      <article class="panel">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>Event</th>
                <th>Status</th>
                <th>Retries</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(e=>`
                <tr>
                  <td class="mono">${C(e.endpoint)}</td>
                  <td>${C(e.eventType)}</td>
                  <td>${pe(e.status,e.tone)}</td>
                  <td>${C(e.retryPolicy)}</td>
                  <td>
                    <div class="button-row">
                      ${le("test-webhook","Test","secondary","send",`data-id="${C(e.id)}"`)}
                      ${le("remove-webhook","Remove","danger","delete",`data-id="${C(e.id)}"`)}
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </article>

      <article class="panel" data-operation-panel="add-webhook">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Add Webhook</h3>
            <p class="panel-subtitle">Frontend-managed integration settings modeled after the stitched webhook screen.</p>
          </div>
        </div>
        <div class="field">
          <label>Webhook URL</label>
          <input data-operation-field="endpoint" type="url" placeholder="https://your-api.com/webhooks">
        </div>
        <div class="field-grid">
          <div class="field">
            <label>Event type</label>
            <select data-operation-field="eventType">
              ${["MINT_COMPLETED","BURN_COMPLETED","WALLET_BLACKLISTED","ROLE_UPDATED","REGISTRY_UPDATED","PROOF_RECEIPT_SUBMITTED"].map(e=>`<option value="${e}">${e}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>Secret label</label>
            <input data-operation-field="secretLabel" type="text" placeholder="ops-webhook-01">
          </div>
        </div>
        <div class="field">
          <label>Retry policy</label>
          <input data-operation-field="retryPolicy" type="text" placeholder="3 retries with backoff">
        </div>
        ${le("add-webhook","Create Webhook","primary","add_link")}
      </article>
    </section>
  `}function tR(){let r=[["mint-service","Healthy","success","19 ms p95","Token issuance builders and submission path are responsive."],["registry-service","Healthy","success","31 ms p95","Registry metadata path and release tools are operational."],["compliance-service","Degraded","warning","128 ms p95","Proof and screening flows are seeing elevated latency."],["webhook-service","Healthy","success","11 ms p95","Webhook fanout and retry scheduler are green."]];return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Systems</p>
        <h1 class="headline">Service Health</h1>
        <p class="subline">Frontend operational overview for the supporting services represented in the stitch dashboard set.</p>
      </div>
      <div class="button-row">
        ${le("refresh-service-health","Refresh Health","secondary","autorenew")}
      </div>
    </section>

    <section class="four-col">
      ${r.map(([e,t,n,i,s])=>`
        <article class="panel">
          <div class="row-split">
            <div>
              <p class="eyebrow">Service Identifier</p>
              <h3 class="panel-title">${C(e)}</h3>
            </div>
            ${pe(t,n)}
          </div>
          <p>${C(s)}</p>
          <div class="data-list">
            <div class="data-row"><span>Latency</span><strong>${C(i)}</strong></div>
            <div class="data-row"><span>Last checked</span><strong>Just now</strong></div>
          </div>
        </article>
      `).join("")}
    </section>
  `}function rR(){let r=pu();return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Registry</p>
        <h1 class="headline">Release Registry</h1>
        <p class="subline">Published SSS standard versions, schema hashes, and deprecation records.</p>
      </div>
      <div class="button-row">
        ${Ne("publish-release","Publish Release","primary","arrow_forward")}
      </div>
    </section>

    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Version</th>
              <th>Preset</th>
              <th>Schema Hash</th>
              <th>Status</th>
              <th>Replacement</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${r.map(e=>`
              <tr>
                <td>${C(e.standardVersion)}</td>
                <td>${pe(e.preset,"primary")}</td>
                <td class="mono">${C(e.schemaHash)}</td>
                <td>${pe(e.status,e.tone)}</td>
                <td>${C(e.replacementVersion||"n/a")}</td>
                <td>
                  ${e.deprecated?'<span class="muted">Archived</span>':le("deprecate-release","Mark Deprecated","danger","warning",`data-id="${C(e.id)}"`)}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `}function nR(){return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Registry</p>
        <h1 class="headline">Publish Release</h1>
        <p class="subline">Create a new on-chain SSS release record from the frontend.</p>
      </div>
    </section>

    <section class="two-col">
      <article class="panel" data-operation-panel="publish-release">
        <div class="field-grid">
          <div class="field">
            <label>Standard version</label>
            <input data-operation-field="standardVersion" type="text" placeholder="v1.1.0">
          </div>
          <div class="field">
            <label>Preset</label>
            <select data-operation-field="preset">
              <option value="SSS-1">SSS-1</option>
              <option value="SSS-2">SSS-2</option>
              <option value="SSS-3">SSS-3</option>
            </select>
          </div>
        </div>
        <div class="field-grid">
          <div class="field">
            <label>Schema hash</label>
            <input data-operation-field="schemaHash" type="text" placeholder="schema-sss2-b4a1fe">
          </div>
          <div class="field">
            <label>Replacement version</label>
            <input data-operation-field="replacementVersion" type="text" placeholder="Optional">
          </div>
        </div>
        <div class="field">
          <label>Notes URI</label>
          <input data-operation-field="notesUri" type="text" placeholder="https://docs.sss.dev/releases/v1.1.0">
        </div>
        <div class="field">
          <label>Deprecated on publish</label>
          <select data-operation-field="deprecated">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        ${le("publish-release-live","Publish Release","primary","publish")}
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Release Notes</h3>
            <p class="panel-subtitle">Use the registry program configured in Settings. This action is suitable for protocol administration wallets only.</p>
          </div>
        </div>
        <div class="data-list">
          <div class="data-row"><span>Registry program</span><strong class="mono">${C(x.settings.registryProgram||"Missing")}</strong></div>
          <div class="data-row"><span>Connected wallet</span><strong class="mono">${C(Ji()||"Not connected")}</strong></div>
          <div class="data-row"><span>Existing releases</span><strong>${pu().length}</strong></div>
        </div>
      </article>
    </section>
  `}function iR(r){let[,e,t="overview"]=r.split("/"),n=["overview","operations","roles","compliance","registry","activity","config","integrations"],i=Dn(e);return`
    <section class="page-header">
      <div>
        <div class="badge-cluster">
          ${pe(i.symbol,"primary")}
          ${pe(i.tier,"primary")}
          ${pe(i.status,i.statusTone)}
        </div>
        <h1 class="headline">${C(i.name)}</h1>
        <p class="subline">${C(i.description)}</p>
      </div>
      <div class="button-row">
        ${Ne(`stablecoin/${i.id}/operations`,"Operations","primary","tune")}
        ${Ne("registry","Registry Record","secondary","north_east")}
      </div>
    </section>

    <section class="tab-row">
      ${n.map(s=>`
        <button class="${t===s?"active":""}" data-route="stablecoin/${i.id}/${s}">${C(s.charAt(0).toUpperCase()+s.slice(1))}</button>
      `).join("")}
    </section>

    ${t==="operations"?fR(i):t==="roles"?oR(i):t==="compliance"?aR(i):t==="registry"?cR(i):t==="activity"?lR(i):t==="config"?uR(i):t==="integrations"?dR(i):sR(i)}
  `}function sR(r){return`
    <section class="stat-grid">
      ${[["Total minted",r.totalMinted,r.symbol],["Total burned",r.totalBurned,r.symbol],["Current supply",r.currentSupply,r.symbol],["Frozen accounts",r.frozenAccounts,"Action surface"]].map(([e,t,n])=>`
        <article class="stat-card">
          <div class="eyebrow">${C(e)}</div>
          <span class="stat-value">${C(t)}</span>
          <div class="stat-foot">${C(n)}</div>
        </article>
      `).join("")}
    </section>

    <section class="metadata-grid">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Token Overview</h3>
            <p class="panel-subtitle">Operational summary from the overview prototype.</p>
          </div>
        </div>
        <div class="data-list">
          ${[["Mint address",r.mint],["Config address",r.configAddress||"n/a"],["Config hash",r.configHash],["Jurisdiction",r.jurisdiction],["Registry status",r.registry],["Init signature",r.signature||"n/a"]].map(([e,t])=>`
            <div class="data-row">
              <span>${C(e)}</span>
              <strong class="mono">${C(t)}</strong>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Feature Flags</h3>
            <p class="panel-subtitle">Enabled capabilities inferred from the stitched design set.</p>
          </div>
        </div>
        <div class="data-list">
          ${r.featureFlags.map(e=>`
            <div class="inline-main">
              <span class="material-symbols-outlined">check_circle</span>
              <span>${C(e)}</span>
            </div>
          `).join("")}
        </div>
      </article>
    </section>

    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Authorities</h3>
            <p class="panel-subtitle">Key role assignments for minting, freezing, and compliance.</p>
          </div>
        </div>
        <div class="data-list">
          ${r.authorities.map(([e,t])=>`
            <div class="data-row">
              <span>${C(e)}</span>
              <strong class="mono">${C(t)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Registry Information</h3>
            <p class="panel-subtitle">Public metadata and disclosure surfaces.</p>
          </div>
        </div>
        <div class="data-list">
          ${r.registryInfo.map(([e,t])=>`
            <div class="data-row">
              <span>${C(e)}</span>
              <strong>${C(t)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `}function oR(r){if(!Qi(r))return`
      <section class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Roles Management</h3>
            <p class="panel-subtitle">This preview asset shows the stitched roles layout, but only live imported or deployed stablecoins can submit role updates.</p>
          </div>
        </div>
        <div class="data-list">
          ${r.authorities.map(([t,n])=>`<div class="data-row"><span>${C(t)}</span><strong class="mono">${C(n)}</strong></div>`).join("")}
        </div>
      </section>
    `;let e=r.roleAssignments||[];return`
    <section class="two-col">
      <article class="panel" data-operation-panel="role-live">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Grant Role</h3>
            <p class="panel-subtitle">Role assignment workflow based on the stitched roles management page.</p>
          </div>
          ${pe(`${e.length} tracked`,"primary")}
        </div>
        <div class="field">
          <label>Holder</label>
          <input data-operation-field="holder" type="text" placeholder="Operator wallet public key">
        </div>
        <div class="field-grid">
          <div class="field">
            <label>Role</label>
            <select data-operation-field="role">
              ${["minter","burner","blacklister","pauser","seizer"].map(t=>`<option value="${t}">${t}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>State</label>
            <select data-operation-field="active">
              <option value="true">Grant</option>
              <option value="false">Revoke</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label>Mint Quota</label>
          <input data-operation-field="mintQuota" type="text" placeholder="Optional for minter role">
        </div>
        ${le("update-role-live","Grant Role","primary","admin_panel_settings",`data-id="${C(r.id)}"`)}
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Authority Summary</h3>
            <p class="panel-subtitle">Static and delegated operators visible to the frontend.</p>
          </div>
        </div>
        <div class="data-list">
          ${r.authorities.map(([t,n])=>`
            <div class="data-row">
              <span>${C(t)}</span>
              <strong class="mono">${C(n)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Role Assignment Table</h3>
          <p class="panel-subtitle">Session-tracked grants and revocations.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Holder</th><th>Role</th><th>Status</th><th>Quota</th><th>Action</th></tr></thead>
          <tbody>
            ${e.length?e.map(t=>`
              <tr>
                <td class="mono">${C(Tr(t.holder))}</td>
                <td>${C(t.role)}</td>
                <td>${pe(t.active?"Granted":"Revoked",t.active?"success":"warning")}</td>
                <td>${C(t.mintQuota||"n/a")}</td>
                <td>${t.active?le("revoke-role-entry","Revoke","danger","block",`data-id="${C(r.id)}" data-holder="${C(t.holder)}" data-role="${C(t.role)}"`):'<span class="muted">Inactive</span>'}</td>
              </tr>
            `).join(""):`
              <tr><td colspan="5" class="muted">No delegated role changes have been recorded in this frontend session.</td></tr>
            `}
          </tbody>
        </table>
      </div>
    </section>
  `}function aR(r){if(!Qi(r))return`
      <section class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Compliance Management</h3>
            <p class="panel-subtitle">Preview mode for the stitched compliance surface. Live blacklist, seizure, root, and proof actions require an imported or deployed on-chain stablecoin.</p>
          </div>
        </div>
        <div class="stat-grid">
          <article class="stat-card"><div class="eyebrow">Blacklisted</div><span class="stat-value">${C(r.blacklisted)}</span></article>
          <article class="stat-card"><div class="eyebrow">Frozen Accounts</div><span class="stat-value">${C(r.frozenAccounts)}</span></article>
          <article class="stat-card"><div class="eyebrow">Status</div><span class="stat-value">${C(r.status)}</span></article>
          <article class="stat-card"><div class="eyebrow">Preset</div><span class="stat-value">${C(r.tier)}</span></article>
        </div>
      </section>
    `;let e=r.proofReceipts||[];return`
    <section class="stat-grid">
      <article class="stat-card"><div class="eyebrow">Blacklist</div><span class="stat-value">${C(r.blacklisted)}</span></article>
      <article class="stat-card"><div class="eyebrow">Frozen Accounts</div><span class="stat-value">${C(r.frozenAccounts)}</span></article>
      <article class="stat-card"><div class="eyebrow">Proof Receipts</div><span class="stat-value">${e.length}</span></article>
      <article class="stat-card"><div class="eyebrow">Compliance Root</div><span class="stat-value mono">${C(Tr(r.complianceRoot||"Unset"))}</span></article>
    </section>

    <section class="two-col">
      <article class="panel" data-operation-panel="blacklist-live">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Blacklist Manager</h3>
            <p class="panel-subtitle">Address restriction and removal controls.</p>
          </div>
        </div>
        <div class="field">
          <label>Wallet address</label>
          <input data-operation-field="address" type="text" placeholder="Wallet public key">
        </div>
        <div class="field">
          <label>Reason</label>
          <input data-operation-field="reason" type="text" placeholder="Sanctions / internal review">
        </div>
        <div class="button-row">
          ${le("blacklist-add-live","Add To Blacklist","danger","block",`data-id="${C(r.id)}"`)}
          ${le("blacklist-remove-live","Revoke","ghost","check_circle",`data-id="${C(r.id)}"`)}
        </div>
      </article>

      <article class="panel" data-operation-panel="seize-live">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Seizure Manager</h3>
            <p class="panel-subtitle">Move funds from a flagged account into a recovery account.</p>
          </div>
        </div>
        <div class="field">
          <label>Source token account</label>
          <input data-operation-field="fromAccount" type="text" placeholder="Flagged token account">
        </div>
        <div class="field">
          <label>Destination token account</label>
          <input data-operation-field="toAccount" type="text" placeholder="Recovery account">
        </div>
        ${le("seize-live","Confirm Seizure","danger","warning",`data-id="${C(r.id)}"`)}
      </article>
    </section>

    <section class="three-col">
      <article class="panel" data-operation-panel="screen-address">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Sanctions Screening</h3>
            <p class="panel-subtitle">Frontend-only screening note capture modeled after the stitch screen.</p>
          </div>
        </div>
        <div class="field">
          <label>Screen address</label>
          <input data-operation-field="address" type="text" placeholder="Wallet public key">
        </div>
        ${le("screen-address","Screen","secondary","travel_explore",`data-id="${C(r.id)}"`)}
      </article>

      <article class="panel" data-operation-panel="compliance-root-live">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Compliance Root Manager</h3>
            <p class="panel-subtitle">SSS-3 root updates for proof-gated transfers.</p>
          </div>
        </div>
        <div class="field">
          <label>Current / next root</label>
          <input data-operation-field="root" type="text" placeholder="Merkle root string" value="${C(r.complianceRoot||"")}">
        </div>
        ${le("update-compliance-root-live","Update Root","secondary","sync",`data-id="${C(r.id)}"`)}
      </article>

      <article class="panel" data-operation-panel="proof-receipt-live">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Proof Receipts</h3>
            <p class="panel-subtitle">Submit or revoke proof receipts for a subject wallet.</p>
          </div>
        </div>
        <div class="field">
          <label>Subject</label>
          <input data-operation-field="subject" type="text" placeholder="Wallet public key">
        </div>
        <div class="field">
          <label>Proof commitment</label>
          <input data-operation-field="proofCommitment" type="text" placeholder="64 hex chars">
        </div>
        <div class="field">
          <label>Compliance root</label>
          <input data-operation-field="complianceRoot" type="text" placeholder="Root snapshot used by proof">
        </div>
        <div class="button-row">
          ${le("submit-proof-receipt-live","Submit Proof","primary","verified",`data-id="${C(r.id)}"`)}
          ${le("revoke-proof-receipt-live","Revoke Proof","ghost","block",`data-id="${C(r.id)}"`)}
        </div>
      </article>
    </section>

    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Subject</th><th>Status</th><th>Root</th><th>Submitted</th></tr></thead>
          <tbody>
            ${e.length?e.map(t=>`
              <tr>
                <td class="mono">${C(Tr(t.subject))}</td>
                <td>${pe(t.status||"Valid",t.status==="Revoked"?"danger":"success")}</td>
                <td class="mono">${C(Tr(t.complianceRoot||""))}</td>
                <td>${C(t.submittedAt||"Just now")}</td>
              </tr>
            `).join(""):'<tr><td colspan="4" class="muted">No proof receipts recorded yet.</td></tr>'}
          </tbody>
        </table>
      </div>
    </section>
  `}function cR(r){let e=Qi(r),t={preset:r.tier,standardVersion:"v1.0.0",configHash:r.configHash,authority:r.authorities?.[0]?.[1]||Ji()||"Unknown",mint:r.mint,homepage:r.registryInfo?.find(([n])=>n==="Website")?.[1]||"",jurisdiction:r.jurisdiction||""};return`
    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Registry Status</h3>
            <p class="panel-subtitle">Registration summary based on the stitch registry management page.</p>
          </div>
          ${pe(r.registry,r.registryTone)}
        </div>
        <div class="data-list">
          ${[["Preset",r.tier],["Config hash",r.configHash],["Jurisdiction",r.jurisdiction],["Website",r.registryInfo?.find(([n])=>n==="Website")?.[1]||"Missing"],["Compliance docs",r.registryInfo?.find(([n])=>n==="Compliance docs")?.[1]||"Missing"]].map(([n,i])=>`<div class="data-row"><span>${C(n)}</span><strong class="${String(i).includes("http")||String(i).length>20?"mono":""}">${C(i)}</strong></div>`).join("")}
        </div>
        ${e&&r.registry!=="Registered"?le("register-live-coin","Register Stablecoin","primary","menu_book",`data-id="${C(r.id)}"`):`<p class="muted">${r.registry==="Registered"?"This stablecoin is already registered from the frontend perspective.":"Import or deploy this stablecoin live to submit a registry transaction."}</p>`}
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Registry Payload</h3>
            <p class="panel-subtitle">Payload preview for the configured mint.</p>
          </div>
          ${le("preview-registry-payload","Preview JSON","ghost","data_object",`data-id="${C(r.id)}"`)}
        </div>
        <pre class="code-block mono">${C(JSON.stringify(t,null,2))}</pre>
      </article>
    </section>
  `}function lR(r){let e=tm(r);return`
    <section class="panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Stablecoin Activity</h3>
          <p class="panel-subtitle">Frontend-captured events scoped to this mint.</p>
        </div>
      </div>
      <div class="timeline">
        ${e.length?e.map(t=>`
          <div class="timeline-item">
            <span class="timeline-marker ${t.type}"></span>
            <div>
              <h4>${C(t.title)}</h4>
              <p>${C(t.detail)}</p>
            </div>
            <div class="timeline-time">${C(t.when)}</div>
          </div>
        `).join(""):'<div class="empty-state muted">No activity has been recorded for this stablecoin yet.</div>'}
      </div>
    </section>
  `}function uR(r){let e=Qi(r),t={registry_version:1,mint:r.mint,config:r.configAddress||"",authority:r.authorities?.[0]?.[1]||"",compliance_flags:r.featureFlags||[]},n={name:r.name,symbol:r.symbol,tier:r.tier,configHash:r.configHash,programId:r.programId||"",decimals:Vt(r),currentSupply:r.currentSupply,complianceRoot:r.complianceRoot||null};return`
    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Summarized Config</h3>
            <p class="panel-subtitle">Readable configuration summary.</p>
          </div>
          ${e?le("refresh-live-coin","Refresh Config","ghost","autorenew",`data-id="${C(r.id)}"`):""}
        </div>
        <div class="data-list">
          ${[["Mint",r.mint],["Program",r.programId||"n/a"],["Config PDA",r.configAddress||"n/a"],["Decimals",String(Vt(r))],["Config hash",r.configHash],["Current supply",r.currentSupply]].map(([i,s])=>`<div class="data-row"><span>${C(i)}</span><strong class="mono">${C(s)}</strong></div>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Config Hash Details</h3>
            <p class="panel-subtitle">This hash is the registry-visible fingerprint of the deployment configuration.</p>
          </div>
        </div>
        <p>The frontend updates this view from the SDK config and local registry metadata, mirroring the stitch configuration screen.</p>
      </article>
    </section>

    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Raw JSON Config</h3>
            <p class="panel-subtitle">Client-side serialization for export and review.</p>
          </div>
          ${le("preview-config-json","Open JSON","ghost","data_object",`data-id="${C(r.id)}"`)}
        </div>
        <pre class="code-block mono">${C(JSON.stringify(n,null,2))}</pre>
      </article>
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Raw Registry Payload</h3>
            <p class="panel-subtitle">Companion registry data associated with the mint.</p>
          </div>
        </div>
        <pre class="code-block mono">${C(JSON.stringify(t,null,2))}</pre>
      </article>
    </section>
  `}function dR(r){let e=Qi(r),t=mu().filter(n=>!n.coinId||n.coinId===r.id);return`
    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Integration Surface</h3>
            <p class="panel-subtitle">Per-stablecoin webhooks and delivery wiring.</p>
          </div>
          ${Ne("webhooks","Open Global Webhooks","secondary","north_east")}
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Endpoint</th><th>Event</th><th>Status</th></tr></thead>
            <tbody>
              ${t.map(n=>`<tr><td class="mono">${C(n.endpoint)}</td><td>${C(n.eventType)}</td><td>${pe(n.status,n.tone)}</td></tr>`).join("")||'<tr><td colspan="3" class="muted">No integrations have been scoped to this stablecoin yet.</td></tr>'}
            </tbody>
          </table>
        </div>
      </article>

      <article class="panel" data-operation-panel="add-webhook">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Attach Webhook</h3>
            <p class="panel-subtitle">Store a webhook subscription against this stablecoin in the frontend state.</p>
          </div>
        </div>
        <div class="field">
          <label>Webhook URL</label>
          <input data-operation-field="endpoint" type="url" placeholder="https://your-api.com/hooks/sss">
        </div>
        <div class="field-grid">
          <div class="field">
            <label>Event type</label>
            <select data-operation-field="eventType">
              ${["MINT_COMPLETED","BLACKLIST_UPDATED","PROOF_RECEIPT_SUBMITTED","ROLE_UPDATED"].map(n=>`<option value="${n}">${n}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>Secret label</label>
            <input data-operation-field="secretLabel" type="text" placeholder="stablecoin-hook-01">
          </div>
        </div>
        <div class="field">
          <label>Retry policy</label>
          <input data-operation-field="retryPolicy" type="text" placeholder="3 retries">
        </div>
        ${e?le("add-webhook","Attach Webhook","primary","add_link",`data-id="${C(r.id)}"`):'<p class="muted">Webhook binding is enabled for live imported or deployed assets.</p>'}
      </article>
    </section>
  `}function fR(r){let e=Qi(r),t=tm(r);return e?`
    <section class="three-col">
      <article class="action-card" data-operation-panel="mint-live">
        <div class="icon-chip"><span class="material-symbols-outlined">add</span></div>
        <h3>Mint Tokens</h3>
        <p>Mint to a wallet owner. The frontend will derive and create the Token-2022 ATA if it does not exist yet.</p>
        <div class="field">
          <label>Destination owner</label>
          <input data-operation-field="destinationOwner" type="text" placeholder="Wallet public key">
        </div>
        <div class="field">
          <label>Amount</label>
          <input data-operation-field="amount" type="text" placeholder="Amount (${Vt(r)} decimals)">
        </div>
        ${le("mint-live","Mint","primary","arrow_forward",`data-id="${C(r.id)}"`)}
      </article>
      <article class="action-card" data-operation-panel="burn-live">
        <div class="icon-chip"><span class="material-symbols-outlined">remove</span></div>
        <h3>Burn Tokens</h3>
        <p>Burn from a specific Token-2022 account controlled by an authorized burner.</p>
        <div class="field">
          <label>Source token account</label>
          <input data-operation-field="sourceAccount" type="text" placeholder="Token account public key">
        </div>
        <div class="field">
          <label>Amount</label>
          <input data-operation-field="amount" type="text" placeholder="Amount (${Vt(r)} decimals)">
        </div>
        ${le("burn-live","Burn","secondary","arrow_forward",`data-id="${C(r.id)}"`)}
      </article>
      <article class="action-card" data-operation-panel="freeze-live">
        <div class="icon-chip"><span class="material-symbols-outlined">ac_unit</span></div>
        <h3>Freeze / Thaw</h3>
        <p>Apply or lift transfer restrictions on a Token-2022 account under the protocol's pause/freeze authority.</p>
        <div class="field">
          <label>Token account</label>
          <input data-operation-field="tokenAccount" type="text" placeholder="Token account public key">
        </div>
        <div class="button-row">
          ${le("freeze-live","Freeze","danger","warning",`data-id="${C(r.id)}"`)}
          ${le("thaw-live","Thaw","ghost","autorenew",`data-id="${C(r.id)}"`)}
        </div>
      </article>
    </section>

    <section class="three-col">
      <article class="action-card" data-operation-panel="blacklist-live">
        <div class="icon-chip"><span class="material-symbols-outlined">gpp_bad</span></div>
        <h3>Blacklist Control</h3>
        <p>Restrict or restore a wallet owner for transfer-hook enforced SSS-2 and SSS-3 flows.</p>
        <div class="field">
          <label>Wallet address</label>
          <input data-operation-field="address" type="text" placeholder="Wallet public key">
        </div>
        <div class="field">
          <label>Reason</label>
          <input data-operation-field="reason" type="text" placeholder="Sanctions / monitoring / review">
        </div>
        <div class="button-row">
          ${le("blacklist-add-live","Blacklist","danger","block",`data-id="${C(r.id)}"`)}
          ${le("blacklist-remove-live","Remove","ghost","check_circle",`data-id="${C(r.id)}"`)}
        </div>
      </article>

      <article class="action-card" data-operation-panel="seize-live">
        <div class="icon-chip"><span class="material-symbols-outlined">shield_locked</span></div>
        <h3>Seize Balance</h3>
        <p>Move all funds from a flagged token account into a designated treasury or recovery account.</p>
        <div class="field">
          <label>Source token account</label>
          <input data-operation-field="fromAccount" type="text" placeholder="Flagged token account">
        </div>
        <div class="field">
          <label>Destination token account</label>
          <input data-operation-field="toAccount" type="text" placeholder="Treasury or recovery token account">
        </div>
        ${le("seize-live","Seize","danger","warning",`data-id="${C(r.id)}"`)}
      </article>

      <article class="action-card" data-operation-panel="role-live">
        <div class="icon-chip"><span class="material-symbols-outlined">admin_panel_settings</span></div>
        <h3>Role Management</h3>
        <p>Grant or revoke delegated operator roles directly from the browser wallet.</p>
        <div class="field">
          <label>Holder</label>
          <input data-operation-field="holder" type="text" placeholder="Operator wallet public key">
        </div>
        <div class="field-grid">
          <div class="field">
            <label>Role</label>
            <select data-operation-field="role">
              ${["minter","burner","blacklister","pauser","seizer"].map(n=>`<option value="${n}">${n}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label>State</label>
            <select data-operation-field="active">
              <option value="true">Grant</option>
              <option value="false">Revoke</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label>Minter quota</label>
          <input data-operation-field="mintQuota" type="text" placeholder="Optional amount (${Vt(r)} decimals)">
        </div>
        ${le("update-role-live","Submit Role Change","secondary","arrow_forward",`data-id="${C(r.id)}"`)}
      </article>
    </section>

    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Protocol State</h3>
            <p class="panel-subtitle">Pause and release behavior built from the operations prototype.</p>
          </div>
          ${pe(r.status,r.statusTone)}
        </div>
        <div class="button-row">
          ${le("toggle-live-pause",r.status==="Paused"?"Unpause Protocol":"Pause Protocol","secondary","sync",`data-id="${C(r.id)}"`)}
          ${le("refresh-live-coin","Refresh Status","ghost","autorenew",`data-id="${C(r.id)}"`)}
          ${r.registry!=="Registered"?le("register-live-coin","Register Stablecoin","primary","menu_book",`data-id="${C(r.id)}"`):""}
        </div>
      </article>

      <article class="panel" data-operation-panel="transfer-authority-live">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Transfer Authority</h3>
            <p class="panel-subtitle">Prepare new admin handoff under controlled review.</p>
          </div>
          ${pe("Warning: master authority","warning")}
        </div>
        <div class="field">
          <label>New pending authority</label>
          <input data-operation-field="nextAuthority" type="text" placeholder="Pending authority public key">
        </div>
        ${le("transfer-authority-live","Submit transfer","primary","arrow_forward",`data-id="${C(r.id)}"`)}
      </article>
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Operation Log</h3>
          <p class="panel-subtitle">Recent commands affecting this stablecoin.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Detail</th>
              <th>Tone</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>
            ${t.length?t.map(n=>`
              <tr>
                <td>${C(n.title)}</td>
                <td>${C(n.detail)}</td>
                <td>${pe(n.type,n.type==="danger"?"danger":n.type==="warning"?"warning":"success")}</td>
                <td>${C(n.when)}</td>
              </tr>
            `).join(""):`
              <tr>
                <td colspan="4" class="muted">No operation history has been recorded for this stablecoin in this frontend session yet.</td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </section>
  `:`
      <section class="action-grid">
        <article class="action-card">
          <div class="icon-chip"><span class="material-symbols-outlined">add</span></div>
          <h3>Mint Tokens</h3>
          <p>Issue new ${C(r.symbol)} using the configured mint authority and quota limits.</p>
          ${le("fake-op","Mint 50,000","primary","arrow_forward",`data-op="Minted 50,000 ${C(r.symbol)}"`)}
        </article>
        <article class="action-card">
          <div class="icon-chip"><span class="material-symbols-outlined">remove</span></div>
          <h3>Burn Tokens</h3>
          <p>Reduce supply from treasury-controlled accounts or authorized circulation sinks.</p>
          ${le("fake-op","Burn 5,000","secondary","arrow_forward",`data-op="Burned 5,000 ${C(r.symbol)}"`)}
        </article>
        <article class="action-card">
          <div class="icon-chip"><span class="material-symbols-outlined">ac_unit</span></div>
          <h3>Freeze Account</h3>
          <p>Apply compliance intervention to a wallet flagged by monitoring or sanctions logic.</p>
          ${le("fake-op","Queue Freeze","danger","warning",`data-op="Freeze request queued for ${C(r.symbol)}"`)}
        </article>
      </section>

      <section class="two-col">
        <article class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">Protocol State</h3>
              <p class="panel-subtitle">Pause and release behavior built from the operations prototype.</p>
            </div>
            ${pe(r.status,r.statusTone)}
          </div>
          <div class="button-row">
            ${le("fake-op",r.status==="Paused"?"Unpause Protocol":"Pause Protocol","secondary","sync",`data-op="${r.status==="Paused"?"Protocol unpaused":"Protocol paused"}"`)}
            ${le("fake-op","Refresh Status","ghost","autorenew",'data-op="Protocol status refreshed"')}
          </div>
        </article>

        <article class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">Transfer Authority</h3>
              <p class="panel-subtitle">Prepare new admin handoff under controlled review.</p>
            </div>
            ${pe("Warning: master authority","warning")}
          </div>
          <div class="field">
            <label>New pending authority</label>
            <input type="text" value="8D4s...Qa21" readonly>
          </div>
          ${le("fake-op","Submit transfer","primary","arrow_forward",'data-op="Authority transfer submitted"')}
        </article>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Operation Log</h3>
            <p class="panel-subtitle">Recent commands affecting this stablecoin.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Signer</th>
                <th>Status</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              ${[[`Mint 50,000 ${r.symbol}`,"4fP2...nQd8","Success","2 mins ago"],["Freeze account 91oP...9aWd","A8d2...LmE4","Pending","42 mins ago"],["Registry status refresh","7xKz...f9Qa","Success","Today 08:21"]].map(([n,i,s,o])=>`
                <tr>
                  <td>${C(n)}</td>
                  <td class="mono">${C(i)}</td>
                  <td>${pe(s,s==="Pending"?"warning":"success")}</td>
                  <td>${C(o)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    `}function hR(){let r=W1();return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Registry</p>
        <h1 class="headline">Registry Explorer</h1>
        <p class="subline">Public discovery records, issuer disclosures, and deployment release status.</p>
      </div>
      <div class="button-row">
        ${Ne("create/5","Prepare Registry Payload","primary","arrow_forward")}
      </div>
    </section>

    <section class="stat-grid">
      ${[["Entries",r.length,"Known stablecoins"],["Published",r.filter(e=>e.status==="Published").length,"Live records"],["Deprecated",r.filter(e=>e.status==="Deprecated").length,"Legacy deployments"],["Jurisdictions",new Set(r.map(e=>e.jurisdiction)).size,"Coverage"]].map(([e,t,n])=>`
        <article class="stat-card">
          <div class="eyebrow">${C(e)}</div>
          <span class="stat-value">${C(t)}</span>
          <div class="stat-foot">${C(n)}</div>
        </article>
      `).join("")}
    </section>

    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Tier</th>
              <th>Issuer</th>
              <th>Status</th>
              <th>Jurisdiction</th>
            </tr>
          </thead>
          <tbody>
            ${r.map(e=>`
              <tr>
                <td>
                  <div class="token-main">
                    <div class="token-icon"><span class="material-symbols-outlined">token</span></div>
                    <div>
                      <strong>${C(e.name)}</strong>
                      <div class="token-symbol">${C(e.symbol)}</div>
                    </div>
                  </div>
                </td>
                <td>${pe(e.tier,"primary")}</td>
                <td>${C(e.issuer)}</td>
                <td>${pe(e.status,e.tone)}</td>
                <td>${C(e.jurisdiction)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `}function pR(){return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Audit</p>
        <h1 class="headline">Activity Log</h1>
        <p class="subline">End-to-end event feed for token operations, registry publishing, and compliance interventions.</p>
      </div>
    </section>

    <section class="two-col">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Timeline</h3>
            <p class="panel-subtitle">Chronological system events.</p>
          </div>
        </div>
        <div class="timeline">
          ${Hs().map(e=>`
            <div class="timeline-item">
              <span class="timeline-marker ${e.type}"></span>
              <div>
                <h4>${C(e.title)}</h4>
                <p>${C(e.detail)}</p>
              </div>
              <div class="timeline-time">${C(e.when)}</div>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Audit Summary</h3>
            <p class="panel-subtitle">Operational signals surfaced from the activity prototype.</p>
          </div>
        </div>
        <div class="data-list">
          ${[["Mint events today","7"],["Freeze requests","2 open"],["Registry promotions","1 release"],["Authority changes","0 pending"]].map(([e,t])=>`
            <div class="data-row">
              <span>${C(e)}</span>
              <strong>${C(t)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `}function mR(){return op({button:Ne,pill:pe,launchRoute:ka,state:x,escapeHtml:C})}function gR(){return`
    <section class="page-header">
      <div>
        <p class="eyebrow">Environment</p>
        <h1 class="headline">Settings</h1>
        <p class="subline">RPC, program IDs, issuer metadata, and display preferences stored locally for the frontend.</p>
      </div>
    </section>

    <section class="settings-grid">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">RPC Configuration</h3>
            <p class="panel-subtitle">Cluster endpoint and program IDs used by the live SDK flows.</p>
          </div>
        </div>
        <div class="field">
          <label>RPC URL</label>
          <input data-scope="settings" data-field="rpcUrl" value="${C(x.settings.rpcUrl)}">
        </div>
        <div class="field">
          <label>Stablecoin program</label>
          <input data-scope="settings" data-field="stablecoinProgram" value="${C(x.settings.stablecoinProgram)}" placeholder="Program public key">
        </div>
        <div class="field">
          <label>Transfer hook program</label>
          <input data-scope="settings" data-field="transferHookProgram" value="${C(x.settings.transferHookProgram)}" placeholder="Optional">
        </div>
        <div class="field">
          <label>Registry program</label>
          <input data-scope="settings" data-field="registryProgram" value="${C(x.settings.registryProgram)}">
        </div>
        <div class="field">
          <label>Token program</label>
          <input data-scope="settings" data-field="tokenProgram" value="${C(x.settings.tokenProgram)}">
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Deployment Readiness</h3>
            <p class="panel-subtitle">Live deploys require a configured stablecoin program and a connected wallet.</p>
          </div>
        </div>
        <div class="data-list">
          <div class="data-row"><span>Network</span><strong>${C(Ks())}</strong></div>
          <div class="data-row"><span>Stablecoin program</span><strong class="mono">${C(x.settings.stablecoinProgram||"Missing")}</strong></div>
          <div class="data-row"><span>Registry program</span><strong class="mono">${C(x.settings.registryProgram||"Optional")}</strong></div>
          <div class="data-row"><span>Transfer hook program</span><strong class="mono">${C(x.settings.transferHookProgram||"Optional")}</strong></div>
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Feature Flags</h3>
            <p class="panel-subtitle">Frontend-side behavior toggles.</p>
          </div>
        </div>
        <div class="toggle-grid">
          ${Dr("settings","autoRegister","Registry auto-register","Automatically queue registry payloads after deploy.",x.settings.autoRegister)}
          ${Dr("settings","strictMode","Strict validation","Keep review step warnings visible when required fields are missing.",x.settings.strictMode)}
          ${Dr("settings","analytics","Local analytics","Track interaction metrics in this frontend session.",x.settings.analytics)}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Issuer Metadata</h3>
            <p class="panel-subtitle">Shared metadata injected into registry and review screens.</p>
          </div>
        </div>
        <div class="field">
          <label>Issuer name</label>
          <input data-scope="settings" data-field="issuerName" value="${C(x.settings.issuerName)}">
        </div>
        <div class="field">
          <label>Issuer website</label>
          <input data-scope="settings" data-field="issuerWebsite" value="${C(x.settings.issuerWebsite)}">
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Display Preferences</h3>
            <p class="panel-subtitle">Comfortable defaults with monospaced metadata blocks.</p>
          </div>
        </div>
        <div class="field">
          <label>Density</label>
          <select data-scope="settings" data-field="displayDensity">
            ${["Compact","Comfortable","Spacious"].map(r=>`<option ${x.settings.displayDensity===r?"selected":""}>${r}</option>`).join("")}
          </select>
        </div>
        ${Ne("dashboard","Return to Dashboard","secondary","west")}
      </article>
    </section>
  `}function yR(r){let e=Math.round(r/7*100),t=["Protocol","Metadata","Extensions","Roles","Registry","Review","Deploy"];return`
    <section class="wizard-header">
      <div class="page-header">
        <div>
          <p class="eyebrow">Create flow</p>
          <h1 class="headline">Stablecoin Wizard</h1>
          <p class="subline">Interactive build path derived from the stitched create-stablecoin screens.</p>
        </div>
        ${pe(`${x.wizard.preset} preset`,"primary")}
      </div>
      <div class="wizard-stepper">
        ${t.map((n,i)=>{let s=i+1;return`
            <div class="wizard-step ${r===s?"active":r>s?"complete":""}">
              <div class="wizard-step-index">${r>s?"OK":s}</div>
              <small>${C(n)}</small>
            </div>
          `}).join("")}
      </div>
      <div class="progress-card">
        <div class="row-split">
          <div>
            <div class="eyebrow">Current progress</div>
            <strong>Step ${r} of 7</strong>
          </div>
          <strong class="mono">${e}%</strong>
        </div>
        <div class="progress-rail">
          <div class="progress-fill" style="width:${e}%"></div>
        </div>
      </div>
    </section>

    ${bR(r)}
    ${kR(r)}
  `}function bR(r){return r===1?wR():r===2?vR():r===3?_R():r===4?SR():r===5?RR():r===6?AR():ER()}function wR(){return`
    <section class="wizard-panel">
      <div>
        <p class="eyebrow">Step 1</p>
        <h3 class="panel-title">Choose protocol preset</h3>
        <p class="panel-subtitle">Use a preset as the basis for enabled controls and review expectations.</p>
      </div>
      <div class="three-col">
        ${[["SSS-1","Minimal","Lean issuance surface with basic mint and burn."],["SSS-2","Compliant Stablecoin","Recommended preset with roles, controls, and registry support."],["SSS-3","Privacy Forward","Experimental path for confidential and proof-based controls."]].map(([e,t,n])=>`
          <article class="token-card">
            <div class="row-split">
              ${pe(e,x.wizard.preset===e?"primary":"secondary")}
              ${x.wizard.preset===e?pe("Selected","success"):""}
            </div>
            <h3 class="display">${C(t)}</h3>
            <p>${C(n)}</p>
            <button class="button ${x.wizard.preset===e?"primary":"secondary"}" data-action="set-preset" data-preset="${e}">${x.wizard.preset===e?"Selected":"Use preset"}</button>
          </article>
        `).join("")}
      </div>
      <div class="summary-card">
        <small class="eyebrow">Release alignment</small>
        <div class="summary-row"><span class="summary-key">Published SSS release</span><strong class="mono">v1.0.0</strong></div>
        <div class="summary-row"><span class="summary-key">Recommended environment</span><strong>Devnet staging before production cutover</strong></div>
      </div>
    </section>
  `}function vR(){return`
    <section class="wizard-panel">
      <div>
        <p class="eyebrow">Step 2</p>
        <h3 class="panel-title">Token metadata</h3>
        <p class="panel-subtitle">Capture the fields shown in the metadata prototype and persist them locally.</p>
      </div>
      <div class="field-grid">
        <div class="field">
          <label>Token name</label>
          <input data-scope="wizard" data-field="tokenName" value="${C(x.wizard.tokenName)}" placeholder="USD Standard">
        </div>
        <div class="field">
          <label>Metadata URI</label>
          <input data-scope="wizard" data-field="metadataUri" value="${C(x.wizard.metadataUri)}" placeholder="https://.../metadata.json">
        </div>
      </div>
      <div class="field-grid triple">
        <div class="field">
          <label>Token symbol</label>
          <input data-scope="wizard" data-field="symbol" value="${C(x.wizard.symbol)}" placeholder="USDS">
        </div>
        <div class="field">
          <label>Decimals</label>
          <input data-scope="wizard" data-field="decimals" type="number" value="${C(x.wizard.decimals)}">
        </div>
        <div class="field">
          <label>Preset version</label>
          <input value="1.0.0" readonly>
        </div>
      </div>
    </section>
  `}function _R(){return`
    <section class="wizard-panel">
      <div>
        <p class="eyebrow">Step 3</p>
        <h3 class="panel-title">Extensions and controls</h3>
        <p class="panel-subtitle">Preset-derived capabilities exposed as explicit toggles.</p>
      </div>
      <div class="toggle-grid">
        ${Dr("wizard","permanentDelegate","Permanent delegate","Enable long-lived delegate authority for managed operations.",x.wizard.permanentDelegate)}
        ${Dr("wizard","transferHook","Transfer hook","Route transfers through compliance-aware logic.",x.wizard.transferHook)}
        ${Dr("wizard","defaultFrozen","Default account frozen","Require explicit account thaw before transfers.",x.wizard.defaultFrozen)}
        ${Dr("wizard","confidentialTransfers","Confidential transfers","Preview privacy-preserving transfer mode.",x.wizard.confidentialTransfers)}
        ${Dr("wizard","zkProofs","ZK compliance proofs","Pair compliance checks with proof-based verification.",x.wizard.zkProofs)}
        ${Dr("wizard","compressedState","Compressed compliance state","Reduce state footprint for advanced deployments.",x.wizard.compressedState)}
      </div>
    </section>
  `}function SR(){return`
    <section class="wizard-panel">
      <div>
        <p class="eyebrow">Step 4</p>
        <h3 class="panel-title">Authorities and roles</h3>
        <p class="panel-subtitle">Separate operational keys for safer issuance and controls.</p>
      </div>
      <div class="field">
        <label>Master authority</label>
        <input data-scope="wizard" data-field="masterAuthority" value="${C(x.wizard.masterAuthority)}" placeholder="Solana public key">
      </div>
      <div class="field-grid triple">
        <div class="field">
          <label>Initial minter</label>
          <input data-scope="wizard" data-field="minter" value="${C(x.wizard.minter)}">
        </div>
        <div class="field">
          <label>Minter quota</label>
          <input data-scope="wizard" data-field="minterQuota" value="${C(x.wizard.minterQuota)}">
        </div>
        <div class="field">
          <label>Freeze authority</label>
          <input data-scope="wizard" data-field="freezeAuthority" value="${C(x.wizard.freezeAuthority)}">
        </div>
      </div>
      <div class="field">
        <label>Initial burner</label>
        <input data-scope="wizard" data-field="burner" value="${C(x.wizard.burner)}">
      </div>
    </section>
  `}function RR(){return`
    <section class="wizard-panel">
      <div>
        <p class="eyebrow">Step 5</p>
        <h3 class="panel-title">On-chain registry</h3>
        <p class="panel-subtitle">Broadcast disclosure metadata so the asset can be discovered and trusted.</p>
      </div>
      ${Dr("wizard","autoRegister","Registry status","Broadcast this stablecoin to public registries after deploy.",x.wizard.autoRegister)}
      <div class="field-grid">
        <div class="field">
          <label>Jurisdiction</label>
          <select data-scope="wizard" data-field="jurisdiction">
            ${["United States","European Union","Cayman Islands","Singapore","Switzerland"].map(r=>`<option ${x.wizard.jurisdiction===r?"selected":""}>${r}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Contact email</label>
          <input data-scope="wizard" data-field="contactEmail" value="${C(x.wizard.contactEmail)}">
        </div>
      </div>
      <div class="field-grid">
        <div class="field">
          <label>Compliance docs URI</label>
          <input data-scope="wizard" data-field="docsUri" value="${C(x.wizard.docsUri)}">
        </div>
        <div class="field">
          <label>Issuer website</label>
          <input data-scope="wizard" data-field="issuerWebsite" value="${C(x.wizard.issuerWebsite)}">
        </div>
      </div>
    </section>
  `}function AR(){let r=cm();return`
    <section class="wizard-panel">
      <div>
        <p class="eyebrow">Step 6</p>
        <h3 class="panel-title">Review and deploy</h3>
        <p class="panel-subtitle">Structured summary across metadata, preset, roles, and registry metadata.</p>
      </div>
      ${r.length?`
        <div class="summary-card">
          <small class="eyebrow">Validation warnings</small>
          <div class="data-list">
            ${r.map(e=>`<div class="inline-main"><span class="material-symbols-outlined">warning</span><span>${C(e)}</span></div>`).join("")}
          </div>
        </div>
      `:`
        <div class="summary-card">
          <small class="eyebrow">Validation</small>
          <strong>All required fields are present for a live SDK-backed deploy.</strong>
        </div>
      `}
      <div class="summary-grid">
        <article class="summary-card">
          <small class="eyebrow">Token metadata</small>
          ${Oe("Name",x.wizard.tokenName)}
          ${Oe("Symbol",x.wizard.symbol)}
          ${Oe("Decimals",x.wizard.decimals)}
          ${Oe("Metadata URI",x.wizard.metadataUri)}
        </article>
        <article class="summary-card">
          <small class="eyebrow">Preset and extensions</small>
          ${Oe("Preset",x.wizard.preset)}
          ${Oe("Transfer hook",Aa(x.wizard.transferHook))}
          ${Oe("Default frozen",Aa(x.wizard.defaultFrozen))}
          ${Oe("Confidential",Aa(x.wizard.confidentialTransfers))}
        </article>
        <article class="summary-card">
          <small class="eyebrow">Role assignments</small>
          ${Oe("Master authority",x.wizard.masterAuthority)}
          ${Oe("Minter",x.wizard.minter)}
          ${Oe("Burner",x.wizard.burner)}
          ${Oe("Freeze authority",x.wizard.freezeAuthority)}
        </article>
        <article class="summary-card">
          <small class="eyebrow">Registry metadata</small>
          ${Oe("Auto-register",Aa(x.wizard.autoRegister))}
          ${Oe("Jurisdiction",x.wizard.jurisdiction)}
          ${Oe("Docs URI",x.wizard.docsUri)}
          ${Oe("Contact",x.wizard.contactEmail)}
        </article>
      </div>
      <div class="summary-card">
        <small class="eyebrow">Transaction intent</small>
        ${Oe("Expected accounts","Mint, metadata, registry payload, role PDAs")}
        ${Oe("Stablecoin program",x.settings.stablecoinProgram||"Missing")}
        ${Oe("Registry program",x.settings.registryProgram||"Optional")}
        ${Oe("Config hash preview",lm())}
      </div>
    </section>
  `}function ER(){let r=x.lastDeployment||xR();return`
    <section class="wizard-panel">
      <div class="success-shell">
        <div class="success-mark"><span class="material-symbols-outlined">check</span></div>
        <div>
          <p class="eyebrow">Step 7</p>
          <h3 class="panel-title">Stablecoin deployed successfully.</h3>
          <p class="panel-subtitle">${C(r.name)} (${C(r.symbol)}) has been added to the frontend dataset and can now be reviewed in the token list and registry explorer.</p>
        </div>
        <div class="summary-card stretch">
          ${Oe("Mint address",r.mint)}
          ${Oe("Config PDA",r.configAddress)}
          ${Oe("Preset",r.tier)}
          ${Oe("Registry status",r.registry)}
          ${Oe("Config hash",r.configHash)}
          ${Oe("Init signature",r.signature)}
          ${r.registrySignature?Oe("Registry signature",r.registrySignature):""}
        </div>
        <div class="button-row">
          ${Ne(`stablecoin/${r.id}/overview`,"Open Stablecoin","primary","north_east")}
          ${Ne("registry","Open Registry","secondary","menu_book")}
          <button class="button ghost" data-action="reset-wizard">Create Another</button>
        </div>
      </div>
    </section>
  `}function kR(r){if(r===7)return"";let e=r===1?"stablecoins":`create/${r-1}`,t=r===6?"Deploy Stablecoin":"Continue",n=r===6?"deploy-wizard":"wizard-next";return`
    <section class="wizard-actions">
      ${Ne(e,"Back","ghost","west")}
      ${le(n,t,"primary","arrow_forward",`data-step="${r}"`)}
    </section>
  `}function Dr(r,e,t,n,i){return`
    <label class="toggle-card">
      <div>
        <small>${C(t)}</small>
        <div><strong>${C(t)}</strong></div>
        <p class="helper">${C(n)}</p>
      </div>
      <span class="switch">
        <input type="checkbox" data-scope="${C(r)}" data-field="${C(e)}" ${i?"checked":""}>
        <span></span>
      </span>
    </label>
  `}function Oe(r,e){return`<div class="summary-row"><span class="summary-key">${C(r)}</span><strong>${C(e||"Missing")}</strong></div>`}function Aa(r){return r?"Enabled":"Disabled"}function cm(){let r=[];return x.wizard.tokenName.trim()||r.push("Token name is required."),x.wizard.symbol.trim()||r.push("Token symbol is required."),x.wizard.metadataUri.trim()||r.push("Metadata URI is required."),x.wizard.masterAuthority.trim()||r.push("Master authority is required."),x.settings.stablecoinProgram.trim()||r.push("Stablecoin program ID is required for live deploys."),x.wizard.transferHook&&!x.settings.transferHookProgram.trim()&&r.push("Transfer hook program ID is required when transfer hook is enabled."),x.wizard.autoRegister&&!x.wizard.contactEmail.trim()&&r.push("Contact email is required when registry auto-register is enabled."),r}function IR(r){let e=`${r}${Date.now()}`.replace(/[^A-Za-z0-9]/g,"").toUpperCase();return`${e.slice(0,4)||"MINT"}...${e.slice(-4)||"0001"}`}function lm(){let r=`${x.wizard.tokenName}|${x.wizard.symbol}|${x.wizard.preset}|${x.wizard.jurisdiction}`,e=0;for(let t=0;t<r.length;t+=1)e=(e<<5)-e+r.charCodeAt(t)|0;return`cfg-${Math.abs(e).toString(16).padStart(8,"0")}`}function xR(){let r=x.wizard.symbol.trim()||"NEW";return{id:`${r.toLowerCase()}-preview`,name:x.wizard.tokenName.trim()||"New Stablecoin",symbol:r,tier:x.wizard.preset,registry:x.wizard.autoRegister?"Registered":"Draft",registryTone:x.wizard.autoRegister?"primary":"warning",configHash:lm(),mint:IR(r),configAddress:"Pending",signature:"Pending",registrySignature:""}}async function TR(r){if(Xp(),hu()&&r!=="Demo Wallet"){Sr("Extension wallets cannot connect from file:// pages. Serve the frontend on http://127.0.0.1:4173 or deploy it to HTTPS, then retry."),ce();return}let e=cu(r);if(!e){Sr(`${r} was not detected in this browser.`),ce();return}$e(`Connecting ${r}...`),ce();let t=await e.connect();if(ne.provider=e,ne.lastSignature="",x.connected=!0,x.walletProvider=r,x.walletAddress=xa(e,t),!x.walletAddress)throw new Error("Wallet connected, but no public key was exposed by the provider.");x.wizard.masterAuthority=x.walletAddress,x.wizard.minter=x.wizard.minter||x.walletAddress,x.wizard.burner=x.wizard.burner||x.walletAddress,x.wizard.freezeAuthority=x.wizard.freezeAuthority||x.walletAddress,r==="Demo Wallet"&&$1(),ze(),$e(""),Pe(`${r} connected as ${Tr(x.walletAddress)}.`),Ur("dashboard")}async function OR(){Xp(),ne.provider?.disconnect&&await ne.provider.disconnect(),ne.provider=null,ne.lastSignature="",x.connected=!1,x.walletAddress="",x.mobileMenuOpen=!1,ze(),Pe("Wallet disconnected."),Ur("connect")}async function BR(){if(!x.connected||!x.walletProvider)return;let r=cu(x.walletProvider);if(!r?.connect){x.connected=!1,x.walletAddress="",ze();return}try{let e=await r.connect({onlyIfTrusted:!0});ne.provider=r,x.walletAddress=xa(r,e),ze()}catch{x.connected=!1,x.walletAddress="",ze()}}async function CR(r){let e=Xi(),t=Fe(x.settings.registryProgram,"Registry program"),n=Fe(r.programId,"Stablecoin program"),i=pi(),o=await(await fi.connect({connection:i,authority:e,programId:n,mint:Fe(r.mint,"Mint"),registryMetadata:{homepage:x.wizard.issuerWebsite||x.settings.issuerWebsite,jurisdiction:r.jurisdiction}})).getRegistryEntry(),l=await Gt({connection:i,transaction:Ds(ru({stablecoinProgramId:n,entry:o},t)),signer:e});ne.lastSignature=l,Un(r.id,u=>(u.registry="Registered",u.registryTone="primary",u.registrySignature=l,u.registryInfo=[["Record status","Published"],["Website",x.wizard.issuerWebsite||x.settings.issuerWebsite||"Missing"],["Compliance docs",x.wizard.docsUri||"Missing"],["Jurisdiction",u.jurisdiction||"Missing"]],u)),x.customRegistryEntries=[{name:r.name,symbol:r.symbol,tier:r.tier,issuer:x.settings.issuerName||"Stable Studio",status:"Published",tone:"primary",jurisdiction:r.jurisdiction},...x.customRegistryEntries.filter(u=>u.symbol!==r.symbol)],ze(),Et({type:"success",title:`Registered ${r.symbol}`,detail:`Registry write confirmed. ${l}`,when:"Just now"}),Pe(`Registry write confirmed for ${r.symbol}.`)}async function yu(r){let{connection:e,coin:t,stable:n}=await Rr(r),i=await n.getConfig(),s=await Wl(e,Fe(t.mint,"Mint"),"confirmed",Ui);Un(r,o=>(o.status=i.isPaused?"Paused":"Active",o.statusTone=i.isPaused?"warning":"success",o.configHash=i.configHash,o.decimals=i.decimals,o.complianceRoot=i.compressedComplianceRoot||o.complianceRoot||"",o.supplyAtomic=s.supply.toString(),o.currentSupply=cn(s.supply,i.decimals),o.supply=uu(s.supply,{...o,decimals:i.decimals}),o.featureFlags=Qp(i),o.authorities=em(i),o)),Pe(`Refreshed ${t.symbol} from chain state.`)}async function PR(r){let{provider:e,coin:t,connection:n,stable:i}=await Rr(r),s=t.status!=="Paused",o=await Gt({connection:n,transaction:await i.buildPauseTransaction(s),signer:e});ne.lastSignature=o,Un(r,l=>(l.status=s?"Paused":"Active",l.statusTone=s?"warning":"success",l)),Et({type:s?"warning":"success",title:`${s?"Paused":"Unpaused"} ${t.symbol}`,detail:`Transaction confirmed. ${o}`,when:"Just now"}),Pe(`${t.symbol} is now ${s?"paused":"active"}.`)}async function NR(r){let e=Xi(),t=pi(),n=Fe(r.mint,"Mint address"),i=Fe(x.settings.stablecoinProgram,"Stablecoin program"),s=await fi.connect({connection:t,authority:e,programId:i,mint:n,registryMetadata:{homepage:x.settings.issuerWebsite,jurisdiction:""}}),o=await s.getConfig(),l=await Wl(t,n,"confirmed",Ui),y={id:`${o.symbol.toLowerCase()}-${n.toBase58().slice(0,6).toLowerCase()}`,name:o.name,symbol:o.symbol,tier:M1(o),supply:uu(l.supply,{symbol:o.symbol,decimals:o.decimals}),status:o.isPaused?"Paused":"Active",registry:"Imported",registryTone:"warning",statusTone:o.isPaused?"warning":"success",mint:n.toBase58(),configHash:o.configHash,configAddress:s.getConfigAddress().toBase58(),programId:i.toBase58(),signature:"",registrySignature:"",live:!0,decimals:o.decimals,jurisdiction:r.jurisdiction?.trim()||"Unknown",description:L1(o),totalMinted:"Unknown",totalBurned:"Unknown",currentSupply:cn(l.supply,o.decimals),supplyAtomic:l.supply.toString(),mintedAtomic:"0",burnedAtomic:"0",complianceRoot:o.compressedComplianceRoot||"",proofReceipts:[],roleAssignments:[],frozenAccounts:"0",blacklisted:"0",featureFlags:Qp(o),authorities:em(o),registryInfo:[["Record status","Imported"],["Website",x.settings.issuerWebsite||"Missing"],["Compliance docs","Unknown"],["Jurisdiction",r.jurisdiction?.trim()||"Unknown"]]};x.customStablecoins=[y,...x.customStablecoins.filter(S=>S.mint!==y.mint)],ze(),Et({type:"success",title:`Imported ${y.symbol}`,detail:`Frontend attached to live mint ${Tr(y.mint)}.`,when:"Just now"}),Pe(`Imported live stablecoin ${y.symbol}.`),Ur(`stablecoin/${y.id}/overview`)}async function um(r,e){let{provider:t,coin:n,connection:i,stable:s}=await Rr(r),o=Fe(e.destinationOwner,"Destination owner"),l=lu(e.amount,"Mint amount",Vt(n)),u=ip(s.getMintAddress(),o,!1,Ui,Tn),y=new ge().add(sp(t.publicKey,u,o,s.getMintAddress(),Ui,Tn),...(await s.buildMintTransaction({destination:u,amount:l,minter:t.publicKey})).instructions),S=await Gt({connection:i,transaction:y,signer:t});ne.lastSignature=S,nm(r,{mintedDelta:l}),await yu(r),Et({type:"success",title:`Minted ${cn(l,Vt(n))} ${n.symbol}`,detail:`Destination ATA ${u.toBase58()} confirmed. ${S}`,when:"Just now"}),Pe(`Mint confirmed for ${n.symbol}.`)}async function LR(r,e){let{provider:t,coin:n,connection:i,stable:s}=await Rr(r),o=Fe(e.sourceAccount,"Source token account"),l=lu(e.amount,"Burn amount",Vt(n)),u=await Gt({connection:i,transaction:await s.buildBurnTransaction({source:o,amount:l,burner:t.publicKey}),signer:t});ne.lastSignature=u,nm(r,{burnedDelta:l}),await yu(r),Et({type:"success",title:`Burned ${cn(l,Vt(n))} ${n.symbol}`,detail:`Burn source ${o.toBase58()} confirmed. ${u}`,when:"Just now"}),Pe(`Burn confirmed for ${n.symbol}.`)}async function qp(r,e,t){let{provider:n,coin:i,connection:s,stable:o}=await Rr(r),l=Fe(e.tokenAccount,"Token account"),u=await Gt({connection:s,transaction:await o.buildFreezeTransaction(l,t),signer:n});ne.lastSignature=u,Et({type:t?"success":"warning",title:`${t?"Thawed":"Froze"} account for ${i.symbol}`,detail:`${l.toBase58()} confirmed. ${u}`,when:"Just now"}),du(r,y=>{let S=Ia(y.frozenAccounts);return y.frozenAccounts=String(Math.max(0,S+(t?-1:1))),y}),Pe(`${t?"Thaw":"Freeze"} confirmed for ${i.symbol}.`)}async function Vp(r,e,t){let{provider:n,coin:i,connection:s,stable:o}=await Rr(r),l=Fe(e.address,"Wallet address"),u=t?await o.buildBlacklistAddTransaction({address:l,reason:He(e.reason,"Blacklist reason")}):await o.buildBlacklistRemoveTransaction(l),y=await Gt({connection:s,transaction:u,signer:n});ne.lastSignature=y,Et({type:t?"warning":"success",title:`${t?"Blacklisted":"Removed blacklist for"} ${i.symbol}`,detail:`${l.toBase58()} confirmed. ${y}`,when:"Just now"}),du(r,S=>{let R=Ia(S.blacklisted);return S.blacklisted=String(Math.max(0,R+(t?1:-1))),S}),Pe(`${t?"Blacklist add":"Blacklist removal"} confirmed for ${i.symbol}.`)}async function MR(r,e){let{provider:t,coin:n,connection:i,stable:s}=await Rr(r),o=Fe(e.fromAccount,"Source token account"),l=Fe(e.toAccount,"Destination token account"),u=await Gt({connection:i,transaction:await s.buildSeizeTransaction({fromAccount:o,toAccount:l,seizer:t.publicKey}),signer:t});ne.lastSignature=u,Et({type:"warning",title:`Seized ${n.symbol} account`,detail:`${o.toBase58()} -> ${l.toBase58()} confirmed. ${u}`,when:"Just now"}),Pe(`Seizure confirmed for ${n.symbol}.`)}async function Gp(r,e){let{provider:t,coin:n,connection:i,stable:s}=await Rr(r),o=Fe(e.holder,"Role holder"),l=He(e.role,"Role"),u=e.active==="true",y=l==="minter"&&String(e.mintQuota||"").trim()?lu(e.mintQuota,"Mint quota",Vt(n)):null,S=await Gt({connection:i,transaction:await s.buildUpdateRoleTransaction({holder:o,role:l,isActive:u,mintQuota:y}),signer:t});ne.lastSignature=S,Un(r,R=>(R.roleAssignments=[{holder:o.toBase58(),role:l,active:u,mintQuota:y?cn(y,Vt(R)):""},...(R.roleAssignments||[]).filter(I=>!(I.holder===o.toBase58()&&I.role===l))],R)),Et({type:u?"success":"warning",title:`${u?"Granted":"Revoked"} ${l} role`,detail:`${o.toBase58()} confirmed for ${n.symbol}. ${S}`,when:"Just now"}),Pe(`Role update confirmed for ${n.symbol}.`)}async function $R(r,e){let{provider:t,coin:n,connection:i,stable:s}=await Rr(r),o=Fe(e.nextAuthority,"Pending authority"),l=await Gt({connection:i,transaction:await s.buildAuthorityTransferTransaction(o),signer:t});ne.lastSignature=l,Et({type:"warning",title:`Proposed authority transfer for ${n.symbol}`,detail:`Pending authority ${o.toBase58()} submitted. ${l}`,when:"Just now"}),Pe(`Authority transfer proposal submitted for ${n.symbol}.`)}async function DR(r,e){let{provider:t,coin:n,connection:i,stable:s}=await Rr(r),o=He(e.root,"Compliance root"),l=await Gt({connection:i,transaction:await s.buildUpdateComplianceRootTransaction(o),signer:t});ne.lastSignature=l,Un(r,u=>(u.complianceRoot=o,u)),Et({type:"success",title:`Updated compliance root for ${n.symbol}`,detail:`${o} confirmed. ${l}`,when:"Just now"}),Pe(`Compliance root updated for ${n.symbol}.`)}async function UR(r,e){let{provider:t,coin:n,connection:i,stable:s}=await Rr(r),o=Fe(e.subject,"Subject"),l=He(e.complianceRoot,"Compliance root"),u=N1(e.proofCommitment,"Proof commitment"),y=await Gt({connection:i,transaction:await s.buildSubmitProofReceiptTransaction({subject:o,proofCommitment:u,complianceRoot:l}),signer:t});ne.lastSignature=y,Un(r,S=>(S.proofReceipts=[{subject:o.toBase58(),status:"Valid",complianceRoot:l,submittedAt:"Just now"},...(S.proofReceipts||[]).filter(R=>R.subject!==o.toBase58())],S.complianceRoot=l,S)),Et({type:"success",title:`Submitted proof receipt for ${n.symbol}`,detail:`${o.toBase58()} confirmed. ${y}`,when:"Just now"}),Pe(`Proof receipt submitted for ${n.symbol}.`)}async function zR(r,e){let{provider:t,coin:n,connection:i,stable:s}=await Rr(r),o=Fe(e.subject,"Subject"),l=await Gt({connection:i,transaction:await s.buildRevokeProofReceiptTransaction(o),signer:t});ne.lastSignature=l,Un(r,u=>(u.proofReceipts=(u.proofReceipts||[]).map(y=>y.subject===o.toBase58()?{...y,status:"Revoked",submittedAt:"Just now"}:y),u)),Et({type:"warning",title:`Revoked proof receipt for ${n.symbol}`,detail:`${o.toBase58()} confirmed. ${l}`,when:"Just now"}),Pe(`Proof receipt revoked for ${n.symbol}.`)}async function FR(r){let e=Xi(),t=Fe(x.settings.registryProgram,"Registry program"),n=await Jp(t);if(n)throw new Error(`Registry authority mismatch. This registry is controlled by ${n.registryAuthority}, but your wallet is ${n.walletAuthority}.`);let i={id:`${He(r.standardVersion,"Standard version")}-${Hp(r.preset)}`,standardVersion:He(r.standardVersion,"Standard version"),preset:He(r.preset,"Preset"),schemaHash:He(r.schemaHash,"Schema hash"),notesUri:He(r.notesUri,"Notes URI"),deprecated:r.deprecated==="true",replacementVersion:String(r.replacementVersion||"").trim()},s=await Gt({connection:pi(),transaction:Ds(Fp({authority:e.publicKey,standardVersion:i.standardVersion,preset:Hp(i.preset),schemaHash:i.schemaHash,notesUri:i.notesUri,deprecated:i.deprecated,replacementVersion:i.replacementVersion||null},t)),signer:e});ne.lastSignature=s,rm({...i,tone:i.deprecated?"warning":"success",status:i.deprecated?"Deprecated":"Published",signature:s}),Et({type:"success",title:`Published release ${i.standardVersion}`,detail:`Registry release write confirmed. ${s}`,when:"Just now"}),Pe(`Release ${i.standardVersion} published.`),Ur("release-registry")}async function KR(r,e=""){let t=Xi(),n=Fe(x.settings.registryProgram,"Registry program"),i=await Jp(n);if(i)throw new Error(`Registry authority mismatch. This registry is controlled by ${i.registryAuthority}, but your wallet is ${i.walletAuthority}.`);let s=sm(r);if(!s)throw new Error("Release record not found.");let o=await Gt({connection:pi(),transaction:Ds(Kp(t.publicKey,s.standardVersion,e||s.replacementVersion||null,n)),signer:t});ne.lastSignature=o,rm({...s,deprecated:!0,replacementVersion:e||s.replacementVersion||"",tone:"warning",status:"Deprecated",signature:o}),Et({type:"warning",title:`Deprecated release ${s.standardVersion}`,detail:`Registry deprecation confirmed. ${o}`,when:"Just now"}),Pe(`Release ${s.standardVersion} marked deprecated.`)}function HR(r,e=""){let t={id:`hook-${Date.now()}`,endpoint:He(r.endpoint,"Webhook URL"),eventType:He(r.eventType,"Event type"),secretLabel:He(r.secretLabel,"Secret label"),retryPolicy:He(r.retryPolicy,"Retry policy"),status:"Healthy",tone:"success",deliveryRate:"Pending",coinId:e};F1(t),Et({type:"success",title:`Added webhook ${t.eventType}`,detail:`${t.endpoint} saved to frontend integrations.`,when:"Just now"}),Pe("Webhook saved.")}function WR(r){let e=om(r);x.customWebhooks=x.customWebhooks.filter(t=>t.id!==r),ze(),Pe(`Removed webhook ${e?.eventType||r}.`)}function qR(r){let e=om(r);Pe(`Test delivery queued for ${e?.eventType||"webhook"} -> ${e?.endpoint||"unknown endpoint"}.`)}function VR(r){let e=Dn(He(r.coinId,"Stablecoin")),t={id:`mint-request-${Date.now()}`,coinId:e.id,symbol:e.symbol,destinationOwner:He(r.destinationOwner,"Destination owner"),amount:He(r.amount,"Amount"),requestedBy:He(r.requestedBy,"Requested by"),reason:He(r.reason,"Reason"),status:"Pending"};x.customMintRequests=[t,...x.customMintRequests],ze(),Et({type:"warning",title:`Queued mint request for ${e.symbol}`,detail:`${t.amount} requested for ${Tr(t.destinationOwner)}.`,when:"Just now"}),Pe(`Mint request queued for ${e.symbol}.`)}function jp(r,e){ou(r,t=>({...t,status:e})),Pe(`Mint request ${e.toLowerCase()}.`)}async function GR(r){let e=q1(r);if(!e)throw new Error("Mint request not found.");let t=Dn(e.coinId);if(e.simulated||t?.demo){ou(r,n=>({...n,status:"Complete"})),Et({type:"success",title:`Executed mint request for ${e.symbol}`,detail:`${e.amount} simulated for ${Tr(e.destinationOwner)} in demo mode.`,when:"Just now"}),Pe(`Mint request executed in demo mode for ${e.symbol}.`);return}await um(e.coinId,{destinationOwner:e.destinationOwner,amount:e.amount}),ou(r,n=>({...n,status:"Complete"}))}async function jR(){let r=cm();if(r.length&&x.settings.strictMode)throw new Error(r[0]);let e=Xi(),t=xa(e)||e.publicKey?.toBase58?.()||"",n=Fe(x.settings.stablecoinProgram,"Stablecoin program"),i=x.wizard.transferHook?P1(x.settings.transferHookProgram,"Transfer hook program"):void 0,s=Number(x.wizard.decimals);if(!Number.isFinite(s)||s<0||s>9)throw new Error("Decimals must be between 0 and 9.");let o=pi(),l=qe.generate(),u=await fi.create({connection:o,authority:e,programId:n,preset:U1(x.wizard.preset),name:x.wizard.tokenName.trim(),symbol:x.wizard.symbol.trim(),uri:x.wizard.metadataUri.trim(),decimals:s,mint:l.publicKey,transferHookProgramId:i,registryMetadata:{homepage:x.wizard.issuerWebsite||x.settings.issuerWebsite,jurisdiction:x.wizard.jurisdiction},extensions:z1()}),y=await Gt({connection:o,transaction:await u.buildInitializeTransaction(),signer:e,extraSigners:[l]}),S=await u.getConfig(),R="",I="";if(x.wizard.autoRegister&&x.settings.registryProgram.trim()){let N=Fe(x.settings.registryProgram,"Registry program");try{let $=await u.getRegistryEntry();R=await Gt({connection:o,transaction:Ds(ru({stablecoinProgramId:n,entry:$},N)),signer:e})}catch($){I=`Deploy succeeded, but auto-register failed: ${$ instanceof Error?$.message:String($)}`}}ne.lastSignature=R||y;let k=t||u.getAuthorityPublicKey().toBase58(),B={id:`${x.wizard.symbol.trim().toLowerCase()}-${u.getMintAddress().toBase58().slice(0,6).toLowerCase()}`,name:x.wizard.tokenName.trim(),symbol:x.wizard.symbol.trim(),tier:x.wizard.preset,supply:"$0",status:"Active",statusTone:"success",registry:R?"Registered":x.wizard.autoRegister?"Pending":"Draft",registryTone:R?"primary":"warning",configHash:S.configHash,mint:u.getMintAddress().toBase58(),configAddress:u.getConfigAddress().toBase58(),programId:u.getProgramId().toBase58(),signature:y,registrySignature:R,live:!0,decimals:s,jurisdiction:x.wizard.jurisdiction,description:"Live deployment created through the browser wallet and SDK transaction builders.",totalMinted:"0",totalBurned:"0",currentSupply:"0",supplyAtomic:"0",mintedAtomic:"0",burnedAtomic:"0",complianceRoot:S.compressedComplianceRoot||"",proofReceipts:[],roleAssignments:[],frozenAccounts:"0",blacklisted:"0",featureFlags:[x.wizard.transferHook?"Transfer hook enabled":"Transfer hook disabled",x.wizard.defaultFrozen?"Default account frozen":"Accounts transferable by default",x.wizard.confidentialTransfers?"Confidential transfers enabled":"Confidential transfers disabled",R?"Registry registration confirmed":"Registry registration pending",I?"Registry authority mismatch detected":""].filter(Boolean),authorities:[["Master authority",k],["Mint authority",x.wizard.minter||k],["Burner",x.wizard.burner||k],["Freeze authority",x.wizard.freezeAuthority||k]],registryInfo:[["Record status",R?"Published":x.wizard.autoRegister?"Pending":"Draft"],["Website",x.wizard.issuerWebsite||x.settings.issuerWebsite||"Missing"],["Compliance docs",x.wizard.docsUri||"Missing"],["Jurisdiction",x.wizard.jurisdiction||"Missing"]]};x.customStablecoins=[B,...x.customStablecoins.filter(N=>N.id!==B.id)],R&&(x.customRegistryEntries=[{name:B.name,symbol:B.symbol,tier:B.tier,issuer:x.settings.issuerName||"Stable Studio",status:"Published",tone:"primary",jurisdiction:B.jurisdiction},...x.customRegistryEntries.filter(N=>N.symbol!==B.symbol)]),Et({type:"success",title:`Deployed ${B.symbol}`,detail:`Init confirmed for ${B.mint}. ${y}`,when:"Just now"}),x.lastDeployment=B,ze(),Pe(I||`Stablecoin deployed successfully. ${R?"Registry registration also confirmed.":"You can register it from the operations view."}`)}function YR(r,e){return e==="stablecoins"?r==="stablecoins"||r.startsWith("stablecoin/"):e==="create/1"?r.startsWith("create/"):r===e}document.addEventListener("click",r=>{let e=r.target.closest("[data-doc-target]");if(e){r.preventDefault(),document.getElementById(e.dataset.docTarget||"")?.scrollIntoView({behavior:"smooth",block:"start"});return}let t=r.target.closest("[data-route]");if(t){r.preventDefault(),x.mobileMenuOpen=!1,ze(),Ur(t.dataset.route);return}let n=r.target.closest("[data-action]");if(!n)return;let i=n.dataset.action;if(i==="toggle-menu"){x.mobileMenuOpen=!x.mobileMenuOpen,ze(),ce();return}if(i==="close-menu"){x.mobileMenuOpen=!1,ze(),ce();return}if(i==="dismiss-toast"){ne.toasts=ne.toasts.filter(s=>s.id!==n.dataset.id),ce();return}if(i==="close-modal"){Ea(),ce();return}if(i==="confirm-modal"){(async()=>{try{if(!ne.modal?.onConfirm){Ea(),ce();return}let s=D1();if(ne.modal.confirmPhrase&&s.confirmPhrase!==ne.modal.confirmPhrase)throw new Error(`Type ${ne.modal.confirmPhrase} to continue.`);$e(ne.modal.busy||"Submitting transaction..."),ce(),await ne.modal.onConfirm(s),$e(""),Ea(),ce()}catch(s){$e(""),Sr(s.message||"Confirmation failed."),ce()}})();return}if(i==="connect-wallet"){(async()=>{try{await TR(n.dataset.provider||"Phantom")}catch(s){$e(""),Sr(s.message||"Wallet connection failed."),ce()}})();return}if(i==="disconnect-wallet"){OR();return}if(i==="set-filter"){x.stablecoinFilter=n.dataset.filter||"ALL",ze(),ce();return}if(i==="set-preset"){x.wizard.preset=n.dataset.preset||"SSS-2",x.wizard.preset==="SSS-1"?(x.wizard.transferHook=!1,x.wizard.defaultFrozen=!1,x.wizard.confidentialTransfers=!1,x.wizard.zkProofs=!1,x.wizard.compressedState=!1):x.wizard.preset==="SSS-2"?(x.wizard.transferHook=!0,x.wizard.defaultFrozen=!0,x.wizard.confidentialTransfers=!1,x.wizard.zkProofs=!1,x.wizard.compressedState=!1):(x.wizard.transferHook=!0,x.wizard.defaultFrozen=!0,x.wizard.confidentialTransfers=!0,x.wizard.zkProofs=!0,x.wizard.compressedState=!0),ze(),ce();return}if(i==="wizard-next"){let s=Number(n.dataset.step||gu(fu()));Ur(`create/${Math.min(s+1,7)}`);return}if(i==="deploy-wizard"){(async()=>{try{$e("Submitting initialize transaction..."),ce(),await jR(),$e(""),Ur("create/7")}catch(s){$e(""),Sr(s.message||"Deploy failed."),ce()}})();return}if(i==="reset-wizard"){x.wizard={...zs.wizard},ze(),Ur("create/1");return}if(i==="fake-op"){let s=n.dataset.op||"Operation completed";Et({type:s.toLowerCase().includes("freeze")?"warning":"success",title:s,detail:"Generated by the interactive frontend operation surface.",when:"Just now"}),ce();return}if(i==="refresh-service-health"){Pe("Service health refreshed from the frontend monitoring view."),ce();return}if(i==="preview-registry-payload"||i==="preview-config-json"){let s=Dn(n.dataset.id),o=i==="preview-registry-payload"?{preset:s.tier,configHash:s.configHash,mint:s.mint,jurisdiction:s.jurisdiction}:{name:s.name,symbol:s.symbol,mint:s.mint,programId:s.programId,decimals:Vt(s),complianceRoot:s.complianceRoot||null};Sa({tone:"primary",eyebrow:i==="preview-registry-payload"?"Registry Payload":"Config JSON",title:i==="preview-registry-payload"?`${s.symbol} Registry Preview`:`${s.symbol} Config Preview`,body:"Review the serialized payload before copying it into another system.",code:JSON.stringify(o,null,2),rows:[["Payload bytes",`${JSON.stringify(o).length}`]],confirmLabel:"Close",onConfirm:async()=>{}}),ce();return}if(i==="screen-address"){let s=Ra(n),o=He(s.address,"Screen address"),l=o.endsWith("Z")?"High Risk":"Cleared";Sa({tone:l==="High Risk"?"warning":"success",eyebrow:"Screening Result",title:`${l} Result`,body:`Manual sanctions screening result for ${o}.`,rows:[["Address",o],["Decision",l],["Reviewer",Ji()||"Frontend operator"]],confirmLabel:"Acknowledge",onConfirm:async()=>{}}),ce();return}if(i==="add-webhook"){try{HR(Ra(n),n.dataset.id||""),ce()}catch(s){Sr(s.message||"Webhook creation failed."),ce()}return}if(i==="test-webhook"){qR(n.dataset.id),ce();return}if(i==="remove-webhook"){WR(n.dataset.id),ce();return}if(i==="create-mint-request"){try{VR(Ra(n)),ce()}catch(s){Sr(s.message||"Mint request creation failed."),ce()}return}if(i==="approve-mint-request"){jp(n.dataset.id,"Approved"),ce();return}if(i==="reject-mint-request"){jp(n.dataset.id,"Rejected"),ce();return}if(i==="execute-mint-request"){(async()=>{try{$e("Executing approved mint request..."),ce(),await GR(n.dataset.id),$e(""),ce()}catch(s){$e(""),Sr(s.message||"Mint request execution failed."),ce()}})();return}if(i==="deprecate-release"){let s=sm(n.dataset.id);Sa({tone:"danger",eyebrow:"Release Registry",title:`Deprecate ${s?.standardVersion||"release"}`,body:"This updates the release registry and affects discoverability for protocol deployments.",rows:[["Version",s?.standardVersion||"Unknown"],["Preset",s?.preset||"Unknown"],["Replacement",s?.replacementVersion||"Optional"]],confirmPhrase:"CONFIRM",confirmLabel:"Mark Deprecated",busy:"Submitting release deprecation...",onConfirm:async()=>{await KR(n.dataset.id)}}),ce();return}if(i==="toggle-live-pause"){(async()=>{try{$e("Submitting pause state change..."),ce(),await PR(n.dataset.id),$e(""),ce()}catch(s){$e(""),Sr(s.message||"Pause action failed."),ce()}})();return}if(i==="refresh-live-coin"){(async()=>{try{$e("Refreshing on-chain state..."),ce(),await yu(n.dataset.id),$e(""),ce()}catch(s){$e(""),Sr(s.message||"Refresh failed."),ce()}})();return}if(i==="register-live-coin"){(async()=>{try{$e("Submitting registry transaction..."),ce(),await CR(Dn(n.dataset.id)),$e(""),ce()}catch(s){$e(""),Sr(s.message||"Registry write failed."),ce()}})();return}if(i==="import-live-coin"||i==="mint-live"||i==="burn-live"||i==="freeze-live"||i==="thaw-live"||i==="blacklist-add-live"||i==="blacklist-remove-live"||i==="seize-live"||i==="update-role-live"||i==="update-compliance-root-live"||i==="submit-proof-receipt-live"||i==="revoke-proof-receipt-live"||i==="transfer-authority-live"||i==="publish-release-live"||i==="revoke-role-entry"){(async()=>{let s;try{let o=i==="revoke-role-entry"?{holder:n.dataset.holder,role:n.dataset.role,active:"false",mintQuota:""}:Ra(n),l=n.dataset.id;if(i==="seize-live"){Sa({tone:"danger",eyebrow:"Confirm Seizure",title:`Seize ${Dn(l).symbol} Balance`,body:"This action affects live protocol state and should only be used for recovery or enforcement operations.",rows:[["From",o.fromAccount||"Missing"],["To",o.toAccount||"Missing"]],confirmPhrase:"CONFIRM",confirmLabel:"Confirm Seizure",busy:"Submitting seizure transaction...",onConfirm:async()=>{await MR(l,o)}}),ce();return}s={"import-live-coin":{busy:"Importing live stablecoin...",failure:"Import failed.",run:()=>NR(o)},"mint-live":{busy:"Submitting mint transaction...",failure:"Mint failed.",run:()=>um(l,o)},"burn-live":{busy:"Submitting burn transaction...",failure:"Burn failed.",run:()=>LR(l,o)},"freeze-live":{busy:"Submitting freeze transaction...",failure:"Freeze failed.",run:()=>qp(l,o,!1)},"thaw-live":{busy:"Submitting thaw transaction...",failure:"Thaw failed.",run:()=>qp(l,o,!0)},"blacklist-add-live":{busy:"Submitting blacklist update...",failure:"Blacklist update failed.",run:()=>Vp(l,o,!0)},"blacklist-remove-live":{busy:"Submitting blacklist removal...",failure:"Blacklist removal failed.",run:()=>Vp(l,o,!1)},"update-role-live":{busy:"Submitting role update...",failure:"Role update failed.",run:()=>Gp(l,o)},"update-compliance-root-live":{busy:"Submitting compliance root update...",failure:"Compliance root update failed.",run:()=>DR(l,o)},"submit-proof-receipt-live":{busy:"Submitting proof receipt...",failure:"Proof receipt submission failed.",run:()=>UR(l,o)},"revoke-proof-receipt-live":{busy:"Revoking proof receipt...",failure:"Proof receipt revoke failed.",run:()=>zR(l,o)},"transfer-authority-live":{busy:"Submitting authority transfer...",failure:"Authority transfer failed.",run:()=>$R(l,o)},"publish-release-live":{busy:"Publishing release record...",failure:"Release publish failed.",run:()=>FR(o)},"revoke-role-entry":{busy:"Revoking delegated role...",failure:"Role revoke failed.",run:()=>Gp(l,o)}}[i],$e(s.busy),ce(),await s.run(),$e(""),ce()}catch(o){$e(""),Sr(o.message||s?.failure||"Protocol action failed."),ce()}})();return}});function dm(r){let e=r.dataset.scope,t=r.dataset.field;if(!e||!t)return;let n=r.type==="checkbox"?r.checked:r.value;e==="wizard"&&(x.wizard[t]=n),e==="settings"&&(x.settings[t]=n),ze()}document.addEventListener("input",r=>{r.target.matches("[data-scope][data-field]")&&dm(r.target)});document.addEventListener("change",r=>{r.target.matches("[data-scope][data-field]")&&dm(r.target)});window.addEventListener("hashchange",ce);window.addEventListener("DOMContentLoaded",async()=>{if(await BR(),!window.location.hash){Ur("landing");return}ce()});})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@solana/buffer-layout/lib/Layout.js:
  (**
   * Support for translating between Uint8Array instances and JavaScript
   * native types.
   *
   * {@link module:Layout~Layout|Layout} is the basis of a class
   * hierarchy that associates property names with sequences of encoded
   * bytes.
   *
   * Layouts are supported for these scalar (numeric) types:
   * * {@link module:Layout~UInt|Unsigned integers in little-endian
   *   format} with {@link module:Layout.u8|8-bit}, {@link
   *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
   *   {@link module:Layout.u32|32-bit}, {@link
   *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
   *   representation ranges;
   * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
   *   format} with {@link module:Layout.u16be|16-bit}, {@link
   *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
   *   {@link module:Layout.u40be|40-bit}, and {@link
   *   module:Layout.u48be|48-bit} representation ranges;
   * * {@link module:Layout~Int|Signed integers in little-endian
   *   format} with {@link module:Layout.s8|8-bit}, {@link
   *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
   *   {@link module:Layout.s32|32-bit}, {@link
   *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
   *   representation ranges;
   * * {@link module:Layout~IntBE|Signed integers in big-endian format}
   *   with {@link module:Layout.s16be|16-bit}, {@link
   *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
   *   {@link module:Layout.s40be|40-bit}, and {@link
   *   module:Layout.s48be|48-bit} representation ranges;
   * * 64-bit integral values that decode to an exact (if magnitude is
   *   less than 2^53) or nearby integral Number in {@link
   *   module:Layout.nu64|unsigned little-endian}, {@link
   *   module:Layout.nu64be|unsigned big-endian}, {@link
   *   module:Layout.ns64|signed little-endian}, and {@link
   *   module:Layout.ns64be|unsigned big-endian} encodings;
   * * 32-bit floating point values with {@link
   *   module:Layout.f32|little-endian} and {@link
   *   module:Layout.f32be|big-endian} representations;
   * * 64-bit floating point values with {@link
   *   module:Layout.f64|little-endian} and {@link
   *   module:Layout.f64be|big-endian} representations;
   * * {@link module:Layout.const|Constants} that take no space in the
   *   encoded expression.
   *
   * and for these aggregate types:
   * * {@link module:Layout.seq|Sequence}s of instances of a {@link
   *   module:Layout~Layout|Layout}, with JavaScript representation as
   *   an Array and constant or data-dependent {@link
   *   module:Layout~Sequence#count|length};
   * * {@link module:Layout.struct|Structure}s that aggregate a
   *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
   *   instances, with JavaScript representation as an Object;
   * * {@link module:Layout.union|Union}s that support multiple {@link
   *   module:Layout~VariantLayout|variant layouts} over a fixed
   *   (padded) or variable (not padded) span of bytes, using an
   *   unsigned integer at the start of the data or a separate {@link
   *   module:Layout.unionLayoutDiscriminator|layout element} to
   *   determine which layout to use when interpreting the buffer
   *   contents;
   * * {@link module:Layout.bits|BitStructure}s that contain a sequence
   *   of individual {@link
   *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
   *   16, 24, or 32-bit unsigned integer starting at the least- or
   *   most-significant bit;
   * * {@link module:Layout.cstr|C strings} of varying length;
   * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
   *   module:Layout~Blob#length|length} raw data.
   *
   * All {@link module:Layout~Layout|Layout} instances are immutable
   * after construction, to prevent internal state from becoming
   * inconsistent.
   *
   * @local Layout
   * @local ExternalLayout
   * @local GreedyCount
   * @local OffsetLayout
   * @local UInt
   * @local UIntBE
   * @local Int
   * @local IntBE
   * @local NearUInt64
   * @local NearUInt64BE
   * @local NearInt64
   * @local NearInt64BE
   * @local Float
   * @local FloatBE
   * @local Double
   * @local DoubleBE
   * @local Sequence
   * @local Structure
   * @local UnionDiscriminator
   * @local UnionLayoutDiscriminator
   * @local Union
   * @local VariantLayout
   * @local BitStructure
   * @local BitField
   * @local Boolean
   * @local Blob
   * @local CString
   * @local Constant
   * @local bindConstructorLayout
   * @module Layout
   * @license MIT
   * @author Peter A. Bigot
   * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
   *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/utils.js:
@noble/curves/esm/abstract/modular.js:
@noble/curves/esm/abstract/curve.js:
@noble/curves/esm/abstract/edwards.js:
@noble/curves/esm/ed25519.js:
@noble/curves/esm/abstract/weierstrass.js:
@noble/curves/esm/_shortw_utils.js:
@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=app.js.map
