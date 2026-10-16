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

        var VISIBLE_CLASS = 'is-visible';
        var ACTIVE_CLASS = 'is-active';
        var GAP = 16;
        function getTransitionTime(el) {
            var cs = getComputedStyle(el);
            function parse(str) {
                return str.split(',').map(function (s) {
                    s = s.trim();
                    return s.indexOf('ms') > -1 ? parseFloat(s) : parseFloat(s) * 1000;
                });
            }
            var durations = parse(cs.transitionDuration);
            var delays = parse(cs.transitionDelay);
            var max = 0;
            durations.forEach(function (d, i) {
                var total = (d || 0) + (delays[i % delays.length] || 0);
                if (total > max) max = total;
            });
            return max;
        }
        function showEl(el) {
            clearTimeout(el._hideTimer);
            el.classList.add(VISIBLE_CLASS);
            void el.offsetWidth;
            el.classList.add(ACTIVE_CLASS);
        }
        function hideEl(el, onHidden) {
            clearTimeout(el._hideTimer);
            el.classList.remove(ACTIVE_CLASS);

            var time = getTransitionTime(el);
            function done() {
                clearTimeout(el._hideTimer);
                el.removeEventListener('transitionend', onEnd);
                el.classList.remove(VISIBLE_CLASS);
                if (onHidden) onHidden();
            }
            function onEnd(e) {
                if (e.target === el) done();
            }

            if (!time) {
                done();
                return;
            }
            el.addEventListener('transitionend', onEnd);
            el._hideTimer = setTimeout(done, time + 50);
        }

        function initRoadmap() {
            var roadmap = document.querySelector('.roadmap');
            if (!roadmap) return;

            var mask = roadmap.querySelector('.roadmap-modal-mask');
            var openedModal = null;

            function resetPosition(modal) {
                modal.style.left = '';
                modal.style.maxWidth = '';
            }
            function position(modal) {
                resetPosition(modal);

                var vw = document.documentElement.clientWidth;
                var available = vw - GAP * 2;

                if (modal.offsetWidth > available) {
                    modal.style.maxWidth = available + 'px';
                }

                var rect = modal.getBoundingClientRect();
                var currentLeft = parseFloat(getComputedStyle(modal).left) || 0;

                var minX = GAP;
                var maxX = Math.max(GAP, vw - GAP - rect.width);
                var targetX = Math.min(Math.max(rect.left, minX), maxX);

                var delta = targetX - rect.left;
                if (Math.abs(delta) > 0.5) {
                    modal.style.left = (currentLeft + delta) + 'px';
                }
            }

            function open(modal) {
                if (openedModal && openedModal !== modal) close(true);
                clearTimeout(modal._hideTimer);
                modal.classList.add(VISIBLE_CLASS);
                position(modal);
                void modal.offsetWidth;
                modal.classList.add(ACTIVE_CLASS);

                if (mask) showEl(mask);
                openedModal = modal;
            }

            function close(keepMask) {
                if (openedModal) {
                    var modal = openedModal;
                    openedModal = null;
                    hideEl(modal, function () {
                        if (!modal.classList.contains(ACTIVE_CLASS)) resetPosition(modal);
                    });
                }
                if (mask && !keepMask) hideEl(mask);
            }

            roadmap.addEventListener('click', function (e) {
                var toggle = e.target.closest('.roadmap-item-toggle');
                if (toggle && roadmap.contains(toggle)) {
                    e.preventDefault();
                    var item = toggle.closest('.roadmap-item');
                    var modal = item ? item.querySelector('.roadmap-modal') : null;
                    if (!modal) return;

                    if (modal === openedModal) {
                        close();
                    } else {
                        open(modal);
                    }
                    return;
                }

                if (e.target.closest('.roadmap-modal-close')) {
                    e.preventDefault();
                    close();
                    return;
                }

                if (e.target.closest('.roadmap-modal-mask')) {
                    close();
                }
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && openedModal) close();
            });

            var raf;
            function onResize() {
                if (!openedModal) return;
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(function () {
                    if (openedModal) position(openedModal);
                });
            }
            window.addEventListener('resize', onResize);
            window.addEventListener('orientationchange', onResize);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initRoadmap);
        } else {
            initRoadmap();
        }
    })();

}); //DOMContentLoaded

