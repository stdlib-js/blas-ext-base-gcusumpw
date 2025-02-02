"use strict";var g=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var x=g(function(Z,l){
var C=require('@stdlib/math-base-special-floor/dist'),E=128;function s(r,u,o,e,f,a,n,c){var i,v,q,t,p;if(r<=0)return a;if(i=f,v=c,r<=E){for(q=0,p=0;p<r;p++)q+=o[i],a[v]=u+q,i+=e,v+=n;return a}return t=C(r/2),s(t,u,o,e,i,a,n,v),v+=(t-1)*n,s(r-t,a[v],o,e,i+t*e,a,n,v+n),a}l.exports=s
});var O=g(function(b,w){
var m=require('@stdlib/strided-base-stride2offset/dist'),I=x();function K(r,u,o,e,f,a){var n=m(r,e),c=m(r,a);return I(r,u,o,e,n,f,a,c)}w.exports=K
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=O(),R=x();L(B,"ndarray",R);module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
