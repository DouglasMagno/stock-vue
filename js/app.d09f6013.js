(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/stock-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[a("v-container",{staticClass:"py-0 fill-height"},[a("v-avatar",{staticClass:"mr-10",attrs:{color:"grey darken-1",size:"32"}}),a("v-spacer")],1)],1),a("v-main",{staticClass:"grey lighten-3"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-sheet",{attrs:{rounded:"lg"}},[a("v-list",{attrs:{color:"transparent"}},t._l(t.links,(function(e,n){return a("v-list-item",{key:n,attrs:{link:"",href:e.href}},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1)],1)],1),a("v-col",[a("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[a("router-view")],1)],1)],1)],1)],1)],1)},r=[],s={name:"App",components:{},data:function(){return{links:[{name:"Product",href:"#/product"},{name:"History",href:"#/history"},{name:"Movement",href:"#/movement"}]}}},i=s,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),m=a("40dc"),p=a("8212"),v=a("62ad"),f=a("a523"),h=a("8860"),b=a("da13"),_=a("5d23"),g=a("f6c4"),y=a("0fd9"),w=a("8dd9"),V=a("2fa4"),x=Object(c["a"])(i,o,r,!1,null,null,null),k=x.exports;u()(x,{VApp:d["a"],VAppBar:m["a"],VAvatar:p["a"],VCol:v["a"],VContainer:f["a"],VList:h["a"],VListItem:b["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VMain:g["a"],VRow:y["a"],VSheet:w["a"],VSpacer:V["a"]});var C=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"3",sm:"3"}},[t.products.some((function(t){return!0===t.selected}))?a("v-select",{attrs:{items:t.actions,label:"Actions"},on:{change:t.changeAction}}):t._e(),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(" Delete? ")]),a("v-card-text",[t._v("Are you sure you want to delete "+t._s(t.productsToDelete)+".")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v(" Disagree ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.deletePrograms}},[t._v(" Agree ")])],1)],1)],1)],1)],1),a("v-card",[t.loading?a("v-sheet",{staticClass:"pa-3",attrs:{color:"grey"}},[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}})],1):a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" # ")]),a("th",{staticClass:"text-left"},[t._v(" ID ")]),a("th",{staticClass:"text-left"},[t._v(" Name ")]),a("th",{staticClass:"text-left"},[t._v(" Price ")]),a("th",{staticClass:"text-left"},[t._v(" Quantity ")])])]),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[a("v-checkbox",{model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"item.selected"}})],1),a("td",[t._v(" "+t._s(e.id)+" ")]),a("td",[a("div",[t._v(t._s(e.name))])]),a("td",[a("div",[t._v(t._s(t.currency(e.price)))])]),a("td",[t._v(t._s(e.qtd_to_show))])])})),0)]},proxy:!0}])}),a("br"),a("v-card",[a("v-btn",{attrs:{color:"blue",dark:"",absolute:"",bottom:"",right:"",fab:""},on:{click:t.createProduct}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1)},P=[],j=(a("4de4"),a("7db0"),a("a15b"),a("d81d"),a("b0c0"),a("b64b"),a("5530")),D=a("ade3"),S={name:"Dashboard",data:function(){return{products:[],loading:!1,deleteDialog:!1,productsToDelete:"",actions:["Edit","Delete"]}},methods:{fetchProducts:function(){var t=this;this.loading=!0,window.axios.get("".concat("http://stockapi-env.eba-jtrmq3hs.us-east-1.elasticbeanstalk.com/api","/products")).then((function(e){t.$set(t,"products",e.data),t.loading=!1}))},createProducts:function(t){var e=this;window.axios.post("".concat("http://stockapi-env.eba-jtrmq3hs.us-east-1.elasticbeanstalk.com/api","/products/create"),t).then((function(t){200!==t.status&&alert("Fail to save programs"),e.$router.push({name:"Product"})}))},updateProducts:function(t){this.loading=!0,window.axios.put("".concat("http://stockapi-env.eba-jtrmq3hs.us-east-1.elasticbeanstalk.com/api","/products/update"),t).then((function(t){200!==t.status&&alert("Fail to update programs")}))},openDeleteDialog:function(){this.deleteDialog=!0;var t=[];for(var e in this.products)this.products[e].selected&&t.push(this.products[e].name);this.productsToDelete=t.join(", ")},deletePrograms:function(){var t=this;this.loading=!0;var e=this.products.filter((function(t){return!0===t.selected})).map((function(t){return t.id}));window.axios.delete("".concat("http://stockapi-env.eba-jtrmq3hs.us-east-1.elasticbeanstalk.com/api","/products/delete"),{data:e}).then((function(e){200!==e.status&&alert("Fail to delete programs"),t.deleteDialog=!1,t.fetchProducts()}))},changeAction:function(t){var e={delete:this.openDeleteDialog,edit:this.goToFormEditProduct};e[t.toLowerCase()]&&e[t.toLowerCase()]()},currency:function(t){return"string"===typeof t&&(t=parseFloat(t)),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(t)},inputsFormProducts:function(){return[{id:1,cols:"3",md:"4",rules:[],name:"name",label:"Name Of Product"},{id:2,cols:"3",md:"4",rules:[],name:"price",label:"Price of product"},{id:3,cols:"3",md:"4",rules:[],name:"unit",label:"Unit of Product"},{id:4,cols:"3",md:"4",rules:[],name:"qtd",label:"Initial Quantity"},{id:5,cols:"3",md:"4",rules:[],name:"format",label:"Format of product"}]},createProduct:function(){var t=this,e={inputs:this.inputsFormProducts(),submit:function(e){var a=e.map((function(t){var e=t.inputs.map((function(t){return Object(D["a"])({},t.name,t.model)})),a={};for(var n in e)a=Object(j["a"])(Object(j["a"])({},a),e[n]);return a}));t.createProducts(a)},action:"create"};this.$router.push({name:"FormValidation",params:e})},getFormEditProduct:function(){var t=[],e=this.products.filter((function(t){return t.selected})),a=this.inputsFormProducts();a.push({id:6,cols:"3",md:"4",rules:[],name:"id",label:"#"});var n=[],o=null;for(var r in e){var s=function(t){o=Object.assign({},a.find((function(e){return e.name===t}))),Object.keys(o).length&&(o.model=e[r][t],n.push(o))};for(var i in e[r])s(i);t.push({inputs:n}),o=null,n=[]}return t},goToFormEditProduct:function(){var t=this,e={inputs:this.inputsFormProducts(),submit:function(e){var a=e.map((function(t){var e=t.inputs.map((function(t){return Object(D["a"])({},t.name,t.model)})),a={};for(var n in e)a=Object(j["a"])(Object(j["a"])({},a),e[n]);return a}));t.updateProducts(a),t.$router.push({name:"Product"}),t.fetchProducts()},customForm:this.getFormEditProduct(),action:"edit"};this.$router.push({name:"FormValidation",params:e})}},mounted:function(){this.fetchProducts()}},O=S,$=a("8336"),T=a("b0af"),M=a("99d9"),A=a("ac7c"),E=a("169a"),I=a("132d"),L=a("b974"),q=a("1f4f"),B=a("3129"),N=Object(c["a"])(O,F,P,!1,null,null,null),U=N.exports;u()(N,{VBtn:$["a"],VCard:T["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VCheckbox:A["a"],VCol:v["a"],VContainer:f["a"],VDialog:E["a"],VIcon:I["a"],VRow:y["a"],VSelect:L["a"],VSheet:w["a"],VSimpleTable:q["a"],VSkeletonLoader:B["a"],VSpacer:V["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("v-sheet",{staticClass:"pa-3",attrs:{color:"grey"}},[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}})],1):a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Name ")]),a("th",{staticClass:"text-left"},[t._v(" Price ")]),a("th",{staticClass:"text-left"},[t._v(" Previous Balance ")]),a("th",{staticClass:"text-left"},[t._v(" Movement ")]),a("th",{staticClass:"text-left"},[t._v(" Final Balance ")]),a("th",{staticClass:"text-left"},[t._v(" Date ")])])]),a("tbody",t._l(t.histories,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.product_name))]),a("td",[t._v(t._s(t.currency(e.price)))]),a("td",[t._v(t._s(e.previous_balance))]),a("td",[t._v(t._s(e.movement))]),a("td",[t._v(t._s(e.final_balance))]),a("td",[t._v(t._s(t.date_formatter(e.created_at)))])])})),0)]},proxy:!0}])})},R=[],J={name:"Dashboard",data:function(){return{histories:[],loading:!1}},methods:{fetchProducts:function(){var t=this;this.loading=!0,window.axios.get("".concat("http://stockapi-env.eba-jtrmq3hs.us-east-1.elasticbeanstalk.com/api","/history")).then((function(e){t.$set(t,"histories",e.data),t.loading=!1}))},currency:function(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(t)},date_formatter:function(t){return new Date(t).toLocaleString()}},mounted:function(){this.fetchProducts()}},Q=J,z=Object(c["a"])(Q,H,R,!1,null,null,null),G=z.exports;u()(z,{VSheet:w["a"],VSimpleTable:q["a"],VSkeletonLoader:B["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-card",[t._l(t.viewForms,(function(e,n){return a("MyCustomForm",{key:e.id,attrs:{inputs:e.inputs,submit:t.formSubmit,last:n+1===t.viewForms.length}})})),t.customForm?t._e():a("v-btn",{attrs:{color:"blue",dark:"",absolute:"",bottom:"",right:"",fab:""},on:{click:t.addForm}},[a("v-icon",[t._v("mdi-plus")])],1)],2)],1)},W=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[a("v-container",[a("v-row",t._l(t.inputs,(function(e){return a("v-col",{directives:[{name:"show",rawName:"v-show",value:"id"!==e.name,expression:"input.name !== 'id'"}],key:e.id,attrs:{cols:e.cols,md:e.md}},[a("v-text-field",{attrs:{rules:e.rules,label:e.label},model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"input.model"}})],1)})),1),a("v-divider",{staticClass:"my-2"}),t.last?a("v-btn",{staticClass:"mr-4",attrs:{type:"submit"}},[t._v(" Submit ")]):t._e()],1)],1)},Y=[],Z={name:"MyCustomForm",props:["inputs","submit","last"],methods:{send:function(){this.submit(this.inputs)}}},tt=Z,et=a("ce7e"),at=a("4bd4"),nt=a("8654"),ot=Object(c["a"])(tt,X,Y,!1,null,"06e2111c",null),rt=ot.exports;u()(ot,{VBtn:$["a"],VCol:v["a"],VContainer:f["a"],VDivider:et["a"],VForm:at["a"],VRow:y["a"],VTextField:nt["a"]});var st={name:"FormValidation",components:{MyCustomForm:rt},data:function(){return{viewForms:[]}},props:["action","inputs","submit","customForm"],methods:{addForm:function(){this.viewForms.push({inputs:this.inputs.map((function(t){return Object.assign({model:""},t)}))})},formSubmit:function(){this.submit(this.viewForms)}},mounted:function(){this.viewForms=[{inputs:this.inputs.map((function(t){return Object.assign({model:""},t)}))}],this.customForm&&(this.viewForms=this.customForm)}},it=st,ct=Object(c["a"])(it,K,W,!1,null,"d3d5ef44",null),lt=ct.exports;u()(ct,{VBtn:$["a"],VCard:T["a"],VContainer:f["a"],VIcon:I["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[t.loading?a("v-sheet",{staticClass:"pa-3",attrs:{color:"grey"}},[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}})],1):a("v-card",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[a("v-container",[t._l(t.forms,(function(e){return a("v-card",{key:e.id},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-select",{attrs:{items:t.products,"item-text":"name","item-value":"id",label:"Products"},on:{change:t.changeAction},model:{value:e.product_id,callback:function(a){t.$set(e,"product_id",a)},expression:"form.product_id"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"number",label:"Movement"},model:{value:e.movement,callback:function(a){t.$set(e,"movement",a)},expression:"form.movement"}})],1)],1),a("v-divider",{staticClass:"my-2"})],1)})),a("v-btn",{staticClass:"mr-4",attrs:{type:"submit"}},[t._v(" Submit ")])],2)],1),a("v-btn",{attrs:{color:"blue",dark:"",absolute:"",bottom:"",right:"",fab:""},on:{click:t.addForm}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1)},dt=[],mt={name:"MovementForm",data:function(){return{movement:0,selected:0,loading:!1,products:[],forms:[{id:1,movement:0,product_id:null}]}},methods:{loadProducts:function(){var t=this;this.loading=!0,window.axios.get("".concat("http://stockapi-env.eba-jtrmq3hs.us-east-1.elasticbeanstalk.com/api","/products")).then((function(e){t.$set(t,"products",e.data),t.loading=!1}))},changeAction:function(t){this.selected=t},addForm:function(){this.forms.push({id:this.forms.length+1,movement:0,product_id:null})},send:function(){var t=this;this.loading=!0,window.axios.post("".concat("http://stockapi-env.eba-jtrmq3hs.us-east-1.elasticbeanstalk.com/api","/history/create"),this.forms).then((function(e){200!==e.status&&alert("Fail to save movement"),t.loading=!1,t.$router.push({name:"History"})}))}},mounted:function(){this.loadProducts()}},pt=mt,vt=Object(c["a"])(pt,ut,dt,!1,null,"5a32e936",null),ft=vt.exports;u()(vt,{VBtn:$["a"],VCard:T["a"],VCol:v["a"],VContainer:f["a"],VDivider:et["a"],VForm:at["a"],VIcon:I["a"],VRow:y["a"],VSelect:L["a"],VSheet:w["a"],VSkeletonLoader:B["a"],VTextField:nt["a"]}),n["a"].use(C["a"]);var ht=[{path:"/",name:"Home",component:U},{path:"/product",name:"Product",component:U},{path:"/history",name:"History",component:G},{path:"/movement",name:"MovementForm",component:ft},{path:"/form",name:"FormValidation",component:lt,props:!0}],bt=new C["a"]({routes:ht}),_t=bt,gt=a("f309");n["a"].use(gt["a"]);var yt=new gt["a"]({}),wt=a("bc3a"),Vt=a.n(wt);n["a"].config.productionTip=!1,window.axios=Vt.a,new n["a"]({router:_t,vuetify:yt,render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.d09f6013.js.map