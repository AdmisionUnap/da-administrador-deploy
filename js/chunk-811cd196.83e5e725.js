(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-811cd196"],{"1e6a":function(t,e,s){t.exports=s.p+"img/unap.9376dc64.jpg"},"25f0":function(t,e,s){"use strict";var a=s("6eeb"),i=s("825a"),r=s("d039"),c=s("ad6d"),n="toString",d=RegExp.prototype,l=d[n],o=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),v=l.name!=n;(o||v)&&a(RegExp.prototype,n,(function(){var t=i(this),e=String(t.source),s=t.flags,a=String(void 0===s&&t instanceof RegExp&&!("flags"in d)?c.call(t):s);return"/"+e+"/"+a}),{unsafe:!0})},"38a3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v(" Generando Reporte.... "),t.show?s("reporte-registro",{attrs:{item_selected:t.item_selected}}):t._e()],1)},i=[],r=(s("96cf"),s("1da1")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-html2pdf",{ref:"html2Pdf",staticClass:" h-full m-0 p-0",attrs:{"show-layout":!1,"float-layout":!0,"enable-download":!1,"preview-modal":!0,"paginate-elements-by-height":1400,filename:"Registro-"+t.item_selected.dni,"pdf-quality":2,"manual-pagination":!1,"pdf-format":"a4","pdf-orientation":"portrait","pdf-content-width":"800px"},on:{change:t.close}},[a("section",{staticClass:"m-0 p-14 text-black text-sm font-medium",attrs:{slot:"pdf-content"},slot:"pdf-content"},[a("section",{staticClass:" flex justify-between items-center m-0"},[a("div",{staticClass:" w-24"},[a("img",{attrs:{src:s("1e6a"),alt:""}})]),a("div",{staticClass:" w-48 text-right uppercase"},[a("span",[t._v("dirección de admisión")])])]),a("section",{staticClass:"mt-3"},[a("div",{staticClass:" text-center"},[a("h1",{staticClass:" text-4xl font-bold"},[t._v(t._s(t.item_selected.admision))]),a("h2",{staticClass:" text-xl"},[t._v(t._s(t.item_selected.modalidad))]),a("h3",{staticClass:" text-lg"},[t._v(t._s(t.item_selected.modalidad_referencia))])])]),a("section",{staticClass:" mt-3 flex items-center justify-center text-lg"},[a("div",{staticClass:" border border-black w-3/5"},[a("div",{staticClass:" flex p-2"},[a("div",{staticClass:" w-1/2"},[a("span",[t._v("Expendiende N°")])]),a("div",[t._v(" : ")]),a("div",{staticClass:" w-1/2 flex items-center justify-center text-center font-bold"},[a("span",[t._v(t._s(t.completar00(t.item_selected.id)))])])]),a("div",{staticClass:" flex p-2"},[a("div",{staticClass:" w-1/2"},[a("span",[t._v("Código Postulante")])]),a("div",[t._v(" : ")]),a("div",{staticClass:" w-1/2 flex items-center justify-center text-center font-bold"},[a("span",[t._v(t._s(t.item_selected.dni))])])])])]),a("section",{staticClass:" mt-5"},[a("div",{staticClass:" flex"},[a("div",{staticClass:" w-1/5"},[t._v(" Nombres ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-4/5 border-black border-b text-center uppercase"},[a("span",[t._v(t._s(t.item_selected.nombre))])])]),a("div",{staticClass:" flex mt-3"},[a("div",{staticClass:" w-1/5"},[t._v(" Apellidos ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-4/5 border-black border-b text-center uppercase"},[a("span",[t._v(t._s(t.item_selected.apellido_paterno+" "+t.item_selected.apellido_materno))])])]),a("div",{staticClass:" flex mt-3"},[a("div",{staticClass:" w-1/5"},[t._v(" Dni ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-4/5 border-black border-b text-center"},[a("span",[t._v(t._s(t.item_selected.dni))])])]),a("div",{staticClass:" flex mt-3"},[a("div",{staticClass:" w-1/5"},[t._v(" Domicilio ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-4/5 border-black border-b uppercase text-center"},[a("span",[t._v(t._s(t.item_selected.direccion))])])]),a("div",{staticClass:" flex mt-3"},[a("div",{staticClass:" w-1/5"},[t._v(" Distrito ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-4/5 border-black border-b text-center uppercase"},[a("span",[t._v(t._s(t.item_selected.distrito))])])]),a("div",{staticClass:" flex mt-3"},[a("div",{staticClass:" w-1/5"},[t._v(" Telefono Fijo ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-2/5 border-black border-b text-center"},[a("span",[t._v(t._s(t.item_selected.telefono))])])]),a("div",{staticClass:" flex mt-3"},[a("div",{staticClass:" w-1/5"},[t._v(" Celular ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-2/5 border-black border-b text-center"},[a("span",[t._v(t._s(t.item_selected.celular))])])])]),a("section",{staticClass:" mt-10"},[a("div",{staticClass:" text-center font-semibold text-lg"},[a("span",[t._v("Facultad a la que postula")])])]),a("section",{staticClass:" mt-10"},[a("div",{staticClass:" flex"},[a("div",{staticClass:" w-3/12"},[t._v(" Programa de Estudio ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-5/12 border-black border-b text-center uppercase"},[a("span",[t._v(t._s(t.item_selected.escuela))])]),a("div",[t._v("Código:")]),a("div",{staticClass:" w-4/12 border-black border-b text-center uppercase"},[a("span",[t._v(t._s(t.item_selected.codigo_escuela))])])]),a("div",{staticClass:" flex mt-3"},[a("div",{staticClass:" w-4/12"},[t._v(" Modalidad que postula ")]),a("div",[t._v(":")]),a("div",{staticClass:" w-4/12 border-black border-b text-center uppercase"},[a("span",[t._v(t._s(t.item_selected.modalidad))])]),a("div",[t._v("Código:")]),a("div",{staticClass:" w-4/12 border-black border-b text-center uppercase"},[a("span",[t._v(t._s(t.item_selected.codigo_modalidad))])])])]),a("section",{staticClass:" mt-10 flex text-center justify-center"},[a("div",{staticClass:" border border-black w-3/5"},[a("div",[t._v(" Registrador ")]),a("div",{staticClass:"border-black border-b"},[a("span")]),a("div",{staticClass:" flex p-2"},[a("div",[t._v("Firma:")])]),a("div",{staticClass:"border-black border-b p-5"}),a("div",{staticClass:" flex p-2"},[a("div",[t._v("Nombre:")]),a("div",{staticClass:" text-center w-full font-medium uppercase"},[a("span",[t._v(t._s(t.get_auth.first_name))])])])])])])])],1)},n=[],d=(s("d3b7"),s("25f0"),function(){return s.e("chunk-958b6264").then(s.bind(null,"6480"))}),l={props:{item_selected:{type:Object}},components:{VueHtml2pdf:d},computed:{get_auth:function(){return this.$store.getters["auth/get_auth"]}},mounted:function(){var t=this;setTimeout((function(){t.generateReport()}),500)},destroyed:function(){this.$emit("hasgenerate")},methods:{close:function(){this.$emit("hasgenerate")},generateReport:function(){this.$refs.html2Pdf.generatePdf()},completar00:function(t){if(t.toString().length<10){for(var e=10-t.toString().length,s="",a=0;a<e;a++)s+="0";return s+=t.toString(),s}}}},o=l,v=s("2877"),u=Object(v["a"])(o,c,n,!1,null,"6df9b9d0",null),p=u.exports,_={components:{ReporteRegistro:p},data:function(){return{item_selected:{},show:!1}},methods:{set_postulante:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("postulante/set_postulante_by_id",{id:t.$route.params.id,conFoto:!1}).then((function(e){t.item_selected=e[0]}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/set_user");case 2:return e.next=4,t.set_postulante();case 4:t.show=!0;case 5:case"end":return e.stop()}}),e)})))()}},m=_,f=Object(v["a"])(m,a,i,!1,null,"2457c3c4",null);e["default"]=f.exports},ad6d:function(t,e,s){"use strict";var a=s("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}}}]);
//# sourceMappingURL=chunk-811cd196.83e5e725.js.map