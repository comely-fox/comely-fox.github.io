// $("body").addClass('loading');
setTimeout(function(){
	$("body").removeClass('loading');
},2000);
function autoSize(){
	$(".content").css("height",$(window).height());
}
$(window).resize(function(){
	autoSize();
	var top = -gindex * $(window).height();
	$(".container-wrap").css({
		top: top
	});
});;
autoSize();
var gindex = 0;
$(window).load(function(){
	setTimeout(function(){
		$(".content").find(".sign").addClass("active");
	},2000);
});
function geIndex(eles,_this,_true){
	var num = 0;
	if (_true){
		num = 1;
	}
	var index = $(eles).index(_this) + num;
	var top = -index * $(window).height();
	if(index !== 0){
		$(".sign").removeClass('active');
	}else{
		$(".sign").addClass('active');
	}
	$(".container-wrap").css({
		top: top
	});
	$(".page-nav a").removeClass().eq(index).addClass('active');
	gindex = index;
}
$(".public-dowm").on("click",function(){
	geIndex(".public-dowm",this,true);
})
$(".page-nav a").on("click",function(){
	geIndex(".page-nav a",this);
})
var nowTop = 0;
$(window).on("mousewheel",function(event,delta){
	var dir = delta > 0 ? "up" : "down";
	var w_top = $(".container-wrap").position().top;
	if (nowTop == w_top){
		if (dir === "up"){
			gindex--;
			if (gindex === -1) gindex = 0;
		}else{
			gindex++;
			if (gindex === 5) gindex = 4;
		}
	}
	nowTop = -(gindex) * $(window).height();
	$(".container-wrap").css({
		top: nowTop
	});
	$(".page-nav a").removeClass().eq(gindex).addClass('active');
	if(gindex !== 0){
		$(".sign").removeClass('active');
	}else{
		$(".sign").addClass('active');
	}
	return false;
});
var sideIndex = 0;
$(".index3 .next").on("click",function(){
	$(this).triggerHandler("next");
}).on("next",function(){
	if (sideIndex < 4)  sideIndex++;
	var width = $(".showcasing .pic").eq(sideIndex - 1).outerWidth(true);
	sideImg(width);

});
$(".index3 .prev").on("click",function(){
	$(this).triggerHandler("prev");
}).on("prev",function(){
	if (sideIndex > -1) sideIndex--;
	var nextIndex = sideIndex === -1 ? -1 : sideIndex + 1;
	// 获取是自己未扩展的时候的width+margin
	var width = $(".showcasing .pic").eq(nextIndex).outerWidth(true);
	sideImg(width);
});

function sideImg(width){
	$(".showcasing .wrap").css({
		"left" : -sideIndex * width
	});
	$(".showcasing .pic").removeClass("active").eq(sideIndex + 1).addClass('active');
}

/*

var sideIndex = 0;
$(".index3 .next").on("click",function(){
	$(this).triggerHandler("next");
}).on("next",function(){
	// if (sideIndex < 4)  sideIndex++;
	// console.log(sideIndex)
	if (Math.abs(sideIndex) ===  4) sideIndex = -3;
	console.log(sideIndex)
	var width = $(".showcasing .pic").eq(Math.abs(sideIndex) - 1).outerWidth(true);
	sideImg(width,-1);

});
$(".index3 .prev").on("click",function(){
	$(this).triggerHandler("prev");
}).on("prev",function(){
	// if (sideIndex > -1) sideIndex--;
	// var nextIndex = sideIndex === -1 ? -1 : sideIndex + 1;
	// 获取是自己未扩展的时候的width+margin
	if (Math.abs(sideIndex) ===  1) sideIndex = 0;
	var width = $(".showcasing .pic").eq(Math.abs(sideIndex)-1).outerWidth(true);
	sideImg(width,1);
});

function sideImg(width,num){
	sideIndex += num;
	// console.log(sideIndex)
	$(".showcasing .wrap").css({
		"left" : sideIndex * width
	});
	if (sideIndex == 1){
		now = -1;
	}else{
		var now = Math.abs(sideIndex);
	}
	$(".showcasing .pic").removeClass("active").eq(now + 1).addClass('active');
}

 */