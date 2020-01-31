// var massStep = ['#pills-home-tab', '#pills-profile-tab', '#pills-contact-tab', '#pills-contact-tab1'];
// var massStepClass = ['stage-first', 'stage-second', 'stage-third', 'stage-fourth'];
//
// for(let i = 0; i <= massStep.length; i++) {
//     $(massStep[i]).click(function () {
//         for (let j = 0; j <= massStepClass.length; j++) {
//             $('.trade-automation').removeClass(massStepClass[j]);
//         }
//
//         $('.trade-automation').addClass(massStepClass[i]);
//     });
// }

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


let controller = new ScrollMagic.Controller();

// let tween3 = TweenMax.to(".third-slide__container-1", 0.5, {className:'+=stage-first'});

let tween3 = new TimelineMax();
let tween2 = new TimelineMax();


tween3.to(".third-slide__container-1", 1.5, {className:'+=stage-first'}).to(".third-slide__container-1", 0, {className:'-=stage-first'}).to(".third-slide__container-1", 1.5, {className:'+=stage-second'}).to(".third-slide__container-1", 0, {className:'-=stage-second'}).to(".third-slide__container-1", 1.5, {className:'+=stage-third'}).to(".third-slide__container-1", 0, {className:'-=stage-third'}).to(".third-slide__container-1", 1.5, {className:'+=stage-fourth'});
tween2.to(".tab-pane-1", 1.5, {className:'+=show active'}).to(".tab-pane-1", 0, {className:'-=show active'}).to(".tab-pane-2", 1.5, {className:'+=show active'}).to(".tab-pane-2", 0, {className:'-=show active'}).to(".tab-pane-3", 1.5, {className:'+=show active'}).to(".tab-pane-3", 0, {className:'-=show active'}).to(".tab-pane-4", 1.5, {className:'+=show active'});

let scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "1000", offset: -50}).setTween(tween3).setPin(".third-slide__container-1").addTo(controller).triggerHook(0);
let scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "1000", offset: -50}).setTween(tween2).addTo(controller).triggerHook(0);