<script setup>
//assets
import listHeads from '../../../assets/data_list/list_heads'
//comps
import data_list from '../../features/data list/data_list.vue';

defineProps({
  employee_archive: Object
})

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
  <div class="employee-archive-container">

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="employee_archive?.emergency_contacts"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.emergency_contacts_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.emergency_contacts_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">emergency contact</h5>
        </template>
      </data_list>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import './style/employee_archive.scss';
</style>