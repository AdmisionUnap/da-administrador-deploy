(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7af98b76"],{"22dc":function(t,e,s){},"2dd0":function(t,e,s){"use strict";s("22dc")},ada2:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"text-xl font-medium cursor-pointer"},[t._v("Importar Colegios")]),t._m(0),e("import-excel"),e("list",{attrs:{"list-schools":t.schools}})],1)},o=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"text-sm"},[t._v("Tenga en cuenta que el encabezado del archivo Excel a importar debe tener las columnas "),e("b",[t._v("name")]),t._v(" y "),e("b",[t._v("district")]),t._v(".")])}],n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex justify-between items-center mt-5"},[e("div",{ref:"div",staticClass:"w-80 text-center p-5 border-2 border-dashed border-gray-200"},[e("label",{staticClass:"font-medium cursor-pointer"},[e("span",[t._v(t._s(t.label))]),e("input",{ref:"input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:t.onFileChange}}),e("div",{staticClass:"cursor-pointer flex justify-center"},[e("svg",{staticClass:"w-10 text-center flex",staticStyle:{"enable-background":"new 0 0 486.3 486.3"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 486.3 486.3","xml:space":"preserve"}},[e("g",[e("g",[e("path",{attrs:{d:"M395.5,135.8c-5.2-30.9-20.5-59.1-43.9-80.5c-26-23.8-59.8-36.9-95-36.9c-27.2,0-53.7,7.8-76.4,22.5\n\t\t\tc-18.9,12.2-34.6,28.7-45.7,48.1c-4.8-0.9-9.8-1.4-14.8-1.4c-42.5,0-77.1,34.6-77.1,77.1c0,5.5,0.6,10.8,1.6,16\n\t\t\tC16.7,200.7,0,232.9,0,267.2c0,27.7,10.3,54.6,29.1,75.9c19.3,21.8,44.8,34.7,72,36.2c0.3,0,0.5,0,0.8,0h86\n\t\t\tc7.5,0,13.5-6,13.5-13.5s-6-13.5-13.5-13.5h-85.6C61.4,349.8,27,310.9,27,267.1c0-28.3,15.2-54.7,39.7-69\n\t\t\tc5.7-3.3,8.1-10.2,5.9-16.4c-2-5.4-3-11.1-3-17.2c0-27.6,22.5-50.1,50.1-50.1c5.9,0,11.7,1,17.1,3c6.6,2.4,13.9-0.6,16.9-6.9\n\t\t\tc18.7-39.7,59.1-65.3,103-65.3c59,0,107.7,44.2,113.3,102.8c0.6,6.1,5.2,11,11.2,12c44.5,7.6,78.1,48.7,78.1,95.6\n\t\t\tc0,49.7-39.1,92.9-87.3,96.6h-73.7c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5h74.2c0.3,0,0.6,0,1,0c30.5-2.2,59-16.2,80.2-39.6\n\t\t\tc21.1-23.2,32.6-53,32.6-84C486.2,199.5,447.9,149.6,395.5,135.8z"}}),e("path",{attrs:{d:"M324.2,280c5.3-5.3,5.3-13.8,0-19.1l-71.5-71.5c-2.5-2.5-6-4-9.5-4s-7,1.4-9.5,4l-71.5,71.5c-5.3,5.3-5.3,13.8,0,19.1\n\t\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l48.5-48.5v222.9c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V231.5l48.5,48.5\n\t\t\tC310.4,285.3,318.9,285.3,324.2,280z"}})])]),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g")])]),e("span",{staticClass:"text-xs"},[t._v(t._s(t.name))])])]),e("span",{staticClass:"font-medium text-blue-300 text-2xl"},[t._v(t._s(t.name))])]),e("vs-dialog",{attrs:{"prevent-close":"",blur:""},on:{close:t.Cancel},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",[t._v(" Importación del archivo "),e("b",[t._v("Excel")])])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex justify-end items-center"},[e("vs-button",{attrs:{dark:"",transparent:""},on:{click:t.Cancel}},[t._v(" Cancelar ")]),e("vs-button",{on:{click:t.saveSchools}},[t._v(" Guardar ")])],1)]},proxy:!0}]),model:{value:t.isSave,callback:function(e){t.isSave=e},expression:"isSave"}},[e("div",{staticClass:"con-content"},[e("p",[t._v(" ¿Está seguro de que desea importar el archivo Excel llamado "),e("b",[t._v(t._s(t.name))]),t._v("? ")])])])],1)},r=[],i=s("8134"),c={name:"ImportExcel",props:{label:{type:String,default:"Arrastre o elija un Documento Excel aqui."}},data(){return{name:null,file:null,dragAndDropCapable:!0,dataExcel:[],isSave:!1}},mounted(){const{div:t}=this.$refs;this.dragAndDropCapable=this.isDragAndDropCapable(),this.dragAndDropCapable&&(["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(t=>{document.body.addEventListener(t,t=>{t.preventDefault(),t.stopPropagation()})}),t.addEventListener("drop",t=>{this.onFileChange(t)}))},methods:{removeFile(){this.$refs.input.value=null,this.name=null,this.file=null,this.dataExcel=[]},isExtensionValid(t){const e=t.split("."),s=e[e.length-1].trim();return"xlsx"===s||"xls"===s||(this.$vs.notification({title:"Archivo No Compatible",text:"Por favor, seleccione un archivo de Excel para cargar. 📛 ",color:"danger"}),!1)},isDragAndDropCapable(){const{div:t}=this.$refs;return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window},onFileChange(t){const e=t.target.files||t.dataTransfer.files;e.length&&(this.name=e[0].name,this.isExtensionValid(e[0].name)&&(this.isSave=!0,this.file=e[0]))},async saveSchools(){this.isSave=!1;const t=this.$vs.loading({color:"success"});await Object(i["a"])(this.file).then(t=>{this.dataExcel=t});const e=await this.$store.dispatch("uploadSchools/uploadSchools",this.dataExcel);this.$vs.notification({title:e.error?"Error de importación ":"Importación Exitosa",text:e.error?e.error:e.message+". 🎉",color:e.error?"danger":"success"}),e.message&&await this.getListSchools(),this.removeFile(),t.close()},async getListSchools(){await this.$store.dispatch("uploadSchools/getListSchools")},Cancel(){this.isSave=!1,this.removeFile()}}},l=c,d=(s("2dd0"),s("2877")),u=Object(d["a"])(l,n,r,!1,null,"6e8ddea8",null),h=u.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[e("vs-table",{staticClass:"cursor-pointer",scopedSlots:t._u([{key:"thead",fn:function(){return[e("vs-tr",[e("vs-th",[t._v(" Colegio ")]),e("vs-th",[t._v(" Distrito ")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.ListSchools,(function(s,a){return e("vs-tr",{key:a,attrs:{data:s}},[e("vs-td",[t._v(" "+t._s(s.name)+" ")]),e("vs-td",[t._v(" "+t._s(s.district)+" ")])],1)}))},proxy:!0}])})],1)},v=[],g={name:"List",props:{ListSchools:{type:Array,default:()=>[]}}},m=g,f=Object(d["a"])(m,p,v,!1,null,"24a6b0b3",null),x=f.exports,b={components:{List:x,ImportExcel:h},data(){return{}},computed:{schools(){return this.$store.getters["uploadSchools/get_school"]}},methods:{async getListSchools(){await this.$store.dispatch("uploadSchools/getListSchools")}},mounted(){this.getListSchools()}},_=b,C=Object(d["a"])(_,a,o,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-7af98b76.6b3c1896.js.map