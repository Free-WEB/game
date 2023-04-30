$(document).ready(function(){

    $('.page-nav a[href^="#"]').click(function () {
        let offset = 94;
        let id = $(this).attr('href');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(id).offset().top - offset
        }, 600);
        return false;
    });

    $(".prompt-ico").click(function () {
        let pop = $(this).next();
        if (pop.is(':visible')) {
            pop.hide();
        } else {
            $(".prompt-info").hide();
            pop.show();
        }
    });

    $(document).mouseup(function (e){
        let div = $(".game-store-prompt");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".prompt-info").hide();
        }
    });

    $(".screenshot-open-but").click(function () {
        $(".gallery-block").addClass("gallery-block-active");
        let popUpCont = $(".gallery-block-cont");
        popUpCont.css({marginTop:-popUpCont.height()/2});
    });

    $(".gallery-block-close").click(function () {
        $(".gallery-block").removeClass("gallery-block-active");
    });
    $(".gallery-block").click(function (e) {
        if (e.target !== this) return;
        $(this).removeClass("gallery-block-active");
    });

    if($('.flexslider').length > 0){
        $('#game-carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 162,
            itemMargin: 8,
            asNavFor: '#game-slider'
        });
        $('#game-slider').flexslider({
            animation: "fade",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            directionNav: false,
            sync: "#game-carousel"
        });
    }

    if($('.single-head-flexslider').length > 0){
        $('#single-head-carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 92,
            itemMargin: 12,
            asNavFor: '#single-head-slider'
        });
        $('#single-head-slider').flexslider({
            animation: "fade",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            directionNav: false,
            sync: "#single-head-carousel"
        });
    }

    if($('.game-screens-cont').length > 0){
        $('#game-screens-carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 140,
            itemMargin: 6,
            asNavFor: '#game-screens-slider'
        });
        $('#game-screens-slider').flexslider({
            animation: "fade",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            directionNav: false,
            sync: "#game-screens-carousel"
        });
    }

    let topBut = $(".to-top");

    window.addEventListener( "scroll", function() {
        if ($(window).scrollTop() > 400) {
            topBut.show();
        } else {
            topBut.hide();
        }
        let pageNavWrap = $('.page-nav-wrap');
        let pageNavBlock = $('.page-nav-block');
        if($(window).scrollTop() + 47 >= pageNavWrap.offset().top + 18){
            pageNavBlock.addClass('fix-page-nav');
        } else {
            pageNavBlock.removeClass('fix-page-nav');
        }
    });

    topBut.click(function () {
        $('html, body').animate( { scrollTop: 0 }, 600 );
    });

    $(".sel-item").click(function () {
        if(!$(this).hasClass("sel-item-active")){
            let parent = $(this).parents(".sel-block");
            parent.find(".sel-item").removeClass("sel-item-active");
            $(this).addClass("sel-item-active");
            parent.removeClass("sel-block-active");
        }
    });

    $(".sel-block").hover(
        function () {
            $(this).addClass("sel-block-active");
        },
        function () {
            $(this).removeClass("sel-block-active");
        }
    );

    $(".sidebar-check-all").click(function () {
        if($(this).hasClass("sidebar-check-all-active")){
            $(this).removeClass("sidebar-check-all-active");
            $(this).parent().find("input[type='checkbox']").prop("checked", false);
        } else {
            $(this).addClass("sidebar-check-all-active");
            $(this).parent().find("input[type='checkbox']").prop("checked", true);
        }
    });

    $(".sidebar-checkbox input[type='checkbox']").change(function () {
        let parent = $(this).parents(".sidebar-block-cont");
        let allBut = parent.find(".sidebar-check-all");
        let count = parent.find("input[type='checkbox']").length;
        let checkCount = parent.find("input[type='checkbox']:checked").length;
        if(count === checkCount){
            allBut.addClass("sidebar-check-all-active");
        } else {
            allBut.removeClass("sidebar-check-all-active");
        }
    });

    $(".sidebar-block-active .sidebar-block-cont").each(function () {
        $(this).show();
    });

    $(".sidebar-block-h").click(function () {
        let parent = $(this).parents(".sidebar-block");
        if(parent.hasClass("sidebar-block-active")){
            parent.removeClass("sidebar-block-active");
            parent.find(".sidebar-block-cont").slideUp(300);
        } else {
            parent.addClass("sidebar-block-active");
            parent.find(".sidebar-block-cont").slideDown(300);
        }
    });

    let searchField = $(".main-search");

    searchField.keyup(function () {
        if($(this).val().length > 0){
            $(".main-search-reset, .search-form-result").show();
        } else {
            $(".main-search-reset, .search-form-result").hide();
        }
    });

    searchField.focus(function () {
        if($(this).val().length > 0){
            $(".search-form-result").show();
        }
    });

    $(document).mouseup(function (e){
        let div = $(".main-search-form");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".search-form-result").hide();
        }
    });

    $(".main-search-reset").click(function () {
        $(".main-search-reset, .search-form-result").hide();
    });

    $(".hide-checkbox input").change(function () {
        if($(this).prop("checked") === true){
            $(this).prop("checked", false);
            $(this).parents(".main-val-item").find(".hide-game-pop-up").fadeIn(300);
        }
    });

    $(".hide-game-pop-qw").click(function () {
        let parent = $(this).parents(".main-val-item");
        parent.find(".hide-game-pop-up").fadeOut(300);
        parent.find(".hide-checkbox input").prop("checked", true);
    });

    $(".hide-game-pop-close, .no-hide-pop-close").click(function () {
        let parent = $(this).parents(".main-val-item");
        parent.find(".hide-game-pop-up").fadeOut(300);
    });

    $(".stock-code-copy").click(function () {
        let promo = $(this).attr("data-promo");
        navigator.clipboard.writeText(promo);
    });

    $(".mob-ban-close").click(function () {
        $(".mob-ban-block").hide();
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $(".mob-ban-block").show();
    }

    $(".blog-side-item").click(function () {
        if(!$(this).hasClass("blog-side-item-active")){
            let id = "#page-cont-" + $(this).attr("data-page");
            $(".blog-side-item").removeClass("blog-side-item-active");
            $(this).addClass("blog-side-item-active");
            $(".blog-cont .page-cont").removeClass("page-cont-active");
            $(id).addClass("page-cont-active");
        }
    });

    let rateSetBlockElems = $(".rate-set-block span");

    rateSetBlockElems.hover(
        function () {
            if($(".rate-set-block .selected-star").length > 0)
                return;
            let indexEl = rateSetBlockElems.index($(this));
            rateSetBlockElems.each(function() {
                if($(".rate-set-block span").index($(this)) <= indexEl){
                    $(this).addClass('fill-star');
                }
            });
        },
        function () {
            if($(".rate-set-block .selected-star").length > 0)
                return;
            $(".rate-set-block span").each(function() {
                $(this).removeClass('fill-star');
            });
        }
    );
    rateSetBlockElems.click(function () {
        let indexEl = rateSetBlockElems.index($(this));
        rateSetBlockElems.each(function() {
            if($(".rate-set-block span").index($(this)) <= indexEl){
                $(this).addClass('fill-star');
            } else {
                $(this).removeClass('fill-star');
            }
            $(this).removeClass('selected-star');
        });
        $(this).addClass('selected-star');
    });

    $('.review-pop-up-value').keyup(function () {
        $('.review-field-counter span').text($(this).val().length);
    });

    function openPopUp(id){
        $(id).fadeIn(300);
        $('#shadow').fadeIn(300);
    }
    function changePopUp(id1, id2){
        $(id1).fadeOut(300);
        $(id2).fadeIn(300);
    }
    $('#shadow, .pop-up-close, .review-set-but, .review-cancel-but').click(function () {
        $('#shadow, .pop-up').fadeOut(300);
    });

    $('.rate-but').click(function () {
        openPopUp("#rate-pop-up");
    });

    $('.rate-set-but').click(function () {
        changePopUp("#rate-pop-up", "#review-pop-up");
    });

    $('.content-desc-more').click(function () {
        $(this).next().removeClass('content-desc-hide');
        $(this).remove();
    });

});