const productLink = document.querySelector(".nav_start-dropdown");
const dropdownContent = document.querySelector(".nav_dropdown");

function toggleDropdown() {
  dropdownContent.classList.toggle("show");
  
}

// Event listeners for hover
productLink.addEventListener("mouseover", toggleDropdown);
productLink.addEventListener("mouseleave", toggleDropdown);

// You can also add event listeners for the nav_dropdown if needed
// const navDropDown = document.querySelector(".nav_dropdown");
// navDropDown.addEventListener("mouseenter", showDropdown);
// navDropDown.addEventListener("mouseleave", hideDropdown);
