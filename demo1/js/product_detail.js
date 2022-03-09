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
// slide prodcut
$(document).ready(function() {
	$('.slider-for').slick({
	  	slidesToShow: 1,
	 	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
	  	asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  	slidesToShow: 5,
	  	slidesToScroll: 1,
	  	asNavFor: '.slider-for',
	  	dots: false,
	  	focusOnSelect: true,
	  	responsive: [
		    {
		      breakpoint: 361,
		      settings: {
		      		slidesToShow: 4,
	    			slidesToScroll: 1,
		      	}
		    },
		    {
		      breakpoint: 321,
		      settings: {
		      		slidesToShow: 3,
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
        }
        if( window.innerWidth <= 900){
            $(".mainLeft_cate").css({display:"none"});
        }
    });
});
// tab
$(document).ready(function() {
	$(window).load(function(){
        if( window.innerWidth > 900){
            var $heightFirstContent = $(".sght_tabs ul li:first .sght_content").outerHeight();
            var $heightUl = $(".sght_tabs ul").outerHeight();
            $(".sght_tabs").css({height:(parseInt($heightUl) + parseInt($heightFirstContent)) + 'px'});
        }
    });
	$(".sght_tabs ul li .title").click(function(event) {
		$(".sght_tabs ul li").removeClass('active');
		$(this).parent('li').addClass('active');
		if( window.innerWidth > 900){
			var $heightFirstContent = $(this).parent('li').find('.sght_content').outerHeight();
        	var $heightUl = $(".sght_tabs ul").outerHeight();
        	$(".sght_tabs").css({height:(parseInt($heightUl) + parseInt($heightFirstContent)) + 'px'});
        }else{
        	if($(this).parent('li').find('.sght_content').hasClass('show')){
				$(this).parent('li').find('.sght_content').fadeOut(200);
				$(this).parent('li').find('.sght_content').removeClass('show');
			}else{
				$('.sght_content').fadeOut(200);
				$('.sght_content').removeClass('show');
				$(this).parent('li').find('.sght_content').fadeIn(200);
				$(this).parent('li').find('.sght_content').addClass('show');

			}
        }
	});
	$(window).resize(function(){
        if( window.innerWidth > 900){
            $(".sght_tabs ul li:first").addClass('active');
            var $heightFirstContent = $(".sght_tabs ul li:first .sght_content").outerHeight();
            var $heightUl = $(".sght_tabs ul").outerHeight();
            $(".sght_tabs").css({height:(parseInt($heightUl) + parseInt($heightFirstContent)) + 'px'});
        }
        if( window.innerWidth <= 900){
            $(".sght_tabs ul li").removeClass('active');
            $(".sght_tabs").css('height', 'auto');
        }
    });
});
$(document).ready(function() {
	var number = $('#number').val();
	var price = $("#price").attr("price");
	$("#btn_sub").click(function(){
		if(number > 1){
			number--;
			$('#number').val(number);
			$("#price").empty();
			$("#price").append(formatNumber(price*number) + '<sup>đ</sup>');
		}
	});
	$("#btn_plus").click(function(){
		number++;
		$('#number').val(number);
		$("#price").empty();
		$("#price").append(formatNumber(price*number) + '<sup>đ</sup>');
	});
});	
function check_number(){
	if(isNaN(number) || number < 1){
		$('#number').val(1);
	}
}
// 
$(document).ready(function() {
	$(".btn_buyproduct a").click(function(){
		$(".product_order").css('display', 'block');
		$(".cart_overlay").css('display', 'block');
	});
	$(".cart_close").click(function(){
		$(".product_order").css('display', 'none');
		$(".cart_overlay").css('display', 'none');
	});
	$(".cart_overlay").click(function(){
		$(".product_order").css('display', 'none');
		$(".cart_overlay").css('display', 'none');
	});
});	
// remove item
$(document).ready(function() {
	$(".cart_content_middle .remove").click(function(){
		$(this).parent(".item").css('display', 'none');
	});
});
// check number gio hang
$(document).ready(function() {
	$(".btn_sub_number").click(function(){
		var number_cart = $(this).parent(".number").find('.number_cart').val();
		var price_cart = $(this).closest(".item").find(".price_cart").attr("price-cart");
		if(number_cart > 1){
			number_cart--;
			$(this).parent(".number").find('.number_cart').val(number_cart);
			$(this).closest(".item").find(".total_cart_number").empty();
			$(this).closest(".item").find(".total_cart_number").append(formatNumber(price_cart*number_cart) + 'đ');
		}
	});
	$(".btn_plus_number").click(function(){
		var number_cart = $(this).parent(".number").find('.number_cart').val();
		var price_cart = $(this).closest(".item").find(".price_cart").attr("price-cart");
		number_cart++;
		$(this).parent(".number").find('.number_cart').val(number_cart);
		$(this).closest(".item").find(".total_cart_number").empty();
		$(this).closest(".item").find(".total_cart_number").append(formatNumber(price_cart*number_cart) + 'đ');
	});
});	
function check_number(){
	if(isNaN(number_cart) || number_cart < 1){
		$(this).parent(".item").find('.number_cart').val(1);
	}
}

// conver int to format money
function formatNumber(num){
    var array = num.toString().split('');
    var index = -3;
    while (array.length + index > 0) {
        array.splice(index, 0, '.');
        index -= 4;
    }
    return array.join('');
};