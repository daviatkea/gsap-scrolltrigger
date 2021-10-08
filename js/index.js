gsap.registerPlugin(ScrollTrigger);

// BALL 1
gsap.to(".ball-1", {
  scale: 2,
  duration: 3,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".ball-2",
    start: "top 50%",
    end: "",
    // markers: true,
  },
});

// BALL 2
gsap.to(".ball-2", {
  scale: 2,
  duration: 2,
  scrollTrigger: {
    trigger: ".ball-2",
    start: "top 50%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// BALL 2 END

// BALL 3
gsap.from(".ball-3", {
  x: 300,
  scale: 0.3,
  rotation: 360,
  duration: 2,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".ball-3",
    // markers: true,
    start: "center center",
    end: "center 25%",
    scrub: true,
    pin: true,
  },
});
// BALL 3 END

// BALL 4
gsap.from(".ball-4", {
  yPercent: 100,
  stagger: 0.3,
  ease: "none",
  scrollTrigger: {
    trigger: ".ball-4",
    start: "top 80%",
    end: "top 20%",
    // scrub: true,
    // markers: true,
  },
});
// BALL 4 END

// BALL 5
ScrollTrigger.create({
  trigger: ".ball-5",
  start: "top center",
  end: "top 100px",
  toggleClass: "active",
  once: true,
  markers: true,
});
// BALL 5 END
