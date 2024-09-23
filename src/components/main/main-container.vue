<script setup>
// comps
import topNav from '../Nav/top-nav.vue';
import sideBar from '../Nav/side-bar.vue';
import scrollTop from '../Reusable/scroll-top.vue';
// composables
import { use_break_point } from '../../composables/break-point';
// router
import { RouterView } from 'vue-router';
// stores
import { use_util_store } from '../../stores/util-store';
import { storeToRefs } from 'pinia';
// vue
import { computed } from 'vue';
const { side_bar_open,router_view_container,route_resovled } = storeToRefs( use_util_store())
const { desktop,laptop,mobilePhone,tablet } = use_break_point()

const expand = computed(()=>{
  if( (desktop.value || laptop.value) && !side_bar_open.value  ) return true
  if( (mobilePhone.value || tablet.value) ) return true
  return false
})

</script>

<template>
  <template  v-if="$route.name === 'login' && route_resovled">
    <RouterView /> 
  </template>

  <template  v-else-if="$route.name != 'login' && route_resovled">
    <topNav/>
    <div class="main">
      <sideBar/>
      <div class="router-view" :class="{ expand }"  ref="router_view_container">
        <RouterView /> 
        <scrollTop :containerRef="router_view_container"  :from-top="50" />
      </div>
    </div>
  </template>
</template>

<style scoped lang="scss">
  @import './style/main-container.scss';
</style>