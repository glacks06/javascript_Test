$('#jquery_slide .jquery_slick').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
});

// swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 3,
    spaceBetween: 10
})