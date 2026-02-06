// scripts/review.js
const key = "reviewCount";

const current = Number(localStorage.getItem(key)) || 0;
const next = current + 1;

localStorage.setItem(key, String(next));

document.querySelector("#reviewCount").textContent = next;
