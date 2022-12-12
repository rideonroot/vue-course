(function(){"use strict";var e={1885:function(e,t,r){r.d(t,{Z:function(){return S}});var n={};r.r(n),r.d(n,{getUserKey:function(){return g}});var a={};r.r(a),r.d(a,{getFilters:function(){return w},getProductById:function(){return _},getProducts:function(){return y}});var o={};r.r(o),r.d(o,{addCartProduct:function(){return k},deleteCartProduct:function(){return A},getCartProducts:function(){return b},updateCartProduct:function(){return C}});var c={};r.r(c),r.d(c,{createOrder:function(){return K},getOrder:function(){return I}});var i=r(70);const s="https://vue-study.skillbox.cc/api",u="/products",l="/productCategories",d="/colors",f="/users/accessKey",h="/baskets",p="/orders",v=new i.ZP.create({baseURL:s});v.interceptors.response.use((e=>e.data),(({response:e})=>Promise.reject(e.data)));var m=v;const g=()=>m.get(f),y=async e=>{const{items:t,pagination:r}=await m.get(u,{params:e});return{products:t.map((e=>({...e,image:e.image.file.url}))),total:r.total}},_=async e=>{const{image:t,...r}=await m.get(`${u}/${e}`);return{...r,image:t.file.url}},w=async()=>{const e=await m.get(d),t=await m.get(l);return{categories:t.items,colors:e.items}},b=async e=>{const{items:t}=await m.get(h,{params:{userAccessKey:e}});return t},k=async({productId:e,quantity:t,userAccessKey:r})=>{const n=`${h}/products?userAccessKey=${r}`,{items:a}=await m.post(n,{productId:e,quantity:t});return a},C=async({productId:e,quantity:t,userAccessKey:r})=>{const n=`${h}/products?userAccessKey=${r}`,{items:a}=await m.put(n,{productId:e,quantity:t});return a},A=async({productId:e,userAccessKey:t})=>{const r=`${h}/products?userAccessKey=${t}`,{items:n}=await m["delete"](r,{data:{productId:e}});return n},K=async(e,t)=>{const r=`${p}?userAccessKey=${t}`;return await m.post(r,e)},I=async(e,t)=>{const r=`${p}/${e}?userAccessKey=${t}`;return await m.get(r)},P={...n,...a,...o,...c};var S=P},1858:function(e,t,r){var n=r(9242),a=r(2483),o=r(1434);const c="ТЕХНОЗАВРРР",i=(0,a.p7)({history:(0,a.r5)(),routes:[{path:"/",name:o.e0,component:()=>r.e(776).then(r.bind(r,7776)),meta:{title:c}},{path:"/products/:id",name:o.e_,component:()=>r.e(106).then(r.bind(r,5106)),meta:{title:c}},{path:"/cart",name:o.TW,component:()=>r.e(811).then(r.bind(r,7811)),meta:{title:`Корзина - ${c}`}},{path:"/order",name:o.UE,component:()=>r.e(870).then(r.bind(r,7870)),meta:{title:`Оформление заказа - ${c}`}},{path:"/order/:id",name:o.iU,component:()=>r.e(319).then(r.bind(r,319)),meta:{title:e=>`Заказ оформлен №${e.params.id} - ${c}`}},{path:"/:pathMatch(.*)",name:o.vl,component:()=>r.e(558).then(r.bind(r,6558)),meta:{title:`Страница не найдена - ${c}`}}],scrollBehavior(e,t,r){return r||{top:0,behavior:"smooth"}}});i.beforeEach(((e,t,r)=>{let n=c;const{title:a}=e.meta;a&&(n="function"===typeof a?a(e):a),document.title=n,r()}));var s=i,u=r(2578),l=(0,u.WB)(),d=r(3396),f=r(6106),h=r(4870),p=r(2474),v=r(7139);const m=(0,d._)("svg",{width:"30",height:"21",fill:"currentColor"},[(0,d._)("use",{"xlink:href":"#icon-cart"})],-1);var g={__name:"CartIndicator",setup(e){const t=(0,p.x)();return(e,r)=>{const a=(0,d.up)("router-link");return(0,d.wg)(),(0,d.j4)(a,{to:{name:(0,h.SU)(o.TW)},class:"header__cart","aria-label":"Корзина с товарами"},{default:(0,d.w5)((()=>[m,(0,d.wy)((0,d._)("span",{class:"header__count","aria-label":"Количество товаров"},(0,v.zw)((0,h.SU)(t).itemsCount),513),[[n.F8,(0,h.SU)(t).itemsCount]])])),_:1},8,["to"])}}};const y=g;var _=y;const w={class:"header"},b={class:"header__wrapper container"},k=(0,d._)("span",{class:"header__info"},"Каталог",-1),C=(0,d._)("a",{class:"header__logo",href:"#"},[(0,d._)("img",{src:"img/svg/logo-tech.svg",alt:"Логотип интернет магазина Технозавррр",width:"190",height:"33"})],-1),A=(0,d._)("a",{class:"header__tel",href:"tel:8 800 600 90 09"}," 8 800 600 90 09 ",-1),K={key:0},I=(0,d._)("svg",{viewBox:"0 0 52.966 52.966",fill:"#fff",width:"27"},[(0,d._)("path",{d:"M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21\n\tc5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279\n\tC52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19\n\tS32.459,40,21.983,40z"})],-1),P=[I];var S={__name:"TheHeader",setup(e){const t=(0,p.x)();return(e,r)=>((0,d.wg)(),(0,d.iD)("header",w,[(0,d._)("div",b,[k,C,A,(0,h.SU)(t).isLoading?((0,d.wg)(),(0,d.iD)("span",K,P)):((0,d.wg)(),(0,d.j4)(_,{key:1}))])]))}};const O=S;var E=O;const T={class:"footer"},$=(0,d.uE)('<div class="footer__wrapper container"><ul class="footer__links"><li><a class="footer__link" href="#"> Каталог </a></li><li><a class="footer__link" href="tel:88006009009"> 8 800 600 90 09 </a></li><li><a class="footer__link" href="mailto:hi@technozavrrr.com"> hi@technozavrrr.com </a></li><li><a class="footer__link" href="#"> Распродажа </a></li><li><a class="footer__link footer__link--medium" href="#"> Заказать звонок </a></li></ul><ul class="footer__social social"><li class="social__item"><a class="social__link" href="#" aria-label="Вконтакте"><svg width="20" height="11" fill="currentColor"><use xlink:href="#icon-vk"></use></svg></a></li><li class="social__item"><a class="social__link" href="#" aria-label="Инстаграм"><svg width="17" height="17" fill="currentColor"><use xlink:href="#icon-insta"></use></svg></a></li><li class="social__item"><a class="social__link" href="#" aria-label="Facebook"><svg width="17" height="17" fill="currentColor"><use xlink:href="#icon-facebook"></use></svg></a></li><li class="social__item"><a class="social__link" href="#" aria-label="Twitter"><svg width="17" height="14" fill="currentColor"><use xlink:href="#icon-twitter"></use></svg></a></li><li class="social__item"><a class="social__link" href="#" aria-label="Telegram"><svg width="19" height="17" fill="currentColor"><use xlink:href="#icon-telegram"></use></svg></a></li></ul><p class="footer__desc"> Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РФ, в том числе об авторском праве и смежных правах. </p><ul class="footer__data"><li><a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf"> Политика конфиденциальности </a></li><li><a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf"> Публичная оферта </a></li></ul><span class="footer__copyright"> © 2020 Технозавррр </span></div>',1),x=[$];function j(e,t){return(0,d.wg)(),(0,d.iD)("footer",T,x)}var q=r(89);const L={},U=(0,q.Z)(L,[["render",j]]);var F=U,N={__name:"App",setup(e){const t=(0,f.L)(),r=(0,p.x)(),n=async()=>{await t.getAccessKey(),await r.getCartProducts()};return(0,d.bv)(n),(e,t)=>{const r=(0,d.up)("router-view");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(E),(0,d.Wm)(r),(0,d.Wm)(F)],64)}}};const Z=N;var B=Z;(0,n.ri)(B).use(s).use(l).mount("#app")},1434:function(e,t,r){r.d(t,{TW:function(){return c},UE:function(){return i},e0:function(){return a},e_:function(){return n},iU:function(){return s},vl:function(){return o}});const n="product",a="main",o="not-found",c="cart",i="order",s="order-info"},2474:function(e,t,r){r.d(t,{x:function(){return s}});var n=r(4870),a=r(3396),o=r(2578),c=r(1885),i=r(6106);const s=(0,o.Q_)("cart",(()=>{const e=(0,i.L)(),t=(0,n.iH)([]),r=(0,n.iH)(!1),o=(0,n.iH)(!1),s=(0,a.Fl)((()=>t.value.length)),u=(0,a.Fl)((()=>t.value.reduce(((e,t)=>e+t.price*t.quantity),0))),l=async()=>{try{o.value=!1,r.value=!0,t.value=await c.Z.getCartProducts(e.accessKey)}catch{o.value=!0}finally{r.value=!1}},d=async({productId:n,quantity:a})=>{try{o.value=!1,r.value=!0;const i={productId:n,quantity:a,userAccessKey:e.accessKey};t.value=await c.Z.addCartProduct(i)}catch{o.value=!0}finally{r.value=!1}},f=async({productId:r,quantity:n})=>{const a=t.value.find((({product:e})=>e.id===r)),o=a.quantity;try{a.quantity=n,await c.Z.updateCartProduct({productId:r,quantity:n,userAccessKey:e.accessKey})}catch{a.quantity=o}},h=async n=>{try{o.value=!1,r.value=!0;const a={productId:n,userAccessKey:e.accessKey};t.value=await c.Z.deleteCartProduct(a)}catch{o.value=!0}finally{r.value=!1}},p=e=>t.value.some((({product:t})=>t.id===e)),v=()=>t.value=[];return{items:t,itemsCount:s,cartTotal:u,isError:o,isLoading:r,getCartProducts:l,addToCard:d,updateQuantity:f,removeFromCart:h,checkIsInCart:p,clearCart:v}}))},6106:function(e,t,r){r.d(t,{L:function(){return i}});var n=r(2578),a=r(4870),o={getItem:e=>{try{return JSON.parse(window.localStorage.getItem(e))}catch(t){return console.log("Error getting data from localStorage",t),null}},setItem:(e,t)=>{try{window.localStorage.setItem(e,JSON.stringify(t))}catch(r){console.log("Error saving data in localStorage",r)}},removeItem:e=>{try{window.localStorage.removeItem(e)}catch{console.log("There is nothing to remove with key ",e)}}},c=r(1885);const i=(0,n.Q_)("user",(()=>{const e=(0,a.iH)(""),t=t=>{e.value=t,o.setItem("access-key",t)},r=()=>{e.value="",o.removeItem("access-key")},n=async()=>{const e=o.getItem("access-key");if(e)return void t(e);const{accessKey:r}=await c.Z.getUserKey();t(r)};return{accessKey:e,getAccessKey:n,setAccessKey:t,deleteAccessKey:r}}))}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||c>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(i=!1,o<c&&(c=o));if(i){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{106:"6898248f",319:"45a417ca",558:"2c3e3ac3",776:"2b7bafee",811:"f420f91a",870:"827d8564"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{106:"319dde25",319:"e6669c15",776:"e6669c15",811:"d0510bec",870:"e6669c15"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-course:";r.l=function(n,a,o,c){if(e[n])e[n].push(a);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[a];var f=function(t,r){i.onerror=i.onload=null,clearTimeout(h);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),t)return t(r)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/vue-course/"}(),function(){var e=function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var c=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=c,s.request=i,a.parentNode.removeChild(a),n(s)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var c=document.getElementsByTagName("style");for(n=0;n<c.length;n++){a=c[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var c=r.miniCssF(n),i=r.p+c;if(t(c,i))return a();e(n,i,a,o)}))},a={143:0};r.f.miniCss=function(e,t){var r={106:1,319:1,776:1,811:1,870:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var c=r.p+r.u(t),i=new Error,s=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",i.name="ChunkLoadError",i.type=o,i.request=c,a[1](i)}};r.l(c,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,c=n[0],i=n[1],s=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var l=s(r)}for(t&&t(n);u<c.length;u++)o=c[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self["webpackChunkvue_course"]=self["webpackChunkvue_course"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1858)}));n=r.O(n)})();
//# sourceMappingURL=app.356df19f.js.map