// 计算本站安全运行时长的函数
        // 获取id为guigui_jzsc的div元素
        var div = document.getElementById('guigui_jzsc');
        
        function getRunningTime() {
            var now = new Date();
            var startDate = new Date('2025-01-01'); // 假设站点开始运行的日期
            var diff = now - startDate; // 相差的毫秒数
            // 计算完整年份
            var years = now.getFullYear() - startDate.getFullYear();
            // 检查是否需要调整年份（如果今年的当前日期还没到开始日期，则减去一年）
            if (now.getMonth() < startDate.getMonth() || (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())) {
                years--;
            }
            // 调整startDate到当前年份的相同月日，以计算剩余的天数
            startDate.setFullYear(now.getFullYear());
            // 如果经过调整后的startDate大于当前日期，则需要将startDate再往前调整一年
            if (startDate > now) {
                startDate.setFullYear(now.getFullYear() - 1);
            }
            diff = now - startDate; // 重新计算相差的毫秒数
            var days = Math.floor(diff / (1000 * 60 * 60 * 24)); // 计算天数
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 计算小时数
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // 计算分钟数
            var seconds = Math.floor((diff % (1000 * 60)) / 1000); // 计算秒数
            // 将结果赋值给div的innerText属性
            div.innerText = "本站已安全运行" + years + "年" + days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
        }
        // 每秒更新一次运行时长
        setInterval(getRunningTime, 1000);
        // 初始显示一次
        getRunningTime();
        // 打字机
        // 打印标题
        new TypeIt(".guigui_biaoti", {
                speed: 100,
                waitUntilVisible: true
            }).type("懒癌患者")
            // .pause(500) // 在两段文本之间暂停500毫秒。
            // .type("欢迎来到我的个人介绍！")
            .go();
        // 打印欢迎
        new TypeIt(".guigui_text", {
            loop: true,
            cursorSpeed: 1000,
            speed: 100
        }).type("你好陌生人").pause(2000).delete(null, {
            delay: 500
        }).type("欢迎来访懒癌患者！").pause(3000).go();