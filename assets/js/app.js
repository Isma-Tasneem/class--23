$(function () {
// search side bar start
    $('#search1').on('click', ()=>{
      $('#search').addClass('show');
    })
    $('#search_close_btn').on('click', ()=>{
        $('#search').removeClass('show');
      })
      
// search side bar end
// Hero Slider Activation Js Start 
 $(".hero_slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    speed: 600,
    dots: true,
    dotsClass: "hero_slider_dots",
});
// Hero Slider Activation Js End 
$("#deals_timer").countdown("2023/12/12", function (event) {
    var $this = $(this).html(
        event.strftime(
            "" +
                "<div><h4>%D</h4> <p>Days</p></div> " +
                "<span>:</span>"+
                "<div><h4>%H</h4> <p>Hour</p></div> " +
                "<span>:</span>"+
                "<div><h4>%M</h4> <p>Minute</p></div> " +
                "<span>:</span>"+
                "<div><h4>%S</h4> <p>sec</p></div>"
        )
    );
});












    
});
