<script setup>
//assets
import { a_heads } from '../assets/data_list/list_heads';
import { answersfilter }  from '../assets/data_list/list_filters';
// directives
import { vInfinitScroll } from '../directives/infinit-scroll';
// comps  
import dataList from '../components/features/data list/data_list.vue'
import spinner_ from '../components/Reusable/spinner_.vue'
// store
import { use_user_store } from '../stores/user'
import { storeToRefs } from 'pinia';

const { users } =  storeToRefs(use_user_store())

const filter_search  = ()=>{
  console.log('filter_search');
}

const util  = (evt)=>{
  console.log('util',evt);
}

const raw  = ()=>{
  console.log('raw');
}

const raw_item  = ()=>{
  console.log('raw_item');
}

</script>
<template>
  <div v-infinit-scroll="{ custom_el:'router_view',store: 'user', urlRef:'user-getList',method:'get',onSucSaveTheJsonOn:'users', distance: 20}">
    <!-- {{  vInfinitScroll.infinitScrollLoading }} -->
    <data-list class="data_list"
      :list_items="users"
      :with_list_filter_search="true"
      :with_list_head="true"
      :raws_container_margin="'100px 0 0 0'"

      :list_filter_search="{size:'lg',filter_bool: true,filterArray:answersfilter,search_bool:true}"
      :list_head="{size:'lg',heads:a_heads}"
      :list_raw="{size:'lg',resize:true,heads:a_heads,utils:['a','b','c']}"

      @filter="filter_search"  
      @search="filter_search"
      @util="util"
      @raw="raw"
      @raw_item="raw_item"
      />
    <spinner_  style="margin: 1rem auto;" :color="'var(--dark-red)'" :width="'2.2rem'" v-if="vInfinitScroll.infinitScrollLoading.value"  />
  </div>

</template>
<style lang="scss" scoped>
</style>