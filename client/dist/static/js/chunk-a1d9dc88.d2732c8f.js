(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1d9dc88"],{"14c9":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return n}));var o=r("b775");function c(t){return Object(o["a"])({url:"/spider/create_task",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/spider/search_task",method:"post",data:t})}function n(t){return Object(o["a"])({url:"/spider/search_tieba_task_result",method:"post",data:t})}},"89fc":function(t,e,r){"use strict";var o=r("dc47"),c=r.n(o);c.a},"93ef":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{prop:"desc",label:"任务描述"}},[r("el-input",{model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),r("el-form-item",{attrs:{prop:"topic_id",label:"贴吧帖子id"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.topic_id,callback:function(e){t.$set(t.form,"topic_id",t._n(e))},expression:"form.topic_id"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("创建任务")]),r("el-button",[t._v("取消")])],1)],1)],1)},c=[],i=r("14c9"),n={data:function(){return{form:{topic_id:"",start_page:"",end_page:"",desc:""},rules:{topic_id:[{required:!0,message:"帖子id不能为空"},{type:"number",message:"帖子id必须为数字值"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(t){var r={topic_id:e.form.topic_id,desc:e.form.desc};Object(i["a"])(r).then((function(t){var r=e.$createElement;e.$notify({title:"任务创建成功",message:r("i",{style:"color: teal"},"爬虫任务创建成功"),duration:8e3})})).catch((function(t){console.log(t)}))}else console.log("error submit")}))}}},s=n,a=(r("89fc"),r("2877")),u=Object(a["a"])(s,o,c,!1,null,"557df181",null);e["default"]=u.exports},dc47:function(t,e,r){}}]);