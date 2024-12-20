// Toggle the navbar visibility when the hamburger menu is clicked
const toggleBtn = document.getElementById('toggle-btn');
const navbar = document.getElementById('navbar');
const profileIcon = document.getElementById('profile-icon');
const profileDropdown = document.getElementById('profile-dropdown');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Toggle the profile dropdown visibility when the profile icon is clicked
profileIcon.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents closing the dropdown immediately when clicked
  profileDropdown.classList.toggle('show');
});

// Close the dropdown if clicked outside the profile icon or dropdown
document.addEventListener('click', (e) => {
  if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
    profileDropdown.classList.remove('show');
  }
});

// Handle the animation of the info boxes as they come into view
const infoBoxes = document.querySelectorAll('.info-box');

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScroll = () => {
  infoBoxes.forEach((box) => {
    if (isInViewport(box)) {
      box.classList.add('active');
    }
  });
};

window.addEventListener('scroll', handleScroll);
