<script setup>
//composables
import { use_apicalls_from_store } from '../../composables/store-apicalls';
// comps
import pateintArchive from "@/components/pages/pateint/pateint_archive.vue";
// store
import { use_pateint_store } from '../../stores/pateint/pateint';
import { storeToRefs } from 'pinia';

const { pateint_archive } = storeToRefs( use_pateint_store() )
const { apicall_from_store } = use_apicalls_from_store()
apicall_from_store('pateint','pateint-getArchive',{ 
  param1:'66b9ca0c6fd0a187c5732990', 
  token:true,
  onSucSaveTheJsonOn:'pateint_archive'
})
</script>

<template>
  <pateintArchive  :pateint_archive="pateint_archive" />
</template>