(function(t){function e(e){for(var r,u,i=e[0],a=e[1],c=e[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},s=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4b71":function(t,e,n){"use strict";n("7322")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-container",[n("router-view")],1)],1)},s=[],u=(n("034f"),n("2877")),i=n("6544"),a=n.n(i),c=n("a523"),l={},f=Object(u["a"])(l,o,s,!1,null,null,null),p=f.exports;a()(f,{VContainer:c["a"]});var v=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h2",[t._v("観る将のための")]),n("h1",[t._v("将棋クイズ")]),n("br"),n("v-btn",{attrs:{to:"/questions/1",color:"#009688",elevation:"4",rounded:"","x-large":""}},[t._v("クイズを解く")])],1)},d=[],m={components:{}},b=m,_=n("8336"),g=Object(u["a"])(b,h,d,!1,null,null,null),w=g.exports;a()(g,{VBtn:_["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.question?n("div",[n("p",{staticClass:"question"},[t._v(" 問題"+t._s(this.$route.params.id)+": "+t._s(t.question.content))]),n("div",{staticClass:"answer"},t._l(t.question.choices,(function(e){return n("p",{key:e.id},[n("v-btn",{staticClass:"choice",on:{click:function(n){return t.judgement(e,t.question)}}},[t._v(t._s(e.content))])],1)})),0),t.isActive?n("div",[t.question.correctAnswer?n("p",[n("v-btn",{staticClass:"correctButton",attrs:{color:"#00bfff",elevation:"4","x-large":""}},[t._v(" 正解! ")])],1):n("p",[n("v-btn",{staticClass:"correctButton",attrs:{color:"#ff6347",elevation:"4","x-large":""}},[t._v(" 不正解! ")])],1),this.$route.params.id<this.numberOfQuestions?n("p",[n("router-link",{staticClass:"nextQuestion",attrs:{tag:"button",to:t.nextQuestion()}},[t._v("次の問題へ")])],1):n("p",[n("router-link",{staticClass:"nextQuestion",attrs:{tag:"button",to:{name:"result",params:{correctCount:this.correctCount,numberOfQuestions:this.numberOfQuestions}}}},[t._v(" 結果ページへ ")])],1)]):t._e()]):n("div",[t._v(" ♻︎リロード中です ")])},C=[],x=n("b85c"),q=n("5530"),y=n("1da1"),j=(n("4e82"),n("a9e3"),n("96cf"),n("2f62")),Q={created:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchQuestions();case 2:t.question=t.getQuestion(t.$route.params.id);case 3:case"end":return e.stop()}}),e)})))()},beforeRouteUpdate:function(t,e,n){var r=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r.question=r.getQuestion(t.params.id),r.isActive=!1,n();case 3:case"end":return e.stop()}}),e)})))()},computed:Object(q["a"])({},Object(j["b"])(["questions"])),data:function(){return{numberOfQuestions:10,quizCount:0,correctCount:0,question:null,isActive:!1}},methods:{fetchQuestions:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchQuestions");case 2:t.shuffleArray(t.questions),n=Object(x["a"])(t.questions);try{for(n.s();!(r=n.n()).done;)o=r.value,o.choices=t.shuffleArray(o.choices)}catch(s){n.e(s)}finally{n.f()}case 5:case"end":return e.stop()}}),e)})))()},shuffleArray:function(t){return t.sort((function(){return Math.random()-.5})),t},getQuestion:function(t){var e=this.questions[t-1];return this.$set(e,"correctAnswer",!1),e},judgement:function(t,e){if(!this.isActive)return this.isActive=!0,t.is_answer?(e.correctAnswer=!0,this.correctCount++,e.correctAnswer):(e.correctAnswer=!1,e.correctAnswer)},nextQuestion:function(){return this.quizCount=Number(this.$route.params.id)+1,{name:"show-question",params:{id:this.quizCount}}}}},k=Q,A=(n("4b71"),Object(u["a"])(k,O,C,!1,null,null,null)),$=A.exports;a()(A,{VBtn:_["a"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result"},[n("h1",[t._v("クイズ結果")]),n("h2",[t._v(t._s(t.correctCount)+"問 / "+t._s(t.numberOfQuestions)+"問 正解 !")]),n("br"),n("v-btn",{attrs:{elevation:"4",outlined:"","x-large":""}},[t._v(t._s(t.rankJudgment()))]),n("br"),n("br"),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"}},[t._v(" Twitterにシェアする ")]),n("br"),n("br"),n("v-btn",{staticClass:"ma-2",attrs:{to:"/",outlined:"",color:"indigo"}},[t._v(" トップページへ戻る ")])],1)},S=[],E={props:["correctCount","numberOfQuestions"],methods:{rankJudgment:function(){return this.correctCount>=8?"観る将三段":this.correctCount>=6?"観る将初段":this.correctCount>=4?"観る将2級":this.correctCount>=2?"観る将4級":this.correctCount<2?"観る将6級":void 0}}},T=E,P=Object(u["a"])(T,R,S,!1,null,null,null),B=P.exports;a()(P,{VBtn:_["a"]}),r["a"].use(v["a"]);var M=[{path:"/",name:"Home",component:w},{path:"/questions/:id",name:"show-question",component:$,params:!0},{path:"/result",name:"result",component:B,props:!0}],z=new v["a"]({routes:M}),J="将棋クイズ";z.afterEach((function(){document.title=J}));var U=z,V=n("bc3a"),H=n.n(V),N=function(){var t=H.a.create({baseURL:"".concat("https://shogi-quiz.herokuapp.com","/v1")});return t};r["a"].use(j["a"]);var F=new j["a"].Store({state:{questions:[]},mutations:{FETCH_QUESTIONS:function(t,e){t.questions=e}},actions:{fetchQuestions:function(t){return Object(y["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,N().get("/questions").then((function(t){n("FETCH_QUESTIONS",t.data)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()}}}),I=n("f309");r["a"].use(I["a"]);var L=new I["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:U,store:F,vuetify:L,render:function(t){return t(p)}}).$mount("#app")},7322:function(t,e,n){},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.2173fc6f.js.map