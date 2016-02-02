$(function () {
    /*
    Carousel initialization
    */
    $('.jcarousel')
        .jcarousel({
            // Options go here
        });

    /*
     Prev control initialization
     */
    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            // Options go here
            target: '-=1'
        });

    /*
     Next control initialization
     */
    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            // Options go here
            target: '+=1'
        });
});

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 0
    })
});

$(document).ready(function () {
    resizeContent();

    $(window).resize(function () {
        resizeContent();
    });

	
	var vid = document.getElementById("video"); 
	function pauseVid() { 
		vid.pause(); 
	}
	$('#myModal').on('hidden.bs.modal', function () {		
		pauseVid();
	});



    function resizeContent() {
        $height = $(window).height();
        $width = $(window).width();
        $('body #content section').height($height);
        $('.first-content').css('bottom', $height);
        $('.first-content').css('left', $width / 7);
        $('.first-content, .second-content').css('width', $width / 4);
        $('.box-prev').css('right', $width / 5);
        $('.box-prev').css('margin-bottom', $height / 12);
        $('.jcarousel li').css('width', $width / 4);
        $('.cont-jcarousel').css('margin-left', $width / 5);
        $('.container-carousel').css('height', $height - 130);
       }

    $('#index').hide();
    $('#home').on('click', function () {
        $(this).hide(2000)
            .siblings('#index').show()
    });

    $("#navigation-menu a").mPageScroll2id({
        highlightSelector: "#navigation-menu a"
    });

    $("a[rel='next']").click(function (e) {
        e.preventDefault();
        var to = $(this).parent().parent().parent().parent("section").next().attr("id");
        $.mPageScroll2id("scrollTo", to);
    });
    $("a[rel='prev']").click(function (e) {
        e.preventDefault();
        var to = $(this).parent().parent("section").prev().attr("id");
        $.mPageScroll2id("scrollTo", to);
    });
});
