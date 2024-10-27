<script setup>
//assets
import { pateints_heads } from '../../assets/data_list/list_heads';
// comps  
import dataList from '../../components/features/data list/data_list.vue';
//composable
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// store
import { use_pateint_store } from '../../stores/pateint/pateint'
import { storeToRefs } from 'pinia';

const { pateints,page,perPage } =  storeToRefs(use_pateint_store());
const { apicall_from_store,apicall_from_store_loading } = use_apicalls_from_store();

const filter_search  = ()=>{ console.log('filter_search')}
const util  = (evt)=>{ console.log('util',evt);}
const raw_item  = ()=>{ console.log('raw_item');}
// handling on reload based on the route queary parametart
apicall_from_store( 'pateint','pateint-searchPateint',{ token: true, queryObj : { perPage:perPage.value, page:page.value   , populate: 'pateint_archive' }, onSucSaveTheJsonOn: 'pateints'} )
</script>
<template>
    <dataList class="data_list"
      :data_loading="apicall_from_store_loading"

      :list_items="pateints"
      :with_list_filter_search="true"
      :with_list_head="true"
      :raws_container_margin="'100px 0 0 0'"

      :list_filter_search="{size:'lg',filter_bool: true,filterArray:[],search_bool:false}"
      :list_head="{size:'lg',heads:pateints_heads}"
      :list_raw="{size:'lg',resize:true,heads:pateints_heads,utils:['aa','b','c']}"

      @filter="filter_search"  
      @search="filter_search"
      @util="util"
      @raw="$router.push({name: 'pateint',params: {id: $event.pateint_archive._id}})"
      @raw_item="raw_item"
      >
      <template #list_filter_search>
        <h1 class="dataList_head">pateints</h1>
      </template>
      </dataList>
</template>
<style lang="scss" scoped>
@import '../../style/global.scss';
</style>