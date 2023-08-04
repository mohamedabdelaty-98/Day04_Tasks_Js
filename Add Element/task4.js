function CreateElement() {
  var tag_name = document.getElementById("tagname");
  var color_c = document.getElementById("color");
  var text_tt = document.getElementById("text_t");
  var Parent = document.getElementsByClassName("CreateElement")[0];
  var element = document.createElement(tag_name.value);
  element.innerText = text_tt.value;
  element.style.color = color_c.value;
  Parent.append(element);
}
