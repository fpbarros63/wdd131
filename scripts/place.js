// =======================
// FOOTER INFORMATION
// =======================
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// =======================
// WEATHER (STATIC VALUES)
// =======================
const tempValue = Number(document.querySelector("#temp").textContent);
const windValue = Number(document.querySelector("#wind").textContent);
const windChillSpan = document.querySelector("#windchill");

// One-line return function (course requirement)
function calculateWindChill(tempC, windKmH) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmH, 0.16) +
    0.3965 * tempC * Math.pow(windKmH, 0.16)
  );
}

// Only calculate wind chill if conditions are met
if (tempValue <= 10 && windValue > 4.8) {
  const windChill = calculateWindChill(tempValue, windValue);
  windChillSpan.textContent = `${windChill.toFixed(1)} °C`;
} else {
  windChillSpan.textContent = "N/A";
}
