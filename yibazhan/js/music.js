document.addEventListener('DOMContentLoaded', function(){
(function(){
const t=document.createElement("style");
t.textContent = `
@font-face {font-family: "iconfont";
src: url('//at.alicdn.com/t/font_2121551_vt9vvdg9vvp.eot?t=1602639720572');
src: url('//at.alicdn.com/t/font_2121551_vt9vvdg9vvp.eot?t=1602639720572#iefix') format('embedded-opentype'),
url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARYAAsAAAAACLgAAAQJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqFAIQsATYCJAMQCwoABCAFhG0HQxuRB8ieg43jWMJSJ08naeSPuHj4/0P0vv9f5qQxpu/ja1AolIBHZ1sr0BQqUIHqWyDzn3P+CpqxoBLU5bcUS18a3GXmJzttJ9EzDRAwKDmE/+eY6fL53kDy29YuUWkRhaO9AY4HNKCoums8sWs8bxA/BfFsBh4TuJlAqxE6KAduPiGAV1J6BeKOxUwEvCGDzMGFZnVjysQUHwCX5vJIfQqA9/bTx39gFC9FQ6UMPLx1TQEOv9S+atPK7svEmAggbM8GbhoVS4AkblId12huaAlN64eVbgXQKIvLL/Wv2vf3tMm3DYxTOP5/vKISjRRFO7Bb8rpWQp1K8EudB6df2jCoQGf3ZrTiBwDRQTRD7TRKdVyWz0yYm7tHWbKwZ2tJavkdePs25P37sA8fwhsXyxf4Q7h370LvtPx9wtVbbPyd6+0HZVr5YuN8/3zjImXktdnWS1lwEDJzUn7aeFx2VNg4XzZX4y+UvdMNH/lw+QRptKSMvjHffiVXNtewMLDQMAfAxcdpsW6x9X7awhAw9tZFtOGxVsgr/rO8TwjpRhpPw7bO5MJnCh/OLEhTBhfV0el5AB7mVKgR9BMeQZ8H85ttRK4mCLUNyiQY0waePx80pDSWB+kguGiMTsgpo7v0f//oe/RdyHZZnv9Qu7YKRLfWmp+/jIyf3/q6vx9ijBrLGwsoyRmhyLe1tX7kQETt7Zdcuzy7OrtaoDANVFlOCW30mEFDySjmbt4at3PBC2V1kQOkf21tHkE35JQEqrdGt/fzp4PqlIT/KhC2vfG6FEBL3zPXu+c5LjTi8/HrcJCmKu7l6ra7hYDBgd4yCJ+NYrl8E1ZY9kwCEw5ZHjLA/A4/sVyqBiUP+ylYJ6whUiv44CeWR9Gg5kbiakU0hOsEHbkIrHkiPwN8vEMYsAG81SWahp1B/UQ9eys+xl9RGBmP2vznRRL8XMpLhestQflwswInfAeEJcvyK1aMmbJEF/yc6TSQoKBVNXLvc6HXpzZUA6UzCc0GfCiaDEPVbAqZ2CVo0GYLGjXbhlaL3Ke36UOgiWzBgmoCodsqFJ2+Q9XtGTKxH6HBoO/QqDsatDoPkQXbzMTidyZgIglTsKR8jJWMZzE0M8nvZAdBZnZGIhEU24QwSHBYXsxQzyAadYdZkGhjCCeHaUSSDIxB4JmYG9kOZmTgGJvA02AyqZdKkmwrfX1G2j3pJeOZgN8+ApSIBKXAJMmHYUmGy8Iwq5P4Y48fBGLKliERkVPywxkGInCw6scY0mNQAumuyCpVciyX4cjBZIREYsAwEHCZMG7EBmWoIRyGnd4uDZSMpCe1RoDNij5ViVFWode/KvMI10ArZXxGiRoZDRruszmsZMRsqZucgXMgLSsxBwAAAAA=') format('woff2'),
url('//at.alicdn.com/t/font_2121551_vt9vvdg9vvp.woff?t=1602639720572') format('woff'),
url('//at.alicdn.com/t/font_2121551_vt9vvdg9vvp.ttf?t=1602639720572') format('truetype'),
url('//at.alicdn.com/t/font_2121551_vt9vvdg9vvp.svg?t=1602639720572#iconfont') format('svg');
}
.iconfont {font-family: "iconfont" !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.icon-music:before{content:"\\e626";}

#musicBtn{
border:none;background:none;width:40px;height:40px;
cursor:pointer;position:fixed;top:20px;left:20px;z-index:99999;
display:flex;align-items:center;justify-content:center;outline:none
}

#musicBtn .iconfont{
font-size:28px;
color:#ffffff;
display:inline-block;
transform-origin:center center;
}

#musicBtn.rotate i{animation:rotate 3s linear infinite}

#musicBtn::after{
content:"";
position:absolute;
left:50%;
top:50%;
width:22px;
height:2px;
background:#ffffff;
transform:translate(-50%,-50%) rotate(-45deg);
}

#musicBtn.rotate::after{display:none}

@keyframes rotate{to{transform:rotate(360deg)}}
`;
document.head.appendChild(t);

const n=document.createElement("button");
n.id="musicBtn";
n.innerHTML='<i class="iconfont icon-music"></i>';
document.body.appendChild(n);

// ==========歌曲列表 纸飞机、避风港、偏爱、无名的人、春泥==========
const songIdList = [
    1330348068,25638810,36229053,
    2093562354,
    229072,
    86369,
    1903149553,
    573968836
];
let currentSongIndex = 0;

// 独立BGM音频
let o = document.querySelector("#myBgmAudio");
if(!o){
  o = document.createElement('audio');
  o.id = "myBgmAudio";
  o.preload = "auto";
  o.loop = false; // 关闭单曲循环，靠ended事件切歌
  document.body.appendChild(o);
  o.load();
}

// 加载指定索引歌曲
function loadSongByIndex(idx){
    currentSongIndex = idx % songIdList.length;
    const sid = songIdList[currentSongIndex];
    o.src = `https://music.163.com/song/media/outer/url?id=${sid}.mp3`;
    o.load();
}

// 切下一首
function playNextSong(){
    loadSongByIndex(currentSongIndex + 1);
    o.play().catch(e=>console.log("切歌播放失败",e));
}

// 初始化加载第一首
loadSongByIndex(0);

// 播放结束自动切下一首
o.addEventListener('ended', function(){
    playNextSong();
});

// 更新按钮旋转/斜杠状态
function syncBtnState(){
  if(o.paused){
    n.classList.remove('rotate');
  }else{
    n.classList.add('rotate');
  }
}
o.addEventListener('play', syncBtnState);
o.addEventListener('pause', syncBtnState);

// 单击播放暂停；双击切下一曲
let clickTimer = null;
n.addEventListener('click', async function(e){
    e.stopPropagation();
    e.preventDefault();
    if(clickTimer){
        clearTimeout(clickTimer);
        clickTimer = null;
        // 双击：切下一首
        playNextSong();
        return;
    }
    clickTimer = setTimeout(async ()=>{
        clickTimer = null;
        try{
            if(o.paused){
                await o.play();
            }else{
                o.pause();
            }
        }catch(err){
            console.log("按钮播放异常",err);
        }
    },250);
});

// =========全局一次性点击：第一次点击页面任意位置直接播放BGM，只执行一次=========
let isAudioPlayed = false;
async function firstClickPlayBgm(e){
    if(isAudioPlayed) return;
    isAudioPlayed = true;
    try{
        await o.play();
        console.log("首次页面点击，BGM开始播放");
    }catch(err){
        console.log("首次点击播放失败",err);
    }
    document.removeEventListener('click', firstClickPlayBgm);
}
document.addEventListener('click', firstClickPlayBgm);

})();
})
