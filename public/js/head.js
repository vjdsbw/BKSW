
$(document).ready(function () {
  //当页面滚动125px的时候，加钉子，让他钉在页面的指定位置(会在页面滚动过程中动态添加affix样式)
  $(".navbar").affix({
    offset: {
      top: 110,
    }
  })
  //每当加钉子执行的事件
  $(".navbar").on("affixed.bs.affix",function(){
    $(".logo img").attr("src","/public/img/logo2.png")
    $(".logo img").css("margin","-20px 20px")
    $(".logo").css("height",0)
    $(".navbar").css("height",0)
    $(".navbar").animate({
    height:'110px'
    })

  })
  //每当取消钉子执行的事件
  $(".navbar").on("affixed-top.bs.affix",function(){
    $(".logo img").attr("src","/public/img/logo.png")
    $(".logo img").css("margin","0 20px")
    $(".logo").css("height","110px")
  })
});
