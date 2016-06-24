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
    try {
      isTouchDevice = true;
      document.createEvent('TouchEvent');
    } catch (e) {
      isTouchDevice = false;
    }

    if(!isTouchDevice){

      //<!-- Load Video for mobile desktop -->
      $(function() {
        var BV = new $.BigVideo({useFlashForFirefox:false});
        BV.init();
        BV.show('vids/video.webm', {altSource:'vids/video.ogv'}, {altSource:'vids/video.webm'});
      });

      //<!-- Allow to open the site -->
      siteStartOpen = true;

    }else{

      jQuery(function($){
        $.supersized({
          slides 	:  	[	// Slideshow Images, image_small attribute is used to load the mobile version image, main_title attribute is used to add the image tile div
            {image : 'images/highDef.jpg'}
          ]
        });
      });

    }

  });
}(jQuery));//jQuery IIFE
