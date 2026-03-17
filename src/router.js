// SPA Router — supports path-based multi-page navigation
const routes = {};
let currentPath = null;

export function registerRoutes(routeMap) {
  Object.assign(routes, routeMap);
}

export function navigateTo(path, pushState = true) {
  if (pushState) {
    window.history.pushState({}, '', path);
  }
  handleRoute();
}

function handleRoute() {
  const pathname = window.location.pathname || '/';
  const app = document.getElementById('app');

  // Don't re-render if same path
  if (pathname === currentPath) return;
  currentPath = pathname;

  app.innerHTML = '';

  // Try exact match first, then fallback to home
  const renderer = routes[pathname] || routes['/'];
  if (renderer) {
    renderer(app);
  }

  // Scroll to top on navigation
  window.scrollTo(0, 0);
}

export function initRouter() {
  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    currentPath = null; // Force re-render
    handleRoute();
  });

  // Intercept all internal link clicks for SPA navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Skip external links, hash links, mailto, tel, etc.
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || link.target === '_blank') {
      return;
    }

    // Internal route — handle via SPA
    e.preventDefault();
    navigateTo(href);
  });

  // Initial route
  handleRoute();
}
