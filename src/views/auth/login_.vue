<script setup>
//comps
import R_input_one from '../../components/form/R-input-one.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
// composables
import { useUserInput } from '../../composables/user-input'
import { use_apicalls_from_store } from '../../composables/store-apicalls';

const { form,onSubmitDyn } = useUserInput(login)
const { apicall_from_store,apicall_from_store_response,apicall_from_store_loading } = use_apicalls_from_store()

function login (){ apicall_from_store('auth','auth-login',{ onSucSaveTheJsonOn: 'logged_in_user', data:form.value }) }

</script>

<template>
  <div  class="container">
    <div class="form-container">
      <img src="/src/assets/pictures/clinic logo.png" alt="clinic logo" class="logo" loading="lazy" decoding="async">
      <R_input_one class="input" 
      :id="`${1}`"
      :type="'string'"  
      :placeholder="'PhoneNumber'" 
      :validations="['rq']"
      :validateOn="'onSubmit'"
      :onSubmitDyn="onSubmitDyn"
      @inputVal="form.phoneNumber = $event"
      :pre-val="'0945065780'"
      />
      <R_input_one class="input" 
      :id="`${2}`"
      :type="'password'"  
      :placeholder="'Password'" 
      :validations="['rq']" 
      :validateOn="'onSubmit'"
      :onSubmitDyn="onSubmitDyn"
      @inputVal="form.userPassword = $event "
      />
      <custom_btn_1  :spinner="{color: '#fff',width: '1rem'}" 
      :loading_state="apicall_from_store_loading" 
      :err-msg-display="apicall_from_store_response.errMessage"
      @btn="onSubmitDyn = Math.random()"
      > LOG IN </custom_btn_1>
      
    </div>
  </div>
</template>
<style scoped lang="scss">
@import './style/login.scss';
</style>