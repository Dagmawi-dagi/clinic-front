<script setup>
//comps
import listHead from './list_head.vue'
import listFilterSearch from './list_filter_search.vue'
import listRaw from './list_raw.vue';
import list_drawer from './list_drawer.vue';
// vue 
import { ref } from 'vue';

defineEmits(['filter','search','raw','raw_item','util'])

defineProps({
  list_items: Array,
  with_list_filter_search: Boolean,
  with_list_head: Boolean,
  raws_container_margin: String,

  list_filter_search:Object, // this object will hold all the needed props for the filter_search
  list_head:Object, // this object will hold all the needed props for the header
  list_raw:Object, // this object will hold all the needed props for the raw

})

const data_list_utils_dropdown_open = ref(null)

</script>
<template>
  <div>
    <div class="fixed">
      <list-filter-search  v-if="with_list_filter_search"  
        :size="list_filter_search.size"
        :filter_bool="list_filter_search.filter_bool" 
        :filterArray="list_filter_search.filterArray" 
        :search_bool="list_filter_search.search_bool" 
        @filter="$emit('filter',$event)"  
        @search="$emit('search',$event)"
      >
        <slot name="list_filter_search"></slot>
      </list-filter-search>
      
      <listHead v-if="with_list_head" 
      :size="list_head.size" 
      :list_head="list_head.heads" 
      />
    </div>

    <transition-group tag="div" name="list" :style="{margin:raws_container_margin}" >
      <template  v-for="(item,i) in list_items" :key="i" >
          <list-raw
          :resize="list_raw.resize"
          :size="list_raw.size"
          :list_head="list_raw.heads"
          :raw_items_object="item"
          :below_raw_content="'orerdfsfsdfsdf orerdfsfsdfsdf orerdfsfsdfsdf orerdfsfsdfsdf orerdfsfsdfsdforerdfsfsdfsdf orerdfsfsdfsdforerdfsfsdfsdf orerdfsfsdfsdf v orerdfsfsdfsdf orerdfsfsdfsdf orerdfsfsdfsdf orerdfsfsdfsdf'"
          :utils="list_raw.utils" 
          :utils_dropdown_open="data_list_utils_dropdown_open === i"
          @utils_toggler="data_list_utils_dropdown_open === i ?  data_list_utils_dropdown_open = '' : data_list_utils_dropdown_open = i "
          @util="$emit('util',$event)"
          @raw="$emit('raw',$event)"
          @raw_item="$emit('raw_item',$event)"
        />
      </template> 
    </transition-group >
  </div>
</template>
<style lang="scss" scoped>
@import '../../../style/variables';
.fixed{
  position: fixed;
  width: -webkit-fill-available;
  top: $top-nav-height;
  z-index: $zindex-top-nav;
}
</style>