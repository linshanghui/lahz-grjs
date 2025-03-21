// 修复引号问题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 离开当前页面时标签显示内容
        document.title = '(◦`~´◦) 不要走！再看看嘛！';
        clearTimeout(titleTime); // 清除之前的定时器
    } else {
        // 返回当前页面时标签显示内容
        document.title = '(˵¯͒〰¯͒˵)欢迎回来！ ' + OriginTitle; // 拼接原始标题
        // 两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
