//stores
import { use_user_store } from '../stores/user';
import { use_auth_store } from '../stores/auth';
import { use_pateint_store } from '../stores/pateint/pateint';
import { use_employee_store } from '../stores/employee/employee';
import { use_custom_invoice_store } from '../stores/finance/custom_invoice';
import { use_invoice_store } from '../stores/finance/invoice';
import { use_credit_store } from '../stores/finance/credit';
import { use_deposite_store } from '../stores/finance/deposite';
import { use_insurance_store } from '../stores/finance/insurance';

export const use_stores_refs = ()=>{
  // stores reference 
  // you must add any newly created store after created
  const stores = {
    'user': use_user_store(),
    'auth': use_auth_store(),
    'pateint': use_pateint_store(),
    'employee': use_employee_store(),
    'invoice': use_invoice_store(),
    'credit': use_credit_store(),
    'deposite': use_deposite_store(),
    'insurance':use_insurance_store(),
    'custom_invoice':use_custom_invoice_store()
  }
  
  // init the stores ApiCalls status holder reactive Object
  // should be inited on App.vue is started
  const init_stores = ()=>{
    // for every Api calls from any store we have an obj that stores the ApiCall State ( fetching,succ,err )
    // init every stores Apicalls Status holder
    for (const key in stores) {
      const store = stores[key]
      store['api_calls'].forEach(callId => {
        store[`${key}_store_apicalls_statusholder_obj`][callId] = {
          fetching: false,
          succ: false,
          err: null,
        }
      });
    }
  }

  // reset ApiCall Status holder Object when ever you want
  const reset_apicall_status_holder = (storeName,ApiCallHolder)=>{
    const store = stores[storeName]
    if(ApiCallHolder === 'all'){
      store.apiCalls.forEach(callId => {
        store[`${storeName}_store_apicalls_statusholder_obj`][callId] = {
          fetching: false,
          succ: false,
          err: null,
        }
      });
      return
    }
      store[`${storeName}_store_apicalls_statusholder_obj`][ApiCallHolder].fetching = false
      store[`${storeName}_store_apicalls_statusholder_obj`][ApiCallHolder].succ = false
      store[`${storeName}_store_apicalls_statusholder_obj`][ApiCallHolder].err = null
  }

  return{
    stores,
    init_stores,
    reset_apicall_status_holder
  }

}