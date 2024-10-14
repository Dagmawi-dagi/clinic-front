import { DialogToast } from 'v-dialogs'
export const global_apicall_error_handler = (err)=>{
  DialogToast(err.response.data.errMessage ?? err.message,{
    messageType:'error',
    closeButton:true,
    placement:'top-right',
    duration:1000*60,
    customClass: 'global_error',
  })
}