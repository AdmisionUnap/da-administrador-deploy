(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2eb3d62a"],{1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),o=n("1d80"),c=n("4840"),l=n("8aa5"),s=n("50c4"),u=n("14c3"),d=n("9263"),p=n("d039"),f=[].push,v=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(o(this)),i=void 0===n?h:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,i);var c,l,s,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,g=new RegExp(e.source,p+"g");while(c=d.call(g,r)){if(l=g.lastIndex,l>v&&(u.push(r.slice(v,c.index)),c.length>1&&c.index<r.length&&f.apply(u,c.slice(1)),s=c[0].length,v=l,u.length>=i))break;g.lastIndex===c.index&&g.lastIndex++}return v===r.length?!s&&g.test("")||u.push(""):u.push(r.slice(v)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=o(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a,n):r.call(String(a),t,n)},function(e,a){var o=n(r,e,this,a,r!==t);if(o.done)return o.value;var d=i(e),p=String(this),f=c(d,RegExp),x=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),m=new f(g?d:"^(?:"+d.source+")",b),_=void 0===a?h:a>>>0;if(0===_)return[];if(0===p.length)return null===u(m,p)?[p]:[];var y=0,w=0,E=[];while(w<p.length){m.lastIndex=g?w:0;var R,C=u(m,g?p:p.slice(w));if(null===C||(R=v(s(m.lastIndex+(g?0:w)),p.length))===y)w=l(p,w,x);else{if(E.push(p.slice(y,w)),E.length===_)return E;for(var D=1;D<=C.length-1;D++)if(E.push(C[D]),E.length===_)return E;w=y=R}}return E.push(p.slice(y)),E}]}),!g)},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1e6a":function(e,t,n){e.exports=n.p+"img/unap.9376dc64.jpg"},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),o=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},6547:function(e,t,n){var r=n("a691"),a=n("1d80"),i=function(e){return function(t,n){var i,o,c=String(a(t)),l=r(n),s=c.length;return l<0||l>=s?e?"":void 0:(i=c.charCodeAt(l),i<55296||i>56319||l+1===s||(o=c.charCodeAt(l+1))<56320||o>57343?e?c.charAt(l):i:e?c.slice(l,l+2):o-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},8418:function(e,t,n){"use strict";var r=n("c04e"),a=n("9bf2"),i=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?a.f(e,o,i(0,n)):e[o]=n}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||s;d&&(c=function(e){var t,n,a,c,d=this,p=s&&d.sticky,f=r.call(d),v=d.source,h=0,g=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",f)),u&&(n=new RegExp("^"+v+"$(?!\\s)",f)),l&&(t=d.lastIndex),a=i.call(p?n:d,g),p?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:l&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),u&&a&&a.length>1&&o.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=c},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),i=n("e8b5"),o=n("861d"),c=n("7b0b"),l=n("50c4"),s=n("8418"),u=n("65f0"),d=n("1dde"),p=n("b622"),f=n("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",x=f>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),b=d("concat"),m=function(e){if(!o(e))return!1;var t=e[v];return void 0!==t?!!t:i(e)},_=!x||!b;r({target:"Array",proto:!0,forced:_},{concat:function(e){var t,n,r,a,i,o=c(this),d=u(o,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?o:arguments[t],m(i)){if(a=l(i.length),p+a>h)throw TypeError(g);for(n=0;n<a;n++,p++)n in i&&s(d,p,i[n])}else{if(p>=h)throw TypeError(g);s(d,p++,i)}return d.length=p,d}})},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c5e1:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("VueHtml2pdf",{ref:"html2Pdf",staticClass:"h-full",attrs:{"show-layout":!1,"float-layout":!0,"enable-download":!1,"preview-modal":!0,"paginate-elements-by-height":3508,filename:"DJ-"+e.reportData.dni,"pdf-quality":2,"manual-pagination":!1,"pdf-format":"a4","pdf-orientation":"portrait","pdf-content-width":"800px"},on:{progress:function(t){return e.$emit("progress",t)},hasStartedGeneration:function(t){return e.$emit("started",t)},hasDownloaded:e.dowloading}},[r("section",{staticClass:"px-12 mt-0 pt-20",attrs:{slot:"pdf-content"},slot:"pdf-content"},[r("div",{staticClass:"flex flex-col text-xs font-normal"},[r("div",{staticClass:"flex justify-between items-center"},[r("div",{staticClass:"w-32"},[r("img",{attrs:{src:n("1e6a"),alt:""}})]),r("div",{staticClass:"uppercase font-bold text-right"},[r("p",[e._v("dirección de admisión")])])]),r("div",{staticClass:"font-bold text-2xl uppercase text-center mt-10"},[r("p",[e._v("Declaración Jurada")])]),r("div",[r("p",{staticClass:"text-left mt-10"},[e._v(" Conste en el presente documento que yo, "),r("b",[e._v(e._s(e.reportData.apellido_paterno+" "+e.reportData.apellido_materno+" "+e.reportData.nombre))]),e._v(", identificado con Documento de Identidad N° "),r("b",[e._v(e._s(e.reportData.dni))]),e._v(" y domiciliado en "),r("b",[e._v(e._s(e.reportData.direccion))]),e._v(" de esta ciudad, postulante al programa de estudio de "),r("b",[e._v(e._s(e.reportData.escuela))]),e._v(" mediante la modalidad "),r("b",[e._v(e._s(e.reportData.modalidad))]),e._v(", expediente N° "),r("b",[e._v(e._s(e.reportData.id))]),e._v(" en el proceso de Admisión de la Universidad Nacional de la Amazonía Peruana, correspondiente al "),r("b",[e._v(e._s(e.reportData.admision))]),e._v(", declaro libre y espontánea voluntad, conocer y aceptar todos y cada uno de los articulos establecidos en el "),r("b",[e._v("Reglamento de Admisión")]),e._v(". ")])]),r("div",{staticClass:"mt-10 flex justify-between"},[r("p"),r("p",[e._v("Iquitos, "+e._s(e.getTextFecha(e.reportData.fecha)))])]),r("div",{staticClass:"mt-20 text-center border-t-2 border-black border-dashed w-1/2 m-auto"},[r("b",[e._v(" Firma del Postulante")]),r("p",[e._v(" D.N.I: "),r("b",[e._v(e._s(e.reportData.dni))])])]),r("div",{staticClass:"flex justify-between mt-64"},[r("div",{staticClass:"w-1/2 border-t-2 border-black border-dashed"},[r("p",[r("b",[e._v("Firma del Padre o Tutor (para menor de edad)")])]),r("p",[e._v("Nombre del padre o tutor:")]),r("div",{staticClass:"flex justify-between"},[r("p",[e._v("D.N.I:")]),r("p",[e._v("Teléfono:")])]),r("p",[e._v("Domicilio:")])]),r("div",{staticClass:"px-5"}),r("div",{staticClass:"w-1/2 text-center border-t-2 border-black border-dashed"},[r("p",[r("b",[e._v("Jefe DA")])])])])])])])],1)},a=[],i=(n("99af"),n("d3b7"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),o=n("be3b"),c=function(){return n.e("chunk-958b6264").then(n.bind(null,"6480"))},l={components:{VueHtml2pdf:c},data:function(){return{reportData:{}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getReport();case 2:e.$refs.html2Pdf.generatePdf();case 3:case"end":return t.stop()}}),t)})))()},methods:{getTextFecha:function(e){var t=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];try{var n,r,a,i=e.split("-");return a=i[0],r=i[1],n=i[2],r=t[r-1],"".concat(a," de ").concat(r," del ").concat(n,".")}catch(o){return""}},getReport:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.$route.params.id,n){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,o["a"].get("get_declaracion_jurada_by_id",{params:{id:n}});case 6:r=t.sent,a=r.data,e.reportData=a[0],t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},dowloading:function(e){this.$emit("dowloading",e)}}},s=l,u=n("2877"),d=Object(u["a"])(s,r,a,!1,null,null,null);t["default"]=d.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),c=n("9112"),l=i("species"),s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var v=i(e),h=!a((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),g=h&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return t=!0,null},n[v](""),!t}));if(!h||!g||"replace"===e&&(!s||!u||p)||"split"===e&&!f){var x=/./[v],b=n(v,""[e],(function(e,t,n,r,a){return t.exec===o?h&&!a?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],_=b[1];r(String.prototype,e,m),r(RegExp.prototype,v,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}d&&c(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-2eb3d62a.0e216781.js.map