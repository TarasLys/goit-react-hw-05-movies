"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[145],{126:function(e,r,t){t(791);var n=t(87),a=t(124),i=t(184);r.Z=function(e){var r=e.movies,t=e.location;return(0,i.jsx)("ul",{className:a.Z.listMovies,children:r.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(n.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title||e.name})},e.id)}))})}},145:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(861),a=t(439),i=t(687),c=t.n(i),o=t(791),s=t(87),u=t(689),h=t(124),l=t(422),p=t(126),f=t(184);var I=function(){var e=(0,s.lr)(),r=(0,a.Z)(e,2),t=r[0],n=r[1],i=t.get("query")||"";return(0,f.jsxs)("form",{className:h.Z.formMovies,onSubmit:function(e){e.preventDefault();var r=e.target.elements.query.value;n({query:r}),e.currentTarget.reset()},children:[(0,f.jsx)("input",{type:"text",name:"query",placeholder:"Movie search",defaultValue:i}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})};var v=function(){var e=(0,s.lr)(),r=(0,a.Z)(e,1)[0],t=(0,o.useState)([]),i=(0,a.Z)(t,2),v=i[0],d=i[1],m=r.get("query")||"";(0,o.useEffect)((function(){if(m){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.KL)(m);case 2:r=e.sent,d(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[m]);var J=(0,u.TH)();return(0,f.jsxs)("div",{className:h.Z.movies,children:[(0,f.jsx)(I,{}),(0,f.jsx)(p.Z,{movies:v,location:J})]})}},422:function(e,r,t){t.d(r,{Hb:function(){return o},KL:function(){return v},Ny:function(){return u},rQ:function(){return f},y:function(){return l}});var n=t(861),a=t(687),i=t.n(a),c=t(340);function o(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(r),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits"),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return I.apply(this,arguments)}function I(){return(I=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews"),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",{params:{query:r},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},124:function(e,r){r.Z={movies:"Movies_movies__TE99a",listMovies:"Movies_listMovies__DwQEU",formMovies:"Movies_formMovies__fcFZE"}}}]);
//# sourceMappingURL=145.eba7a06a.chunk.js.map