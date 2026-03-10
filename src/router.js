export function initRouter(renderHome, renderAdmin) {
  function handleRoute() {
    const hash = window.location.hash || '#/';
    const app = document.getElementById('app');
    app.innerHTML = '';

    if (hash === '#/adminpannel' || hash === '#/adminpannel/') {
      renderAdmin(app);
    } else {
      renderHome(app);
    }
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
