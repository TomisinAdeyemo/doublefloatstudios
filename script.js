const cursor = document.querySelector(".cursor");
const progress = document.querySelector(".scroll-progress span");


// ==============================
// CUSTOM CURSOR
// ==============================

window.addEventListener("mousemove", (event) => {

  if (!cursor) return;

  cursor.style.left =
    `${event.clientX}px`;

  cursor.style.top =
    `${event.clientY}px`;

});


document
  .querySelectorAll("[data-cursor]")
  .forEach((element) => {

    element.addEventListener("mouseenter", () => {

      if (!cursor) return;

      if (
        element.dataset.cursor === "view"
      ) {

        cursor.classList.add("view");

      }

      else {

        cursor.classList.add("link");

      }

    });


    element.addEventListener("mouseleave", () => {

      cursor?.classList.remove(
        "view",
        "link"
      );

    });

  });


// ==============================
// PRELOADER
// ==============================

const loader =
  document.querySelector(".loader");


window.addEventListener(
  "load",
  () => {

    setTimeout(() => {

      loader?.classList.add("done");

    }, 1250);

  }
);


// ==============================
// SCROLL PROGRESS
// ==============================

window.addEventListener(
  "scroll",
  () => {

    const max =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    if (!progress) return;

    const percentage =
      max
        ? window.scrollY / max * 100
        : 0;

    progress.style.width =
      `${percentage}%`;

  }
);


// ==============================
// SCROLL REVEALS
// ==============================

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            !entry.isIntersecting
          ) return;

          entry.target.animate(

            [
              {
                opacity: 0,
                transform:
                  "translateY(45px)"
              },

              {
                opacity: 1,
                transform:
                  "translateY(0)"
              }
            ],

            {
              duration: 950,

              easing:
                "cubic-bezier(.2,.65,.25,1)",

              fill: "forwards"
            }

          );

          observer.unobserve(
            entry.target
          );

        }
      );

    },

    {
      threshold: .08
    }

  );


document
  .querySelectorAll(
    ".project, .about, .capabilities, .process, .contact, .manifesto"
  )
  .forEach(
    element =>
      observer.observe(element)
  );


// ==============================
// PROJECT TILT
// ==============================

document
  .querySelectorAll(".project-image")
  .forEach((card) => {

    card.addEventListener(
      "mousemove",
      (event) => {

        if (
          matchMedia(
            "(pointer: coarse)"
          ).matches
        ) return;

        const rect =
          card.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
          rect.width -
          .5;

        const y =
          (event.clientY - rect.top) /
          rect.height -
          .5;

        card.style.transform =
          `
          perspective(1200px)
          rotateX(${y * -1.4}deg)
          rotateY(${x * 1.4}deg)
          `;

      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform = "";

      }
    );

  });


// ==============================
// MAGNETIC LINKS
// ==============================

document
  .querySelectorAll(
    ".email, .text-link, .nav a"
  )
  .forEach((link) => {

    link.addEventListener(
      "mousemove",
      (event) => {

        if (
          matchMedia(
            "(pointer: coarse)"
          ).matches
        ) return;

        const rect =
          link.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left -
          rect.width / 2;

        const y =
          event.clientY -
          rect.top -
          rect.height / 2;

        link.style.transform =
          `
          translate(
            ${x * .06}px,
            ${y * .06}px
          )
          `;

      }
    );


    link.addEventListener(
      "mouseleave",
      () => {

        link.style.transform = "";

      }
    );

  });


// ==============================
// YEAR
// ==============================

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}