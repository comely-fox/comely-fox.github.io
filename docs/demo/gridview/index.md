---
title: 九宫格
sidebarDepth: 5
prev: /demo/
next: /demo/html-parse/
---

# 九宫格

### [预览](view.html)

## HTML

```html
<div class="table">
  <div class="cell">
    <div class="cell-wrap">
      <div class="cell-content">
        1
      </div>
    </div>
  </div>
  <div class="cell">
    <div class="cell-wrap"></div>
  </div>
  <div class="cell">
    <div class="cell-wrap"></div>
  </div>
  <div class="cell">
    <div class="cell-wrap"></div>
  </div>
  <div class="cell">
    <div class="cell-wrap"></div>
  </div>
  <div class="cell">
    <div class="cell-wrap"></div>
  </div>
  <div class="cell">
    <div class="cell-wrap"></div>
  </div>
  <div class="cell">
    <div class="cell-wrap"></div>
  </div>
  <div class="cell">
    <div class="cell-wrap"></div>
  </div>
</div>
```

## CSS

```css
@charset "utf-8";
body {
  margin: 0;
}

.table {
  padding: 1.125%;
}

.cell {
  float: left;
  width: 33.3333%;
}

.cell .cell-wrap {
  position: relative;
  width: 96%;
  margin: 2%;
  padding-top: 96%;
  background-color: #fea500;
  border-radius: 6%;
}

.cell .cell-content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  color: green;
}
```
