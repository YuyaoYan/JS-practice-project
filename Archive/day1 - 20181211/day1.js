function actionClick(color) {
  switch (color) {
    case 1:
      alert("Warning window appears！");
      break;
    case 2:
      console.log("今天天气真不错");
      break;
    case 3:
      document.getElementById("changeToRed").style.color = "red";
      break;
    case 4:
      document.getElementById("changeToGreen").style.color = "green";
      break;
    case 5:
      {
        var buttonClass = document.getElementsByClassName("changeTextButton");
        buttonClass[0].innerHTML = "文字已改变";
      }
      break;
    default:
      alert("m没有匹配项");
  }
}
function addFun() {
  document.getElementById("addAnswer").innerHTML =
    "答案是：" +
    (Number(document.getElementById("value1").value) +
      Number(document.getElementById("value2").value));
  document.getElementById("value1").value = null;
  document.getElementById("value2").value = null;
}
