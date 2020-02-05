$(document).ready(function($){
    $('#terminal').click(function () {
        $(".animated .command").last().focus();
    });

    $('#burger').click(function () {
        $('.menu-modal').addClass('active');
        $('#app').addClass('active');
        $('body').addClass('active');
    });

    $('#main-menu-close').click(function () {
        $('.menu-modal').removeClass('active');
        $('#app').removeClass('active');
        $('body').removeClass('active');
    });

    $('.icon-circle_parameters').click(function () {
        $('.fourth-slide').removeClass('state-two').addClass('state-one');
        $('#pills-home-tab01-01').click();
    });

    $('.icon-circle_settings').click(function () {
        $('.fourth-slide').removeClass('state-one').addClass('state-two');
        $('#pills-profile-tab02-01').click();
    });

    // for (let j = 0; j < 18; j++) {
    //     $(function() {
    //         $.each($('.results__treatment-circle'), function(i, el) {
    //             setTimeout(function() {
    //                 $(el).addClass('results__treatment-circleGreen');
    //             }, 500 + (i * 500));
    //         });
    //     });
    //     $('.results__treatment-circle').removeClass('results__treatment-circleGreen');
    // }

    setInterval($(function() {
        let blockStatus = true;

        if(blockStatus) {
            blockStatus = false;
            $({numberValue: 0}).animate({numberValue: 100}, {
                duration: 60000,
                easing: "linear",
                step: function(val) {
                    $(".animated .results__treatment-timer").html(Math.ceil(val));
                }
            });
        }
    }), 1000);

});



function fillingCheck() {
    let counter = 0;
    for(let i = 1, j = 603; i <= 6, j <= 3620; i++, j += 603) {
        setTimeout(function() {
            $('#results__treatment-circle-'+i).addClass('results__treatment-circleGreen');
            counter++;
            if(counter === 6) {
                $('.results__treatment-circle').removeClass('results__treatment-circleGreen');
            }
        }, j);
    }
}

let interval123 = setInterval(fillingCheck, 3620);

for (let k = 0; k < 5; k++) {
    fillingCheck();
}

setTimeout(function() {
    clearInterval(interval123);
}, 60000);


// let i = 1;
// for (let j = 0; j < 100; j++) {
//     $('#results__treatment-circle-'+i).addClass('results__treatment-circleGreen');
//     i++;
//
//     if(i % 6 === 0) {
//         $('.results__treatment-circle').removeClass('results__treatment-circleGreen');
//         i = 1;
//     }
//     sleep();
//     // setTimeout(function() {
//     //
//     //     // console.log(i);
//     // }, 1000);
//     console.log(i);
// }

// let i = 1;





// function testFunction() {
//     for(let j = 0;  j < 7; j++) {
//         setInterval(animationCheck, 1000);
//         // $('.results__treatment-circle').removeClass('results__treatment-circleGreen');
//     }
// }
//
// function animationCheck() {
//     // let i = 1;
//     //
//     // if(i % 6 === 0) {
//     //     $('.results__treatment-circle').removeClass('results__treatment-circleGreen');
//     //     i = 1;
//     // } else {
//     //     $('#results__treatment-circle-' + i).addClass('results__treatment-circleGreen');
//     //     i++;
//     //
//     // }
//
//     $('.results__treatment-circle').addClass('results__treatment-circleGreen');
// }
//
// setInterval(testFunction, 7000);

// let massId = ['#results__treatment-circle-1', '#results__treatment-circle-2', '#results__treatment-circle-3', '#results__treatment-circle-4', '#results__treatment-circle-5', '#results__treatment-circle-6'];
//
// for (let i = 0; i < 6; i++) {
//     setInterval(function(){
//         $(massId[i]).addClass('results__treatment-circleGreen');
//     }, 1000);
//
// }










let controller = new ScrollMagic.Controller();

let tween3 = new TimelineMax();
let tween2 = new TimelineMax();


tween3.to(".third-slide__container-1", 1.5, {className:'+=stage-first'}).to(".third-slide__container-1", 0, {className:'-=stage-first'}).to(".third-slide__container-1", 1.5, {className:'+=stage-second'}).to(".third-slide__container-1", 0, {className:'-=stage-second'}).to(".third-slide__container-1", 1.5, {className:'+=stage-third'}).to(".third-slide__container-1", 0, {className:'-=stage-third'}).to(".third-slide__container-1", 1.5, {className:'+=stage-fourth'});
tween2.to(".tab-pane-1", 1.5, {className:'+=show active'}).to(".tab-pane-1", 0, {className:'-=show active'}).to(".tab-pane-2", 1.5, {className:'+=show active'}).to(".tab-pane-2", 0, {className:'-=show active'}).to(".tab-pane-3", 1.5, {className:'+=show active'}).to(".tab-pane-3", 0, {className:'-=show active'}).to(".tab-pane-4", 1.5, {className:'+=show active'});

let scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "1000", offset: -50}).setTween(tween3).setPin(".third-slide__container-1").addTo(controller).triggerHook(0);
let scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "1000", offset: -50}).setTween(tween2).addTo(controller).triggerHook(0);