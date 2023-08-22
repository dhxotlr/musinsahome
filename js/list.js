// //상품리스트
function usedata(mcate) {
  let newdata = data.filter((value) => value.mcategory == mcate);
  console.log(newdata);
  let ulli = `<ul>`;
  newdata.forEach((value) => {
    ulli += `<li>`;
    ulli += `<a href="../html/detail.html">`;
    ulli += `<img src="/img/json/man_top/${value.image}" alt="${value.name}" >`;
    ulli += `<div class="info">`;
    ulli += `<p class="brand">${value.brand}</p>`;
    ulli += `<p class="name">${value.name}</p>`;
    ulli += `<p class="price">${value.price}</p>`;
    ulli += `</div></a></li>`;
  });
  ulli += `</ul>`;
  $(".list").html(ulli);
}

function usedata(mcate) {
  let ulli = `<ul>`;
  if (mcate == "전체") {
    data.forEach((value) => {
      ulli += `<li>`;
      ulli += `<a href="../html/detail.html">`;
      ulli += `<img src="../img/json/${value.image}" alt="${value.name}" >`;
      ulli += `<div class="info">`;
      ulli += `<p class="brand">${value.brand}</p>`;
      ulli += `<p class="name">${value.name}</p>`;
      ulli += `<p class="price">${value.price}</p>`;
      ulli += `</div></a></li>`;
    });
  } else {
    let newdata = data.filter((value) => value.mcategory == mcate);
    newdata.forEach((value) => {
      ulli += `<li>`;
      ulli += `<a href="../html/detail.html">`;
      ulli += `<img src="/img/json/${value.image}" alt="${value.name}" >`;
      ulli += `<div class="info">`;
      ulli += `<p class="brand">${value.brand}</p>`;
      ulli += `<p class="name">${value.name}</p>`;
      ulli += `<p class="price">${value.price}</p>`;
      ulli += `</div></a></li>`;
    });
  }
  ulli += `</ul>`;
  $(".list").html(ulli);
}

$("#List .title .subcate li").on("click", function () {
  $(this).addClass("on").siblings().removeClass("on");
  let text = $(this).text();
  usedata(text);
});
$('#join form').on('submit',function(e){
  // $('#join form input').forEach(function(){})
  e.preventDefault()
  })