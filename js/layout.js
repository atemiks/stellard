let headerContainer = $('.header-box'),
    bg0 = $('.bgs-overlay');

function fixedHeader() {
    let windowOffset = $(window).scrollTop();

    if(windowOffset > 0) {
        headerContainer.addClass('is-sticky');
    } else {
        headerContainer.removeClass('is-sticky');
    }
}

function showBg0() {
    bg0.addClass('is-visible');
}

function hideBg0() {
    bg0.removeClass('is-visible');
}

(function () {
    $(function () {
        // header
        fixedHeader();

        // custom choose
        $('.form-choose').on('click', function(e) {
            let target = $(e.currentTarget),
                container = target.closest('.form-choose-group'),
                elements = container.find('.form-choose');

            elements.removeClass('active');
            target.addClass('active');
        })

        // custom input
        //Закоментировал, так как ранее перенёс и прикрутил(а также доработал под наши нужды) это дело в cart.js
        /*$(".custom-number-control .custom-number-button").on("click", function(e) {
            let target = $(e.currentTarget),
                container = target.closest('.custom-number-control'),
                input = container.find("input"),
                inputData = input.data('type'),
                oldValue = parseFloat(input.val()),
                newValue = undefined;

            if (target.hasClass('inc')) {
                newValue = oldValue + 1;
            } else {
                if (oldValue > 0) {
                    newValue = oldValue - 1;
                } else {
                    newValue = 0;
                }
            }

            input.val(newValue + ' ' + inputData);
        });*/

        // custom select
        $('.custom-select').select2({
            width: '100%',
            dropdownAutoWidth: false,
            minimumResultsForSearch: Infinity
        });

        $('.custom-select-link').select2({
            width: 'auto',
            dropdownAutoWidth : true,
            minimumResultsForSearch: Infinity
        });

        // tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // fancybox
        $("[data-fancybox]").fancybox({
            buttons: [
                "close"
            ],
        });

        // add smooth scrolling to all links
        $(".anchor-link").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                let hash = this.hash,
                    headerHeight = headerContainer.outerHeight();

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - headerHeight - 50
                }, 300, function() {
                    window.location.hash = hash;
                    console.log($(hash).offset().top);
                    console.log($(hash).offset().top - headerHeight - 50);
                });
            }
        });

        // close everything by click bg0
        bg0.on('click', function(e) {
            e.preventDefault();

            closeHeaderSearch();
            closeOffcanvas();
            closeFilter();
        })
    });

    $(window).on('scroll', function() {
        fixedHeader();
    })
})();
