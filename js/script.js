$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    smartspeed:5000,
    fluidSpeed:2000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})