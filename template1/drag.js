var btn = document.getElementById("btn");
var input = document.getElementById("inp");
var boxs = document.querySelectorAll(".box");
drag = null;
btn.onclick = function () {
  if (input.value != "") {
    boxs[0].innerHTML += `
     <p class="item" draggable="true"> ${input.value}<p/>`;
    input.value = "";
  }
  dargitem();
};
function dargitem() {
  var items = document.querySelectorAll(".item");
  items.forEach((ele) => {
    ele.addEventListener("dragstart", function () {
      drag = ele;
      ele.style.opacity = "0.5";
    });
    ele.addEventListener("dragend", function () {
      drag = null;
      ele.style.opacity = "1";
    });
    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "#090";
        this.style.Color = "#fff";
      });
      box.addEventListener("dragleave", function () {
        this.style.backgroundColor = "#fff";
        this.style.Color = "#000";
      });
      box.addEventListener("drop", function () {
        box.append(drag);
        this.style.backgroundColor = "#fff";
        this.style.Color = "#000";
      });
    });
  });
}
