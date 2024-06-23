<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  id: {
    type: String,
    default: "switch",
  },
});

const model = defineModel();
</script>

<template>
  <div class="switch">
    <label class="switch-label" v-if="label" :for="id">{{ label }}</label>
    <input type="checkbox" :id="id" v-model="model" class="switch-input" />
  </div>
</template>

<style lang="scss">
.switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  &-label {
    font-weight: 900;
    font-size: var(--font-size-300);
  }

  &-input {
    appearance: none;
    background: rgb(var(--primary-600));
    transition: background-color 0.3s ease;
    width: 2.5rem;
    height: 1.25rem;
    border-radius: 0.625rem;
    position: relative;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: calc(-0.125rem - 2px);
      width: 1.5rem;
      height: 1.5rem;
      background: rgb(var(--color-white-700));
      border-radius: 50%;
      transition: transform 0.3s, border-color 0.3s, filter 0.3s;
      border: var(--stroke-md) solid rgb(var(--primary-600));
      filter: drop-shadow(0 var(--elevation-md) 0 rgb(var(--primary-600)));
    }

    &:checked {
      background: rgb(var(--color-accent));

      &:before {
        border: var(--stroke-md) solid rgb(var(--color-accent));
        transform: translateX(calc(1rem));
        filter: drop-shadow(0 var(--elevation-md) 0 rgb(var(--color-accent)));
      }
    }
  }
}
</style>
