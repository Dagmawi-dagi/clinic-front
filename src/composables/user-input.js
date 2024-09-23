import { validateInput } from '../util/user-Input-validator'
import { ref,watch } from 'vue';


export const useUserInput = (submitFunc)=>{

  //--------------------------used on the comp that work with inputs form-------------------//
  const form = ref({}) // will hold all the form inputs
  const resetVal = ref({dyn : null,id: null}) // Maths random and the id of the input comp should be passed to reset the input vals
  // when clicking "submit btn" on the form we need to check the validity of every form inputs to procceed (submit funtion call)..
  // which is the funtion that will be called if the validations for all the form inputs have passed
  const onSubmitDyn =  ref(null) // Maths random should be given to simulate an event
  // we need to wait a little for the form inputs to get thier validationResult
  // and the call the submit function if the validation for every form inputs have passed 
    watch(onSubmitDyn,()=>{
      setTimeout(() => {
        for (const field in form.value) {
          if( form.value[field].validationFailed ) return
        }
        submitFunc()
      }, 300);
    })

  //-----------------------------------------------------------------------------------------//

  //------------------------------used on the Reusable inputs comps--------------------------//
  const validation_result =  ref({})

  const validate_userinput_emitval = (inputType,inputVal,inputName,validations,emits)=>{
    validateInput({inputType, inputVal,inputName}, validations,( validationResult )=>{
      emits('inputVal', validationResult ) // will be error obj Or if validation passed { err: false, userinput:value }
      validation_result.value = validationResult
    })
  }
  //----------------------------------------------------------------------------------//
    
  return{
    onSubmitDyn,
    resetVal,
    form,

    validate_userinput_emitval,
    validation_result
  }

}