(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41da0f36"],{"27ab":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"m-2 flex justify-between flex-wrap"},[e("div",{staticClass:"ml-5 flex bg-blue-100 p-2 rounded-xl"},[t._m(0),e("div",{staticClass:"flex items-end text-xs"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.codigo_barra,expression:"codigo_barra"}],staticClass:"p-3 bg-gray-100 rounded-xl block w-20",attrs:{id:"txtidcodigo",type:"number"},domProps:{value:t.codigo_barra},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.confirmAutomatico()},input:function(e){e.target.composing||(t.codigo_barra=e.target.value)}}})])]),t._m(1)]),e("section",[e("div",{staticClass:"text-center flex flex-col lg:flex-row lg:flex-wrap"},t._l(t.data_list,(function(s,a){return e("div",{key:a,staticClass:"relative flex flex-col mx-2 border p-3 rounded-lg mt-2 lg:mt-0"},[e("div",{staticClass:"flex flex-col text-left text-xs w-full",staticStyle:{width:"240px !important"}},[e("div",{staticClass:"mt-5 border border-black p-2 flex flex-col"},[e("span",{staticClass:"text-lg text-center font-medium uppercase cursor-pointer"},[t._v(t._s(""+s.nombre))]),e("div",{staticClass:"h-px bg-black"}),e("span",{staticClass:"font-medium mt-2"},[e("i",{staticClass:"fas fa-user text-green-500 mr-2"}),t._v(" "+t._s(s.dni))]),e("span",{staticClass:"font-medium mt-2"},[e("i",{staticClass:"fas fa-calendar text-green-500 mr-2"}),t._v(" "+t._s(s.fecha_recepcion))]),e("div",{staticClass:"flex justify-center items-center text-center mt-2 cursor-pointer"},[e("img",{staticClass:"foto",attrs:{src:`${t.base_photo}${s.foto}`}})])])])])})),0)]),e("vs-dialog",{staticClass:"z-50",attrs:{width:"550px","not-center":"",blur:""},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",{staticClass:"not-margin"},[t._v("Recepcionar "),e("b",[t._v("Documento del Postulante")])])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex justify-between"},[e("div"),e("div",{staticClass:"flex"},[e("vs-button",{attrs:{id:"btn_aceptar",autofocus:"",transparent:""},on:{click:function(e){return t.recepcionar_documento()}}},[t._v(" Si ")]),e("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.dialogConfirm=!1}}},[t._v(" Cancelar ")])],1)])]},proxy:!0}]),model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[e("div",{staticClass:"con-content"},[e("p",[t._v(" Esta seguro que desea recepcionar el documento del postulante? "),e("br")])])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"text-xs"},[t._v("Ingrese el Codigo de Barras")]),e("img",{staticClass:"w-24",attrs:{src:"https://static.vecteezy.com/system/resources/previews/001/199/360/non_2x/barcode-png.png"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col"},[e("h1",{staticClass:"text-2xl font-medium"},[t._v("Recepción de Documentos")])])}],o=s("be3b"),n={data(){return{codigo_barra:"",dialogConfirm:!1,data_list:[]}},computed:{get_auth(){return this.$store.getters["auth/get_auth"]},base_photo(){let t="http://da20242.localhost:8000/api/v1/";return t=t.replace("/api/v1/","/media/"),t}},mounted(){this.set_sede().then(()=>{setTimeout(()=>{this.focusss("txtidcodigo")},200)}),this.get_lista()},methods:{get_lista(){const t="sede"==this.get_auth.group;let e="";t&&(e=this.get_auth.username),o["a"].get("lista_recepcionados",{params:{sede:e}}).then(t=>{this.data_list=t.data})},confirmAutomatico(){this.dialogConfirm=!0,setTimeout(()=>{document.getElementById("btn_aceptar").click(),this.dialogConfirm=!1},100)},focusss(t){document.getElementById(t).focus()},async set_sede(){try{const{data:t}=await o["a"].get("cede");this.sede_data=t}catch(t){return null}},recepcionar_documento(){if(null==this.codigo_barra||0==this.codigo_barra)return;const t="sede"==this.get_auth.group;let e="";t&&(e=this.get_auth.username),o["a"].get("recepcionar_documento_postulante",{params:{postulante:this.codigo_barra,sede:e}}).then(t=>{if(200==t.status)return this.$vs.notification({title:"Postulante",text:"Documento recepcionado correctamente! 😎",color:"success"}),this.codigo_barra=null,this.focusss("txtidcodigo"),void this.get_lista();this.$vs.notification({title:"Postulante",text:"No existe el número de expendiente! 😢",color:"danger"}),this.codigo_barra=null,this.focusss("txtidcodigo")}).catch(()=>{this.$vs.notification({title:"Postulante",text:"No existe el número de expendiente! 😢",color:"danger"}),this.codigo_barra=null,this.focusss("txtidcodigo")})}}},r=n,c=(s("591b"),s("2877")),l=Object(c["a"])(r,a,i,!1,null,"63cee369",null);e["default"]=l.exports},"591b":function(t,e,s){"use strict";s("b768")},b768:function(t,e,s){}}]);
//# sourceMappingURL=chunk-41da0f36.773d2fb7.js.map