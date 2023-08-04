var img = document.images[0];
var count = 1;
console.log(img.l);
function Next_btn() {
  var img = document.images[0];
  img.setAttribute("src", "./Images/" + count + ".jpg");
  count++;
  if (count == 6) {
    count = 1;
  }
}
function Back_btn() {
  var img = document.images[0];
  if (count == 1) {
    count = 6;
    img.setAttribute("src", "./Images/" + count + ".jpg");
    count--;
  } else {
    img.setAttribute("src", "./Images/" + count + ".jpg");
    count--;
  }
}
