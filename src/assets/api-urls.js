// these are every urls used in the app 
// "getProfile": "/user/:param1" // when you need to pass params to the url
export default  {
  "auth": {
    // "signUp": {url:"/auth/register",method:'post'},
    "login": {url:"/user/sign_in",method: 'post'},
    "getProfile": {url:"/user/get_me",method: 'get'},
    "updateMe": {url:"/user/update_me",method: 'post'},
    "updatePassword": { url: "/user/update_password",method: 'post' },
    "updatePhoneNumber": {url:"/user/update_phoneNumber",method: 'post'}
  },
  "user":{
    "getList": {url:"/user",method: 'get'},
  },
  "pateint": {
    "searchPateint": {url:"/pateint/search",method: 'get',handle_api_err_globally:true},
    "getArchive": { url: "/pateint_archive/:param1",method:'get',handle_api_err_globally:true},
    "registerPateint": { url: "/pateint/register_pateint/",method:'post'}
  },
  "custom_invoice": {
    "create": {url:"/custom_invoice",method: 'post'},
    "getList": {url:"/custom_invoice",method: 'get',handle_api_err_globally:true}
  },
  "invoice":{
    "getList": {url:"/invoice",method: 'get',handle_api_err_globally:true},
  },
  "credit":{
    "getList": {url:"/credit",method: 'get',handle_api_err_globally:true},
  },
  "deposite":{
    "getList": {url:"/deposite",method: 'get',handle_api_err_globally:true},
  },
  "insurance":{
    "create": {url:"/insurance",method: 'post'},
    "getList": {url:"/insurance",method: 'get'},
    "get_insurance_invoices": {url:"/insurance/invoices",method: 'get'},
  }
}