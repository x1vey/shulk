export function initRouter(renderHome, renderAdmin) {
  function handleRoute() {
    const hash = window.location.hash || '';
    const pathname = window.location.pathname || '/';
    const app = document.getElementById('app');
    app.innerHTML = '';

    if (hash === '#/adminpannel' || hash === '#/adminpannel/' || pathname === '/adminpannel' || pathname === '/adminpannel/') {
      renderAdmin(app);
    } else {
      renderHome(app);
    }
  }

  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('popstate', handleRoute);
  handleRoute();
}
