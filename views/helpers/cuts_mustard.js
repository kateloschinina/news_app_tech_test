var cutsTheMustard = ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window);

if (cutsTheMustard) {
  // Swap the `core` class on the HTML element for an `enhanced` one
  // We're doing it early in the head to avoid a flash of unstyled content
  document.documentElement.className = document.documentElement.className.replace(/\bcore\b/g, 'enhanced');
}
