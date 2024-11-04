function darkMode() {
  const body = document.body;
  const header = document.querySelector("header.navContainer");
  const containers = document.querySelectorAll(".container");
  const containerAbout = document.querySelector(".containerAbout");
  const containerContact = document.querySelector(".containerContact");
  const asideUl = document.querySelector("aside ul");
  const iconMode = document.getElementById("iconMode");
  const navLinks = document.querySelectorAll("header.navContainer .navList a"); // Menambahkan baris init a");
  const btnLinks = document.querySelectorAll("header.navContainer a i"); // Menambahkan baris init a");
  const svgIcons = document.querySelectorAll(".svg-icon"); // Mengambil semua elemen dengan kelas svg-icon
  const footer = document.querySelector(".footer");
  const mediaQuery = window.matchMedia("(max-width: 768px)"); 

  body.classList.toggle("dark-mode");
  header.classList.toggle("navDark");
  containerAbout.classList.toggle("dark-mode");
  asideUl.classList.toggle("navDark");
  containerContact.classList.toggle("dark-mode");
  footer.classList.toggle("navDark");

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
   
    if (mediaQuery.matches) {
      asideUl.style.borderRadius = "8px 8px 0 0";
    } else {
      asideUl.style.borderRadius = null;  
    }
    
  } else {
    iconMode.classList.remove("fa-toggle-on");
    iconMode.classList.add("fa-toggle-off");
    iconMode.style.color = "#181C14";
    asideUl.style.borderRadius = null;  
  }
}
// toggle active
const navLinks = document.querySelector(".navList");
const menu = document.querySelector("#menu");
// menu diklik
document.querySelector("#menu").onclick = () => {
  navLinks.classList.toggle("active");
};

// menghilangkan nav
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
