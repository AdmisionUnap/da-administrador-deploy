(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da7bc"],{"6c92":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex justify-between"},[e("vs-button",{staticClass:"focus:outline-none",on:{click:function(e){return t.add()}}},[t._v("Agregar Nuevo")]),e("h1",{staticClass:"text-3xl text-gray-400 font-medium"},[t._v("Registro de Nota")])],1),e("list",{attrs:{dataList:t.get_nota},on:{edit:t.edit}}),e("add",{attrs:{dialog:t.dialog,item_selected:t.item_selected},on:{changedialog:function(e){t.dialog=!1},closedialog:function(e){return t.closeDialog()}}})],1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"center mt-5 w-full"},[e("div",{staticClass:"p-5 rounded-3xl bg-gray-200 w-32"},[e("span",[t._v("Total: "),e("b",{staticClass:"text-3xl"},[t._v(t._s(t.dataListLocal.length))])])]),e("div",{staticClass:"mt-5"},[e("vs-button",{attrs:{success:""},on:{click:t.exportToExcel}},[t._v(" Exportar a Excel ")])],1),e("vs-table",{staticClass:"mt-5",attrs:{striped:""},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"mb-2 text-lg font-medium px-2"},[e("h1",[t._v("Filtros")]),e("div",{staticClass:"w-1/12 flex items-center"},[e("span",{attrs:{for:""}},[e("vs-radio",{attrs:{val:"true"},on:{input:function(e){return t.$emit("limits",!0)}},model:{value:t.limite,callback:function(e){t.limite=e},expression:"limite"}},[t._v("50")])],1),e("span",{attrs:{for:""}},[e("vs-radio",{attrs:{val:"false"},on:{input:function(e){return t.$emit("limits",!1)}},model:{value:t.limite,callback:function(e){t.limite=e},expression:"limite"}},[t._v("Todos")])],1)])]),e("vs-input",{attrs:{border:"",placeholder:"Buscar"},model:{value:t.dni,callback:function(e){t.dni=e},expression:"dni"}})]},proxy:!0},{key:"thead",fn:function(){return[e("vs-tr",t._l(t.columns,(function(a,o){return e("vs-th",{key:o,attrs:{sort:""},on:{click:function(e){t.dataListLocal=t.$vs.sortData(e,t.dataListLocal,a.name)}}},[t._v(" "+t._s(a.text)+" ")])})),1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.dataListLocal,(function(a,o){return e("vs-tr",{key:o,attrs:{data:a}},t._l(t.columns,(function(o,i){return e("vs-td",{key:i,attrs:{edit:0==i},on:{click:function(e){return t.$emit("edit",a)}}},[e("span",{class:{" font-bold":"promedio"==o.name||"dni"==o.name}},[t._v(t._s(a[o.name]))])])})),1)}))},proxy:!0},{key:"notFound",fn:function(){return[t._v(" No existen datos 😢 ")]},proxy:!0}])})],1)},s=[],l=a("be3b"),r={props:{dataList:{type:Array}},data:()=>({columns:[{name:"id",text:"Id"},{name:"dni",text:"Dni"},{name:"nombre",text:"Nombre"},{name:"nota1",text:"N. 1"},{name:"nota2",text:"N. 2"},{name:"nota3",text:"N. 3"},{name:"nota4",text:"N. 4"},{name:"nota5",text:"N. 5"},{name:"nota6",text:"N. 6"},{name:"nota7",text:"N. 7"},{name:"nota8",text:"N. 8"},{name:"nota9",text:"N. 9"},{name:"nota10",text:"N. 10"},{name:"nota11",text:"N. 11"},{name:"nota12",text:"N. 12"},{name:"nota13",text:"N. 13"},{name:"nota14",text:"N. 14"},{name:"nota15",text:"N. 15"},{name:"nota16",text:"N. 16"},{name:"promedio",text:"Promedio"}],dataListLocal:[],limite:"true",dni:""}),watch:{dataList(t){this.dataListLocal=t},limite(t){this.$store.dispatch("nota/set_nota",{dni:this.dni,limit:t})},dni(t){const e=t.length;0!=e&&4!=e&&8!=e||this.$store.dispatch("nota/set_nota",{dni:t,limit:this.limite})}},methods:{base_photo(){let t="http://da20242.localhost:8000/api/v1/";return t=t.replace("/api/v1/","/media/"),t},async exportToExcel(){const{data:t}=await l["a"].get("getExcelNotas");var e=document.createElement("a");e.href=this.base_photo()+t.excel_file,e.click()}}},c=r,d=a("2877"),u=Object(d["a"])(c,n,s,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t._self._c;return e("vs-dialog",{attrs:{blur:"","prevent-close":"","not-close":"","not-center":""},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",[e("b",[t._v("Registro de Nota")])])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex justify-between focus:outline-none"},[e("div",[t.id&&!t.bloquear?e("vs-button",{staticClass:"focus:outline-none",attrs:{transparent:"",color:"danger"},on:{click:function(e){t.dialogConfirm=!0}}},[t._v("Eliminar")]):t._e()],1),e("div",{staticClass:"flex"},[t.bloquear?t._e():e("vs-button",{staticClass:"focus:outline-none",on:{click:t.save}},[t._v("Guardar")]),e("vs-button",{staticClass:"focus:outline-none",attrs:{dark:"",transparent:""},on:{click:function(e){return t.exit()}}},[t._v("Cancelar")])],1)])]},proxy:!0}]),model:{value:t.dialogLocal,callback:function(e){t.dialogLocal=e},expression:"dialogLocal"}},[e("div",{staticClass:"w-full flex flex-col",on:{submit:function(t){t.preventDefault()}}},[e("div",[e("span",{staticClass:"font-medium text-xl text-green-400"},[t._v("Datos de Personales")]),e("div",{staticClass:"mt-5"},[e("label",[t._v("Documento de Identidad (DNI):")]),e("div",{staticClass:"flex"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.dni,expression:"dni"}],ref:"txtdni",staticClass:"p-2 px-4 border-gray-200 border-2 rounded-lg block w-full focus:outline-none",attrs:{placeholder:"Documento de Identidad",type:"number",autofocus:"",disabled:t.bloquear},domProps:{value:t.dni},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filtrar()},input:function(e){e.target.composing||(t.dni=e.target.value)}}}),e("vs-button",{staticClass:"outline-none",on:{click:function(e){return t.filtrar()}}},[t._v("Consultar")])],1),e("div",{staticClass:"m-2"},[e("span",{staticClass:"text-xl font-bold"},[t._v(t._s(t.nombre))]),e("div",{staticClass:"flex justify-center items-center text-center mt-2"},[t.photo?e("img",{staticClass:"foto",attrs:{src:`${t.base_photo}${t.photo}`}}):t._e()])])])]),e("div",{staticClass:"mt-5"},[e("span",{staticClass:"font-medium text-xl text-green-400"},[t._v("Registro de Notas")]),e("div",{staticClass:"border-b pb-2"},[e("div",{staticClass:"flex items-center mt-2"},[e("label",{staticClass:"mr-2 font-medium"},[t._v("Nota PPA:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota_ppa,expression:"nota_ppa"}],ref:"txtPpa",staticClass:"p-2 px-4 border-gray-200 border-2 rounded-lg block focus:outline-none",attrs:{placeholder:"PPA",type:"number",disabled:t.bloquear},domProps:{value:t.nota_ppa},on:{input:function(e){e.target.composing||(t.nota_ppa=e.target.value)}}})]),e("div",{staticClass:"flex items-center mt-2"},[e("label",{staticClass:"mr-2 font-medium"},[t._v("Evaluacion 20%:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.evaluacion20,expression:"evaluacion20"}],ref:"txtPpa",staticClass:"p-2 px-4 border-gray-200 border-2 rounded-lg block focus:outline-none",attrs:{placeholder:"Evaluacion 20%",type:"number",disabled:t.bloquear},domProps:{value:t.evaluacion20},on:{input:function(e){e.target.composing||(t.evaluacion20=e.target.value)}}})])]),e("div",{staticClass:"mt-5"},t._l(16,(function(a){return e("div",{key:a,staticClass:"flex items-center mt-2"},[e("label",{staticClass:"mr-2 font-medium"},[t._v("Nota "+t._s(a)+":")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notas[a],expression:"notas[i]"}],ref:"txtnota"+a,refInFor:!0,staticClass:"p-2 px-4 border-gray-200 border-2 rounded-lg block focus:outline-none",attrs:{placeholder:"Nota "+a,type:"number"},domProps:{value:t.notas[a]},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.next(a)},input:function(e){e.target.composing||t.$set(t.notas,a,e.target.value)}}})])})),0)])]),e("vs-dialog",{staticClass:"z-50",attrs:{width:"550px","not-center":"",blur:""},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",{staticClass:"not-margin"},[t._v(" Eliminar "),e("b",[t._v("Usuario")])])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex justify-between"},[e("div"),e("div",{staticClass:"flex"},[e("vs-button",{attrs:{transparent:""},on:{click:t.remove}},[t._v("Si")]),e("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v("Cancelar")])],1)])]},proxy:!0}]),model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[e("div",{staticClass:"con-content"},[e("p",[t._v(" Esta seguro que desea eliminar el usuario? "),e("br"),e("b",[t._v("Esta acción no se puede deshacer")]),t._v(". ")])])])],1)},h=[],v={props:{dialog:{type:Boolean,default:!1},item_selected:{type:Object,default:()=>null}},data(){return{dialogLocal:!1,dialogConfirm:!1,id:null,dni:"",notas:{},nombre:"",photo:"",nota_ppa:0,evaluacion20:0,bloquear:!1}},computed:{base_photo(){let t="http://da20242.localhost:8000/api/v1/";return t=t.replace("/api/v1/","/media/"),t},get_auth(){return this.$store.getters["auth/get_auth"]}},watch:{dialog(t){this.dialogLocal=t,t?setTimeout(()=>{this.$refs.txtdni.focus()},10):this.bloquear=!1},dialogLocal(t){t||(this.$emit("changedialog",t),this.clearData())},item_selected(t){if(t){this.bloquear="administrador"!=this.get_auth.group,this.clearData(),this.id=t.id,this.dni=t.dni,this.nombre=t.nombre,this.nota_ppa=t.ppa,this.evaluacion20=t.evaluacion20||0;for(let e=1;e<=16;e++){const a=t["nota"+e];this.notas[e]=a}this.filtrar()}else this.clearData()}},methods:{validar_nota_dni(t){const e=this.$store.getters["nota/get_nota_by_dni"](t);return!e||(!!(Object.entries(e).length<=0||this.id)||(this.$vs.notification({title:"Notas",text:`Las notas del postulante con el dni ${t} ya se registraron! 😢`,color:"danger"}),!1))},next(t){16!=t?setTimeout(()=>{this.$refs["txtnota"+(t+1)][0].focus()},10):this.save()},async filtrar(){if(this.validar_nota_dni(this.dni)){var t=[];await this.$store.dispatch("postulante/set_postulante_by_dni",this.dni).then(e=>{t=e,this.dni=this.dni||"",t&&this.dni.length>0&&(t=t[0],this.nombre=`${t.apellido_paterno} ${t.apellido_materno} ${t.nombre}`,this.photo=t.photo,this.$refs["txtnota1"][0].focus())})}},clearData(){this.notas={},this.id=null,this.dni=null,this.nombre="",this.photo="",this.nota_ppa=0,this.evaluacion20=0},async remove(){const t=this.$vs.loading();this.dialogConfirm=!1;try{const{status:e}=await l["a"].delete(`nota/${this.id}/`);if(204!=e)return void this.$vs.notification({title:"Notas",text:"No se pudo eliminar, intentelo denuevo! 😢",color:"warning"});this.$vs.notification({title:"Notas",text:"Nota eliminada correctamente! 😎",color:"success"}),this.exit()}catch(e){this.$vs.notification({title:"Notas",text:"No se pudo eliminar, debido a un error en el servidor! 😢",color:"danger"})}finally{t.close()}},validar(){try{let t=!0;this.dni.length<8&&(t=!1),this.nota_ppa=this.nota_ppa||0,0!=this.nota_ppa.length&&0!=this.evaluacion20.length||(t=!1);for(let e=1;e<=16;e++){const a=this.notas[e];a?(a.toString().length>2||parseInt(a)>20||parseInt(a)<0)&&(t=!1):this.notas[e]=0}return t||this.$vs.notification({title:"Notas",text:"Por favor, verifique los campos! 😢",color:"warning"}),t}catch(t){return this.$vs.notification({title:"Notas",text:"Por favor, verifique los campos! 😢",color:"danger"}),!1}},exit(){this.$emit("closedialog"),this.dialogLocal=!1,this.clearData()},async save(){const t=this.$vs.loading();try{if(!this.validar())return;if(!this.validar_nota_dni(this.dni))return;let e={},a=0,o=0,i=0;for(let t=1;t<=16;t++){const i=parseInt(this.notas[t]);e["nota"+t]=i,i>0&&(a++,o+=i)}i=o/a;let n=[];if(e.dni=this.dni,e.promedio=parseFloat(i.toFixed(3))||0,e.nombre=this.nombre,e.ppa=this.nota_ppa||0,e.evaluacion20=parseFloat(this.evaluacion20)||0,e.created_user=this.get_auth.username,this.id?(e.modified_user=this.get_auth.username,e.id=this.id,await this.$store.dispatch("nota/update_nota",[e]).then(t=>{n=t})):await this.$store.dispatch("nota/add_nota",[e]).then(t=>{n=t}),!n)return void this.$vs.notification({title:"Nota",text:"No se pudo realizar la acción, vuelve a intentarlo! 😢",color:"danger"});this.$vs.notification({title:"Nota",text:"Acción completada correctamente! 😎",color:"success"}),this.exit()}catch(e){console.error(e)}finally{t.close()}}}},f=v,x=Object(d["a"])(f,p,h,!1,null,null,null),_=x.exports,g={components:{List:m,Add:_},data(){return{nota_data:[],dialog:!1,item_selected:{}}},computed:{get_nota(){return this.$store.getters["nota/get_nota"]}},mounted(){this.$store.dispatch("nota/set_nota")},methods:{closeDialog(){this.dialog=!1,this.item_selected=null},add(){this.item_selected=null,this.dialog=!0},edit(t){this.item_selected=t,this.item_selected&&(this.dialog=!0)}}},b=g,y=Object(d["a"])(b,o,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d0da7bc.6f559503.js.map