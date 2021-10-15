<template>
  <button :class="[
      buttonType ? 'w-button--' + buttonType : '',

  ]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue";

export default defineComponent({
  name: "w-button",
  props: {
    type: {
      type: String,
      default: "default",
      values: ["default", "success", "warning", "error"]
    },
  },
  setup(props, { emit }){
    const size = inject("size");
    const color = inject("color");

    const buttonType = computed(() => props.type);

    return {
      buttonType,
    }
  }
})
</script>
