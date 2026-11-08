// Solid navy header once the visitor scrolls past the top of the cover
var header = document.querySelector('.site-header');
function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

document.getElementById('year').textContent = new Date().getFullYear();
