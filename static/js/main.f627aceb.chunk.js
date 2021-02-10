(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__xTxvv",inputFilter:"Filter_inputFilter__ZYrSB"}},17:function(t,e,n){t.exports={listItems:"ContactList_listItems__2JybJ",item:"ContactList_item__2yAMS"}},35:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(3),s=n(10),u=n(4),b=n(21),j=n.n(b),d=n(5),m=n(22),p=n.n(m),h=n(11),O=n(2),f=n(40),x={addContact:Object(u.b)("contacts/add",(function(t,e){return{payload:{name:t,number:e,id:Object(f.a)()}}})),deleteContact:Object(u.b)("contacts/delete"),changeFilter:Object(u.b)("contacts/change")},_=Object(u.c)([],(c={},Object(h.a)(c,x.addContact,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(h.a)(c,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),v=Object(u.c)("",Object(h.a)({},x.changeFilter,(function(t,e){return e.payload}))),C=Object(O.c)({items:_,filter:v}),F=[].concat(Object(s.a)(Object(u.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),[j.a]),g={key:"root",storage:p.a,blacklist:["filter"]},N=Object(u.a)({reducer:{contacts:Object(d.g)(g,C)},middleware:F,devTools:!1}),y=Object(d.h)(N),w=n(23),k=(n(35),n(18)),P=n(6),A=n.n(P),S=function(t){return t.contacts.items},L=function(t){return t.contacts.filter},E=function(t){var e=S(t),n=L(t);return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},I=n(1);function J(){var t=Object(a.useState)(""),e=Object(k.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(k.a)(r,2),i=o[0],s=o[1],u=Object(l.b)(),b=Object(l.c)(S),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"phone":s(a);break;default:return}},d=function(){c(""),s("")};return Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{className:A.a.title,children:"Phonebook"}),Object(I.jsxs)("form",{className:A.a.contactForm,onSubmit:function(t){return t.preventDefault(),0===n.length?(alert("Some filed is empty"),!1):b.find((function(t){return t.name===n}))?(alert("".concat(n," is already in contacts.")),void d()):u(x.addContact(n,i),d())},children:[Object(I.jsx)("label",{htmlFor:"new-name",children:"Name"}),Object(I.jsx)("input",{type:"text",name:"name",id:"new-name",placeholder:"Enter name",className:A.a.inputName,onChange:j,value:n}),Object(I.jsx)("label",{htmlFor:"new-phone",children:"Number"}),Object(I.jsx)("input",{type:"tel",name:"phone",id:"new-phone",placeholder:"Enter phone number",className:A.a.inputPhone,onChange:j,value:i,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",required:!0}),Object(I.jsx)("span",{className:A.a.inputPhonePrompt,children:"Format phone number 000-00-00"}),Object(I.jsx)("button",{className:A.a.btnAdd,type:"submit",children:"Add contact"})]}),Object(I.jsx)("h2",{className:A.a.title,children:"Contacts"})]})}var B=n(16),D=n.n(B);function T(){var t=Object(l.c)(L),e=Object(l.b)();return Object(I.jsxs)("div",{className:D.a.filterWrapper,children:[Object(I.jsx)("label",{htmlFor:"contact-filter",children:"Find contacts by name"}),Object(I.jsx)("input",{type:"text",name:"filter",id:"contact-filter",placeholder:"Enter name for search",className:D.a.inputFilter,onChange:function(t){var n=t.target;return e(x.changeFilter(n.value))},value:t})]})}n(37);var W=n(17),M=n.n(W);function R(){var t=Object(l.c)(E),e=Object(l.b)();return Object(I.jsx)("ul",{className:M.a.listItems,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(I.jsxs)("li",{className:M.a.item,children:["\ud83d\ude42 ",c,": ",a,Object(I.jsx)("button",{onClick:function(){return function(t){return e(x.deleteContact(t))}(n)},children:"Delete"})]},n)}))})}function Y(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(J,{}),Object(I.jsx)(T,{}),Object(I.jsx)(R,{})]})}i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(w.a,{loading:null,persistor:y,children:Object(I.jsx)(l.a,{store:N,children:Object(I.jsx)(Y,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={title:"ContactForm_title__2cOlr",contactForm:"ContactForm_contactForm__2uABO",inputName:"ContactForm_inputName__2u6LN",inputPhone:"ContactForm_inputPhone__1DRYp",inputPhonePrompt:"ContactForm_inputPhonePrompt__2HRyt",btnAdd:"ContactForm_btnAdd__3u4LT"}}},[[38,1,2]]]);
//# sourceMappingURL=main.f627aceb.chunk.js.map