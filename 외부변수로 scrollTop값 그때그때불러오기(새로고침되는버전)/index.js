
// 외부변수선언
var fixedNum_first = $("section.first").offset().top;
var fixedNum_second = $("section.second").offset().top;
var fixedNum_third = $("section.third").offset().top;
// console.log(fixedNum_second);

/* ====스크롤값을 불러오는 함수 시작==== */
$(window).resize(function(){
  $(document).on("scroll resize", function(){
    // 스크롤탑값 변수
    var scrollTop = $(document).scrollTop();

    // 리사이즈 끝나고 0.3초마다 리셋
    var delay = 300;
    var timer = null; 
    if (window.innerWidth > 500){
      $(window).on('resize', function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
        document.location.reload();
        }, delay);
      });
    };

    //현재 위치를 기억하여 새로고침시 그자리를 유지하기
    history.scrollRestoration = "auto";
    // console.log(scrollTop);

    // 첫번째영역
    if(scrollTop >= fixedNum_first){
      $("div.allWrap > p > span.num").text("01");
      $("div.allWrap > p > span.text").text("first");
    }
    // 두번째영역
    if(scrollTop >= fixedNum_second){
      $("div.allWrap > p > span.num").text("02");
      $("div.allWrap > p > span.text").text("second");
    }
    // 세번째영역
    if(scrollTop >= fixedNum_third){
      $("div.allWrap > p > span.num").text("03");
      $("div.allWrap > p > span.text").text("third");
    }
  });
}).resize(); 
