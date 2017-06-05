// JavaScript Document
$(document).ready(function() {

	// Counting Variables
	// these variables are used to keep track of  the options that are selected , and to perfrom proper checks
	// that if a particular option is selected or not, its basic purpose is validation
	var GloveType = 0, THand = 0, WGuard = 0, VWrist = 0, HoodPad = 0 , GameType = 0, LLength = 0, GSize = 0, Web = 0;
	var LogoP = 0,Logo93 = 0, LogoN = 0, Laces = 0; WebColor = 0,Palm = 0; Back1 = 1, back2 = 0, Back3 = 0,
		Binding = 0, Crown = 0, Wrist = 0, Stitch = 0, Welting = 0, Wingtip = 0;
	var TextColor = 0, TextFont = 0, text = 0, Flag = 0;
	var prop_sel = 0;
	var prop1_total = 9;
	var prop2_total = 15;
	var prop3_total = 4;
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// FUNCTIONS /////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function clearCrownColor(){
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
	$("#purple_crown").removeClass("selected");

	$("#crown_color").text("Color: none");

}
function clearHoodColor(){
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
	$("#purple_hood").removeClass("selected");

	$("#hood_color").text("Color: none");
}
function clearPadColor(){
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
	$("#purple_pad").removeClass("selected");

	$("#pad_color").text("Color: none");
}
function clearWingtipColor(){
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
	$("#purple_wingtip").removeClass("selected");

	$("#wingtip_color").text("Color: none");
}
function clearWeltingColor(){
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
	$("#purple_welting").removeClass("selected");

	$("#welting_color").text("Color: none");
}
function clearBack2Color(){
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
	$("#purple_back2").removeClass("selected");

	$("#back2_color").text("Color: none");
}
function clearBack3Color(){
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
	$("#purple_back3").removeClass("selected");

	$("#back3_color").text("Color: none");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// FUNCTIONS END //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Red");
	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNRed.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNRed.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Red.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Red.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Red.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NRed.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNRed.png");
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
	$("#grey_logo").removeClass("selected");

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNVGreen.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNVGreen.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2VGreen.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3VGreen.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4VGreen.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLVGreen.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1VGreen.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NVGreen.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNVGreen.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Sky Blue");

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNSBlue.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNSBlue.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2SBlue.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3SBlue.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4SBlue.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLSBlue.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1SBlue.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNSBlue.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NSBlue.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Tan");

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNTan.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNTan.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Tan.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Tan.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Tan.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLTan.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Tan.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NTan.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNTan.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Bone");  

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNBone.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNBone.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Blonde.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Blonde.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Blonde.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLBlonde.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Blonde.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NBone.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNBone.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Teal");    

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNTeal.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNTeal.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Teal.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Teal.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Teal.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLTeal.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Teal.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NTeal.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNTeal.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Orange");  

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNOrange.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNOrange.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Orange.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Orange.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Orange.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLOrange.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Orange.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NOrange.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNOrange.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: White");  

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNWhite.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNWhite.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2White.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3White.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4White.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLWhite.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1White.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NWhite.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNWhite.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Pink");

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNPink.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNPink.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Pink.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Pink.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Pink.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLPink.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Pink.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NPink.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNPink.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Navy Blue");  

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNNBlue.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNNBlue.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2NBlue.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3NBlue.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4NBlue.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLNBlue.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1NBlue.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NNBlue.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNNBlue.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Purple");  

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNPurple.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNPurple.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Purple.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Purple.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Purple.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLPurple.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Purple.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NPurple.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNPurple.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Royal Blue");

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNRBlue.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNRBlue.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2RBlue.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3RBlue.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4RBlue.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLRBlue.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1RBlue.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NRBlue.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNRBlue.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Brown");  

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNBrown.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNBrown.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Brown.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Brown.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Brown.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLBrown.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Brown.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NBrown.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNBrown.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Forest Green");

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNFGreen.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNFGreen.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2FGreen.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3FGreen.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4FGreen.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLFGreen.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1FGreen.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NFGreen.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNFGreen.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Silver");     

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNSilver.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNSilver.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Silver.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Silver.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Silver.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLSilver.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Silver.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NSilver.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNSilver.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Volt Yellow");

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNYellow.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNYellow.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Yellow.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Yellow.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Yellow.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLYellow.png"); 
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Yellow.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NYellow.png"); 
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNYellow.png");                                                   
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Maroon");  

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNMaroon.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNMaroon.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Maroon.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Maroon.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Maroon.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLMaroon.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Maroon.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NMaroon.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNMaroon.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Gold");                   

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNGold.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNGold.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Gold.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Gold.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Gold.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLGold.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Gold.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NGold.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNGold.png");
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
	$("#grey_logo").removeClass("selected");

	$("#logo_color").text("Color: Black");                   

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNBlack.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNBlack.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Black.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Black.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Black.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLBlack.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Black.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NBlack.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNBlack.png");
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
$("#grey_logo").click(function(){
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
	$("#black_logo").removeClass("selected");
	$("#grey_logo").addClass("selected");

	$("#logo_color").text("Color: Black");                   

	$("#CLogoN").attr("xlink:href","imgs/Catcher/Logo/LogoNGrey.png");
	$("#FLogoN").attr("xlink:href","imgs/Fielding/Logo/LogoNGrey.png");
	$("#FLImg2").attr("xlink:href","imgs/Fielding/LogoColors/FL2Grey.png");
	$("#FLImg3").attr("xlink:href","imgs/Fielding/LogoColors/FL3Grey.png");
	$("#FLImg4").attr("xlink:href","imgs/Fielding/LogoColors/FL4Grey.png");
	$("#FBLImg").attr("xlink:href","imgs/FirstBase/LogoColors/FBLGrey.png");
	$("#FBLImg1").attr("xlink:href","imgs/FirstBase/LogoColors/FBL1Grey.png");
	$("#FBLogoN").attr("xlink:href","imgs/FirstBase/Logo/NGrey.png");
	$("#FBLogoBackN").attr("xlink:href","imgs/FirstBase/Logo/LogoBackNGrey.png");
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
//
//
//
//
////////////////////////////////////////////////////// logo Patch color handler/////////////////////////////////////////
$("#red_logo_1").click(function(){
	$("#red_logo_1").addClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#logo_patch_color").text("Color: Red");
	$("#grey_logo_1").removeClass("selected");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchRed.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPRed.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PRed.png");
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
$("#volt_green_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").addClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#logo_patch_color").text("Color: Volt Green");
	$("#grey_logo_1").removeClass("selected");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchVGreen.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPVGreen.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PVGreen.png");
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
$("#sky_blue_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").addClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Sky Blue");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchSBlue.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPSBlue.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PSBlue.png");
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
$("#tan_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").addClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Tan");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchTan.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPTan.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PTan.png");
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
$("#blonde_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").addClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Bone");  

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchBone.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPBone.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PBone.png");
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
$("#teal_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").addClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#logo_patch_color").text("Color: Teal");    
	$("#grey_logo_1").removeClass("selected");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchTeal.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPTeal.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PTeal.png");
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
$("#orange_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").addClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#logo_patch_color").text("Color: Orange");  
	$("#grey_logo_1").removeClass("selected");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchOrange.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPOrange.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/POrange.png");
	
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
$("#white_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").addClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: White");  

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchWhite.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPWhite.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PWhite.png");
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
$("#pink_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").addClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Pink");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchPink.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPPink.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PPink.png");
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
$("#navy_blue_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").addClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Navy Blue");  

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchNBlue.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPNBlue.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PNBlue.png");
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
$("#purple_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").addClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Purple");  

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchPurple.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPPurple.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PPurple.png");
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
$("#royal_blue_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").addClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Royal Blue");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchRBlue.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPRBlue.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PRBlue.png");
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
$("#brown_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").addClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Brown");  

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchBrown.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPBrown.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PBrown.png");
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
$("#forest_green_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").addClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Forest Green");

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchFGreen.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPFGreen.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PFGreen.png");
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
$("#silver_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#silver_logo_1").addClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#gold_logo").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Silver");     


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
$("#volt_yellow_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").addClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Volt Yellow");

	 $("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchYellow.png");   
	 $("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPYellow.png"); 
	 $("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PYellow.png");                                               
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
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#maroon_logo").addClass("selected");
	$("#gold_logo").removeClass("selected");
	$("#grey_logo_1").removeClass("selected");
	
	$("#logo_patch_color").text("Color: Maroon");  

	
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
$("#gold_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");	
	$("#gold_logo_1").addClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Gold");                   

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchGold.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPGold.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PGold.png");
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
$("#black_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#black_logo_1").addClass("selected");
	$("#grey_logo_1").removeClass("selected");

	$("#logo_patch_color").text("Color: Black");                   

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchBlack.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPBlack.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PBlack.png");
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
$("#grey_logo_1").click(function(){
	$("#red_logo_1").removeClass("selected");
	$("#volt_green_logo_1").removeClass("selected");
	$("#sky_blue_logo_1").removeClass("selected");
	$("#tan_logo_1").removeClass("selected");
	$("#blonde_logo_1").removeClass("selected");
	$("#teal_logo_1").removeClass("selected");
	$("#orange_logo_1").removeClass("selected");
	$("#white_logo_1").removeClass("selected");
	$("#pink_logo_1").removeClass("selected");
	$("#navy_blue_logo_1").removeClass("selected");
	$("#purple_logo_1").removeClass("selected");
	$("#royal_blue_logo_1").removeClass("selected");
	$("#brown_logo_1").removeClass("selected");
	$("#forest_green_logo_1").removeClass("selected");
	$("#volt_yellow_logo_1").removeClass("selected");
	$("#gold_logo_1").removeClass("selected");
	$("#black_logo_1").removeClass("selected");
	$("#grey_logo_1").addClass("selected");

	$("#logo_patch_color").text("Color: Grey");                   

	$("#CLogoPatch").attr("xlink:href","imgs/Catcher/Logo/LogoPatchGrey.png");
	$("#FLogoPatch").attr("xlink:href","imgs/Fielding/Logo/LogoPGrey.png");
	$("#FBLogoPatch").attr("xlink:href","imgs/FirstBase/Logo/PGrey.png");
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
///////////////////////////////////////// logo patch color end/////////////////////////////////////
///
///
///
///
//
//
//
//
////////////////////////////////////////////////////// logo Patch color handler/////////////////////////////////////////
$("#red_logo_2").click(function(){
	$("#red_logo_2").addClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Red");

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NRed.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Red.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Red.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Red.png");
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
$("#volt_green_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").addClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Volt Green");

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NVGreen.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93VGreen.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93VGreen.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93VGreen.png");
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
$("#sky_blue_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").addClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Sky Blue");

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NSBlue.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93SBlue.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93SBlue.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93SBlue.png");
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
$("#tan_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").addClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Tan");

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NTan.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Tan.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Tan.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Tan.png");
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
$("#blonde_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").addClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Bone");  

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NBone.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Bone.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Bone.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Bone.png");
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
$("#teal_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").addClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Teal");    

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NTeal.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Teal.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Teal.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Teal.png");
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
$("#orange_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").addClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Orange");  

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NOrange.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Orange.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Orange.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Orange.png");
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
$("#white_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").addClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: White");  

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NWhite.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93White.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93White.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93White.png");
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
$("#pink_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").addClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Pink");

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NPink.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Pink.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Pink.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Pink.png");
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
$("#navy_blue_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").addClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Navy Blue");  

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NNBlue.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93NBlue.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93NBlue.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93NBlue.png");
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
$("#purple_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").addClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Purple");  

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NPurple.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Purple.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Purple.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Purple.png");
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
$("#royal_blue_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").addClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");
	

	$("#logo_9n_color").text("Color: Royal Blue");

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NRBlue.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93RBlue.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93RBlue.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93RBlue.png");
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
$("#brown_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").addClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Brown");  

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NBrown.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Brown.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Brown.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Brown.png");
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
$("#forest_green_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").addClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Forest Green");

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NFGreen.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93FGreen.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93FGreen.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93FGreen.png");
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
$("#silver_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#silver_logo_2").addClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#gold_logo").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Silver");     


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
$("#volt_yellow_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").addClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Volt Yellow");

	 $("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NYellow.png");    
	 $("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Yellow.png");  
	 $("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Yellow.png");   
	 $("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Yellow.png");                                          
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
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#gold_logo_2").removeClass("selected");
	$("#volt_yellow_logo_2").removeClass("selected");
	$("#maroon_logo").addClass("selected");
	$("#gold_logo").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#logo_9n_color").text("Color: Maroon");  

	
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
$("#gold_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#volt_yellow_logo_2").removeClass("selected");
	
	$("#gold_logo_2").addClass("selected");

	$("#logo_9n_color").text("Color: Gold");                   

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NGold.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Gold.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Gold.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Gold.png");
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
$("#black_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#grey_logo_2").removeClass("selected");

	$("#volt_yellow_logo_2").removeClass("selected");
	
	$("#gold_logo_2").removeClass("selected");
	$("#black_logo_2").addClass("selected");

	$("#logo_9n_color").text("Color: Black");                   

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NBlack.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Black.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Black.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Black.png");
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
$("#grey_logo_2").click(function(){
	$("#red_logo_2").removeClass("selected");
	$("#volt_green_logo_2").removeClass("selected");
	$("#sky_blue_logo_2").removeClass("selected");
	$("#tan_logo_2").removeClass("selected");
	$("#blonde_logo_2").removeClass("selected");
	$("#teal_logo_2").removeClass("selected");
	$("#orange_logo_2").removeClass("selected");
	$("#white_logo_2").removeClass("selected");
	$("#pink_logo_2").removeClass("selected");
	$("#navy_blue_logo_2").removeClass("selected");
	$("#purple_logo_2").removeClass("selected");
	$("#royal_blue_logo_2").removeClass("selected");
	$("#brown_logo_2").removeClass("selected");
	$("#forest_green_logo_2").removeClass("selected");
	$("#grey_logo_2").addClass("selected");
	
	$("#volt_yellow_logo_2").removeClass("selected");
	
	$("#gold_logo_2").removeClass("selected");
	$("#black_logo_2").addClass("selected");

	$("#logo_9n_color").text("Color: Grey");                   

	$("#CLogo9N").attr("xlink:href","imgs/Catcher/Logo/Logo9NGrey.png");
	$("#FLogo93").attr("xlink:href","imgs/Fielding/Logo/Logo93Grey.png");
	$("#FBLogo93").attr("xlink:href","imgs/FirstBase/Logo/93Grey.png");
	$("#FBLogoBack93").attr("xlink:href","imgs/FirstBase/Logo/LogoBack93Grey.png");
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
///////////////////////////////////////// logo patch color end/////////////////////////////////////
///
///
///
///
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebRed.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebRed.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebRed.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebRed.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebRed.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebRed.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebRed.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Red.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Red.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Red.png");
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
	

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/RedSBlue.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/SBlue.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/SBlue.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebTan.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebTan.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebTan.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebTan.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebTan.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebTan.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebTan.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Tan.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Tan.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Tan.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebBone.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebBone.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebBone.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebBone.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebBone.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebBone.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebBone.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Bone.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Bone.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Bone.png");
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
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Teal.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Teal.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebOrange.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebOrange.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebOrange.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebOrange.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebOrange.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebOrange.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebOrange.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Orange.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Orange.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Orange.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebWhite.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebWhite.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebWhite.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebWhite.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebWhite.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebWhite.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebWhite.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/White.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/White.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/White.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebNBlue.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebNBlue.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebNBlue.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebNBlue.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebNBlue.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebNBlue.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebNBlue.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/NBlue.png");                                                              
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/NBlue.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/NBlue.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebPurple.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebPurple.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebPurple.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebPurple.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebPurple.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebPurple.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebPurple.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Purple.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Purple.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Purple.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebBrown.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebBrown.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebBrown.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebBrown.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebBrown.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebBrown.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebBrown.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Brown.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Brown.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Brown.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebFGreen.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebFGreen.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebFGreen.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebFGreen.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebFGreen.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebFGreen.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebFGreen.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/FGreen.png");                                                     
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/FGreen.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/FGreen.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebBlack.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebBlack.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebBlack.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebBlack.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebBlack.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebBlack.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebBlack.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Black.png");                                                
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Black.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Black.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebRBlue.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebRBlue.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebRBlue.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebRBlue.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebRBlue.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebRBlue.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebRBlue.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/RBlue.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/RBlue.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/RBlue.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebYellow.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebYellow.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebYellow.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebYellow.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebYellow.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebYellow.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebYellow.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Yellow.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Yellow.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Yellow.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebGrey.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebGrey.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebGrey.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebGrey.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebGrey.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebGrey.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebGrey.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Grey.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Grey.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Grey.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebPink.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebPink.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebPink.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebPink.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebPink.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebPink.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebPink.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Pink.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Pink.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Pink.png");
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
	$("#FLaceColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Laces/LacesKWebPurple.png");
	$("#FLaceColors1").attr("xlink:href","imgs/Fielding/Web/AWeb/Laces/LacesAWebPurple.png");
	$("#FLaceColors2").attr("xlink:href","imgs/Fielding/Web/EWeb/Laces/LacesEWebPurple.png");
	$("#FLaceColors3").attr("xlink:href","imgs/Fielding/Web/HWeb/Laces/LacesHWebPurple.png");
	$("#FLaceColors4").attr("xlink:href","imgs/Fielding/Web/IWeb/Laces/LacesIWebPurple.png");
	$("#FLaceColors5").attr("xlink:href","imgs/Fielding/Web/LWeb/Laces/LacesLWebPurple.png");
	$("#FLaceColors6").attr("xlink:href","imgs/Fielding/Web/MWeb/Laces/LacesMWebPurple.png");

	$("#FBLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Laces/Purple.png");
	$("#FBGWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Laces/Purple.png");
	$("#FBHWebLaceColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Laces/Purple.png");
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebRed.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebRed.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebRed.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebRed.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebRed.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebRed.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebRed.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Red.png");                                        
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Red.png");                                        
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Red.png");                                        
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebTan.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebTan.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebTan.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebTan.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebTan.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebTan.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebTan.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Tan.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Tan.png");
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Tan.png");                                        
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebBone.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebBone.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebBone.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebBone.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebBone.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebBone.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebBone.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Bone.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Bone.png");  
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Bone.png");                                      
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebOrange.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebOrange.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebOrange.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebOrange.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebOrange.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebOrange.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebOrange.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Orange.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Orange.png");  
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Orange.png");                                      
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebWhite.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebWhite.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebWhite.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebWhite.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebWhite.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebWhite.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebWhite.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/White.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/White.png");
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/White.png");
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebNBlue.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebNBlue.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebNBlue.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebNBlue.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebNBlue.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebNBlue.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebNBlue.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/NBlue.png");                               
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/NBlue.png");
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/NBlue.png");                                        
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebBrown.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebBrown.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebBrown.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebBrown.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebBrown.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebBrown.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebBrown.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Brown.png");                                                  
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Brown.png");  
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Brown.png");                                      
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebFGreen.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebFGreen.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebFGreen.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebFGreen.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebFGreen.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebFGreen.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebFGreen.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/FGreen.png");                                                  
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/FGreen.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/FGreen.png");                                       
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebBlack.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebBlack.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebBlack.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebBlack.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebBlack.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebBlack.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebBlack.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Black.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Black.png");  
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Black.png");                                      
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebRBlue.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebRBlue.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebRBlue.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebRBlue.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebRBlue.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebRBlue.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebRBlue.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/RBlue.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/RBlue.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/RBlue.png");                                       
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebYellow.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebYellow.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebYellow.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebYellow.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebYellow.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebYellow.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebYellow.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Yellow.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Yellow.png");
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Yellow.png");                                       
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebGrey.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebGrey.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebGrey.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebGrey.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebGrey.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebGrey.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebGrey.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Grey.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Grey.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Grey.png");                                       
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebPink.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebPink.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebPink.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebPink.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebPink.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebPink.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebPink.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Pink.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Pink.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Pink.png");                                       
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
	$("#FWebColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Web/KWebPurple.png");
	$("#FAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Web/AWebPurple.png");
	$("#FEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Web/EWebPurple.png");
	$("#FHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Web/HWebPurple.png");
	$("#FIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Web/IWebPurple.png");
	$("#FLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Web/LWebPurple.png");
	$("#FMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Web/MWebPurple.png");

	$("#FBWebColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Web/Purple.png");
	$("#FBGWebColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Web/Purple.png"); 
	$("#FBHWebColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Web/Purple.png");                                       
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmRed.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Red.png");
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmTan.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Tan.png");
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmBone.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Bone.png");
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmOrange.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Orange.png");
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmWhite.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/White.png");
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmNBlue.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/NBlue.png");
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmBrown.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Brown.png");                                                          
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmFGreen.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/FGreen.png");                                                           
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmBlack.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Black.png");                                                   
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmRBlue.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/RBlue.png");                                                           
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmYellow.png");
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Yellow.png");                                                           
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmGrey.png"); 
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Grey.png");                                                         
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmPink.png"); 
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Pink.png");                                                         
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
	$("#FPColors").attr("xlink:href","imgs/Fielding/Palm/PalmPurple.png"); 
	$("#FBPalmColors").attr("xlink:href","imgs/FirstBase/Palm/Purple.png");                                                         
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Red.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Red.png");

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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Tan.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Tan.png");                                                
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Bone.png"); 
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Bone.png");                                                      
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Orange.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Orange.png");                                                    
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1White.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/White.png");                                                            
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1NBlue.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/NBlue.png");                                                     
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Brown.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Brown.png");                                                     
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1FGreen.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/FGreen.png");                                                     
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Black.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Black.png");                                                    
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1RBlue.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/RBlue.png");                                                     
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Yellow.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Yellow.png");                                                     
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Grey.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Grey.png");                                                        
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Pink.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Pink.png");                                                        
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
	$("#FBack1Colors").attr("xlink:href","imgs/Fielding/Back1/Back1Purple.png");
	$("#FBBackColors").attr("xlink:href","imgs/FirstBase/Back/Purple.png");                                                        
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

	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Red.png");//
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Tan.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Bone.png");
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

	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Orange.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2White.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2NBlue.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Brown.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2FGreen.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Black.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2RBlue.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Yellow.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Grey.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Pink.png");
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
	$("#FBack2Colors").attr("xlink:href","imgs/Fielding/Back2/Back2Purple.png");
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Red.png");
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Tan.png"); 
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Bone.png");
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Orange.png");
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3White.png");
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3NBlue.png");
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Brown.png");
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3FGreen.png");                                          
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Black.png");                                   
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3RBlue.png");                                        
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Yellow.png");                                    
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Grey.png");                                  
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Pink.png");                                  
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
	$("#FBack3Colors").attr("xlink:href","imgs/Fielding/Back3/Back3Purple.png");                                    
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelRed.png");                                        
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelTan.png");                                   
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelBone.png");                                    
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelOrange.png");                                      
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelWhite.png");                                     
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelNBlue.png");                                         
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelBrown.png");                                     
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelFGreen.png");                                            
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelBlack.png");                                     
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelRBlue.png");                                          
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelYellow.png");                                      
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelGrey.png");                                    
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelPink.png");                                    
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
	$("#FWelColors").attr("xlink:href","imgs/Fielding/Welting/WelPurple.png");                                      
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipRed.png");                                        
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipTan.png");                                   
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipBone.png");                                    
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipOrange.png");                                      
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipWhite.png");                                     
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipNBlue.png");                                         
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipBrown.png");                                     
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipFGreen.png");                                            
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipBlack.png");                                     
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipRBlue.png");                                          
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipYellow.png");                                      
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipGrey.png");                                    
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipPink.png");                                    
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
	$("#FWTColors").attr("xlink:href","imgs/Fielding/WingTip/WingtipPurple.png");                                      
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Red.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Tan.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Bone.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Orange.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/White.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/NBlue.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Brown.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/FGreen.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Black.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/RBlue.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Yellow.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Grey.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Pink.png");
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
	$("#FBCrownColors").attr("xlink:href","imgs/FirstBase/Crown/Purple.png");
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristRed.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Red.png");
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristTan.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Tan.png");
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristBone.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Bone.png");
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristOrange.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Orange.png");                                              
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristWhite.png");         
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/White.png");                                          
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristNBlue.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/NBlue.png");                                                               
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristBrown.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Brown.png");                                                    
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristFGreen.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/FGreen.png");                                               
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristBlack.png");
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Black.png");                                              
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristRBlue.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/RBlue.png");                                               
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristYellow.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Yellow.png");                                               
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

	$("#CWrist").attr("xlink:href","imgs/Catcher/Wrist/CWristGrey.png");
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristGrey.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Grey.png");                                              
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristPink.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Pink.png");                                              
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
	$("#FWrstColors").attr("xlink:href","imgs/Fielding/Wrist/WristPurple.png");     
	$("#FBWrstColors").attr("xlink:href","imgs/FirstBase/Wrist/Purple.png");                                              
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/Red.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Red.png");
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinTan.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Tan.png");
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinBone.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Bone.png");                                        
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinOrange.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Orange.png");
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinWhite.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/White.png");
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinNBlue.png");
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/NBlue.png");
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinBrown.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Brown.png");                                               
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinBlack.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Black.png");                                               
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinRBlue.png");      
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/RBlue.png");                                              
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinYellow.png");      
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Yellow.png");                                              
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinGrey.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Grey.png");                                              
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinPink.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Pink.png");                                              
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinPurple.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/Purple.png");                                              
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
	$("#FBinColors").attr("xlink:href","imgs/Fielding/Binding/BinFGreen.png");     
	$("#FBBinColors").attr("xlink:href","imgs/FirstBase/Binding/FGreen.png");                                              
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SRed.png");
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

	
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Red.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Red.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Red.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Red.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Red.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Red.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Red.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Red.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Red.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Red.png");                                             
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/STan.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Tan.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Tan.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Tan.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Tan.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Tan.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Tan.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Tan.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Tan.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Tan.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Tan.png");                                              
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SBone.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Bone.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Bone.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Bone.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Bone.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Bone.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Bone.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Bone.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Bone.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Bone.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Bone.png");                                           
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SOrange.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Orange.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Orange.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Orange.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Orange.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Orange.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Orange.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Orange.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Orange.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Orange.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Orange.png");                                             
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SWhite.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/White.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/White.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/White.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/White.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/White.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/White.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/White.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/White.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/White.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/White.png"); 
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SNBlue.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/NBlue.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/NBlue.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/NBlue.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/NBlue.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/NBlue.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/NBlue.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/NBlue.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/NBlue.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/NBlue.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/NBlue.png");                                             
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SBrown.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Brown.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Brown.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Brown.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Brown.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Brown.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Brown.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Brown.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Brown.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Brown.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Brown.png");                                             
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SFGreen.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/FGreen.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/FGreen.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/FGreen.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/FGreen.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/FGreen.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/FGreen.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/FGreen.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/FGreen.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/FGreen.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/FGreen.png"); 
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SBlack.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Black.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Black.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Black.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Black.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Black.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Black.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Black.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Black.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Black.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Black.png");                                             
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SRBlue.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/RBlue.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/RBlue.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/RBlue.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/RBlue.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/RBlue.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/RBlue.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/RBlue.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/RBlue.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/RBlue.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/RBlue.png");                                             
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SYellow.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Yellow.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Yellow.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Yellow.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Yellow.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Yellow.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Yellow.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Yellow.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Yellow.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Yellow.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Yellow.png");                                              
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SGrey.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Grey.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Grey.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Grey.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Grey.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Grey.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Grey.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Grey.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Grey.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Grey.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Grey.png");                                             
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SPink.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Pink.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Pink.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Pink.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Pink.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Pink.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Pink.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Pink.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Pink.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Pink.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Pink.png");                                            
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
	$("#CStitch").attr("xlink:href","imgs/Catcher/Stitch/SPurple.png");
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
	$("#FSColors").attr("xlink:href","imgs/Fielding/Web/KWeb/Stitch/Purple.png");
	$("#FSAWebColors").attr("xlink:href","imgs/Fielding/Web/AWeb/Stitch/Purple.png");
	$("#FSEWebColors").attr("xlink:href","imgs/Fielding/Web/EWeb/Stitch/Purple.png");
	$("#FSHWebColors").attr("xlink:href","imgs/Fielding/Web/HWeb/Stitch/Purple.png");
	$("#FSIWebColors").attr("xlink:href","imgs/Fielding/Web/IWeb/Stitch/Purple.png");
	$("#FSLWebColors").attr("xlink:href","imgs/Fielding/Web/LWeb/Stitch/Purple.png");
	$("#FSMWebColors").attr("xlink:href","imgs/Fielding/Web/MWeb/Stitch/Purple.png");

	$("#FBStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebB/Stitch/Purple.png");
	$("#FBGWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebG/Stitch/Purple.png");
	$("#FBHWebStitchColors").attr("xlink:href","imgs/FirstBase/Web/WebH/Stitch/Purple.png");                                            
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
//
//
//
///////////////////////////////////////////////////////// Flag haldler /////////////////////////////////////////////////
//////////////////////////////////////////////////////// flag handler /////////////////////////////////////////////////
$("#usa_flag").click(function(){
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/USA.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/USA.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/USA.png");
	prop2_total = 4;custom_flag = 0;
	Flag = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")
	
});
$("#puerto_flag").click(function(){
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/PR.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/PR.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/PR.png");
	prop2_total = 4;custom_flag = 0;
	Flag = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/PuertoRico.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/PuertoRico.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/PuertoRico.png");
	$("#flag_discription").attr("style","display:none");
	$("#flag_discription").val("");
});
$("#mexico_flag").click(function(){
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/Mexico.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/Mexico.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/Mexico.png");
	prop2_total = 4;custom_flag = 0;
	Flag = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/Mexico.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/Mexico.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/Mexico.png");
	$("#flag_discription").attr("style","display:none");
	$("#flag_discription").val("");
});
$("#cuba_flag").click(function(){
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/Cuba.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/Cuba.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/Cuba.png");
	prop2_total = 4;custom_flag = 0;
	Flag = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/Cuba.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/Cuba.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/Cuba.png");
	$("#flag_discription").attr("style","display:none");
	$("#flag_discription").val("");
});
$("#dominican_flag").click(function(){
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/Dominic.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/DR.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/DR.png");
	prop2_total = 4;custom_flag = 0;
	Flag = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/DominicanRepublic.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/DominicanRepublic.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/DominicanRepublic.png");
	$("#flag_discription").attr("style","display:none");
	$("#flag_discription").val("");
});
$("#australia_flag").click(function(){
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/Australia.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/Australia.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/Australia.png");
	prop2_total = 4;custom_flag = 0;
	Flag = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")
	$("#CFlag").attr("xlink:href","imgs/Catcher/Flags/Australia.png");
	$("#FFlag").attr("xlink:href","imgs/Fielding/Flags/Australia.png");
	$("#FBFlag").attr("xlink:href","imgs/FirstBase/Flags/Australia.png");
	$("#flag_discription").attr("style","display:none");
	$("#flag_discription").val("");
});
$("#other_flag").click(function(){
	$("#CFlag").attr("xlink:href","");
	$("#FFlag").attr("xlink:href","");
	$("#FBFlag").attr("xlink:href","");
	prop2_total = 5;custom_flag = 0;
	Flag = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")
	
	$("#FFlag").attr("xlink:href","");
	$("#FBFlag").attr("xlink:href","");
	$("#flag_discription").attr("style","display:block");
});
///////////////////////////////////////////////////////// Flag handler end here ////////////////////////////////////////
//
//
//
///////////////////////////////////////////////////////// thumb test handler ////////////////////////////////////////////
//////////////////////////////////////////////////// thumb text text box input handler ///////////////////////////

$("#TB_ThumbText").keyup(function(){
	var text  = $("#TB_ThumbText").val();
	$(".CustomText").html(text);
	thumb_text = 1;
	 sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")
	
});
$("#text_font_block").click(function(){
	$(".CustomText").attr("font-family","verdana");
	$(".CustomText").attr("font-size","12px");
	text_font = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")

	
});
$("#text_font_script").click(function(){
		$(".CustomText").attr("font-family","Kunstler Script");
	$(".CustomText").attr("font-size","25px");

	text_font = 1;
	sel_prop1 =  text_color+text_font+thumb_text+Flag+custom_flag;
	 if(sel_prop1 != prop2_total)
		$("#step_3_count").html("<span style = \"color:red;\" id = \"step_3_count\">("+sel_prop1+"/"+prop2_total+")</span>")
	else
		$("#step_3_count").html("<span style = \"color:green;\" id = \"step_3_count\">(Completed!)</span>")


});

//////////////////////////////////////////////////// thumb text text box input handler ends ///////////////////////////
//
//
//
////////////////////////////////////////////////////////// Glove type selector //////////////////////////////////////////

$("#f_type1").click(function(){

	$("#glove_size_catcher").attr("style","display:block;");
	$("#glove_size_fielding").attr("style","display:none;");
	$("#glove_size_fbase").attr("style","display:none;");
	$("#glove_size_softball").attr("style","display:none;");

	$("#CatcherView").attr("style","display:block");
	$("#FieldingView").attr("style","display:none");
	$("#FirstBaseView").attr("style","display:none");
	$("#SoftBallView").attr("style","display:none");

	$("#Fieldingback2").attr("style","display:none");
	$("#Fieldingback3").attr("style","display:none");
	$("#FieldingWelting").attr("style","display:none");
	$("#FieldingWingTip").attr("style","display:none");
	$("#Crown").attr("style","display:block;");
	$("#game_type").attr("style","display:none;");
	$("#firstbase_webstyles").attr("style","display:none;");
	$("#fielding_web_styles").attr("style","display:none");
	$("#finger_HoodPad").attr("style","display:block;");

	prop1_total = 7;Web = 0; GameType = 0;GSize = 0;
	GloveType = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + HoodPad + LLength + GSize + Web + GameType;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")


});
$("#f_type2").click(function(){

	$("#glove_size_catcher").attr("style","display:none;");
	$("#glove_size_fielding").attr("style","display:block;");
	$("#glove_size_fbase").attr("style","display:none;");
	$("#glove_size_softball").attr("style","display:none;");

	$("#CatcherView").attr("style","display:none");
	$("#FieldingView").attr("style","display:block");
	$("#FirstBaseView").attr("style","display:none");
	$("#SoftBallView").attr("style","display:none");

	$("#Fieldingback2").attr("style","display:block");
	$("#Fieldingback3").attr("style","display:block");
	$("#FieldingWelting").attr("style","display:block");
	$("#FieldingWingTip").attr("style","display:block");
	$("#Crown").attr("style","display:none;");
	$("#firstbase_webstyles").attr("style","display:none;");
	$("#game_type").attr("style","display:none;");
	$("#finger_HoodPad").attr("style","display:block;");

	prop1_total = 8;GameType = 0;GSize = 0;
	GloveType = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + HoodPad + LLength + GSize + Web + GameType;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")


});
$("#f_type3").click(function(){

	$("#glove_size_catcher").attr("style","display:none;");
	$("#glove_size_fielding").attr("style","display:none;");
	$("#glove_size_fbase").attr("style","display:block;");
	$("#glove_size_softball").attr("style","display:none;");

	$("#CatcherView").attr("style","display:none");
	$("#FieldingView").attr("style","display:none");
	$("#FirstBaseView").attr("style","display:block");
	$("#SoftBallView").attr("style","display:none");

	$("#Fieldingback2").attr("style","display:none");
	$("#Fieldingback3").attr("style","display:none");
	$("#FieldingWelting").attr("style","display:none");
	$("#FieldingWingTip").attr("style","display:none");
	$("#Crown").attr("style","display:block;");
	$("#game_type").attr("style","display:none;");
	$("#finger_HoodPad").attr("style","display:none;");

	$("#firstbase_webstyles").attr("style","display:block;");
	$("#fielding_web_styles").attr("style","display:none");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:none");
	$("#f_web_i").attr("style","display:none");
	$("#f_web_k").attr("style","display:none");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");

	prop1_total = 7;GameType = 0;HoodPad = 0;GSize = 0;
	GloveType = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")


});
//////////////////////////////////////////////////////////// glove velcro wrist handler ////////////////////////

$("#velcro_wrist_yes").click(function(){
	VWrist = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#velcro_wrist_no").click(function(){
	VWrist = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
///////////////////////////////////////////////////////// glove velcro wrist handler ends //////////////////////
//////////////////////////////////////////////////////// glove throwing hand handler start ////////////////////

$("#throwing_hand_left").click(function(){
	THand = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#throwing_hand_right").click(function(){
	THand = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
//////////////////////////////////////////////////////// glove throwing handler ends ///////////////////////////
///////////////////////////////////////////////////////// glove wrist guard handler stasts /////////////////////

$("#wrist_guard_yes").click(function(){
	WGuard = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#wrist_guard_no").click(function(){
	WGuard = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
///////////////////////////////////////////////////////// glove wrist gurad handler ends ///////////////////////
//
//////////////////////////////////////////////////////// glove finger hood handler stars ////////////////////////
//var isAlreadyIncreamented = 1;
$("#finger_hood_none").click(function(){
	//$("#img2").attr("src","pics/classic_series.png");
	//$(".CHColors").attr("style","display:none");
	//$(".CPadColors").attr("style","display:none");
	//$("#FingerHoodColors").attr("style","display:none");
	//$("#FingerPadColors").attr("style","display:none");
	HoodPad = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
	
});
$("#finger_hood_pad").click(function(){
	//$("#img2").attr("src","pics/classic_series.png");
	//$(".CHColors").attr("style","display:none");
	//$(".CPadColors").attr("style","display:block");
	//$("#FingerHoodColors").attr("style","display:none");
	//$("#FingerPadColors").attr("style","display:block");
	HoodPad = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
	
});
$("#finger_hood_hood").click(function(){
	//$("#img2").attr("src","pics/classic_series.png");
	//$(".CHColors").attr("style","display:block");
	//$(".CPadColors").attr("style","display:none");
	//$("#FingerHoodColors").attr("style","display:block");
	//$("#FingerPadColors").attr("style","display:none");
	HoodPad = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
	
});
//////////////////////////////////////////////////////// glove finger hood handler edns ///////////////////////////
//
/////////////////////////////////////////////////////// glove lace length handler ///////////////////////////////////////
$("#lace_length_normal").click(function(){
	LLength = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#lace_length_long").click(function(){
	LLength = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
////////////////////////////////////////////////////// glove lace length handler ends ///////////////////////////////////
//
///////////////////////////////////////////////////// Game Type Handler  //////////////////////////////////////////////////
$("#game_type_slowPitching").click(function(){
	GameType = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#game_type_fastPitching").click(function(){
	GameType = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
///////////////////////////////////////////////////// Game type handler ends here /////////////////////////////////////////
$("#lace_length_long").click(function(){
	LLength = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
////////////////////////////////////////////////////////// Catcher Glove size handler //////////////////////////////
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#glove_size_32").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_32_5").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_33").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_33_5").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_34").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_35").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////fielding sizes //////////////////////////////////////////
$("#glove_size_9_5").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:block");
	$("#f_web_h").attr("style","display:none");
	$("#f_web_i").attr("style","display:none");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_10").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:none");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:block");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_10_5").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:none");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_10_75").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:none");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_11").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:block");
	$("#f_web_h").attr("style","display:none");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:block");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_11_25").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:block");
	$("#f_web_h").attr("style","display:none");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:block");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_11_50_f").click(function(){


	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:block");
	$("#f_web_e").attr("style","display:block");
	$("#f_web_h").attr("style","display:none");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:block");
	$("#f_web_m").attr("style","display:block");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")

});
$("#glove_size_11_75_f").click(function(){

});
$("#glove_size_12_f").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:block");
	$("#f_web_e").attr("style","display:block");
	$("#f_web_h").attr("style","display:block");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:block");
	$("#f_web_m").attr("style","display:block");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_12_25_f").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:block");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_12_50_f").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:block");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_12_75_f").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:block");
	$("#f_web_i").attr("style","display:block");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_13_f").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:block");
	$("#f_web_i").attr("style","display:none");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_13_25_f").click(function(){

	$("#fielding_web_styles").attr("style","display:block");
	$("#f_web_a").attr("style","display:none");
	$("#f_web_e").attr("style","display:none");
	$("#f_web_h").attr("style","display:block");
	$("#f_web_i").attr("style","display:none");
	$("#f_web_k").attr("style","display:block");
	$("#f_web_l").attr("style","display:none");
	$("#f_web_m").attr("style","display:none");
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
////////////////////////////Fielding size handler ends///////////////////////////////////////////////////////////////////////
//
//
//
//
///////////////////////////////////////////////// First base size handler /////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#glove_size_12_fb").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_12_25_fb").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_12_50_fb").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_12_75_fb").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_13_fb").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_13_25_fb").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_13_50_fb").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#glove_size_14_fb").click(function(){
	GSize = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
///////////////////////////////////////////////////// first base size handler ends ///////////////////////////////////////

///////////////////////////////////////////////////// webstyles fielding handler /////////////////////////////////
$("#fielding_web_k").click(function(){

	$("#FWebColors").attr("opacity","1");
	$("#FAWebColors").attr("opacity","0");
	$("#FEWebColors").attr("opacity","0");
	$("#FHWebColors").attr("opacity","0");
	$("#FIWebColors").attr("opacity","0");
	$("#FLWebColors").attr("opacity","0");
	$("#FMWebColors").attr("opacity","0");

	$("#FSColors").attr("opacity","1");
	$("#FSAWebColors").attr("opacity","0");
	$("#FSEWebColors").attr("opacity","0");
	$("#FSHWebColors").attr("opacity","0");
	$("#FSIWebColors").attr("opacity","0");
	$("#FSLWebColors").attr("opacity","0");
	$("#FSMWebColors").attr("opacity","0");

	$("#FLaceColors").attr("opacity","1");
	$("#FLaceColors1").attr("opacity","0");
	$("#FLaceColors2").attr("opacity","0");
	$("#FLaceColors3").attr("opacity","0");
	$("#FLaceColors4").attr("opacity","0");
	$("#FLaceColors5").attr("opacity","0");
	$("#FLaceColors6").attr("opacity","0");

	$("#FLImg3").attr("xlink:href","");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")

});
$("#fielding_web_a").click(function(){

	$("#FWebColors").attr("opacity","0");
	$("#FAWebColors").attr("opacity","1");
	$("#FEWebColors").attr("opacity","0");
	$("#FHWebColors").attr("opacity","0");
	$("#FIWebColors").attr("opacity","0");
	$("#FLWebColors").attr("opacity","0");
	$("#FMWebColors").attr("opacity","0");

	$("#FSColors").attr("opacity","0");
	$("#FSAWebColors").attr("opacity","1");
	$("#FSEWebColors").attr("opacity","0");
	$("#FSHWebColors").attr("opacity","0");
	$("#FSIWebColors").attr("opacity","0");
	$("#FSLWebColors").attr("opacity","0");
	$("#FSMWebColors").attr("opacity","0");

	$("#FLaceColors").attr("opacity","0");
	$("#FLaceColors1").attr("opacity","1");
	$("#FLaceColors2").attr("opacity","0");
	$("#FLaceColors3").attr("opacity","0");
	$("#FLaceColors4").attr("opacity","0");
	$("#FLaceColors5").attr("opacity","0");
	$("#FLaceColors6").attr("opacity","0");

	$("#FLImg3").attr("xlink:href","");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")

});
$("#fielding_web_e").click(function(){

	$("#FWebColors").attr("opacity","0");
	$("#FAWebColors").attr("opacity","0");
	$("#FEWebColors").attr("opacity","1");
	$("#FHWebColors").attr("opacity","0");
	$("#FIWebColors").attr("opacity","0");
	$("#FLWebColors").attr("opacity","0");
	$("#FMWebColors").attr("opacity","0");

	$("#FSColors").attr("opacity","0");
	$("#FSAWebColors").attr("opacity","0");
	$("#FSEWebColors").attr("opacity","1");
	$("#FSHWebColors").attr("opacity","0");
	$("#FSIWebColors").attr("opacity","0");
	$("#FSLWebColors").attr("opacity","0");
	$("#FSMWebColors").attr("opacity","0");

	$("#FLaceColors").attr("opacity","0");
	$("#FLaceColors1").attr("opacity","0");
	$("#FLaceColors2").attr("opacity","1");
	$("#FLaceColors3").attr("opacity","0");
	$("#FLaceColors4").attr("opacity","0");
	$("#FLaceColors5").attr("opacity","0");
	$("#FLaceColors6").attr("opacity","0");

	$("#FLImg3").attr("xlink:href","");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")

});
$("#fielding_web_h").click(function(){

	$("#FWebColors").attr("opacity","0");
	$("#FAWebColors").attr("opacity","0");
	$("#FEWebColors").attr("opacity","0");
	$("#FHWebColors").attr("opacity","1");
	$("#FIWebColors").attr("opacity","0");
	$("#FLWebColors").attr("opacity","0");
	$("#FMWebColors").attr("opacity","0");

	$("#FSColors").attr("opacity","0");
	$("#FSAWebColors").attr("opacity","0");
	$("#FSEWebColors").attr("opacity","0");
	$("#FSHWebColors").attr("opacity","1");
	$("#FSIWebColors").attr("opacity","0");
	$("#FSLWebColors").attr("opacity","0");
	$("#FSMWebColors").attr("opacity","0");

	$("#FLaceColors").attr("opacity","0");
	$("#FLaceColors1").attr("opacity","0");
	$("#FLaceColors2").attr("opacity","0");
	$("#FLaceColors3").attr("opacity","1");
	$("#FLaceColors4").attr("opacity","0");
	$("#FLaceColors5").attr("opacity","0");
	$("#FLaceColors6").attr("opacity","0");

	$("#FLImg3").attr("xlink:href","");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")

});
$("#fielding_web_i").click(function(){

	$("#FWebColors").attr("opacity","0");
	$("#FAWebColors").attr("opacity","0");
	$("#FEWebColors").attr("opacity","0");
	$("#FHWebColors").attr("opacity","0");
	$("#FIWebColors").attr("opacity","1");
	$("#FLWebColors").attr("opacity","0");
	$("#FMWebColors").attr("opacity","0");

	$("#FSColors").attr("opacity","0");
	$("#FSAWebColors").attr("opacity","0");
	$("#FSEWebColors").attr("opacity","0");
	$("#FSHWebColors").attr("opacity","0");
	$("#FSIWebColors").attr("opacity","1");
	$("#FSLWebColors").attr("opacity","0");
	$("#FSMWebColors").attr("opacity","0");

	$("#FLaceColors").attr("opacity","0");
	$("#FLaceColors1").attr("opacity","0");
	$("#FLaceColors2").attr("opacity","0");
	$("#FLaceColors3").attr("opacity","0");
	$("#FLaceColors4").attr("opacity","1");
	$("#FLaceColors5").attr("opacity","0");
	$("#FLaceColors6").attr("opacity","0");

	$("#FLImg3").attr("xlink:href","imgs/Fielding/f14.png");
	$("#FLImg3").attr("opacity","1");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#fielding_web_l").click(function(){

	$("#FWebColors").attr("opacity","0");
	$("#FAWebColors").attr("opacity","0");
	$("#FEWebColors").attr("opacity","0");
	$("#FHWebColors").attr("opacity","0");
	$("#FIWebColors").attr("opacity","0");
	$("#FLWebColors").attr("opacity","1");
	$("#FMWebColors").attr("opacity","0");

	$("#FSColors").attr("opacity","0");
	$("#FSAWebColors").attr("opacity","0");
	$("#FSEWebColors").attr("opacity","0");
	$("#FSHWebColors").attr("opacity","0");
	$("#FSIWebColors").attr("opacity","0");
	$("#FSLWebColors").attr("opacity","1");
	$("#FSMWebColors").attr("opacity","0");

	$("#FLaceColors").attr("opacity","0");
	$("#FLaceColors1").attr("opacity","0");
	$("#FLaceColors2").attr("opacity","0");
	$("#FLaceColors3").attr("opacity","0");
	$("#FLaceColors4").attr("opacity","0");
	$("#FLaceColors5").attr("opacity","1");
	$("#FLaceColors6").attr("opacity","0");

	$("#FLImg3").attr("xlink:href","");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")

});
$("#fielding_web_m").click(function(){

	$("#FWebColors").attr("opacity","0");
	$("#FAWebColors").attr("opacity","0");
	$("#FEWebColors").attr("opacity","0");
	$("#FHWebColors").attr("opacity","0");
	$("#FIWebColors").attr("opacity","0");
	$("#FLWebColors").attr("opacity","0");
	$("#FMWebColors").attr("opacity","1");

	$("#FSColors").attr("opacity","0");
	$("#FSAWebColors").attr("opacity","0");
	$("#FSEWebColors").attr("opacity","0");
	$("#FSHWebColors").attr("opacity","0");
	$("#FSIWebColors").attr("opacity","0");
	$("#FSLWebColors").attr("opacity","0");
	$("#FSMWebColors").attr("opacity","1");

	$("#FLaceColors").attr("opacity","0");
	$("#FLaceColors1").attr("opacity","0");
	$("#FLaceColors2").attr("opacity","0");
	$("#FLaceColors3").attr("opacity","0");
	$("#FLaceColors4").attr("opacity","0");
	$("#FLaceColors5").attr("opacity","0");
	$("#FLaceColors6").attr("opacity","1");

	$("#FLImg3").attr("xlink:href","");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")

});
//////////////////////////////////////////////////////// First Base Web Styles //////////////////////////////////
$("#firstbase_web_g").click(function(){

	$("#FBWebColors").attr("opacity","0");
	$("#FBLaceColors").attr("opacity","0");
	$("#FBStitchColors").attr("opacity","0");

	$("#FBGWebColors").attr("opacity","1");
	$("#FBGWebLaceColors").attr("opacity","1");
	$("#FBGWebStitchColors").attr("opacity","1");

	$("#FBHWebColors").attr("opacity","0");
	$("#FBHWebLaceColors").attr("opacity","0");
	$("#FBHWebStitchColors").attr("opacity","0");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#firstbase_web_b").click(function(){

	$("#FBWebColors").attr("opacity","1");
	$("#FBLaceColors").attr("opacity","1");
	$("#FBStitchColors").attr("opacity","1");

	$("#FBGWebColors").attr("opacity","0");
	$("#FBGWebLaceColors").attr("opacity","0");
	$("#FBGWebStitchColors").attr("opacity","0");

	$("#FBHWebColors").attr("opacity","0");
	$("#FBHWebLaceColors").attr("opacity","0");
	$("#FBHWebStitchColors").attr("opacity","0");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});
$("#firstbase_web_h").click(function(){

	$("#FBWebColors").attr("opacity","0");
	$("#FBLaceColors").attr("opacity","0");
	$("#FBStitchColors").attr("opacity","0");

	$("#FBGWebColors").attr("opacity","0");
	$("#FBGWebLaceColors").attr("opacity","0");
	$("#FBGWebStitchColors").attr("opacity","0");

	$("#FBHWebColors").attr("opacity","1");
	$("#FBHWebLaceColors").attr("opacity","1");
	$("#FBHWebStitchColors").attr("opacity","1");
	Web = 1;
	prop_sel = GloveType + THand + WGuard + VWrist + LLength + GSize + Web + GameType + HoodPad;
	if(prop_sel != prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:red;\"><b>("+prop_sel+"/"+prop1_total+")</b></span>")
	if(prop_sel == prop1_total)
		$("#prop_count").html("Select Options Bellow<span style = \"color:green;\"><b>(Completed)</b></span>")
});

///////////////////////////////////////////////////// webs tyle fielding handler ends////////////////////////////






});
//
//
//

















































































































































