<script setup>
defineProps({ app: Boolean });
</script>

<template>
  <div class="container" :class="{ container__app: app }">
    <span class="loader"></span>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container__app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.4);
}

.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 20px auto;
  position: relative;
  border: 3px solid indigo;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  width: 6px;
  height: 24px;
  background: indigo;
  transform: rotate(-45deg);
  position: absolute;
  bottom: -20px;
  left: 46px;
}

@keyframes animloader {
  0% {
    transform: translate(-10px, -10px);
  }
  25% {
    transform: translate(-10px, 10px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  75% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(-10px, -10px);
  }
}
</style>
