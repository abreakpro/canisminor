webpackJsonp([16],{KDJc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("zIwb"),r=a.n(n),s=a("vLgD");t.default={namespace:"posts",state:{},reducers:{save:function(e,t){return t.payload.data}},effects:{get:r.a.mark(function e(t,a){var n,c,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.call,c=a.put,o=t.payload,e.next=4,n(function(){return Object(s.a)("/v2/blog/posts/".concat(o))});case 4:return u=e.sent,e.next=7,c({type:"save",payload:u});case 7:case"end":return e.stop()}},e,this)})}}}});