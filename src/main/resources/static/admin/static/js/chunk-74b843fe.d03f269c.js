(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b843fe"],{"3be2":function(t,e,a){},5135:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("b775"),n={pageList:function(t,e,a){return Object(o["a"])({url:"/api/admin/reportComment/pageList",method:"get",params:{pageIndex:t,pageSize:e,state:a}})},count:function(t){return Object(o["a"])({url:"/api/admin/reportComment/count",method:"get",params:{state:t}})},searchList:function(t,e,a,n){return Object(o["a"])({url:"/api/admin/reportComment/searchList",method:"get",params:{keyword:t,pageIndex:e,pageSize:a,state:n}})},searchCount:function(t,e){return Object(o["a"])({url:"/api/admin/reportComment/searchCount",method:"get",params:{keyword:t,state:e}})},getReportByComment:function(t){return Object(o["a"])({url:"/api/admin/reportComment/getReportByComment",method:"get",params:{commentId:t}})},getReportByReportUser:function(t){return Object(o["a"])({url:"/api/admin/reportComment/getReportByReportUser",method:"get",params:{reportUserId:t}})},handleReport:function(t,e){return Object(o["a"])({url:"/api/admin/reportComment/handleReport",method:"put",params:{commentId:t,agree:e}})}}},"7e01":function(t,e,a){"use strict";a("3be2")},ca51:function(t,e,a){"use strict";a.r(e);a("386d");var o=function(){var t=this,e=t._self._c;return e("div",[e("el-card",{attrs:{shadow:"hover"}},[e("el-tabs",{model:{value:t.pageState,callback:function(e){t.pageState=e},expression:"pageState"}},[e("el-tab-pane",{attrs:{label:"待处理",name:"0"}}),e("el-tab-pane",{attrs:{label:"举报通过",name:"1"}}),e("el-tab-pane",{attrs:{label:"举报未通过",name:"-1"}})],1),e("el-table",{staticStyle:{width:"100%"},attrs:{"row-class-name":t.tableRowClassName,data:t.comments}},[e("el-table-column",{attrs:{prop:"id",width:"50"}}),e("el-table-column",{attrs:{prop:"tableId",label:"帖子id",width:"80"}}),e("el-table-column",{attrs:{prop:"userId",label:"用户id",width:"80"}}),e("el-table-column",{attrs:{prop:"userName",label:"用户名",width:"90"}}),e("el-table-column",{attrs:{prop:"content","show-overflow-tooltip":"",label:"内容",width:"300"}}),e("el-table-column",{attrs:{prop:"images","show-overflow-tooltip":"",label:"图片列表",width:"180"}}),e("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"140"}}),e("el-table-column",{attrs:{prop:"stateName",label:"状态",width:"80"}}),e("el-table-column",{attrs:{width:"200"},scopedSlots:t._u([{key:"header",fn:function(a){return[e("el-input",{staticClass:"input-with-select",attrs:{size:"mini",placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[t.isSearch?e("el-button",{attrs:{slot:"append",icon:"el-icon-close"},on:{click:t.clearSearch},slot:"append"}):t._e(),t.isSearch?t._e():e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"})],1)]}},{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.openDialogInfo(a.$index)}}},[t._v("查看详情")])]}}])})],1),e("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next","current-page":t.pageIndex,"page-size":t.pageSize,total:t.commentCount},on:{"update:currentPage":function(e){t.pageIndex=e},"update:current-page":function(e){t.pageIndex=e},"current-change":t.setPage}})],1),e("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.dialogInfoShow,title:"举报详情",top:"4vh",center:"",width:"70%",fullscreen:t.isMobile},on:{"update:visible":function(e){t.dialogInfoShow=e}}},[e("el-form",{ref:"formRef",attrs:{"label-position":"top",model:t.dialogInfoData}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xl:12,lg:12,md:24,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"id"}},[e("el-input",{attrs:{disabled:""},model:{value:t.dialogInfoData.comment.id,callback:function(e){t.$set(t.dialogInfoData.comment,"id",e)},expression:"dialogInfoData.comment.id"}})],1),e("el-form-item",{attrs:{label:"内容"}},[e("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.dialogInfoData.comment.content,callback:function(e){t.$set(t.dialogInfoData.comment,"content",e)},expression:"dialogInfoData.comment.content"}})],1),e("el-form-item",{attrs:{label:"状态"}},[e("el-select",{attrs:{placeholder:"帖子状态"},model:{value:t.dialogInfoData.comment.state,callback:function(e){t.$set(t.dialogInfoData.comment,"state",e)},expression:"dialogInfoData.comment.state"}},[e("el-option",{attrs:{label:"正常",value:0}}),e("el-option",{attrs:{label:"待审核",value:1}}),e("el-option",{attrs:{label:"封禁",value:-1}})],1)],1)],1),e("el-col",{attrs:{xl:12,lg:12,md:24,sm:24,xs:24}},[e("el-form-item",{attrs:{label:"图片列表"}},[e("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.dialogInfoData.comment.images,callback:function(e){t.$set(t.dialogInfoData.comment,"images",e)},expression:"dialogInfoData.comment.images"}}),e("div",t._l(JSON.parse(null==t.dialogInfoData.comment.images?"[]":t.dialogInfoData.comment.images),(function(a,o){return e("el-image",{key:o,staticStyle:{width:"33%"},attrs:{src:t.IMAGE_URL+a}})})),1)],1)],1)],1)],1),e("el-table",{attrs:{height:"240","row-class-name":t.tableRowClassName,data:t.dialogInfoData.reports,"default-sort":{prop:"createTime",order:"descending"}}},[e("el-table-column",{attrs:{sortable:"",property:"reportUserId",label:"举报者id",width:"150"}}),e("el-table-column",{attrs:{sortable:"",property:"reportUserName",label:"举报者名称",width:"150"}}),e("el-table-column",{attrs:{sortable:"",property:"typeName",label:"举报类型",width:"200"}}),e("el-table-column",{attrs:{sortable:"",property:"content",label:"举报内容"}}),e("el-table-column",{attrs:{sortable:"",property:"createTime",label:"创建时间"}}),e("el-table-column",{attrs:{sortable:"",property:"stateName",label:"举报状态"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"danger"},on:{click:t.successReport}},[t._v("举报通过")]),e("el-button",{attrs:{type:"info"},on:{click:t.failReport}},[t._v("未通过")])],1)],1)],1)},n=[],r=a("5135"),i=a("db05"),l=a("403a"),s={name:"ReportTable",data:function(){return{IMAGE_URL:l["a"].image,comments:[],sortName:null,sortType:null,pageIndex:1,pageSize:10,commentCount:0,keyword:"",isSearch:!1,dialogInfoShow:!1,dialogInfoData:{comment:{},reports:[]},pageState:0}},created:function(){this.getReportComments()},watch:{pageState:function(){this.getReportComments()}},methods:{failReport:function(){var t=this;r["a"].handleReport(this.dialogInfoData.comment.id,!1).then((function(e){t.$message.success(e.message),t.getReportComments(),t.closeDialogInfo()}))},successReport:function(){var t=this;r["a"].handleReport(this.dialogInfoData.comment.id,!0).then((function(e){t.$message.success(e.message),t.getReportComments(),t.closeDialogInfo()}))},getDialogInfoDatas:function(t){var e=this;i["a"].comment(t).then((function(t){e.$set(e.dialogInfoData,"comment",t.data)})),r["a"].getReportByComment(t).then((function(t){e.$set(e.dialogInfoData,"reports",t.data)}))},openDialogInfo:function(t){var e=this.comments[t];this.getDialogInfoDatas(e.id),this.dialogInfoShow=!0},closeDialogInfo:function(){this.dialogInfoShow=!1},tableRowClassName:function(t){var e=t.row;t.rowIndex;return-1===e.state?"lock-row":1===e.state?"wait-row":""},clearSearch:function(){this.pageIndex=1,this.keyword="",this.isSearch=!1,this.getReportComments()},search:function(){this.pageIndex=1,""==this.keyword?this.isSearch=!1:this.isSearch=!0,this.getReportComments()},setPage:function(t){this.getReportComments()},getReporComment:function(t){var e=this;r["a"].comment(this.comments[t].id).then((function(a){e.$set(e.comments,t,a.data)}))},getReportComments:function(){var t=this;this.isSearch?(r["a"].searchCount(this.keyword,this.pageState).then((function(e){t.commentCount=e.data})),r["a"].searchList(this.keyword,this.pageIndex,this.pageSize,this.pageState).then((function(e){t.comments=e.data}))):(r["a"].count(this.pageState).then((function(e){t.commentCount=e.data})),r["a"].pageList(this.pageIndex,this.pageSize,this.pageState).then((function(e){t.comments=e.data})))}},computed:{isMobile:function(){return screen.width<=425}}},m=s,c=(a("7e01"),a("2877")),p=Object(c["a"])(m,o,n,!1,null,null,null);e["default"]=p.exports},db05:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("b775"),n={pageList:function(t,e,a,n){return Object(o["a"])({url:"/api/admin/comment/pageList",method:"get",params:{pageIndex:t,pageSize:e,rankName:a,rankType:n}})},count:function(){return Object(o["a"])({url:"/api/admin/comment/count",method:"get"})},searchList:function(t,e,a,n,r){return Object(o["a"])({url:"/api/admin/comment/searchList",method:"get",params:{keyword:t,pageIndex:e,pageSize:a,rankName:n,rankType:r}})},searchCount:function(t){return Object(o["a"])({url:"/api/admin/comment/searchCount",method:"get",params:{keyword:t}})},comment:function(t){return Object(o["a"])({url:"/api/admin/comment/comment",method:"get",params:{commentId:t}})},getExamineCount:function(){return Object(o["a"])({url:"/api/admin/comment/getExamineCount",method:"get"})},updateComment:function(t,e,a,n){return Object(o["a"])({url:"/api/admin/comment/updateComment",method:"put",params:{commentId:t,content:e,images:a,state:n}})},delete:function(t){return Object(o["a"])({url:"/api/admin/comment/deletecomment",method:"delete",params:{commentId:t}})}}}}]);