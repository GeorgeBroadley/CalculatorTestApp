$('document').ready(function(e) {
    $('.btn').on('click', function(e) {
        if ($(this)[0]['textContent'] === "=") {
            $('.display')[0]['textContent'] = parseFloat(eval($('.display')[0]['textContent']).toFixed(10));
        } else if ($(this)[0]['textContent'] === "CLR") {
            $('.display')[0]['textContent'] = "";
        } else {
            $('.display')[0]['textContent'] += $(this)[0]['textContent'];
        }
    });
});