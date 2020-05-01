<template>
  <div>
    <div class="table">
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">1</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">2</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">3</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">4</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">5</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">6</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">7</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">8</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-wrap">
          <div class="cell-content">9</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
</style>
