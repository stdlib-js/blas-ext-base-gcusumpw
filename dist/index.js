"use strict";var x=function(a,o){return function(){return o||a((o={exports:{}}).exports,o),o.exports}};var I=x(function(M,E){
var k=require('@stdlib/math-base-special-floor/dist'),R=128;function O(a,o,f,u,i,r,v,p){var q,c,s,l,t,e,n,b,g,w;if(q=f.data,c=r.data,s=f.accessors[0],l=r.accessors[0],t=r.accessors[1],e=i,n=p,a<=R){for(b=s(q,e),t(c,n,o+b),e+=u,n+=v,w=1;w<a;w++)b+=s(q,e),t(c,n,o+b),e+=u,n+=v;return r}return g=k(a/2),O(g,o,f,u,e,r,v,n),n+=(g-1)*v,O(a-g,l(c,n),f,u,e+g*u,r,v,n+v),r}E.exports=O
});var C=x(function(Q,L){
var K=require('@stdlib/array-base-arraylike2object/dist'),h=require('@stdlib/math-base-special-floor/dist'),z=I(),A=128;function B(a,o,f,u,i,r,v,p){var q,c,s,l,t,e,n;if(a<=0)return r;if(s=K(f),l=K(r),s.accessorProtocol||l.accessorProtocol)return z(a,o,s,u,i,l,v,p),r;if(q=i,c=p,a<=A){for(t=f[q],r[c]=o+t,q+=u,c+=v,n=1;n<a;n++)t+=f[q],r[c]=o+t,q+=u,c+=v;return r}return e=h(a/2),B(e,o,f,u,q,r,v,c),c+=(e-1)*v,B(a-e,r[c],f,u,q+e*u,r,v,c+v),r}L.exports=B
});var Z=x(function(T,S){
var P=require('@stdlib/strided-base-stride2offset/dist'),D=C();function F(a,o,f,u,i,r){var v=P(a,u),p=P(a,r);return D(a,o,f,u,v,i,r,p)}S.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=Z(),H=C();G(j,"ndarray",H);module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
