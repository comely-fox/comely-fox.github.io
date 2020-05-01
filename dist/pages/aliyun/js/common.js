var spaceHeight = 50;

var resetContainerHeight = (function () {
  var oContainer = document.getElementById('container')
  var boxSizing = getStyle(oContainer, 'box-sizing')

  return function () {
    if (boxSizing !== 'border-box') {
      var clientWidth = document.documentElement.clientHeight || document.body.clientHeight
      var offsetHeight = clientWidth - spaceHeight
      oContainer.style.height = offsetHeight + 'px'
    }
  }
}());

resetContainerHeight()
addEvent(window, 'resize', resetContainerHeight)

function Tabs(tags, contents) {
  this.tags = tags
  this.contents = contents
  this.length = tags.length;
  this.activeIndex = 0;
  this._setTabIndex();
}

Tabs.prototype.hide = function () {
  var i = 0;
  for (; i < this.length; i++) {
    this.contents[i].style.display = 'none'
    this.tags[i].className = this.tags[i].className.replace(/\sactive/, '')
  }
}

Tabs.prototype.show = function (index) {
  this.tags[index].className += ' active'
  this.contents[index].style.display = 'block'
}

Tabs.prototype.use = function () {
  var i = 0;
  var self = this;
  for (; i < this.length; i++) {
    addEvent(this.tags[i], 'click', function () {
      this.activeIndex = this.getAttribute('tabsindex')
      self.hide()
      self.show(this.activeIndex)
    })
  }
}

Tabs.prototype._setTabIndex = function () {
  var i = 0;
  var self = this;
  for (; i < this.length; i++) {
    this.tags[i].setAttribute('tabsindex', i)
    this.contents[i].setAttribute('tabsindex', i)
  }
}


var hotNews = document.getElementById('hot-news');
new Tabs(hotNews.getElementsByClassName('module-tabs-tag'),
  hotNews.getElementsByClassName('module-tabs-content')).use();

function getStyle(el, prop) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(el, null)[prop]
  } else if (el.currentStyle) {
    return el.currentStyle[prop]
  }
  return el.style && el.style[prop]
}

function addEvent(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler, false)
  } else {
    el.attachEvent('on' + eventName, function () {
      handler.call(el)
    })
  }
}