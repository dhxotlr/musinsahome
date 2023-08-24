let temp = location.href.split("?");
console.log(temp);
let detail = decodeURI(temp[1]).split("&");
console.log(detail);

const [
  brand,
  pname,
  price,
  optionSize,
  optionColor,
  mcategory,
  bcatecogy,
  image,
  grade,
] = detail;

let pprice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// 사이즈 분리
let option_size = optionSize.toUpperCase().split(",");
let size = "";
option_size.forEach((value, index) => {
  size += `<input type="radio" id="size${index}" name="size" value="${value}" />`;
  size += `<label for="size${index}">${value}</label>`;
});

// 색상 분리
let option_color = optionColor.split(",");
let color = "";
color += `<select name="color" id="color">`;
color += `<option value="">선택</option>`;
option_color.forEach((value, index) => {
  color += `<option value="${value}">${value}</option>`;
});
color += `</select>`;

let star = "";
for (let i = 1; i <= grade; i++) {
  star += `<i class="fa-solid fa-star"></i>`;
}

let pt = image.split(".");
console.log(pt);
let ptlink = pt[0];
console.log(ptlink);
let dpt = "";
for (let i = 1; i < 20; i++) {
  dpt += `<img src="../img/json/${ptlink}_detail/${ptlink}_detail${i}.jpg" alt="" />`;
}
console.log(dpt);
// console.log(star);

// html에 넣을 내용
let detail_info = `<div class="detail_info">`;
detail_info += `<div class="prd_photo">`;
detail_info += `<img src="../img/json/${image}" alt="${pname}" /></div>`;
detail_info += `<div class="prd_info">`;
detail_info += `<div class="prd_info_item">`;
detail_info += `<p class="brand">${brand}</p>`;
detail_info += `<p class="name">${pname}</p>`;
detail_info += `<p class="grade">`;
detail_info += `${star}`;
detail_info += `<a href="javascript:;">886개 리뷰보기</a></p></div>`;
detail_info += ` <div class="prd_info_price">`;
detail_info += `<p class="price won">${pprice}</p>`;
detail_info += `<p class="point">${(detail[2] / 100)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}p (1%) 적립</p></div>`;
detail_info += `<table class="delivery">`;
detail_info += `<colgroup><col /><col /></colgroup>`;
detail_info += `<th>배송정보</th>`;
detail_info += `<tr>
                    <td>배송비</td>
                    <td>해당 브랜드 제품은 무료배송 됩니다.<br />제주도를 포함한 도서/산간 지역은 추가배송비 3,000원</td>
                </tr>`;
detail_info += `<tr>
                <td>배송예정</td>
                <td><span>2일 이내</span>출고(주말, 공휴일제외)</td>
                </tr>
                </table>`;
detail_info += `<table class="option">
                <colgroup>
                    <col />
                    <col />
                </colgroup>`;

if (optionSize === "undefined") {
  detail_info += `<tr>
                    <th>타입</th>
                    <td>
                       ${color}
                    </td>
                </tr>`;
  detail_info += `</table>`;
  detail_info += `<div class="selection">
                <p class="sel_info">${pname}<br /><span class="color">타입선택</span></p>`;
} else {
  detail_info += `<tr>
                    <th>색상</th>
                    <td>
                       ${color}
                    </td>
                </tr>`;
  detail_info += `<tr>
                  <th>사이즈</th>
                  <td>
                  ${size}
                  </td>
                  </tr>
                  </table>`;
  detail_info += `<div class="selection">
                  <p class="sel_info">${pname}<br /><span class="color">컬러선택</span> / <span class="size">사이즈선택</span></p>`;
}

detail_info += `<div class="sel_price"><div class="qty__form">
                    <button type="button" class="qty__minus">-</button>
                    <input type="text" value="0" autocomplete="off" class="qty__input"/>
                    <button type="" class="qty__plus">+</button>
                </div>
                <p class="qty_price won">
                0
                
                </p><a href="javascript:;"><i class="fa-solid fa-xmark"></i></a>
                </div></div>`;
detail_info += `<div class="total_price">총 상품 금액 <span class="won span">0</span></div>`;
detail_info += `<div class="btn">
                    <p class="cart">
                    <a href="./cart.html">
                        <i class="fa-solid fa-heart"></i> 장바구니 담기</a>
                    </p>
                    <p class="buy">
                    <a href="./buy.html">
                        <i class="fa-solid fa-cart-shopping"></i>
                        바로 구매하기</a>
                    </p>
                     </div>`;
detail_info += ` </div></div>`;
detail_info += ` <div class="tab">
                    <a href="javascript:;" class="on">DETAIL</a>
                    <a href="javascript:;">REVIEW</a>
                    <a href="javascript:;">Q&A</a>
                    <a href="javascript:;">RETURN&DELIVERY</a>
                </div>`;
detail_info += `<div class="detail_photo">${dpt}</div>`;
$("#Detail").append(detail_info);

// $('detail_photo').

// 선택한 사이즈 값
// let options = [];
// $('input[name="size"]').on("change", function () {
//   let sizeValue = $(this).val();
//   // if (sizeValue) {
//   //   for (let i = 0; i < options.length; i++) {
//   //     if (options[i].color && !options[i].size) {
//   //       options[i].size = sizeValue;
//   //     }
//   //   }
//   // }
// });

// 선택한 color 값
// $('select[name="color"]').on("change", function () {
//   let colorValue = $(this).val();
//   if (colorValue) {
//     let flag = false;
//     options.forEach((value) => {
//       if (colorValue == value.color) {
//         flag = true;
//       }
//     });
//     if (!flag) {
//       options.push({ color: colorValue });
//       $(".selection .color").text(colorValue);
//     }
//   }
// });

// 선택된 상품 X 누르면 지우기
let a = $("#Detail .detail_info .prd_info .selection .sel_price a ");
a.on("click", function () {
  $("#Detail .detail_info .prd_info .selection").remove();
  return false;
});

// + 누르면
$("body").on("click", ".qty__plus", function () {
  quantity = $(this).prev().val();
  let myprice = price;
  if (quantity) {
    quantity = parseInt(quantity);
    $(this).prev().val(++quantity);
    total = quantity * myprice;
  } else {
    quantity = 1;
    $(this).next().val(quantity);
    total = quantity * myprice;
  }
  $(this)
    .parent()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  $(this)
    .parents()
    .find(".span")
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
});

// - 누르면
$("body").on("click", ".qty__minus", function () {
  quantity = parseInt($(this).next().val());
  let myprice = price;
  if (quantity > 1) {
    $(this).next().val(--quantity);
    total = quantity * myprice;
  } else {
    quantity = 1;
    $(this).next().val(quantity);
  }
  $(this)
    .parent()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  $(this)
    .parents()
    .find(".span")
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
});

// input 상자에 숫자를 직접 입력했을 때
$("body").on("keyup", ".qty__input", function () {
  let quantity = $(this).val();
  let myprice = price;
  if (quantity) {
    $(this).val(quantity);
    total = quantity * myprice;
  }
  $(this)
    .parent()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  $(this)
    .parents()
    .find(".span")
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
});

// 선택한 color 값
$('select[name="color"]').on("change", function () {
  let colorValue = $(this).val();
  $(".selection .color").text(colorValue);
});

// 선택한 size 값
$('input[name="size"]').on("change", function () {
  let sizeValue = $(this).val();
  $(".selection .size").text(sizeValue);
});

//
// if ($('select[name="color"]').val() && $('input[name="size"]').val()) {
//   $("#Detail .detail_info .prd_info .selection").addClass("on");
// }
