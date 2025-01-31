// Funzione per aprire il menu laterale
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  // Aggiungere un po' di opacità all'overlay
  document.getElementById("overlay").style.display = "block";
}

// Funzione per chiudere il menu laterale
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  // Nascondere l'overlay
  document.getElementById("overlay").style.display = "none";
}

// Funzione per aprire/chiudere il sottomenù
function toggleSubmenu(submenuId) {
  var submenu = document.getElementById(submenuId);
  if (submenu.style.display === "block") {
    submenu.style.display = "none";  // Chiude il sottomenù
  } else {
    submenu.style.display = "block";  // Apre il sottomenù
  }
}

// Funzione per chiudere il menu se l'utente clicca fuori
document.addEventListener("click", function (event) {
  var sidenav = document.getElementById("mySidenav");
  var overlay = document.getElementById("overlay");

  // Se si clicca fuori dal menu laterale e non sul menu stesso, chiudi il menu
  if (!sidenav.contains(event.target) && !overlay.contains(event.target)) {
    closeNav();
  }
});
