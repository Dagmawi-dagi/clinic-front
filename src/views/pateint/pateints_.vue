<script setup>
//assets
import { pateints_heads } from '../../assets/data_list/list_heads';
// comps  
import dataList from '../../components/features/data list/data_list.vue';
//composable
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// router
import { useRoute } from 'vue-router';
// store
import { use_pateint_store } from '../../stores/pateint/pateint'
import { storeToRefs } from 'pinia';

const { pateints } =  storeToRefs(use_pateint_store());
const { apicall_from_store } = use_apicalls_from_store();
const route = useRoute();

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
// handling on reload based on the route queary parametart
apicall_from_store( 'pateint','pateint-searchPateint',{ token: true, queryObj : { ...route.query }, onSucSaveTheJsonOn: 'pateints'})

</script>
<template>
    <dataList class="data_list"
      :list_items="pateints"
      :with_list_filter_search="true"
      :with_list_head="true"
      :raws_container_margin="'100px 0 0 0'"

      :list_filter_search="{size:'lg',filter_bool: true,filterArray:[],search_bool:false}"
      :list_head="{size:'lg',heads:pateints_heads}"
      :list_raw="{size:'lg',resize:true,heads:pateints_heads,utils:['a','b','c']}"

      @filter="filter_search"  
      @search="filter_search"
      @util="util"
      @raw="raw"
      @raw_item="raw_item"
      />
</template>
<style lang="scss" scoped>
</style>