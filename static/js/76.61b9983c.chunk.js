"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(r,e,t){t.r(e),t.d(e,{default:function(){return f}});var n=t(861),a=t(439),c=t(687),i=t.n(c),s=t(791),o=t(689),u="Cast_imageGallery__bWhAr",h="Cast_actorList__0r4HV",p="Cast_actorImg__T6qL2",l="Cast_actorDiv__6PRFi",I=t(422),d=t(184);var f=function(){var r=(0,s.useState)([]),e=(0,a.Z)(r,2),t=e[0],c=e[1],f=(0,o.UO)().movieId;return(0,s.useEffect)((function(){function r(){return r=(0,n.Z)(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,I.y)(f);case 2:e=r.sent,c(e);case 4:case"end":return r.stop()}}),r)}))),r.apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[f]),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"The cast of this film"}),(0,d.jsx)("ul",{className:u,children:t.map((function(r){return(0,d.jsx)("li",{className:h,children:(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500/".concat(r.profile_path),alt:"",width:170,height:255}),(0,d.jsx)("p",{children:r.name}),(0,d.jsxs)("p",{children:["Character: ",r.character]})]})},r.id)}))})]})}},422:function(r,e,t){t.d(e,{Hb:function(){return s},KL:function(){return f},Ny:function(){return u},rQ:function(){return I},y:function(){return p}});var n=t(861),a=t(687),c=t.n(a),i=t(340);function s(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function u(r){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function p(r){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function I(r){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function f(r){return J.apply(this,arguments)}function J(){return(J=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",{params:{query:e},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=76.61b9983c.chunk.js.map