(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);n(13);var a=n(0),r=n.n(a),c=n(5),i=n(2),u=n.n(i),l=(n(21),n(4),r.a.createElement("strong",null,"Ingredient : ")),s=r.a.createElement("strong",null,"Calories : "),o=function(e){var t=e.title,n=e.calories,a=e.image,c=e.ingredient;return r.a.createElement("div",{className:"recipe-div"},r.a.createElement("h1",null," ",t),r.a.createElement("ul",null,l,c.map(function(e){return r.a.createElement("li",null,e.text)})),r.a.createElement("p",null,s,n),r.a.createElement("img",{className:"image",src:a}))};var m=r.a.createElement("button",{className:"search-btn",type:"submit"},"search"),p=function(){var e=Object(a.useState)([]),t=e[0],n=e[1],c=Object(a.useState)(""),i=c[0],l=c[1],s=Object(a.useState)("banana"),p=s[0],f=s[1];Object(a.useEffect)(function(){d()},[p]);var d=function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(r,c){try{var i=t[r](c),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}("next")})}}(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q="+p+"&app_id=75ca12a4&app_key=151e5a493e29dd383e34e881da1643ef");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a.hits);case 7:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(i),l("")},className:"search-form"},r.a.createElement("input",{placeholder:"Enter Recipee Name",className:"search-bar",type:" text",value:i,onChange:function(e){l(e.target.value)}}),m)),r.a.createElement("div",{className:"recipes"},t.map(function(e){return r.a.createElement(o,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredient:e.recipe.ingredients})})))};Object(c.render)(r.a.createElement(p,null),document.querySelector("#app"))},4:function(e,t,n){},6:function(e,t,n){n(7),e.exports=n(24)}},[[6,2,1]]]);
//# sourceMappingURL=app.369da5b8.js.map