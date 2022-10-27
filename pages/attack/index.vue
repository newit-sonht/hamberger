<template>
  <div>
    <div class="red-container">
      <!-- Player Health -->
      <div class="player_health">
        <div class="player_health_detail" id="player"></div>
      </div>
      <!-- Timer -->
      <div class="timer" id="timer">10</div>
      <!-- Enemy Health -->
      <div class="enemy_health">
        <div class="enemy_health_detail" id="enemy"></div>
      </div>
    </div>
    <div class="time-label" id="myTime">Time Out</div>
    <canvas></canvas>
  </div>
</template>


<script src="assets/js/oak/index.js"></script>
<style scoped> @import url('assets/css/oak/style.css'); </style>
