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
