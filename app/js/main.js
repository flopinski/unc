$(function(){
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

  
  
});