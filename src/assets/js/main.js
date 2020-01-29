var massStep = ['#pills-home-tab', '#pills-profile-tab', '#pills-contact-tab', '#pills-contact-tab1'];
var massStepClass = ['stage-first', 'stage-second', 'stage-third', 'stage-fourth'];

for(let i = 0; i <= massStep.length; i++) {
    $(massStep[i]).click(function () {
        for (let j = 0; j <= massStepClass.length; j++) {
            $('.trade-automation').removeClass(massStepClass[j]);
        }

        $('.trade-automation').addClass(massStepClass[i]);
    });
}

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

jQuery(document).ready(function($) {
    $('#app').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:[
            'url-firstSlide',
            'url-ndaSlide',
            'url-secondSlide',
            'url-thirdSlide',
            'url-fourthSlide',
            'url-secondSlide',
            'url-fiveSlide',
            'url-technology',
            'url-otherJobs',
            'url-writeToUs'
        ],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: false,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: null,
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: {
            scrollbars: true,
            mouseWheel: true,
            hideScrollbars: false,
            fadeScrollbars: false,
            disableMouse: true,
            interactiveScrollbars: true,
            deceleration: 0.1
        },
        touchSensitivity: 15,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : 'none',
        paddingTop: null,
        paddingBottom: null,
        fixedElements: null,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        cards: false,
        cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(origin, nextIndex, direction){
            automation(nextIndex, direction)
        },
        afterLoad: function(origin, destination, direction){},
        afterRender: function(){},
        afterResize: function(width, height){},
        afterReBuild: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(section, origin, destination, direction){},
        onSlideLeave: function(section, origin, destination, direction){}
    });
});

