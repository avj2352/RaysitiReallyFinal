## SO Many Errors in the video.js it's difficult to debug :@
####Generated Favicon and Links
###NOTE: In order to load images, The script checks for supersized function - which apparently is part of the wordpress theme
        https://wordpress.org/support/topic/getting-js-error-on-gallery-page-jquerysupersized-not-a-function

###NOTE: BigVideo has a better way of handling to show images, so we need to come up with a jQuery function to invoke the following function for mobile Devices:
```
BigVideo.show = function(source,options) {
  if (options === undefined) options = {};
isAmbient = options.ambient === true;
if (isAmbient || options.doLoop) settings.doLoop = true;
if (typeof(source) === 'string') {
var ext = source.substring(source.lastIndexOf('.')+1);
if (ext === 'jpg' || ext === 'gif' || ext === 'png') {
  showPoster(source);
} else {
  if (options.altSource && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    source = options.altSource;
  }
  playVideo(source);
  isQueued = false;
}
} else {
playlist = source;
currMediaIndex = 0;
playVideo(playlist[currMediaIndex]);
isQueued = true;
}
};//end:show()
```
#### Added the following condition check for mobile and desktop devices..Website can now show img for mobile and video for desktop
```
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
```

####Added centralized image to the video Content http://stackoverflow.com/questions/12415661/using-marginauto-to-vertically-align-div

####Created a Logo Questionnaire Static Div Content - 25th June 2016

#Raysiti Code for BigVideo and Smooth Scroll.
#Instructions for Custom BigVideo Plugin :+1:
###NOTE: Bigvideo will always automatically come on top of the Website, the code is in bigvideo.js

####1. The following Dependencies are required and can be all found inside the util folder
```
    1. <script type="text/javascript" src="scripts/util/jquery.imagesloaded.min.js"></script>
    2. <script type="text/javascript" src="scripts/util/jquery-ui-1.8.22.custom.min.js"></script>
    3. <script type="text/javascript" src="scripts/util/bigvideo.js"></script>
    4. <script src="http://vjs.zencdn.net/c/video.js"></script>
    5. <script type="text/javascript" src="scripts/customjQueryPlugins.js"></script> //This contains the main bigVideo callback script
```
###NOTE: For some weird reason, the customjQueryPlugins.js has to be at the BOTTOM MOST PART OF THE SCRIPT LIST.

####2. The following CSS Scripts is required to make the Video responsive and found inside the custom.css filter

```
    /*This is for controlling the Width of BigVideo for mobile*/
    #big-video-wrap {
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }

      /*BigVideo Player controls related CSS*/
      #big-video-wrap{overflow:hidden;position:absolute;height:100%;width:100%;top:0;left:0;}
      #big-video-vid,#big-video-image{position:absolute;}
      #big-video-control-container{position:absolute;bottom:20px;left:5%;width:90%;overflow:hidden;
        -webkit-transition-duration:0.6s;-moz-transition-duration:0.6s;-ms-transition-duration:0.6s;-o-transition-duration:0.6s;transition-duration:    0.6s;}
        #big-video-control{width:100%;height:16px;position:relative;}
        #big-video-control-middle{margin: 0 56px 0 24px;}
        #big-video-control-bar{width:100%;height:16px;position:relative;cursor:pointer;}
        #big-video-control-progress{position:absolute;top:7px;height:3px;width:0%;background:#fff;}
        #big-video-control-track{position:absolute;top:8px;height:1px;width:100%;background:#fff;}
        #big-video-control-bound-left{left:0;}
        #big-video-control-bound-right{right:-1px}
        #big-video-control-track .ui-slider-handle {opacity:0;}
        #big-video-control-playhead{left:30%;}
        #big-video-control-play{position:absolute;top:0;left:0;height:16px;width:16px;background-image:url('../images/bigvideo.png');}
        #big-video-control-timer{position:absolute;top:1px;right:0;color:#fff;font-size:11px;}
        #big-video-control-playhead,#big-video-control-bound-left,#big-video-control-bound-right{position:absolute;top:0;height:16px;width:1px;backgro    und:#fff;}
        #big-video-control .ui-slider-handle{border-left:solid 1px #fff; width:16px;height:16px;position:absolute;top:-8px;}
        .transparent{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0    ;}
        .vjs-big-play-button{display:none !important;}
```

# Instructions for Smooth scroll
####1. The following Dependencies is required for smooth scroll
The Online link containing the documentation can be found in [http://areaaperta.com/nicescroll/]
```
<script type="text/javascript" src="scripts/util/jquery.nicescroll.min.js">
```
####2. Once the above code is inserted, Just invoke smooth scroll in your custom JS script (customjQueryPlugins.js)
```
$("html").niceScroll();
```

Documentation and Code by yours truly [avj2352 Pramod Jingade]
