import { getSiteData } from '../dataManager.js';

export function renderTicker(container) {
  const data = getSiteData();
  const text = data.ticker.text;

  const ticker = document.createElement('div');
  ticker.className = 'ticker';

  // Create enough items for seamless scroll
  const items = Array(20).fill(null).map(() =>
    `<div class="ticker-item"><span>${text}</span><span class="sep">⬥</span></div>`
  ).join('');

  ticker.innerHTML = `
    <div class="ticker-track">
      ${items}
    </div>
  `;

  container.appendChild(ticker);
}
