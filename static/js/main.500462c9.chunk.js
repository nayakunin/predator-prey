(this["webpackJsonpyakunin-predator-prey"]=this["webpackJsonpyakunin-predator-prey"]||[]).push([[0],{12:function(e,t,a){e.exports={root:"styles_root__32LC3",list:"styles_list__1zmfO",option:"styles_option__28eY7",title:"styles_title__1JoGE",value:"styles_value__2qwGT"}},188:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),l=a.n(c),o=a(8),s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:"MAP_RESTART",payload:e}},p=a(49),i=a.n(p),u=a(22),m=a(44),d=a.n(m),y=a(26),b=a.n(y),f=function(e){var t=Object(r.useState)(),a=Object(u.a)(t,2),c=a[0],l=a[1];return Object(r.useEffect)((function(){switch(e.map[e.row][e.col]){case"prey":l(b.a.prey);break;case"predator":l(b.a.predator);break;case"food":l(b.a.food);break;default:l()}}),[e]),n.a.createElement("div",{className:b.a.root},n.a.createElement("div",{className:d()(c,b.a.circle)}))},h=function(e){return n.a.createElement("div",{className:i.a.root},e.isMapCreated?n.a.createElement("div",{className:i.a.grid},e.map.map((function(t,a){return n.a.createElement("div",{key:a,className:i.a.grid__row},t.map((function(t,r){return n.a.createElement(f,{key:"".concat(a,":").concat(r),row:a,col:r,map:e.map})})))}))):null)},E=function(e){return e.map},_=a(205),g=a(13),O=a(206),v=Object(g.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(O.a),M=Object(g.a)({root:{padding:"0 15px",width:"calc(100% - 30px)"},button_apply:{backgroundColor:"#52af77",color:"rgb(241, 241, 241)"},label:{margin:0,display:"inline",marginRight:"5px"}})((function(e){var t=e.classes,a=e.className,c=Object(o.b)(),l=Object(o.c)(E),p=Object(r.useState)(l.speed),i=Object(u.a)(p,2),m=i[0],y=i[1],b=Object(r.useCallback)((function(){c(s())}),[c]);return Object(r.useEffect)((function(){c(function(e){return{type:"MAP_CHANGE_SPEED",payload:{speed:e}}}(m))}),[c,m]),n.a.createElement("div",{className:t.root},n.a.createElement("h5",{className:t.label},"\u0412\u0440\u0435\u043c\u044f \u043c\u0435\u0436\u0434\u0443\xa0\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044f\u043c\u0438:"),n.a.createElement(v,{defaultValue:.3,getAriaValueText:function(e){return e},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:.1,min:.1,max:2,onChange:function(e,t){return y(1e3*t)}}),n.a.createElement(_.a,{className:d()(t.button_apply,a),onClick:b},"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"))}));function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var C=n.a.createElement("g",null,n.a.createElement("g",null,n.a.createElement("path",{d:"M331.912,17.336c-8.832,0-16,7.168-16,16v13.336C281.544,16.704,237.712,0,191,0C85.68,0,0,85.992,0,191.68 c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16C32,103.632,103.328,32,191,32c38.456,0,74.584,13.616,103.064,38.072H279.4 c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h52.512c8.832,0,16-7.168,16-16V33.336 C347.912,24.504,340.744,17.336,331.912,17.336z"}))),N=n.a.createElement("g",null,n.a.createElement("g",null,n.a.createElement("path",{d:"M368,176.32c-8.832,0-16,7.168-16,16C352,280.368,280.672,352,193,352c-38.008,0-73.752-13.28-102.072-37.2h15.368 c8.832,0,16-7.168,16-16c0-8.832-7.168-16-16-16h-52.52c-0.144,0-0.272,0.04-0.408,0.04c-0.608,0.016-1.208,0.096-1.816,0.184 c-0.448,0.064-0.896,0.104-1.336,0.208c-0.528,0.12-1.048,0.312-1.568,0.488c-0.48,0.168-0.968,0.312-1.432,0.52 c-0.44,0.2-0.856,0.456-1.28,0.696c-0.504,0.288-1,0.568-1.472,0.904c-0.12,0.088-0.256,0.136-0.376,0.232 c-0.272,0.208-0.48,0.464-0.736,0.688c-0.424,0.368-0.848,0.736-1.232,1.152c-0.36,0.384-0.672,0.784-0.984,1.192 c-0.312,0.408-0.616,0.816-0.896,1.248c-0.28,0.448-0.52,0.912-0.752,1.376c-0.232,0.456-0.448,0.92-0.632,1.4 c-0.184,0.496-0.328,0.992-0.464,1.504c-0.128,0.488-0.264,0.976-0.344,1.48c-0.096,0.568-0.136,1.136-0.176,1.712 c-0.024,0.328-0.096,0.648-0.096,0.984v52.736c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-12.72 C103.88,367.856,147.056,384,193,384c105.32,0,191-85.992,191-191.68C384,183.488,376.832,176.32,368,176.32z"}))),D=n.a.createElement("g",null),w=n.a.createElement("g",null),k=n.a.createElement("g",null),A=n.a.createElement("g",null),P=n.a.createElement("g",null),R=n.a.createElement("g",null),S=n.a.createElement("g",null),T=n.a.createElement("g",null),L=n.a.createElement("g",null),z=n.a.createElement("g",null),I=n.a.createElement("g",null),B=n.a.createElement("g",null),G=n.a.createElement("g",null),V=n.a.createElement("g",null),F=n.a.createElement("g",null),X=function(e){var t=e.svgRef,a=e.title,r=j(e,["svgRef","title"]);return n.a.createElement("svg",x({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 384 384",style:{enableBackground:"new 0 0 384 384"},xmlSpace:"preserve",ref:t},r),a?n.a.createElement("title",null,a):null,C,N,D,w,k,A,P,R,S,T,L,z,I,B,G,V,F)},H=n.a.forwardRef((function(e,t){return n.a.createElement(X,x({svgRef:t},e))})),J=(a.p,a(50)),q=a.n(J),K=function(){var e=Object(o.b)(),t=Object(o.c)(E),a=Object(r.useCallback)((function(){e(s(!t.isPreyOnly))}),[e,t]);return n.a.createElement("header",{className:q.a.header},n.a.createElement("h1",{className:q.a.title},t.isPreyOnly?"\u041c\u043e\u0434\u0435\u043b\u044c \u0436\u0435\u0440\u0442\u0432\u0430":"\u041c\u043e\u0434\u0435\u043b\u044c \u0445\u0438\u0449\u043d\u0438\u043a-\u0436\u0435\u0440\u0442\u0432\u0430"),n.a.createElement("div",{className:q.a.switch,onClick:a},n.a.createElement(H,null)))},U=a(82),W=function(e){var t=e.preys,a=e.predators,r=e.labels;return n.a.createElement(U.a,{data:{labels:r,datasets:[{label:"\u0416\u0435\u0440\u0442\u0432\u044b",data:t,backgroundColor:"#e9c46a"},{label:"\u0425\u0438\u0449\u043d\u0438\u043a\u0438",data:a,backgroundColor:"#e76f51"}]},options:{legend:{display:!0,labels:{fontFamily:"Roboto Mono",fontColor:"rgb(241, 241, 241)"}},scales:{yAxes:[{gridLines:{display:!0,color:"rgba(241, 241, 241, 0.3)"},ticks:{fontColor:"rgb(241, 241, 241)",fontFamily:"Roboto Mono"},scaleLabel:{display:!0,labelString:"\u041f\u043e\u043f\u0443\u043b\u044f\u0446\u0438\u044f",fontColor:"rgb(241, 241, 241)",fontFamily:"Roboto Mono",fontSize:16}}],xAxes:[{gridLines:{display:!0,color:"rgb(241, 241, 241, 0.3)"},ticks:{fontColor:"rgb(241, 241, 241)",fontFamily:"Roboto Mono"},scaleLabel:{display:!0,labelString:"\u0412\u0440\u0435\u043c\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438",fontColor:"rgb(241, 241, 241)",fontFamily:"Roboto Mono",fontSize:16}}]}}})},Y=a(12),Z=a.n(Y),$=function(e){var t=Object(o.c)(E),a=Object(r.useState)(1),c=Object(u.a)(a,2),l=c[0],s=c[1],p=Object(r.useState)(1),i=Object(u.a)(p,2),m=i[0],d=i[1];return Object(r.useEffect)((function(){t.preyData.length>1&&s(t.preyData.slice(-100,-1).reduce((function(e,t){return e+t}))/(t.preyData.length<100?t.preyData.length:100)),t.predatorData.length>1&&d(t.predatorData.slice(-100,-1).reduce((function(e,t){return e+t}))/(t.predatorData.length<100?t.predatorData.length:100))}),[t,s,d]),n.a.createElement("div",{className:Z.a.root},n.a.createElement("ul",{className:Z.a.list},n.a.createElement("li",{className:Z.a.option},n.a.createElement("h4",{className:Z.a.title},"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0436\u0435\u0440\u0442\u0432 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 100 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439:"),n.a.createElement("p",{className:Z.a.value},l)),n.a.createElement("li",{className:Z.a.option},n.a.createElement("h4",{className:Z.a.title},"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0445\u0438\u0449\u043d\u0438\u043a\u043e\u0432 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 100 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439:"),n.a.createElement("p",{className:Z.a.value},m)),n.a.createElement("li",{className:Z.a.option},n.a.createElement("h4",{className:Z.a.title},"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043c\u0438\u0440\u0430:"),n.a.createElement("p",{className:Z.a.value},t.size.width*t.size.height))))},Q=a(20),ee=a.n(Q),te=function(e){var t=Object(o.b)(),a=Object(o.c)((function(e){return e.map}));return Object(r.useEffect)((function(){if(a.isMapCreated){var e=setInterval((function(){t({type:"MAP_STEP"}),a.isPreyOnly||a.iteration%25!==0||t({type:"MAP_ADD_PREDATOR"})}),a.speed);return function(){return clearInterval(e)}}t({type:"MAP_INIT"})}),[t,a]),n.a.createElement("div",{className:ee.a.root},n.a.createElement(K,null),n.a.createElement("main",{className:ee.a.main},n.a.createElement("section",{className:ee.a["map-container"]},n.a.createElement(h,{map:a.currentMap,isMapCreated:a.isMapCreated})),n.a.createElement("section",{className:ee.a["stats-container"]},n.a.createElement("div",{className:ee.a["stats-block"]},n.a.createElement(W,{preys:a.preyData,predators:a.predatorData,labels:a.chartLabels})),n.a.createElement("div",{className:ee.a["stats-block"]},n.a.createElement(M,null)),n.a.createElement("div",{className:ee.a["stats-block"]},n.a.createElement($,null)))))},ae=a(24),re=a(17),ne=a(9),ce=a(11),le=a.n(ce),oe=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"empty",r=[],n=0;n<t;n++){for(var c=[],l=0;l<e;l++)c.push(a);r.push(c)}return r[le.a.random(e-1)][le.a.random(t-1)]="prey",r},se=function(e){return e.map((function(e){return Object(re.a)(e)}))},pe=function(e,t,a){var r=a.length,n=a[0].length,c=[];return t>0&&"empty"===a[e][t-1]&&c.push([e,t-1]),e+1<n&&"empty"===a[e+1][t]&&c.push([e+1,t]),t+1<r&&"empty"===a[e][t+1]&&c.push([e,t+1]),e>0&&"empty"===a[e-1][t]&&c.push([e-1,t]),4===c.length&&"empty"===a[e+1][t+1]&&"empty"===a[e+1][t-1]&&"empty"===a[e-1][t-1]&&"empty"===a[e-1][t+1]?[le.a.sample(c),[e,t]]:!!c.length&&[le.a.sample(c)]},ie=function(e,t,a){var r=a.length,n=a[0].length,c=[],l=[];return t>0&&"prey"===a[e][t-1]&&l.push([e,t-1]),e+1<n&&"prey"===a[e+1][t]&&l.push([e+1,t]),t+1<r&&"prey"===a[e][t+1]&&l.push([e,t+1]),e>0&&"prey"===a[e-1][t]&&l.push([e-1,t]),l.length?[le.a.sample(l),[e,t]]:(t>1&&"prey"===a[e][t-2]&&"empty"===a[e][t-1]&&c.push([e,t-1]),t>0&&e+1<n&&"prey"===a[e+1][t-1]&&("empty"===a[e][t-1]&&c.push([e,t-1]),"empty"===a[e+1][t]&&c.push([e+1,t])),e+2<n&&"prey"===a[e+2][t]&&"empty"===a[e+1][t]&&c.push([e+1,t]),e+1<n&&t+1<r&&"prey"===a[e+1][t+1]&&("empty"===a[e+1][t]&&c.push([e+1,t]),"empty"===a[e][t+1]&&c.push([e,t+1])),t+2<r&&"prey"===a[e][t+2]&&"empty"===a[e][t+1]&&c.push([e,t+1]),e>1&&t+1<r&&"prey"===a[e-1][t+1]&&("empty"===a[e][t+1]&&c.push([e,t+1]),"empty"===a[e-1][t]&&c.push([e-1,t])),e>1&&"prey"===a[e-2][t]&&"empty"===a[e-1][t]&&c.push([e-1,t]),e>1&&t>1&&"prey"===a[e-1][t-1]&&("empty"===a[e-1][t]&&c.push([e-1,t]),"empty"===a[e][t-1]&&c.push([e,t-1])),!!c.length&&[le.a.sample(c)])},ue={iteration:0,preysCount:0,predatorsCount:0,preyData:[1],predatorData:[0],chartLabels:["0"],size:{width:26,height:26},start:{x:13,y:13},speed:300,currentMap:[],nextMap:[],isMapCreated:!1,isMapEmpty:!0,isPreyOnly:!1},me=Object(ae.b)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAP_INIT":var a=oe(e.size.width,e.size.height);return Object(ne.a)(Object(ne.a)({},e),{},{currentMap:se(a),nextMap:a,isMapCreated:!0});case"MAP_RESTART":var r=oe(e.size.width,e.size.height);return Object(ne.a)(Object(ne.a)({},ue),{},{currentMap:se(r),nextMap:r,isMapCreated:!0,isPreyOnly:t.payload,speed:e.speed});case"MAP_ADD_PREDATOR":return e.nextMap[le.a.random(e.size.width-1)][le.a.random(e.size.height-1)]="predator",Object(ne.a)(Object(ne.a)({},e),{},{currentMap:se(e.nextMap),nextMap:e.nextMap,predatorsCount:e.predatorsCount+1,predatorData:[].concat(Object(re.a)(e.predatorData),[e.predatorsCount+1])});case"MAP_STEP":if(e.currentMap.forEach((function(t,a){t.forEach((function(t,r){if("prey"===e.currentMap[a][r]){var n=pe(a,r,e.nextMap);if(n)switch(n.length){case 2:n.forEach((function(t){e.nextMap[t[0]][t[1]]="prey"}));break;case 1:e.nextMap[n[0][0]][n[0][1]]="prey",e.nextMap[a][r]="empty"}else e.nextMap[a][r]="empty"}else if(!e.isPreyOnly&&"predator"===e.currentMap[a][r]){var c=ie(a,r,e.nextMap);if(c)switch(c.length){case 2:c.forEach((function(t){e.nextMap[t[0]][t[1]]="predator"}));break;case 1:e.nextMap[c[0][0]][c[0][1]]="predator",e.nextMap[a][r]="empty"}else e.nextMap[a][r]="empty"}}))})),e.isPreyOnly){var n=le.a.flattenDeep(e.nextMap),c=n.reduce((function(e,t){return"prey"===t?e+1:e}),0);return Object(ne.a)(Object(ne.a)({},e),{},{iteration:e.iteration+1,preysCount:c,preyData:[].concat(Object(re.a)(e.preyData),[c]),chartLabels:[].concat(Object(re.a)(e.chartLabels),["".concat(e.iteration+1)]),currentMap:se(e.nextMap),nextMap:e.nextMap})}var l=le.a.flattenDeep(e.nextMap),o=l.reduce((function(e,t){return"prey"===t?e+1:e}),0),s=l.reduce((function(e,t){return"predator"===t?e+1:e}),0);return Object(ne.a)(Object(ne.a)({},e),{},{iteration:e.iteration+1,preysCount:o,predatorsCount:s,preyData:[].concat(Object(re.a)(e.preyData),[o]),predatorData:[].concat(Object(re.a)(e.predatorData),[s]),chartLabels:[].concat(Object(re.a)(e.chartLabels),["".concat(e.iteration+1)]),currentMap:se(e.nextMap),nextMap:e.nextMap});case"MAP_CHANGE_SPEED":return Object(ne.a)(Object(ne.a)({},e),{},{speed:t.payload.speed});default:return e}}}),de=Object(ae.c)(me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(n.a.createElement(o.a,{store:de},n.a.createElement(te,null)),document.getElementById("root"))},20:function(e,t,a){e.exports={root:"App_root__2h8CC",main:"App_main__3ZkGI","map-container":"App_map-container__3kM1T","stats-container":"App_stats-container__2iv3E","stats-block":"App_stats-block__2uB8m"}},26:function(e,t,a){e.exports={root:"styles_root__-bKiG",circle:"styles_circle__2KwSW",food:"styles_food__anRMd",prey:"styles_prey__3CVNf",predator:"styles_predator__3po0d"}},49:function(e,t,a){e.exports={grid:"styles_grid__OML2l",grid__row:"styles_grid__row__lBAo9"}},50:function(e,t,a){e.exports={header:"styles_header__25lBf",title:"styles_title__2qn0m",switch:"styles_switch__3x_Db"}},87:function(e,t,a){e.exports=a(188)}},[[87,1,2]]]);
//# sourceMappingURL=main.500462c9.chunk.js.map