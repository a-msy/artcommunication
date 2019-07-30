(function($) {
    "use strict"
    
    document.addEventListener('DOMContentLoaded', function(){

        Typed.new("#typed", {
            stringsElement: document.getElementById('typed-strings'),
            typeSpeed: 80,
            startDelay: 1000,
            backDelay: 1000,
            loop: true,
            contentType: 'html', // or text
        });

    });
    
    $('.hero-area-fix').ripples({
        resolution: 712,
        dropRadius: 20,
        perturbance: 0.04,
    });
    
    $(document).ready(function() {
        $(".animsition").animsition({
          inClass: 'fade-in',
          outClass: 'fade-out',
          inDuration: 1500,
          outDuration: 800,
          linkElement: '.animsition-link',
          // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
          loading: true,
          loadingParentElement: 'body', //animsition wrapper element
          loadingClass: 'animsition-loading',
          loadingInner: '', // e.g '<img src="loading.svg" />'
          timeout: false,
          timeoutCountdown: 5000,
          onLoadEvent: true,
          browser: [ 'animation-duration', '-webkit-animation-duration'],
          // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
          // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
          overlay : false,
          overlayClass : 'animsition-overlay-slide',
          overlayParentElement : 'body',
          transition: function(url){ window.location.href = url; }
        });
      });
    

})(jQuery)

/* Copyright (c) 2011 detelu (http://www.detelu.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * jquery.fademover.js
 * Version: 2012-02-06
*/
(function($){
	$.fn.fadeMover = function(options) {
		var defaults = {
			'effectType': 1,
			'inSpeed': 800,
			'outSpeed': 800,
			'inDelay' : '0',
			'outDelay' : '0',
			'nofadeOut' : 'nonmover'
        };
        var setting = $.extend(defaults, options);
		var cnt = $(this).length-1;
        this.each(function(i) {
			var pel = this;
			if(setting.effectType == 1 || setting.effectType == 2) {
				$(pel).css("opacity", 0).delay(i*setting.inDelay).animate({opacity: 1}, setting.inSpeed);
			}
			if(setting.effectType == 1 || setting.effectType == 3) {
				$('a').click(function(event) {
					var moveUrl = $(this).attr("href");
					if(!$(this).hasClass(setting.nofadeOut) && moveUrl.charAt(0) != "#"){
						event.preventDefault();
						$(pel).delay(i*setting.outDelay).animate({"opacity": 0}, setting.outSpeed, function(){
						if(cnt == i || setting.outDelay == '0')
							location.href = moveUrl;
						});
					}
				});
			}
		});
		return this;
	}
	window.onunload = function () {};
})(jQuery);

