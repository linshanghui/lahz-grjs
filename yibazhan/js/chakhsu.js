var chakhsu = function(r) {
    function t() {
        return b[Math.floor(Math.random() * b.length)];
    }

    function e() {
        return String.fromCharCode(94 * Math.random() + 33);
    }

    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            l.textContent = e();
            l.style.color = t();
            n.appendChild(l);
        }
        return n;
    }

    function i() {
        // 拆分当前句子为 前半句+后半句（按逗号分割）
        var originText = o[c.skillI];
        var textParts = originText.split("，"); // 中文逗号分割
        var firstHalf = textParts[0] + "，"; // 前半句带逗号
        var secondHalf = textParts[1] || ""; // 后半句
        var fullText = firstHalf + secondHalf;

        c.step ?
            c.step--
            :
            (c.step = g,
                c.prefixP < l.length ?
                (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) :
                // 核心逻辑：先拼前半句→停留→拼后半句
                "forward" === c.direction ?
                // 阶段1：显示前半句
                c.skillP < firstHalf.length ?
                (c.text += fullText[c.skillP], c.skillP++) :
                // 前半句显示完，停留指定时间
                c.delay ?
                c.delay-- :
                // 阶段2：继续显示后半句
                c.skillP < fullText.length ?
                (c.text += fullText[c.skillP], c.skillP++) :
                // 整句显示完，停留后反向删除
                (c.direction = "backward", c.delay = a * 2) :
                // 反向删除：删完切换下一句
                c.skillP > 0 ?
                (c.text = c.text.slice(0, -1), c.skillP--) :
                (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward", c.delay = a)),
            r.textContent = c.text,
            r.appendChild(
                n(
                    c.prefixP < l.length ?
                    Math.min(s, s + c.prefixP) :
                    Math.min(s, fullText.length - c.skillP)
                )
            ),
            setTimeout(i, d);
    }

    var l = "", // 前缀文本
        o = [
            "欲买桂花同载酒，终不似少年游",
            "愿你出走半生，归来仍是少年"
        ].map(function(r) {
            return r + "";
        }), // 要显示的文本数组
        a = 20, // 前半句停留时间（数值越大停留越久）
        g = 3, // 闪烁字符步长
        s = 5, // 闪烁字符最大数量
        d = 120, // 动画更新间隔
        b = [
            "rgb(110,64,170)",
            "rgb(150,61,179)",
            "rgb(191,60,175)",
            "rgb(228,65,157)",
            "rgb(254,75,131)",
            "rgb(255,94,99)",
            "rgb(255,120,71)",
            "rgb(251,150,51)",
            "rgb(226,183,47)",
            "rgb(198,214,60)",
            "rgb(175,240,91)",
            "rgb(127,246,88)",
            "rgb(82,246,103)",
            "rgb(48,239,130)",
            "rgb(29,223,163)",
            "rgb(26,199,194)",
            "rgb(35,171,216)",
            "rgb(54,140,225)",
            "rgb(76,110,219)",
            "rgb(96,84,200)",
        ], // 颜色数组
        c = {
            text: "",
            prefixP: -s,
            skillI: 0,
            skillP: 0,
            direction: "forward",
            delay: a,
            step: g,
        }; // 控制对象

    i(); // 启动动画
};

// 页面加载完成后执行，绑定到 DOM 元素
document.addEventListener("DOMContentLoaded", function() {
    chakhsu(document.getElementById("chakhsu"));
});
