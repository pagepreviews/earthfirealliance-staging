document.addEventListener('DOMContentLoaded', () => {

    //locomotive
    let locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            // prevent: (node) => node.getAttribute("id") === "modalSelector",
            // prevent: (node) => node.closest('.product-modal') !== null,
        },
    });

    //select
    document.querySelectorAll('select').forEach(select => {
        const updateWidth = () => {
            const length = select.options[select.selectedIndex].text.length;
            select.style.width = `${length * 9 + 44}px`;
        };
        updateWidth();
        select.addEventListener('change', updateWidth);
    });

    //header
    const header = document.querySelector('.header-site');

    let lastScroll = window.pageYOffset;
    let ticking = false;

    const threshold = 10;

    function updateHeader() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('header-hidden');
        } else if (currentScroll > lastScroll + threshold) {
            header.classList.add('header-hidden');
        } else if (currentScroll < lastScroll - threshold) {
            header.classList.remove('header-hidden');
        }

        lastScroll = currentScroll;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener('resize', updateHeader);

    updateHeader();

    // SplitType + Animation
    document.fonts.ready.then(() => {
        document.querySelectorAll('.text-animated').forEach((element) => {
            let split;
            let resizeFrame;

            // Prevent showing text before initialization
            element.classList.add('text-initialized');

            split = new SplitType(element, {
                types: 'lines, words',
                lineClass: 'line',
            });

            // Start observing only after splitting
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(() => {
                            element.classList.add('text-visible');
                        });

                        observer.unobserve(element);
                    }
                });
            }, {
                threshold: 0.2,
                rootMargin: '0px 0px -20% 0px',
            });

            observer.observe(element);

            // Re-split on resize
            const resizeObserver = new ResizeObserver(() => {
                cancelAnimationFrame(resizeFrame);

                resizeFrame = requestAnimationFrame(() => {
                    split.revert();

                    split = new SplitType(element, {
                        types: 'lines, words',
                        lineClass: 'line',
                    });
                });
            });

            resizeObserver.observe(element);
        });
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

    //events
    const eventsSwiper = new Swiper('.events-slider', {
        navigation: {
            nextEl: '.events-next',
            prevEl: '.events-prev',
        },
        spaceBetween: 24,
        speed: 600,
        slidesPerView: 'auto',
        breakpoints: {
            768: {
                spaceBetween: 16,
                slidesPerView: 'auto',
            },
            1040: {
                slidesPerView: 3,
            },
        }
    });

    //fancybox
    Fancybox.bind('[data-fancybox]', {
        zoomEffect: false,
        Carousel: {
            Thumbs: false,
            Toolbar: {
                display: {
                    left: [],
                    middle: [],
                    right: ["close"],
                },
            }
        },
        on: {
            ready: () => {
                locomotiveScroll.destroy();
            },
            close: () => {
                locomotiveScroll = new LocomotiveScroll({});
            }
        }
    });

    // let resizeTimer;

    // window.addEventListener('resize', () => {
    //     clearTimeout(resizeTimer);
    //     resizeTimer = setTimeout(() => {
    //         locomotiveScroll.resize?.();
    //     }, 200);
    // });

    //participants
    const participantsNavigationSwiper = new Swiper('.participants-navigation', {
        speed: 600,
        spaceBetween: 52,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
    });

    const participantsSwiper = new Swiper('.participants-main', {
        navigation: {
            nextEl: '.participants-next',
            prevEl: '.participants-prev',
        },
        speed: 600,
        spaceBetween: 40,
        slidesPerView: 'auto',
        rewind: true,
        autoplay: {
            delay: 3000,
        },
    });

    document.querySelectorAll('.participants').forEach((section) => {
        const buttons = section.querySelectorAll('.participants-navigation button');
        const tabs = section.querySelectorAll('.participants-main-tab');
        if (!buttons.length || !tabs.length) return;
        const activateTab = (index) => {
            buttons.forEach((button, i) => {
                button.classList.toggle('active', i === index);
            });
            tabs.forEach((tab, i) => {
                tab.classList.toggle('active', i === index);
            });
        };
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (index < tabs.length) {
                    activateTab(index);
                }
            });
        });
    });

    //text-and-image-slider
    const textAndImageSwiper = new Swiper('.text-and-image-slider', {
        navigation: {
            nextEl: '.text-and-image-next',
            prevEl: '.text-and-image-prev',
        },
        speed: 600,
        spaceBetween: 4,
        slidesPerView: 'auto',
    });

    const allianceSwiper = new Swiper('.alliance-slider', {
        speed: 600,
        spaceBetween: 56,
        slidesPerView: 'auto',
        rewind: true,
        // autoplay: {
        //     delay: 3000,
        // },
    });

    document.querySelectorAll('.alliances').forEach((section) => {
        const buttons = section.querySelectorAll('.alliances-sidebar-navigation button');
        const tabs = section.querySelectorAll('.alliances-tab');
        if (!buttons.length || !tabs.length) return;
        const activateTab = (index) => {
            buttons.forEach((button, i) => {
                button.classList.toggle('active', i === index);
            });
            tabs.forEach((tab, i) => {
                tab.classList.toggle('active', i === index);
            });
        };
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (index < tabs.length) {
                    activateTab(index);
                }
            });
        });
    });

    //roadmap
    (function () {
        'use strict';
        const VISIBLE_CLASS = 'is-visible';
        const ACTIVE_CLASS = 'is-active';
        const CLOSING_CLASS = 'is-closing';
        const HIDE_DELAY = 500;
        const GAP = 16;
        const showEl = (el) => {
            clearTimeout(el._hideTimer);
            el.classList.remove(CLOSING_CLASS);
            el.classList.add(VISIBLE_CLASS);
            void el.offsetWidth;
            el.classList.add(ACTIVE_CLASS);
        };
        const hideEl = (el, onHidden) => {
            clearTimeout(el._hideTimer);
            el.classList.remove(ACTIVE_CLASS);
            el.classList.add(CLOSING_CLASS);
            el._hideTimer = setTimeout(() => {
                el.classList.remove(VISIBLE_CLASS, CLOSING_CLASS);
                if (onHidden) onHidden();
            }, HIDE_DELAY);
        };
        const initRoadmap = () => {
            let roadmap = document.querySelector('.roadmap');
            if (!roadmap) return;
            let mask = roadmap.querySelector('.roadmap-modal-mask');
            let openedModal = null;
            let raf;
            const resetPosition = (modal) => {
                modal.style.left = '';
                modal.style.maxWidth = '';
            };
            const position = (modal) => {
                resetPosition(modal);
                let vw = document.documentElement.clientWidth;
                if (modal.offsetWidth > vw - GAP * 2) modal.style.maxWidth = (vw - GAP * 2) + 'px';
                let rect = modal.getBoundingClientRect();
                let currentLeft = parseFloat(getComputedStyle(modal).left) || 0;
                let maxX = Math.max(GAP, vw - GAP - rect.width);
                let delta = Math.min(Math.max(rect.left, GAP), maxX) - rect.left;
                if (Math.abs(delta) > 0.5) modal.style.left = (currentLeft + delta) + 'px';
            };
            const open = (modal) => {
                if (openedModal && openedModal !== modal) close(true);
                clearTimeout(modal._hideTimer);
                modal.classList.remove(CLOSING_CLASS);
                modal.classList.add(VISIBLE_CLASS);
                position(modal);
                void modal.offsetWidth;
                modal.classList.add(ACTIVE_CLASS);
                if (mask) showEl(mask);
                openedModal = modal;
            };
            const close = (keepMask) => {
                if (openedModal) {
                    let modal = openedModal;
                    openedModal = null;
                    hideEl(modal, () => {
                        if (!modal.classList.contains(ACTIVE_CLASS)) resetPosition(modal);
                    });
                }
                if (mask && !keepMask) hideEl(mask);
            };
            roadmap.addEventListener('click', (e) => {
                let toggle = e.target.closest('.roadmap-item-toggle');
                if (toggle && roadmap.contains(toggle)) {
                    e.preventDefault();
                    let item = toggle.closest('.roadmap-item');
                    let modal = item ? item.querySelector('.roadmap-modal') : null;
                    if (!modal) return;
                    if (modal === openedModal) close();
                    else open(modal);
                    return;
                }
                if (e.target.closest('.roadmap-modal-close')) {
                    e.preventDefault();
                    close();
                    return;
                }
                if (e.target.closest('.roadmap-modal-mask')) close();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && openedModal) close();
            });
            const onResize = () => {
                if (!openedModal) return;
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(() => {
                    if (openedModal) position(openedModal);
                });
            };
            window.addEventListener('resize', onResize);
            window.addEventListener('orientationchange', onResize);
        };
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initRoadmap);
        else initRoadmap();
    })();

}); //DOMContentLoaded

