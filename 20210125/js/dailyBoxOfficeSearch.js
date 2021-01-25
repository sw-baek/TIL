
function my_func() {
    // 사용자가 입력한 날짜를 가져와서
    // 해당 날짜에 대한 boxoffice 순위를 알려주는 서버쪽 웹 프로그램을 호출
    // 그 결과를 화면에 출력
    let user_date = $('#userInputDate').val()
    let user_key = ''
    let open_api = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
    // let my_url = open_api + '?key=' + user_key + '&targetDt=' + user_date

    // 이렇게 하면 화면 refresh가 일어나서 원하는 작업을 할 수 없어요!
    // location.href = my_url
    // 이 문제를 해결하기 위해서 JavaScript가 가지고 있는 특별한 통신방식을 이용!
    // AJAX 통신방식을 이용해서 이 문제를 해결해 보아요!
    // 순수 JavaScript의 AJAX 코드가 구현하기 너무 어렵고 힘들기 때문에 jQuery를 이용해서
    // AJAX를 구현할 꺼에요!
    $.ajax({
        url : open_api,    // 호출할 서버쪽 프로그램의 URL
        type : 'GET',      // 서버쪽 프로그램에 대한 request 방식
        dataType : 'json', // 서버프로그램이 결과로 보내주는 데이터의 형식(json)
        data : {
            key : user_key,
            targetDt : user_date
        },
        success : function() {
            alert("서버호출성공!!")
        },
        error : function() {
            alert('먼가 이상해요!!!')
        }
    })

}