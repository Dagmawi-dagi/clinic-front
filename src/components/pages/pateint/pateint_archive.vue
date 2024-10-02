<script setup>
//assets
import listHeads from '../../../assets/data_list/list_heads'
//comps
import data_list from '../../features/data list/data_list.vue';
import personalData from '../../pateint/personal-data.vue';

defineProps({
  pateint_archive: Object
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
  <div class="pateint-archive-container">
    <!-- {{pateint_archive?.pateint}} -->
    <div class='info-container' style="margin-top: 0;">
      <h5  class="header" style="display: flex;">pateint personal data
        <span class="pateint-card">
          card
          <span class="active">active</span> 
          <span class="expired">expired</span> 
        </span>
      </h5>
      <personalData  :pateint="pateint_archive?.pateint" />
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="pateint_archive?.emergency_contacts"
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


    <div class='info-container'>
      <data_list class="data_list"
        :list_items="pateint_archive?.warnings"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.warning_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.warning_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">warning</h5>
        </template>
      </data_list>
    </div>


    <div class='info-container'>
      <data_list class="data_list"
        :list_items="pateint_archive?.invoices"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.invoice_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.invoice_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">invoices</h5>
        </template>
      </data_list>
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="pateint_archive?.credites"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.credit_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.credit_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">credites</h5>
        </template>
      </data_list>
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="pateint_archive?.deposites"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.deposites_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.deposites_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">deposites</h5>
        </template>
      </data_list>
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="[]"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.health_insurance_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.health_insurance_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">health insurance</h5>
        </template>
      </data_list>
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="pateint_archive?.external_medical_docs.filter(file=> file.scanned_docs.length >0)"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.external_medical_docs_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.external_medical_docs_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">external medical docs</h5>
        </template>
      </data_list>
    </div>


    <div class='info-container'>
      <data_list class="data_list"
        :list_items="[]"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.appointments_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.appointments_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">appointments</h5>
        </template>
      </data_list>
    </div>

    <div class='info-container'>
      <data_list class="data_list"
        :list_items="[]"
        :with_list_filter_search="true"
        :with_list_head="true"
        :raws_container_margin="'5px 0'"

        :list_filter_search="{size:'sm',filter_bool: false,filterArray:[],search_bool: false}"
        :list_head="{size:'sm',heads:listHeads.appointments_heads}"
        :list_raw="{size:'sm',resize:false,heads:listHeads.appointments_heads,utils:['a','b','c']}"

        @filter="filter_search"  
        @search="filter_search"
        @util="util"
        @raw="raw"
        @raw_item="raw_item"
      >
        <template #list_filter_search>
          <h5  class="header">prescriptions</h5>
        </template>
      </data_list>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import './style/pateint_archive.scss';
</style>