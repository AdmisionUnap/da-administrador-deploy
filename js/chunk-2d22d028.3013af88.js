(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d028"],{f657:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"m-2 flex justify-between flex-wrap"},[e("div",{staticClass:"flex flex-col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dni,expression:"dni"}],ref:"txtdni",staticClass:"p-3 bg-gray-100 rounded-xl",attrs:{type:"number",placeholder:"Dni",maxlength:"8"},domProps:{value:t.dni},on:{input:[function(e){e.target.composing||(t.dni=e.target.value)},function(e){return t.get_list()}],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.get_list()}}})])]),e("div",{staticClass:"flex"},[e("vs-button",{on:{click:function(e){t.verCredenciales=!t.verCredenciales}}},[t._v("Ver resumen de Credenciales")]),e("vs-button",{on:{click:function(e){t.verExamen=!0,t.watch_reloj()}}},[t._v("Ver resumen entrada al examen")])],1),t.verCredenciales?e("div",{staticClass:"flex flex-col p-2 bg-gray-100"},[e("div",{staticClass:"flex"},[e("button",{staticClass:"px-1 text-xs mr-2 focus:outline-none rounded-xl bg-gray-500 text-white",on:{click:function(e){return t.getResumenCredenciales()}}},[t._v("Actualizar")]),e("h1",{staticClass:"text-lg font-medium"},[t._v(" Resumen de descargas de Credenciales "+t._s(t.getTotalCredenciales)+" / "+t._s(t.getTotalCredencialesTotales)+" ")])]),e("div",{staticClass:"flex flex-col"},t._l(t.listaDownloadCredenciales,(function(s,a){return e("div",{key:a,staticClass:"rounded-3xl my-2 flex flex-col text-left"},[e("span",{staticClass:"text-sm font-medium"},[t._v(" "+t._s(s.nombre)+": "),e("b",{staticClass:"text-sm px-1 bg-green-500 text-white"},[t._v(t._s(s.count)+" / "+t._s(s.countToTal))])])])})),0)]):t._e(),e("div",{staticClass:"text-center flex flex-col lg:flex-row lg:flex-wrap"},t._l(t.dataList,(function(s,a){return e("div",{key:a,staticClass:"relative flex flex-col mx-2 border p-3 rounded-lg mt-2 lg:mt-0"},[e("div",{staticClass:"flex flex-col text-left text-xs w-full",staticStyle:{width:"240px !important"}},[e("div",{staticClass:"mt-5 border border-black p-2 flex flex-col"},[e("span",{staticClass:"text-lg text-center font-medium uppercase cursor-pointer"},[t._v(t._s(""+s.nombre))]),e("div",{staticClass:"h-px bg-black"}),e("span",{staticClass:"font-medium mt-2"},[e("i",{staticClass:"fas fa-user text-green-500 mr-2"}),t._v(" "+t._s(s.dni)+" ")]),e("span",{staticClass:"flex flex-col"},[t._v(" Modalidad: "),e("span",{staticClass:"font-bold text-lg"},[t._v(t._s(s.modalidad))])]),e("div",{staticClass:"flex justify-between"},[e("span",[t._v(" Aula: "),e("span",{staticClass:"font-bold text-xl"},[t._v(t._s(s.aula))])]),e("span",[t._v(" Asiento: "),e("span",{staticClass:"font-bold text-xl"},[t._v(t._s(s.asiento))])])]),e("div",{staticClass:"flex justify-center items-center text-center mt-2 cursor-pointer"},[e("img",{staticClass:"foto",attrs:{src:`${t.base_photo}${s.photo}`}})]),e("div",{staticClass:"w-full mt-3"},[s.is_register?t._e():e("vs-button",{staticClass:"focus:outline-none w-full",attrs:{danger:""},on:{click:function(e){t.item_selected=s,t.dialogConfirm=!0}}},[t._v("Marcar Ingreso")]),s.is_register?e("div",{staticClass:"rounded-3xl bg-green-500 text-center p-2 text-white w-full"},[t._v(t._s(s.fecha_ingreso))]):t._e()],1)])])])})),0),e("vs-dialog",{staticClass:"z-50",attrs:{width:"550px","not-center":"",blur:""},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",{staticClass:"not-margin"},[t._v(" Registrar "),e("b",[t._v("Postulante")])])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex justify-between"},[e("div"),e("div",{staticClass:"flex"},[e("vs-button",{attrs:{id:"btn_aceptar",autofocus:"",transparent:""},on:{click:function(e){return t.marcar_ingreso()}}},[t._v("Si")]),e("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v("Cancelar")])],1)])]},proxy:!0}]),model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[e("div",{staticClass:"con-content"},[e("p",[t._v(" Esta seguro que desea registar al postulante? "),e("br")])])]),e("vs-dialog",{attrs:{blur:"","full-screen":""},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",{staticClass:"not-margin"},[t._v("Datos en Tiempo Real")])]},proxy:!0}]),model:{value:t.verExamen,callback:function(e){t.verExamen=e},expression:"verExamen"}},[e("div",{staticClass:"con-content"},[e("div",t._l(t.pabellonList,(function(s,a){return e("div",{key:a,staticClass:"my-2"},[e("b",{staticClass:"text-xl cursor-pointer my-2",on:{click:function(e){t.localSelected=s}}},[t._v(t._s(a+1)+".- "+t._s(t.get_full_name_colegios(s)))]),e("b",{staticClass:"text-xl rounded-xl text-blue-500 p-1"},[t._v(" "+t._s(t.getTotalPorLocalConteo(s.id))+" / "+t._s(t.getTotalPorLocal(s.id))+" ")])])})),0),t.localSelected?e("div",{staticClass:"flex flex-col p-2 bg-gray-100 mt-5 text-xs"},[e("b",{staticClass:"text-blue-500 text-lg"},[t._v(t._s(t.localSelected.nombre))]),e("div",{staticClass:"flex flex-wrap w-1/full h-96 lg:h-full overflow-scroll lg:overflow-hidden"},t._l(t.getAulasByLocal(t.localSelected.id),(function(s,a){return e("ul",{key:a,staticClass:"flex flex-wrap mx-2"},[e("li",{staticClass:"my-3 bg-gray-200 p-2 rounded-xl"},[e("span",[e("b",{staticClass:"font-bold text-lg"},[t._v(t._s(s.aula))])]),e("span",{staticClass:"p-1 text-lg text-white rounded-lg ml-2",class:s.count>=s.total_asientos?"bg-green-500":"bg-red-400"},[e("b",[t._v(t._s(s.count))]),t._v(" / "),e("b",[t._v(t._s(s.total_asientos))])])])])})),0)]):t._e()])])],1)},l=[],i=s("be3b"),n={data(){return{dni:"",dataList:[],dialogConfirm:!1,item_selected:{},listaDownloadCredenciales:[],ver_resumen:!1,localList:[],pabellonList:[],aulastotalesList:[],dialogTiempoReal:!1,verCredenciales:!1,verExamen:!1,localSelected:null}},computed:{base_photo(){let t="https://backend.appadmision-unapiquitos.com/api/v1/";return t=t.replace("/api/v1/","/media/"),t},getTotalCredenciales(){if(this.listaDownloadCredenciales.length<=0)return 0;let t=0;return this.listaDownloadCredenciales.forEach(e=>{t+=e.count}),t},getTotalCredencialesTotales(){if(this.listaDownloadCredenciales.length<=0)return 0;let t=0;return this.listaDownloadCredenciales.forEach(e=>{t+=e.countToTal}),t}},watch:{verExamen(t){t||console.log("saliendo")},dialogConfirm(t){t&&setTimeout(()=>{let t=document.getElementById("btn_aceptar");t.focus()},100)},ver_resumen(t){t&&this.getResumenCredenciales()}},mounted(){this.get_list(),this.getResumenCredenciales(),setTimeout(()=>{this.$refs.txtdni.focus()},10),this.getLocales(),this.getPabellones()},methods:{get_full_name_colegios(t){const e=this.localList.find(e=>e.id===t.local);return e.nombre+" - "+t.nombre},getTotalPorLocalConteo(t){const e=this.aulastotalesList.filter(e=>e.pabellonId==t);let s=0;return e.forEach(t=>{s+=t.count}),s},getTotalPorLocal(t){const e=this.aulastotalesList.filter(e=>e.pabellonId==t);let s=0;return e.forEach(t=>{s+=t.total_asientos}),s},getAulasByLocal(t){const e=this.aulastotalesList.filter(e=>e.pabellonId==t);return e},async getLocales(){const{data:t}=await i["a"].get("local");this.localList=t},async getPabellones(){const{data:t}=await i["a"].get("pabellon");this.pabellonList=t},async getResumenAulas(){const{data:t}=await i["a"].get("get_resumen_aulas");this.aulastotalesList=t},getResumenCredenciales(){i["a"].get("getResumenCredenciales").then(t=>{this.listaDownloadCredenciales=t.data})},get_list(){try{const t=this.dni;t.length>8&&(this.dni=t.substring(0,8)),(0==t.length||t.length>=8)&&i["a"].get("get_list_postulante_ingresos",{params:{dni:t}}).then(t=>{this.dataList=t.data,1==this.dataList.length&&(this.item_selected=this.dataList[0],this.marcar_ingreso(),this.dni="",setTimeout(()=>{this.$refs.txtdni.focus()},100)),this.getResumenCredenciales()})}catch(t){}},async watch_reloj(){try{await i["a"].get("watch_reloj"),this.getResumenAulas(),this.verExamen&&setTimeout(()=>{console.log("consultando..."),this.watch_reloj()},1e3)}catch(t){}},async marcar_ingreso(){if(this.dni.length<=0)return;const t=this.$vs.loading();try{let e={id:this.item_selected.id};const{data:s}=await i["a"].post("marcar_ingreso_by_id/",e);if(s.length<=0)return void this.$vs.notification({title:"Examen",text:"Ocurrio un problema al registrar al postulante! 😢",color:"warning"});const a=s[0],l=this.dataList.findIndex(t=>t.id==a.id);l>-1?(this.dataList[l]=a,this.$vs.notification({title:"Examen",text:"El postulante fué registrado correctamente! 😎",color:"success"})):this.$vs.notification({title:"Examen",text:"No se encontró el registro! 😢",color:"warning"}),this.getResumenCredenciales()}catch(e){this.$vs.notification({title:"Examen",text:"Ocurrio un error al registrar al postulante! 😢",color:"danger"})}finally{t.close(),this.dialogConfirm=!1}}}},o=n,r=s("2877"),c=Object(r["a"])(o,a,l,!1,null,"46a9246a",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22d028.3013af88.js.map