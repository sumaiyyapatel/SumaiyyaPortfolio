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
    // Longer duration + a gentler quartic ease-out than Lenis's default
    // (a steep exponential) — each wheel tick glides further and decelerates
    // more gradually instead of snapping toward the target.
    duration: 1.7,
    easing: (t) => 1 - Math.pow(1 - t, 4),
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
/* Video scrub — pre-extracts frames to a canvas, scroll picks the        */
/* nearest one. Native video.currentTime seeking can't keep up with fast  */
/* scrolling: every seek has to decode forward from the nearest keyframe, */
/* so a burst of scroll events queues more seeks than the browser can     */
/* service and the frame visibly lags or freezes. A canvas draw from an   */
/* already-decoded bitmap is a synchronous array lookup — scroll speed    */
/* can't outrun it.                                                       */
/* ---------------------------------------------------------------------- */

function videoScrub() {
  const wrap = document.getElementById("video-scrub-wrap");
  const video = wrap ? wrap.querySelector(".video-scrub__source") : null;
  const canvas = wrap ? wrap.querySelector(".video-scrub__canvas") : null;
  if (!wrap || !video || !canvas) return;

  if (REDUCED_MOTION) {
    video.classList.add("video-scrub__source--visible");
    video.setAttribute("controls", "");
    video.muted = false;
    canvas.remove();
    return;
  }

  video.pause();

  const FRAME_COUNT = 36;
  const ctx = canvas.getContext("2d");
  const frames = [];
  let framesReady = false;
  let lastDrawnIndex = -1;

  function drawFrame(index) {
    const bitmap = frames[index];
    if (!bitmap || index === lastDrawnIndex) return;
    lastDrawnIndex = index;
    if (canvas.width !== bitmap.width) canvas.width = bitmap.width;
    if (canvas.height !== bitmap.height) canvas.height = bitmap.height;
    ctx.drawImage(bitmap, 0, 0);
  }

  function seekTo(time) {
    return new Promise((resolve) => {
      // Setting currentTime to (approximately) where it already is — as
      // happens for the very first frame, target 0 vs. a fresh video
      // already at 0 — never fires "seeked" since no seek actually
      // occurs, which would hang this promise, and the whole extraction
      // loop, forever.
      if (Math.abs(video.currentTime - time) < 0.01) {
        resolve();
        return;
      }
      const onSeeked = () => {
        clearTimeout(fallback);
        resolve();
      };
      // Also don't trust "seeked" to fire at all in every browser/case —
      // fall back to resolving anyway so extraction can't stall.
      const fallback = setTimeout(() => {
        video.removeEventListener("seeked", onSeeked);
        resolve();
      }, 500);
      video.addEventListener("seeked", onSeeked, { once: true });
      video.currentTime = time;
    });
  }

  async function extractFrames() {
    const duration = video.duration;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const t = Math.min((i / (FRAME_COUNT - 1)) * duration, duration - 0.05);
      await seekTo(t);
      frames[i] = await createImageBitmap(video);
      if (i === 0) drawFrame(0);
    }
    framesReady = true;
  }

  function onceReady() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    extractFrames();
  }

  // readyState can already be >= 2 (HAVE_CURRENT_DATA) by the time this
  // runs — e.g. a cached/local file loads faster than init()'s own
  // fonts.ready wait — in which case "loadeddata" already fired and would
  // never fire again, so this listener would silently never run.
  if (video.readyState >= 2) {
    onceReady();
  } else {
    video.addEventListener("loadeddata", onceReady, { once: true });
  }

  ScrollTrigger.create({
    trigger: wrap,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      // Before extraction finishes, clamp to whichever frames are already
      // in — still instant, just coarser until the full set lands.
      const available = framesReady ? FRAME_COUNT : frames.length;
      if (!available) return;
      const idx = Math.min(Math.round(self.progress * (FRAME_COUNT - 1)), available - 1);
      drawFrame(idx);
    },
  });
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