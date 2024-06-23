<template>
  <div class="loading">
    <div class="loading-dot"></div>
    <div class="loading-dot" :style="{ animationDelay: '0.25s' }"></div>
    <div class="loading-dot" :style="{ animationDelay: '0.5s' }"></div>
  </div>
</template>

<style lang="scss">
.loading {
  display: flex;
  gap: 0.5rem;

  &-dot {
    width: 1.15rem;
    height: 1.15rem;
    background: currentColor;
    border-radius: 50%;
    animation: scale 1s infinite alternate;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.6);
    }
  }
}
</style>
