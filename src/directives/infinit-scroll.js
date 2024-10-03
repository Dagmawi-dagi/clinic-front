// composables
import { useInfiniteScroll } from '@vueuse/core';
// store
import { use_util_store } from '@/stores/util-store';
import { storeToRefs } from 'pinia';
import { use_stores_refs } from '../composables/stores-ref';
import { use_apicalls_from_store } from '../composables/store-apicalls';
//vue
import { ref } from 'vue';

export const vInfinitScroll = {
  infinitScrollLoading: ref(false),

  mounted: function (el,options)  {
    const distance = options.value.distance
    const container_element = ()=>{
      if( options.value.custom_el ){
        const { router_view_container } = storeToRefs(use_util_store())
        if( options.value.custom_el === 'router_view' ) return router_view_container.value
        else return options.value.custom_el
      }
      return el
    } 

    // console.log(container_element());
    
    const { stores } = use_stores_refs()
    const { apicall_from_store } = use_apicalls_from_store()

    useInfiniteScroll(container_element(), async ()=>{

      const scrollHeight =  container_element.scrollHeight 
      const clientHeight = container_element.clientHeight 
      // we only want to do pagination if the container is on a 'vertically overflow' mood 
      if(scrollHeight <= clientHeight ) return
      console.log('infinit scroll');
      vInfinitScroll.infinitScrollLoading.value = true
      // the pagination datas 
      const store =  options.value.store;
      const urlRef = options.value.urlRef;
      const onSucSaveTheJsonOn = options.value.onSucSaveTheJsonOn;
      //  get the page and perPage Form the store of the caller
      const { page,perPage } =  storeToRefs (stores[store])
  
      await apicall_from_store( store,urlRef,{
        mock:{
          delay: 4000,
          succ: true
        },
        list: true,
        fresh:false, 
        more: true,  
        queryObj : { page: page.value++, perPage: perPage.value},
        onSucSaveTheJsonOn,
        token: true 
      })
      .then(()=>{
        console.log('infinit scroll result');
        vInfinitScroll.infinitScrollLoading.value = false
      })
    },{distance})
  
  },
}