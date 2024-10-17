<script setup>
//comps
import MazTabs from 'maz-ui/components/MazTabs';
import MazTabsBar from 'maz-ui/components/MazTabsBar';
import MazTabsContent from 'maz-ui/components/MazTabsContent';
import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem';
import RInputOne from '@/components/form/R-input-one.vue';
import insuranceDiscount from '@/components/finance/insurance-discount.vue';
import custom_btn_1 from '@/components/Reusable/button/custom_btn_1.vue';
//compoasbles
import { useUserInput } from '@/composables/user-input';
import { use_apicalls_from_store } from '@/composables/store-apicalls';
// vue
import { onMounted } from 'vue';

const { form,onSubmitDyn } = useUserInput(register_insurance)

const { apicall_from_store,apicall_from_store_loading,apicall_from_store_response } = use_apicalls_from_store()
const tabs = ['info','discount info','address']
//onMounted the indicator for active tab is not being shown .... give it some width and height
onMounted(()=>{
  const active_tab_indicator =  document.querySelector('.m-tabs-bar__indicator')
  const active_tab = document.querySelector('.--active.m-tabs-bar__item')
  active_tab_indicator.style.width = `${active_tab.clientWidth}px`;
  active_tab_indicator.style.height = `${active_tab.clientHeight}px`;
})
// adding the insurance-discount form to be sent to the apicall
const add_insuranceDiscount_toform = (insuranceDiscountForm)=>{
    let newForm = {...form.value,...insuranceDiscountForm}
    form.value = newForm
}
// register_pateint
function register_insurance (){
    apicall_from_store('insurance','insurance-create',{  token: true,data: {...form.value}})
}

</script>

<template>
    <div class="route-container">
        <h4 class="head">insurance registration</h4>
        <MazTabs class="tabs-container">
            <MazTabsBar :items="tabs" class="tabs_bar" />
            <MazTabsContent class="tabs-content-container">
                <MazTabsContentItem :tab="1" class="maz-py-4">
                    <RInputOne :id="'7213'" class="RInputOne"
                        :type="'text'" 
                        :placeholder="'company_name'"    
                        :label="'company_name'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.company_name = $event"
                    />
                    <RInputOne :id="'72132'" class="RInputOne"
                        :type="'number'" 
                        :placeholder="'insurance_number'"    
                        :label="'insurance_number'"
                        :onSubmitDyn="onSubmitDyn"
                        :validations="['rq']"
                        @inputVal="form.insurance_number = $event"
                    />
                </MazTabsContentItem>
                <MazTabsContentItem :tab="2" class="maz-py-4">
                    <insuranceDiscount
                        :submit_dyn="onSubmitDyn"
                        @discount-form="add_insuranceDiscount_toform"
                    />
                </MazTabsContentItem>
                <MazTabsContentItem :tab="3" class="maz-py-4">
                    <RInputOne :id="'721322'" class="RInputOne"
                    :type="'text'" 
                    :placeholder="'phone_number'"    
                    :label="'phone_number'"
                    :onSubmitDyn="onSubmitDyn"
                    :validations="['rq']"
                    @inputVal="form.phone_number = $event"
                    />
                    <RInputOne :id="'721321'" class="RInputOne"
                    :type="'email'" 
                    :placeholder="'email'"    
                    :label="'email'"
                    :onSubmitDyn="onSubmitDyn"
                    :validations="[]"
                    @inputVal="form.email = $event"
                    />
                </MazTabsContentItem>
            </MazTabsContent>
        </MazTabs>
        <custom_btn_1 class="custom_btn_1" :style="{left: `${manuall_btnOffset}px`}"
            :spinner="{color: '#fff',width: '1rem'}" 
            :loading_state="apicall_from_store_loading" 
            :errMsgDisplay="apicall_from_store_response.errMessage"
            @btn="onSubmitDyn = Math.random()"
        >register insurance</custom_btn_1> 
    </div>
</template>

<style scoped lang="scss">
@import './style/health-insurance-registeration.scss';
</style>