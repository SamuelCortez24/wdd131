document.addEventListener("DOMContentLoaded", () => {
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = lastModified;

  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);

  function calculateWindChill(t, v) {
    if (t <= 10 && v > 4.8) {
      return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(v, 0.16) +
        0.3965 * t * Math.pow(v, 0.16)
      ).toFixed(1);
    } else {
      return "N/A";
    }
  }

  const chill = calculateWindChill(temp, wind);
  document.getElementById("chill").textContent = `${chill} °C`;
});
