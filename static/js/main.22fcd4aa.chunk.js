(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(3),o=t.n(a),c=t(4),u=t(1),l=t(2);function d(){var n=Object(u.a)(["\n  background-color: white;\n  z-index: 1;\n"]);return d=function(){return n},n}function b(){var n=Object(u.a)(["\n    border: 3px solid ",";\n    background-color: transparent;\n    border-radius: 50%;\n    z-index: 2;\n"]);return b=function(){return n},n}function h(){var n=Object(u.a)(["\n  background-color: white;\n  z-index: 2;\n"]);return h=function(){return n},n}function p(){var n=Object(u.a)(["\n    top: ","px;\n    left: ","px;\n    width: ","px;\n    height: ","px;\n    opacity: ",";\n    animation: "," ","s ease-in-out 0s 1\n    border-radius: ","px;\n\n    display: inline-block;\n    position: absolute;\n"]);return p=function(){return n},n}function f(){var n=Object(u.a)(["\n    position: absolute;\n    left: ","px;\n    bottom: ","px;\n    top: ","px;\n    width: ","px;\n    background-color: ",";\n    border: ","px solid ",";\n    border-radius: 50%;\n    transform: ",";\n    transition: all ","s ;\n    box-sizing: border-box;\n    overflow: hidden;\n    z-index: 2;\n"]);return f=function(){return n},n}function s(){var n=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 50%;\n    background-color: ",";\n    border: ","px solid ",";\n    border-radius: ","px;\n    transition: border ","s, background-color ","s;\n    width: ","px;\n    height: ","px;\n"]);return s=function(){return n},n}function g(){var n=Object(u.a)(["\n    opacity: 0;\n    width: 0;\n    height: 0;\n"]);return g=function(){return n},n}function m(){var n=Object(u.a)(["\n    position: relative;\n    display: inline-block;\n    min-width: ","px;\n    min-height: ","px;\n\n    & * {\n        cursor: pointer;\n    }\n"]);return m=function(){return n},n}function x(){var n=Object(u.a)(["\n  0% {\n    transform: translate(0px, 0px);\n    opacity: 100;\n  }\n  100% {\n    transform: translate(20px, -20px);\n    opacity: 0;\n  }\n"]);return x=function(){return n},n}function E(){var n=Object(u.a)(["\n  0% {\n    transform: translate(20px, -20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0px, 0px);\n    opacity: 100;\n  }\n"]);return E=function(){return n},n}var v={containerBorder:"#A0B7C4",sky:"#C5D5DE",planet:{border:"#DBC85E",surface:"#F2DE8A"}},w={containerBorder:"#1B1D1C",sky:"#39383d",planet:{border:"#E1E3D5",surface:"#FFFFFD"}},y=Object(l.b)(E()),j=Object(l.b)(x()),k=l.a.label(m(),function(n){return n.width},function(n){return n.height}),O=l.a.input(g()),P=l.a.span(s(),function(n){return n.day?v.sky:w.sky},function(n){return n.borderWidth},function(n){return n.day?v.containerBorder:w.containerBorder},function(n){return n.height/2+n.borderWidth},.5,.5,function(n){return n.width},function(n){return n.height}),z=l.a.span(f(),function(n){return n.planetPadding},function(n){return n.planetPadding},function(n){return n.planetPadding},function(n){return n.height-2*n.planetPadding},function(n){return n.day?v.planet.surface:w.planet.surface},function(n){return n.borderWidth},function(n){return n.day?v.planet.border:w.planet.border},function(n){return n.day?"none":"translateX(".concat(n.width-2*n.planetPadding-(n.height-2*n.planetPadding),"px)")},.5),S=l.a.span(p(),function(n){return n.top},function(n){return n.left},function(n){return n.width},function(n){return n.height},function(n){return n.visible?"100":"0"},function(n){return n.visible?y:j},.25,function(n){return n.height/2}),B=Object(l.a)(S)(h()),D=function(n){return i.a.createElement(S,Object.assign({},n,{width:n.diameter,height:n.diameter}))},C=Object(l.a)(D)(b(),w.planet.border),F=Object(l.a)(D)(d()),W=function(n){var e=n.width,t=n.height,a=n.planetPadding,o=n.borderSize,u=n.onToggle,l=Object(r.useState)(!1),d=Object(c.a)(l,2),b=d[0],h=d[1],p=t-2*a;return i.a.createElement(k,{height:t+2*o,width:e+2*o},i.a.createElement(O,{type:"checkbox",onChange:function(n){u(n.target.checked),h(n.target.checked)}}),i.a.createElement(P,{day:!b,onClick:h,borderWidth:o,width:e,height:t},i.a.createElement(z,{day:!b,width:e,height:t,planetPadding:a,borderWidth:o},i.a.createElement(C,{visible:b,diameter:.11*p,top:.05*p,left:.05*p}),i.a.createElement(C,{visible:b,diameter:.09*p,top:.16*p,left:.32*p}),i.a.createElement(C,{visible:b,diameter:.11*p,top:.05*p,left:.05*p}),i.a.createElement(C,{visible:b,diameter:.11*p,top:.32*p,left:.05*p})),i.a.createElement(B,{top:.3*t,left:.25*e,visible:!b,width:.35*e,height:.15*t}),i.a.createElement(B,{top:.55*t,left:.4*e,visible:!b,width:.4*e,height:.15*t}),i.a.createElement(F,{top:.5*t,left:.375*e,visible:b,diameter:.08*t}),i.a.createElement(F,{top:.3*t,left:.16*e,visible:b,diameter:.04*t}),i.a.createElement(F,{top:.5*t,left:.2*e,visible:b,diameter:.04*t})))};function A(){var n=Object(u.a)(["\n  background-color: ",";\n  transition: background-color 0.5s;\n  border-radius: 100px;\n  height: 130px;\n  width: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return A=function(){return n},n}function G(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 4rem;\n  margin-bottom: 7rem;\n\n  * {\n    font-family: 'Roboto Slab', serif;\n  }\n"]);return G=function(){return n},n}function J(){var n=Object(u.a)(["\n  margin-top: 7rem;\n"]);return J=function(){return n},n}function R(){var n=Object(u.a)(["\n  margin-bottom: 0.3rem;\n  font-size: 4rem;\n"]);return R=function(){return n},n}var T=l.a.h1(R()),H=l.a.h2(J()),I=l.a.div(G()),L=l.a.div(A(),function(n){return n.toggled?"rgb(30,30,30)":"rgb(244,244,244)"}),V=function(n){var e=n.width,t=n.height,a=n.borderSize,o=n.planetPadding,u=Object(r.useState)(!1),l=Object(c.a)(u,2),d=l[0],b=l[1];return i.a.createElement(L,{toggled:d},i.a.createElement(W,{width:e,height:t,borderSize:a,planetPadding:o,onToggle:b}))},X=function(){return i.a.createElement(I,null,i.a.createElement(T,null," Sky toggle "),i.a.createElement("a",{href:"https://github.com/Wombbu/sky-toggle"}," Go check the project on GitHub "),i.a.createElement(H,null," Vanilla toggle is vanilla "),i.a.createElement(V,{width:80,height:45,borderSize:3,planetPadding:1}),i.a.createElement(H,null," Sleek toggle is sleek "),i.a.createElement(V,{width:80,height:45,borderSize:0,planetPadding:3}),i.a.createElement(H,null," Round toggle is round "),i.a.createElement(V,{width:80,height:80,borderSize:0,planetPadding:3}),i.a.createElement(H,null," Long toggle is loooooong "),i.a.createElement(V,{width:300,height:45,borderSize:3,planetPadding:2}),i.a.createElement(H,null," Stupid toggle is stupid "),i.a.createElement(V,{width:60,height:45,borderSize:4,planetPadding:8}))};o.a.render(i.a.createElement(X,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.22fcd4aa.chunk.js.map