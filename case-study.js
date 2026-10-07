/* =========================================================
   CASE STUDY — PROJECT DATA
========================================================= */

const projects = {

  /* =======================================================
     HELIOS
  ======================================================= */

  helios: {

    title: "Helios",

    logo: "helios-logo.svg",

    category: "Digital Product",

    year: "2026",

    client: "Helios",

    discipline: "Product Design",

    intro:
      "Designing a clearer, more confident digital experience for modern finance.",

    overview:
      "Helios is a digital financial experience designed to make complex financial actions feel simple, understandable and human.",

    statement:
      "Make financial products feel less financial.",

    storyIntro:
      "The goal wasn't simply to create another financial interface.",

    storyBody:
      "The experience needed to reduce cognitive load, establish trust and make every important action immediately understandable. Every component was considered around that principle — from typography and hierarchy to motion and interaction.",

    approachTitle:
      "Clarity before complexity.",

    approach:
      "We focused on creating a visual system that could scale without overwhelming the user.",

    outcome:
      "A product experience that feels clear, calm and intentional.",

    image:
      "./helios5.png",

    image2:
      "assets/helios.jpg",

    galleryA:
      "assets/helios.jpg",

    galleryB:
      "assets/helios.jpg",

    finalImage:
      "assets/helios.jpg",

    next: "fetch"

  },


  /* =======================================================
     FETCH
  ======================================================= */

  fetch: {

    title: "Fetch",

    logo: "assets/fetch-logo.svg",

    category: "Brand + Product",

    year: "2026",

    client: "Fetch",

    discipline: "Brand / Product Design",

    intro:
      "Building a visual system for a modern maintenance company moving from service provider to digital product.",

    overview:
      "Fetch needed a brand and product experience that could make maintenance feel more transparent, accessible and easy to manage.",

    statement:
      "Make maintenance feel effortless.",

    storyIntro:
      "Maintenance is usually invisible until something breaks.",

    storyBody:
      "The design direction was built around making the entire experience more understandable — giving customers visibility into their properties, requests and ongoing maintenance without introducing unnecessary complexity.",

    approachTitle:
      "Design the system, not just the screen.",

    approach:
      "The identity, product interface and supporting design language were developed together so that the brand could remain consistent across every customer touchpoint.",

    outcome:
      "A flexible foundation for a maintenance experience built around clarity.",

    image:
      "assets/fetch.jpg",

    image2:
      "assets/fetch.jpg",

    galleryA:
      "assets/fetch.jpg",

    galleryB:
      "assets/fetch.jpg",

    finalImage:
      "assets/fetch.jpg",

    next: "mach"

  },


  /* =======================================================
     MACH
  ======================================================= */

  mach: {

    title: "Mach",

    logo: "assets/mach-logo.svg",

    category: "Brand Identity",

    year: "2025",

    client: "Mach",

    discipline: "Brand / Art Direction",

    intro:
      "A visual identity built around speed, precision and a distinctly digital character.",

    overview:
      "Mach explores how a technology-focused brand can communicate precision without becoming cold or overly technical.",

    statement:
      "Speed is a visual language.",

    storyIntro:
      "The identity needed to feel fast before anything moved.",

    storyBody:
      "The visual system uses typography, proportion, contrast and motion to create an identity that feels precise while maintaining enough personality to work across digital products and communication.",

    approachTitle:
      "Precision with personality.",

    approach:
      "A restrained visual system creates room for motion, typography and interaction to carry the personality of the brand.",

    outcome:
      "A sharper visual identity designed to move at the speed of the product.",

    image:
      "assets/mach.jpg",

    image2:
      "assets/mach.jpg",

    galleryA:
      "assets/mach.jpg",

    galleryB:
      "assets/mach.jpg",

    finalImage:
      "assets/mach.jpg",

    next: "mencio"

  },


  /* =======================================================
     MENCIO
  ======================================================= */

  mencio: {

    title: "Mencio",

    logo: "assets/mencio-logo.svg",

    category: "Brand + Digital",

    year: "2026",

    client: "Mencio",

    discipline: "Brand / Digital Experience",

    intro:
      "Creating a visual language for an emerging technology product exploring the agentic web.",

    overview:
      "Mencio explores the future of digital identity and the infrastructure required for an increasingly agentic internet.",

    statement:
      "Designing for a web that acts.",

    storyIntro:
      "The challenge was making an abstract technology feel tangible.",

    storyBody:
      "Instead of relying on traditional technology visual language, the experience was built around editorial typography, motion, depth and a more atmospheric approach to interface design.",

    approachTitle:
      "Make the invisible visible.",

    approach:
      "The visual system translates complex infrastructure into a digital experience that feels accessible, expressive and distinctly modern.",

    outcome:
      "A cinematic digital identity for a new category of technology.",

    image:
      "assets/mencio.jpg",

    image2:
      "assets/mencio.jpg",

    galleryA:
      "assets/mencio.jpg",

    galleryB:
      "assets/mencio.jpg",

    finalImage:
      "assets/mencio.jpg",

    next: "helios"

  }

};



/* =========================================================
   GET CURRENT PROJECT
========================================================= */

const params =
  new URLSearchParams(
    window.location.search
  );


const projectKey =
  params.get("project") || "helios";


const project =
  projects[projectKey] ||
  projects.helios;



/* =========================================================
   DOM ELEMENTS
========================================================= */

const titleLogo =
  document.querySelector(
    "#case-title-logo"
  );


const category =
  document.querySelector(
    "#case-category"
  );


const year =
  document.querySelector(
    "#case-year"
  );


const intro =
  document.querySelector(
    "#case-intro"
  );


const navTitle =
  document.querySelector(
    "#case-nav-title"
  );


const client =
  document.querySelector(
    "#case-client"
  );


const discipline =
  document.querySelector(
    "#case-discipline"
  );


const infoYear =
  document.querySelector(
    "#case-info-year"
  );


const overview =
  document.querySelector(
    "#case-overview"
  );


const statement =
  document.querySelector(
    "#case-statement"
  );


const storyIntro =
  document.querySelector(
    "#case-story-intro"
  );


const storyBody =
  document.querySelector(
    "#case-story-body"
  );


const approachTitle =
  document.querySelector(
    "#case-approach-title"
  );


const approach =
  document.querySelector(
    "#case-approach"
  );


const outcome =
  document.querySelector(
    "#case-outcome"
  );


const image =
  document.querySelector(
    "#case-image"
  );


const image2 =
  document.querySelector(
    "#case-image-2"
  );


const galleryA =
  document.querySelector(
    "#gallery-a"
  );


const galleryB =
  document.querySelector(
    "#gallery-b"
  );


const finalImage =
  document.querySelector(
    "#case-image-final"
  );


const nextProject =
  document.querySelector(
    "#next-project"
  );


const nextTitle =
  document.querySelector(
    "#next-title"
  );


const nextCategory =
  document.querySelector(
    "#next-category"
  );



/* =========================================================
   POPULATE PROJECT LOGO
========================================================= */

if (titleLogo) {

  titleLogo.src =
    project.logo;

  titleLogo.alt =
    project.title;

}



/* =========================================================
   POPULATE TEXT
========================================================= */

if (category) {

  category.textContent =
    project.category;

}


if (year) {

  year.textContent =
    project.year;

}


if (navTitle) {

  navTitle.textContent =
    project.title;

}


if (intro) {

  intro.textContent =
    project.intro;

}


if (client) {

  client.textContent =
    project.client;

}


if (discipline) {

  discipline.textContent =
    project.discipline;

}


if (infoYear) {

  infoYear.textContent =
    project.year;

}


if (overview) {

  overview.textContent =
    project.overview;

}


if (statement) {

  statement.textContent =
    project.statement;

}


if (storyIntro) {

  storyIntro.textContent =
    project.storyIntro;

}


if (storyBody) {

  storyBody.textContent =
    project.storyBody;

}


if (approachTitle) {

  approachTitle.textContent =
    project.approachTitle;

}


if (approach) {

  approach.textContent =
    project.approach;

}


if (outcome) {

  outcome.textContent =
    project.outcome;

}



/* =========================================================
   POPULATE IMAGES
========================================================= */

if (image) {

  image.src =
    project.image;

  image.alt =
    `${project.title} project`;

}


if (image2) {

  image2.src =
    project.image2;

  image2.alt =
    `${project.title} project interface`;

}


if (galleryA) {

  galleryA.src =
    project.galleryA;

  galleryA.alt =
    `${project.title} project detail`;

}


if (galleryB) {

  galleryB.src =
    project.galleryB;

  galleryB.alt =
    `${project.title} interface detail`;

}


if (finalImage) {

  finalImage.src =
    project.finalImage;

  finalImage.alt =
    `${project.title} final project view`;

}



/* =========================================================
   NEXT PROJECT
========================================================= */

const next =
  projects[project.next];


if (
  next &&
  nextProject
) {

  nextProject.href =
    `case-study.html?project=${project.next}`;

}


if (
  next &&
  nextTitle
) {

  nextTitle.textContent =
    next.title;

}


if (
  next &&
  nextCategory
) {

  nextCategory.textContent =
    next.category;

}



/* =========================================================
   DOCUMENT TITLE
========================================================= */

document.title =
  `${project.title} — Oluwatomisin Adeyemo`;



/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
  document.querySelector(
    ".case-cursor"
  );


let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;


if (
  cursor &&
  window.innerWidth > 800
) {

  window.addEventListener(
    "mousemove",
    event => {

      mouseX =
        event.clientX;

      mouseY =
        event.clientY;

    }
  );


  function moveCursor() {

    cursorX +=
      (mouseX - cursorX) * 0.14;

    cursorY +=
      (mouseY - cursorY) * 0.14;


    cursor.style.left =
      `${cursorX}px`;

    cursor.style.top =
      `${cursorY}px`;


    requestAnimationFrame(
      moveCursor
    );

  }


  moveCursor();



  /* -----------------------------------------
     Activate cursor over project imagery
  ----------------------------------------- */

  const cursorTargets =
    document.querySelectorAll(
      `
      .case-image-wrap,
      .case-full-image figure,
      .case-gallery figure,
      .case-final-image
      `
    );


  cursorTargets.forEach(
    element => {

      element.addEventListener(
        "mouseenter",
        () => {

          cursor.classList.add(
            "active"
          );

        }
      );


      element.addEventListener(
        "mouseleave",
        () => {

          cursor.classList.remove(
            "active"
          );

        }
      );

    }
  );

}



/* =========================================================
   IMAGE REVEAL
========================================================= */

const revealItems =
  document.querySelectorAll(
    `
    .case-image-wrap,
    .case-full-image figure,
    .case-gallery figure,
    .case-final-image
    `
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "revealed"
            );

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


revealItems.forEach(
  item => {

    observer.observe(
      item
    );

  }
);



/* =========================================================
   LOGO IMAGE ERROR HANDLING
========================================================= */

if (titleLogo) {

  titleLogo.addEventListener(
    "error",
    () => {

      console.warn(
        `Project logo could not be loaded: ${project.logo}`
      );

      titleLogo.style.display =
        "none";

    }
  );

}



/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.documentElement.style.scrollBehavior =
  "smooth";



/* =========================================================
   IMAGE PARALLAX
========================================================= */

if (
  window.innerWidth > 800
) {

  const parallaxImages =
    document.querySelectorAll(
      ".case-image-wrap img, .case-final-image img"
    );


  window.addEventListener(
    "scroll",
    () => {

      const scrollY =
        window.scrollY;


      parallaxImages.forEach(
        img => {

          const parent =
            img.parentElement;

          if (!parent) return;


          const rect =
            parent.getBoundingClientRect();


          const viewportHeight =
            window.innerHeight;


          if (
            rect.bottom > 0 &&
            rect.top < viewportHeight
          ) {

            const progress =
              (viewportHeight - rect.top) /
              (viewportHeight + rect.height);


            const movement =
              (progress - 0.5) * 35;


            img.style.transform =
              `translateY(${movement}px) scale(1.03)`;

          }

        }
      );

    },
    {
      passive: true
    }
  );

}



/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "case-loaded"
    );

  }
);