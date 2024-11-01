function darkMode() {
  const body = document.body;
  const header = document.querySelector("header.navContainer");
  const containers = document.querySelectorAll(".container");
  const containerAbout = document.querySelector(".containerAbout");
  const containerContact = document.querySelector(".containerContact");
  // const asideUl = document.querySelector(".sosmed ul");
  const asideUl = document.querySelector("aside ul");
  // const sosmed = document.getElementById("aside")
  const iconMode = document.getElementById("iconMode");
  const navLinks = document.querySelectorAll("header.navContainer .navList a"); // Menambahkan baris init a");
  const btnLinks = document.querySelectorAll("header.navContainer a i"); // Menambahkan baris init a");
  const svgIcons = document.querySelectorAll(".svg-icon"); // Mengambil semua elemen dengan kelas svg-icon

  body.classList.toggle("dark-mode");
  header.classList.toggle("navDark");
  containerAbout.classList.toggle("dark-mode");
  asideUl.classList.toggle("navDark");
  // sosmed.classList.toggle("dark-mode");
  containerContact.classList.toggle("dark-mode");
  containers.forEach((container) => container.classList.toggle("dark-mode"));
  navLinks.forEach((link) => link.classList.toggle("navDark"));
  btnLinks.forEach((link) => link.classList.toggle("navDark"));
  svgIcons.forEach((svg) => {
    svg.classList.toggle("dark-mode");
  });

  if (body.classList.contains("dark-mode")) {
    iconMode.classList.remove("fa-toggle-off");
    iconMode.classList.add("fa-toggle-on");
    iconMode.style.color = "#ECDFCC";
  } else {
    iconMode.classList.remove("fa-toggle-on");
    iconMode.classList.add("fa-toggle-off");
    iconMode.style.color = "#181C14";
  }
}
// toggle active
const navLinks = document.querySelector(".navList");
// menu diklik
document.querySelector("#menu").onclick = () => {
  navLinks.classList.toggle("active");
};
// menghilangkan nab
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
