export const themeScript = `
(function() {
  try {
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If theme is explicitly set in localStorage, use that
    if (stored) {
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      // If no theme is set, use dark theme by default
      document.documentElement.classList.add('dark');
    }
    
    // Adds a style block to prevent flash
    const style = document.createElement('style');
    style.innerHTML = 'body { opacity: 0; transition: opacity 0.3s ease-in }';
    document.head.appendChild(style);
    
    window.addEventListener('DOMContentLoaded', function() {
      document.body.style.opacity = '1';
    });
  } catch (e) {
    // Fail gracefully if localStorage is not available
    console.error('Theme initialization failed:', e);
  }
})();
`;
