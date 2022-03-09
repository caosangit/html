$(document).ready(function() {
	$("#category").click(function(){
		if($("#category_box").hasClass('show')){
			$("#category_box").fadeOut(200);
			$("#category_box").removeClass('show');
		}else{
			$("#category_box").fadeIn(200);
			$("#category_box").addClass('show');
			$("#list_cate_search").fadeOut(200);
		}
	});
});	

$(document).ready(function() {
	$("#name_category").click(function(){
		if($("#list_cate_search").hasClass('show')){
			$("#list_cate_search").fadeOut(200);
			$("#list_cate_search").removeClass('show');
		}else{
			$("#list_cate_search").fadeIn(200);
			$("#list_cate_search").addClass('show');
			$("#category_box").fadeOut(200);
		}
	});
});	

$(document).ready(function() {
	$("#header_column_1_item_1_headermiddle_menu_btn").click(function(){
		if($(".header_column_1_item_1_headermiddle_menu").hasClass('show')){
			$(".header_column_1_item_1_headermiddle_menu").fadeOut(200);
			$(".header_column_1_item_1_headermiddle_menu").removeClass('show');
		}else{
			$(".header_column_1_item_1_headermiddle_menu").fadeIn(200);
			$(".header_column_1_item_1_headermiddle_menu").addClass('show');
			$("#category_box").fadeOut(200);
			$("#list_cate_search").fadeOut(200);
		}
	});
	$(window).resize(function(){
        if( window.innerWidth > 900){
             $(".header_column_1_item_1_headermiddle_menu").css({display:"block"});
        }
        if( window.innerWidth <= 900){
            $(".header_column_1_item_1_headermiddle_menu").css({display:"none"});
        }
    });
});	