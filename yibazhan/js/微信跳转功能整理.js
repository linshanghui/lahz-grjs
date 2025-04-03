// 微信跳转功能
    document.getElementById("copy-btn").addEventListener("click", function() {
        var wechatId = "wxid_4ipqqnnrgpoa41";
        var input = document.createElement("input");
        document.body.appendChild(input);
        input.value = wechatId;
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        alert("微信号已复制到剪贴板，正在打开微信...");
        window.location.href = "weixin://wxid_4ipqqnnrgpoa41";
    });
// 给钱弹窗
document.addEventListener('DOMContentLoaded', function() {
  // 获取元素
  const trigger = document.getElementById('donateTrigger');
  const modal = document.getElementById('donateModal');
  const closeBtn = document.getElementById('closeModal');
  
  // 显示弹窗
  trigger.addEventListener('click', function() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 禁止背景滚动
  });
  
  // 关闭弹窗
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 恢复滚动
  }
  
  closeBtn.addEventListener('click', closeModal);
  
  // 点击蒙层关闭
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});