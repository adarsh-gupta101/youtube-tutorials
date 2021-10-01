var uscore = 0;
var cscore = 0;

function game(id) {
  var audio = new Audio("click.wav");
  var win = new Audio("win.wav");
  var loose = new Audio("loose.wav");

  audio.play();
  var computerSelected = Math.floor(Math.random() * 3);
  console.log(computerSelected);

  var userSelected = id;
  if (userSelected == computerSelected) {
    document.getElementById("result").innerHTML = "Draw";
  }
  if (userSelected == 0 && computerSelected == 1) {
    document.getElementById("result").innerHTML = "Computer Wins";
    ++cscore;
    loose.play();
  }
  if (userSelected == 0 && computerSelected == 2) {
    document.getElementById("result").innerHTML = "User Wins";
    ++uscore;
    win.play();
  }
  if (userSelected == 1 && computerSelected == 0) {
    document.getElementById("result").innerHTML = "User Wins";
    ++uscore;
    win.play();
  }
  if (userSelected == 1 && computerSelected == 2) {
    document.getElementById("result").innerHTML = "Computer Wins ";
    ++cscore;
    loose.play();
  }
  if (userSelected == 2 && computerSelected == 0) {
    document.getElementById("result").innerHTML = "Computer Wins ";
    loose.play();
    ++cscore;
  }
  if (userSelected == 2 && computerSelected == 1) {
    document.getElementById("result").innerHTML = "User Wins ";
    win.play();
    ++uscore;
  }
  console.log(uscore, cscore);
  document.getElementById("user").innerHTML = uscore;
  document.getElementById("computer").innerHTML = cscore;
}
