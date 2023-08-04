function Result() {
  var tag_name = document.getElementById("tagname").value;
  var class_name = document.getElementById("className").value;
  var id_N = document.getElementById("ID_res").value;
  var Name_pro = document.getElementById("name_p").value;
  var NumOfTag = document.getElementsByTagName(tag_name).length;
  var NumOfCName = document.getElementsByClassName(class_name).length;
  var NumOfId_N = document.getElementById(id_N);
  var NumOfPro = document.getElementsByName(Name_pro).length;
  let tages = document.getElementById("tages");
  let id = document.getElementById("id");
  let className = document.getElementById("className");
  let all = document.getElementById("all");
  var div = document.getElementById("res");
  console.log(NumOfId_N);
  div.innerHTML = `      <p id="tages">Number of Tages = ${NumOfTag}</p>
  <br />
  <p id="className">Number of ClassName =${NumOfCName}</p>
  <br />
  <p id="id">Number of ID =${NumOfId_N == null ? false : true}</p>
  <br />
  <p id="all">Number of All =${NumOfPro}</p>`;

  console.log(NumOfTag);
}
