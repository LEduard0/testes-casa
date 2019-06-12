$(document).ready(function() {
    $('.btn-menu-xs').click(function() {
        $('#menu-mobile').removeClass('hide-menu').show().toggleClass('show-menu');
    })
    $('.close-menu').click(function() {
        $('#menu-mobile').removeClass('show-menu').toggleClass('hide-menu').fadeOut(500);
    })
    $('#showFemei').click(function() {
        $(this).toggleClass('up');
        $('.submenu-box#femei').slideToggle().css('overflow', 'hidden');
    })
    $('#showBarbati').click(function() {
        $(this).toggleClass('up');
        $('.submenu-box#barbati').slideToggle().css('overflow', 'hidden');
    })
    $('#showCopii').click(function() {
        $(this).toggleClass('up');
        $('.submenu-box#copii').slideToggle().css('overflow', 'hidden');
    })
    $('#showCasa').click(function() {
        $(this).toggleClass('up');
        $('.submenu-box#casa').slideToggle().css('overflow', 'hidden');
    })
    $('#pesquisa').click(function() {
        $('.result-search').removeClass('hide-search').fadeIn().addClass('show-search');
    })
    $('#fechar').click(function() {
        $('.result-search').removeClass('show-search').fadeOut().addClass('hide-search');
    })
    $('#pesquisa-maior').click(function() {
        $('.btn-pesquisa').toggleClass('hover');
    })
    $('.fechar').click(function() {
        $('.btn-pesquisa').toggleClass('hover');
    })
    $('.fullbanner').slick({
        slidesToshow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    $('.slider-mobile').slick({
        slidesToshow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
})