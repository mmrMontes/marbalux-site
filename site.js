document.getElementById('year').textContent = new Date().getFullYear();
const detailsButtons = document.querySelectorAll('[data-app-details]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function showAppDetails(id, shouldScroll = true) {
  const panel = document.getElementById(id);
  if (!panel) {
    window.location.href = 'apps.html#' + encodeURIComponent(id);
    return;
  }
  panel.hidden = false;
  detailsButtons.forEach(button => button.setAttribute('aria-expanded', String(button.dataset.appDetails === id)));
  if (shouldScroll) {
    panel.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
    panel.querySelector('h3').focus({ preventScroll: true });
  }
}

function hideAppDetails(id) {
  const panel = document.getElementById(id);
  panel.querySelectorAll('video').forEach(video => video.pause());
  panel.hidden = true;
  const trigger = [...detailsButtons].find(item => item.dataset.appDetails === id);
  trigger.setAttribute('aria-expanded', 'false');
  trigger.focus();
  if (window.location.hash) history.replaceState(null, '', window.location.pathname + window.location.search);
}
detailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.appDetails;
    const panel = document.getElementById(id);
    if (panel && !panel.hidden) hideAppDetails(id);
    else showAppDetails(id);
  });
});
document.querySelectorAll('[data-close-app-details]').forEach(button => {
  button.addEventListener('click', () => hideAppDetails(button.dataset.closeAppDetails));
});
const requestedApp = decodeURIComponent(window.location.hash.slice(1));
if ([...detailsButtons].some(button => button.dataset.appDetails === requestedApp) && document.getElementById(requestedApp)?.classList.contains('product-details')) {
  showAppDetails(requestedApp);
}
const lightbox = document.querySelector('.lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  const preview = lightbox.querySelector('img');
  const caption = lightbox.querySelector('p');
  document.querySelectorAll('.screenshot-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      preview.src = link.href;
      preview.alt = link.querySelector('img').alt;
      caption.textContent = link.dataset.caption;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
  });
}
