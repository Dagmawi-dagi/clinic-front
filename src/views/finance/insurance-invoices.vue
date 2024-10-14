<script setup>
//assets
import { invoice_head } from '../../assets/data_list/list_heads';
// comps  
import dataList from '../../components/features/data list/data_list.vue';
//composable
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// router
import { useRoute } from 'vue-router';
// store
import { use_insurance_store } from '../../stores/finance/insurance'
import { storeToRefs } from 'pinia';
// vue
import { computed } from 'vue';

const { insurance_invoices } =  storeToRefs(use_insurance_store());
const { apicall_from_store,apicall_from_store_loading } = use_apicalls_from_store();
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
apicall_from_store( 'insurance','insurance-get_insurance_invoices',{ token: true, queryObj : { ...route.query }, onSucSaveTheJsonOn: 'insurance_invoices'})

// get all theinovice of every company
const invoices = computed(()=>{
    const allInvoices = [];
    for (const company of insurance_invoices.value) {
        allInvoices.push(...company.invoices); // Spread operator to add each invoice
    }
    return allInvoices
})

</script>
<template>
    <dataList class="data_list"
      :data_loading="apicall_from_store_loading"

      :list_items="invoices"
      :with_list_filter_search="true"
      :with_list_head="true"
      :raws_container_margin="'100px 0 0 0'"

      :list_filter_search="{size:'lg',filter_bool: true,filterArray:[],search_bool:false}"
      :list_head="{size:'lg',heads:invoice_head}"
      :list_raw="{size:'lg',resize:true,heads:invoice_head,utils:['a','b','c']}"

      @filter="filter_search"  
      @search="filter_search"
      @util="util"
      @raw="raw"
      @raw_item="raw_item"
      >
      <template #list_filter_search>
        <h1 class="dataList_head">insurance invoices</h1>
      </template>
      </dataList>
</template>
<style lang="scss" scoped>
@import '../../style/global.scss';
</style>