(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7256692a"],{"1eec":function(t,e,s){t.exports=s.p+"img/unap.31a7056e.png"},"3c45":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white flex flex-col"},[e("header-layout",{staticClass:"h-full",attrs:{sideBarActive:t.sideBarActive},on:{sideBarActiveEvent:t.sideBarActiveEvent}}),e("div",{staticClass:"w-full flex"},[e("side-bar-layout",{class:{hidden:!t.sideBarActive},attrs:{sideBarActive:t.sideBarActive},on:{tolink:t.tolinkEvent,sync:t.SyncEvent}}),e("content-layout",{class:{absolute:"md"==t.get_screen_text||!t.sideBarActive}})],1)],1)},i=[],n=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade",mode:"out-in"},on:{beforeLeave:t.beforeLeave,enter:t.enter,afterEnter:t.afterEnter}},[e("div",{staticClass:"w-full rounded-3xl p-5 shadow-sm bg-white"},[e("router-view")],1)])},o=[],r={methods:{beforeLeave(t){this.prevHeight=getComputedStyle(t).height},enter(t){const{height:e}=getComputedStyle(t);t.style.height=this.prevHeight,setTimeout(()=>{t.style.height=e})},afterEnter(t){t.style.height="auto"}}},c=r,l=s("2877"),u=Object(l["a"])(c,n,o,!1,null,"5a50adc0",null),d=u.exports,h=(s("14d9"),function(){var t=this,e=t._self._c;return e("head",{staticClass:"w-full p-3 bg-green-400 text-black flex justify-between uppercase"},[e("div",{staticClass:"flex cursor-pointer",on:{click:function(e){return t.$router.push("/")}}},[t._m(0),e("div",{staticClass:"text-xs md:text-lg font-semibold flex flex-col"},[e("span",[t._v("Universidad Nacional de la Amazonía Peruana")]),e("span",{staticClass:"text-xs text-gray-100"},[t._v("Dirección de Admisión")]),t.domain_object?e("div",[e("span",[t._v(t._s(t.domain_object.name))])]):t._e()])]),e("div",{staticClass:"text-right font-medium text-white text-sm lg:text-lg items-center flex flex-col"},[e("span",[e("span",{staticClass:"text-sm font-normal"},[t._v("Usuario:")]),t._v(" "+t._s(`${t.get_auth.last_name} ${t.get_auth.first_name}`)+" ")]),e("div",{staticClass:"text-xs w-full text-rigth text-gray-700"},[e("span",[t._v("Tipo: "+t._s(t.get_auth.group))])])]),e("div",{staticClass:"lg:hidden",on:{click:function(e){return t.changeSideBar()}}},[e("vs-button",{staticClass:"focus:outline-none",attrs:{dark:"",icon:""}},[e("i",{staticClass:"fas fa-bars text-white"})])],1)])}),f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-10 mr-5"},[e("img",{staticClass:"w-10",attrs:{src:s("1eec"),alt:""}})])}],v={props:{sideBarActive:{type:Boolean,default:!1}},computed:{get_auth(){return this.$store.getters["auth/get_auth"]},domain_object(){return this.$store.getters["tools/get_domain"]}},methods:{changeSideBar(){this.$emit("sideBarActiveEvent")}}},m=v,p=Object(l["a"])(m,h,f,!1,null,"6cd58f6c",null),_=p.exports,x=function(){var t=this,e=t._self._c;return e("vs-sidebar",{attrs:{relative:"",open:t.openSync,color:"success"},on:{"update:open":function(e){t.openSync=e},input:t.linkto},scopedSlots:t._u([{key:"footer",fn:function(){return[e("vs-col",{staticClass:"text-center"},[e("vs-avatar",{staticClass:"cursor-pointer",on:{click:t.exit}},[e("i",{staticClass:"fas fa-sign-out-alt text-red-500"})])],1)]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.get_menu,(function(s,a){return e("vs-sidebar-item",{key:a,staticClass:"focus:outline-none",attrs:{id:s.name},scopedSlots:t._u([{key:"icon",fn:function(){return[e("i",{class:s.icon})]},proxy:!0}],null,!0)},[t._v(" "+t._s(s.text)+" ")])})),1)},g=[],y={props:{sideBarActive:{type:Boolean,default:!1}},watch:{sideBarActive(t){this.openSync=t},openSync(t){this.$emit("sync",t)}},computed:{get_auth(){return this.$store.getters["auth/get_auth"]},get_menu(){return this.$store.getters["menu/get_menu_by_user_type"](this.get_auth.group)}},data(){return{active:"home",items:[{name:"/home",text:"Inicio",icon:"fas fa-home",link:"/home"},{name:"/user",text:"Usuarios",icon:"fas fa-user",link:"/user"},{name:"asignacion_sillas",text:"Asignacion Sillas",icon:"fas fa-chair"},{name:"vacantes",text:"Vacantes",icon:"fas fa-stream"},{name:"periodos",text:"Periodos",icon:"fas fa-calendar-alt"},{name:"modalidades",text:"Modalidades",icon:"fas fa-id-card"},{name:"requisitos",text:"Requisitos",icon:"fas fa-clipboard-list"},{name:"notas_postulante",text:"Notas Postulante",icon:"fas fa-list-alt"},{name:"postulantes",text:"Postulantes",icon:"fas fa-users"},{name:"nuevo_postulante",text:"Nuevo Postulante",icon:"fas fa-user-plus"},{name:"gratuidad",text:"Gratuidad",icon:"fas fa-star"},{name:"reinscripcion",text:"Reinscripcion",icon:"fas fa-exchange-alt"},{name:"entrega_prospecto",text:"Entrega Prospecto",icon:"fas fa-file-alt"}],openSync:!0}},methods:{linkto(t){this.$route.path!=t&&(this.$emit("tolink"),this.$router.push(t))},exit(){this.$store.dispatch("auth/clear_auth"),this.$router.push("/login")}}},b=y,B=Object(l["a"])(b,x,g,!1,null,"64ef6e02",null),A=B.exports,C={components:{HeaderLayout:_,SideBarLayout:A,ContentLayout:d},data(){return{sideBarActive:!0}},watch:{get_screen_text(t){this.sideBarActive="md"!=t&&"sm"!=t}},computed:{get_screen_text(){return this.$store.getters["tools/get_screen_text"]}},mounted(){"md"==this.get_screen_text||"sm"==this.get_screen_text?this.sideBarActive=!1:this.sideBarActive=!0},methods:{tolinkEvent(){"md"!=this.get_screen_text&&"sm"!=this.get_screen_text||(this.sideBarActive=!1)},sideBarActiveEvent(){this.sideBarActive=!this.sideBarActive},SyncEvent(t){this.sideBarActive=t}}},w=C,k=Object(l["a"])(w,a,i,!1,null,"f7503a72",null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-7256692a.4e4c2e4a.js.map