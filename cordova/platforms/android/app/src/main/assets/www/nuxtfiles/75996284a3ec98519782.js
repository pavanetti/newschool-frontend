(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{278:function(t,e,r){var content=r(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("8a50623e",content,!0,{sourceMap:!1})},290:function(t,e,r){"use strict";var o={props:["title","backPage"],methods:{comeBackPage:function(){this.$router.back()}}},n=(r(293),r(39)),c=r(43),l=r.n(c),d=r(272),_=r(268),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"head__bar"}},[t.backPage?r("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[r("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),r("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"3f62119b",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:_.a})},293:function(t,e,r){"use strict";var o=r(278);r.n(o).a},294:function(t,e,r){(e=r(22)(!1)).push([t.i,".h1__theme[data-v-3f62119b]{font-size:1.4444rem}#head__bar[data-v-3f62119b]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-3f62119b] .btn-back{padding-right:2rem;margin-top:unset!important}[data-v-3f62119b] .btn-back .theme--light.v-icon{color:#60c;font-size:35px}[data-v-3f62119b] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},386:function(t,e,r){var content=r(539);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("3cc09b8e",content,!0,{sourceMap:!1})},538:function(t,e,r){"use strict";var o=r(386);r.n(o).a},539:function(t,e,r){(e=r(22)(!1)).push([t.i,"#page[data-v-8b909788]{height:100%}h1[data-v-8b909788]{font-size:.8rem;font-weight:600;width:55%}.card[data-v-8b909788]{margin:1.3rem;padding:.9rem;background:#fff;box-shadow:0 12px 20px 0 rgba(0,0,0,.14902);border-radius:5px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.card[data-v-8b909788],.header__info[data-v-8b909788]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.header__info[data-v-8b909788]{-webkit-box-align:start;align-items:flex-start}[data-v-8b909788] .v-btn--icon.v-size--default{height:unset;color:#60c}.wrapper__without__courses[data-v-8b909788]{opacity:.5;text-align:center}.wrapper__without__courses .text__without__courses[data-v-8b909788]{color:#60c;font-size:3.5em}.full__width[data-v-8b909788]{width:100%}.full__height[data-v-8b909788]{height:90%}.text__success[data-v-8b909788]{font-weight:400;color:#35de63;font-size:13px}.progress-linear[data-v-8b909788]{height:6px;border-radius:50px}#value__progress[data-v-8b909788]{color:#a9a9a9;padding-bottom:5px}",""]),t.exports=e},624:function(t,e,r){"use strict";r.r(e);r(130),r(31);var o=r(290),n=r(128),c={data:function(){return{loading:!0}},methods:{continueCourse:function(t){var e=this;this.loading=!0,n.a.getAll("".concat("api/v1/course-taken","/").concat(this.user.id,"/").concat(t.id)).then((function(r){e.$store.commit("courses/setCurrent",r.data.course),delete r.data.user,delete r.data.course,e.$store.commit("courses/setCurrentState",r.data),n.a.post("api/v1/course-taken/advance-on-course",{user:e.user.id,course:t.id}).then((function(r){e.$store.commit("courses/setCurrentLesson",r.data.currentLesson),e.$store.commit("courses/setCurrentPart",r.data.currentPart),e.$store.commit("courses/setCurrentTest",r.data.currentTest),$nuxt._router.push("/aluno/curso/".concat(t.id,"/aula/parte"))}))}))},goToCourse:function(t){if("COMPLETED"===t.status){var e=t.course.slug?t.course.slug:this.convertToSlug(t.course.title);$nuxt._router.push("/aluno/curso/".concat(e))}else this.continueCourse(t.course)},convertToSlug:function(t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",i=0,r=e.length;i<r;i++)t=t.replace(new RegExp(e.charAt(i),"g"),"aaaaaeeeeeiiiiooooouuuunc------".charAt(i));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},computed:{courses:function(){return this.$store.state.courses.list},user:function(){return this.$store.state.user.data}},mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),400)},components:{HeaderBar:o.a},asyncData:function(t){var e=t.store;t.data,t.params,t.$axios;return n.a.getAll("".concat("api/v1/course-taken/user/").concat(e.state.user.data.id)).then((function(t){return e.commit("courses/set",t.data)}))}},l=(r(538),r(39)),d=r(43),_=r.n(d),v=r(272),h=r(302),f=r(593),m=r(268),w=r(117),x=r(304),k=r(303),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{id:"page"}},[r("HeaderBar",{attrs:{title:"Meus Cursos",backPage:!0}}),t._v(" "),t.courses.length?r("div",t._l(t.courses,(function(e){return r("div",{key:e.course.id,staticClass:"card",on:{click:function(r){return t.goToCourse(e)}}},[r("div",{staticClass:"header__info"},[r("h1",[t._v(t._s(e.course.title))]),t._v(" "),"TAKEN"===e.status?r("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:function(r){return t.continueCourse(e.course)}}},[t._v("\n            CONTINUAR\n            "),r("v-icon",[t._v("mdi-arrow-right")])],1):r("p",{staticClass:"text__success"},[t._v("CONCLUÍDO")])],1),t._v(" "),r("div",{staticClass:"progress"},[r("p",{attrs:{id:"value__progress"}},[t._v(t._s(e.completition)+"%")]),t._v(" "),r("v-progress-linear",{attrs:{value:e.completition,height:"7",rounded:"true"}})],1)])})),0):r("div",{staticClass:"full__height"},[r("v-container",{staticClass:"wrapper__without__courses full__height"},[r("v-row",{staticClass:"full__height",attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"full__width text__without__courses"},[t._v("VIXE :/")]),t._v(" "),r("p",{staticClass:"full__width"},[t._v("Você não começou nenhum curso.")])])],1)],1)],1)],1),t._v(" "),t.loading?r("div",[r("div",{staticClass:"container-spinner"},[r("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):t._e()])}),[],!1,null,"8b909788",null);e.default=component.exports;_()(component,{VBtn:v.a,VCol:h.a,VContainer:f.a,VIcon:m.a,VProgressCircular:w.a,VProgressLinear:x.a,VRow:k.a})}}]);