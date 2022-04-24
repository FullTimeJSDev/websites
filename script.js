// Sticky navigation
const header = document.querySelector(".header");
const btnTop = document.querySelector(".btn-top");
const btnTopBG = document.querySelector(".btn-top-bg");

// if (obs === true) {
//   navbar.style.display = "none";
// } else {
//   obs.observe(header_info);
// ;
// }

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      btnTop.style.display = "block";
      btnTopBG.style.display = "block";
    } else {
      document.body.classList.add("none");
      btnTop.style.display = "none";
      btnTopBG.style.display = "none";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "8px",
  }
);
obs.observe(header);
