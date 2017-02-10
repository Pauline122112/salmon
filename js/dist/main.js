!function e(t,o,n){function a(i,s){if(!o[i]){if(!t[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(r)return r(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=o[i]={exports:{}};t[i][0].call(c.exports,function(e){var o=t[i][1][e];return a(o?o:e)},c,c.exports,e,t,o,n)}return o[i].exports}for(var r="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}({1:[function(e,t,o){var n=e("./lib/navigation.js"),a=e("./lib/preloader.js"),r=e("./lib/animation.js"),i=e("./lib/typographyAnimation.js"),s=e("./lib/pixiBackground.js"),l=e("./lib/scrollToTop.js");$(document).ready(function(){$(".toggle").on("click",function(){$(".chatbot-list-items").toggleClass("active")}),l(),$(window).load(function(){setTimeout(a,500)});var e=$(".st0");TweenMax.staggerTo(e,.6,{y:-30,repeat:-1,ease:Power4.easeInOut,yoyo:!0},.05);var t=function(){var e=0;$(window).scroll(function(){function t(e,t){TweenMax.to(e,.2,{y:t,ease:Linear.easeNone})}var o=$(this).scrollTop(),n=$(".logo, .navbar-toggle"),a=$(".secondary-nav");o>e?(TweenMax.to(a,.2,{y:"-100",ease:Linear.easeNone}),TweenMax.to(a,.2,{css:{background:"#072231"},ease:Linear.easeNone})):(t(n,30),t(a,0)),e=o})};t(),n.init(),$("#fullpage").fullpage({menu:"#myMenu",lockAnchors:!1,navigation:!0,navigationPosition:"right",showActiveTooltip:!0,css3:!0,fadingEffect:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!1,continuousVertical:!1,verticalCentered:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!0,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,verticalCentered:!1,anchors:["home","about-me","prototype","chatbot","user-interface","design"],setResponsive:!0,afterLoad:function(e,t){$(this);2==t&&i.fadeInText(d),3===t&&i.fadeInText(o),4===t&&i.fadeInText(c),5===t&&i.fadeInText(u),6===t&&i.fadeInText(p),3===t||4===t||5===t||6===t?($(".red-logo").removeClass("active-logo"),$(".white-logo").addClass("active-logo"),$(".menu-bar").css({background:"#FEFEE6",transition:"background 1.5s"}),$(".watermark-text, .contact-item, .title-caption").css({color:"#FEFEE6",transition:"color 1.5s"}),$(".social-main li").css({"border-color":"rgba(255,255, 255, 0.25)",transition:"border-color 1.5s"}),$(".pulse-button").css({stroke:"#FEFEE6",transition:"color 1.5s"})):($(".white-logo").removeClass("active-logo"),$(".red-logo").addClass("active-logo"),$(".menu-bar").css("background","#E94444"),$(".watermark-text, .contact-item, .title-caption").css("color","#E94444"),$(".social-main li").css("border-color","rgba(233,68, 68, 0.15)"),$(".pulse-button").css("stroke","#E94444"))},onLeave:function(e,t,n){$(this);(2===e&&"up"===n||3===e&&"down"===n)&&i.resetfadeText(d,0,20,1),(3===e&&"up"===n||3===e&&"down"===n)&&i.resetfadeText(o,0,20,1),(4===e&&"up"===n||4===e&&"down"===n)&&i.resetfadeText(c,0,20,1),(5===e&&"up"===n||5===e&&"down"===n)&&i.resetfadeText(u,0,20,1),5===e&&"up"===n&&i.resetfadeText(p,0,20,1)}});var o=$(".fadetext-prototype"),c=$(".fadetext-chatbot"),u=$(".fadetext-ui"),d=$(".fadetext-about"),p=$(".fadetext-design"),f=($(".menu-item"),function(){TweenMax.set([o,c,u,d,p],{alpha:0,y:30})});f(),r.salmonAnimation(),r.pulseButton(),s()})},{"./lib/animation.js":2,"./lib/navigation.js":3,"./lib/pixiBackground.js":4,"./lib/preloader.js":5,"./lib/scrollToTop.js":6,"./lib/typographyAnimation.js":7}],2:[function(e,t,o){var n={pulseButton:function(){TweenMax.to(".pulse-button circle:nth-child(1)",4,{attr:{r:25,"stroke-width":1,"stroke-opacity":1},opacity:0,repeat:-1,delay:1}),TweenMax.to(".pulse-button circle:nth-child(2)",4,{attr:{r:25,"stroke-width":1,"stroke-opacity":1},opacity:0,repeat:-1}),TweenMax.to(".pulse-button circle:nth-child(3)",2,{attr:{r:2},repeat:-1,yoyo:!0,ease:Power2.easeOut})},salmonAnimation:function(){var e=$("#salmon-fish");salmonTl=new TimelineMax({repeat:-1}),salmonTl.to(e,5,{bezier:[{x:10,y:11},{x:0,y:20},{x:-10,y:10},{x:0,y:0}],ease:Linear.easeNone})}};t.exports=n},{}],3:[function(e,t,o){var n={init:function(){this.cacheDom(),this.render()},cacheDom:function(){this.$menuBar=$(".navbar-toggle"),this.$menuListItem=$("menu-list-items"),this.$fade=$(".fp-nav-wrapper"),this.$navBackButton=$(".nav-back-button"),this.$menuItem=$(".menu-item")},hamburgerMenu:function(){var e=$(".menu-bar"),t=new TimelineMax;t.staggerTo(e,2,{scaleX:"1.3",repeat:-1,yoyo:!0,ease:Linear.easeNone},.5)},render:function(){this.hamburgerMenu();var e=new TimelineMax({paused:!0,reversed:!0}),t=new TimelineMax({paused:!0,reversed:!0});TweenMax.set(this.$menuItem,{autoAlpha:0,y:-40}),t.staggerTo(this.$menuItem,1,{y:0,autoAlpha:1,ease:Back.easeInOut},.05),TweenMax.set(this.$fade,{y:"-100%"}),e.to(this.$fade,1,{y:"0%",ease:Power4.easeInOut}),$(".navbar-toggle, .menu-list-items, .nav-back-button").click(function(){e.reversed()?e.restart():e.reverse(),setTimeout(function(){t.reversed()?t.restart():t.reverse()},250)})}};t.exports=n},{}],4:[function(e,t,o){var n=function(){function e(){r+=.01;for(var t=0;t<s.length;t++)s[t].y=30*Math.sin(.5*t+r),s[t].x=t*i+5*Math.cos(.3*t+r);n.render(a),requestAnimationFrame(e)}var t=630,o=410,n=PIXI.autoDetectRenderer(t,o);n.view.className="rendererView",document.body.appendChild(n.view);for(var a=new PIXI.Container,r=0,i=918/7,s=[],l=0;l<20;l++)s.push(new PIXI.Point(l*i,0));var c=new PIXI.mesh.Rope(PIXI.Texture.fromImage("img/underwaterocean.png"),s);c.x=-750,c.y=-200;var u=new PIXI.Container;u.position.x=400,u.position.y=300,u.scale.set(.7),a.addChild(u),u.addChild(c),requestAnimationFrame(e)};t.exports=n},{}],5:[function(e,t,o){function n(){var e=$(".preload-wrapper");TweenMax.to(e,2,{autoAlpha:0,ease:Back.easeIn.config(1.7)})}t.exports=n},{}],6:[function(e,t,o){var n=function(){var e=$(".top-of-page"),t=$(".backtop-btn");t.on("click",function(){$("html, body").animate({scrollTop:e.offset().top},500)})};t.exports=n},{}],7:[function(e,t,o){var n={fadeInText:function(e){TweenMax.staggerTo(e,1,{y:0,autoAlpha:1,ease:Back.easeInOut},.2)},resetfadeText:function(e,t,o,n){TweenMax.set(e,{alpha:t,y:o,delay:n})}};t.exports=n},{}]},{},[1]);