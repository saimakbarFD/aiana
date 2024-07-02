$(document).ready(function () {
  setTimeout(function () {
    $(".loader").addClass("loaded");
  }, 3000);

  setTimeout(function () {
    $("nav").addClass("transitionNav");

    $("body").append(
      '<div class="backToTop"><i class="fa-solid fa-arrow-up"></i></div>'
    );

    scrollbar.addListener((status) => {
      const offset = status.offset;

      if (offset.y >= 500) {
        $("nav").addClass("sticky");
        $(".sticky").css("top", offset.y + "px");
        $(".backToTop").css({ opacity: "1", transform: "translateY(0px)" });
        setTimeout(() => {
          $("nav").removeClass("transitionNav");
        }, 1000);
      } else {
        $("nav").css("top", 0 + "px");
        $("nav").removeClass("sticky");
        $(".backToTop").css({ opacity: "0", transform: "translateY(100%)" });
        $("nav").addClass("transitionNav");
      }
      $(".mobNavInner").css("top", offset.y + "px");
    });

    $(".backToTop").on("click", function (e) {
      const target = $("#top");
      const targetEl = $(target);
      const targetRect = targetEl.offset();
      e.preventDefault();
      gsap.to(scrollbar, {
        scrollTo: targetRect.top,
        duration: 2.5,
        ease: "power4.inOut",
        onCompleteParams: [targetRect.top],
      });
    });
  }, 3000);
  function menu(menuIcon) {
    menuIcon.parent().toggleClass("menuActive");
  }
  $(".menuIcon").on("click", function () {
    menu((menuIcon = $(this)));
  });
  const ScrollArea = document.getElementById("scroll-content");
  const options = {
    damping: 0.1,
    speed: 1,
    renderByPixel: true,
    continuousScrolling: true,
    syncCallbacks: true,
    alwaysShowTracks: false,
  };
  var scrollbar = Scrollbar.init(ScrollArea, options);

  // gsap register Scroll Trigger & Smooth-scroll
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  scrollbar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: ScrollArea });

  ScrollTrigger.scrollerProxy("#scroll-content", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbar.scrollTop = value;
      }
      return scrollbar.scrollTop;
    },
  });
  scrollbar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: ScrollArea });

  $(".searchType .type").each(function () {
    if ($(this).hasClass("active")) {
      var getwidth = $(this).outerWidth();
      var getposition = $(this).position().left;
    }

    $(".activeType").css({ width: getwidth, left: getposition });

    $(this).on("click", function () {
      $(".activeType").css({
        width: $(this).outerWidth(),
        left: $(this).position().left,
      });
      $(".searchType .type").removeClass("active");
      $(this).addClass("active");
    });
  });

  $(".aiana-menu li").each(function () {
    var text = $(this).children("a").text();

    $(this).children(".dup,.sup").text(text);
  });
  //gsap timelines
  let shapes = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  shapes.to(".scrollAnimate img", {
    scale: 1.5,
    duration: 1,
  });
  let aianaFeaures = gsap.timeline({
    scrollTrigger: {
      trigger: ".aiana-Feature-1",
      pin: true,
      scrub: 1,
      start: "center center",
    },
  });

  aianaFeaures.from(".featureSingle", {
    x: 1500,
    skewX: "10deg",
    skewY: "10deg",
    duration: 2,
  });
  $(".animateScrollText").each(function () {
    gsap.from(
      $(this),
      {
        scrollTrigger: {
          trigger: $(this),
          scrub: true,
          start: "center bottom",
        },

        y: 70,
        opacity: 0,
      },
      100
    );
  });

  let aianaProjects = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects-content",
    },
  });

  aianaProjects.from(".active .project-single", {
    y: 80,
    skew: "100deg",
    scale: 0.5,
  });
  aianaProjects.to(".active .project-single", {
    y: 0,
    skewY: "0",
    scale: 1,
  });

  let circleImg = gsap.timeline({
    scrollTrigger: {
      trigger: ".circleImg",
      endTrigger: ".aiana-gallery",
      // pin: true,
      // pinSpacing: false,
      scrub: true,
      start: "center center",
      end: "bottom 10%",
    },
  });

  let animation1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".aianaFeature-2",
      start: "center center",
      end: "bottom top",
      scrub: true,
    },
  });
  animation1.to(".circleImg", {
    xPercent: -130,
    scale: 1.25,
  });
  circleImg.add(animation1);

  gsap.to(".gradient-h1.text-end", {
    xPercent: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".aianaFeature-2",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
  });

  gsap.to(".gradient-h1.text-start", {
    xPercent: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".aianaFeature-2",
      start: "center center",
      end: "bottom center",
      scrub: 1,
    },
  });

  // // Animation for aiana-details
  // let animation2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".aiana-projects",
  //     start: "center center",
  //     end: "bottom top",
  //     scrub: true,
  //   },
  // });
  // animation2.to(".circleImg", {
  //   xPercent: 130,
  //   scale: 1.25,
  // });
  // circleImg.add(animation2);

  // // Animation for section 3
  // let animation3 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".aiana-details",
  //     start: "70% center",
  //     end: "bottom top",
  //     scrub: true,
  //   },
  // });
  // animation3.to(".circleImg", {
  //   xPercent: 0,
  //   scale: 1,
  // });
  // circleImg.add(animation3);

  // // Fade out when reaching the target section
  // let fadeOutAnimation = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".aiana-details-2",
  //     start: "bottom center",
  //     scrub: true,
  //   },
  // });
  // fadeOutAnimation.to(".circleImg", {
  //   scale: 0,
  //   opacity: 0,
  //   yPercent: 100,
  //   xPercent: 0,
  //   duration: 1,
  // });

  // circleImg.add(fadeOutAnimation);

  // marquee
  $(".marquee").marquee({
    speed: 200,
    gap: 50,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    pauseOnHover: false,
  });

  // pinning projects button
  let projectTab = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects-tab",
      start: "center center",
      end: "center 10%",
      pin: true,
    },
  });

  let aianaDetails = gsap.timeline({
    scrollTrigger: {
      trigger: ".aiana-details",
      start: "top center",
      // markers: true,
    },
  });

  aianaDetails.from(".detailsImg img", {
    opacity: 0,
    x: 100,
  });
  let aianaPriceTable = gsap.timeline({
    scrollTrigger: {
      trigger: ".aiana-priceTable",
      pin: true,
      scrub: 1,
      start: "30% center",
    },
  });

  aianaPriceTable.from(".priceTable", {
    x: -1200,
    skewX: "10deg",
    skewY: "10deg",
    scale: 0.5,
    duration: 1.5,
  });
  let aiaanaGallery = gsap.timeline({
    scrollTrigger: {
      trigger: ".aiana-gallery",
      scrub: true,
      start: "top center",
      end: "bottom 10%",
      // markers: true,
    },
  });

  aiaanaGallery.from(".gallery img", {
    skewX: "10deg",
    skewY: "10deg",
    yPercent: 50,
    scale: 0.5,
  });
  aiaanaGallery.to(".gallery img", {
    skewX: "0deg",
    skewY: "0deg",
    yPercent: 0,

    scale: 1,
  });

  let aianaVideo = gsap.timeline({
    scrollTrigger: {
      trigger: ".aiana-video",
      // scrub: true,
      start: "center center",
      end: "bottom 10%",
      // markers: true,
    },
  });
  let aianaServices = gsap.timeline({
    scrollTrigger: {
      trigger: ".servicedetails",
      scrub: 1,
      start: "top center",
    },
  });
  aianaServices.from(".serviceSide", {
    xPercent: 100,
    duration: 1,
  });

  $(".startplay").on("click", function () {
    const getParent = $(this).closest(".video-block");
    const getVideo = getParent.find("iframe");
    getVideo.css("display", "block");
    getParent.find(".close").css("display", "block");
    var symbol = getVideo[0].src.indexOf("?") > -1 ? "&" : "?";

    // Check if autoplay parameter already exists
    if (getVideo[0].src.indexOf("autoplay") === -1) {
      getVideo[0].src += symbol + "autoplay=1";
    } else {
      getVideo[0].src = getVideo[0].src.replace(/autoplay=0/, "autoplay=1");
    }
  });

  $(".close").on("click", function () {
    const getParent = $(this).closest(".video-block");
    const getVideo = getParent.find("iframe");
    getVideo.css("display", "none");

    var symbol = getVideo[0].src.indexOf("?") > -1 ? "&" : "?";

    // Check if autoplay parameter already exists
    if (getVideo[0].src.indexOf("autoplay") === -1) {
      getVideo[0].src += symbol + "autoplay=0";
    } else {
      getVideo[0].src = getVideo[0].src.replace(/autoplay=1/, "autoplay=0");
    }

    $(this).css("display", "none");
  });

  $(".serviceSingle").each(function (index) {
    aianaServices.from($(this), {
      y: 50 * index,
      opacity: 0,
    });
  });

  // filling gap
  var topPosition = $(".aiana-details").css("top");
  console.log(topPosition);
  $(".aiana-details").css("padding-top", topPosition.replace("-", ""));

  // aiana-details-2 slider
  var shaderSlide;

  function initSwiper() {
    shaderSlide = new Swiper(".shaderSlide", {
      modules: [SwiperGL],
      simulateTouch: false,
      effect: "gl",
      gl: {
        shader: "morph-x",
      },
      speed: 1000,
      pagination: {
        el: ".aiana-details-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    });
  }

  function handleBreakpointChange(e) {
    if (e.matches) {
      if (shaderSlide) {
        shaderSlide.destroy(true, true);
        shaderSlide = null;
      }
    } else {
      if (!shaderSlide) {
        initSwiper();
      }
    }
  }

  var breakpoint = window.matchMedia("(max-width: 767px)");
  breakpoint.addEventListener("change", handleBreakpointChange);

  // Initial check
  handleBreakpointChange(breakpoint);

  // header playBtn
  const circleText = new CircleType(document.querySelector(".playBtn span"));

  // aiana-video playBtn
  const circleText2 = new CircleType(
    document.querySelector(".aiana-video span")
  );

  $(".accordion-header button").on("click", function () {
    var accordionItem = $(this).closest(".accordion-item");
    var img = accordionItem.find("img");
    $(".accordion-item img").removeClass("active");
    if ($(this).hasClass("collapsed")) {
      img.removeClass("active");
      fffffff;
    } else {
      img.addClass("active");
    }
  });

  // aiana testimonials

  var swiperTestimonials = new Swiper(".swiperTestimonials", {
    grabCursor: false,
    effect: "fade",
    loop: true,
    thumbs: {
      swiper: Thumbnails,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // TEstimonials SLider
  var Thumbnails = new Swiper(".testimonialThumb", {
    direction: "vertical",

    slidesPerView: 2,
    thumbs: {
      swiper: swiperTestimonials,
    },
  });
  function getRandomChar() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }

  function scrambleText(text, revealPercentage) {
    return text
      .split("")
      .map((char, i) => {
        return Math.random() < revealPercentage ? char : getRandomChar();
      })
      .join("");
  }

  function animateToOriginal(element, originalText, duration) {
    let revealPercentage = 0;
    const intervalTime = 100;
    const steps = duration / intervalTime;

    const interval = setInterval(function () {
      revealPercentage += 1 / steps;
      element.text(scrambleText(originalText, revealPercentage));

      if (revealPercentage >= 1) {
        clearInterval(interval);
        element.text(originalText);
      }
    }, intervalTime);
  }

  const scrambleElement = $(".loaderText");
  const originalText = scrambleElement.data("original");
  const totalDuration = 2000; // total duration in milliseconds

  animateToOriginal(scrambleElement, originalText, totalDuration);

  // scroll to
  $(".navMenu li a").each(function (e) {
    const target = $(this).attr("href");
    const targetEl = $(target);
    const targetRect = targetEl.offset();

    $(this).on("click", function (e) {
      menu($(".menuIcon"));
      var setOffset = 0;
      if (target == "#video") {
        setOffset = -120;
      } else {
        setOffset = 70;
      }

      e.preventDefault();
      gsap.to(scrollbar, {
        scrollTo: targetRect.top + setOffset,
        duration: 2.5,
        ease: "power4.inOut",
        onCompleteParams: [targetRect.top],
      });

      $(".aiana-menu li a").removeClass("active");
      $(this).addClass("active");
    });
  });

  ScrollTrigger.matchMedia({
    "(max-width: 768px)": function () {
      circleImg.clear();
      circleImg.revert();

      aianaFeaures.clear();
      aianaFeaures.revert();
      gsap.set(".featureSingle", {
        clearProps: "all",
      });

      aianaPriceTable.clear();
      aianaPriceTable.revert();
      gsap.set(".priceTable", {
        clearProps: "all",
      });
    },
  });
});
