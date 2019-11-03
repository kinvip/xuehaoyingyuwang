// 轮播图
var btn = $(".banner ul li");
var num = 0;
var time = null;
btn.hover(function(){
  // alert('经过');
  num = $(this).index();
  $(this).addClass("hot").siblings().removeClass("hot");
  $(".banner img").eq(num).show().siblings("img").hide();
  clearInterval(time);
}, function(){
  auto();
});

function auto() {
  time = setInterval(function(){
  	if (num > 3) {
  	  num = 0;
  	}
  	btn.eq(num).addClass("hot").siblings().removeClass("hot");
  	$(".banner img").eq(num).show().siblings("img").hide();
    num++;
  }, 1000);
}

auto();

// 返回顶部
$(".back").click(function() {
  $("html,body").animate({"scrollTop":"0px"},2000);
})

// 吸顶效果
$(window).scroll(function() {
  // 获取鼠标滚动高度
  var hh = $(window).scrollTop();
  if (hh >= 90) {
  	$(".nav").addClass("fixed");
  }else{
  	$(".nav").removeClass("fixed");
  }
});