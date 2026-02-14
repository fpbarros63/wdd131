function setYear() {
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = `${new Date().getFullYear()}`;
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  lastModified.textContent = document.lastModified;
}
