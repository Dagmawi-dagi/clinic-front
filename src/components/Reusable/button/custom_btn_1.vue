<script setup>
import spinner_ from '../spinner_.vue';
defineProps({
  spinner: Object,
  margin: String,
  loading_state: Boolean 
})
// can e eassly styled with out using :deep cus it is not deeply nested 
</script>

<template>
  <button class="btn" @click="$emit('btn')" :style="{margin}" >
    <slot>default slot</slot>
    <spinner_  v-if="loading_state" :color="spinner?.color" :width="spinner?.width" />
  </button>
</template>

<style scoped lang="scss">
@import '../../../style/variables';
@import '../../../style/mixins';
.btn{
  @include button($bg-color:darken($color: $light-blue, $amount: 35), $text-color:white,$cssvar:false);
  &{
    @include flexbox();
    gap: 5px;
  }
  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(80%);
  }
}
</style>