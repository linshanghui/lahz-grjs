// 动态创建 <div> 和 <input>
const maomaoDiv = document.createElement('div');
maomaoDiv.id = 'maomao';
maomaoDiv.style.position = 'fixed';
maomaoDiv.style.bottom = '40px';
maomaoDiv.style.right = '-5px';
maomaoDiv.style.width = '57px';
maomaoDiv.style.height = '70px';
maomaoDiv.style.backgroundImage = 'url(https://lib.hackeus.cn/static/svg/mao.svg)';
maomaoDiv.style.backgroundPosition = 'center';
maomaoDiv.style.backgroundSize = 'cover';
maomaoDiv.style.backgroundRepeat = 'no-repeat';
maomaoDiv.style.transition = 'background .3s';

// 创建隐藏的按钮
const button = document.createElement('input');
button.type = 'button';
button.style.display = 'none'; // 隐藏按钮
button.onclick = autoPlay; // 绑定点击事件

maomaoDiv.appendChild(button); // 将按钮添加到 div 中

// 将 div 添加到页面
document.body.appendChild(maomaoDiv);

// 动态创建 <audio> 元素
const audio = document.createElement('audio');
audio.id = 'myaudio';
audio.src = '//lib.hackeus.cn/static/audio/music_miao.mp3';
audio.controls = true; // 添加控件
audio.autoplay = true; // 设置自动播放
audio.hidden = true; // 隐藏音频控件

// 将音频添加到页面
document.body.appendChild(audio);

// 定义自动播放函数
function autoPlay() {
  const myaudio = document.getElementById('myaudio');
  myaudio.play(); // 播放音频
}

// 定义鼠标移出事件
function duoMaomao() {
  console.log('鼠标移出事件触发');
  // 在这里添加你想要执行的逻辑
}

// 绑定鼠标移出事件
maomaoDiv.onmouseout = duoMaomao;

// 动态创建 <style> 标签并添加 CSS 样式
const style = document.createElement('style');
style.innerHTML = `
/*躲猫猫*/
#maomao:hover {
    background-position: 60px 50%;
}
`;
document.head.appendChild(style);

