let currentActive = $(".active").text().toLowerCase();

$(".occurence--item").click(function () {
  $(".active").toggleClass("active");
  $(this).toggleClass("active");

  $(`.${currentActive}`).hide();
  currentActive = $(".active").text().toLowerCase();
  $(`.${currentActive}`).css("display", "flex");
});
