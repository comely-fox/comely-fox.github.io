// 点击移动端菜按钮的时候 展示
(function () {
	var ui_nav = document.getElementsByClassName("nav")[0];
	var ui_mobile_menu = document.getElementsByClassName("menu")[0];
	var end = document.documentElement.clientHeight


	ui_mobile_menu.onclick = function () {
		var state = !parseInt(ui_nav.getAttribute("data-status"));
		//	autoUnfold(ui_nav, this, state);
		var m = new Menu(this, ui_nav)
		m.toggle(state)
	}


	function Menu(currentElement, menu) {
		this.currentElement = currentElement
		this.menu = menu
		this.timer = null
		if (this.getInstanceof) {
			return this.getInstanceof
		} else {
			this.getInstanceof = this
		}
	}

	Menu.prototype.toggle = function (state) {
		if (state) {
			this.show()
			this.animation({
				start: 0,
				end: end,
				process: function (h) {
					this.menu.style.height = h + 'px'
				}
			})
		} else {
			this.animation({
				start: end,
				end: 200,
				process: function (h) {
					console.log(h)
					this.menu.style.height = h + 'px'
				},
				finish: function () {
					this.hide()
				}
			})
		}
	}

	// 动画效果
	Menu.prototype.animation = function (params) {
		// 初始值
		var start = params.start
		// 终止值
		var end = params.end
		// 速度
		var speed = params.speed || 8.625
		// 方向
		var direction = params.start < params.end ? true : false
		// 初始化一定时间内变化的值
		var active = start
		// 两者之间的距离不变
		var distance = Math.abs(start - end)
		var self = this

		// 反方向, 速度取相反数
		if (!direction) {
			speed = -speed
		}

		this.timer = setInterval(function () {
			active += speed

			if (Math.abs(active - start) >= distance) {
				self.stop()
				active = end
				params.finish && params.finish.call(self)
			}

			params.process.call(self, active)
		}, params.ms || 8)
	}


	// 停止动画
	Menu.prototype.stop = function () {
		clearInterval(this.timer)
		this.timer = null
	}

	Menu.prototype.hide = function () {

		this.menu.style.display = "none"
		this.menu.setAttribute("data-status", 0)
		this.currentElement.removeAttribute('style')
	}

	Menu.prototype.show = function () {

		this.menu.style.display = "block"
		this.menu.setAttribute("data-status", 1)
		this.currentElement.style.color = "red"
	}


	var m = new Menu(ui_mobile_menu, ui_nav)

	/* 浏览器窗口被改变的时候直接关闭移动端菜单 */
	window.onresize = function () {

	}

	/**
	 * 滑动下拉菜单 
	 * @param {element} element   // 被显示的元素
	 * @param {element} elemnun   // 触发事件的元素
	 * @param {Boolean} state   // 显示隐藏的当前状态
	 */
	function autoUnfold(element, elemnun, state) {
		clearInterval(timer); // 清除重复动画 防止动画未完成的时候多次点击
		var speed = 21.93952656324;
		var ww = document.documentElement.clientHeight;
		element.style.display = "block";
		timer = setInterval(function () {
			// 显示
			if (state) {
				elemnun.style.color = "red";
				temp += speed;
				if (temp >= ww) {
					temp = ww;
					element.setAttribute("data-status", 1);
					clearInterval(timer);
				}
			}
			// 隐藏
			else {
				temp -= speed;
				if (temp <= 0) {
					temp = 0;
					element.setAttribute("data-status", 0);
					clearInterval(timer);
					elemnun.style.color = "";
					element.style.display = "none";
				}
			}
			element.style.height = temp + "px";
		}, 6);
	}
})();