// Animated elements

const animation = {
  pulseButton: () => {
    TweenMax.to('.pulse-button circle:nth-child(1)', 4, {
    attr: {
      r: 25,
      "stroke-width": 1,
      "stroke-opacity": 1,
    },
      opacity: 0,
      repeat: -1,
      delay: 1,
    });

    TweenMax.to('.pulse-button circle:nth-child(2)', 4, {
    attr: {
      r: 25,
      "stroke-width": 1,
      "stroke-opacity": 1
    },
    opacity: 0,
    repeat: -1,
    });

    TweenMax.to('.pulse-button circle:nth-child(3)', 2, {
    attr: {
     r: 2
    },
      repeat: -1,
      yoyo: true,
      ease: Power2.easeOut,
    });
  },
  downArrow: () => {
    const $downArrow = $('.down-arrow');
    TweenMax.set($downArrow, {
      y: -50,
    });
    TweenMax.to($downArrow, 3, {
      y: 60,
      repeat: -1,
    });
  },

}

export default animation;
