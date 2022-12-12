"use strict";(self["webpackChunkvue_course"]=self["webpackChunkvue_course"]||[]).push([[776],{5227:function(e,t,l){l.d(t,{Bf:function(){return a},e8:function(){return o},m5:function(){return n},n8:function(){return i}});const a=e=>Object.entries(e).reduce(((e,[t,l])=>"string"===typeof l&&""===l?e:("number"!==typeof l||l)&&l?{...e,[t]:l}:e),{}),o=e=>Intl.NumberFormat().format(e),n=(e,t)=>t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]],i=(e,t)=>e?.map((e=>{const l=e(t);return"string"===typeof l?l:""})).filter((e=>""!==e))},4953:function(e,t,l){l.d(t,{Z:function(){return s}});var a=l(3396);function o(e,t){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.WI)(e.$slots,"default"),(0,a._)("button",(0,a.dG)((0,a.mx)(e.$attrs,!0),{class:"filter__submit button"})," Попробовать еще раз ",16)])}var n=l(89);const i={},r=(0,n.Z)(i,[["render",o]]);var s=r},6213:function(e,t,l){l.d(t,{Z:function(){return _}});var a=l(3396),o=l(7139);const n=e=>((0,a.dD)("data-v-6cd2041e"),e=e(),(0,a.Cn)(),e),i=n((()=>(0,a._)("span",{class:"loader"},null,-1))),r=[i];var s={__name:"AppLoader",props:{app:Boolean},setup(e){return(t,l)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(["container",{container__app:e.app}])},r,2))}},c=l(89);const u=(0,c.Z)(s,[["__scopeId","data-v-6cd2041e"]]);var _=u},7776:function(e,t,l){l.r(t),l.d(t,{default:function(){return be}});l(7658);var a=l(3396),o=l(4870),n=l(2483),i=l(1885),r=()=>{const e=(0,o.qj)({products:[],pagesCount:0,isLoading:!1,error:null}),t=async t=>{const l=t?.limit||9;try{e.isLoading=!0,e.error=null;const{products:a,total:o}=await i.Z.getProducts({...t,limit:l,page:t.page});e.products=a,e.pagesCount=Math.ceil(o/l)}catch(a){e.error=a}finally{e.isLoading=!1}};return{...(0,o.BK)(e),getProducts:t}},s=l(7139),c=l(9242),u=l(5227),_=l(1434);const p=["src","alt"],g={class:"catalog__title"},d={href:"#"},m={class:"catalog__price"},f={class:"colors colors--black"},v={class:"colors__label"},b=["value"];var y={__name:"ProductListItem",props:{id:Number,image:String,title:String,price:Number,colors:Array},setup(e){const t=e,{title:l,image:n,price:i,colors:r,id:y}=(0,o.BK)(t),w=(0,o.iH)(r.value[0].id);return(e,t)=>{const k=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(k,{to:{name:(0,o.SU)(_.e_),params:{id:(0,o.SU)(y)}},class:"catalog__pic"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,o.SU)(n),alt:(0,o.SU)(l)},null,8,p)])),_:1},8,["to"]),(0,a._)("h3",g,[(0,a._)("a",d,(0,s.zw)((0,o.SU)(l)),1)]),(0,a._)("span",m,(0,s.zw)((0,o.SU)(u.e8)((0,o.SU)(i)))+" ₽ ",1),(0,a._)("ul",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(r),(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id,class:"colors__item"},[(0,a._)("label",v,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>w.value=e),value:e.id,type:"radio",class:"colors__radio sr-only"},null,8,b),[[c.G2,w.value]]),(0,a._)("span",{class:"colors__value",style:(0,s.j5)(`background-color: ${e.code}`)},null,4)])])))),128))])])}}};const w=y;var k=w;const h={class:"catalog__list"};var U={__name:"ProductList",props:{products:Array},setup(e){return(t,l)=>((0,a.wg)(),(0,a.iD)("ul",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.products,(e=>((0,a.wg)(),(0,a.j4)(k,{key:e.id,id:e.id,title:e.title,image:e.image,price:e.price,colors:e.colors},null,8,["id","title","image","price","colors"])))),128))]))}};const S=U;var C=S;const D=(e,t)=>{const l=[],a=e>0?e:1;for(let o=a;o<=t;o++)l.push(o);return l};var P=({page:e,totalVisible:t,length:l})=>(0,a.Fl)((()=>{const a=Math.min(Math.max(0,t)||l,l);if(l<=a)return D(1,l);const o=a%2===0?1:0,n=Math.floor(a/2),i=l-n+1+o;if(e>n&&e<i){const t=1,a=l,i=e-n+2,r=e+n-2-o,s=i-1===t+1?2:"...",c=r+1===a-1?r+1:"...";return[t,s,...D(i,r),c,l]}if(e===n){const t=e+n-1-o;return[...D(1,t),"...",l]}if(e===i){const t=e-n+1;return[1,"...",...D(t,l)]}return[...D(1,n),"...",...D(i,l)]}));const j={key:0,class:"catalog__pagination pagination"},F={class:"pagination__item"},x=(0,a._)("svg",{width:"8",height:"14",fill:"currentColor"},[(0,a._)("use",{"xlink:href":"#icon-arrow-left"})],-1),I=[x],K={key:0,class:"pagination__link"},L=["onClick"],M={class:"pagination__item"},H=(0,a._)("svg",{width:"8",height:"14",fill:"currentColor"},[(0,a._)("use",{"xlink:href":"#icon-arrow-right"})],-1),V=[H];var B={__name:"AppPagination",props:{page:Number,pagesCount:Number,totalVisible:{type:Number,default:7}},emits:["update:page"],setup(e,{emit:t}){const l=e,{page:n,pagesCount:i,totalVisible:r}=(0,o.BK)(l),u=(0,a.Fl)((()=>i.value>1)),_=P({page:n.value,length:i.value,totalVisible:r.value}),p=e=>{e<1||e>i.value||t("update:page",e)};return(e,t)=>(0,o.SU)(u)?((0,a.wg)(),(0,a.iD)("ul",j,[(0,a._)("li",F,[(0,a._)("a",{onClick:t[0]||(t[0]=(0,c.iM)((e=>p((0,o.SU)(n)-1)),["prevent"])),class:(0,s.C_)([{"pagination__link--disabled":1===(0,o.SU)(n)},"pagination__link pagination__link--arrow"]),"aria-label":"Предыдущая страница",href:"#"},I,2)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(_),(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"pagination__item"},[isNaN(e)?((0,a.wg)(),(0,a.iD)("span",K,(0,s.zw)(e),1)):((0,a.wg)(),(0,a.iD)("a",{key:1,onClick:(0,c.iM)((t=>p(e)),["prevent"]),class:(0,s.C_)([{"pagination__link--current":(0,o.SU)(n)===e},"pagination__link"]),href:"#"},(0,s.zw)(e),11,L))])))),128)),(0,a._)("li",M,[(0,a._)("a",{class:(0,s.C_)(["pagination__link pagination__link--arrow",{"pagination__link--disabled":(0,o.SU)(n)===(0,o.SU)(i)}]),onClick:t[1]||(t[1]=(0,c.iM)((e=>p((0,o.SU)(n)+1)),["prevent"])),href:"#","aria-label":"Следующая страница"},V,2)])])):(0,a.kq)("",!0)}};const N=B;var Z=N,q=()=>{const e=(0,o.qj)({isLoading:!1,error:null,categories:[],colors:[]}),t=async()=>{try{e.isLoading=!0;const{categories:t,colors:l}=await i.Z.getFilters();e.categories=t,e.colors=l}catch(t){e.error=t}finally{e.isLoading=!1}};return{...(0,o.BK)(e),getFilters:t}};const Y={class:"filter"},z=(0,a._)("h2",{class:"filter__title"},"Фильтры",-1),W=["onSubmit"],A={class:"form__block"},$=(0,a._)("legend",{class:"form__legend"},"Цена",-1),G={class:"form__label form__label--price"},O=(0,a._)("span",{class:"form__value"},"От",-1),E={class:"form__label form__label--price"},J=(0,a._)("span",{class:"form__value"},"До",-1),Q={class:"form__block"},R=(0,a._)("legend",{class:"form__legend"},"Категория",-1),T={class:"form__label form__label--select"},X=(0,a._)("option",{value:""},"Все категории",-1),ee=["value"],te={class:"form__block"},le=(0,a._)("legend",{class:"form__legend"},"Цвет",-1),ae={class:"colors"},oe={class:"colors__label"},ne=["value"],ie=(0,a._)("button",{class:"filter__submit button button--primery",type:"submit"}," Применить ",-1);var re={__name:"ProductFilter",props:{initialFilters:Object},emits:["filterProducts"],setup(e,{emit:t}){const l=e,n={minPrice:0,maxPrice:0,categoryId:"",colorId:""},{categories:i,colors:r,getFilters:_}=q(),{initialFilters:p}=(0,o.BK)(l),g=(0,o.qj)({...n,...p.value}),d=(0,a.Fl)((()=>(0,u.Bf)(g))),m=()=>{t("filterProducts",{...d.value})},f=()=>{t("filterProducts",{}),Object.assign(g,n)};return(0,a.bv)(_),(e,t)=>((0,a.wg)(),(0,a.iD)("aside",Y,[z,(0,a._)("form",{onSubmit:(0,c.iM)(m,["prevent"]),class:"filter__form form"},[(0,a._)("fieldset",A,[$,(0,a._)("label",G,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>g.minPrice=e),type:"text",name:"min-price",class:"form__input"},null,512),[[c.nr,g.minPrice,void 0,{number:!0}]]),O]),(0,a._)("label",E,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>g.maxPrice=e),type:"text",name:"max-price",class:"form__input"},null,512),[[c.nr,g.maxPrice,void 0,{number:!0}]]),J])]),(0,a._)("fieldset",Q,[R,(0,a._)("label",T,[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>g.categoryId=e),class:"form__select",name:"category"},[X,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(i),(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e.id},(0,s.zw)(e.title),9,ee)))),128))],512),[[c.bM,g.categoryId]])])]),(0,a._)("fieldset",te,[le,(0,a._)("ul",ae,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(r),(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id,class:"colors__item"},[(0,a._)("label",oe,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>g.colorId=e),value:e.id,class:"colors__radio sr-only",type:"radio",name:"color"},null,8,ne),[[c.G2,g.colorId]]),(0,a._)("span",{class:"colors__value",style:(0,s.j5)(`background-color:${e.code}`)},null,4)])])))),128))])]),ie,(0,a._)("button",{onClick:f,class:"filter__reset button button--second",type:"button"}," Сбросить ")],40,W)]))}};const se=re;var ce=se,ue=l(6213),_e=l(4953);const pe={key:0,class:"content container"},ge=(0,a._)("div",{class:"content__top content__top--catalog"},[(0,a._)("h1",{class:"content__title"},"Каталог"),(0,a._)("span",{class:"content__info"}," 152 товара ")],-1),de={class:"content__catalog"},me={key:2,class:"catalog"};var fe={__name:"MainPage",setup(e){const t=(0,o.iH)(!1),l=(0,o.iH)(1),i=(0,o.iH)({}),{products:s,isLoading:c,pagesCount:u,error:_,getProducts:p}=r(),g=(0,n.tv)(),d=(0,n.yj)(),m=async()=>{const e=6,t={page:l.value,...i.value};g.push({query:t}),p({...t,limit:e})},f=e=>{l.value=1,i.value=e,m()};return(0,a.YP)(l,m),(0,a.bv)((()=>{const{page:e,...a}=d.query;e&&(l.value=+e),i.value=a,m().then((()=>t.value=!0))})),(e,n)=>t.value?((0,a.wg)(),(0,a.iD)("main",pe,[ge,(0,a._)("div",de,[(0,a.Wm)(ce,{onFilterProducts:f,"initial-filters":i.value},null,8,["initial-filters"]),(0,o.SU)(c)?((0,a.wg)(),(0,a.j4)(ue.Z,{key:0})):(0,o.SU)(_)?((0,a.wg)(),(0,a.j4)(_e.Z,{key:1,onClick:m},{default:(0,a.w5)((()=>[(0,a.Uk)(" Что-то пошло не так. ")])),_:1})):((0,a.wg)(),(0,a.iD)("section",me,[(0,a.Wm)(C,{products:(0,o.SU)(s)},null,8,["products"]),(0,a.Wm)(Z,{page:l.value,"onUpdate:page":n[0]||(n[0]=e=>l.value=e),"pages-count":(0,o.SU)(u)},null,8,["page","pages-count"])]))])])):(0,a.kq)("",!0)}};const ve=fe;var be=ve}}]);
//# sourceMappingURL=776.2b7bafee.js.map