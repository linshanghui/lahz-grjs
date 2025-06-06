// 提示语集合
        const tips = [
            "右键功能已禁用",
            "请使用其他操作",
            "这个不能点哦~",
            "试试别的方式吧",
            "操作被拦截啦"
        ];
        
        // 禁用右键并显示浮动提示
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            
            // 创建浮动气泡
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.textContent = tips[Math.floor(Math.random() * tips.length)];
            
            // 定位在点击位置附近
            bubble.style.left = `${e.clientX - 20}px`;
            bubble.style.top = `${e.clientY - 50}px`;
            
            document.body.appendChild(bubble);
            
            // 动画结束后移除元素
            setTimeout(() => {
                bubble.remove();
            }, 1500);
        });
//樱花 Quaint 修改版 

		var stop, staticx;
		var img = new Image();
		img.src = "./lihua/image/yinghua.png";;

		// 樱花数量 (添加)
		var sakuraNum = 21;
		// 樱花越界限制次数, -1不做限制,无限循环 (添加)
		var limitTimes = -1;

		// 定义限制数组 (添加)
		var limitArray = new Array(sakuraNum);
		for (var index = 0; index < sakuraNum; index++) {
			limitArray[index] = limitTimes;
		}

		// 定义樱花, idx 是修改添加的
		function Sakura(x, y, s, r, fn, idx) {
			this.x = x;
			this.y = y;
			this.s = s;
			this.r = r;
			this.fn = fn;
			this.idx = idx;
		}

		// 绘制樱花
		Sakura.prototype.draw = function (cxt) {
			cxt.save();
			var xc = 40 * this.s / 4;
			cxt.translate(this.x, this.y);
			cxt.rotate(this.r);
			cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
			cxt.restore();
		}

		// 修改樱花位置,模拟飘落.
		Sakura.prototype.update = function () {
			this.x = this.fn.x(this.x, this.y);
			this.y = this.fn.y(this.y, this.y);
			this.r = this.fn.r(this.r);

			// 如果樱花越界, 重新调整位置
			if (this.x > window.innerWidth || this.x < 0 ||
				this.y > window.innerHeight || this.y < 0) {

				// 如果樱花不做限制
				if (limitArray[this.idx] == -1) {
					this.r = getRandom('fnr');
					if (Math.random() > 0.4) {
						this.x = getRandom('x');
						this.y = 0;
						this.s = getRandom('s');
						this.r = getRandom('r');
					} else {
						this.x = window.innerWidth;
						this.y = getRandom('y');
						this.s = getRandom('s');
						this.r = getRandom('r');
					}
				}
				// 否则樱花有限制
				else {
					if (limitArray[this.idx] > 0) {
						this.r = getRandom('fnr');
						if (Math.random() > 0.4) {
							this.x = getRandom('x');
							this.y = 0;
							this.s = getRandom('s');
							this.r = getRandom('r');
						} else {
							this.x = window.innerWidth;
							this.y = getRandom('y');
							this.s = getRandom('s');
							this.r = getRandom('r');
						}
						// 该越界的樱花限制数减一
						limitArray[this.idx]--;
					}
				}
			}
		}


		SakuraList = function () {
			this.list = [];
		}
		SakuraList.prototype.push = function (sakura) {
			this.list.push(sakura);
		}

		// list update 方法
		SakuraList.prototype.update = function () {
			for (var i = 0, len = this.list.length; i < len; i++) {
				this.list[i].update();
			}
		}

		// list draw 方法
		SakuraList.prototype.draw = function (cxt) {
			for (var i = 0, len = this.list.length; i < len; i++) {
				this.list[i].draw(cxt);
			}
		}
		SakuraList.prototype.get = function (i) {
			return this.list[i];
		}
		SakuraList.prototype.size = function () {
			return this.list.length;
		}

		// 位置随机策略
		function getRandom(option) {
			var ret, random;
			switch (option) {
				case 'x':
					ret = Math.random() * window.innerWidth;
					break;
				case 'y':
					ret = Math.random() * window.innerHeight;
					break;
				case 's':
					ret = Math.random();
					break;
				case 'r':
					ret = Math.random() * 6;
					break;
				case 'fnx':
					random = -0.5 + Math.random() * 1;
					ret = function (x, y) {
						return x + 0.5 * random - 1.7;
					};
					break;
				case 'fny':
					random = 1.5 + Math.random() * 0.7
					ret = function (x, y) {
						return y + random;
					};
					break;
				case 'fnr':
					random = Math.random() * 0.03;
					ret = function (r) {
						return r + random;
					};
					break;
			}
			return ret;
		}

		// 樱花入口
		function startSakura() {

			requestAnimationFrame = window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				window.oRequestAnimationFrame;
			var canvas = document.createElement('canvas'),
				cxt;
			staticx = true;
			canvas.height = window.innerHeight;
			canvas.width = window.innerWidth;
			canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
			canvas.setAttribute('id', 'canvas_sakura');
			document.getElementsByTagName('body')[0].appendChild(canvas);
			cxt = canvas.getContext('2d');
			var sakuraList = new SakuraList();
			// sakuraNum 樱花个数 (原版为50个)
			for (var i = 0; i < sakuraNum; i++) {
				var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
				randomX = getRandom('x');
				randomY = getRandom('y');
				randomR = getRandom('r');
				randomS = getRandom('s');
				randomFnx = getRandom('fnx');
				randomFny = getRandom('fny');
				randomFnR = getRandom('fnr');
				sakura = new Sakura(randomX, randomY, randomS, randomR, {
					x: randomFnx,
					y: randomFny,
					r: randomFnR
				}, i);
				sakura.draw(cxt);
				sakuraList.push(sakura);
			}

			stop = requestAnimationFrame(function () {
				cxt.clearRect(0, 0, canvas.width, canvas.height);
				// 修改樱花位置逻辑
				sakuraList.update();
				// 画出修改后的樱花
				sakuraList.draw(cxt);
				// 递归 修改位置, 画出修改后的樱花
				stop = requestAnimationFrame(arguments.callee);
			})
		}

		window.onresize = function () {
			var canvasSnow = document.getElementById('canvas_snow');
			// canvasSnow 在改变浏览器大小的时候会为null (修改空指针异常), 不过在改变大小时体验稍差
			if (canvasSnow) {
				canvasSnow.width = window.innerWidth;
				canvasSnow.height = window.innerHeight;
			}
		}

		img.onload = function () {
			startSakura();
		}

// 		// 没看懂哪里调用了, 应该是关闭樱花特效的方法. 还请大佬们解释自己是怎么使用的.
// 		function stopp() {
// 			if (staticx) {
// 				var child = document.getElementById("canvas_sakura");
// 				child.parentNode.removeChild(child);
// 				window.cancelAnimationFrame(stop);
// 				staticx = false;
// 			} else {
// 				startSakura();
// 			}
// 		}

var w = 0;
$(function() {
    "use strict";

        /*---- Scrolling js -----*/
        $(window).scroll(function() {
            if ($(this).scrollTop() > 90){  
                $('.top-scrolling').addClass("sticky");
            }
            else{
                $('.top-scrolling').removeClass("sticky");
            }

            if ($(this).scrollTop() > 10){  
                $('#header').addClass("sticky");
            }
            else{
                $('#header').removeClass("sticky");
            }
        });


        function responsive_dropdown (){
            /*---- Scrolling js -----*/
            $(".scrollTo").on('click', function(e) {
                e.preventDefault();
                var target = $(this).attr('href');
                $('html, body').animate({
                   scrollTop: ($(target).offset().top)
                }, 1000);
            });


            /*---- Responsive menu -----*/
            $(".navbar-toggle").on("click", function(){
                $(".navbar-collapse").toggleClass("show");
            });

            $(".navbar-toggle").on("click", function(){
                $(".navbar-toggle, .header-menu").toggleClass("active");
            });

            $(".level-1").on("click", function(){
              $(".level-1, .megamenu-1").toggleClass("active");
            });

            $(".set > .opener").on("click", function() {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this)
                        .siblings(".megamenu")
                        .slideUp(200);
                    $(".set > a i")
                        .removeClass("fa-minus")
                        .addClass("fa-plus");
                } else {
                $(".set > a i")
                    .removeClass("fa-minus")
                    .addClass("fa-plus");
                $(this)
                    .find("i")
                    .removeClass("fa-plus")
                    .addClass("fa-minus");
                $(".set > .opener").removeClass("active");
                $(this).addClass("active");
                $(".megamenu").slideUp(200);
                $(this)
                    .siblings(".megamenu")
                    .slideDown(200);
                }
            });

            $(".set").on("click", function() {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this)
                    $(".set")
                        .removeClass("")
                        .addClass("");
                } else {
                $(".set")
                    .removeClass("")
                    .addClass("");
                $(this)
                    .find("i")
                    .removeClass("s")
                    .addClass("");
                $(".set").removeClass("active");
                $(this).addClass("active");
                }
            });
            /*---- Responsive menu end -----*/


            /*---- Responsive cart Drop Down -----*/
            $(".cart-icon").on("click", function(){
                $(".cart-dropdown, .cart-icon").toggleClass("active");
            });
            /*---- Responsive cart Drop Down End -----*/


            /*---- Product Detail choose size -----*/
            $('ul.Choose li').on("click", function(){
                $('ul.Choose li').removeClass('current');
                $(this).addClass('current');
            })
            $('ul.Size li').on("click", function(){
                $('ul.Size li').removeClass('current');
                $(this).addClass('current');
            })
            /*---- Product Detail choose size end -----*/


            /*---- Product Detail description tab -----*/
            $('ul.panel-tab li').on("click", function(){
                var tab_id = $(this).attr('data-tab');

                $('ul.panel-tab li').removeClass('current');
                $('.product-desc-tab').removeClass('current');

                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            })
            /*---- Product Detail description tab end -----*/
        };


        /*---- Preloader Start -----*/
        window.onload = function() {
            $('#preloader').delay(2000).fadeOut(500);
        };
        /*---- Preloader End -----*/


        /*---- Custom select drop down -----*/
        $(".custom-select").each(function() {
            var classes = $(this).attr("class"),
                id      = $(this).attr("id"),
                name    = $(this).attr("name");
            var template =  '<div class="' + classes + '">';
                template += '<span class="custom-select-trigger">' + $(this).data("placeholder") + '</span>';
                template += '<div class="custom-options">';
                $(this).find("option").each(function() {
                    template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
                });
            template += '</div></div>';
        
            $(this).wrap('<div class="custom-select-wrapper"></div>');
            $(this).hide();
            $(this).after(template);
        });
        $(".custom-option:first-of-type").hover(function() {
            $(this).parents(".custom-options").addClass("option-hover");
        }, function() {
            $(this).parents(".custom-options").removeClass("option-hover");
        });
        $(".custom-select-trigger").on("click", function() {
            $('html').one('click',function() {
                $(".custom-select").removeClass("opened");
            });
            $(this).parents(".custom-select").toggleClass("opened");
            event.stopPropagation();
        });
        $(".custom-option").on("click", function() {
            $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
            $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
            $(this).addClass("selection");
            $(this).parents(".custom-select").removeClass("opened");
            $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
        });
        /*---- Custom select drop down end -----*/


        /*---- Home page banner -----*/
        if ($(".banner-carousel").length > 0) {
            $('.banner-carousel').owlCarousel({
                loop:true,
                nav: true,
                dots: false,
                items: 1,
                responsiveClass: true,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause: true,
                autoHeight:true,
                responsive: {
                    0: {
                        arrow: false,
                        nav: false,
                        dots: true,
                    },
                    768: {
                        arrow: false,
                        nav: true,
                        dots: false,
                    },
                }
            });
        }


        /*---- Home page chef banner -----*/
        if ($(".chef-banner").length > 0) {
            $('.chef-banner').owlCarousel({
                loop:true,
                nav: false,
                items: 4,
                responsiveClass: true,
                autoplay:true,
                autoplayTimeout:5000,
                responsive: {
                    0: {
                        dots: true,
                        nav: false,
                        items: 1,
                    },
                    768: {
                        items: 3,
                        nav: true,
                        dots: false,
                    },
                    992: {
                        items: 4,
                        nav: true,
                    },
                }
            });
        }


        /*---- Customer Reviews -----*/
        if ($(".customer-slide").length > 0) {
            $('.customer-slide').owlCarousel({
                loop:true,
                nav: false,
                items: 1,
                responsiveClass: true,
                autoplay:true,
                autoplayTimeout:5000,
                animateOut: 'slideOutUp',
                animateIn: 'slideInUp',
                responsive: {
                    767: {
                        nav: false,
                    },
                }
            });
        }

        $(document).ready(function() {
            responsive_dropdown ();
        });
});

