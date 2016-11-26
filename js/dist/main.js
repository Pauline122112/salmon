!function e(t,n,o){function a(i,s){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(r)return r(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return a(n?n:e)},c,c.exports,e,t,n,o)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(e,t,n){var o=e("./lib/navigation.js"),a=(e("./lib/preloader.js"),e("./lib/animation.js")),r=e("./lib/typographyAnimation.js"),i=(e("./lib/pixiBackground.js"),e("./lib/scrollToTop.js"));$(document).ready(function(){function e(){h+=.01;for(var t=0;t<g.length;t++)g[t].y=30*Math.sin(.5*t+h),g[t].x=t*v+5*Math.cos(.3*t+h);f.render(m),requestAnimationFrame(e)}i();var t=function(){var e=0;$(window).scroll(function(){function t(e,t){TweenMax.to(e,.2,{y:t,ease:Linear.easeNone})}var n=$(this).scrollTop(),o=$(".logo, .navbar-toggle"),a=$(".secondary-nav");n>e?(TweenMax.to(a,.2,{y:"-100",ease:Linear.easeNone}),TweenMax.to(a,.2,{css:{background:"#072231"},ease:Linear.easeNone})):(t(o,30),t(a,0)),e=n})};t(),o.init(),$("#fullpage").fullpage({menu:"#myMenu",lockAnchors:!1,navigation:!0,navigationPosition:"right",showActiveTooltip:!0,css3:!0,fadingEffect:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!1,continuousVertical:!1,verticalCentered:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!0,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,verticalCentered:!1,anchors:["home","about-me","prototype","user-interface","design"],setResponsive:!0,afterLoad:function(e,t){$(this);2==t&&r.fadeInText(l),3===t&&r.fadeInText(n),4===t&&r.fadeInText(s),5===t&&r.fadeInText(c),3===t||4===t||5===t?($(".red-logo").removeClass("active-logo"),$(".white-logo").addClass("active-logo"),$(".menu-bar").css({background:"#FEFEE6",transition:"background 1.5s"}),$(".watermark-text, .contact-item, .title-caption").css({color:"#FEFEE6",transition:"color 1.5s"}),$(".social-main li").css({"border-color":"rgba(255,255, 255, 0.25)",transition:"border-color 1.5s"}),$(".pulse-button").css({stroke:"#FEFEE6",transition:"color 1.5s"})):($(".white-logo").removeClass("active-logo"),$(".red-logo").addClass("active-logo"),$(".menu-bar").css("background","#E94444"),$(".watermark-text, .contact-item, .title-caption").css("color","#E94444"),$(".social-main li").css("border-color","rgba(233,68, 68, 0.15)"),$(".pulse-button").css("stroke","#E94444"))},onLeave:function(e,t,o){$(this);(2===e&&"up"===o||3===e&&"down"===o)&&r.resetfadeText(l,0,20,1),(3===e&&"up"===o||3===e&&"down"===o)&&r.resetfadeText(n,0,20,1),(4===e&&"up"===o||4===e&&"down"===o)&&r.resetfadeText(s,0,20,1),4===e&&"up"===o&&r.resetfadeText(c,0,20,1)}});var n=$(".fadetext-prototype"),s=$(".fadetext-ui"),l=$(".fadetext-about"),c=$(".fadetext-design"),u=($(".menu-item"),function(){TweenMax.set([n,s,l,c],{alpha:0,y:30})});u(),a.salmonAnimation(),a.pulseButton();var d=630,p=410,f=PIXI.autoDetectRenderer(d,p);f.view.className="rendererView",document.body.appendChild(f.view);for(var m=new PIXI.Container,h=0,v=918/7,g=[],x=0;x<20;x++)g.push(new PIXI.Point(x*v,0));var w=new PIXI.mesh.Rope(PIXI.Texture.fromImage("img/underwaterocean.png"),g);w.x=-750,w.y=-200;var b=new PIXI.Container;b.position.x=400,b.position.y=300,b.scale.set(.7),m.addChild(b),b.addChild(w),requestAnimationFrame(e)})},{"./lib/animation.js":2,"./lib/navigation.js":3,"./lib/pixiBackground.js":4,"./lib/preloader.js":5,"./lib/scrollToTop.js":6,"./lib/typographyAnimation.js":7}],2:[function(e,t,n){var o={pulseButton:function(){TweenMax.to(".pulse-button circle:nth-child(1)",4,{attr:{r:25,"stroke-width":1,"stroke-opacity":1},opacity:0,repeat:-1,delay:1}),TweenMax.to(".pulse-button circle:nth-child(2)",4,{attr:{r:25,"stroke-width":1,"stroke-opacity":1},opacity:0,repeat:-1}),TweenMax.to(".pulse-button circle:nth-child(3)",2,{attr:{r:2},repeat:-1,yoyo:!0,ease:Power2.easeOut})},salmonAnimation:function(){var e=$("#salmon-fish");salmonTl=new TimelineMax({repeat:-1}),salmonTl.to(e,5,{bezier:[{x:10,y:11},{x:0,y:20},{x:-10,y:10},{x:0,y:0}],ease:Linear.easeNone})}};t.exports=o},{}],3:[function(e,t,n){var o={init:function(){this.cacheDom(),this.render()},cacheDom:function(){this.$menuBar=$(".navbar-toggle"),this.$menuListItem=$("menu-list-items"),this.$fade=$(".fp-nav-wrapper"),this.$navBackButton=$(".nav-back-button"),this.$menuItem=$(".menu-item")},hamburgerMenu:function(){var e=$(".menu-bar"),t=new TimelineMax;t.staggerTo(e,2,{scaleX:"1.3",repeat:-1,yoyo:!0,ease:Linear.easeNone},.5)},render:function(){this.hamburgerMenu();var e=new TimelineMax({paused:!0,reversed:!0}),t=new TimelineMax({paused:!0,reversed:!0});TweenMax.set(this.$menuItem,{autoAlpha:0,y:-40}),t.staggerTo(this.$menuItem,1,{y:0,autoAlpha:1,ease:Back.easeInOut},.05),TweenMax.set(this.$fade,{y:"-100%"}),e.to(this.$fade,1,{y:"0%",ease:Power4.easeInOut}),$(".navbar-toggle, .menu-list-items, .nav-back-button").click(function(){e.reversed()?e.restart():e.reverse(),setTimeout(function(){t.reversed()?t.restart():t.reverse()},250)})}};t.exports=o},{}],4:[function(e,t,n){var o=function(){function e(){r+=.01;for(var t=0;t<s.length;t++)s[t].y=30*Math.sin(.5*t+r),s[t].x=t*i+5*Math.cos(.3*t+r);o.render(a),requestAnimationFrame(e)}var t=630,n=410,o=PIXI.autoDetectRenderer(t,n);o.view.className="rendererView",document.body.appendChild(o.view);for(var a=new PIXI.Container,r=0,i=918/7,s=[],l=0;l<20;l++)s.push(new PIXI.Point(l*i,0));var c=new PIXI.mesh.Rope(PIXI.Texture.fromImage("img/pixi/underwaterocean.png"),s);c.x=-750,c.y=-200;var u=new PIXI.Container;u.position.x=400,u.position.y=300,u.scale.set(.7),a.addChild(u),u.addChild(c),requestAnimationFrame(e)};t.exports=o},{}],5:[function(e,t,n){function o(){var e=$(".spinner-wrapper");TweenMax.to(e,2,{autoAlpha:0,ease:Back.easeIn.config(1.7)})}t.exports=o},{}],6:[function(e,t,n){var o=function(){var e=$(".top-of-page"),t=$(".backtop-btn");t.on("click",function(){$("html, body").animate({scrollTop:e.offset().top},500)})};t.exports=o},{}],7:[function(e,t,n){var o={fadeInText:function(e){TweenMax.staggerTo(e,1,{y:0,autoAlpha:1,ease:Back.easeInOut},.2)},resetfadeText:function(e,t,n,o){TweenMax.set(e,{alpha:t,y:n,delay:o})}};t.exports=o},{}]},{},[1]);