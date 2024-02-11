gsap.from(".intro_desc h1", {
    opacity: 0,
    y: -100,
    duration: 1,
    delay: 1,
    ease: Expo.easeInOut
  });

  gsap.from(".intro_btn", {
    opacity: 0,
    x: -200,
    duration: 1,
    delay: 1.5,
    ease: Expo.easeInOut
  });

  gsap.from('.intro_carousel',{
    opacity: 0,
    x: 300,
    duration: 2,
    delay: 1.7,
    ease: Expo.easeInOut
  });

  gsap.from('.intro_wave',{
    opacity: 0,
    y: 300,
    duration: 2,
    delay: 2.9,
    ease: Expo.easeInOut
  });


  gsap.from('.logo',{
    opacity: 0,
    y: -200,
    duration: 2,
    delay: 1.8,
    ease: Expo.easeInOut
  });

  gsap.from('.mInicio',{
    opacity: 0,
    y: -200,
    duration: 2,
    delay: 2,
    ease: Expo.easeInOut
  });
  gsap.from('.mServicios',{
    opacity: 0,
    y: -200,
    duration: 2,
    delay: 2.2,
    ease: Expo.easeInOut
  });
  gsap.from('.mPrecios',{
    opacity: 0,
    y: -200,
    duration: 2,
    delay: 2.4,
    ease: Expo.easeInOut
  });
  gsap.from('.mTestimonios',{
    opacity: 0,
    y: -200,
    duration: 2,
    delay: 2.6,
    ease: Expo.easeInOut
  });
  gsap.from('.mContacto',{
    opacity: 0,
    y: -200,
    duration: 2,
    delay: 2.8,
    ease: Expo.easeInOut
  });
  

  gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2},
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, y: 200, yoyo: true, repeat: -1 });
    }
});

document.querySelectorAll(".st_img-1").forEach(function(box) {
  box.addEventListener("mouseenter", function() {
    gsap.effects.fade(this);
  });
});