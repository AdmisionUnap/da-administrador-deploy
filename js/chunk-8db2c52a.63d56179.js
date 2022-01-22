(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8db2c52a"],{"145b":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("VueHtml2pdf",{ref:"html2Pdf",staticClass:"h-full",attrs:{"show-layout":!1,"float-layout":!0,"enable-download":!1,"preview-modal":!0,"paginate-elements-by-height":3508,filename:"getFichaPostulante","pdf-quality":2,"manual-pagination":!1,"pdf-format":"a4","pdf-orientation":"portrait","pdf-content-width":"800px"},on:{progress:function(t){return a.$emit("progress",t)},hasStartedGeneration:function(t){return a.$emit("started",t)},hasDownloaded:a.dowloading}},[s("section",{staticClass:"px-5 mt-0 pt-7 text-xs",attrs:{slot:"pdf-content"},slot:"pdf-content"},[s("section",{staticClass:"flex flex-col font-normal uppercase border-2 border-black"},[s("div",{staticClass:"text-center text-lg font-bold border-b-2 border-black"},[s("p",[a._v("ficha estadistica de postulante a la unap")])]),s("div",{staticClass:"flex"},[s("div",{staticClass:"flex w-2/12 border-r-2 border-black"},[s("img",{staticClass:"w-10 m-auto",attrs:{src:e("1eec"),alt:""}})]),s("div",{staticClass:"w-6/12 font-semibold text-left flex flex-col p-2 border-r-2 border-black"},[s("p",[a._v("universidad nacional de la amazonía peruana")]),s("p",[a._v("vicerectorado académico")]),s("p",[a._v("dirección de admisión")]),s("p",[a._v("ficha de inscripción y estadística")]),s("div",{staticClass:"mt-5 w-full"},[s("svg",{attrs:{id:"barcode"}}),s("span",{staticClass:"text-xs ml-2 lowercase"},[a._v("Nro. Expediente. "+a._s(a.reportData.id))])])]),s("div",{staticClass:"w-2/12 flex flex-col justify-between font-bold text-center border-r-2 border-black"},[s("div",{staticClass:"h-1/2 border-b-2 text-lg border-black w-full flex items-center justify-center"},[s("p",[a._v("año")])]),s("div",{staticClass:"h-1/2 w-full text-lg flex items-center justify-center"},[s("p",[a._v("codigo")])])]),s("div",{staticClass:"w-2/12 flex flex-col justify-between"},[s("div",{staticClass:"h-1/2 border-b-2 text-lg border-black w-full flex items-center justify-center"},[s("p",[a._v("2022-I")])]),s("div",{staticClass:"h-1/2 w-full text-lg flex items-center justify-center"},[s("p",[a._v(a._s(a.reportData.dni))])])]),s("div",{staticClass:"w-48 p-1 border-l-2 border-black"},[s("img",{attrs:{accept:"image/jpeg",src:"data:image/jpeg;base64,"+a.reportData.foto,alt:""}})])])]),s("section",{staticClass:"flex flex-col font-normal uppercase border-2 border-black mt-2"},[s("div",{staticClass:"font-bold p-2 border-b-2 border-black"},[s("p",[a._v("a. identificación del postulante")])]),s("section",{staticClass:"datos-personales"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-1/2 border-r-2 border-black px-2"},[a._v(" 01. apellido paterno ")]),s("p",{staticClass:"w-1/2 px-2"},[a._v("02. apellido materno")])]),s("div",{staticClass:"flex border-b-2 border-black text-center"},[s("p",{staticClass:"w-1/2 border-r-2 border-black"},[a._v(" "+a._s(a.reportData.apellido_paterno)+" ")]),s("p",{staticClass:"w-1/2"},[a._v(a._s(a.reportData.apellido_materno))])]),s("div",{staticClass:"font-semibold px-2 border-b-2 border-black"},[s("p",[a._v("03. nombres")])]),s("div",{staticClass:"px-2 flex border-b-2 border-black text-center"},[s("p",{staticClass:"w-full"},[a._v(a._s(a.reportData.nombre))])])]),s("section",{staticClass:"ubicacion-ncimiento"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-1/6 border-r-2 border-black px-2"},[a._v("04. genero")]),s("p",{staticClass:"w-2/6 px-2 border-r-2 border-black"},[a._v(" 05. datos nacimiento "),s("span",{staticClass:"capitalize"},[a._v("(ubic. geografica)")])]),s("p",{staticClass:"w-2/6 px-2 border-r-2 border-black"},[a._v(" 06. fecha nacimiento ")]),s("p",{staticClass:"w-1/6 px-2"},[a._v("07. edad")])]),s("div",{staticClass:"border-b-2 border-black flex text-center"},[s("p",{staticClass:"w-1/6 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.genero)+" ")]),s("p",{staticClass:"w-2/6 px-2 border-r-2 border-black"},[a._v(" "+a._s(a.reportData.datos_nacimiento)+" ")]),s("p",{staticClass:"w-2/6 px-2 border-r-2 border-black"},[a._v(" "+a._s(a.reportData.fecha_nacimiento)+" ")]),s("p",{staticClass:"w-1/6 px-2"},[a._v(a._s(a.reportData.edad))])])]),s("section",{staticClass:"ubicacion-actual"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-1/2 border-r-2 border-black px-2"},[a._v(" 08. direccion actual ")]),s("p",{staticClass:"w-1/2 px-2"},[a._v("09. ubicacion geografica")])]),s("div",{staticClass:"border-b-2 border-black flex text-center"},[s("p",{staticClass:"w-1/2 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.direccion)+" ")]),s("p",{staticClass:"w-1/2 px-2"},[a._v(" "+a._s(a.reportData.ubicacion_geografica)+" ")])])]),s("section",{staticClass:"contacto"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-1/3 border-r-2 border-black px-2"},[a._v(" 10. documento de identidad ")]),s("p",{staticClass:"w-1/3 px-2 border-r-2 border-black"},[a._v(" 11. n° documento ")]),s("p",{staticClass:"w-1/3 px-2 border-black"},[a._v("12. n° teléfono")])]),s("div",{staticClass:"border-b-2 border-black flex text-center"},[s("p",{staticClass:"w-1/3 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.documento_identidad)+" ")]),s("p",{staticClass:"w-1/3 px-2 border-r-2 border-black"},[a._v(" "+a._s(a.reportData.dni)+" ")]),s("p",{staticClass:"w-1/3 px-2 border-black"},[a._v(" "+a._s((""|a.reportData.telefono)+"/"+a.reportData.celular)+" ")])])]),s("section",{staticClass:"otros2"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"px-2 w-full"},[a._v("13. correo electronico")])]),s("div",{staticClass:"flex text-center"},[s("p",{staticClass:"px-2 w-full"},[a._v(a._s(a.reportData.correo))])])])]),s("section",{staticClass:"flex flex-col font-normal uppercase border-2 border-black mt-2"},[s("div",{staticClass:"font-bold p-2 border-b-2 border-black"},[s("p",[a._v("b. caracteristicas generales del postulante")])]),s("section",{staticClass:"otros"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-1/5 border-r-2 border-black px-2"},[a._v(" 14. estado civil ")]),s("p",{staticClass:"w-2/5 px-2 border-r-2 border-black"},[a._v(" 15. dependencia familiar ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v(" 16. limitacion permanente "),s("span",{staticClass:"capitalize"},[a._v("(dispacacidad)")])])]),s("div",{staticClass:"border-b-2 border-black flex text-center"},[s("p",{staticClass:"w-1/5 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.estado_civil)+" ")]),s("p",{staticClass:"w-2/5 px-2 border-r-2 border-black"},[a._v(" "+a._s(a.reportData.familiar)+" ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v(a._s(a.reportData.limitacion_permanente))])])]),s("section",{staticClass:"ubicacion-ncimiento"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-1/6 border-r-2 border-black px-2"},[a._v("17. trabaja")]),s("p",{staticClass:"w-2/6 px-2 border-r-2 border-black"},[a._v(" 18.actividad económica ")]),s("p",{staticClass:"w-1/6 px-2 border-r-2 border-black"},[a._v(" 19. tipo trabajo ")]),s("p",{staticClass:"w-2/6 px-2"},[a._v("20. pertenece etnia")])]),s("div",{staticClass:"flex text-center"},[s("p",{staticClass:"w-1/6 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.trabaja)+" ")]),s("p",{staticClass:"w-2/6 px-2 border-r-2 border-black"},[a._v(" "+a._s(a.reportData.actividad_economica)+" ")]),s("p",{staticClass:"w-1/6 px-2 border-r-2 border-black"},[a._v(" "+a._s(a.reportData.tipo_trabajo)+" ")]),s("p",{staticClass:"w-2/6 px-2"},[a._v(" "+a._s(a.reportData.es_etnia?"Si":"No")+" ")])])])]),s("section",{staticClass:"flex flex-col font-normal uppercase border-2 border-black mt-2"},[s("div",{staticClass:"font-bold p-2 border-b-2 border-black"},[s("p",[a._v("c. caracteristicas educativas del postulante")])]),s("section",{staticClass:"colegio"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-3/5 border-r-2 border-black px-2"},[a._v(" 21. nombre del colegio ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v("22. tipo de colegio")])]),s("div",{staticClass:"border-b-2 border-black flex text-center"},[s("p",{staticClass:"w-3/5 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.nombre_colegio)+" ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v(a._s(a.reportData.tipo_colegio))])])]),s("section",{staticClass:"ubicacion-ncimiento"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-2/5 border-r-2 border-black px-2"},[a._v(" 23. tipo de alumno postulante ")]),s("p",{staticClass:"w-3/5 px-2"},[a._v("24. ubicacion geografica del colegio")])]),s("div",{staticClass:"flex text-center"},[s("p",{staticClass:"w-2/5 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.grado_academico)+" ")]),s("p",{staticClass:"w-3/5 px-2"},[a._v(" "+a._s(a.reportData.ubicacion_geografica_colegio)+" ")])])])]),s("section",{staticClass:"flex flex-col font-normal uppercase border-2 border-black mt-2"},[s("div",{staticClass:"font-bold p-2 border-b-2 border-black"},[s("p",[a._v("d. caracteristicas de la carrera a la que postula")])]),s("section",{staticClass:"escuela"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-3/5 border-r-2 border-black px-2"},[a._v(" 28. programa de estudio a la que postula ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v("29. cod. de escuela")])]),s("div",{staticClass:"border-b-2 border-black flex text-center"},[s("p",{staticClass:"w-3/5 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.escuela)+" ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v(a._s(a.reportData.codigo_escuela))])])]),s("section",{staticClass:"escuela"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-3/5 border-r-2 border-black px-2"},[a._v(" 30. modalidad de postulación ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v("31. cod. de modalidad")])]),s("div",{staticClass:"border-b-2 border-black flex text-center"},[s("p",{staticClass:"w-3/5 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.modalidad)+" ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v(a._s(a.reportData.codigo_modalidad))])])]),s("section",{staticClass:"escuela"},[s("div",{staticClass:"font-semibold border-b-2 border-black flex"},[s("p",{staticClass:"w-3/5 border-r-2 border-black px-2"},[a._v(" 32. veces que postula a la unap ")]),s("p",{staticClass:"w-2/5 px-2 border-r-2 border-black"},[a._v(" 33. tiempo de preparación ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v("34. tipo de preparación")])]),s("div",{staticClass:"flex text-center"},[s("p",{staticClass:"w-3/5 border-r-2 border-black px-2"},[a._v(" "+a._s(a.reportData.veces_postula)+" ")]),s("p",{staticClass:"w-2/5 px-2 border-r-2 border-black"},[a._v(" "+a._s(a.reportData.tiempo_preparacion)+" ")]),s("p",{staticClass:"w-2/5 px-2"},[a._v(a._s(a.reportData.tipo_preparacion))])])])]),s("section",{staticClass:"flex flex-col font-normal uppercase border-2 border-black mt-2"},[s("div",{staticClass:"font-bold flex"},[s("div",{staticClass:"flex w-9/12 border-b-2 border-r-2 border-black"},[s("p",{staticClass:"w-9/12 border-r-2 border-black px-2"},[a._v("compromiso")]),s("p",{staticClass:"w-3/12 px-2 text-center"},[a._v(" fecha: "+a._s(a.reportData.fecha)+" ")])]),s("div",{staticClass:"w-3/12"})]),s("div",{staticClass:"font-semibold flex"},[s("div",{staticClass:"flex w-9/12 border-r-2 border-black"},[s("p",{staticClass:"w-9/12 border-r-2 border-black px-2"},[a._v(" solicito se me considere postulante al concurso de admisión, declarando conocer todas las exigencias reglamentarias vigentes a las que me someto sin reservas, haciendo formal promesa de observarlas en todos sus aspectos ")]),s("div",{staticClass:"w-3/12 flex flex-col justify-between items-center text-center"},[s("div",{staticClass:"h-14"}),s("p",{staticClass:"border-t-2 w-full border-black"},[a._v(" firma del postulante ")])])]),s("div",{staticClass:"w-3/12"},[s("div",{staticClass:"flex flex-col justify-between items-center text-center"},[s("div",{staticClass:"h-14"}),s("p",{staticClass:"border-t-2 w-full border-black"},[a._v(" huella del postulante ")])])])])]),s("section",{staticClass:"w-full flex justify-between"})])])],1)},r=[],o=(e("d3b7"),e("be3b")),l=function(){return e.e("chunk-958b6264").then(e.bind(null,"6480"))},c={components:{VueHtml2pdf:l},data:function(){return{reportData:{}}},mounted:function(){this.getReport()},methods:{getReport:function(){var a=this,t=this.$route.params.id;t&&o["a"].get("get_declaracion_jurada_by_id/",{params:{id:t}}).then((function(t){a.reportData=t.data[0],JsBarcode("#barcode",a.reportData.id,{displayValue:!1,width:3,height:20}),setTimeout((function(){a.$refs.html2Pdf.generatePdf()}),100)})).catch((function(a){console.error(a)}))},dowloading:function(a){this.$emit("dowloading",a)}}},i=c,d=e("2877"),b=Object(d["a"])(i,s,r,!1,null,null,null);t["default"]=b.exports},"1eec":function(a,t,e){a.exports=e.p+"img/unap.31a7056e.png"}}]);
//# sourceMappingURL=chunk-8db2c52a.63d56179.js.map