<script setup>
//vue
import { ref,watch } from 'vue';

// no need for validation for 'checkbox' and 'radio' inputs
const emits = defineEmits(['inputVal'])
const props = defineProps({
  id: String,
  legend: String,
  inputname:String,
  checkboxOptions: Array, // ['op1','op2','op3',....]
  defaultCheckbox: Number, 
  onSubmitDyn: Number, // for on submit emit inputVal
})

// user can select or deselect multiple inputs
const userInput = ref([props.checkboxOptions[props.defaultCheckbox]])
watch(userInput,()=>{ emits('inputVal',{err:false , userInput:userInput.value}) })
watch(()=>props.onSubmitDyn ,()=>{ emits('inputVal',{err:false ,  userInput:userInput.value})})

</script>

<template>
  <div class="inputContainer" :id='`_${id}`'>
    <p>{{ legend }}</p>
    <template v-for="(checkboxOption, i) in checkboxOptions" :key="i">
      <input type="checkbox" :id="`checkBox${i}${checkboxOption}`" :name="inputname"  :value="checkboxOption" v-model="userInput"/>
      <label :for="`checkBox${i}${checkboxOption}`">{{ checkboxOption }}</label>
    </template>
  </div>
</template>
<style scoped lang="scss">
@import './style/R-checkbox.scss';
</style>