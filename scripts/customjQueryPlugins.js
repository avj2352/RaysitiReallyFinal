//Unfortunately the bigVideo plugin needs to be at the bottom most part of the script (-_-)
(function($){
  $(document).ready(function(){
    // jQuery Nice scroll to scroll nicely !!
    // Dependencies: <script type="text/javascript" src="scripts/util/jquery.nicescroll.min.js">
    $("html").niceScroll();

    // BigVideo Plugin Code goes here
    //Dependencies:
    //<script type="text/javascript" src="scripts/lib/jquery-1.11.2.min.js"></script>
    // <script type="text/javascript" src="scripts/util/jquery.imagesloaded.min.js"></script>
    // <script type="text/javascript" src="scripts/util/jquery-ui-1.8.22.custom.min.js"></script>
    // <script type="text/javascript" src="scripts/util/bigvideo.js"></script>
    // <script src="http://vjs.zencdn.net/c/video.js"></script>

    // STEP 1: Check if the document is touchDevice enabled or not!!
    try {
      isTouchDevice = true;
      document.createEvent('TouchEvent');
    } catch (e) {
      isTouchDevice = false;
    }

    //If it's not a Touch Device then it must be a desktop :P
    //Load the video
    if(!isTouchDevice){
      //<!-- Load Video for desktop -->
      $(function() {
        var BV = new $.BigVideo({useFlashForFirefox:false});
        BV.init();
        BV.show('vids/video.webm', {altSource:'vids/video.mp4'}, {altSource:'vids/video.webm'});
      });
      //<!-- Allow to open the site -->
      siteStartOpen = true;
    }else{
      //<!-- Load img for mobile -->
      $(function() {
        var BV = new $.BigVideo({useFlashForFirefox:false});
        BV.init();
        BV.show('images/highDef.jpg', {altSource:'vids/video.webm'}, {altSource:'vids/video.mp4'});
      });
      //<!-- Allow to open the site -->
      siteStartOpen = true;
    }//endif:!isTouchDevice
  });
}(jQuery));//jQuery IIFE
