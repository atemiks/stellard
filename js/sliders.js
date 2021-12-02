(function () {
    $(function () {
        $('.swiper-news').each(function (_, container) {
            let jContainer = $(container);
            new Swiper(jContainer, {
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 1,

                navigation: {
                    nextEl: jContainer.find('.swiper-news-button-next'),
                    prevEl: jContainer.find('.swiper-news-button-prev'),
                }
            });
        });

        $('.section-portfolio').each(function (_, container) {
            let jContainer = $(container),
                sliderContainer = jContainer.find('.swiper-portfolio'),
                prev = jContainer.find('.swiper-porfolio-button-prev'),
                next = jContainer.find('.swiper-porfolio-button-next'),
                pagination = jContainer.find('.swiper-porfolio-pagination');

            new Swiper(sliderContainer, {
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 1,
                breakpointsInverse: true,
                breakpoints: {
                    // when window width is >= 750px
                    750: {
                        slidesPerView: 2,
                        loop: true,
                        loopAdditionalSlides: 1,
                    },
                    // when window width is >= 970px
                    970: {
                        slidesPerView: 'auto',
                        loop: true,
                        loopAdditionalSlides: 1,
                    }
                },

                pagination: {
                    el: pagination,
                    type: 'fraction',
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' +
                                ' из ' +
                                '<span class="' + totalClass + '"></span>';
                    },
                },


                navigation: {
                    nextEl: next,
                    prevEl: prev,
                }
            });
        });
    });
})();

