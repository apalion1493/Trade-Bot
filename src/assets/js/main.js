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


// let observeObject = function() {
//     let _class = {
//         init: function(selector, callback) {
//             let element = document.querySelector(selector);
//
//             try {
//                 let observer = new MutationObserver(function(mutations) {
//                     mutations.forEach(function(mutation) {
//                         callback(mutation.target, mutation.attributeName, mutation.oldValue);
//                     });
//                 });
//
//                 observer.observe(element, {
//                     attributes: true,
//                     subtree: true,
//                     attributeOldValue: true
//                 });
//             } catch (z) {
//                 element.addEventListener('DOMAttrModified', function(e) {
//                     callback(e.target, e.attrName, e.prevValue);
//                 }, false);
//             }
//         }
//     };
//
//     return _class;
// }();
//
//
//
// $(function() {
//     observeObject.init('[data-container="change"]', function(target, name, oldValue) {
//         // $('#test').text($(target).text() + ' : ' + name + ' : ' + oldValue);
//         console.log('123');
//     });
// });
//
// $(document).on('click', '[data-action="change"]', function(e) {
//     // $(this).toggleClass('test');
//     console.log('456');
// });