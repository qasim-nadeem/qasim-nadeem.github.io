// JavaScript Document
$(document).ready(function() {
	// changing color s the options boxex on click/selection
	// and also display spesific set of options in the following option panel
		$("#step-1").click(function(){
		$('#step-1').css("background-color","#9C0");
		$('#step-2').css("background-color","#9C6");
		$('#step-3').css("background-color","#9C6");
		// display spesific set of options in the following option panel
		$("#step1-options").css("display","block");
		$("#step2-options").css("display","none");
		$("#step3-options").css("display","none");
		});
		
		$("#step-2").click(function(){
		$('#step-2').css("background-color","#9C0");
		$('#step-1').css("background-color","#9C6");
		$('#step-3').css("background-color","#9C6");
		// display spesific set of options in the following option panel
		$("#step2-options").css("display","block");
		$("#step1-options").css("display","none");
		$("#step3-options").css("display","none");
		});
		
		$("#step-3").click(function(){
		$('#step-3').css("background-color","#9C0");
		$('#step-1').css("background-color","#9C6");
		$('#step-2').css("background-color","#9C6");
		// display spesific set of options in the following option panel
		$("#step3-options").css("display","block");
		$("#step1-options").css("display","none");
		$("#step2-options").css("display","none");
		});
		
		///////////////////////////////////////////////////// logo color handler/////////////////////////////////////////
$("#red_logo").click(function(){
	$("#red_logo").addClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");
	$("#logo_color").text("Color: Red");
	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLRed.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Red.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Red.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Red.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Red.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLRed.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Red.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
});
$("#volt_green_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").addClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");
	$("#logo_color").text("Color: Volt Green");

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLVGreen.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1VGreen.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2VGreen.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3VGreen.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4VGreen.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLVGreen.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1VGreen.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                   
});
$("#sky_blue_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").addClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Sky Blue");

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLSBlue.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1SBlue.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2SBlue.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3SBlue.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4SBlue.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLSBlue.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1SBlue.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
});
$("#tan_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").addClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Tan");

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLTan.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Tan.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Tan.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Tan.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Tan.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLTan.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Tan.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
});
$("#blonde_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").addClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Bone");  

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLBlonde.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Blonde.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Blonde.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Blonde.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Blonde.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLBlonde.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Blonde.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                 
});
$("#teal_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").addClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Teal");    

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLTeal.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Teal.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Teal.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Teal.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Teal.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLTeal.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Teal.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#orange_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").addClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Orange");  

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLOrange.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Orange.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Orange.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Orange.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Orange.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLOrange.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Orange.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#white_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").addClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: White");  

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLWhite.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1White.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2White.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3White.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4White.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLWhite.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1White.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#pink_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").addClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Pink");

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLPink.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Pink.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Pink.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Pink.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Pink.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLPink.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Pink.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#navy_blue_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").addClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Navy Blue");  

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLNBlue.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1NBlue.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2NBlue.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3NBlue.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4NBlue.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLNBlue.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1NBlue.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#purple_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").addClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Purple");  

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLPurple.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Purple.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Purple.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Purple.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Purple.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLPurple.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Purple.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#royal_blue_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").addClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Royal Blue");

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLRBlue.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1RBlue.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2RBlue.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3RBlue.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4RBlue.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLRBlue.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1RBlue.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#brown_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").addClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Brown");  

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLBrown.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Brown.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Brown.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Brown.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Brown.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLBrown.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Brown.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#forest_green_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").addClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Forest Green");

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLFGreen.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1FGreen.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2FGreen.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3FGreen.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4FGreen.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLFGreen.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1FGreen.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#silver_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").addClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Silver");     

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLSilver.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Silver.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Silver.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Silver.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Silver.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLSilver.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Silver.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#volt_yellow_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").addClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Volt Yellow");

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLYellow.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Yellow.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Yellow.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Yellow.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Yellow.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLYellow.png"); 
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Yellow.png");                                                    
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#maroon_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").addClass("selected");
	$("#gold_logo").removeClass("selected");

	$("#logo_color").text("Color: Maroon");  

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLMaroon.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Maroon.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Maroon.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Maroon.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Maroon.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLMaroon.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Maroon.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#gold_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").addClass("selected");

	$("#logo_color").text("Color: Gold");                   

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLGold.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Gold.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Gold.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Gold.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Gold.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLGold.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Gold.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#black_logo").click(function(){
	$("#red_logo").removeClass("selected");
	$("#volt_green_logo").removeClass("selected");
	$("#sky_blue_logo").removeClass("selected");
	$("#tan_logo").removeClass("selected");
	$("#blonde_logo").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_logo").removeClass("selected");
	$("#white_logo").removeClass("selected");
	$("#pink_logo").removeClass("selected");
	$("#navy_blue_logo").removeClass("selected");
	$("#purple_logo").removeClass("selected");
	$("#royal_blue_logo").removeClass("selected");
	$("#brown_logo").removeClass("selected");
	$("#forest_green_logo").removeClass("selected");
	$("#silver_logo").removeClass("selected");
	$("#volt_yellow_logo").removeClass("selected");
	$("#maroon_logo").removeClass("selected");
	$("#gold_logo").removeClass("selected");
	$("#black_logo").addClass("selected");

	$("#logo_color").text("Color: Black");                   

	$("#CLImage").attr("xlink:href","imgs/Catcher/LogoColors/CLBlack.png");
	$("#FLImg1").attr("xlink:href","imgs/Fielding/LogoColors/FL1Black.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Black.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Black.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Black.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLBlack.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Black.png");
	//
	// handling step 2 count 
	//
	logo = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
////////////////////////////////////////logo color handler enda here ////////////////////////////////////
//////////////////////////////////////// laces color handler starts here ////////////////////////////////////
$("#red_laces").click(function(){
	$("#red_laces").addClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Red");  

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesRed.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebRed.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebRed.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebRed.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebRed.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebRed.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebRed.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebRed.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebRed.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebRed.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebRed.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#sky_blue_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").addClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Sky Blue");   

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesSBlue.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebSBlue.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebSBlue.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebSBlue.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebSBlue.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebSBlue.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebSBlue.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebSBlue.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebSBlue.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebSBlue.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebSBlue.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                               
});
$("#tan_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").addClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Tan"); 
	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesTan.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebTan.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebTan.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebTan.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebTan.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebTan.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebTan.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebTan.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebTan.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebTan.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebTan.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                  
});
$("#blonde_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").addClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Bone");

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesBone.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebBlonde.png");
		$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebBlonde.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebBlonde.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebBlonde.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebBlonde.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebBlonde.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebBlonde.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebBlonde.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebBlonde.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebBlonde.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("teal_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").addClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Teal");         
	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesTeal.png");  
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWeb.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWeb.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#orange_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").addClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Orange");   

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesOrange.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebOrange.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebOrange.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebOrange.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebOrange.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebOrange.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebOrange.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebOrange.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebOrange.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebOrange.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebOrange.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                
});
$("#white_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").addClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: White");  

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesWhite.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebWhite.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebWhite.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebWhite.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebWhite.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebWhite.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebWhite.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebWhite.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebWhite.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebWhite.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebWhite.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#navy_blue_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").addClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Navy Blue");   

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesNBlue.png");                                                 
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebNBlue.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebNBlue.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebNBlue.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebNBlue.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebNBlue.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebNBlue.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebNBlue.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebNBlue.png");                                                              
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebNBlue.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebNBlue.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#purple_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").addClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#laces_color").text("Color: Purple");

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesPurple.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebPurple.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebPurple.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebPurple.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebPurple.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebPurple.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebPurple.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebPurple.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebPurple.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebPurple.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebPurple.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#brown_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").addClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Brown");       

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesBrown.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebBrown.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebBrown.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebBrown.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebBrown.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebBrown.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebBrown.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebBrown.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebBrown.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebBrown.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebBrown.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                            
});
$("#forest_green_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").addClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Forest Green");                                                              

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesFGreen.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebFGreen.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebFGreen.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebFGreen.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebFGreen.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebFGreen.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebFGreen.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebFGreen.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebFGreen.png");                                                     
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebFGreen.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebFGreen.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#black_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");

	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").addClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Black");   

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesBlack.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebBlack.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebBlack.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebBlack.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebBlack.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebBlack.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebBlack.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebBlack.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebBlack.png");                                                
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebBlack.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebBlack.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#royal_blue_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").addClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Royal Blue");

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesRBlue.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebRBlue.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebRBlue.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebRBlue.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebRBlue.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebRBlue.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebRBlue.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebRBlue.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebRBlue.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebRBlue.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebRBlue.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#yellow_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").addClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Gold");      

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesYellow.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebYellow.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebYellow.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebYellow.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebYellow.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebYellow.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebYellow.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebYellow.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebYellow.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebYellow.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebYellow.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                             
});
$("#grey_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").addClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Grey");                             

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesGrey.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebGrey.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebGrey.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebGrey.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebGrey.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebGrey.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebGrey.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebGrey.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebGrey.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebGrey.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebGrey.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                      
});
$("#pink_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").addClass("selected");
	$("#purple_laces").removeClass("selected");

	$("#laces_color").text("Color: Pink");                             

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesPink.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebPink.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebPink.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebPink.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebPink.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebPink.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebPink.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebPink.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebPink.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebPink.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebPink.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                      
});
$("#purple_laces").click(function(){
	$("#red_laces").removeClass("selected");
	$("#sky_blue_laces").removeClass("selected");
	$("#tan_laces").removeClass("selected");
	$("#blonde_laces").removeClass("selected");
	$("#teal_logo").removeClass("selected");
	$("#orange_laces").removeClass("selected");
	$("#white_laces").removeClass("selected");
	$("#navy_blue_laces").removeClass("selected");
	$("#purple_laces").removeClass("selected");
	$("#brown_laces").removeClass("selected");
	$("#forest_green_laces").removeClass("selected");
	$("#black_laces").removeClass("selected");
	$("#royal_blue_laces").removeClass("selected");
	$("#yellow_laces").removeClass("selected");
	$("#grey_laces").removeClass("selected");
	$("#pink_laces").removeClass("selected");
	$("#purple_laces").addClass("selected");

	$("#laces_color").text("Color: Purple");                             

	$("#CLaces").attr("xlink:href","imgs/Catcher/Laces/CLacesPurple.png");
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/BinKWeb/FBinKWebPurple.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/BinAWeb/FBinAWebPurple.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/BinEWeb/FBinEWebPurple.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/BinHWeb/FBinHWebPurple.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/BinIWeb/FBinIWebPurple.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/BinLWeb/FBinLWebPurple.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/BinMWeb/FBinMWebPurple.png");
	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/LGWeb/FBLGWebPurple.png");
	$("#FBBWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/LBWeb/FBLBWebPurple.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/LHWeb/FBLHWebPurple.png");
	//
	// handling step 2 count 
	//
	lace = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                      
});
/////////////////////////////////////////////////////////laces color ends ///////////////////////////////////////////
//////////////////////////////////////////////////////// web color //////////////////////////////////////////////////


$("#red_web").click(function(){
	$("#red_web").addClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Red"); 

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebRed.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebRed.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebRed.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebRed.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebRed.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebRed.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebRed.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebRed.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebRed.png");                                        
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebRed.png");                                        
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebRed.png");                                        
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#tan_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").addClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Tan");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebTan.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebTan.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebTan.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebTan.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebTan.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebTan.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebTan.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebTan.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebTan.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebTan.png");
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebTan.png");                                        
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#blonde_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").addClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Bone");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebBone.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebBlonde.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebBlonde.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebBlonde.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebBlonde.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebBlonde.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebBlonde.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebBlonde.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebBlonde.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebBlonde.png");  
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebBlonde.png");                                      
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#orange_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").addClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Orange");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebOrange.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebOrange.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebOrange.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebOrange.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebOrange.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebOrange.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebOrange.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebOrange.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebOrange.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebOrange.png");  
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebOrange.png");                                      
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#white_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").addClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: White");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebWhite.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebWhite.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebWhite.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebWhite.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebWhite.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebWhite.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebWhite.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebWhite.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebWhite.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebWhite.png");
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebWhite.png");
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#navy_blue_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").addClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Navy Blue");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebNBlue.png");                                                
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebNBlue.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebNBlue.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebNBlue.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebNBlue.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebNBlue.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebNBlue.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebNBlue.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebNBlue.png");                               
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebNBlue.png");
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebNBlue.png");                                        
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#brown_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").addClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Brown");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebBrown.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebBrown.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebBrown.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebBrown.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebBrown.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebBrown.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebBrown.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebBrown.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebBrown.png");                                                  
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebBrown.png");  
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebBrown.png");                                      
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#forest_green_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Forest Green");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebFGreen.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebFGreen.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebFGreen.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebFGreen.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebFGreen.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebFGreen.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebFGreen.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebFGreen.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebFGreen.png");                                                  
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebFGreen.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebFGreen.png");                                       
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#black_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Black");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebBlack.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebBlack.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebBlack.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebBlack.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebBlack.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebBlack.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebBlack.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebBlack.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebBlack.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebBlack.png");  
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebBlack.png");                                      
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#royal_blue_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").addClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Royal Blue");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebRBlue.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebRBlue.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebRBlue.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebRBlue.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebRBlue.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebRBlue.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebRBlue.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebRBlue.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebRBlue.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebRBlue.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebRBlue.png");                                       
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#yellow_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").addClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Yellow");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebYellow.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebYellow.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebYellow.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebYellow.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebYellow.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebYellow.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebYellow.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebYellow.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebYellow.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebYellow.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebYellow.png");                                       
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#grey_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").addClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Grey");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebGrey.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebGrey.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebGrey.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebGrey.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebGrey.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebGrey.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebGrey.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebGrey.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebGrey.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebGrey.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebGrey.png");                                       
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#pink_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").addClass("selected");
	$("#purple_web").removeClass("selected");

	$("#web_color").text("Color: Pink");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebPink.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebPink.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebPink.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebPink.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebPink.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebPink.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebPink.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebPink.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebPink.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebPink.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebPink.png");                                       
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#purple_web").click(function(){
	$("#red_web").removeClass("selected");
	$("#tan_web").removeClass("selected");
	$("#blonde_web").removeClass("selected");
	$("#orange_web").removeClass("selected");
	$("#white_web").removeClass("selected");
	$("#navy_blue_web").removeClass("selected");
	$("#brown_web").removeClass("selected");
	$("#forest_green_web").removeClass("selected");
	$("#black_web").removeClass("selected");
	$("#royal_blue_web").removeClass("selected");
	$("#yellow_web").removeClass("selected");
	$("#grey_web").removeClass("selected");
	$("#pink_web").removeClass("selected");
	$("#purple_web").addClass("selected");

	$("#web_color").text("Color: Purple");

	$("#CWeb").attr("xlink:href","imgs/Catcher/Web/CWebPurple.png");
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/FKWebPurple.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/FAWebPurple.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/FEWebPurple.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/FHWebPurple.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/FIWebPurple.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/FLWebPurple.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/FMWebPurple.png");
	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/Web/FBGWebPurple.png");
	$("#FBBWebColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/Web/FBBWebPurple.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/Web/FBHWebPurple.png");                                       
	//
	// handling step 2 count 
	//
	web = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
///////////////////////////////////////////////// web color handler ends here ///////////////////////////////
///////////////////////////////////////////////// plam color handler strat  catcher/fielding ///////////////////////////////////

$("#red_palm").click(function(){
	$("#red_palm").addClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Red");   

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmRed.png");
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPRed.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPRed.png");
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#tan_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").addClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Tan");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmTan.png");
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPTan.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPTan.png");
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#blonde_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").addClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Bone");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmBone.png");
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPBlonde.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPBlonde.png");
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#orange_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").addClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Orange");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmOrange.png");
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPOrange.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPOrange.png");
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#white_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").addClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: White");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmWhite.png");
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPWhite.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPWhite.png");
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
/////////////////////////////error
$("#navy_blue_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").addClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Navy Blue");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmNBlue.png");
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPNBlue.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPNBlue.png");
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
////////////////////////////////////////\error
$("#brown_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").addClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Brown");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmBrown.png");                                                         
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPBrown.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPBrown.png");                                                          
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#forest_green_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").addClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Forest Green");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmFGreen.png");                                                        
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPFGreen.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPFGreen.png");                                                           
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#black_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").addClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Black");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmBlack.png");                                                               
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPBlack.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPBlack.png");                                                   
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#royal_blue_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").addClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Royal Blue");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmRBlue.png");                                                        
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPRBlue.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPRBlue.png");                                                           
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#yellow_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").addClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Yellow");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmYellow.png");                                                        
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPYellow.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPYellow.png");                                                           
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#grey_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").addClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Grey");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmGrey.png");                                                         
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPGrey.png"); 
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPGrey.png");                                                         
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#pink_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").addClass("selected");
	$("#purple_palm").removeClass("selected");

	$("#palm_color").text("Color: Pink");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmPink.png");                                                         
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPPink.png"); 
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPPink.png");                                                         
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#purple_palm").click(function(){
	$("#red_palm").removeClass("selected");
	$("#tan_palm").removeClass("selected");
	$("#blonde_palm").removeClass("selected");
	$("#orange_palm").removeClass("selected");
	$("#white_palm").removeClass("selected");
	$("#navy_blue_palm").removeClass("selected");
	$("#brown_palm").removeClass("selected");
	$("#forest_green_palm").removeClass("selected");
	$("#black_palm").removeClass("selected");
	$("#royal_blue_palm").removeClass("selected");
	$("#yellow_palm").removeClass("selected");
	$("#grey_palm").removeClass("selected");
	$("#pink_palm").removeClass("selected");
	$("#purple_palm").addClass("selected");

	$("#palm_color").text("Color: Purple");

	$("#CPalm").attr("xlink:href","imgs/Catcher/Palm/CPalmPurple.png");                                                         
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/FPPurple.png"); 
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FBPPurple.png");                                                         
	//
	// handling step 2 count 
	//
	palm = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
///////////////////////////////////////////////// plam color handler end here /////////////////////////////////
////////////////////////////////////////////////// back color handler strat Catcher/fielding back1 ///////////////////////////////////


$("#red_back").click(function(){
	$("#red_back").addClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Red");     

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackRed.png");
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Red.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBRed.png");

	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                              
});
$("#tan_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").addClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Tan");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackTan.png");                                                                   
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Tan.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBTan.png");                                                
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#blonde_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").addClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Bone");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackBone.png");                                                           
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Blonde.png"); 
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBBlonde.png");                                                      
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#orange_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").addClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Orange");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackOrange.png");                                                                
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Orange.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBOrange.png");                                                    
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#white_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").addClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: White");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackWhite.png"); 
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1White.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBWhite.png");                                                            
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#navy_blue_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").addClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Navy Blue");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackNBlue.png");                                                              
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1NBlue.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBNBlue.png");                                                     
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#brown_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").addClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Brown");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackBrown.png");                                                              
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Brown.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBBrown.png");                                                     
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#forest_green_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").addClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Forest Green");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackFGreen.png");                                                              
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1FGreen.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBFGreen.png");                                                     
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#black_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").addClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Black");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackBlack.png");                                                                
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Black.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBBlack.png");                                                    
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#royal_blue_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").addClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Royal Blue");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackRBlue.png");                                                               
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1RBlue.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBRBlue.png");                                                     
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#yellow_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").addClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Yellow");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackYellow.png");                                                             
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Yellow.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBYellow.png");                                                     
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#grey_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").addClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Grey");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackGrey.png");                                                           
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Grey.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBGrey.png");                                                        
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#pink_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").addClass("selected");
	$("#purple_back").removeClass("selected");

	$("#back_color").text("Color: Pink");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackPink.png");                                                           
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Pink.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBPink.png");                                                        
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#purple_back").click(function(){
	$("#red_back").removeClass("selected");
	$("#tan_back").removeClass("selected");
	$("#blonde_back").removeClass("selected");
	$("#orange_back").removeClass("selected");
	$("#white_back").removeClass("selected");
	$("#navy_blue_back").removeClass("selected");
	$("#brown_back").removeClass("selected");
	$("#forest_green_back").removeClass("selected");
	$("#black_back").removeClass("selected");
	$("#royal_blue_back").removeClass("selected");
	$("#yellow_back").removeClass("selected");
	$("#grey_back").removeClass("selected");
	$("#pink_back").removeClass("selected");
	$("#purple_back").addClass("selected");

	$("#back_color").text("Color: Purple");

	$("#CBack").attr("xlink:href","imgs/Catcher/Back/CBackPurple.png");                                                            
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/FB1Purple.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FBBPurple.png");                                                        
	//
	// handling step 2 count 
	//
	back1 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});


/////////////////////////////////////////////////////////


////////////////////////////////////////////////// back color handler ends ///////////////////////////////////
////////////////////////////////////////////////// back2 color handler strat Catcher/fielding back21 ///////////////////////////////////


$("#red_back2").click(function(){
	$("#red_back2").addClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Red");     

	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Red.png");//
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                              
});
$("#tan_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").addClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Tan");                                                           
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Tan.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#blonde_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").addClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Bone");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Blonde.png");
    // handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#orange_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").addClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Orange");

	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Orange.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#white_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").addClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: White");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2White.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#navy_blue_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").addClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Navy Blue");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2NBlue.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#brown_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").addClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Brown");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Brown.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#forest_green_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").addClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Forest Green");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2FGreen.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#black_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").addClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Black");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Black.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#royal_blue_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").addClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Royal Blue");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2RBlue.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)

		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#yellow_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").addClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Yellow");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Yellow.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#grey_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").addClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Grey");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Grey.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#pink_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").addClass("selected");
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: Pink");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Pink.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#purple_back2").click(function(){
	$("#red_back2").removeClass("selected");
	$("#tan_back2").removeClass("selected");
	$("#blonde_back2").removeClass("selected");
	$("#orange_back2").removeClass("selected");
	$("#white_back2").removeClass("selected");
	$("#navy_blue_back2").removeClass("selected");
	$("#brown_back2").removeClass("selected");
	$("#forest_green_back2").removeClass("selected");
	$("#black_back2").removeClass("selected");
	$("#royal_blue_back2").removeClass("selected");
	$("#yellow_back2").removeClass("selected");
	$("#grey_back2").removeClass("selected");
	$("#pink_back2").removeClass("selected");
	$("#purple_back2").addClass("selected");

	$("#back2_color").text("Color: Purple");
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/FB2Purple.png");
	// handling step 2 count 
	//
	back2 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});


/////////////////////////////////////////////////////////


////////////////////////////////////////////////// back2 color handler ends ///////////////////////////////////



////////////////////////////////////////////////// back3 color handler strat Catcher/fielding back31 ///////////////////////////////////

$("#red_back3").click(function(){
	$("#red_back3").addClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Red");     
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Red.png");
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#tan_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").addClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Tan");                                                             
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Tan.png"); 
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                
});
$("#blonde_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").addClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Bone");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Blonde.png");
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
                                                                                                                   
});
$("#orange_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").addClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Orange");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Orange.png");
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#white_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").addClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: White");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3White.png");
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#navy_blue_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").addClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Navy Blue");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3NBlue.png");
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#brown_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").addClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Brown");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Brown.png");
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#forest_green_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").addClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Forest Green");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3FGreen.png");                                          
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#black_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").addClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Black");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Black.png");                                   
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#royal_blue_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").addClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Royal Blue");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3RBlue.png");                                        
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#yellow_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").addClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Yellow");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Yellow.png");                                    
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#grey_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").addClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Grey");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Grey.png");                                  
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#pink_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").addClass("selected");
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: Pink");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Pink.png");                                  
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#purple_back3").click(function(){
	$("#red_back3").removeClass("selected");
	$("#tan_back3").removeClass("selected");
	$("#blonde_back3").removeClass("selected");
	$("#orange_back3").removeClass("selected");
	$("#white_back3").removeClass("selected");
	$("#navy_blue_back3").removeClass("selected");
	$("#brown_back3").removeClass("selected");
	$("#forest_green_back3").removeClass("selected");
	$("#black_back3").removeClass("selected");
	$("#royal_blue_back3").removeClass("selected");
	$("#yellow_back3").removeClass("selected");
	$("#grey_back3").removeClass("selected");
	$("#pink_back3").removeClass("selected");
	$("#purple_back3").addClass("selected");

	$("#back3_color").text("Color: Purple");
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/FB3Purple.png");                                    
	// handling step 2 count 
	//
	back3 = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
/////////////////////////////////////////////////////////

////////////////////////////////////////////////// back3 color handler ends ///////////////////////////////////

////////////////////////////////////////////////// welting color handler strat Catcher/fielding welting1 ///////////////////////////////////


$("#red_welting").click(function(){
	$("#red_welting").addClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Red");     
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelRed.png");                                        
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#tan_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").addClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Tan");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelTan.png");                                   
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                
});
$("#blonde_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").addClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Bone");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelBlonde.png");                                    
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                               
});
$("#orange_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").addClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Orange");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelOrange.png");                                      
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                             
});
$("#white_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").addClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: White");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelWhite.png");                                     
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                              
});
$("#navy_blue_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").addClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Navy Blue");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelNBlue.png");                                         
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                          
});
$("#brown_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").addClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Brown");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelBrown.png");                                     
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                              
});
$("#forest_green_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").addClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Forest Green");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelFGreen.png");                                            
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                       
});
$("#black_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").addClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Black");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelBlack.png");                                     
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                              
});
$("#royal_blue_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").addClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Royal Blue");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelRBlue.png");                                          
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                         
});
$("#yellow_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").addClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Yellow");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelYellow.png");                                      
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                             
});
$("#grey_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").addClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Grey");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelGrey.png");                                    
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                               
});
$("#pink_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").addClass("selected");
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: Pink");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelPink.png");                                    
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                               
});

$("#purple_welting").click(function(){
	$("#red_welting").removeClass("selected");
	$("#tan_welting").removeClass("selected");
	$("#blonde_welting").removeClass("selected");
	$("#orange_welting").removeClass("selected");
	$("#white_welting").removeClass("selected");
	$("#navy_blue_welting").removeClass("selected");
	$("#brown_welting").removeClass("selected");
	$("#forest_green_welting").removeClass("selected");
	$("#black_welting").removeClass("selected");
	$("#royal_blue_welting").removeClass("selected");
	$("#yellow_welting").removeClass("selected");
	$("#grey_welting").removeClass("selected");
	$("#pink_welting").removeClass("selected");
	$("#purple_welting").addClass("selected");

	$("#welting_color").text("Color: Purple");
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/FWelPurple.png");                                      
	//
	// handling step 2 count 
	//
	welting = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                             
});


//////////////////////////////////////////////////
////////////////////////////////////////////////// welting color handler ends //////////////////////////////////////////////////////////////
////////////////////////////////////////////////// wingtip color handler strat Catcher/fielding wingtip1 ///////////////////////////////////

$("#red_wingtip").click(function(){
	$("#red_wingtip").addClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Red");     
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTRed.png");                                        
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                      
});
$("#tan_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").addClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Tan");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTTan.png");                                   
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                
});
$("#blonde_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").addClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Bone");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTBlonde.png");                                    
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                               
});
$("#orange_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").addClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Orange");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTOrange.png");                                      
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                             
});
$("#white_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").addClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: White");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTWhite.png");                                     
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                              
});
$("#navy_blue_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").addClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Navy Blue");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTNBlue.png");                                         
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                          
});
$("#brown_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").addClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Brown");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTBrown.png");                                     
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                              
});
$("#forest_green_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").addClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Forest Green");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTFGreen.png");                                            
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                       
});
$("#black_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").addClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Black");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTBlack.png");                                     
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                              
});
$("#royal_blue_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").addClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Royal Blue");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTRBlue.png");                                          
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                         
});
$("#yellow_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").addClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Yellow");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTYellow.png");                                      
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                             
});
$("#grey_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").addClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: Grey");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTGrey.png");                                    
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                               
});
$("#pink_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").addClass("selected");
	$("#purple_wingtip").removeClass("selected");
	
	$("#wingtip_color").text("Color: Pink");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTPink.png");                                    
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                               
});
$("#purple_wingtip").click(function(){
	$("#red_wingtip").removeClass("selected");
	$("#tan_wingtip").removeClass("selected");
	$("#blonde_wingtip").removeClass("selected");
	$("#orange_wingtip").removeClass("selected");
	$("#white_wingtip").removeClass("selected");
	$("#navy_blue_wingtip").removeClass("selected");
	$("#brown_wingtip").removeClass("selected");
	$("#forest_green_wingtip").removeClass("selected");
	$("#black_wingtip").removeClass("selected");
	$("#royal_blue_wingtip").removeClass("selected");
	$("#yellow_wingtip").removeClass("selected");
	$("#grey_wingtip").removeClass("selected");
	$("#pink_wingtip").removeClass("selected");
	$("#purple_wingtip").addClass("selected");
	
	$("#wingtip_color").text("Color: Purple");
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/FWTPurple.png");                                      
	//
	// handling step 2 count 
	//
	wingtip = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                             
});


/////////////////////////////////////////////////////////


////////////////////////////////////////////////// wingtip color handler ends ///////////////////////////////////



/////////////////////////////////////////////////// crown color handler starts here /////////////////////////
$("#red_crown").click(function(){
	$("#red_crown").addClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Red");   

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownRed.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebRed.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebRed.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebRed.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#tan_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").addClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Tan");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownTan.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebTan.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebTan.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebTan.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                 

});
$("#blonde_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").addClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Bone");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownBone.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebBlonde.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebBlonde.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebBlonde.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#orange_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").addClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Orange");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownOrange.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebOrange.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebOrange.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebOrange.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#white_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").addClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: White");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownWhite.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebWhite.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebWhite.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebWhite.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#navy_blue_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").addClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Navy Blue");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownNBlue.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebNBlue.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebNBlue.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebNBlue.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#brown_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").addClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Brown");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownBrown.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebBrown.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebBrown.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebBrown.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#forest_green_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").addClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Forest Green");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownFGreen.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebFGreen.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebFGreen.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebFGreen.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#black_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").addClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Black");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownBlack.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebBlack.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebBlack.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebBlack.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#royal_blue_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").addClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Royal Blue");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownRBlue.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebRBlue.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebRBlue.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebRBlue.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#yellow_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").addClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Yellow");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownYellow.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebYellow.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebYellow.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebYellow.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#grey_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").addClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Grey");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownGrey.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebGrey.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebGrey.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebGrey.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#pink_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").addClass("selected");
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: Pink");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownPink.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebPink.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebPink.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebPink.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});

$("#purple_crown").click(function(){
	$("#red_crown").removeClass("selected");
	$("#tan_crown").removeClass("selected");
	$("#blonde_crown").removeClass("selected");
	$("#orange_crown").removeClass("selected");
	$("#white_crown").removeClass("selected");
	$("#navy_blue_crown").removeClass("selected");
	$("#brown_crown").removeClass("selected");
	$("#forest_green_crown").removeClass("selected");
	$("#black_crown").removeClass("selected");
	$("#royal_blue_crown").removeClass("selected");
	$("#yellow_crown").removeClass("selected");
	$("#grey_crown").removeClass("selected");
	$("#pink_crown").removeClass("selected");
	$("#purple_crown").addClass("selected");

	$("#crown_color").text("Color: Purple");

	$("#CCrown").attr("xlink:href","imgs/Catcher/Crown/CCrownPurple.png");
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/CGWeb/FBCGWebPurple.png");
	$("#FBBWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/CBWeb/FBCBWebPurple.png");
	$("#FBHWebCrownColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/CHWeb/FBCHWebPurple.png");
	//
	// handling step 2 count 
	//
	crown = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});

/////////////////////////////////////////////// crown color handler ends here ///////////////////////////////


/////////////////////////////////////////////////// hood color handler starts here /////////////////////////
$("#red_hood").click(function(){
	$("#red_hood").addClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Red");   

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHRed.png");                      
	//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                          
});
$("#tan_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").addClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Tan");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHTan.png");
	//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#blonde_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").addClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Bone");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHBlonde.png");
	//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#orange_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").addClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Orange");
	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHOrange.png");
	//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#white_hood").click(function(){

	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").addClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: White");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHWhite.png");
	//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#navy_blue_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").addClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Navy Blue");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHNBlue.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#brown_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").addClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Brown");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHBrown.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#forest_green_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").addClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Forest Green");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHFGreen.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#black_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").addClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Black");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHBlack.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#royal_blue_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").addClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Royal Blue");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHRBlue.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#yellow_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").addClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Yellow");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHYellow.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#grey_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").addClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Grey");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHGrey.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#pink_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").addClass("selected");
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: Pink");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHPink.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#purple_hood").click(function(){
	$("#red_hood").removeClass("selected");
	$("#tan_hood").removeClass("selected");
	$("#blonde_hood").removeClass("selected");
	$("#orange_hood").removeClass("selected");
	$("#white_hood").removeClass("selected");
	$("#navy_blue_hood").removeClass("selected");
	$("#brown_hood").removeClass("selected");
	$("#forest_green_hood").removeClass("selected");
	$("#black_hood").removeClass("selected");
	$("#royal_blue_hood").removeClass("selected");
	$("#yellow_hood").removeClass("selected");
	$("#grey_hood").removeClass("selected");
	$("#pink_hood").removeClass("selected");
	$("#purple_hood").addClass("selected");

	$("#hood_color").text("Color: Purple");

	$(".CHColors").attr("xlink:href","imgs/Catcher/FingerHoodColors/CFHPurple.png");//
	// handling step 2 count 
	//
	hood = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});

/////////////////////////////////////////////// hood color handler ends here ///////////////////////////////
/////////////////////////////////////////////////// pad color handler starts here /////////////////////////
$("#red_pad").click(function(){
	$("#red_pad").addClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Red");   

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPRed.png");                               
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#tan_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").addClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Tan");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPTan.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#blonde_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").addClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Bone");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPBlonde.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#orange_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").addClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Orange");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPOrange.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#white_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").addClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: White");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPWhite.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#navy_blue_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").addClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Navy Blue");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPNBlue.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#brown_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").addClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Brown");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPBrown.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#forest_green_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").addClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Forest Green");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPFGreen.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#black_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").addClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Black");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPBlack.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#royal_blue_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").addClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Royal Blue");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPRBlue.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#yellow_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").addClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Yellow");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPYellow.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#grey_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").addClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Grey");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPGrey.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});
$("#pink_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").addClass("selected");
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: Pink");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPPink.png");
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});

$("#purple_pad").click(function(){
	$("#red_pad").removeClass("selected");
	$("#tan_pad").removeClass("selected");
	$("#blonde_pad").removeClass("selected");
	$("#orange_pad").removeClass("selected");
	$("#white_pad").removeClass("selected");
	$("#navy_blue_pad").removeClass("selected");
	$("#brown_pad").removeClass("selected");
	$("#forest_green_pad").removeClass("selected");
	$("#black_pad").removeClass("selected");
	$("#royal_blue_pad").removeClass("selected");
	$("#yellow_pad").removeClass("selected");
	$("#grey_pad").removeClass("selected");
	$("#pink_pad").removeClass("selected");
	$("#purple_pad").addClass("selected");

	$("#pad_color").text("Color: Purple");

	$(".CPadColors").attr("xlink:href","imgs/Catcher/FingerPadColors/CFPPurple.png");
	//
	// handling step 2 count 
	//
	pad = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//                                                                                                                   
});

/////////////////////////////////////////////// pad color handler ends here ///////////////////////////////


/////////////////////////////////////////////////// Wrist color handler starts here /////////////////////////
$("#red_wrist").click(function(){
	$("#red_wrist").addClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Red");   

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristRed.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstRed.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstRed.png");
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#tan_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").addClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Tan");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristTan.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstTan.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstTan.png");
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#blonde_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").addClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Bone");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristBone.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstBlonde.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstBlonde.png");
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//

});
$("#orange_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").addClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Orange");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristOrange.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstOrange.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstOrange.png");                                              
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#white_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").addClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: White");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristWhite.png");                                                               
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstWhite.png");         
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstWhite.png");                                          
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#navy_blue_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").addClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Navy Blue");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristNBlue.png");                                                    
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstNBlue.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstNBlue.png");                                                               
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#brown_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").addClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Brown");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristBrown.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstBrown.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstBrown.png");                                                    
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#forest_green_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").addClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Forest Green");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristFGreen.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstFGreen.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstFGreen.png");                                               
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#black_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").addClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Black");                                                                     

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristBlack.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstBlack.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstBlack.png");                                              
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#royal_blue_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").addClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Royal Blue");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristRBlue.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstRBlue.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstRBlue.png");                                               
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#yellow_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").addClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Yellow");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristYellow.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstYellow.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstYellow.png");                                               
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#grey_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").addClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Grey");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristRedGrey.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstGrey.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstGrey.png");                                              
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#pink_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").addClass("selected");
	$("#purple_wrist").removeClass("selected");

	$("#wrist_color").text("Color: Pink");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristPink.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstPink.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstPink.png");                                              
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#purple_wrist").click(function(){
	$("#red_wrist").removeClass("selected");
	$("#tan_wrist").removeClass("selected");
	$("#blonde_wrist").removeClass("selected");
	$("#orange_wrist").removeClass("selected");
	$("#white_wrist").removeClass("selected");
	$("#navy_blue_wrist").removeClass("selected");
	$("#brown_wrist").removeClass("selected");
	$("#forest_green_wrist").removeClass("selected");
	$("#black_wrist").removeClass("selected");
	$("#royal_blue_wrist").removeClass("selected");
	$("#yellow_wrist").removeClass("selected");
	$("#grey_wrist").removeClass("selected");
	$("#pink_wrist").removeClass("selected");
	$("#purple_wrist").addClass("selected");

	$("#wrist_color").text("Color: Purple");

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristPurple.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/FWrstPurple.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FBWrstPurple.png");                                              
	//
	// handling step 2 count 
	//
	wrist = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});




/////////////////////////////////////////////// wrist color handler ends here ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// binding color handler start  /////////////////////////////////



$("#red_binding").click(function(){
	$("#red_binding").addClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Red"); 

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinRed.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinRed.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebRed.png");
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebRed.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebRed.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                     
});
$("#tan_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").addClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Tan");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinTan.png");                                                             
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinTan.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebTan.png");
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebTan.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebTan.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#blonde_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").addClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Bone");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinBone.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinBlonde.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebBlonde.png");                                        
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebBlonde.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebBlonde.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#orange_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").addClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Orange");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinOrange.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinOrange.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebOrange.png");
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebOrange.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebOrange.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#white_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").addClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: White");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinWhite.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinWhite.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebWhite.png");
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebWhite.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebWhite.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#navy_blue_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").addClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Navy Blue");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinNBlue.png");                                                 
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinNBlue.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebNBlue.png");
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebNBlue.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebNBlue.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                  
});
$("#brown_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").addClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Brown");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinBrown.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinBrown.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebBrown.png");                                               
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebBrown.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebBrown.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#black_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").addClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Black");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinBlack.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinBlack.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebBlack.png");                                               
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebBlack.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebBlack.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#royal_blue_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").addClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Royal Blue");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinRBlue.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinRBlue.png");      
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebRBlue.png");                                              
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebRBlue.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebRBlue.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#yellow_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").addClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Yellow");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinYellow.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinYellow.png");      
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebYellow.png");                                              
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebYellow.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebYellow.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#grey_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").addClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Grey");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinGrey.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinGrey.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebGrey.png");                                              
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebGrey.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebGrey.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#pink_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").addClass("selected");
	$("#purple_binding").removeClass("selected");

	$("#binding_color").text("Color: Pink");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinPink.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinPink.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebPink.png");                                              
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebPink.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebPink.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#purple_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").addClass("selected");

	$("#binding_color").text("Color: Purple");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinPurple.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinPurple.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebPurple.png");                                              
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebPurple.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebPurple.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#forest_green_binding").click(function(){
	$("#red_binding").removeClass("selected");
	$("#tan_binding").removeClass("selected");
	$("#blonde_binding").removeClass("selected");
	$("#orange_binding").removeClass("selected");
	$("#white_binding").removeClass("selected");
	$("#navy_blue_binding").removeClass("selected");
	$("#brown_binding").removeClass("selected");
	$("#forest_green_binding").removeClass("selected");
	$("#black_binding").removeClass("selected");
	$("#royal_blue_binding").removeClass("selected");
	$("#yellow_binding").removeClass("selected");
	$("#grey_binding").removeClass("selected");
	$("#pink_binding").removeClass("selected");
	$("#purple_binding").removeClass("selected");
	$("#forest_green_binding").addClass("selected");

	$("#binding_color").text("Color: Forest Green");

	$("#CBinding").attr("xlink:href","imgs/Catcher/Binding/CBinFGreen.png");
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/FBinFGreen.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/BinGWeb/FBBinGWebFGreen.png");                                              
	$("#FBBWebBinColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/BinBWeb/FBBinBWebFGreen.png");
	$("#FBHWebBinColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/BinHWeb/FBBinHWebFGreen.png");
	//
	// handling step 2 count 
	//
	binding = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
//////////////////////////////////////////////////////// binding color handler ends //////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////// stitch color handler starts here /////////////////////////






$("#red_stitch").click(function(){
	$("#red_stitch").addClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Red");   

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSRed.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebRed.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebRed.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebRed.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebRed.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebRed.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebRed.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebRed.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebRed.png");
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebRed.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebRed.png");                                             
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                 
});
$("#tan_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").addClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Tan");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSTan.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebTan.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebTan.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebTan.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebTan.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebTan.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebTan.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebTan.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebTan.png");
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebTan.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebTan.png");                                             
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#blonde_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").addClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Bone");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSBlonde.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebBlonde.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebBlonde.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebBlonde.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebBlonde.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebBlonde.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebBlonde.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebBlonde.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebBlonde.png");
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebBlonde.png");  
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebBlonde.png");                                           
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                 
});
$("#orange_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").addClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Orange");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSOrange.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebOrange.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebOrange.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebOrange.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebOrange.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebOrange.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebOrange.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebOrange.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebOrange.png");
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebOrange.png"); 
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebOrange.png");                                            
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#white_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").addClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: White");                                                                      

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSWhite.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebWhite.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebWhite.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebWhite.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebWhite.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebWhite.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebWhite.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebWhite.png");                  
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/fb1.png");        
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebWhite.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebWhite.png");
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#navy_blue_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").addClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Navy Blue");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSNBlue.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebNBlue.png"); 
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebNBlue.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebNBlue.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebNBlue.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebNBlue.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebNBlue.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebNBlue.png");                                                      
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebNBlue.png"); 
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebNBlue.png"); 
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebNBlue.png");                                            
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#brown_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").addClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Brown");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSBrown.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebBrown.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebBrown.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebBrown.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebBrown.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebBrown.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebBrown.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebBrown.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebBrown.png");                                             
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebBrown.png"); 
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebBrown.png");                                            
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#forest_green_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").addClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Forest Green");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSFGreen.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebFGreen.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebFGreen.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebFGreen.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebFGreen.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebFGreen.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebFGreen.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebFGreen.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebFGreen.png");
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebFGreen.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebFGreen.png");
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#black_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").addClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Black");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSBlack.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebBlack.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebBlack.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebBlack.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebBlack.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebBlack.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebBlack.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebBlack.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebBlack.png");
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebBlack.png"); 
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebBlack.png");                                            
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#royal_blue_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").addClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Royal Blue");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSRBlue.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebRBlue.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebRBlue.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebRBlue.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebRBlue.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebRBlue.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebRBlue.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebRBlue.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebRBlue.png");
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebRBlue.png"); 
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebRBlue.png");                                            
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	                                                                                                                   
});
$("#yellow_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").addClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Yellow");

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSYellow.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebYellow.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebYellow.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebYellow.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebYellow.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebYellow.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebYellow.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebYellow.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebYellow.png");                                             
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebYellow.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebYellow.png");                                             
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#grey_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").addClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Grey");                                                                      

	$("#CSColors").attr("xlink:href","imgs/Catcher/c0.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebGrey.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebGrey.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebGrey.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebGrey.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebGrey.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebGrey.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebGrey.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebGrey.png");                                             
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebGrey.png"); 
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebGrey.png");                                            
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#pink_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").addClass("selected");
	$("#purple_stitch").removeClass("selected");

	$("#stitch_color").text("Color: Pink");                                                                      

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSPink.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebPink.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebPink.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebPink.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebPink.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebPink.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebPink.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebPink.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebPink.png");                                             
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebPink.png"); 
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebPink.png");                                            
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});
$("#purple_stitch").click(function(){
	$("#red_stitch").removeClass("selected");
	$("#tan_stitch").removeClass("selected");
	$("#blonde_stitch").removeClass("selected");
	$("#orange_stitch").removeClass("selected");
	$("#white_stitch").removeClass("selected");
	$("#navy_blue_stitch").removeClass("selected");
	$("#brown_stitch").removeClass("selected");
	$("#forest_green_stitch").removeClass("selected");
	$("#black_stitch").removeClass("selected");
	$("#royal_blue_stitch").removeClass("selected");
	$("#yellow_stitch").removeClass("selected");
	$("#grey_stitch").removeClass("selected");
	$("#pink_stitch").removeClass("selected");
	$("#purple_stitch").addClass("selected");

	$("#stitch_color").text("Color: Purple");                                                                      

	$("#CSColors").attr("xlink:href","imgs/Catcher/StitchColors/CSPurple.png");
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/SKWeb/FSKWebPurple.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/SAWeb/FSAWebPurple.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/SEWeb/FSEWebPurple.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/SHWeb/FSHWebPurple.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/SIWeb/FSIWebPurple.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/SLWeb/FSLWebPurple.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/SMWeb/FSMWebPurple.png");
	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/GWeb/SGWeb/FBSGWebPurple.png");                                             
	$("#FBBWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/BWeb/SBWeb/FBSBWebPurple.png"); 
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/HWeb/SHWeb/FBSHWebPurple.png");                                            
	//
	// handling step 2 count 
	//
	stitch = 1;
	sel_prop = logo+lace+web+palm+back1+back2+back3+binding+crown+wrist+stitch+hood+pad+welting+wingtip;
	if(sel_prop != prop_total)
		$("#step_2_count").html("<span style = \"color:red;\" id = \"step_2_count\">("+sel_prop+"/"+prop_total+")</span>");
	else
		$("#step_2_count").html("<span style = \"color:green;\" id = \"step_2_count\">(Completed!)</span>");
	//
	
});

/////////////////////////////////////////////// stitch color handler ends here ///////////////////////////////


/////////////////////////////////////////////////////// text color handler starts ///////////////////////////

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
	$("#black_text_color").removeClass("selected");

	$(".CustomText").attr("fill","red");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")

});
$("#volt_green_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").addClass("selected");
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
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Volt Green");

	$(".CustomText").attr("fill","#73ff10");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")

});
$("#sky_blue_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").addClass("selected");
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
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Sky Blue");

	$(".CustomText").attr("fill","#6ebbd9");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")

});
$("#tan_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").addClass("selected");
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
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Tan");
	$(".CustomText").attr("fill","#b97a4f");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#blonde_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").removeClass("selected");
	$("#blonde_text_color").addClass("selected");
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
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Bone");
	$(".CustomText").attr("fill","#cdc3ae");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#teal_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").removeClass("selected");
	$("#blonde_text_color").removeClass("selected");
	$("#teal_text_color").addClass("selected");
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
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Teal");
	$(".CustomText").attr("fill","#0c929d");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#orange_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").removeClass("selected");
	$("#blonde_text_color").removeClass("selected");
	$("#teal_text_color").removeClass("selected");
	$("#orange_text_color").addClass("selected");
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
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Orange");
	$(".CustomText").attr("fill","#ff7409");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#white_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").removeClass("selected");
	$("#blonde_text_color").removeClass("selected");
	$("#teal_text_color").removeClass("selected");
	$("#orange_text_color").removeClass("selected");
	$("#white_text_color").addClass("selected");
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
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: White");
	$(".CustomText").attr("fill","white");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#pink_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").removeClass("selected");
	$("#blonde_text_color").removeClass("selected");
	$("#teal_text_color").removeClass("selected");
	$("#orange_text_color").removeClass("selected");
	$("#white_text_color").removeClass("selected");
	$("#pink_text_color").addClass("selected");
	$("#navy_blue_text_color").removeClass("selected");
	$("#purple_text_color").removeClass("selected");
	$("#royal_blue_text_color").removeClass("selected");
	$("#brown_text_color").removeClass("selected");
	$("#forest_green_text_color").removeClass("selected");
	$("#silver_text_color").removeClass("selected");
	$("#volt_yellow_text_color").removeClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Pink");
	$(".CustomText").attr("fill","#f4b1de");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#navy_blue_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").removeClass("selected");
	$("#blonde_text_color").removeClass("selected");
	$("#teal_text_color").removeClass("selected");
	$("#orange_text_color").removeClass("selected");
	$("#white_text_color").removeClass("selected");
	$("#pink_text_color").removeClass("selected");
	$("#navy_blue_text_color").addClass("selected");
	$("#purple_text_color").removeClass("selected");
	$("#royal_blue_text_color").removeClass("selected");
	$("#brown_text_color").removeClass("selected");
	$("#forest_green_text_color").removeClass("selected");
	$("#silver_text_color").removeClass("selected");
	$("#volt_yellow_text_color").removeClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Navy Blue");
	$(".CustomText").attr("fill","#324162");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#purple_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
	$("#volt_green_text_color").removeClass("selected");
	$("#sky_blue_text_color").removeClass("selected");
	$("#tan_text_color").removeClass("selected");
	$("#blonde_text_color").removeClass("selected");
	$("#teal_text_color").removeClass("selected");
	$("#orange_text_color").removeClass("selected");
	$("#white_text_color").removeClass("selected");
	$("#pink_text_color").removeClass("selected");
	$("#navy_blue_text_color").removeClass("selected");
	$("#purple_text_color").addClass("selected");
	$("#royal_blue_text_color").removeClass("selected");
	$("#brown_text_color").removeClass("selected");
	$("#forest_green_text_color").removeClass("selected");
	$("#silver_text_color").removeClass("selected");
	$("#volt_yellow_text_color").removeClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Purple");
	$(".CustomText").attr("fill","#733555");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#royal_blue_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
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
	$("#royal_blue_text_color").addClass("selected");
	$("#brown_text_color").removeClass("selected");
	$("#forest_green_text_color").removeClass("selected");
	$("#silver_text_color").removeClass("selected");
	$("#volt_yellow_text_color").removeClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Royal Blue");
	$(".CustomText").attr("fill","#1d5f98");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#brown_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
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
	$("#brown_text_color").addClass("selected");
	$("#forest_green_text_color").removeClass("selected");
	$("#silver_text_color").removeClass("selected");
	$("#volt_yellow_text_color").removeClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Brown");
	$(".CustomText").attr("fill","#542714");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#forest_green_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
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
	$("#forest_green_text_color").addClass("selected");
	$("#silver_text_color").removeClass("selected");
	$("#volt_yellow_text_color").removeClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Forest Green");
	$(".CustomText").attr("fill","#344d30");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#silver_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
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
	$("#silver_text_color").addClass("selected");
	$("#volt_yellow_text_color").removeClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Silver"); 
	$(".CustomText").attr("fill","#9e9e9e");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                  
});
$("#volt_yellow_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
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
	$("#volt_yellow_text_color").addClass("selected");
	$("#maroon_text_color").removeClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Volt Yellow");
	$(".CustomText").attr("fill","#fab900");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#maroon_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
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
	$("#maroon_text_color").addClass("selected");
	$("#gold_text_color").removeClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Maroon");
	$(".CustomText").attr("fill","#983636");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#gold_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
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
	$("#gold_text_color").addClass("selected");
	$("#black_text_color").removeClass("selected");

	$("#text_color").text("Color: Gold");
	$(".CustomText").attr("fill","#e1bb31");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});
$("#black_text_color").click(function(){
	$("#red_text_color").removeClass("selected");
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
	$("#black_text_color").addClass("selected");

	$("#text_color").text("Color: Black");
	$(".CustomText").attr("fill","black");

	text_color = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")                                                                                                                   
});

/////////////////////////////////////////////////////// text color handler ends here //////////////////////////////////
});
//
//
//
