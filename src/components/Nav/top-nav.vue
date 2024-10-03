<script setup>
// comps
import RInputOne from '../form/R-input-one.vue';
import custom_btn_1 from '../Reusable/button/custom_btn_1.vue';
// composables
import { useUserInput } from '@/composables/user-input'
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// store
import { use_pateint_store } from '../../stores/pateint/pateint';
import { storeToRefs } from 'pinia';

const { apicall_from_store,apicall_from_store_loading,apicall_from_store_response } = use_apicalls_from_store();
const { onSubmitDyn,form } = useUserInput(search);
const { page, perPage } = storeToRefs(use_pateint_store());

function search() {
  //  since any of the "form" values are not required remove the ones that Don't have any value
  Object.keys(form.value).forEach(key => { if (!form.value[key])   delete form.value[key] });
  //  if there is no value in any of the form keys
  if (Object.keys(form.value).length === 0) return;
  apicall_from_store('pateint','pateint-searchPateint',{
    token: true, 
    list: true,
    fresh:true, 
    more: false,  
    queryObj : { page: page.value, perPage: perPage.value,...form.value }, // send the search form as query object
    onSucSaveTheJsonOn: 'pateints',
  })
}
</script>

<template>
  <nav>
    <div class="container">
      <div class="company"  @click="$router.push('/')" >
        <img src="/src/assets/clinic logo.png" class="logo">
        <span class="name">My Clinic</span>
      </div>
      <div class="search-container">
        <RInputOne :id="'1'" :type="'text'" :validations="[]" :submit-dyn="onSubmitDyn" @input-val="form.first_name = $event" :label="'FirstName'" :label-display="'inline'" :placeholder="'FirstName'"  class="input" />
        <RInputOne :id="'2'" :type="'text'" :validations="[]" :submit-dyn="onSubmitDyn" @input-val="form.middle_name = $event" :label="'MiddleName'" :label-display="'inline'" :placeholder="'MiddleName'"  class="input" />
        <RInputOne :id="'3'" :type="'text'" :validations="[]" :submit-dyn="onSubmitDyn" @input-val="form.last_name = $event" :label="'LastName'" :label-display="'inline'" :placeholder="'LastName'"  class="input" />
        <RInputOne :id="'4'" :type="'text'" :validations="[]" :submit-dyn="onSubmitDyn" @input-val="form.MRN = $event" :label="'MRN'" :label-display="'inline'" :placeholder="'MRN'"  class="input" />
        <RInputOne :id="'5'" :type="'text'" :validations="[]" :submit-dyn="onSubmitDyn" @input-val="form.age = $event" :label="'Age'" :label-display="'inline'" :placeholder="'Age'"  class="input" />
      </div>
      <div class="search-btn-container">
        <custom_btn_1  class="search-btn" 
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="apicall_from_store_loading"
        :err-msg-display="apicall_from_store_response?.errMessage"
        @btn="onSubmitDyn = Math.random()"
        > 
        search pateint 
        </custom_btn_1>
        <custom_btn_1  class="search-btn" 
        :spinner="{color: '#fff',width: '1rem'}" 
        :loading_state="apicall_from_store_loading"
        :err-msg-display="apicall_from_store_response?.errMessage"
        @btn="onSubmitDyn = Math.random()"
        > 
        search employee 
        </custom_btn_1>
      </div>
     
    </div>
  </nav>
</template>
<style scoped lang="scss">
@import './style/top-nav.scss';
</style>