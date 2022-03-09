$(document).ready(function(){
	$("#list_news_banner").slick({ 
		dots: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 5000,
	    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>',
	});
});
$(document).ready(function() {
	$(".list_news_column2_item1_innerNews .share").hover(function(){
	    $(".time_inner ul").css("display", "none");
	    $(this).closest('.time_inner').find('ul').css('display', 'block');
	    }, function(){
	   	
	});
});
// 
$(document).ready(function() {
	setHeight('.list_news_column2_item1_innerNews .item');
});
function setHeight(column) {
	var maxHeight = 0;
 //Get all the element with class = col
	column = $(column); 
 //Loop all the column
	column.each(function() {       
		//Store the highest value
		if($(this).height() > maxHeight) {
		  maxHeight = $(this).height();;
		}
	});
	//Set the height
 column.height(maxHeight);
}