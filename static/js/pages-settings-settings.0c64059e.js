(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-settings-settings"],{"02d5":function(t,n,i){"use strict";var e=i("449b"),o=i.n(e);o.a},2221:function(t,n,i){"use strict";i("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{notificationsEnabled:!0,shareInfoEnabled:!1,appVersion:"1.0.0"}},methods:{changePassword:function(){uni.showToast({title:"修改密码功能待实现",icon:"none"})},toggleNotifications:function(t){this.notificationsEnabled=t.detail.value},toggleShareInfo:function(t){this.shareInfoEnabled=t.detail.value},showAbout:function(){uni.showModal({title:"关于我们",content:"这是一个时尚服饰购物应用，致力于为用户提供优质的购物体验。",showCancel:!1})},logout:function(){uni.showModal({title:"提示",content:"确定要退出登录吗？",success:function(t){t.confirm&&uni.reLaunch({url:"/pages/index/index"})}})}}};n.default=e},"449b":function(t,n,i){var e=i("d005");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("967d").default;o("6511f450",e,!0,{sourceMap:!1,shadowMode:!1})},6379:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"section"},[i("v-uni-view",{staticClass:"section-title"},[t._v("账户设置")]),i("v-uni-view",{staticClass:"setting-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changePassword.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("修改密码")]),i("ion-icon",{attrs:{name:"chevron-forward-outline"}})],1),i("v-uni-view",{staticClass:"setting-item"},[i("v-uni-text",[t._v("消息通知")]),i("v-uni-switch",{attrs:{checked:t.notificationsEnabled,color:"#007aff"},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.toggleNotifications.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"section"},[i("v-uni-view",{staticClass:"section-title"},[t._v("隐私设置")]),i("v-uni-view",{staticClass:"setting-item"},[i("v-uni-text",[t._v("允许分享我的购物信息")]),i("v-uni-switch",{attrs:{checked:t.shareInfoEnabled,color:"#007aff"},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.toggleShareInfo.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"section"},[i("v-uni-view",{staticClass:"section-title"},[t._v("关于")]),i("v-uni-view",{staticClass:"setting-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showAbout.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("关于我们")]),i("ion-icon",{attrs:{name:"chevron-forward-outline"}})],1),i("v-uni-view",{staticClass:"setting-item"},[i("v-uni-text",[t._v("当前版本")]),i("v-uni-text",{staticClass:"version-text"},[t._v(t._s(t.appVersion))])],1)],1),i("v-uni-button",{staticClass:"logout-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.logout.apply(void 0,arguments)}}},[i("ion-icon",{attrs:{name:"log-out-outline"}}),t._v("退出登录")],1)],1)},o=[]},"707e":function(t,n,i){"use strict";i.r(n);var e=i("6379"),o=i("7d41");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("02d5");var s=i("828b"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"8d3696d2",null,!1,e["a"],void 0);n["default"]=c.exports},"7d41":function(t,n,i){"use strict";i.r(n);var e=i("2221"),o=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},d005:function(t,n,i){var e=i("c86c");n=e(!1),n.push([t.i,".container[data-v-8d3696d2]{padding:%?20?%;background-color:#f8f9fa;min-height:100vh}.section[data-v-8d3696d2]{margin-bottom:%?40?%;background-color:#fff;border-radius:%?20?%;overflow:hidden;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.1)}.section-title[data-v-8d3696d2]{font-size:%?40?%;font-weight:700;padding:%?20?%;background-color:#f8f8f8}.setting-item[data-v-8d3696d2]{display:flex;justify-content:space-between;align-items:center;padding:%?20?% %?20?%;border-bottom:%?1?% solid #f0f0f0}.setting-item[data-v-8d3696d2]:last-child{border-bottom:none}.setting-item uni-text[data-v-8d3696d2]{font-size:%?30?%;color:#333}.setting-item ion-icon[data-v-8d3696d2]{font-size:%?40?%;color:#999}.version-text[data-v-8d3696d2]{font-size:%?28?%;color:#999}.logout-btn[data-v-8d3696d2]{margin-top:%?60?%;background-color:#ff3b30;color:#fff;border:none;border-radius:%?50?%;padding:%?20?% 0;font-size:%?32?%;display:flex;align-items:center;justify-content:center}.logout-btn ion-icon[data-v-8d3696d2]{margin-right:%?10?%;font-size:%?40?%}",""]),t.exports=n}}]);