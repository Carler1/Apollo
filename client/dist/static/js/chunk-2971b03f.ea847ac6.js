(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2971b03f"],{2017:function(e,o,t){"use strict";var s=t("cafe"),n=t.n(s);n.a},"2aa4":function(e,o,t){},"716f":function(e,o,t){"use strict";var s=t("2aa4"),n=t.n(s);n.a},"9ed6":function(e,o,t){"use strict";t.r(o);var s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("Login Form")])]),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(o){e.$set(e.loginForm,"username",o)},expression:"loginForm.username"}})],1),t("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(o){e.capsTooltip=o},expression:"capsTooltip"}},[t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(o){e.capsTooltip=!1}},nativeOn:{keyup:[function(o){return e.checkCapslock(o)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleLogin(o)}]},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(o){return o.preventDefault(),e.handleLogin(o)}}},[e._v("Login")])],1),t("el-dialog",{attrs:{title:"Or connect with",visible:e.showDialog},on:{"update:visible":function(o){e.showDialog=o}}},[e._v(" Can not be simulated on local, so please combine you own business simulation! ! ! "),t("br"),t("br"),t("br"),t("social-sign")],1)],1)},n=[],r=(t("13d5"),t("b64b"),t("61f7")),a={name:"Login",data:function(){var e=function(e,o,t){Object(r["d"])(o)?t():t(new Error("Please enter the correct user name"))},o=function(e,o,t){o.length<5?t(new Error("The password can not be less than 5 digits")):t()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:o}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var o=e.query;o&&(this.redirect=o.redirect,this.otherQuery=this.getOtherQuery(o))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(e){var o=e.key;this.capsTooltip=o&&1===o.length&&o>="A"&&o<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(o){if(!o)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",{username:e.loginForm.username,password:e.loginForm.password}).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(o,t){return"redirect"!==t&&(o[t]=e[t]),o}),{})}}},i=a,l=(t("2017"),t("716f"),t("2877")),c=Object(l["a"])(i,s,n,!1,null,"444282ed",null);o["default"]=c.exports},cafe:function(e,o,t){}}]);