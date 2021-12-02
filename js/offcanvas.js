let offcanvasToggle = $('.header-offcanvas-toggle'),
    offcanvasContainer = $('.offcanvas-box');
    

function openOffcanvas() {
    offcanvasToggle.addClass('active');
    offcanvasContainer.slideDown('fast');
    showBg0();
}

function closeOffcanvas() {
    offcanvasToggle.removeClass('active');
    offcanvasContainer.slideUp('fast');
    hideBg0();
}

(function () {
    $(function () {
        offcanvasToggle.on('click', function(e) {
            let target = $(e.currentTarget);

            target.toggleClass('active');
            if(target.hasClass('active')) {
                openOffcanvas();
            } else {
                closeOffcanvas();
            }
        })
    });
})();
