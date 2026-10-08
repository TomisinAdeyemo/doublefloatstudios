/* =========================================================
   WORK ARCHIVE JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".archive-card");
  const visibleCount = document.querySelector("#visible-count");



  /* =====================================================
     FILTER PROJECTS
  ===================================================== */

  filters.forEach(filter => {

    filter.addEventListener("click", () => {

      const category = filter.dataset.filter;


      /* Active button */

      filters.forEach(item => {

        item.classList.remove("active");

        item.setAttribute(
          "aria-selected",
          "false"
        );

      });


      filter.classList.add("active");

      filter.setAttribute(
        "aria-selected",
        "true"
      );



      /* Filter cards */

      let visible = 0;


      cards.forEach(card => {

        const cardCategory =
          card.dataset.category;


        if (
          category === "all" ||
          cardCategory === category
        ) {

          card.classList.remove("is-hidden");

          visible++;

        } else {

          card.classList.add("is-hidden");

        }

      });



      /* Update counter */

      visibleCount.textContent =
        `${visible} ${visible === 1 ? "project" : "projects"}`;


      /* Small reset */

      window.scrollTo({
        top: window.scrollY + 1,
        behavior: "smooth"
      });

    });

  });



  /* =====================================================
     SCROLL PROGRESS
  ===================================================== */

  const progress =
    document.querySelector(
      ".work-progress span"
    );


  function updateProgress() {

    const scrollTop =
      window.scrollY;

    const pageHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;


    const percentage =
      pageHeight > 0
        ? (scrollTop / pageHeight) * 100
        : 0;


    progress.style.width =
      `${percentage}%`;

  }


  window.addEventListener(
    "scroll",
    updateProgress,
    { passive: true }
  );


  updateProgress();



  /* =====================================================
     IMAGE REVEAL
  ===================================================== */

  const media =
    document.querySelectorAll(
      ".archive-media"
    );


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: .15
      }
    );


  media.forEach(item => {

    observer.observe(item);

  });



  /* =====================================================
     CUSTOM CURSOR
  ===================================================== */

  const cursor =
    document.querySelector(".cursor");


  if (cursor) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    window.addEventListener(
      "mousemove",
      event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

      }
    );


    function animateCursor() {

      cursorX +=
        (mouseX - cursorX) * .15;

      cursorY +=
        (mouseY - cursorY) * .15;


      cursor.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0)`;


      requestAnimationFrame(
        animateCursor
      );

    }


    animateCursor();



    document
      .querySelectorAll(
        "[data-cursor]"
      )
      .forEach(element => {

        element.addEventListener(
          "mouseenter",
          () => {

            cursor.classList.add(
              "cursor-view"
            );

          }
        );


        element.addEventListener(
          "mouseleave",
          () => {

            cursor.classList.remove(
              "cursor-view"
            );

          }
        );

      });

  }



  /* =====================================================
     CARD TILT
  ===================================================== */

  if (window.innerWidth > 900) {

    cards.forEach(card => {

      const media =
        card.querySelector(
          ".archive-media"
        );


      media.addEventListener(
        "mousemove",
        event => {

          const rect =
            media.getBoundingClientRect();


          const x =
            event.clientX - rect.left;

          const y =
            event.clientY - rect.top;


          const rotateX =
            ((y / rect.height) - .5) * -2;


          const rotateY =
            ((x / rect.width) - .5) * 2;


          media.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        }
      );


      media.addEventListener(
        "mouseleave",
        () => {

          media.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

        }
      );

    });

  }

});