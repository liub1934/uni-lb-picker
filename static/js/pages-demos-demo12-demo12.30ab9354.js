(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo12-demo12"],{"0982":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return n}));var n={lbPicker:i("0b5b").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"grey-block"}),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-text",{staticClass:"sub-title"},[e._v("非联动选择")]),i("v-uni-view",{staticClass:"item-content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTap("picker2")}}},[i("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value2)))]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-text",{staticClass:"item-label"},[e._v(e._s(e.label2))]),e.label2?e._e():i("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),i("lb-picker",{ref:"picker2",attrs:{mode:"unlinkedSelector",list:e.list1,dataset:{name:"label2"}},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleChange.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.handleConfirm.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),i("v-uni-view",{staticClass:"grey-block"}),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-text",{staticClass:"sub-title"},[e._v("绑定默认值")]),i("v-uni-view",{staticClass:"item-content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTap("picker3")}}},[i("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value3)))]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-text",{staticClass:"item-label"},[e._v(e._s(e.label3))]),e.label3?e._e():i("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),i("lb-picker",{ref:"picker3",attrs:{mode:"unlinkedSelector",list:e.list1,dataset:{name:"label3"}},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleChange.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.handleConfirm.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),i("v-uni-view",{staticClass:"grey-block"}),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-text",{staticClass:"sub-title"},[e._v("扁平化数据非联动选择")]),i("v-uni-view",{staticClass:"item-content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTap("picker4")}}},[i("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value4)))]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),i("lb-picker",{ref:"picker4",attrs:{mode:"unlinkedSelector",list:e.list2},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleChange.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.handleConfirm.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1),i("v-uni-view",{staticClass:"grey-block"}),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-text",{staticClass:"sub-title"},[e._v("扁平化绑定默认值")]),i("v-uni-view",{staticClass:"item-content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTap("picker5")}}},[i("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value5)))]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),i("lb-picker",{ref:"picker5",attrs:{mode:"unlinkedSelector",list:e.list2},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleChange.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.handleConfirm.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1),i("v-uni-view",{staticClass:"grey-block"}),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-text",{staticClass:"sub-title"},[e._v("无数据")]),i("v-uni-view",{staticClass:"item-content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTap("picker6")}}},[i("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value6)))]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),i("lb-picker",{ref:"picker6",attrs:{mode:"unlinkedSelector",list:e.list3},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleChange.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.handleConfirm.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1),i("v-uni-view",{staticClass:"grey-block"})],1)},l=[]},"3cf0":function(e,t,i){var n=i("cf7c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("fe173d88",n,!0,{sourceMap:!1,shadowMode:!1})},4620:function(e,t,i){"use strict";var n=i("3cf0"),a=i.n(n);a.a},a0e4:function(e,t,i){"use strict";i.r(t);var n=i("0982"),a=i("cd64");for(var l in a)"default"!==l&&function(e){i.d(t,e,(function(){return a[e]}))}(l);i("4620");var c,s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2d50bbc3",null,!1,n["a"],c);t["default"]=o.exports},c780:function(e,t,i){"use strict";i("a15b"),i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{value2:[],label2:"",value3:["2","33","222"],label3:"",value4:[],value5:["选项2","选项33","选项222"],value6:[],list1:[[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}],[{label:"选项11",value:"11"},{label:"选项22",value:"22"},{label:"选项33",value:"33"}],[{label:"选项111",value:"111"},{label:"选项222",value:"222"},{label:"选项333",value:"333"}]],list2:[["选项1","选项2","选项3"],["选项11","选项22","选项33"],["选项111","选项222","选项333"]],list3:[]}},onReady:function(){var e=this;this.$nextTick((function(){var t=e.$refs.picker3.getColumnsInfo(e.value3);console.log("根据value获取的信息：",t),e.label3=t.item.map((function(e){return e.label})).join("-")}))},methods:{handleTap:function(e){this.$refs[e].show()},handleChange:function(e){console.log("change::",e)},handleConfirm:function(e){if(console.log("confirm::",e),e){var t=e.dataset.name,i=e.item.map((function(e){return e.label})).join("-");t&&i&&(this[t]=i)}},handleCancel:function(e){console.log("cancel::",e)}}};t.default=n},cd64:function(e,t,i){"use strict";i.r(t);var n=i("c780"),a=i.n(n);for(var l in n)"default"!==l&&function(e){i.d(t,e,(function(){return n[e]}))}(l);t["default"]=a.a},cf7c:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list-item[data-v-2d50bbc3]{padding:10px 15px;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n}.sub-title[data-v-2d50bbc3]{color:#999;font-size:12px}.item-title[data-v-2d50bbc3]{font-size:16px}.item-content[data-v-2d50bbc3]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.item-left[data-v-2d50bbc3]{font-size:16px;text-align:left}.item-value[data-v-2d50bbc3]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item-label[data-v-2d50bbc3]{font-size:16px}.item-placeholder[data-v-2d50bbc3]{color:#999;font-size:16px}.tips[data-v-2d50bbc3]{color:#dd524d;font-size:12px;padding-left:16px;padding-right:16px}.radio-group[data-v-2d50bbc3]{padding-bottom:10px;padding-left:16px;padding-right:16px}.flex-row-center[data-v-2d50bbc3]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grey-block[data-v-2d50bbc3]{height:10px;background-color:#f8f8f8}',""]),e.exports=t}}]);