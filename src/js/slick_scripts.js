$(document).ready(function() {

    $(".slider ").each(function() {
        size = $(this).children('.slider-inner').length;
        if (size > 3) {
            $(this).children('.slider-inner').slice(Math.round(size / 2), size).appendTo(".slider-2 ").closest();
        }
    });
    //Slick com atributo asNavFor se referindo a div complementar
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-2',
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        centerPadding: true,
    });
    //Transforma a Div que recebe os lides para um slick carousel
    $('.slider-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        centerPadding: true,
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav-2'
    });
    $('.slider-nav-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
    });
    $('#playVideo').on('click', function() {
        $('.iframeVideo').empty();
        $('<iframe>', {
            src: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com',
            id: 'myFrame',
            frameborder: 0,
            scrolling: 'no',
            height: '387px',
            width: '517px',
            allowfullscreen: 'yes'
        }).appendTo('.iframeVideo');
    });
    $('#showMap').on('click', function() {
        $('.iframeMaps').empty();
        $('<iframe>', {
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.351417400864!2d-46.55618108525105!3d-23.120826851355606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec0e00ed755dd%3A0x334bfe161fe7a706!2sACCT+%7C+ACUPULA+Consulting+%26+Technology!5e0!3m2!1spt-BR!2sbr!4v1559046387573!5m2!1spt-BR!2sbr',
            id: 'mapFrame',
            frameborder: 0,
            height: '400px',
            width: '100%',
            allowfullscreen: 'yes'
        }).appendTo('.iframeMaps');
    });
    $('#hideMap').click(function() {
        $('.iframeMaps').empty();
    })
});