(function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},r={delay:0},n={delay:0},s=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d217c59":"2c7f3bc1","chunk-2d21a75b":"96f8eeb3","chunk-48c68774":"66454e34","chunk-4e4d8542":"bb43e187","chunk-89c0cb82":"c99f150a"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-48c68774":1,"chunk-4e4d8542":1,"chunk-89c0cb82":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var i="css/"+({}[e]||e)+"."+{"chunk-2d217c59":"31d6cfe0","chunk-2d21a75b":"31d6cfe0","chunk-48c68774":"1ce315de","chunk-4e4d8542":"8ec86863","chunk-89c0cb82":"9e5f6a07"}[e]+".css",n=l.p+i,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===n))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===i||u===n)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var i=t&&t.target&&t.target.src||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete r[e],p.parentNode.removeChild(p),a(s)},p.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var i=n[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,a){i=n[e]=[t,a]}));t.push(i[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,a[1](d)}n[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("6bf5")},"0c92":function(e,t,a){},"30a4":function(e,t,a){"use strict";var i="",r=i,n={getById:r+"/delayAlertDetail/getById",delete:r+"/delayAlertDetail/delete",getMonitorChartData:r+"/delayAlertDetail/getMonitorChartData",list:r+"/delayAlertDetail/list",listByIds:r+"/delayAlertDetail/listByIds",page:r+"/delayAlertDetail/page",save:r+"/delayAlertDetail/save",batchConfirm:r+"/delayAlertDetail/batchConfirm"},s={getById:r+"/delayAlertTask/getById",delete:r+"/delayAlertTask/delete",list:r+"/delayAlertTask/list",listByIds:r+"/delayAlertTask/listByIds",page:r+"/delayAlertTask/page",save:r+"/delayAlertTask/save"},o={delaySelect:r+"/delayMap/delaySelect",getCityMap:r+"/delayMap/getCityMap",getDelayList:r+"/delayMap/getDelayList",getNeMap:r+"/delayMap/getNeMap",getStationMap:r+"/delayMap/getStationMap",batchSavePosition:"/service-zhwg-topo/position/batchSave"},l={getProvinceMatrix:r+"/matrix/getProvinceMatrix",getCityMatrix:r+"/matrix/getCityMatrix",getStationMatrix:r+"/matrix/getStationMatrix",getNeMatrix:r+"/matrix/getNeMatrix"};t["a"]={DelayAlertDetail:n,DelayAlertTask:s,DelayMap:o,DelayMatrix:l}},"3ef9":function(e,t,a){"use strict";var i=a("85bc"),r=a.n(i);r.a},"6bf5":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("a026"),r=a("78ba"),n=a("8c8a"),s=a("30a4"),o=a("bc3a"),l=a.n(o),c=a("5c96"),u=l.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASE_API,timeout:3e4});u.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 200!==t.code&&1e3!==t.code?(Object(c["Message"])({message:t.message||"Error",type:"error",duration:5e3}),t):t}),(function(e){return console.log("err"+e),Object(c["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var d=u,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"main",attrs:{id:"app"}},[a("kt-base",[e._v("VLAN管理")]),a("kt-search-form",e._b({directives:[{name:"resize",rawName:"v-resize:debounce.initial",value:e.resize,expression:"resize",arg:"debounce",modifiers:{initial:!0}}],ref:"search",on:{search:e.query},scopedSlots:e._u([{key:"systemIdArr",fn:function(t){return[a("kt-form-item",e._b({},"kt-form-item",t,!1),[a("kt-table-select",{attrs:{disabled:t.readonly,field:t.prop,prop:"systemId",multiple:""},on:{change:e.formDataChange},model:{value:e.search.model[t.prop],callback:function(a){e.$set(e.search.model,t.prop,a)},expression:"search.model[props.prop]"}})],1)]}}])},"kt-search-form",e.search,!1),[a("template",{slot:"buttons"},[e.inside?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permissions.add,expression:"permissions.add"}],attrs:{type:"success",icon:"el-icon-circle-plus-outline"},on:{click:e.addRow}},[e._v("\n                新增\n            ")]):e._e(),e.inside?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.permissions.delete,expression:"permissions.delete"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:e.deleteRows}},[e._v("删除\n            ")]):e._e()],1)],2),a("kt-table",e._b({ref:"table",on:{"load-data":e.loadData,selections:e.handleSelections,"expand-change":e.expandChange,"row-dblclick":e.handleRowDbclick},scopedSlots:e._u([{key:"expand",fn:function(e){return[a("Detail",{ref:"detail"+e.row.index,class:"detail"+e.row.index,attrs:{detailData:e.row}})]}},{key:"alertStatus",fn:function(t){return[a("el-tag",{attrs:{type:e.states[t.row.alertStatus].type}},[e._v(e._s(e.states[t.row.alertStatus].name))])]}},{key:"physicalPort",fn:function(t){return[e._v("\n            "+e._s(t.row.startDate+"-"+t.row.endDate)+"\n        ")]}},{key:"enable",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){return e.handleChangeEnable(t.row)}},model:{value:t.row.enable,callback:function(a){e.$set(t.row,"enable",a)},expression:"slotProps.row.enable"}})]}},{key:"operate",fn:function(t){return[a("div",{staticClass:"operate-button-group"},[a("div",{staticClass:"operate-button-item el-icon-edit",attrs:{title:"编辑"},on:{click:function(a){return a.stopPropagation(),e.editRow(t.row)}}}),a("div",{staticClass:"operate-button-item",staticStyle:{"font-size":"14px"},attrs:{title:"实时监控"},on:{click:function(a){return a.stopPropagation(),e.handleShowMonitoring(t.row)}}},[e._v("\n                    实时监控\n                ")])])]}}])},"kt-table",e.table,!1)),a("kt-table-dialog",e._b({attrs:{visible:e.childProps.visible},on:{"update:visible":function(t){return e.$set(e.childProps,"visible",t)}}},"kt-table-dialog",e.childProps,!1)),a("kt-detail",{attrs:{visible:e.detailProps.visible,prop:e.detailProps.prop},on:{"update:visible":function(t){return e.$set(e.detailProps,"visible",t)}},model:{value:e.detailProps.value,callback:function(t){e.$set(e.detailProps,"value",t)},expression:"detailProps.value"}}),a("RealTimeMonitoring",{attrs:{visible:e.visibleRealTimeMonitoring,id:e.monitoringId},on:{"update:visible":function(t){e.visibleRealTimeMonitoring=t}}}),e.ciruitDialog.visible?a("CiruitForm",e._b({ref:"CiruitForm",attrs:{visible:e.ciruitDialog.visible},on:{"update:visible":function(t){return e.$set(e.ciruitDialog,"visible",t)},submit:e.submit}},"CiruitForm",e.ciruitDialog,!1)):e._e()],1)},h=[],f=(a("8e6e"),a("456d"),a("ac6a"),a("ade3")),b=(a("96cf"),a("1da1")),m=(a("386d"),a("2ef0")),v=a("7e43");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(f["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w={props:{},methods:{resize:Object(m["debounce"])((function(){var e=this;if(this.table){var t=this.$refs.main||{};t||console.log("未找到名为main的ref"),this.$nextTick((function(){var a=e.$refs.search,i=a&&a.$el.clientHeight||0,r=(t.clientHeight||e.$el.clientHeight)-i;e.$set(e.table,"maxHeight",r),e.$set(e.table,"height",r)}))}else console.log("未找到table属性")}),150)},watch:{}},x={props:{},data:function(){return{permissionProp:null,permissions:{}}},methods:{getPermissions:function(e){var t=e||this.permissionProp;return this.PERMISSION_CONSTANT[t]||{}}}},k={props:{searchParams:{type:Object,default:function(){return{}}},multiple:{type:Boolean,required:!1},inside:{type:Boolean,default:!0}},methods:{handleRowDbclick:function(e){this.$emit("row-dbclick",e)},handleSelections:function(e){this.$emit("selections",e)},initSearchParams:function(){var e=this;if(this.searchParams&&this.search&&this.search.items){this.search.model=y(y({},this.search.model),this.searchParams);var t=Object.keys(this.searchParams);t.forEach((function(t){for(var a=e.search.items.length,i=0;i<a;i++){var r=e.search.items[i];r.prop===t&&e.$set(e.search.items[i],"readonly",!0)}}))}},initProps:function(){if(this.inside&&this.table)return this.$set(this.table,"selectable",!0),void this.$set(this.table,"crossPageSelect",!1);!this.inside&&this.search&&this.$set(this.search,"rights",{search:!0,add:!1,modify:!1,remove:!1,view:!0}),this.table&&(this.multiple?(this.$set(this.table,"selectable",!0),this.$set(this.table,"crossPageSelect",!0)):(this.$set(this.table,"selectable",!1),this.$set(this.table,"crossPageSelect",!1)))}},watch:{searchParams:function(){this.initSearchParams()}}},D={data:function(){return{detailProps:{prop:"systemId",value:"",visible:!1},childProps:{prop:"system",visible:!1,searchParams:null}}},methods:{openDetail:function(e,t){var a=this;this.detailProps.value=t,this.detailProps.prop=e,this.$nextTick((function(){a.detailProps.visible=!0}))},openChildPage:function(e,t){var a=this;this.childProps.prop=e,this.childProps.searchParams=t,this.$nextTick((function(){a.childProps.visible=!0}))}}},P={mixins:[v["a"]],methods:{getMultiRows:function(){var e=this.$refs.table.getSelection();return new Promise((function(t){e&&0!==e.length?t(e):KT.alert("至少勾选一行!")}))},getCurrentRow:function(){var e=this;return new Promise((function(t){var a=e.$refs.table.getSelection()||[],i=e.$refs.table.getCurrentRow()||{};return i||a&&!(a.length<1)?a.length>1?KT.alert("只能选中一行!"):1===a.length?t(a[0]):void t(i):KT.alert("未选中任何一行!")}))},getTableRef:function(){return this.$refs.table}}},O={data:function(){return{}},created:function(){this.initProps&&this.initProps(),this.getPermissions&&(this.permissions=this.getPermissions()),this.initSearchParams&&this.initSearchParams()},mounted:function(){var e=this;this.resize&&this.$nextTick((function(){return e.resize()}))}},S={components:{ktDetail:function(){return a.e("chunk-2d217c59").then(a.bind(null,"c7c2"))},ktMainTable:function(){return a.e("chunk-2d21a75b").then(a.bind(null,"bc37"))},ktTableDialog:function(){return a.e("chunk-89c0cb82").then(a.bind(null,"19af"))},ktTableSelect:function(){return a.e("chunk-4e4d8542").then(a.bind(null,"a59f"))},ktIcon:function(){return a.e("chunk-48c68774").then(a.bind(null,"02e9"))}}},j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"实时监控",visible:e.visible,width:"50%","before-close":e.handleClose}},[a("div",{staticClass:"tools"},[a("span",[e._v("实时监控频率")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.speed,callback:function(t){e.speed=t},expression:"speed"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("展示数量")]),a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChangeCount},model:{value:e.showCount,callback:function(t){e.showCount=t},expression:"showCount"}},e._l(e.countList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{ref:"chart",staticClass:"charts"}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("关 闭")])],1)])},$=[],C=a("313e"),T=a.n(C),A={props:{visible:{type:Boolean,default:!1,require:!0}},data:function(){return{speed:1e3,beforeShowCount:0,showCount:10,countList:[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}],options:[{label:"0.3s",value:300},{label:"1s",value:1e3},{label:"2s",value:2e3},{label:"5s",value:5e3}],xData:[],yData:[]}},watch:{visible:function(e){var t=this;e&&this.$nextTick((function(){t.xData=[],t.yData=[],t.resetChart(0)}))}},methods:{resetChart:function(e){clearTimeout(this.timer);var t=this.xData,a=this.yData,i=this.showCount;if(e>i)t=t.slice(-i),a=a.slice(-i);else for(var r=e;r<i;r++)t.unshift(""),a.unshift("");this.xData=t,this.yData=a,this.beforeShowCount=this.showCount,this.initChart(),this.initTimer()},handleChangeCount:function(){this.resetChart(this.beforeShowCount)},initChart:function(){var e=T.a.init(this.$refs.chart),t={color:["#5B9CFF","#70b6ff"],xAxis:{type:"category",boundaryGap:!1,data:this.xData,axisTick:{show:!1},axisLabel:{show:!1}},yAxis:{type:"value",axisTick:{show:!1},boundaryGap:!1,axisLine:{show:!0}},series:[{data:this.yData,type:"line",label:{color:"#000",show:!0},areaStyle:{}}],animation:!1};function a(){e.resize()}e.setOption(t),this.chart=e,window.addEventListener("resize",a,!1),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",a,!1)}))},updateChart:function(){this.chart.setOption({xAxis:{data:this.xData},series:[{data:this.yData}]})},initTimer:function(){var e=this,t=this.xData.length;this.timer=setTimeout((function(){e.getData().then((function(a){e.yData.push(a),e.yData.shift(),e.xData.push(t++),e.xData.shift(),e.updateChart(),e.initTimer()}))}),this.speed)},getData:function(){return new Promise((function(e,t){e(Math.floor(100*Math.random()))}))},handleClose:function(){this.$emit("update:visible",!1)}}},I=A,_=(a("3ef9"),a("2877")),M=Object(_["a"])(I,j,$,!1,null,"047a27ec",null),N=M.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"监测图",name:"first"}},[a("div",{staticClass:"enumeration-gl-query"},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form",[a("el-form-item",{attrs:{label:"显示条数"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.getChartData},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[a("el-option",{attrs:{label:"10",value:10}}),a("el-option",{attrs:{label:"20",value:20}})],1)],1)],1)],1)]),a("div",{ref:"charts",staticClass:"delayTab-chart"})]),a("el-tab-pane",{attrs:{label:"监测详情",name:"second"}},[a("div",{ref:"main",staticClass:"monitoring-detail"},[a("kt-search-form",e._b({directives:[{name:"resize",rawName:"v-resize:debounce.initial",value:e.resize,expression:"resize",arg:"debounce",modifiers:{initial:!0}}],ref:"search",on:{search:e.query}},"kt-search-form",e.search,!1),[a("template",{slot:"buttons"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleBatchConfirm}},[e._v("\n                            批量处理\n                        ")])],1)],2),a("kt-table",e._b({ref:"table",on:{"load-data":e.loadData},scopedSlots:e._u([{key:"status",fn:function(t){return[a("el-tag",{attrs:{type:e.states[t.row.status].type}},[e._v(e._s(e.states[t.row.status].name))])]}},{key:"operate",fn:function(t){return[1==t.row.status?a("el-button",{attrs:{type:"primary"},on:{click:function(a){return a.stopPropagation(),e.handleConfirm([t.row.detailId])}}},[e._v("确认")]):e._e()]}}])},"kt-table",e.table,!1))],1)])],1)],1)},z=[],V=a("2909");function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){Object(f["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q={name:"vlan",mixins:[w,x,k,D,P,O,S],props:{detailData:{type:Object,default:function(){return{}}}},data:function(){return{firstLoad:!0,activeName:"first",size:10,monitoringId:"",limitValue:"",promiseValue:"",chartsData:[],states:{0:{name:"正常",type:"success"},1:{name:"未确认",type:"warning"},2:{name:"已确认",type:"success"}},search:{model:{status:"",startDate:"",endDate:"",taskId:this.detailData.taskId},items:[{label:"状态",type:"select",prop:"status",data:[{label:"正常",value:"0"},{label:"未确认",value:"1"},{label:"已确认",value:"2"}]},{label:"起始时间",prop:"startDate",type:"date"},{label:"结束时间",type:"date",prop:"endDate",pickerOptions:{disabledDate:function(){return!1}}}],data:{},labelWidth:"100px"},table:{maxHeight:200,height:200,selectable:!0,treeProps:{children:"childList"},rowKey:"id",columns:[{label:"状态",prop:"status",width:80,slotted:!0},{label:"监测时间",prop:"monitorTime",width:140},{label:"检测值",prop:"value",width:80},{label:"告警信息",prop:"alertMsg"},{label:"备注",prop:"remark",width:250},{label:"告警确认人",prop:"confirmPerson",width:140},{label:"确认时间",prop:"confirmTime",width:140},{label:"操作",prop:"operate",slotted:!0,width:100,fixed:"right",align:"center"}],data:{data:[],page:1,pageSize:50}},chartsMaxVal:0}},watch:{detailData:{handler:function(e){e.visible&&this.getData()},immediate:!0,deep:!0}},computed:{},methods:{getData:function(){var e=this;setTimeout((function(){e.getChartData(),e.query()}))},getChartData:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.post(this.$API.DelayAlertDetail.getMonitorChartData,{},{params:{taskId:this.detailData.taskId,size:this.size}});case 2:t=e.sent,this.chartsData=t.data.dataList.reverse(),this.limitValue=t.data.limitValue,this.promiseValue=t.data.promiseValue,0===t.data.dataList.length?this.chartsMaxVal=Math.max(this.limitValue,this.promiseValue)+1:(a=this.chartsData.map((function(e){return e.value})),this.chartsMaxVal=Math.max.apply(Math,Object(V["a"])(a).concat([this.limitValue,this.promiseValue]))+1),this.initChart();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),resize:Object(m["debounce"])((function(){var e=this;if(this.table){var t=this.$refs.main||{};t||console.log("未找到名为main的ref"),this.$nextTick((function(){var a=e.$refs.search,i=a&&a.$el.clientHeight||0,r=(t.clientHeight||e.$el.clientHeight)-i-45;e.$set(e.table,"maxHeight",r),e.$set(e.table,"height",r)}))}else console.log("未找到table属性")}),150),initChart:function(){var e=this,t=this.chartsData,a=this.limitValue,i=this.promiseValue,r=this.chartsMaxVal,n=[],s=t.map((function(e){return n.push(e.value),e.monitorTime})),o={color:["#73A0FA","#ff5f5f","#FFB761"],tooltip:{trigger:"item"},grid:{left:"50",right:"80",bottom:"20",top:"30",containLabel:!0},legend:{data:["时延监测值"],orient:"horizontal",icon:"rect",show:!0,right:20,top:0,itemGap:20,textStyle:{fontSize:12,color:"#909399"}},xAxis:{type:"category",data:s,boundaryGap:!1,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"#909399",textStyle:{fontSize:12}}},yAxis:{name:"单位（μs）",min:0,max:r,type:"value",boundaryGap:!1,axisLabel:{color:"#909399",textStyle:{fontSize:12}}},series:[{name:"检测图",type:"line",smooth:!0,data:n,markLine:{data:[{yAxis:a,name:"门限值",lineStyle:{color:"red"},label:{position:"end",show:!0,formatter:"{b}"}},{yAxis:i,name:"承诺值",lineStyle:{color:"blue"},label:{position:"end",show:!0,formatter:a==i?"\n\n\n{b}":"{b}"}}],symbol:[],lineStyle:{type:"solid"},grid:{right:"4%"}},tooltip:{formatter:"{b}时延值：{c}"}}]};this.$nextTick((function(){var t=T.a.init(e.$refs.charts);function a(){t.resize()}t.setOption(o),console.log(t),window.addEventListener("resize",a,!1),e.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",a,!1)}))}))},getBy:function(e,t,a){return vlanForm.methods.getOneBy(e,t,a)},handleBatchConfirm:function(){var e=this;this.getMultiRows().then((function(t){var a=t.filter((function(e){return 1==e.status}));if(0==a.length)return KT.message("请选择未确认的项目",{type:"warning"});e.handleConfirm(a.map((function(e){return e.detailId})))}))},handleConfirm:function(e){var t=this;this.$prompt("请输入备注信息","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"textarea"}).then(function(){var a=Object(b["a"])(regeneratorRuntime.mark((function a(i){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=i.value,a.next=3,t.$axios.post(t.$API.DelayAlertDetail.batchConfirm,{remark:r,detailIdList:e});case 3:a.sent,KT.message("确认成功",{type:"success"}),t.query();case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},query:function(){this.loadData(1,this.table.data.pageSize||50)},loadData:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.post(this.$API.DelayAlertDetail.page,this.search.model,{params:{page:t,pageSize:a}});case 2:i=e.sent,console.log(i),200==i.code&&(this.table.data=i);case 5:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),deleteRows:function(){var e=this;this.getMultiRows().then((function(t){KT.confirm("是否删除所选VLAN？",Object(b["a"])(regeneratorRuntime.mark((function a(){var i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.map((function(e){return e.resVlanId})).join(","),a.next=3,e.$axios.post(e.$API.Vlan.delete,{},{params:{ids:i}});case 3:r=a.sent,200==r.code&&(e.$message.success("删除成功"),e.query());case 5:case"end":return a.stop()}}),a)}))))}))},editRow:function(e){this.add=!1,this.dialog.model=JSON.parse(JSON.stringify(e)),this.dialog.type="edit",this.dialog.title="编辑VLAN",this.dialog.visible=!0},detail:function(e){this.childProps={prop:"vlanDetail",visible:!0,props:{id:e.resVlanId}}},addRow:function(){var e=this.$refs.table.getSelection(),t={vlanPId:""};if(0==e.length)this.dialog.model={dataSource:1};else{if(1!=e.length)return void KT.message("请选择一个设备新增子设备",{type:"info"});t.vlanPId=e[0].resVlanId,t.vlanPName=e[0].deviceName}this.add=!0,this.dialog.model=t,this.dialog.title="新增VLAN",this.dialog.type="edit",this.dialog.visible=!0},submit:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.post(this.$API.Vlan.save,L({},t));case 2:a=e.sent,200==a.code&&(KT.message("提交成功",{type:"success"}),this.dialog.visible=!1,this.query());case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){},mounted:function(){}},B=q,K=(a("8196"),Object(_["a"])(B,R,z,!1,null,"18ba40f0",null)),F=K.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kt-form-dialog",e._g(e._b({attrs:{visible:e.innerVisible},on:{"update:visible":function(t){e.innerVisible=t}},scopedSlots:e._u([{key:"circuitId",fn:function(){return[a("el-form-item",{attrs:{label:"业务电路",required:!0}},[a("jk-table-select",{attrs:{prop:"circuitId","default-value":e.innerProps.model.circuitName,filed:"circuitId,circuitName"},on:{select:e.siteSelect},model:{value:e.innerProps.model.circuitId,callback:function(t){e.$set(e.innerProps.model,"circuitId",t)},expression:"innerProps.model.circuitId"}})],1)]},proxy:!0}])},"kt-form-dialog",e.innerProps,!1),e.$listeners))},J=[],G={Delay:{alertStatus:[{label:"正常",value:0},{label:"告警",value:1}],enable:[{label:"否",value:0},{label:"是",value:1}],frequency:[{label:"每小时",value:1},{label:"每4小时",value:2},{label:"每12小时",value:3},{label:"每天",value:4}]},getLabel:function(e,t){var a=e.filter((function(e){return e.value==t}));return a.length?a[0].label:""}};function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){Object(f["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Z={name:"system-form",components:{},mixins:[S],props:{visible:Boolean,treeData:Array},data:function(){return{innerVisible:this.visible,dialog:{width:"50%",loading:!1,labelWidth:"140px",model:{},items:[{label:"业务电路",type:"input",prop:"circuitId",slotName:"circuitId",required:!0},{label:"承诺值（μs）",type:"input",prop:"promiseValue",required:!0},{label:"门限值（μs）",type:"input",prop:"limitValue",required:!0},{label:"巡检开始时间",type:"datetime",prop:"startDate",required:!0},{label:"巡检结束时间",type:"datetime",prop:"endDate",required:!0,pickerOptions:{disabledDate:function(){return!1}}},{label:"频率",type:"select",prop:"frequency",required:!0,data:G.Delay.frequency},{label:"首次开始时间",type:"datetime",prop:"firstTime",required:!0},{label:"是否使用",type:"radio",prop:"enable",required:!0,data:[{label:"是",value:"1"},{label:"否",value:"0"}]}],rules:{circuitId:[{message:"请选择业务电路",reuqired:!0}]}}}},computed:{innerProps:function(){return W(W({},this.dialog),this.$attrs)}},methods:{siteSelect:function(e){this.innerProps.model.circuitName=e.circuitName}},created:function(){},mounted:function(){},watch:{visible:function(e){e!==this.innerVisible&&(this.innerVisible=e)},innerVisible:function(e){this.$emit("update:visible",e)}}},Q=Z,X=Object(_["a"])(Q,H,J,!1,null,"70539556",null),Y=X.exports;function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){Object(f["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae={name:"vlan",mixins:[w,x,k,D,P,O,S],components:{RealTimeMonitoring:N,Detail:F,CiruitForm:Y},props:{},data:function(){return{add:!1,monitoringId:"",visibleRealTimeMonitoring:!1,states:{0:{name:"正常",type:"success"},1:{name:"告警",type:"danger"}},search:{model:{enable:"1",circuitName:""},items:[{label:"电路名称",type:"input",prop:"circuitName"},{label:"是否启动",type:"select",prop:"enable",data:[{label:"是",value:"1"},{label:"否",value:"0"}]}],data:{},labelWidth:"100px"},table:{maxHeight:500,height:500,showIndex:!1,selectable:!0,treeProps:{children:"childList"},rowKey:"taskId",columns:[{label:"",type:"expand",prop:"expand",align:"center",width:50,slotted:!0},{label:"业务电路名称",prop:"circuitName",minWidth:200},{label:"承诺值（μs）",prop:"promiseValue"},{label:"门限值（μs）",prop:"limitValue"},{label:"告警状态",prop:"alertStatus",slotted:!0,width:80},{label:"巡检周期区间",prop:"physicalPort",slotted:!0,width:300},{label:"频率",prop:"frequencyStr"},{label:"首次开始时间",prop:"firstTime"},{label:"是否启用",prop:"enable",slotted:!0,width:80},{label:"操作",prop:"operate",slotted:!0,width:140,align:"center"}],data:{data:[],page:1,pageSize:50}},ciruitDialog:{model:{},visible:!1,type:"edit",title:"新增电路"},childProps:{prop:"vlanDetail",visible:!1,searchParams:null}}},computed:{},methods:{expandChange:function(e){this.table.data.data[e.index].visible=!this.table.data.data[e.index].visible},handleRowDbclick:function(){},formDataChange:function(e,t,a){switch(a){case"systemIdArr":this.$set(this.search.model,"multiSegIdArr",null);break;case"siteIdAArr":this.$set(this.search.model,"roomIdAArr",null);break;case"siteIdZArr":this.$set(this.search.model,"roomIdZArr",null);break;default:break}},getBy:function(e,t,a){return vlanForm.methods.getOneBy(e,t,a)},query:function(){this.loadData(1,this.table.data.pageSize||50,this.search.model||{})},loadData:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,a,i){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=te({},i),""!==r.enable&&(r.enable=1*r.enable),e.next=4,this.$axios.post(this.$API.DelayAlertTask.page,{},{params:{page:t,pageSize:a},data:r});case 4:n=e.sent,200==n.code&&(n.data.forEach((function(e,t){e.index=t,e.visible=!1,e.alertStatusStr=G.getLabel(G.Delay.alertStatus,e.alertStatus),e.enableStr=G.getLabel(G.Delay.enable,e.enable),e.frequencyStr=G.getLabel(G.Delay.frequency,e.frequency)})),this.table.data=n);case 6:case"end":return e.stop()}}),e,this)})));function t(t,a,i){return e.apply(this,arguments)}return t}(),deleteRows:function(){var e=this;this.getMultiRows().then((function(t){KT.confirm("是否删除所选业务电路？",Object(b["a"])(regeneratorRuntime.mark((function a(){var i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.map((function(e){return e.taskId})).join(","),a.next=3,e.$axios.post(e.$API.DelayAlertTask.delete,{},{params:{ids:i}});case 3:r=a.sent,200==r.code&&(e.$message.success("删除成功"),e.query());case 5:case"end":return a.stop()}}),a)}))))}))},editRow:function(e){this.add=!1,this.ciruitDialog.model=JSON.parse(JSON.stringify(e)),this.ciruitDialog.type="edit",this.ciruitDialog.title="编辑电路",this.ciruitDialog.visible=!0},detail:function(e){this.childProps={prop:"vlanDetail",visible:!0,props:{id:e.resVlanId}}},addRow:function(){this.ciruitDialog.model={enable:1},this.ciruitDialog.title="新增电路",this.ciruitDialog.type="edit",this.ciruitDialog.visible=!0},handleChangeEnable:function(e){this.submit(e)},submit:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.circuitId&&""!=t.circuitId){e.next=3;break}return KT.message("请选择业务电路",{type:"warning"}),e.abrupt("return");case 3:return e.next=5,this.$axios.post(this.$API.DelayAlertTask.save,t);case 5:a=e.sent,200==a.code&&(KT.message("保存成功",{type:"success"}),this.ciruitDialog.visible=!1,this.query());case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleShowMonitoring:function(e){this.visibleRealTimeMonitoring=!0,this.monitoringId=e.id}},created:function(){},mounted:function(){this.query({})},watch:{}},ie=ae,re=Object(_["a"])(ie,p,h,!1,null,"3a53f01a",null),ne=re.exports;window.document.title="时延越限预警",i["default"].use(r["a"],{size:"mini"});var se={size:"mini"};i["default"].use(n["a"],se),i["default"].prototype.$API=s["a"],i["default"].prototype.$axios=d,new i["default"]({render:function(e){return e(ne)}}).$mount("#app")},"78ba":function(e,t,a){"use strict";var i=a("5c96"),r=a.n(i),n=a("7e43"),s=a("58fb"),o=a.n(s),l=(a("0fae"),a("49fc"),a("778b"),a("f5df"),a("0c92"),{system:{add:"44956663630340458bd5b253b079a0c3",edit:"4d6771f3b67749de88682cdc8a0d2f03",delete:"f9a0557f13ec4f2e95dca91f75bcba80",view:"04b21a6edb604f499f1b5beb5c45936d",query:"9fb9a0c431ef418783114c67b993af00",systemViews:"dd254d9c592a435296d47e2807d5f30d",export:"c81d5b442d264ca59623c4453108cb7d"},systemSeg:{add:"8942239d35ec4715b467241838584dda",edit:"90679c7dcf9946c3be0caea2e495a07f",delete:"d7e872eddf32465c930ef0848fc17d20",view:"d6a6a3c7d5044e808ce523f7503a9c87",query:"5b693b5d92654e5287f0847e1b95169f",export:"564adffed0cc420f94f9cce8949589f4"}}),c=l,u=function(e,t){var a=e.prototype.PERMISSION_CONSTANT;e.prototype.PERMISSION_CONSTANT=a?Object.assign({},a,c):c,r.a.install(e,t),o.a.install(e,t),n["b"].install(e,t)};t["a"]={install:u}},8196:function(e,t,a){"use strict";var i=a("c13e"),r=a.n(i);r.a},"85bc":function(e,t,a){},c13e:function(e,t,a){}});