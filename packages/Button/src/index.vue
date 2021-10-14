<template>
  <div class="w-button">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "w-button",
  props: {
    type: {
      type: String,
      default: "default",
    },

  }
})
</script>
