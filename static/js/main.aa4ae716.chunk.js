(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(3),o=t.n(i),c=t(4),l=t(1),u=t(2);function d(){var n=Object(l.a)(["\n  background-color: white;\n  z-index: 1;\n"]);return d=function(){return n},n}function h(){var n=Object(l.a)(["\n    border: 3px solid ",";\n    background-color: transparent;\n    border-radius: 50%;\n    z-index: 2;\n"]);return h=function(){return n},n}function p(){var n=Object(l.a)(["\n  background-color: white;\n  z-index: 2;\n"]);return p=function(){return n},n}function s(){var n=Object(l.a)(["\n    top: ","px;\n    left: ","px;\n    width: ","px;\n    height: ","px;\n    opacity: ",";\n    animation: "," ","s ease-in-out 0s 1\n    border-radius: ","px;\n\n    display: inline-block;\n    position: absolute;\n"]);return s=function(){return n},n}function b(){var n=Object(l.a)(["\n    position: absolute;\n    left: ","px;\n    bottom: ","px;\n    top: ","px;\n    width: ","px;\n    background-color: ",";\n    border: ","px solid ",";\n    border-radius: 50%;\n    transform: ",";\n    transition: all ","s ;\n    box-sizing: border-box;\n    overflow: hidden;\n    z-index: 2;\n"]);return b=function(){return n},n}function f(){var n=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 50%;\n    background-color: ",";\n    border: ","px solid ",";\n    border-radius: ","px;\n    transition: border ","s, background-color ","s;\n    width: ","px;\n    height: ","px;\n"]);return f=function(){return n},n}function g(){var n=Object(l.a)(["\n    opacity: 0;\n    width: 0;\n    height: 0;\n"]);return g=function(){return n},n}function m(){var n=Object(l.a)(["\n    position: relative;\n    display: inline-block;\n    min-width: ","px;\n    min-height: ","px;\n\n    & * {\n        cursor: pointer;\n    }\n"]);return m=function(){return n},n}function E(){var n=Object(l.a)(["\n  0% {\n    transform: translate(0px, 0px);\n    opacity: 100;\n  }\n  100% {\n    transform: translate(20px, -20px);\n    opacity: 0;\n  }\n"]);return E=function(){return n},n}function x(){var n=Object(l.a)(["\n  0% {\n    transform: translate(20px, -20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0px, 0px);\n    opacity: 100;\n  }\n"]);return x=function(){return n},n}var w={containerBorder:"#A0B7C4",sky:"#C5D5DE",planet:{border:"#DBC85E",surface:"#F2DE8A"}},v={containerBorder:"#1B1D1C",sky:"#39383d",planet:{border:"#E1E3D5",surface:"#FFFFFD"}},y=Object(u.b)(x()),j=Object(u.b)(E()),k=u.a.label(m(),function(n){return n.width},function(n){return n.height}),O=u.a.input(g()),P=u.a.span(f(),function(n){return n.day?w.sky:v.sky},function(n){return n.borderWidth},function(n){return n.day?w.containerBorder:v.containerBorder},function(n){return n.height/2+n.borderWidth},.5,.5,function(n){return n.width},function(n){return n.height}),z=u.a.span(b(),function(n){return n.planetPadding},function(n){return n.planetPadding},function(n){return n.planetPadding},function(n){return n.height-2*n.planetPadding},function(n){return n.day?w.planet.surface:v.planet.surface},function(n){return n.borderWidth},function(n){return n.day?w.planet.border:v.planet.border},function(n){return n.day?"none":"translateX(".concat(n.width-2*n.planetPadding-(n.height-2*n.planetPadding),"px)")},.5),S=u.a.span(s(),function(n){return n.top},function(n){return n.left},function(n){return n.width},function(n){return n.height},function(n){return n.visible?"100":"0"},function(n){return n.visible?y:j},.25,function(n){return n.height/2}),B=Object(u.a)(S)(p()),D=function(n){return a.a.createElement(S,Object.assign({},n,{width:n.diameter,height:n.diameter}))},C=Object(u.a)(D)(h(),v.planet.border),F=Object(u.a)(D)(d()),W=function(n){var e=n.width,t=n.height,i=n.planetPadding,o=n.borderSize,l=n.onToggle,u=Object(r.useState)(!1),d=Object(c.a)(u,2),h=d[0],p=d[1],s=t-2*i;return a.a.createElement(k,{height:t+2*o,width:e+2*o},a.a.createElement(O,{type:"checkbox",onChange:function(n){l(n.target.checked),p(n.target.checked)}}),a.a.createElement(P,{day:!h,onClick:p,borderWidth:o,width:e,height:t},a.a.createElement(z,{day:!h,width:e,height:t,planetPadding:i,borderWidth:o},a.a.createElement(C,{visible:h,diameter:.11*s,top:.05*s,left:.05*s}),a.a.createElement(C,{visible:h,diameter:.09*s,top:.16*s,left:.32*s}),a.a.createElement(C,{visible:h,diameter:.11*s,top:.05*s,left:.05*s}),a.a.createElement(C,{visible:h,diameter:.11*s,top:.32*s,left:.05*s})),a.a.createElement(B,{top:.3*t,left:.25*e,visible:!h,width:.35*e,height:.15*t}),a.a.createElement(B,{top:.55*t,left:.4*e,visible:!h,width:.4*e,height:.15*t}),a.a.createElement(F,{top:.5*t,left:.375*e,visible:h,diameter:.08*t}),a.a.createElement(F,{top:.3*t,left:.16*e,visible:h,diameter:.04*t}),a.a.createElement(F,{top:.5*t,left:.2*e,visible:h,diameter:.04*t})))};function R(){var n=Object(l.a)(["\n  background-color: ",";\n  transition: background-color 0.5s;\n  border-radius: 100px;\n  height: 130px;\n  width: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return R=function(){return n},n}function T(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 4rem;\n  margin-bottom: 7rem;\n\n  * {\n    font-family: 'Roboto Slab', serif;\n  }\n"]);return T=function(){return n},n}function A(){var n=Object(l.a)(["\n  margin-top: 7rem;\n"]);return A=function(){return n},n}function G(){var n=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 0.3rem;\n  font-size: 4rem;\n"]);return G=function(){return n},n}var J=u.a.h1(G()),H=u.a.h2(A()),I=u.a.div(T()),L=u.a.div(R(),function(n){return n.toggled?"rgb(80,80,80)":"rgb(244,244,244)"}),M=function(n){var e=n.width,t=n.height,i=n.borderSize,o=n.planetPadding,l=Object(r.useState)(!1),u=Object(c.a)(l,2),d=u[0],h=u[1];return a.a.createElement(L,{toggled:d},a.a.createElement(W,{width:e,height:t,borderSize:i,planetPadding:o,onToggle:h}))},V=function(){return a.a.createElement(I,null,a.a.createElement(J,null," Sky toggle "),a.a.createElement("a",{href:"https://github.com/Wombbu/sky-toggle"}," Go check the project on GitHub "),a.a.createElement(H,null," Vanilla toggle is vanilla "),a.a.createElement(M,{width:80,height:45,borderSize:3,planetPadding:1}),a.a.createElement(H,null," Sleek toggle is sleek "),a.a.createElement(M,{width:80,height:45,borderSize:0,planetPadding:3}),a.a.createElement(H,null," Round toggle is round "),a.a.createElement(M,{width:80,height:80,borderSize:0,planetPadding:3}),a.a.createElement(H,null," Long toggle is loooooong "),a.a.createElement(M,{width:300,height:45,borderSize:3,planetPadding:2}),a.a.createElement(H,null," Stupid toggle is stupid "),a.a.createElement(M,{width:60,height:45,borderSize:4,planetPadding:8}),a.a.createElement("p",{style:{marginTop:"3.5rem"}},"Made with ",a.a.createElement("span",{role:"img","aria-label":"nail polish"},"\ud83d\udc85")," ",a.a.createElement("a",{href:"https://www.styled-components.com/"},"styled-components"),", ",a.a.createElement("span",{role:"img","aria-label":"fishing rod"},"\ud83c\udfa3")," ",a.a.createElement("a",{href:"https://reactjs.org/docs/hooks-intro.html"},"React-hooks")," and \u2764\ufe0f "))};o.a.render(a.a.createElement(V,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.aa4ae716.chunk.js.map