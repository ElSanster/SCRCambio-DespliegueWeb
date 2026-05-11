// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;

  // Initialize dark mode state from localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  if (isDarkMode) {
    htmlElement.classList.add('dark');
    if (darkModeToggle) darkModeToggle.checked = true;
  } else {
    htmlElement.classList.remove('dark');
    if (darkModeToggle) darkModeToggle.checked = false;
  }

  // Toggle dark mode on checkbox change
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
      if (this.checked) {
        htmlElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        htmlElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    });
  }
});
