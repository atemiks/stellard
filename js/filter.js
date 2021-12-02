let filterContainer = $('.filter-box'),
    filterDesktopWrapper = $('.js-filter-desktop-container'),
    filterMobileWrapper = $('.js-filter-mobile-container'),
    filterToggle = $('.filter-toggle');

function filterMobileLayout() {
    $(filterContainer).appendTo(filterMobileWrapper);
}

function filterDesktopLayout() {
    $(filterContainer).appendTo(filterDesktopWrapper);
}

function openFilter() {
    filterToggle.addClass('active');
    filterContainer.slideDown('fast');
    showBg0();
}

function closeFilter() {
    filterToggle.removeClass('active');
    filterContainer.slideUp('fast');
    hideBg0();
}

(function () {
    $(function () {
        if(filterContainer.length !== 1) {
            return;
        }

        filterToggle.on('click', function(e) {
            let target = $(e.currentTarget);

            target.toggleClass('active');
            if(target.hasClass('active')) {
                openFilter();
            } else {
                closeFilter();
            }
        })

        if(windowSizeHelper.isMobile()) {
            filterMobileLayout();
        }
        
        beforeWindowWidthResizeFunctions.push(function () {
            if (windowSizeHelper.isDesktopToMobileResize()) {
                filterMobileLayout();
            }

            if (windowSizeHelper.isMobileToDesktopResize()) {
                filterDesktopLayout();
            }
        });
    });
})();