!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n='\n<div>\n\t<ul class="newregister-drop">\n   <li>\n      <form id="filterLoginForm">\n\t\t\t\t<div>\n\t\t\t\t<label for="newregister-login">Login</label>\n\t\t\t\t\t<input type="text" name="user[username]" id="newregister-login">\n        </div>\n        <div>\n          <label for="newregister-pass">Hasło</label>\n          <input type="password" name="user[password]" id="newregister-pass">\n        </div>\n        <fieldset class="row buttons">\n          <p>\n            <input type="submit" value="Zaloguj się">\n          </p>\n        </fieldset>\n      </form>\n\t\t</li>\n\t</ul>\n</div>\n';let i=["bzdury","Zanim","do"];const o=document.getElementById("openNaturalSearch");document.cookie="filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 1970 00:00:00 UTC;";const r='\n<div>\n\t<ul class="newregister-drop">\n   \t<li>\n\n<div  id="keyword-list" class="inlblk vertical-top m-reset-width">\n<input /><input type="button" value="Dodaj">\n</div>\n<div id="keyword-list" class="inlblk vertical-top m-reset-width"></div>\n</li>\n\t</ul>\n</div>\n',l=document.createElement("li");function a(){if(Boolean(document.cookie.split(";").map(e=>e.split("=")[0]).find(e=>"filter-account-cookie"===e)))return;document.getElementById("filterMenu").innerHTML=n,document.getElementById("filterLoginForm").addEventListener("submit",e=>{e.preventDefault(),document.cookie="filter-account-cookie=filter-cookie-hash; expires=Thu, 01 Jan 2200 00:00:00 UTC;",function(){document.getElementById("filterMenu").innerHTML=r;const e=document.getElementById("keyword-list");i.forEach(t=>{const n=document.createElement("div");n.classList.add("inlblk"),n.innerHTML='<a class="tag affect create" style="margin-rigth:10px;"><p style="display:inline;"></p><i class="fa fa-times red" style="margin-left:5px;"></i></a>',e.appendChild(n),[...e.getElementsByTagName("p")].pop().innerText=t}),[...e.getElementsByTagName("i")].forEach(e=>{e.addEventListener("click",()=>{const t=e.parentNode.innerText;e.parentNode.parentNode.remove(),i=i.filter(e=>e!==t)})})}()})}function s(e){const t=document.getElementById("filterMenu");"block"===t.style.display?t.style.display="none":t.style.display="block"}l.innerHTML='\n<a id="filterMenuLink">Filter</a>\n<div id="filterMenu" class="dropdown right" style="margin-left:-230px;" />\n',o.parentNode.parentNode.appendChild(l),document.getElementById("filterMenuLink").addEventListener("click",s),a();const d=[...document.getElementsByClassName("text")].filter(e=>"p"!==e.localName).filter(e=>!e.classList.contains("embed-youtube")).filter(e=>!e.classList.contains("embed-streamable"));d.forEach(e=>{i.forEach(t=>{e.innerText.includes(t)&&(e.innerHTML="Ten komentarz został zablokowany")})});d.forEach((function(e){const t=e.style.color;e.parentNode.addEventListener("mouseover",(function(){e.style.color="red"})),e.parentNode.addEventListener("mouseout",(function(){e.style.color=t})),e.parentNode.addEventListener("click",(function(){e.innerHTML="Ten komentarz został zablokowany"}))}))}]);