<script setup>
import spinner_ from '../spinner_.vue';
defineProps({
  spinner: Object,
  margin: String,
  loading_state: Boolean,
  succMsg: Boolean,
  errMsgDisplay: String,
})
// can e eassly styled with out using :deep cus it is not deeply nested 
</script>

<template>
  <button class="btn" @click="$emit('btn')" :style="{margin}" >
    <slot>click me</slot>
    <spinner_  v-if="loading_state" :color="spinner?.color" :width="spinner?.width" />
    <svg :width="spinner?.width" v-if="succMsg && !loading_state"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  </button>
  <!-- here add error display functionality if needed -->
   <p class="err-msg" v-if="errMsgDisplay">{{ errMsgDisplay }}</p>
</template>

<style scoped lang="scss">
@import '../../../style/variables';
@import '../../../style/mixins';
@import '../../../style/global.scss';
.btn{
  @include button($bg-color:darken($color: $light-blue, $amount: 35), $text-color:white,$cssvar:false);
  margin-bottom: 10px;
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