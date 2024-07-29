// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var I,T=Object.prototype,k=T.toString,N=T.__defineGetter__,V=T.__defineSetter__,P=T.__lookupGetter__,G=T.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=I;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var e,t,n;if(null==r)return R.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof tr?tr:null,or="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(rr)return rr;if(er)return er;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=ir.document&&ir.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return sr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var yr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function vr(r){return"function"===yr(r)}function dr(r){return"number"==typeof r}var gr=Number,br=gr.prototype.toString;var wr=B();function hr(r){return"object"==typeof r&&(r instanceof gr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function mr(r){return dr(r)||hr(r)}$(mr,"isPrimitive",dr),$(mr,"isObject",hr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=vr(Object.getPrototypeOf)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=Ar;var Sr=Object.prototype;function Ur(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(e=function(r){return null==r?null:(r=_r(r),Or(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&vr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Sr||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function xr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!vr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(e))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Ur(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;if(a)return{done:!0};if((t=r.next()).done)return a=!0,t;return{value:dr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&vr(r[jr])&&$(o,jr,(function(){return xr(r[jr](),e,n)})),o}var Fr="function"==typeof Uint32Array;var Ir="function"==typeof Uint32Array?Uint32Array:null;var Tr,kr="function"==typeof Uint32Array?Uint32Array:void 0;Tr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Fr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Nr=Tr,Vr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var Gr,Lr="function"==typeof Float64Array?Float64Array:void 0;Gr=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr([1,3.14,-3.14,NaN]),t=e,r=(Vr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r=Gr,Cr="function"==typeof Uint8Array;var Hr="function"==typeof Uint8Array?Uint8Array:null;var Wr,Br="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr(e=[1,3.14,-3.14,256,257]),t=e,r=(Cr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr=Wr,Mr="function"==typeof Uint16Array;var Zr="function"==typeof Uint16Array?Uint16Array:null;var Xr,Yr="function"==typeof Uint16Array?Uint16Array:void 0;Xr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Mr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr,qr={uint16:Xr,uint8:Rr};(zr=new qr.uint16(1))[0]=4660;var Dr=52===new qr.uint8(zr.buffer)[0],Jr=!0===Dr?1:0,Kr=new $r(1),Qr=new Nr(Kr.buffer);function re(r){return Kr[0]=r,Qr[Jr]}function ee(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var te=-.16666666666666632,ne=.00833333333332249,oe=-.0001984126982985795,ie=27557313707070068e-22,ae=-2.5050760253406863e-8,ue=1.58969099521155e-10;function ce(r,e){var t,n,o;return t=ne+(o=r*r)*(oe+o*ie)+o*(o*o)*(ae+o*ue),n=o*r,0===e?r+n*(te+o*t):r-(o*(.5*e-n*t)-e-n*te)}var fe,le,se=2147483647,pe=2146435072,ye=1048575,ve=!0===Dr?0:1,de=new $r(1),ge=new Nr(de.buffer);!0===Dr?(fe=1,le=0):(fe=0,le=1);var be={HIGH:fe,LOW:le},we=new $r(1),he=new Nr(we.buffer),me=be.HIGH,je=be.LOW;function Ae(r,e){return he[me]=r,he[je]=e,we[0]}var _e=Math.floor,Ee=Number.POSITIVE_INFINITY,Oe=gr.NEGATIVE_INFINITY,Se=1023,Ue=1023,xe=-1023,Fe=-1074;function Ie(r){return r!=r}function Te(r){return r===Ee||r===Oe}var ke,Ne,Ve=2147483648;!0===Dr?(ke=1,Ne=0):(ke=0,Ne=1);var Pe={HIGH:ke,LOW:Ne},Ge=new $r(1),Le=new Nr(Ge.buffer),$e=Pe.HIGH,Ce=Pe.LOW;function He(r,e,t,n){return Ge[0]=r,e[n]=Le[$e],e[n+t]=Le[Ce],e}function We(r){return He(r,[0,0],1,0)}$(We,"assign",He);var Be=[0,0];var Re=22250738585072014e-324;var Me=4503599627370496;function Ze(r,e,t,n){return Ie(r)||Te(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Re?(e[n]=r*Me,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Ze(r,[0,0],1,0)}),"assign",Ze);var Xe=2220446049250313e-31,Ye=2148532223,ze=[0,0],qe=[0,0];function De(r,e){var t,n,o,i,a,u;return 0===e||0===r||Ie(r)||Te(r)?r:(Ze(r,ze,1,0),r=ze[0],e+=ze[1],e+=function(r){var e=re(r);return(e=(e&pe)>>>20)-Se|0}(r),e<Fe?(o=0,i=r,We.assign(o,Be,1,0),a=Be[0],a&=se,u=re(i),Ae(a|=u&=Ve,Be[1])):e>Ue?r<0?Oe:Ee:(e<=xe?(e+=52,n=Xe):n=1,We.assign(r,qe,1,0),t=qe[0],t&=Ye,n*Ae(t|=e+Se<<20,qe[1])))}function Je(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Ke=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Qe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],rt=16777216,et=5.960464477539063e-8,tt=Je(20),nt=Je(20),ot=Je(20),it=Je(20);function at(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=et*b|0,it[y]=b-rt*l|0,b=n[g-1]+l,g-=1;if(b=De(b,o),b-=8*_e(.125*b),b-=d=0|b,s=0,o>0?(d+=y=it[t-1]>>24-o,it[t-1]-=y<<24-o,s=it[t-1]>>23-o):0===o?s=it[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=it[y],0===f?0!==g&&(f=1,it[y]=16777216-g):it[y]=16777215-g;if(o>0)switch(o){case 1:it[t-1]&=8388607;break;case 2:it[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=De(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=it[y];if(0===g){for(v=1;0===it[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=Ke[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return at(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===it[t];)t-=1,o-=24;else(b=De(b,-o))>=rt?(l=et*b|0,it[t]=b-rt*l|0,o+=24,it[t+=1]=l):it[t]=0|b;for(l=De(1,o),y=t;y>=0;y--)n[y]=l*it[y],l*=et;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=Qe[v]*n[y+v];ot[t-y]=l}for(l=0,y=t;y>=0;y--)l+=ot[y];for(e[0]=0===s?l:-l,l=ot[0]-l,y=1;y<=t;y++)l+=ot[y];return e[1]=0===s?l:-l,7&d}function ut(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)tt[c]=f<0?0:Ke[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*tt[a+(c-f)];nt[c]=o}return 4,at(r,e,4,nt,u,4,i,a,tt)}var ct=Math.round,ft=.6366197723675814,lt=1.5707963267341256,st=6077100506506192e-26,pt=6077100506303966e-26,yt=20222662487959506e-37,vt=20222662487111665e-37,dt=84784276603689e-45,gt=2047;function bt(r,e,t){var n,o,i,a,u;return i=r-(n=ct(r*ft))*lt,a=n*st,u=e>>20|0,t[0]=i-a,u-(re(t[0])>>20&gt)>16&&(a=n*yt-((o=i)-(i=o-(a=n*pt))-a),t[0]=i-a,u-(re(t[0])>>20&gt)>49&&(a=n*dt-((o=i)-(i=o-(a=n*vt))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var wt=0,ht=16777216,mt=1.5707963267341256,jt=6077100506506192e-26,At=2*jt,_t=3*jt,Et=4*jt,Ot=598523,St=1072243195,Ut=1073928572,xt=1074752122,Ft=1074977148,It=1075183036,Tt=1075388923,kt=1075594811,Nt=1094263291,Vt=[0,0,0],Pt=[0,0];function Gt(r,e){var t,n,o,i,a,u,c;if((o=re(r)&se|0)<=St)return e[0]=r,e[1]=0,0;if(o<=xt)return(o&ye)===Ot?bt(r,o,e):o<=Ut?r>0?(c=r-mt,e[0]=c-jt,e[1]=c-e[0]-jt,1):(c=r+mt,e[0]=c+jt,e[1]=c-e[0]+jt,-1):r>0?(c=r-2*mt,e[0]=c-At,e[1]=c-e[0]-At,2):(c=r+2*mt,e[0]=c+At,e[1]=c-e[0]+At,-2);if(o<=kt)return o<=It?o===Ft?bt(r,o,e):r>0?(c=r-3*mt,e[0]=c-_t,e[1]=c-e[0]-_t,3):(c=r+3*mt,e[0]=c+_t,e[1]=c-e[0]+_t,-3):o===Tt?bt(r,o,e):r>0?(c=r-4*mt,e[0]=c-Et,e[1]=c-e[0]-Et,4):(c=r+4*mt,e[0]=c+Et,e[1]=c-e[0]+Et,-4);if(o<Nt)return bt(r,o,e);if(o>=pe)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return de[0]=r,ge[ve]}(r),c=Ae(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Vt[a]=0|c,c=(c-Vt[a])*ht;for(Vt[2]=c,i=3;Vt[i-1]===wt;)i-=1;return u=ut(Vt,Pt,n,i),r<0?(e[0]=-Pt[0],e[1]=-Pt[1],-u):(e[0]=Pt[0],e[1]=Pt[1],u)}var Lt=[0,0],$t=2147483647,Ct=1072243195,Ht=1044381696,Wt=2146435072;var Bt=.7853981633974483;function Rt(r){var e;return r<-Bt||r>Bt?function(r){var e;if(e=re(r),(e&=$t)<=Ct)return e<Ht?1:ee(r,0);if(e>=Wt)return NaN;switch(3&Gt(r,Lt)){case 0:return ee(Lt[0],Lt[1]);case 1:return-ce(Lt[0],Lt[1]);case 2:return-ee(Lt[0],Lt[1]);default:return ce(Lt[0],Lt[1])}}(r)-1:-.5*(e=r*r)+e*e*function(r){return 0===r?.041666666666666664:.041666666666666664+r*(r*(2480158730157055e-20+r*(r*(2.087675428708152e-9+r*(4737750796424621e-29*r-1147028484342536e-26))-2.755731921499979e-7))-.0013888888888888872)}(e)}function Mt(r){return xr(r,Rt)}export{Mt as default};
//# sourceMappingURL=mod.js.map
