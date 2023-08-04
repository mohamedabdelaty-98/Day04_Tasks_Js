var input_txt = document.getElementById("input");
var div_red = document.getElementById("ready");
var div_steady = document.getElementById("steady");
var div_go = document.getElementById("go");
var div_ready_label = document.getElementById("ready_label");
var div_steady_label = document.getElementById("steady_label");
var div_go_label = document.getElementById("go_label");
function changecolor() {
  switch (Number(input_txt.value)) {
    case 1:
      div_red.style.borderColor = "red";
      div_ready_label.style.opacity = 100;
      break;
    case 2:
      div_red.style.borderColor = "gray";
      div_steady.style.borderColor = "yellow";
      div_ready_label.style.opacity = 0;
      div_steady_label.style.opacity = 100;
      break;
    case 3:
      div_red.style.borderColor = "gray";
      div_steady.style.borderColor = "gray";
      div_go.style.borderColor = "green";
      div_ready_label.style.opacity = 0;
      div_steady_label.style.opacity = 0;
      div_go_label.style.opacity = 100;
      break;
    default:
      div_red.style.borderColor = "gray";
      div_steady.style.borderColor = "gray";
      div_go.style.borderColor = "gray";
      div_ready_label.style.opacity = 0;
      div_steady_label.style.opacity = 0;
      div_go_label.style.opacity = 0;
  }
}
