const menuHome = () => {
  document.getElementById("contentFrame").setAttribute("src", "home.html");
  document.getElementById("menuHome").style =
    "color:black; background-color:white";

  document.getElementById("menuJukebox").style =
    "color:white; background-color:#298eb5";

  document.getElementById("contentFrame").style =
    "color:white; background-color:#298eb5";
};

const menuJukeBox = () => {
  document.getElementById("menuJukebox").style =
    "color:black; background-color:white";

  document.getElementById("menuHome").style =
    "color:white; background-color:#298eb5";

  document.getElementById("contentFrame").style =
    "color:white; background-color:#298eb5";

  document.getElementById("contentFrame").setAttribute("src", "jukebox.html");
};

const menuGame = () => {
  document.getElementById("menuGame").style =
    "color:black; background-color:white";
  document.getElementById("menuHome").style =
    "color:white; background-color:#298eb5";

  document.getElementById("menuJukebox").style =
    "color:white; background-color:#298eb5";
  document.getElementById("contentFrame").setAttribute("src", "game.html");
};
