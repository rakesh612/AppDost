// src/utils/scrollUtils.js

/**
 * Smoothly scroll to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from top (default: 80px for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handle link click with smooth scroll
 * @param {Event} e - Click event
 * @param {string} href - The href value (can be #id or full URL)
 */
export const handleSmoothScroll = (e, href) => {
  e.preventDefault();
  
  if (href.startsWith('#')) {
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
  } else {
    window.location.href = href;
  }
};