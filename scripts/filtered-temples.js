/* =========================
   HAMBURGER MENU
========================= */
const menuButton = document.querySelector("#menu");
const header = document.querySelector(".site-header");
const pageTitle = document.querySelector("#pageTitle");

function closeMenu() {
  if (!menuButton || !header) return;
  menuButton.classList.remove("open");
  header.classList.remove("menu-open");
}

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    header.classList.toggle("menu-open");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) closeMenu();
  });
}



/* =========================
   TEMPLE DATA
========================= */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  // +3 exemplos (troque/edite se quiser)
  {
    templeName: "Recife Brazil",
    location: "Recife, Pernambuco, Brazil",
    dedicated: "2000, December, 15",
    area: 37000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg",
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
  {
    templeName: "Taylorsville Utah",
    location: "Taylorsville, Utah, United States",
    dedicated: "2024, June, 2",
    area: 73492,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/taylorsville-utah-temple/taylorsville-utah-temple-44959-main.jpg",
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg",
  },
];


/* =========================
   RENDER FUNCTION (professor style)
========================= */
const cards = document.querySelector("#templeCards");

function getYear(temple) {
  // "2005, August, 7" -> 2005
  return Number(temple.dedicated.split(",")[0].trim());
}

function createTempleCard(filteredTemples) {
  cards.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    cards.appendChild(card);
  });
}

/* =========================
   FILTER EVENTS (one by one)
========================= */
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");


homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Home";
  createTempleCard(temples);
  //closeMenu();
});

oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Old";
  createTempleCard(temples.filter((t) => getYear(t) < 1900));
  //closeMenu();
});

newLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "New";
  createTempleCard(temples.filter((t) => getYear(t) > 2000));
  //closeMenu();
});

largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Large";
  createTempleCard(temples.filter((t) => t.area > 90000));
  //closeMenu();
});

smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  pageTitle.textContent = "Small";
  createTempleCard(temples.filter((t) => t.area < 10000));
  //closeMenu();
});


/* =========================
   FOOTER DATES
========================= */
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

/* =========================
   INITIAL LOAD
========================= */
createTempleCard(temples);
