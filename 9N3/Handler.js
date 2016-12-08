$.noConflict();
$(document).ready(function(){

	
$("#step1").click(function(){
	$("#step_1_op").slideToggle();
	$("#step_2_op").slideUp();
	$("#step_3_op").slideUp();
});

$("#step2").click(function(){
	$("#step_2_op").slideToggle();
	$("#step_1_op").slideUp();
	$("#step_3_op").slideUp();
});

$("#step3").click(function(){
	$("#step_3_op").slideToggle();
	$("#step_2_op").slideUp();
	$("#step_1_op").slideUp();
});

//////////////////////////////////////////////// color Selection handler ////////////////////////////////////////


/*
$("#red_text_color").click(function(){
	$("#red_text_color").addClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").removeClass("selected");
	$("#blonde_text_color").removeClass("selected");
	$("#teal_text_color").removeClass("selected");
	$("#orange_text_color").removeClass("selected");
	$("#white_text_color").removeClass("selected");
	$("#pink_text_color").removeClass("selected");
	$("#navy_blue_text_color").removeClass("selected");
	$("#purple_text_color").removeClass("selected");
	$("#royal_blue_text_color").removeClass("selected");
	$("#brown_text_color").removeClass("selected");
	$("#forest_green_text_color").removeClass("selected");
	$("#silver_text_color").removeClass("selected");
	$("#volt_yellow_text_color").removeClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#text_color").text("Color: Red");                                                                                                                   
});
$("#volt_green_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").addClass("selected");
	$("#text_color").text("Color: Volt Green");                                                                                                                   
});
*/
});

////////////////////////////////////////////////step-1 counter //////////////////////////////////////////////////