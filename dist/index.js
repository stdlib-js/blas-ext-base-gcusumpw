"use strict";var w=function(a,o){return function(){return o||a((o={exports:{}}).exports,o),o.exports}};var I=w(function(J,E){
var k=require('@stdlib/math-base-special-floor/dist'),m=128;function O(a,o,u,e,f,r,v,i){var t,c,q,p,l,n,s,x,g,b;if(t=u.data,c=r.data,q=u.accessors[0],p=r.accessors[0],l=r.accessors[1],n=f,s=i,a<=m){for(x=0,b=0;b<a;b++)x+=q(t,n),l(c,s,o+x),n+=e,s+=v;return r}return g=k(a/2),O(g,o,u,e,n,r,v,s),s+=(g-1)*v,O(a-g,p(c,s),u,e,n+g*e,r,v,s+v),r}E.exports=O
});var C=w(function(M,L){
var K=require('@stdlib/array-base-arraylike2object/dist'),R=require('@stdlib/math-base-special-floor/dist'),h=I(),z=128;function B(a,o,u,e,f,r,v,i){var t,c,q,p,l,n,s;if(a<=0)return r;if(q=K(u),p=K(r),q.accessorProtocol||p.accessorProtocol)return h(a,o,q,e,f,p,v,i),r;if(t=f,c=i,a<=z){for(l=0,s=0;s<a;s++)l+=u[t],r[c]=o+l,t+=e,c+=v;return r}return n=R(a/2),B(n,o,u,e,t,r,v,c),c+=(n-1)*v,B(a-n,r[c],u,e,t+n*e,r,v,c+v),r}L.exports=B
});var Z=w(function(Q,S){
var P=require('@stdlib/strided-base-stride2offset/dist'),A=C();function D(a,o,u,e,f,r){var v=P(a,e),i=P(a,r);return A(a,o,u,e,v,f,r,i)}S.exports=D
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=Z(),G=C();F(j,"ndarray",G);module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
