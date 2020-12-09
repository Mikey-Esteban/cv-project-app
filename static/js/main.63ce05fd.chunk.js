(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(1),c=i.n(a),s=i(8),l=i.n(s),r=(i(14),i(15),function(){return Object(n.jsx)("div",{className:"max-w-xl mx-auto flex p-6 bg-gray-100 mt-6 mb-6 rounded-lg shadow-xl",children:Object(n.jsxs)("div",{className:"ml-6 pt-1",children:[Object(n.jsx)("h1",{className:"text-2xl text-indigo-400 leading-tight",children:"Simple Entry Level Programmer Template"}),Object(n.jsxs)("p",{className:"text-base text-gray-500 leading-normal",children:["check out the code on ",Object(n.jsx)("a",{href:"https://github.com/Mikey-Esteban/cv-project-app",className:"text-black text-purple-500",children:"github"})]})]})})}),o=i(2),d=function(e){return Object(n.jsx)("div",{className:"text-center",children:Object(n.jsxs)("form",{onSubmit:e.handleSubmission,children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border text-center",type:"text",name:"name",id:"name",placeholder:e.name})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border text-center",type:"text",name:"location",id:"location",placeholder:e.location})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border text-center",type:"text",name:"phone",id:"phone",placeholder:e.phone})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{className:"border text-center",type:"text",name:"email",id:"email",placeholder:e.email})," |",Object(n.jsx)("input",{className:"border text-center ml-1",type:"text",name:"linkedin",id:"linkedin",placeholder:e.linkedin})]}),Object(n.jsx)("button",{className:"btn btn-purple mt-1",type:"submit",children:"Submit"})]})})},j=function(){var e=Object(a.useState)("John Doe"),t=Object(o.a)(e,2),i=t[0],c=t[1],s=Object(a.useState)("Sometown, NH 03824"),l=Object(o.a)(s,2),r=l[0],j=l[1],b=Object(a.useState)("(555) 555-5555"),m=Object(o.a)(b,2),u=m[0],p=m[1],O=Object(a.useState)("jd@somedomain.com"),x=Object(o.a)(O,2),h=x[0],g=x[1],v=Object(a.useState)("LinkedIn url"),f=Object(o.a)(v,2),N=f[0],y=f[1],S=Object(a.useState)(!1),w=Object(o.a)(S,2),T=w[0],C=w[1];return T?Object(n.jsx)(d,{name:i,location:r,phone:u,email:h,linkedin:N,handleSubmission:function(e){var t=document.getElementById("name").value,i=document.getElementById("location").value,n=document.getElementById("phone").value,a=document.getElementById("email").value,s=document.getElementById("linkedin").value;t&&c(t),i&&j(i),n&&p(n),a&&g(a),s&&y(s),C(!1)}}):Object(n.jsxs)("div",{className:"text-center mb-2",children:[Object(n.jsx)("h1",{className:"title",children:i}),Object(n.jsx)("p",{children:r}),Object(n.jsx)("p",{children:u}),Object(n.jsxs)("p",{children:[h," | ",N]}),Object(n.jsx)("button",{className:"btn btn-purple",onClick:function(){C(!0)},children:"Edit"})]})},b=i(3),m=function(e){var t=Object(a.useState)(!1),i=Object(o.a)(t,2),c=i[0],s=i[1];return Object(n.jsx)("div",{className:"text-center",children:Object(n.jsxs)("form",{onSubmit:e.handleSubmission,children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border w-1/2",type:"hidden",name:"cancel",id:"cancel",value:c})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border text-center w-2/3",type:"text",name:"title",id:"title",placeholder:e.title||"bolded part of bullet"})}),Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{className:"border text-center w-2/3",rows:"3",type:"text",name:"description",id:"description",placeholder:e.description||"normal text"})}),Object(n.jsxs)("div",{className:"flex flex-row justify-center",children:[Object(n.jsx)("div",{className:"flex-initial",children:Object(n.jsx)("button",{className:"btn btn-purple mt-1",type:"submit",children:"Submit"})}),Object(n.jsx)("div",{className:"flex-initial ml-3",children:Object(n.jsx)("button",{className:"btn btn-gray mt-1",onClick:function(e){s(!0)},children:"Cancel"})})]})]})})},u=function(e){var t=Object(a.useState)(e.title),i=Object(o.a)(t,2),c=i[0],s=i[1],l=Object(a.useState)(e.description),r=Object(o.a)(l,2),d=r[0],j=r[1],b=Object(a.useState)(!1),u=Object(o.a)(b,2),p=u[0],O=u[1];return p?Object(n.jsx)(m,{title:c,description:d,handleSubmission:function(e){var t=document.getElementById("title").value,i=document.getElementById("description").value;t&&s(t),i&&j(i),O(!1)}}):Object(n.jsxs)("li",{id:e.id,children:[Object(n.jsxs)("span",{className:"font-semibold text-gray-500",children:[c," "]}),Object(n.jsxs)("span",{className:"text-gray-500",children:[d,Object(n.jsx)("button",{className:"btn-level ml-1",onClick:function(){O(!0)},children:Object(n.jsx)("i",{className:"fas fa-edit"})}),Object(n.jsx)("button",{className:"btn-level",onClick:function(e){("I"===e.target.tagName?e.target.parentNode.parentNode.parentNode:e.target.parentNode.parentNode).remove()},children:Object(n.jsx)("i",{className:"far fa-trash-alt"})})]})]})},p=i(17),O=function(e){var t=Object(a.useState)(e.listData),i=Object(o.a)(t,2),c=i[0],s=i[1],l=Object(a.useState)(!1),r=Object(o.a)(l,2),d=r[0],j=r[1];return Object(n.jsxs)("div",{className:"container px-6 mx-auto max-w-screen-lg mb-6",children:[Object(n.jsx)("h2",{className:"header-title mb-4",children:e.title}),e.headerTitle&&Object(n.jsx)("h1",{className:"text-center title",children:e.headerTitle}),Object(n.jsx)("ul",{className:"list-disc list-inside pl-6",children:c.map((function(e){return Object(n.jsx)(u,{id:e.id,title:e.title,description:e.details},e.id)}))}),Object(n.jsxs)("button",{className:"ml-6",onClick:function(){j(!0)},children:[Object(n.jsx)("i",{className:"fas fa-plus text-purple-300"}),Object(n.jsx)("span",{className:"ml-4 text-purple-300 text-sm",children:"Add to list"})]}),d&&Object(n.jsx)(m,{handleSubmission:function(e){if(e.preventDefault(),j(!1),"true"!==e.target.querySelector("#cancel").value){var t={id:Object(p.a)(),title:e.target.querySelector("#title").value,details:e.target.querySelector("#description").value},i=Object(b.a)(c);i.push(t),s(i)}}})]})},x=function(e){var t=Object(a.useState)(!1),i=Object(o.a)(t,2),c=i[0],s=i[1];return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:e.handleSubmission,children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border w-1/2",type:"hidden",name:"cancel",id:"cancel",value:c})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border w-1/2",type:"text",name:"titleOne",id:"titleOne",placeholder:e.titleOne||" Work location or University "})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border w-1/2",type:"text",name:"descriptionOne",id:"descriptionOne",placeholder:e.descriptionOne||" location details"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border w-1/2",type:"text",name:"titleTwo",id:"titleTwo",placeholder:e.titleTwo||" Role or Major"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border w-1/2",type:"text",name:"descriptionTwo",id:"descriptionTwo",placeholder:e.descriptionTwo||" role or major details"})}),Object(n.jsxs)("div",{className:"flex flex-row justify-center w-1/2",children:[Object(n.jsx)("div",{className:"flex-initial",children:Object(n.jsx)("button",{className:"btn btn-purple mt-1",type:"submit",children:"Submit"})}),Object(n.jsx)("div",{className:"flex-initial ml-3",children:Object(n.jsx)("button",{className:"btn btn-gray mt-1",onClick:function(e){s(!0)},children:"Cancel"})})]})]})})},h=function(e){var t=e.id,i=Object(a.useState)(e.titleOne),c=Object(o.a)(i,2),s=c[0],l=c[1],r=Object(a.useState)(e.titleTwo),d=Object(o.a)(r,2),j=d[0],b=d[1],m=Object(a.useState)(e.descriptionOne),u=Object(o.a)(m,2),p=u[0],O=u[1],h=Object(a.useState)(e.descriptionTwo),g=Object(o.a)(h,2),v=g[0],f=g[1],N=Object(a.useState)(!1),y=Object(o.a)(N,2),S=y[0],w=y[1];return S?Object(n.jsx)(x,{titleOne:s,descriptionOne:p,titleTwo:j,descriptionTwo:v,handleSubmission:function(e){var t=document.getElementById("titleOne").value,i=document.getElementById("descriptionOne").value,n=document.getElementById("titleTwo").value,a=document.getElementById("descriptionTwo").value;t&&l(t),n&&b(n),i&&O(i),a&&f(a),w(!1)}}):Object(n.jsxs)("div",{id:t,children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{className:"font-medium text-gray-500",children:[s," "]}),Object(n.jsx)("span",{className:"text-gray-500",children:p})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{className:"font-medium text-gray-500",children:[j," "]}),Object(n.jsxs)("span",{className:"text-gray-500",children:[v,Object(n.jsx)("button",{className:"btn-level ml-1",onClick:function(){w(!0)},children:Object(n.jsx)("i",{className:"fas fa-edit"})}),Object(n.jsx)("button",{className:"btn-level",onClick:function(e){("I"===e.target.tagName?e.target.parentNode.parentNode.parentNode.parentNode.parentNode:e.target.parentNode.parentNode.parentNode.parentNode).remove()},children:Object(n.jsx)("i",{className:"far fa-trash-alt"})})]})]})]})},g=function(e){var t=Object(a.useState)(e.listData),i=Object(o.a)(t,2),c=i[0],s=i[1],l=Object(a.useState)(!1),r=Object(o.a)(l,2),d=r[0],j=r[1],O=function(e){var t=Object(b.a)(c),i=e.target.parentNode.parentNode;t.filter((function(e){return e.id===i.id}))[0].viewListForm=!0,s(t)},g=function(e){e.preventDefault();var t=Object(b.a)(c),i=e.target.parentNode.parentNode,n=t.filter((function(e){return e.id===i.id}))[0];if(n.viewListForm=!1,"false"===e.target.querySelector("#cancel").value){var a={id:Object(p.a)(),title:e.target.querySelector("#title").value,details:e.target.querySelector("#description").value};n.list.push(a)}s(t)},v=e.id,f=e.title;return Object(n.jsxs)("div",{className:"container px-6 mx-auto max-w-screen-lg mb-6",id:v,children:[Object(n.jsx)("h2",{className:"header-title mb-4",children:f}),c&&c.map((function(e){return Object(n.jsxs)("div",{id:e.id,children:[Object(n.jsx)(h,{id:e.id,titleOne:e.titleOne,descriptionOne:e.descriptionOne,titleTwo:e.titleTwo,descriptionTwo:e.descriptionTwo}),Object(n.jsx)("ul",{className:"list-disc list-inside pl-6",children:e.list&&e.list.map((function(e){return Object(n.jsx)(u,{id:e.id,title:e.title,description:e.details},e.id)}))}),Object(n.jsxs)("button",{className:"ml-6",onClick:O,children:[Object(n.jsx)("i",{className:"fas fa-plus text-purple-300"}),Object(n.jsx)("span",{className:"ml-4 text-purple-300 text-sm",children:"Add to list"})]}),e.viewListForm&&Object(n.jsx)(m,{handleSubmission:g})]},e.id)})),Object(n.jsxs)("button",{className:"mt-3",onClick:function(){j(!0)},children:[Object(n.jsx)("i",{className:"fas fa-plus text-purple-300"}),Object(n.jsxs)("span",{className:"ml-4 text-purple-300",children:["Add ",f]})]}),d&&Object(n.jsx)(x,{handleSubmission:function(e){if(e.preventDefault(),j(!1),"true"!==e.target.querySelector("#cancel").value){var t={id:Object(p.a)(),titleOne:e.target.querySelector("#titleOne").value,descriptionOne:e.target.querySelector("#descriptionOne").value,titleTwo:e.target.querySelector("#titleTwo").value,descriptionTwo:e.target.querySelector("#descriptionTwo").value,list:[],viewListForm:!1},i=Object(b.a)(c);i.push(t),s(i)}}})]})},v=[{id:Object(p.a)(),title:"Honors student of ABC University\u2019s BS in IT program.",details:"Academic credentials are reinforced by programming experience gained during internship with ABC Company."},{id:Object(p.a)(),title:"Consistently commended by professors and internship supervisor",details:"for programming abilities, grasp of multiple technologies and attention to detail."},{id:Object(p.a)(),title:"Strong knowledge of object-oriented programing",details:"and application development tools using Microsoft VB.Net, C#, .Net, C++, ASP.Net; Python and VBA."},{id:Object(p.a)(),title:"Known as a self-starter,",details:"team player and multitasker--strive to consistently exceed expectations."}],f=[{id:Object(p.a)(),title:"Honors:",details:"Graduated cum laude (GPA: 3.53); inductee, Golden Key Honor Society; recipient, John Doe Academic Scholarship; Dean\u2019s List, 2009, 2010, 2011."},{id:Object(p.a)(),title:"Senior Project:",details:"Earned \u201cA\u201d grade on capstone project as co-developer of Web-based, customized enterprise software solution that integrated business processes for a nonprofit organization. Delivered turnkey application that reduced manual data entry, saving hundreds of personnel hours monthly."},{id:Object(p.a)(),title:"Course Highlights:",details:"Enterprise Application Development, Security, Java/C/VB Programming, IT Project Management, Database Programming, Web Design, Computer Architecture"}],N=[{id:Object(p.a)(),isHeader:!0,titleOne:"ABC UNIVERSITY",descriptionOne:"- Sometown, NH",titleTwo:"Bachelor of Science, Major in Information Technology Program,",descriptionTwo:"Currently Enrolled, GPA: 3.85/4.0",list:f,viewListForm:!1}],y=[{id:Object(p.a)(),details:"Handled database and Web site programming tasks (primarily using Java, C, C++, HTML and SharePoint), working an average of 15 hours per week while maintaining a 3.5 GPA."},{id:Object(p.a)(),details:"Redesigned Internet and intranet pages. Used SEO best practices to optimize Web site for search engine rankings and improved functionality of company database."},{id:Object(p.a)(),details:"Resolved memory corruption and other technical issues by leveraging strengths in coding, debugging and integration testing."}],S=[{id:Object(p.a)(),isHeader:!0,titleOne:"ABC Company, Sometown, NH",titleTWo:"Computer Programmer Intern,",descriptionTwo:"2016 to Present",list:y,viewListForm:!1}],w=[{id:Object(p.a)(),title:"Programming/Languages:",details:" VB.Net; C#; .Net; C; C++; ASP.Net; Python, VBA, Java, Visual Basic; SharePoint; PHP; MySQL; HTML; Ant"},{id:Object(p.a)(),title:"Databases Management: ",details:"Oracle 8.x/9.x, SQL Server, MS Access"},{id:Object(p.a)(),title:"Design & IDE Tools:",details:"Rational Rose, UML, WSAD, Oracle WebLogic Server"},{id:Object(p.a)(),title:"Systems:",details:"Windows Server 2016, Linux/Unix, Mac OS X"}];var T=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(r,{}),Object(n.jsx)(j,{}),Object(n.jsx)(O,{title:"Computer Programmer",headerTitle:"entry-level computer programmer",listData:v}),Object(n.jsx)(g,{title:"Education",listData:N}),Object(n.jsx)(g,{title:"Internship",listData:S}),Object(n.jsx)(O,{title:"Technology Summary",listData:w})]})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),c(e),s(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.63ce05fd.chunk.js.map