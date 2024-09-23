<script setup>
//comps
import R_input_one from '../../components/form/R-input-one.vue';
import errDisplay from '../../components/Reusable/err-display.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
// composables
import { useUserInput } from '../../composables/user-input'
import { use_apicalls_from_store } from '../../composables/store-apicalls';
// router
import { useRouter } from 'vue-router';
// store 
import { use_auth_store } from '../../stores/auth';
import { storeToRefs } from 'pinia';

const { form,onSubmitDyn } = useUserInput(login)
const { apicall_from_store,response } = use_apicalls_from_store()
const { logged_in_user  } = storeToRefs( use_auth_store() )
const router = useRouter()

function login (){
  apicall_from_store('auth','auth-login',{ onSucSaveTheJsonOn: 'logged_in_user', data:form.value })
  .then(res=>{ 
    response.value = res
    if(res?.status === 200) {
      window.localStorage.setItem('token',logged_in_user.value.token) 
      router.push('/')
    }
  })
}

</script>

<template>
  <div  class="container">
    <div class="form-container">
      <img src="/src/assets/clinic logo.png" alt="clinic logo" class="logo" loading="lazy" decoding="async">
      <R_input_one class="input" 
      :id="`${1}`"
      :type="'string'"  
      :placeholder="'PhoneNumber'" 
      :validations="['rq']"
      :validateOn="'onSubmit'"
      :onSubmitDyn="onSubmitDyn"
      @inputVal="form.phoneNumber = $event "
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
      <custom_btn_1  :spinner="{color: '#fff',width: '1rem'}" :loading_state="true" @btn="onSubmitDyn = Math.random()"> LOG IN </custom_btn_1>
      <errDisplay v-if="response?.status != 200"
      class="err"
      :err="response?.data.errMessage ? true : false"  
      :err-msg="response?.data.errMessage"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import './style/login.scss';
</style>