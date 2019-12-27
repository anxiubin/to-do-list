(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{15:function(n,e,t){n.exports=t(25)},25:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(9),c=t.n(a),i=t(1),u=t(2);function l(){var n=Object(i.a)(["\n    width: 512px;\n    height: 768px;\n\n    position: relative;\n    background: white;\n    border-radius: 16px;\n    box-shadow: 0 0 8px rgba(0,0,0,0.04);\n    margin: 0 auto;\n    margin-top: 96px;\n    margin-bottom: 32px;\n\n    display: flex;\n    flex-direction: column;\n"]);return l=function(){return n},n}var d=u.c.div(l());var f=function(n){var e=n.children;return o.a.createElement(d,null,e)},p=t(4),b=t(14),s=[{id:1,text:"\uc6b4\ub3d9\ud558\uae30",done:!0},{id:2,text:"\ub274\uc2a4 \uc77d\uae30",done:!0},{id:3,text:"\uc800\ub141 \uc57d\uc18d \uac00\uae30",done:!1},{id:4,text:"\ub9ac\uc561\ud2b8 \uacf5\ubd80\ud558\uae30",done:!1}];function m(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(b.a)({},n,{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled action type: ".concat(e.type))}}var x=Object(r.createContext)(null),v=Object(r.createContext)(null),g=Object(r.createContext)(null);function h(n){var e=n.children,t=Object(r.useReducer)(m,s),a=Object(p.a)(t,2),c=a[0],i=a[1],u=Object(r.useRef)(5);return o.a.createElement(x.Provider,{value:c},o.a.createElement(v.Provider,{value:i},o.a.createElement(g.Provider,{value:u},e)))}function E(){return Object(r.useContext)(x)}function O(){return Object(r.useContext)(v)}function j(){var n=Object(i.a)(["\n  h1 {\n    margin: 0;\n    font-size: 36px;\n    color: #343a40;\n  }\n  .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n  }\n  .tasks-left {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n  }\n  padding-top: 48px;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n"]);return j=function(){return n},n}var y=u.c.div(j());var w=function(){var n=new Date,e=n.toLocaleString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),t=n.toLocaleString("ko-KR",{weekday:"long"}),r=E().filter((function(n){return!n.done}));return o.a.createElement(y,null,o.a.createElement("h1",null,e),o.a.createElement("div",{className:"day"},t),o.a.createElement("div",{className:"tasks-left"},"\ud560 \uc77c ",r.length,"\uac1c \ub0a8\uc74c"))},k=t(3);function C(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(i.a)(["\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n"]);return z=function(){return n},n}function R(){var n=Object(i.a)(["\n      color: #ced4da;\n      text-decoration:line-through\n    "]);return R=function(){return n},n}function S(){var n=Object(i.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #495057;\n  ","\n"]);return S=function(){return n},n}function G(){var n=Object(i.a)(["\n      border: 1px solid #38d9a9;\n      color: #38d9a9;\n    "]);return G=function(){return n},n}function L(){var n=Object(i.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: 1px solid #ced4da;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"]);return L=function(){return n},n}var T=u.c.div(L(),(function(n){return n.done&&Object(u.b)(G())})),P=u.c.div(S(),(function(n){return n.done&&Object(u.b)(R())})),A=u.c.div(z()),B=u.c.div(C(),A);var D=o.a.memo((function(n){var e=n.id,t=n.done,r=n.text,a=O();return o.a.createElement(B,null,o.a.createElement(T,{onClick:function(){a({type:"TOGGLE",id:e})},done:t},t&&o.a.createElement(k.c,null)),o.a.createElement(P,{done:t},r),o.a.createElement(A,{onClick:function(){a({type:"REMOVE",id:e})}},o.a.createElement(k.b,null)))}));function F(){var n=Object(i.a)(["\n    flex: 1;\n    padding: 20px 32px;\n    padding-bottom: 48px;\n    overflow-y: auto;\n"]);return F=function(){return n},n}var J=u.c.div(F());var K=function(){var n=E();return o.a.createElement(J,null,n.map((function(n){return o.a.createElement(D,{id:n.id,text:n.text,done:n.done,key:n.id})})))};function M(){var n=Object(i.a)(["\n  padding: 12px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n"]);return M=function(){return n},n}function N(){var n=Object(i.a)(["\n  background: #f8f9fa;\n  padding-left: 32px;\n  padding-top: 32px;\n  padding-right: 32px;\n  padding-bottom: 72px;\n\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  border-top: 1px solid #e9ecef;\n"]);return N=function(){return n},n}function V(){var n=Object(i.a)(["\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n"]);return V=function(){return n},n}function W(){var n=Object(i.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        background: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "]);return W=function(){return n},n}function I(){var n=Object(i.a)(["\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  z-index: 5;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  font-size: 60px;\n\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n \n  transition: 0.125s all ease-in;\n  ","\n"]);return I=function(){return n},n}var U=u.c.button(I(),(function(n){return n.open&&Object(u.b)(W())})),$=u.c.div(V()),q=u.c.form(N()),H=u.c.input(M());var Q=o.a.memo((function(){var n=Object(r.useState)(!1),e=Object(p.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(""),i=Object(p.a)(c,2),u=i[0],l=i[1],d=O(),f=Object(r.useContext)(g);return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement($,null,o.a.createElement(q,{onSubmit:function(n){n.preventDefault(),d({type:"CREATE",todo:{id:f.current,text:u,done:!1}}),f.current+=1,a(!1),l("")}},o.a.createElement(H,{autoFocus:!0,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter \ub97c \ub204\ub974\uc138\uc694",onChange:function(n){return l(n.target.value)},value:u}))),o.a.createElement(U,{onClick:function(){return a(!t)},open:t},o.a.createElement(k.a,null)))}));function X(){var n=Object(i.a)(["\n  body {\n    background: #e9ecef;\n  }\n"]);return X=function(){return n},n}var Y=Object(u.a)(X());var Z=function(){return o.a.createElement(h,null,o.a.createElement(Y,null),o.a.createElement(f,null,o.a.createElement(w,null),o.a.createElement(K,null),o.a.createElement(Q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b0f24aed.chunk.js.map