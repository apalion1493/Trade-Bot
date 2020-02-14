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

function fillingCheck() {
    let counter = 0;
    for(let i = 1, j = 603; i <= 6, j <= 3620; i++, j += 603) {
        setTimeout(function() {
            $('#results__treatment-circle-'+i).addClass('results__treatment-circleGreen');
            counter++;
        }, j);
    }
}
function removeCheck() {
    $('.results__treatment-circle').removeClass('results__treatment-circleGreen');
}
function test123() {
    fillingCheck();
    setTimeout(function() {
        removeCheck()
    }, 3650);
}

function callback (event) {
    if(event.type === "enter") {
        $(function() {
            $({numberValue: -1}).animate({numberValue: 100}, {
                duration: 60000,
                easing: "linear",
                step: function(val) {
                    $(".results__treatment-timer").html(Math.ceil(val));
                },
                done(animation, jumpedToEnd) {
                    clearInterval(interval);
                }
            });
        });
        test123();
        let interval = setInterval(test123, 3620);

        if($(".results__treatment-timer").html() === '100') {
            clearInterval(interval);
        }

    } else if(event.type === "leave") {
        clearInterval(interval);
    }

}


let controller = new ScrollMagic.Controller();

let tween3 = new TimelineMax();
let tween2 = new TimelineMax();
let tween4 = new TimelineMax();
let tween5 = new TimelineMax();



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

tween5.to(".results", 0, {className:'+=animated'})
    .from(".results", 0, {className:'-=animated'});

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

let scene5 = new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    duration: "0",
    offset: -50
})
    .on("enter leave", callback)
    .setTween(tween5)
    .addTo(controller)
    .addIndicators()
    .triggerHook(0.8);






(function () {

    // Helpers
    const qs = document.querySelector.bind(document);
    const qsa = document.querySelectorAll.bind(document);

    // Cache DOM elements
    let icons = qsa('#radar-icons path');
    const radius = qs('#radar-radius');
    const gradient = qs('#radar-gradient');
    const hand = qs('#radar-hand');

    TweenMax.set(icons, {
        transformOrigin: 'center',
        opacity: 0,
        scale: .5
    });

    TweenMax.set(radius, {
        transformOrigin: 'center',
        scale: .1,
        opacity: 0
    });

    new TimelineMax({
        repeat: -1,
        repeatDelay: 1
    })
        .to(radius, .5, {
            opacity: .1
        })
        .to(radius, 2, {
            scale: 3.7
        }, '-=.5')
        .to(radius, .5, {
            opacity: 0
        }, '-=.5');

    TweenMax.to(hand, 3, {
        transformOrigin: 'center bottom',
        rotation: 360,
        ease: Power0.easeOut,
        repeat: -1
    });

    TweenMax.to(gradient, 3, {
        transformOrigin: 'center',
        rotation: 360,
        ease: Power0.easeOut,
        repeat: -1
    });

    icons = [].map.call(icons, i => i).reverse();
    [].forEach.call(icons, (icon, index) => {
        new TimelineMax({
            repeat: -1,
            delay: index * .3,
            repeatDelay: 1.75
        })
            .to(icon, .5, {
                opacity: .8
            })
            .to(icon, 1.25, {
                scale: 1.25
            }, '-=.5')
            .to(icon, .5, {
                opacity: 0
            }, '-=.5')
    })

})();