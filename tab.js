/*
버튼0 누르면
- 모든 버튼에 붙은 orange 클래스 명 제거
- 버튼 0에 orange 클래스명 추가
- 모든 div에 붙은 show 클래스명 제거
- div show클래스명 추가
*/ 

for(let i = 0; i<$('.nav-link').length; i++){
    $('.nav-link').eq(i).on('click',function(){
        $('.nav-link').removeClass('orange');
        $('.tab-content').removeClass('show');
        $(this).addClass('orange');
        $('.tab-content').eq(i).addClass('show');
    });
}
