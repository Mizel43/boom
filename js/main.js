
(function () {

    // бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(event) {

        const burgerIcon = event.target.closest('.burger-icon')
        const burgerNavLink = event.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // модалка

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(event) {
        event.preventDefault()
        document.body.classList.toggle('body--openend-modal')
    }
    function closeModal(event) {
        event.preventDefault()
        const target = event.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--openend-modal')
        }
    }

    // табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(event) {
        const tabControl = event.target.closest('.tab-controls__link')


        if (!tabControl) return
        event.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-content--show')
        const activeContent = document.querySelector('.tab-controls__link--active')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeControl.classList.remove('tab-content--show')
        }

        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-controls__link--active')

        activeContent.classList.remove('tab-controls__link--active')
        activeControl.classList.remove('tab-content--show')


        // Аккордеон



        const accordionLists = document.querySelectorAll('.accordion-list');

        accordionLists.forEach(el => {

            el.addEventListener('click', (e) => {

                const accordionList = e.currentTarget
                const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
                const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

                const accordionControl = e.target.closest('.accordion-list__control');
                if (!accordionControl) return
                e.preventDefault()
                const accordionItem = accordionControl.parentElement;
                const accordionContent = accordionControl.nextElementSibling;

                if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                    accordionOpenedItem.classList.remove('accordion-list__item--opened');
                    accordionOpenedContent.style.maxHeight = null;
                }
                accordionItem.classList.toggle('accordion-list__item--opened');

                if (accordionItem.classList.contains('accordion-list__item--opened')) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                } else {
                    accordionContent.style.maxHeight = null;
                }

            });

        });
    }
    // cлайдер-галерея
    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 32,
        slidesPerView: 4,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            401: {
                slidesPerView: 2,
            },
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1001: {
                slidesPerView: 3,
            },
            1101: {
                slidesPerView: 4,
            }
        }

    });
    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        }
    });
    // Маска для телефона
    const telInputs = document.querySelectorAll('input[type="tel"]')

    const im = new Inputmask ('+7 (999) 999-99-99')
    im.mask(telInputs)
})()
