/*global $*/
$(document).ready(function () {
    'use strict';
    var activeState =  $('a[data-index]'),
        index = $(activeState).data("index"),
        i = 0,
        maxI = $(activeState).length;
    $('.navi-list').on("click", function (event) {
        
        $(this).find('a').removeClass('active');
        $('.state_two img').css("transform", "");
        $('.state-move-box').css("transform", "");
        $('.navi-list-item a[data-index=' + event.target.getAttribute('data-index') + ']').addClass('active');
        if ($('a[data-index=' + event.target.getAttribute('data-index') + ']').attr('data-index') === '1') {
            $('.page').css("transform", "translatey(0%)");
        }
        if ($('a[data-index=' + event.target.getAttribute('data-index') + ']').attr('data-index') === '2') {
            $('.page').css("transform", "translatey(-100%)");
            $('.state_two img').css("transform", "translateX(0%)");
        }
        if ($('a[data-index=' + event.target.getAttribute('data-index') + ']').attr('data-index') === '3') {
            $('.page').css("transform", "translatey(-200%)");
        }
        if ($('a[data-index=' + event.target.getAttribute('data-index') + ']').attr('data-index') === '4') {
            $('.page').css("transform", "translatey(-300%)");
            $('.state-move-box').css("transform", "translatey(0%)");
        }
    });
   
    
    /*скролл*/
   
    $(window).on('DOMMouseScroll mousewheel', function (event) {
        if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
            //scroll down
            i += 1;
            if (i === maxI) {
                i = 0;
            }
            $(".navi-list-item a" + "[data-index='" + (index + i) + "']").click();
        } else {
            //scroll up
            i -= 1;
            if (i <= 0) {
                i = 0;
            }
            
            $(".navi-list-item a" + "[data-index='" + (index + i) + "']").click();
        }
        
        return false;
    });
    
    /*тачь*/
    
});