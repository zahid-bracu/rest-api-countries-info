(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{16:function(e,t,s){},45:function(e,t,s){},53:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(0),a=s.n(c),i=s(19),r=s.n(i),l=(s(45),s(39)),o=s(13),d=s(60),j=s(57),h=s(35),m=s(8),b=(s(16),function(e){var t=e.datas,s=(t.key,t.name),c=t.nativeName,a=t.region,i=t.flag,r=t.capital,l=t.population,o=t.area;return Object(n.jsxs)(d.a,{className:"card",style:{width:"18rem",paddingTop:"15px",height:"30rem",margin:"10px"},children:[Object(n.jsx)(d.a.Img,{variant:"top",style:{width:"200px",display:"block",margin:"0px auto"},src:i}),Object(n.jsxs)(d.a.Body,{children:[Object(n.jsxs)(d.a.Title,{children:[s,"  "]}),Object(n.jsx)("p",{children:c}),Object(n.jsx)(d.a.Text,{children:Object(n.jsxs)("h6",{children:[" The Capital of ",s," is ",r," "]})})]}),Object(n.jsxs)(j.a,{className:"list-group-flush",children:[Object(n.jsxs)(h.a,{children:[" ",Object(n.jsxs)("h6",{children:["Region : ",a," "]})]}),Object(n.jsxs)(h.a,{children:[" ",Object(n.jsxs)("h6",{children:["Population : ",l," people "]})]})]}),Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)("button",{onClick:function(){return e.addCountry(e.datas)},className:"btn btn-danger text-white",style:{marginRight:".5em"},children:"Add"}),Object(n.jsx)(m.b,{to:"/detail/"+o,children:Object(n.jsx)("button",{className:"btn btn-info",children:"View Info"})})]})]})}),u=function(){var e=function(){var e=g.getItem("userId");if(e)return e;var t="user-"+(new Date).getTime();return g.setItem("userId",t),t}();return"emaJohn/carts/".concat(e)},x=function(){var e=u(),t=O.getItem(e)||"{}";return JSON.parse(t)},O=window.localStorage||function(){var e={};return{getItem:function(t){return e[t]},setItem:function(t,s){e[t]=s.toString()},clear:function(){e={}}}}(),g=window.sessionStorage||function(){var e={};return{getItem:function(t){return e[t]},setItem:function(t,s){e[t]=s.toString()},clear:function(){e={}}}}(),p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(),r=Object(o.a)(i,2),d=r[0],j=r[1],h=Object(c.useState)([]),m=Object(o.a)(h,2),g=m[0],p=m[1];function f(e){var t=[].concat(Object(l.a)(g),[e]);p(t),function(e,t){var s=x();s[e]=t,O.setItem(u(),JSON.stringify(s))}(e.numericCode,0)}return Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){j(e.length),function(e){for(var t=e.length;t;t--){var s=Math.floor(Math.random()*t),n=[e[s],e[t-1]];e[t-1]=n[0],e[s]=n[1]}}(e),e=e.slice(0,20),a(e)}))}),[]),Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){var t=x(),s=Object.keys(t);console.log(s),console.log(e.length);for(var n=s.map((function(t){return e.filter((function(e){return e.numericCode==t}))})),c=[],a=0;a<n.length;a++)c.push(n[a][0]);console.log(c),p(c)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h5",{className:"text-center my-4",children:["Total countries are loaded from API : ",d]}),Object(n.jsx)("h6",{className:"text-center mb-4",children:"Showing 20 Countries"}),Object(n.jsxs)("h5",{className:"text-center mb-4",children:["You have added ",Object(n.jsx)("span",{className:"text-danger",children:g.length})," countries in your visiting plan"]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row  justify-content-center align-items-center",children:s.map((function(e){return Object(n.jsx)(b,{addCountry:f,datas:e})}))})})]})},f=s(58),N=s(59),y=s.p+"static/media/logo.6dc96806.jpg",v=function(){return Object(n.jsx)(f.a,{className:"sticky-top nav-bar",bg:"light",expand:"lg",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(f.a.Brand,{children:Object(n.jsx)("img",{src:y,style:{maxWidth:"70px",width:"100%"}})}),Object(n.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(N.a,{className:"ml-auto",children:[Object(n.jsx)(N.a.Link,{children:Object(n.jsx)(m.b,{className:"custom-nav",to:"/home",children:"Home"})}),Object(n.jsx)(N.a.Link,{children:Object(n.jsx)(m.b,{className:"custom-nav",to:"/countries",children:"Countries"})}),Object(n.jsx)(N.a.Link,{children:Object(n.jsx)(m.b,{className:"custom-nav",to:"/addedCountries",children:"Added Countries"})}),Object(n.jsx)(N.a.Link,{className:"custom-nav",target:"_blank",href:"https://portfolio-zahid-bracu.netlify.app/",children:Object(n.jsx)("button",{className:"btn btn-outline-success btn-sm btn-round",children:Object(n.jsx)("span",{className:"font-weight-bold",children:"Contact"})})})]})})]})})},w=s(6),C=[{key:1,name:"Bangladesh",capital:"Dhaka",flag:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{key:2,name:"Saudi Arab",capital:"Riyadh",flag:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},{key:3,name:"Pakistan",capital:"Islamabad",flag:"https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}];function A(e){var t=e.data,s=(t.key,t.name),c=t.capital,a=t.flag,i=t.description;return Object(n.jsxs)(d.a,{style:{width:"90%",maxWidth:"18rem",minHeight:"32rem",margin:".2rem .5rem"},children:[Object(n.jsx)(d.a.Img,{variant:"top",src:a}),Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)(d.a.Title,{children:s}),Object(n.jsxs)(d.a.Text,{children:["Capital of ",Object(n.jsx)("span",{className:"text-success",children:s})," is ",Object(n.jsx)("span",{className:"text-danger",children:c})]}),Object(n.jsx)("p",{className:"text-justify",children:i})]})]})}var k=function(){return console.log(C),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row mb-5 justify-content-center align-items-center",children:[Object(n.jsxs)("div",{className:"col-lg-6 col-md-12 col-sm-12 col-12",children:[Object(n.jsx)("h3",{className:"",children:"Welcome to Rest Countries"}),Object(n.jsx)("h5",{className:"",children:"Rest Countries is a open source API"}),Object(n.jsx)(m.b,{to:"/countries",children:Object(n.jsx)("button",{className:"btn btn-outline-dark btn-sm mx-auto",children:Object(n.jsx)("span",{className:"font-weight-bold",children:"Check"})})})]}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{className:"home-bg",src:"data:image/png;base64,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"})})]}),Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)("h4",{className:"text-center mb-3",children:"About Us"}),Object(n.jsx)("p",{className:"text-justify mx-auto",style:{width:"96%",maxWidth:"890px"},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),Object(n.jsx)("div",{className:"row justify-content-center align-items-center",children:C.map((function(e){return Object(n.jsx)(A,{data:e})}))})]})})},B=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),s=t[0],a=t[1],i=Object(w.g)().id;Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){var t=e.find((function(e,t){return e.area==i}));a(t)}))}),[]),console.log(s);var r=Object(w.f)();return Object(n.jsxs)(n.Fragment,{children:[s&&Object(n.jsxs)("div",{style:{maxWidth:"600px",margin:"auto"},className:"card text-center mt-4",children:[Object(n.jsx)("img",{className:"card-img-top",src:s.flag,style:{maxWidth:"500px",display:"block",margin:"auto"},alt:"Card image cap"}),Object(n.jsxs)("div",{className:"card-header",children:["Flag of ",s.name]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:s.name}),Object(n.jsxs)("p",{className:"text-justify",children:["The Capital of ",s.name," is ",s.capital,".",s.name," is in ",s.region," region.The Sub Region is ",s.subregion,".There are total ",s.population," people live in this country.The area of ",s.name," is ",s.area," Square Kilometre.The native language of ",s.name," is ",s.languages[0].nativeName,"."]}),Object(n.jsx)("button",{onClick:function(){return r.goBack()},className:"btn btn-success",children:"Go Back"})]})]}),!s&&Object(n.jsx)("h1",{className:"text-center my-5",children:"Data is Loading"})]})},I=function(e){console.log(e.datas.name);var t=e.datas,s=t.name,c=t.nativeName,a=t.region,i=t.flag,r=t.capital,l=t.population,o=t.area,b=t.numericCode;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(d.a,{style:{width:"18rem",paddingTop:"15px",height:"30rem",margin:"10px"},children:[Object(n.jsx)(d.a.Img,{variant:"top",style:{width:"200px",display:"block",margin:"0px auto"},src:i}),Object(n.jsxs)(d.a.Body,{children:[Object(n.jsxs)(d.a.Title,{children:[s,"  "]}),Object(n.jsx)("p",{children:c}),Object(n.jsx)(d.a.Text,{children:Object(n.jsxs)("h6",{children:[" The Capital of ",s," is ",r," "]})})]}),Object(n.jsxs)(j.a,{className:"list-group-flush",children:[Object(n.jsxs)(h.a,{children:[" ",Object(n.jsxs)("h6",{children:["Region : ",a," "]})]}),Object(n.jsxs)(h.a,{children:[" ",Object(n.jsxs)("h6",{children:["Population : ",l," people "]})]})]}),Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)("button",{onClick:function(){return e.remove(b)},className:"btn btn-danger text-white",children:"Remove"}),Object(n.jsx)(m.b,{to:"/detail/"+o,children:Object(n.jsx)("button",{className:"btn btn-info ml-3",children:"View Info"})})]})]})})},Y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!1),r=Object(o.a)(i,2);r[0],r[1];function l(e){console.log(e);var t=s.filter((function(t){return t[0].numericCode!=e}));a(t),function(e){var t=x();delete t[e],O.setItem(u(),JSON.stringify(t))}(e)}Object(c.useEffect)((function(){var e=x(),t=Object.keys(e);fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){var s=t.map((function(t){return e.filter((function(e){return e.numericCode===t}))}));a(s)}))}),[]);var d="";return d=s.length>0?s.map((function(e){return Object(n.jsx)(I,{remove:l,datas:e[0]})})):Object(n.jsx)("h1",{className:"d-block mx-auto my-5 text-danger",children:"You didn't Select Any Country"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("h5",{className:"text-center my-3 text-success",children:["You have added ",s.length," countries"]}),Object(n.jsx)("div",{className:"row justify-content-center align-items-center",children:d})]})};function L(){return Object(n.jsxs)("div",{className:"     mt-5 footer",children:[Object(n.jsxs)("div",{className:"row justify-content-between align-items-center",children:[Object(n.jsxs)("ul",{className:"col-lg-3 col-md-6 col-sm-12 col-12 list-unstyled",children:[Object(n.jsx)("li",{className:"",children:"Home"}),Object(n.jsx)("li",{className:"",children:"Service"}),Object(n.jsx)("li",{className:"",children:"Contact"}),Object(n.jsx)("li",{className:"",children:"Policies"})]}),Object(n.jsxs)("ul",{className:"col-lg-3 col-md-6 col-sm-12 col-12 list-unstyled",children:[Object(n.jsx)("li",{className:"",children:"Docs"}),Object(n.jsx)("li",{className:"",children:"Pricing"}),Object(n.jsx)("li",{className:"",children:"Support"}),Object(n.jsx)("li",{className:"",children:"News"})]}),Object(n.jsxs)("ul",{className:"col-lg-3 col-md-6 col-sm-12 col-12 list-unstyled",children:[Object(n.jsx)("li",{className:"",children:"Google+"}),Object(n.jsx)("li",{className:"",children:"Yahoo!"}),Object(n.jsx)("li",{className:"",children:"Nogorbalok"}),Object(n.jsx)("li",{className:"",children:"mig33.com"})]}),Object(n.jsxs)("ul",{className:"col-lg-3 col-md-6 col-sm-12 col-12 list-unstyled",children:[Object(n.jsx)("li",{className:"",children:"Community Guidelines"}),Object(n.jsx)("li",{className:"",children:"Sales Solutions"}),Object(n.jsx)("li",{className:"",children:"Careers"}),Object(n.jsx)("li",{className:"",children:"Small Business"})]})]}),Object(n.jsx)("h6",{className:"text-center mt-3 mb-2",children:"Zahid's Programming Initiative 2020"})]})}s(53);var S=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(v,{}),Object(n.jsxs)(w.c,{children:[Object(n.jsx)(w.a,{exact:!0,path:"/home",children:Object(n.jsx)(k,{})}),Object(n.jsx)(w.a,{path:"/countries",children:Object(n.jsx)(p,{})}),Object(n.jsx)(w.a,{path:"/addedCountries",children:Object(n.jsx)(Y,{})}),Object(n.jsx)(w.a,{path:"/detail/:id",children:Object(n.jsx)(B,{})}),Object(n.jsx)(w.a,{exact:!0,path:"/",children:Object(n.jsx)(k,{})})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(L,{})]})})},J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,61)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};s(54);r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),J()}},[[55,1,2]]]);
//# sourceMappingURL=main.ef3bc0fb.chunk.js.map