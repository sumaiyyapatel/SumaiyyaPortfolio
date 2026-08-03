gsap.registerPlugin(ScrollTrigger, SplitText);

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const IS_TOUCH = matchMedia("(hover: none), (pointer: coarse)").matches;

document.addEventListener("DOMContentLoaded", () => {
  document.fonts.ready.then(init);
});

function init() {
  if (!REDUCED_MOTION && !IS_TOUCH) {
    smoothScroll();
    parallax();
  }

  heroEntrance();
  heroPinZoom();
  marquee();
  manifestoReveal();
  arsenalBuild();
  videoScrub();
  claimsCount();
  cultPinZoom();
  cultForm();
  magneticButtons();
  cartInteractions();

  ScrollTrigger.refresh();
}

/* ---------------------------------------------------------------------- */
/* Lenis smooth scroll — replaces ScrollSmoother, wired to ScrollTrigger  */
/* via the official Lenis + GSAP recipe                                   */
/* ---------------------------------------------------------------------- */

function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  // Keep ScrollTrigger's positions in sync with Lenis's interpolated
  // scroll position every frame.
  lenis.on("scroll", ScrollTrigger.update);

  // Drive Lenis from GSAP's own ticker instead of a separate rAF loop, so
  // everything stays on one clock. GSAP's ticker passes seconds; Lenis
  // wants milliseconds.
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // GSAP's ticker smooths out lag spikes by default, which fights with
  // Lenis doing its own smoothing — turn that off so scroll stays snappy.
  gsap.ticker.lagSmoothing(0);

  // velocity-driven skew, replicates GreenSock pen xxXadQJ — previously
  // driven by ScrollSmoother's onUpdate, now driven by Lenis's own
  // velocity value.
  const skewSetter = gsap.quickTo(".headline-main, .product__art", "skewY", { duration: 0.3, ease: "power2" });
  const clampSkew = gsap.utils.clamp(-6, 6);

  lenis.on("scroll", ({ velocity }) => {
    skewSetter(clampSkew(velocity / -3));
  });
}

/* ---------------------------------------------------------------------- */
/* Parallax — replaces ScrollSmoother's effects:true auto-parallax on     */
/* any element carrying a data-speed attribute (see the hero markup)      */
/* ---------------------------------------------------------------------- */

function parallax() {
  gsap.utils.toArray("[data-speed]").forEach((el) => {
    const speed = parseFloat(el.dataset.speed);
    // speed > 1 moves faster than scroll (foreground feel),
    // speed < 1 moves slower (background feel), matching ScrollSmoother's
    // convention.
    gsap.to(el, {
      y: () => (1 - speed) * 150,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Hero entrance (on load)                                                */
/* ---------------------------------------------------------------------- */

function heroEntrance() {
  const tl = gsap.timeline({ delay: 0.2 });

  if (!REDUCED_MOTION) {
    const split = new SplitText(".headline-main", { type: "chars" });
    gsap.set(".headline-outline, .headline-blend", { opacity: 0 });

    tl.from(".kicker", { y: -20, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from(
        split.chars,
        {
          y: 120,
          opacity: 0,
          rotate: () => gsap.utils.random(-25, 25),
          duration: 0.9,
          stagger: 0.035,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )
      .to(".headline-outline, .headline-blend", { opacity: 1, duration: 0.5 }, "-=0.3")
      .from(".sub-headline", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .from(".hero-actions .btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.35")
      .from(".scroll-cue", { opacity: 0, duration: 0.6 }, "-=0.2")
      .from(".blob", { scale: 0, opacity: 0, duration: 1, stagger: 0.1, ease: "power2.out" }, 0);
  } else {
    gsap.set(
      [".kicker", ".headline-main", ".headline-outline", ".headline-blend", ".sub-headline", ".hero-actions .btn", ".scroll-cue", ".blob"],
      { opacity: 1, y: 0, scale: 1 }
    );
  }
}

/* ---------------------------------------------------------------------- */
/* Hero pinned zoom — replicates GreenSock pen YzbPYMx                    */
/* ---------------------------------------------------------------------- */

function heroPinZoom() {
  if (REDUCED_MOTION) return;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#pin-hero",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
    })
    .to(".hero-blob-layer", { scale: 1.9, z: 300, transformOrigin: "center center", ease: "power1.inOut" })
    .to(".hero", { scale: 1.06, ease: "power1.inOut" }, "<")
    .to(".hero-inner", { opacity: 0.12, ease: "power1.inOut" }, "<");
}

/* ---------------------------------------------------------------------- */
/* Marquee                                                                 */
/* ---------------------------------------------------------------------- */

function marquee() {
  const track = document.querySelector(".marquee__track");
  if (!track) return;

  const distance = track.scrollWidth / 2;
  const duration = distance / 90;

  gsap.to(track, {
    xPercent: -50,
    repeat: -1,
    duration: REDUCED_MOTION ? duration * 4 : duration,
    ease: "none",
  });
}

/* ---------------------------------------------------------------------- */
/* Manifesto — word-stagger reveal + layered background title             */
/* ---------------------------------------------------------------------- */

function manifestoReveal() {
  const body = document.getElementById("manifesto-body");
  if (!body) return;

  if (!REDUCED_MOTION) {
    const split = new SplitText(body, { type: "words" });
    gsap.set(split.words, { opacity: 0.15, y: 6 });

    gsap.to(split.words, {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      ease: "none",
      scrollTrigger: {
        trigger: body,
        start: "top 85%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  } else {
    gsap.set(body, { opacity: 1 });
  }
}

/* ---------------------------------------------------------------------- */
/* Arsenal — per-product pinned assembly, replicates pen gOabMXv          */
/* ---------------------------------------------------------------------- */

function arsenalBuild() {
  const lineup = document.querySelector(".arsenal__lineup img");
  if (lineup) {
    if (REDUCED_MOTION) {
      gsap.set(lineup, { opacity: 1, scale: 1 });
    } else {
      gsap.from(lineup, {
        opacity: 0,
        scale: 0.92,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineup,
          start: "top 85%",
        },
      });
    }
  }

  const products = gsap.utils.toArray(".product");

  products.forEach((product, i) => {
    const glow = product.querySelector(".art-glow");
    const photo = product.querySelector(".product__photo");
    const copy = product.querySelectorAll(".product__index, .product__name, .product__desc, .product__copy .btn");

    if (REDUCED_MOTION) {
      gsap.set([glow, photo, copy], { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 });
      return;
    }

    gsap.set(copy, { opacity: 0, y: 30 });

    // Piece-assembly technique adapted from GreenSock pen gOabMXv: the glow
    // (like the shoe's sole) lands first, the product photo (like the upper)
    // flies in and settles on top of it. That pen pins a single hero-style
    // showcase; pinning four in a row back-to-back instead produces dead
    // blank gaps between items, so here the same build plays as each
    // product scrubs through a natural (unpinned) scroll window instead.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: product,
        start: "top 75%",
        end: "top 20%",
        scrub: 0.6,
      },
    });

    tl.from(glow, {
      scale: 0.3,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        photo,
        {
          y: 220,
          opacity: 0,
          scale: 0.85,
          rotate: i % 2 === 0 ? -6 : 6,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        copy,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.6"
      );
  });
}

/* ---------------------------------------------------------------------- */
/* Video scrub — ties scroll directly to video.currentTime                */
/* ---------------------------------------------------------------------- */

function videoScrub() {
  const section = document.getElementById("video-scrub");
  const video = section ? section.querySelector("video") : null;
  if (!section || !video) return;

  if (REDUCED_MOTION) {
    video.setAttribute("controls", "");
    video.muted = false;
    return;
  }

  video.pause();

  // The pin is created synchronously, same as every other pinned section,
  // so its spacer exists before init()'s ScrollTrigger.refresh() runs.
  // Two problems with driving currentTime straight off onUpdate:
  //
  // 1. Race condition — if metadata hasn't loaded yet, video.duration is
  //    NaN and every onUpdate silently no-ops, so scrubbing can do nothing
  //    for however long the video takes to load.
  // 2. Choppy seeking — setting currentTime synchronously on every scroll
  //    tick queues more seeks than the browser can decode, so it stutters.
  //
  // Fix: wait for metadata (loadedmetadata / readyState check), then only
  // ever have one pending seek in flight via requestAnimationFrame — store
  // the latest scroll progress and let a single rAF loop apply it.
  let targetProgress = 0;
  let seekQueued = false;

  function requestSeek(progress) {
    targetProgress = progress;
    if (seekQueued) return;
    seekQueued = true;
    requestAnimationFrame(() => {
      video.currentTime = targetProgress * video.duration;
      seekQueued = false;
    });
  }

  function createScrubTrigger() {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      onUpdate: (self) => requestSeek(self.progress),
    });
    ScrollTrigger.refresh();
  }

  if (video.readyState >= 1) {
    // Metadata (duration) already available.
    createScrubTrigger();
  } else {
    video.addEventListener("loadedmetadata", createScrubTrigger, { once: true });
  }
}

/* ---------------------------------------------------------------------- */
/* Claims — count up on scroll into view                                  */
/* ---------------------------------------------------------------------- */

function claimsCount() {
  gsap.utils.toArray(".claim__num[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const counter = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: target,
          duration: REDUCED_MOTION ? 0.01 : 1.4,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + suffix;
          },
        });
      },
    });
  });

  gsap.from(".claim__num--inf", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(2)",
    scrollTrigger: {
      trigger: ".claim__num--inf",
      start: "top 90%",
      once: true,
    },
  });
}

/* ---------------------------------------------------------------------- */
/* Cult / final CTA — pinned zoom, mirrors hero                           */
/* ---------------------------------------------------------------------- */

function cultPinZoom() {
  if (REDUCED_MOTION) return;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#pin-cult",
        start: "top top",
        end: "+=90%",
        pin: true,
        scrub: true,
      },
    })
    .from(".cult-blob-layer", { scale: 0.4, opacity: 0, z: -200, transformOrigin: "center center", ease: "power1.inOut" })
    .from(".cult__title, .cult__sub, .cult__form", { y: 40, opacity: 0, stagger: 0.1, ease: "power1.inOut" }, "<");
}

/* ---------------------------------------------------------------------- */
/* Cult form (no backend — local confirmation only)                       */
/* ---------------------------------------------------------------------- */

function cultForm() {
  const form = document.getElementById("cult-form");
  const confirm = document.getElementById("cult-confirm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("cult-email").value;
    confirm.textContent = `you're in, ${email.split("@")[0]}. brace yourself.`;
    gsap.fromTo(confirm, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 });
    form.reset();
  });
}

/* ---------------------------------------------------------------------- */
/* Magnetic buttons                                                       */
/* ---------------------------------------------------------------------- */

function magneticButtons() {
  if (IS_TOUCH || REDUCED_MOTION) return;

  document.querySelectorAll(".btn--solid, .btn--outline").forEach((btn) => {
    const moveX = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
    const moveY = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      moveX((e.clientX - rect.left - rect.width / 2) * 0.3);
      moveY((e.clientY - rect.top - rect.height / 2) * 0.3);
    });

    btn.addEventListener("mouseleave", () => {
      moveX(0);
      moveY(0);
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Cart interactions                                                      */
/* ---------------------------------------------------------------------- */

function cartInteractions() {
  const countEl = document.getElementById("cart-count");
  const cartLink = document.querySelector(".nav__cart");
  let count = 0;

  document.querySelectorAll(".product .btn--mini").forEach((btn) => {
    btn.addEventListener("click", () => {
      count += 1;
      countEl.textContent = count;
      gsap.fromTo(cartLink, { scale: 1 }, { scale: 1.15, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.inOut" });
      gsap.fromTo(btn, { y: 0 }, { y: -4, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.inOut" });
    });
  });
}