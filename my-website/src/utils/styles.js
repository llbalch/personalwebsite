/**
 * Returns consistent focus-visible styling classes for keyboard navigation
 * @param {string} color - The outline color (e.g., 'violet-400', 'orange-400', 'sky-400')
 * @returns {string} Tailwind CSS classes for focus-visible state
 */
export function focusClasses(color = 'violet-400') {
  return `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`;
}

/**
 * Returns theme-aware focus classes based on isDark state
 * @param {boolean} isDark - Whether dark mode is active
 * @returns {string} Tailwind CSS classes for focus-visible state
 */
export function themeFocusClasses(isDark) {
  return focusClasses(isDark ? 'violet-400' : 'orange-500');
}
