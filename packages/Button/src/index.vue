<template>
  <button class="">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "w-button",
  props: {
    type: {
      type: String,
      default: "default",
      values: ["default", "success", "warning", "error"]
    },
  },
  setup(){
    const size = inject("size");
    const color = inject("color");
  }
})
</script>

<style lang="less" scoped>
.w-button{

}
</style>
