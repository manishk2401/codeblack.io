$(document).ready(function(){

//Owl Team
$('.team-center').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed: 4000,
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

//customer

$('.customer-center').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed: 2000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1150:{
            items:3
        }
    }
})



})