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

$("#red_logo").click(function(){
	$("#red_logo").addClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#logo_color").text("Color: Red");                                                                                                                   
});
$("#volt_green_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").addClass("selected");
	$("#logo_color").text("Color: Volt Green");                                                                                                                   
});

});

////////////////////////////////////////////////step-1 counter //////////////////////////////////////////////////