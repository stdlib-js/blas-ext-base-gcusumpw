"use strict";var x=function(a,v){return function(){try{return v||a((v={exports:{}}).exports,v),v.exports}catch(c){throw (v=0, c)}};};var I=x(function(M,E){
var k=require('@stdlib/math-base-special-floor/dist'),R=128;function O(a,v,c,u,i,r,o,p){var q,e,s,l,t,n,f,b,g,w;if(q=c.data,e=r.data,s=c.accessors[0],l=r.accessors[0],t=r.accessors[1],n=i,f=p,a<=R){for(b=s(q,n),t(e,f,v+b),n+=u,f+=o,w=1;w<a;w++)b+=s(q,n),t(e,f,v+b),n+=u,f+=o;return r}return g=k(a/2),O(g,v,c,u,n,r,o,f),f+=(g-1)*o,O(a-g,l(e,f),c,u,n+g*u,r,o,f+o),r}E.exports=O
});var C=x(function(Q,L){
var K=require('@stdlib/array-base-arraylike2object/dist'),h=require('@stdlib/math-base-special-floor/dist'),z=I(),A=128;function B(a,v,c,u,i,r,o,p){var q,e,s,l,t,n,f;if(a<=0)return r;if(s=K(c),l=K(r),s.accessorProtocol||l.accessorProtocol)return z(a,v,s,u,i,l,o,p),r;if(q=i,e=p,a<=A){for(t=c[q],r[e]=v+t,q+=u,e+=o,f=1;f<a;f++)t+=c[q],r[e]=v+t,q+=u,e+=o;return r}return n=h(a/2),B(n,v,c,u,q,r,o,e),e+=(n-1)*o,B(a-n,r[e],c,u,q+n*u,r,o,e+o),r}L.exports=B
});var Z=x(function(T,S){
var P=require('@stdlib/strided-base-stride2offset/dist'),D=C();function F(a,v,c,u,i,r){var o=P(a,u),p=P(a,r);return D(a,v,c,u,o,i,r,p)}S.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=Z(),H=C();G(j,"ndarray",H);module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
