$(function () {
  //1、首页
  //下拉框
  var flag = 0;//标识，初始为0
  $('header.header .fr').on('click', function () {
    $(this).toggleClass('down')
    $('section.mask').toggle()
    $('header.header .list').slideToggle()
    
    if ($('section.mask').css('display') == "block") {
      flag = 1;
      document.addEventListener('touchmove', function (event) { //监听滚动事件
        if (flag == 1) { //判断是遮罩显示时执行，禁止滚屏
          event.preventDefault(); //最关键的一句，禁止浏览器默认行为
        }
      })
    } else if ($('section.mask').css('display') == "none") {
      flag = 0;
    }
  })
  
  
  //banner轮播功能
  var swiper = new Swiper('.swiper-container', {
    initialSlide: 0,
    direction: 'horizontal',
    autoplay: 2000,
    loop: true,
    pagination: '.swiper-pagination',
    autoplayDisableOnInteraction: false
  });
  
  
  
  //2、业务领域
  //tab栏
  $('section.tab ul li').on('click', function () {
    var idx = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    $(this).parent().siblings('div').eq(idx).addClass('active').siblings('div').removeClass('active')
  })
  
  //3、新闻资讯
  var page = 1;
  MaxPageCount = 4;
  //下一页
  $('#next').on('click', function () {
    page++;
    if (page > MaxPageCount) {
      page = MaxPageCount;
    }
    $(".page span").eq(page).addClass('active').siblings('span').removeClass('active')
    // myAjax(page);
  })
  
  // 上一页
  $('#prev').on('click', function () {
    page--;
    if (page < 1) {
      page = 1;
    }
    $(".page span").eq(page).addClass('active').siblings('span').removeClass('active')
    // myAjax(page);
  });
  
  // 点击页码
  $(".page .num").on("click", function () {
    var pageNum = $(this).html();
    page = pageNum;
    $(this).addClass('active').siblings('span').removeClass('active')
    // myAjax(pageNum);
  })
  
  //4、联系我们
  //中文姓名正则
  // var namereg = /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/;
  // $('#name').blur(function () {
  //   var nameval = $(this).val().trim();
  //   if (!namereg.test(nameval)) {
  //     $('.name').html('*请输入中文姓名');
  //     $(this).val('')
  //     return false
  //   }
  // })
  //
  // $('#name').focus(function () {
  //   $('.name').html('');
  // })
  //
  
  //手机号正则
  var phonereg = /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/;
  $('#phone').blur(function () {
    var phoneval = $(this).val().trim();
    if (!phonereg.test(phoneval)) {
      $('.phone').html('*请输入正确手机号');
      $(this).val('')
      return false
    }
  })
  
  $('#phone').focus(function () {
    $('.phone').html('');
  })
  
  //邮箱正则
  var emailreg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  $('#email').blur(function () {
    var emailval = $(this).val().trim();
    if (!emailreg.test(emailval)) {
      $('.email').html('*请输入正确邮箱地址');
      $(this).val('')
      return false
    }
  })
  
  $('#email').focus(function () {
    $('.email').html('');
  })
})