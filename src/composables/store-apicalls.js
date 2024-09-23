import { global_apihandler  } from '../plugIn/axios/global-api-hadler';
//vue
import { ref } from 'vue';

export const  use_apicalls_from_store = ()=> {

  // this functions is for api-calls from pinia store 
    // apicall_from_store('storeName','urlRef for the Api call', { token: true, param1: '65c10c02fe9d2e1297bd4acc', data: data , other-options })
    // apicall_from_store('event','event-getlist',{ fresh:true, token: true, onSucSaveTheJsonOn: 'events',queryObj:{ asd: 'asd',dd:'22222',page: 1,perpage: 2}})

    // apicall_from_store( 'user' ,'user-getlist',{
    //     mock:{
    //       delay: 4000,
    //       succ: false
    //     },
    //     param1: '65c10c02fe9d2e1297bd4acc'
    //     list: true,
    //     fresh:false, 
    //     more: true,  
    //     queryObj : { page: page.value++, perPage: perPage.value,abc: 'asdasd' },
    //     onSucSaveTheJsonOn: 'users',
    //     token: true 
    //     data: {} // for the reqbody
    // })


  const response = ref(null)

  const apicall_from_store = (store,urlRef,options)=>{
      // urlRef ~ urlRef event-getlist

      // store_apicalls_statusholder_obj // get it using the `${store}_store_apicalls_statusholder_obj`
      // statusholder_obj_id // get the id from the urlRefString (split it - [1])
      

    // add other options you want to the GlobalApiHandler 
    function otherOptions (){
      const obj = {}
      if( options.mock ) obj.mock = options.mock // { delay: 4000,suc||err:true }
      return obj
    }

    return global_apihandler(urlRef,{
      store,
      store_apicalls_statusholder_obj: `${store}_store_apicalls_statusholder_obj`,
      statusholder_obj_id: `${urlRef}`.split('-')[1],
      ...options,
      ...otherOptions(),
    })
  }


  // if you want to cal api out side store ( from any where)
    // global_apihandler(event-getlist,options).then(()=>{  })

  return{
    apicall_from_store,
    response
  }

}
