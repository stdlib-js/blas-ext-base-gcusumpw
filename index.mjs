// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";var t=e;var n=function r(e,n,s,i,a,o,d,f){var l,m,u,p,v;if(e<=0)return o;if(l=a,m=f,e<=128){for(u=0,v=0;v<e;v++)u+=s[l],o[m]=n+u,l+=i,m+=d;return o}return r(p=t(e/2),n,s,i,l,o,d,m),r(e-p,o[m+=(p-1)*d],s,i,l+p*i,o,d,m+d),o},s=n;var i=function(r,e,t,n,i,a){return r<=0?i:s(r,e,t,n,n<0?(1-r)*n:0,i,a,a<0?(1-r)*a:0)},a=n;r(i,"ndarray",a);var o=i;export{o as default,a as ndarray};
//# sourceMappingURL=index.mjs.map
