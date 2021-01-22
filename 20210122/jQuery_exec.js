
function my_func() {
    // 버튼을 누르면 호출되요!!
    // jQuery 사용법
    // 1. selector부터 알아보아요!!
    // selector는 HTML엘리먼트를 지칭하는 특수한 표기법을 의미
    // jQuery는 $로 시작해요!
    // $(selector).method()
    // 1. 전체 선택자 : *
    // $('*').css('color','red');
    // 2. 태그 선택자 : 태그명을 가지고 선택
    // $('span').remove()
    // $('li').css('background-color','yellow')
    // 3. 아이디 선택자 : ID속성을 이용해서 선택
    // $('#inchon').text('소리없는 아우성!!')
    // 4. 클래스 선택자 : class속성을 이용해서 선택
    // $('.region').css('color','blue')
    // 5. 구조 선택자 : 부모, 자식, 형제 관계를 이용해서 선택
    $('ol > li').css('color','red')
}