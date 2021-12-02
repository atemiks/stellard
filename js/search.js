let headerSearchToggle = $('.header-search-toggle'),
    headerSearchClose = $('.header-search-close'),
    headerSearchContainer = $('.header-search-box'),
    headerSearchInput = headerSearchContainer.find('input[type="search"]');

function openHeaderSearch() {
    headerSearchContainer.slideDown('fast');
    headerSearchInput.focus();
    showBg0();
}

function closeHeaderSearch() {
    headerSearchContainer.slideUp('fast');
    hideBg0();
}

(function () {
    $(function () {
        headerSearchToggle.on('click', function(e) {
            e.preventDefault();
            openHeaderSearch();
        });

        headerSearchClose.on('click', function(e) {
            e.preventDefault();
            closeHeaderSearch();
        });

        headerSearchInput.on('keydown', function (e) {
            if (e.keyCode == 27) {
                e.preventDefault();
                headerSearchInput.val('');
                closeHeaderSearch();
            }
        });
    });
})();
