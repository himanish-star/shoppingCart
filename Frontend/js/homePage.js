$(function () {

    let listOfProducts=null;
    let noCartItems=localStorage.getItem('noOfCartItems');
    cartCounter();
    function cartCounter() {
        let counter=$('#counter');
        if(noCartItems===null){
            counter.text(0);
            return;
        }
        counter.text(localStorage.getItem('noOfCartItems'));

    }
    $("#goToAdmin").click(()=>{
        window.location.href="/admin";
    });
    $('#cart').click(()=>{
        // console.log("clicked");
        window.location.href="/cart";
    });

    function addToCart(event){
        let element=event.target;
        let pos=element.getAttribute("id");
        details={
          pname:listOfProducts[pos].pname,
          pprice:listOfProducts[pos].pprice
        };
        localStorage.setItem(`product${++noCartItems}`,JSON.stringify(details));
        localStorage.setItem('noOfCartItems',noCartItems);
        cartCounter();
    }
    function displayProducts(){
        let productsList=document.getElementById("productsList");
        for(let i in listOfProducts){
            $(productsList).append(`
<div class="carder card items">
  <img class="card-img-top ml-auto mr-auto" src=${listOfProducts[i].imageLink} alt="Card image cap">
  <div class="card-body d-flex flex-column justify-content-between">
    <h4 class="card-title">${listOfProducts[i].pname}</h4>
    <p class="card-text"></p>
    <div class="card-footer">
    <a class="price-tag text-light btn btn-success">${listOfProducts[i].pprice}</a>
    <button id=${i} class=" fa fa-plus-circle add-btn text-light btn btn-primary"></button>
    </div>
  </div>
</div>`);
        }
        let addBtns=document.getElementsByClassName("add-btn");
        for(let addBtn of addBtns){
            addBtn.onclick=addToCart;
        }
    }
    $.get(
        '/details',
        (products)=>{
            listOfProducts=products;
            displayProducts();
        }
    );
}
);