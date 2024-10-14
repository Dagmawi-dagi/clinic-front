<script setup>
//comps
import RInputOne from '../form/R-input-one.vue';
import custom_btn_1 from '../Reusable/button/custom_btn_1.vue';
//vue 
import { ref,watch } from 'vue';

const form = ref({
    discount_form:{}
})
const emits = defineEmits(['discount-form'])
const props =  defineProps({ submit_dyn: Number})
// under the input we need space for displaying validation errors for the inputs
// but we only need the space if we have error to be displayed
// so on submit btn seTimeout to 400 for the input validation to arrive and create the space we need to display them
// and emit the form and add it the the main form
const showErrors =  ()=>{
    setTimeout(() => {
        const errMsgs = document.querySelectorAll('.info')
        if(errMsgs){
            errMsgs.forEach(el => {
                if(el.innerHTML.includes('err-msg'))  el.classList.add('err_space')
                else  el.classList.remove('err_space')
            });
        }
        // emit the form to be added to the main form
        emits('discount-form',form.value)
    }, 300);
}
watch(()=> props.submit_dyn ,()=>{ showErrors() })
</script>

<template>
    <div>
        <p class="info">laboratory
            <RInputOne class="RInputOne" :id="'9809'"
                :label="'Percent'"
                :labelDisplay="'inline'"
                :type="'text'"
                :onSubmitDyn="submit_dyn"
                :validations="['rq']"
                :validateOn="'onSubmit'"
                @inputVal="form.discount_form.laboratory = $event"
            /> 
            <custom_btn_1 class="custom_btn_1" :style="{left: `${manuall_btnOffset}px`}"
                :spinner="{color: '#fff',width: '1rem'}" 
                :loading_state="false" 
                @btn="()=>{}"
            >Manually for each services</custom_btn_1> 
        </p>
        <p class="info">ultrasound
            <RInputOne class="RInputOne" :id="'98099'"
                :label="'Percent'"
                :labelDisplay="'inline'"
                :type="'text'"
                :onSubmitDyn="submit_dyn"
                :validations="['rq']"
                :validateOn="'onSubmit'"
                @inputVal="form.discount_form.ultrasound = $event"
            />
            <custom_btn_1 class="custom_btn_1" :style="{left: `${manuall_btnOffset}px`}"
                :spinner="{color: '#fff',width: '1rem'}" 
                :loading_state="false" 
                @btn="()=>{}"
            >Manually for each services</custom_btn_1> 
        </p>
        <p class="info">xray
            <RInputOne class="RInputOne" :id="'98097'"
                :label="'Percent'"
                :labelDisplay="'inline'"
                :type="'text'"
                :onSubmitDyn="submit_dyn"
                :validations="['rq']"
                :validateOn="'onSubmit'"
                @inputVal="form.discount_form.xray = $event"
            />
            <custom_btn_1 class="custom_btn_1" :style="{left: `${manuall_btnOffset}px`}"
                :spinner="{color: '#fff',width: '1rem'}" 
                :loading_state="false" 
                @btn="()=>{}"
            >Manually for each services</custom_btn_1> 
        </p>
        <p class="info">nurse-care
            <RInputOne class="RInputOne" :id="'98096'"
                :label="'Percent'"
                :labelDisplay="'inline'"    
                :type="'text'"
                :onSubmitDyn="submit_dyn"
                :validations="['rq']"
                :validateOn="'onSubmit'"
                @inputVal="form.discount_form.nursecare = $event"
            />
            <custom_btn_1 class="custom_btn_1" :style="{left: `${manuall_btnOffset}px`}"
                :spinner="{color: '#fff',width: '1rem'}" 
                :loading_state="false" 
                @btn="()=>{}"
            >Manually for each services</custom_btn_1> 
        </p>
        <p class="info">surgry
            <RInputOne class="RInputOne" :id="'98093'"
                :label="'Percent'"
                :labelDisplay="'inline'"
                :type="'text'"
                :onSubmitDyn="submit_dyn"
                :validations="['rq']"
                :validateOn="'onSubmit'"
                @inputVal="form.discount_form.surgry = $event"
            />
            <custom_btn_1 class="custom_btn_1" :style="{left: `${manuall_btnOffset}px`}"
                :spinner="{color: '#fff',width: '1rem'}" 
                :loading_state="false" 
                @btn="()=>{}"
                >Manually for each services</custom_btn_1> 
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import './style/insurance-discount.scss';

</style>