if (window.screen.width > 767) {
    let servicesSwiper = new Swiper(".services__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".services-swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: true,
        },
        breakpoints: {
            1280: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });
}
let swiperSlides = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    watchSlidesProgress: true,
});
let swiperMenu = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    autoplay: {
        delay: 10000,
        disableOnInteraction: true,
    },
    thumbs: {
        swiper: swiperSlides,
    },
});
let customersSwiper = new Swiper(".customers__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".customers-swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 2,
        },
        768: {
            spaceBetween: 40,
            slidesPerView: 2,
        },
    },
});

const accordion = () => {
    const acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ?
                null :
                panel.scrollHeight + "px";
        });
    }
};
accordion();