(function () {
    $(function () {
        $('#cart-checkout-delivery-month').select2({
            placeholder: "Мес.",
            width: '100%',
            dropdownAutoWidth : false,
            minimumResultsForSearch: Infinity
        });

        $('#cart-checkout-delivery-day').select2({
            placeholder: "День",
            width: '100%',
            dropdownAutoWidth : false,
            minimumResultsForSearch: Infinity
        });

        $('#cart-checkout-delivery-hour').select2({
            placeholder: "Время",
            width: '100%',
            dropdownAutoWidth : false,
            minimumResultsForSearch: Infinity
        });
    });
})();