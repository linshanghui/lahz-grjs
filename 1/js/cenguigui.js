// 免责声明
		$('#guigui_disc').click(function () {
		  swal({
			className: 'disc-bg',
			title: '· 免责声明 ·',
// 			text: '本网站是一个为 正规站点（博客/个人主页等）免费提供音乐插件的平台，本站里面的功能如果 侵权/侵害了贵公司的合法权益 等，请联系QQ:2963246343',
            text:'本网站是一个为正规站点（博客、个人主页、网站等）提供免费（网页HTML5）音乐播放器插件的平台，本站内容或功能如果侵权/侵害了贵公司的合法权益，请及时联系邮箱：cenguigui@qq.com或QQ：2963246343，本站将在收到通知后第一时间删除/整改！本网站提供的音乐播放器插件仅用于播放音乐资源，音乐版权和链接地址均归各大音乐平台所有，本站不存储、不分享、不转发任何音乐、音频、视频资源/文件（如MP3、MP4），本站用户在使用过程中出现任何法律纠纷等，一切和本站无关，本站不承担任何法律责任。',
			button: {
			  text: 'OK',
			},
		  });
		  // return false
		});
// 关于我
		$('#guigui_about').click(function () {
		  swal({
			className: 'disc-bg',
			title: '· 关于我 ·',
			text: '笒鬼鬼音乐播放器搭建与2023某天，无聊修改写东西，扒了梨花带雨音乐播放器的首页但是我还是留了版权，在不断的学习路上不管自己以后能否有个好的工作无所谓，但是有兴趣就有动力，人间忽晚，山河已秋！',
			button: {
			  text: 'OK',
			},
		  });
		  // return false
		});
        // 网易热评
		$.fn.extend({
			animateCss: function (animationName, callback) {
				var animationEnd = (function (el) {
					var animations = {
						animation: 'animationend',
						OAnimation: 'oAnimationEnd',
						MozAnimation: 'mozAnimationEnd',
						WebkitAnimation: 'webkitAnimationEnd',
					};

					for (var t in animations) {
						if (el.style[t] !== undefined) {
							return animations[t];
						}
					}
				})(document.createElement('div'));

				this.addClass('animated ' + animationName).one(animationEnd, function () {
					$(this).removeClass('animated ' + animationName);

					if (typeof callback === 'function') callback();
				});

				return this;
			},
		});

		dirty(true);
        function dirty(v = false) {
            if (Date.parse(new Date()) > localStorage.Hot_time || v) {
                fetch("https://api.cenguigui.cn/api/djt/api/?format=json&charset=utf-8")
            .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        const content = data.data.content.content;
        $("#hitokoto_text").text(content);
        $("#hitokoto_author").html('-- 来自随机毒汤「<a href="https://api.cenguigui.cn"> 笒鬼鬼api </a>」');
            });
            localStorage.Hot_time = Date.parse(new Date()) + 15000;
                }
        }
        
console.log(`%c欢迎来到%c笒鬼鬼音乐播放器`, 'padding: 5px 10px; border-radius: 5px 0 0 5px; background-color: #0380f4; font-weight: bold;', 'padding: 5px 10px; border-radius: 0 5px 5px 0; background-color: #03a9f4; font-weight: bold;');