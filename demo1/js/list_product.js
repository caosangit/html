$(document).ready(function(){
	$("#product_orther").slick({ 
		dots: false,
		infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 4,
	    autoplay: false,
	    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>',
		responsive: [
		    {
		      breakpoint: 1201,
		      settings: {
		      		slidesToShow: 3,
	    			slidesToScroll: 3,
		      	}
		    },
		    {
		      breakpoint: 481,
		      settings: {
		      		slidesToShow: 2,
	    			slidesToScroll: 2,
		      	}
		    },
		    ,
		    {
		      breakpoint: 361,
		      settings: {
		      		slidesToShow: 1,
	    			slidesToScroll: 1,
		      	}
		    }
	    ]
	});
});
$(document).ready(function() {
	$(".findbyname_title_mobie").click(function(){
		if (window.innerWidth < 900 ){
			if($(".mainLeft_cate").hasClass('show')){
				$(".mainLeft_cate").fadeOut(500);
				$(".mainLeft_cate").removeClass('show');
			}else{
				$(".mainLeft_cate").fadeIn(500);
				$(".mainLeft_cate").addClass('show');
			}
		}
	});

	$(window).resize(function(){
        if( window.innerWidth > 900){
             $(".mainLeft_cate").css({display:"block"});
             $(".mainLeft_search_checkbox").css({display:"block"});
        }
        if( window.innerWidth <= 900){
            $(".mainLeft_cate").css({display:"none"});
            $(".mainLeft_search_checkbox").css({display:"none"});
        }
    });
});

$(document).ready(function() {
	$(".mainLeft_search input").focus(function(){
		if (window.innerWidth < 900 ){
			$(".mainLeft_search_checkbox").fadeIn(500);
			$(".mainLeft_search_checkbox").addClass('show');
		}
	});
});

$(document).ready(function() {
	$(".select_value").click(function(){
		if($(this).closest('.show_menu').find('.select_menu').hasClass('open')){
			$(this).closest('.show_menu').find('.select_menu').fadeOut(500);
			$(this).closest('.show_menu').find('.select_menu').removeClass('open');
		}else{
			$('.select_menu').fadeOut(500);
			$('.select_menu').removeClass('open');
			$(this).closest('.show_menu').find('.select_menu').fadeIn(500);
			$(this).closest('.show_menu').find('.select_menu').addClass('open');

		}
	});
});