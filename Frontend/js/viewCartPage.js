$(function () {
    let noOfCartItems=localStorage.getItem("noOfCartItems");
    // console.log(noOfCartItems);
    let billCart=$('#billTable');
    let sum=0;
    // console.log(billCart);
    // billCart.innerHTML="";
    if(+(noOfCartItems)===0){
        document.body.innerHTML=
            `<h3 class="btn btn-danger" style="position:absolute;left: 35vw;top:30vh">
OOPS your Cart seems to be EMPTY</h3>`
    }
    for(let i=0;i<noOfCartItems;i++){
        let details=localStorage.getItem(`product${i+1}`);
        details=JSON.parse(details);
        // console.log(details);
        sum+=+(details.pprice);
        billCart.append(`
        <tr>
            <th scope="row">${i+1}</th>
            <td>${details.pname}</td>
            <td>${details.pprice}</td>
            <td>1</td>
        </tr>
        `);
    }
    if(noOfCartItems){
        billCart.append(`
        <tr>
            <th scope="row">Total</th>
            <td></td>
            <td></td>
            <td>${sum}</td>
        </tr>`
        );
    }
    $('#clear').click(()=>{
        // localStorage.setItem('noOfCartItems',0);
        localStorage.clear();
        window.location.reload();
    });
});