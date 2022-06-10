$(function () {

  $(".thumb-1").on("click", function () {
    $(".gallery__img").attr("src", "").hide();
    $(".gallery__img").attr("src", "../images/tools/1.jpg").show();
  })

  $(".thumb-2").on("click", function () {
    $(".gallery__img").attr("src", "").hide();
    $(".gallery__img").attr("src", "../images/tools/2.jpg").show();
  });

  $(".thumb-3").on("click", function () {
    $(".gallery__img").attr("src", "").hide();
    $(".gallery__img").attr("src", "../images/tools/3.jpg").show();
  });

  $(".thumb-4").on("click", function () {
    $(".gallery__img").attr("src", "").hide();
    $(".gallery__img").attr("src", "../images/tools/4.jpg").show();
  });

  $(".thumb-5").on("click", function () {
    $(".gallery__img").attr("src", "").hide();
    $(".gallery__img").attr("src", "../images/tools/5.jpg").show();
  });
  
  $(".gallery__thumbnails").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });


  $(".reviews-video__items").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
  });
  
  $(".star").rateYo({
    starWidth: "22px",
    readOnly: true,
  });

  $(".reviews__items").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
  });

  $(".price__menu-service").on("click", function () {
    $(".price__menu-service").removeClass("price__menu-service--active");
    $(this).toggleClass("price__menu-service--active");
  });

  $(".price__menu-service--1").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-1").toggleClass("price__list--active");
  });

  $(".price__menu-service--2").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-2").toggleClass("price__list--active");
  });

  $(".price__menu-service--3").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-3").toggleClass("price__list--active");
  });

  $(".price__menu-service--4").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-4").toggleClass("price__list--active");
  });

  $(".price__menu-service--5").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-5").toggleClass("price__list--active");
  });

  $(".price__menu-service--6").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-6").toggleClass("price__list--active");
  });

  $(".price__menu-service--7").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-7").toggleClass("price__list--active");
  });

  $(".price__menu-service--8").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-8").toggleClass("price__list--active");
  });

  $(".price__menu-service--9").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-9").toggleClass("price__list--active");
  });

  $(".price__menu-service--10").on("click", function () {
    $(".price__list").removeClass("price__list--active");
    $(".price__list-10").toggleClass("price__list--active");
  });

  mediumZoom(".zoom", {
    margin: 50,
    background: "#eff9f9",
  });

  $(".certificates__items").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
  });

  $(".tools__items").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
  });
});
