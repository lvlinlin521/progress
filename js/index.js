//婚纱悬停效果
$(".hunsha").hover(
	    function(){
			var w = $(this).width();
			l = (w-490)/2;
		    $(".hunsha>a").addClass("hs_bg");
			$(this).find("img").stop(!0).animate({"width":"490px","top":"-15px","left":l+"px"},500);
			$(this).find("span").stop(!0).animate({"bottom":"410px"},function(){$(this).parent().siblings(".hide_div").show();});
			
		},
		function(){
			var w = $(this).width();
			l = (w-466)/2;
		    $(".hunsha>a").removeClass("hs_bg");
			$(this).find("img").stop(!0).animate({"width":"466px","top":"0px","left":l+"px"},500);
			$(this).find("span").stop(!0).animate({"bottom":"15px"});
			$(this).find(".hide_div").hide();	
		}
	)



//珠宝，美容，蜜月悬停效果
$(".zhubao,.meirong,.miyue").hover(
	    function(){
			var w = $(this).width();
			l = (w-490)/2;
			$(this).find(".main_img").addClass("hs_bg");
			$(this).find("img").stop(!0).animate({"width":"490px","top":"-8px","left":l+"px"},500);
			$(this).find("span").stop(!0).animate({"bottom":"200px"},function(){$(this).parent().siblings(".hide_d").show();});
			
			},
		function(){
			var w = $(this).width();
			l = (w-466)/2;
			$(this).find(".main_img").removeClass("hs_bg");
			$(this).find("img").stop(!0).animate({"width":"466px","top":"0px","left":l+"px"},500);
			$(this).find("span").stop(!0).animate({"bottom":"15px"});
			$(this).find(".hide_d").hide();
		}
	)
			
			
$(".q,.jiaju,.zhenshihunli,.hunlihunyan").hover(
	 function(){
		var w = $(this).width();
		l = (w-490)/2;
		$(this).find("img").stop(!0).animate({"width":"490px","top":"-8px","left":l+"px","opacity":"0.5"},500).css({"filter":"alpha(opacity=50)"});},
	function(){
		var w = $(this).width();
		l = (w-466)/2;
		$(this).find("img").stop(!0).animate({"width":"466px","top":"0px","left":l+"px","opacity":"1"},500).css({"filter":"alpha(opacity=100)"});}
)


//搭配Style
$(".dp_1>ul>li>a").mouseover(function(){
	$(".dp_1>ul>li>a>.dp_hide").hide();
	$(this).find(".dp_hide").show();
			
})
$(".dp_5>ul>li>a").mouseover(function(){
	$(".dp_5>ul>li>a>.dp_hide").hide();
	$(this).find(".dp_hide").show();		
})


$(".dp_2,.dp_3,.dp_4,.dp_6,.dp_7,.dp_8,.hl_1,.hl_2,.hl_5,.hl_6,.hl_7,.hl_8").hover(
	   function(){
		   $(this).find("span").fadeOut("fast");
		   $(this).find("b").stop(!0).animate({"top":"-47px"},500);
	  },
	  function(){
		   $(this).find("span").fadeIn("fast");
		   $(this).find("b").stop(!0).animate({"top":"38px"},200);}
)
		   
$(".hl_3").hover(
		function(){
			$(".hide_black").stop().animate({"opacity":"0.8"}).css("filter","alpha(opacity=80)").show();
		},
		function(){
			$(".hide_black").hide().stop().animate({"opacity":"0"});
		}
)	
	
r = $(".dp_5").find("li").width();
	$(".dp_5>ul").css("left",-r*2);
	t = setInterval(moveLeft,3000);
	$(".dp_5").hover(
		function(){
			$(".prev_btn,.next_btn").addClass("a_hover");
		},
		function(){
	    	$(".prev_btn,.next_btn").removeClass("a_hover");	
		}
	)
function moveLeft(){
    $(".dp_5>ul").css("left",-r);
	var h = $(".dp_5>ul>li").eq(0).html();
	$(".dp_5>ul").append("<li>"+h+"</li>");
	$(".dp_5>ul>li").eq(0).remove();
	$(".dp_5>ul").stop(!0).animate({"left":-r*2},1000);
}
function moveRight(){
    $(".dp_5>ul").css("left",-r*3);
	var s = $(".dp_5>ul>li").size();
	var h = $(".dp_5>ul>li").eq(s-1).html();
	$(".dp_5>ul").prepend("<li>"+h+"</li>");
	$(".dp_5>ul>li").eq(s).remove();
	$(".dp_5>ul").stop(!0).animate({"left":-r*2},1000);
}
function move_left(){
    moveLeft();
	clearInterval(t);
	t = setInterval(moveLeft,3000);	
}
function move_right(){
    moveRight();
	clearInterval(t);
	t = setInterval(moveRight,3000);	
}


//微信
$(".wx,.weixin").hover(
	function(){
		$(this).find("img").show();
	},
	function(){
		$(this).find("img").hide();
	}
)





