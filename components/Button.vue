<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "accent",
  },
  size: {
    type: String,
  },
  shine: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hover: {
    type: Boolean,
    default: true,
  },
});

const wrapper = ref(null);
const clicked = ref(false);

const emits = defineEmits(["click"]);

const handleClick = (e) => {
  if (props.disabled) return;
  clicked.value = true;
  setTimeout(() => {
    clicked.value = false;
  }, 100);

  emits("click", e);
};

onMounted(() => {
  if (props.disabled) {
    wrapper.value.classList.add("button-theme-gray");
  }
});
</script>

<template>
  <div
    class="button"
    ref="wrapper"
    @keydown.enter="handleClick"
    @click="handleClick"
    :class="[disabled ? 'button-theme-gray' : 'button-theme-' + theme, clicked && 'button-clicked', hover && 'button-hover']"
  >
    <div class="button-background">
      <div></div>
      <div></div>
    </div>
    <div class="button-content" :class="[size && 'button-content-size-' + size, shine && 'button-content-shine']">
      <div class="button-shine" v-if="shine && !disabled"></div>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.button {
  position: relative;
  height: fit-content;
  text-transform: uppercase;
  border: none;
  z-index: 0;
  width: fit-content;
  padding-bottom: 3px;
  user-select: none;
  transition: filter 0.1s ease;
  -webkit-tap-highlight-color: transparent;

  --hover-brightness: 0.925;
  --radius: var(--radius-md);

  &-hover {
    cursor: pointer;

    body.no-touch &:hover {
      filter: brightness(var(--hover-brightness));
    }
  }

  &-theme {
    &-accent {
      --background-color: rgb(var(--color-accent));
      --color: rgb(var(--color-white-700));
      --elevation: rgba(0, 0, 0, 0.25);
      --hover-brightness: 1.1;
    }

    &-yellow {
      --background-color: rgb(var(--color-yellow-400));
      --color: rgb(var(--color-black-700));
      --elevation: rgba(0, 0, 0, 0.25);
      --hover-brightness: 1.1;
    }

    &-gray {
      --background-color: rgb(var(--color-gray-700));
      --color: rgb(var(--color-500));
      --elevation: rgba(0, 0, 0, 0.2);
    }

    &-light {
      --background-color: rgb(var(--color-bg-light));
      --elevation: rgb(var(--primary-light-500));
      --color: rgb(var(--color-light-500));
      --hover-brightness: 0.925;
    }

    &-dark {
      --background-color: rgb(var(--color-bg-dark));
      --elevation: rgb(var(--primary-dark-500));
      --color: rgb(var(--color-dark-500));
      --hover-brightness: 1.2;
    }

    &-red {
      --background-color: rgb(var(--color-red-400));
      --color: rgb(var(--color-white-700));
      --elevation: rgba(0, 0, 0, 0.25);
      --hover-brightness: 1.25;
    }
  }

  &-background {
    transition: height 0.1s ease;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;

    :nth-child(1),
    :nth-child(2) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      transition: height 0.1s ease, background-color 0.1s ease;
    }

    :nth-child(1) {
      background: var(--background-color);
      z-index: -2;
    }

    :nth-child(2) {
      background: var(--elevation);
      z-index: -1;
    }
  }

  &-shine {
    height: 300%;
    width: 1.5rem;
    position: absolute;
    bottom: -50%;
    left: 0;
    z-index: -1;
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(20deg);
    animation: moveShine 4s infinite linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -1rem;
      width: 0.75rem;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
    }
  }

  @keyframes moveShine {
    0% {
      left: -6rem;
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    55% {
      opacity: 0;
      left: calc(100% + 3rem);
    }
    100% {
      left: calc(100% + 3rem);
    }
  }

  &-clicked {
    .button {
      &-content {
        transform: translateY(3px);
      }

      &-background {
        height: calc(100% - 3px);
      }
    }
  }

  &-content {
    position: relative;
    transition: transform 0.1s ease, background 0.1s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    min-width: 100%;
    background: var(--background-color);
    color: var(--color);
    font-weight: 900;
    height: 100%;
    border: var(--stroke-md) solid var(--elevation);
    z-index: 0;

    &-shine {
      overflow: hidden;
    }

    &-size {
      &-xs {
        padding: 0.1rem 0.5rem;
        font-size: var(--font-size-300);
      }

      &-sm {
        padding: 0.2rem 1rem;
        font-size: var(--font-size-400);
      }

      &-md {
        padding: 0.3rem 2rem;
        font-size: var(--font-size-450);
      }

      &-lg {
        padding: 0.3rem 3rem;
        font-size: var(--font-size-600);
      }

      &-square {
        padding: 0.3rem;
        aspect-ratio: 1;
      }
    }
  }
}
</style>
