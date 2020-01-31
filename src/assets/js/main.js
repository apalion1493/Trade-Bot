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

let tween3;
tween3 = TweenMax.to(".third-slide__container-1", 0.5, {opacity : 1, left: '0px', className:'+=stage-first'});
let scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "300px", offset: 0})
    .setTween(tween3)
    .addIndicators()
    .addTo(controller);

let tween3_1;
tween3_1 = TweenMax.to(".third-slide__container-1", 0.5, {opacity : 0,});
let scene3_1 = new ScrollMagic.Scene({triggerElement: "#trigger1-1", duration: "200px", offset: 0})
    .setTween(tween3_1)
    .addIndicators()
    .addTo(controller);

/////////////////////
let tween2;
tween2 = TweenMax.to(".third-slide__container-2", 0.5, {opacity : 1, left: '0px', className:'+=stage-second'});
let scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "300px", offset: 0})
    .setTween(tween2)
    .addIndicators()
    .addTo(controller);

let tween2_1;
tween2_1 = TweenMax.to(".third-slide__container-2", 0.5, {opacity : 0});
let scene2_1 = new ScrollMagic.Scene({triggerElement: "#trigger2-1", duration: "200px", offset: 0})
    .setTween(tween2_1)
    .addIndicators()
    .addTo(controller);


////////////////////////


let tween1;
tween1 = TweenMax.to(".third-slide__container-3", 0.5, {opacity : 1, left: '0px', className:'+=stage-third'});
let scene1 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "300px", offset: 0})
    .setTween(tween1)
    .addIndicators()
    .addTo(controller);

let tween1_1;
tween1_1 = TweenMax.to(".third-slide__container-3", 0.5, {opacity : 0});
let scene1_1 = new ScrollMagic.Scene({triggerElement: "#trigger3-1", duration: "200px", offset: 0})
    .setTween(tween1_1)
    .addIndicators()
    .addTo(controller);


//////////////


let tween;
tween = TweenMax.to(".third-slide__container-4", 0.5, {
    opacity : 1,
    left: '0px',
    className:'+=stage-fourth'
});
let scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: "300px", offset: 0})
    .setTween(tween)
    .addIndicators()
    .addTo(controller);