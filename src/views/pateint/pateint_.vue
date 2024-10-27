<script setup>
//composables
import { use_apicalls_from_store } from '../../composables/store-apicalls';
// comps
import pateintArchive from "@/components/pages/pateint/pateint_archive.vue";
// router
import { useRoute } from 'vue-router';
// store
import { use_pateint_store } from '../../stores/pateint/pateint';
import { storeToRefs } from 'pinia';

const route = useRoute()
const { pateint_archive } = storeToRefs( use_pateint_store() )
const { apicall_from_store } = use_apicalls_from_store()
apicall_from_store('pateint','pateint-getArchive',{  param1:route.params.id, token:true,onSucSaveTheJsonOn:'pateint_archive'})
</script>
<template>
  <pateintArchive  :pateint_archive="pateint_archive" />
</template>