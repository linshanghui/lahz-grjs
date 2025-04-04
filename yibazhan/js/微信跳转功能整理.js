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
 // 给我打钱弹窗
 const trigger = document.getElementById('gwdq');
        const popup = document.getElementById('popup-card');
        const closeBtn = document.querySelector('.close-btn');

        // 显示弹窗
        trigger.addEventListener('click', function() {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        });

        // 关闭弹窗
        closeBtn.addEventListener('click', function() {
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // 点击弹窗外部关闭
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // ESC键关闭
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && popup.classList.contains('active')) {
                popup.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });