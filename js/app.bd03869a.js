(function(t){function e(e){for(var n,o,c=e[0],i=e[1],d=e[2],u=0,l=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);m&&m(e);while(l.length)l.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r={app:0},s=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-0017d330":"b0c69ab7","chunk-08abade2":"8e6e1fe8","chunk-2446cb0c":"2d1c659b","chunk-2d0a499e":"7efa6859","chunk-2d0d43c7":"df32bf49","chunk-2d0da7bc":"86948476","chunk-2d0dd410":"869e7fe4","chunk-4930f72b":"9f9b0ab2","chunk-5cc78bf4":"f473c2d0","chunk-bb240324":"818429f3","chunk-2d0e5379":"18639504","chunk-2d21a3d2":"74bf3bd7","chunk-2d22d028":"098d458c","chunk-41da0f36":"179be3cd","chunk-48929331":"1ca054cd","chunk-7256692a":"4e4c2e4a","chunk-8db2c52a":"d8934a67","chunk-a160546a":"edacccf4","chunk-a419ceec":"3878d41b","chunk-641b2386":"6b9327b0","chunk-2d0dd4cc":"d1c178d7","chunk-2d221896":"319a3457"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-0017d330":1,"chunk-4930f72b":1,"chunk-5cc78bf4":1,"chunk-bb240324":1,"chunk-41da0f36":1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-0017d330":"bec6a966","chunk-08abade2":"31d6cfe0","chunk-2446cb0c":"31d6cfe0","chunk-2d0a499e":"31d6cfe0","chunk-2d0d43c7":"31d6cfe0","chunk-2d0da7bc":"31d6cfe0","chunk-2d0dd410":"31d6cfe0","chunk-4930f72b":"b8026ebd","chunk-5cc78bf4":"55546bb9","chunk-bb240324":"a43ff43d","chunk-2d0e5379":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d028":"31d6cfe0","chunk-41da0f36":"2098d531","chunk-48929331":"31d6cfe0","chunk-7256692a":"31d6cfe0","chunk-8db2c52a":"31d6cfe0","chunk-a160546a":"31d6cfe0","chunk-a419ceec":"31d6cfe0","chunk-641b2386":"31d6cfe0","chunk-2d0dd4cc":"31d6cfe0","chunk-2d221896":"31d6cfe0"}[t]+".css",r=i.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var d=s[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===n||u===r))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[t],m.parentNode.removeChild(m),a(s)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=s);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var l=new Error;d=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[t]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],s={created(){window.addEventListener("resize",this.windowsResize)},async mounted(){this.windowsResize(),this.$store.dispatch("auth/set_user"),this.setCurrentDomain()},destroyed(){window.removeEventListener("resize",this.windowsResize)},methods:{windowsResize(){const t=window.innerWidth;(t>0||t>=640)&&t<768?this.$store.dispatch("tools/set_screen_text","sm"):t>=768&&t<1024?this.$store.dispatch("tools/set_screen_text","md"):t>=1024&&t<1280?this.$store.dispatch("tools/set_screen_text","lg"):t>=1280&&t<1536?this.$store.dispatch("tools/set_screen_text","xl"):this.$store.dispatch("tools/set_screen_text","2xl"),this.$store.dispatch("tools/set_screen",t)},setCurrentDomain(){const t=JSON.parse(localStorage.getItem("other-domain"));t&&this.$store.commit("tools/SET_DOMAIN",t)}}},c=s,i=a("2877"),d=Object(i["a"])(c,o,r,!1,null,null,null),u=d.exports,l=a("8c4f");n["default"].use(l["a"]);const m=()=>a.e("chunk-2d21a3d2").then(a.bind(null,"bb51")),p=[{path:"",component:()=>a.e("chunk-7256692a").then(a.bind(null,"3c45")),children:[{path:"",redirect:"/home"},{path:"/home",name:"Inicio",component:m,meta:{authRequired:!0}},{path:"/user",name:"Usuario",component:()=>a.e("chunk-2d0e5379").then(a.bind(null,"9419")),meta:{authRequired:!0}},{path:"/registro_pago",name:"Registro Pago",component:()=>a.e("chunk-2d0d43c7").then(a.bind(null,"5fbb")),meta:{authRequired:!0}},{path:"/postulante",name:"Postulantes",component:()=>a.e("chunk-0017d330").then(a.bind(null,"fb82")),meta:{authRequired:!0}},{path:"/registro_nota",name:"Registro Nota",component:()=>a.e("chunk-2d0da7bc").then(a.bind(null,"6c92")),meta:{authRequired:!0}},{path:"/registro_examen",name:"Registro Examen",component:()=>a.e("chunk-2d22d028").then(a.bind(null,"f657")),meta:{authRequired:!0}},{path:"/recepcion_documento",name:"Recepcion Documento",component:()=>a.e("chunk-41da0f36").then(a.bind(null,"27ab")),meta:{authRequired:!0}},{path:"/vacante",name:"Vacantes",component:()=>a.e("chunk-2d0a499e").then(a.bind(null,"06ac")),meta:{authRequired:!0}},{path:"/importar_asiento",name:"Importar Asiento",component:()=>Promise.all([a.e("chunk-2d0dd410"),a.e("chunk-4930f72b")]).then(a.bind(null,"1e75")),meta:{authRequired:!0}},{path:"/importar_puntaje",name:"Importar Puntaje",component:()=>Promise.all([a.e("chunk-2d0dd410"),a.e("chunk-bb240324")]).then(a.bind(null,"c26d")),meta:{authRequired:!0}},{path:"/upload_school",name:"upload_school",component:()=>Promise.all([a.e("chunk-2d0dd410"),a.e("chunk-5cc78bf4")]).then(a.bind(null,"ada2")),meta:{authRequired:!0}}]},{path:"/login",name:"Login",component:()=>a.e("chunk-2446cb0c").then(a.bind(null,"a55b"))},{path:"/reporte/:id",name:"Reporte",component:()=>a.e("chunk-48929331").then(a.bind(null,"38a3")),meta:{authRequired:!0}},{path:"/reporteDj/:id",name:"Reporte Declaracion Jurada",component:()=>a.e("chunk-a419ceec").then(a.bind(null,"c5e1")),meta:{authRequired:!0}},{path:"/reporteFp/:id",name:"Ficha de Postulante",component:()=>a.e("chunk-8db2c52a").then(a.bind(null,"145b")),meta:{authRequired:!0}},{path:"/reporte_exonerado/:id",name:"ReporteExonerado",component:()=>a.e("chunk-a160546a").then(a.bind(null,"bf81")),meta:{authRequired:!0}},{path:"/reporteConstancia/:id",name:"Constancia",component:()=>a.e("chunk-08abade2").then(a.bind(null,"1b3b")),meta:{authRequired:!0}}],_=new l["a"]({mode:"hash",base:"/",routes:p});_.beforeEach((t,e,a)=>{let n=JSON.parse(localStorage.getItem("token-oca-unap"));t.meta.authRequired&&!n?a("/login"):"/login"==t.path&&n?a("/"):a()});var h=_,g=a("2f62");const f={auth_data:{}};var b=f;const y={SET_AUTH(t,e){t.auth_data=e},CLEAR_AUTH(t){t.auth_data={},localStorage.setItem("token-oca-unap",null)}};var v=y,E=a("be3b");const k={async set_auth({dispatch:t},e){try{const{data:a}=await E["a"].post("auth/token/login",e);let{auth_token:n}=a;return localStorage.setItem("token-oca-unap",JSON.stringify(n)),await t("set_user"),a}catch(a){return null}},async set_user({commit:t}){try{const{data:e}=await E["a"].get("get_user/");return Object.entries(e).length>0&&t("SET_AUTH",e),e}catch(e){return null}},clear_auth({commit:t}){t("CLEAR_AUTH")}};var S=k;const T={get_auth:t=>t.auth_data};var w=T,x={namespaced:!0,state:b,mutations:v,actions:S,getters:w};const A={screen:0,screen_text:"",domain:null};var D=A;const R={SET_SCREEN(t,e){t.screen=e},SET_SCREEN_TEXT(t,e){t.screen_text=e},SET_DOMAIN(t,e){t.domain=e}};var P=R;const O={async set_screen({commit:t},e){t("SET_SCREEN",e)},set_screen_text({commit:t},e){t("SET_SCREEN_TEXT",e)}};var N=O;const L={get_screen:t=>t.screen,get_screen_text:t=>t.screen_text,get_domain:t=>t.domain};var C=L,q={namespaced:!0,state:D,mutations:P,actions:N,getters:C};const U={menu_data:[{name:"/home",text:"Inicio",icon:"fas fa-home",link:"/home",user_permission:["administrador","usuario","externo","digitador","sede","consultor"],state:!1},{name:"/user",text:"Usuarios",icon:"fas fa-user",link:"/user",user_permission:["administrador","usuario"],state:!0},{name:"asignacion_sillas",text:"Asignacion Sillas",icon:"fas fa-chair",user_permission:["administrador","usuario"],state:!1},{name:"vacantes",text:"Vacantes",icon:"fas fa-stream",user_permission:["administrador","usuario"],state:!1},{name:"periodos",text:"Periodos",icon:"fas fa-calendar-alt",user_permission:["administrador","usuario"],state:!1},{name:"modalidades",text:"Modalidades",icon:"fas fa-id-card",user_permission:["administrador","usuario"],state:!1},{name:"requisitos",text:"Requisitos",icon:"fas fa-clipboard-list",user_permission:["administrador","usuario"],state:!1},{name:"notas_postulante",text:"Notas Postulante",icon:"fas fa-list-alt",user_permission:["administrador","usuario"],state:!1},{name:"postulante",text:"Postulantes",icon:"fas fa-users",user_permission:["administrador","usuario","digitador","sede","consultor"],state:!0},{name:"registro_examen",text:"Registro Examen",icon:"fas fa-pen",user_permission:["administrador"],state:!0},{name:"nuevo_postulante",text:"Nuevo Postulante",icon:"fas fa-user-plus",user_permission:["administrador","usuario"],state:!1},{name:"gratuidad",text:"Gratuidad",icon:"fas fa-star",user_permission:["administrador","usuario"],state:!1},{name:"reinscripcion",text:"Reinscripcion",icon:"fas fa-exchange-alt",user_permission:["administrador","usuario"],state:!1},{name:"entrega_prospecto",text:"Entrega Prospecto",icon:"fas fa-file-alt",user_permission:["administrador","usuario"],state:!1},{name:"registro_pago",text:"Registro Pagos",icon:"fas fa-file-alt",user_permission:["externo","administrador","sede"],state:!0},{name:"registro_nota",text:"Registro Nota",icon:"fas fa-file-alt",user_permission:["administrador","digitador","sede","evaluadores"],state:!0},{name:"recepcion_documento",text:"Recepcion Documentos",icon:"fas fa-file-alt",user_permission:["administrador","digitador"],state:!0},{name:"vacante",text:"Vacante",icon:"fas fa-file-alt",user_permission:["administrador"],state:!0},{name:"importar_asiento",text:"Importar Asiento",icon:"fas fa-chair",user_permission:["administrador"],state:!0},{name:"importar_puntaje",text:"Importar Puntaje",icon:"fas fa-sort-numeric-up",user_permission:["administrador"],state:!0},{name:"upload_school",text:"Colegios",icon:"fas fa-school",user_permission:["administrador"],state:!0}]};var I=U;const j={SET_SCREEN(t,e){t.screen=e},SET_SCREEN_TEXT(t,e){t.screen_text=e}};var $=j;const M={async set_screen({commit:t},e){t("SET_SCREEN",e)},set_screen_text({commit:t},e){t("SET_SCREEN_TEXT",e)}};var F=M;const G={get_menu_by_user_type:t=>e=>{let a=t.menu_data.filter(t=>{let a=t.user_permission.filter(t=>t==e).length;if(a&&t.state)return t});return a}};var z=G,J={namespaced:!0,state:I,mutations:$,actions:F,getters:z};const H={user_data:[],group_data:[]};var V=H;a("14d9");const X={SET_USER(t,e){t.user_data=e},ADD_USER(t,e){t.user_data.push(e)},DELETE_USER(t,e){t.user_data=t.user_data.filter(t=>t.id!=e)},SET_GROUP(t,e){t.group_data=e}};var B=X;const K={async set_user({commit:t}){try{const{data:e}=await E["a"].get("get_users/");return t("SET_USER",e),e}catch(e){return null}},async get_user({commit:t},e){try{const{data:t}=await E["a"].get("get_user/",{params:{user:e}});return t}catch(a){return null}},async add_user({commit:t,dispatch:e},a){try{const{email:n,username:o,password:r}=a,{data:s}=await E["a"].post("auth/users/",{email:n,username:o,password:r}),{group:c}=a,i={group:c,user:s.id};await e("add_user_group",i);let d=[];return await e("get_user",s.id).then(t=>{d=t}),t("ADD_USER",d),s}catch(n){return null}},async delete_user({commit:t},e){try{const{user:a}=e,{data:n}=await E["a"].post("remove_user/",{user:a});return t("DELETE_USER",n.id),n}catch(a){return null}},async set_group({commit:t}){try{const{data:e}=await E["a"].get("group");return t("SET_GROUP",e),e}catch(e){return null}},async add_user_group({commit:t},e){try{const{group:t,user:a}=e,{data:n}=await E["a"].post("group/",{group:t,user:a});return n}catch(a){return null}}};var W=K;const Q={get_user:t=>t.user_data,get_group:t=>t.group_data};var Y=Q,Z={namespaced:!0,state:V,mutations:B,actions:W,getters:Y};const tt={postulante_data:[]};var et=tt;const at={SET_POSTULANTE(t,e){t.postulante_data=e},VALIDAR_LOCALMENTE(t,e){const{id:a,is_valid:n}=e,o=t.postulante_data.findIndex(t=>t.id==a);o>-1&&(t.postulante_data[o].validado=n)}};var nt=at;const ot={async set_postulante({commit:t},e){try{let{dni:a,limit:n,modalidad:o,escuela:r,sede:s,ingresantes:c,universidad_procedencia:i}=e;a=a||"",c=c||!1;const{data:d}=await E["a"].get("get_postulante_full_v2",{params:{dni:a,limit:n,modalidad:o,escuela:r,sede:s,ingresantes:c,universidad_procedencia:i}});return t("SET_POSTULANTE",d),d}catch(a){return t("SET_POSTULANTE",[]),null}},async get_postulante_full_v2_for_validation({commit:t},{dni:e,id:a}){try{const{data:t}=await E["a"].get("get_postulante_full_v2_for_validation",{params:{id:a,dni:e}});return t.filter(t=>!t.validado)}catch(n){return t("SET_POSTULANTE",[]),null}},async set_postulante_by_id({commit:t},e){try{const{id:t,conFoto:a}=e,{data:n}=await E["a"].get("get_declaracion_jurada_by_id/",{params:{id:t,conFoto:a}});return n}catch(a){return null}},async set_postulante_by_dni({commit:t},e){try{const{data:t}=await E["a"].get("get_declaracion_jurada_by_dni/",{params:{dni:e}});return t}catch(a){return null}},async get_links_fotos({commit:t}){try{const{data:t}=await E["a"].get("get_images_on_zip");return t}catch(e){return null}},async marcar_ingreso({commit:t}){try{const{data:t}=await E["a"].get("get_images_on_zip");return t}catch(e){return null}},async modificarPostulante({commit:t},e){try{const{status:t}=await E["a"].post("modificarPostulante/",e);return t}catch(a){return null}},validar_localmente({commit:t},e){t("VALIDAR_LOCALMENTE",e)},async getInfoPostulante({commit:t},e){try{const{data:t}=await E["a"].get("getInfoPostulante",{params:{id:e}});return t}catch(a){return null}},async getCaracteristicasGenerales({commit:t},e){try{const{data:t}=await E["a"].get("getCaracteristicasGenerales",{params:{id:e}});return t}catch(a){return null}},async getCaracteristicasEducativas({commit:t},e){try{const{data:t}=await E["a"].get("getCaracteristicasEducativas",{params:{id:e}});return t}catch(a){return null}},async getPrograma({commit:t},e){try{const{data:t}=await E["a"].get("getPrograma",{params:{id:e}});return t}catch(a){return null}},async save_postulante_requisito({commit:t},{postulante_id:e,requisito:a}){try{const{data:t}=await E["a"].post("save_postulante_requisitos/",{postulante_id:e,requisitos:[a]});return t||[]}catch(n){return null}}};var rt=ot;const st={get_postulante:t=>t.postulante_data};var ct=st,it={namespaced:!0,state:et,mutations:nt,actions:rt,getters:ct};const dt={nota_data:[]};var ut=dt;const lt={SET_NOTA(t,e){t.nota_data=e},ADD_NOTA(t,e){e.forEach(e=>{t.nota_data.push(e)})},UPDATE_NOTA(t,e){e.forEach(e=>{const a=t.nota_data.findIndex(t=>t.id==e.id);a>-1&&(t.nota_data[a]=e)})},DELETE_NOTA(t,e){t.nota_data=t.nota_data.filter(t=>t.id!=e)}};var mt=lt;const pt={async set_nota({commit:t},e={dni:"",limit:"true"}){try{let{dni:a,limit:n}=e;a=a||"",n=n||"true";const{data:o}=await E["a"].get("get_nota",{params:{dni:a,limit:n}});return t("SET_NOTA",o),o}catch(a){return null}},async add_nota({commit:t},e){try{const{data:a}=await E["a"].post("nota/",e);return t("ADD_NOTA",a),a}catch(a){return null}},async update_nota({commit:t},e){try{const{data:a}=await E["a"].put("nota/",e);return t("UPDATE_NOTA",a),a}catch(a){return null}},async delete_nota({commit:t},e){try{const{data:a}=await E["a"].delete(`nota/${e}/`);return t("DELETE_NOTA",e),a}catch(a){}}};var _t=pt;const ht={get_nota:t=>t.nota_data,get_nota_by_dni:t=>e=>t.nota_data.find(t=>t.dni==e)};var gt=ht,ft={namespaced:!0,state:ut,mutations:mt,actions:_t,getters:gt};const bt={pago_data:[]};var yt=bt;const vt={SET_PAGO(t,e){t.pago_data=e},ADD_PAGO(t,e){e.forEach(e=>{let a={id:e.id,nombre:e.nombre,num_doc:e.dni,fecha:e.fecha,monto:e.monto,num_operacion:e.num_ticket,fecha_inscripcion:"",is_exonerado:e.is_exonerado,documento_referencial:"",modalidad:e.modalidad};t.pago_data.unshift(a)})},UPDATE_PAGO(t,e){e.forEach(e=>{const a=t.pago_data.findIndex(t=>t.id==e.id);a>-1&&(t.pago_data[a]={id:e.id,nombre:e.nombre,num_doc:e.dni,fecha:e.fecha,monto:e.monto,num_operacion:e.num_ticket,fecha_inscripcion:t.pago_data[a].fecha_inscripcion,is_exonerado:e.is_exonerado,documento_referencial:e.documento_referencial,modalidad:e.modalidad})})}};var Et=vt;const kt={async set_pago({commit:t},e={dni:""}){try{let{dni:a,limit:n,sede:o}=e;a=a||"",n=n||"true",o=o||"";const{data:r}=await E["a"].get("get_pagos_banko/",{params:{dni:a,limit:n,sede:o}});return t("SET_PAGO",r),r}catch(a){return null}},async add_pago({commit:t},e){try{const{data:a}=await E["a"].post("pagos_banko/",e);let n=a[0].id;return n?(t("ADD_PAGO",a),a):"exonerado-repetido"}catch(a){return null}},async update_pago({commit:t},e){try{const{data:a}=await E["a"].put("pagos_banko/",e);return t("UPDATE_PAGO",a),a}catch(a){return null}},async set_pago_banco_by_id({commit:t},e){try{const{data:t}=await E["a"].get("get_pagos_banko_by_id/",{params:{id:e}});return t[0]}catch(a){return null}}};var St=kt;const Tt={get_pago:t=>t.pago_data,get_pago_by_id:t=>e=>t.pago_data.find(t=>t.id==e)};var wt=Tt,xt={namespaced:!0,state:yt,mutations:Et,actions:St,getters:wt};const At={modalidad_data:[]};var Dt=At;const Rt={SET_MODALIDAD(t,e){t.modalidad_data=e}};var Pt=Rt;const Ot={async set_modalidad({commit:t}){try{const{data:e}=await E["a"].get("modalidad");return t("SET_MODALIDAD",e),e}catch(e){return null}}};var Nt=Ot;const Lt={get_modalidad:t=>t.modalidad_data,get_modalidad_select:t=>t.modalidad_data.map(t=>({id:t.id,nombre:t.nombre}))};var Ct=Lt,qt={namespaced:!0,state:Dt,mutations:Pt,actions:Nt,getters:Ct};const Ut={escuela_data:[]};var It=Ut;const jt={SET_ESCUELA(t,e){t.escuela_data=e}};var $t=jt;const Mt={async set_escuela({commit:t}){try{const{data:e}=await E["a"].get("escuela");return t("SET_ESCUELA",e),e}catch(e){return null}}};var Ft=Mt;const Gt={get_escuela:t=>t.escuela_data,get_escuela_select:t=>t.escuela_data.map(t=>({id:t.id,nombre:t.nombre}))};var zt=Gt,Jt={namespaced:!0,state:It,mutations:$t,actions:Ft,getters:zt};const Ht={sede_data:[]};var Vt=Ht;const Xt={SET_SEDE(t,e){t.sede_data=e}};var Bt=Xt;const Kt={async set_sede({commit:t}){try{const{data:e}=await E["a"].get("cede");return t("SET_SEDE",e),e}catch(e){return null}}};var Wt=Kt;const Qt={get_sede:t=>t.sede_data,get_sede_select:t=>t.sede_data.map(t=>({id:t.id,nombre:t.nombre}))};var Yt=Qt,Zt={namespaced:!0,state:Vt,mutations:Bt,actions:Wt,getters:Yt};const te={schoolList:null,textSearch:"",selectSchool:null,openDialogForm:!1,openDialogDelete:!1};var ee=te;const ae={set_schools(t,e){t.schoolList=e},set_textSearch(t,e){t.textSearch=e},set_selectSchool(t,e){t.selectSchool=e},set_openDialogForm(t,e){t.openDialogForm=e},set_openDialogDelete(t,e){t.openDialogDelete=e}};var ne=ae,oe=a("bc3a"),re=a.n(oe);const se="https://backend.appadmision-unapiquitos.com/api/v1/";let ce=re.a.create({baseURL:se});var ie=ce;const de={async uploadSchools({commit:t},e){try{const a=await ie.post("schools/upload-school/",e);return console.log("response",a),t("set_schools",[]),a.data}catch(a){return a.response.data}},async getListSchools({commit:t,getters:e}){try{const a=e.get_textSearch,{data:n}=await ie.get("schools/list-schools/?name="+a);return t("set_schools",n),!0}catch(a){return null}},async createSchool({commit:t},e){try{const{data:a}=await ie.post("schools/create-school/",e);return t("set_schools",[]),a}catch(a){return console.log("error",a.response.data),a.response.data}},async updateSchool({commit:t},e){try{const{data:a}=await ie.put(`schools/update-school/${e.id}/`,e);return t("set_schools",[]),a}catch(a){return a.response.data}},async deleteSchool({commit:t},e){try{return await ie.delete(`schools/delete-school/${e}/`),t("set_schools",[]),!0}catch(a){return!1}}};var ue=de;const le={get_school:t=>t.schoolList,get_textSearch:t=>t.textSearch,get_selectSchool:t=>t.selectSchool,get_openDialogForm:t=>t.openDialogForm,get_openDialogDelete:t=>t.openDialogDelete};var me=le,pe={namespaced:!0,state:ee,mutations:ne,actions:ue,getters:me};n["default"].use(g["a"]);var _e=new g["a"].Store({state:{},mutations:{},actions:{},modules:{auth:x,tools:q,menu:J,user:Z,postulante:it,nota:ft,pago:xt,modalidad:qt,escuela:Jt,sede:Zt,uploadSchools:pe}}),he=a("574d"),ge=a.n(he),fe=(a("04f2"),a("4a7a")),be=a.n(fe);a("6dfc");function ye(t){const e=new Intl.NumberFormat("es-PE",{currency:"PEN",minimumFractionDigits:2});return t=Math.round(100*t)/100,e.format(t)}n["default"].filter("parseMoney",(function(t){return ye(t)})),n["default"].use(ge.a,{colors:{success:"#34D3A5"}}),n["default"].component("v-select",be.a),n["default"].config.productionTip=!1,new n["default"]({router:h,store:_e,render:t=>t(u)}).$mount("#app")},be3b:function(t,e,a){"use strict";var n=a("bc3a"),o=a.n(n);const r=!1;let s=r?"http://da20242.localhost:8000/":"https://backend.appadmision-unapiquitos.com/api/v1/",c=o.a.create({baseURL:s});c.interceptors.request.use((function(t){let e=JSON.parse(localStorage.getItem("token-oca-unap")),a=JSON.parse(localStorage.getItem("other-domain"));a=a?a.domain_url:"backend.appadmision-unapiquitos.com";const n="443";return s!==a&&(t.baseURL=r?`https://${a}:${n}/api/v1/`:`https://${a}/api/v1/`),e&&"/login"!==t.url&&(t.headers.Authorization="token "+e),t}),(function(t){return Promise.reject(t)})),e["a"]=c}});
//# sourceMappingURL=app.bd03869a.js.map