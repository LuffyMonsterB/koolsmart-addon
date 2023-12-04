"use strict";(self["webpackChunkxiaolou"]=self["webpackChunkxiaolou"]||[]).push([[869],{3869:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("el-row",{staticClass:"panel"},[t("el-col",{staticClass:"sub-panel",attrs:{span:7}},[t("div",{staticClass:"title"},[t("div",[e._v("情景模式管理")])]),t("div",{staticClass:"btn"},[t("el-button",{staticClass:"scene-btn",attrs:{icon:"el-icon-plus"},on:{click:e.handleNewSceneModeBtnClick}},[e._v("新建情景模式")])],1),t("div",{staticClass:"scene-list"},e._l(e.sceneModeList,(function(s,n){return t("scene-card",{key:n,staticClass:"scene-item",attrs:{sceneObj:s},on:{deleteScene:e.handleSceneDelete},nativeOn:{click:function(t){return e.handleSceneClick(s)}}})})),1)]),t("el-col",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"},attrs:{span:17}},[t("el-empty",{attrs:{description:"请在左边编辑/新建情景模式"}}),t("el-button",{staticClass:"scene-btn",on:{click:e.handleNextStepBtnClick}},[e._v(" 下一步 ")])],1)],1)],1)},i=[],c=(s(7658),function(){var e=this,t=e._self._c;return t("el-card",{staticClass:"scene-card",attrs:{shadow:"hover"}},[t("el-row",[t("el-col",{attrs:{span:20}},[t("el-row",[t("div",[t("i",{class:`mdi ${e.sceneMap.icon.replace(":","-")}`}),e._v(" "+e._s(e.sceneMap.name)+" ")])]),t("el-row",{attrs:{type:"flex"}},e._l(e.sceneMap.devices,(function(s,n){return t("div",{key:n,staticClass:"device-item"},[t("i",{class:`mdi mdi-${e.deviceTypesIcon[n]} ${n}`},[e._v(" "+e._s(s))])])})),0)],1),t("el-col",{staticClass:"edit-col",attrs:{span:4}},[t("i",{staticClass:"el-icon-delete",on:{click:function(t){return t.stopPropagation(),e.deleteBtnClick.apply(null,arguments)}}})])],1)],1)}),o=[],r={name:"SceneCard",props:["sceneObj"],data(){return{deviceTypes:["switch","light","sensor"],deviceTypesIcon:{switch:"light-switch",light:"ceiling-light-multiple",sensor:"thermometer",other:"robot"}}},computed:{sceneMap(){let e={};return this.sceneObj.attributes["entity_id"]?.forEach((t=>{let s=t.split(".")[0];this.deviceTypes.includes(s)||(s="other"),e[s]||(e[s]=0),e[s]++})),{name:this.sceneObj.attributes["friendly_name"],icon:this.sceneObj.attributes["icon"]??"home",entity_id:this.sceneObj.entity_id,devices:e}}},methods:{deleteBtnClick(){this.$emit("deleteScene",this.sceneObj)}}},l=r,a=s(1001),d=(0,a.Z)(l,c,o,!1,null,"640460d6",null),u=d.exports,h=s(2356),p=s(3247),m=s(1273),S={name:"SceneView",components:{SceneCard:u},data(){return{createSceneModeFlag:!1,newSceneModeName:""}},computed:{sceneModeList(){let e=[];const t=this.$store.state.projectStore.selectedProject.id,s=this.$store.state.haStore.entitiesFromSubscribe;for(let n in s)if(s[n].attributes["id"]&&"scene"===n.split(".")[0]){let i=s[n].attributes.id.split("_");"koolsmart"===i[0]&&i[1]===t&&e.push(s[n])}return this.$store.commit("sceneStore/setScenes",e),this.$store.commit("projectStore/setProjectScenes",e.map((e=>e.entity_id))),e}},created(){m.log(this.$store.state.projectStore.selectedProject)},methods:{handleNextStepBtnClick(){this.$router.push("/project/viewpoint-design")},handleNewSceneModeBtnClick(){const e=this.$store.state.projectStore.selectedProject.id,t=`koolsmart_${e}_${(0,p.Z)()}`,s={id:t,name:"新建情景模式",icon:"mdi:home",entities:{}};this.$store.commit("sceneStore/setEditScene",s),this.$router.push("/project/scene/edit")},handleSceneDelete(e){this.$confirm("你想要删除这个情景模式吗?","Prompt",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((t=>{(0,h.Ju)({uid:e.attributes["id"]}).then((t=>{this.$message.warning(`删除情景模式 ${e.attributes["friendly_name"]} 成功`)}))}),(e=>{}))},handleSceneClick(e){(0,h.VH)({uid:e.attributes["id"]}).then((e=>{this.$store.commit("sceneStore/setEditScene",e),this.$router.push("/project/scene/edit")}),(e=>{m.log(e)}))}}},f=S,b=(0,a.Z)(f,n,i,!1,null,"5461bac0",null),v=b.exports},3247:function(e,t,s){function n(){let e=(new Date).getTime()+Math.floor(1e7*Math.random());return e.toString()}s.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=869.444c32cd.js.map