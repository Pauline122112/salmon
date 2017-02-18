'use strict'

import animation from './lib/animation.js';
import animatedText from './lib/typographyAnimation.js';
import chatbotSlideMenu from './lib/chatbotSlideMenu.js';
import navHide from './lib/navHide.js';
import navigationSlideMenu from './lib/navigation.js';
import pagePreloader from './lib/preloader.js';
import pixiBackground from './lib/pixiBackground.js';
import scrollToTop from './lib/scrollToTop.js';


$(document).ready(function(){

const $fadeTextPrototype = $('.fadetext-prototype');
const $fadeTextChatbot = $('.fadetext-chatbot');
const $fadeTextUi = $('.fadetext-ui');
const $fadeTextAbout = $('.fadetext-about');
const $fadeTextDesign = $('.fadetext-design')
const $menuItem = $('.menu-item');

const $salmon = '#E94444';
const $reverse = '#FEFEE6';

// Chatbot slidedown menu
  chatbotSlideMenu();

// SCROLL BACK TO TOP OF PAGE
  scrollToTop();

// PRE-LAODER
  $(window).load(function(){
    setTimeout(pagePreloader.background, 500);
    pagePreloader.preloader();
  });

// HIDE NAV MENU ON SCROLLING
  navHide();

// NAVIGATION
navigationSlideMenu.init();

// FULL PAGE PLUGIN - initialize fullpage
  $('#fullpage').fullpage({
  //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['HOME', 'ABOUT', 'PROTOTYPING', 'CHATBOT', 'USER-INTERFACE', 'DESIGN'],
    showActiveTooltip: true,
    css3: true,
    // fadingEffect: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: false,
    continuousVertical: false,
    verticalCentered: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    verticalCentered: false,
    anchors: ['home', 'about-me', 'prototype','chatbot', 'user-interface', 'design'],
    setResponsive: true,
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      if (index === 2) {
        animatedText.fadeInText($fadeTextAbout);
      }

      if (index === 3) {
        animatedText.fadeInText($fadeTextPrototype);
      }

      if (index === 4) {
          animatedText.fadeInText($fadeTextChatbot);
      }

      if (index === 5) {
          animatedText.fadeInText($fadeTextUi);
      }

      if (index === 6) {
          animatedText.fadeInText($fadeTextDesign);
      }

      if (index === 3 || index === 4 || index === 5 || index === 6) {
        $('.red-logo').removeClass('active-logo');
        $('.white-logo').addClass('active-logo');
        $('.menu-bar').css({
          'background': `${$reverse}`,
          'transition': 'background 1.5s',
        });
        $('.watermark-text, .contact-item, .title-caption').css({
          'color': `${$reverse}`,
          'transition': 'color 1.5s'
        });
        $('.social-main li').css({
          'border-color': 'rgba(255,255, 255, 0.25)',
          'transition': 'border-color 1.5s',
        });
        $('.pulse-button').css({
          'stroke': `${$reverse}`,
          'transition': 'color 1.5s',
        });
        $('#fp-nav').find('span').css({
          'background': 'rgba(255, 255, 255, 0.6)'
        });
        $('.my-work').css({
          'color': `${$reverse}`,
          'border': `1px solid ${$reverse}`,
        });
        $('#fp-nav ul li .fp-tooltip').css({
          'color' : `${$reverse}`
        })

      } else {
        $('.white-logo').removeClass('active-logo');
        $('.red-logo').addClass('active-logo');
        $('.menu-bar').css('background', `${$salmon}`);
        $('.watermark-text, .contact-item, .title-caption').css('color', `${$salmon}`);
        $('.social-main li').css('border-color', 'rgba(233,68, 68, 0.15)');
        $('.pulse-button').css('stroke', `${$salmon}`);
        $('#fp-nav').find('span').css({
          'background' : `${$salmon}`,
          'opacity': '0.6'
        });
        $('.my-work').css({
          'color': `${$salmon}`,
          'border': `1px solid ${$salmon}`,
        });
        $('#fp-nav ul li .fp-tooltip').css({
          'color' : `${$salmon}`
        })

      }

    },
    onLeave: (index, nextIndex, direction) => {
      var leavingSection = $(this);

      if(index === 2 && direction === 'up' || index === 3 && direction === 'down'){
        animatedText.resetfadeText($fadeTextAbout, 0, 20, 1);
      }

      if(index === 3 && direction === 'up' || index === 3 && direction === 'down'){
        animatedText.resetfadeText($fadeTextPrototype, 0, 20, 1);
      }

      if(index === 4 && direction === 'up' || index === 4 && direction === 'down'){
        animatedText.resetfadeText($fadeTextChatbot, 0, 20, 1);
      }

      if(index === 5 && direction === 'up' || index === 5 && direction === 'down'){
        animatedText.resetfadeText($fadeTextUi, 0, 20, 1);
      }

      if(index === 6 && direction === 'up'){
        animatedText.resetfadeText($fadeTextDesign, 0, 20, 1);
      }
    }
  }); //end of fullpage.js


  // set initial state of text
  const setState = () => {
      TweenMax.set([$fadeTextPrototype, $fadeTextChatbot, $fadeTextUi, $fadeTextAbout, $fadeTextDesign], {
        alpha: 0,
        y: 30,
      });
    };
  setState();


  /**
  * PULSE ANIMATION
  */
  animation.pulseButton();

  /**
  * PIXI JS / FISH
  */
  pixiBackground();


}); // end of document.ready()
