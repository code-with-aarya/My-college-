
// == navbar ==
let menu = document.getElementById("menu");
let openbtn = document.querySelector(".openbtn");
let closebtn = document.querySelector(".closebtn");

function openmenu() {
 menu.classList.add("active");
 openbtn.style.display = "none";
 closebtn.style.display = "block";
}

function closemenu() {
 menu.classList.remove("active");
 openbtn.style.display = "block";
 closebtn.style.display = "none";
}

/* CLOSE MENU ONLY ON MOBILE */
document.querySelectorAll("#menu a").forEach(link => {
 link.addEventListener("click", () => {
   if (window.innerWidth <= 768) {
     closemenu();
   }
 });
});
