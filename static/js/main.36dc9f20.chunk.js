(this["webpackJsonpweather-application"]=this["webpackJsonpweather-application"]||[]).push([[0],{29:function(e,t,a){e.exports=a(63)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(25),o=a.n(l),i=(a(34),a(9)),m=a(7);a(35),a(36);var r=function(){var e={color:"white"};return c.a.createElement("nav",null,c.a.createElement("h1",null,"My Weather Application"),c.a.createElement("ul",{className:"nav-links"},c.a.createElement(i.b,{to:"/",style:e},c.a.createElement("li",null,"Home")),c.a.createElement(i.b,{to:"/cities",style:e},c.a.createElement("li",null,"Cities"))))},s=a(1),u=(a(42),a(43),a(12).default),b=function(e){var t=Object(m.e)(),a=e.currentCity,l=Object(n.useState)("\xb0C"),o=Object(s.a)(l,2),i=o[0],r=o[1],b=Object(n.useState)(),p=Object(s.a)(b,2),f=p[0],d=p[1],E=Object(n.useState)(),j=Object(s.a)(E,2),O=j[0],h=j[1],v=Object(n.useState)(),y=Object(s.a)(v,2),g=y[0],C=y[1],S=Object(n.useState)(),N=Object(s.a)(S,2),w=N[0],k=N[1],T=Object(n.useState)(),B=Object(s.a)(T,2),F=B[0],x=B[1],M=Object(n.useState)(),_=Object(s.a)(M,2),K=_[0],A=_[1],I=Object(n.useState)(),D=Object(s.a)(I,2),W=D[0],J=D[1],q=Object(n.useState)(),H=Object(s.a)(q,2),P=H[0],R=H[1],U=Object(n.useState)(),$=Object(s.a)(U,2),z=$[0],G=$[1],L=Object(n.useState)(),Q=Object(s.a)(L,2),V=Q[0],X=Q[1],Y=Object(n.useState)(),Z=Object(s.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(),ne=Object(s.a)(ae,2),ce=ne[0],le=ne[1],oe=Object(n.useState)(),ie=Object(s.a)(oe,2),me=ie[0],re=ie[1];Object(n.useEffect)((function(){u.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=a493ff8e0f4519b969db26636f451622")).then((function(e){console.log(e.data);var t=e.data.main.temp-273.15,a=e.data.main.temp_min-273.15,n=e.data.main.temp_max-273.15,c=e.data.main.temp,l=e.data.main.temp_min,o=e.data.main.temp_max,i=1.8*(e.data.main.temp-273.15)+32,m=1.8*(e.data.main.temp_min-273.15)+32,r=1.8*(e.data.main.temp_max-273.15)+32;d(t),h(e.data.weather[0].main),C(a),k(n),x(t),A(a),J(n),R(c),G(l),X(o),te(i),le(m),re(r)}))}),[a]);var se=Object(n.useState)(0),ue=Object(s.a)(se,2),be=ue[0],pe=ue[1];return Object(n.useEffect)((function(){be>0&&u.post("https://weather-application-bbc94.firebaseio.com/mycities.json",{myCityName:a,myTemp:f,myMinTemp:g,myMaxTemp:w}).then((function(e){console.log(e.data),t.push("/cities")}))}),[be]),c.a.createElement("div",null,c.a.createElement("div",{className:"what"},c.a.createElement("p",null,a),c.a.createElement("h1",{className:"currentTemp",id:"changingTemp"},f," ",i),c.a.createElement("span",{className:"spantag"},O),c.a.createElement("span",{className:"spantag"},g," ",i," /",w," ",i),c.a.createElement("br",null),c.a.createElement("div",{className:"changingUnit"},"Temperature Type: ",c.a.createElement("button",{onClick:function(){console.log("convertToCelcius"),r("\xb0C"),d(F),C(K),k(W)}},"\xb0C"),c.a.createElement("button",{onClick:function(){console.log("convertToKelvin"),r("\xb0K"),d(P),C(z),k(V)}},"\xb0K"),c.a.createElement("button",{onClick:function(){r("\xb0F"),console.log("convertToFahrenheit"),d(ee),C(ce),k(me)}},"\xb0F"))),c.a.createElement("button",{className:"addToCities",onClick:function(){pe(be+1),console.log(be)}},"Add ",a," to My Cities"))};a(61);var p=function(){return c.a.createElement("div",{className:"backupCard"},"*Please Select a City")},f=a(12).default,d=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){f.get("https://weather-application-bbc94.firebaseio.com/cities.json").then((function(e){console.log(e.data),l(e.data)}))}),[]);var o=Object(n.useState)(),i=Object(s.a)(o,2),m=i[0],r=i[1];return c.a.createElement("div",null,c.a.createElement("form",{className:"dropdown"},c.a.createElement("label",{id:"selectACity"},"Select a city:"),c.a.createElement("select",{id:"selectedCity",onChange:function(){var e=document.getElementById("selectedCity").value;console.log(e),r(null!=e&&e)}},c.a.createElement("option",{value:"null"},"Nothing is selected"),a.map((function(e){return c.a.createElement("option",{value:e.name,key:e.name},e.name)})))),c.a.createElement("div",null,m?c.a.createElement(b,{currentCity:m}):c.a.createElement(p,null)))};var E=function(){return c.a.createElement("div",null,c.a.createElement(d,null))},j=a(28),O=(a(62),a(12).default);var h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),m=i[0],r=i[1],u=Object(n.useState)(""),b=Object(s.a)(u,2),p=b[0],f=b[1];return Object(n.useEffect)((function(){O.get("https://weather-application-bbc94.firebaseio.com/mycities.json").then((function(e){var t=[];for(var a in e.data)t.push(Object(j.a)({},e.data[a],{id:a}));l(t)}))}),[a]),Object(n.useEffect)((function(){!0===m&&(console.log("Delete button"),O.delete("https://weather-application-bbc94.firebaseio.com/mycities/".concat(p,".json")).then((function(e){console.log(e)}))),r(!1)})),c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"My Cities"),c.a.createElement("div",{className:"myCitiesButton"},c.a.createElement("span",null,"Selected Temperature Type:"),c.a.createElement("button",{onClick:function(){console.log("Celcius")},className:"tempButton"},"\xb0C"),c.a.createElement("button",{onClick:function(){console.log("Kelvin")},className:"tempButton"},"\xb0K"),c.a.createElement("button",{onClick:function(){console.log("Fahrenheit")},className:"tempButton"},"\xb0F")),c.a.createElement(c.a.Fragment,null,a.map((function(e){return c.a.createElement("div",{key:e.id,className:"myOuterInlineDiv"},c.a.createElement("div",{className:"myInlineDiv"},c.a.createElement("span",{className:"cityName"}," ",e.myCityName," "),c.a.createElement("span",{className:"temp"}," ",e.myTemp," \xb0C")),c.a.createElement("button",{className:"deleteButton",onClick:function(t){return function(e){r(!0),f(e)}(e.id)}},"Remove"))}))))};var v=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(r,null),c.a.createElement(m.a,{exact:!0,path:"/",component:E}),c.a.createElement(m.a,{path:"/cities",component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.36dc9f20.chunk.js.map