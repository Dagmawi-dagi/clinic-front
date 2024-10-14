import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_custom_invoice_store= defineStore('custom_invoice-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['create','getList']
  const custom_invoice_store_apicalls_statusholder_obj = ref({})
  const custom_invoices = ref([])

  return {
    api_calls,
    custom_invoice_store_apicalls_statusholder_obj,
    
    custom_invoices
  }

})