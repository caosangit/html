$(document).ready(function(){
	$("#home_news_column_1_item_1_slider").slick({ 
		dots: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 5000,
	    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>',
	});
});
$(document).ready(function(){
	$("#product_box").slick({ 
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

$(document).ready(function(){
	$("#product_buy_more").slick({ 
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

$(document).ready(function(){
	$("#product_news").slick({ 
		dots: false,
		infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: false,
	    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>',
	});
});

$(document).ready(function(){
	$("#product_buy").slick({ 
		dots: false,
		infinite: true,
	    slidesToShow: 5,
	    slidesToScroll: 5,
	    autoplay: false,
	    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>',
		responsive: [
		    {
		      breakpoint: 770,
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
$(document).ready(function(){
	$("#news_box").slick({ 
		dots: false,
		infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: false,
	    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>',
	});
});
$(document).ready(function(){
	$("#trademark").slick({ 
		dots: false,
		infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: false,
	    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>',
	});
});
$(document).ready(function(){
	$("#product_sale").slick({ 
		dots: false,
		infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: false,
	    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>',
	});
});
