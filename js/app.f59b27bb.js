(function(t){function e(e){for(var s,n,l=e[0],o=e[1],c=e[2],u=0,v=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/java-compiler/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"437c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero is-small has-text-centered is-dark is-bold"},[t._m(0),a("router-view")],1),t._m(1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-body"},[a("br"),a("p",{staticClass:"title is-size-1"},[t._v(" Lenguajes y Autómatas II ")]),a("p",{staticClass:"subtitle"},[t._v(" Compilador de Expresiones Aritméticas, "),a("br"),t._v(" Funciones y Secuencias Iterativas ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-left"},[a("h1",{staticClass:"is-size-2 has-text-white"},[t._v("Acerca del Proyecto")]),a("ul",[a("li",[t._v(" Creado por "),a("b",[t._v("Raúl Novelo")]),t._v(", "),a("b",[t._v("Fernando Herrera")]),t._v(" & "),a("b",[t._v("Paul Mena")]),t._v(". Instituto Tecnológico de Mérida / TecNM, 2020. ")]),a("li",[t._v(" Compilador del lenguaje "),a("b",[t._v("Java")]),t._v(" para la materia de "),a("a",{attrs:{href:"https://es.wikipedia.org/wiki/Teor%C3%ADa_de_aut%C3%B3matas",target:"_blank"}},[t._v("Lenguajes y Automatas I & II")]),t._v(". ")]),a("li",[t._v(" Preguntas, sugerencias, o bugs, envie un e-mail a "),a("a",{attrs:{href:"mailto:raul.novelo@aaaimx.org"}},[t._v("raul.novelo@aaaimx.org")]),t._v(" y/o "),a("a",{attrs:{href:"mailto:paul.mena@aaaimx.org"}},[t._v("paul.mena@aaaimx.org")]),t._v(". ")])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"field"},[a("div",{staticClass:"field-body"},[a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small",attrs:{href:"https://github.com/rnovec/ply-compiler-java",target:"_blank"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"mdi mdi-github-circle"})]),a("span",[t._v("ply-java-compiler")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small",attrs:{href:"https://github.com/rnovec/ply-compiler-java/blob/master/README.md",target:"_blank"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"mdi mdi-file-document"})]),a("span",[t._v("Docs")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small",attrs:{href:"https://github.com/rnovec/java-compiler/releases/tag/v2.0.0-beta",target:"_blank"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"mdi mdi-download"})]),a("span",[t._v("Desktop version")])])])])])]),a("small",[t._v(" This site is powered by "),a("a",{attrs:{href:"https://pages.github.com/"}},[t._v("Github Pages")])])])])])}],n=(a("034f"),a("2877")),l={},o=Object(n["a"])(l,i,r,!1,null,null,null),c=o.exports,d=a("9483");Object(d["a"])("/java-compiler/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var u=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("div",{staticClass:"columns is-desktop is-centered"},[a("div",{staticClass:"column is-half-desktop"},[a("div",{staticClass:"box"},[a("div",{staticClass:"tags is-centered"},t._l(Object.keys(t.examples),(function(e){return a("span",{key:e,staticClass:"tag is-dark"},[a("a",{staticClass:"has-text-white",attrs:{href:"#"},on:{click:function(a){return t.loadFile(e)}}},[t._v(t._s(e)+".java")])])})),0),a("div",{staticClass:"field"},[a("div",{staticClass:"control is-expanded"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea has-text-left",class:{"is-danger":!t.match},staticStyle:{overflow:"hidden"},attrs:{type:"search",rows:t.textLines<=5?5:t.textLines,placeholder:"» » » enter your code « « «"},domProps:{value:t.text},on:{change:function(e){return t.submit()},input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"file has-name is-expanded",attrs:{id:"file"}},[a("label",{staticClass:"file-label"},[a("input",{ref:"myFile",staticClass:"file-input",attrs:{type:"file",accept:"text/plain",name:"resume"},on:{change:function(e){t.selectedFile(),t.submit()}}}),t._m(0),a("span",{staticClass:"file-name"},[t._v(t._s(t.fileName||"No file uploaded"))])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control is-expanded"},[a("button",{staticClass:"button is-dark is-medium is-fullwidth",class:t.isLoading?" is-loading ":"",on:{click:function(e){return t.submit()}}},[t._v(" Compilar"),a("i",{staticClass:"fas fa-cogs"})])])])]),t.symbolTable.length?a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"content"},[a("table",{staticClass:"table"},[t._m(2),a("tbody",t._l(t.symbolTable,(function(e,s){return a("tr",{key:s},[a("th",[t._v(t._s(e.value))]),a("td",[t._v(t._s(e.type))]),a("td",[t._v(t._s(e.vartype))])])})),0)])])]):t._e()]),t.errors.length||t.semerrors.length||t.tokensFile?a("div",{staticClass:"column"},[t.errors.length||t.semerrors.length?a("div",{staticClass:"card"},[t._m(3),a("div",{staticClass:"content"},[a("table",{staticClass:"table"},[t._m(4),a("tbody",[t._l(t.semerrors,(function(e,s){return a("tr",[a("th",[t._v(t._s(e.type)+t._s(s+1))]),a("td",[t._v(t._s(e.value))]),a("td",[t._v(t._s(e.line))]),a("td",[t._v(t._s(e.desc))])])})),t._l(t.errors,(function(e,s){return a("tr",[a("th",[t._v(t._s(e.type))]),a("td",[t._v(t._s(e.value))]),a("td",[t._v(t._s(e.line))]),a("td",[t._v(t._s(e.desc))])])}))],2)])])]):t._e(),t.tokensFile?a("div",{staticClass:"card"},[t._m(5),a("div",{staticClass:"field"},[a("div",{staticClass:"control is-expanded"},[a("textarea",{staticClass:"textarea has-text-left",staticStyle:{overflow:"hidden"},attrs:{rows:t.tokensLines,disabled:""},domProps:{value:t.tokensFile}})]),a("footer",{staticClass:"card-footer"},[a("a",{staticClass:"card-footer-item",attrs:{href:t.encodedToken,download:"tokens.txt"}},[t._v("Descargar tokens.txt")])])])]):t._e(),t.taddc.length?a("div",{staticClass:"card"},[t._m(6),a("div",{staticClass:"content"},t._l(t.taddc,(function(e){return a("table",{staticClass:"table"},[t._m(7,!0),a("tbody",t._l(e,(function(e,s){return a("tr",[a("th",[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.obj))]),a("td",[t._v(t._s(e.fuente))]),a("td",[t._v(t._s(e.op))])])})),0)])})),0)]):t._e()]):t._e()])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-icon"},[a("i",{staticClass:"fas fa-upload"})]),a("span",{staticClass:"file-label"},[t._v("Choose File...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header"},[a("h3",{staticClass:"card-header-title"},[a("i",{staticClass:"fas fa-table"}),t._v("Tabla de símbolos ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("LEX")]),a("th",[t._v("TOKEN")]),a("th",[a("abbr",{attrs:{title:"Type"}},[t._v("Type")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header"},[a("h5",{staticClass:"card-header-title"},[a("i",{staticClass:"fas fa-bug"}),t._v("Tabla de errores ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[a("abbr",{attrs:{title:"Token Error"}},[t._v("ERR")])]),a("th",[a("abbr",{attrs:{title:"Lexema"}},[t._v("LEX")])]),a("th",[t._v("LINEA")]),a("th",[a("abbr",{attrs:{title:"Descripción"}},[t._v("DESC")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header"},[a("h5",{staticClass:"card-header-title"},[t._v("Archivo de tokens")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header"},[a("h5",{staticClass:"card-header-title"},[a("i",{staticClass:"fas fa-table"}),t._v("Triplos ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Dato Objeto")]),a("th",[t._v("Fuente")]),a("th",[a("abbr",{attrs:{title:"Type"}},[t._v("Operador")])])])])}],h=a("bc3a"),p=a.n(h);const m=p.a.create({baseURL:"http://localhost:8000/api/v1",timeout:2e4,mode:"cors",withCredentials:!1});m.interceptors.request.use(t=>t),m.interceptors.response.use(t=>t.data);var _=m;function b(t){return _({url:"/compile",method:"POST",data:t})}var C=a("2f62"),g="void prueba1 ()\n{\n    a = a + b * 5;\n    while ( a < b)\n    {\n        a = a * 5;\n    }\n}",y="void prueba1 ()\n{\n    a = a + b * 5;\n}\nint suma (int a, int b, bool f)\n{\n    c = a + b;\n    while(a <=b &&a <= c)\n    {\n        a = a + b + f ;\n    }\n}",x="voi9d prueba1 ()\n{\n    a = a + b * 5;\n    while ( y < 8)\n    {\n        a = a * 5;\n    }\n}\nint suma (int a, int b)\n{\n    c = a + b;\n}\n",k="void prueba1 ()\n{\n    int a = a + b + c * 5;\n    while ( y < 8)\n    {\n        a = a * 5;\n    }\n}\n\nint suma@ (int a, int b, bool c)\n{\n    c = a + b;\n}\n",w={name:"App",data(){return{fileName:"",encodedToken:"",tokensFile:"",text:"",isLoading:!1,examples:{ejemplo1:g,ejemplo2:y,ejemplo3:x,ejemplo4:k},match:!0}},created(){this.submit()},computed:{...Object(C["b"])(["symbolTable","errors","semerrors","taddc"]),textLines(){return this.text.split(/\r\n|\r|\n/).length},tokensLines(){return this.tokensFile.split(/\r\n|\r|\n/).length}},methods:{loadFile(t){this.fileName=t+".java",this.text=this.examples[t],this.submit()},async submit(){if(this.isLoading=!0,this.$store.commit("CLEAR_TOKENS"),this.tokensFile="",this.text)try{const t=await b({program:this.text});this.$store.commit("SET_TOKENS",t),this.tokensFile=t.tokensFile,this.encodedToken="data:text/plain;charset=utf-8,"+encodeURIComponent(this.tokensFile)}catch(t){console.log(t)}finally{this.isLoading=!1}else this.isLoading=!1},selectedFile(){let t=this.$refs.myFile.files[0];this.fileName=this.$refs.myFile.files[0].name;let e=new FileReader;e.readAsText(t,"UTF-8"),e.onload=t=>{this.text=t.target.result},e.onerror=t=>{console.error(t)}}}},E=w,T=(a("c203"),Object(n["a"])(E,v,f,!1,null,"86827eae",null)),j=T.exports;s["a"].use(u["a"]);const F=[{path:"/",name:"Home",component:j}],O=new u["a"]({routes:F});var S=O;a("ddb0");s["a"].use(C["a"]);var L=new C["a"].Store({state:{symbolTable:[],tokensFile:[],semerrors:[],errors:[],taddc:[]},mutations:{SET_TOKENS(t,e){t.symbolTable=e.simbolTable.filter(t=>!/ERR/.test(t.type));let a=[...new Set(e.errors.map(JSON.stringify))].map(JSON.parse);t.errors=a.filter(t=>!/ERRSEM/.test(t.type)),t.semerrors=a.filter(t=>/ERRSEM/.test(t.type)),t.taddc=e.taddc},CLEAR_TOKENS(t){t.symbolTable=[],t.tokensFile=[],t.semerrors=[],t.errors=[],t.taddc=[]}},actions:{},modules:{}}),N=a("289d");s["a"].use(N["a"]),s["a"].config.productionTip=!1,new s["a"]({router:S,store:L,render:t=>t(c)}).$mount("#app")},"85ec":function(t,e,a){},c203:function(t,e,a){"use strict";a("437c")}});