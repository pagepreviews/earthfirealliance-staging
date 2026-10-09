document.addEventListener('DOMContentLoaded', () => {

    //locomotive
    let locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            // prevent: (node) => node.getAttribute("id") === "modalSelector",
            // prevent: (node) => node.closest('.product-modal') !== null,
        },
    });

    //empty links
    document.addEventListener('click', (event) => {
        if (event.target.matches('a[href="#"]')) {
            event.preventDefault();
        }
    }, false);

    //navigation
    const navigationToggle = document.querySelector('.navigation-toggle');
    const body = document.querySelector('body');
    if (navigationToggle) {
        navigationToggle.addEventListener('click', (event) => {
            event.preventDefault();
            body.classList.toggle('navigation-open');
        });
    }

    //latest news
    const latestNewsSwiper = new Swiper('.latest-news-swiper', {
        navigation: {
            nextEl: '.latest-news-next',
            prevEl: '.latest-news-prev',
        },
        speed: 600,
        spaceBetween: 8,
        slidesPerView: 'auto',
        breakpoints: {
            768: {
                spaceBetween: 16,
            },
        }
    });

    //testimonials
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        navigation: {
            nextEl: '.testimonials-next',
            prevEl: '.testimonials-prev',
        },
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        autoHeight: true,
    });

    //hero
    const heroSwiper = new Swiper('.hero-slider', {
        direction: 'vertical',
        loop: true,
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
            reverseDirection: true,
            disableOnInteraction: false,
        },
    });

    //challenge
    const challengeSwiper = new Swiper('.challenge-slider', {
        navigation: {
            nextEl: '.challenge-next',
            prevEl: '.challenge-prev',
        },
        speed: 600,
        spaceBetween: 4,
        slidesPerView: 'auto',
    });

    //partners
    const partnersSwiper = new Swiper('.partners-swiper', {
        speed: 6000,
        spaceBetween: 8,
        slidesPerView: 'auto',
        centerInsufficientSlides: true,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                spaceBetween: 3,
                slidesPerView: 5,
            },
            1040: {
                spaceBetween: 42,
                slidesPerView: 5,
            },
        }
    });

    //mission
    const missionSwiper = new Swiper('.mission-slider', {
        navigation: {
            nextEl: '.mission-next',
            prevEl: '.mission-prev',
        },
        speed: 600,
        spaceBetween: 16,
        slidesPerView: 'auto',
    });

    //footer label
    document.addEventListener('focusin', (e) => {
        if (!e.target.matches('.css-1ub0j67 .css-1tm5jv9')) return;
        e.target.closest('.css-1ub0j67')?.classList.add('is-active');
    });

    document.addEventListener('focusout', (e) => {
        if (!e.target.matches('.css-1ub0j67 .css-1tm5jv9')) return;
        const field = e.target.closest('.css-1ub0j67');
        field?.classList.toggle(
            'is-active',
            e.target.value.trim() !== ''
        );
    });

    //data products
    const dataProductsSwiper = new Swiper('.data-products-swiper', {
        navigation: {
            nextEl: '.data-products-next',
            prevEl: '.data-products-prev',
        },
        speed: 600,
        spaceBetween: 8,
        slidesPerView: 'auto',
        breakpoints: {
            768: {
                spaceBetween: 10,
            },
        }
    });

    //info in numbers
    const infoInNumbersSwiper = new Swiper('.info-in-numbers-swiper', {
        navigation: {
            nextEl: '.info-in-numbers-next',
            prevEl: '.info-in-numbers-prev',
        },
        speed: 600,
        spaceBetween: 4,
        slidesPerView: 'auto',
    });

}); //DOMContentLoaded

