$(window).scroll(function () {
    let value = $(this).scrollTop(); /* 현재 스크롤 위치를 가져옵니다 */

    if (value >= 90) { 
        /* 스크롤 위치가 200 이상일 때 */
        $('.sub_gnb').css({
            position: "absolute",
            top: "90px"
        });
    } else {
        $('.sub_gnb').css({
            position: "absolute",
            top: "90px"
        });
    }
});
// gnb 버튼
$(document).ready(function () {
    // 초기 상태에서 첫 번째 li의 a 태그에 active 클래스 추가
    $(".gnb li:nth-child(3) a").addClass("gactive");

    // .sub_gnb 안의 a 태그 클릭 이벤트 설정
    $(".gnb a").on("click", function () {
        $(".gnb a").removeClass("gactive"); // 모든 a 태그의 active 제거

        // 클릭한 a 태그에 active 클래스 추가
        $(this).addClass("gactive");
    });
});

$(document).ready(function () {
    // 초기 상태에서 첫 번째 li의 a 태그에 active 클래스 추가
    $(".sub_gnb li:first-child a").addClass("active");

    // .sub_gnb 안의 a 태그 클릭 이벤트 설정
    $(".sub_gnb a").on("click", function (e) {
        e.preventDefault(); // 기본 동작 막기
        $(".sub_gnb a").removeClass("active"); // 모든 a 태그의 active 제거

        // 클릭한 a 태그에 active 클래스 추가
        $(this).addClass("active");
    });

});



const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

setTimeout(() => {
    let tl = gsap.timeline({
        onComplete: function () {

        },
    });
});

