<script setup>
//comps
import MazTabs from 'maz-ui/components/MazTabs'
import MazTabsBar from 'maz-ui/components/MazTabsBar'
import MazTabsContent from 'maz-ui/components/MazTabsContent'
import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem'
import custom_btn_1 from '../Reusable/button/custom_btn_1.vue'
//vue
import { onMounted } from 'vue';

defineProps({
  pateint: Object,
})

const tabs = ['personal info ','address info',' medical adminstration info']
//on omunted the indicator for active tab is not being shown .... give it some width and height
onMounted(()=>{
  const active_tab_indicator =  document.querySelectorAll('.m-tabs-bar__indicator')[0]
  const active_tab = document.querySelector('.--active.m-tabs-bar__item')
  if(active_tab_indicator){
    active_tab_indicator.style.width = `${active_tab.clientWidth}px`;
    active_tab_indicator.style.height = `${active_tab.clientHeight}px`;
  }
})

const a =  (evt)=>{
  console.log(evt);
}

</script>

<template>
  <MazTabs class="tabs-container">
    <MazTabsBar :items="tabs" class="tabs_bar"/>
    <MazTabsContent >
      <MazTabsContentItem :tab="1" class="maz-py-4" >
        <p class="info">first_name  <span class="info-content">{{ pateint?.first_name }}</span></p>
        <p class="info">middle_name <span class="info-content">{{ pateint?.middle_name }}</span></p>
        <p class="info">last_name <span class="info-content">{{ pateint?.last_name }}</span></p>
        <p class="info">Age <span class="info-content">{{ pateint?.Age }}</span></p>
        <p class="info">gender <span class="info-content">{{ pateint?.gender }}</span></p>
        <p class="info">marital_status <span class="info-content">{{ pateint?.marital_status }}</span></p>
        <p class="info">religion <span class="info-content">{{ pateint?.religion }}</span></p>
        <p class="info">occupation <span class="info-content">{{ pateint?.occupation }}</span></p>
      </MazTabsContentItem>
      <MazTabsContentItem :tab="2" class="maz-py-4">
        <p class="info">phone_number <span class="info-content">{{ pateint?.phone_number }}</span></p>
        <p class="info">country <span class="info-content">{{ pateint?.country }}</span></p>
        <p class="info">region <span class="info-content">{{ pateint?.region }}</span></p>
        <p class="info">wereda <span class="info-content">{{ pateint?.wereda }}</span></p>
        <p class="info">zone <span class="info-content">{{ pateint?.zone }}</span></p>
        <p class="info">kebele <span class="info-content">{{ pateint?.kebele }}</span></p>
      </MazTabsContentItem>
      <MazTabsContentItem :tab="3" class="maz-py-4">
        <p class="info">pateint type <span class="info-content">{{ pateint?.type }}</span></p>
        <p class="info">insurance <span class="info-content">{{ pateint?.insurance_company }}</span></p>
        <p class="info">invoice destination <span class="info-content">{{ pateint?.invoice_destination }}</span></p>
      </MazTabsContentItem>
    </MazTabsContent>
  </MazTabs>
    <custom_btn_1  :spinner="{color: '#fff',width: '1rem'}" :loading_state="true" @btn="a($event)"> Edit </custom_btn_1>
</template>

<style scoped lang="scss">
@import './style/personal-data.scss';
</style>