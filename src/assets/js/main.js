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
});



let controller = new ScrollMagic.Controller();

let tween3 = new TimelineMax();
let tween2 = new TimelineMax();
let tween4 = new TimelineMax();
// let tween5 = new TimelineMax();



tween3.to(".third-slide__container-1", 1.5, {className:'+=stage-first'})
    .to(".third-slide__container-1", 0, {className:'-=stage-first'})
    .to(".third-slide__container-1", 1.5, {className:'+=stage-second'})
    .to(".third-slide__container-1", 0, {className:'-=stage-second'})
    .to(".third-slide__container-1", 1.5, {className:'+=stage-third'})
    .to(".third-slide__container-1", 0, {className:'-=stage-third'})
    .to(".third-slide__container-1", 1.5, {className:'+=stage-fourth'});

tween2.to(".tab-pane-1", 1.5, {className:'+=show active'})
    .to(".tab-pane-1", 0, {className:'-=show active'})
    .to(".tab-pane-2", 1.5, {className:'+=show active'})
    .to(".tab-pane-2", 0, {className:'-=show active'})
    .to(".tab-pane-3", 1.5, {className:'+=show active'})
    .to(".tab-pane-3", 0, {className:'-=show active'})
    .to(".tab-pane-4", 1.5, {className:'+=show active'});

tween4.to(".fourth-slide__tab-1", 1, {className:'+=show active'})
    .to(".fourth-slide__tab-1", 1, {className:'+=show active'})
    .to(".fourth-slide__tab-1", 1, {className:'-=show active'})
    .to(".fourth-slide__tab-2", 2, {className:'+=show active'})
    .to(".fourth-slide__tab-2", 2, {className:'+=show active'});

let scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: "1000",
    offset: -50
})
    .setTween(tween3)
    .setPin(".third-slide__container-1")
    .addTo(controller)
    .triggerHook(0);


let scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: "1000",
    offset: -50
})
    .setTween(tween2)
    .addTo(controller)
    .triggerHook(0);

let scene4 = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    duration: "800",
    offset: -50
})
    .setTween(tween4)
    .setPin("#pills-tabContent01")
    .addTo(controller)
    .addIndicators()
    .triggerHook(0);




// let scene4 = new ScrollMagic.Scene({
//     triggerElement: "#trigger3",
//     duration: "0",
//     offset: -50
// })
//     .on('start', function() {
//         setInterval($(function() {
//             let blockStatus = true;
//
//             if(blockStatus) {
//                 blockStatus = false;
//                 $({numberValue: 0}).animate({numberValue: 100}, {
//                     duration: 60000,
//                     easing: "linear",
//                     step: function(val) {
//                         $(".results__treatment-timer").html(Math.ceil(val));
//
//                         if($(".results__treatment-timer").text() === '100') {
//                             clearInterval(interval);
//                         }
//                     }
//                 });
//             }
//         }), 1000)
//     })
//     .on('start', function() {
//
//     })
//     .addTo(controller)
//     .addIndicators()
//     .triggerHook(0.8);



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

let interval = setInterval(fillingCheck, 3620);

for (let k = 0; k < 5; k++) {
    fillingCheck();
}