(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(3),o=t.n(i),c=t(4),u=t(2),l=t(1);function d(){var n=Object(u.a)(["\n  background-color: ",";\n  z-index: 1;\n"]);return d=function(){return n},n}function h(){var n=Object(u.a)(["\n    border: 3px solid ",";\n    background-color: transparent;\n    border-radius: 50%;\n    z-index: 2;\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  background-color: ",";\n  z-index: 2;\n"]);return b=function(){return n},n}function f(){var n=Object(u.a)(["\n    top: ","px;\n    left: ","px;\n    width: ","px;\n    height: ","px;\n    opacity: ",";\n    animation: "," ","s ease-in-out 0s 1\n    border-radius: ","px;\n\n    display: inline-block;\n    position: absolute;\n"]);return f=function(){return n},n}function m(){var n=Object(u.a)(["\n    position: absolute;\n    left: ","px;\n    bottom: ","px;\n    top: ","px;\n    width: ","px;\n    background-color: ",";\n    border: ","px solid ",";\n    border-radius: 50%;\n    transform: ",";\n    transition: all ","s ;\n    box-sizing: border-box;\n    overflow: hidden;\n    z-index: 2;\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n    opacity: 0;\n    width: 0;\n    height: 0;\n\n    &:focus ~ "," {\n        box-shadow: 0px 0px 5px 1px ",";\n    }\n"]);return p=function(){return n},n}function s(){var n=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 50%;\n    background-color: ",";\n    border: ","px solid ",";\n    border-radius: ","px;\n    transition: all ","s;\n    width: ","px;\n    height: ","px;\n"]);return s=function(){return n},n}function g(){var n=Object(u.a)(["\n    position: relative;\n    display: inline-block;\n    min-width: ","px;\n    min-height: ","px;\n\n    & * {\n        cursor: pointer;\n    }\n"]);return g=function(){return n},n}function x(){var n=Object(u.a)(["\n  0% {\n    transform: translate(0px, 0px);\n    opacity: 100;\n  }\n  100% {\n    transform: translate(20px, -20px);\n    opacity: 0;\n  }\n"]);return x=function(){return n},n}function E(){var n=Object(u.a)(["\n  0% {\n    transform: translate(20px, -20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0px, 0px);\n    opacity: 100;\n  }\n"]);return E=function(){return n},n}var y=Object(l.d)(E()),w=Object(l.d)(x()),v=l.c.label(g(),function(n){return n.width},function(n){return n.height}),j=l.c.span(s(),function(n){return n.day?n.theme.day.sky:n.theme.night.sky},function(n){return n.borderWidth},function(n){return n.day?n.theme.day.containerBorder:n.theme.night.containerBorder},function(n){return n.height/2+n.borderWidth},.5,function(n){return n.width},function(n){return n.height}),k=l.c.input(p(),j,function(n){return n.day?"rgb(150, 150, 150)":"white"}),O=l.c.span(m(),function(n){return n.planetPadding},function(n){return n.planetPadding},function(n){return n.planetPadding},function(n){return n.height-2*n.planetPadding},function(n){return n.day?n.theme.day.planet.surface:n.theme.night.planet.surface},function(n){return n.borderWidth},function(n){return n.day?n.theme.day.planet.border:n.theme.night.planet.border},function(n){return n.day?"none":"translateX(".concat(n.width-2*n.planetPadding-(n.height-2*n.planetPadding),"px)")},.5),P=l.c.span(f(),function(n){return n.top},function(n){return n.left},function(n){return n.width},function(n){return n.height},function(n){return n.visible?"100":"0"},function(n){return n.visible?y:w},.25,function(n){return n.height/2}),z=Object(l.c)(P)(b(),function(n){return n.theme.day.cloud}),S=function(n){return a.a.createElement(P,Object.assign({},n,{width:n.diameter,height:n.diameter}))},B=Object(l.c)(S)(h(),function(n){return n.theme.night.planet.border}),D=Object(l.c)(S)(d(),function(n){return n.theme.night.star}),C=function(n){var e=n.width,t=n.height,i=n.planetPadding,o=n.borderSize,u=n.onToggle,l=Object(r.useState)(!1),d=Object(c.a)(l,2),h=d[0],b=d[1],f=t-2*i;return a.a.createElement(v,{height:t+2*o,width:e+2*o},a.a.createElement(k,{type:"checkbox",onChange:function(n){u(n.target.checked),b(n.target.checked)},day:!h}),a.a.createElement(j,{day:!h,onClick:b,borderWidth:o,width:e,height:t},a.a.createElement(O,{day:!h,width:e,height:t,planetPadding:i,borderWidth:o},a.a.createElement(B,{visible:h,diameter:.11*f,top:.05*f,left:.05*f}),a.a.createElement(B,{visible:h,diameter:.09*f,top:.16*f,left:.32*f}),a.a.createElement(B,{visible:h,diameter:.11*f,top:.05*f,left:.05*f}),a.a.createElement(B,{visible:h,diameter:.11*f,top:.32*f,left:.05*f})),a.a.createElement(z,{top:.3*t,left:.25*e,visible:!h,width:.35*e,height:.15*t}),a.a.createElement(z,{top:.55*t,left:.4*e,visible:!h,width:.4*e,height:.15*t}),a.a.createElement(D,{top:.5*t,left:.375*e,visible:h,diameter:.08*t}),a.a.createElement(D,{top:.3*t,left:.16*e,visible:h,diameter:.04*t}),a.a.createElement(D,{top:.5*t,left:.2*e,visible:h,diameter:.04*t})))};function F(){var n=Object(u.a)(["\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n"]);return F=function(){return n},n}function W(){var n=Object(u.a)(["\n  background-color: ",";\n  transition: background-color 0.5s;\n  border-radius: 100px;\n  height: 130px;\n  width: 100%;\n  max-width: 400px;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return W=function(){return n},n}function R(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return R=function(){return n},n}function A(){var n=Object(u.a)(["\n  text-decoration: none;\n"]);return A=function(){return n},n}function G(){var n=Object(u.a)(["\n  margin-top: 4rem;\n  margin-bottom: 1rem;\n"]);return G=function(){return n},n}function J(){var n=Object(u.a)(["\n  margin-top: 4rem;  \n  font-size: 4rem;\n  line-height: 4.5rem;\n  margin-bottom: 1rem;\n"]);return J=function(){return n},n}function T(){var n=Object(u.a)(["\n  body { \n      margin: 1rem;\n      font-family: 'Roboto Slab', serif;\n      text-align: center;\n  }\n"]);return T=function(){return n},n}var H={day:{containerBorder:"#A0B7C4",sky:"#C5D5DE",cloud:"white",planet:{border:"#DBC85E",surface:"#F2DE8A"}},night:{containerBorder:"#1B1D1C",sky:"#39383d",star:"white",planet:{border:"#E1E3D5",surface:"#FFFFFD"}}},I={day:{containerBorder:"#36962a",sky:"#41b532",cloud:"#b017e8",planet:{border:"#931125",surface:"#ef1a45"}},night:{containerBorder:"#931125",sky:"#b017e8",star:"black",planet:{border:"#36962a",surface:"#41b532"}}},L=Object(l.b)(T()),M=l.c.h1(J()),V=l.c.h2(G()),X=l.c.a(A()),q=l.c.div(R()),K=l.c.div(W(),function(n){return n.toggled?"rgb(80,80,80)":"rgb(244,244,244)"}),N=l.c.p(F()),Q=function(n){var e=n.width,t=n.height,i=n.borderSize,o=n.planetPadding,u=Object(r.useState)(!1),l=Object(c.a)(u,2),d=l[0],h=l[1];return a.a.createElement(K,{toggled:d},a.a.createElement(C,{width:e,height:t,borderSize:i,planetPadding:o,onToggle:h}))},U=function(){return a.a.createElement(l.a,{theme:H},a.a.createElement(q,null,a.a.createElement(L,null),a.a.createElement(M,null," Sky toggle "),a.a.createElement(X,{href:"https://github.com/Wombbu/sky-toggle"}," Go check the project on GitHub "),a.a.createElement(V,null,"Vanilla toggle is vanilla"),a.a.createElement(Q,{width:80,height:45,borderSize:3,planetPadding:1}),a.a.createElement(V,null,"Sleek toggle is sleek"),a.a.createElement(Q,{width:80,height:45,borderSize:0,planetPadding:3}),a.a.createElement(V,null,"Round toggle is round"),a.a.createElement(Q,{width:80,height:80,borderSize:0,planetPadding:3}),a.a.createElement(V,null,"Long toggle is loooooong"),a.a.createElement(Q,{width:250,height:45,borderSize:3,planetPadding:2}),a.a.createElement(V,null,"Random toggle is random ",a.a.createElement("span",{role:"img","aria-label":"thinking face"},"\ud83e\udd14")),a.a.createElement(l.a,{theme:I},a.a.createElement(Q,{width:120,height:68,borderSize:4,planetPadding:8})),a.a.createElement(N,null,"Made with  ",a.a.createElement("span",{role:"img","aria-label":"nail polish"},"\ud83d\udc85"),a.a.createElement(X,{href:"https://www.styled-components.com/"},"styled-components"),", ",a.a.createElement(X,{href:"https://reactjs.org/docs/hooks-intro.html"},"React-hooks")," and \u2764\ufe0f ")))};o.a.render(a.a.createElement(U,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.e11f433d.chunk.js.map