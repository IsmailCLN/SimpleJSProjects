const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeButton = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener('click', function (){
  sidebar.classList.toggle("show-sidebar");
});

closeButton.addEventListener('click', function (){
  sidebar.classList.remove("show-sidebar");
});