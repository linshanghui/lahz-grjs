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
        var t = o[c.skillI];
        // 新增：计算当前句子的半长（向下取整，避免奇数长度出问题）
        var halfLen = Math.floor(t.length / 2);
        c.step ?
            c.step--
            :
            (c.step = g,
                c.prefixP < l.length ?
                (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) :
                "forward" === c.direction ?
                // 正向拼接：只拼到半句长度就停止
                c.skillP < halfLen ?
                (c.text += t[c.skillP], c.skillP++) :
                c.delay ?
                c.delay--
                :
                (c.direction = "backward", c.delay = a) :
                // 反向删除：删到0就切换下一句
                c.skillP > 0 ?
                (c.text = c.text.slice(0, -1), c.skillP--) :
                (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")),
            r.textContent = c.text,
            r.appendChild(
                n(
                    c.prefixP < l.length ?
                    Math.min(s, s + c.prefixP) :
                    Math.min(s, t.length - c.skillP)
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
        a = 5, // 延迟时间
        g = 3, // 闪烁字符的步长
        s = 5, // 闪烁字符的最大数量
        d = 120, // 每次更新的时间间隔
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

// 在页面加载完成后，调用函数并绑定到指定的 DOM 元素
document.addEventListener("DOMContentLoaded", function() {
    chakhsu(document.getElementById("chakhsu"));
});
