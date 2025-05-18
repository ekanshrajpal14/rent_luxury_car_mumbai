var click = 1;
function clickOn(val) {
  if (val == 1) {
    document.querySelector(".toggle_switch").innerHTML = `<i class="ri-close-line"></i>`;
    document.querySelector(".items").style.left = "0%";
    click = 0;
  } else {
    document.querySelector(".toggle_switch").innerHTML = `<i class="ri-menu-3-line"></i>`;
    document.querySelector(".items").style.left = "-110%";
    click = 1;
  }
}
document.querySelector(".toggle_switch").addEventListener("click", (re) => {
  clickOn(click);
});

