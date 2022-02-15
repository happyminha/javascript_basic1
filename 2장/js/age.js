function calc() {
    var currentYear = 2022;
    var birthYear = prompt("태어난 년도를 입력하세요.","YYYY");
    var age = 0;
    //실제 나이를 구하기 위한 코드
    age = currentYear - birthYear +1;
    document.querySelector("#result").innerHTML = 
    //document는 현재 웹페이지를 의미,queryselector는 id가 result인 웹 요소(div)을 의미함.
    //innerhtml은 대입한 값
    "당신의 나이는" + age + "세 입니다.";
}