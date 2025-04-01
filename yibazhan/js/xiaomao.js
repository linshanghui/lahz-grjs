// 点击播放功能
document.getElementById("maomao").addEventListener("click", function() {
  document.getElementById("myaudio").play();
  this.style.display = "none";
});

// 鼠标移出时恢复显示（可选）
function duoMaomao() {
  document.getElementById("maomao").style.display = "block";
}