const toggle = document.getElementById('sidebar');

const hideSidebar = () => {
  toggle.classList.add("hidden");
}

const showSidebar = () => {
  toggle.classList.remove("hidden");
}
