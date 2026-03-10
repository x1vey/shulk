import { DEFAULT_SITE_DATA } from './siteData.js';

const STORAGE_KEY = 'shulk_site_data';

function deepMerge(target, source) {
  const output = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key])
    ) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}

export function getSiteData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return deepMerge(DEFAULT_SITE_DATA, parsed);
    }
  } catch (e) {
    console.warn('Error reading site data from storage:', e);
  }
  return { ...DEFAULT_SITE_DATA };
}

export function saveSiteData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving site data:', e);
  }
}

export function resetSiteData() {
  localStorage.removeItem(STORAGE_KEY);
}

export function applyColors(colors) {
  const root = document.documentElement;
  if (colors.primary) root.style.setProperty('--color-bg', colors.primary);
  if (colors.accent) root.style.setProperty('--color-accent', colors.accent);
  if (colors.text) root.style.setProperty('--color-text', colors.text);
  if (colors.cardBg) root.style.setProperty('--color-card-bg', colors.cardBg);
  if (colors.cardBorder) root.style.setProperty('--color-card-border', colors.cardBorder);
}
