// Live local time for each city in the hero
function updateClocks() {
  document.querySelectorAll('[data-tz]').forEach(function (el) {
    el.textContent = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit', minute: '2-digit', hour12: false, timeZone: el.dataset.tz
    }).format(new Date());
  });
}
updateClocks();
setInterval(updateClocks, 15000);

document.getElementById('year').textContent = new Date().getFullYear();
