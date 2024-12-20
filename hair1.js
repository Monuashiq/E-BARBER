// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
  });
  
  // Profile dropdown toggle
  document.querySelector('.profile-btn').addEventListener('click', () => {
    const dropdown = document.querySelector('.profile-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close the profile dropdown if clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.profile')) {
      document.querySelector('.profile-dropdown').style.display = 'none';
    }
  });
  