(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221896"],{cb89:function(t,o,i){"use strict";i.r(o);var e=function(){var t=this,o=t._self._c;return o("vs-dialog",{attrs:{"prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("span",[t._v("Registro de pagos")])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"flex justify-between focus:outline-none"},[o("div",{staticClass:"flex"},[t.id&&"administrador"==t.get_auth.group?o("vs-button",{staticClass:"focus:outline-none",attrs:{danger:""},on:{click:t.delete_item}},[t._v(" Eliminar ")]):t._e(),t.id&&(t.is_exonerado||t.is_donacion)?o("vs-button",{attrs:{border:"",dark:""},on:{click:function(o){return t.printExonerado(t.id)}}},[t._v(" Imprimir ")]):t._e()],1),o("div",{staticClass:"flex"},[o("vs-button",{staticClass:"focus:outline-none",on:{click:t.save}},[t._v(" Guardar ")]),o("vs-button",{staticClass:"focus:outline-none",attrs:{dark:"",transparent:""},on:{click:t.exit}},[t._v(" Cancelar ")])],1)])]},proxy:!0}]),model:{value:t.dialogLocal,callback:function(o){t.dialogLocal=o},expression:"dialogLocal"}},[o("section",[o("div",[o("span",[t._v("Dni:")]),o("vs-input",{ref:"txtdni",attrs:{id:"txtdni"},model:{value:t.num_doc,callback:function(o){t.num_doc=o},expression:"num_doc"}})],1),o("div",{staticClass:"mt-2"},[o("span",[t._v("Num. Operación:")]),o("vs-input",{attrs:{type:"number"},model:{value:t.num_operacion,callback:function(o){t.num_operacion=o},expression:"num_operacion"}})],1),o("div",{staticClass:"mt-2"},[o("span",[t._v("Fecha:")]),o("vs-input",{attrs:{type:"date"},model:{value:t.fecha,callback:function(o){t.fecha=o},expression:"fecha"}})],1),o("div",{staticClass:"flex flex-col mt-2"},[o("span",[t._v("Nombre:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"p-3 bg-gray-100 rounded-2xl",domProps:{value:t.nombre},on:{input:function(o){o.target.composing||(t.nombre=o.target.value)}}})]),o("div",{staticClass:"flex justify-between"},[o("div",{staticClass:"mt-2"},[o("span",[t._v("Monto:")]),o("vs-input",{attrs:{type:"number"},model:{value:t.monto,callback:function(o){t.monto=o},expression:"monto"}})],1),o("div",{staticClass:"mt-2"},[o("span",[t._v("Monto 2:")]),o("vs-input",{attrs:{disabled:!0,type:"number"},model:{value:t.monto_full,callback:function(o){t.monto_full=o},expression:"monto_full"}})],1)]),o("div",{staticClass:"mt-2"},[o("vs-checkbox",{staticClass:"font-medium",model:{value:t.asosiado,callback:function(o){t.asosiado=o},expression:"asosiado"}},[t._v(" Es Asosiado ")]),o("span",{staticClass:"text-xs"},[t._v("(Los pagos soportarán la mitad de los precios si es asosiado a la universidad)")])],1),o("div",{staticClass:"mt-2"},[o("vs-checkbox",{staticClass:"font-medium",model:{value:t.is_donacion,callback:function(o){t.is_donacion=o},expression:"is_donacion"}},[t._v(" Es Donación ")])],1),o("div",{staticClass:"mt-5"},[o("span",{staticClass:"text-2xl font-medium text-blue-500"},[t._v("Datos Exonerado")]),o("div",{staticClass:"mt-2"},[o("vs-checkbox",{staticClass:"font-medium",model:{value:t.is_exonerado,callback:function(o){t.is_exonerado=o},expression:"is_exonerado"}},[t._v(" Es Exonerado ")])],1),o("div",{staticClass:"flex flex-col mt-2"},[o("span",[t._v("Documento Referencial:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.documento_referencial,expression:"documento_referencial"}],staticClass:"p-3 bg-gray-100 rounded-2xl",domProps:{value:t.documento_referencial},on:{input:function(o){o.target.composing||(t.documento_referencial=o.target.value)}}})]),o("div",{staticClass:"w-full"},[o("span",{staticClass:"text-xs"},[t._v("Modalidad")]),o("v-select",{attrs:{options:t.modalidad_data,label:"nombre",index:"id"},model:{value:t.modalidad,callback:function(o){t.modalidad=o},expression:"modalidad"}})],1)])])])},a=[],s=(i("e9f5"),i("f665"),i("be3b")),n={props:{dialog:{type:Boolean},item_selected:{type:Object,default:()=>({})}},data(){return{dialogLocal:!1,num_doc:"",num_operacion:"",nombre:"",monto:0,monto_full:0,id:0,is_exonerado:!0,documento_referencial:"",fecha:"",modalidad:{},modalidad_data:[],asosiado:!1,is_donacion:!1,is_extemporaneo:!1,admisionData:{}}},watch:{dialog(t){if(this.dialogLocal=t,t){if(this.clearData(),this.is_exonerado=!0,setTimeout(()=>{document.getElementById("vs-input--txtdni").focus()},100),this.getAdmision(),this.set_modalidad(),this.id=this.item_selected.id,this.fecha=(new Date).toISOString().slice(0,10),!this.id)return;this.$store.dispatch("pago/set_pago_banco_by_id",this.id).then(t=>{this.id?this.is_exonerado=t.is_exonerado:this.is_exonerado=!0,this.num_doc=t.num_doc,this.num_operacion=t.num_operacion,this.nombre=t.nombre,this.monto=t.monto,this.fecha=t.fecha,this.asosiado=t.asosiado,this.is_donacion=t.is_donacion,this.monto_full=t.monto_full,this.is_extemporaneo=t.is_extemporaneo,this.modalidad_data.length<=0?this.set_modalidad().then(()=>{this.modalidad=this.modalidad_data.find(o=>o.id==t.modalidad)}):this.modalidad=this.modalidad_data.find(o=>o.id==t.modalidad),this.documento_referencial=t.documento_referencial})}},dialogLocal(t){t||this.$emit("closedialog")},is_exonerado(t){t&&(this.asosiado=!1,this.is_donacion=!1,this.monto=0)},asosiado(t){t&&(this.is_exonerado=!1,this.is_donacion=!1)},is_donacion(t){t&&(this.is_exonerado=!1,this.asosiado=!1)}},computed:{get_auth(){return this.$store.getters["auth/get_auth"]}},methods:{async set_modalidad(){try{var t=this.$store.getters["modalidad/get_modalidad"];t.length<=0&&await this.$store.dispatch("modalidad/set_modalidad").then(o=>{t=o}),this.modalidad_data=t}catch(o){return null}},printExonerado(t){if(this.is_exonerado||this.is_donacion){let o=this.$router.resolve("/reporte_exonerado/"+t);window.open(o.href,"_blank")}},async delete_item(){if(this.id){const{status:t}=await s["a"].delete("pagos_banko/"+this.id);204==t?this.$vs.notification({title:"Registro de Pagos",text:"Eliminado correctamente! 😎",color:"success"}):this.$vs.notification({title:"Registro de Pagos",text:"No se pudo eliminar! 😢",color:"danger"}),this.$emit("actualizar"),this.exit()}},activarDesactivarBoolens(){this.asosiado&&(this.is_exonerado=!1,this.is_donacion=!1),this.is_exonerado&&(this.asosiado=!1,this.is_donacion=!1),this.is_donacion&&(this.asosiado=!1,this.is_exonerado=!1)},validar(){return!(this.num_doc.length<8||this.num_operacion.length<5||this.nombre.length<10||this.monto.toString().length<3)},async getAdmision(){if(this.item_selected.id)return;const{data:t}=await s["a"].get("admision");this.admisionData=t[0];const{fechaExtemporaneo:o}=this.admisionData,i=Date().now;o==i&&(this.is_extemporaneo=!0)},async save(){if(!this.validar)return;let t="";"sede"==this.get_auth.group&&(t=this.get_auth.username),this.asosiado&&(this.is_exonerado=!1,this.is_donacion=!1),this.is_exonerado&&(this.asosiado=!1,this.is_donacion=!1),this.is_donacion&&(this.asosiado=!1,this.is_exonerado=!1);const o={dni:this.num_doc,num_ticket:this.num_operacion,monto:this.monto,id:this.id,nombre:this.nombre,is_exonerado:this.is_exonerado,documento_referencial:this.documento_referencial,modalidad:this.modalidad?this.modalidad.id:null,asosiado:this.asosiado,fecha:this.fecha,sede:t,is_donacion:this.is_donacion,monto_full:this.monto,is_extemporaneo:this.is_extemporaneo};try{let t=null;if(this.id?(delete o.sede,delete o.monto_full,await this.$store.dispatch("pago/update_pago",[o]).then(o=>{t=o})):(o.fecha=this.fecha,await this.$store.dispatch("pago/add_pago",[o]).then(o=>{t=o})),null!=t){if("exonerado-repetido"==t)return void this.$vs.notification({title:"Registro de Pagos",text:"Ya existe un pago con el mismo dni en la modalidad de exonerado! 🤦‍♀️",color:"danger"});this.$vs.notification({title:"Registro de Pagos",text:"Los cambios se guardaron correctamente! 😎",color:"success"}),this.printExonerado(t[0].id),this.$emit("actualizar"),this.exit()}else this.$vs.notification({title:"Registro de Pagos",text:"No se pudo realizar los cambios! 😢",color:"danger"})}catch(i){this.$vs.notification({title:"Registro de Pagos",text:"Ocurrio un error! 😢",color:"danger"})}},exit(){this.$emit("closedialog"),this.dialogLocal=!1},clearData(){this.num_doc="",this.num_operacion="",this.nombre="",this.monto=0,this.monto_full=0,this.id=0,this.is_exonerado=!1,this.documento_referencial="",this.fecha="",this.modalidad={}}}},d=n,l=i("2877"),c=Object(l["a"])(d,e,a,!1,null,"ddb0b870",null);o["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d221896.279b614b.js.map