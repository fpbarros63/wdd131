const BASE_URL = "https://fpbarros63.github.io/wdd131/";
const GITHUB_BASE = "https://github.com/fpbarros63/wdd131/blob/main/";

const projects = [
  {
    id: "p01",
    title: "Responsive Home Page",
    status: "completed",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "images/project-w01.webp",
    alt: "Screenshot of a responsive home page layout",
    link: `${BASE_URL}index.html`,
    sources: {
      HTML: `${GITHUB_BASE}index.html`,
      CSS: `${GITHUB_BASE}styles/base.css`,
      JS: `${GITHUB_BASE}scripts/getdates.js`,
    },
    description:
      "A responsive landing page with semantic structure and clean styling, including a JavaScript-powered section for dynamic information.",
  },
  {
    id: "p02",
    title: "Responsive Picture Album",
    status: "completed",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "DOM Manipulation",
      "Events",
      "Hamburger Menu",
    ],
    image: "images/project-w02.webp",
    alt: "Screenshot of a responsive picture album with navigation menu",
    link: `${BASE_URL}temples.html`,
    sources: {
      HTML: `${GITHUB_BASE}temples.html`,
      CSS: `${GITHUB_BASE}styles/base.css`,
      JS: `${GITHUB_BASE}scripts/temples.js`,
    },
    description:
      "A mobile-friendly picture album with a responsive menu and interactive behavior implemented using DOM selection and event handling.",
  },
  {
    id: "p03",
    title: "Country / Place Info Page",
    status: "completed",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Pseudo-selectors",
      "Responsive Images",
      "Functions",
    ],
    image: "images/project-w03.webp",
    alt: "Screenshot of a place information page with responsive images",
    link: `${BASE_URL}place.html`,
    sources: {
      HTML: `${GITHUB_BASE}place.html`,
      CSS: `${GITHUB_BASE}styles/base.css`,
      JS: `${GITHUB_BASE}scripts/place.js`,
    },
    description:
      "An informational page about a place with structured layout, responsive imagery, and JavaScript functions supporting interactive elements.",
  },
  {
    id: "p04",
    title: "Filtered Album with Lazy Loading",
    status: "completed",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Lazy Loading",
      "Objects",
      "Array Methods",
      "Filtering",
    ],
    image: "images/project-w04.webp",
    alt: "Screenshot of an album page with filtering and lazy-loaded images",
    link: `${BASE_URL}filtered-temples.html`,
    sources: {
      HTML: `${GITHUB_BASE}filtered-temples.html`,
      CSS: `${GITHUB_BASE}styles/base.css`,
      JS: `${GITHUB_BASE}scripts/filtered-temples.js`,
    },
    description:
      "An improved album experience with lazy-loaded images and dynamic filtering using objects and array methods for a faster, cleaner interface.",
  },
  {
    id: "p05",
    title: "Product Review Form",
    status: "completed",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Forms",
      "Validation",
      "Callbacks",
      "localStorage",
    ],
    image: "images/project-w05.webp",
    alt: "Product review form page",
    link: `${BASE_URL}form.html`,
    sources: {
      HTML: `${GITHUB_BASE}form.html`,
      CSS: `${GITHUB_BASE}styles/base.css`,
      JS: `${GITHUB_BASE}scripts/form.js`,
    },
    description:
      "A user-friendly product review form with required fields, a confirmation page, a submission counter, and localStorage integration.",
  },
];


function setActiveNav() {
  const current = document.body.dataset.page;
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    if (link.dataset.page === current)
      link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}


function saveFilterState(text) {
  localStorage.setItem("searchText", `${text}`);
}

function loadFilterState() {
  return {
    text: localStorage.getItem("searchText") || "",
  };
}


function renderProjects(list) {
  const container = document.querySelector("#projectList");
  if (!container) return;

  const html = list
    .map((p) => {
      const skillsHTML = p.skills
        .map((skill) => `<span class="badge">${skill}</span>`)
        .join("");

      const sourceLinks = p.sources
        ? Object.entries(p.sources).map(([label, url]) =>
          `<a href="${url}" target="_blank" rel="noopener">${label}</a>`, ).join(" • ")
        : "";

      let actionHTML;

      if (p.status === "completed") {
        let sourceHTML = "";

        if (sourceLinks) {
          sourceHTML = `<div class="meta">Source code: ${sourceLinks}</div>`;
        }

        actionHTML = `<a href="${p.link}" target="_blank" rel="noopener">Open Project ↗</a>
        ${sourceHTML}`;

      }
      else {
        actionHTML = `<span class="meta">Not available yet</span>`;
      }

      return `
        <article class="project">
          <img src="${p.image}" alt="${p.alt}" loading="lazy" width="900" height="540" />
          <div>
            <h3>${p.title}</h3>
            <p class="meta">Status: ${p.status}</p>
            <p>${p.description}</p>

            <div class="badges" aria-label="Skills used">
              ${skillsHTML}
            </div>

            <p style="margin-top:.75rem;">
              ${actionHTML}
            </p>
          </div>
        </article>
      `;
    }).join("");

  container.innerHTML = html;

  const countEl = document.querySelector("#resultCount");
  if (countEl) countEl.textContent = `${list.length}`;
}


function applyFilters() {
  const searchInput = document.querySelector("#searchText");
  if (!searchInput) return;

  const query = `${searchInput.value}`.toLowerCase().trim();
  saveFilterState(query);

  const filtered = projects.filter((p) => {
    const searchable =
      `${p.title} ${p.description} ${p.skills.join(" ")}`.toLowerCase();
    return query === "" ? true : searchable.includes(query);
  });

  renderProjects(filtered);
}


function initProjectsPage() {
  const searchInput = document.querySelector("#searchText");
  const clearBtn = document.querySelector("#clearFilters");
  if (!searchInput || !clearBtn) return;

  const saved = loadFilterState();
  searchInput.value = saved.text;

  searchInput.addEventListener("input", applyFilters);

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    applyFilters();
  });

  applyFilters();
}

/* ==== BOOTSTRAP ==== */

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  setActiveNav();
  initProjectsPage();
});
