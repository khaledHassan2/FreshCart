import{a as G}from"./chunk-WTN63XHQ.js";import{a as z}from"./chunk-KD5FM2UQ.js";import{a as X}from"./chunk-HGGCISY3.js";import{a as H,c as R,g as q,l as J}from"./chunk-XHZB7IPA.js";import{l as K,m as Q}from"./chunk-6XQ4R34H.js";import{d as $}from"./chunk-OPIBKOQE.js";import"./chunk-JICLCJKO.js";import{c as Y,d as Z}from"./chunk-FPOCNBP4.js";import{h as O}from"./chunk-ORPLGSWX.js";import{Cb as y,Db as f,Gb as F,Lb as m,Mb as _,Nb as I,Ob as M,Pa as T,Pb as B,Qb as V,Sb as A,Ta as a,Tb as N,Ub as j,Vb as D,Yb as u,Zb as g,_b as U,ca as l,db as p,fa as w,jb as W,lb as h,pa as v,pb as L,qa as x,qb as k,rb as C,sb as b,tb as s,ub as o,vb as d,yb as E}from"./chunk-7LPCS22P.js";var ee=(i,r)=>r.id,te=i=>["/details",i],ie=()=>[1,2,3,4,5],re=(i,r)=>({"text-danger":i,"text-black":r});function ne(i,r){i&1&&(s(0,"span"),d(1,"i",19),o())}function se(i,r){i&1&&(s(0,"span"),d(1,"i",20),o())}function ae(i,r){if(i&1){let n=E();s(0,"div",7)(1,"div",8)(2,"div",9),d(3,"img",10),s(4,"h2",11),m(5),o(),s(6,"h3",12),m(7),o(),s(8,"div",13)(9,"span"),m(10),u(11,"translate"),o(),s(12,"div"),C(13,ne,2,0,"span",null,k),W(15,se,2,0,"span"),o()()(),s(16,"div",14)(17,"button",15),y("click",function(){let e=v(n).$implicit,c=f();return x(c.addToCart(e.id))}),m(18),u(19,"translate"),d(20,"i",16),o(),s(21,"div",17)(22,"i",18),y("click",function(){let e=v(n).$implicit,c=f();return x(c.addWishList(e.id))}),o()()()()()}if(i&2){let n=r.$implicit,t=f();a(2),h("routerLink",j(14,te,n.id)),a(),h("src",n.imageCover,T)("alt",n.title),a(2),_(" ",n.category.name," "),a(2),_(" ",n.title.split(" ",2).join(" ")," "),a(3),I(" ",n.price," ",g(11,10,"home.EGP")," "),a(3),b(N(16,ie).slice(0,n.ratingsAverage)),a(2),L(15,n.ratingsAverage%1!==0?15:-1),a(3),_(" ",g(19,12,"home.Add")," "),a(3),h("ngClass",D(17,re,t.isProductInWishlist(n.id),!t.isProductInWishlist(n.id)))}}var Ce=(()=>{let r=class r{constructor(){this._ProductsService=l(z),this._CartService=l(K),this._WishlistService=l(X),this._ToastrService=l(Q),this.productList=p([]),this.textSearsh=p(""),this.isLoding=p(!1)}ngOnInit(){this.productSupscrip=this._ProductsService.getAllProduct().subscribe({next:t=>{this.productList.set(t.data)}}),this.getUserWishlistSub=this._WishlistService.getUserWishlist().subscribe({next:t=>{let e=p([]);t.data.forEach(c=>{e.update(P=>P+c._id)}),this._CartService.inSidWishList.set(e())}})}addToCart(t){this.isLoding.set(!0),this.addProductToCartSub=this._CartService.addProductToCart(t).subscribe({next:e=>{this._ToastrService.success(e.message),this.isLoding.set(!1),console.log(e),this._CartService.cartNumber.set(e.numOfCartItems)}})}isProductInWishlist(t){return this._CartService.inSidWishList().includes(t)}addWishList(t){this.addWishListsub=this._WishlistService.addWishList(t).subscribe({next:e=>{console.log("wish",e),this._ToastrService.success(e.status),this._CartService.inSidWishList.set(e.data)}})}ngOnDestroy(){this.addWishListsub?.unsubscribe(),this.addProductToCartSub?.unsubscribe(),this.productSupscrip?.unsubscribe()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=w({type:r,selectors:[["app-products"]],standalone:!0,features:[A],decls:11,vars:8,consts:[[1,"products"],[1,"container-fluid","py-5"],[1,"input-group","flex-nowrap","w-50","mx-auto","shadow","m-3"],["type","text","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control","shadow-none",3,"ngModelChange","ngModel","placeholder"],["id","addon-wrapping",1,"input-group-text","bg-main-light"],[1,"fa-solid","fa-magnifying-glass","text-main","fa-2"],[1,"row"],[1,"col-md-2","g-3"],[1,"inner","product","border-0","p-2"],[3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"text-main","small"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center","container"],[1,"btn-main",3,"click"],[1,"fa-solid","fa-cart-shopping","fa-flip"],[1,"myHart",3,"ngClass"],[1,"fas","fa-heart","fa-2x",3,"click"],[1,"fas","fa-star","rating-color"],[1,"fas","fa-star-half-stroke","rating-color"]],template:function(e,c){e&1&&(s(0,"section",0)(1,"div",1)(2,"div",2)(3,"input",3),u(4,"translate"),V("ngModelChange",function(S){return B(c.textSearsh,S)||(c.textSearsh=S),S}),o(),s(5,"span",4),d(6,"i",5),o()(),s(7,"div",6),C(8,ae,23,20,"div",7,ee),u(10,"searshPipe"),o()()()),e&2&&(a(3),F("placeholder"," ",g(4,3,"home.Searsh By Name...")," "),M("ngModel",c.textSearsh),a(5),b(U(10,5,c.productList(),c.textSearsh())))},dependencies:[J,H,R,q,G,$,Z,Y,O]});let i=r;return i})();export{Ce as ProductsComponent};
