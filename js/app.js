const filter_btns = document.querySelectorAll(".filter-btn");

let filterValue = ".pizza-app";
$('.grid').isotope({ filter: filterValue});

filter_btns.forEach( btn => btn.addEventListener("click", () =>{
    filter_btns.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");

    filterValue = btn.dataset.filter;
    $('.grid').isotope({ filter: filterValue});
}))

$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transistionDuration: "0.6s",
  });