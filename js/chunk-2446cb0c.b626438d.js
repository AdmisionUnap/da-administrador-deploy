(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2446cb0c"],{"1eec":function(t,e,s){t.exports=s.p+"img/unap.31a7056e.png"},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col justify-center items-center rounded-lg h-screen m-auto"},[e("img",{staticClass:"w-10",attrs:{src:s("1eec"),alt:""}}),t._m(0),e("form",{staticClass:"p-10 shadow-md rounded-3xl center content-inputs",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"bg-gray-100 p-2 rounded-xl"},[e("span",{staticClass:"text-sm text-gray-500"},[t._v("Esquema:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.scheme,expression:"scheme"}],staticClass:"border rounded-3xl p-2 flex flex-col focus:outline-none",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.scheme=e.target.multiple?s:s[0]},t.changeSchemaEvent]}},t._l(t.domainsData,(function(s,a){return e("option",{key:a,domProps:{value:s}},[t._v(" "+t._s(s.name)+" ")])})),0)]),e("div",{staticClass:"mt-5"},[e("label",{staticClass:"text-sm text-gray-500"},[t._v("Usuario")]),e("vs-input",{attrs:{autofocus:"",id:"txtusername"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("i",{staticClass:"fas fa-user text-green-400"})]},proxy:!0}]),model:{value:t.username,callback:function(e){t.username="string"===typeof e?e.trim():e},expression:"username"}})],1),e("div",{staticClass:"mt-2"},[e("label",{staticClass:"text-sm text-gray-500"},[t._v("Contraseña")]),e("vs-input",{attrs:{type:"password","icon-after":""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("i",{staticClass:"fas fa-key text-green-400"})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}})],1),e("div",{staticClass:"mt-4"},[e("vs-button",{staticClass:"focus:outline-none w-full",attrs:{success:""},on:{click:t.login}},[t._v(" Ingresar ")])],1)])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[e("p",{staticClass:"text-center text-2xl px-3 font-semibold"},[t._v("Iniciar Sesión DA")]),e("p",{staticClass:"text-xs text-gray-400"},[t._v("Dirección de Admisión")])])}],i=(s("14d9"),s("be3b")),o={data(){return{username:"",password:"",domainsData:[],scheme:null}},mounted(){localStorage.removeItem("other-domain"),this.getClients(),setTimeout(()=>{document.getElementById("vs-input--txtusername").focus()},200)},methods:{changeSchemaEvent(){console.log("")},async getClients(){const{data:t}=await i["a"].get("tenant/GetClients");this.domainsData=t},async login(){if(this.username.length<=0||this.password.length<=0)return void this.$vs.notification({title:"Inicio de Sesión",text:"Ingrese su usuario y contraseña! 📛 ",color:"danger"});const t=this.$vs.loading({color:"success"});localStorage.setItem("other-domain",JSON.stringify(this.scheme)),await this.$store.dispatch("auth/set_auth",{username:this.username,password:this.password}).then(t=>{t?(this.$vs.notification({title:"Inicio de Sesión",text:"Usuario validado correctamente! 😎",color:"success"}),this.$router.push("/")):this.$vs.notification({title:"Inicio de Sesión",text:"No se pudo validar el usuario y contraseña! 📛",color:"danger"})}),t.close()}}},r=o,c=s("2877"),l=Object(c["a"])(r,a,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2446cb0c.b626438d.js.map