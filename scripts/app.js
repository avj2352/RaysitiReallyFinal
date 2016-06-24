// jQuery IIFE
(function($){
  var $video  = $('video'),
    $window = $(window);

$(window).resize(function(){

    var height = $window.height();
    $video.css('height', height);
    var videoWidth = $video.width(),
        windowWidth = $window.width(),
    marginLeftAdjust =   (windowWidth - videoWidth) / 2;

    $video.css({
        'height': height,
        'marginLeft' : '0px',
        'marginTop' : '-25px'
    });
}).resize();
}(jQuery));//IIFE jQuery

(function(){
  var myApp = angular.module('myApp',['ngRoute','ngAnimate']);
}());//IIFE
