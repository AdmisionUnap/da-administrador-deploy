(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a499e"],{"06ac":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("list")],1)},c=[],i=function(){var t=this,e=t._self._c;return e("div",[e("filtros",{on:{filtros:t.get_vacante_data}}),e("div",{staticClass:"flex justify-between"},[e("div",{staticClass:"mt-3"},[e("vs-button",{staticClass:"focus:outline-none",on:{click:function(e){return t.guardar_cambios()}}},[t._v(" Guardar Cambios ")])],1)]),e("vs-table",{staticClass:"mt-2",attrs:{striped:""},scopedSlots:t._u([{key:"header",fn:function(){return[e("vs-checkbox",{attrs:{success:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("i",{staticClass:"fas fa-check-double"})]},proxy:!0}]),model:{value:t.marcar_todos,callback:function(e){t.marcar_todos=e},expression:"marcar_todos"}},[t._v(" Marcar Todos ")])]},proxy:!0},{key:"thead",fn:function(){return[e("vs-tr",t._l(t.columns,(function(a,s){return e("vs-th",{key:s,attrs:{sort:""},on:{click:function(e){t.vacanteData=t.$vs.sortData(e,t.vacanteData,a.name)}}},[t._v(" "+t._s(a.text)+" ")])})),1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.vacanteData,(function(a,s){return e("vs-tr",{key:s,attrs:{data:a}},t._l(t.columns,(function(c,i){return e("vs-td",{key:i,attrs:{edit:0==i||1==i},on:{click:()=>{0!=i&&1!=i||t.$emit("edit",a)}}},["vacante"===c.name?e("tr",[e("vs-checkbox",{attrs:{success:"",val:a},scopedSlots:t._u([{key:"icon",fn:function(){return[e("i",{staticClass:"fas fa-check-double"})]},proxy:!0}],null,!0),model:{value:t.checksData[s],callback:function(e){t.$set(t.checksData,s,e)},expression:"checksData[i]"}})],1):e("tr",[t._v(" "+t._s(a[c.name])+" ")])])})),1)}))},proxy:!0},{key:"notFound",fn:function(){return[t._v(" No existen datos 😢 ")]},proxy:!0}])})],1)},l=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("div",{staticClass:"flex flex-col"},[e("span",{staticClass:"text-lg font-medium"},[t._v("Filtro de Vacantes")]),e("div",{staticClass:"w- full flex justify-between mt-3 items-center"},[e("span",{staticClass:"w-2/5"},[t._v(" Escuela "),e("v-select",{staticClass:"w-full",attrs:{options:t.get_escuela_select,label:"nombre",index:"id"},model:{value:t.filtros.escuela,callback:function(e){t.$set(t.filtros,"escuela",e)},expression:"filtros.escuela"}})],1),e("div",{staticClass:"mx-2"}),e("span",{staticClass:"w-2/5"},[t._v(" Modalidad "),e("v-select",{staticClass:"w-full",attrs:{options:t.get_modalidad_select,label:"nombre",index:"id"},model:{value:t.filtros.modalidad,callback:function(e){t.$set(t.filtros,"modalidad",e)},expression:"filtros.modalidad"}})],1),e("div",{staticClass:"mx-2"}),e("span",{staticClass:"w-1/5"},[t._v(" Sede/Filial "),e("v-select",{staticClass:"w-full",attrs:{options:t.get_sede_select,label:"nombre",index:"id"},model:{value:t.filtros.sede,callback:function(e){t.$set(t.filtros,"sede",e)},expression:"filtros.sede"}})],1),e("span",[e("vs-button",{staticClass:"focus:outline-none",on:{click:function(e){return t.$emit("filtros",t.filtros)}}},[t._v(" Buscar ")])],1)])])])},n=[],d={data(){return{filtros:{escuela:0,modalidad:0,sede:0}}},computed:{get_escuela_select(){return this.$store.getters["escuela/get_escuela_select"]},get_modalidad_select(){return this.$store.getters["modalidad/get_modalidad_select"]},get_sede_select(){return this.$store.getters["sede/get_sede_select"]}},mounted(){this.$store.dispatch("escuela/set_escuela"),this.$store.dispatch("modalidad/set_modalidad"),this.$store.dispatch("sede/set_sede")}},r=d,u=a("2877"),f=Object(u["a"])(r,o,n,!1,null,"52bd22e6",null),v=f.exports,_=a("be3b"),m={components:{filtros:v},data(){return{filtros:{},columns:[{name:"vacante",text:"Estado"},{name:"escuela",text:"Escuela"},{name:"modalidad",text:"Modalidad"},{name:"sede",text:"Sede"},{name:"cant_vacante",text:"Vacantes"}],vacanteData:[],checksData:[],marcar_todos:!1}},watch:{marcar_todos(t){for(let e=0;e<this.checksData.length;e++)this.checksData[e]=t}},methods:{async get_vacante_data(t){try{this.filtros=t;const e=this.filtros.escuela?this.filtros.escuela.id:0,a=this.filtros.modalidad?this.filtros.modalidad.id:0,s=this.filtros.sede?this.filtros.sede.id:0,{data:c}=await _["a"].get("get_vacante_by_modalidad_escuela_sede",{params:{escuela:e,modalidad:a,sede:s}});this.checksData=[],this.vacanteData=c,this.vacanteData.forEach((t,e)=>{this.checksData[e]=t.vacante})}catch(e){return null}},async guardar_cambios(){const t=this.$vs.loading({color:"success"});try{if(this.vacanteData.length<=0)return void this.$vs.notification({title:"Vacante",text:"No existen datos en la fila! 😢",color:"danger"});const e=this.vacanteData.map((t,e)=>({id:t.id,vacante:this.checksData[e],cant_vacante:t.cant_vacante,modalidad:t.modalidad_id,escuela:t.escuela_id,sede:t.sede_id})),{status:a}=await _["a"].put("vacante/",e);if(200!=a)return void this.$vs.notification({title:"Vacante",text:"Ocurrio un problema al guardar los datos! 😢",color:"danger"});this.$vs.notification({title:"Vacante",text:"Los datos se guardaron correctamente! 😎",color:"success"})}catch(e){}finally{t.close()}}}},h=m,p=Object(u["a"])(h,i,l,!1,null,"34d9afc9",null),x=p.exports,b={components:{List:x}},k=b,g=Object(u["a"])(k,s,c,!1,null,"6b70a30e",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0a499e.fc1b0c60.js.map