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
        const { router_view_container  } = storeToRefs(use_util_store())
        if( options.value.custom_el === 'router_view' ) return router_view_container.value
        // on the feature add other comps conditionaly
      }
      return el
    }

    const { stores } = use_stores_refs()
    const { apicall_from_store } = use_apicalls_from_store()

  useInfiniteScroll(container_element(), async function (){
      const scrollHeight =  container_element().scrollHeight 
      const clientHeight = container_element().clientHeight 
      // we only want to do pagination if the container is on a 'vertically overflow' mood 
      if(scrollHeight <= clientHeight ) return
      console.log('infinit scroll callling api');

      vInfinitScroll.infinitScrollLoading.value = true

      // the pagination datas 
      const store =  options.value.store_ref;
      const urlRef = options.value.url_ref;
      const onSucSaveTheJsonOn = options.value.onSucSaveTheJsonOn;
      const { page,perPage } =  storeToRefs (stores[store])

      // using the queryObj_ref passed to the options add the query to the api call
      const add_query = (queryObj_ref)=>{
        if( queryObj_ref === 'frontEnd_route' ) return options.value.route.query
        // add other queryObj_ref here as needeed like from local storage etc
      }

      await apicall_from_store( store,urlRef,{
        list: true,
        fresh:false, 
        more: true,  
        queryObj :  { page: page.value++, perPage: perPage.value,...add_query(options.value.queryObj_ref)},
        onSucSaveTheJsonOn,
        token: true 
      })
      .then(()=>{ vInfinitScroll.infinitScrollLoading.value = false })

    },{distance,interval:3000})
    // here the interval is really important cus after on call if the scroll distance is still as defined api will be called which may overwhelm the server
    // so we need to make the interval 2000 or more 
  },
}