<script setup>
//composables
import { use_apicalls_from_store } from '../../composables/store-apicalls';
// comps
import employee_archive from "@/components/pages/employee/employee_archive.vue";
// store
import { use_pateint_store } from '../../stores/pateint/pateint';
import { storeToRefs } from 'pinia';

const { pateint_archive } = storeToRefs( use_pateint_store() )

// const { apicall_from_store } = use_apicalls_from_store()
// apicall_from_store('pateint','pateint-getArchive',{ param1:'66b9ca0c6fd0a187c5732990', token:true,onSucSaveTheJsonOn:'pateint_archive'}).then((res)=>{
//   console.log(res);
// })

</script>

<template>
  <employee_archive
    :employee_archive="{}"
  />
</template>

<style scoped lang="scss">
</style>