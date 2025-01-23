// Hide Header on on scroll down
$(window).scroll(function () {
    let value = $(this).scrollTop();
    if (value >= 560) {
        $('.lush_title').animate({
            opacity: "1"
        }, 100);
    }
    if (value >= 4000) {
        $('.review1').css('transform', 'translateY(0px)');
        $('.review1').animate({ opacity: "1" }, 500)
        $('.review4').css('transform', 'translateY(0px)');
        $('.review4').animate({ opacity: "1" },600)
        $('.review5').css('transform', 'translateY(0px)');
        $('.review5').animate({ opacity: "1" }, 500)
        $('.review7').css('transform', 'translateY(0px)');
        $('.review7').animate({ opacity: "1" }, 600)


    }
    if (value >= 4100) {
        $('.review2').css('transform', 'translateY(0px)');
        $('.review2').animate({ opacity: "1" }, 500)
        $('.review8').css('transform', 'translateY(0px)');
        $('.review8').animate({ opacity: "1" }, 600)

    }
    if (value >= 4200) {
        $('.review3').css('transform', 'translateY(0px)');
        $('.review3').animate({ opacity: "1" },500)
        $('.review6').css('transform', 'translateY(0px)');
        $('.review6').animate({ opacity: "1" }, 600)
        $('.review9').css('transform', 'translateY(0px)');
        $('.review9').animate({ opacity: "1" }, 500)
    }

});



$(document).ready(function () {
    // .sub_gnb 안의 a 태그 클릭 이벤트 설정
    $(".productBtn li").on("click", function (e) {
        e.preventDefault();

        // 다른 모든 a 태그에서 active 클래스 제거
        $(".productBtn li").removeClass("active");

        // 클릭한 a 태그에 active 클래스 추가
        $(this).addClass("active");
    });
    const articles = document.querySelectorAll('article');

    // 각 article에 대해 이벤트 설정
    articles.forEach((article, index) => {
        const button = article.querySelector('.txt button'); // 각 article 안의 button
        const image = article.querySelector('.pic img'); // 각 article 안의 img
        const circle = article.querySelector('.circle');


        button.addEventListener('mouseover', () => {
            if (index === 2) {
                image.style.transform = 'rotate(20deg)';
            } else if (index === 3) {
                image.style.transform = 'rotate(38deg)';
            }
            else {
                image.style.transform = 'rotate(10deg)';
            }
        });

        button.addEventListener('mouseout', () => {
            if (index === 2) {
                image.style.transform = 'rotate(15deg)';
            } else if (index === 3) {
                image.style.transform = 'rotate(25deg)';
            }

            else {
                image.style.transform = 'rotate(0deg)';
            }
        });
    });

});
document.addEventListener("DOMContentLoaded", function () {
    // 첫 번째 Swiper 설정
    var swiper1 = new Swiper(".mySwiper", {
        slidesPerView: 10,
        speed: 1000,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})

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
