"use strict";var m=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var s=m(function(S,x){
var B=require('@stdlib/math-base-special-floor/dist'),C=128;function l(r,a,i,n,t,u,e,f){var c,v,p,o,q;if(r<=0)return u;if(c=t,v=f,r<=C){for(p=0,q=0;q<r;q++)p+=i[c],u[v]=a+p,c+=n,v+=e;return u}return o=B(r/2),l(o,a,i,n,c,u,e,v),v+=(o-1)*e,l(r-o,u[v],i,n,c+o*n,u,e,v+e),u}x.exports=l
});var w=m(function(Z,g){
var E=s();function I(r,a,i,n,t,u){var e,f;return r<=0?t:(n<0?e=(1-r)*n:e=0,u<0?f=(1-r)*u:f=0,E(r,a,i,n,e,t,u,f))}g.exports=I
});var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=w(),L=s();K(O,"ndarray",L);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
