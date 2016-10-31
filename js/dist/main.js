!function e(t,o,n){function a(r,s){if(!o[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(i)return i(r,!0);throw new Error("Cannot find module '"+r+"'")}var c=o[r]={exports:{}};t[r][0].call(c.exports,function(e){var o=t[r][1][e];return a(o?o:e)},c,c.exports,e,t,o,n)}return o[r].exports}for(var i="function"==typeof require&&require,r=0;r<n.length;r++)a(n[r]);return a}({1:[function(e,t,o){var n=e("./lib/navigation.js"),a=e("./lib/preloader.js"),i=e("./lib/animation.js"),r=e("./lib/typographyAnimation.js");$(document).ready(function(){$(window).load(function(){a(),setTimeout(a,500)}),n.init();var e=$(".menu-bar"),t=new TimelineMax;t.staggerTo(e,2,{scaleX:"1.3",repeat:-1,yoyo:!0,ease:Linear.easeNone},.5);var o=0;$(window).scroll(function(){function e(e,t){TweenMax.to(e,.2,{y:t,ease:Linear.easeNone})}var t=$(this).scrollTop(),n=$(".logo, .navbar-toggle"),a=$(".secondary-nav");t>o?(TweenMax.to(a,.2,{y:"-80",ease:Linear.easeNone}),TweenMax.to(a,.2,{css:{background:"#212e49"},ease:Linear.easeNone})):(e(n,30),e(a,0)),o=t}),$("#fullpage").fullpage({menu:"#myMenu",slideSelector:".horizontal",scrollHorizontally:!0,lockAnchors:!1,navigation:!1,navigationPosition:"right",showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",css3:!0,fadingEffect:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!1,continuousVertical:!1,verticalCentered:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!0,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,verticalCentered:!1,anchors:["home","about-me","prototype","user-interface","photography","resume"],setResponsive:!0,afterLoad:function(e,t){$(this);3===t?($(".red-logo").removeClass("active-logo"),$(".white-logo").addClass("active-logo"),$(".menu-bar").css("background","#fff"),$(".watermark-text, .contact-item").css("color","#fff"),r.fadeInText(s)):($(".white-logo").removeClass("active-logo"),$(".red-logo").addClass("active-logo"),$(".menu-bar").css("background","#E94444"),$(".watermark-text, .contact-item").css("color","#E94444")),4===t&&r.fadeInText(l)},onLeave:function(e,t,o){$(this);(3===e&&"up"===o||3===e&&"down"===o)&&r.resetfadeText(s,0,20,1),(4===e&&"up"===o||4===e&&"down"===o)&&r.resetfadeText(l,0,20,1)}});var s=$(".fadetext-prototype"),l=$(".fadetext-ui"),c=($(".menu-item"),function(){TweenMax.set([s,l],{alpha:0,y:30})});c(),i.salmonAnimation(),i.pulseButton()})},{"./lib/animation.js":2,"./lib/navigation.js":3,"./lib/preloader.js":4,"./lib/typographyAnimation.js":5}],2:[function(e,t,o){var n={pulseButton:function(){TweenMax.to(".pulse-button circle:nth-child(1)",4,{attr:{r:25,"stroke-width":1,"stroke-opacity":1},opacity:0,repeat:-1,delay:1}),TweenMax.to(".pulse-button circle:nth-child(2)",4,{attr:{r:25,"stroke-width":1,"stroke-opacity":1},opacity:0,repeat:-1}),TweenMax.to(".pulse-button circle:nth-child(3)",2,{attr:{r:2},repeat:-1,yoyo:!0,ease:Power2.easeOut})},salmonAnimation:function(){var e=$("#salmon-fish"),t=$("#salmon-fin");salmonTl=new TimelineMax({repeat:-1}),salmonTl.to(e,5,{bezier:[{x:10,y:11},{x:0,y:20},{x:-10,y:10},{x:0,y:0}],ease:Linear.easeNone}),TweenMax.staggerTo(t,1,{rotationY:-30,repeat:-1,yoyo:!0})}};t.exports=n},{}],3:[function(e,t,o){var n={init:function(){this.cacheDom(),this.render()},cacheDom:function(){this.$menuBar=$(".navbar-toggle"),this.$menuListItem=$("menu-list-items"),this.$slideDown=$(".fp-nav-wrapper"),this.$navBackButton=$(".nav-back-button")},render:function(){var e=new TimelineMax({paused:!0,reversed:!0});TweenMax.set(this.$slideDown,{y:"-100%"}),e.to(this.$slideDown,1,{y:"0%",ease:Power4.easeInOut}),$(".navbar-toggle, .menu-list-items, .nav-back-button").click(function(){e.reversed()?e.restart():e.reverse()})}};t.exports=n},{}],4:[function(e,t,o){function n(){var e=$(".spinner-wrapper");TweenMax.to(e,.5,{y:"100%"})}t.exports=n},{}],5:[function(e,t,o){var n={fadeInText:function(e){TweenMax.staggerTo(e,1,{y:0,autoAlpha:1,ease:Back.easeInOut},.2)},resetfadeText:function(e,t,o,n){TweenMax.set(e,{alpha:t,y:o,delay:n})}};t.exports=n},{}]},{},[1]);