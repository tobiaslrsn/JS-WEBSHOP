let e=new class{constructor(){this.getCart=JSON.parse(localStorage.getItem("cart"))||[]}addToCart(e){this.getCart.push(e),localStorage.setItem("cart",JSON.stringify(this.getCart))}offcanvasCart(){document.getElementById("cartCount").innerHTML=""+this.getCart.length,console.log(this.getCart.length+" items in cart");let e=document.getElementById("shopping-cart-offcanvas");e.innerHTML="";for(let t=0;t<this.getCart.length;t++){let a=document.createElement("ul");a.className="cart-item-offcanvas";let n=document.createElement("img");n.className="product-image-offcanvas",n.src=this.getCart[t].photo;let l=document.createElement("li");l.className="artist-offcanvas",l.innerHTML=this.getCart[t].artist;let c=document.createElement("li");c.className="album-offcanvas",c.innerHTML="'"+this.getCart[t].album+"'";let r=document.createElement("li");r.className="article-offcanvas",r.innerHTML=this.getCart[t].article;let i=document.createElement("li");i.className="price-offcanvas",i.innerHTML=this.getCart[t].price+" SEK";let s=document.createElement("button");s.className="remove-from-offcanvas",s.innerHTML="REMOVE",s.addEventListener("click",(()=>{this.getCart.splice(t,1),this.offcanvasCart(),localStorage.setItem("cart",JSON.stringify(this.getCart))})),a.appendChild(n),a.appendChild(l),a.appendChild(c),a.appendChild(r),a.appendChild(i),e.appendChild(a),a.appendChild(s)}}};window.onload=function(){!function(){let t=document.getElementById("shopping-cart");for(let a=0;a<e.getCart.length;a++){let n=document.createElement("ul");n.className="cart-item";let l=document.createElement("img");l.className="product-image-cart",l.src=e.getCart[a].photo;let c=document.createElement("li");c.className="artist-cart",c.innerHTML=e.getCart[a].artist;let r=document.createElement("li");r.className="album-cart",r.innerHTML="'"+e.getCart[a].album+"'";let i=document.createElement("li");i.className="article-cart",i.innerHTML=e.getCart[a].article;let s=document.createElement("li");s.className="price-cart",s.innerHTML=e.getCart[a].price+" SEK",n.appendChild(l),n.appendChild(c),n.appendChild(r),n.appendChild(i),n.appendChild(s),t.appendChild(n)}}()};
//# sourceMappingURL=confirmation.c38b95a7.js.map