let cartList =JSON.parse(localStorage.getItem("allItem"))
     
      
function listing(){
if(cartList.length){
$('.cartInfo p').text("")
let total =0;
let trList= `<table border="1">
            <colgroup>
              <col>
              <col>
              <col>
              <col>
              <col>
            </colgroup>
            <thead>
            <tr>
              <th>상품</th>
              <th>상품정보</th>
              <th>수량</th>
              <th>금액</th>
              <th>취소</th>
            </tr>
            </thead>
            <tbody>`
cartList.forEach((value)=>{
    trList+=`<tr>`
    trList+=`<td>`
    trList+=`<img src="../img/json/${value.photo}"alt="이미지네임"></td>`
    trList+=`<td>${value.name}<br><span class="price">${value.price}</span></td>`
    trList+=`<td>
            <input type="text" value="${value.quantity}" autocomplete="off" class="qty__input">
            <div class="btnzip">
            <button type="button" class="qty__plus">+</button>
            <button type="button" class="qty__minus">-</button>
            </div>
            </td>`
    trList+=`<td class="myTotal">${value.quantity*value.price}</td>`
    trList+=`<td>
            <button type="button" class="remove"><i class="fa-regular fa-trash-can"></i></button>
            </td>`
    trList+=`</tr>`
    total +=value.quantity*value.price
})
    trList+=`</tbody>
            <tfoot>
            <tr>
            <td colspan="5">합계 :<span>${total}</span>
            </td>
            </tr>
            </tfoot>
            </table>`
    trList+=`<div class="order">
            <a href="../html/buy.html"><button type="button"></button><i class="fa-solid fa-cart-shopping"></i>주문하기</a>
            </div>`
    $('.cartBox table').remove()
    $('.cartBox .order').remove()
    $('.cartBox').append(trList)
    
}else{
  $('.cartBox table').remove()
  $('.cartBox .order').remove()
  $('.cartInfo p').text("장바구니가 비어 있습니다.")
  }
}
listing();

$('body').on('click','.qty__plus',function(){
  let quantity = parseInt($(this).parent().prev().val())
  let myprice =parseInt($(this).parent().parent().prev().find(".price").text())
  let list_total=0;
  console.log("들어온다")
  if(quantity){
    // quantity=parseInt(quantity)
    $(this).parent().prev().val(++quantity)
    list_total=quantity*myprice
  }else{
    quantity=1;
    $(this).parent().prev().val(quantity)
    list_total=quantity*myprice
  }
  $(this).parent().parent().next().text(list_total)
  mytotal();
})

$('body').on('click','.qty__minus',function(){
  let quantity = parseInt($(this).parent().prev().val())
  let myprice =parseInt($(this).parent().parent().prev().find(".price").text())
  let list_total=0;
  console.log("빠진다")
  if(quantity>1){
    
    $(this).parent().prev().val(--quantity)
    list_total=quantity*myprice
  }else{
    quantity=1;
    $(this).parent().prev().val(quantity)
    list_total=quantity*myprice
  }
  $(this).parent().parent().next().text(list_total)
  mytotal();
})
$('body').on('keyup','.qty__input',function(){
let quantity=$(this).val()
if(quantity){
  let total=0;
  let myprice =parseInt($(this).parent().prev().find('.price').text())
  quantity = parseInt(quantity)
  // $(this).val(quantity)
  total = quantity*myprice
  $(this).parent().next().text(total);
  mytotal()
}
})

function mytotal(){
  let total =0;
  $('tbody .myTotal').each(function(){
      total +=parseInt($(this).text())
  })
  $('tfoot span').text(total)
} 
$('body').on('click','tbody .remove',function(){
  // let trnum =$(this).parent().parent().index()
  let trnum =$(this).parents('tr').index()
  cartList.splice(trnum,1)
  localStorage.setItem("allItem",JSON.stringify(cartList))
  listing();
  console.log(cartList)
})
// $('body').on('click','.order button',function(){
//       let myid = sessionStorage.getItem("userid")
//       if(!myid){
//           alert("로그인 후 구매할수 있습니다.")
//           location.href="./login.html"

//       }else{
//           location.href="./buy.html"
//           localStorage.clear()
//       }
//   })
