(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(43),i=c.n(n),r=(c(86),c(17)),j=(c(87),c(122)),o=c(117),d=c(118),l=c(119),b=c(120),u=c(70),h=c.n(u),p=c(71),O=c.n(p),x=(c(88),c(23)),m=c(48),v=m.a.initializeApp({apiKey:"AIzaSyAQbdGV2AeBqA5iRT-aHl2JHm7CU3RXE8Q",authDomain:"whatsapp-clone-d192b.firebaseapp.com",projectId:"whatsapp-clone-d192b",storageBucket:"whatsapp-clone-d192b.appspot.com",messagingSenderId:"103510571920",appId:"1:103510571920:web:01a0aa4b5337c1e32fd115",measurementId:"G-GKCJJ03FWT"}).firestore(),A=m.a.auth(),f=new m.a.auth.GoogleAuthProvider,g=v,C=c(13),R=Object(a.createContext)(),N=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(C.jsx)(R.Provider,{value:Object(a.useReducer)(t,c),children:s})},S=function(){return Object(a.useContext)(R)};var I=function(){var e,t,c=Object(a.useState)(""),s=Object(r.a)(c,2),n=s[0],i=s[1],u=Object(a.useState)(""),p=Object(r.a)(u,2),v=p[0],A=p[1],f=Object(x.f)().roomId,R=Object(a.useState)(""),N=Object(r.a)(R,2),I=N[0],J=N[1],y=Object(a.useState)([]),k=Object(r.a)(y,2),E=k[0],w=k[1],B=S(),V=Object(r.a)(B,2),F=V[0].user;return V[1],console.log(f),Object(a.useEffect)((function(){f&&(g.collection("users").doc(f).onSnapshot((function(e){return J(e.data().name)})),g.collection("users").doc(f).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return w(e.docs.map((function(e){return e.data()})))})))}),[f]),Object(a.useEffect)((function(){A(Math.floor(5e3*Math.random()))}),[]),Object(C.jsxs)("div",{className:"chat",children:[Object(C.jsxs)("div",{className:"chat_header",children:[Object(C.jsx)(j.a,{src:"https://avatars.dicebear.com/api/human/".concat(v,".svg")}),Object(C.jsxs)("div",{className:"chat_headerInfo",children:[Object(C.jsx)("h3",{children:I}),Object(C.jsxs)("p",{children:["last seen"," ",new Date(null===(e=E[E.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(C.jsxs)("div",{className:"chat_headerRight",children:[Object(C.jsx)(o.a,{children:Object(C.jsx)(d.a,{})}),Object(C.jsx)(o.a,{children:Object(C.jsx)(l.a,{})}),Object(C.jsx)(o.a,{children:Object(C.jsx)(b.a,{})})]})]}),Object(C.jsx)("div",{className:"chat_body",children:E.map((function(e){var t;return Object(C.jsxs)("p",{className:"chat_message ".concat(e.name===F.displayName&&"chat_receiver"),children:[Object(C.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(C.jsx)("span",{className:"chat_timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(C.jsxs)("div",{className:"chat_footer",children:[Object(C.jsx)(h.a,{}),Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),console.log(n),g.collection("users").doc(f).collection("messages").add({message:n,name:F.displayName,timestamp:m.a.firestore.FieldValue.serverTimestamp()}),i("")},type:"submit",children:" Send a message"})]}),Object(C.jsx)(O.a,{})]})]})},J=c(72),y=c.n(J),k=c(73),E=c.n(k),w=c(74),B=c.n(w),V=(c(100),c(53));c(101);var F=function(e){var t,c=e.id,s=e.name,n=e.addNewChat,i=Object(a.useState)(""),o=Object(r.a)(i,2),d=o[0],l=o[1],b=Object(a.useState)(""),u=Object(r.a)(b,2),h=u[0],p=u[1];return Object(a.useEffect)((function(){c&&g.collection("users").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return p(e.docs.map((function(e){return e.data()})))}))}),[]),Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),n?Object(C.jsx)("div",{onClick:function(){var e=prompt("Please enter name for chat");e&&g.collection("users").add({name:e})},className:"sidebarChat",children:Object(C.jsx)("h2",{children:"Add new Chat"})}):Object(C.jsx)(V.b,{to:"/users/".concat(c),children:Object(C.jsxs)("div",{className:"sidebarChat",children:[Object(C.jsx)(j.a,{src:"https://avatars.dicebear.com/api/human/".concat(d,".svg")}),Object(C.jsxs)("div",{className:"sidebarChat_info",children:[Object(C.jsx)("h2",{children:s}),Object(C.jsx)("p",{children:null===(t=h[0])||void 0===t?void 0:t.message})]})]})})};var P=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=S(),i=Object(r.a)(n,2),l=i[0].user;return i[1],Object(a.useEffect)((function(){var e=g.collection("users").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(C.jsxs)("div",{className:"sidebar",children:[Object(C.jsxs)("div",{className:"sidebar_header",children:[Object(C.jsx)(j.a,{src:null===l||void 0===l?void 0:l.photoURL}),Object(C.jsxs)("div",{className:"sidebar_headerRight",children:[Object(C.jsx)(o.a,{children:Object(C.jsx)(y.a,{})}),Object(C.jsx)(o.a,{children:Object(C.jsx)(E.a,{})}),Object(C.jsx)(o.a,{children:Object(C.jsx)(B.a,{})})]})]}),Object(C.jsx)("div",{className:"sidebar_search",children:Object(C.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(C.jsx)(d.a,{}),Object(C.jsx)("input",{placeholder:"Search person",type:"text"})]})}),Object(C.jsxs)("div",{className:"sidebar_chats",children:[Object(C.jsx)(F,{addNewChat:!0}),c.map((function(e){return Object(C.jsx)(F,{id:e.id,name:e.data.name},e.id)}))]})]})},Y=c(75),U=c(121),M=(c(102),c(66)),H="SET_USER",D=function(e,t){switch(console.log(t),t.type){case H:return Object(M.a)(Object(M.a)({},e),{},{user:t.user});default:return e}};var X=function(){var e=S(),t=Object(r.a)(e,2);Object(Y.a)(t[0]);var c=t[1];return Object(C.jsx)("div",{className:"login",children:Object(C.jsxs)("div",{className:"login_container",children:[Object(C.jsx)("img",{src:"data:image/png;base64,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",alt:"Whatsapp"}),Object(C.jsx)("h1",{children:"Welcome to Whatsapp clone"}),Object(C.jsx)(U.a,{onClick:function(){A.signInWithPopup(f).then((function(e){c({type:H,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in With Google"})]})})};var G=function(){var e=S(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(C.jsx)("div",{className:"app",children:c?Object(C.jsx)("div",{className:"app_body",children:Object(C.jsxs)(V.a,{children:[Object(C.jsx)(P,{}),Object(C.jsxs)(x.c,{children:[Object(C.jsx)(x.a,{path:"/users/:roomId",children:Object(C.jsx)(I,{})}),Object(C.jsx)(x.a,{path:"/",children:Object(C.jsx)(I,{})})]})]})}):Object(C.jsx)(X,{})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,123)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(N,{initialState:{user:null},reducer:D,children:Object(C.jsx)(G,{})})}),document.getElementById("root")),W()},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.794fc803.chunk.js.map