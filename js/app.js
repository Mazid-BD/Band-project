// carousel
$('.review-area .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// branding carousel
$('.brand-area .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})